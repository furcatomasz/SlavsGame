namespace Items {
    export abstract class Item {
        static TYPE = 0;
        static ITEM_ID = 0;

        protected game:Game;
        public itemId: Number;
        public databaseId: Number;
        public mesh:BABYLON.Mesh;

        /** Values */
        public name:string;
        public image:string;

        public statistics: Attributes.ItemStatistics;

        /** Sounds */
        public sfxHit:BABYLON.Sound;

        /** Particles */
        public particles:BABYLON.ParticleSystem;

        /**
         * @param game
         * @param databaseId
         */
        constructor(game:Game, databaseId: Number) {
            this.game = game;
            this.databaseId = databaseId;
        }

        abstract getType();

    }
}