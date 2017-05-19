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
        var character = this.game.player.character;
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
            character.mesh.translate(BABYLON.Axis.Z, -0.1, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            character.mesh.translate(BABYLON.Axis.Z, 0.1, BABYLON.Space.LOCAL);
            character.runAnimationWalk(true);
            this.back = true;
        }
        if (evt.keyCode == 32 && !this.animation) {
            character.runAnimationHit();
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
            this.forward = false;
        }
        if (evt.keyCode == 83) {
            this.back = false;
        }
    };
    return Keyboard;
})(Controller);
//# sourceMappingURL=Keyboard.js.map