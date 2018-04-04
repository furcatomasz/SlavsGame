namespace Server.Quests {
    export class SkeletonKing extends AbstractQuest {

        constructor() {
            this.objectName = 'questLog';
            this.title = 'Skeleton King';
            this.requirements = [
                new Server.Quests.Requirements.KillMonster(new Monsters.Skeleton(), 5)
            ]
        }

    }

}