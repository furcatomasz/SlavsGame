/// <reference path="../../babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>

class MainMenu extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);
        let scene = new BABYLON.Scene(game.engine);
        scene.clearColor = new BABYLON.Color3(0,0,0);
        var camera = new BABYLON.ArcRotateCamera("Camera", -1, 0.8, 100, new BABYLON.Vector3.Zero(), scene);

        var background = new BABYLON.Layer("back", "assets/logo.png", scene);
        background.isBackground = true;
        background.texture.level = 0;
        background.texture.wAng = 0;

        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Start game");
        button1.width = "250px"
        button1.height = "40px";
        button1.color = "white";
        button1.cornerRadius = 20;
        button1.top = 150;
        button1.background = "orange";
        button1.onPointerUpObservable.add(function() {
            alert("you did it!");
        });
        advancedTexture.addControl(button1);

        var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Options");
        button1.width = "250px"
        button1.height = "40px";
        button1.color = "white";
        button1.cornerRadius = 20;
        button1.top = 200;
        button1.background = "orange";
        button1.onPointerUpObservable.add(function() {
            alert("you did it!");
        });
        advancedTexture.addControl(button1);

        var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "About us");
        button1.width = "250px"
        button1.height = "40px";
        button1.color = "white";
        button1.cornerRadius = 20;
        button1.top = 250;
        button1.background = "orange";
        button1.onPointerUpObservable.add(function() {
            alert("you did it!");
        });
        advancedTexture.addControl(button1);

        game.scene = scene;

        game.engine.runRenderLoop(() => {
            scene.render();
        });

    }

}