class Mouse {

    protected game:Game;

    public targetPoint;
    public attackPoint: BABYLON.AbstractMesh;
    public ball: BABYLON.Mesh;
    public flag: BABYLON.Mesh;
    public forward:boolean;
    public back:boolean;
    public left:boolean;
    public right:boolean;

    constructor(game: Game) {
        this.game = game;
    }

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let clickTrigger = false;
        let lastUpdate = new Date().getTime() / 1000;
        let ball = BABYLON.Mesh.CreateBox("mouseBox", 0.4, scene);

        let meshFlag = this.game.factories['flag'].createClone('Flag', false);
        meshFlag.visibility = 0;
        meshFlag.isPickable = false;
        meshFlag.parent = ball;
        meshFlag.scaling = new BABYLON.Vector3(0.3,0.3,0.3);
        this.flag = meshFlag;

        ball.actionManager = new BABYLON.ActionManager(scene);
        ball.isPickable = false;
        ball.visibility = 0;
        this.ball = ball;

        scene.onPointerUp = function (evt, pickResult) {
            if(clickTrigger) {
                clickTrigger = false;

                let pickedMesh = pickResult.pickedMesh;

                if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                    meshFlag.visibility = 1;
                }
            }
        }

        scene.onPointerDown = function (evt, pickResult) {
            let pickedMesh = pickResult.pickedMesh;
            if(self.game.player.isAttack || !self.game.player.isAlive) {
                return;
            }
            clickTrigger = true;

            if (pickedMesh) {
                if ((pickedMesh.name.search("Ground") >= 0)) {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    meshFlag.visibility = 0;

                    self.game.player.runPlayerToPosition(self.targetPoint);
                    self.game.client.socket.emit('setTargetPoint', {
                        position: self.targetPoint
                    });
                }

            }
        };

        scene.onPointerMove= function (evt, pickResult) {
            if(clickTrigger) {
                if(!self.game.player.isAlive) {
                    return;
                }
                let pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        self.ball.position = self.targetPoint;

                        self.game.player.runPlayerToPosition(self.targetPoint);

                        if(lastUpdate < (new Date().getTime() / 500)-0.3) {
                            lastUpdate = (new Date().getTime() / 500);
                            self.game.client.socket.emit('setTargetPoint', {
                                position: self.targetPoint
                            });
                        }
                    }
                }
            }
        };

    }



}
