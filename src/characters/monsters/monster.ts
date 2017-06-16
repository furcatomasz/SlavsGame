/// <reference path="../character.ts"/>

abstract class Monster extends Character {

    protected visibilityArea: BABYLON.Mesh;
    protected attackArea: BABYLON.Mesh;
    protected haveTarget: boolean;
    protected visibilityAreaSize: number;
    protected attackAreaSize: number;


    constructor(name:string, game:Game) {
        let attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: this.attackAreaSize, height: 0.1, size: this.attackAreaSize}, game.getScene());
        attackArea.parent = this.mesh;
        attackArea.visibility = 0;
        this.attackArea = attackArea;

        let visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: this.visibilityAreaSize, height: 0.1, size: this.visibilityAreaSize}, game.getScene());
        visivilityArea.parent = this.mesh;
        visivilityArea.visibility = 0;
        this.visibilityArea = visivilityArea;

        game.enemies[this.id] = this;

        super(name, game);
    }

    public emitPosition() {
        if (this.game.client.socket) {
            this.game.client.socket.emit('updateEnemy', {
                enemyKey: this.id,
                position: this.mesh.position,
                rotation: this.mesh.rotationQuaternion
            });
        }
    }

    public removeFromWorld() {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        this.visibilityArea.dispose();
        this.attackArea.dispose();
        this.mesh.dispose();
        this.game.guiElements.hpBarEnemy.updateValue(100);

    }

    protected registerFunctionAfterRender() {
        let self = this;
        let walkSpeed = Character.WALK_SPEED * (self.walkSpeed / 100);
        let playerMesh = self.game.player.mesh;

        this.afterRender = function() {
            if (self.game.player) {
                if (self.visibilityArea.intersectsMesh(playerMesh, true)) {
                    self.mesh.lookAt(playerMesh.position);

                    if (self.attackArea.intersectsMesh(playerMesh, true)) {
                        self.runAnimationHit();

                        if (self.mesh.intersectsMesh(self.game.player.mesh, true)) {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);

                            var value = self.game.guiElements.hpBar.getValue();
                            self.game.guiElements.hpBar.updateValue(value - 0.2);

                            if(value-0.1 < 0) {
                                alert('Padłeś');
                                window.location.reload();
                            }
                        } else {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                        }

                    } else {
                        self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                        self.runAnimationWalk(true);
                    }
                }
            }
        }
    }

    //let self = this;
    //this.afterRender = function() {
    //    if(game.player) {
    //        if (self.visibilityArea.intersectsMesh(game.player.character.mesh, false)) {
    //            self.character.mesh.lookAt(game.player.character.mesh.position);
    //
    //            var playerMesh = game.player.character.mesh.getChildMeshes()[0];
    //            if(self.attackArea.intersectsMesh(playerMesh, false)) {
    //                self.character.runAnimationHit();
    //
    //                //if (self.character.items.weapon.intersectsMesh(game.player.character.mesh, false)) {
    //                //    playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
    //                //
    //                //    var value = game.guiElements.hpBar.getValue();
    //                //
    //                //    game.guiElements.hpBar.updateValue(value - 0.2);
    //                //
    //                //    if(value-0.1 < 0) {
    //                //        alert('Padłeś');
    //                //        window.location.reload();
    //                //    }
    //                //} else {
    //                //    playerMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
    //                //}
    //
    //            } else {
    //                var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -0.041), self.character.mesh.computeWorldMatrix());
    //                self.character.mesh.moveWithCollisions(velocity);
    //                self.character.runAnimationWalk();
    //
    //            }
    //        }
    //    }
    //};
    //game.scene.registerAfterRender(this.afterRender);

}
