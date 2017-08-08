namespace Quests.Requirements {
    export class Monster extends AbstractRequirement {

        constructor(monster: Monster, count: number) {
            super();
            this.name = 'Kill ' + count + ' ' + monster.name + '';
            this.requirement = monster;

        }
    }
}