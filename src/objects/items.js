/// <reference path="../../babel/Items/Sword/Sword.d.ts"/>
/// <reference path="../../babel/Items/Shield/Shield.d.ts"/>
/// <reference path="../game.ts"/>
var Items = (function () {
    function Items(game, scene) {
        var swordFactory = new Sword.MeshFactory(scene);
        game.items['sword'] = swordFactory;
        var shieldFactory = new Shield.MeshFactory(scene);
        game.items['shield'] = shieldFactory;
    }
    return Items;
}());
//# sourceMappingURL=items.js.map