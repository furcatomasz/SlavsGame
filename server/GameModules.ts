namespace Server {
    export class GameModules {
        public character:Character;
        public attributesStatistics:AttributesStatistics;

        loadModules(callback) {
            let self = this;
            new Promise(function (modulesIsLoaded) {
                requirejs(["./../../shared/Character/Character"], function (CharacterModule) {
                    self.character = CharacterModule.Character;
                    requirejs(["./../../shared/Character/AttributesStatistics"], function (AttributesStatistics) {
                        self.attributesStatistics = AttributesStatistics;
                        modulesIsLoaded();
                    });
                });
            }).then(function (resolve) {
                callback();
            });
        }
    }
}

