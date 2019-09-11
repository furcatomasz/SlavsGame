import {Scene} from "../../Scene";
import {Game} from "../../../game";
import {EnvironmentCaveExit} from "./EnvironmentCaveExit";
import * as BABYLON from 'babylonjs';

export class CaveExit extends Scene {

    static TYPE = 6;

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/caveExit/", "caveExit.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentCaveExit(game);
                }, function() {
                    // new NPC.Guard(game, new BABYLON.Vector3(-117, 0, 128), new BABYLON.Vector3(0, -4.3, 0));
                    // new NPC.Trader(game, new BABYLON.Vector3(-122, 0, -16), new BABYLON.Vector3(0, 0.7, 0));
                    // new NPC.BigWarrior(game, new BABYLON.Vector3(-10, 0, -53), new BABYLON.Vector3(0, 1.54, 0));

                });
        });
    }

}
