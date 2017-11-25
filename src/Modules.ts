/// <reference path="../shared/Character/Character"/>

class Modules {
    public character:Character;
    public attributesStatistics:AttributesStatistics;

    loadModules(callback) {
        let self = this;
        new Promise(function (modulesIsLoaded) {
            requirejs(["./../../shared/Character/Character"], function (CharacterModule) {
                self.character = CharacterModule.Character;
                requirejs(["./../../shared/Character/AttributesStatistics"], function (loadedModule) {
                    self.attributesStatistics = loadedModule.AttributesStatistics;
                    modulesIsLoaded();
                });
            });
        }).then(function (resolve) {
            callback();
        });
    }
}