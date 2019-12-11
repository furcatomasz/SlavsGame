import {Scene} from "./Scene";
import {Game} from "../Game";
import * as BABYLON from 'babylonjs';
import { WaterMaterial } from 'babylonjs-materials';
import {EnvironmentCaveExit} from "./Mountains/CaveExit/EnvironmentCaveExit";
import {Fog} from "../Particles/Fog";
import {Guard} from "../Characters/npc/Guard";

export class Battleground extends Scene {

    static TYPE = 99;

    initScene(game: Game) {
        let self = this;
        let scene = new BABYLON.Scene(game.engine);
        let ground, guard;
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
                ground = BABYLON.MeshBuilder.CreateGround("Ground", {width: 256, height: 256}, scene);

                new Guard(game, new BABYLON.Vector3(-12, 0, 8), new BABYLON.Vector3(0, 3, 0));
                guard = new Guard(game, new BABYLON.Vector3(-15, 0, 10), new BABYLON.Vector3(0, 4, 0));
                guard.mesh.name = 'questLog';

                let plane = BABYLON.Mesh.CreatePlane("entrace", 16, scene);
                plane.position = new BABYLON.Vector3(-25, 2, 25);
                plane.layerMask = 2;

                self.environment = new EnvironmentCaveExit(game);
            }, function() {
                let waterMaterial = new WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
                waterMaterial.bumpTexture = new BABYLON.Texture("//www.babylonjs.com/assets/waterbump.png", scene);
                waterMaterial.windForce = -5;
                waterMaterial.waveHeight = 0.05;
                waterMaterial.bumpHeight = 0.05;
                waterMaterial.waveLength = 0.1;
                waterMaterial.waveSpeed = 1.0;
                waterMaterial.colorBlendFactor = 0.1;
                waterMaterial.waterColor = new BABYLON.Color3(0.1, 1, 1);
                let waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 256, 256, 32, scene, false);
                waterMesh.position.y = 0.5;
                waterMesh.material = waterMaterial;
                waterMesh.layerMask = 2;
                waterMesh.isPickable = false;
                waterMaterial.addToRenderList(ground);
                waterMaterial.addToRenderList(self.game.player.mesh);
                waterMaterial.addToRenderList(guard.mesh);
            });

    }

}
