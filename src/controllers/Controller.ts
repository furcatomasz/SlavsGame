/// <reference path="../game.ts"/>

abstract class Controller {
    protected game:Game;

    public targetPoint;
    public ball: BABYLON.Mesh;

    public forward:boolean;
    public back:boolean;
    public left:boolean;
    public right:boolean;

    constructor(game:Game) {
        this.game = game;
    }

    abstract registerControls(scene);
}