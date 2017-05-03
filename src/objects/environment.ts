class Environment {

    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        let self = this;
        let scene = game.scene;
        let fireplace = assetsManager.addMeshTask("fireplace", "", "assets/fireplace/", "fireplace.babylon");
        fireplace.onSuccess = function (task) {
                let mesh = task.loadedMeshes[0];
                
                    var fire = new BABYLON.FireMaterial("fire", scene);
                    fire.diffuseTexture = new BABYLON.Texture("assets/fireplace/fire.png", scene);
                    fire.distortionTexture = new BABYLON.Texture("assets/fireplace/distortion.png", scene);
                    fire.opacityTexture = new BABYLON.Texture("assets/fireplace/candleOpacity.png", scene);
                    fire.speed = 2.0;
                    
                    var sfxFireplace = new BABYLON.Sound("Fire", "assets/fireplace/fireplace.mp3", scene, null, { loop: true, autoplay: true });
                    sfxFireplace.attachToMesh(mesh);
                    mesh.position.x = 0;
                    mesh.position.z = 0;
                    //var plane = BABYLON.Mesh.CreatePlane("fireplane", 1.5, scene);
                    //plane.parent = mesh;
                    //plane.scaling.x = 1;
                    //plane.scaling.y = 2;
                    //plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
                    //plane.material = fire;

                game.environment[task.name] = mesh;
        };

        assetsManager.load();
    }
}