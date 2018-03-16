namespace Monsters {
    export abstract class Monster {

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

    export class Boar extends Monster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop, specialItemsToDrop);

            this.name = 'Boar';
            this.type = 'boar';
            this.meshName = 'Boar';
            this.lvl = 2;
            this.experience = 20;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 18;
            this.statistics = new Attributes.CharacterStatistics(200, 200, 100, 3, 8, 6, 0, 100);
        }

    }

    export class Worm extends Monster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Worm';
            this.type = 'worm';
            this.meshName = 'Worm';
            this.lvl = 1;
            this.experience = 10;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 10;
            this.statistics = new Attributes.CharacterStatistics(80, 80, 100, 3, 10, 8, 0, 100);
        }

    }

    export class Zombie extends Monster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Zombie';
            this.type = 'zombie';
            this.meshName = 'Zombie';
            this.lvl = 3;
            this.experience = 25;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 3, 10, 40, 0, 100);
        }

    }

    export class Skeleton extends Monster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Skeleton';
            this.type = 'skeletons';
            this.meshName = 'Skeleton';
            this.lvl = 3;
            this.experience = 25;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 3, 10, 6, 0, 100);
        }

    }

    export class SkeletonMedium extends Monster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'skeletonMedium.001';
            this.type = 'skeletons';
            this.meshName = 'skeletonMedium.001';
            this.lvl = 3;
            this.experience = 25;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 10, 10, 6, 0, 100);
        }

    }

}