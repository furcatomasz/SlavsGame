import Animatable = BABYLON.Animatable;
import Mesh = BABYLON.Mesh;

class Character {
    public mesh:Mesh;
    public id:number;
    public name:string;
    public hp:number;
    public items;

    protected game:Game;
    protected speed:number;
    protected animation:Animatable;

    constructor(mesh:BABYLON.Mesh, name:string, game:Game) {
        this.mesh = mesh;
        this.name = name;
        this.game = game;
        this.items = [];
        this.createItems();

        this.runAnimationStand();
        this.mount(this.items.weapon, 'hand.R')
    }

    public runAnimationStand() :void {
        if (!this.animation) {
            this.game.scene.beginAnimation(this.mesh.skeleton, 215, 280, true);
        }
    };

    protected createItems()
    {
        let sword = this.game.items.sword.clone();
        sword.visibility = true;
        this.game.shadowGenerator.getShadowMap().renderList.push(sword);

        this.items.weapon = sword;
    }

    public mount(mesh, boneName) {
        var boneIndice = -1;

        for (var i = 0; i < this.mesh.skeleton.bones.length; i++) {
            if (this.mesh.skeleton.bones[i].name == boneName) {
                boneIndice = i;
                break;
            }
        }
        var bone = this.mesh.skeleton.bones[boneIndice];

        mesh.attachToBone(bone, this.mesh);

    };

    /**
     * ANIMATIONS
     */
    public runAnimationHit():void {
        let self = this;
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 0, 15, false, 0.8, function () {
                self.animation = null;
                self.runAnimationStand();
            });
        }
    }

    public runAnimationWalk(emit: boolean):void {
        let self = this;
        let rotation;

        if (emit && self.game.client.socket) {
            if(self.mesh.rotationQuaternion) {
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
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 372, 390, false, 0.7, function () {
                self.animation = null;
                self.runAnimationStand();
            });
        }

    }

    public stopAnimation() : void {
        if (this.isAnimationEnabled()) {
            this.animation.stop();
        }
    }
    
    public isAnimationEnabled()
    {
        return this.animation;
    }
}