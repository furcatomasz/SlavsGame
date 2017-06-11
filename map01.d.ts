declare module map01{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset : BABYLON.Vector3 = null) : void;

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class choinka_003 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_003);
    }

    class choinka_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_002);
    }

    class choinka_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_001);
    }

    class Plane extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Plane);
    }

    class choinka extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka);
    }

    export function defineLights(scene : BABYLON.Scene, positionOffset : BABYLON.Vector3 = null) : void;

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
