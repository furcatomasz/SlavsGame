/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>

abstract class AbstractCharacter {

    public static ANIMATION_WALK:string = 'Run';
    public static ANIMATION_STAND:string = 'stand';
    public static ANIMATION_STAND_WEAPON:string = 'Stand_with_weapon';
    public static ANIMATION_ATTACK_01:string = 'Attack';
    public static ANIMATION_ATTACK_02:string = 'Attack02';
    public static ANIMATION_SKILL_01:string = 'Skill01';
    public static ANIMATION_SKILL_02:string = 'Skill02';

    public mesh:BABYLON.Mesh;
    public meshForMove:BABYLON.Mesh;
    public id:string;
    public name:string;

    /** Character atuts */
    public statistics;

    protected game:Game;
    public animation:BABYLON.Animatable;
    public isControllable:boolean;
    public isAttack: boolean;

    public sfxWalk: BABYLON.Sound;
    protected sfxHit: BABYLON.Sound;

    public bloodParticles: BABYLON.GPUParticleSystem;
    public meshCharacterTexture: BABYLON.AbstractMesh;
    public meshAdvancedTexture: BABYLON.AbstractMesh;
    public dynamicFunction;

    constructor(name:string, game:Game) {
        this.name = name;
        this.game = game;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);

        let plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 4, height: 8}, game.getScene());
        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

        plane.isPickable = false;
        plane.parent = this.mesh;
        plane.position.y = 2;
        plane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
        this.meshCharacterTexture = plane;
        this.meshAdvancedTexture = advancedTexture;
    }

    protected createBoxForMove(scene: BABYLON.Scene) {
        this.meshForMove = BABYLON.Mesh.CreateBox(this.name+'_moveBox', 4, scene, false);
        this.meshForMove.checkCollisions = true;
        this.meshForMove.visibility = 0;

        return this;
    }

    public runAnimationHit(animation: string, callbackStart = null, callbackEnd = null, loop: boolean = false):void {
        if (this.animation) {
            this.animation.stop();
        }
        
            let self = this;
            var childMesh = this.mesh;

            if (childMesh) {
                let skeleton = childMesh.skeleton;
                if(skeleton) {
                     self.isAttack = true;
                    if(callbackEnd) {
                        callbackStart();
                    }
                    if(self.sfxHit) {
                        self.sfxHit.play();
                    }

                    self.animation = skeleton.beginAnimation(animation, loop, this.statistics.attackSpeed / 100, function () {
                        if(callbackEnd) {
                            callbackEnd();
                        }

                        skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        self.animation = null;
                        self.isAttack = false;
                    });
                }
            }

    }

    public runAnimationWalk():void {
        let self = this;
        let childMesh = this.mesh;
        let loopAnimation = true;

        if (childMesh) {
            let skeleton = childMesh.skeleton;

            if (!this.animation && skeleton) {
                self.sfxWalk.play();
                self.onWalkStart();
                self.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, 1.3, function () {
                    skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                    self.sfxWalk.stop();
                    self.onWalkEnd();
                });
            }
        }
    }

    public getWalkSpeed() {
        let animationRatio = this.game.getScene().getAnimationRatio();

        return this.statistics.walkSpeed / animationRatio;
    };

    abstract removeFromWorld();

    /** Events */
    protected onWalkStart() {};
    protected onWalkEnd() {};
}