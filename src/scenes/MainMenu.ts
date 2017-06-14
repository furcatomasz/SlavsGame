/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../../babylon/ts/babylon.gui.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>

class MainMenu extends Scene {

    constructor(game:Game) {
        super(game);
        let scene = new BABYLON.Scene(game.engine);
        scene.clearColor = new BABYLON.Color3(0,0,0);
        let camera = new BABYLON.ArcRotateCamera("Camera", -1, 0.8, 100, BABYLON.Vector3.Zero(), scene);

        let background = new BABYLON.Layer("back", "assets/logo.png", scene);
        background.isBackground = true;
        background.texture.level = 0;
        background.texture.wAng = 0;

        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        let buttonStart = BABYLON.GUI.Button.CreateSimpleButton("buttonStart", "Start game");
        buttonStart.width = "250px"
        buttonStart.height = "40px";
        buttonStart.color = "white";
        buttonStart.cornerRadius = 20;
        buttonStart.top = 150;
        buttonStart.background = "orange";
        buttonStart.zIndex = 1;
        buttonStart.onPointerUpObservable.add(function() {
            new Simple(game);
            game.activeScene = 1;
        });
        advancedTexture.addControl(buttonStart);

        let buttonOptions = BABYLON.GUI.Button.CreateSimpleButton("buttonOptions", "Options");
        buttonOptions.width = "250px"
        buttonOptions.height = "40px";
        buttonOptions.color = "white";
        buttonOptions.cornerRadius = 20;
        buttonOptions.top = 200;
        buttonOptions.background = "orange";
        buttonOptions.zIndex = 1;
        buttonOptions.onPointerUpObservable.add(function() {
            let optionsPanel = new BABYLON.GUI.StackPanel();
            optionsPanel.alpha = 0.8;
            optionsPanel.width = "220px";
            optionsPanel.background = "#edecd7";
            optionsPanel.zIndex = 2;
            advancedTexture.addControl(optionsPanel);

            let header = new BABYLON.GUI.TextBlock();
            header.text = "Shadows quality: 1024";
            header.height = "30px";
            header.color = "white";

            let slider = new BABYLON.GUI.Slider();
            slider.minimum = 1024;
            slider.maximum = 4096;
            slider.value = 0;
            slider.height = "20px";
            slider.width = "200px";
            slider.onValueChangedObservable.add(function(value) {
                header.text = "Shadows quality: " + value + "";
            });

            let optionsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            optionsButtonClose.width = "150px"
            optionsButtonClose.height = "40px";
            optionsButtonClose.color = "white";
            optionsButtonClose.cornerRadius = 20;
            optionsButtonClose.top = 50;
            optionsButtonClose.background = "orange";
            optionsButtonClose.zIndex = 3;

            optionsButtonClose.onPointerUpObservable.add(function() {
                advancedTexture.removeControl(optionsPanel);
            });

            optionsPanel
                .addControl(header)
                .addControl(slider)
                .addControl(optionsButtonClose)
        });
        advancedTexture.addControl(buttonOptions);

        let buttonAboutUs = BABYLON.GUI.Button.CreateSimpleButton("buttonAboutUs", "About us");
        buttonAboutUs.width = "250px"
        buttonAboutUs.height = "40px";
        buttonAboutUs.color = "white";
        buttonAboutUs.cornerRadius = 20;
        buttonAboutUs.top = 250;
        buttonAboutUs.background = "orange";
        buttonAboutUs.zIndex = 1;

        buttonAboutUs.onPointerUpObservable.add(function() {
            let aboutUsBackground = new BABYLON.GUI.Rectangle();
            aboutUsBackground.alpha = 0.8;
            aboutUsBackground.width = 0.5;
            aboutUsBackground.height = "180px";
            aboutUsBackground.cornerRadius = 20;
            aboutUsBackground.color = "Orange";
            aboutUsBackground.thickness = 1;
            aboutUsBackground.background = "#edecd7";
            aboutUsBackground.zIndex = 2;
            advancedTexture.addControl(aboutUsBackground);

            let aboutUsText = new BABYLON.GUI.TextBlock();
            aboutUsText.text = "Tomasz Furca & Artur Owsianowski";
            aboutUsText.color = "black";
            aboutUsText.fontSize = 20;
            aboutUsText.zIndex = 2;

            let aboutUsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            aboutUsButtonClose.width = "150px"
            aboutUsButtonClose.height = "40px";
            aboutUsButtonClose.color = "white";
            aboutUsButtonClose.cornerRadius = 20;
            aboutUsButtonClose.top = 50;
            aboutUsButtonClose.background = "orange";
            aboutUsButtonClose.zIndex = 3;

            aboutUsButtonClose.onPointerUpObservable.add(function() {
                advancedTexture.removeControl(aboutUsBackground);
            });

            aboutUsBackground.addControl(aboutUsButtonClose).addControl(aboutUsText);
        });
        advancedTexture.addControl(buttonAboutUs);

        game.scenes.push(scene);
    }

}