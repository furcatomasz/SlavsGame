import {AbstractEnvironment} from "./AbstractEnvironment";
import {Game} from "../game";
import {Nature} from "../Particles/SolidParticleSystem/Nature";
import {NatureBlock} from "../Particles/SolidParticleSystem/NatureBlock";
import {TerrainMaterial} from 'babylonjs-materials';
import * as BABYLON from 'babylonjs';

export class EnvironmentForestHouse extends AbstractEnvironment {

    constructor(game: Game) {
        super();
        const scene = game.getBabylonScene();
        let self = this;
        let spsTrees = [];
        let spsPlants = [];
        let spsStones = [];
        let spsFern = [];

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;

                this.ground = sceneMesh;

                let terrainMaterial = new TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/Forest_house/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/groundSeamless.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 15;
                sceneMesh.material = terrainMaterial;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else if (meshName.search("sps_trees") >= 0) {
                spsTrees.push(sceneMesh);
            } else if (meshName.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh);
            } else if (meshName.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh);
            } else if (meshName.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
                self.staticShadowObjects.push(sceneMesh);
            }
        }

        //SPS Nature
        let spruce = game.getSceneManger().assets.natureGrain.createClone('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();

        let groundPlants = game.getSceneManger().assets.natureGrain.createClone('ground_plants', false);
        groundPlants.visibility = 0;
        groundPlants.material.freeze();

        let fern = game.getSceneManger().assets.natureGrain.createClone('fern', false);
        fern.visibility = 0;
        fern.material.freeze();

        let stone = game.getSceneManger().assets.natureGrain.createClone('stone', false);
        stone.visibility = 0;
        stone.material.freeze();

        spsTrees.forEach(function (parentSPS) {
            let spsSpruce = new Nature(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });

        spsPlants.forEach(function (parentSPS) {
            let spsSpruce = new Nature(game, parentSPS, groundPlants, false);
            spsSpruce.buildSPS(40);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });

        spsStones.forEach(function (parentSPS) {
            let spsSpruce = new Nature(game, parentSPS, stone, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });

        spsFern.forEach(function (parentSPS) {
            let spsSpruce = new Nature(game, parentSPS, fern, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });

        let spsToBlock = scene.getMeshByName("sps_border");
        let spsSpruceBlock = new NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        self.staticShadowObjects.push(spsSpruceBlock.spsMesh);

        stone.dispose();
        spruce.dispose();
        groundPlants.dispose();
        fern.dispose();

        let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        this.light = light;


        ///register colliders
        this.registerColliders(scene);
        this.freezeAllMeshes(scene);

        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.1
        });
        new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });

        scene.getMeshByName('exit').dispose();

        var exitPlane = scene.getMeshByName('Entrace_Tomb').clone("exit", null);
        exitPlane.position = new BABYLON.Vector3(-196.78,0,-95.6);
        exitPlane.rotation = new BABYLON.Vector3(0,-1.5,0);
    }

    createStecnil(scene: BABYLON.Scene) {
    }



}
