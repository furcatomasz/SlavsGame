namespace Server {
    export class Character {

        public id:number;
        public connectionId:string;
        public roomId:string;
        public name:string;
        public skills:Array;
        public experience:number;
        public gold:number;
        public lvl:number;
        public freeAttributesPoints:number;
        public freeSkillPoints:number;
        public position;
        public itemsDrop;
        public targetPoint:string;
        public attack:boolean;
        public inventory:Inventory;
        public statistics:Attributes.CharacterStatistics;

        public constructor(id) {
            this.id = id;
            this.itemsDrop = [];
            this.inventory = new Inventory();
        }

        public setConnectionId(value:string) {
            this.connectionId = value;

            return this;
        }

        public setName(value:string) {
            this.name = value;

            return this;
        }

        public setExperience(value:number) {
            this.experience = value;

            return this;
        }

        public setLvl(value:number) {
            this.lvl = value;

            return this;
        }

        public setFreeAttributesPoints(value:number) {
            this.freeAttributesPoints = value;

            return this;
        }

        public setFreeSkillPoints(value:number) {
            this.freeSkillPoints = value;

            return this;
        }

        public setGold(value:number) {
            this.gold = value;

            return this;
        }

        public setSkills(skills:Array) {
            let self = this;
            this.skills = [];
            skills.forEach(function (skillDatabase) {
                let skill = Skills.SkillsManager.getSkill(skillDatabase.skillType);
                skill.setPower(skillDatabase.cooldown, skillDatabase.damage, skillDatabase.stock);
                self.skills.push(skill);
            });

            return this;
        }

        public setItemsOnCharacter(items:Array) {
            let itemManager = new Items.ItemManager();
            itemManager.initItemsFromDatabaseOnCharacter(items, this);

            return this;
        }

        public calculateCharacterStatistics(attributes) {
            if (!attributes) {
                attributes = {
                    health: 0,
                    attackSpeed: 0,
                    defence: 0,
                    damage: 0,
                    blockChance: 0,
                }
            }

            let statistics = new Attributes.CharacterStatistics(
                100 + attributes.health * 5,
                100 + attributes.health * 5,
                100 + attributes.attackSpeed,
                15 + attributes.damage * 5,
                10 + attributes.defence * 5,
                2.9,
                50 + attributes.blockChance,
                100
            );
            statistics.addItemsStatistics(this);
            this.statistics = statistics;

            return this;
        }

        /**
         * @param server
         * @param socket
         * @param earnedExperience
         */
        public addExperience(server: SlavsServer, socket, earnedExperience) {
            server.ormManager.structure.player.get(this.id,
                function (error, playerDatabase) {
                    playerDatabase.experience += earnedExperience;
                    socket.emit('addExperience', {
                        experience: earnedExperience
                    });
                    let newLvl = (playerDatabase.lvl) ? playerDatabase.lvl + 1 : 1;
                    let requiredExperience = self.server.gameModules.character.getLvls()[newLvl];
                    if (playerDatabase.experience >= requiredExperience) {
                        playerDatabase.lvl += 1;
                        playerDatabase.freeAttributesPoints += 5;
                        playerDatabase.freeSkillPoints += 1;
                        socket.emit('newLvl', playerDatabase);
                    }

                    playerDatabase.save();
                });
        }

        /**
         * @param server
         * @param socket
         * @param earnedExperience
         */
        public addExperience(server: SlavsServer, socket, earnedExperience) {
            server.ormManager.structure.player.get(this.id,
                function (error, playerDatabase) {
                    playerDatabase.experience += earnedExperience;
                    socket.emit('addExperience', {
                        experience: earnedExperience
                    });
                    let newLvl = (playerDatabase.lvl) ? playerDatabase.lvl + 1 : 1;
                    let requiredExperience = self.server.gameModules.character.getLvls()[newLvl];
                    if (playerDatabase.experience >= requiredExperience) {
                        playerDatabase.lvl += 1;
                        playerDatabase.freeAttributesPoints += 5;
                        playerDatabase.freeSkillPoints += 1;
                        socket.emit('newLvl', playerDatabase);
                    }

                    playerDatabase.save();
                });
        }

    }
}