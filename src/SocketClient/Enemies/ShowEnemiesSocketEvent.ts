class ShowEnemiesSocketEvent extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('showEnemies', function (data) {
            game.enemies = [];
            data.forEach(function (enemyData, key) {
                if (enemyData.statistics.hp > 0) {
                    let newMonster = new Monster(game, key, enemyData);
                    if (newMonster) {
                        if (game.sceneManager.octree) {
                            game.sceneManager.octree.dynamicContent.push(newMonster.mesh);
                        }
                    }
                }
            });
        });

        return this;
    }

}
