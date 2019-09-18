import {Game} from "../Game";
import {EnvironmentSelectCharacter} from "../Environment/environmentSelectCharacter";
import {Scene} from "./Scene";
import {Warrior} from "../Characters/selectCharacter/Warrior";
import {SelectCharacter as SelectCharacterPanel} from "../GUI/SelectCharacter";
import * as BABYLON from 'babylonjs';

export class SelectCharacter extends Scene {

    static TYPE = 4;

    initScene(game:Game) {

        let self = this;
        let playersToSelect = [];
        let gui = null;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene, true)
                .executeWhenReady(function () {
                    new EnvironmentSelectCharacter(game, scene);

                    game.socketClient.socket.on('showPlayersToSelect', function(players) {
                        playersToSelect.forEach((playerSelect) => {
                            playerSelect.mesh.dispose();
                        });
                        playersToSelect = [];

                      for (let i = 0; i < players.length; i++) {
                          let player = players[i];
                          playersToSelect.push(new Warrior(game, i, player));
                      }

                        if(gui) {
                            gui.texture.dispose();
                        }
                        if(playersToSelect.length < 2) {
                            gui = new SelectCharacterPanel(game);
                        }
                    });

                }, null, false);
        });

    }

}
