namespace Server.Quests.Awards {
    export class SpecialItem extends AbstractAward {

        constructor(specialItem: SpecialItems.AbstractSpecialItem, value) {
            this.title = 'Gold for character';
            this.award = specialItem;
            this.value = value;
        }

        public addAwardToCharacter(character: Server.Character, server: SlavsServer, socket) {
            let gold = new SpecialItems.Gold(this.value);
            specialItem.addItem(character, server.ormManager);
        }

    }
}