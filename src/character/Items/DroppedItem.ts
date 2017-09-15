namespace Items {
    export class DroppedItem {

        public static showItem(game: Game, item: Item, enemy: AbstractCharacter) {
            item.mesh.position.x = enemy.mesh.position.x;
            item.mesh.position.z = enemy.mesh.position.z;
            item.mesh.position.y = 0;
            item.mesh.rotation = new BABYLON.Vector3(0,0,0);
            item.mesh.visibility = 1;
            let particleSystem = new Particles.DroppedItem(game, item.mesh);
            particleSystem.particleSystem.start();


        }
    }
}