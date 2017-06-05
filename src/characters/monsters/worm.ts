/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>

class Worm extends Monster {
    
    constructor(name:string, game:Game) {
        super(name, game);

        let mesh = game.characters['worm'].clone();
        let skeleton = game.characters['worm'].skeleton.clone();
        let material = game.characters['worm'].material.clone();

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        mesh.position = new BABYLON.Vector3(Game.randomNumber(3,-10), 1.1, Game.randomNumber(-10,-16));
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass:1, friction:0.01, restitution:0.2}, game.scene);

        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;

        this.mesh = mesh;
        this.name = name;
        this.game = game;

        skeleton.beginAnimation('stand', true);
    }
    
}
