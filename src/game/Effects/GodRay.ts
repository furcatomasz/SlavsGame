import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export class GodRay {
    public static createGodRay(game: Game, mesh: BABYLON.AbstractMesh) {
        let engine = game.engine;
        let scene = game.getBabylonScene();
        let camera = game.getBabylonScene().getCameraByName('gameCamera');

        let fireMaterial = new BABYLON.StandardMaterial("godrayMaterial", scene);
        let fireTexture = new BABYLON.Texture("assets/Smoke3.png", scene);
        fireTexture.hasAlpha = true;
        fireMaterial.alpha = 0.1;
        fireMaterial.emissiveTexture = fireTexture;
        fireMaterial.diffuseTexture = fireTexture;
        fireMaterial.opacityTexture = fireTexture;

        fireMaterial.specularPower = 1;
        fireMaterial.backFaceCulling = false;

        let box = BABYLON.Mesh.CreatePlane("godRayPlane", 16, scene, true);
        box.visibility = 1;
        box.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);
        box.material = fireMaterial;
        box.layerMask = 2;

        let godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 128, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
        godrays.useCustomMeshPosition = true;
        godrays.setCustomMeshPosition(new BABYLON.Vector3(0, 15.0, 0));

        godrays.invert = false;
        godrays.exposure = 0.8;
        godrays.decay = 1;
        godrays.weight = 0;
        godrays.density = 0.5;

        let startHiding = false;
        let timeoutFunction;
        const showGodRay = () => {
            box.position = mesh.position.clone();
            box.position.y += 0.1;
            godrays.setCustomMeshPosition(mesh.position.clone());
            godrays.customMeshPosition.y = 15;
            box.rotate(new BABYLON.Vector3(0, 5, 0), 0.02, BABYLON.Space.WORLD);

            if (godrays.weight >= 0.3 && !timeoutFunction) {
                timeoutFunction = setTimeout(() => {
                    startHiding = true;
                }, 4000);
            }

            if (startHiding) {
                godrays.weight -= 0.01;
                if (godrays.weight <= 0) {
                    godrays.dispose(camera);
                    box.dispose();
                    scene.unregisterBeforeRender(showGodRay);
                }
            } else if (godrays.weight <= 0.3) {
                godrays.weight += 0.02;
            }
        };
        scene.registerBeforeRender(showGodRay);
    }
}
