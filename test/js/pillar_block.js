var PillarBlock = function (x, z, rotation, scene) {
  this.x = x;
  this.z = z;
  this.width = 0.7;
  this.length = 0.7;
  this.rotation = rotation;
  this.scene = scene;

  this.material = new BABYLON.StandardMaterial("pillar", this.scene);
  this.material.diffuseColor = new BABYLON.Color3(.5, .5, .5);

  this.shape = BABYLON.Mesh.CreateCylinder('scene_elem', 0.5, .5, .5, 8, this.scene);
  this.shape.convertToFlatShadedMesh()

  SceneElement.call(this);
};
