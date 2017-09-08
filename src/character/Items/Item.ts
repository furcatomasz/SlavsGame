namespace Items {
    export abstract class Item {
        static readonly TYPE;

        protected game:Game;
        public itemId: Number;
        public mesh:BABYLON.Mesh;

        /** Values */
        public name:string;
        public image:string;

        public statistics: Attributes.ItemStatistics;

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