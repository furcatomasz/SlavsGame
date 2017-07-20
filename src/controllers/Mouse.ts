/// <reference path="Controller.ts"/>

class Mouse extends Controller {

    private attackPoint: BABYLON.AbstractMesh;

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        var ball = BABYLON.Mesh.CreateBox("sphere", 0.4, scene);
        ball.isPickable = false;
        ball.visibility = 0;
        this.ball = ball;

        scene.onPointerDown = function (evt, pickResult) {
            console.log(pickResult);
            let pickedMesh = pickResult.pickedMesh;

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
                        self.game.controller.forward = false;
                        self.targetPoint = null;
                        self.ball.visibility = 0;
                    }
                }
            }
        });
    }


}