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

        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 7.1, 0);

        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.CylinderImpostor, { mass:80, friction:0.01, restitution:1}, game.scene);

        var bottomLeftRect = new BABYLON.Text2D({ parent: mesh, id: "bottomLeftRect", x: 5, y: 5, width: 40, height: 40, roundRadius: 1, origin: BABYLON.Vector2.Zero(), fill: BABYLON.Canvas2D.GetSolidColorBrushFromHex("#4FFF4FFF") });


        game.shadowGenerator.getShadowMap().renderList.push(mesh);

        this.character = new Character(mesh, name, game);
    }
}