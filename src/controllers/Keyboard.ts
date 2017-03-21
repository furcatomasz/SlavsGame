/// <reference path="Controller.ts"/>

class Keyboard extends Controller {

    public handleKeyUp(evt):void {
        if (evt.keyCode == 65) {
            this.left = true;
        }
        if (evt.keyCode == 68) {
            this.right = true;
        }
        if (evt.keyCode == 87) {
            this.game.scene.beginAnimation(this.game.skeletons[0], 0, 60, true, 3);
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            this.game.scene.beginAnimation(this.game.skeletons[0], 0, 60, true, 3);
            this.back = true;
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
            this.game.scene.stopAnimation(this.game.skeletons[0]);
            this.forward = false;
        }
        if (evt.keyCode == 83) {
            this.game.scene.stopAnimation(this.game.skeletons[0]);
            this.back = false;
        }
    }
}