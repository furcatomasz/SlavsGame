import {Game} from "../../Game";
import * as BABYLON from "babylonjs";
import {Fog} from "../../Particles/Fog";
import { WaterMaterial } from "babylonjs-materials";

export class InventoryEnvironment {

    private readonly game: Game;
    public fog: Fog;
    public meshes: BABYLON.AbstractMesh[] = [];
    public waterMaterial: WaterMaterial;

    constructor(game: Game) {
        this.game = game;
    }

    public create(parent: BABYLON.AbstractMesh) {
        const game = this.game;
        const scene = game.getBabylonScene();

        let ground = BABYLON.MeshBuilder.CreateGround("Ground", {width: 64, height: 64}, scene);
        ground.parent = parent;
        let terrainMaterial = new BABYLON.StandardMaterial("inventory_ground", scene);
        terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass.jpg", scene);
        ground.material = terrainMaterial;
        ground.layerMask = 1;

        let waterMaterial = new WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(128, 128));
        waterMaterial.bumpTexture = new BABYLON.Texture("//www.babylonjs.com/assets/waterbump.png", scene);
        waterMaterial.windForce = -5;
        waterMaterial.waveHeight = 0.05;
        waterMaterial.bumpHeight = 0.05;
        waterMaterial.waveLength = 0.1;
        waterMaterial.waveSpeed = 1.0;
        waterMaterial.colorBlendFactor = 0.1;
        waterMaterial.waterColor = new BABYLON.Color3(0.1, 1, 1);
        this.waterMaterial = waterMaterial;

        let waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 64, 64, 4, scene, false);
        waterMesh.position.y = 0.05;
        waterMesh.material = waterMaterial;
        waterMesh.layerMask = 1;
        waterMesh.parent = ground;

        let spruce = game.getSceneManger().assets.natureGrain.createInstance('spruce');
        spruce.layerMask = 1;
        spruce.position = new BABYLON.Vector3(12, -0, 0);
        spruce.scaling = new BABYLON.Vector3(1, 0.3, 1);
        spruce.parent = ground;

        let spruce1 = game.getSceneManger().assets.natureGrain.createInstance('spruce');
        spruce1.layerMask = 1;
        spruce1.position = new BABYLON.Vector3(0, -0, 10);
        spruce1.scaling = new BABYLON.Vector3(1, 0.3, 1);
        spruce1.parent = ground;

        let spruce2 = game.getSceneManger().assets.natureGrain.createInstance('spruce');
        spruce2.layerMask = 1;
        spruce2.position = new BABYLON.Vector3(8, -0, 8);
        spruce2.scaling = new BABYLON.Vector3(1, 0.3, 1);
        spruce2.parent = ground;

        let spruce3 = game.getSceneManger().assets.natureGrain.createInstance('spruce');
        spruce3.layerMask = 1;
        spruce3.position = new BABYLON.Vector3(5, -0, 12);
        spruce3.scaling = new BABYLON.Vector3(1, 0.3, 1);
        spruce3.parent = ground;

        let spruce4 = game.getSceneManger().assets.natureGrain.createInstance('spruce');
        spruce4.layerMask = 1;
        spruce4.position = new BABYLON.Vector3(12, -0, 7);
        spruce4.scaling = new BABYLON.Vector3(1, 0.3, 1);
        spruce4.parent = ground;

        let fern = game.getSceneManger().assets.natureGrain.createInstance('fern');
        fern.layerMask = 1;
        fern.position = new BABYLON.Vector3(8, -0, 2);
        fern.parent = ground;

        let fern1 = game.getSceneManger().assets.natureGrain.createInstance('fern');
        fern1.layerMask = 1;
        fern1.position = new BABYLON.Vector3(2, -0, 6);
        fern1.parent = ground;

        let stone = game.getSceneManger().assets.natureGrain.createInstance('stone');
        stone.layerMask = 1;
        stone.position = new BABYLON.Vector3(5, 0, 5);
        stone.parent = ground;

        waterMaterial.addToRenderList(stone);
        waterMaterial.addToRenderList(spruce);
        waterMaterial.addToRenderList(spruce1);
        waterMaterial.addToRenderList(spruce2);
        waterMaterial.addToRenderList(spruce3);
        waterMaterial.addToRenderList(spruce4);
        waterMaterial.addToRenderList(fern);
        waterMaterial.addToRenderList(fern1);
        waterMaterial.addToRenderList(ground);
        this.meshes.push(stone);
        this.meshes.push(spruce);
        this.meshes.push(spruce1);
        this.meshes.push(spruce2);
        this.meshes.push(spruce3);
        this.meshes.push(spruce4);
        this.meshes.push(fern);
        this.meshes.push(fern1);
        this.meshes.push(ground);
        this.meshes.push(waterMesh);

        let fog = new Fog(game, waterMesh);
        fog.initParticleSystem();
        fog.particleSystem.start();
        this.fog = fog;
    }

    public dispose() {
        this.fog.particleSystem.dispose();
        this.meshes.forEach((mesh) => {
            mesh.dispose();
        });
    }

}