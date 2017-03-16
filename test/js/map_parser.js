var MapParser = function (mapfile, assets, scene) {
  this.mapfile = mapfile;
  this.width = this.mapfile.length;
  this.height = this.mapfile.length;

  this.assets = assets;
  this.scene = scene;
};

MapParser.prototype.parse = function() {
  var objects = [];
  var object = null;

  for ( var i = 0; i < this.width; i ++ ) {
    for ( var j = 0; j < this.height; j ++ ) {
      var coord = this.mapfile[i][j];
      var identifier = coord[0];
      var rotation = coord[1] || 0;

      switch (identifier) {
        case 'W':
          object = new WallBlock(i, j, rotation, this.scene);
          break;
        case 'T':
          object = new WallthinBlock(i, j, rotation, this.scene);
          break;
        case 'D':
          object = new DoorBlock(i, j, rotation, this.scene);
          break;
        case 'B':
          object = new BookcaseBlock(i, j, rotation, this.scene);
          break;
        case 'P':
          object = new PillarBlock(i, j, rotation, this.scene);
          break;
        case 'F':
          var asset = this.assets[0]["meshes"][0];
          object = new BrazierBlock(i, j, rotation, asset, this.scene);
          break;
        case 'C':
          object = new CarpetTile(i, j, rotation, this.scene);
          break;
        default:
          object = null;
          break;
      }
      if (object) {
        objects.push(object);
      }
    }
  }
  return objects;
};
