/// <reference path="../game.ts"/>

class EnvironmentForestHouseStart {

    bushes:Array<BABYLON.AbstractMesh>;
    colliders:Array<BABYLON.AbstractMesh>;
    fires:Array<BABYLON.AbstractMesh>;
    entrace:BABYLON.AbstractMesh;
    ground:BABYLON.AbstractMesh;
    shadowGenerator:BABYLON.ShadowGenerator;

    constructor(game:Game, scene:BABYLON.Scene) {
        let self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];

        for (let i = 0; i < scene.lights.length; i++) {
            let light = scene.lights[i];
            light.intensity = (light.intensity/3);
            light.range = 47;
        }

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
            }
        }

        /////Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
           scene.meshes[i].freezeWorldMatrix();
        }


        ///exit from house
        let plane = scene.getMeshByName("exitHouse");
        if (plane) {
            this.entrace = plane;
            plane.isPickable = true;
            plane.visibility = false;
            let smokeSystem = new Particles.HouseExit(game, plane).particleSystem;
            smokeSystem.start();

            let listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new ForestHouse());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener);

        }

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }

    }

}