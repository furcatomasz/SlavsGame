class Player extends Character{


    constructor(game:Game, id, name) {
        this.id = id;
        this.name = name;

        let self = this;
        let mesh = game.characters['player'].clone();
        let skeleton = game.characters['player'].skeleton.clone();
        let material = game.characters['player'].material.clone();

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.4, 0);

        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1,
            friction: 0.01,
            restitution: 0.0001
        }, game.scene);

        //
        // game.scene.registerAfterRender(function () {
        //     self.weaponCollisions(game, self.character);
        //     self.registerMoving(game, self.character);
        // });
    }

    // protected registerMoving(game:Game, character:Character) {
    //     let walkSpeed = Player.WALK_SPEED * (character.walkSpeed/100);
    //
    //     if (game.controller.left) {
    //         character.mesh.rotate(BABYLON.Axis.Y, -Player.ROTATION_SPEED, BABYLON.Space.LOCAL);
    //     }
    //     if (game.controller.right) {
    //         character.mesh.rotate(BABYLON.Axis.Y, Player.ROTATION_SPEED, BABYLON.Space.LOCAL);
    //     }
    //     character.mesh.computeWorldMatrix(true);
    //     if (game.controller.forward) {
    //         var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -walkSpeed), character.mesh.computeWorldMatrix());
    //         character.mesh.moveWithCollisions(velocity);
    //         character.runAnimationWalk(true);
    //     }
    //     if (game.controller.back) {
    //         var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, walkSpeed), character.mesh.computeWorldMatrix());
    //         character.mesh.moveWithCollisions(velocity);
    //         character.runAnimationWalk(true);
    //     }
    // }
    //
    // protected weaponCollisions(game:Game, character:Character) {
    //
    //     for (var i = 0; i < game.enemies.length; i++) {
    //         var enemy = game.enemies[i];
    //         var characterEnemy = enemy.character;
    //         let characterMesh = characterEnemy.mesh;
    //         if (character.items.weapon.intersectsMesh(characterMesh, false)) {
    //             characterMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
    //
    //             var value = game.guiElements.hpBarEnemy.getValue();
    //             game.guiElements.hpBarEnemy.updateValue(value-1);
    //
    //             if(value-1 < 0) {
    //                 game.scene.unregisterAfterRender(enemy.afterRender);
    //                 enemy.visibilityArea.dispose();
    //                 enemy.attackArea.dispose();
    //                 characterMesh.dispose();
    //                 //characterEnemy.items.weapon.dispose();
    //                 //characterEnemy.items.weapon.setEnabled(false);
    //                 game.enemies = [];
    //                 game.guiElements.hpBarEnemy.updateValue(100);
    //                 new Enemy(game);
    //             }
    //
    //         } else {
    //             characterMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
    //         }
    //
    //     }
    // }
}