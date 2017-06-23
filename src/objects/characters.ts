/// <reference path="../../babel/Characters/Warrior/Warrior.d.ts"/>
/// <reference path="../game.ts"/>

class Characters {
    constructor(game: Game, scene: BABYLON.Scene) {
        let characterFactory = new Warrior.MeshFactory(scene, '/babel/Characters/Warrior');
        game.characters['player'] = characterFactory;

        let wormFactory = new worm.MeshFactory(scene, '/babel/Characters/Worm');
        game.characters['worm'] = wormFactory;

    }



}