var CarpetTile = function (x, z, rotation, scene) {
  this.height = .1;
  this.x = x;
  this.y = -.02;
  this.z = z;
  this.rotation = rotation;

  this.scene = scene;

  this.material = new BABYLON.StandardMaterial("carpet", this.scene);
  this.material.diffuseColor = new BABYLON.Color3(.6, .1, .1);

  this.shape = BABYLON.Mesh.CreateBox('scene_elem', 0.5, this.scene);

  SceneElement.call(this);
};
