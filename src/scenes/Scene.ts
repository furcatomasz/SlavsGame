import IShadowLight = BABYLON.IShadowLight;
abstract class Scene {

    protected game: Game;
    protected assetsManager: BABYLON.AssetsManager;
    
    protected light: IShadowLight;
    protected name:string;

    constructor(game:Game, name:string) {
        this.game = game;
        this.name = name;
    }
}