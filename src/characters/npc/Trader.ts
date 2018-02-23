/// <reference path="AbstractNpc.ts"/>
namespace NPC {
    export class Trader extends AbstractNpc {

        public constructor(game:Game, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {

            this.name = 'Warrior';

            let mesh = game.factories['character'].createInstance('Warrior', true);

            mesh.position = position;
            mesh.rotation = rotation;
            this.mesh = mesh;
            this.questId = Quests.KillWorms.QUEST_ID;

            super(game, name);

            let items = [
                {
                    meshName: 'Sash',
                    equip: 1,
                },
                {
                    meshName: 'Boots',
                    equip: 1,
                },
            ];
            this.setItems(items);
            this.mesh.skeleton.beginAnimation('Sit');


        }

    }
}