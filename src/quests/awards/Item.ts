namespace Quests.Awards {
    export class Item extends AbstractAward {

        constructor(item: Items.Item) {
            super();
            this.name = item.name;
            this.award = item;
        }

        public getAward() {
            console.log('get award' + this.award.name);
        }
    }
}