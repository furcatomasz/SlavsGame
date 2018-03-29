namespace Scenes {
    export class Manager {

        /**
         *
         * @param {int} sceneType
         * @returns {AbstractScene}
         */
        public static factory(sceneType: int): Scene {
            let scene = null;

            switch (sceneType) {
                case ForestHouse.TYPE:
                    scene = new ForestHouse();
                    break;
                case ForestHouseStart.TYPE:
                    scene = new ForestHouseStart();
                    break;
            }

            if (!scene) {
                throw new TypeError('Wrong scene type.');
            }

            return scene;
        }


    }
}
