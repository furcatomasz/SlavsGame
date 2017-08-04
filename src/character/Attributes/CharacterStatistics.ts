namespace Attributes {
    import AbstractStatistics = Attributes.AbstractStatistics;
    export class CharacterStatistics extends AbstractStatistics {

        protected player: Player;

        public setPlayer(player: Player) {
            this.player = player;

            return this;
        }

        public getItemsStats(): Attributes.AbstractStatistics {
            let statistics = new Attributes.EquipStatistics();

            if (this.player) {
                let inventory = this.player.inventory;
                let equipedItems = [];

                equipedItems.push(inventory.helm);
                equipedItems.push(inventory.gloves);
                equipedItems.push(inventory.armor);
                equipedItems.push(inventory.weapon);
                equipedItems.push(inventory.shield);
                equipedItems.push(inventory.boots);

                for (let i = 0; i < equipedItems.length; i++) {
                    let item = equipedItems[i];
                    if(item) {
                        statistics.addStatisticsFromItem(item.statistics);
                    }
                }
            }

            return statistics;
        }


        public getDamage() {
            let equipStatistics = this.getItemsStats();

            return this.damage + equipStatistics.getDamage();
        }

        public getArmor() {
            let equipStatistics = this.getItemsStats();

            return this.armor + equipStatistics.getArmor();
        }

    }
}