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
                    const newMonster = new Monster(game, key, enemyData);
                    game.enemies[newMonster.id] = newMonster;
                }
            });
        });

        return this;
    }

}
