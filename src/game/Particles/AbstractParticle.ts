import {Game} from "../game";

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
