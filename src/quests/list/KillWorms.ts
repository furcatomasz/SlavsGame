namespace Quests {
    export class KillWorms extends Quests.AbstractQuest {

        constructor(game: Game) {
            super(game);
            this.title = 'Worms';
            this.description = 'Kill aggressive monsters on this map.'
            this.awards.push(new Quests.Awards.Item(new Items.Weapons.BigSword(game)));

        }
    }
}