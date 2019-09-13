import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export abstract class AbstractParticle {

    protected game: Game;
    protected emitter: BABYLON.Mesh;
    public particleSystem: BABYLON.IParticleSystem;

    constructor(game: Game, emitter: BABYLON.Mesh) {
        this.game = game;
        this.emitter = emitter;

        this.initParticleSystem();
    }

    abstract initParticleSystem();
}
