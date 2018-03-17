namespace Server.Orm {
    export class Structure {

        public user;
        public player;
        public playerSkills;
        public playerAttributes;
        public playerOnline;
        public playerItems;
        public playerSpecialItems;
        public playerQuest;
        public playerQuestRequirements;

        constructor(db) {
            this.user = db.define("user", {
                email: String,
                password: String,
            });

            this.player = db.define("player", {
                name: String,
                type: String,
                lvl: Number,
                experience: Number,
                gold: Number,
                freeSkillPoints: Number,
                freeAttributesPoints: Number,
                scene: Number,
                positionX: Number,
                positionY: Number,
                positionZ: Number,
            });

            this.player.hasOne("user", this.player, {
                reverse : "players"
            });

            this.playerAttributes = db.define("player_attributes", {
                attackSpeed: Number,
                defence: Number,
                damage: Number,
                health: Number,
                critic: Number,
                blockChance: Number,
            });

            this.playerAttributes.hasOne("player", this.player, {
                reverse : "attributes"
            });

            this.playerSkills = db.define("player_skills", {
                skillType: Number,
                cooldown: Number,
                damage: Number,
                stock: Number,
            });

            this.playerSkills.hasOne("player", this.player, {
                reverse : "skills"
            });

            this.playerOnline = db.define("player_online", {
                connectDate: Date,
                activityDate: Date,
            });
            this.playerOnline.hasOne("player", this.player);

            this.playerItems = db.define("player_items", {
                itemId: Number,
                improvement: Number,
                equip: Number,
            });
            this.playerItems.hasOne("player", this.player, {
                reverse : "items"
            });

            this.playerQuest = db.define("player_quest", {
                questId: Number,
                date: Date,
            });
            this.playerQuest.hasOne("player", this.player, {
                reverse : "activeQuests"
            });

            this.playerQuestRequirements = db.define("player_quest_requirements", {
                requirementId: Number,
                value: Number,
            });
            this.playerQuestRequirements.hasOne("player", this.player, {
                reverse : "questRequirements"
            });

            this.playerSpecialItems = db.define("player_items_special", {
                type: Number,
                value: Number,
            });

            this.playerSpecialItems.hasOne("player", this.player, {
                reverse : "specialItems"
            });

        }
    }
}