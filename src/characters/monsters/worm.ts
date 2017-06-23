/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>

class Worm extends Monster {

    constructor(serverKey: number, name:string, game:Game, position: BABYLON.Vector3, rotationQuaternion: BABYLON.Quaternion) {

        let mesh = game.characters['worm'].instance('Worm', true);

        mesh.visibility = true;
        mesh.position = position;
        mesh.rotation = rotationQuaternion;

        this.hp = 100;
        this.hpMax = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 50;
        this.damage = 0.2;
        this.blockChance = 50;
        this.id = serverKey;
        this.mesh = mesh;
        this.visibilityAreaSize = 30;
        this.attackAreaSize = 6;

        super(name, game);
    }

    public runAnimationWalk(emit:boolean):void {
        let self = this;
        var childMesh = this.mesh;
        let loopAnimation = this.isControllable;

        if (childMesh) {
            let skeleton = childMesh.skeleton;

            if (emit) {
                this.emitPosition();
            }

            if (!this.animation) {
                //self.sfxWalk.play(1);
                self.animation = skeleton.beginAnimation('Walk', loopAnimation, this.walkSpeed / 50, function () {
                    skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                });


            }

        }
    }
    
}
