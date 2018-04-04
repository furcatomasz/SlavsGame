namespace Server.Quests.Requirements {
    export class KillMonster extends AbstractRequirement {

        protected monsterToKill: Monsters.AbstractMonster;

        static REQUIREMENT_ID = 1;

        constructor(monster: Monsters.AbstractMonster, value: number) {
            super();

            this.monsterToKill = monster;
            this.value = value;
        }

        protected registerListener() {
            let emitter = app.get('event_emitter');
            let self = this;
            let killed = 0;
            emitter.on('monster_kill', function(monster: AbstractMonster, character: Character, socket) {
                if(monster.type == self.monsterToKill.type) {
                    killed += 1;
                    socket.emit('questRequirementInformation', 'Killed '+killed+'/5 skeleton');

                    console.log('[SOCKET][QUEST]monster has been killed ' + monster.name + ' by ' + character.name);
                }
            });
        }
    }
}