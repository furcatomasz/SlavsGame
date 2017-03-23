/// <reference path="Controller.ts"/>

class Keyboard extends Controller {

    protected animation;

    public handleKeyUp(evt):void {
        let self = this;

        if (evt.keyCode == 65) {
            this.characterAnimation();
            this.left = true;
        }
        if (evt.keyCode == 68) {
            this.characterAnimation();
            this.right = true;
        }
        if (evt.keyCode == 87) {
            this.characterAnimation();
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            this.characterAnimation();
            this.back = true;
        }

        if (evt.keyCode == 32) {
            if(!this.animation) {
                self.animation = this.game.scene.beginAnimation(this.game.player.skeleton, 0, 30, false, 1, function () {
                    self.game.scene.beginAnimation(self.game.player.skeleton, 40, 80, true);
                    self.animation = false;
                });
            }
        }
console.log(self.game.player);
        self.game.client.socket.emit('moveTo', {
            p: self.game.player.character.mesh.position,
            r: self.game.player.character.mesh.rotation
        });

    }

    private characterAnimation() {
        let self = this;
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.game.player.skeleton, 90, 109, false, 1, function () {
                self.game.scene.beginAnimation(self.game.player.skeleton, 45, 80, true);
                self.animation = false;
            });
        }
    };

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

        self.game.client.socket.emit('moveTo', {
            p: self.game.player.position,
            r: self.game.player.rotation
        });
    }
}