var BrazierBlock = function (x, z, rotation, asset, scene) {
  this.x = x;
  this.y = 0.12;
  this.z = z;
  this.width = 0.1;
  this.height = 0.06;
  this.length = 0.1;
  this.rotation = rotation;
  this.scene = scene;

  this.material = new BABYLON.StandardMaterial("wall", this.scene);
  this.material.diffuseColor = new BABYLON.Color3(.2, .2, .2);

  this.shape = asset.createInstance("brazier");

  SceneElement.call(this);
};
