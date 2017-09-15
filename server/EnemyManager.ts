namespace Server {
    export class EnemyManager {

        public createEnemy(position, type, itemsToDrop) {
            return {
                id: 0,
                position: position,
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                    w: 0
                },
                hp: 100,
                type: type,
                target: false,
                attack: false,
                itemsToDrop: itemsToDrop
            };
        }

        public getEnemies() {
            let enemies = [];
            enemies[2] = [
                this.createEnemy({x: -2, y: 0, z: -30}, 'worm', [9]),
                this.createEnemy({x: -2, y: 0, z: -64}, 'worm', [7]),
                this.createEnemy({x: -8, y: 0, z: -72}, 'worm', [8]),
            ];
            enemies[3] = [
                this.createEnemy({x: -2, y: 0, z: -30}, 'bandit', [9]),
                this.createEnemy({x: -2, y: 0, z: -64}, 'bandit', [9]),
                this.createEnemy({x: -8, y: 0, z: -72}, 'bandit', [9]),
            ];

            return enemies;
        }
    }

}

