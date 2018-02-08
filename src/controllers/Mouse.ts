/// <reference path="Controller.ts"/>

class Mouse extends Controller {

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let clickTrigger = false;

        let ball = BABYLON.Mesh.CreateBox("mouseBox", 0.4, scene);

        let meshFlag = this.game.factories['flag'].createInstance('Flag', false);
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
            clickTrigger = false;
        }
        
        scene.onPointerDown = function (evt, pickResult) {
            let pickedMesh = pickResult.pickedMesh;
            clickTrigger = true;

            if (pickedMesh) {
                if (self.game.player && pickedMesh.name.search("Ground") >= 0) {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    meshFlag.visibility = 1;

                    self.game.client.socket.emit('setTargetPoint', {
                        position: self.targetPoint,
                        playerPosition: self.game.player.mesh.position
                    });

                }

            }
        };

        scene.onPointerMove= function (evt, pickResult) {
            if(clickTrigger) {
                let pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        self.ball.position = self.targetPoint;
                        self.game.client.socket.emit('setTargetPoint', {
                            position: self.targetPoint,
                            playerPosition: self.game.player.mesh.position
                        });
                    }
                }
            }
        };

    }



}