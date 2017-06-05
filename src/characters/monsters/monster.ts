/// <reference path="../character.ts"/>

abstract class Monster extends Character {

    protected visibilityArea: BABYLON.Mesh;
    protected attackArea: BABYLON.Mesh;

    public character:Character;
    public afterRender;

    constructor(name:string, game:Game) {

        let attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: 8, height: 0.1, size: 8}, game.scene);
        attackArea.parent = this.mesh;
        attackArea.visibility = 0;
        this.attackArea = attackArea;

        let visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: 40, height: 0.1, size: 40}, game.scene);
        visivilityArea.parent = this.mesh;
        visivilityArea.visibility = 0;
        this.visibilityArea = visivilityArea;

        game.enemies.push(this);

        this.registerFunctionAfterRender();
        game.scene.registerAfterRender(this.afterRender);

        super(name, game);
    }

    abstract registerFunctionAfterRender();
}
