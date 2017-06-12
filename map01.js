// File generated with Tower of Babel version: 5.3-beta on 06/12/17
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var map01;
(function (map01) {
    var _B = BABYLON;
    var _M = _B.Matrix.FromValues;
    var _Q = _B.Quaternion;
    var _V = _B.Vector3;
    function CONTIG(array, offset, begin, end) {
        for(var i = 0, len = 1 + end - begin; i < len; i++) {
            array[offset + i] = begin + i;
        }
    }
    function REPEAT(array, offset, nRepeats, val) {
        for(var i = 0; i < nRepeats; i++) {
            array[offset + i] = val;
        }
    }

    function initScene(scene, resourcesRootDir, positionOffset) {
        if (!resourcesRootDir) { resourcesRootDir = "./"; }
        if (!positionOffset) { positionOffset = null; }
        scene.autoClear = true;
        scene.clearColor    = new _B.Color3(.0509,.0509,.0509);
        scene.ambientColor  = new _B.Color3(0,0,0);
        scene.gravity = new _V(0,-9.81,0);

        // define materials before meshes
        defineMaterials(scene, resourcesRootDir);

        // instance all root meshes
        var mesh;
        if (typeof (TOWER_OF_BABEL) !== 'undefined'){
            TOWER_OF_BABEL.MeshFactory.MODULES.push(new MeshFactory(scene));
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.012", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.011", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.010", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.009", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.008", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.007", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.006", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.005", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.004", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.003", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.002", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Stone_medium.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Fireplace", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.015", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.014", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.013", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.012", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.011", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.010", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.009", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.008", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.007", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.006", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.005", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.004", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.003", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.002", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Forest_ground", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Stone_large", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Stone_medium", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Grass_small", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
        } else {
            mesh = new Grass_small_012("Grass_small.012", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_011("Grass_small.011", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_010("Grass_small.010", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_009("Grass_small.009", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_008("Grass_small.008", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_007("Grass_small.007", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_006("Grass_small.006", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_005("Grass_small.005", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_004("Grass_small.004", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_003("Grass_small.003", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_002("Grass_small.002", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small_001("Grass_small.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Stone_medium_001("Stone_medium.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Fireplace("Fireplace", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_015("choinka.015", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_014("choinka.014", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_013("choinka.013", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_012("choinka.012", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_011("choinka.011", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_010("choinka.010", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_009("choinka.009", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_008("choinka.008", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_007("choinka.007", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_006("choinka.006", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_005("choinka.005", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_004("choinka.004", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_003("choinka.003", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_002("choinka.002", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_001("choinka.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Forest_ground("Forest_ground", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka("choinka", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Stone_large("Stone_large", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Stone_medium("Stone_medium", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Grass_small("Grass_small", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
        }

        // lights defined after meshes, so shadow gen's can also be defined
        defineLights(scene, positionOffset);
    }
    map01.initScene = initScene;
    var meshLib = new Array(34);
    var cloneCount = 1;

    var originalVerts = 0;
    var clonedVerts = 0;
    var MeshFactory = (function () {
        function MeshFactory(_scene, materialsRootDir) {
            this._scene = _scene;
            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(_scene, materialsRootDir); //embedded version check
        }

        MeshFactory.prototype.getModuleName = function () { return "map01";};

        MeshFactory.prototype.instance = function (meshName, cloneSkeleton) {
            var ret = null;
            var src;
            switch (meshName){
                case "Grass_small.012":
                    src = getViable(0);
                    if (src === null){
                        ret = new Grass_small_012("Grass_small.012", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[0].push(ret);
                    }else{
                        ret = new Grass_small_012("Grass_small.012" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.011":
                    src = getViable(1);
                    if (src === null){
                        ret = new Grass_small_011("Grass_small.011", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[1].push(ret);
                    }else{
                        ret = new Grass_small_011("Grass_small.011" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.010":
                    src = getViable(2);
                    if (src === null){
                        ret = new Grass_small_010("Grass_small.010", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[2].push(ret);
                    }else{
                        ret = new Grass_small_010("Grass_small.010" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.009":
                    src = getViable(3);
                    if (src === null){
                        ret = new Grass_small_009("Grass_small.009", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[3].push(ret);
                    }else{
                        ret = new Grass_small_009("Grass_small.009" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.008":
                    src = getViable(4);
                    if (src === null){
                        ret = new Grass_small_008("Grass_small.008", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[4].push(ret);
                    }else{
                        ret = new Grass_small_008("Grass_small.008" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.007":
                    src = getViable(5);
                    if (src === null){
                        ret = new Grass_small_007("Grass_small.007", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[5].push(ret);
                    }else{
                        ret = new Grass_small_007("Grass_small.007" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.006":
                    src = getViable(6);
                    if (src === null){
                        ret = new Grass_small_006("Grass_small.006", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[6].push(ret);
                    }else{
                        ret = new Grass_small_006("Grass_small.006" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.005":
                    src = getViable(7);
                    if (src === null){
                        ret = new Grass_small_005("Grass_small.005", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[7].push(ret);
                    }else{
                        ret = new Grass_small_005("Grass_small.005" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.004":
                    src = getViable(8);
                    if (src === null){
                        ret = new Grass_small_004("Grass_small.004", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[8].push(ret);
                    }else{
                        ret = new Grass_small_004("Grass_small.004" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.003":
                    src = getViable(9);
                    if (src === null){
                        ret = new Grass_small_003("Grass_small.003", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[9].push(ret);
                    }else{
                        ret = new Grass_small_003("Grass_small.003" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.002":
                    src = getViable(10);
                    if (src === null){
                        ret = new Grass_small_002("Grass_small.002", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[10].push(ret);
                    }else{
                        ret = new Grass_small_002("Grass_small.002" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small.001":
                    src = getViable(11);
                    if (src === null){
                        ret = new Grass_small_001("Grass_small.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[11].push(ret);
                    }else{
                        ret = new Grass_small_001("Grass_small.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Stone_medium.001":
                    src = getViable(12);
                    if (src === null){
                        ret = new Stone_medium_001("Stone_medium.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[12].push(ret);
                    }else{
                        ret = new Stone_medium_001("Stone_medium.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Fireplace":
                    src = getViable(13);
                    if (src === null){
                        ret = new Fireplace("Fireplace", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[13].push(ret);
                    }else{
                        ret = new Fireplace("Fireplace" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.015":
                    src = getViable(14);
                    if (src === null){
                        ret = new choinka_015("choinka.015", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[14].push(ret);
                    }else{
                        ret = new choinka_015("choinka.015" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.014":
                    src = getViable(15);
                    if (src === null){
                        ret = new choinka_014("choinka.014", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[15].push(ret);
                    }else{
                        ret = new choinka_014("choinka.014" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.013":
                    src = getViable(16);
                    if (src === null){
                        ret = new choinka_013("choinka.013", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[16].push(ret);
                    }else{
                        ret = new choinka_013("choinka.013" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.012":
                    src = getViable(17);
                    if (src === null){
                        ret = new choinka_012("choinka.012", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[17].push(ret);
                    }else{
                        ret = new choinka_012("choinka.012" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.011":
                    src = getViable(18);
                    if (src === null){
                        ret = new choinka_011("choinka.011", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[18].push(ret);
                    }else{
                        ret = new choinka_011("choinka.011" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.010":
                    src = getViable(19);
                    if (src === null){
                        ret = new choinka_010("choinka.010", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[19].push(ret);
                    }else{
                        ret = new choinka_010("choinka.010" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.009":
                    src = getViable(20);
                    if (src === null){
                        ret = new choinka_009("choinka.009", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[20].push(ret);
                    }else{
                        ret = new choinka_009("choinka.009" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.008":
                    src = getViable(21);
                    if (src === null){
                        ret = new choinka_008("choinka.008", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[21].push(ret);
                    }else{
                        ret = new choinka_008("choinka.008" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.007":
                    src = getViable(22);
                    if (src === null){
                        ret = new choinka_007("choinka.007", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[22].push(ret);
                    }else{
                        ret = new choinka_007("choinka.007" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.006":
                    src = getViable(23);
                    if (src === null){
                        ret = new choinka_006("choinka.006", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[23].push(ret);
                    }else{
                        ret = new choinka_006("choinka.006" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.005":
                    src = getViable(24);
                    if (src === null){
                        ret = new choinka_005("choinka.005", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[24].push(ret);
                    }else{
                        ret = new choinka_005("choinka.005" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.004":
                    src = getViable(25);
                    if (src === null){
                        ret = new choinka_004("choinka.004", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[25].push(ret);
                    }else{
                        ret = new choinka_004("choinka.004" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.003":
                    src = getViable(26);
                    if (src === null){
                        ret = new choinka_003("choinka.003", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[26].push(ret);
                    }else{
                        ret = new choinka_003("choinka.003" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.002":
                    src = getViable(27);
                    if (src === null){
                        ret = new choinka_002("choinka.002", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[27].push(ret);
                    }else{
                        ret = new choinka_002("choinka.002" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.001":
                    src = getViable(28);
                    if (src === null){
                        ret = new choinka_001("choinka.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[28].push(ret);
                    }else{
                        ret = new choinka_001("choinka.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Forest_ground":
                    src = getViable(29);
                    if (src === null){
                        ret = new Forest_ground("Forest_ground", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[29].push(ret);
                    }else{
                        ret = new Forest_ground("Forest_ground" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka":
                    src = getViable(30);
                    if (src === null){
                        ret = new choinka("choinka", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[30].push(ret);
                    }else{
                        ret = new choinka("choinka" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Stone_large":
                    src = getViable(31);
                    if (src === null){
                        ret = new Stone_large("Stone_large", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[31].push(ret);
                    }else{
                        ret = new Stone_large("Stone_large" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Stone_medium":
                    src = getViable(32);
                    if (src === null){
                        ret = new Stone_medium("Stone_medium", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[32].push(ret);
                    }else{
                        ret = new Stone_medium("Stone_medium" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Grass_small":
                    src = getViable(33);
                    if (src === null){
                        ret = new Grass_small("Grass_small", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[33].push(ret);
                    }else{
                        ret = new Grass_small("Grass_small" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
            }
            if (ret !== null){
                if (cloneSkeleton && src && src.skeleton){
                    var skelName = src.skeleton.name + cloneCount;
                    ret.skeleton = src.skeleton.clone(skelName, skelName);
                }
            }
            else _B.Tools.Error("Mesh not found: " + meshName);
            return ret;
        };
        return MeshFactory;
    })();
    map01.MeshFactory = MeshFactory;
    function getViable(libIdx, isNode) {
        var meshes = meshLib[libIdx];
        if (!meshes || meshes === null){
            if (!meshes) meshLib[libIdx] = new Array();
            return null;
        }

        for (var i = meshes.length - 1; i >= 0; i--){
            if (meshes[i].geometry || isNode) return meshes[i];
        }
        return null;
    }

    function clean(libIdx) {
        var meshes = meshLib[libIdx];
        if (!meshes  || meshes === null) return;

        var stillViable = false;
        for (var i = meshes.length - 1; i >= 0; i--){
            if (!meshes[i].geometry) meshes[i] = null;
            else stillViable = true;
        }
        if (!stillViable) meshLib[libIdx] = null;
    }

    function getStats() { return [cloneCount, originalVerts, clonedVerts]; }
    map01.getStats = getStats;


    var waitingMeshes = [];
    var pendingTextures = 0;
    var texLoadStart;
    function onTexturesLoaded(){
        if (--pendingTextures > 0) return;
        _B.Tools.Log("Texture Load delay:  " + ((_B.Tools.Now - texLoadStart) / 1000).toFixed(2) + " secs");
        for (var i = 0, len = waitingMeshes.length; i < len; i++){
            if (typeof waitingMeshes[i].grandEntrance == "function") waitingMeshes[i].grandEntrance();
            else makeVisible(waitingMeshes[i]);
        }
        waitingMeshes = [];
        matLoaded = true;
    }

    function makeVisible(mesh){
        var children = mesh.getChildMeshes();
        mesh.isVisible = true;
        for (var i = 0, len = children.length; i < len; i++){
            children[i].isVisible = true;
        }
    }

    var aheadQueued = false;
    function matReadAhead(materialsRootDir) {
        if (aheadQueued) return;
        var txBuffer;
        var fName;

        fName = "Grass_small.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "Stone_medium.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "Stone_small.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "korona2.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "root.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "Forest_ground.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        fName = "Stone_large.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = 1;
            txtBuffer.coordinatesIndex = 0;
            txtBuffer.coordinatesMode = 0;
            txtBuffer.uOffset = 0;
            txtBuffer.vOffset = 0;
            txtBuffer.uScale = 1;
            txtBuffer.vScale = 1;
            txtBuffer.uAng = 0;
            txtBuffer.vAng = 0;
            txtBuffer.wAng = 0;
            txtBuffer.wrapU = 1;
            txtBuffer.wrapV = 1;
            pendingTextures++;
            TOWER_OF_BABEL.Preloader.addtextureBuffer(txtBuffer);
        }

        aheadQueued = true;
    }
    map01.matReadAhead = matReadAhead;

    var matLoaded = false;
    function defineMaterials(scene, materialsRootDir) {
        if (!materialsRootDir) { materialsRootDir = "./"; }
        if (materialsRootDir.lastIndexOf("/") + 1  !== materialsRootDir.length) { materialsRootDir  += "/"; }
        TOWER_OF_BABEL.Preloader.SCENE = scene;
        var loadStart = _B.Tools.Now;
        matReadAhead(materialsRootDir);
        var material;
        var texture;
        var txBuffer;


        material = scene.getMaterialByID("map01.Grass_small");
        if (!material){
            material = new _B.StandardMaterial("map01.Grass_small", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.8,.8,.8);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Grass_small.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.001");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.001", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Stone_medium.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Stone_small");
        if (!material){
            material = new _B.StandardMaterial("map01.Stone_small", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Stone_small.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.korona2");
        if (!material){
            material = new _B.StandardMaterial("map01.korona2", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.4128,.4128,.4128);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona2.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.root");
        if (!material){
            material = new _B.StandardMaterial("map01.root", scene);
            material.ambientColor  = new _B.Color3(.8007,.8007,.8007);
            material.diffuseColor  = new _B.Color3(.6405,.6405,.6405);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("root.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Forest_ground");
        if (!material){
            material = new _B.StandardMaterial("map01.Forest_ground", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Forest_ground.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Stona_large");
        if (!material){
            material = new _B.StandardMaterial("map01.Stona_large", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Stone_large.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();
        var multiMaterial;
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#0", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#1", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#2", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#3", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#4", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#5", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#6", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#7", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#8", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#9", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#10", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#11", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#12", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#13", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#14", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#15", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.root"));
        if (pendingTextures === 0) matLoaded = true;
        else texLoadStart = _B.Tools.Now;
        _B.Tools.Log("map01.defineMaterials completed:  " + ((_B.Tools.Now - loadStart) / 1000).toFixed(2) + " secs");
    }
    map01.defineMaterials = defineMaterials;

    var Grass_small_012 = (function (_super) {
        __extends(Grass_small_012, _super);
        function Grass_small_012(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = .806;
            this.position.y  = .883;
            this.position.z  = 20.8274;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.6704;
            this.scaling.y   = 3.6704;
            this.scaling.z   = 3.6704;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_012.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(0);
        };
        return Grass_small_012;
    })(BABYLON.Mesh);
    map01.Grass_small_012 = Grass_small_012;

    var Grass_small_011 = (function (_super) {
        __extends(Grass_small_011, _super);
        function Grass_small_011(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 1.2864;
            this.position.y  = .883;
            this.position.z  = 21.5292;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.4574;
            this.scaling.y   = 3.4574;
            this.scaling.z   = 3.4574;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_011.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(1);
        };
        return Grass_small_011;
    })(BABYLON.Mesh);
    map01.Grass_small_011 = Grass_small_011;

    var Grass_small_010 = (function (_super) {
        __extends(Grass_small_010, _super);
        function Grass_small_010(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = .361;
            this.position.y  = 1.356;
            this.position.z  = 22.2383;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 5.7022;
            this.scaling.y   = 5.7022;
            this.scaling.z   = 5.7022;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_010.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(2);
        };
        return Grass_small_010;
    })(BABYLON.Mesh);
    map01.Grass_small_010 = Grass_small_010;

    var Grass_small_009 = (function (_super) {
        __extends(Grass_small_009, _super);
        function Grass_small_009(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -.0199;
            this.position.y  = .883;
            this.position.z  = 22.9932;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.6704;
            this.scaling.y   = 3.6704;
            this.scaling.z   = 3.6704;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_009.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(3);
        };
        return Grass_small_009;
    })(BABYLON.Mesh);
    map01.Grass_small_009 = Grass_small_009;

    var Grass_small_008 = (function (_super) {
        __extends(Grass_small_008, _super);
        function Grass_small_008(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -.5864;
            this.position.y  = .883;
            this.position.z  = 20.8274;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.6704;
            this.scaling.y   = 3.6704;
            this.scaling.z   = 3.6704;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_008.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(4);
        };
        return Grass_small_008;
    })(BABYLON.Mesh);
    map01.Grass_small_008 = Grass_small_008;

    var Grass_small_007 = (function (_super) {
        __extends(Grass_small_007, _super);
        function Grass_small_007(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -2.0442;
            this.position.y  = 1.356;
            this.position.z  = 23.2782;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 5.7022;
            this.scaling.y   = 5.7022;
            this.scaling.z   = 5.7022;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_007.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(5);
        };
        return Grass_small_007;
    })(BABYLON.Mesh);
    map01.Grass_small_007 = Grass_small_007;

    var Grass_small_006 = (function (_super) {
        __extends(Grass_small_006, _super);
        function Grass_small_006(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -1.7233;
            this.position.y  = .883;
            this.position.z  = 22.6336;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.6704;
            this.scaling.y   = 3.6704;
            this.scaling.z   = 3.6704;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_006.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(6);
        };
        return Grass_small_006;
    })(BABYLON.Mesh);
    map01.Grass_small_006 = Grass_small_006;

    var Grass_small_005 = (function (_super) {
        __extends(Grass_small_005, _super);
        function Grass_small_005(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -2.7021;
            this.position.y  = .883;
            this.position.z  = 23.5599;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.4574;
            this.scaling.y   = 3.4574;
            this.scaling.z   = 3.4574;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_005.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(7);
        };
        return Grass_small_005;
    })(BABYLON.Mesh);
    map01.Grass_small_005 = Grass_small_005;

    var Grass_small_004 = (function (_super) {
        __extends(Grass_small_004, _super);
        function Grass_small_004(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -2.0002;
            this.position.y  = .883;
            this.position.z  = 22.1604;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.4574;
            this.scaling.y   = 3.4574;
            this.scaling.z   = 3.4574;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_004.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(8);
        };
        return Grass_small_004;
    })(BABYLON.Mesh);
    map01.Grass_small_004 = Grass_small_004;

    var Grass_small_003 = (function (_super) {
        __extends(Grass_small_003, _super);
        function Grass_small_003(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -1.0215;
            this.position.y  = .883;
            this.position.z  = 21.2341;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.6704;
            this.scaling.y   = 3.6704;
            this.scaling.z   = 3.6704;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_003.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(9);
        };
        return Grass_small_003;
    })(BABYLON.Mesh);
    map01.Grass_small_003 = Grass_small_003;

    var Grass_small_002 = (function (_super) {
        __extends(Grass_small_002, _super);
        function Grass_small_002(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -1.3424;
            this.position.y  = 1.356;
            this.position.z  = 21.8787;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 5.7022;
            this.scaling.y   = 5.7022;
            this.scaling.z   = 5.7022;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_002.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(10);
        };
        return Grass_small_002;
    })(BABYLON.Mesh);
    map01.Grass_small_002 = Grass_small_002;

    var Grass_small_001 = (function (_super) {
        __extends(Grass_small_001, _super);
        function Grass_small_001(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -13.785;
            this.position.y  = .9399;
            this.position.z  = 23.5987;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 5.7022;
            this.scaling.y   = 5.7022;
            this.scaling.z   = 5.7022;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(11);
        };
        return Grass_small_001;
    })(BABYLON.Mesh);
    map01.Grass_small_001 = Grass_small_001;

    var Stone_medium_001 = (function (_super) {
        __extends(Stone_medium_001, _super);
        function Stone_medium_001(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -13.1544;
            this.position.y  = .1157;
            this.position.z  = 21.9716;
            this.rotation.x  = 0;
            this.rotation.y  = .6706;
            this.rotation.z  = 0;
            this.scaling.x   = .445;
            this.scaling.y   = .445;
            this.scaling.z   = .445;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .7004,-.0095,-1.3528,-.7004,-.7004,-1.6655,.7004,-.7004,-1.6655,1.0284,.0104,.6721,1.3312,-.7004,-.7004,1.3596,-.7203,.6721,.3582,.4704,.6721,-.7004,.2901,-.7004,.7004,.2901,-.7004,-.9783,-.5964,.6721,-.9399,.0302,2.0446,-1.234,-.7401,2.0446,-.4931,.0302,2.3612,.7401,-.7401,2.5964,-.7401,-.7401,2.5964,-.7004,-1,-.7004,-.7004,-.7004,-1.6655
                    ,-1,-.7004,-.7004,-.7004,-.0095,-1.3528,-.7004,.2901,-.7004,-1,-.0095,-.7004,-.7401,-1.0567,2.0446,-1.234,-.7401,2.0446,-.7401,-.7401,2.5964,-.7401,.5434,2.0446,-.4931,.0302,2.3612,.7004,-1,-.7004,1.3312,-.7004,-.7004,.7004,-.7004,-1.6655,.7004,.2901,-.7004,.7004,-.0095,-1.3528,1,-.0095,-.7004,.7401,-1.0567,2.0446,.7401,-.7401,2.5964
                    ,1.3879,-.7401,2.0446,.7401,.3468,2.0446,1.0567,.0302,2.0446,.7401,.0302,2.3612,-.7203,-1.0284,.6721,-1,-.7004,-.7004,-1,-.7004,-.7004,-.7004,-.7004,-1.6655,-.7203,.1939,.6721,-.9699,.0104,.6721,-.7401,-.7401,2.5964,-.4931,.0302,2.3612,.7401,-.7401,2.5964,-.7401,.5434,2.0446,1.3596,-.7203,.6721,.7203,-1.0284,.6721,.7004,.2901,-.7004
                    ,.3582,.4704,.6721,.7004,-.0095,-1.3528,-.7004,-.7004,-1.6655,-.7203,-1.0284,.6721,-.7203,-1.0284,.6721,.7401,.3468,2.0446,1.0567,.0302,2.0446,1.3312,-.7004,-.7004,-.7004,.2901,-.7004,-.9783,-.5964,.6721,-1.234,-.7401,2.0446,-1,-.7004,-.7004,-.7401,.5434,2.0446,.7401,.3468,2.0446,1.0567,.0302,2.0446,1.3879,-.7401,2.0446,1.0691,-.2033,2.5256
                    ,1.4666,-.494,2.9802,.9913,-.494,2.6317,1.4615,-.1949,1.7569,1.0173,-.494,2.1473,1.3491,-.5024,1.6745,1.6889,-.0014,1.9236,1.7067,-.0772,2.6527,1.2313,-.0772,2.3042,2.1424,-.4502,2.2561,2.4707,-.1866,1.7808,2.5705,-.5107,1.854,2.3979,-.1866,1.5623,2.0379,-.5107,1.1756,2.5402,-.5107,1.5439,1.7067,-.62,2.6527,1.4666,-.494,2.9802,1.8083,-.494,2.7272
                    ,1.5444,-.2033,2.8741,1.7067,-.0772,2.6527,1.8083,-.2033,2.7272,2.403,-.6439,1.7311,2.5705,-.5107,1.854,2.5402,-.5107,1.5439,2.403,.0293,1.7311,2.3979,-.1866,1.5623,1.2313,-.62,2.3042,1.0173,-.494,2.1473,.9913,-.494,2.6317,1.2313,-.0772,2.3042,1.0691,-.2033,2.5256,1.1297,-.2033,2.2297,1.9007,-.6439,1.3629,2.0379,-.5107,1.1756,1.6809,-.5107,1.2018
                    ,1.9007,-.0534,1.3629,1.7932,-.1866,1.2841,1.9794,-.1866,1.2555,2.0548,-.632,2.1919,1.8083,-.494,2.7272,1.8083,-.494,2.7272,1.4666,-.494,2.9802,2.0548,-.1177,2.1919,2.1395,-.1949,2.254,2.5402,-.5107,1.5439,2.3979,-.1866,1.5623,2.0379,-.5107,1.1756,2.403,.0293,1.7311,1.3491,-.5024,1.6745,1.566,-.632,1.8336,1.2313,-.0772,2.3042,1.6889,-.0014,1.9236
                    ,1.0691,-.2033,2.5256,1.4666,-.494,2.9802,2.0548,-.632,2.1919,2.0548,-.632,2.1919,1.9007,-.0534,1.3629,1.7932,-.1866,1.2841,1.0173,-.494,2.1473,1.7067,-.0772,2.6527,2.1424,-.4502,2.2561,2.5705,-.5107,1.854,1.8083,-.494,2.7272,2.403,.0293,1.7311,1.9007,-.0534,1.3629,1.7932,-.1866,1.2841,1.6809,-.5107,1.2018,-.7004,-.0095,-1.3528,-.7203,.1939,.6721
                    ,-.7004,-1,-.7004,-1,-.7004,-.7004,-1,-.7004,-.7004,-.7401,-.7401,2.5964,-.7401,-.7401,2.5964,.7401,-.7401,2.5964,1.3879,-.7401,2.0446,1.3596,-.7203,.6721,.7004,.2901,-.7004,.7004,-.0095,-1.3528,.7004,-.7004,-1.6655,.7004,-.7004,-1.6655,-.7004,-.7004,-1.6655,-.7004,-.0095,-1.3528,-.7203,-1.0284,.6721,.7401,.3468,2.0446,.3582,.4704,.6721
                    ,1.3596,-.7203,.6721,1.3312,-.7004,-.7004,-.7203,-1.0284,.6721,-.9783,-.5964,.6721,-.7401,.5434,2.0446,-.7203,.1939,.6721,1.0567,.0302,2.0446,1.5444,-.2033,2.8741,2.0548,-.1177,2.1919,1.7067,-.62,2.6527,1.8083,-.494,2.7272,1.8083,-.494,2.7272,2.5402,-.5107,1.5439,2.5402,-.5107,1.5439,2.0379,-.5107,1.1756,1.6809,-.5107,1.2018,1.3491,-.5024,1.6745
                    ,1.2313,-.0772,2.3042,1.0691,-.2033,2.5256,.9913,-.494,2.6317,.9913,-.494,2.6317,1.4666,-.494,2.9802,1.5444,-.2033,2.8741,2.0548,-.632,2.1919,2.0548,-.632,2.1919,1.9007,-.0534,1.3629,1.6889,-.0014,1.9236,1.3491,-.5024,1.6745,1.0173,-.494,2.1473,2.0548,-.632,2.1919,2.1424,-.4502,2.2561,2.403,.0293,1.7311,2.0548,-.1177,2.1919,1.7932,-.1866,1.2841
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(360);
                CONTIG(_i, 0, 0, 25);
                _i.set([10], 26);
                CONTIG(_i, 27, 26, 39);
                _i.set([9,18,40,41,42,10,43,44,10,45,21,46,32,35,12,47,36,13,37,32,48,49,50,3,51,52,4,31,26,53,15,7,0,8,49,15,54,32,55,21,56,3,57,49,58,26,42,20,59,21
                ,60,61,20,9,62,63,6,64,65,5], 41);
                CONTIG(_i, 101, 66, 92);
                _i.set([77], 128);
                CONTIG(_i, 129, 93, 106);
                _i.set([76,85,107,108,109,77,110,111,77,112,88,113,99,102,79,114,103,80,104,99,115,116,117,70,118,119,71,98,93,120,82,74,67,75,121,93,82,99,122,88,123,70,124,116,125,93,109,87,126,88
                ,127,128,87,76,129,130,73,131,132,72,133,0,134,1,3,31,4,6,135,7,9,43,10,12,37,13,38,136,137,18,20,138,42,24,10,139,11,10,21,140,141,35,37,12,36,142,13,32,34,143
                ,144,31,3,145,146,4,26,147,148,7,149,0,49,26,15,32,49,150,151,152,3,49,153,154,42,43,20,21,155,156,20,43,9,157,158,6,159,3,5,67,160,68,70,98,71,73,161,74,76,110
                ,77,79,104,80,105,162,163,85,87,164,109,91,77,165,78,77,88,166,167,102,104,79,103,168,80,99,101,169,170,98,70,171,172,71,93,173,174,74,175,67,176,116,93,99,116,177,178,179,70,116
                ,180,181,109,110,87,88,182,183,87,110,76,184,185,73,186,70,72], 143);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .414,.6287,-.6583,-.4828,-.3422,-.8061,.3929,-.3504,-.8502,.7766,.6295,-.0237,.9188,-.3108,-.2432,.9392,-.3421,-.0278,.1952,.9794,-.0513,-.3835,.9027,-.1948,.3758,.8994,-.2233,-.9688,-.2478,-.0072,-.8577,.3628,.3643,-.9322,-.2905,.2158,-.203,.4187,.8851,.3063,-.3214,.896,-.3678,-.2926,.8827,-.3669,-.9184,-.1482,-.4828,-.3422,-.8061
                    ,-.9252,-.3473,-.1531,-.4923,.5808,-.6483,-.3835,.9027,-.1948,-.9133,.3657,-.1791,-.2922,-.9361,.1959,-.9322,-.2905,.2158,-.3678,-.2926,.8827,-.4864,.7849,.3838,-.203,.4187,.8851,.2126,-.9647,-.1554,.9188,-.3108,-.2432,.3929,-.3504,-.8502,.3758,.8994,-.2233,.414,.6287,-.6583,.8078,.558,-.1902,.2131,-.9487,.2335,.3063,-.3214,.896
                    ,.8882,-.304,.3444,.3931,.8474,.3567,.7933,.5062,.3383,.3369,.4683,.8168,-.4834,-.8754,-.0077,-.9252,-.3473,-.1531,-.9252,-.3473,-.1531,-.4828,-.3422,-.8061,-.4724,.8801,-.0479,-.889,.4577,.0128,-.3678,-.2926,.8827,-.203,.4187,.8851,.3063,-.3214,.896,-.4864,.7849,.3838,.9392,-.3421,-.0278,.2222,-.9747,-.0228,.3758,.8994,-.2233
                    ,.1952,.9794,-.0513,.414,.6287,-.6583,-.4828,-.3422,-.8061,-.4834,-.8754,-.0077,-.4834,-.8754,-.0077,.3931,.8474,.3567,.7933,.5062,.3383,.9188,-.3108,-.2432,-.3835,.9027,-.1948,-.9688,-.2478,-.0072,-.9322,-.2905,.2158,-.9252,-.3473,-.1531,-.4864,.7849,.3838,.3931,.8474,.3567,.7933,.5062,.3383,.8882,-.304,.3444,-.7231,.6287,.2862
                    ,-.0872,-.3422,.9355,-.8195,-.3504,.4533,-.6403,.6295,-.44,-.8848,-.3108,-.3471,-.7739,-.3421,-.5329,-.1878,.9794,-.074,.1941,.9027,.3839,-.4351,.8994,-.0421,.777,-.2478,.5786,.9071,.3628,.2132,.8794,-.2905,.377,.687,.4187,-.5938,.2827,-.3214,-.9037,.8185,-.2926,-.4944,.2083,-.9184,.3364,-.0872,-.3422,.9355,.6556,-.3473,.6705
                    ,.0137,.5808,.8139,.1941,.9027,.3839,.6307,.3657,.6845,.3515,-.9361,.0147,.8794,-.2905,.377,.8185,-.2926,-.4944,.6192,.7849,-.0219,.687,.4187,-.5938,-.2633,-.9647,-.0003,-.8848,-.3108,-.3471,-.8195,-.3504,.4533,-.4351,.8994,-.0421,-.7231,.6287,.2862,-.7639,.558,-.3242,-.0338,-.9487,-.3143,.2827,-.3214,-.9037,-.5127,-.304,-.8029
                    ,-.1062,.8474,-.5201,-.4397,.5062,-.7419,.2112,.4683,-.8579,.3853,-.8754,.2919,.6556,-.3473,.6705,.6556,-.3473,.6705,-.0872,-.3422,.9355,.3526,.8801,.3179,.7246,.4577,.5152,.8185,-.2926,-.4944,.687,.4187,-.5938,.2827,-.3214,-.9037,.6192,.7849,-.0219,-.7739,-.3421,-.5329,-.1927,-.9747,-.1129,-.4351,.8994,-.0421,-.1878,.9794,-.074
                    ,-.7231,.6287,.2862,-.0872,-.3422,.9355,.3853,-.8754,.2919,.3853,-.8754,.2919,-.1062,.8474,-.5201,-.4397,.5062,-.7419,-.8848,-.3108,-.3471,.1941,.9027,.3839,.777,-.2478,.5786,.8794,-.2905,.377,.6556,-.3473,.6705,.6192,.7849,-.0219,-.1062,.8474,-.5201,-.4397,.5062,-.7419,-.5127,-.304,-.8029,-.4923,.5808,-.6483,-.4724,.8801,-.0479
                    ,-.3669,-.9184,-.1482,-.9252,-.3473,-.1531,-.9252,-.3473,-.1531,-.3678,-.2926,.8827,-.3678,-.2926,.8827,.3063,-.3214,.896,.8882,-.304,.3444,.9392,-.3421,-.0278,.3758,.8994,-.2233,.414,.6287,-.6583,.3929,-.3504,-.8502,.3929,-.3504,-.8502,-.4828,-.3422,-.8061,-.4923,.5808,-.6483,-.4834,-.8754,-.0077,.3931,.8474,.3567,.1952,.9794,-.0513
                    ,.9392,-.3421,-.0278,.9188,-.3108,-.2432,-.4834,-.8754,-.0077,-.9688,-.2478,-.0072,-.4864,.7849,.3838,-.4724,.8801,-.0479,.7933,.5062,.3383,.0137,.5808,.8139,.3526,.8801,.3179,.2083,-.9184,.3364,.6556,-.3473,.6705,.6556,-.3473,.6705,.8185,-.2926,-.4944,.8185,-.2926,-.4944,.2827,-.3214,-.9037,-.5127,-.304,-.8029,-.7739,-.3421,-.5329
                    ,-.4351,.8994,-.0421,-.7231,.6287,.2862,-.8195,-.3504,.4533,-.8195,-.3504,.4533,-.0872,-.3422,.9355,.0137,.5808,.8139,.3853,-.8754,.2919,.3853,-.8754,.2919,-.1062,.8474,-.5201,-.1878,.9794,-.074,-.7739,-.3421,-.5329,-.8848,-.3108,-.3471,.3853,-.8754,.2919,.777,-.2478,.5786,.6192,.7849,-.0219,.3526,.8801,.3179,-.4397,.5062,-.7419
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .8028,.5625,.9831,.631,.8066,.631,.6682,.399,.7692,.1876,.7692,.4,.8453,.2342,.9783,.4525,.8018,.4525,.4154,.3902,.4783,.615,.3756,.6061,.6532,.9497,.7511,.7761,.7511,.959,.0732,.5385,.08,.6921,.0435,.5397,.5173,.0799,.5468,.1871,.5015,.1865,.0685,.1049,.0151,.1061,.0766,.019,.5468,.6209
                    ,.4877,.6575,.2466,.5385,.332,.5397,.2534,.6921,.6215,.1806,.6566,.0761,.6726,.1861,.2518,.1049,.2598,.019,.3397,.1061,.598,.7878,.6317,.7319,.6532,.7973,.37,.3786,.417,.1744,.417,.1744,.4361,.019,.5196,.4001,.4899,.4007,.3838,.6846,.4877,.6575,.2598,.019,.5771,.981,.3359,.3229,.2492,.3217
                    ,.6215,.1806,.5771,.384,.6566,.0761,.08,.6921,.0709,.3217,.0709,.3217,.6097,.6061,.6638,.6119,.332,.5397,.5468,.1871,.0495,.3234,.0151,.1061,.417,.1744,.9849,.019,.7995,.0246,.6638,.6119,.7692,.6124,.8028,.5625,.9831,.631,.8066,.631,.6682,.399,.7692,.1876,.7692,.4,.8453,.2342,.9783,.4525
                    ,.8018,.4525,.4154,.3902,.4783,.615,.3756,.6061,.6532,.9497,.7511,.7761,.7511,.959,.0732,.5385,.08,.6921,.0435,.5397,.5173,.0799,.5468,.1871,.5015,.1865,.0685,.1049,.0151,.1061,.0766,.019,.5468,.6209,.4877,.6575,.2466,.5385,.332,.5397,.2534,.6921,.6215,.1806,.6566,.0761,.6726,.1861,.2518,.1049
                    ,.2598,.019,.3397,.1061,.598,.7878,.6317,.7319,.6532,.7973,.37,.3786,.417,.1744,.417,.1744,.4361,.019,.5196,.4001,.4899,.4007,.3838,.6846,.4877,.6575,.2598,.019,.5771,.981,.3359,.3229,.2492,.3217,.6215,.1806,.5771,.384,.6566,.0761,.08,.6921,.0709,.3217,.0709,.3217,.6097,.6061,.6638,.6119
                    ,.332,.5397,.5468,.1871,.0495,.3234,.0151,.1061,.417,.1744,.9849,.019,.7995,.0246,.6638,.6119,.7692,.6124,.9794,.5625,.9829,.2422,.389,.1644,.417,.1744,.417,.1744,.3838,.6846,.0766,.019,.2598,.019,.7137,.6503,.3359,.3229,.6215,.1806,.6566,.0761,.7343,.019,.2534,.6921,.08,.6921,.9794,.5625
                    ,.0709,.3217,.6097,.6061,.5771,.384,.3359,.3229,.332,.5397,.0709,.3217,.0495,.3234,.9849,.019,.9829,.2422,.6638,.6119,.9794,.5625,.9829,.2422,.389,.1644,.417,.1744,.417,.1744,.3838,.6846,.0766,.019,.2598,.019,.7137,.6503,.3359,.3229,.6215,.1806,.6566,.0761,.7343,.019,.2534,.6921,.08,.6921
                    ,.9794,.5625,.0709,.3217,.0709,.3217,.6097,.6061,.5771,.384,.3359,.3229,.332,.5397,.0709,.3217,.0495,.3234,.9849,.019,.9829,.2422,.6638,.6119
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 187, 0, 360, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Stone_medium_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(12);
        };
        return Stone_medium_001;
    })(BABYLON.Mesh);
    map01.Stone_medium_001 = Stone_medium_001;

    var Fireplace = (function (_super) {
        __extends(Fireplace, _super);
        function Fireplace(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -2.9379;
            this.position.y  = 0;
            this.position.z  = 3.0632;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.2682,-.1417,1.5513,-.4664,-.156,1.4711,-.3984,-.0765,1.5838,-.1742,.1142,1.4145,-.3464,.1706,1.2964,-.2162,.1054,1.2639,-.4318,.1215,1.4856,-.4836,-.0602,1.4428,-.4376,.065,1.3759,-.3636,-.0175,1.605,-.1802,.0486,1.522,-.2262,-.0766,1.589,-.2311,-.1867,1.3798,-.1624,.0039,1.4506,-.1851,-.0615,1.3128,-.2311,-.1867,1.3798,-.3283,-.164,1.3553
                    ,-.304,-.2207,1.4616,-.1851,-.0615,1.3128,-.2162,.1054,1.2639,-.2824,-.0389,1.2884,-.3464,.1706,1.2964,-.4126,.0264,1.3209,-.4585,-.0988,1.3878,-.4836,-.0602,1.4428,-.2682,-.1417,1.5513,-.2262,-.0766,1.589,-.2084,-.1213,1.5175,-.1742,.1142,1.4145,-.1802,.0486,1.522,-.4318,.1215,1.4856,-.3045,.1794,1.447,-.3176,.1077,1.5381,-.4778,-.0036,1.5526
                    ,-.3636,-.0175,1.605,-.1851,-.0615,1.3128,-.2311,-.1867,1.3798,-.4664,-.156,1.4711,-.304,-.2207,1.4616,-.2311,-.1867,1.3798,-.2162,.1054,1.2639,-.4126,.0264,1.3209,-.1742,.1142,1.4145,-.2162,.1054,1.2639,-.4585,-.0988,1.3878,-.3045,.1794,1.447,-.3464,.1706,1.2964,-.4836,-.0602,1.4428,-.1802,.0486,1.522,-.2084,-.1213,1.5175,-.2262,-.0766,1.589
                    ,-.2682,-.1417,1.5513,-.3636,-.0175,1.605,-.2262,-.0766,1.589,-.4318,.1215,1.4856,-.4585,-.0988,1.3878,-.115,-.1708,1.6851,-.259,-.1833,1.8063,-.1433,-.1134,1.7998,-.1828,.0544,1.5557,-.3454,.104,1.6411,-.3171,.0467,1.5264,-.3212,.0111,1.7447,-.2003,-.0493,1.8486,-.2881,-.0991,1.808,-.0685,-.1135,1.668,-.1457,.0486,1.7181,-.1016,-.0033,1.6047
                    ,-.1167,-.1529,1.6247,-.2663,-.1002,1.5224,-.2332,-.2103,1.5857,-.2332,-.2103,1.5857,-.2922,-.1904,1.6512,-.1996,-.2403,1.676,-.2663,-.1002,1.5224,-.3171,.0467,1.5264,-.3254,-.0803,1.5879,-.3454,.104,1.6411,-.3537,-.0229,1.7026,-.3205,-.133,1.7659,-.2881,-.0991,1.808,-.115,-.1708,1.6851,-.0685,-.1135,1.668,-.1167,-.1529,1.6247,-.1828,.0544,1.5557
                    ,-.1498,-.0427,1.5614,-.1016,-.0033,1.6047,-.2335,.0608,1.7853,-.2111,.1117,1.6704,-.2003,-.0493,1.8486,-.1125,-.0615,1.7814,-.2332,-.2103,1.5857,-.259,-.1833,1.8063,-.1996,-.2403,1.676,-.1167,-.1529,1.6247,-.2332,-.2103,1.5857,-.3171,.0467,1.5264,-.3537,-.0229,1.7026,-.1828,.0544,1.5557,-.3171,.0467,1.5264,-.3205,-.133,1.7659,-.2111,.1117,1.6704
                    ,-.3454,.104,1.6411,-.2881,-.0991,1.808,-.1016,-.0033,1.6047,-.0685,-.1135,1.668,-.115,-.1708,1.6851,-.1125,-.0615,1.7814,-.0685,-.1135,1.668,-.1125,-.0615,1.7814,-.3205,-.133,1.7659,1.7793,-.1708,2.205,1.925,-.1833,2.324,1.8972,-.1134,2.2116,1.6647,.0544,2.2957,1.7788,.104,2.4396,1.6609,.0467,2.4331,1.8997,.0608,2.3028,1.9321,-.0991,2.3522
                    ,1.8761,.0111,2.3966,1.7538,-.1135,2.1625,1.8174,.0486,2.229,1.6977,-.0033,2.2068,1.7035,-.2103,2.3396,1.6642,-.0427,2.2622,1.6475,-.1002,2.3839,1.7035,-.2103,2.3396,1.7789,-.1904,2.3854,1.7861,-.2403,2.2898,1.6475,-.1002,2.3839,1.6609,.0467,2.4331,1.7228,-.0803,2.4298,1.7788,.104,2.4396,1.8408,-.0229,2.4363,1.8968,-.133,2.392,1.9321,-.0991,2.3522
                    ,1.7793,-.1708,2.205,1.7538,-.1135,2.1625,1.7202,-.1529,2.2179,1.6647,.0544,2.2957,1.6977,-.0033,2.2068,1.8997,.0608,2.3028,1.7826,.1117,2.3022,1.9558,-.0493,2.2585,1.8735,-.0615,2.1847,1.7035,-.2103,2.3396,1.925,-.1833,2.324,1.7861,-.2403,2.2898,1.7035,-.2103,2.3396,1.6609,.0467,2.4331,1.8408,-.0229,2.4363,1.6647,.0544,2.2957,1.6609,.0467,2.4331
                    ,1.8968,-.133,2.392,1.7826,.1117,2.3022,1.7788,.104,2.4396,1.9321,-.0991,2.3522,1.6977,-.0033,2.2068,1.7202,-.1529,2.2179,1.7538,-.1135,2.1625,1.7793,-.1708,2.205,1.8735,-.0615,2.1847,1.7538,-.1135,2.1625,1.9558,-.0493,2.2585,1.8997,.0608,2.3028,1.8968,-.133,2.392,1.6763,-.1417,2.3804,1.6343,-.156,2.59,1.7324,-.0765,2.5023,1.5243,.1142,2.3135
                    ,1.4403,.1706,2.5046,1.3842,.1054,2.3827,1.6421,.1215,2.5534,1.6097,-.0602,2.6122,1.5353,.065,2.5795,1.7468,-.0175,2.4642,1.6311,.0486,2.2994,1.7055,-.0766,2.3321,1.632,-.1213,2.3279,1.4265,-.0615,2.3431,1.5008,-.1867,2.3758,1.5008,-.1867,2.3758,1.4948,-.164,2.4759,1.5947,-.2207,2.4323,1.4265,-.0615,2.3431,1.3842,.1054,2.3827,1.4205,-.0389,2.4432
                    ,1.4403,.1706,2.5046,1.4767,.0264,2.5651,1.551,-.0988,2.5978,1.6097,-.0602,2.6122,1.6763,-.1417,2.3804,1.7055,-.0766,2.3321,1.632,-.1213,2.3279,1.5243,.1142,2.3135,1.5576,.0039,2.2951,1.6311,.0486,2.2994,1.6421,.1215,2.5534,1.5805,.1794,2.4354,1.6724,.1077,2.4314,1.7164,-.0036,2.5861,1.7468,-.0175,2.4642,1.5008,-.1867,2.3758,1.6343,-.156,2.59
                    ,1.5947,-.2207,2.4323,1.632,-.1213,2.3279,1.5008,-.1867,2.3758,1.4403,.1706,2.5046,1.3842,.1054,2.3827,1.5243,.1142,2.3135,1.3842,.1054,2.3827,1.5805,.1794,2.4354,1.4403,.1706,2.5046,1.6097,-.0602,2.6122,1.7055,-.0766,2.3321,1.6763,-.1417,2.3804,1.7468,-.0175,2.4642,1.7055,-.0766,2.3321,1.7164,-.0036,2.5861,1.6421,.1215,2.5534,1.551,-.0988,2.5978
                    ,1.6582,-.1208,-.4109,1.8041,-.1318,-.4887,1.7035,-.0704,-.5043,1.8029,.0703,-.2375,1.7381,.1275,-.3807,1.8482,.1207,-.3309,1.8463,.039,-.4244,1.7615,-.014,-.5358,1.8294,-.0578,-.4848,1.6737,-.0248,-.4941,1.632,.0264,-.3442,1.6151,-.0704,-.4047,1.6486,-.105,-.3587,1.7585,-.0588,-.2433,1.7416,-.1555,-.3038,1.7416,-.1555,-.3038,1.8043,-.1381,-.3494
                    ,1.7292,-.1819,-.3876,1.7585,-.0588,-.2433,1.8029,.0703,-.2375,1.8212,-.0413,-.2889,1.8482,.1207,-.3309,1.8665,.0092,-.3822,1.8496,-.0876,-.4427,1.8294,-.0578,-.4848,1.6582,-.1208,-.4109,1.6151,-.0704,-.4047,1.6486,-.105,-.3587,1.6928,.077,-.2873,1.6655,-.0083,-.2982,1.632,.0264,-.3442,1.7784,.0827,-.4754,1.6906,.072,-.4337,1.7615,-.014,-.5358
                    ,1.6737,-.0248,-.4941,1.7585,-.0588,-.2433,1.7416,-.1555,-.3038,1.8041,-.1318,-.4887,1.7292,-.1819,-.3876,1.6486,-.105,-.3587,1.7416,-.1555,-.3038,1.8029,.0703,-.2375,1.8665,.0092,-.3822,1.8029,.0703,-.2375,1.8496,-.0876,-.4427,1.7381,.1275,-.3807,1.8482,.1207,-.3309,1.8294,-.0578,-.4848,1.632,.0264,-.3442,1.6151,-.0704,-.4047,1.6582,-.1208,-.4109
                    ,1.6737,-.0248,-.4941,1.6151,-.0704,-.4047,1.6928,.077,-.2873,1.7615,-.014,-.5358,1.8496,-.0876,-.4427,1.5029,-.1433,-.3864,1.5025,-.153,-.5319,1.4489,-.0989,-.4601,1.6973,.0248,-.4276,1.5593,.0752,-.4361,1.6433,.0692,-.5012,1.5699,-.0027,-.5382,1.4482,-.0494,-.5181,1.5159,-.0878,-.55,1.49,-.099,-.3503,1.4985,.0264,-.421,1.544,-.0138,-.3386
                    ,1.5396,-.1294,-.3574,1.6745,-.0887,-.3954,1.6205,-.1739,-.4072,1.6205,-.1739,-.4072,1.6109,-.1585,-.4747,1.5502,-.197,-.4321,1.6745,-.0887,-.3954,1.6973,.0248,-.4276,1.6649,-.0733,-.463,1.6433,.0692,-.5012,1.6109,-.0289,-.5366,1.5569,-.1141,-.5484,1.5159,-.0878,-.55,1.5029,-.1433,-.3864,1.49,-.099,-.3503,1.5396,-.1294,-.3574,1.6133,.0308,-.3624
                    ,1.5936,-.0443,-.3457,1.544,-.0138,-.3386,1.5022,.0358,-.5064,1.4482,-.0494,-.5181,1.4446,-.0588,-.4327,1.6205,-.1739,-.4072,1.5025,-.153,-.5319,1.5502,-.197,-.4321,1.5396,-.1294,-.3574,1.6205,-.1739,-.4072,1.6433,.0692,-.5012,1.6973,.0248,-.4276,1.6973,.0248,-.4276,1.5569,-.1141,-.5484,1.5593,.0752,-.4361,1.6433,.0692,-.5012,1.5159,-.0878,-.55
                    ,1.49,-.099,-.3503,1.5029,-.1433,-.3864,1.4446,-.0588,-.4327,1.49,-.099,-.3503,1.6133,.0308,-.3624,1.4446,-.0588,-.4327,1.6109,-.0289,-.5366,1.5569,-.1141,-.5484,.2361,-.1102,1.945,.3433,-.12,1.8467,.2542,-.0659,1.8555,.3974,.0579,2.061,.3107,.1082,1.9532,.4155,.1022,1.9715,.3934,.0303,1.8923,.2966,-.0163,1.8159,.3657,-.0548,1.8445
                    ,.231,-.0258,1.8707,.2283,.0192,2.0076,.2006,-.0659,1.9598,.2393,-.0964,1.9916,.3582,-.0557,2.0658,.3306,-.1408,2.018,.3306,-.1408,2.018,.374,-.1254,1.9654,.3017,-.164,1.9493,.3582,-.0557,2.0658,.3974,.0579,2.061,.4017,-.0403,2.0132,.4155,.1022,1.9715,.4198,.0041,1.9237,.3922,-.0811,1.8759,.3657,-.0548,1.8445,.2361,-.1102,1.945
                    ,.2006,-.0659,1.9598,.2393,-.0964,1.9916,.2926,.0638,2.0427,.267,-.0112,2.0394,.2283,.0192,2.0076,.3243,.0688,1.8637,.2587,.0594,1.9185,.2966,-.0163,1.8159,.231,-.0258,1.8707,.3306,-.1408,2.018,.3433,-.12,1.8467,.3017,-.164,1.9493,.2393,-.0964,1.9916,.3306,-.1408,2.018,.4155,.1022,1.9715,.3974,.0579,2.061,.3974,.0579,2.061
                    ,.3107,.1082,1.9532,.4155,.1022,1.9715,.3657,-.0548,1.8445,.2006,-.0659,1.9598,.2361,-.1102,1.945,.231,-.0258,1.8707,.2006,-.0659,1.9598,.2926,.0638,2.0427,.2966,-.0163,1.8159,.3922,-.0811,1.8759,.3587,-.0878,2.0434,.5144,-.0988,2.0989,.4583,-.0373,2.014,.2906,.1101,2.1521,.4275,.1537,2.2377,.3279,.1033,2.2671,.4953,.072,2.1734
                    ,.5206,.019,2.0356,.5287,-.0248,2.1202,.4307,.0082,1.9988,.2917,.0594,2.0689,.3251,-.0374,2.0157,.3136,-.072,2.0714,.3024,-.0257,2.2303,.3357,-.1225,2.1771,.3357,-.1225,2.1771,.4116,-.105,2.1928,.3893,-.1489,2.1115,.3024,-.0257,2.2303,.3279,.1033,2.2671,.3782,-.0082,2.246,.4275,.1537,2.2377,.4778,.0422,2.2167,.5111,-.0546,2.1635
                    ,.5287,-.0248,2.1202,.3587,-.0878,2.0434,.3251,-.0374,2.0157,.3136,-.072,2.0714,.2906,.1101,2.1521,.2803,.0248,2.1246,.2917,.0594,2.0689,.4873,.1158,2.0888,.3901,.1605,2.1228,.3974,.105,2.052,.5206,.019,2.0356,.4307,.0082,1.9988,.3357,-.1225,2.1771,.5144,-.0988,2.0989,.3893,-.1489,2.1115,.3136,-.072,2.0714,.3357,-.1225,2.1771
                    ,.4275,.1537,2.2377,.3279,.1033,2.2671,.2906,.1101,2.1521,.3279,.1033,2.2671,.3901,.1605,2.1228,.4275,.1537,2.2377,.5287,-.0248,2.1202,.2917,.0594,2.0689,.3251,-.0374,2.0157,.3587,-.0878,2.0434,.4307,.0082,1.9988,.3251,-.0374,2.0157,.5111,-.0546,2.1635,.3536,-.0878,.0446,.4634,-.0988,.1681,.455,-.0373,.0667,.2415,.1101,.1073
                    ,.3204,.1537,.2481,.219,.1033,.226,.4108,.072,.2243,.4992,.019,.1156,.4656,-.0248,.1937,.4381,.0082,.0401,.2825,.0594,.0348,.3374,-.0374,.0041,.3005,-.072,.0475,.2143,-.0257,.1815,.2691,-.1225,.1508,.2691,-.1225,.1508,.3281,-.105,.2011,.3476,-.1489,.1191,.2143,-.0257,.1815,.219,.1033,.226,.2732,-.0082,.2317
                    ,.3204,.1537,.2481,.3746,.0422,.2538,.4294,-.0546,.2232,.4656,-.0248,.1937,.3536,-.0878,.0446,.3374,-.0374,.0041,.3005,-.072,.0475,.2415,.1101,.1073,.2457,.0248,.0782,.2825,.0594,.0348,.4444,.1158,.1463,.3429,.1605,.1294,.3833,.105,.0708,.4992,.019,.1156,.4381,.0082,.0401,.2691,-.1225,.1508,.4634,-.0988,.1681
                    ,.3476,-.1489,.1191,.3005,-.072,.0475,.2691,-.1225,.1508,.3204,.1537,.2481,.219,.1033,.226,.2415,.1101,.1073,.219,.1033,.226,.3429,.1605,.1294,.3204,.1537,.2481,.4656,-.0248,.1937,.3374,-.0374,.0041,.3536,-.0878,.0446,.4381,.0082,.0401,.3374,-.0374,.0041,.4294,-.0546,.2232,.2933,-.1102,-.1006,.4345,-.12,-.1352
                    ,.3522,-.0659,-.1704,.2959,.0638,.0123,.4379,.1022,.0089,.3789,.0579,.0787,.4566,.0303,-.0712,.4084,-.0163,-.1847,.4553,-.0548,-.1264,.3246,-.0258,-.1682,.2564,.0192,-.0494,.2551,-.0659,-.1047,.2737,-.0964,-.0582,.3424,-.0557,.064,.3411,-.1408,.0088,.3411,-.1408,.0088,.4045,-.1254,-.0164,.3488,-.164,-.0653,.3424,-.0557,.064
                    ,.3789,.0579,.0787,.4057,-.0403,.0389,.4379,.1022,.0089,.4646,.0041,-.0309,.4634,-.0811,-.0861,.4553,-.0548,-.1264,.2933,-.1102,-.1006,.2551,-.0659,-.1047,.2737,-.0964,-.0582,.2959,.0638,.0123,.275,-.0112,-.0029,.2564,.0192,-.0494,.4097,.0688,-.1294,.3548,.1082,-.0575,.3258,.0594,-.113,.4084,-.0163,-.1847,.3246,-.0258,-.1682
                    ,.3424,-.0557,.064,.3411,-.1408,.0088,.4345,-.12,-.1352,.3488,-.164,-.0653,.2737,-.0964,-.0582,.3411,-.1408,.0088,.4379,.1022,.0089,.3789,.0579,.0787,.2959,.0638,.0123,.3789,.0579,.0787,.3548,.1082,-.0575,.4379,.1022,.0089,.4553,-.0548,-.1264,.2564,.0192,-.0494,.2551,-.0659,-.1047,.2933,-.1102,-.1006,.3246,-.0258,-.1682
                    ,.2551,-.0659,-.1047,.4084,-.0163,-.1847,.4646,.0041,-.0309,.4634,-.0811,-.0861,2.7061,-.1102,.6874,2.7473,-.12,.8269,2.7785,-.0659,.743,2.5934,.0638,.6953,2.6035,.1022,.837,2.531,.0579,.7814,2.6844,.0303,.8519,2.7955,-.0163,.7984,2.7395,-.0548,.848,2.7751,-.0258,.7154,2.6532,.0192,.6529,2.7083,-.0659,.6491,2.599,-.1408,.7403
                    ,2.6076,-.0112,.6737,2.5439,-.0557,.7442,2.599,-.1408,.7403,2.6272,-.1254,.8024,2.6734,-.164,.7445,2.5439,-.0557,.7442,2.531,.0579,.7814,2.5721,-.0403,.8063,2.6035,.1022,.837,2.6445,.0041,.8618,2.6996,-.0811,.858,2.7395,-.0548,.848,2.7061,-.1102,.6874,2.7083,-.0659,.6491,2.6627,-.0964,.6698,2.5934,.0638,.6953,2.6532,.0192,.6529
                    ,2.7404,.0688,.8023,2.6659,.1082,.7509,2.72,.0594,.7193,2.7955,-.0163,.7984,2.7751,-.0258,.7154,2.599,-.1408,.7403,2.7473,-.12,.8269,2.6734,-.164,.7445,2.599,-.1408,.7403,2.6035,.1022,.837,2.531,.0579,.7814,2.5934,.0638,.6953,2.531,.0579,.7814,2.6659,.1082,.7509,2.6035,.1022,.837,2.7395,-.0548,.848,2.7083,-.0659,.6491
                    ,2.6627,-.0964,.6698,2.7061,-.1102,.6874,2.7751,-.0258,.7154,2.7083,-.0659,.6491,2.7955,-.0163,.7984,2.6996,-.0811,.858,2.5638,-.0878,.7545,2.4457,-.0988,.87,2.5465,-.0373,.8568,2.3763,.1033,.6286,2.4787,.1605,.7478,2.359,.1537,.7309,2.4666,.1158,.85,2.4203,-.0248,.8734,2.3871,.072,.8201,2.5723,.0082,.8387,2.5703,.0594,.683
                    ,2.6035,-.0374,.7364,2.4538,-.1225,.6751,2.5252,.0248,.6483,2.4206,-.0257,.6217,2.4538,-.1225,.6751,2.4064,-.105,.7364,2.4892,-.1489,.752,2.4206,-.0257,.6217,2.3763,.1033,.6286,2.3732,-.0082,.683,2.359,.1537,.7309,2.3559,.0422,.7854,2.3891,-.0546,.8387,2.4203,-.0248,.8734,2.5638,-.0878,.7545,2.6035,-.0374,.7364,2.5584,-.072,.7016
                    ,2.496,.1101,.6455,2.5703,.0594,.683,2.4666,.1158,.85,2.5391,.105,.7854,2.4998,.019,.9033,2.5723,.0082,.8387,2.4206,-.0257,.6217,2.4538,-.1225,.6751,2.4457,-.0988,.87,2.4892,-.1489,.752,2.4538,-.1225,.6751,2.359,.1537,.7309,2.3763,.1033,.6286,2.3763,.1033,.6286,2.4787,.1605,.7478,2.359,.1537,.7309,2.4203,-.0248,.8734
                    ,2.5703,.0594,.683,2.5584,-.072,.7016,2.6035,-.0374,.7364,2.5638,-.0878,.7545,2.5723,.0082,.8387,2.6035,-.0374,.7364,2.496,.1101,.6455,2.4666,.1158,.85,2.3559,.0422,.7854,2.3891,-.0546,.8387,2.5218,.0794,2.1836,2.397,-.2607,2.2373,2.3502,-.024,2.3414,2.1362,.2716,1.8902,1.9048,-.0153,1.8628,2.0764,.0881,1.705,1.989,-.0112,2.2174
                    ,2.2278,-.2405,2.2065,2.0392,-.1464,2.063,2.4577,.2109,2.2001,2.0975,.1745,2.1966,2.2691,.305,2.0566,2.516,.1464,2.0813,2.3719,.054,1.757,2.5605,-.0401,1.9006,2.5605,-.0401,1.9006,2.4577,-.1745,1.9477,2.5949,-.0954,2.0855,2.3719,.054,1.757,2.0764,.0881,1.705,2.2691,-.0804,1.8041,1.9048,-.0153,1.8628,2.0975,-.1838,1.9619,2.2861,-.2778,2.1054
                    ,2.2278,-.2405,2.2065,2.5218,.0794,2.1836,2.4577,.2109,2.2001,2.516,.1464,2.0813,2.1362,.2716,1.8902,2.3274,.2405,1.9377,2.2691,.305,2.0566,1.989,-.0112,2.2174,1.9646,.1682,2.048,2.1777,-.1053,2.3609,2.2861,.0804,2.3401,2.5605,-.0401,1.9006,2.397,-.2607,2.2373,2.5949,-.0954,2.0855,2.516,.1464,2.0813,2.5605,-.0401,1.9006,1.9048,-.0153,1.8628
                    ,2.0764,.0881,1.705,2.1362,.2716,1.8902,2.0764,.0881,1.705,1.9646,.1682,2.048,1.9048,-.0153,1.8628,2.2278,-.2405,2.2065,2.4577,.2109,2.2001,2.5218,.0794,2.1836,2.2861,.0804,2.3401,2.4577,.2109,2.2001,2.2861,.0804,2.3401,1.989,-.0112,2.2174,2.0975,-.1838,1.9619,2.2861,-.2778,2.1054,.126,.1254,-.2539,.3258,.1354,.0987,.1109,.2884,-.0239
                    ,-.353,-.1511,-.0893,-.2857,-.2176,.3088,-.2706,-.3806,.0788,-.1774,.1682,.2613,.1828,.1112,.2241,-.0515,-.024,.3046,-.0219,.3058,-.045,-.2611,.0313,-.2126,-.0268,.1666,-.2931,.0515,.024,-.3046,-.0222,-.3401,-.1412,.2121,-.2049,-.2217,.2121,-.2049,-.2217,.2563,-.1706,-.0355,.3093,-.0123,-.1973,-.0222,-.3401,-.1412,-.2706,-.3806,.0788
                    ,.0219,-.3058,.045,-.2857,-.2176,.3088,.0069,-.1428,.2749,.2412,-.0075,.1944,.1828,.1112,.2241,.126,.1254,-.2539,-.0268,.1666,-.2931,.0515,.024,-.3046,-.353,-.1511,-.0893,-.1828,-.1112,-.2241,-.2611,.0313,-.2126,-.1774,.1682,.2613,-.3681,.0119,.1407,-.2563,.1706,.0355,.057,.3035,.1808,-.0219,.3058,-.045,.2121,-.2049,-.2217
                    ,.3258,.1354,.0987,.3093,-.0123,-.1973,.0515,.024,-.3046,.2121,-.2049,-.2217,-.2857,-.2176,.3088,-.2706,-.3806,.0788,-.353,-.1511,-.0893,-.2706,-.3806,.0788,-.3681,.0119,.1407,-.2857,-.2176,.3088,.1828,.1112,.2241,-.0268,.1666,-.2931,.126,.1254,-.2539,-.0219,.3058,-.045,-.0268,.1666,-.2931,.057,.3035,.1808,-.1774,.1682,.2613
                    ,.0069,-.1428,.2749,.2412,-.0075,.1944,2.1814,.1143,-.3995,2.5282,.0396,-.3085,2.3566,.2317,-.2561,1.938,-.0489,.0315,2.2174,-.1687,.2417,2.0422,-.2861,.0983,2.3396,.1513,.117,2.5176,.0326,-.1358,2.3985,-.0473,.0751,2.2679,.2765,-.1845,1.9556,.1062,-.117,2.0747,.1861,-.3279,2.0815,.0473,-.3766,2.0589,-.2749,-.2029,2.178,-.195,-.4138
                    ,2.178,-.195,-.4138,2.3312,-.1967,-.3279,2.2955,-.05,-.4739,2.0589,-.2749,-.2029,2.0422,-.2861,.0983,2.2121,-.2765,-.117,2.2174,-.1687,.2417,2.3872,-.1591,.0264,2.5064,-.0793,-.1845,2.5176,.0326,-.1358,2.1814,.1143,-.3995,2.0747,.1861,-.3279,2.0815,.0473,-.3766,1.938,-.0489,.0315,1.9624,-.0326,-.1657,1.9556,.1062,-.117,2.3396,.1513,.117
                    ,2.1131,.0685,.1749,2.1488,.1967,.0264,2.4587,.2311,-.0939,2.2679,.2765,-.1845,2.178,-.195,-.4138,2.5282,.0396,-.3085,2.2955,-.05,-.4739,2.0815,.0473,-.3766,2.178,-.195,-.4138,2.0422,-.2861,.0983,2.3872,-.1591,.0264,1.938,-.0489,.0315,2.0422,-.2861,.0983,2.5064,-.0793,-.1845,2.1131,.0685,.1749,2.2174,-.1687,.2417,2.5176,.0326,-.1358
                    ,1.9556,.1062,-.117,2.0747,.1861,-.3279,2.1814,.1143,-.3995,2.2679,.2765,-.1845,2.0747,.1861,-.3279,2.3396,.1513,.117,2.5064,-.0793,-.1845,.2502,-.194,2.0153,.2633,-.2184,2.3805,.3918,-.0825,2.1958,-.0289,.2433,1.9642,-.0929,.3398,2.3152,-.2345,.2283,2.1347,.2618,.2559,2.3164,.2311,-.0547,2.427,.0946,.1592,2.402,.2796,-.0827,1.9235
                    ,.264,.2322,2.1017,.1431,.1312,1.8985,.1557,-.1592,1.9455,-.1799,-.0569,2.0521,-.0433,-.2708,2.0771,-.0433,-.2708,2.0771,-.0137,-.2322,2.2459,.1351,-.3291,2.1338,-.1799,-.0569,2.0521,-.2345,.2283,2.1347,-.1502,-.0182,2.2209,-.0929,.3398,2.3152,-.0086,.0932,2.4013,.1279,-.1207,2.4263,.2311,-.0547,2.427,.2502,-.194,2.0153,.2796,-.0827,1.9235
                    ,.1557,-.1592,1.9455,-.0289,.2433,1.9642,.0192,.0547,1.9205,.1431,.1312,1.8985,.2618,.2559,2.3164,.1127,.3547,2.1447,.3983,.0419,2.3414,.4005,.0182,2.1267,-.0433,-.2708,2.0771,.2633,-.2184,2.3805,.1351,-.3291,2.1338,.1557,-.1592,1.9455,-.0433,-.2708,2.0771,-.0929,.3398,2.3152,-.2345,.2283,2.1347,-.0289,.2433,1.9642,-.2345,.2283,2.1347
                    ,.1127,.3547,2.1447,-.0929,.3398,2.3152,.2311,-.0547,2.427,.1431,.1312,1.8985,.2796,-.0827,1.9235,.2502,-.194,2.0153,.4005,.0182,2.1267,.2796,-.0827,1.9235,.3983,.0419,2.3414,.2618,.2559,2.3164,.1279,-.1207,2.4263,-.1855,-.194,1.0176,-.4467,-.2184,1.273,-.2237,-.0825,1.2437,-.3354,.2433,.7767,-.6381,.3398,.9656,-.5999,.2283,.7394
                    ,-.4004,.2559,1.2288,-.5028,-.0547,1.2805,-.5762,.1592,1.1627,-.1667,.0182,1.2037,-.1711,.1312,.8597,-.0977,-.0827,.9775,-.1974,-.1592,.9007,-.5021,-.0569,.7242,-.4287,-.2708,.842,-.4287,-.2708,.842,-.5336,-.2322,.9775,-.3505,-.3291,1.0122,-.5021,-.0569,.7242,-.5999,.2283,.7394,-.6069,-.0182,.8597,-.6381,.3398,.9656,-.6452,.0932,1.0859
                    ,-.5718,-.1207,1.2037,-.5028,-.0547,1.2805,-.1855,-.194,1.0176,-.0977,-.0827,.9775,-.1974,-.1592,.9007,-.3354,.2433,.7767,-.2708,.0547,.7829,-.1711,.1312,.8597,-.4004,.2559,1.2288,-.3737,.3547,1.0029,-.2401,.2322,1.0859,-.327,.0419,1.3466,-.1667,.0182,1.2037,-.4287,-.2708,.842,-.4467,-.2184,1.273,-.3505,-.3291,1.0122,-.1974,-.1592,.9007
                    ,-.4287,-.2708,.842,-.6381,.3398,.9656,-.5999,.2283,.7394,-.3354,.2433,.7767,-.5999,.2283,.7394,-.5718,-.1207,1.2037,-.3737,.3547,1.0029,-.6381,.3398,.9656,-.5028,-.0547,1.2805,-.0977,-.0827,.9775,-.1855,-.194,1.0176,-.1667,.0182,1.2037,-.0977,-.0827,.9775,-.4004,.2559,1.2288,-.5718,-.1207,1.2037,3.0046,.1275,1.0176,2.943,-.1275,1.273
                    ,2.8868,.1275,1.2437,2.5423,.1275,.7767,2.3528,-.1275,.9656,2.4707,-.1275,.7394,2.5438,-.1275,1.1627,2.7355,.0702,1.3466,2.7699,-.1275,1.2805,2.81,.2141,1.2037,2.7016,.2466,.8597,2.9278,.2466,.9776,2.9678,.1275,.9007,2.7722,-.1275,.7242,2.9984,-.1275,.8421,2.9984,-.1275,.8421,2.9278,-.2141,.9776,3.0788,-.0725,1.0122,2.7722,-.1275,.7242
                    ,2.4707,-.1275,.7394,2.7016,-.2141,.8597,2.3528,-.1275,.9656,2.5838,-.2141,1.0859,2.81,-.2141,1.2037,2.7699,-.1275,1.2805,3.0046,.1275,1.0176,2.9278,.2466,.9776,2.9678,.1275,.9007,2.5423,.1275,.7767,2.7417,.1275,.7829,2.7016,.2466,.8597,2.5094,.0702,1.2288,2.4245,.1275,1.0029,2.5838,.2141,1.0859,2.7355,.0702,1.3466,2.81,.2141,1.2037
                    ,2.7722,-.1275,.7242,2.9984,-.1275,.8421,2.943,-.1275,1.273,3.0788,-.0725,1.0122,2.9678,.1275,.9007,2.9984,-.1275,.8421,2.3528,-.1275,.9656,2.4707,-.1275,.7394,2.5423,.1275,.7767,2.4707,-.1275,.7394,2.4245,.1275,1.0029,2.3528,-.1275,.9656,2.7699,-.1275,1.2805,2.7016,.2466,.8597,2.9278,.2466,.9776,3.0046,.1275,1.0176,2.81,.2141,1.2037
                    ,2.9278,.2466,.9776,2.5838,-.2141,1.0859,2.81,-.2141,1.2037,1.4094,.1254,-.6014,1.2831,.1354,-.2164,1.2292,.2884,-.4578,.9654,-.1511,-.8449,.7162,-.2176,-.5272,.8965,-.3806,-.6708,.8242,.1682,-.4791,1.0941,.1112,-.2376,.8769,-.024,-.3568,1.1554,.3058,-.5702,1.1184,.0313,-.8599,1.3356,.1666,-.7408,1.3969,.024,-.6906,1.2264,-.3401,-.6352
                    ,1.4436,-.2049,-.5161,1.4436,-.2049,-.5161,1.3356,-.1706,-.3581,1.491,-.0123,-.4277,1.2264,-.3401,-.6352,.8965,-.3806,-.6708,1.1184,-.3058,-.4772,.7162,-.2176,-.5272,.9381,-.1428,-.3336,1.1554,-.0075,-.2145,1.0941,.1112,-.2376,1.4094,.1254,-.6014,1.3356,.1666,-.7408,1.3969,.024,-.6906,.9654,-.1511,-.8449,1.1796,-.1112,-.8098,1.1184,.0313,-.8599
                    ,.8242,.1682,-.4791,.7851,.0119,-.7013,.9381,.1706,-.6894,1.0415,.3035,-.3599,1.1554,.3058,-.5702,1.4436,-.2049,-.5161,1.2831,.1354,-.2164,1.491,-.0123,-.4277,1.3969,.024,-.6906,1.4436,-.2049,-.5161,.8965,-.3806,-.6708,.9381,-.1428,-.3336,.9654,-.1511,-.8449,.8965,-.3806,-.6708,1.1554,-.0075,-.2145,.7851,.0119,-.7013,.7162,-.2176,-.5272
                    ,1.0941,.1112,-.2376,1.3356,.1666,-.7408,1.4094,.1254,-.6014,1.1554,.3058,-.5702,1.3356,.1666,-.7408,.8242,.1682,-.4791,1.1554,-.0075,-.2145,1.2644,.1275,2.7695,1.0094,-.1275,2.8329,1.0094,.1275,2.7695,1.2644,.1275,2.2483,1.0094,-.1275,2.1675,1.2644,-.1275,2.1675,.9227,-.1275,2.4279,.8483,.0702,2.6829,.9227,-.1275,2.6829,1.2644,.2466,2.6829
                    ,1.0094,.2141,2.4279,1.2644,.2466,2.4279,1.4172,-.1275,2.6829,1.351,.1275,2.4279,1.4172,-.1275,2.4279,1.4172,-.1275,2.6829,1.2644,-.2141,2.6829,1.3035,-.0725,2.8329,1.4172,-.1275,2.4279,1.2644,-.1275,2.1675,1.2644,-.2141,2.4279,1.0094,-.1275,2.1675,1.0094,-.2141,2.4279,1.0094,-.2141,2.6829,.9227,-.1275,2.6829,1.2644,.1275,2.7695,1.2644,.2466,2.6829
                    ,1.351,.1275,2.6829,1.2644,.1275,2.2483,1.2644,.2466,2.4279,.8483,.0702,2.4279,1.0094,.1275,2.2483,.8483,.0702,2.6829,1.0094,.2141,2.6829,1.4172,-.1275,2.6829,1.0094,-.1275,2.8329,1.3035,-.0725,2.8329,1.4172,-.1275,2.6829,1.2644,-.1275,2.1675,1.0094,-.2141,2.4279,1.2644,.1275,2.2483,1.2644,-.1275,2.1675,1.0094,.1275,2.2483,1.0094,-.1275,2.1675
                    ,.9227,-.1275,2.6829,1.2644,.2466,2.4279,1.351,.1275,2.6829,1.2644,.2466,2.6829,1.2644,.1275,2.7695,1.0094,.2141,2.6829,1.2644,.2466,2.6829,.8483,.0702,2.6829,1.0094,-.2141,2.6829,-.304,-.2207,1.4616,-.4778,-.0036,1.5526,-.2084,-.1213,1.5175,-.1851,-.0615,1.3128,-.4585,-.0988,1.3878,-.4664,-.156,1.4711,-.304,-.2207,1.4616,-.2682,-.1417,1.5513
                    ,-.2162,.1054,1.2639,-.3464,.1706,1.2964,-.4126,.0264,1.3209,-.1742,.1142,1.4145,-.4585,-.0988,1.3878,-.3045,.1794,1.447,-.4836,-.0602,1.4428,-.1802,.0486,1.522,-.2084,-.1213,1.5175,-.2682,-.1417,1.5513,-.3984,-.0765,1.5838,-.3636,-.0175,1.605,-.4778,-.0036,1.5526,-.4318,.1215,1.4856,-.4126,.0264,1.3209,-.4585,-.0988,1.3878,-.1996,-.2403,1.676
                    ,-.2335,.0608,1.7853,-.1125,-.0615,1.7814,-.2332,-.2103,1.5857,-.2663,-.1002,1.5224,-.3205,-.133,1.7659,-.259,-.1833,1.8063,-.1996,-.2403,1.676,-.115,-.1708,1.6851,-.1167,-.1529,1.6247,-.3171,.0467,1.5264,-.3454,.104,1.6411,-.3537,-.0229,1.7026,-.1828,.0544,1.5557,-.3205,-.133,1.7659,-.2111,.1117,1.6704,-.2335,.0608,1.7853,-.2881,-.0991,1.808
                    ,-.2003,-.0493,1.8486,-.1016,-.0033,1.6047,-.115,-.1708,1.6851,-.1433,-.1134,1.7998,-.1125,-.0615,1.7814,-.1125,-.0615,1.7814,-.2003,-.0493,1.8486,-.3537,-.0229,1.7026,-.3205,-.133,1.7659,1.7861,-.2403,2.2898,1.9558,-.0493,2.2585,1.8735,-.0615,2.1847,1.7202,-.1529,2.2179,1.7035,-.2103,2.3396,1.6475,-.1002,2.3839,1.8968,-.133,2.392,1.925,-.1833,2.324
                    ,1.7861,-.2403,2.2898,1.7793,-.1708,2.205,1.6609,.0467,2.4331,1.7788,.104,2.4396,1.8408,-.0229,2.4363,1.6647,.0544,2.2957,1.8968,-.133,2.392,1.7826,.1117,2.3022,1.9321,-.0991,2.3522,1.6977,-.0033,2.2068,1.7202,-.1529,2.2179,1.7793,-.1708,2.205,1.8972,-.1134,2.2116,1.8735,-.0615,2.1847,1.8735,-.0615,2.1847,1.9558,-.0493,2.2585,1.8408,-.0229,2.4363
                    ,1.8968,-.133,2.392,1.5947,-.2207,2.4323,1.7164,-.0036,2.5861,1.5008,-.1867,2.3758,1.4265,-.0615,2.3431,1.551,-.0988,2.5978,1.6343,-.156,2.59,1.5947,-.2207,2.4323,1.6763,-.1417,2.3804,1.632,-.1213,2.3279,1.4403,.1706,2.5046,1.4767,.0264,2.5651,1.5243,.1142,2.3135,1.551,-.0988,2.5978,1.5805,.1794,2.4354,1.6097,-.0602,2.6122,1.7055,-.0766,2.3321
                    ,1.6311,.0486,2.2994,1.6763,-.1417,2.3804,1.7324,-.0765,2.5023,1.7468,-.0175,2.4642,1.7164,-.0036,2.5861,1.4767,.0264,2.5651,1.551,-.0988,2.5978,1.7292,-.1819,-.3876,1.6928,.077,-.2873,1.7784,.0827,-.4754,1.7585,-.0588,-.2433,1.8496,-.0876,-.4427,1.8041,-.1318,-.4887,1.7292,-.1819,-.3876,1.6582,-.1208,-.4109,1.6486,-.105,-.3587,1.8029,.0703,-.2375
                    ,1.8482,.1207,-.3309,1.8665,.0092,-.3822,1.8496,-.0876,-.4427,1.7381,.1275,-.3807,1.7784,.0827,-.4754,1.8294,-.0578,-.4848,1.7615,-.014,-.5358,1.632,.0264,-.3442,1.6582,-.1208,-.4109,1.7035,-.0704,-.5043,1.6737,-.0248,-.4941,1.6928,.077,-.2873,1.7615,-.014,-.5358,1.8665,.0092,-.3822,1.8496,-.0876,-.4427,1.5502,-.197,-.4321,1.6133,.0308,-.3624
                    ,1.5022,.0358,-.5064,1.4446,-.0588,-.4327,1.6205,-.1739,-.4072,1.6745,-.0887,-.3954,1.5569,-.1141,-.5484,1.5025,-.153,-.5319,1.5502,-.197,-.4321,1.5029,-.1433,-.3864,1.5396,-.1294,-.3574,1.6433,.0692,-.5012,1.6109,-.0289,-.5366,1.5569,-.1141,-.5484,1.5593,.0752,-.4361,1.5022,.0358,-.5064,1.5159,-.0878,-.55,1.4482,-.0494,-.5181,1.49,-.099,-.3503
                    ,1.544,-.0138,-.3386,1.5029,-.1433,-.3864,1.4489,-.0989,-.4601,1.4446,-.0588,-.4327,1.6133,.0308,-.3624,1.4446,-.0588,-.4327,1.4482,-.0494,-.5181,1.6109,-.0289,-.5366,.3017,-.164,1.9493,.2926,.0638,2.0427,.3243,.0688,1.8637,.3306,-.1408,2.018,.3582,-.0557,2.0658,.3922,-.0811,1.8759,.3433,-.12,1.8467,.3017,-.164,1.9493,.2361,-.1102,1.945
                    ,.2393,-.0964,1.9916,.4155,.1022,1.9715,.4198,.0041,1.9237,.3922,-.0811,1.8759,.3107,.1082,1.9532,.3243,.0688,1.8637,.3657,-.0548,1.8445,.2966,-.0163,1.8159,.2006,-.0659,1.9598,.2283,.0192,2.0076,.2361,-.1102,1.945,.2542,-.0659,1.8555,.231,-.0258,1.8707,.2926,.0638,2.0427,.2966,-.0163,1.8159,.4198,.0041,1.9237,.3922,-.0811,1.8759
                    ,.3893,-.1489,2.1115,.4873,.1158,2.0888,.3357,-.1225,2.1771,.3024,-.0257,2.2303,.5111,-.0546,2.1635,.5144,-.0988,2.0989,.3893,-.1489,2.1115,.3587,-.0878,2.0434,.3136,-.072,2.0714,.4275,.1537,2.2377,.4778,.0422,2.2167,.2906,.1101,2.1521,.5111,-.0546,2.1635,.3901,.1605,2.1228,.4873,.1158,2.0888,.5287,-.0248,2.1202,.5206,.019,2.0356
                    ,.2917,.0594,2.0689,.3587,-.0878,2.0434,.4583,-.0373,2.014,.4307,.0082,1.9988,.5206,.019,2.0356,.4778,.0422,2.2167,.5111,-.0546,2.1635,.3476,-.1489,.1191,.4444,.1158,.1463,.2691,-.1225,.1508,.2143,-.0257,.1815,.4294,-.0546,.2232,.4634,-.0988,.1681,.3476,-.1489,.1191,.3536,-.0878,.0446,.3005,-.072,.0475,.3204,.1537,.2481
                    ,.3746,.0422,.2538,.2415,.1101,.1073,.4294,-.0546,.2232,.3429,.1605,.1294,.4444,.1158,.1463,.4656,-.0248,.1937,.4992,.019,.1156,.3374,-.0374,.0041,.2825,.0594,.0348,.3536,-.0878,.0446,.455,-.0373,.0667,.4381,.0082,.0401,.4992,.019,.1156,.3746,.0422,.2538,.4294,-.0546,.2232,.3488,-.164,-.0653,.4097,.0688,-.1294
                    ,.3424,-.0557,.064,.4634,-.0811,-.0861,.4345,-.12,-.1352,.3488,-.164,-.0653,.2933,-.1102,-.1006,.2737,-.0964,-.0582,.4379,.1022,.0089,.4646,.0041,-.0309,.2959,.0638,.0123,.4634,-.0811,-.0861,.3548,.1082,-.0575,.4097,.0688,-.1294,.4553,-.0548,-.1264,.4084,-.0163,-.1847,.2564,.0192,-.0494,.2933,-.1102,-.1006,.3522,-.0659,-.1704
                    ,.3246,-.0258,-.1682,.4084,-.0163,-.1847,.4646,.0041,-.0309,2.6734,-.164,.7445,2.7404,.0688,.8023,2.6627,-.0964,.6698,2.599,-.1408,.7403,2.5439,-.0557,.7442,2.6996,-.0811,.858,2.7473,-.12,.8269,2.6734,-.164,.7445,2.7061,-.1102,.6874,2.6035,.1022,.837,2.6445,.0041,.8618,2.5934,.0638,.6953,2.6996,-.0811,.858,2.6659,.1082,.7509
                    ,2.7404,.0688,.8023,2.7395,-.0548,.848,2.7955,-.0163,.7984,2.7083,-.0659,.6491,2.6532,.0192,.6529,2.7061,-.1102,.6874,2.7785,-.0659,.743,2.7751,-.0258,.7154,2.7955,-.0163,.7984,2.6445,.0041,.8618,2.6996,-.0811,.858,2.4892,-.1489,.752,2.496,.1101,.6455,2.4998,.019,.9033,2.5584,-.072,.7016,2.4206,-.0257,.6217,2.3891,-.0546,.8387
                    ,2.4457,-.0988,.87,2.4892,-.1489,.752,2.5638,-.0878,.7545,2.359,.1537,.7309,2.3559,.0422,.7854,2.3891,-.0546,.8387,2.4787,.1605,.7478,2.4203,-.0248,.8734,2.5703,.0594,.683,2.5584,-.072,.7016,2.5638,-.0878,.7545,2.5465,-.0373,.8568,2.5723,.0082,.8387,2.496,.1101,.6455,2.4998,.019,.9033,2.4666,.1158,.85,2.3559,.0422,.7854
                    ,2.5949,-.0954,2.0855,2.1777,-.1053,2.3609,2.2861,.0804,2.3401,2.5605,-.0401,1.9006,2.3719,.054,1.757,2.2861,-.2778,2.1054,2.397,-.2607,2.2373,2.5949,-.0954,2.0855,2.5218,.0794,2.1836,2.516,.1464,2.0813,1.9048,-.0153,1.8628,2.0975,-.1838,1.9619,2.1362,.2716,1.8902,2.2861,-.2778,2.1054,1.9646,.1682,2.048,2.2278,-.2405,2.2065,2.4577,.2109,2.2001
                    ,2.2691,.305,2.0566,2.5218,.0794,2.1836,2.3502,-.024,2.3414,2.2861,.0804,2.3401,2.2861,.0804,2.3401,2.1777,-.1053,2.3609,1.989,-.0112,2.2174,2.0975,-.1838,1.9619,.3093,-.0123,-.1973,.057,.3035,.1808,.2121,-.2049,-.2217,-.0222,-.3401,-.1412,.2412,-.0075,.1944,.3258,.1354,.0987,.3093,-.0123,-.1973,.126,.1254,-.2539,.0515,.024,-.3046
                    ,-.2857,-.2176,.3088,.0069,-.1428,.2749,-.353,-.1511,-.0893,.2412,-.0075,.1944,-.3681,.0119,.1407,.1828,.1112,.2241,-.0268,.1666,-.2931,-.2611,.0313,-.2126,.126,.1254,-.2539,.1109,.2884,-.0239,-.0219,.3058,-.045,.057,.3035,.1808,.0069,-.1428,.2749,2.2955,-.05,-.4739,2.4587,.2311,-.0939,2.178,-.195,-.4138,2.0589,-.2749,-.2029
                    ,2.5064,-.0793,-.1845,2.5282,.0396,-.3085,2.2955,-.05,-.4739,2.1814,.1143,-.3995,2.0815,.0473,-.3766,2.0422,-.2861,.0983,2.2174,-.1687,.2417,2.3872,-.1591,.0264,1.938,-.0489,.0315,2.5064,-.0793,-.1845,2.1131,.0685,.1749,2.5176,.0326,-.1358,1.9556,.1062,-.117,2.1814,.1143,-.3995,2.3566,.2317,-.2561,2.2679,.2765,-.1845,2.4587,.2311,-.0939
                    ,2.3396,.1513,.117,2.3872,-.1591,.0264,2.5064,-.0793,-.1845,.1351,-.3291,2.1338,.3983,.0419,2.3414,.4005,.0182,2.1267,-.0433,-.2708,2.0771,-.1799,-.0569,2.0521,.1279,-.1207,2.4263,.2633,-.2184,2.3805,.1351,-.3291,2.1338,.2502,-.194,2.0153,.1557,-.1592,1.9455,-.0929,.3398,2.3152,-.0086,.0932,2.4013,-.0289,.2433,1.9642,.1279,-.1207,2.4263
                    ,.1127,.3547,2.1447,.2311,-.0547,2.427,.1431,.1312,1.8985,.2502,-.194,2.0153,.3918,-.0825,2.1958,.4005,.0182,2.1267,.4005,.0182,2.1267,.3983,.0419,2.3414,-.0086,.0932,2.4013,.1279,-.1207,2.4263,-.3505,-.3291,1.0122,-.327,.0419,1.3466,-.4287,-.2708,.842,-.5021,-.0569,.7242,-.5718,-.1207,1.2037,-.4467,-.2184,1.273,-.3505,-.3291,1.0122
                    ,-.1855,-.194,1.0176,-.1974,-.1592,.9007,-.6381,.3398,.9656,-.6452,.0932,1.0859,-.3354,.2433,.7767,-.5718,-.1207,1.2037,-.3737,.3547,1.0029,-.5028,-.0547,1.2805,-.0977,-.0827,.9775,-.1711,.1312,.8597,-.1855,-.194,1.0176,-.2237,-.0825,1.2437,-.1667,.0182,1.2037,-.327,.0419,1.3466,-.4004,.2559,1.2288,-.6452,.0932,1.0859,-.5718,-.1207,1.2037
                    ,3.0788,-.0725,1.0122,2.5094,.0702,1.2288,2.7722,-.1275,.7242,2.81,-.2141,1.2037,2.943,-.1275,1.273,3.0788,-.0725,1.0122,3.0046,.1275,1.0176,2.9678,.1275,.9007,2.3528,-.1275,.9656,2.5838,-.2141,1.0859,2.5423,.1275,.7767,2.81,-.2141,1.2037,2.4245,.1275,1.0029,2.5094,.0702,1.2288,2.7699,-.1275,1.2805,2.7355,.0702,1.3466,2.7016,.2466,.8597
                    ,3.0046,.1275,1.0176,2.8868,.1275,1.2437,2.81,.2141,1.2037,2.7355,.0702,1.3466,2.5838,-.2141,1.0859,1.491,-.0123,-.4277,1.0415,.3035,-.3599,1.4436,-.2049,-.5161,1.2264,-.3401,-.6352,1.1554,-.0075,-.2145,1.2831,.1354,-.2164,1.491,-.0123,-.4277,1.4094,.1254,-.6014,1.3969,.024,-.6906,.8965,-.3806,-.6708,.7162,-.2176,-.5272,.9381,-.1428,-.3336
                    ,.9654,-.1511,-.8449,1.1554,-.0075,-.2145,.7851,.0119,-.7013,1.0941,.1112,-.2376,1.3356,.1666,-.7408,1.1184,.0313,-.8599,1.4094,.1254,-.6014,1.2292,.2884,-.4578,1.1554,.3058,-.5702,1.0415,.3035,-.3599,.8242,.1682,-.4791,.9381,-.1428,-.3336,1.1554,-.0075,-.2145,1.3035,-.0725,2.8329,.8483,.0702,2.4279,1.0094,.2141,2.6829,1.351,.1275,2.6829
                    ,1.4172,-.1275,2.6829,1.4172,-.1275,2.4279,1.0094,-.2141,2.6829,1.0094,-.1275,2.8329,1.3035,-.0725,2.8329,1.2644,.1275,2.7695,1.2644,-.1275,2.1675,1.0094,-.1275,2.1675,1.0094,-.2141,2.4279,1.2644,.1275,2.2483,1.0094,-.2141,2.6829,1.0094,.1275,2.2483,.8483,.0702,2.4279,.9227,-.1275,2.6829,.8483,.0702,2.6829,1.2644,.2466,2.4279,1.351,.1275,2.6829
                    ,1.2644,.1275,2.7695,1.0094,.1275,2.7695,1.0094,.2141,2.6829,1.0094,.2141,2.6829,.8483,.0702,2.6829,1.0094,-.2141,2.4279,1.0094,-.2141,2.6829
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(2640);
                CONTIG(_i, 0, 0, 21);
                _i.set([8,22,1,23,24,25,26,27,28,13,29,30,31,32,33,34,2,35,16,36,16,37,17,38,27,39,40,41,20,14,42,43,8,44,22,45,8,46,47,2,1,48,49,50,51,52,53,32,3,10
                ,9,54,32,20,55,16], 22);
                CONTIG(_i, 78, 56, 77);
                _i.set([62,78,57], 100);
                CONTIG(_i, 103, 79, 88);
                _i.set([66,89,90,58,91,76,72,72,92,73,93,94,95,96,97,76,69,98,99,62,100,78,101,62,102,103,58,57,104,68,105,106,107,108,66,59,67,109,87,66,76,110,72], 113);
                CONTIG(_i, 156, 111, 132);
                _i.set([119,133,112,134,135,136,137,138,139,124,140,141,142,121,143,144,113,145,131,127,127,146,128,147,138,148,149,150,131,125,151,152,119,153,133,154,119,155,156,113,112,157,158,159,160,161,162,121,114,122
                ,121,163,164,131,165,127], 178);
                CONTIG(_i, 234, 166, 187);
                _i.set([174,188,167], 256);
                CONTIG(_i, 259, 189, 201);
                _i.set([168,202,186,182,182,203,183,204,205,206,207,186,208,179,209,210,173,188,174,211,174,212,213,168,167,214,195,178,215,216,217,199,169,176,199,218,219,186,220,182], 272);
                CONTIG(_i, 312, 221, 242);
                _i.set([227,243,222,244,245,246,247,248,249,250,251,252,225,253,254,255,223,256,237,257,237,258,238,259,260,261,262,263,241,234,249,264,227,265,243,266,227,267,268,223,222,269,233,270,271,272,273,253,274,231
                ,253,275,252,241,276,237], 334);
                CONTIG(_i, 390, 277, 298);
                _i.set([283,299,278,300,301,302,303,304,305,306,307,308,281,287,309,310,279,311,297,293,293,312,294,313,314,315,316,297,317,290,305,318,283,319,299,320,283,321,322,279,278,323,306,289,324,325,326,287,327,288
                ,328,308,287,293], 412);
                CONTIG(_i, 466, 329, 352);
                _i.set([337,353,332,354,355,356,357,358,359,360,361,362,335,363,364,365,333,366,351,347,347,367,348,368,369,370,371,351,372,344,359,373,339,353,337,374,337,375,376,333,332,377,360,343,378,379,380,363,381,341
                ,363,382,362,351,383,347], 490);
                CONTIG(_i, 546, 384, 405);
                _i.set([390,406,385], 568);
                CONTIG(_i, 571, 407, 419);
                _i.set([386,420,404,400,400,421,401,422,423,424,425,404,426,397,427,428,392,406,390,429,390,430,431,386,385,432,396,433,434,435,436,417,387,394,393,415,417,404,437,400], 584);
                CONTIG(_i, 624, 438, 459);
                _i.set([444,460,439], 646);
                CONTIG(_i, 649, 461, 473);
                _i.set([440,474,458,454,454,475,455,476,477,478,479,458,480,451,481,482,446,460,444,483,444,484,485,440,439,486,467,450,487,488,489,471,441,448,447,469,471,458,490,454], 662);
                CONTIG(_i, 702, 491, 512);
                _i.set([497,513,492], 724);
                CONTIG(_i, 727, 514, 526);
                _i.set([493,527,507,528,507,529,508,530,531,532,533,511,534,504,535,536,499,513,497,537,497,538,539,493,492,540,503,541,542,543,544,524,494,501,524,545,522,507], 740);
                CONTIG(_i, 778, 546, 569);
                _i.set([554,570,549,571,572,573,574,575,576,561,577,578,579,580,581,582,550,583,568,564,564,584,565,585,575,586,587,568,588,562,589,590,556,570,554,591,554,592,593,550,549,594,561,595,596,597,598,580,551,558
                ,580,599,578,568,600,564], 802);
                CONTIG(_i, 858, 601, 622);
                _i.set([609,623,602,624,625,626,627,628,629,614,630,631,605,632,633,634,603,635,617,636,617,637,618,638,628,639,640,621,641,615,629,642,608,623,609,643,609,644,645,603,602,646,647,648,649,650,651,632,652,611
                ,610,653,632,617], 880);
                CONTIG(_i, 934, 654, 677);
                _i.set([664,678,657], 958);
                CONTIG(_i, 961, 679, 688);
                _i.set([666,689,690,658,691,676,672,672,692,673,693,694,695,696,676,697,669,698,699,663,678,664,700,664,701,702,658,657,703,685,668,704,705,706,666,659,667,707,708,666,672], 971);
                CONTIG(_i, 1012, 709, 732);
                _i.set([719,733,712], 1036);
                CONTIG(_i, 1039, 734, 746);
                _i.set([713,747,731,727,727,748,728,749,750,751,752,731,753,724,754,755,718,733,719,756,719,757,758,713,712,759,740,723,760,761,762,744,714,721,744,763,764,727], 1052);
                CONTIG(_i, 1090, 765, 788);
                _i.set([775,789,768], 1114);
                CONTIG(_i, 1117, 790, 802);
                _i.set([769,803,787,783,783,804,784,805,806,807,808,809,787,780,810,811,775,812,789,813,775,814,815,769,768,816,779,817,818,819,820,800,770,777,776,821,800,787,822,783], 1130);
                CONTIG(_i, 1170, 823, 844);
                _i.set([831,845,824], 1192);
                CONTIG(_i, 1195, 846, 855);
                _i.set([833,856,857,825,858,843,839,839,859,840,860,861,862,863,843,864,836,865,866,830,845,831,867,831,868,869,825,824,870,835,871,872,873,874,833,826,834,833,875,876,843,877,839], 1205);
                CONTIG(_i, 1248, 878, 899);
                _i.set([886,900,879], 1270);
                CONTIG(_i, 1273, 901, 913);
                _i.set([880,914,898,894,894,915,895,916,917,918,919,898,920,891,921,922,886,923,900,924,886,925,926,880,879,927,907,890,928,929,930,911,881,888,887,931,911,898,932,894], 1286);
                CONTIG(_i, 1326, 933, 954);
                _i.set([939,955,934], 1348);
                CONTIG(_i, 1351, 956, 968);
                _i.set([935,969,949,970,949,971,950,972,973,974,975,953,976,946,977,978,941,955,939,979,939,980,981,935,934,982,945,983,984,985,986,966,936,943,942,964,966,949], 1364);
                CONTIG(_i, 1402, 987, 1010);
                _i.set([997,1011,990], 1426);
                CONTIG(_i, 1429, 1012, 1024);
                _i.set([991,1025,1009,1005,1005,1026,1006,1027,1028,1029,1030,1031,1009,1002,1032,1033,997,1034,1011,1035,997,1036,1037,991,990,1038,1018,1001,1039,1040,1041,1022,992,999,998,1042,1022,1009,1043,1005], 1442);
                CONTIG(_i, 1482, 1044, 1065);
                _i.set([1050,1066,1045,1067,1068,1069,1070,1071,1072,1057,1073,1074,1075,1054,1076,1077,1046,1078,1064,1060,1060,1079,1061,1080,1071,1081,1082,1083,1064,1058,1084,1085,1052,1066,1050,1086,1050,1087,1088,1046,1045,1089,1090,1091,1092,1093,1094,1054,1047,1055
                ,1054,1095,1074,1064,1096,1060,0,1097,1,3,31,4,6,1098,7,9,32,10,12,1099,13,1100,20,16,16,1101,1102,1103,1104,27,1105,1106,1107,14,13,1108,8,7,1109,1110,6,8,1111,33,2,1112,13,1113,1114,1115
                ,1116,32,31,3,9,1117,1118,20,1119,1120,56,1121,57,59,88,60,62,1122,63,65,1123,66,68,85,69,1124,1125,76,72,1126,1127,1128,1129,1130,1131,1132,1133,69,85,1134,62,64,1135,1136,1137,62,1138,1139,58,1140
                ,85,68,1141,1142,1143,66,88,59,1144,1145,87,76,1146,1147,111,1148,112,114,142,115,117,1149,118,120,1150,121,123,1151,124,1152,1153,131,127,1154,1155,1156,1157,138,1158,1159,1160,125,124,1161,119,118,1162,1163,117,119
                ,1164,143,113,1165,124,1166,1167,1168,1169,121,142,114,121,1170,1171,131,1172,1173,166,1174,167,169,198,170,172,1175,173,175,199,176,178,195,179,1176,1177,186,182,1178,1179,1180,1181,1182,1183,1184,186,179,195,1185,173,1186
                ,188,1187,172,174,1188,200,168,1189,1190,195,1191,1192,1193,199,198,169,199,175,1194,186,1195,1196,221,1197,222,224,1198,225,227,1199,228,230,253,231,233,250,234,1200,241,237,237,1201,1202,1203,1204,1205,1206,1207,1208,234
                ,250,249,227,229,1209,1210,1211,227,1212,1213,223,1214,250,233,1215,1216,1217,253,225,1218,253,230,1219,241,1220,1221,277,1222,278,280,1223,281,283,1224,284,286,1225,287,289,306,290,1226,1227,297,293,1228,1229,1230,1231,1232
                ,1233,1234,297,290,306,305,283,285,1235,1236,1237,283,1238,1239,279,1240,1241,306,1242,1243,1244,287,281,1245,1246,1247,308,293,297,1248,331,1249,332,334,1250,335,337,1251,338,340,363,341,343,360,344,1252,1253,351,347,1254
                ,1255,1256,1257,1258,1259,1260,351,344,360,359,339,1261,353,1262,1263,337,1264,1265,333,1266,1267,360,1268,1269,1270,363,335,1271,363,340,1272,351,1273,1274,384,1275,385,387,416,388,390,1276,391,393,417,394,396,413,397,1277
                ,1278,404,400,1279,1280,1281,1282,1283,1284,1285,404,397,413,1286,392,1287,406,1288,1289,390,1290,1291,386,1292,413,396,1293,1294,1295,417,416,387,393,1296,415,404,1297,1298,438,1299,439,441,470,442,444,1300,445,447,471,448
                ,450,467,451,1301,1302,458,454,1303,1304,1305,1306,1307,1308,1309,458,451,467,1310,446,1311,460,1312,1313,444,1314,1315,440,1316,1317,467,1318,1319,1320,471,470,441,447,1321,469,458,1322,1323,491,1324,492,494,523,495,497,1325
                ,498,500,524,501,503,520,504,1326,511,507,507,1327,1328,1329,1330,1331,1332,1333,511,504,520,1334,499,1335,513,1336,1337,497,1338,1339,493,1340,520,503,1341,1342,1343,524,523,494,524,500,1344,507,511,1345,548,1346,549,551
                ,579,552,554,1347,555,557,580,558,560,1348,561,1349,1350,568,564,1351,1352,1353,1354,575,1355,1356,568,562,561,1357,556,1358,570,1359,1360,554,1361,1362,550,1363,1364,561,1365,1366,1367,580,579,551,580,557,1368,568,1369,1370
                ,601,1371,602,604,1372,605,607,1373,608,610,632,611,613,1374,614,1375,621,617,617,1376,1377,1378,1379,628,1380,1381,621,615,614,629,608,1382,623,1383,607,609,1384,633,603,1385,614,1386,1387,1388,1389,632,605,1390,610,1391
                ,1392,617,621,1393,656,1394,657,659,688,660,662,1395,663,665,1396,666,668,685,669,1397,1398,676,672,1399,1400,1401,1402,1403,1404,1405,676,669,685,1406,663,1407,678,1408,662,664,1409,689,658,1410,1411,685,1412,1413,1414,666
                ,688,659,1415,1416,1417,672,676,1418,711,1419,712,714,743,715,717,1420,718,720,744,721,723,740,724,1421,1422,731,727,1423,1424,1425,1426,1427,1428,1429,731,724,740,1430,718,1431,733,1432,717,719,1433,745,713,1434,1435,740
                ,1436,1437,1438,744,743,714,744,720,1439,727,731,1440,767,1441,768,770,799,771,773,1442,774,776,800,777,779,796,780,1443,1444,787,783,1445,1446,1447,1448,1449,1450,1451,1452,780,796,1453,775,774,1454,1455,773,775,1456,801
                ,769,1457,796,779,1458,1459,1460,800,799,770,776,1461,1462,787,1463,1464,823,1465,824,826,855,827,829,1466,830,832,1467,833,835,852,836,1468,1469,843,839,1470,1471,1472,1473,1474,1475,1476,843,836,852,1477,830,1478,845,1479
                ,829,831,1480,856,825,1481,852,835,1482,1483,1484,833,855,826,833,1485,1486,843,1487,1488,878,1489,879,881,910,882,884,1490,885,887,911,888,890,907,891,1491,1492,898,894,1493,1494,1495,1496,1497,1498,1499,898,891,907,1500
                ,886,885,1501,1502,884,886,1503,912,880,1504,1505,907,1506,1507,1508,911,910,881,887,1509,1510,898,1511,1512,933,1513,934,936,965,937,939,1514,940,942,966,943,945,962,946,1515,953,949,949,1516,1517,1518,1519,1520,1521,1522
                ,953,946,962,1523,941,1524,955,1525,1526,939,1527,1528,935,1529,962,945,1530,1531,1532,966,965,936,942,1533,964,949,953,1534,989,1535,990,992,1021,993,995,1536,996,998,1022,999,1001,1018,1002,1537,1538,1009,1005,1539,1540,1541
                ,1542,1543,1544,1545,1546,1002,1018,1547,997,996,1548,1549,995,997,1550,1023,991,1551,1552,1018,1553,1554,1555,1022,1021,992,998,1556,1557,1009,1558,1559,1044,1560,1045,1047,1075,1048,1050,1561,1051,1053,1562,1054,1056,1563,1057,1564,1565,1064
                ,1060,1566,1567,1568,1569,1071,1570,1571,1572,1058,1057,1573,1052,1574,1066,1575,1576,1050,1577,1578,1046,1579,1057,1580,1581,1582,1583,1054,1075,1047,1054,1584,1585,1064], 1504);
                CONTIG(_i, 2638, 1586, 1587);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .172,-.69,.703,-.7484,-.6397,.1749,-.3723,-.4361,.8192,.8044,.5915,.0546,-.3195,.7503,-.5788,.4665,.3871,-.7953,-.646,.7285,.2277,-.9977,-.0299,-.0609,-.8631,.3957,-.3139,-.0966,.1332,.9864,.7338,.346,.5846,.5011,-.2033,.8412,.5276,-.7608,-.3777,.9936,-.0871,.0711,.7201,-.3296,-.6105,.5276,-.7608,-.3777,-.2264,-.6615,-.7149
                    ,.0273,-.9845,.1729,.7201,-.3296,-.6105,.4665,.3871,-.7953,-.1008,-.291,-.9514,-.3195,.7503,-.5788,-.6238,-.0161,-.7814,-.7254,-.3332,-.6023,-.9977,-.0299,-.0609,.172,-.69,.703,.5011,-.2033,.8412,.8027,-.5047,.3176,.8044,.5915,.0546,.7338,.346,.5846,-.646,.7285,.2277,.0481,.9689,.2427,.0779,.6405,.764,-.8334,.0754,.5475
                    ,-.0966,.1332,.9864,.7201,-.3296,-.6105,.5276,-.7608,-.3777,-.7484,-.6397,.1749,.0273,-.9845,.1729,.5276,-.7608,-.3777,.4665,.3871,-.7953,-.6238,-.0161,-.7814,.8044,.5915,.0546,.4665,.3871,-.7953,-.7254,-.3332,-.6023,.0481,.9689,.2427,-.3195,.7503,-.5788,-.9977,-.0299,-.0609,.7338,.346,.5846,.8027,-.5047,.3176,.5011,-.2033,.8412
                    ,.172,-.69,.703,-.0966,.1332,.9864,.5011,-.2033,.8412,-.646,.7285,.2277,-.7254,-.3332,-.6023,.7018,-.69,.1768,-.1955,-.6397,.7433,.5499,-.4361,.7123,.4246,.5915,-.6854,-.661,.7503,.0116,-.4847,.3871,-.7843,-.6812,.3957,.616,.0941,.0754,.9927,-.5205,-.0299,.8533,.9779,-.2033,-.0494,.7117,.6405,.2885,.86,.346,-.3752
                    ,.6562,-.5047,-.5609,-.2027,-.3296,-.9221,-.087,-.7608,-.6431,-.087,-.7608,-.6431,-.7378,-.6615,-.1343,.1656,-.9845,.0567,-.2027,-.3296,-.9221,-.4847,.3871,-.7843,-.888,-.291,-.3559,-.661,.7503,.0116,-.9824,-.0161,.1859,-.8717,-.3332,.3594,-.5205,-.0299,.8533,.7018,-.69,.1768,.9779,-.2033,-.0494,.6562,-.5047,-.5609,.4246,.5915,-.6854
                    ,.5277,-.0871,-.8449,.86,.346,-.3752,-.1009,.7285,.6775,.2371,.9689,.071,.0941,.0754,.9927,.8266,.1332,.5468,-.087,-.7608,-.6431,-.1955,-.6397,.7433,.1656,-.9845,.0567,.6562,-.5047,-.5609,-.087,-.7608,-.6431,-.4847,.3871,-.7843,-.9824,-.0161,.1859,.4246,.5915,-.6854,-.4847,.3871,-.7843,-.8717,-.3332,.3594,.2371,.9689,.071
                    ,-.661,.7503,.0116,-.5205,-.0299,.8533,.86,.346,-.3752,.9779,-.2033,-.0494,.7018,-.69,.1768,.8266,.1332,.5468,.9779,-.2033,-.0494,.8266,.1332,.5468,-.8717,-.3332,.3594,.0433,-.69,-.7225,.7667,-.6397,.054,.5977,-.4361,-.6727,-.7524,.5915,-.2898,.1342,.7503,.6473,-.6806,.3871,.622,.6845,.7285,-.0267,.9352,-.0299,.3529
                    ,.7318,.3957,.5549,-.2303,-.2033,-.9517,.1512,.6405,-.7529,-.5284,.346,-.7753,-.6157,-.7608,.205,-.9283,-.0871,-.3615,-.8683,-.3296,.3705,-.6157,-.7608,.205,.0052,-.6615,.7498,.0249,-.9845,-.1733,-.8683,-.3296,.3705,-.6806,.3871,.622,-.1847,-.291,.9387,.1342,.7503,.6473,.3652,-.0161,.9308,.5151,-.3332,.7897,.9352,-.0299,.3529
                    ,.0433,-.69,-.7225,-.2303,-.2033,-.9517,-.673,-.5047,-.5406,-.7524,.5915,-.2898,-.5284,.346,-.7753,.6845,.7285,-.0267,.0257,.9689,-.2461,.9579,.0754,-.2769,.3837,.1332,-.9138,-.6157,-.7608,.205,.7667,-.6397,.054,.0249,-.9845,-.1733,-.6157,-.7608,.205,-.6806,.3871,.622,.3652,-.0161,.9308,-.7524,.5915,-.2898,-.6806,.3871,.622
                    ,.5151,-.3332,.7897,.0257,.9689,-.2461,.1342,.7503,.6473,.9352,-.0299,.3529,-.5284,.346,-.7753,-.673,-.5047,-.5406,-.2303,-.2033,-.9517,.0433,-.69,-.7225,.3837,.1332,-.9138,-.2303,-.2033,-.9517,.9579,.0754,-.2769,.6845,.7285,-.0267,.5151,-.3332,.7897,.6588,-.69,-.2996,.3109,-.6397,.7029,.8741,-.4361,.2136,-.0957,.5915,-.8006
                    ,-.5094,.7503,.4214,-.8681,.3871,-.3106,.3438,.7285,.5925,.1256,-.0299,.9916,-.1481,.3957,.9063,.9871,.1332,-.0883,.4381,.346,-.8297,.7334,-.2033,-.6487,.163,-.5047,-.8477,-.7337,-.3296,-.5942,-.4692,-.7608,-.4483,-.4692,-.7608,-.4483,-.6603,-.6615,.3553,.1648,-.9845,-.059,-.7337,-.3296,-.5942,-.8681,.3871,-.3106,-.9161,-.291,.2758
                    ,-.5094,.7503,.4214,-.6518,-.0161,.7581,-.457,-.3332,.8247,.1256,-.0299,.9916,.6588,-.69,-.2996,.7334,-.2033,-.6487,.163,-.5047,-.8477,-.0957,.5915,-.8006,-.1147,-.0871,-.9896,.4381,.346,-.8297,.3438,.7285,.5925,.2296,.9689,-.0924,.7362,.6405,-.2185,.6928,.0754,.7172,.9871,.1332,-.0883,-.4692,-.7608,-.4483,.3109,-.6397,.7029
                    ,.1648,-.9845,-.059,.163,-.5047,-.8477,-.4692,-.7608,-.4483,-.5094,.7503,.4214,-.8681,.3871,-.3106,-.0957,.5915,-.8006,-.8681,.3871,-.3106,.2296,.9689,-.0924,-.5094,.7503,.4214,.1256,-.0299,.9916,.7334,-.2033,-.6487,.6588,-.69,-.2996,.9871,.1332,-.0883,.7334,-.2033,-.6487,.6928,.0754,.7172,.3438,.7285,.5925,-.457,-.3332,.8247
                    ,-.6496,-.69,-.319,.3459,-.6397,-.6863,-.3896,-.4361,-.8112,.3108,.3871,.8681,-.2171,.9689,-.1188,.6489,.7503,.1262,.7945,.3957,-.4607,.1146,.0754,-.9905,.6867,-.0299,-.7263,-.6947,.1332,-.7069,-.9192,.346,.1879,-.9667,-.2033,-.1552,-.7586,-.5047,.412,.0064,-.3296,.9441,-.0487,-.7608,.6471,-.0487,-.7608,.6471,.6937,-.6615,.2849
                    ,-.1502,-.9845,-.0899,.0064,-.3296,.9441,.3108,.3871,.8681,.7945,-.291,.533,.6489,.7503,.1262,.9996,-.0161,.0227,.9274,-.3332,-.1701,.6867,-.0299,-.7263,-.6496,-.69,-.319,-.9667,-.2033,-.1552,-.7586,-.5047,.412,-.5579,.5915,.582,-.692,-.0871,.7166,-.9192,.346,.1879,.2398,.7285,-.6417,-.6361,.6405,-.4303,.1146,.0754,-.9905
                    ,-.6947,.1332,-.7069,.0064,-.3296,.9441,-.0487,-.7608,.6471,.3459,-.6397,-.6863,-.1502,-.9845,-.0899,-.7586,-.5047,.412,-.0487,-.7608,.6471,.3108,.3871,.8681,.9996,-.0161,.0227,.3108,.3871,.8681,.9274,-.3332,-.1701,-.2171,.9689,-.1188,.6489,.7503,.1262,.6867,-.0299,-.7263,-.9192,.346,.1879,-.9667,-.2033,-.1552,-.6496,-.69,-.319
                    ,-.6947,.1332,-.7069,-.9667,-.2033,-.1552,-.5579,.5915,.582,.1146,.0754,-.9905,.9274,-.3332,-.1701,-.5859,-.69,.425,-.4448,-.6397,-.6268,-.8992,-.4361,-.0351,.9126,.3871,.1313,-.2065,.9689,.1363,.4151,.7503,-.5145,-.0356,.3957,-.9177,-.8219,.0754,-.5646,-.3207,-.0299,-.9467,-.5893,-.2033,.7819,-.6779,.6405,.3609,-.2638,.346,.9004
                    ,.0093,-.5047,.8632,.8374,-.3296,.436,.5492,-.7608,.3457,.5492,-.7608,.3457,.5763,-.6615,-.4798,-.1498,-.9845,.0907,.8374,-.3296,.436,.9126,.3871,.1313,.8427,-.291,-.4529,.4151,.7503,-.5145,.4876,-.0161,-.8729,.2835,-.3332,-.8992,-.3207,-.0299,-.9467,-.5859,-.69,.425,-.5893,-.2033,.7819,.0093,-.5047,.8632,.2534,.5915,.7654
                    ,.3097,-.0871,.9468,-.2638,.346,.9004,-.455,.7285,-.512,-.8219,.0754,-.5646,-.9497,.1332,.2833,.5492,-.7608,.3457,-.4448,-.6397,-.6268,-.1498,-.9845,.0907,.0093,-.5047,.8632,.5492,-.7608,.3457,.4151,.7503,-.5145,.9126,.3871,.1313,.9126,.3871,.1313,.2835,-.3332,-.8992,-.2065,.9689,.1363,.4151,.7503,-.5145,-.3207,-.0299,-.9467
                    ,-.5893,-.2033,.7819,-.5859,-.69,.425,-.9497,.1332,.2833,-.5893,-.2033,.7819,.2534,.5915,.7654,-.9497,.1332,.2833,.4876,-.0161,-.8729,.2835,-.3332,-.8992,-.7087,-.69,-.147,.164,-.6397,-.7509,-.5795,-.4361,-.6885,.5173,.3871,.7632,-.2398,.9689,-.0609,.6599,.7503,-.0395,.6546,.3957,-.6441,-.1358,.0754,-.9878,.484,-.0299,-.8745
                    ,-.8489,.1332,-.5115,-.8434,.346,.4111,-.9749,-.2033,.0906,-.632,-.5047,.588,.2414,-.3296,.9127,.1141,-.7608,.6388,.1141,-.7608,.6388,.7428,-.6615,.103,-.1679,-.9845,-.0497,.2414,-.3296,.9127,.5173,.3871,.7632,.9022,-.291,.3182,.6599,.7503,-.0395,.9737,-.0161,-.2271,.8557,-.3332,-.3958,.484,-.0299,-.8745,-.7087,-.69,-.147
                    ,-.9749,-.2033,.0906,-.632,-.5047,.588,-.3953,.5915,.7027,-.4916,-.0871,.8665,-.8434,.346,.4111,.0723,.7285,-.6812,-.7232,.6405,-.2582,-.1358,.0754,-.9878,-.8489,.1332,-.5115,.1141,-.7608,.6388,.164,-.6397,-.7509,-.1679,-.9845,-.0497,-.632,-.5047,.588,.1141,-.7608,.6388,.6599,.7503,-.0395,.5173,.3871,.7632,.5173,.3871,.7632
                    ,-.2398,.9689,-.0609,.6599,.7503,-.0395,.484,-.0299,-.8745,-.9749,-.2033,.0906,-.7087,-.69,-.147,-.8489,.1332,-.5115,-.9749,-.2033,.0906,-.3953,.5915,.7027,-.1358,.0754,-.9878,.8557,-.3332,-.3958,-.2015,-.69,-.6952,.7404,-.6397,-.2063,.3375,-.4361,-.8342,-.806,.5915,-.0207,.3436,.7503,.5648,-.4326,.3871,.8143,.8755,.3957,.2773
                    ,.8096,.0754,-.5821,.9994,-.0299,.0187,.055,.1332,-.9895,-.7578,.346,-.5531,-.5361,-.2033,-.8193,-.8154,-.5047,-.2835,-.6937,-.3296,.6403,-.5112,-.7608,.3996,-.5112,-.7608,.3996,.2564,-.6615,.7047,-.0346,-.9845,-.1716,-.6937,-.3296,.6403,-.4326,.3871,.8143,.1408,-.291,.9463,.3436,.7503,.5648,.6562,-.0161,.7544,.7501,-.3332,.5712
                    ,.9994,-.0299,.0187,-.2015,-.69,-.6952,-.5361,-.2033,-.8193,-.8154,-.5047,-.2835,-.806,.5915,-.0207,-.9958,-.0871,-.0292,-.7578,.346,-.5531,.6359,.7285,-.2547,-.0583,.9689,-.2405,-.11,.6405,-.76,.8096,.0754,-.5821,.055,.1332,-.9895,-.5112,-.7608,.3996,.7404,-.6397,-.2063,-.0346,-.9845,-.1716,-.8154,-.5047,-.2835,-.5112,-.7608,.3996
                    ,.3436,.7503,.5648,-.4326,.3871,.8143,-.806,.5915,-.0207,-.4326,.3871,.8143,-.0583,.9689,-.2405,.3436,.7503,.5648,.9994,-.0299,.0187,-.7578,.346,-.5531,-.5361,-.2033,-.8193,-.2015,-.69,-.6952,.055,.1332,-.9895,-.5361,-.2033,-.8193,.7501,-.3332,.5712,.1575,-.69,-.7064,.7484,-.6397,.175,.6969,-.4361,-.5693,-.6968,.5915,-.4056
                    ,.0298,.7503,.6605,-.7707,.3871,.5061,.6344,.3957,.664,.9897,.0754,-.1213,.8673,-.0299,.4968,.5239,.1332,-.8413,-.3986,.346,-.8493,-.0763,-.2033,-.9761,-.5787,-.5047,-.6406,-.9162,-.3296,.228,-.6404,-.7608,.1046,-.6404,-.7608,.1046,-.1139,-.6615,.7411,.0521,-.9845,-.1671,-.9162,-.3296,.228,-.7707,.3871,.5061,-.3314,-.291,.8975
                    ,.0298,.7503,.6605,.2128,-.0161,.977,.3832,-.3332,.8615,.8673,-.0299,.4968,.1575,-.69,-.7064,-.0763,-.2033,-.9761,-.5787,-.5047,-.6406,-.6968,.5915,-.4056,-.8591,-.0871,-.5043,-.3986,.346,-.8493,.68,.7285,.0823,.0645,.9689,-.2389,.2689,.6405,-.7194,.9897,.0754,-.1213,.5239,.1332,-.8413,-.6404,-.7608,.1046,.7484,-.6397,.175
                    ,.0521,-.9845,-.1671,-.5787,-.5047,-.6406,-.6404,-.7608,.1046,.0298,.7503,.6605,-.7707,.3871,.5061,-.6968,.5915,-.4056,-.7707,.3871,.5061,.0645,.9689,-.2389,.0298,.7503,.6605,.8673,-.0299,.4968,-.0763,-.2033,-.9761,.1575,-.69,-.7064,.5239,.1332,-.8413,-.0763,-.2033,-.9761,.3832,-.3332,.8615,-.5507,-.69,-.4696,.5048,-.6397,-.5796
                    ,-.1771,-.4361,-.8823,-.6844,.5915,.4262,.5976,.7503,.2826,.0867,.3871,.9179,.8836,.3957,-.2501,.3557,.0754,-.9315,.8448,-.0299,-.5342,-.4985,.1332,-.8566,-.9372,.346,-.0449,-.8984,-.2033,-.3892,-.8368,-.5047,.2118,-.227,-.3296,.9164,-.207,-.7608,.615,-.207,-.7608,.615,.6018,-.6615,.4474,-.1233,-.9845,-.1242,-.227,-.3296,.9164
                    ,.0867,.3871,.9179,.6382,-.291,.7127,.5976,.7503,.2826,.963,-.0161,.2689,.9407,-.3332,.0642,.8448,-.0299,-.5342,-.5507,-.69,-.4696,-.8984,-.2033,-.3892,-.8368,-.5047,.2118,-.6844,.5915,.4262,-.8476,-.0871,.5235,-.9372,.346,-.0449,.3908,.7285,-.5625,-.181,.9689,-.1687,-.51,.6405,-.5741,.3557,.0754,-.9315,-.4985,.1332,-.8566
                    ,-.227,-.3296,.9164,-.207,-.7608,.615,.5048,-.6397,-.5796,-.1233,-.9845,-.1242,-.8368,-.5047,.2118,-.207,-.7608,.615,.5976,.7503,.2826,.0867,.3871,.9179,-.6844,.5915,.4262,.0867,.3871,.9179,-.181,.9689,-.1687,.5976,.7503,.2826,.8448,-.0299,-.5342,-.9372,.346,-.0449,-.8984,-.2033,-.3892,-.5507,-.69,-.4696,-.4985,.1332,-.8566
                    ,-.8984,-.2033,-.3892,.3557,.0754,-.9315,.963,-.0161,.2689,.9407,-.3332,.0642,.4431,-.69,-.5723,.6028,-.6397,.4769,.8729,-.4361,-.2185,-.458,.5915,-.6636,-.2541,.7503,.6103,-.9128,.3871,.1299,.2915,.3957,.8709,.9473,.0754,.3114,.5734,-.0299,.8187,.8321,.1332,-.5383,.0007,.346,-.9382,.3464,-.2033,-.9158,-.6241,-.7608,-.1778
                    ,-.5629,-.0871,-.8219,-.9261,-.3296,-.1835,-.6241,-.7608,-.1778,-.4185,-.6615,.6222,.1183,-.9845,-.1291,-.9261,-.3296,-.1835,-.9128,.3871,.1299,-.6818,-.291,.6711,-.2541,.7503,.6103,-.2232,-.0161,.9746,-.0198,-.3332,.9427,.5734,-.0299,.8187,.4431,-.69,-.5723,.3464,-.2033,-.9158,-.251,-.5047,-.8259,-.458,.5915,-.6636,.0007,.346,-.9382
                    ,.5804,.7285,.3638,.16,.9689,-.1888,.5494,.6405,-.5365,.9473,.0754,.3114,.8321,.1332,-.5383,-.6241,-.7608,-.1778,.6028,-.6397,.4769,.1183,-.9845,-.1291,-.6241,-.7608,-.1778,-.2541,.7503,.6103,-.9128,.3871,.1299,-.458,.5915,-.6636,-.9128,.3871,.1299,.16,.9689,-.1888,-.2541,.7503,.6103,.5734,-.0299,.8187,.3464,-.2033,-.9158
                    ,-.251,-.5047,-.8259,.4431,-.69,-.5723,.8321,.1332,-.5383,.3464,-.2033,-.9158,.9473,.0754,.3114,-.0198,-.3332,.9427,.7131,-.69,.124,-.1395,-.6397,.7558,.6015,-.4361,.6693,-.5419,.3871,-.746,.2417,.9689,.0531,-.6583,.7503,.0609,-.0501,.7285,.6832,-.4554,-.0299,.8898,-.6333,.3957,.6651,.865,.1332,.4836,.8296,.346,-.4382
                    ,.9714,-.2033,-.1222,-.1347,-.7608,-.6348,.4632,-.0871,-.882,-.2709,-.3296,-.9044,-.1347,-.7608,-.6348,-.7457,-.6615,-.0788,.1694,-.9845,.0442,-.2709,-.3296,-.9044,-.5419,.3871,-.746,-.9121,-.291,-.2887,-.6583,.7503,.0609,-.9658,-.0161,.2586,-.8424,-.3332,.4234,-.4554,-.0299,.8898,.7131,-.69,.124,.9714,-.2033,-.1222,.6126,-.5047,-.6082
                    ,.3723,.5915,-.7152,.8296,.346,-.4382,-.0501,.7285,.6832,.7312,.6405,.2346,.1679,.0754,.9829,.865,.1332,.4836,-.2709,-.3296,-.9044,-.1347,-.7608,-.6348,-.1395,-.6397,.7558,.1694,-.9845,.0442,-.1347,-.7608,-.6348,-.6583,.7503,.0609,-.5419,.3871,-.746,-.5419,.3871,-.746,.2417,.9689,.0531,-.6583,.7503,.0609,-.4554,-.0299,.8898
                    ,.8296,.346,-.4382,.6126,-.5047,-.6082,.9714,-.2033,-.1222,.7131,-.69,.124,.865,.1332,.4836,.9714,-.2033,-.1222,.3723,.5915,-.7152,-.0501,.7285,.6832,-.9658,-.0161,.2586,-.8424,-.3332,.4234,.8232,.1877,.5358,.3485,-.7627,.5448,.4169,-.0819,.9052,-.2418,.8954,-.3739,-.9083,-.2205,-.3556,-.3338,.1473,-.9311,-.8563,-.1053,.5056
                    ,-.3424,-.8232,.4528,-.7302,-.6651,.1563,.5218,.7074,.4768,-.4162,.6796,.604,.0556,.9906,.1246,.809,.5755,-.1199,.4472,.144,-.8828,.8155,-.0713,-.5743,.8155,-.0713,-.5743,.3912,-.7815,-.486,.9424,-.2944,.1589,.4472,.144,-.8828,-.3338,.1473,-.9311,.0537,-.6448,-.7624,-.9083,-.2205,-.3556,-.3542,-.8639,-.3579,-.0675,-.9872,-.1445
                    ,-.3424,-.8232,.4528,.8232,.1877,.5358,.5218,.7074,.4768,.809,.5755,-.1199,-.2418,.8954,-.3739,.4499,.7776,-.4391,.0556,.9906,.1246,-.8563,-.1053,.5056,-.8239,.5432,.1617,-.267,-.3651,.8918,.0262,.4428,.8962,.8155,-.0713,-.5743,.3485,-.7627,.5448,.9424,-.2944,.1589,.809,.5755,-.1199,.8155,-.0713,-.5743,-.9083,-.2205,-.3556
                    ,-.3338,.1473,-.9311,-.2418,.8954,-.3739,-.3338,.1473,-.9311,-.8239,.5432,.1617,-.9083,-.2205,-.3556,-.3424,-.8232,.4528,.5218,.7074,.4768,.8232,.1877,.5358,.0262,.4428,.8962,.5218,.7074,.4768,.0262,.4428,.8962,-.8563,-.1053,.5056,-.3542,-.8639,-.3579,-.0675,-.9872,-.1445,.4642,.5286,-.7107,.8685,.4186,.2656,.4501,.8696,-.2029
                    ,-.8762,-.2344,-.421,-.4715,-.352,.8086,-.4483,-.8887,.0958,-.4119,.5145,.752,.4527,.3427,.8231,.0437,.085,.9954,-.1979,.9486,-.2467,-.6894,.2622,-.6753,-.1284,.5543,-.8223,.0793,-.0645,-.9948,.068,-.8681,-.4917,.5087,-.6062,-.6113,.5087,-.6062,-.6113,.7762,-.6052,.1764,.8536,.0831,-.5142,.068,-.8681,-.4917,-.4483,-.8887,.0958
                    ,.4186,-.8477,.3258,-.4715,-.352,.8086,.3701,-.4647,.8044,.6764,-.281,.6807,.4527,.3427,.8231,.4642,.5286,-.7107,-.1284,.5543,-.8223,.0793,-.0645,-.9948,-.8762,-.2344,-.421,-.3469,-.3392,-.8744,-.6894,.2622,-.6753,-.4119,.5145,.752,-.9212,.2654,.2846,-.7008,.7084,-.0837,.2158,.8395,.4987,-.1979,.9486,-.2467,.5087,-.6062,-.6113
                    ,.8685,.4186,.2656,.8536,.0831,-.5142,.0793,-.0645,-.9948,.5087,-.6062,-.6113,-.4715,-.352,.8086,-.4483,-.8887,.0958,-.8762,-.2344,-.421,-.4483,-.8887,.0958,-.9212,.2654,.2846,-.4715,-.352,.8086,.4527,.3427,.8231,-.1284,.5543,-.8223,.4642,.5286,-.7107,-.1979,.9486,-.2467,-.1284,.5543,-.8223,.2158,.8395,.4987,-.4119,.5145,.752
                    ,.3701,-.4647,.8044,.6764,-.281,.6807,-.063,.5003,-.8636,.8668,.1722,-.4678,.3731,.7646,-.5255,-.9354,.028,.3524,.1719,-.3413,.924,-.4525,-.7691,.4512,.3901,.4889,.7802,.9677,.1184,.2224,.7546,-.0609,.6533,-.0656,.9931,-.0971,-.8666,.499,.0066,-.5266,.6739,-.5182,-.6677,.0529,-.7425,-.5222,-.7873,-.3278,-.2498,-.618,-.7454
                    ,-.2498,-.618,-.7454,.4843,-.7829,-.3904,.2206,-.0437,-.9744,-.5222,-.7873,-.3278,-.4525,-.7691,.4512,.2927,-.9561,-.0132,.1719,-.3413,.924,.696,-.6396,.3262,.8572,-.5149,.0078,.9677,.1184,.2224,-.063,.5003,-.8636,-.5266,.6739,-.5182,-.6677,.0529,-.7425,-.9354,.028,.3524,-.9333,-.1321,-.334,-.8666,.499,.0066,.3901,.4889,.7802
                    ,-.3396,.426,.8385,-.3429,.853,.3934,.7073,.6946,.1314,-.0656,.9931,-.0971,-.2498,-.618,-.7454,.8668,.1722,-.4678,.2206,-.0437,-.9744,-.6677,.0529,-.7425,-.2498,-.618,-.7454,-.4525,-.7691,.4512,.696,-.6396,.3262,-.9354,.028,.3524,-.4525,-.7691,.4512,.8572,-.5149,.0078,-.3396,.426,.8385,.1719,-.3413,.924,.9677,.1184,.2224
                    ,-.8666,.499,.0066,-.5266,.6739,-.5182,-.063,.5003,-.8636,-.0656,.9931,-.0971,-.5266,.6739,-.5182,.3901,.4889,.7802,.8572,-.5149,.0078,.5716,-.69,-.444,.4652,-.6397,.6118,.8998,-.4361,.0055,-.2785,.5915,-.7566,-.398,.7503,.5279,-.9164,.3871,-.1012,.4716,.7285,.4968,.3517,-.0299,.9356,.0657,.3957,.916,.5633,-.2033,-.8008
                    ,.6656,.6405,-.383,.2341,.346,-.9086,-.0377,-.5047,-.8624,-.8513,-.3296,-.4082,-.5602,-.7608,-.3275,-.5602,-.7608,-.3275,-.5602,-.6615,.4985,.1467,-.9845,-.0956,-.8513,-.3296,-.4082,-.9164,.3871,-.1012,-.8274,-.291,.4804,-.398,.7503,.5279,-.4586,-.0161,.8885,-.2537,-.3332,.9081,.3517,-.0299,.9356,.5716,-.69,-.444,.5633,-.2033,-.8008
                    ,-.0377,-.5047,-.8624,-.2785,.5915,-.7566,-.3406,-.0871,-.9361,.2341,.346,-.9086,.4716,.7285,.4968,.2019,.9689,-.143,.84,.0754,.5373,.9399,.1332,-.3144,-.5602,-.7608,-.3275,.4652,-.6397,.6118,.1467,-.9845,-.0956,-.0377,-.5047,-.8624,-.5602,-.7608,-.3275,-.398,.7503,.5279,-.9164,.3871,-.1012,-.2785,.5915,-.7566,-.9164,.3871,-.1012
                    ,.2019,.9689,-.143,-.398,.7503,.5279,.3517,-.0299,.9356,.2341,.346,-.9086,.5633,-.2033,-.8008,.5716,-.69,-.444,.9399,.1332,-.3144,.5633,-.2033,-.8008,.84,.0754,.5373,.4716,.7285,.4968,-.2537,-.3332,.9081,.7131,-.69,.124,-.1395,-.6397,.7558,.6015,-.4361,.6693,.3723,.5915,-.7152,-.6583,.7503,.0609,-.5419,.3871,-.746
                    ,-.0501,.7285,.6832,-.4554,-.0299,.8898,-.6333,.3957,.6651,.865,.1332,.4836,.8296,.346,-.4382,.9714,-.2033,-.1222,.6126,-.5047,-.6082,-.2709,-.3296,-.9044,-.1347,-.7608,-.6348,-.1347,-.7608,-.6348,-.7457,-.6615,-.0788,.1694,-.9845,.0442,-.2709,-.3296,-.9044,-.5419,.3871,-.746,-.9121,-.291,-.2887,-.6583,.7503,.0609,-.9658,-.0161,.2586
                    ,-.8424,-.3332,.4234,-.4554,-.0299,.8898,.7131,-.69,.124,.9714,-.2033,-.1222,.6126,-.5047,-.6082,.3723,.5915,-.7152,.4632,-.0871,-.882,.8296,.346,-.4382,-.0501,.7285,.6832,.2417,.9689,.0531,.7313,.6405,.2346,.1679,.0754,.9829,.865,.1332,.4836,-.1347,-.7608,-.6348,-.1395,-.6397,.7558,.1694,-.9845,.0442,.6126,-.5047,-.6082
                    ,-.1347,-.7608,-.6348,-.6583,.7503,.0609,-.5419,.3871,-.746,.3723,.5915,-.7152,-.5419,.3871,-.746,-.8424,-.3332,.4234,.2417,.9689,.0531,-.6583,.7503,.0609,-.4554,-.0299,.8898,.9714,-.2033,-.1222,.7131,-.69,.124,.865,.1332,.4836,.9714,-.2033,-.1222,-.0501,.7285,.6832,-.8424,-.3332,.4234,.884,.4506,.124,.5598,-.3395,.7558
                    ,.6077,.4275,.6693,-.4388,.544,-.7152,-.9232,-.3793,.0609,-.5419,-.3869,-.746,-.5797,-.4707,.6651,-.0169,.1832,.9829,-.1194,-.4404,.8898,.1546,.8615,.4836,-.0581,.8969,-.4382,.5074,.853,-.1222,.6762,.4157,-.6082,.2239,-.3632,-.9044,.676,-.3743,-.6348,.676,-.3743,-.6348,.3838,-.92,-.0788,.9862,-.1592,.0442,.2239,-.3632,-.9044
                    ,-.5419,-.3869,-.746,-.0206,-.9572,-.2887,-.9232,-.3793,.0609,-.2981,-.9188,.2586,.0418,-.905,.4234,-.1194,-.4404,.8898,.884,.4506,.124,.5074,.853,-.1222,.6762,.4157,-.6082,-.4388,.544,-.7152,.2327,.4099,-.882,-.0581,.8969,-.4382,-.7054,.1889,.6832,-.838,.543,.0531,-.3686,.8995,.2346,-.0169,.1832,.9829,.1546,.8615,.4836
                    ,.2239,-.3632,-.9044,.676,-.3743,-.6348,.5598,-.3395,.7558,.9862,-.1592,.0442,.6762,.4157,-.6082,.676,-.3743,-.6348,-.9232,-.3793,.0609,-.5419,-.3869,-.746,-.4388,.544,-.7152,-.5419,-.3869,-.746,-.838,.543,.0531,-.9232,-.3793,.0609,-.1194,-.4404,.8898,-.0581,.8969,-.4382,.5074,.853,-.1222,.884,.4506,.124,.1546,.8615,.4836
                    ,.5074,.853,-.1222,-.2981,-.9188,.2586,.0418,-.905,.4234,.8381,.5286,-.1349,.388,.4185,.8211,.453,.8696,.1963,-.2782,-.2344,-.9315,-.9153,-.352,.1954,-.3726,-.8887,-.2671,-.8335,.5145,.2014,-.3042,.3427,.8888,-.7069,.085,.7022,.0492,.9486,-.3124,.0355,.2622,-.9644,.5218,.5543,-.6484,.7891,-.0645,-.6108,.4094,-.8681,-.2806
                    ,.7945,-.6062,-.0351,.7945,-.6062,-.0351,.3918,-.6052,.6929,.9548,.0831,.2853,.4094,-.8681,-.2806,-.3726,-.8887,-.2671,.0407,-.8477,.5288,-.9153,-.352,.1954,-.3459,-.4647,.8151,-.0483,-.281,.9585,-.3042,.3427,.8888,.8381,.5286,-.1349,.5218,.5543,-.6484,.7891,-.0645,-.6108,-.2782,-.2344,-.9315,.4133,-.3392,-.845,.0355,.2622,-.9644
                    ,-.8335,.5145,.2014,-.8304,.2654,-.4898,-.4097,.7084,-.5747,-.2236,.8395,.4952,.0492,.9486,-.3124,.7945,-.6062,-.0351,.388,.4185,.8211,.9548,.0831,.2853,.7891,-.0645,-.6108,.7945,-.6062,-.0351,-.3726,-.8887,-.2671,-.3459,-.4647,.8151,-.2782,-.2344,-.9315,-.3726,-.8887,-.2671,-.0483,-.281,.9585,-.8304,.2654,-.4898,-.9153,-.352,.1954
                    ,-.3042,.3427,.8888,.5218,.5543,-.6484,.8381,.5286,-.1349,.0492,.9486,-.3124,.5218,.5543,-.6484,-.8335,.5145,.2014,-.0483,-.281,.9585,.2985,.4506,.8413,-.4117,-.3395,.8457,-.3128,.4275,.8482,.4315,.544,-.7196,-.4806,-.3793,-.7907,.4112,-.3869,-.8253,-.8577,-.4707,-.2069,-.8795,.1832,.4392,-.8443,-.4404,.3052,.3428,.853,.3935
                    ,-.3784,.8995,-.2185,.3618,.8969,-.254,.8753,-.3743,.3062,.8897,.4099,-.2011,.9055,-.3632,-.2193,.8753,-.3743,.3062,.2473,-.92,.304,.4165,-.1592,.8951,.9055,-.3632,-.2193,.4112,-.3869,-.8253,.2465,-.9572,-.1516,-.4806,-.3793,-.7907,-.3671,-.9188,-.1448,-.3562,-.905,.2327,-.8443,-.4404,.3052,.2985,.4506,.8413,.3428,.853,.3935
                    ,.8518,.4157,.3186,.4315,.544,-.7196,.3618,.8969,-.254,-.9318,.1889,-.3099,-.4343,.543,-.7187,-.8795,.1832,.4392,-.3575,.8615,.3606,.8753,-.3743,.3062,-.4117,-.3395,.8457,.4165,-.1592,.8951,.8753,-.3743,.3062,.4112,-.3869,-.8253,-.3671,-.9188,-.1448,.4315,.544,-.7196,.4112,-.3869,-.8253,-.4343,.543,-.7187,-.4806,-.3793,-.7907
                    ,-.8443,-.4404,.3052,.3618,.8969,-.254,.8518,.4157,.3186,.3428,.853,.3935,.2985,.4506,.8413,-.3575,.8615,.3606,.3428,.853,.3935,-.8795,.1832,.4392,-.3562,-.905,.2327,.0273,-.9845,.1729,-.8334,.0754,.5475,.8027,-.5047,.3176,.7201,-.3296,-.6105,-.7254,-.3332,-.6023,-.7484,-.6397,.1749,.0273,-.9845,.1729,.172,-.69,.703
                    ,.4665,.3871,-.7953,-.3195,.7503,-.5788,-.6238,-.0161,-.7814,.8044,.5915,.0546,-.7254,-.3332,-.6023,.0481,.9689,.2427,-.9977,-.0299,-.0609,.7338,.346,.5846,.8027,-.5047,.3176,.172,-.69,.703,-.3723,-.4361,.8192,-.0966,.1332,.9864,-.8334,.0754,.5475,-.646,.7285,.2277,-.6238,-.0161,-.7814,-.7254,-.3332,-.6023,.1656,-.9845,.0567
                    ,-.1009,.7285,.6775,.8266,.1332,.5468,-.087,-.7608,-.6431,-.2027,-.3296,-.9221,-.8717,-.3332,.3594,-.1955,-.6397,.7433,.1656,-.9845,.0567,.7018,-.69,.1768,.6562,-.5047,-.5609,-.4847,.3871,-.7843,-.661,.7503,.0116,-.9824,-.0161,.1859,.4246,.5915,-.6854,-.8717,-.3332,.3594,.2371,.9689,.071,-.1009,.7285,.6775,-.5205,-.0299,.8533
                    ,.0941,.0754,.9927,.86,.346,-.3752,.7018,-.69,.1768,.5499,-.4361,.7123,.8266,.1332,.5468,.8266,.1332,.5468,.0941,.0754,.9927,-.9824,-.0161,.1859,-.8717,-.3332,.3594,.0249,-.9845,-.1733,.9579,.0754,-.2769,.3837,.1332,-.9138,-.673,-.5047,-.5406,-.6157,-.7608,.205,-.8683,-.3296,.3705,.5151,-.3332,.7897,.7667,-.6397,.054
                    ,.0249,-.9845,-.1733,.0433,-.69,-.7225,-.6806,.3871,.622,.1342,.7503,.6473,.3652,-.0161,.9308,-.7524,.5915,-.2898,.5151,-.3332,.7897,.0257,.9689,-.2461,.9352,-.0299,.3529,-.5284,.346,-.7753,-.673,-.5047,-.5406,.0433,-.69,-.7225,.5977,-.4361,-.6727,.3837,.1332,-.9138,.3837,.1332,-.9138,.9579,.0754,-.2769,.3652,-.0161,.9308
                    ,.5151,-.3332,.7897,.1648,-.9845,-.059,.6928,.0754,.7172,-.4692,-.7608,-.4483,-.7337,-.3296,-.5942,-.457,-.3332,.8247,.3109,-.6397,.7029,.1648,-.9845,-.059,.6588,-.69,-.2996,.163,-.5047,-.8477,-.5094,.7503,.4214,-.6518,-.0161,.7581,-.0957,.5915,-.8006,-.457,-.3332,.8247,.2296,.9689,-.0924,.1256,-.0299,.9916,.7334,-.2033,-.6487
                    ,.4381,.346,-.8297,.6588,-.69,-.2996,.8741,-.4361,.2136,.9871,.1332,-.0883,.6928,.0754,.7172,-.6518,-.0161,.7581,-.457,-.3332,.8247,-.1502,-.9845,-.0899,-.5579,.5915,.582,.2398,.7285,-.6417,.0064,-.3296,.9441,.9274,-.3332,-.1701,.3459,-.6397,-.6863,-.1502,-.9845,-.0899,-.6496,-.69,-.319,-.7586,-.5047,.412,.3108,.3871,.8681
                    ,.6489,.7503,.1262,.9996,-.0161,.0227,.9274,-.3332,-.1701,-.2171,.9689,-.1188,.2398,.7285,-.6417,.6867,-.0299,-.7263,.1146,.0754,-.9905,-.9192,.346,.1879,-.6496,-.69,-.319,-.3896,-.4361,-.8112,-.6947,.1332,-.7069,-.5579,.5915,.582,.1146,.0754,-.9905,.9996,-.0161,.0227,.9274,-.3332,-.1701,-.1498,-.9845,.0907,.2534,.5915,.7654
                    ,-.455,.7285,-.512,-.9497,.1332,.2833,.5492,-.7608,.3457,.8374,-.3296,.436,.2835,-.3332,-.8992,-.4448,-.6397,-.6268,-.1498,-.9845,.0907,-.5859,-.69,.425,.0093,-.5047,.8632,.4151,.7503,-.5145,.4876,-.0161,-.8729,.2835,-.3332,-.8992,-.2065,.9689,.1363,-.455,.7285,-.512,-.3207,-.0299,-.9467,-.8219,.0754,-.5646,-.5893,-.2033,.7819
                    ,-.2638,.346,.9004,-.5859,-.69,.425,-.8992,-.4361,-.0351,-.9497,.1332,.2833,.2534,.5915,.7654,-.9497,.1332,.2833,-.8219,.0754,-.5646,.4876,-.0161,-.8729,-.1679,-.9845,-.0497,-.3953,.5915,.7027,.0723,.7285,-.6812,.1141,-.7608,.6388,.2414,-.3296,.9127,.8557,-.3332,-.3958,.164,-.6397,-.7509,-.1679,-.9845,-.0497,-.7087,-.69,-.147
                    ,-.632,-.5047,.588,.6599,.7503,-.0395,.9737,-.0161,-.2271,.8557,-.3332,-.3958,-.2398,.9689,-.0609,.0723,.7285,-.6812,.484,-.0299,-.8745,-.1358,.0754,-.9878,-.9749,-.2033,.0906,-.8434,.346,.4111,-.7087,-.69,-.147,-.5795,-.4361,-.6885,-.8489,.1332,-.5115,-.3953,.5915,.7027,-.1358,.0754,-.9878,.9737,-.0161,-.2271,.8557,-.3332,-.3958
                    ,-.0346,-.9845,-.1716,.6359,.7285,-.2547,-.5112,-.7608,.3996,-.6937,-.3296,.6403,.7501,-.3332,.5712,.7404,-.6397,-.2063,-.0346,-.9845,-.1716,-.2015,-.69,-.6952,-.8154,-.5047,-.2835,.3436,.7503,.5648,.6562,-.0161,.7544,-.806,.5915,-.0207,.7501,-.3332,.5712,-.0583,.9689,-.2405,.6359,.7285,-.2547,.9994,-.0299,.0187,.8096,.0754,-.5821
                    ,-.7578,.346,-.5531,-.2015,-.69,-.6952,.3375,-.4361,-.8342,.055,.1332,-.9895,.8096,.0754,-.5821,.6562,-.0161,.7544,.7501,-.3332,.5712,.0521,-.9845,-.1671,.68,.7285,.0823,-.6404,-.7608,.1046,-.9162,-.3296,.228,.3832,-.3332,.8615,.7484,-.6397,.175,.0521,-.9845,-.1671,.1575,-.69,-.7064,-.5787,-.5047,-.6406,.0298,.7503,.6605
                    ,.2128,-.0161,.977,-.6968,.5915,-.4056,.3832,-.3332,.8615,.0645,.9689,-.2389,.68,.7285,.0823,.8673,-.0299,.4968,.9897,.0754,-.1213,-.0763,-.2033,-.9761,-.3986,.346,-.8493,.1575,-.69,-.7064,.6969,-.4361,-.5693,.5239,.1332,-.8413,.9897,.0754,-.1213,.2128,-.0161,.977,.3832,-.3332,.8615,-.1233,-.9845,-.1242,.3908,.7285,-.5625
                    ,-.227,-.3296,.9164,.9407,-.3332,.0642,.5048,-.6397,-.5796,-.1233,-.9845,-.1242,-.5507,-.69,-.4696,-.8368,-.5047,.2118,.5976,.7503,.2826,.963,-.0161,.2689,-.6844,.5915,.4262,.9407,-.3332,.0642,-.181,.9689,-.1687,.3908,.7285,-.5625,.8448,-.0299,-.5342,.3557,.0754,-.9315,-.9372,.346,-.0449,-.5507,-.69,-.4696,-.1771,-.4361,-.8823
                    ,-.4985,.1332,-.8566,.3557,.0754,-.9315,.963,-.0161,.2689,.1183,-.9845,-.1291,.5804,.7285,.3638,-.251,-.5047,-.8259,-.6241,-.7608,-.1778,-.9261,-.3296,-.1835,-.0198,-.3332,.9427,.6028,-.6397,.4769,.1183,-.9845,-.1291,.4431,-.69,-.5723,-.2541,.7503,.6103,-.2232,-.0161,.9746,-.458,.5915,-.6636,-.0198,-.3332,.9427,.16,.9689,-.1888
                    ,.5804,.7285,.3638,.5734,-.0299,.8187,.9473,.0754,.3114,.3464,-.2033,-.9158,.0007,.346,-.9382,.4431,-.69,-.5723,.8729,-.4361,-.2185,.8321,.1332,-.5383,.9473,.0754,.3114,-.2232,-.0161,.9746,-.0198,-.3332,.9427,.1694,-.9845,.0442,.3723,.5915,-.7152,.1679,.0754,.9829,.6126,-.5047,-.6082,-.2709,-.3296,-.9044,-.8424,-.3332,.4234
                    ,-.1395,-.6397,.7558,.1694,-.9845,.0442,.7131,-.69,.124,-.6583,.7503,.0609,-.9658,-.0161,.2586,-.8424,-.3332,.4234,.2417,.9689,.0531,-.4554,-.0299,.8898,.8296,.346,-.4382,.6126,-.5047,-.6082,.7131,-.69,.124,.6015,-.4361,.6693,.865,.1332,.4836,.3723,.5915,-.7152,.1679,.0754,.9829,-.0501,.7285,.6832,-.9658,-.0161,.2586
                    ,.9424,-.2944,.1589,-.267,-.3651,.8918,.0262,.4428,.8962,.8155,-.0713,-.5743,.4472,.144,-.8828,-.0675,-.9872,-.1445,.3485,-.7627,.5448,.9424,-.2944,.1589,.8232,.1877,.5358,.809,.5755,-.1199,-.9083,-.2205,-.3556,-.3542,-.8639,-.3579,-.2418,.8954,-.3739,-.0675,-.9872,-.1445,-.8239,.5432,.1617,-.3424,-.8232,.4528,.5218,.7074,.4768
                    ,.0556,.9906,.1246,.8232,.1877,.5358,.4169,-.0819,.9052,.0262,.4428,.8962,.0262,.4428,.8962,-.267,-.3651,.8918,-.8563,-.1053,.5056,-.3542,-.8639,-.3579,.8536,.0831,-.5142,.2158,.8395,.4987,.5087,-.6062,-.6113,.068,-.8681,-.4917,.6764,-.281,.6807,.8685,.4186,.2656,.8536,.0831,-.5142,.4642,.5286,-.7107,.0793,-.0645,-.9948
                    ,-.4715,-.352,.8086,.3701,-.4647,.8044,-.8762,-.2344,-.421,.6764,-.281,.6807,-.9212,.2654,.2846,.4527,.3427,.8231,-.1284,.5543,-.8223,-.6894,.2622,-.6753,.4642,.5286,-.7107,.4501,.8696,-.2029,-.1979,.9486,-.2467,.2158,.8395,.4987,.3701,-.4647,.8044,.2206,-.0437,-.9744,.7073,.6946,.1314,-.2498,-.618,-.7454,-.5222,-.7873,-.3278
                    ,.8572,-.5149,.0078,.8668,.1722,-.4678,.2206,-.0437,-.9744,-.063,.5003,-.8636,-.6677,.0529,-.7425,-.4525,-.7691,.4512,.1719,-.3413,.924,.696,-.6396,.3262,-.9354,.028,.3524,.8572,-.5149,.0078,-.3396,.426,.8385,.9677,.1184,.2224,-.8666,.499,.0066,-.063,.5003,-.8636,.3731,.7646,-.5255,-.0656,.9931,-.0971,.7073,.6946,.1314
                    ,.3901,.4889,.7802,.696,-.6396,.3262,.8572,-.5149,.0078,.1467,-.9845,-.0956,.84,.0754,.5373,.9399,.1332,-.3144,-.5602,-.7608,-.3275,-.8513,-.3296,-.4082,-.2537,-.3332,.9081,.4652,-.6397,.6118,.1467,-.9845,-.0956,.5716,-.69,-.444,-.0377,-.5047,-.8624,-.398,.7503,.5279,-.4586,-.0161,.8885,-.2785,.5915,-.7566,-.2537,-.3332,.9081
                    ,.2019,.9689,-.143,.3517,-.0299,.9356,.2341,.346,-.9086,.5716,-.69,-.444,.8998,-.4361,.0055,.9399,.1332,-.3144,.9399,.1332,-.3144,.84,.0754,.5373,-.4586,-.0161,.8885,-.2537,-.3332,.9081,.1694,-.9845,.0442,.1679,.0754,.9829,-.1347,-.7608,-.6348,-.2709,-.3296,-.9044,-.8424,-.3332,.4234,-.1395,-.6397,.7558,.1694,-.9845,.0442
                    ,.7131,-.69,.124,.6126,-.5047,-.6082,-.6583,.7503,.0609,-.9658,-.0161,.2586,.3723,.5915,-.7152,-.8424,-.3332,.4234,.2417,.9689,.0531,-.4554,-.0299,.8898,.9714,-.2033,-.1222,.8296,.346,-.4382,.7131,-.69,.124,.6015,-.4361,.6693,.865,.1332,.4836,.1679,.0754,.9829,-.0501,.7285,.6832,-.9658,-.0161,.2586,-.8424,-.3332,.4234
                    ,.9862,-.1592,.0442,-.7054,.1889,.6832,.2239,-.3632,-.9044,.0418,-.905,.4234,.5598,-.3395,.7558,.9862,-.1592,.0442,.884,.4506,.124,.6762,.4157,-.6082,-.9232,-.3793,.0609,-.2981,-.9188,.2586,-.4388,.544,-.7152,.0418,-.905,.4234,-.838,.543,.0531,-.7054,.1889,.6832,-.1194,-.4404,.8898,-.0169,.1832,.9829,-.0581,.8969,-.4382
                    ,.884,.4506,.124,.6077,.4275,.6693,.1546,.8615,.4836,-.0169,.1832,.9829,-.2981,-.9188,.2586,.9548,.0831,.2853,-.2236,.8395,.4952,.7945,-.6062,-.0351,.4094,-.8681,-.2806,-.0483,-.281,.9585,.388,.4185,.8211,.9548,.0831,.2853,.8381,.5286,-.1349,.7891,-.0645,-.6108,-.3726,-.8887,-.2671,-.9153,-.352,.1954,-.3459,-.4647,.8151
                    ,-.2782,-.2344,-.9315,-.0483,-.281,.9585,-.8304,.2654,-.4898,-.3042,.3427,.8888,.5218,.5543,-.6484,.0355,.2622,-.9644,.8381,.5286,-.1349,.453,.8696,.1963,.0492,.9486,-.3124,-.2236,.8395,.4952,-.8335,.5145,.2014,-.3459,-.4647,.8151,-.0483,-.281,.9585,.4165,-.1592,.8951,-.9318,.1889,-.3099,-.3575,.8615,.3606,.8518,.4157,.3186
                    ,.8753,-.3743,.3062,.9055,-.3632,-.2193,-.3562,-.905,.2327,-.4117,-.3395,.8457,.4165,-.1592,.8951,.2985,.4506,.8413,.4112,-.3869,-.8253,-.4806,-.3793,-.7907,-.3671,-.9188,-.1448,.4315,.544,-.7196,-.3562,-.905,.2327,-.4343,.543,-.7187,-.9318,.1889,-.3099,-.8443,-.4404,.3052,-.8795,.1832,.4392,.3618,.8969,-.254,.8518,.4157,.3186
                    ,.2985,.4506,.8413,-.3128,.4275,.8482,-.3575,.8615,.3606,-.3575,.8615,.3606,-.8795,.1832,.4392,-.3671,-.9188,-.1448,-.3562,-.905,.2327
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.4918,.4935,.681,.2981,.681,.495,.6609,.9634,.4681,.775,.6609,.7683,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647
                    ,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.326,.3256,.1266,.0296,.0205,.8922,.1226,.7853,.0205,.2147,.5339,.0189,.3232,.4454,.6189,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.4681,.9701
                    ,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716,.681,.495,.4918,.2965,.681,.2981,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326
                    ,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.2147,.5339,.0189,.3232,.4454,.6189,.6208,.5361
                    ,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.4918,.4935,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.681,.495,.4918,.2965,.681,.2981,.6609,.9634,.4681,.775
                    ,.6609,.7683,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.3635,.7661,.3635,.2704,.4856,.1401,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7853,.0205,.2147,.5339
                    ,.0189,.3232,.4454,.6189,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.4681,.9701,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954
                    ,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965
                    ,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6542,.0205
                    ,.4856,.1401,.4674,.0256,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189
                    ,.4681,.775,.3635,.7661,.3635,.2704,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.326,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.2147,.5339,.0189,.3232,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.6725,.135
                    ,.3635,.4673,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6542,.0205,.4856,.1401,.4674,.0256,.0892,.7954,.2561,.9795,.1059,.9716,.681,.495,.4918,.2965,.681,.2981,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771
                    ,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651
                    ,.8153,.4238,.7188,.3345,.6725,.135,.4918,.4935,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6542,.0205,.4856,.1401,.4674,.0256,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326
                    ,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.6208,.5361,.2561,.6107
                    ,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.6725,.135,.3635,.4673,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266
                    ,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205
                    ,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495
                    ,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266
                    ,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716
                    ,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965
                    ,.7217,.6024,.8429,.5361,.3256,.326,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182
                    ,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495,.6609,.9634,.4681,.775,.6609,.7683,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345
                    ,.7272,.2181,.4454,.6189,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.4681,.9701,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673
                    ,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6542,.0205,.4856,.1401,.4674,.0256,.2395,.8033,.1059,.9716,.0892,.7954,.4918,.4935,.681,.2981,.681,.495,.6609,.9634,.4681,.775,.6609,.7683,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489
                    ,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.3635,.7661,.3635,.2704,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.326,.3256,.1266,.0296,.0205,.8922,.1226,.7853,.0205,.0296,.5409,.2147,.5339,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.4681,.9701,.3635,.9612,.8061,.2651
                    ,.8153,.4238,.7188,.3345,.6725,.135,.3635,.2704,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.681,.495,.4918,.2965,.681,.2981,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326
                    ,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361
                    ,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.4918,.4935,.3635,.2704,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683
                    ,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226
                    ,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673,.3635,.2704,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716
                    ,.0892,.7954,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401
                    ,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.2147,.5339,.0189,.3232,.4454,.6189,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182
                    ,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.681,.495,.4918,.2965,.681,.2981,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345
                    ,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345
                    ,.3635,.4673,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582
                    ,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.0356,.9472,.2561,.6107
                    ,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.0892,.7954,.2561,.9795,.1059,.9716,.4918,.4935,.681,.2981,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167
                    ,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361,.3256,.326,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205
                    ,.0296,.5409,.2147,.5339,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.0189,.3232,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205,.2395,.8033,.1059,.9716,.0892,.7954,.4918,.4935,.681,.2981
                    ,.681,.495,.4681,.9701,.6609,.7683,.6609,.9634,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.4681,.775,.3635,.7661,.3635,.2704,.4856,.1401,.4918,.2965,.7217,.6024,.8429,.5361
                    ,.3256,.1266,.0296,.0205,.8922,.1226,.7272,.2181,.7853,.0205,.2147,.5339,.0189,.3232,.4454,.6189,.6208,.5361,.0356,.9472,.2561,.6107,.065,.582,.6987,.7647,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.2704,.0189,.1238,.9811,.6797,.8107,.8182,.8574,.6182,.6725,.135,.4674,.0256,.6542,.0205
                    ,.0892,.7954,.2561,.9795,.1059,.9716,.681,.495,.4918,.2965,.681,.2981,.6609,.9634,.4681,.775,.6609,.7683,.3256,.1266,.204,.1167,.2499,.0213,.3256,.326,.2147,.5339,.204,.3162,.065,.582,.0189,.771,.7149,.8489,.6987,.7647,.8061,.2651,.7188,.3345,.7272,.2181,.4454,.6189,.3635,.7661,.3635,.2704
                    ,.4856,.1401,.7217,.6024,.8429,.5361,.3256,.1266,.0296,.0205,.8922,.1226,.7853,.0205,.2147,.5339,.0189,.3232,.4454,.6189,.6208,.5361,.2561,.6107,.065,.582,.6987,.7647,.3635,.7661,.4681,.9701,.3635,.9612,.8061,.2651,.8153,.4238,.7188,.3345,.3635,.4673,.0189,.1238,.9698,.8489,.2561,.9795,.4681,.9701
                    ,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.7661,.4681,.9701,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.3635,.2704,.0189,.3232,.0189,.1238,.9698,.8489,.2395,.8033,.4918,.4935,.3256,.1266
                    ,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.4918,.4935,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489,.2561,.9795
                    ,.4918,.4935,.4681,.9701,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.7661,.4681,.9701,.8061,.2651,.8922,.3759,.8153,.4238,.4918,.4935,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489
                    ,.2561,.9795,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489,.6725,.135,.2395,.8033
                    ,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.2147,.5339,.0296,.5409,.0189,.3232,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.6725,.135,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489,.6725,.135,.2395,.8033
                    ,.4918,.4935,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.6725,.135,.4918,.4935,.3635,.4673,.0189,.3232,.9698,.8489
                    ,.6725,.135,.2395,.8033,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.6725,.135,.3635,.4673,.0189,.3232,.0189,.1238
                    ,.9698,.8489,.2395,.8033,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489
                    ,.2395,.8033,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489
                    ,.2395,.8033,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.9698,.8489,.2395,.8033,.4681,.9701,.3256,.1266
                    ,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489,.6725,.135,.2561,.9795,.4681,.9701
                    ,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.0296,.5409,.0189,.3232,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.7661,.4681,.9701,.8061,.2651,.8922,.3759,.8153,.4238,.6725,.135,.3635,.4673,.3635,.2704,.0189,.3232,.9698,.8489,.2561,.9795,.4918,.4935,.3256,.1266,.3256,.326,.0189,.1238
                    ,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.4918,.4935,.3635,.4673,.3635,.2704,.0189,.3232,.9698,.8489,.2561,.9795,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205
                    ,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.9698,.8489,.2561,.9795,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181
                    ,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.3635,.2704,.0189,.3232,.0189,.1238,.9698,.8489,.2561,.9795,.4918,.4935,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181
                    ,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.4918,.4935,.3635,.4673,.0189,.3232,.0189,.1238,.9698,.8489,.2561,.9795,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232
                    ,.4454,.6189,.0356,.9472,.2561,.6107,.6987,.7647,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.3635,.2704,.0189,.3232,.0189,.1238,.9698,.8489,.2395,.8033,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472
                    ,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.0189,.3232,.9698,.8489,.2561,.9795,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.7272,.2181,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472,.2561,.6107
                    ,.6987,.7647,.3635,.9612,.3635,.7661,.8061,.2651,.8922,.3759,.8153,.4238,.3635,.4673,.3635,.2704,.0189,.3232,.0189,.1238,.9698,.8489,.2395,.8033,.4918,.4935,.4681,.9701,.3256,.1266,.3256,.326,.0189,.1238,.0296,.0205,.8922,.1226,.8061,.2651,.2147,.5339,.0296,.5409,.0189,.3232,.4454,.6189,.0356,.9472
                    ,.2561,.6107,.2395,.8033,.6987,.7647,.7217,.6024,.3635,.7661,.4681,.9701,.8061,.2651,.8922,.3759,.8153,.4238,.4918,.4935,.3635,.4673,.0189,.3232,.0189,.1238
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Stone_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 1588, 0, 2640, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Fireplace.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(13);
        };
        return Fireplace;
    })(BABYLON.Mesh);
    map01.Fireplace = Fireplace;

    var choinka_015 = (function (_super) {
        __extends(choinka_015, _super);
        function choinka_015(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 39.1509;
            this.position.y  = -.0495;
            this.position.z  = 20.5603;
            this.rotation.x  = 0;
            this.rotation.y  = .8846;
            this.rotation.z  = 0;
            this.scaling.x   = 15.8109;
            this.scaling.y   = 15.8109;
            this.scaling.z   = 15.8109;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#0");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_015.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(14);
        };
        return choinka_015;
    })(BABYLON.Mesh);
    map01.choinka_015 = choinka_015;

    var choinka_014 = (function (_super) {
        __extends(choinka_014, _super);
        function choinka_014(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 49.228;
            this.position.y  = -.0495;
            this.position.z  = -16.9537;
            this.rotation.x  = 0;
            this.rotation.y  = 1.4992;
            this.rotation.z  = 0;
            this.scaling.x   = 11.4495;
            this.scaling.y   = 11.4495;
            this.scaling.z   = 11.4495;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#1");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_014.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(15);
        };
        return choinka_014;
    })(BABYLON.Mesh);
    map01.choinka_014 = choinka_014;

    var choinka_013 = (function (_super) {
        __extends(choinka_013, _super);
        function choinka_013(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 37.0477;
            this.position.y  = -.0495;
            this.position.z  = -16.9537;
            this.rotation.x  = 0;
            this.rotation.y  = -1.4528;
            this.rotation.z  = 0;
            this.scaling.x   = 11.4495;
            this.scaling.y   = 11.4495;
            this.scaling.z   = 11.4495;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#2");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_013.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(16);
        };
        return choinka_013;
    })(BABYLON.Mesh);
    map01.choinka_013 = choinka_013;

    var choinka_012 = (function (_super) {
        __extends(choinka_012, _super);
        function choinka_012(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 22.9273;
            this.position.y  = -.0495;
            this.position.z  = -20.1874;
            this.rotation.x  = 0;
            this.rotation.y  = .9543;
            this.rotation.z  = 0;
            this.scaling.x   = 14.7131;
            this.scaling.y   = 14.7131;
            this.scaling.z   = 14.7131;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#3");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_012.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(17);
        };
        return choinka_012;
    })(BABYLON.Mesh);
    map01.choinka_012 = choinka_012;

    var choinka_011 = (function (_super) {
        __extends(choinka_011, _super);
        function choinka_011(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 10.5315;
            this.position.y  = -.0495;
            this.position.z  = -25.9003;
            this.rotation.x  = 0;
            this.rotation.y  = .5387;
            this.rotation.z  = 0;
            this.scaling.x   = 12.5907;
            this.scaling.y   = 12.5907;
            this.scaling.z   = 12.5907;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#4");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_011.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(18);
        };
        return choinka_011;
    })(BABYLON.Mesh);
    map01.choinka_011 = choinka_011;

    var choinka_010 = (function (_super) {
        __extends(choinka_010, _super);
        function choinka_010(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -2.5111;
            this.position.y  = -.0495;
            this.position.z  = -27.086;
            this.rotation.x  = 0;
            this.rotation.y  = -2.5763;
            this.rotation.z  = 0;
            this.scaling.x   = 12.5907;
            this.scaling.y   = 12.5907;
            this.scaling.z   = 12.5907;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#5");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_010.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(19);
        };
        return choinka_010;
    })(BABYLON.Mesh);
    map01.choinka_010 = choinka_010;

    var choinka_009 = (function (_super) {
        __extends(choinka_009, _super);
        function choinka_009(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -13.873;
            this.position.y  = -.0495;
            this.position.z  = -24.1058;
            this.rotation.x  = 0;
            this.rotation.y  = .5387;
            this.rotation.z  = 0;
            this.scaling.x   = 10.4438;
            this.scaling.y   = 10.4438;
            this.scaling.z   = 10.4438;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#6");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_009.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(20);
        };
        return choinka_009;
    })(BABYLON.Mesh);
    map01.choinka_009 = choinka_009;

    var choinka_008 = (function (_super) {
        __extends(choinka_008, _super);
        function choinka_008(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -24.6761;
            this.position.y  = -.0495;
            this.position.z  = -18.1455;
            this.rotation.x  = 0;
            this.rotation.y  = -.0646;
            this.rotation.z  = 0;
            this.scaling.x   = 12.2095;
            this.scaling.y   = 12.2095;
            this.scaling.z   = 12.2095;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#7");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_008.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(21);
        };
        return choinka_008;
    })(BABYLON.Mesh);
    map01.choinka_008 = choinka_008;

    var choinka_007 = (function (_super) {
        __extends(choinka_007, _super);
        function choinka_007(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -32.6853;
            this.position.y  = -.0495;
            this.position.z  = -7.5286;
            this.rotation.x  = 0;
            this.rotation.y  = -.6025;
            this.rotation.z  = 0;
            this.scaling.x   = 13.0041;
            this.scaling.y   = 13.0041;
            this.scaling.z   = 13.0041;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#8");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_007.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(22);
        };
        return choinka_007;
    })(BABYLON.Mesh);
    map01.choinka_007 = choinka_007;

    var choinka_006 = (function (_super) {
        __extends(choinka_006, _super);
        function choinka_006(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -35.7533;
            this.position.y  = -.0495;
            this.position.z  = 2.9084;
            this.rotation.x  = 0;
            this.rotation.y  = .5987;
            this.rotation.z  = 0;
            this.scaling.x   = 9.9694;
            this.scaling.y   = 9.9694;
            this.scaling.z   = 9.9694;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#9");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_006.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(23);
        };
        return choinka_006;
    })(BABYLON.Mesh);
    map01.choinka_006 = choinka_006;

    var choinka_005 = (function (_super) {
        __extends(choinka_005, _super);
        function choinka_005(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -31.8882;
            this.position.y  = -.0495;
            this.position.z  = 14.4626;
            this.rotation.x  = 0;
            this.rotation.y  = .5987;
            this.rotation.z  = 0;
            this.scaling.x   = 16.5049;
            this.scaling.y   = 16.5049;
            this.scaling.z   = 16.5049;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#10");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_005.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(24);
        };
        return choinka_005;
    })(BABYLON.Mesh);
    map01.choinka_005 = choinka_005;

    var choinka_004 = (function (_super) {
        __extends(choinka_004, _super);
        function choinka_004(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -20.2059;
            this.position.y  = -.0495;
            this.position.z  = 22.1987;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 13.0041;
            this.scaling.y   = 13.0041;
            this.scaling.z   = 13.0041;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#11");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_004.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(25);
        };
        return choinka_004;
    })(BABYLON.Mesh);
    map01.choinka_004 = choinka_004;

    var choinka_003 = (function (_super) {
        __extends(choinka_003, _super);
        function choinka_003(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -7.5345;
            this.position.y  = -.0495;
            this.position.z  = 27.1658;
            this.rotation.x  = 0;
            this.rotation.y  = -.1303;
            this.rotation.z  = 0;
            this.scaling.x   = 12.0434;
            this.scaling.y   = 12.0434;
            this.scaling.z   = 12.0434;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#12");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_003.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(26);
        };
        return choinka_003;
    })(BABYLON.Mesh);
    map01.choinka_003 = choinka_003;

    var choinka_002 = (function (_super) {
        __extends(choinka_002, _super);
        function choinka_002(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 26.324;
            this.position.y  = -.0495;
            this.position.z  = 21.6382;
            this.rotation.x  = 0;
            this.rotation.y  = .8846;
            this.rotation.z  = 0;
            this.scaling.x   = 12.0434;
            this.scaling.y   = 12.0434;
            this.scaling.z   = 12.0434;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#13");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_002.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(27);
        };
        return choinka_002;
    })(BABYLON.Mesh);
    map01.choinka_002 = choinka_002;

    var choinka_001 = (function (_super) {
        __extends(choinka_001, _super);
        function choinka_001(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 15.396;
            this.position.y  = -.0495;
            this.position.z  = 27.1658;
            this.rotation.x  = 0;
            this.rotation.y  = .4279;
            this.rotation.z  = 0;
            this.scaling.x   = 12.0434;
            this.scaling.y   = 12.0434;
            this.scaling.z   = 12.0434;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#14");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(28);
        };
        return choinka_001;
    })(BABYLON.Mesh);
    map01.choinka_001 = choinka_001;

    var Forest_ground = (function (_super) {
        __extends(Forest_ground, _super);
        function Forest_ground(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 81.6798;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 300;
            this.scaling.y   = 1;
            this.scaling.z   = 300;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .5,0,-.5,-.5,0,.5,-.5,0,-.5,.5,0,.5
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,0,3,1]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,0,1,0,0,1,0,0,1,0
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Forest_ground");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 4, 0, 6, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Forest_ground.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(29);
        };
        return Forest_ground;
    })(BABYLON.Mesh);
    map01.Forest_ground = Forest_ground;

    var choinka = (function (_super) {
        __extends(choinka, _super);
        function choinka(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 4.7252;
            this.position.y  = -.0495;
            this.position.z  = 31.0924;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 13.0041;
            this.scaling.y   = 13.0041;
            this.scaling.z   = 13.0041;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    0,1.0051,0,-.1442,.2075,-.4937,.254,.2075,-.4636,.1442,.2075,.4937,.4636,.2075,.254,-.254,.2075,.4636,-.4937,.2075,.1442,-.4636,.2075,-.254,.4937,.2075,-.1442,0,1.338,0,.2257,.6287,.294,-.0496,.6287,.3777,-.2257,.6287,-.294,-.3777,.6287,-.0496,.0496,.6287,-.3777,.294,.6287,-.2257,.3777,.6287,.0496
                    ,-.294,.6287,.2257,0,1.7097,0,-.0254,1.0005,-.2755,.1818,1.0005,-.2186,.0254,1.0005,.2755,.2186,1.0005,.1818,-.1818,1.0005,.2186,-.2755,1.0005,.0254,-.2186,1.0005,-.1818,.2755,1.0005,-.0254,0,2.0471,0,.1961,1.3379,-.0814,.2017,1.3379,.0833,-.1961,1.3379,.0814,-.0833,1.3379,.2017,-.2017,1.3379,-.0833,-.0814,1.3379,-.1961
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0539,0,.0896,.0487,.0511,.0456,.0684,.0456,0,.3562,.0575,.0456,.0684,.0456,0,.0539,.0644,.0713,-.0079,0,.0945,.0421,-.019,.0997,-.0044,-.019,.0456,.0684,.0456,.0575,.3562,0,.0644,.0539,0,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0456,.0539,-.0456,.0644,.0539,0,-.0456,.0677,-.0456,-.0859,.0312,-.1032,0,.0539,-.0644,.0406,.3562,-.0406,0,.0539,-.0644,.0456,.0539,-.0456,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0677,-.0456,0,.0539,-.0644,-.0504,-.0079,.0504,-.1049,-.0064,.0241,-.0912,-.0064,.0571
                    ,-.0456,.0677,-.0456,-.0575,.3562,0,-.0644,.0539,0,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0577,.0068,.1492,0,-.0079,.0575,-.0456,.0539,.0456,.0713,-.0079,0,.1028,.0342,.0193,.0644,.0539,0,-.0406,.3562,.0406,-.0456,.0539,.0456,.0406,-.0079,.0406,.0427,.0388,-.0907,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0388,-.0907,.0427,-.009,-.0693,0,.0539,-.0644,.0456,.0539,-.0456,0,.0539,-.0644,.0188,-.009,-.0792,.0188,.0388,-.1006,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0439,.0278,-.1275,.0439,.0278,-.1275,.0427,.0388,-.0907,.0615,-.002,-.127,.0427,-.009,-.0693,.0439,-.002,-.1275
                    ,.0595,-.0435,-.2664,.0537,-.0533,-.2666,.0595,-.0533,-.2664,.0595,-.0435,-.2664,.0595,-.0533,-.2664,.0615,-.002,-.127,.0537,-.0533,-.2666,.0439,-.002,-.1275,.0595,-.0435,-.2664,-.1021,-.0054,-.0889,-.141,-.0065,-.1154,-.1523,-.0065,-.1131,-.1586,-.0065,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.0713,-.0079,0,-.1034,.0312,-.0674
                    ,-.0644,.0539,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1586,.013,-.1035,-.1726,-.0468,-.1948,-.1523,.0268,-.1131,-.1586,-.0065,-.1035,-.1738,-.0606,-.1929,-.0859,-.0054,-.1032,-.141,.013,-.1154,-.141,-.0065,-.1154,-.1034,-.0054,-.0674,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1034,.0312,-.0674
                    ,-.1021,.045,-.0889,-.1021,.045,-.0889,-.0859,.0312,-.1032,-.1703,-.0606,-.1953,-.1726,-.0645,-.1948,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929,-.141,.013,-.1154,-.1726,-.0468,-.1948,-.1703,-.0606,-.1953,-.1738,-.0645,-.1929,-.1703,-.0645,-.1953,-.1726,-.0645,-.1948,-.141,-.0065,-.1154,-.1703,-.0606,-.1953,-.1703,-.0645,-.1953
                    ,-.0814,.0068,.1307,-.114,.0063,.2109,-.114,-.0133,.2109,-.0504,-.0079,.0504,-.0814,.0392,.1307,-.0577,.0068,.1492,-.0577,.0392,.1492,0,.0539,.0644,-.0814,.0392,.1307,-.0456,.0539,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0814,.0392,.1307,-.0999,.0063,.2133,-.114,.0063,.2109,-.0814,.0068,.1307
                    ,-.0577,.0068,.1492,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0063,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,-.1227,-.0042,.2943,.0896,-.0242,.0511,.1112,-.0182,.0894,.1315,-.0182,.0712,.133,-.0182,.0439
                    ,.1028,-.0242,.0193,0,-.0079,.0575,.0578,.0342,.0643,.0578,-.0242,.0643,.0578,-.0242,.0643,.0456,.0684,.0456,.0713,-.0079,0,.1728,-.0179,.088,.2343,-.0407,.0865,.2343,-.0476,.0865,.1853,.0088,.0618,.2374,-.0262,.0837,.1844,.0233,.0775,.1112,.0281,.0894,.0578,.0342,.0643,.1028,-.0242,.0193,.133,.0281,.0439
                    ,.1028,.0342,.0193,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1112,-.0182,.0894,.2374,-.0476,.0837,.2376,-.0407,.0797,.2376,-.0476,.0797,.2374,-.0476,.0837,.1844,-.0179,.0775,.2376,-.0476,.0797,.1853,-.0179,.0618,.2343,-.0476,.0865,.2374,-.0476,.0837,.1728,.0088,.088,.2374,-.0262,.0837,.1853,-.0179,.0618
                    ,.2376,-.0407,.0797,.1853,.0088,.0618,.133,-.0182,.0439,.1853,.0088,.0618,.133,.0281,.0439,.1315,.0426,.0712,.1112,.0281,.0894,.1728,-.0179,.088,.133,.0281,.0439,.1844,.0233,.0775,.1112,-.0182,.0894,.0839,-.0044,-.057,.1367,-.0023,-.0667,.0803,.0421,-.0534,.0644,.0539,0,.0803,.0421,-.0534,.0945,.0421,-.019
                    ,.0504,-.0079,-.0504,.0456,.0539,-.0456,.0713,-.0079,0,.0839,-.0044,-.057,.0504,-.0079,-.0504,.1464,-.0254,-.0495,.1637,-.0519,-.0698,.1386,-.0254,-.0685,.1438,-.0023,-.0495,.1464,-.0254,-.0495,.0997,-.0044,-.019,.1386,-.0254,-.0685,.0839,-.0044,-.057,.0803,.0421,-.0534,.1438,-.0023,-.0495,.0945,.0421,-.019,.1646,-.0477,-.0664
                    ,.1637,-.0519,-.0698,.1651,-.0519,-.0664,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1386,-.0254,-.0685,.1633,-.0477,-.0694,.1464,-.0254,-.0495,.1646,-.0477,-.0664,.1651,-.0519,-.0664,-.0912,-.0064,.0571,-.1284,.0217,.0637,-.088,.034,.0539,-.0713,-.0079,0,-.1004,.034,.0241,-.1049,-.0064,.0241,-.0456,.0539,.0456,-.1004,.034,.0241
                    ,-.0644,.0539,0,-.0504,-.0079,.0504,-.0456,.0539,.0456,-.1386,-.0027,.0457,-.1627,-.0113,.0685,-.1303,-.0027,.0657,-.1049,-.0064,.0241,-.1359,.0217,.0457,-.1386,-.0027,.0457,-.088,.034,.0539,-.1359,.0217,.0457,-.1004,.034,.0241,-.1632,-.0088,.0666,-.1627,-.0113,.0685,-.1635,-.0113,.0666,-.1284,.0217,.0637,-.1359,.0217,.0457
                    ,-.1303,-.0027,.0657,-.1625,-.0088,.0683,-.1386,-.0027,.0457,-.1632,-.0088,.0666,-.1635,-.0113,.0666,.1028,.0342,.0193,.0406,.3562,.0406,.0456,.0684,.0456,.0644,.0539,0,.0456,.0684,.0456,.0406,.3562,.0406,.0504,-.0079,-.0504,.0406,.3562,-.0406,0,.0539,-.0644,-.0406,.3562,-.0406,-.0456,.0677,-.0456,-.0456,.0677,-.0456
                    ,-.0406,.3562,-.0406,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0575,.3562,0,-.0575,.3562,0,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575,-.0575,.3562,0,-.0814,.0068,.1307
                    ,-.0406,.3562,.0406,.0713,-.0079,0,.1028,-.0242,.0193,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,.0188,.0388,-.1006,.0456,.0539,-.0456,.0427,.0388,-.0907,0,.0539,-.0644,.0188,.0388,-.1006,0,.0539,-.0644,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0533,-.2666,.0188,-.009,-.0792,.0427,.0388,-.0907
                    ,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,-.0435,-.2666,.0615,.0278,-.127,.0595,-.0435,-.2664,.0615,-.002,-.127,.0595,-.0533,-.2664,.0537,-.0533,-.2666,.0537,-.0435,-.2666,.0595,-.0435,-.2664,-.0644,.0539,0,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0539,-.0644
                    ,-.0859,.0312,-.1032,-.1586,-.0065,-.1035,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1586,-.0065,-.1035,-.1586,.013,-.1035,-.1034,.0312,-.0674,-.1021,.045,-.0889,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.141,.013,-.1154,-.1523,.0268,-.1131,-.1726,-.0468,-.1948,-.1726,-.0645,-.1948,-.1738,-.0645,-.1929
                    ,-.1703,-.0645,-.1953,-.141,-.0065,-.1154,-.141,.013,-.1154,-.1703,-.0606,-.1953,-.0504,-.0079,.0504,-.0456,.0539,.0456,0,-.0079,.0575,-.0577,.0068,.1492,0,.0539,.0644,-.0577,.0392,.1492,-.0814,.0392,.1307,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0814,.0392,.1307,-.0577,.0392,.1492,-.0814,.0068,.1307,-.114,-.0133,.2109
                    ,-.0577,.0068,.1492,-.0999,-.0133,.2133,-.0999,.0063,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.114,.0063,.2109,-.12,-.0042,.2948,.0578,-.0242,.0643,0,-.0079,.0575,.0578,-.0242,.0643,.0456,.0684,.0456,.0896,.0487,.0511,.0713,-.0079,0,.1028,-.0242,.0193
                    ,.133,-.0182,.0439,.1028,.0342,.0193,.133,.0281,.0439,.1112,.0281,.0894,.2374,-.0262,.0837,.2374,-.0476,.0837,.2374,-.0476,.0837,.2376,-.0476,.0797,.1728,-.0179,.088,.2343,-.0476,.0865,.1844,.0233,.0775,.2374,-.0262,.0837,.1853,-.0179,.0618,.2376,-.0476,.0797,.2376,-.0407,.0797,.133,-.0182,.0439,.1853,-.0179,.0618
                    ,.1853,.0088,.0618,.1315,.0426,.0712,.1844,.0233,.0775,.1728,-.0179,.088,.133,.0281,.0439,.1853,.0088,.0618,.1844,.0233,.0775,.1112,-.0182,.0894,.1112,.0281,.0894,.1386,-.0254,-.0685,.0644,.0539,0,.0456,.0539,-.0456,.0803,.0421,-.0534,.0504,-.0079,-.0504,.0713,-.0079,0,.0997,-.0044,-.019,.0839,-.0044,-.057
                    ,.1651,-.0519,-.0664,.0997,-.0044,-.019,.1464,-.0254,-.0495,.1386,-.0254,-.0685,.0803,.0421,-.0534,.1367,-.0023,-.0667,.1438,-.0023,-.0495,.1633,-.0477,-.0694,.1637,-.0519,-.0698,.1367,-.0023,-.0667,.1633,-.0477,-.0694,.1386,-.0254,-.0685,.1637,-.0519,-.0698,.1464,-.0254,-.0495,.1646,-.0477,-.0664,-.0912,-.0064,.0571,-.1303,-.0027,.0657
                    ,-.0713,-.0079,0,-.0644,.0539,0,-.0456,.0539,.0456,-.088,.034,.0539,-.1004,.034,.0241,-.0504,-.0079,.0504,-.0912,-.0064,.0571,-.1635,-.0113,.0666,-.1049,-.0064,.0241,-.088,.034,.0539,-.1284,.0217,.0637,-.1359,.0217,.0457,-.1625,-.0088,.0683,-.1627,-.0113,.0685,-.1284,.0217,.0637,-.1625,-.0088,.0683,-.1303,-.0027,.0657
                    ,-.1627,-.0113,.0685,-.1386,-.0027,.0457,-.1632,-.0088,.0666
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(768);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 50);
                _i.set([46], 111);
                CONTIG(_i, 112, 51, 73);
                _i.set([65,74,75,69,76,70,77,78,79,80,41,81,48,59,82,83,84,85,86,87,88,89,83,90,91,92,93,94,95,96,93,94,97,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110
                ,85,111,112,113,111,114,60,53,115,116,117,118,119,59,120,111,121,122,123,124,125,126,127,128,124,129,130,131,132,133,134,135,126,136,137,130,138,139,140,141,142,128,143,144,145,146,113,147,114,113
                ], 135);
                CONTIG(_i, 235, 148, 157);
                _i.set([153,41], 245);
                CONTIG(_i, 247, 158, 169);
                _i.set([165,74,170,171,159,172,173,174,175,176,177,155,178,179,180,181,182,183,184,185,183,186,187,188,189,190,82,191,183,192,189,41,193,183,187,194,195,196,197,198,199,37,200,201,202,203,204,37,205,206
                ,190,207,208,209,210,211,195,212,196,213,214,215,213,216,217,218,219,195,220,221,222,223,224,225,226,218,227,185,228,213,185,215,186,229,230,206,231,218,194,232,233,234,235,236,237,238,234,239,240,241
                ,242,243,244,245,44], 259);
                CONTIG(_i, 364, 246, 257);
                _i.set([254,258,259,260,233], 376);
                CONTIG(_i, 381, 261, 273);
                _i.set([266,274,275,276,277,278,279,280,66,277,67,281,282,283,284,285,286,287,284,288,289,290,265,291,292,293,36,294,37,39,295,296,42,297,43,298,299,46,48,300,49,46,301,51,53,116,54,56,62,302
                ,59,111,60,62,303,304,65,61,66,305,306,69], 394);
                CONTIG(_i, 456, 307, 321);
                _i.set([65,322,74,69,323,76,324,325,78,80,39,41,65,75,59,82,326,327,328,48,82,59,61,65,75,82,59,83,329,84,86,330,331,332,333,83,334,335,336,94,337,95,93,338,94,339,340,99,49,341
                ,342,102,343,103,99,344,345,346,347,348,84,349,350,111,120,112,111,113,114,53,351,115,352,353,354,59,48,120,355,356,357,124,128,125,358,143,128,359,360,130,361,362,363,364,124,126,365,366,130,139
                ,367,140,368,125,128,369,370,371,113,372,373,113,112,374,375,376,377,153,157,154,378,379,157,41,380,381,382,383,384,385,386,164,387,388,167,389,390,165,391,392,393,172,394,395,396,397,176,155,154,398
                ,399,167,400,183,401,184,183,185,186,402,41,189,82,75,403,404,405,189,406,82,183,194,218,195,197,210,198,37,206,200,407,408,203,37,409,410,190,189,411,209,198,210,195,412,413,213,414,415,213,416
                ,417,218], 471);
                CONTIG(_i, 673, 418, 427);
                _i.set([218,185,184,428,185,213,215,429,430,431,432,433,218,232,434,233,435,436,437,438,232,234,439,440,441,243,442,244,44,43,246,443,444,445,446,447,448,254,449,450,451,452,254,453,454,260,455,246,456,457
                ,458,265,459,460,268,461,462,463,464,465,266,275,466,276,467,268,279,66,275,277,468,469,470,284,471,472,473,474,284,475,476,290,477,279,478], 683);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.8548,.5125,-.0813,.2256,.9517,.2084,.5636,.4051,.7199,-.0002,.639,.7692,.5636,.4051,.7199,.1982,.2709,.942,.2927,-.9415,-.1667,.6412,.6575,.3956,.3785,-.625,.6827,.5636,.4051,.7199,.7692,.639,-.0002,.8548,.5125,-.0813,-.0985,-.8938,-.4376,.5676,-.8192,-.0819,-.5004,-.7941,-.3451
                    ,.6066,.4523,-.6538,.8548,.5125,-.0813,-.5839,.5586,-.589,.2232,.4109,-.8839,-.0354,.3294,-.9435,.544,.6388,-.544,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0126,-.9998,-.0148,-.4956,-.7634,.4142,-.4857,-.8659,-.1195,.0002,.639,-.7692,-.5839,.5586,-.589,-.0354,.3294,-.9435,-.2289,-.9423,.2442,-.4387,-.692,-.5732,.0951,-.692,.7156
                    ,-.5839,.5586,-.589,-.7692,.639,.0002,-.9147,.4037,.0171,-.7692,.639,.0002,.0002,.639,-.7692,.7692,.639,-.0002,.6525,-.6516,.3867,.1665,-.863,.4769,-.6568,.5313,.5351,.2927,-.9415,-.1667,.5954,.4756,-.6475,.8548,.5125,-.0813,-.544,.6388,.544,-.6568,.5313,.5351,-.1299,-.965,-.2276,.6753,.7241,-.1403,-.4669,.7036,-.5356
                    ,.7454,.6645,-.0525,.2815,-.8821,-.3777,.6753,.7241,-.1403,.5676,-.8192,-.0819,-.0354,.3294,-.9435,.6066,.4523,-.6538,-.0354,.3294,-.9435,-.5004,-.7941,-.3451,-.5868,.5533,-.5911,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,-.4669,.7036,-.5356,-.4669,.7036,-.5356,.6753,.7241,-.1403,.7809,-.582,.2266,.5676,-.8192,-.0819,-.6604,-.7327,-.1641
                    ,.6102,.4143,-.6753,-.5361,-.6827,-.4965,.563,-.6827,-.4658,.6102,.4143,-.6753,.563,-.6827,-.4658,.7809,-.582,.2266,-.5361,-.6827,-.4965,-.6604,-.7327,-.1641,.6102,.4143,-.6753,.0006,-1,.0013,.5257,-.8029,-.281,.2536,-.9179,.3052,-.626,-.5784,.5229,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4857,-.8659,-.1195,-.7203,.4439,.533
                    ,-.9147,.4037,.0171,.2504,-.6699,-.699,-.0985,-.8938,-.4376,.2232,.4109,-.8839,.2504,-.6699,-.699,-.8429,.2878,.4547,-.2619,.4836,-.8352,-.4153,.8599,-.2967,-.626,-.5784,.5229,-.9794,.018,-.2012,.2504,-.6699,-.699,.4539,.3216,-.8309,.5257,-.8029,-.281,-.4956,-.7634,.4142,-.8429,.2878,.4547,-.7203,.4439,.533,-.7203,.4439,.533
                    ,-.2839,.9369,-.2038,-.2839,.9369,-.2038,.2232,.4109,-.8839,.4913,.0301,-.8704,-.3614,-.8008,-.4775,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,-.5305,-.8444,.0747,.4539,.3216,-.8309,-.2619,.4836,-.8352,.4913,.0301,-.8704,-.5305,-.8444,.0747,.4263,-.7521,-.5026,-.3614,-.8008,-.4775,.5257,-.8029,-.281,.4913,.0301,-.8704,.4263,-.7521,-.5026
                    ,-.7012,-.6563,-.2785,-.7697,.6366,-.0474,-.675,-.7034,-.2228,-.2289,-.9423,.2442,-.7161,.6905,-.1022,.6525,-.6516,.3867,.4421,.7135,.5435,.1982,.2709,.942,-.7161,.6905,-.1022,-.6568,.5313,.5351,-.675,-.7034,-.2228,.4445,-.5635,.6962,.6086,-.7761,.1651,-.7161,.6905,-.1022,.5766,.6708,.4664,-.7697,.6366,-.0474,-.7012,-.6563,-.2785
                    ,.6525,-.6516,.3867,.5766,.6708,.4664,-.6608,.5399,.5213,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6086,-.7761,.1651,.4447,.5399,.7146,.5766,.6708,.4664,-.6608,.5399,.5213,-.6544,-.5635,.5042,-.7697,.6366,-.0474,.4447,.5399,.7146,-.6608,.5399,.5213,-.0501,-.9976,-.0468,-.1198,-.6224,.7735,.0475,-.9986,.0233,.3976,-.7182,-.5711
                    ,.2752,-.7498,-.6017,.1665,-.863,.4769,-.0967,.3123,.945,-.3371,-.8409,.4233,-.3371,-.8409,.4233,.5636,.4051,.7199,.2927,-.9415,-.1667,-.0504,-.6883,.7236,.3634,.0291,.9312,.0667,-.8273,.5578,.4787,.3661,-.798,.8675,.4564,.1979,.5068,.8336,.2196,-.1398,.4356,.8892,-.0967,.3123,.945,.2752,-.7498,-.6017,.4913,.5242,-.6956
                    ,.5954,.4756,-.6475,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.1198,-.6224,.7735,.5572,-.7769,.293,.8237,.0457,-.5651,.4849,-.7429,-.4614,.5572,-.7769,.293,-.2818,-.9439,-.1717,.4849,-.7429,-.4614,.1167,-.6492,-.7515,.0667,-.8273,.5578,.5572,-.7769,.293,.12,.2769,.9534,.8675,.4564,.1979,.1167,-.6492,-.7515
                    ,.8237,.0457,-.5651,.4787,.3661,-.798,.3976,-.7182,-.5711,.4787,.3661,-.798,.4913,.5242,-.6956,.2384,.9487,.2076,-.1398,.4356,.8892,-.0504,-.6883,.7236,.4913,.5242,-.6956,.5068,.8336,.2196,-.1198,-.6224,.7735,-.2151,-.625,-.7504,.3737,.4883,-.7886,.1736,.6575,-.7331,.8548,.5125,-.0813,.1736,.6575,-.7331,.6412,.6575,.3956
                    ,.2815,-.8821,-.3777,.6066,.4523,-.6538,.2927,-.9415,-.1667,-.2151,-.625,-.7504,.2815,-.8821,-.3777,.2304,-.5585,.7968,.1493,-.79,-.5946,-.4005,-.5585,-.7263,.8219,.4883,.2933,.2304,-.5585,.7968,.3785,-.625,.6827,-.4005,-.5585,-.7263,-.2151,-.625,-.7504,.1736,.6575,-.7331,.8219,.4883,.2933,.6412,.6575,.3956,.9611,.2446,.1282
                    ,.1493,-.79,-.5946,.526,-.79,.3148,.3737,.4883,-.7886,.8219,.4883,.2933,-.4005,-.5585,-.7263,.5889,.2446,-.7702,.2304,-.5585,.7968,.9611,.2446,.1282,.526,-.79,.3148,.0951,-.692,.7156,-.1928,.6501,.735,-.0952,.65,.7539,-.4857,-.8659,-.1195,-.6004,.65,-.4657,-.4387,-.692,-.5732,-.6568,.5313,.5351,-.6004,.65,-.4657
                    ,-.9147,.4037,.0171,-.2289,-.9423,.2442,-.6568,.5313,.5351,-.4401,-.6245,-.6452,-.3591,-.6463,.6733,.145,-.6245,.7674,-.4387,-.692,-.5732,-.656,.6501,-.3834,-.4401,-.6245,-.6452,-.0952,.65,.7539,-.656,.6501,-.3834,-.6004,.65,-.4657,-.9178,.3632,-.1603,-.3591,-.6463,.6733,-.73,-.6463,-.2221,-.1928,.6501,.735,-.656,.6501,-.3834
                    ,.145,-.6245,.7674,-.5357,.3632,.7623,-.4401,-.6245,-.6452,-.9178,.3632,-.1603,-.73,-.6463,-.2221,.5954,.4756,-.6475,.5437,.6393,.5437,.5636,.4051,.7199,.8548,.5125,-.0813,.5636,.4051,.7199,.5437,.6393,.5437,.2815,-.8821,-.3777,.544,.6388,-.544,-.0354,.3294,-.9435,-.5437,.6393,-.5437,-.5839,.5586,-.589,-.5839,.5586,-.589
                    ,-.5437,.6393,-.5437,.7692,.639,-.0002,.5437,.6393,.5437,-.0002,.639,.7692,-.0002,.639,.7692,-.544,.6388,.544,-.7692,.639,.0002,-.7692,.639,.0002,-.5437,.6393,-.5437,.0002,.639,-.7692,.0002,.639,-.7692,.544,.6388,-.544,.7692,.639,-.0002,.7692,.639,-.0002,-.0002,.639,.7692,-.7692,.639,.0002,-.7012,-.6563,-.2785
                    ,-.544,.6388,.544,.2927,-.9415,-.1667,.2752,-.7498,-.6017,.2927,-.9415,-.1667,.2815,-.8821,-.3777,.2815,-.8821,-.3777,-.5868,.5533,-.5911,.6066,.4523,-.6538,.6753,.7241,-.1403,-.0354,.3294,-.9435,-.5868,.5533,-.5911,-.0354,.3294,-.9435,-.0985,-.8938,-.4376,-.5004,-.7941,-.3451,-.5361,-.6827,-.4965,-.5004,-.7941,-.3451,.6753,.7241,-.1403
                    ,.7454,.6645,-.0525,.7809,-.582,.2266,-.6604,-.7327,-.1641,-.5715,.4143,-.7083,.7454,.6645,-.0525,.6102,.4143,-.6753,.7809,-.582,.2266,.563,-.6827,-.4658,-.5361,-.6827,-.4965,-.5715,.4143,-.7083,.6102,.4143,-.6753,-.9147,.4037,.0171,-.4857,-.8659,-.1195,-.4956,-.7634,.4142,-.7203,.4439,.533,-.0985,-.8938,-.4376,-.0354,.3294,-.9435
                    ,.2232,.4109,-.8839,-.626,-.5784,.5229,.2504,-.6699,-.699,.2232,.4109,-.8839,-.4956,-.7634,.4142,-.626,-.5784,.5229,-.8429,.2878,.4547,-.7203,.4439,.533,-.2839,.9369,-.2038,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,.4539,.3216,-.8309,-.4153,.8599,-.2967,-.2619,.4836,-.8352,-.3614,-.8008,-.4775,-.5305,-.8444,.0747
                    ,.4263,-.7521,-.5026,.5257,-.8029,-.281,.4539,.3216,-.8309,.4913,.0301,-.8704,-.2289,-.9423,.2442,-.6568,.5313,.5351,.1665,-.863,.4769,.6525,-.6516,.3867,.1982,.2709,.942,.4421,.7135,.5435,-.7161,.6905,-.1022,-.675,-.7034,-.2228,-.6544,-.5635,.5042,-.7161,.6905,-.1022,.4421,.7135,.5435,-.7012,-.6563,-.2785,-.675,-.7034,-.2228
                    ,.6525,-.6516,.3867,.6086,-.7761,.1651,.5766,.6708,.4664,.4447,.5399,.7146,.4445,-.5635,.6962,.6086,-.7761,.1651,.4445,-.5635,.6962,-.6608,.5399,.5213,-.7697,.6366,-.0474,.4447,.5399,.7146,-.3371,-.8409,.4233,.1665,-.863,.4769,-.3371,-.8409,.4233,.5636,.4051,.7199,.2256,.9517,.2084,.2927,-.9415,-.1667,.2752,-.7498,-.6017
                    ,.3976,-.7182,-.5711,.5954,.4756,-.6475,.4913,.5242,-.6956,-.1398,.4356,.8892,.8675,.4564,.1979,.5572,-.7769,.293,.5572,-.7769,.293,.4849,-.7429,-.4614,-.0504,-.6883,.7236,.0667,-.8273,.5578,.5068,.8336,.2196,.8675,.4564,.1979,.1167,-.6492,-.7515,.4849,-.7429,-.4614,.8237,.0457,-.5651,.3976,-.7182,-.5711,.1167,-.6492,-.7515
                    ,.4787,.3661,-.798,.2384,.9487,.2076,.5068,.8336,.2196,-.0504,-.6883,.7236,.4913,.5242,-.6956,.4787,.3661,-.798,.5068,.8336,.2196,-.1198,-.6224,.7735,-.1398,.4356,.8892,-.4005,-.5585,-.7263,.8548,.5125,-.0813,.6066,.4523,-.6538,.1736,.6575,-.7331,.2815,-.8821,-.3777,.2927,-.9415,-.1667,.3785,-.625,.6827,-.2151,-.625,-.7504
                    ,.526,-.79,.3148,.3785,-.625,.6827,.2304,-.5585,.7968,-.4005,-.5585,-.7263,.1736,.6575,-.7331,.3737,.4883,-.7886,.8219,.4883,.2933,.5889,.2446,-.7702,.1493,-.79,-.5946,.3737,.4883,-.7886,.5889,.2446,-.7702,-.4005,-.5585,-.7263,.1493,-.79,-.5946,.2304,-.5585,.7968,.9611,.2446,.1282,.0951,-.692,.7156,.145,-.6245,.7674
                    ,-.4857,-.8659,-.1195,-.9147,.4037,.0171,-.6568,.5313,.5351,-.0952,.65,.7539,-.6004,.65,-.4657,-.2289,-.9423,.2442,.0951,-.692,.7156,-.73,-.6463,-.2221,-.4387,-.692,-.5732,-.0952,.65,.7539,-.1928,.6501,.735,-.656,.6501,-.3834,-.5357,.3632,.7623,-.3591,-.6463,.6733,-.1928,.6501,.735,-.5357,.3632,.7623,.145,-.6245,.7674
                    ,-.3591,-.6463,.6733,-.4401,-.6245,-.6452,-.9178,.3632,-.1603
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.7707,.1175,.7871,.0976,.7939,.1166,.4077,.0559,.4397,.182,.4178,.1906,.811,.6069,.7845,.6033,.8039,.5941,.2077,.4973,.2261,.3706,.2243,.5057,.1801,.1699,.2001,.1658
                    ,.1924,.1747,.2471,.5057,.2243,.5057,.4075,.7807,.3751,.7741,.4161,.7598,.0968,.5048,.0774,.3689,.0968,.3689,.1598,.1715,.1397,.195,.1386,.1616,.0795,.5047,.0554,.3756,.0774,.3689,.1366,.1372,.1198,.1589,.1184,.1428,.3598,.4694,.3813,.3408,.3789,.4766,.2422,.6613,.2077,.6473,.222,.6136,.1126,.099
                    ,.1558,.124,.4012,.4765,.9388,.7547,.9238,.7369,.9388,.7268,.3911,.0556,.3992,.1904,.176,.1223,.6684,.6376,.6657,.621,.6737,.6196,.6503,.3511,.6766,.3608,.6532,.3598,.6514,.6535,.6737,.6577,.512,.5561,.5388,.5665,.5151,.5716,.5307,.5847,.5361,.6477,.5172,.5821,.5172,.5821,.6766,.3608,.662,.3794
                    ,.6532,.3598,.2128,.1887,.7733,.2297,.7707,.2253,.7733,.2253,.6635,.4421,.6592,.4436,.22,.1849,.2467,.243,.2128,.1887,.6607,.5561,.1448,.2034,.1344,.222,.1293,.2233,.1246,.2208,.3811,.7909,.3747,.7842,.9412,.34,.9243,.3726,.9125,.3399,.1544,.2057,.0838,.6764,.0663,.6418,.0832,.6416,.7942,.394
                    ,.8017,.3452,.8017,.3954,.7874,.3882,.7963,.3416,.0832,.6416,.0748,.6181,.0838,.618,.4945,.9289,.5057,.9085,.5112,.9289,.7878,.4156,.7991,.4127,.0596,.6337,.0663,.6418,.5269,.766,.528,.7678,.5269,.7678,.7955,.3399,.795,.3405,.9157,.0578,.9215,.1042,.9165,.1082,.1378,.2605,.1397,.2607,.1387,.261
                    ,.909,.0636,.9165,.1082,.9152,.1094,.5249,.379,.531,.4113,.5222,.4133,.512,.3479,.5395,.3757,.3852,.2182,.384,.2038,.6371,.1681,.6599,.1271,.6599,.168,.0767,.0863,.0564,.0539,.0819,.0824,.6599,.1271,.6529,.091,.6593,.0895,.1068,.1112,.3852,.2182,.3598,.2234,.0566,.938,.0554,.9358,.0566,.9359
                    ,.3836,.9085,.3768,.9396,.3747,.9085,.534,.4478,.5319,.4483,.6593,.0895,.6469,.0542,.6481,.0539,.1941,.1083,.1948,.0885,.207,.0916,.2134,.1022,.2062,.1183,.4207,.2176,.4445,.1981,.4466,.2241,.1782,.1096,.4397,.182,.1972,.1323,.4957,.2203,.5244,.229,.5246,.2321,.9238,.9029,.9327,.8796,.9327,.9065
                    ,.7982,.0816,.7982,.1081,.7845,.8889,.8001,.9111,.7845,.9149,.775,.0812,.7872,.0767,.4663,.2013,.4679,.2218,.9287,.8708,.9284,.8743,.9271,.8714,.5263,.2319,.2274,.0782,.249,.0669,.2311,.0843,.2462,.0648,.2481,.0653,.4948,.2085,.5255,.2223,.2215,.7957,.2251,.8194,.2097,.7925,.2282,.7748,.2097,.7925
                    ,.2077,.7691,.4767,.1932,.4663,.2013,.2204,.0764,.775,.0812,.7789,.0539,.4679,.2218,.3941,.6105,.3843,.6326,.3747,.6012,.0782,.828,.058,.812,.0751,.812,.4012,.5967,.3754,.5844,.1972,.1323,.2144,.1524,.1993,.1567,.909,.2283,.917,.2172,.9183,.2283,.7941,.5737,.8037,.5692,.2129,.134,.2394,.146
                    ,.2144,.1524,.058,.812,.0698,.7851,.0751,.812,.6499,.9244,.6483,.9225,.65,.9225,.6453,.9461,.6538,.9461,.394,.6373,.3994,.6511,.8037,.5692,.8093,.557,.811,.5561,.8118,.7486,.7984,.7652,.7931,.7465,.6737,.8112,.6538,.7969,.6725,.7946,.9218,.5927,.9412,.5742,.9446,.5927,.813,.7301,.7845,.7268
                    ,.1013,.1571,.0867,.1531,.1005,.1474,.6725,.7946,.659,.7795,.6703,.7782,.9263,.5742,.9386,.5561,.9412,.5742,.2094,.9292,.2085,.9281,.2095,.9281,.2077,.9439,.2164,.9439,.8096,.7665,.8118,.7809,.6703,.7782,.6726,.7657,.6737,.7656,.7707,.0982,.4276,.0539,.4397,.182,.7854,.619,.2077,.4973,.2112,.3689
                    ,.1993,.1567,.2464,.3706,.0774,.3689,.0598,.5052,.0554,.3756,.3598,.4694,.3642,.3399,.222,.6136,.2422,.6136,.2566,.6275,.2566,.6275,.2566,.6473,.2422,.6613,.2422,.6613,.222,.6613,.2077,.6473,.2077,.6473,.2077,.6276,.222,.6136,.222,.6136,.2566,.6275,.2422,.6613,.1068,.1112,.4012,.3408,.9388,.7547
                    ,.9268,.763,.1972,.1323,.1993,.1567,.1993,.1567,.6567,.6354,.6766,.3399,.6766,.3608,.6514,.6535,.6567,.6354,.512,.5561,.5405,.5586,.5388,.5665,.5405,.6486,.5388,.5665,.6766,.3608,.6748,.3747,.22,.1849,.2128,.1887,.7707,.2297,.6748,.3747,.6635,.4421,.22,.1849,.249,.2417,.2467,.243,.6581,.5566
                    ,.6607,.5561,.4161,.8006,.9412,.34,.9412,.3724,.9243,.3726,.0838,.6764,.0554,.6773,.0663,.6418,.7874,.3882,.0832,.6416,.0663,.6418,.4945,.9289,.4967,.9085,.5057,.9085,.7878,.4156,.0596,.6337,.0683,.6131,.528,.7598,.7955,.3399,.9157,.0578,.9215,.0539,.9215,.1042,.1387,.261,.1378,.2605,.1397,.2607
                    ,.909,.0636,.9157,.0578,.9165,.1082,.512,.3479,.5395,.3399,.4207,.2176,.3852,.2182,.6371,.1681,.6465,.1236,.6599,.1271,.0767,.0863,.0554,.0547,.6599,.1271,.6465,.1236,.1068,.1112,.0767,.0863,.3852,.2182,.3605,.2321,.3598,.2234,.0554,.9379,.0554,.9358,.3836,.9085,.3789,.9396,.534,.4478,.6593,.0895
                    ,.6469,.0542,.1782,.1096,.4207,.2176,.1782,.1096,.4397,.182,.4596,.1901,.1972,.1323,.7845,.8889,.8001,.8905,.7707,.0982,.775,.0812,.4663,.2013,.5255,.2223,.5263,.2319,.2481,.0653,.249,.0669,.2204,.0764,.2462,.0648,.5006,.2011,.5255,.2223,.2215,.7957,.2282,.8203,.2251,.8194,.2282,.7748,.2215,.7957
                    ,.2097,.7925,.4767,.1932,.5006,.2011,.2204,.0764,.775,.0812,.7717,.0565,.7789,.0539,.4679,.2218,.4663,.2013,.394,.6373,.0782,.828,.0554,.828,.058,.812,.4012,.5967,.1972,.1323,.2129,.134,.2144,.1524,.9153,.2172,.2129,.134,.2387,.1369,.2394,.146,.058,.812,.0613,.7851,.0698,.7851,.6484,.9244
                    ,.6483,.9225,.6453,.9461,.6484,.9244,.394,.6373,.4012,.652,.8037,.5692,.8093,.557,.8118,.7486,.8096,.7665,.6737,.8112,.6453,.8147,.9218,.5927,.9263,.5742,.9412,.5742,.813,.7301,.8118,.7486,.0868,.154,.6725,.7946,.9263,.5742,.9296,.5561,.9386,.5561,.2085,.9292,.2085,.9281,.2077,.9439,.2085,.9292
                    ,.8096,.7665,.813,.781,.6703,.7782,.6726,.7657
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#15");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 443, 96, 672, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        choinka.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(30);
        };
        return choinka;
    })(BABYLON.Mesh);
    map01.choinka = choinka;

    var Stone_large = (function (_super) {
        __extends(Stone_large, _super);
        function Stone_large(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -81.9855;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1.165;
            this.scaling.y   = 1.165;
            this.scaling.z   = 1.165;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1656,.8857,-.8315,-.1497,2.2379,-.6636,-.3099,.8857,-.8315,.6636,2.2379,.3124,1.0482,1.0022,-.3914,.8581,.8857,.3914,.3124,2.5892,.3124,-.3124,2.5892,-.1505,.3124,2.5892,-.3124,-.6636,1.7887,-.3124,-.6472,.7766,.3914,-.6472,.6608,-.3914,-.3124,2.1098,.4927,.3914,.8857,.9016,-.3914,.8216,.746,-.4707,-1,-.4707,-.4707,-.4707,-1
                    ,-1,-.4707,-.4707,-.1497,2.2379,-.6636,-.3124,2.5892,-.1505,-.4707,-1,.4707,-1,-.4707,.4707,-.4707,-.4707,1,-.3124,2.4704,.3124,-.6636,2.02,.3124,.4707,-1,-.4707,1.1377,-.2373,-.4707,.0183,-.4707,-1,.3124,2.5892,-.3124,.3124,2.2379,-.6636,.6636,2.2379,-.3124,.4707,-1,.4707,.4707,-.4707,1.1403,.7569,-.4707,.4707
                    ,.3124,2.5892,.3124,.3124,2.2379,.6636,-.3099,.8857,-.8315,-.3124,2.5892,-.1505,-.6636,2.02,.3124,-.4707,-.4707,1,-.6472,.7766,.3914,.4707,-1,.4707,.4707,-.4707,1.1403,.3124,2.2379,.6636,.3914,.8857,.9016,.4707,-1,-.4707,1.1377,-.2373,-.4707,.3124,2.5892,-.3124,.3124,2.5892,.3124,1.0482,1.0022,-.3914,-.4707,-1,-.4707
                    ,-.4707,-.4707,-1,.3124,2.5892,-.3124,-.1497,2.2379,-.6636,.3124,2.2379,-.6636,.4707,-1,.4707,1.0482,1.0022,-.3914,-.4707,-.4707,-1,-1,-.4707,-.4707,.4707,-.4707,1.1403,-.4707,-.4707,1,-1,-.4707,.4707,-1,-.4707,-.4707,1.1377,-.2373,-.4707,-.4707,-.4707,-1,.6636,2.2379,-.3124,-.6636,2.02,.3124,.3124,2.2379,.6636
                    ,-.3099,.8857,-.8315,-.1497,2.2379,-.6636,-.3124,2.5892,-.1505,-.3124,2.4704,.3124,-.6636,2.02,.3124,-.4707,-.4707,1,-1,-.4707,.4707,-.6472,.7766,.3914,.4707,-1,.4707,.3124,2.2379,.6636,.3914,.8857,.9016,.4707,-1,-.4707,.3124,2.5892,-.3124,.6636,2.2379,-.3124,-.4707,-1,-.4707,.3124,2.5892,-.3124,-.3124,2.5892,-.1505
                    ,-.1497,2.2379,-.6636,.4707,-1,.4707,.4707,-1,-.4707,1.0482,1.0022,-.3914,.3914,.8857,.9016,-.6472,.7766,.3914,-.4707,-.4707,-1,-.3099,.8857,-.8315,.4707,-.4707,1.1403,-1,-.4707,.4707,1.1377,-.2373,-.4707
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(180);
                CONTIG(_i, 0, 0, 19);
                _i.set([9,20,21,22,23,12], 20);
                CONTIG(_i, 26, 24, 34);
                _i.set([3,35,15,21,20,36,9,11,37,38,9,39,40,14,41,22,42,23,43,12,33,44,5,45,33,46,47,3,48,0,26,49,50,27,51,52,53,54,55,15,20,29,56,30,5,35,3,14,24,12
                ,57,11,58,14,59,60,11,61,62,5,63,33,27,2,64,0,29,1,3,65,4,6,23,7,9,66,10,12,67,13,15,17,21,68,69,9,70,71,72,73,74,75,76,20,22,23,6,77,33,32
                ,78,79,31,33,80,81,3,0,27,26,82,25,27,83,84,85,86,87,15,29,0,88,5,89,35,14,90,24,91,92,11,14,13,93,11,10,94,5,4,95,27,0,2], 37);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .2209,.1003,-.9701,-.3402,.4521,-.8245,-.437,.1291,-.8901,.8264,.4387,.3529,.9062,.1413,-.3984,.872,.0744,.4838,.2896,.8843,.3661,-.5097,.8357,-.2044,.3153,.882,-.3501,-.906,.1899,-.3782,-.9409,.1234,.3152,-.9322,.1506,-.3289,-.3909,.2956,.8717,.3232,.1533,.9338,-.5234,.159,.8371,-.3416,-.8756,-.3416,-.3732,-.2501,-.8934
                    ,-.9156,-.2005,-.3485,-.3402,.4521,-.8245,-.5097,.8357,-.2044,-.3416,-.8756,.3416,-.9152,-.2087,.3446,-.4088,-.2542,.8765,-.4725,.7207,.5072,-.8675,.3036,.394,.4176,-.8268,-.3767,.8998,-.2392,-.3649,.1755,-.2951,-.9392,.3153,.882,-.3501,.3097,.4172,-.8544,.8129,.4821,-.3266,.452,-.8417,.2953,.4236,-.2792,.8617,.9066,-.2785,.317
                    ,.2896,.8843,.3661,.2127,.4111,.8864,-.437,.1291,-.8901,-.5097,.8357,-.2044,-.8675,.3036,.394,-.4088,-.2542,.8765,-.9409,.1234,.3152,.452,-.8417,.2953,.4236,-.2792,.8617,.2127,.4111,.8864,.3232,.1533,.9338,.4176,-.8268,-.3767,.8998,-.2392,-.3649,.3153,.882,-.3501,.2896,.8843,.3661,.9062,.1413,-.3984,-.3416,-.8756,-.3416
                    ,-.3732,-.2501,-.8934,.3153,.882,-.3501,-.3402,.4521,-.8245,.3097,.4172,-.8544,.452,-.8417,.2953,.9062,.1413,-.3984,-.3732,-.2501,-.8934,-.9156,-.2005,-.3485,.4236,-.2792,.8617,-.4088,-.2542,.8765,-.9152,-.2087,.3446,-.9156,-.2005,-.3485,.8998,-.2392,-.3649,-.3732,-.2501,-.8934,.8129,.4821,-.3266,-.8675,.3036,.394,.2127,.4111,.8864
                    ,-.437,.1291,-.8901,-.3402,.4521,-.8245,-.5097,.8357,-.2044,-.4725,.7207,.5072,-.8675,.3036,.394,-.4088,-.2542,.8765,-.9152,-.2087,.3446,-.9409,.1234,.3152,.452,-.8417,.2953,.2127,.4111,.8864,.3232,.1533,.9338,.4176,-.8268,-.3767,.3153,.882,-.3501,.8129,.4821,-.3266,-.3416,-.8756,-.3416,.3153,.882,-.3501,-.5097,.8357,-.2044
                    ,-.3402,.4521,-.8245,.452,-.8417,.2953,.4176,-.8268,-.3767,.9062,.1413,-.3984,.3232,.1533,.9338,-.9409,.1234,.3152,-.3732,-.2501,-.8934,-.437,.1291,-.8901,.4236,-.2792,.8617,-.9152,-.2087,.3446,.8998,-.2392,-.3649
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .2317,.2598,.3111,.0772,.3111,.269,.574,.4592,.4039,.3148,.5413,.2857,.9392,.0436,.8065,.0278,.8981,.0168,.8273,.836,.729,.716,.8489,.6859,.8424,.1193,.9682,.2955,.829,.3024,.1392,.7721,.0377,.8144,.0212,.7245,.9237,.9106,.8286,.9598,.2147,.6544,.0967,.6068,.1982,.5645,.8354,.0635,.7719,.1257
                    ,.1126,.5126,.0212,.3939,.2295,.452,.225,.0168,.234,.0682,.1571,.0587,.5268,.0168,.6517,.0828,.5248,.0995,.6025,.4916,.6517,.4421,.9445,.7217,.8286,.9598,.7307,.8784,.8155,.4861,.7633,.2948,.3196,.6968,.3143,.5893,.9576,.1055,.6517,.2628,.3706,.0236,.3536,.1532,.4989,.4961,.6025,.4916,.0646,.2232
                    ,.2699,.5309,.3111,.4615,.9095,.9832,.9237,.9106,.9654,.9301,.3196,.6968,.0646,.2232,.9654,.5322,.8372,.5197,.9788,.4861,.8155,.4861,.6941,.5375,.8372,.5197,.3536,.1532,.3111,.4615,.4703,.4636,.7307,.8784,.9576,.1055,.9445,.7217,.9237,.9106,.8286,.9598,.7591,.9528,.7307,.8784,.8155,.4861,.6941,.4668
                    ,.7633,.2948,.3196,.6968,.9576,.1055,.6517,.2628,.3706,.0236,.4989,.4961,.4703,.4636,.2699,.5309,.9095,.9832,.8286,.9598,.9237,.9106,.3196,.6968,.2441,.8144,.0646,.2232,.6517,.2628,.7633,.2948,.9654,.5322,.9445,.7217,.9788,.4861,.6941,.5375,.3536,.1532
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Stona_large");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 96, 0, 180, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Stone_large.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(31);
        };
        return Stone_large;
    })(BABYLON.Mesh);
    map01.Stone_large = Stone_large;

    var Stone_medium = (function (_super) {
        __extends(Stone_medium, _super);
        function Stone_medium(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -75.2708;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .445;
            this.scaling.y   = .445;
            this.scaling.z   = .445;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .7004,-.0095,-1.3528,-.7004,-.7004,-1.6655,.7004,-.7004,-1.6655,1.0284,.0104,.6721,1.3312,-.7004,-.7004,1.3596,-.7203,.6721,.3582,.4704,.6721,-.7004,.2901,-.7004,.7004,.2901,-.7004,-.9783,-.5964,.6721,-.9399,.0302,2.0446,-1.234,-.7401,2.0446,-.4931,.0302,2.3612,.7401,-.7401,2.5964,-.7401,-.7401,2.5964,-.7004,-1,-.7004,-.7004,-.7004,-1.6655
                    ,-1,-.7004,-.7004,-.7004,-.0095,-1.3528,-.7004,.2901,-.7004,-1,-.0095,-.7004,-.7401,-1.0567,2.0446,-1.234,-.7401,2.0446,-.7401,-.7401,2.5964,-.7401,.5434,2.0446,-.4931,.0302,2.3612,.7004,-1,-.7004,1.3312,-.7004,-.7004,.7004,-.7004,-1.6655,.7004,.2901,-.7004,.7004,-.0095,-1.3528,1,-.0095,-.7004,.7401,-1.0567,2.0446,.7401,-.7401,2.5964
                    ,1.3879,-.7401,2.0446,.7401,.3468,2.0446,1.0567,.0302,2.0446,.7401,.0302,2.3612,-.7203,-1.0284,.6721,-1,-.7004,-.7004,-1,-.7004,-.7004,-.7004,-.7004,-1.6655,-.7203,.1939,.6721,-.9699,.0104,.6721,-.7401,-.7401,2.5964,-.4931,.0302,2.3612,.7401,-.7401,2.5964,-.7401,.5434,2.0446,1.3596,-.7203,.6721,.7203,-1.0284,.6721,.7004,.2901,-.7004
                    ,.3582,.4704,.6721,.7004,-.0095,-1.3528,-.7004,-.7004,-1.6655,-.7203,-1.0284,.6721,-.7203,-1.0284,.6721,.7401,.3468,2.0446,1.0567,.0302,2.0446,1.3312,-.7004,-.7004,-.7004,.2901,-.7004,-.9783,-.5964,.6721,-1.234,-.7401,2.0446,-1,-.7004,-.7004,-.7401,.5434,2.0446,.7401,.3468,2.0446,1.0567,.0302,2.0446,1.3879,-.7401,2.0446,-.7004,-.0095,-1.3528
                    ,-.7203,.1939,.6721,-.7004,-1,-.7004,-1,-.7004,-.7004,-1,-.7004,-.7004,-.7401,-.7401,2.5964,-.7401,-.7401,2.5964,.7401,-.7401,2.5964,1.3879,-.7401,2.0446,1.3596,-.7203,.6721,.7004,.2901,-.7004,.7004,-.0095,-1.3528,.7004,-.7004,-1.6655,.7004,-.7004,-1.6655,-.7004,-.7004,-1.6655,-.7004,-.0095,-1.3528,-.7203,-1.0284,.6721,.7401,.3468,2.0446
                    ,.3582,.4704,.6721,1.3596,-.7203,.6721,1.3312,-.7004,-.7004,-.7203,-1.0284,.6721,-.9783,-.5964,.6721,-.7401,.5434,2.0446,-.7203,.1939,.6721,1.0567,.0302,2.0446
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(180);
                CONTIG(_i, 0, 0, 25);
                _i.set([10], 26);
                CONTIG(_i, 27, 26, 39);
                _i.set([9,18,40,41,42,10,43,44,10,45,21,46,32,35,12,47,36,13,37,32,48,49,50,3,51,52,4,31,26,53,15,7,0,8,49,15,54,32,55,21,56,3,57,49,58,26,42,20,59,21
                ,60,61,20,9,62,63,6,64,65,5,66,0,67,1,3,31,4,6,68,7,9,43,10,12,37,13,38,69,70,18,20,71,42,24,10,72,11,10,21,73,74,35,37,12,36,75,13,32,34,76
                ,77,31,3,78,79,4,26,80,81,7,82,0,49,26,15,32,49,83,84,85,3,49,86,87,42,43,20,21,88,89,20,43,9,90,91,6,92,3,5], 41);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .414,.6287,-.6583,-.4828,-.3422,-.8061,.3929,-.3504,-.8502,.7766,.6295,-.0237,.9188,-.3108,-.2432,.9392,-.3421,-.0278,.1952,.9794,-.0513,-.3835,.9027,-.1948,.3758,.8994,-.2233,-.9688,-.2478,-.0072,-.8577,.3628,.3643,-.9322,-.2905,.2158,-.203,.4187,.8851,.3063,-.3214,.896,-.3678,-.2926,.8827,-.3669,-.9184,-.1482,-.4828,-.3422,-.8061
                    ,-.9252,-.3473,-.1531,-.4923,.5808,-.6483,-.3835,.9027,-.1948,-.9133,.3657,-.1791,-.2922,-.9361,.1959,-.9322,-.2905,.2158,-.3678,-.2926,.8827,-.4864,.7849,.3838,-.203,.4187,.8851,.2126,-.9647,-.1554,.9188,-.3108,-.2432,.3929,-.3504,-.8502,.3758,.8994,-.2233,.414,.6287,-.6583,.8078,.558,-.1902,.2131,-.9487,.2335,.3063,-.3214,.896
                    ,.8882,-.304,.3444,.3931,.8474,.3567,.7933,.5062,.3383,.3369,.4683,.8168,-.4834,-.8754,-.0077,-.9252,-.3473,-.1531,-.9252,-.3473,-.1531,-.4828,-.3422,-.8061,-.4724,.8801,-.0479,-.889,.4577,.0128,-.3678,-.2926,.8827,-.203,.4187,.8851,.3063,-.3214,.896,-.4864,.7849,.3838,.9392,-.3421,-.0278,.2222,-.9747,-.0228,.3758,.8994,-.2233
                    ,.1952,.9794,-.0513,.414,.6287,-.6583,-.4828,-.3422,-.8061,-.4834,-.8754,-.0077,-.4834,-.8754,-.0077,.3931,.8474,.3567,.7933,.5062,.3383,.9188,-.3108,-.2432,-.3835,.9027,-.1948,-.9688,-.2478,-.0072,-.9322,-.2905,.2158,-.9252,-.3473,-.1531,-.4864,.7849,.3838,.3931,.8474,.3567,.7933,.5062,.3383,.8882,-.304,.3444,-.4923,.5808,-.6483
                    ,-.4724,.8801,-.0479,-.3669,-.9184,-.1482,-.9252,-.3473,-.1531,-.9252,-.3473,-.1531,-.3678,-.2926,.8827,-.3678,-.2926,.8827,.3063,-.3214,.896,.8882,-.304,.3444,.9392,-.3421,-.0278,.3758,.8994,-.2233,.414,.6287,-.6583,.3929,-.3504,-.8502,.3929,-.3504,-.8502,-.4828,-.3422,-.8061,-.4923,.5808,-.6483,-.4834,-.8754,-.0077,.3931,.8474,.3567
                    ,.1952,.9794,-.0513,.9392,-.3421,-.0278,.9188,-.3108,-.2432,-.4834,-.8754,-.0077,-.9688,-.2478,-.0072,-.4864,.7849,.3838,-.4724,.8801,-.0479,.7933,.5062,.3383
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .8028,.5625,.9831,.631,.8066,.631,.6682,.399,.7692,.1876,.7692,.4,.8453,.2342,.9783,.4525,.8018,.4525,.4154,.3902,.4783,.615,.3756,.6061,.6532,.9497,.7511,.7761,.7511,.959,.0732,.5385,.08,.6921,.0435,.5397,.5173,.0799,.5468,.1871,.5015,.1865,.0685,.1049,.0151,.1061,.0766,.019,.5468,.6209
                    ,.4877,.6575,.2466,.5385,.332,.5397,.2534,.6921,.6215,.1806,.6566,.0761,.6726,.1861,.2518,.1049,.2598,.019,.3397,.1061,.598,.7878,.6317,.7319,.6532,.7973,.37,.3786,.417,.1744,.417,.1744,.4361,.019,.5196,.4001,.4899,.4007,.3838,.6846,.4877,.6575,.2598,.019,.5771,.981,.3359,.3229,.2492,.3217
                    ,.6215,.1806,.5771,.384,.6566,.0761,.08,.6921,.0709,.3217,.0709,.3217,.6097,.6061,.6638,.6119,.332,.5397,.5468,.1871,.0495,.3234,.0151,.1061,.417,.1744,.9849,.019,.7995,.0246,.6638,.6119,.7692,.6124,.9794,.5625,.9829,.2422,.389,.1644,.417,.1744,.417,.1744,.3838,.6846,.0766,.019,.2598,.019
                    ,.7137,.6503,.3359,.3229,.6215,.1806,.6566,.0761,.7343,.019,.2534,.6921,.08,.6921,.9794,.5625,.0709,.3217,.6097,.6061,.5771,.384,.3359,.3229,.332,.5397,.0709,.3217,.0495,.3234,.9849,.019,.9829,.2422,.6638,.6119
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 93, 0, 180, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Stone_medium.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(32);
        };
        return Stone_medium;
    })(BABYLON.Mesh);
    map01.Stone_medium = Stone_medium;

    var Grass_small = (function (_super) {
        __extends(Grass_small, _super);
        function Grass_small(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -12.1213;
            this.position.y  = .9399;
            this.position.z  = 21.3338;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 3.8542;
            this.scaling.y   = 3.8542;
            this.scaling.z   = 3.8542;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                geo = _B.Tools.Now;
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .4342,-.3714,-.0837,-.3086,.3714,-.0837,-.3086,-.3714,-.0837,.2014,-.3164,-.2173,-.4314,.3164,-.2173,-.4314,-.3164,-.2173,.5,-.5,0,-.5,.5,0,-.5,-.5,0,.4342,.3714,-.0837,.2014,.3164,-.2173,.5,.5,0
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,0,9,1,3,10,4,6,11,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Grass_small");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 18, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            load = (_B.Tools.Now - load) / 1000;
            _B.Tools.Log("defined mesh: " + this.name + (cloning ? " (cloned)" : "") + " completed:  " + load.toFixed(2) + ", geometry:  " + geo.toFixed(2) + ", skey:  " + shape.toFixed(2) + " secs");
            if (matLoaded){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Grass_small.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(33);
        };
        return Grass_small;
    })(BABYLON.Mesh);
    map01.Grass_small = Grass_small;

    function defineLights(scene, positionOffset) {
        if (!positionOffset) { positionOffset = null; }
        var light;

        light = new _B.DirectionalLight("Point", new _B.Vector3(0,-.7115,.7027), scene);
        light.position = new _B.Vector3(-1.7424,20.9863,3.9788);
        if (positionOffset) light.position.addInPlace(positionOffset);
        light.intensity = 2;
        light.diffuse = new _B.Color3(1,1,1);
        light.specular = new _B.Color3(1,1,1);
    }
    map01.defineLights = defineLights;

    function freshenShadowRenderLists(scene) {
        var renderList = [];
        for (var i = 0; i < scene.meshes.length; i++){
            if (scene.meshes[i]["castShadows"])
                renderList.push(scene.meshes[i]);
        }

        for (var i = 0; i < scene.lights.length; i++){
            if (scene.lights[i]._shadowGenerator)
                scene.lights[i]._shadowGenerator.getShadowMap().renderList = renderList;
        }
    }
    map01.freshenShadowRenderLists = freshenShadowRenderLists;
})(map01 || (map01 = {}));