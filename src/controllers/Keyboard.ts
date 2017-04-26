/// <reference path="Controller.ts"/>

class Keyboard extends Controller {

    protected animation;

    public handleKeyUp(evt):void {
        let character = this.game.player.character;
        
        if (evt.keyCode == 65) {
            character.mesh.rotate(BABYLON.Axis.Y, -0.1, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.left = true;
        }
        if (evt.keyCode == 68) {
            character.mesh.rotate(BABYLON.Axis.Y, 0.1, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.right = true;
        }
        if (evt.keyCode == 87) {
            character.mesh.translate(BABYLON.Axis.Z, -0.03, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            character.mesh.translate(BABYLON.Axis.Z, 0.03, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.back = true;
        }

        if (evt.keyCode == 32 && !this.animation) {
            character.runAnimationHit();
        }

    }

    public handleKeyDown(evt):void {
        if (evt.keyCode == 65) {
            this.left = false;
        }
        if (evt.keyCode == 68) {
            this.right = false;
        }
        if (evt.keyCode == 87) {
            this.forward = false;
        }
        if (evt.keyCode == 83) {
            this.back = false;
        }

    }
}