class Player {

    public id:string;
    public characters;
    public activeCharacter:number;
    public activeScene:number;
    public lastPlayerUpdate:number;

    public constructor(id) {
        this.id = id;
        this.characters = [];
    }

    public getActiveCharacter():Character {
        return this.characters[this.activeCharacter];
    }

    public refreshPlayerData(server:SlavsServer, callback) {
        let self = this;
        self.characters = [];
        server.ormManager.structure.user.oneAsync({email: "furcatomasz@gmail.com"}).then(function (user) {
            server.ormManager.structure.player.findAsync({user_id: user.id}).then(function (players) {
                for (let i = 0; i < players.length; i++) {
                    let playerDatabase = players[i];

                    server.ormManager.structure.playerItems
                        .findAsync({player_id: playerDatabase.id})
                        .then(function (items) {
                            playerDatabase.items = items;

                            server.ormManager.structure.playerAttributes
                                .oneAsync({player_id: playerDatabase.id})
                                .then(function (attributes) {
                                    playerDatabase.attributes = attributes;

                                    server.ormManager.structure.playerSkills
                                        .findAsync({player_id: playerDatabase.id})
                                        .then(function (skills) {
                                            playerDatabase.skills = skills;

                                            if (i == players.length - 1) {
                                                players.forEach(function (player) {
                                                    let character = new Character(player.id);
                                                    character
                                                        .setItemsOnCharacter(playerDatabase.items)
                                                        .calculateCharacterStatistics(playerDatabase.attributes);

                                                    self.characters.push(character);
                                                })
                                                callback();
                                            }
                                        });

                                });
                        });


                }

            })

        });
    };

}
