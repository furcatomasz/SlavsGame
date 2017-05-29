var Scene = (function () {
    function Scene(game, name) {
        this.game = game;
        this.name = name;
    }
    Scene.prototype.setShadowGenerator = function (light) {
        this.shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        this.shadowGenerator.bias = -0.24;
        this.shadowGenerator.setDarkness(0.5);
        this.shadowGenerator.usePoissonSampling = true;
        this.shadowGenerator.useExponentialShadowMap = true;
        this.shadowGenerator.useBlurExponentialShadowMap = true;
    };
    Scene.prototype.setCamera = function () {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), this.game.scene);
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        camera.orthoTop = 15;
        camera.orthoBottom = 0;
        camera.orthoLeft = -15;
        camera.orthoRight = 15;
        var ratio = window.innerWidth / window.innerHeight;
        var zoom = camera.orthoTop;
        var newWidth = zoom * ratio;
        camera.orthoLeft = -Math.abs(newWidth);
        camera.orthoRight = newWidth;
        camera.orthoBottom = -Math.abs(zoom);
        camera.rotation = new BABYLON.Vector3(0.381, 0.851, 0);
        this.game.scene.activeCamera = camera;
        this.game.scene.activeCamera.attachControl(this.game.canvas);
    };
    Scene.prototype.createGameGUI = function () {
        var self = this;
        var dialogUser = new CASTORGUI.GUIPanel("Panel1", { w: 300, h: 50, x: 10, y: 20 }, this.game.gui);
        dialogUser.setVisible(true);
        dialogUser.add(new CASTORGUI.GUIText("You", { size: 15, text: "You", x: 10 }, this.game.gui, true));
        var hpBar = new CASTORGUI.GUIProgress("hpbar_you", { w: 280, h: 20, x: 10, y: 20, value: 100 }, this.game.gui);
        hpBar.setVisible(false);
        this.game.guiElements.hpBar = hpBar;
        dialogUser.add(hpBar);
        var dialogEnemy = new CASTORGUI.GUIPanel("Panel2", { w: 300, h: 50, x: 10, y: 100 }, this.game.gui);
        dialogEnemy.setVisible(true);
        dialogEnemy.add(new CASTORGUI.GUIText("Enemy", { size: 15, text: "Enemy", x: 10 }, this.game.gui, true));
        var hpBarEnemy = new CASTORGUI.GUIProgress("hpbar_enemy", { w: 280, h: 20, x: 10, y: 20, value: 100 }, this.game.gui);
        hpBarEnemy.setVisible(false);
        this.game.guiElements.hpBarEnemy = hpBarEnemy;
        dialogEnemy.add(hpBarEnemy);
        new CASTORGUI.GUIButton("gui.button.inventory", { x: 15, y: 155, value: "Inventory" }, this.game.gui, function () {
            console.log('inwentory');
            alert('Inwentory');
        });
        var sliderAttack = new CASTORGUI.GUISlider("gui.slider.attack", { x: 100, y: 185, min: 0, max: 200, value: 100 }, this.game.gui, function (event) {
            self.game.player.character.attackSpeed = event.target.value;
        });
        new CASTORGUI.GUIText("attack.speed", { size: 15, text: "Attack speed", x: 10, y: 190, color: "white" }, this.game.gui, true);
        var sliderWalk = new CASTORGUI.GUISlider("gui.slider.walk", { x: 100, y: 220, min: 0, max: 200, value: 100 }, this.game.gui, function (event) {
            self.game.player.character.walkSpeed = event.target.value;
        });
        new CASTORGUI.GUIText("walk.speed", { size: 15, text: "Walk speed", x: 10, y: 225, color: "white" }, this.game.gui, true);
        var dialog = new CASTORGUI.GUIPanel("Panel", { w: 400, h: 100, x: 15, y: (this.game.gui.getCanvasSize().height - 110) }, this.game.gui);
        dialog.setVisible(true);
        dialog.add(new CASTORGUI.GUIText("textDialog", { size: 15, text: "Chat" }, this.game.gui, true));
    };
    return Scene;
})();
//# sourceMappingURL=Scene.js.map