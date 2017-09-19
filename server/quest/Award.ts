namespace Server.Quests.Models {
    export class ModelAward {

        public awardId:Number;
        public value:Number;

        constructor(awardId:Number, value:Number) {
            this.awardId = awardId;
            this.value = value;
        }
    }
}