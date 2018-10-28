namespace Scenes {
    import int = BABYLON.int;

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
                case ForestHouseTomb.TYPE:
                    scene = new ForestHouseTomb();
                    break;
                case SelectCharacter.TYPE:
                    scene = new SelectCharacter();
                    break;
                case Battleground.TYPE:
                    scene = new Battleground();
                    break;
                case MountainsPass.TYPE:
                    scene = new MountainsPass();
                    break;
                case CaveExit.TYPE:
                    scene = new CaveExit();
                    break;
            }

            if (!scene) {
                throw new TypeError('Wrong scene type.');
            }

            return scene;
        }


    }
}
