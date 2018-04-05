namespace Server.Quests.Awards {
    export abstract class AbstractAwards {

        public value: number;
        public award: any;
        public title: string;

        public abstract addAwardToCharacter(character: Server.Character, server: SlavsServer, socket);
    }
}