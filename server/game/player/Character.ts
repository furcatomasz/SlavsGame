namespace Server {
    export class Character {

        public id: number;
        public name: string;
        public skills: Array;
        public experience: number;
        public lvl: number;
        public freeAttributesPoints: number;
        public freeSkillPoints: number;
        public position: BABYLON.Vector3;
        public itemsDrop;
        public targetPoint: string;
        public attack: boolean;
        public inventory: Inventory;
        public statistics: Attributes.CharacterStatistics;

        public constructor(id) {
            this.id = id;
            this.itemsDrop = [];
            this.inventory = new Inventory();
        }


        public setName(value: string) {
            this.name = value;

            return this;
        }

        public setExperience(value: number) {
            this.experience = value;

            return this;
        }

        public setLvl(value: number) {
            this.lvl = value;

            return this;
        }

        public setFreeAttributesPoints(value: number) {
            this.freeAttributesPoints = value;

            return this;
        }

        public setFreeSkillPoints(value: number) {
            this.freeSkillPoints = value;

            return this;
        }

        setItemsOnCharacter(items: Array) {
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
                (125 / 100) * 2.3,
                50 + attributes.blockChance,
                100
            );
            statistics.addItemsStatistics(this);
            this.statistics = statistics;

            return this;
        }

    }
}