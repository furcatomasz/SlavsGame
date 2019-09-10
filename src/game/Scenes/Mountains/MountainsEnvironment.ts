import {AbstractEnvironment} from "../../Environment/AbstractEnvironment";

export abstract class MountainsEnvironment extends AbstractEnvironment {

    protected createStencilMaterial(stencilUrl: string, scene: BABYLON.Scene): BABYLON.TerrainMaterial {
        let terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
        terrainMaterial.mixTexture = new BABYLON.Texture(stencilUrl, scene);
        terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt.jpg", scene);
        terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass.jpg", scene);
        terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock.jpg", scene);
        terrainMaterial.bumpTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt_normal.jpg", scene);
        terrainMaterial.bumpTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass_normal.jpg", scene);
        terrainMaterial.bumpTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock_normal.jpg", scene);
        terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
        terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
        terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;


        return terrainMaterial;
    }
}
