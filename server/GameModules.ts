namespace Server {
    export class GameModules {
        public character: Character;

        loadModules(callback) {
            let self = this;
            new Promise(function (modulesIsLoaded) {
                requirejs(["./../../shared/Character"], function (CharacterModule) {
                    console.log(CharacterModule);
                    self.character = CharacterModule.Character;
                    modulesIsLoaded();
                });
            }).then(function (resolve) {
                callback();
            });
        }
    }
}

