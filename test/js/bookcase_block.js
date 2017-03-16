var BookcaseBlock = function (x, z, rotation, scene) {
  this.x = x;
  this.z = z;
  this.rotation = rotation;
  this.scene = scene;

  this.material = new BABYLON.StandardMaterial("bookcase", this.scene);
  this.material.diffuseColor = new BABYLON.Color3(.3, .2, .1);

  this.shape = BABYLON.Mesh.CreateBox('scene_elem', 0.5, this.scene);

  SceneElement.call(this);
};
