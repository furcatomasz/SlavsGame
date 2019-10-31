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

        game.getSceneManger().options.addMeshToDynamicShadowGenerator(mesh);

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
        const self = this;
        let scene = this.game.getBabylonScene();
        let pcs= new BABYLON.PointsCloudSystem("pcs", 1, scene, { updatable: false});
        pcs.addSurfacePoints(this.mesh, 3000, BABYLON.PointColor.UV, new BABYLON.Color4(1, 0, 0, 1), 1);
        pcs.buildMeshAsync().then(() => {
            pcs.mesh.layerMask = 2;
            self.meshForMove.dispose();
            self.walkSmoke.dispose();
            self.bloodParticles.dispose();

            let fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 1000 }, scene);
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
            fireSystem.emitter = self.meshForMove.position.clone(); // the starting object, the emitter
            fireSystem.minEmitBox = new BABYLON.Vector3(-1, 2, -1); // Starting all from
            fireSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1); // To...
            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
            fireSystem.minSize = 0.3;
            fireSystem.maxSize = 0.6;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.6;
            fireSystem.emitRate = 1000;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 20, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 8, 0);
            fireSystem.minAngularSpeed = 0;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 2;
            fireSystem.layerMask = 2;

            fireSystem.start();

            let smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 500 }, scene);
            smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
            smokeSystem.emitter = self.meshForMove.position.clone();
            smokeSystem.minEmitBox = new BABYLON.Vector3(-0.8, 3, -0.8);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(0.8, 1, 0.8);
            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1;
            smokeSystem.minLifeTime = 0.5;
            smokeSystem.maxLifeTime = 0.7;
            smokeSystem.emitRate = 5000;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 20, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(-1, 6, -1);
            smokeSystem.direction2 = new BABYLON.Vector3(0.5, 6, 0.5);
            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 1;
            smokeSystem.maxEmitPower = 2;
            smokeSystem.layerMask = 2;

            smokeSystem.start();

            setTimeout(() => {
                smokeSystem.stop();
                fireSystem.stop();
            }, 500);


            let observer = scene.onBeforeRenderObservable.add(() => {
                // pcs.mesh.position.y += 0.1;
                // pcs.mesh.material.alpha -= 0.04;
            });
            setTimeout(() => {
                scene.onBeforeRenderObservable.remove(observer);
                smokeSystem.dispose();
                fireSystem.dispose();
                // pcs.dispose();
            }, 3000);
        });

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
                    self.removeFromWorld();
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
