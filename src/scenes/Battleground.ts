class Battleground extends Scene {

    static TYPE = 99;

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;


        var scene = new BABYLON.Scene(game.engine);
        self
            .setDefaults(game, scene)
            .optimizeScene(scene)
            .setCamera(scene)
            .setFog(scene)
            .defaultPipeline(scene)
            .executeWhenReady(function () {
                scene.audioEnabled = false;

                let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
                light.intensity = 1;

                let ground = BABYLON.MeshBuilder.CreateGround("Ground", {width: 50, height: 50}, scene);
                ground.actionManager = new BABYLON.ActionManager(scene);
                let terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                terrainMaterial.specularPower = 64;
                terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                ground.material = terrainMaterial;

            }, function() {
                // game.player.playerLight.dispose();
            });

    }

}
