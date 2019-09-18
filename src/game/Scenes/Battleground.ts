import {Scene} from "./Scene";
import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export class Battleground extends Scene {

    static TYPE = 99;

    initScene(game: Game) {
        let self = this;
        let scene = new BABYLON.Scene(game.engine);
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
                let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
                light.intensity = 0.4;
                light.position = new BABYLON.Vector3(0, 50, 0);
                light.direction = new BABYLON.Vector3(0.45, -2.5, 0);

                let ground = BABYLON.MeshBuilder.CreateGround("Ground", {width: 96, height: 96}, scene);
                ground.actionManager = new BABYLON.ActionManager(scene);
                let terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                terrainMaterial.specularPower = 10;

                let diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                diffuseTexture.uScale = 20;
                diffuseTexture.vScale = 20;
                terrainMaterial.diffuseTexture = diffuseTexture;
                ground.material = terrainMaterial;

            }, function() {
                // game.player.playerLight.dispose();
            });

    }

}
