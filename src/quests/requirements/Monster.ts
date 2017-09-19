namespace Quests.Requirements {
    export class Monster extends AbstractRequirement {
        static REQUIREMENT_ID = 1;

        constructor(monster: Monster, count: number) {
            super();
            this.name = 'Kill ' + count + ' ' + monster.name + '';
            this.requirement = monster;

        }
    }
}