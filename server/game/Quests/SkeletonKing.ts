namespace Server.Quests {
    export class SkeletonKing extends AbstractQuest {

        constructor() {
            this.objectName = 'questLog';
            this.title = 'Skeleton King';
            this.requirements = [
                [
                    new Server.Quests.Requirements.KillMonster(new Monsters.Skeleton(), 5)
                ],
                [
                    new Server.Quests.Requirements.KillMonster(new Monsters.Skeleton(), 1)
                ]
            ];

            this.awards = [
                [
                    new Server.Quests.Awards.Experience(50)
                ],
                [
                    new Server.Quests.Awards.SpecialItem(new SpecialItems.KeyToChest(), 1)
                ]
            ];

        }

    }

}