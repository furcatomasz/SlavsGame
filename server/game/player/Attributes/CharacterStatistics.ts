namespace Attributes {
    export class CharacterStatistics extends AbstractStatistics {

        //protected character:Character;
        //
        //constructor(character:Character, hp:number = 0, hpMax:number = 0, attackSpeed:number = 0, damage:number = 0, armor:number = 0, walkSpeed:number = 0, blockChance:number = 0, hitChance:number = 0) {
        //    super(hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance);
        //    this.character = character;
        //}

        public getItemsStats():Attributes.AbstractStatistics {
            let statistics = new Attributes.EquipStatistics();

            //if (this.character) {
            //    let inventory = this.character.inventory;
            //    let equipedItems = [];
            //
            //    equipedItems.push(inventory.helm);
            //    equipedItems.push(inventory.gloves);
            //    equipedItems.push(inventory.armor);
            //    equipedItems.push(inventory.weapon);
            //    equipedItems.push(inventory.shield);
            //    equipedItems.push(inventory.boots);
            //
            //    for (let i = 0; i < equipedItems.length; i++) {
            //        let item = equipedItems[i];
            //        if (item) {
            //            statistics.addStatisticsFromItem(item.statistics);
            //        }
            //    }
            //}

            return statistics;
        }


        protected setDamage(damage) {
            let equipStatistics = this.getItemsStats();
            this.damage = damage + equipStatistics.getDamage();

            return this;
        }

        protected setArmor(armor) {
            let equipStatistics = this.getItemsStats();
            this.armor = armor + equipStatistics.getArmor();

            return this;
        }

    }
}