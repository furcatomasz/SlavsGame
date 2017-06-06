/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>

class Worm extends Monster {

    constructor(serverKey: number, name:string, game:Game, position: BABYLON.Vector3, rotationQuaternion: BABYLON.Quaternion) {
        let mesh = game.characters['worm'].clone();
        let skeleton = game.characters['worm'].skeleton.clone();
        let material = game.characters['worm'].material.clone();

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 20,
            friction: 1,
            restitution: 0.2
        }, game.scene);

        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 200;
        this.damage = 5;
        this.blockChance = 50;
        this.id = serverKey;
        this.mesh = mesh;
        this.visibilityAreaSize = 40;
        this.attackAreaSize = 5;

        skeleton.beginAnimation('stand', true);

        super(name, game);
    }

    
}
