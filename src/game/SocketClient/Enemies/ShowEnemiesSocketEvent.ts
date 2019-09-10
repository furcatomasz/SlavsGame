import {SocketEvent} from "../SocketEvent";
import {Monster} from "../../Characters/Monster";

export class ShowEnemiesSocketEvent extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('showEnemies', function (data) {
            game.getSceneManger().enemies = [];
            data.forEach(function (enemyData, key) {
                if (enemyData.statistics.hp > 0) {
                    const newMonster = new Monster(game, key, enemyData);
                    game.getSceneManger().enemies[newMonster.id] = newMonster;
                }
            });
        });

        return this;
    }

}
