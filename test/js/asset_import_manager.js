var AssetImportManager = function (assets, scene) {
  this.assets = assets;
  this.loaded_assets = [];
  this.scene = scene;
};

AssetImportManager.prototype.load = function() {
  var _this = this;
  for(var i = 0; i < this.assets.length; i++) {
    var asset = this.assets[i];
    var preloader = new asset["loader"](asset["id"], asset["path"], asset["file"], this.scene);
    preloader.onSuccess = function(meshes, particles, skeletons){
      var asset = {
        meshes: meshes,
        particles: particles,
        skeletons: skeletons
      }
      _this.loaded_assets.push(asset);

      _this.loading_complete();
    }
    preloader.preload();
  }
};

AssetImportManager.prototype.loading_complete = function() {
  if (this.assets.length === this.loaded_assets.length){
    this.onSuccess(this.loaded_assets);
  }
};
