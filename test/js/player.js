var Player = function (player_hash, scene) {
  this.main_mesh = player_hash["meshes"][0];
  this.main_skeleton = player_hash["skeletons"][0];
  this.scene = scene;
  this.moving = false;
  // this.next_move = null;
};

Player.prototype.move = function(vector) {
  // block until move is finished
  if (this.moving == true){
    return;
  }

  this.main_mesh.rotation.y = this.rotation(vector);

  var animationBox = new BABYLON.Animation("myAnimation",
                                           this.anim_param(vector),
                                           25,
                                           BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                           BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

  var keys = [
    { frame: 0, value: this.anim_value_old(vector) },
    { frame: 15, value: this.anim_value_new(vector) }
  ];

  animationBox.setKeys(keys);
  this.main_mesh.animations.push(animationBox);

  this.scene.beginAnimation(this.main_mesh, 0, 15, true);
  this.moving = true;
  this.queue_walkcycle();

  var _this = this;
  setTimeout(function(){
    _this.moving = false;
  }, 600);

  this.main_mesh.animations.pop(animationBox);
};

Player.prototype.queue_walkcycle = function(){
  this.scene.beginAnimation(this.main_skeleton, 0, 75, true, 2.4);
  // this.walkcycle_playing = true;
  // this.scene.beginAnimation(this.main_skeleton, 23, 24, true, 1.5);

  var _this = this;
  setTimeout(function(){

    _this.scene.stopAnimation(_this.main_skeleton);
  }, 600);
}

Player.prototype.rotation = function(vector) {
  var angle = 0;
  if (vector.z > 0) {
    angle = Math.PI;
  }
  else if (vector.x < 0){
    angle = Math.PI * 0.5;
  }
  else if (vector.z < 0){
    angle = Math.PI * 2;
  }
  else if (vector.x > 0){
    angle = Math.PI * 1.5;
  }
  return angle;
};

Player.prototype.anim_param = function(vector) {
  var param = 0;
  if (vector.z > 0 || vector.z < 0) {
    param = "position.z"
  }
  else if (vector.x < 0 || vector.x > 0){
    param = "position.x"
  }
  return param;
};
   
Player.prototype.anim_value_old = function(vector) {
  var value = 0;
  if (vector.z > 0 || vector.z < 0) {
    value = this.main_mesh.position.z;
  }
  else if (vector.x < 0 || vector.x > 0){
    value = this.main_mesh.position.x;
  }
  return value;
}; 

Player.prototype.anim_value_new = function(vector) {
  var value = 0;
  if (vector.z > 0 || vector.z < 0) {
    value = this.main_mesh.position.z + vector.z;
  }
  else if (vector.x < 0 || vector.x > 0){
    value = this.main_mesh.position.x + vector.x;
  }
  return value;
}; 
