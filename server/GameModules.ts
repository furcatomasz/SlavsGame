let Character = require('./../../shared/Character.js').default;

namespace Server {
    export class GameModules {
        public character: Character;
        public items;

        constructor() {
            this.character = Character;
        }
    }
}

