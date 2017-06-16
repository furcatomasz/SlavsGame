/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>

abstract class Character {

    public static WALK_SPEED:number = 0.1;
    public static ROTATION_SPEED:number = 0.05;

    public static ANIMATION_WALK:string = 'Stand_with_weapon';
    public static ANIMATION_STAND:string = 'stand';
    public static ANIMATION_STAND_WEAPON:string = 'Stand_with_weapon';
    public static ANIMATION_ATTACK:string = 'atack';

    public mesh:BABYLON.Mesh;
    public id:number;
    public name:string;

    public x:number;
    public y:number;
    public z:number;

    /** Character atuts */
    public hp:number;
    public attackSpeed:number;
    public damage:number;
    public walkSpeed:number;
    public blockChance:number;

    public items;

    protected game:Game;
    protected speed:number;
    protected animation:BABYLON.Animatable;
    protected weaponPS:BABYLON.ParticleSystem;
    protected afterRender;
    protected isControllable:boolean;

    constructor(name:string, game:Game) {
        this.name = name;
        this.game = game;

        let skeleton = this.mesh.skeleton;
        skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);

        this.mesh.physicsImpostor.physicsBody.fixedRotation = true;
        this.mesh.physicsImpostor.physicsBody.updateMassProperties();

        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(this.mesh);

        this.registerFunctionAfterRender();
        game.getScene().registerAfterRender(this.afterRender);
    }

    public createItems() {
        this.items = [];
        let sword = this.game.items.sword.instance('Sword', false);
        let shield = this.game.items.shield.instance('Shield', false);

        this.game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sword);
        this.game.sceneManager.shadowGenerator.getShadowMap().renderList.push(shield);

        sword.physicsImpostor = new BABYLON.PhysicsImpostor(sword, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            restitution: 0
        }, this.game.scene);

        shield.physicsImpostor = new BABYLON.PhysicsImpostor(shield, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            restitution: 0
        }, this.game.scene);

        var particleSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
        particleSystem.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.getScene());
        particleSystem.emitter = sword;
        particleSystem.minEmitBox = new BABYLON.Vector3(0, -70, 0); // Starting all from
        particleSystem.maxEmitBox = new BABYLON.Vector3(0, -70, 0); // To...

        particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
        particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
        particleSystem.colorDead = new BABYLON.Color4(1, 1, 1, 0.0);

        particleSystem.minSize = 0.2;
        particleSystem.maxSize = 0.5;

        particleSystem.minLifeTime = 0.05;
        particleSystem.maxLifeTime = 0.2;

        particleSystem.emitRate = 800;

        particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

        particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

        particleSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
        particleSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

        particleSystem.minAngularSpeed = -10.0;
        particleSystem.maxAngularSpeed = 10.0;

        particleSystem.minEmitPower = 0.1;
        particleSystem.maxEmitPower = 1;
        particleSystem.updateSpeed = 0.005;

        this.weaponPS = particleSystem;

        this.items.weapon = sword;
        this.items.shield = shield;
    }

    public mount(mesh, boneName) {
        var boneIndice = -1;
        var meshCharacter = this.mesh;
        let skeleton = meshCharacter.skeleton;

        for (var i = 0; i < skeleton.bones.length; i++) {
            if (skeleton.bones[i].name == boneName) {
                boneIndice = i;
                break;
            }
        }
        var bone = skeleton.bones[boneIndice];

        mesh.attachToBone(bone, meshCharacter);
        mesh.position = new BABYLON.Vector3(0, 0, 0);

        bone.getRotationToRef(BABYLON.Space.WORLD, meshCharacter, mesh.rotation);
        mesh.rotation = mesh.rotation.negate();
        mesh.rotation.z = -mesh.rotation.z;

    };


    /**
     * ANIMATIONS
     */
    public runAnimationHit():void {
        if (!this.animation) {
            let self = this;
            var childMesh = this.mesh;

            if (childMesh) {
                let skeleton = childMesh.skeleton;

                this.game.client.socket.emit('attack', {
                    attack: true
                });

                self.animation = skeleton.beginAnimation(Character.ANIMATION_ATTACK, false, this.attackSpeed / 100, function () {
                    skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;

                    self.game.client.socket.emit('attack', {
                        attack: false
                    });
                });
            }
        }
    }

    public emitPosition() {
        let rotation;

        if (this.game.client.socket) {
            if (this.mesh.rotationQuaternion) {
                rotation = this.mesh.rotationQuaternion;
            } else {
                rotation = new BABYLON.Quaternion(0, 0, 0, 0);
            }

            this.game.client.socket.emit('moveTo', {
                p: this.mesh.position,
                r: rotation
            });
        }
    }

    public runAnimationWalk(emit:boolean):void {
        let self = this;
        var childMesh = this.mesh;

        if (childMesh) {
            let skeleton = childMesh.skeleton;

            if (emit) {
                this.emitPosition();
            }

            if (!this.animation) {
                self.animation = skeleton.beginAnimation(Character.ANIMATION_WALK, false, this.walkSpeed / 100, function () {
                    skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                });
            }
        }
    }

    public isAnimationEnabled() {
        return this.animation;
    }

    abstract removeFromWorld();

    abstract registerFunctionAfterRender();
}