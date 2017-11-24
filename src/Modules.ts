/// <reference path="../shared/Character"/>

class Modules {
    public character:Character;

    loadModules(callback) {
        let self = this;
        new Promise(function (modulesIsLoaded) {
            require(["./../shared/Character"], function (CharacterModule) {
                console.log(CharacterModule);
                self.character = CharacterModule.Character;
                modulesIsLoaded();
            });
        }).then(function (resolve) {
            callback();
        });
    }
}