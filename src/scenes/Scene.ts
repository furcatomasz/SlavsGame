import IShadowLight = BABYLON.IShadowLight;
abstract class Scene {

    protected game: Game;
    protected light: IShadowLight;
    protected name:string;

    constructor(game:Game, name:string) {
        this.game = game;
        this.name = name;
    }
}