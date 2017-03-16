var PreloaderBabylon = function (id, path, file, scene) {
  this.id = id;
  this.path = path;
  this.file = file;
  this.scene = scene;
};

PreloaderBabylon.prototype.preload = function() {
  var _this = this;
  BABYLON.SceneLoader.ImportMesh(this.id, this.path, this.file, this.scene, function (meshes, particleSystems, skeletons) {
    _this.onSuccess(meshes, particleSystems, skeletons);
  });
};
