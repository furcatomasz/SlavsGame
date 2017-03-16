var Game = (function () {
    function Game(canvasElement) {
        // Create canvas and engine
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        // create a basic BJS Scene object
        this._scene = new BABYLON.Scene(this._engine);
        this._scene.collisionsEnabled = true;
        this._scene.gravity = new BABYLON.Vector3(0, -9, 0);
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        //  = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene);
        this._camera = new BABYLON.ArcRotateCamera("Camera", -25, -25, 80, BABYLON.Vector3.Zero(), this._scene);
        // attach the camera to the canvas
        this._camera.attachControl(this._canvas, false);
        this._camera.checkCollisions = true;
        this._camera.applyGravity = true;
        this._camera.ellipsoid = new BABYLON.Vector3(0.5, 1, 0.5);
        this._light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(1, -1, 0), this._scene);
        BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
        // create a basic light, aiming 0,1,0 - meaning, to the sky
        // let light = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 10, 0), this._scene);
        // let lightSphere0 = BABYLON.Mesh.CreateSphere("Sphere0", 116, 0.5, this._scene);
        // let material = new BABYLON.StandardMaterial("kosh",  this._scene);
        // material.diffuseColor = new BABYLON.Color3(1, 1, 1);
        var smokeSystem = new BABYLON.ParticleSystem("particles", 2000, this._scene);
        smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this._scene);
        smokeSystem.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5); // Starting all from
        smokeSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0, 0.5); // To...
        smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        smokeSystem.minSize = 0.3;
        smokeSystem.maxSize = 1;
        smokeSystem.minLifeTime = 0.3;
        smokeSystem.maxLifeTime = 1.5;
        smokeSystem.emitRate = 600;
        smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        smokeSystem.gravity = new BABYLON.Vector3(5, 0, 0);
        smokeSystem.direction1 = new BABYLON.Vector3(0, 0, 8);
        // smokeSystem.direction2 = new BABYLON.Vector3(8, 0, 1.5);
        smokeSystem.minAngularSpeed = 0;
        smokeSystem.maxAngularSpeed = Math.PI;
        smokeSystem.minEmitPower = 0.5;
        smokeSystem.maxEmitPower = 1.5;
        smokeSystem.updateSpeed = 0.005;
        var alpha = 0;
        var assetsManager = new BABYLON.AssetsManager(this._scene);
        assetsManager.addMeshTask("tankBottom", "", "assets/tank/", "tank3ahdpodwozie.obj");
        assetsManager.addMeshTask("tankTower", "", "assets/tank/", "tank3ahdtower.obj");
        assetsManager.addMeshTask("tankTurret", "", "assets/tank/", "tank3ahdlufa.obj");
        var smokePipe = BABYLON.Mesh.CreateSphere("smokePipe", 10, 0.5, this._scene);
        smokePipe.position.x = -9;
        smokePipe.position.z = 10;
        smokePipe.position.y = 3;
        smokeSystem.emitter = smokePipe;
        smokeSystem.start();
        var tankTurret, tankTower;
        assetsManager.onTaskSuccess = function (task) {
            for (var i = 0; i < task.loadedMeshes.length; i++) {
                var mesh = task.loadedMeshes[i];
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
                if (task.name == 'tankBottom') {
                    mesh.position.y = 0;
                    mesh.rotation.y = 100;
                }
                else if (task.name == 'tankTower') {
                    mesh.position.y = 0.1;
                    mesh.rotation.y = 90;
                    // mesh.animations.push(animationBox);
                    tankTower = mesh;
                }
                else if (task.name == 'tankTurret') {
                    mesh.position.y = 0.1;
                    mesh.rotation.y = 90;
                    tankTurret = mesh;
                    ps1.emitter = tankTurret;
                }
                mesh.parent = container;
            }
        };
        assetsManager.load();
        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        var ground = BABYLON.Mesh.CreateGround("ground1", 128, 128, 2, this._scene);
        var grassMaterial = new BABYLON.StandardMaterial("grass", this._scene);
        // grassMaterial.diffuseTexture = new BABYLON.Colo("assets/grass.jpg", this._scene);
        grassMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        ground.material = grassMaterial;
        var scene = this._scene;
        assetsManager.onFinish = function (task) {
            window.addEventListener("mousemove", function () {
                // We try to pick an object
                var pickResult = scene.pick(scene.pointerX, scene.pointerY);
                if (pickResult.hit) {
                    var targetPoint = pickResult.pickedPoint;
                    targetPoint.y = 1;
                    tankTurret.lookAt(targetPoint);
                    tankTower.lookAt(targetPoint);
                }
            });
        };
    };
    Game.prototype.animate = function () {
        var _this = this;
        // run the render loop
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'
    var game = new Game('renderCanvas');
    // Create the scene
    game.createScene();
    // start animation
    game.animate();
});
//# sourceMappingURL=game.js.map