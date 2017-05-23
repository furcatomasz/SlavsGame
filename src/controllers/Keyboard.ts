/// <reference path="Controller.ts"/>

class Keyboard extends Controller {

    protected animation;

    public handleKeyUp(evt):void {
        let character = this.game.player.character;
        
        if (evt.keyCode == 65) {
            this.left = true;
        }
        if (evt.keyCode == 68) {
            this.right = true;
        }
        if (evt.keyCode == 87) {
            this.forward = true;
        }
        if (evt.keyCode == 83) {
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