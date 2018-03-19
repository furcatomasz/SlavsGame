namespace Effects {
    export class GodRay {

        protected createGodRay(game: Game) {
            let engine = game.engine;
            let scene = game.getScene();
            let camera = game.getScene().activeCamera;

            var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
            var fireTexture = new BABYLON.Texture("assets/flare.png", scene);
            fireTexture.hasAlpha = true;
            fireMaterial.alpha = 0.2;
            fireMaterial.emissiveTexture = fireTexture;
            fireMaterial.diffuseTexture = fireTexture;
            fireMaterial.opacityTexture = fireTexture;

            fireMaterial.specularPower = 1;
            fireMaterial.backFaceCulling = false;

            var box = BABYLON.Mesh.CreatePlane("godRayPlane", 12, scene, true);
            box.visibility = 1;

            // box.material = new BABYLON.StandardMaterial("bmat", scene);
            // box.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            box.position = new BABYLON.Vector3(0, 0.1, 0);
            box.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);
            // box.parent = this.mesh;
            box.material = fireMaterial;

            var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
            godrays.useCustomMeshPosition = true;
            godrays.setCustomMeshPosition(new BABYLON.Vector3(0.0, -45.0, 0.0));
            // godrays.invert = true;
            godrays.exposure = 0.5;
            godrays.decay = 1;
            godrays.weight = 0.5;
            godrays.density = 0.5;

            // BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'position.y', 30, 70, 30, 0,0, null, function() {
            //     godrays.invert = false;
            //     setTimeout(function() {
            //         BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'position.y', 30, 70, 0, 30,0, null, function() {
            //             godrays.dispose(camera);
            //             box.dispose();
            //         } );
            //     }, 1000);
            // } );
        }
    }
}