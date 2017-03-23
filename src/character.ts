import Animatable = BABYLON.Animatable;
import Mesh = BABYLON.Mesh;

class Character {
    public mesh: Mesh;
    public id:number;
    public name:string;
    public hp:number;
    protected speed:number;
    protected animation:Animatable;

    constructor(mesh:BABYLON.Mesh, name:string, game: Game) {
        this.mesh = mesh;
        this.name = name;

        game.scene.beginAnimation(mesh.skeleton, 45, 80, true);

    }
}