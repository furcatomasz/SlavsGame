namespace Server.Orm {
    export class Structure {

        public user;
        public player;
        public playerOnline;
        public playerItems;

        constructor(db) {
            this.user = db.define("user", {
                email: String,
                password: String,
            });

            this.player = db.define("player", {
                userId: Number,
                name: String,
                type: String,
                scene: Number,
                positionX: Number,
                positionY: Number,
                positionZ: Number,
            });

            this.playerOnline = db.define("player_online", {
                playerId: Number,
                connectDate: Date,
                activityDate: Date,
            });

            this.playerItems = db.define("player_items", {
                playerId: Number,
                itemId: Number,
                improvement: Number,
                equip: Number,
            });
        }
    }
}