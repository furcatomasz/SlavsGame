namespace NPC {
    export class BigWarrior extends AbstractNpc {

        public constructor(game:Game, position:BABYLON.Vector3, rotation:BABYLON.Vector3) {
            this.name = 'Lech';
            let mesh = game.factories['character'].createClone('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);

            this.mesh = mesh;
            this.questId = Quests.KillWorms.QUEST_ID;

            super(game, name, position, rotation);

            let items = [
                {
                    meshName: 'Sash',
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
                    meshName: 'Axe.001',
                    equip: 1,
                }
            ];
            this.setItems(items);

        }

    }
}
