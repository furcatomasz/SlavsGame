import {AbstractCharacter} from "./AbstractCharacter";
import {Game} from "../Game";
import {Blood} from "../Particles/Blood";
import {WalkSmoke} from "../Particles/WalkSmoke";
import * as BABYLON from 'babylonjs';

export class Monster extends AbstractCharacter {

    protected target: string;
    public intervalAttackRegisteredFunction;
    public checkAttackObserver;

    constructor(game: Game, serverKey: number, serverData: any) {
        super(serverData.name, game);

        this.statistics = serverData.statistics;
        this.id = serverKey;

        this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        this.createMesh(serverData.type, serverData.meshName, new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale));
        this.initSfx();
        this.registerActions();

        this.bloodParticles = new Blood(game, this.mesh).particleSystem;
        this.walkSmoke = WalkSmoke.getParticles(game.getBabylonScene(), 2, this.mesh);

        this.initPatricleSystemDamage();
    }

    private createMesh(factoryName:string, meshName:string, scale: BABYLON.Vector3) {
        const game = this.game;

        let mesh = game.getSceneManger().assets.getAssetFactoryByName(factoryName).createClone(meshName, true);
        mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        mesh.visibility = 1;
        mesh.isPickable = false;
        mesh.scaling = scale;
        mesh.skeleton.enableBlending(0.2);
        mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        mesh.outlineWidth = 0.1;
        mesh.parent = this.meshForMove;

        // game.getSceneManger().options.addMeshToDynamicShadowGenerator(mesh);

        this.mesh = mesh;
    }

    private registerActions() {
        const game = this.game;
        let self = this;

        this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getBabylonScene());
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPointerOutTrigger, () => {
                self.mesh.renderOutline = false;
                self.game.gui.characterTopHp.hideHpBar();
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPointerOverTrigger, () => {
                self.mesh.renderOutline = true;
                self.game.gui.characterTopHp.showHpCharacter(self);
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickDownTrigger, () => {
                game.player.attackActions.attackMonster(self);
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickUpTrigger, () => {
                game.player.attackActions.attackOnlyOnce();
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickOutTrigger, () => {
                game.player.attackActions.abbadonMonsterAttack();
            }));

    }

    private initSfx() {
        const game = this.game;

        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getBabylonScene(), null, {
            loop: false,
            autoplay: false
        });

        this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getBabylonScene(), null, {
            loop: false,
            autoplay: false
        });
    }

    public removeFromWorld() {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }

        this.meshForMove.dispose();
        this.walkSmoke.dispose();
        this.bloodParticles.dispose();
    }

    retrieveHit(updatedEnemy) {
        let self = this;

        if (this.statistics.hp != updatedEnemy.statistics.hp) {
            let damage = (this.statistics.hp - updatedEnemy.statistics.hp);
            this.statistics.hp = updatedEnemy.statistics.hp;

            setTimeout(() => {
                self.bloodParticles.start();
                self.showDamage(damage);
                setTimeout(() => {
                    self.bloodParticles.stop();
                }, 100);

                if (self.statistics.hp <= 0) {
                    self.isDeath = true;
                    self.animation.stop();
                    setTimeout(() => {
                        self.removeFromWorld();
                    }, 6000);
                }

                self.game.gui.characterTopHp.refreshPanel();
            }, 400);

        }
    }

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }
}
