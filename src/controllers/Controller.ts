/// <reference path="/src/game.ts"/>

abstract class Controller {
    protected game:Game;

    public forward:boolean;
    public back:boolean;
    public left:boolean;
    public right:boolean;

    constructor(game:Game) {
        this.game = game;
    }
}