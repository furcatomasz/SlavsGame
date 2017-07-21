/// <reference path="Controller.ts"/>

class Mouse extends Controller {


    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let clickTrigger = false;
        let ball = BABYLON.Mesh.CreateBox("sphere", 0.4, scene);
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
                if (self.game.player && pickedMesh.name == 'Forest_ground') {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    self.ball.visibility = 1;
                    self.game.player.mesh.lookAt(self.ball.position);
                    self.game.player.emitPosition();
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

        scene.registerBeforeRender(function () {
            if (self.game.player) {
                if (self.attackPoint) {
                    if (self.game.player.mesh.intersectsMesh(self.attackPoint)) {
                        self.game.player.runAnimationHit();
                        self.game.controller.forward = false;
                    } else {
                        self.game.controller.forward = true;
                    }
                }

                if (self.targetPoint) {
                    if (!self.game.player.mesh.intersectsPoint(self.targetPoint)) {
                        self.game.controller.forward = true;
                    } else {
                        if(!clickTrigger) {
                            self.game.controller.forward = false;
                            self.targetPoint = null;
                            self.ball.visibility = 0;
                        }
                    }
                }
            }
        });
    }


}