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
    };
    Keyboard.prototype.handleKeyDown = function (evt) {
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
    };
    return Keyboard;
}(Controller));
//# sourceMappingURL=Keyboard.js.map