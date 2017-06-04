import Animatable = BABYLON.Animatable;
import Mesh = BABYLON.Mesh;

class Worm {
    public mesh:Mesh;
    public id:number;
    public name:string;

    /** Character atuts */
    public hp:number;
    public attackSpeed:number;
    public damage:number;
    public walkSpeed:number;
    public blockChance:number;

    protected game:Game;
    protected animation:Animatable;

    constructor(mesh:BABYLON.Mesh, name:string, game:Game) {
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;

        this.mesh = mesh;
        this.name = name;
        this.game = game;

        let skeleton = this.mesh.skeleton;
        skeleton.beginAnimation('stand', true);
        //*atack
        //relax
        //stand
        //walk
    }

    /**
     * ANIMATIONS
     */
    public runAnimationHit():void {
        if (!this.animation) {
            let self = this;
            var childMesh = this.mesh;

            if(childMesh) {
                let skeleton = childMesh.skeleton;

                self.animation = skeleton.beginAnimation('atack', false, this.attackSpeed / 100, function () {
                    skeleton.beginAnimation('stand', true);
                    self.animation = null;
                });
            }
        }
    }

    public runAnimationWalk(emit:boolean):void {
        let self = this;
        let rotation;
        var childMesh = this.mesh;

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
                self.animation = skeleton.beginAnimation('walk', false, this.walkSpeed / 100, function () {
                    skeleton.beginAnimation('stand', true);
                    self.animation = null;
                });
            }
        }
    }

    public isAnimationEnabled() {
        return this.animation;
    }
}