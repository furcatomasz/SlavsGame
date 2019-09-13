import {EnvironmentForestHouseTomb} from "../Environment/environmentForestHouseTomb";
import {Game} from "../Game";
import {Scene} from "./Scene";
import * as BABYLON from 'babylonjs';

export class ForestHouseTomb extends Scene {

    static TYPE = 3;

    initScene(game: Game) {
        let self = this;

        BABYLON.SceneLoader.Load("assets/scenes/Forest_House_Tomb/", "Forest_House_Tomb.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentForestHouseTomb(game, scene);

                    //
                    // let item = new Items.Item(game, {
                    //     name: 'LongSword',
                    //     image: 'sword',
                    //     type: 1,
                    //     statistics: {},
                    //     meshName: 'swordLong',
                    // });
                    // Items.DroppedItem.showItem(game, item, {x: 2, z:-3}, 0);
                    //
                    // let item = new Items.Item(game, {
                    //     name: 'shieldWoodenSmall',
                    //     image: 'shieldWoodenSmall',
                    //     type: 1,
                    //     statistics: {},
                    //     meshName: 'shieldWoodenSmall',
                    // });
                    // Items.DroppedItem.showItem(game, item, {x: 4, z:-7}, 0);
                }, null);
        });
    }

}
