import {Scene} from "./Scene";
import {Game} from "../Game";
import * as BABYLON from 'babylonjs';
import { WaterMaterial } from 'babylonjs-materials';
import {EnvironmentCaveExit} from "./Mountains/CaveExit/EnvironmentCaveExit";

export class Battleground extends Scene {

    static TYPE = 99;

    initScene(game: Game) {
        let self = this;
        let scene = new BABYLON.Scene(game.engine);
        let ground;
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
                let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
                light.intensity = 0.4;
                light.position = new BABYLON.Vector3(0, 50, 0);
                light.direction = new BABYLON.Vector3(0.45, -2.5, 0);

                ground = BABYLON.MeshBuilder.CreateGround("Ground", {width: 256, height: 256}, scene);
                ground.actionManager = new BABYLON.ActionManager(scene);

                self.environment = new EnvironmentCaveExit(game);
            }, function() {
                //
                var waterMaterial = new WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
                waterMaterial.bumpTexture = new BABYLON.Texture("//www.babylonjs.com/assets/waterbump.png", scene);
                waterMaterial.windForce = -5;
                waterMaterial.waveHeight = 0.1;
                waterMaterial.bumpHeight = 0.1;
                waterMaterial.waveLength = 0.15;
                waterMaterial.waveSpeed = 10.0;
                waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
                waterMaterial.colorBlendFactor = 0.1;
                waterMaterial.waterColor = new BABYLON.Color3(0.1, 1, 0.6);
                var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 256, 256, 32, scene, false);
                waterMesh.position.y = 0.5;
                waterMesh.material = waterMaterial;
                waterMesh.layerMask = 2;
                waterMesh.isPickable = false;

                // Configure water material
                waterMaterial.addToRenderList(ground);
                waterMaterial.addToRenderList(self.game.player.mesh);
                // // waterMaterial.addToRenderList(skybox);
            });

    }

}
