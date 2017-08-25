/// <reference path="Controller.ts"/>

class Mouse extends Controller {

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let clickTrigger = false;
        let ball = BABYLON.Mesh.CreateBox("sphere", 0.4, scene);
        ball.actionManager = new BABYLON.ActionManager(scene);
        ball.isPickable = false;
        ball.visibility = 0;
        this.ball = ball;

        ball.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: self.game.player.mesh
        }, function () {
            if(!clickTrigger) {
                self.game.controller.forward = false;
                self.targetPoint = null;
                self.ball.visibility = 0;
            }
        }));

        ball.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: self.game.player.mesh
        }, function () {
            if(!clickTrigger) {
                self.game.controller.forward = false;
                self.targetPoint = null;
                self.ball.visibility = 0;
            }
        }));

        scene.onPointerUp = function (evt, pickResult) {
            clickTrigger = false;
        }
        
        scene.onPointerDown = function (evt, pickResult) {
            let pickedMesh = pickResult.pickedMesh;
            clickTrigger = true;

            if (pickedMesh) {
                if (self.game.player && pickedMesh.name == 'Forest_ground') {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    self.ball.visibility = 1;
                    self.game.player.mesh.lookAt(self.ball.position);
                    self.game.player.emitPosition();
                    self.game.controller.forward = true;
                }
                if (self.game.player && pickedMesh.name.search('enemy_attackArea') >= 0) {
                    self.attackPoint = pickedMesh;
                    self.game.player.mesh.lookAt(pickResult.pickedPoint);
                    self.targetPoint = null;
                    self.ball.visibility = 0;
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
                        self.game.player.mesh.lookAt(self.ball.position);
                    }
                }
            }
        };

    }



}