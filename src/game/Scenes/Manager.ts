import {ForestHouse} from "./ForestHouse";
import {ForestHouseStart} from "./ForestHouseStart";
import {ForestHouseTomb} from "./ForestHouseTomb";
import {SelectCharacter} from "./SelectCharacter";
import {Battleground} from "./Battleground";
import {MountainsPass} from "./MountainsPass";
import {Scene} from "./Scene";
import {CaveExit} from "./Mountains/CaveExit/CaveExit";
import {Arena} from "./Mountains/Town/Arena";

export class Manager {

        public static factory(sceneType: number): Scene {
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
                case Arena.TYPE:
                    scene = new Arena();
                    break;
            }

            if (!scene) {
                throw new TypeError('Wrong scene type.');
            }

            return scene;
        }


    }
