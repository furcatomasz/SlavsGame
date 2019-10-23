import {SocketEvent} from "../SocketEvent";
import {Player} from "../../Characters/Player";
import {AbstractCharacter} from "../../Characters/AbstractCharacter";
import {Game} from "../../Game";

export class OnUpdatePlayers extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let self = this;
        let game = this.game;

        this.socket.on('updatePlayer', function (updatedPlayer) {
            let player = null;
            if(!updatedPlayer.activePlayer.id) {
                return;
            }

            game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.getSceneManger().remotePlayers[key];
                    return;
                }
            });

            if(!player) {
                player = new Player(game, false, updatedPlayer);
                game.getSceneManger().remotePlayers.push(player);
            }

            ///action when hp of character is changed
            if (player.statistics.hp != updatedPlayer.activePlayer.statistics.hp) {
                let damage = (player.statistics.hp - updatedPlayer.activePlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.activePlayer.statistics.hp;
                setTimeout(function () {
                    player.bloodParticles.start();
                    player.refreshHpInGui();
                    setTimeout(function () {
                        player.bloodParticles.stop();
                    }, 100);
                    player.showDamage(damage);

                    if (player.isControllable) {
                        player.refreshHpInGui();
                    }

                    if (player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.isDeath = true;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }

                }, 400);

            }

            if (Number.isInteger(updatedPlayer.attack) && !player.isAttack) {
                let targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3, Math.PI);
                }

                let attackAnimation = (Game.randomNumber(1, 2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, () => {
                    if (player.dynamicFunction !== undefined) {
                        game.getBabylonScene().unregisterBeforeRender(player.dynamicFunction);
                    }
                });

                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                return;
            }

            if (updatedPlayer.targetPoint && !player.isControllable) {
                let targetPointVector3 = new BABYLON.Vector3(updatedPlayer.targetPoint.x, 0, updatedPlayer.targetPoint.z);

                player.runPlayerToPosition(targetPointVector3);
            }

        });

        return this;
    }

}
