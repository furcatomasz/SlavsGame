let CharacterLvls = require('./../../shared/CharacterLvls.js').default;

namespace Server {
    export class GameModules {
        public characterLvls: CharacterLvls;
        public items;

        constructor() {
            this.characterLvls = CharacterLvls;
        }
    }
}

