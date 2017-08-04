namespace Attributes {
    import AbstractStatistics = Attributes.AbstractStatistics;
    export class EquipStatistics extends AbstractStatistics {

        public addStatisticsFromItem(statistics: Attributes.ItemStatistics) {

            if (statistics.getDamage()) {
                this.damage += statistics.getDamage();
            }

            // if (statistics.getArmor()) {
            //     this.armor += statistics.getArmor();
            // }

        }


    }
}