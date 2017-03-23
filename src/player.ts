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

        let mesh;
        if(game.player === undefined) {
            mesh =  game.characterMesh;
        } else {
            mesh = game.characterMesh.createInstance();
        }

        this.character = new Character(mesh, name, game);
    }
}