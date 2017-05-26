class Player {

    public static WALK_SPEED:number = 0.041;
    public static ROTATION_SPEED:number = 0.05;

    public id:number;
    public name:string;
    public x:number;
    public y:number;
    public z:number;
    public character:Character;

    constructor(game:Game, id, name) {
        this.id = id;
        this.name = name;

        let self = this;
        let mesh = game.characters['player'].clone();
        let skeleton = game.characters['player'].skeleton.clone();
        let material = game.characters['player'].material.clone();
        let mainMesh = BABYLON.MeshBuilder.CreateBox(id + name, {width: 0.5, size: 0.7}, game.scene);

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

        game.scene.registerAfterRender(function () {
            self.weaponCollisions(game, self.character);
            self.registerMoving(game, self.character);
        });
    }

    protected registerMoving(game:Game, character:Character) {
        let walkSpeed = Player.WALK_SPEED * (character.walkSpeed/100);

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
    }

    protected weaponCollisions(game:Game, character:Character) {

        for (var i = 0; i < game.enemies.length; i++) {
            let characterMesh = game.enemies[i].character.mesh.getChildMeshes()[0];
            if (character.items.weapon.intersectsMesh(characterMesh, true)) {
                characterMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);

                var value = game.guiElements.hpBarEnemy.getValue();
                game.guiElements.hpBarEnemy.updateValue(value-1);

                if(value-1 < 0) {
                    characterMesh.dispose(true);
                    game.enemies = [];
                    game.guiElements.hpBarEnemy.updateValue(100);
                    new Enemy(game);
                }

            } else {
                characterMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
            }

        }
    }
}