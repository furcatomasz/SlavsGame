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
        let material = game.characters['player'].material.clone();
        let mainMesh = BABYLON.MeshBuilder.CreateBox(id+name, { width: 0.5, size: 0.7}, game.scene);

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.parent = mainMesh;
        mesh.position = new BABYLON.Vector3(0, -0.4, -0.3);
        mainMesh.position = new BABYLON.Vector3(3, 7.1, 0);
        mainMesh.visibility = false;
        mainMesh.physicsImpostor = new BABYLON.PhysicsImpostor(mainMesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass:1, friction:0.01, restitution:0.2}, game.scene);

        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(mesh);

        this.character = new Character(mainMesh, name, game);
    }
}