/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var Character = (function () {
    function Character(name, game) {
        this.name = name;
        this.game = game;
        var skeleton = this.mesh.skeleton;
        skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
        this.mesh.physicsImpostor.physicsBody.fixedRotation = true;
        this.mesh.physicsImpostor.physicsBody.updateMassProperties();
        this.mesh.receiveShadows = true;
        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(this.mesh);
        this.sfxWalk = new BABYLON.Sound("Fire", "assets/sounds/character/walk/1.wav", this.game.getScene(), null, { loop: false, autoplay: false });
        this.sfxWalk.attachToMesh(this.mesh);
        this.sfxWalk.setVolume(8);
        this.registerFunctionAfterRender();
        game.getScene().registerAfterRender(this.afterRender);
    }
    Character.prototype.createItems = function () {
        this.items = [];
        var sword = this.game.items.sword.instance('Sword', false);
        var shield = this.game.items.shield.instance('Shield', false);
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
    };
    Character.prototype.mount = function (mesh, boneName) {
        var boneIndice = -1;
        var meshCharacter = this.mesh;
        var skeleton = meshCharacter.skeleton;
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
    ;
    /**
     * ANIMATIONS
     */
    Character.prototype.runAnimationHit = function () {
        if (!this.animation) {
            var self_1 = this;
            var childMesh = this.mesh;
            if (childMesh) {
                var skeleton = childMesh.skeleton;
                this.game.client.socket.emit('attack', {
                    attack: true
                });
                self_1.animation = skeleton.beginAnimation(Character.ANIMATION_ATTACK, false, this.attackSpeed / 100, function () {
                    skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self_1.animation = null;
                    self_1.game.client.socket.emit('attack', {
                        attack: false
                    });
                });
            }
        }
    };
    Character.prototype.emitPosition = function () {
        var rotation;
        if (this.game.client.socket) {
            if (this.mesh.rotationQuaternion) {
                rotation = this.mesh.rotationQuaternion;
            }
            else {
                rotation = new BABYLON.Quaternion(0, 0, 0, 0);
            }
            this.game.client.socket.emit('moveTo', {
                p: this.mesh.position,
                r: rotation
            });
        }
    };
    Character.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var childMesh = this.mesh;
        if (childMesh) {
            var skeleton = childMesh.skeleton;
            if (emit) {
                this.emitPosition();
            }
            if (!this.animation) {
                //self.sfxWalk.play(1);
                self.animation = skeleton.beginAnimation(Character.ANIMATION_WALK, false, this.walkSpeed / 100, function () {
                    skeleton.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                });
            }
        }
    };
    Character.prototype.isAnimationEnabled = function () {
        return this.animation;
    };
    Character.WALK_SPEED = 0.15;
    Character.ROTATION_SPEED = 0.05;
    Character.ANIMATION_WALK = 'Run';
    Character.ANIMATION_STAND = 'stand';
    Character.ANIMATION_STAND_WEAPON = 'Stand_with_weapon';
    Character.ANIMATION_ATTACK = 'Attack';
    return Character;
})();
//# sourceMappingURL=character.js.map