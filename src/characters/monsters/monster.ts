/// <reference path="../character.ts"/>
abstract class Monster extends Character {

    protected visibilityArea: Mesh;
    protected attackArea: Mesh;

    public character:Character;
    public afterRender;


    constructor(name:string, game:Game) {
        super(name, game);
        
        let attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: 5, height: 0.1, size: 5}, game.scene);
        attackArea.parent = this.mesh;
        attackArea.visibility = false;

        let visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: 32, height: 0.1, size: 32}, game.scene);
        visivilityArea.parent = this.mesh;
        visivilityArea.visibility = false;

        game.enemies.push(this);

    }
}
