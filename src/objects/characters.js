/// <reference path="../../babel/Characters/Warrior/Warrior.d.ts"/>
/// <reference path="../game.ts"/>
var Characters = (function () {
    function Characters(game, scene) {
        var characterFactory = new Warrior.MeshFactory(scene, '/babel/Characters/Warrior');
        game.characters['player'] = characterFactory;
        var wormFactory = new worm.MeshFactory(scene, '/babel/Characters/Worm');
        game.characters['worm'] = wormFactory;
    }
    return Characters;
}());
//# sourceMappingURL=characters.js.map