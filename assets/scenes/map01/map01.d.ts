declare module map01{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset? : BABYLON.Vector3, sceneTransitionName? : string, overriddenMillis? : number, overriddenSound? : BABYLON.Sound, options? : {}) : void;
    class MeshFactory implements TOWER_OF_BABEL.FactoryModule {
        constructor(_scene : BABYLON.Scene, materialsRootDir: string);
        getModuleName() : string;
        instance(meshName : string, cloneSkeleton? : boolean) : BABYLON.Mesh;
    }
    export function getStats() : [number];

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class Spider_web_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Spider_web_001);
    }

    class Bush_group_022 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_022);
    }

    class Bush_group_021 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_021);
    }

    class choinka_028 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_028);
    }

    class choinka_027 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_027);
    }

    class choinka_026 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_026);
    }

    class choinka_025 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_025);
    }

    class choinka_024 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_024);
    }

    class Bush_group_020 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_020);
    }

    class Bush_group_019 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_019);
    }

    class Bush_group_018 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_018);
    }

    class Bush_group_017 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_017);
    }

    class Bush_group_016 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_016);
    }

    class Cube_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Cube_002);
    }

    class Cube_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Cube_001);
    }

    class Huba_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Huba_001);
    }

    class Grass_slim_004 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_slim_004);
    }

    class Grass_slim_003 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_slim_003);
    }

    class Grass_slim_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_slim_002);
    }

    class Grass_slim_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_slim_001);
    }

    class Log_old_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Log_old_001);
    }

    class Bush_group_015 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_015);
    }

    class Bush_group_014 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_014);
    }

    class Bush_group_013 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_013);
    }

    class Bush_group_012 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_012);
    }

    class Bush_group_011 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_011);
    }

    class Bush_group_010 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_010);
    }

    class Bush_group_009 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_009);
    }

    class Bush_group_008 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_008);
    }

    class Bush_group_007 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_007);
    }

    class Bush_group_006 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_006);
    }

    class Bush_group_005 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_005);
    }

    class Bush_group_004 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_004);
    }

    class Bush_group_003 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_003);
    }

    class Bush_group_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_002);
    }

    class Bush_group_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group_001);
    }

    class Log_space_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Log_space_001);
    }

    class choinka_023 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_023);
    }

    class choinka_022 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_022);
    }

    class choinka_021 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_021);
    }

    class choinka_020 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_020);
    }

    class choinka_019 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_019);
    }

    class choinka_018 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_018);
    }

    class choinka_017 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_017);
    }

    class choinka_016 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_016);
    }

    class Stone_medium_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Stone_medium_002);
    }

    class Sage_group_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Sage_group_001);
    }

    class Stone_medium_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Stone_medium_001);
    }

    class Fireplace extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Fireplace);
    }

    class choinka_015 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_015);
    }

    class choinka_014 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_014);
    }

    class choinka_013 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_013);
    }

    class choinka_012 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_012);
    }

    class choinka_011 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_011);
    }

    class choinka_010 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_010);
    }

    class choinka_009 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_009);
    }

    class choinka_008 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_008);
    }

    class choinka_007 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_007);
    }

    class choinka_006 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_006);
    }

    class choinka_005 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_005);
    }

    class choinka_004 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_004);
    }

    class choinka_003 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_003);
    }

    class choinka_002 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_002);
    }

    class choinka_001 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka_001);
    }

    class Forest_ground extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Forest_ground);
    }

    class choinka extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : choinka);
    }

    class Stone_large extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Stone_large);
    }

    class Stone_medium extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Stone_medium);
    }

    class Fern_group extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Fern_group);
    }

    class Log_004 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Log_004);
    }

    class Grass_small extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_small);
    }

    class Bush_group extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Bush_group);
    }

    class Tent_new extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Tent_new);
    }

    class Log_old extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Log_old);
    }

    class Grass_slim extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Grass_slim);
    }

    class Huba extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Huba);
    }

    class Cube extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Cube);
    }

    class Spider_web extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : Spider_web);
    }

    export function defineLights(scene : BABYLON.Scene, positionOffset? : BABYLON.Vector3) : void;

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
