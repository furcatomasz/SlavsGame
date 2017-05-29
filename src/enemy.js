var Enemy = (function () {
    function Enemy(game) {
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        var mainMesh = BABYLON.MeshBuilder.CreateBox('enemy', { width: 0.5, size: 0.7 }, game.scene);
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.parent = mainMesh;
        mesh.position = new BABYLON.Vector3(0, -0.4, -0.3);
        mainMesh.position = new BABYLON.Vector3(Game.randomNumber(3, -10), 1.1, Game.randomNumber(-10, -16));
        mainMesh.visibility = false;
        mainMesh.physicsImpostor = new BABYLON.PhysicsImpostor(mainMesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.01, restitution: 0.2 }, game.scene);
        var attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: 1.7, height: 0.1, size: 1.7 }, game.scene);
        attackArea.parent = mainMesh;
        attackArea.visibility = false;
        var visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: 12, height: 0.1, size: 12 }, game.scene);
        visivilityArea.parent = mainMesh;
        visivilityArea.visibility = false;
        this.visibilityArea = visivilityArea;
        this.attackArea = attackArea;
        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mainMesh, name, game);
        game.enemies.push(this);
        var self = this;
        this.afterRender = function () {
            if (game.player) {
                if (self.visibilityArea.intersectsMesh(game.player.character.mesh, false)) {
                    self.character.mesh.lookAt(game.player.character.mesh.position);
                    var playerMesh = game.player.character.mesh.getChildMeshes()[0];
                    if (self.attackArea.intersectsMesh(playerMesh, false)) {
                        self.character.runAnimationHit();
                        if (self.character.items.weapon.intersectsMesh(game.player.character.mesh, false)) {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                            var value = game.guiElements.hpBar.getValue();
                            game.guiElements.hpBar.updateValue(value - 0.2);
                            if (value - 0.1 < 0) {
                                alert('Padłeś');
                                window.location.reload();
                            }
                        }
                        else {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                        }
                    }
                    else {
                        var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -0.041), self.character.mesh.computeWorldMatrix());
                        self.character.mesh.moveWithCollisions(velocity);
                        self.character.runAnimationWalk();
                    }
                }
            }
        };
        game.scene.registerAfterRender(this.afterRender);
    }
    return Enemy;
})();
//# sourceMappingURL=enemy.js.map