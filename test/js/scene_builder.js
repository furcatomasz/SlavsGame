var SceneBuilder = function (scene, canvas) {
  this.scene = scene;
  this.canvas = canvas;

  this.scene_graph = {
    camera: null,
    lights: [],
    objects: [],
    ground_objects: [],
    player: null
  };
};

SceneBuilder.prototype.build = function() {
  this.preload_assets(this.setup_scene);
}

SceneBuilder.prototype.preload_assets = function(callback) {

  var assets = [
    {
      id: "him",
      path: "assets/babylon/",
      file: "dude.babylon",
      loader: PreloaderBabylon
    },
    {
      id: "brazier",
      path: "assets/obj/",
      file:"brazier.obj",
      loader: PreloaderOBJ
    }
  ];

  var asset_manager = new AssetImportManager(assets, this.scene);

  var _this = this;
  asset_manager.onSuccess = function(scene_graph_assets) {
    _this.scene_graph["assets"] = scene_graph_assets;

    callback(_this);
  }

  asset_manager.load();
}

SceneBuilder.prototype.setup_scene = function(_this) {
  _this.setup_camera();
  _this.setup_lights();
  _this.setup_geo();
  _this.setup_player();
  _this.setup_player_movement();
  _this.setup_shadows();

  _this.onSuccess(_this.scene);
}

SceneBuilder.prototype.setup_camera = function() {
  var camera = new BABYLON.FreeCamera("camera1", 
                                      new BABYLON.Vector3(10, 10, -10),
                                      this.scene);
  camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

  camera.orthoTop = 5;
  camera.orthoBottom = -5;
  camera.orthoLeft = -10;
  camera.orthoRight = 10;

  // target the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // attach the camera to the canvas
  camera.attachControl(this.canvas, false);

  this.scene_graph["camera"] = camera;
};

SceneBuilder.prototype.setup_lights = function() {
  var light = new BABYLON.HemisphericLight('light1', 
                                           new BABYLON.Vector3(0,1,0),
                                           this.scene);
  light.diffuse = new BABYLON.Color3(.15, .25, .35);
  this.scene_graph["lights"].push(
    {
      light: light,
      shadow_gen: null
    }
  );

  var spotLight = new BABYLON.SpotLight("spot01", 
                                     new BABYLON.Vector3(10, 8, 10),
                                     new BABYLON.Vector3(-2, -1, -2),
                                     5,
                                     30,
                                     this.scene);
  spotLight.diffuse = new BABYLON.Color3(.5, .8, 1);
  spotLight.specular = new BABYLON.Color3(0 ,0 , 0);
  spotLight.intensity = .75;
  var spotLight_shadow = new BABYLON.ShadowGenerator(512, spotLight);

  this.scene_graph["lights"].push(
    {
      light: spotLight,
      shadow_gen: spotLight_shadow
    }
  )

  var spotLight2 = new BABYLON.SpotLight("spot02", 
                                     new BABYLON.Vector3(0, 3, -5),
                                     new BABYLON.Vector3(0, -1, 3),
                                     10,
                                     10,
                                     this.scene);
  spotLight2.diffuse = new BABYLON.Color3(1, .55, .1);
  spotLight2.intensity = 8;
  spotLight2.range = 10;
  var spotLight_shadow2 = new BABYLON.ShadowGenerator(2048, spotLight2);

  this.scene_graph["lights"].push(
    {
      light: spotLight2,
      shadow_gen: spotLight_shadow2
    }
  )
}

SceneBuilder.prototype.setup_geo = function() {
  var map = new Map();

  this.setup_ground(map.tiles());
  this.setup_map(map.blocks());
}

SceneBuilder.prototype.setup_ground = function(map_file) {
  var ground = BABYLON.Mesh.CreateGround('ground1', 9.5, 9.5, 2, this.scene);
  var material = new BABYLON.StandardMaterial("bookcase", this.scene);
  material.diffuseColor = new BABYLON.Color3(.3, .2, .1);
  ground.material = material
  this.scene_graph["ground_objects"].push(ground);

  var map = new MapParser(map_file, this.scene_graph["assets"], this.scene);
  tiles = map.parse();

  var _this = this;
  tiles.forEach(function(tile){
    _this.scene_graph["ground_objects"].push(tile.shape);
  })
}

SceneBuilder.prototype.setup_map = function(map_file) {
  var map = new MapParser(map_file, this.scene_graph["assets"], this.scene);
  var blocks = map.parse();

  var _this = this;
  blocks.forEach(function(block){
    _this.scene_graph["objects"].push(block.shape);
  })
}

SceneBuilder.prototype.setup_player = function() {
  // need to improve this - turn scene graph into separate object?
  var player_hash = this.scene_graph["assets"][1];
  this.scene_graph["player"] = player_hash;

  var meshes = player_hash["meshes"];
  var dude = meshes[0];

  var offset = 0.25;
  dude.position.x = offset;
  dude.position.z = offset;

  var scaling = 0.015;
  dude.scaling.x = scaling;
  dude.scaling.y = scaling;
  dude.scaling.z = scaling;

  var material = new BABYLON.StandardMaterial("dude", this.scene);
  material.diffuseColor = new BABYLON.Color3(.3, .3, .3);
  material.specularColor = new BABYLON.Color3(.3, .3, .3);

  for (var index = 0; index < meshes.length; index++) {
    meshes[index].material = material;
  }

  // this.scene.beginAnimation(player_hash.skeletons[0], 0, 100, true, 1.5);
};

SceneBuilder.prototype.setup_player_movement = function() {
  var moveVector = new BABYLON.Vector3(0, 0, 0); 
  var movestep = .075;
  var tilesize = 0.5;

  var player = new Player(this.scene_graph["player"], this.scene);

  var _this = this;
  var onKeyDown = function(event) {
    var key = event.keyCode;
    var ch = String.fromCharCode(key);
    switch (ch) {
      case "W":
        player.move(new BABYLON.Vector3(0, 0, tilesize));
        break;
      case "A":
        player.move(new BABYLON.Vector3(-tilesize, 0, 0));
        break;
      case "S":
        player.move(new BABYLON.Vector3(0, 0, -tilesize));
        break;
      case "D":
        player.move(new BABYLON.Vector3(tilesize, 0, 0));
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown, false);
}

SceneBuilder.prototype.setup_shadows = function() {
  this.scene_graph["ground_objects"].forEach(
    function(item) {
      item.receiveShadows = true;
    }
  )

  var _this = this;
  this.scene_graph["lights"].forEach(
    function(light) {
      if (light["shadow_gen"] !== null){
        var shadow_map = light["shadow_gen"].getShadowMap();
          _this.assign_objects_to_shadow_map(_this.scene_graph["player"]["meshes"], shadow_map);
          _this.assign_objects_to_shadow_map(_this.scene_graph["objects"], shadow_map);
      }
    }
  )
}

SceneBuilder.prototype.assign_objects_to_shadow_map = function(objects, shadow_map) {
  objects.forEach(
    function(object) {
      shadow_map.renderList.push(object);
    }
  )
}
