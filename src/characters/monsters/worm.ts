/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>

class Worm extends Monster {

    constructor(name:string, game:Game) {
        let mesh = game.characters['worm'].clone();
        let skeleton = game.characters['worm'].skeleton.clone();
        let material = game.characters['worm'].material.clone();

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        mesh.position = new BABYLON.Vector3(Game.randomNumber(3, -10), 1.1, Game.randomNumber(-10, -16));
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 20,
            friction: 1,
            restitution: 0.2
        }, game.scene);

        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;

        this.mesh = mesh;
        this.name = name;
        this.game = game;

        skeleton.beginAnimation('stand', true);

        super(name, game);
    }

    protected registerFunctionAfterRender() {
        let self = this;
        this.afterRender = function() {
            if (self.game.player) {
                let walkSpeed = Character.WALK_SPEED * (self.walkSpeed / 100);
                let playerMesh = self.game.player.mesh;

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
                        self.runAnimationWalk();
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
