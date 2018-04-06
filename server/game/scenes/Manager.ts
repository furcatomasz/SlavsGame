namespace Server.Scenes {
    export class Manager {

        /**
         *
         * @param {int} sceneType
         * @returns {AbstractScene}
         */
        public static factory(sceneType: int): Server.Scenes.AbstractScene {
            let scene = null;

            switch (sceneType) {
                case ForestHouse.TYPE:
                    scene = new ForestHouse();
                    break;
                case ForestHouseStart.TYPE:
                    scene = new ForestHouseStart();
                    break;
                case ForestHouseTomb.TYPE:
                    scene = new ForestHouseTomb();
                    break;
            }

            if(!scene) {
                throw new TypeError('Wrong scene type.');
            }

            return scene;
        }


    }
}