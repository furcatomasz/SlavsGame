import * as BABYLON from "babylonjs";
import {Game} from "../Game";

export class PathFinder {

    public game: Game;
    public crowd: BABYLON.ICrowd;
    public navigationPlugin: BABYLON.RecastJSPlugin;


    constructor(game: Game) {
        this.game = game;
        this.navigationPlugin = new BABYLON.RecastJSPlugin();
    }

    public goTo(agentIndex: number, target: BABYLON.Vector3) {
        this.crowd.agentGoto(agentIndex, this.navigationPlugin.getClosestPoint(target))
    }

    public createNavMeshAndCrowd(game: Game, navMesh: BABYLON.Mesh) {
        let scene = game.getBabylonScene();
        // var ground = BABYLON.Mesh.CreateGround("Ground", 60, 60, 2, scene);
        let parameters = {
            cs: 0.2,
            ch: 0.2,
            walkableSlopeAngle: 90,
            walkableHeight: 20,
            walkableClimb: 1,
            walkableRadius: 10,
            maxEdgeLen: 12.,
            maxSimplificationError: 1.3,
            minRegionArea: 8,
            mergeRegionArea: 20,
            maxVertsPerPoly: 6,
            detailSampleDist: 6,
            detailSampleMaxError: 1,
        };
        this.navigationPlugin.createMavMesh([navMesh], parameters);
        // let navmeshdebug = self.navigationPlugin.createDebugNavMesh(scene);
        // var matdebug = new BABYLON.StandardMaterial('matdebug', scene);
        // matdebug.diffuseColor = new BABYLON.Color3(0.1, 0.2, 1);
        // matdebug.alpha = 0.2;
        // navmeshdebug.material = matdebug;
        this.crowd = this.navigationPlugin.createCrowd(10, 0.1, scene);
    }

    public addAgent(mesh: BABYLON.Mesh): number {
        let agentParams = {
            radius: 4,
            height: 4,
            maxAcceleration: 100,
            maxSpeed: 12.0,
            collisionQueryRange: 1,
            pathOptimizationRange: 1,
            separationWeight: 1};

        let randomPos = this.navigationPlugin.getRandomPointAround(new BABYLON.Vector3(-2.0, 0.1, -1.8), 0.5);
        return this.crowd.addAgent(randomPos, agentParams, mesh);
    }
}
