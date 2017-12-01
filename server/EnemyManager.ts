namespace Server {
    export class EnemyManager {

        public getEnemies() {
            let enemies = [];
            enemies[2] = [
                new Worm(0, {x: -2, y: 0, z: -30}, [9]),
                new Worm(1, {x: -2, y: 0, z: -64}, [9]),
                new Worm(2, {x: -8, y: 0, z: -72}, [9]),
            ];

            return enemies;
        }
    }

}

