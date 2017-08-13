declare module worm{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset? : BABYLON.Vector3, sceneTransitionName? : string, overriddenMillis? : number, overriddenSound? : BABYLON.Sound, options? : {}) : void;
    class MeshFactory implements TOWER_OF_BABEL.FactoryModule {
        constructor(_scene : BABYLON.Scene, materialsRootDir: string);
        getModuleName() : string;
        instance(meshName : string, cloneSkeleton? : boolean) : BABYLON.Mesh;
    }
    export function getStats() : [number];

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class Worm extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Worm);
    }

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
