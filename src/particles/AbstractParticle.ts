/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
namespace Particles {
    export abstract class AbstractParticle {

        protected game:Game;
        protected emitter:BABYLON.Mesh;
        public particleSystem:BABYLON.ParticleSystem;

        constructor(game:Game, emitter:BABYLON.AbstractMesh) {
            this.game = game;
            this.emitter = emitter;

            this.initParticleSystem();
        }

        abstract initParticleSystem();
    }
}