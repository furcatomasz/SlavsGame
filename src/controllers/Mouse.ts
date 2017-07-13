/// <reference path="Controller.ts"/>

class Mouse extends Controller {

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let targetPoint = null;
        var ball = BABYLON.Mesh.CreateBox("sphere", 0.4, scene);
        ball.isPickable = false;
        ball.visibility = 0;

        scene.onPointerDown = function (evt, pickResult) {

            console.log(pickResult);
            if (self.game.player && pickResult.pickedMesh.name == 'Forest_ground') {
                targetPoint = pickResult.pickedPoint;
                targetPoint.y = 0;
                ball.position = targetPoint;
                ball.visibility = 1;
                self.game.player.mesh.lookAt(ball.position);
                self.game.player.emitPosition();
            }

            if (self.game.player && pickResult.pickedMesh.name.search('enemy_attackArea') >= 0) {
                self.game.player.mesh.lookAt(pickResult.pickedPoint);
                self.game.controller.forward = false;
                targetPoint = null;
                ball.visibility = 0;
                self.game.player.runAnimationHit()
            }

        };

        scene.registerBeforeRender(function () {
            if (self.game.player && targetPoint) {
                if (!self.game.player.mesh.intersectsPoint(targetPoint)) {
                    self.game.controller.forward = true;
                } else {
                    self.game.controller.forward = false;
                    targetPoint = null;
                    ball.visibility = 0;
                }
            }
        });
    }



}