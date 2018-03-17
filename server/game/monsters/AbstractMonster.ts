namespace Monsters {
    export abstract class AbstractMonster {

        public id:number;
        public name:string;
        public experience:number;
        public lvl:number;
        public position;
        public itemsToDrop:Array<Items.Item>;
        public specialItemsToDrop:Array<SpecialItems.SpecialItem>;
        public target:string;
        public attack:boolean;
        public type:string;
        public meshName:string;
        public statistics:Attributes.CharacterStatistics;
        public attackAreaSize:number;
        public visibilityAreaSize:number;
        public availableAttacksFromCharacters:Array;

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            this.id = id;
            this.position = position;
            this.itemsToDrop = itemsToDrop;
            this.specialItemsToDrop = specialItemsToDrop;
            this.availableAttacksFromCharacters = [];
        }

    }

}