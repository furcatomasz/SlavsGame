/// <reference path="../game.ts"/>
namespace Items {
    export abstract class Item {
        static readonly TYPE = 0;

        protected game:Game;
        public mesh:BABYLON.Mesh;

        /** Values */
        public mountType: number;
        public mountBoneName: string;
        public name:string;
        public image:string;
        public damage:number;
        public armor:number;

        /** Sounds */
        public sfxHit:BABYLON.Sound;
        public sfxPunch:BABYLON.Sound;

        /** Particles */
        public particles:BABYLON.ParticleSystem;

        /**
         * @param game
         */
        constructor(game:Game) {
            this.game = game;
        }

        abstract getType();

    }
}