namespace Server.Quests.Awards {
    export class Experience extends AbstractAward {

        constructor(value) {
            this.title = 'Experience for character';
            this.value = value;
        }

        public addAwardToCharacter(character: Server.Character, server: SlavsServer, socket) {
            character.addExperience(server, socket, this.value);
        }

    }
}