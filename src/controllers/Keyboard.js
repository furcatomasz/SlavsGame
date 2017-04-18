/// <reference path="Controller.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        _super.apply(this, arguments);
    }
    Keyboard.prototype.handleKeyUp = function (evt) {
        var self = this;
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
            if (!this.animation) {
                self.animation = this.game.scene.beginAnimation(this.game.player.skeleton, 0, 30, false, 1, function () {
                    self.game.scene.beginAnimation(self.game.player.skeleton, 40, 80, true);
                    self.animation = false;
                });
            }
        }
    };
    Keyboard.prototype.characterAnimation = function () {
        var self = this;
        console.log(this.animation);
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.game.player.skeleton, 90, 109, false, 1, function () {
                self.game.scene.beginAnimation(self.game.player.skeleton, 45, 80, true);
                self.animation = false;
            });
        }
        if (self.game.client.socket) {
            self.game.client.socket.emit('moveTo', {
                p: self.game.characterMesh.position,
                r: self.game.characterMesh.rotationQuaternion
            });
        }
    };
    ;
    Keyboard.prototype.handleKeyDown = function (evt) {
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
    };
    return Keyboard;
}(Controller));
//# sourceMappingURL=Keyboard.js.map