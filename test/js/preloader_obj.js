var PreloaderOBJ = function (id, path, file, scene) {
  this.id = id;
  this.path = path;
  this.file = file;
  this.scene = scene;
};

PreloaderOBJ.prototype.preload = function() {
  var loader = new BABYLON.AssetsManager(this.scene);
  var load_task = loader.addMeshTask("brazier", "", "assets/obj/", "brazier.obj");

  var _this = this;
  load_task.onSuccess = function() {
    meshes = load_task.loadedMeshes

    material = new BABYLON.StandardMaterial("brazier", _this.scene);
    material.diffuseColor = new BABYLON.Color3(.2, .2, .2);

    meshes[0].material = material;
    meshes[0].setEnabled(false);

    _this.onSuccess(meshes, [], []);
  }

  loader.load();
};
