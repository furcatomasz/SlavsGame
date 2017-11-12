/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>

class Worm extends Monster {

    constructor(serverKey: number, name:string, game:Game, position: BABYLON.Vector3, rotationQuaternion: BABYLON.Quaternion) {

        let mesh = game.factories['worm'].createInstance('Worm', true);

        mesh.visibility = true;
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        mesh.skeleton.bones.forEach(function(bone) {
            bone.animations.forEach(function(animation) {
                animation.enableBlending = true;
                animation.blendingSpeed = 0.3;
            });
        });
        this.statistics = new Attributes.CharacterStatistics(80,80,100,3,10,40,0,100);
        this.id = serverKey;
        this.mesh = mesh;
        this.visibilityAreaSize = 30;
        this.attackAreaSize = 6;
        this.experienceToWin = 10;

        //this.sfxWalk = new BABYLON.Sound("WormWalk", "/babel/Characters/Worm/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
        this.sfxHit = new BABYLON.Sound("WormWalk", "/assets/Characters/Worm/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
        super(name, game);
    }

    public runAnimationWalk():void {
        let self = this;
        let loopAnimation = this.isControllable;

        let skeleton = this.mesh.skeleton;

        if (!this.animation && skeleton) {
            self.animation = skeleton.beginAnimation('Walk', loopAnimation, 1, function () {
                skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                self.animation = null;
            });


        }

    }
    
}
