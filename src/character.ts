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

        game.scene.beginAnimation(mesh.skeleton, 45, 80, true);
        this.mount(this.items.weapon, 'hand.R')
    }

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
        // mesh.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
        mesh.position = new BABYLON.Vector3(0, 0, 0);
        mesh.rotation = new BABYLON.Vector3(0, 0, 80);

    };

    /**
     * ANIMATIONS
     */
    public runAnimationHit():void {
        let self = this;
        self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 0, 30, false, 1, function () {
            self.game.scene.beginAnimation(self.mesh.skeleton, 45, 80, true);
            self.animation = null;
        });
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
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 90, 109, false, 1, function () {
                self.game.scene.beginAnimation(self.mesh.skeleton, 45, 80, true);
                self.animation = null;
            });
        }

    }
}