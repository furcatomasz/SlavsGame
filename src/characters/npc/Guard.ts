namespace NPC {
    export class Guard extends AbstractNpc {

        public constructor(game:Game, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {

            this.name = 'Guard';

            this.mesh = game.factories['character'].createClone('Warrior', true);

            super(game, name, position, rotation);

            let items = [
                {
                    meshName: 'leatherArmor',
                    equip: 1,
                },
                {
                    meshName: 'leatherHelm',
                    equip: 1,
                },
                {
                    meshName: 'leatherBoots',
                    equip: 1,
                },
                {
                    meshName: 'leatherGloves',
                    equip: 1,
                },
                {
                    meshName: 'shieldWoodenMedium',
                    equip: 1,
                },
                {
                    meshName: 'swordLong',
                    equip: 1,
                }
            ];
            this.setItems(items);

        }

    }
}
