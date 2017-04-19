class Player {

    public id:int;
    public name:string;
    public x:int;
    public y:int;
    public z:int;
    public character:Character;
    

    constructor(game: Game, id, name) {
        this.id = id;
        this.name = name;

        let mesh = game.characters['player'].clone();
        let skeleton = game.characters['player'].skeleton.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.position = new BABYLON.Vector3(0, 0, 0);

        game.shadowGenerator.getShadowMap().renderList.push(mesh);

        this.character = new Character(mesh, name, game);
    }
}