namespace Server.Quests {
    export class SkeletonKing extends AbstractQuest {

        constructor() {
            this.objectName = 'questLog';
            this.title = 'Skeleton King';

            let chapters = [];
            let newChapter = new Server.Quests.Chapter(this, 'Kill five skeletons in forest.');
            // newChapter.addAward(new Server.Quests.Awards.Experience(50));
            // newChapter.addRequirement(new Server.Quests.Requirements.KillMonster( new Monsters.Skeleton(), 5));
            chapters[1] = newChapter;

            // chapters[2] = new Server.Quests.Chapter(
            //     this,
            //     [
            //         new Server.Quests.Awards.SpecialItem(new SpecialItems.KeyToChest(), 1)
            //     ],
            //     [
            //         new Server.Quests.Requirements.KillMonster(this, new Monsters.Skeleton(), 1)
            //     ],
            //     'Find a entrace to cave and kill skeleton king'
            // );
            this.chapters = chapters;
        }

    }

}