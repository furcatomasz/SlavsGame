/// <reference path="../../babel/Items/Sword/Sword.d.ts"/>
/// <reference path="../../babel/Items/Shield/Shield.d.ts"/>
/// <reference path="../game.ts"/>

class Items {
    constructor(game:Game, scene:BABYLON.Scene) {
        let swordFactory = new Sword.MeshFactory(scene);
        game.items['sword'] = swordFactory;

        let shieldFactory = new Shield.MeshFactory(scene);
        game.items['shield'] = shieldFactory;
    }

}