import {Scene} from "./Scene";
import {Game} from "../Game";
import {EnvironmentForestHouseStart} from "../Environment/environmentForestHouseStart";
import * as BABYLON from 'babylonjs';

export class ForestHouseStart extends Scene {

    static TYPE = 1;

    initScene(game: Game) {
        let self = this;
        BABYLON.SceneLoader.Load("assets/scenes/forestStartHouse/", "forestHouseStart.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentForestHouseStart(game);
                }, null);
        });
    }

}
