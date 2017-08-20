namespace Quests {
    export class KillWorms extends Quests.AbstractQuest {

        constructor(game: Game) {
            super(game);
            this.title = 'Bandits';
            this.description = 'Go to portal and kill all bandits.'
            this.awards.push(new Quests.Awards.Item(new Items.Weapons.Sword(game)));

        }
    }
}