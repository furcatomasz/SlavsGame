/// <reference path="../game.ts"/>
namespace Items {
    export abstract class Item {

        protected game:Game;
        protected mesh:BABYLON.Mesh;

        /** Values */
        protected mountType: number;
        protected mountBoneName: string;
        public name:string;
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

        /**
         * Value 1 define mounting item usign bone, value 2 define mouting using skeleton.
         *
         * @param player
         * @returns {Items.Item}
         */
        public mount(player:Player) {
            if (this.mountType == 1) {

                player.mount(this.mesh, this.mountBoneName);
            } else if(this.mountType == 2) {
                this.mesh.parent = player.mesh;
                this.mesh.skeleton = player.mesh.skeleton;
            }

            return this;
        }
    }
}