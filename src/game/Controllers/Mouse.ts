import {Game} from "../game";
import {ClickParticles} from "../Particles/Pointer/ClickParticles";
import * as BABYLON from 'babylonjs';

export class Mouse {

    protected game: Game;
    public targetPoint;
    public attackPoint: BABYLON.AbstractMesh;

    constructor(game: Game) {
        this.game = game;
    }

    public registerControls(scene: BABYLON.Scene) {
        let self = this;
        let clickTrigger = false;
        let lastUpdate = new Date().getTime() / 1000;
        let game = this.game;
        const clickParticleSystem = ClickParticles.getParticles(scene);

        scene.onPointerUp = function (evt, pickResult) {
            if (clickTrigger) {
                clickTrigger = false;
                let pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                    clickParticleSystem.start();

                    if(game.goToMeshFunction) {
                        scene.unregisterBeforeRender(game.goToMeshFunction);
                        game.goToMeshFunction = null;
                    }
                }
            }
        }

        scene.onPointerDown = function (evt, pickResult) {
            let pickedMesh = pickResult.pickedMesh;
            if (!self.game.player.isAlive || game.player.isAnySkillIsInUse()) {
                return;
            }
            clickTrigger = true;
            if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                game.player.attackActions.cancelCheckAttack();
                self.attackPoint = null;
                self.targetPoint = pickResult.pickedPoint;
                self.targetPoint.y = 0;
                clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z); // the starting location

                self.game.player.runPlayerToPosition(self.targetPoint);
                self.game.client.socket.emit('setTargetPoint', {
                    position: self.targetPoint
                });
            }
        };

        scene.onPointerMove = function (evt, pickResult) {
            if (clickTrigger) {
                if (!self.game.player.isAlive) {
                    return;
                }
                let pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z);

                        self.game.player.runPlayerToPosition(self.targetPoint);

                        if (lastUpdate < (new Date().getTime() / 500) - 0.3) {
                            lastUpdate = (new Date().getTime() / 500);
                            self.game.client.socket.emit('setTargetPoint', {
                                position: self.targetPoint
                            });
                        }
                    }
                }
            }
        };

    }


}
