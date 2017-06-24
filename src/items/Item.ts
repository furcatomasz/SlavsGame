/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
namespace Items {
    export abstract class Item {

        protected game:Game;
        protected mesh:BABYLON.Mesh;
        /** Values */
        public name:string;
        public damage:number;
        public armor:number;

        /** Sounds */
        public sfxHit:BABYLON.Sound;
        public sfxPunch:BABYLON.Sound;

        /** Particles */
        public particles;

        constructor(game:Game) {
            this.game = game;
        }
    }
}