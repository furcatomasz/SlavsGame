/// <reference path="AbstractNpc.ts"/>
namespace NPC {
    export class Warrior extends AbstractNpc {

        public constructor(game:Game) {
            this.name = 'NPC #Warrior';

            let mesh = game.characters['player'].instance('Warrior', true);
            mesh.position = new BABYLON.Vector3(-3, 0.1, 11);
            mesh.lookAt(game.player.mesh.position);
            this.mesh = mesh;

            super(game, name);
        }

    }
}