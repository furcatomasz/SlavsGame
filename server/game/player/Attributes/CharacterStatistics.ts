namespace Attributes {
    export class CharacterStatistics extends Attributes.AbstractStatistics {

        constructor(hp:number = 0, hpMax:number = 0, attackSpeed:number = 0, damage:number = 0, armor:number = 0, walkSpeed:number = 0, blockChance:number = 0, hitChance:number = 0) {
           super(hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance);
        }

        public addItemsStatistics(character: Server.Character) {
            this.setArmor(this.armor, character);
            this.setDamage(this.damage, character);

            return this;
        }

        protected getItemsStats(character: Server.Character):Attributes.AbstractStatistics {
            let statistics = new Attributes.EquipStatistics();
            if (character) {
               let inventory = character.inventory;
               let equipedItems = [];

               equipedItems.push(inventory.helm);
               equipedItems.push(inventory.gloves);
               equipedItems.push(inventory.armor);
               equipedItems.push(inventory.weapon);
               equipedItems.push(inventory.shield);
               equipedItems.push(inventory.boots);

               for (let i = 0; i < equipedItems.length; i++) {
                   let item = equipedItems[i];
                   if (item) {
                       statistics.addStatisticsFromItem(item.statistics);
                   }
               }
            }

            return statistics;
        }


        protected setDamage(damage, character: Server.Character) {
            let equipStatistics = this.getItemsStats(character);
            this.damage = damage + equipStatistics.getDamage();

            return this;
        }

        protected setArmor(armor, character: Server.Character) {
            let equipStatistics = this.getItemsStats(character);
            this.armor = armor + equipStatistics.getArmor();

            return this;
        }

    }
}