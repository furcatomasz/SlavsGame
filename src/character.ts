import Animatable = BABYLON.Animatable;
import Mesh = BABYLON.Mesh;

class Character {
    public mesh:Mesh;
    public id:number;
    public name:string;

    /** Character atuts */
    public hp:number;
    public attackSpeed:number;
    public damage:number;
    public walkSpeed:number;
    public blockChance:number;

    public items;

    protected game:Game;
    protected speed:number;
    protected animation:Animatable;
    protected smokeParticlesA:BABYLON.ParticleSystem;

    constructor(mesh:BABYLON.Mesh, name:string, game:Game) {
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;

        this.mesh = mesh;
        this.name = name;
        this.game = game;
        this.items = [];
        this.createItems();

        let skeleton = this.mesh.getChildMeshes()[0].skeleton;
        game.scene.beginAnimation(skeleton, 45, 80, true);
        this.mount(this.items.weapon, 'hand.R');
    }

    protected createItems() {
        let sword = this.game.items.sword.clone();
        sword.visibility = true;
        this.game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sword);

        sword.physicsImpostor = new BABYLON.PhysicsImpostor(sword, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            restitution: 0
        }, this.game.scene);

        var smokeParticlesA = new BABYLON.ParticleSystem("particles", 1000, this.game.scene);
        smokeParticlesA.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.scene);
        smokeParticlesA.emitter = sword;
        smokeParticlesA.minEmitBox = new BABYLON.Vector3(0, -70, 0); // Starting all from
        smokeParticlesA.maxEmitBox = new BABYLON.Vector3(0, -70, 0); // To...

        smokeParticlesA.color1 = new BABYLON.Color4(1, 1, 1, 1);
        smokeParticlesA.color2 = new BABYLON.Color4(1, 1, 1, 1);
        smokeParticlesA.colorDead = new BABYLON.Color4(1, 1, 1, 0.0);

        smokeParticlesA.minSize = 0.2;
        smokeParticlesA.maxSize = 0.5;

        smokeParticlesA.minLifeTime = 0.05;
        smokeParticlesA.maxLifeTime = 0.2;

        smokeParticlesA.emitRate = 800;

        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        smokeParticlesA.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

        smokeParticlesA.gravity = new BABYLON.Vector3(0, -9.81, 0);

        smokeParticlesA.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
        smokeParticlesA.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

        smokeParticlesA.minAngularSpeed = -10.0;
        smokeParticlesA.maxAngularSpeed = 10.0;

        smokeParticlesA.minEmitPower = 0.1;
        smokeParticlesA.maxEmitPower = 1;
        smokeParticlesA.updateSpeed = 0.005;

        this.smokeParticlesA = smokeParticlesA;

        this.items.weapon = sword;
    }

    public mount(mesh, boneName) {
        var boneIndice = -1;
        var meshCharacter = this.mesh.getChildMeshes()[0];
        let skeleton = meshCharacter.skeleton;

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

    /**
     * ANIMATIONS
     */
    public runAnimationHit():void {
        if (!this.animation) {
            let self = this;
            var childMesh = this.mesh.getChildMeshes()[0];

            if(childMesh) {
                let skeleton = childMesh.skeleton;
                this.smokeParticlesA.start();
                self.animation = this.game.scene.beginAnimation(skeleton, 0, 30, false, this.attackSpeed / 100, function () {
                    self.game.scene.beginAnimation(skeleton, 45, 80, true);
                    self.animation = null;
                    self.smokeParticlesA.stop();
                });
            }
        }
    }

    public runAnimationWalk(emit:boolean):void {
        let self = this;
        let rotation;
        var childMesh = this.mesh.getChildMeshes()[0];

        if(childMesh) {
            let skeleton = childMesh.skeleton;

            if (emit && self.game.client.socket) {
                if (self.mesh.rotationQuaternion) {
                    rotation = self.mesh.rotationQuaternion;
                } else {
                    rotation = new BABYLON.Quaternion(0, 0, 0, 0);
                }

                self.game.client.socket.emit('moveTo', {
                    p: self.mesh.position,
                    r: rotation
                });
            }

            if (!this.animation) {
                self.animation = this.game.scene.beginAnimation(skeleton, 90, 109, false, this.walkSpeed / 100, function () {
                    self.game.scene.beginAnimation(skeleton, 45, 80, true);
                    self.animation = null;
                });
            }
        }
    }

    public isAnimationEnabled() {
        return this.animation;
    }
}