/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var Character = (function () {
    function Character(name, game) {
        this.name = name;
        this.game = game;
        var skeleton = this.mesh.skeleton;
        skeleton.beginAnimation('stand', true);
        this.mesh.physicsImpostor.physicsBody.fixedRotation = true;
        this.mesh.physicsImpostor.physicsBody.updateMassProperties();
        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(this.mesh);
        this.registerFunctionAfterRender();
        game.scene.registerAfterRender(this.afterRender);
    }
    Character.prototype.createItems = function () {
        this.items = [];
        console.log(this);
        var sword = this.game.items.sword.clone();
        sword.visibility = true;
        this.game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sword);
        sword.physicsImpostor = new BABYLON.PhysicsImpostor(sword, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            restitution: 0
        }, this.game.scene);
        var particleSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.scene);
        particleSystem.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.scene);
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
        // mesh.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
        mesh.position = new BABYLON.Vector3(0, 0, 0);
        mesh.rotation = new BABYLON.Vector3(0, 0, 80);
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
                var skeleton_1 = childMesh.skeleton;
                this.game.client.socket.emit('attack', {
                    attack: true
                });
                self_1.animation = skeleton_1.beginAnimation('atack', false, this.attackSpeed / 100, function () {
                    skeleton_1.beginAnimation('stand', true);
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
            var skeleton_2 = childMesh.skeleton;
            if (emit) {
                this.emitPosition();
            }
            if (!this.animation) {
                self.animation = skeleton_2.beginAnimation('walk', false, this.walkSpeed / 100, function () {
                    skeleton_2.beginAnimation('stand', true);
                    self.animation = null;
                });
            }
        }
    };
    Character.prototype.isAnimationEnabled = function () {
        return this.animation;
    };
    return Character;
}());
Character.WALK_SPEED = 0.021;
Character.ROTATION_SPEED = 0.05;
//# sourceMappingURL=character.js.map