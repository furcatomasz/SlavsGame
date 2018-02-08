namespace Server {
    export class EnemyManager {

        public getEnemies() {
            let enemies = [];
            enemies[2] = [
                new Monsters.Zombie(0, {x: -28, y: 0, z: 170}, [Items.Weapons.Axe.ITEM_ID]),

                new Monsters.Worm(0, {x: -92, y: 0, z: 160}, []),
                new Monsters.Boar(0, {x: -105, y: 0, z: 160}, [Items.Weapons.Sword.ITEM_ID]),
                new Monsters.Worm(0, {x: -97, y: 0, z: 142}, []),

                new Monsters.Boar(0, {x: -55, y: 0, z: 113}, [Items.Armors.PrimaryArmor.ITEM_ID]),
                new Monsters.Boar(0, {x: -72, y: 0, z: 94}, [Items.Helms.PrimaryHelm.ITEM_ID]),
                new Monsters.Boar(0, {x: -93, y: 0, z: 99}, [Items.Boots.PrimaryBoots.ITEM_ID]),

                new Monsters.Boar(0, {x: 5, y: 0, z: 93}, [Items.Gloves.PrimaryGloves.ITEM_ID]),
                new Monsters.Boar(0, {x: 27, y: 0, z: 93}, []),
                new Monsters.Boar(0, {x: 26, y: 0, z: 72}, [Items.Shields.WoodShield.ITEM_ID]),
                new Monsters.Boar(0, {x: 1, y: 0, z: 67}, []),

                new Monsters.Worm(0, {x: 105, y: 0, z: 154}, []),
                new Monsters.Boar(0, {x: 79, y: 0, z: 156}, []),
                new Monsters.Worm(0, {x: 96, y: 0, z: 144}, []),
                new Monsters.Worm(0, {x: 94, y: 0, z: 129}, []),
                new Monsters.Worm(0, {x: 88, y: 0, z: 185}, []),
                new Monsters.Boar(0, {x: 127, y: 0, z: 169}, []),
                new Monsters.Boar(0, {x: 134, y: 0, z: 154}, []),


            ];

            return enemies;
        }
    }

}

