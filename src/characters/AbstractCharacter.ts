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
    public id:string;
    public name:string;

    /** Character atuts */
    public statistics;

    protected game:Game;
    public animation:BABYLON.Animatable;
    public isControllable:boolean;
    protected attackAnimation: boolean;
    protected attackHit: boolean;
    public attackArea:BABYLON.Mesh;

    public sfxWalk: BABYLON.Sound;
    protected sfxHit: BABYLON.Sound;

    public bloodParticles: BABYLON.ParticleSystem;
    public meshCharacterTexture: BABYLON.AbstractMesh;
    public meshAdvancedTexture: BABYLON.AbstractMesh;

    constructor(name:string, game:Game) {
        this.game = game;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);

        let plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 4, height: 6}, game.getScene());
        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

        plane.isPickable = false;
        plane.parent = this.mesh;
        plane.position.y = 2;
        plane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
        this.meshCharacterTexture = plane;
        this.meshAdvancedTexture = advancedTexture;
    }

    public runAnimationHit(animation: string, callbackStart = null, callbackEnd = null, loop: boolean = false):void {
        if (this.animation && ! this.attackAnimation) {
            this.animation.stop();
        } else if (this.animation && this.attackAnimation) {
            return;
        }
        
            let self = this;
            var childMesh = this.mesh;

            if (childMesh) {
                let skeleton = childMesh.skeleton;
                if(skeleton) {

                    self.attackAnimation = true;
                    self.onHitStart();
                    if(callbackEnd) {
                        callbackStart();
                    }

                    self.animation = skeleton.beginAnimation(animation, loop, this.statistics.attackSpeed / 100, function () {
                        if(callbackEnd) {22
                            callbackEnd();
                        }
                        skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        self.animation = null;
                        self.attackAnimation = false;
                        self.game.controller.attackPoint = null;
                        self.onHitEnd();
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
                self.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, 1.4, function () {
                    skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                    self.sfxWalk.stop();
                    self.onWalkEnd();
                });


            }

        }
    }


    abstract removeFromWorld();

    /** Events */
    protected onHitStart() {};
    protected onHitEnd() {};

    protected onWalkStart() {};
    protected onWalkEnd() {};
}