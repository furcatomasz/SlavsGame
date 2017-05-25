var Player = (function () {
    function Player(game, id, name) {
        this.id = id;
        this.name = name;
        var self = this;
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        var mainMesh = BABYLON.MeshBuilder.CreateBox(id + name, { width: 0.5, size: 0.7 }, game.scene);
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.parent = mainMesh;
        mesh.position = new BABYLON.Vector3(0, -0.4, -0.3);
        mainMesh.position = new BABYLON.Vector3(3, 3.1, 0);
        mainMesh.visibility = false;
        mainMesh.physicsImpostor = new BABYLON.PhysicsImpostor(mainMesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1,
            friction: 0.01,
            restitution: 0.2
        }, game.scene);
        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mainMesh, name, game);
        this.weaponCollisions(game, this.character);
        game.scene.registerAfterRender(function () {
            self.registerMoving(game, self.character);
        });
    }
    Player.prototype.registerMoving = function (game, character) {
        var walkSpeed = Player.WALK_SPEED * (character.walkSpeed / 100);
        if (game.controller.left) {
            character.mesh.rotate(BABYLON.Axis.Y, -Player.ROTATION_SPEED, BABYLON.Space.LOCAL);
        }
        if (game.controller.right) {
            character.mesh.rotate(BABYLON.Axis.Y, Player.ROTATION_SPEED, BABYLON.Space.LOCAL);
        }
        character.mesh.computeWorldMatrix(true);
        if (game.controller.forward) {
            var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -walkSpeed), character.mesh.computeWorldMatrix());
            character.mesh.moveWithCollisions(velocity);
            character.runAnimationWalk(true);
        }
        if (game.controller.back) {
            var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, walkSpeed), character.mesh.computeWorldMatrix());
            character.mesh.moveWithCollisions(velocity);
            character.runAnimationWalk(true);
        }
    };
    Player.prototype.weaponCollisions = function (game, character) {
        console.log(game.enemies);
        for (var i = 0; i < game.enemies.length; i++) {
            var enemy = game.enemies[i];
            console.log(character.items.weapon.physicsImpostor);
            console.log(enemy.character.mesh.physicsImpostor);
            character.items.weapon.physicsImpostor.registerOnPhysicsCollide(enemy.character.mesh.physicsImpostor, function (d, s) {
                console.log(d);
                console.log(s);
            });
        }
    };
    Player.WALK_SPEED = 0.041;
    Player.ROTATION_SPEED = 0.05;
    return Player;
})();
//# sourceMappingURL=player.js.map