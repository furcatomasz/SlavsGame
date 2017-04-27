class Enemy {

    public x:int;
    public y:int;
    public z:int;
    public character:Character;
    

    constructor(game: Game) {

        let mesh = game.characters['player'].clone();
        let skeleton = game.characters['player'].skeleton.clone();
        let material = game.characters['player'].material.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.1, -5);
        game.shadowGenerator.getShadowMap().renderList.push(mesh);

        this.character = new Character(mesh, name, game);
    }
}