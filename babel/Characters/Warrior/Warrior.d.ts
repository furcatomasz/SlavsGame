declare module Warrior{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset? : BABYLON.Vector3, sceneTransitionName? : string, overriddenMillis? : number, overriddenSound? : BABYLON.Sound, options? : {}) : void;
    class MeshFactory implements TOWER_OF_BABEL.FactoryModule {
        constructor(_scene : BABYLON.Scene, materialsRootDir: string);
        getModuleName() : string;
        instance(meshName : string, cloneSkeleton? : boolean) : BABYLON.Mesh;
    }
    export function getStats() : [number];

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class Boots extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Boots);
    }

    class Gloves extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Gloves);
    }

    class Warrior extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Warrior);
    }

    class Armor extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Armor);
    }

    class Hair extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Hair);
    }

    class Helm extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Helm);
    }

    class Sword extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Sword);
    }

    class Axe extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Axe);
    }

    class Shield extends QI.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Shield);
    }

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
