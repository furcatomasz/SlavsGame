/// <reference path="AbstractNpc.ts"/>
namespace NPC {
    export class Warrior extends AbstractNpc {

        public constructor(game:Game) {
            this.name = 'NPC #Warrior';

            let mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.position = new BABYLON.Vector3(-6, 0, -0.5);
            mesh.rotation = new BABYLON.Vector3(0, -1, 0);
            mesh.scaling = new BABYLON.Vector3(1.3, 1.3, 1.3);

            this.mesh = mesh;

            this.quest = new Quests.KillWorms(game);

            super(game, name);
        }

    }
}