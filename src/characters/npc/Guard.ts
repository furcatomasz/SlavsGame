/// <reference path="AbstractNpc.ts"/>
namespace NPC {
    export class Guard extends AbstractNpc {

        public constructor(game:Game, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {

            this.name = 'Guard';

            this.mesh = game.factories['character'].createInstance('Warrior', true);

            super(game, name, position, rotation);

            let items = [
                {
                    meshName: 'Armor.001',
                    equip: 1,
                },
                {
                    meshName: 'Hood',
                    equip: 1,
                },
                {
                    meshName: 'Boots',
                    equip: 1,
                },
                {
                    meshName: 'Gloves',
                    equip: 1,
                },
                {
                    meshName: 'Shield',
                    equip: 1,
                },
                {
                    meshName: 'Axe.001',
                    equip: 1,
                }
            ];
            this.setItems(items);

        }

    }
}