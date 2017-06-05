class Enemy {


    constructor(game: Game) {

        



        
        let self = this;
        this.afterRender = function() {
            if(game.player) {
                if (self.visibilityArea.intersectsMesh(game.player.character.mesh, false)) {
                    self.character.mesh.lookAt(game.player.character.mesh.position);

                    var playerMesh = game.player.character.mesh.getChildMeshes()[0];
                    if(self.attackArea.intersectsMesh(playerMesh, false)) {
                        self.character.runAnimationHit();

                        //if (self.character.items.weapon.intersectsMesh(game.player.character.mesh, false)) {
                        //    playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                        //
                        //    var value = game.guiElements.hpBar.getValue();
                        //
                        //    game.guiElements.hpBar.updateValue(value - 0.2);
                        //
                        //    if(value-0.1 < 0) {
                        //        alert('Padłeś');
                        //        window.location.reload();
                        //    }
                        //} else {
                        //    playerMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                        //}

                    } else {
                        var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -0.041), self.character.mesh.computeWorldMatrix());
                        self.character.mesh.moveWithCollisions(velocity);
                        self.character.runAnimationWalk();

                    }
                }
            }
        };
        game.scene.registerAfterRender(this.afterRender);
    }
}