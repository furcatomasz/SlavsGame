import {Game} from "../../game";
import * as BABYLON from 'babylonjs';

export abstract class AbstractSolidParticle {

    protected game: Game;
    protected shape: BABYLON.Mesh;
    protected parent: BABYLON.AbstractMesh;
    protected collider: BABYLON.Mesh;
    public particleSystem: BABYLON.ParticleSystem;
    public spsMesh: BABYLON.Mesh;

    constructor(game: Game, parent: BABYLON.AbstractMesh, shape: BABYLON.Mesh, isCollider: boolean = false) {
        this.game = game;
        this.parent = parent;
        this.shape = shape;
        if (isCollider) {
            this.collider = BABYLON.MeshBuilder.CreateBox("box", {height: 10}, game.getBabylonScene());
            this.collider.visibility = 0;
        }

        parent.visibility = 0;
        parent.isPickable = false;
    }

    abstract buildSPS(count: number): AbstractSolidParticle;
}
