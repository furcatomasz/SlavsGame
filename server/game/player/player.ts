namespace Server {
    export class Player {

        public id: string;
        public characters;
        public activeCharacter: number;
        public activeScene: number;
        public lastPlayerUpdate: number;
        public lastPlayerAttack: number;

        public constructor(id) {
            this.id = id;
            this.characters = [];
        }

        public getActiveCharacter(): Server.Character {
            return this.characters[this.activeCharacter];
        }

        public refreshPlayerData(server: SlavsServer, callback) {
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
                                                        let character = new Server.Character(player.id);
                                                        character
                                                            .setName(player.name)
                                                            .setExperience(player.experience)
                                                            .setFreeAttributesPoints(player.freeAttributesPoints)
                                                            .setFreeSkillPoints(player.freeSkillPoints)
                                                            .setLvl(player.lvl)
                                                            .setConnectionId(self.id)
                                                            .setItemsOnCharacter(player.items)
                                                            .setSkills(player.skills)
                                                            .calculateCharacterStatistics(player.attributes);

                                                        self.characters.push(character);
                                                    });
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
}