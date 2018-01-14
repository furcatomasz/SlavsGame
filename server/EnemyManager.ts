namespace Server {
    export class EnemyManager {

        public getEnemies() {
            let enemies = [];
            enemies[2] = [
                new Worm(0, {x: -2, y: 0, z: -30}, [9]),
                new Worm(1, {x: -2, y: 0, z: -64}, [9]),
                new Worm(2, {x: -8, y: 0, z: -72}, [9]),
                new Worm(3, {x: -8, y: 0, z: 180}, [9]),
                new Worm(4, {x: -4, y: 0, z: 100}, [9]),
                new Worm(5, {x: -2, y: 0, z: 110}, [9]),
                new Worm(6, {x: -8, y: 0, z: 90}, [9]),
                new Worm(7, {x: -4, y: 0, z: 80}, [9]),
                new Worm(8, {x: -2, y: 0, z: 85}, [9]),
                new Worm(9, {x: -8, y: 0, z: 80}, [9]),
                new Worm(10, {x: -4, y: 0, z: 75}, [9]),
                new Worm(11, {x: -2, y: 0, z: 70}, [9]),
            ];

            return enemies;
        }
    }

}

