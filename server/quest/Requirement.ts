namespace Server.Quests.Models {
    export class Requirement {

        public requirementId:Number;
        public value:Number;

        constructor(requirementId:Number, value:Number) {
            this.requirementId = requirementId;
            this.value = value;
        }
    }
}