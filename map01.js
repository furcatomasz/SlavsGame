// File generated with Tower of Babel version: 5.3-beta on 06/08/17
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
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.003", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.002", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.071", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.070", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.069", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.068", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.067", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.066", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.065", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.064", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.063", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.062", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.061", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.060", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.059", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.058", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.057", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.056", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.055", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.054", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.053", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.052", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.051", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.050", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.049", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.048", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.047", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.046", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.045", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.044", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.043", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.042", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.041", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.040", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.039", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.038", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.037", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.036", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.035", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.034", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.033", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.032", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.031", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.030", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.029", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.028", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.027", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.026", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.025", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.024", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.023", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.022", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.021", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.020", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.019", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.018", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.017", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.016", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.015", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.014", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.013", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.012", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.011", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.010", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.009", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.008", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.007", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.006", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.005", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.003", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.002", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Circle", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Cube.001", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Cube", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Plane", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "body.002", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "body", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "pants", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "tshirt", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "beard", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "belt", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "belt1", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "eyebrows", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "face", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "hair", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "nose", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Cylinder", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "Sphere", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("map01", "choinka", true);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
        } else {
            mesh = new choinka_003("choinka.003", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_002("choinka.002", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka_001("choinka.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_071("Circle.071", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_070("Circle.070", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_069("Circle.069", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_068("Circle.068", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_067("Circle.067", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_066("Circle.066", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_065("Circle.065", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_064("Circle.064", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_063("Circle.063", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_062("Circle.062", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_061("Circle.061", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_060("Circle.060", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_059("Circle.059", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_058("Circle.058", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_057("Circle.057", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_056("Circle.056", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_055("Circle.055", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_054("Circle.054", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_053("Circle.053", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_052("Circle.052", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_051("Circle.051", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_050("Circle.050", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_049("Circle.049", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_048("Circle.048", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_047("Circle.047", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_046("Circle.046", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_045("Circle.045", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_044("Circle.044", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_043("Circle.043", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_042("Circle.042", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_041("Circle.041", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_040("Circle.040", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_039("Circle.039", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_038("Circle.038", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_037("Circle.037", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_036("Circle.036", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_035("Circle.035", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_034("Circle.034", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_033("Circle.033", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_032("Circle.032", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_031("Circle.031", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_030("Circle.030", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_029("Circle.029", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_028("Circle.028", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_027("Circle.027", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_026("Circle.026", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_025("Circle.025", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_024("Circle.024", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_023("Circle.023", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_022("Circle.022", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_021("Circle.021", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_020("Circle.020", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_019("Circle.019", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_018("Circle.018", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_017("Circle.017", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_016("Circle.016", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_015("Circle.015", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_014("Circle.014", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_013("Circle.013", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_012("Circle.012", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_011("Circle.011", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_010("Circle.010", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_009("Circle.009", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_008("Circle.008", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_007("Circle.007", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_006("Circle.006", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_005("Circle.005", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_003("Circle.003", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_002("Circle.002", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle_001("Circle.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Circle("Circle", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Cube_001("Cube.001", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Cube("Cube", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Plane("Plane", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new body_002("body.002", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new body("body", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new pants("pants", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new tshirt("tshirt", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new beard("beard", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new belt("belt", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new belt1("belt1", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new eyebrows("eyebrows", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new face("face", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new hair("hair", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new nose("nose", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Cylinder("Cylinder", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new Sphere("Sphere", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
            mesh = new choinka("choinka", scene);
            if (positionOffset) mesh.position.addInPlace(positionOffset);
        }

        // lights defined after meshes, so shadow gen's can also be defined
        defineLights(scene, positionOffset);
    }
    map01.initScene = initScene;
    var meshLib = new Array(91);
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
                case "choinka.003":
                    src = getViable(0);
                    if (src === null){
                        ret = new choinka_003("choinka.003", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[0].push(ret);
                    }else{
                        ret = new choinka_003("choinka.003" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.002":
                    src = getViable(1);
                    if (src === null){
                        ret = new choinka_002("choinka.002", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[1].push(ret);
                    }else{
                        ret = new choinka_002("choinka.002" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka.001":
                    src = getViable(2);
                    if (src === null){
                        ret = new choinka_001("choinka.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[2].push(ret);
                    }else{
                        ret = new choinka_001("choinka.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.071":
                    src = getViable(3);
                    if (src === null){
                        ret = new Circle_071("Circle.071", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[3].push(ret);
                    }else{
                        ret = new Circle_071("Circle.071" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.070":
                    src = getViable(4);
                    if (src === null){
                        ret = new Circle_070("Circle.070", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[4].push(ret);
                    }else{
                        ret = new Circle_070("Circle.070" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.069":
                    src = getViable(5);
                    if (src === null){
                        ret = new Circle_069("Circle.069", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[5].push(ret);
                    }else{
                        ret = new Circle_069("Circle.069" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.068":
                    src = getViable(6);
                    if (src === null){
                        ret = new Circle_068("Circle.068", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[6].push(ret);
                    }else{
                        ret = new Circle_068("Circle.068" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.067":
                    src = getViable(7);
                    if (src === null){
                        ret = new Circle_067("Circle.067", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[7].push(ret);
                    }else{
                        ret = new Circle_067("Circle.067" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.066":
                    src = getViable(8);
                    if (src === null){
                        ret = new Circle_066("Circle.066", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[8].push(ret);
                    }else{
                        ret = new Circle_066("Circle.066" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.065":
                    src = getViable(9);
                    if (src === null){
                        ret = new Circle_065("Circle.065", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[9].push(ret);
                    }else{
                        ret = new Circle_065("Circle.065" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.064":
                    src = getViable(10);
                    if (src === null){
                        ret = new Circle_064("Circle.064", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[10].push(ret);
                    }else{
                        ret = new Circle_064("Circle.064" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.063":
                    src = getViable(11);
                    if (src === null){
                        ret = new Circle_063("Circle.063", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[11].push(ret);
                    }else{
                        ret = new Circle_063("Circle.063" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.062":
                    src = getViable(12);
                    if (src === null){
                        ret = new Circle_062("Circle.062", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[12].push(ret);
                    }else{
                        ret = new Circle_062("Circle.062" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.061":
                    src = getViable(13);
                    if (src === null){
                        ret = new Circle_061("Circle.061", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[13].push(ret);
                    }else{
                        ret = new Circle_061("Circle.061" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.060":
                    src = getViable(14);
                    if (src === null){
                        ret = new Circle_060("Circle.060", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[14].push(ret);
                    }else{
                        ret = new Circle_060("Circle.060" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.059":
                    src = getViable(15);
                    if (src === null){
                        ret = new Circle_059("Circle.059", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[15].push(ret);
                    }else{
                        ret = new Circle_059("Circle.059" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.058":
                    src = getViable(16);
                    if (src === null){
                        ret = new Circle_058("Circle.058", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[16].push(ret);
                    }else{
                        ret = new Circle_058("Circle.058" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.057":
                    src = getViable(17);
                    if (src === null){
                        ret = new Circle_057("Circle.057", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[17].push(ret);
                    }else{
                        ret = new Circle_057("Circle.057" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.056":
                    src = getViable(18);
                    if (src === null){
                        ret = new Circle_056("Circle.056", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[18].push(ret);
                    }else{
                        ret = new Circle_056("Circle.056" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.055":
                    src = getViable(19);
                    if (src === null){
                        ret = new Circle_055("Circle.055", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[19].push(ret);
                    }else{
                        ret = new Circle_055("Circle.055" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.054":
                    src = getViable(20);
                    if (src === null){
                        ret = new Circle_054("Circle.054", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[20].push(ret);
                    }else{
                        ret = new Circle_054("Circle.054" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.053":
                    src = getViable(21);
                    if (src === null){
                        ret = new Circle_053("Circle.053", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[21].push(ret);
                    }else{
                        ret = new Circle_053("Circle.053" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.052":
                    src = getViable(22);
                    if (src === null){
                        ret = new Circle_052("Circle.052", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[22].push(ret);
                    }else{
                        ret = new Circle_052("Circle.052" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.051":
                    src = getViable(23);
                    if (src === null){
                        ret = new Circle_051("Circle.051", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[23].push(ret);
                    }else{
                        ret = new Circle_051("Circle.051" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.050":
                    src = getViable(24);
                    if (src === null){
                        ret = new Circle_050("Circle.050", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[24].push(ret);
                    }else{
                        ret = new Circle_050("Circle.050" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.049":
                    src = getViable(25);
                    if (src === null){
                        ret = new Circle_049("Circle.049", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[25].push(ret);
                    }else{
                        ret = new Circle_049("Circle.049" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.048":
                    src = getViable(26);
                    if (src === null){
                        ret = new Circle_048("Circle.048", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[26].push(ret);
                    }else{
                        ret = new Circle_048("Circle.048" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.047":
                    src = getViable(27);
                    if (src === null){
                        ret = new Circle_047("Circle.047", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[27].push(ret);
                    }else{
                        ret = new Circle_047("Circle.047" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.046":
                    src = getViable(28);
                    if (src === null){
                        ret = new Circle_046("Circle.046", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[28].push(ret);
                    }else{
                        ret = new Circle_046("Circle.046" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.045":
                    src = getViable(29);
                    if (src === null){
                        ret = new Circle_045("Circle.045", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[29].push(ret);
                    }else{
                        ret = new Circle_045("Circle.045" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.044":
                    src = getViable(30);
                    if (src === null){
                        ret = new Circle_044("Circle.044", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[30].push(ret);
                    }else{
                        ret = new Circle_044("Circle.044" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.043":
                    src = getViable(31);
                    if (src === null){
                        ret = new Circle_043("Circle.043", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[31].push(ret);
                    }else{
                        ret = new Circle_043("Circle.043" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.042":
                    src = getViable(32);
                    if (src === null){
                        ret = new Circle_042("Circle.042", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[32].push(ret);
                    }else{
                        ret = new Circle_042("Circle.042" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.041":
                    src = getViable(33);
                    if (src === null){
                        ret = new Circle_041("Circle.041", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[33].push(ret);
                    }else{
                        ret = new Circle_041("Circle.041" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.040":
                    src = getViable(34);
                    if (src === null){
                        ret = new Circle_040("Circle.040", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[34].push(ret);
                    }else{
                        ret = new Circle_040("Circle.040" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.039":
                    src = getViable(35);
                    if (src === null){
                        ret = new Circle_039("Circle.039", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[35].push(ret);
                    }else{
                        ret = new Circle_039("Circle.039" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.038":
                    src = getViable(36);
                    if (src === null){
                        ret = new Circle_038("Circle.038", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[36].push(ret);
                    }else{
                        ret = new Circle_038("Circle.038" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.037":
                    src = getViable(37);
                    if (src === null){
                        ret = new Circle_037("Circle.037", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[37].push(ret);
                    }else{
                        ret = new Circle_037("Circle.037" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.036":
                    src = getViable(38);
                    if (src === null){
                        ret = new Circle_036("Circle.036", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[38].push(ret);
                    }else{
                        ret = new Circle_036("Circle.036" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.035":
                    src = getViable(39);
                    if (src === null){
                        ret = new Circle_035("Circle.035", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[39].push(ret);
                    }else{
                        ret = new Circle_035("Circle.035" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.034":
                    src = getViable(40);
                    if (src === null){
                        ret = new Circle_034("Circle.034", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[40].push(ret);
                    }else{
                        ret = new Circle_034("Circle.034" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.033":
                    src = getViable(41);
                    if (src === null){
                        ret = new Circle_033("Circle.033", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[41].push(ret);
                    }else{
                        ret = new Circle_033("Circle.033" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.032":
                    src = getViable(42);
                    if (src === null){
                        ret = new Circle_032("Circle.032", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[42].push(ret);
                    }else{
                        ret = new Circle_032("Circle.032" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.031":
                    src = getViable(43);
                    if (src === null){
                        ret = new Circle_031("Circle.031", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[43].push(ret);
                    }else{
                        ret = new Circle_031("Circle.031" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.030":
                    src = getViable(44);
                    if (src === null){
                        ret = new Circle_030("Circle.030", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[44].push(ret);
                    }else{
                        ret = new Circle_030("Circle.030" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.029":
                    src = getViable(45);
                    if (src === null){
                        ret = new Circle_029("Circle.029", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[45].push(ret);
                    }else{
                        ret = new Circle_029("Circle.029" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.028":
                    src = getViable(46);
                    if (src === null){
                        ret = new Circle_028("Circle.028", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[46].push(ret);
                    }else{
                        ret = new Circle_028("Circle.028" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.027":
                    src = getViable(47);
                    if (src === null){
                        ret = new Circle_027("Circle.027", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[47].push(ret);
                    }else{
                        ret = new Circle_027("Circle.027" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.026":
                    src = getViable(48);
                    if (src === null){
                        ret = new Circle_026("Circle.026", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[48].push(ret);
                    }else{
                        ret = new Circle_026("Circle.026" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.025":
                    src = getViable(49);
                    if (src === null){
                        ret = new Circle_025("Circle.025", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[49].push(ret);
                    }else{
                        ret = new Circle_025("Circle.025" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.024":
                    src = getViable(50);
                    if (src === null){
                        ret = new Circle_024("Circle.024", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[50].push(ret);
                    }else{
                        ret = new Circle_024("Circle.024" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.023":
                    src = getViable(51);
                    if (src === null){
                        ret = new Circle_023("Circle.023", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[51].push(ret);
                    }else{
                        ret = new Circle_023("Circle.023" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.022":
                    src = getViable(52);
                    if (src === null){
                        ret = new Circle_022("Circle.022", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[52].push(ret);
                    }else{
                        ret = new Circle_022("Circle.022" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.021":
                    src = getViable(53);
                    if (src === null){
                        ret = new Circle_021("Circle.021", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[53].push(ret);
                    }else{
                        ret = new Circle_021("Circle.021" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.020":
                    src = getViable(54);
                    if (src === null){
                        ret = new Circle_020("Circle.020", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[54].push(ret);
                    }else{
                        ret = new Circle_020("Circle.020" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.019":
                    src = getViable(55);
                    if (src === null){
                        ret = new Circle_019("Circle.019", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[55].push(ret);
                    }else{
                        ret = new Circle_019("Circle.019" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.018":
                    src = getViable(56);
                    if (src === null){
                        ret = new Circle_018("Circle.018", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[56].push(ret);
                    }else{
                        ret = new Circle_018("Circle.018" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.017":
                    src = getViable(57);
                    if (src === null){
                        ret = new Circle_017("Circle.017", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[57].push(ret);
                    }else{
                        ret = new Circle_017("Circle.017" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.016":
                    src = getViable(58);
                    if (src === null){
                        ret = new Circle_016("Circle.016", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[58].push(ret);
                    }else{
                        ret = new Circle_016("Circle.016" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.015":
                    src = getViable(59);
                    if (src === null){
                        ret = new Circle_015("Circle.015", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[59].push(ret);
                    }else{
                        ret = new Circle_015("Circle.015" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.014":
                    src = getViable(60);
                    if (src === null){
                        ret = new Circle_014("Circle.014", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[60].push(ret);
                    }else{
                        ret = new Circle_014("Circle.014" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.013":
                    src = getViable(61);
                    if (src === null){
                        ret = new Circle_013("Circle.013", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[61].push(ret);
                    }else{
                        ret = new Circle_013("Circle.013" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.012":
                    src = getViable(62);
                    if (src === null){
                        ret = new Circle_012("Circle.012", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[62].push(ret);
                    }else{
                        ret = new Circle_012("Circle.012" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.011":
                    src = getViable(63);
                    if (src === null){
                        ret = new Circle_011("Circle.011", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[63].push(ret);
                    }else{
                        ret = new Circle_011("Circle.011" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.010":
                    src = getViable(64);
                    if (src === null){
                        ret = new Circle_010("Circle.010", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[64].push(ret);
                    }else{
                        ret = new Circle_010("Circle.010" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.009":
                    src = getViable(65);
                    if (src === null){
                        ret = new Circle_009("Circle.009", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[65].push(ret);
                    }else{
                        ret = new Circle_009("Circle.009" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.008":
                    src = getViable(66);
                    if (src === null){
                        ret = new Circle_008("Circle.008", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[66].push(ret);
                    }else{
                        ret = new Circle_008("Circle.008" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.007":
                    src = getViable(67);
                    if (src === null){
                        ret = new Circle_007("Circle.007", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[67].push(ret);
                    }else{
                        ret = new Circle_007("Circle.007" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.006":
                    src = getViable(68);
                    if (src === null){
                        ret = new Circle_006("Circle.006", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[68].push(ret);
                    }else{
                        ret = new Circle_006("Circle.006" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.005":
                    src = getViable(69);
                    if (src === null){
                        ret = new Circle_005("Circle.005", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[69].push(ret);
                    }else{
                        ret = new Circle_005("Circle.005" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.003":
                    src = getViable(70);
                    if (src === null){
                        ret = new Circle_003("Circle.003", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[70].push(ret);
                    }else{
                        ret = new Circle_003("Circle.003" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.002":
                    src = getViable(71);
                    if (src === null){
                        ret = new Circle_002("Circle.002", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[71].push(ret);
                    }else{
                        ret = new Circle_002("Circle.002" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle.001":
                    src = getViable(72);
                    if (src === null){
                        ret = new Circle_001("Circle.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[72].push(ret);
                    }else{
                        ret = new Circle_001("Circle.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Circle":
                    src = getViable(73);
                    if (src === null){
                        ret = new Circle("Circle", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[73].push(ret);
                    }else{
                        ret = new Circle("Circle" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Cube.001":
                    src = getViable(74);
                    if (src === null){
                        ret = new Cube_001("Cube.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[74].push(ret);
                    }else{
                        ret = new Cube_001("Cube.001" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Cube":
                    src = getViable(75);
                    if (src === null){
                        ret = new Cube("Cube", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[75].push(ret);
                    }else{
                        ret = new Cube("Cube" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Plane":
                    src = getViable(76);
                    if (src === null){
                        ret = new Plane("Plane", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[76].push(ret);
                    }else{
                        ret = new Plane("Plane" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "body.002":
                    src = getViable(77);
                    if (src === null){
                        ret = new body_002("body.002", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[77].push(ret);
                    }else{
                        ret = new body_002("body.002" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "body":
                    src = getViable(78);
                    if (src === null){
                        ret = new body("body", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[78].push(ret);
                    }else{
                        ret = new body("body" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "pants":
                    src = getViable(79);
                    if (src === null){
                        ret = new pants("pants", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[79].push(ret);
                    }else{
                        ret = new pants("pants" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "tshirt":
                    src = getViable(80);
                    if (src === null){
                        ret = new tshirt("tshirt", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[80].push(ret);
                    }else{
                        ret = new tshirt("tshirt" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "beard":
                    src = getViable(81);
                    if (src === null){
                        ret = new beard("beard", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[81].push(ret);
                    }else{
                        ret = new beard("beard" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "belt":
                    src = getViable(82);
                    if (src === null){
                        ret = new belt("belt", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[82].push(ret);
                    }else{
                        ret = new belt("belt" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "belt1":
                    src = getViable(83);
                    if (src === null){
                        ret = new belt1("belt1", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[83].push(ret);
                    }else{
                        ret = new belt1("belt1" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "eyebrows":
                    src = getViable(84);
                    if (src === null){
                        ret = new eyebrows("eyebrows", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[84].push(ret);
                    }else{
                        ret = new eyebrows("eyebrows" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "face":
                    src = getViable(85);
                    if (src === null){
                        ret = new face("face", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[85].push(ret);
                    }else{
                        ret = new face("face" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "hair":
                    src = getViable(86);
                    if (src === null){
                        ret = new hair("hair", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[86].push(ret);
                    }else{
                        ret = new hair("hair" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "nose":
                    src = getViable(87);
                    if (src === null){
                        ret = new nose("nose", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[87].push(ret);
                    }else{
                        ret = new nose("nose" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Cylinder":
                    src = getViable(88);
                    if (src === null){
                        ret = new Cylinder("Cylinder", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[88].push(ret);
                    }else{
                        ret = new Cylinder("Cylinder" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Sphere":
                    src = getViable(89);
                    if (src === null){
                        ret = new Sphere("Sphere", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[89].push(ret);
                    }else{
                        ret = new Sphere("Sphere" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "choinka":
                    src = getViable(90);
                    if (src === null){
                        ret = new choinka("choinka", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[90].push(ret);
                    }else{
                        ret = new choinka("choinka" + "_" + cloneCount++, this._scene, null, src);
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

        fName = "korona1.png";
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

        fName = "korona1.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = .0386;
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

        fName = "ground.png";
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

        fName = "korona.png";
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

        fName = "korona.png";
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

        fName = "korona.png";
        if (!TOWER_OF_BABEL.Preloader.findTextureBuffer(fName)) {
            txtBuffer = new TOWER_OF_BABEL.TextureBuffer(materialsRootDir, fName);
            txtBuffer.hasAlpha = true;
            txtBuffer.level = .5325;
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


        material = scene.getMaterialByID("map01.korona2.002");
        if (!material){
            material = new _B.StandardMaterial("map01.korona2.002", scene);
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

        material = scene.getMaterialByID("map01.Material.002");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.002", scene);
            material.ambientColor  = new _B.Color3(1,1,1);
            material.diffuseColor  = new _B.Color3(.8,.8,.8);
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

        material = scene.getMaterialByID("map01.korona2");
        if (!material){
            material = new _B.StandardMaterial("map01.korona2", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.4126,.4126,.4126);
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

        material = scene.getMaterialByID("map01.choinka");
        if (!material){
            material = new _B.StandardMaterial("map01.choinka", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.0667,.0667,.0667);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona1.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona1.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.EMISSIVE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.000");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.000", scene);
            material.ambientColor  = new _B.Color3(.2141,.0941,.0232);
            material.diffuseColor  = new _B.Color3(.2141,.0941,.0232);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.007");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.007", scene);
            material.ambientColor  = new _B.Color3(.0204,.0078,.0038);
            material.diffuseColor  = new _B.Color3(.0204,.0078,.0038);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.001");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.001", scene);
            material.ambientColor  = new _B.Color3(.1523,.0818,.0038);
            material.diffuseColor  = new _B.Color3(.1219,.0654,.003);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.ground");
        if (!material){
            material = new _B.StandardMaterial("map01.ground", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.5305,.5305,.5305);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("ground.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.004");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.004", scene);
            material.ambientColor  = new _B.Color3(.0291,.0129,.0055);
            material.diffuseColor  = new _B.Color3(.0233,.0103,.0044);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.skin.002");
        if (!material){
            material = new _B.StandardMaterial("map01.skin.002", scene);
            material.ambientColor  = new _B.Color3(.8007,.5622,.4194);
            material.diffuseColor  = new _B.Color3(.8007,.5622,.4194);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.005");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.005", scene);
            material.ambientColor  = new _B.Color3(.1424,.0634,.0231);
            material.diffuseColor  = new _B.Color3(.1139,.0507,.0185);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.tshirt");
        if (!material){
            material = new _B.StandardMaterial("map01.tshirt", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.8,.8,.8);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.hair.001");
        if (!material){
            material = new _B.StandardMaterial("map01.hair.001", scene);
            material.ambientColor  = new _B.Color3(.0237,.0237,.0237);
            material.diffuseColor  = new _B.Color3(.0237,.0237,.0237);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.003");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.003", scene);
            material.ambientColor  = new _B.Color3(.1237,.1237,.1237);
            material.diffuseColor  = new _B.Color3(.1237,.1237,.1237);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.009");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.009", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.2947,.2947,.2947);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("map01.Material.010");
        if (!material){
            material = new _B.StandardMaterial("map01.Material.010", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.1917,.1917,.1917);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = false;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("korona.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.EMISSIVE_TEX, onTexturesLoaded);
        } else material.markDirty();
        var multiMaterial;
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#0", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2.002"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.002"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#1", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.002"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#2", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2.002"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.002"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#3", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#4", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#5", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#6", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#7", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#8", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#9", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#10", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#11", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#12", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#13", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#14", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#15", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#16", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#17", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#18", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#19", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#20", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#21", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#22", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#23", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#24", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#25", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#26", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#27", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#28", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#29", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#30", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#31", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#32", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#33", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#34", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#35", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#36", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#37", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#38", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#39", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#40", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#41", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#42", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#43", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#44", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#45", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#46", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#47", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#48", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#49", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#50", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#51", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#52", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#53", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#54", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#55", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#56", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#57", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#58", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#59", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#60", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#61", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#62", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#63", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#64", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#65", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#66", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#67", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#68", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#69", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#70", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#71", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#72", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.choinka"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#73", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.009"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#74", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.010"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.000"));
        multiMaterial = new _B.MultiMaterial("map01.Multimaterial#75", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.korona2.002"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("map01.Material.002"));
        if (pendingTextures === 0) matLoaded = true;
        else texLoadStart = _B.Tools.Now;
        _B.Tools.Log("map01.defineMaterials completed:  " + ((_B.Tools.Now - loadStart) / 1000).toFixed(2) + " secs");
    }
    map01.defineMaterials = defineMaterials;

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
            this.position.x  = -9.2691;
            this.position.y  = 1.6456;
            this.position.z  = 19.6525;
            this.rotation.x  = -1.6562;
            this.rotation.y  = -2.1157;
            this.rotation.z  = 0;
            this.scaling.x   = 7.393;
            this.scaling.y   = 7.393;
            this.scaling.z   = 7.393;

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
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.4217,0,.0883,.3832,.0499,.0456,.4217,.0456,0,.7111,.0575,.0456,.4217,.0456,0,.4217,.0644,.0644,.4217,0,.0504,.3471,-.0504,.0713,.3471,0,.0406,.7111,.0406,.0644,.4217,0,.0456,.4217,.0456,0,.3471,-.0575,.0427,.3459,-.0693,.0188,.3459,-.0792
                    ,.0575,.7111,0,.0456,.4217,-.0456,.0644,.4217,0,-.0456,.4217,-.0456,-.0859,.3862,-.1032,0,.4217,-.0644,.0406,.7111,-.0406,0,.4217,-.0644,-.0406,.3471,-.0406,-.1034,.3496,-.0674,-.0713,.3471,0,0,.7111,-.0575,-.0456,.4217,-.0456,0,.4217,-.0644,-.0713,.3471,0,-.0456,.4217,.0456,-.0504,.3471,.0504
                    ,-.0456,.4217,-.0456,-.0575,.7111,0,-.0644,.4217,0,-.0575,.7111,0,0,.7111,-.0575,.0575,.7111,0,-.0504,.3471,.0504,-.0604,.3676,.147,0,.3471,.0575,.0988,.3832,.0245,.0644,.4217,0,-.0406,.7111,.0406,-.0456,.4217,.0456,.0406,.3471,.0406,.0427,.3898,-.0693,.0439,.3828,-.1275,.0615,.3828,-.127
                    ,.0504,.3471,-.0504,.0427,.3898,-.0693,.0427,.3459,-.0693,0,.4217,-.0644,.0427,.3898,-.0693,0,.3471,-.0575,.0188,.3898,-.0792,0,.4217,-.0644,.0439,.3529,-.1275,.0537,.3551,-.2666,.0439,.3828,-.1275,.0188,.3459,-.0792,.0439,.3828,-.1275,.0427,.3898,-.0693,.0615,.3529,-.127,.0427,.3459,-.0693,.0439,.3529,-.1275
                    ,.0595,.3551,-.2664,.0537,.3453,-.2666,.0595,.3453,-.2664,.0595,.3551,-.2664,.0595,.3453,-.2664,.0439,.3529,-.1275,.0595,.3453,-.2664,.0537,.3453,-.2666,.0537,.3551,-.2666,.0595,.3551,-.2664,-.1021,.3496,-.0889,-.1647,.3484,-.1199,-.1759,.3484,-.1176,-.1823,.3484,-.108,-.1034,.3862,-.0674,-.1021,.3862,-.0889,-.0713,.3471,0
                    ,-.1034,.3862,-.0674,-.0644,.4217,0,-.0859,.3496,-.1032,0,.3471,-.0575,-.0859,.3862,-.1032,-.0859,.3496,-.1032,-.1759,.3679,-.1176,-.2674,.3525,-.2488,-.2661,.3525,-.2507,-.1823,.3484,-.108,-.2674,.3525,-.2488,-.1823,.3679,-.108,-.0859,.3496,-.1032,-.1647,.3679,-.1199,-.1647,.3484,-.1199,-.1034,.3496,-.0674,-.1034,.3862,-.0674
                    ,-.1823,.3679,-.108,-.1647,.3679,-.1199,-.2638,.3525,-.2512,-.2661,.3486,-.2507,-.2638,.3486,-.2512,-.2661,.3525,-.2507,-.2674,.3486,-.2488,-.2661,.3486,-.2507,-.2638,.3525,-.2512,-.1647,.3679,-.1199,-.2674,.3486,-.2488,-.2638,.3486,-.2512,-.2661,.3486,-.2507,-.1647,.3484,-.1199,-.0786,.3676,.1329,-.114,.3658,.2109,-.114,.3416,.2109
                    ,-.0786,.4068,.1329,0,.4217,.0644,-.0604,.3676,.147,-.0604,.4068,.147,0,.4217,.0644,-.0786,.4068,.1329,-.0456,.4217,.0456,-.114,.3416,.2109,-.12,.3461,.2948,-.0999,.3416,.2133,-.0786,.4068,.1329,-.0999,.3658,.2133,-.114,.3658,.2109,-.0786,.3676,.1329,-.0604,.3676,.147,-.0999,.3658,.2133,-.1227,.3508,.2943
                    ,-.12,.3461,.2948,-.1227,.3461,.2943,-.0999,.3416,.2133,-.12,.3508,.2948,-.0999,.3658,.2133,-.1227,.3508,.2943,-.1227,.3461,.2943,-.1227,.3508,.2943,-.114,.3658,.2109,.0883,.3366,.0499,.1152,.3434,.0834,.1297,.3434,.0703,.1308,.3434,.0508,.0988,.3366,.0245,0,.3471,.0575,.063,.3832,.0604,.063,.3366,.0604
                    ,.063,.3366,.0604,.0456,.4217,.0456,.0713,.3471,0,.1152,.3434,.0834,.2343,.3444,.0865,.2343,.3374,.0865,.1297,.3765,.0703,.2376,.3444,.0797,.2374,.3444,.0837,.1152,.3765,.0834,.063,.3832,.0604,.0988,.3366,.0245,.1308,.3765,.0508,.1308,.3765,.0508,.1152,.3434,.0834,.2374,.3444,.0837,.2376,.3374,.0797
                    ,.2374,.3374,.0837,.2343,.3444,.0865,.2343,.3374,.0865,.2376,.3374,.0797,.2343,.3374,.0865,.2374,.3374,.0837,.2343,.3444,.0865,.1308,.3434,.0508,.2376,.3444,.0797,.0988,.3832,.0245,.0406,.7111,.0406,.0456,.4217,.0456,.0644,.4217,0,.0575,.7111,0,.0644,.4217,0,.0504,.3471,-.0504,0,.7111,-.0575
                    ,0,.4217,-.0644,-.0406,.7111,-.0406,-.0456,.4217,-.0456,-.0713,.3471,0,-.0456,.4217,-.0456,.0575,.7111,0,.0406,.7111,.0406,0,.7111,.0575,0,.7111,.0575,-.0406,.7111,.0406,-.0575,.7111,0,-.0575,.7111,0,-.0406,.7111,-.0406,0,.7111,-.0575,0,.7111,-.0575,.0406,.7111,-.0406,.0575,.7111,0
                    ,.0575,.7111,0,0,.7111,.0575,-.0575,.7111,0,-.0504,.3471,.0504,-.0786,.3676,.1329,-.0406,.7111,.0406,.0988,.3366,.0245,-.0504,.3471,.0504,.0713,.3471,0,.0504,.3471,-.0504,.0504,.3471,-.0504,-.0504,.3471,.0504,.0188,.3898,-.0792,.0504,.3471,-.0504,.0456,.4217,-.0456,.0427,.3898,-.0693,0,.4217,-.0644
                    ,.0188,.3898,-.0792,.0427,.3898,-.0693,0,.3471,-.0575,.0188,.3459,-.0792,.0537,.3453,-.2666,.0188,.3459,-.0792,.0439,.3828,-.1275,.0427,.3898,-.0693,.0615,.3828,-.127,.0615,.3529,-.127,.0439,.3529,-.1275,.0537,.3551,-.2666,.0615,.3828,-.127,.0595,.3551,-.2664,.0439,.3529,-.1275,.0615,.3529,-.127,.0595,.3453,-.2664
                    ,.0537,.3551,-.2666,-.0644,.4217,0,-.0713,.3471,0,-.1034,.3496,-.0674,-.1034,.3862,-.0674,0,.3471,-.0575,0,.4217,-.0644,-.0859,.3862,-.1032,-.1823,.3679,-.108,-.1823,.3484,-.108,-.2674,.3486,-.2488,-.2674,.3525,-.2488,-.0859,.3496,-.1032,-.0859,.3862,-.1032,-.1034,.3496,-.0674,-.1823,.3484,-.108,-.1823,.3679,-.108
                    ,-.1647,.3679,-.1199,-.2661,.3525,-.2507,-.2661,.3525,-.2507,-.2674,.3525,-.2488,-.2638,.3525,-.2512,-.2661,.3486,-.2507,-.2674,.3486,-.2488,-.2638,.3486,-.2512,-.1647,.3484,-.1199,0,.4217,.0644,0,.3471,.0575,-.0604,.3676,.147,0,.4217,.0644,-.0604,.4068,.147,-.0786,.4068,.1329,-.114,.3416,.2109,-.1227,.3461,.2943
                    ,-.0786,.4068,.1329,-.0604,.4068,.147,-.0786,.3676,.1329,-.114,.3416,.2109,-.0604,.3676,.147,-.0999,.3416,.2133,-.0999,.3658,.2133,-.12,.3508,.2948,-.12,.3461,.2948,-.0999,.3416,.2133,-.12,.3461,.2948,-.1227,.3508,.2943,-.12,.3508,.2948,-.1227,.3508,.2943,.063,.3366,.0604,0,.3471,.0575,.063,.3366,.0604
                    ,.0456,.4217,.0456,.0883,.3832,.0499,.0713,.3471,0,.1152,.3434,.0834,.1152,.3765,.0834,.1308,.3765,.0508,.0988,.3366,.0245,.1308,.3434,.0508,.0988,.3832,.0245,.1308,.3765,.0508,.1152,.3765,.0834,.1152,.3434,.0834,.2374,.3444,.0837,.2376,.3444,.0797,.2343,.3444,.0865,.2374,.3444,.0837,.2374,.3374,.0837
                    ,.2376,.3374,.0797,.2343,.3374,.0865,.2343,.3444,.0865,.1308,.3434,.0508,.2376,.3374,.0797,.2376,.3444,.0797
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(588);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 58);
                _i.set([52], 119);
                CONTIG(_i, 120, 59, 76);
                _i.set([69,66,70,44,77,78,79,41,80,48,59,81,82,83,84,85,86,87,88,89,52,90,91,92,93,94,95,96,97,91,98,99,100,49,101,50,102,103,104,99,105,106,107,108,109,84,110,111,112,113
                ,114,112,115,60,54,116,117,118,119,120,59,121,112], 138);
                CONTIG(_i, 201, 122, 134);
                _i.set([130,135,117,136,125,117,137,55,138,139,140,141,142,143,125,144,145,114,146,115,114,147,148,149,138,140,150,151,152,67,153,150], 214);
                CONTIG(_i, 246, 154, 166);
                _i.set([162,75,167,168,156,169,170,171,172,173,174,152,175,176,164,177,178,179,180,181,179,182,183,184,185,186,81,187,179,188,185,41,189,179,183,190,191,192,193,194,195,37,196,197,198,199,77,37,200,193
                ,185,201,186,202,203,204,205,204,206,181,207,182,181,208,209,193,210,196,211,212,199,36,213,37,39,214,215,216,52,43,45,217,218,48,219,49,51,57,52,54,117,55,57,220,221,59,112,60,62,222
                ,223,224,70,66,225,222,69], 259);
                CONTIG(_i, 366, 226, 242);
                _i.set([75,69,243,66,44,244,77,79,39,41,245,76,59,81,246,247,248,48,81,59,61,249,76,81,59,82,250,83,251,252,253,254,255,256,257,258,91,93,259,94,260,93,261,262,263,99,49,264,265,102
                ,266,103,99,267,268,269,270,271,84,83,272,112,121,113,112,114,115,54,273,116,274,275,276,59,48,121,277,278,279,125,280,126,281,282,283,284,285,132,286,287,130,117,116,288,117,125,289,138,290,139
                ,291,292,142,125,127,293,114,294,295,114,113,296,297,132,138,150,153,151,67,66,153,298,299,300,301,302,303,304,305,161,306,307,164,308,309,162,310,311,312,169,313,314,315,316,173,152,151,317,164,318
                ,319,179,320,180,179,181,182,321,41,185,81,76,322,323,324,185,325,81,179,326,327,191,193,328,194,37,193,196,329,330,199,37,331,332,185,333,334,335,336,203,337,338,204,181,339,340,181,180,341,193
                ,195], 383);
                CONTIG(_i, 584, 342, 345);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.9662,.2155,-.1416,.3014,.9177,.2588,.6101,.3539,.7089,0,.6392,.769,.6101,.3539,.7089,.2338,.2617,.9364,.9662,.2155,-.1416,.6847,-.6853,-.2481,.499,-.7212,-.4805,.5437,.6392,.5437,.9662,.2155,-.1416,.6101,.3539,.7089,-.0928,-.886,-.4544,.5923,-.805,-.0349,-.5332,-.7487,-.3938
                    ,.769,.6392,0,.7568,.1592,-.6339,.9662,.2155,-.1416,-.5728,.6019,-.5564,.0981,.5493,-.8298,.053,.23,-.9717,.5437,.6392,-.5437,.053,.23,-.9717,-.0126,-.9998,-.0148,-.4623,-.7775,.4264,-.6606,-.6894,.2973,0,.6392,-.769,-.5728,.6019,-.5564,.053,.23,-.9717,-.6606,-.6894,.2973,-.8509,.3116,.423,-.6093,-.7868,.0983
                    ,-.5728,.6019,-.5564,-.769,.6392,0,-.9687,.1924,.1569,-.769,.6392,0,0,.6392,-.769,.769,.6392,0,-.6093,-.7868,.0983,.6658,-.6399,.3838,.1871,-.8462,.499,.7224,.516,-.4603,.9662,.2155,-.1416,-.5437,.6392,.5437,-.8509,.3116,.423,-.0911,-.9823,-.1635,.8112,.4844,-.3275,-.6011,.7408,-.2997,.7327,.6804,.0126
                    ,.6847,-.6853,-.2481,.8112,.4844,-.3275,.5923,-.805,-.0349,.053,.23,-.9717,.8112,.4844,-.3275,-.0928,-.886,-.4544,-.4493,.4492,-.7722,.053,.23,-.9717,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,-.6011,.7408,-.2997,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7515,-.6521,.1001,.5923,-.805,-.0349,-.6444,-.7328,-.2185
                    ,.5915,.5141,-.6211,-.5451,-.597,-.5886,.5771,-.597,-.5572,.5915,.5141,-.6211,.5771,-.597,-.5572,-.6444,-.7328,-.2185,.5771,-.597,-.5572,-.5451,-.597,-.5886,-.5559,.5141,-.6532,.5915,.5141,-.6211,-.0027,-1,-.0007,.3311,-.801,-.4988,.0037,-1,.0042,-.5141,-.653,.5561,-.7129,.6067,.3515,-.2751,.9485,-.1569,-.6606,-.6894,.2973
                    ,-.7129,.6067,.3515,-.9687,.1924,.1569,.2464,-.6692,-.701,-.0928,-.886,-.4544,.0981,.5493,-.8298,.2464,-.6692,-.701,-.0952,.9879,-.1223,-.8233,.5666,-.0334,-.4484,.6003,-.6622,-.5141,-.653,.5561,-.8233,.5666,-.0334,-.5959,.6179,.5129,.2464,-.6692,-.701,.2417,.6733,-.6987,.3311,-.801,-.4988,-.4623,-.7775,.4264,-.7129,.6067,.3515
                    ,-.5959,.6179,.5129,.2417,.6733,-.6987,.2745,.5666,-.7768,-.4355,-.6299,-.6431,.281,-.604,-.7458,-.4484,.6003,-.6622,-.7968,-.604,-.0158,-.4355,-.6299,-.6431,.2745,.5666,-.7768,.2417,.6733,-.6987,-.7968,-.604,-.0158,.281,-.604,-.7458,-.4355,-.6299,-.6431,.3311,-.801,-.4988,-.7125,-.6444,-.2774,-.782,.6226,-.0298,-.6645,-.7031,-.2532
                    ,-.7155,.6953,-.0673,.2338,.2617,.9364,.6658,-.6399,.3838,.4044,.7185,.5658,.2338,.2617,.9364,-.7155,.6953,-.0673,-.8509,.3116,.423,-.6645,-.7031,-.2532,.4445,-.5635,.6962,.6206,-.7745,.1223,-.7155,.6953,-.0673,.5821,.6427,.498,-.782,.6226,-.0298,-.7125,-.6444,-.2774,.6658,-.6399,.3838,.5821,.6427,.498,-.6658,.5213,.5337
                    ,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6206,-.7745,.1223,.4452,.5213,.728,.5821,.6427,.498,-.6658,.5213,.5337,-.6544,-.5635,.5042,-.6658,.5213,.5337,-.782,.6226,-.0298,-.01,-.9999,-.0044,-.131,-.6233,.7709,.017,-.9998,.0032,.3678,-.7232,-.5845,.3597,-.7607,-.5402,.1871,-.8462,.499,.0462,.3166,.9474,-.246,-.8334,.4948
                    ,-.246,-.8334,.4948,.6101,.3539,.7089,.499,-.7212,-.4805,-.131,-.6233,.7709,.3478,.4827,.8037,.2482,-.6589,.71,.2134,.9687,.1265,.7305,.4858,-.4799,.7669,.5336,.3565,-.0778,.6307,.7721,.0462,.3166,.9474,.3597,-.7607,-.5402,.4516,.7245,-.5207,.4516,.7245,-.5207,-.131,-.6233,.7709,.7669,.5336,.3565,.6376,-.6075,-.4736
                    ,.6865,-.6475,.3306,.3478,.4827,.8037,.2482,-.6589,.71,.6376,-.6075,-.4736,.2482,-.6589,.71,.6865,-.6475,.3306,.3478,.4827,.8037,.3678,-.7232,-.5845,.7305,.4858,-.4799,.7224,.516,-.4603,.5437,.6392,.5437,.6101,.3539,.7089,.9662,.2155,-.1416,.769,.6392,0,.9662,.2155,-.1416,.6847,-.6853,-.2481,0,.6392,-.769
                    ,.053,.23,-.9717,-.5437,.6392,-.5437,-.5728,.6019,-.5564,-.6606,-.6894,.2973,-.5728,.6019,-.5564,.769,.6392,0,.5437,.6392,.5437,0,.6392,.769,0,.6392,.769,-.5437,.6392,.5437,-.769,.6392,0,-.769,.6392,0,-.5437,.6392,-.5437,0,.6392,-.769,0,.6392,-.769,.5437,.6392,-.5437,.769,.6392,0
                    ,.769,.6392,0,0,.6392,.769,-.769,.6392,0,-.6093,-.7868,.0983,-.7125,-.6444,-.2774,-.5437,.6392,.5437,.3597,-.7607,-.5402,-.6093,-.7868,.0983,.499,-.7212,-.4805,.6847,-.6853,-.2481,.6847,-.6853,-.2481,-.6093,-.7868,.0983,-.4493,.4492,-.7722,.6847,-.6853,-.2481,.7568,.1592,-.6339,.8112,.4844,-.3275,.053,.23,-.9717
                    ,-.4493,.4492,-.7722,.8112,.4844,-.3275,-.0928,-.886,-.4544,-.5332,-.7487,-.3938,-.5451,-.597,-.5886,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7327,.6804,.0126,.7515,-.6521,.1001,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.7327,.6804,.0126,.5915,.5141,-.6211,-.6444,-.7328,-.2185,.7515,-.6521,.1001,.5771,-.597,-.5572
                    ,-.5559,.5141,-.6532,-.9687,.1924,.1569,-.6606,-.6894,.2973,-.4623,-.7775,.4264,-.7129,.6067,.3515,-.0928,-.886,-.4544,.053,.23,-.9717,.0981,.5493,-.8298,-.5959,.6179,.5129,-.5141,-.653,.5561,-.7968,-.604,-.0158,-.8233,.5666,-.0334,.2464,-.6692,-.701,.0981,.5493,-.8298,-.4623,-.7775,.4264,-.5141,-.653,.5561,-.5959,.6179,.5129
                    ,.2417,.6733,-.6987,-.4484,.6003,-.6622,-.4484,.6003,-.6622,-.8233,.5666,-.0334,.2745,.5666,-.7768,-.4355,-.6299,-.6431,-.7968,-.604,-.0158,.281,-.604,-.7458,.3311,-.801,-.4988,.2338,.2617,.9364,.1871,-.8462,.499,.6658,-.6399,.3838,.2338,.2617,.9364,.4044,.7185,.5658,-.7155,.6953,-.0673,-.6645,-.7031,-.2532,-.6544,-.5635,.5042
                    ,-.7155,.6953,-.0673,.4044,.7185,.5658,-.7125,-.6444,-.2774,-.6645,-.7031,-.2532,.6658,-.6399,.3838,.6206,-.7745,.1223,.5821,.6427,.498,.4452,.5213,.728,.4445,-.5635,.6962,.6206,-.7745,.1223,.4445,-.5635,.6962,-.6658,.5213,.5337,.4452,.5213,.728,-.6658,.5213,.5337,-.246,-.8334,.4948,.1871,-.8462,.499,-.246,-.8334,.4948
                    ,.6101,.3539,.7089,.3014,.9177,.2588,.499,-.7212,-.4805,-.131,-.6233,.7709,-.0778,.6307,.7721,.4516,.7245,-.5207,.3597,-.7607,-.5402,.3678,-.7232,-.5845,.7224,.516,-.4603,.4516,.7245,-.5207,-.0778,.6307,.7721,-.131,-.6233,.7709,.7669,.5336,.3565,.7305,.4858,-.4799,.3478,.4827,.8037,.7669,.5336,.3565,.6865,-.6475,.3306
                    ,.6376,-.6075,-.4736,.2482,-.6589,.71,.3478,.4827,.8037,.3678,-.7232,-.5845,.6376,-.6075,-.4736,.7305,.4858,-.4799
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.4184,.6151,.3781,.6598,.3625,.6174,.9602,.5203,.8445,.819,.8051,.7983,.8509,.1792,.7749,.1231,.817,.1043,.2466,.6151,.2994,.9304,.2434,.9304,.2207,.278,.1704,.2776
                    ,.1938,.2605,1,.4598,.8129,.1961,.8509,.1792,.5129,.8884,.5394,.8148,.5602,.9171,.9661,.4749,.7637,.2217,.2703,.2843,.3314,.2385,.3158,.3185,.6593,0,.4903,.2723,.4583,.2497,.4875,.3713,.5671,.3266,.5227,.3962,.4903,.2723,.728,.0487,.5354,.3042,.1229,.9411,.1582,.8593,.2434,.8932,.3076,.3774
                    ,.3469,.4758,.2543,.399,.8722,.1213,.8509,.1792,.9167,.4977,.7564,.773,.2048,.3926,.4277,.6151,.4382,.6779,.4184,.6807,.1648,.6462,.2161,.6475,.1686,.6619,.7637,.2217,.7821,.171,.0798,.8471,.1307,.8215,.1648,.8471,.0943,.7591,.1095,.616,.1281,.7619,.0811,.8175,.1281,.7619,.2161,.6475,.1969,.7226
                    ,.1686,.6619,.1521,.2164,.7355,.5711,.7295,.5606,.7355,.5605,.2434,.8561,.2328,.8593,.1521,.2164,.0943,.0748,.1006,.073,.4563,.8289,.4498,.8299,.3236,.2162,.3832,.1661,.3963,.1653,.406,.1737,.4947,.8216,.5156,.8093,0,.8792,.0567,.8401,.0798,.9076,.3017,.2058,.6444,.9129,.5959,.8088,.6373,.8072
                    ,.4937,.7248,.5557,.5605,.5583,.5605,.041,.7385,.0798,.6162,.0624,.744,.6373,.8072,.6115,.7229,.6336,.7221,.0166,.8297,.0567,.8401,.4807,.7251,.5033,.7333,.6276,.5626,.6319,.5605,.6321,.5625,.7321,.5889,.7295,.5846,.7321,.5846,.5602,.5622,.5033,.7333,.4583,.0017,.4537,.0001,.4563,0,.6336,.7221
                    ,.616,.4343,.693,.4912,.6767,.5125,.6424,.4,.7295,.8478,.6779,.7354,.7223,.7391,.3551,.6151,.3124,.7215,.2994,.6204,.4243,.5286,.4555,.6151,.4096,.5351,.3124,.7215,.3323,.8102,.3169,.8151,.3628,.4557,.6779,.7354,.6833,.6526,.7295,.5795,.7326,.5846,.7295,.5846,.656,.6504,.6745,.5609,.6833,.6526
                    ,.7564,.5564,.7532,.5605,.3522,.8999,.3169,.8151,.1551,.416,.1354,.4586,.1157,.4489,.1088,.4287,.1361,.3922,.763,.8689,.8441,.8664,.8189,.9111,.186,.4199,.8445,.819,.1592,.3585,.8788,.9338,.9953,.9934,.9915,1,.3768,.7097,.4184,.8189,.4141,.8205,.3564,.7014,.3551,.6396,.8472,.0767,.9092,.0947
                    ,.3973,.7018,.8788,.9338,.7295,.5755,.7374,.5713,.7374,.5755,.7295,.5795,.7374,.5795,0,.4891,.0056,.4954,.0014,.4934,.4098,.8188,.8914,.063,1,.0067,.4093,.6585,.9953,.5388,.8445,.819,.8509,.1792,.2966,.6151,.2994,.9304,.1674,.2995,.9222,.4977,.7637,.2217,.6878,.0202,.4903,.2723,.4875,.3713
                    ,.4903,.2723,.2434,.8932,.2434,.9411,.2081,.975,.2081,.975,.1582,.975,.1229,.9411,.1229,.9411,.1229,.8932,.1582,.8593,.1582,.8593,.2081,.8593,.2434,.8932,.2434,.8932,.2081,.975,.1229,.9411,.3076,.3774,.3628,.4557,.7564,.0687,.8472,.0767,.3076,.3774,.1592,.3585,.1674,.2995,.1674,.2995,.3076,.3774
                    ,.4563,.6212,.1648,.6462,.2434,.6151,.2161,.6475,.7637,.2217,.7564,.1844,.7821,.171,.0798,.8471,.0811,.8175,.0984,.6151,.0811,.8175,.1281,.7619,.2161,.6475,.2293,.7128,.1329,.2219,.1521,.2164,.7295,.5713,.2293,.7128,.2434,.8561,.1521,.2164,.1329,.2219,.0943,.0748,.4563,.8289,.4583,.9001,0,.8792
                    ,.0166,.8297,.0567,.8401,.6444,.9129,.5602,.9129,.5959,.8088,.4807,.7251,.041,.7385,.0754,.6151,.0798,.6162,.6373,.8072,.5959,.8088,.0166,.8297,.041,.7385,.4807,.7251,.5033,.7333,.6274,.5606,.7321,.5889,.7295,.5889,.5602,.5622,.4563,0,.4583,.0017,.4537,.0001,.6336,.7221,.7295,.8478,.6444,.8478
                    ,.6779,.7354,.3551,.6151,.3383,.7257,.3124,.7215,.4243,.5286,.4583,.6139,.3124,.7215,.3383,.7257,.3628,.4557,.4243,.5286,.6779,.7354,.656,.6504,.6833,.6526,.7326,.5795,.7326,.5846,.656,.6504,.6692,.5605,.7564,.5564,.3551,.899,.3522,.8999,.186,.4199,.763,.8689,.186,.4199,.8445,.819,.866,.878
                    ,.1592,.3585,.8788,.9338,.8968,.9021,.3973,.7018,.8472,.0767,.8914,.063,.4093,.6585,.3973,.7018,.8968,.9021,.8788,.9338,.7295,.5755,.7295,.5713,.7295,.5795,.7295,.5755,.0014,.4934,0,.4891,.0056,.4954,.4098,.8188,.8914,.063,.9963,0,1,.0067
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#0");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 310, 96, 492, this);
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
            clean(0);
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
            this.position.x  = 3.0581;
            this.position.y  = -.1267;
            this.position.z  = 14.6701;
            this.rotation.x  = 0;
            this.rotation.y  = 1.7375;
            this.rotation.z  = 0;
            this.scaling.x   = 4.3854;
            this.scaling.y   = 4.3854;
            this.scaling.z   = 4.3854;

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
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0667,0,.0883,.0283,.0499,.0456,.0667,.0456,0,.0667,.0644,.0406,.3562,.0406,.0456,.0667,.0456,.0644,.0667,0,.0504,-.0079,-.0504,.0713,-.0079,0,.0406,.3562,.0406,.0644,.0667,0,.0456,.0667,.0456,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0575,.3562,0,.0456,.0667,-.0456,.0644,.0667,0,-.0456,.0667,-.0456,-.0859,.0312,-.1032,0,.0667,-.0644,.0406,.3562,-.0406,0,.0667,-.0644,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0667,-.0456,0,.0667,-.0644,-.0644,.0667,0,-.0504,-.0079,.0504,-.0713,-.0079,0
                    ,-.0406,.3562,-.0406,-.0456,.0667,-.0456,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0504,-.0079,.0504,-.0604,.0127,.147,0,-.0079,.0575,-.0406,.3562,.0406,-.0456,.0667,.0456,.0988,.0283,.0245,.0644,.0667,0,-.0406,.3562,.0406,-.0456,.0667,.0456,.0406,-.0079,.0406,.0427,.0348,-.0693,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0348,-.0693,.0427,-.009,-.0693,0,.0667,-.0644,.0427,.0348,-.0693,0,-.0079,-.0575,.0188,.0348,-.0792,0,.0667,-.0644,.0439,-.002,-.1275,.0537,.0001,-.2666,.0439,.0278,-.1275,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,-.002,-.127,.0427,-.009,-.0693
                    ,.0439,-.002,-.1275,.0595,.0001,-.2664,.0537,-.0097,-.2666,.0595,-.0097,-.2664,.0595,.0001,-.2664,.0595,-.0097,-.2664,.0615,-.002,-.127,.0537,-.0097,-.2666,.0439,-.002,-.1275,.0537,.0001,-.2666,.0595,.0001,-.2664,-.1021,-.0054,-.0889,-.1647,-.0065,-.1199,-.1759,-.0065,-.1176,-.1823,-.0065,-.108,-.1034,.0312,-.0674,-.1021,.0312,-.0889
                    ,-.0713,-.0079,0,-.1034,.0312,-.0674,-.0644,.0667,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1759,.013,-.1176,-.2674,-.0024,-.2488,-.2661,-.0024,-.2507,-.1823,-.0065,-.108,-.2674,-.0024,-.2488,-.1823,.013,-.108,-.0859,-.0054,-.1032,-.1647,.013,-.1199,-.1647,-.0065,-.1199,-.1034,-.0054,-.0674
                    ,-.1034,.0312,-.0674,-.1823,.013,-.108,-.1647,.013,-.1199,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2638,-.0064,-.2512,-.2661,-.0024,-.2507,-.2674,-.0064,-.2488,-.2661,-.0064,-.2507,-.2638,-.0024,-.2512,-.1647,.013,-.1199,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.2661,-.0064,-.2507,-.1647,-.0065,-.1199,-.0786,.0127,.1329,-.114,.0109,.2109
                    ,-.114,-.0133,.2109,-.0786,.0518,.1329,0,.0667,.0644,-.0604,.0127,.147,-.0604,.0518,.147,0,.0667,.0644,-.0786,.0518,.1329,-.0456,.0667,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0786,.0518,.1329,-.0999,.0109,.2133,-.114,.0109,.2109,-.0786,.0127,.1329,-.0604,.0127,.147,-.0999,.0109,.2133
                    ,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0109,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.1227,-.0042,.2943,-.114,.0109,.2109,.0883,-.0183,.0499,.1152,-.0116,.0834,.1297,-.0116,.0703,.1308,-.0116,.0508,.0988,-.0183,.0245,0,-.0079,.0575,.063,.0283,.0604
                    ,.063,-.0183,.0604,.063,-.0183,.0604,.0456,.0667,.0456,.0713,-.0079,0,.1152,-.0116,.0834,.2343,-.0106,.0865,.2343,-.0175,.0865,.1297,.0215,.0703,.2376,-.0106,.0797,.2374,-.0106,.0837,.1152,.0215,.0834,.063,.0283,.0604,.0988,-.0183,.0245,.1308,.0215,.0508,.1308,.0215,.0508,.1152,.0215,.0834,.1152,-.0116,.0834
                    ,.2374,-.0106,.0837,.2376,-.0175,.0797,.2374,-.0175,.0837,.2343,-.0106,.0865,.2343,-.0175,.0865,.2376,-.0175,.0797,.2343,-.0175,.0865,.2374,-.0175,.0837,.2343,-.0106,.0865,.1308,-.0116,.0508,.2376,-.0106,.0797,.0988,.0283,.0245,0,.3562,.0575,.0644,.0667,0,.0406,.3562,.0406,.0575,.3562,0,.0644,.0667,0
                    ,.0504,-.0079,-.0504,0,.3562,-.0575,0,.0667,-.0644,-.0456,.0667,-.0456,-.0575,.3562,0,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575
                    ,-.0504,-.0079,.0504,-.0786,.0127,.1329,-.0575,.3562,0,.0988,-.0183,.0245,-.0406,.3562,.0406,-.0504,-.0079,.0504,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,-.0504,-.0079,.0504,.0188,.0348,-.0792,.0504,-.0079,-.0504,.0456,.0667,-.0456,.0427,.0348,-.0693,0,.0667,-.0644,.0188,.0348,-.0792,.0427,.0348,-.0693
                    ,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0097,-.2666,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,.0001,-.2666,.0615,.0278,-.127,.0595,.0001,-.2664,.0615,-.002,-.127,.0595,-.0097,-.2664,.0537,-.0097,-.2666,.0537,.0001,-.2666,-.0644,.0667,0
                    ,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0667,-.0644,-.0859,.0312,-.1032,-.1823,.013,-.108,-.1823,-.0065,-.108,-.2674,-.0064,-.2488,-.2674,-.0024,-.2488,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1823,-.0065,-.108,-.1823,.013,-.108,-.1647,.013,-.1199,-.2661,-.0024,-.2507
                    ,-.2661,-.0024,-.2507,-.2674,-.0024,-.2488,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.1647,-.0065,-.1199,0,.0667,.0644,0,-.0079,.0575,-.0604,.0127,.147,0,.0667,.0644,-.0604,.0518,.147,-.0786,.0518,.1329,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0786,.0518,.1329,-.0604,.0518,.147
                    ,-.0786,.0127,.1329,-.114,-.0133,.2109,-.0604,.0127,.147,-.0999,-.0133,.2133,-.0999,.0109,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.12,-.0042,.2948,-.1227,-.0042,.2943,.063,-.0183,.0604,0,-.0079,.0575,.063,-.0183,.0604,.0456,.0667,.0456,.0883,.0283,.0499
                    ,.0713,-.0079,0,.1152,-.0116,.0834,.1152,.0215,.0834,.1308,.0215,.0508,.0988,-.0183,.0245,.1308,-.0116,.0508,.0988,.0283,.0245,.1308,.0215,.0508,.1152,.0215,.0834,.2374,-.0106,.0837,.2376,-.0106,.0797,.2343,-.0106,.0865,.2374,-.0106,.0837,.2374,-.0175,.0837,.2376,-.0175,.0797,.2343,-.0175,.0865,.2343,-.0106,.0865
                    ,.1308,-.0116,.0508,.2376,-.0175,.0797,.2376,-.0106,.0797
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(588);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 58);
                _i.set([52], 119);
                CONTIG(_i, 120, 59, 68);
                _i.set([65,69,70,71,72,73,74,75,65,76,77,44,78,79,80,39,81,48,59,82,83,84,85,86,87,88,89,90,52,91,92,93,94,95,96,97,98,92,99,100,101,49,102,50,103,104,105,100,106,107
                ,108,109,110,85,111,112,113,114,115,113,116,60,54,117,118,119,120,121,59,122,113], 130);
                CONTIG(_i, 201, 123, 135);
                _i.set([131,136,118,137,126,118,138,55,139,140,141,142,143,144,126,145,146,115,147,116,115,148,149,150,139,141,151,152,153,66,154,151], 214);
                CONTIG(_i, 246, 155, 167);
                _i.set([163,74,168,169,157,170,171,172,173,174,175,153,176,177,165,178,179,180,181,182,180,183,184,185,186,187,82,188,180,189,186,39,190,180,184,191,192,193,194,195,196,37,197,198,199,200,78,37,201,194
                ,187,202,203,204,205,206,207,206,208,182,209,183,182,210,211,194,212,197,213,214,200,36,215,37,39,216,40,217,52,43,218,219,220,48,221,49,51,57,52,54,118,55,57,222,223,59,113,60,62,68
                ,224,65,77,66,68,225,65,226,227,228,229,230,70,70,231,232,233,234,235,236,237,70,238,239,74,65,240,76,44,241,78,242,216,39,243,75,59,82,244,245,246,48,82,59,61,247,75,82,59,83
                ,248,84,249,250,251,252,253,254,255,256,92,94,257,95,258,94,259,260,261,100,49,262,263,103,264,104,100,265,266,267,268,269,85,84,270,113,122,114,113,115,116,54,271,117,272,273,274,59,48,122
                ,275,276,277,126,278,127,279,280,281,282,283,133,284,285,131,118,117,286,118,126,287,139,288,140,289,290,143,126,128,291,115,292,293,115,114,294,295,133,139,151,154,152,66,77,154,296,297,298,299,300
                ,301,302,303,162,304,305,165,306,307,163,308,309,310,170,311,312,313,314,174,153,152,315,165,316,317,180,318,181,180,182,183,319,39,186,82,75,320,321,322,186,323,82,180,324,325,192,194,326,195,37
                ,194,197,327,328,200,37,329,330,187,186,331,332,333,205,334,335,206,182,336,337,182,181,338,194,196], 259);
                CONTIG(_i, 584, 339, 342);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.9662,.2155,-.1416,.3014,.9177,.2588,.6101,.3539,.7089,.2338,.2617,.9364,.5437,.6392,.5437,.6101,.3539,.7089,.9662,.2155,-.1416,.6847,-.6853,-.2481,.499,-.7212,-.4805,.5437,.6392,.5437,.9662,.2155,-.1416,.6101,.3539,.7089,-.0928,-.886,-.4544,.5923,-.805,-.0349,-.5332,-.7487,-.3938
                    ,.769,.6392,0,.7568,.1592,-.6339,.9662,.2155,-.1416,-.5728,.6019,-.5564,.0981,.5493,-.8298,.053,.23,-.9717,.5437,.6392,-.5437,.053,.23,-.9717,-.0126,-.9998,-.0148,-.4623,-.7775,.4264,-.6606,-.6894,.2973,0,.6392,-.769,-.5728,.6019,-.5564,.053,.23,-.9717,-.9687,.1924,.1569,-.6093,-.7868,.0983,-.6606,-.6894,.2973
                    ,-.5437,.6392,-.5437,-.5728,.6019,-.5564,-.769,.6392,0,0,.6392,-.769,.769,.6392,0,-.6093,-.7868,.0983,.6658,-.6399,.3838,.1871,-.8462,.499,-.5437,.6392,.5437,-.8509,.3116,.423,.7224,.516,-.4603,.9662,.2155,-.1416,-.5437,.6392,.5437,-.8509,.3116,.423,-.0911,-.9823,-.1635,.8112,.4844,-.3275,-.6011,.7408,-.2997
                    ,.7327,.6804,.0126,.6847,-.6853,-.2481,.8112,.4844,-.3275,.5923,-.805,-.0349,.053,.23,-.9717,.8112,.4844,-.3275,-.0928,-.886,-.4544,-.4493,.4492,-.7722,.053,.23,-.9717,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,-.6011,.7408,-.2997,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7515,-.6521,.1001,.5923,-.805,-.0349
                    ,-.6444,-.7328,-.2185,.5915,.5141,-.6211,-.5451,-.597,-.5886,.5771,-.597,-.5572,.5915,.5141,-.6211,.5771,-.597,-.5572,.7515,-.6521,.1001,-.5451,-.597,-.5886,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.5915,.5141,-.6211,-.0027,-1,-.0007,.3311,-.801,-.4988,.0037,-1,.0042,-.5141,-.653,.5561,-.7129,.6067,.3515,-.2751,.9485,-.1569
                    ,-.6606,-.6894,.2973,-.7129,.6067,.3515,-.9687,.1924,.1569,.2464,-.6692,-.701,-.0928,-.886,-.4544,.0981,.5493,-.8298,.2464,-.6692,-.701,-.0952,.9879,-.1223,-.8233,.5666,-.0334,-.4484,.6003,-.6622,-.5141,-.653,.5561,-.8233,.5666,-.0334,-.5959,.6179,.5129,.2464,-.6692,-.701,.2417,.6733,-.6987,.3311,-.801,-.4988,-.4623,-.7775,.4264
                    ,-.7129,.6067,.3515,-.5959,.6179,.5129,.2417,.6733,-.6987,.2745,.5666,-.7768,-.4355,-.6299,-.6431,.281,-.604,-.7458,-.4484,.6003,-.6622,-.7968,-.604,-.0158,-.4355,-.6299,-.6431,.2745,.5666,-.7768,.2417,.6733,-.6987,-.7968,-.604,-.0158,.281,-.604,-.7458,-.4355,-.6299,-.6431,.3311,-.801,-.4988,-.7125,-.6444,-.2774,-.782,.6226,-.0298
                    ,-.6645,-.7031,-.2532,-.7155,.6953,-.0673,.2338,.2617,.9364,.6658,-.6399,.3838,.4044,.7185,.5658,.2338,.2617,.9364,-.7155,.6953,-.0673,-.8509,.3116,.423,-.6645,-.7031,-.2532,.4445,-.5635,.6962,.6206,-.7745,.1223,-.7155,.6953,-.0673,.5821,.6427,.498,-.782,.6226,-.0298,-.7125,-.6444,-.2774,.6658,-.6399,.3838,.5821,.6427,.498
                    ,-.6658,.5213,.5337,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6206,-.7745,.1223,.4452,.5213,.728,.5821,.6427,.498,-.6658,.5213,.5337,-.6544,-.5635,.5042,-.6658,.5213,.5337,-.782,.6226,-.0298,-.01,-.9999,-.0044,-.131,-.6233,.7709,.017,-.9998,.0032,.3678,-.7232,-.5845,.3597,-.7607,-.5402,.1871,-.8462,.499,.0462,.3166,.9474
                    ,-.246,-.8334,.4948,-.246,-.8334,.4948,.6101,.3539,.7089,.499,-.7212,-.4805,-.131,-.6233,.7709,.3478,.4827,.8037,.2482,-.6589,.71,.2134,.9687,.1265,.7305,.4858,-.4799,.7669,.5336,.3565,-.0778,.6307,.7721,.0462,.3166,.9474,.3597,-.7607,-.5402,.4516,.7245,-.5207,.4516,.7245,-.5207,-.0778,.6307,.7721,-.131,-.6233,.7709
                    ,.7669,.5336,.3565,.6376,-.6075,-.4736,.6865,-.6475,.3306,.3478,.4827,.8037,.2482,-.6589,.71,.6376,-.6075,-.4736,.2482,-.6589,.71,.6865,-.6475,.3306,.3478,.4827,.8037,.3678,-.7232,-.5845,.7305,.4858,-.4799,.7224,.516,-.4603,0,.6392,.769,.9662,.2155,-.1416,.5437,.6392,.5437,.769,.6392,0,.9662,.2155,-.1416
                    ,.6847,-.6853,-.2481,0,.6392,-.769,.053,.23,-.9717,-.5728,.6019,-.5564,-.769,.6392,0,.769,.6392,0,.5437,.6392,.5437,0,.6392,.769,0,.6392,.769,-.5437,.6392,.5437,-.5437,.6392,-.5437,0,.6392,-.769,0,.6392,-.769,.5437,.6392,-.5437,.769,.6392,0,.769,.6392,0,0,.6392,.769
                    ,-.6093,-.7868,.0983,-.7125,-.6444,-.2774,-.769,.6392,0,.3597,-.7607,-.5402,-.5437,.6392,.5437,-.6093,-.7868,.0983,.499,-.7212,-.4805,.6847,-.6853,-.2481,.6847,-.6853,-.2481,-.6093,-.7868,.0983,-.4493,.4492,-.7722,.6847,-.6853,-.2481,.7568,.1592,-.6339,.8112,.4844,-.3275,.053,.23,-.9717,-.4493,.4492,-.7722,.8112,.4844,-.3275
                    ,-.0928,-.886,-.4544,-.5332,-.7487,-.3938,-.5451,-.597,-.5886,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7327,.6804,.0126,.7515,-.6521,.1001,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.7327,.6804,.0126,.5915,.5141,-.6211,.7515,-.6521,.1001,.5771,-.597,-.5572,-.5451,-.597,-.5886,-.5559,.5141,-.6532,-.9687,.1924,.1569
                    ,-.6606,-.6894,.2973,-.4623,-.7775,.4264,-.7129,.6067,.3515,-.0928,-.886,-.4544,.053,.23,-.9717,.0981,.5493,-.8298,-.5959,.6179,.5129,-.5141,-.653,.5561,-.7968,-.604,-.0158,-.8233,.5666,-.0334,.2464,-.6692,-.701,.0981,.5493,-.8298,-.4623,-.7775,.4264,-.5141,-.653,.5561,-.5959,.6179,.5129,.2417,.6733,-.6987,-.4484,.6003,-.6622
                    ,-.4484,.6003,-.6622,-.8233,.5666,-.0334,.2745,.5666,-.7768,-.4355,-.6299,-.6431,-.7968,-.604,-.0158,.281,-.604,-.7458,.3311,-.801,-.4988,.2338,.2617,.9364,.1871,-.8462,.499,.6658,-.6399,.3838,.2338,.2617,.9364,.4044,.7185,.5658,-.7155,.6953,-.0673,-.6645,-.7031,-.2532,-.6544,-.5635,.5042,-.7155,.6953,-.0673,.4044,.7185,.5658
                    ,-.7125,-.6444,-.2774,-.6645,-.7031,-.2532,.6658,-.6399,.3838,.6206,-.7745,.1223,.5821,.6427,.498,.4452,.5213,.728,.4445,-.5635,.6962,.6206,-.7745,.1223,.4445,-.5635,.6962,-.6658,.5213,.5337,.4452,.5213,.728,-.6658,.5213,.5337,-.246,-.8334,.4948,.1871,-.8462,.499,-.246,-.8334,.4948,.6101,.3539,.7089,.3014,.9177,.2588
                    ,.499,-.7212,-.4805,-.131,-.6233,.7709,-.0778,.6307,.7721,.4516,.7245,-.5207,.3597,-.7607,-.5402,.3678,-.7232,-.5845,.7224,.516,-.4603,.4516,.7245,-.5207,-.0778,.6307,.7721,.7669,.5336,.3565,.7305,.4858,-.4799,.3478,.4827,.8037,.7669,.5336,.3565,.6865,-.6475,.3306,.6376,-.6075,-.4736,.2482,-.6589,.71,.3478,.4827,.8037
                    ,.3678,-.7232,-.5845,.6376,-.6075,-.4736,.7305,.4858,-.4799
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.4184,.6151,.3781,.6598,.3625,.6174,.8051,.7983,.9953,.5388,.8445,.819,.8509,.1792,.7749,.1231,.817,.1043,.2466,.6151,.2994,.9304,.2434,.9304,.2207,.278,.1704,.2776
                    ,.1938,.2605,1,.4598,.8129,.1961,.8509,.1792,.5129,.8884,.5394,.8148,.5602,.9171,.9661,.4749,.7637,.2217,.2703,.2843,.3314,.2385,.3158,.3185,.6593,0,.4903,.2723,.4583,.2497,.5354,.3042,.5227,.3962,.4875,.3713,.6878,.0202,.4903,.2723,.1229,.9411,.1582,.8593,.2434,.8932,.3076,.3774,.3469,.4758
                    ,.2543,.399,.7564,.0687,.5671,.3266,.8722,.1213,.8509,.1792,.9167,.4977,.7564,.773,.2048,.3926,.4277,.6151,.4382,.6779,.4184,.6807,.1648,.6462,.2161,.6475,.1686,.6619,.7637,.2217,.7821,.171,.0798,.8471,.1307,.8215,.1648,.8471,.0943,.7591,.1095,.616,.1281,.7619,.0811,.8175,.1281,.7619,.2161,.6475
                    ,.1969,.7226,.1686,.6619,.1521,.2164,.7355,.5711,.7295,.5606,.7355,.5605,.2434,.8561,.2328,.8593,.1329,.2219,.1006,.073,.1521,.2164,.4563,.8289,.4498,.8299,.3236,.2162,.3832,.1661,.3963,.1653,.406,.1737,.4947,.8216,.5156,.8093,0,.8792,.0567,.8401,.0798,.9076,.3017,.2058,.6444,.9129,.5959,.8088
                    ,.6373,.8072,.4937,.7248,.5557,.5605,.5583,.5605,.041,.7385,.0798,.6162,.0624,.744,.6373,.8072,.6115,.7229,.6336,.7221,.0166,.8297,.0567,.8401,.4807,.7251,.5033,.7333,.6276,.5626,.6319,.5605,.6321,.5625,.7321,.5889,.7295,.5846,.7321,.5846,.5602,.5622,.5033,.7333,.4583,.0017,.4537,.0001,.4563,0
                    ,.6336,.7221,.616,.4343,.693,.4912,.6767,.5125,.6424,.4,.7295,.8478,.6779,.7354,.7223,.7391,.3551,.6151,.3124,.7215,.2994,.6204,.4243,.5286,.4555,.6151,.4096,.5351,.3124,.7215,.3323,.8102,.3169,.8151,.3628,.4557,.6779,.7354,.6833,.6526,.7295,.5795,.7326,.5846,.7295,.5846,.656,.6504,.6745,.5609
                    ,.6833,.6526,.7564,.5564,.7532,.5605,.3522,.8999,.3169,.8151,.1551,.416,.1354,.4586,.1157,.4489,.1088,.4287,.1361,.3922,.763,.8689,.8441,.8664,.8189,.9111,.186,.4199,.8445,.819,.1592,.3585,.8788,.9338,.9953,.9934,.9915,1,.3768,.7097,.4184,.8189,.4141,.8205,.3564,.7014,.3551,.6396,.8472,.0767
                    ,.9092,.0947,.3973,.7018,.8968,.9021,.8788,.9338,.7295,.5755,.7374,.5713,.7374,.5755,.7295,.5795,.7374,.5795,0,.4891,.0056,.4954,.0014,.4934,.4098,.8188,.8914,.063,1,.0067,.4093,.6585,.9602,.5203,.8509,.1792,.2466,.6151,.2966,.6151,.2994,.9304,.1674,.2995,.9222,.4977,.7637,.2217,.4903,.2723
                    ,.728,.0487,.2434,.8932,.2434,.9411,.2081,.975,.2081,.975,.1582,.975,.1229,.8932,.1582,.8593,.1582,.8593,.2081,.8593,.2434,.8932,.2434,.8932,.2081,.975,.3076,.3774,.3628,.4557,.728,.0487,.8472,.0767,.9167,.4977,.3076,.3774,.1592,.3585,.1674,.2995,.1674,.2995,.3076,.3774,.4563,.6212,.1648,.6462
                    ,.2434,.6151,.2161,.6475,.7637,.2217,.7564,.1844,.7821,.171,.0798,.8471,.0811,.8175,.0984,.6151,.0811,.8175,.1281,.7619,.2161,.6475,.2293,.7128,.1329,.2219,.1521,.2164,.7295,.5713,.2293,.7128,.2434,.8561,.1329,.2219,.0943,.0748,.1006,.073,.4563,.8289,.4583,.9001,0,.8792,.0166,.8297,.0567,.8401
                    ,.6444,.9129,.5602,.9129,.5959,.8088,.4807,.7251,.041,.7385,.0754,.6151,.0798,.6162,.6373,.8072,.5959,.8088,.0166,.8297,.041,.7385,.4807,.7251,.5033,.7333,.6274,.5606,.7321,.5889,.7295,.5889,.5602,.5622,.4563,0,.4583,.0017,.4537,.0001,.6336,.7221,.7295,.8478,.6444,.8478,.6779,.7354,.3551,.6151
                    ,.3383,.7257,.3124,.7215,.4243,.5286,.4583,.6139,.3124,.7215,.3383,.7257,.3628,.4557,.4243,.5286,.6779,.7354,.656,.6504,.6833,.6526,.7326,.5795,.7326,.5846,.656,.6504,.6692,.5605,.7564,.5564,.3551,.899,.3522,.8999,.186,.4199,.763,.8689,.186,.4199,.8445,.819,.866,.878,.1592,.3585,.8788,.9338
                    ,.8968,.9021,.3973,.7018,.8472,.0767,.8914,.063,.4093,.6585,.3973,.7018,.8968,.9021,.7295,.5755,.7295,.5713,.7295,.5795,.7295,.5755,.0014,.4934,0,.4891,.0056,.4954,.4098,.8188,.8914,.063,.9963,0,1,.0067
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#1");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 307, 96, 492, this);
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
            clean(1);
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
            this.position.x  = 5.7178;
            this.position.y  = -.1267;
            this.position.z  = 19.6525;
            this.rotation.x  = 0;
            this.rotation.y  = .8457;
            this.rotation.z  = 0;
            this.scaling.x   = 5.8626;
            this.scaling.y   = 5.8626;
            this.scaling.z   = 5.8626;

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
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0667,0,.0883,.0283,.0499,.0456,.0667,.0456,0,.0667,.0644,.0406,.3562,.0406,.0456,.0667,.0456,.0644,.0667,0,.0504,-.0079,-.0504,.0713,-.0079,0,.0406,.3562,.0406,.0644,.0667,0,.0456,.0667,.0456,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0575,.3562,0,.0456,.0667,-.0456,.0644,.0667,0,-.0456,.0667,-.0456,-.0859,.0312,-.1032,0,.0667,-.0644,.0406,.3562,-.0406,0,.0667,-.0644,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0667,-.0456,0,.0667,-.0644,-.0644,.0667,0,-.0504,-.0079,.0504,-.0713,-.0079,0
                    ,-.0406,.3562,-.0406,-.0456,.0667,-.0456,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0504,-.0079,.0504,-.0604,.0127,.147,0,-.0079,.0575,-.0406,.3562,.0406,-.0456,.0667,.0456,.0988,.0283,.0245,.0644,.0667,0,-.0406,.3562,.0406,-.0456,.0667,.0456,.0406,-.0079,.0406,.0427,.0348,-.0693,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0348,-.0693,.0427,-.009,-.0693,0,.0667,-.0644,.0427,.0348,-.0693,0,-.0079,-.0575,.0188,.0348,-.0792,0,.0667,-.0644,.0439,-.002,-.1275,.0537,.0001,-.2666,.0439,.0278,-.1275,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,-.002,-.127,.0427,-.009,-.0693
                    ,.0439,-.002,-.1275,.0595,.0001,-.2664,.0537,-.0097,-.2666,.0595,-.0097,-.2664,.0595,.0001,-.2664,.0595,-.0097,-.2664,.0615,-.002,-.127,.0537,-.0097,-.2666,.0439,-.002,-.1275,.0537,.0001,-.2666,.0595,.0001,-.2664,-.1021,-.0054,-.0889,-.1647,-.0065,-.1199,-.1759,-.0065,-.1176,-.1823,-.0065,-.108,-.1034,.0312,-.0674,-.1021,.0312,-.0889
                    ,-.0713,-.0079,0,-.1034,.0312,-.0674,-.0644,.0667,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1759,.013,-.1176,-.2674,-.0024,-.2488,-.2661,-.0024,-.2507,-.1823,-.0065,-.108,-.2674,-.0024,-.2488,-.1823,.013,-.108,-.0859,-.0054,-.1032,-.1647,.013,-.1199,-.1647,-.0065,-.1199,-.1034,-.0054,-.0674
                    ,-.1034,.0312,-.0674,-.1823,.013,-.108,-.1647,.013,-.1199,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2638,-.0064,-.2512,-.2661,-.0024,-.2507,-.2674,-.0064,-.2488,-.2661,-.0064,-.2507,-.2638,-.0024,-.2512,-.1647,.013,-.1199,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.2661,-.0064,-.2507,-.1647,-.0065,-.1199,-.0786,.0127,.1329,-.114,.0109,.2109
                    ,-.114,-.0133,.2109,-.0786,.0518,.1329,0,.0667,.0644,-.0604,.0127,.147,-.0604,.0518,.147,0,.0667,.0644,-.0786,.0518,.1329,-.0456,.0667,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0786,.0518,.1329,-.0999,.0109,.2133,-.114,.0109,.2109,-.0786,.0127,.1329,-.0604,.0127,.147,-.0999,.0109,.2133
                    ,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0109,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.1227,-.0042,.2943,-.114,.0109,.2109,.0883,-.0183,.0499,.1152,-.0116,.0834,.1297,-.0116,.0703,.1308,-.0116,.0508,.0988,-.0183,.0245,0,-.0079,.0575,.063,.0283,.0604
                    ,.063,-.0183,.0604,.063,-.0183,.0604,.0456,.0667,.0456,.0713,-.0079,0,.1152,-.0116,.0834,.2343,-.0106,.0865,.2343,-.0175,.0865,.1297,.0215,.0703,.2376,-.0106,.0797,.2374,-.0106,.0837,.1152,.0215,.0834,.063,.0283,.0604,.0988,-.0183,.0245,.1308,.0215,.0508,.1308,.0215,.0508,.1152,.0215,.0834,.1152,-.0116,.0834
                    ,.2374,-.0106,.0837,.2376,-.0175,.0797,.2374,-.0175,.0837,.2343,-.0106,.0865,.2343,-.0175,.0865,.2376,-.0175,.0797,.2343,-.0175,.0865,.2374,-.0175,.0837,.2343,-.0106,.0865,.1308,-.0116,.0508,.2376,-.0106,.0797,.0988,.0283,.0245,0,.3562,.0575,.0644,.0667,0,.0406,.3562,.0406,.0575,.3562,0,.0644,.0667,0
                    ,.0504,-.0079,-.0504,0,.3562,-.0575,0,.0667,-.0644,-.0456,.0667,-.0456,-.0575,.3562,0,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575
                    ,-.0504,-.0079,.0504,-.0786,.0127,.1329,-.0575,.3562,0,.0988,-.0183,.0245,-.0406,.3562,.0406,-.0504,-.0079,.0504,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,-.0504,-.0079,.0504,.0188,.0348,-.0792,.0504,-.0079,-.0504,.0456,.0667,-.0456,.0427,.0348,-.0693,0,.0667,-.0644,.0188,.0348,-.0792,.0427,.0348,-.0693
                    ,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0097,-.2666,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,.0001,-.2666,.0615,.0278,-.127,.0595,.0001,-.2664,.0615,-.002,-.127,.0595,-.0097,-.2664,.0537,-.0097,-.2666,.0537,.0001,-.2666,-.0644,.0667,0
                    ,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0667,-.0644,-.0859,.0312,-.1032,-.1823,.013,-.108,-.1823,-.0065,-.108,-.2674,-.0064,-.2488,-.2674,-.0024,-.2488,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1823,-.0065,-.108,-.1823,.013,-.108,-.1647,.013,-.1199,-.2661,-.0024,-.2507
                    ,-.2661,-.0024,-.2507,-.2674,-.0024,-.2488,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.1647,-.0065,-.1199,0,.0667,.0644,0,-.0079,.0575,-.0604,.0127,.147,0,.0667,.0644,-.0604,.0518,.147,-.0786,.0518,.1329,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0786,.0518,.1329,-.0604,.0518,.147
                    ,-.0786,.0127,.1329,-.114,-.0133,.2109,-.0604,.0127,.147,-.0999,-.0133,.2133,-.0999,.0109,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.12,-.0042,.2948,-.1227,-.0042,.2943,.063,-.0183,.0604,0,-.0079,.0575,.063,-.0183,.0604,.0456,.0667,.0456,.0883,.0283,.0499
                    ,.0713,-.0079,0,.1152,-.0116,.0834,.1152,.0215,.0834,.1308,.0215,.0508,.0988,-.0183,.0245,.1308,-.0116,.0508,.0988,.0283,.0245,.1308,.0215,.0508,.1152,.0215,.0834,.2374,-.0106,.0837,.2376,-.0106,.0797,.2343,-.0106,.0865,.2374,-.0106,.0837,.2374,-.0175,.0837,.2376,-.0175,.0797,.2343,-.0175,.0865,.2343,-.0106,.0865
                    ,.1308,-.0116,.0508,.2376,-.0175,.0797,.2376,-.0106,.0797
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(588);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 58);
                _i.set([52], 119);
                CONTIG(_i, 120, 59, 68);
                _i.set([65,69,70,71,72,73,74,75,65,76,77,44,78,79,80,39,81,48,59,82,83,84,85,86,87,88,89,90,52,91,92,93,94,95,96,97,98,92,99,100,101,49,102,50,103,104,105,100,106,107
                ,108,109,110,85,111,112,113,114,115,113,116,60,54,117,118,119,120,121,59,122,113], 130);
                CONTIG(_i, 201, 123, 135);
                _i.set([131,136,118,137,126,118,138,55,139,140,141,142,143,144,126,145,146,115,147,116,115,148,149,150,139,141,151,152,153,66,154,151], 214);
                CONTIG(_i, 246, 155, 167);
                _i.set([163,74,168,169,157,170,171,172,173,174,175,153,176,177,165,178,179,180,181,182,180,183,184,185,186,187,82,188,180,189,186,39,190,180,184,191,192,193,194,195,196,37,197,198,199,200,78,37,201,194
                ,187,202,203,204,205,206,207,206,208,182,209,183,182,210,211,194,212,197,213,214,200,36,215,37,39,216,40,217,52,43,218,219,220,48,221,49,51,57,52,54,118,55,57,222,223,59,113,60,62,68
                ,224,65,77,66,68,225,65,226,227,228,229,230,70,70,231,232,233,234,235,236,237,70,238,239,74,65,240,76,44,241,78,242,216,39,243,75,59,82,244,245,246,48,82,59,61,247,75,82,59,83
                ,248,84,249,250,251,252,253,254,255,256,92,94,257,95,258,94,259,260,261,100,49,262,263,103,264,104,100,265,266,267,268,269,85,84,270,113,122,114,113,115,116,54,271,117,272,273,274,59,48,122
                ,275,276,277,126,278,127,279,280,281,282,283,133,284,285,131,118,117,286,118,126,287,139,288,140,289,290,143,126,128,291,115,292,293,115,114,294,295,133,139,151,154,152,66,77,154,296,297,298,299,300
                ,301,302,303,162,304,305,165,306,307,163,308,309,310,170,311,312,313,314,174,153,152,315,165,316,317,180,318,181,180,182,183,319,39,186,82,75,320,321,322,186,323,82,180,324,325,192,194,326,195,37
                ,194,197,327,328,200,37,329,330,187,186,331,332,333,205,334,335,206,182,336,337,182,181,338,194,196], 259);
                CONTIG(_i, 584, 339, 342);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.9662,.2155,-.1416,.3014,.9177,.2588,.6101,.3539,.7089,.2338,.2617,.9364,.5437,.6392,.5437,.6101,.3539,.7089,.9662,.2155,-.1416,.6847,-.6853,-.2481,.499,-.7212,-.4805,.5437,.6392,.5437,.9662,.2155,-.1416,.6101,.3539,.7089,-.0928,-.886,-.4544,.5923,-.805,-.0349,-.5332,-.7487,-.3938
                    ,.769,.6392,0,.7568,.1592,-.6339,.9662,.2155,-.1416,-.5728,.6019,-.5564,.0981,.5493,-.8298,.053,.23,-.9717,.5437,.6392,-.5437,.053,.23,-.9717,-.0126,-.9998,-.0148,-.4623,-.7775,.4264,-.6606,-.6894,.2973,0,.6392,-.769,-.5728,.6019,-.5564,.053,.23,-.9717,-.9687,.1924,.1569,-.6093,-.7868,.0983,-.6606,-.6894,.2973
                    ,-.5437,.6392,-.5437,-.5728,.6019,-.5564,-.769,.6392,0,0,.6392,-.769,.769,.6392,0,-.6093,-.7868,.0983,.6658,-.6399,.3838,.1871,-.8462,.499,-.5437,.6392,.5437,-.8509,.3116,.423,.7224,.516,-.4603,.9662,.2155,-.1416,-.5437,.6392,.5437,-.8509,.3116,.423,-.0911,-.9823,-.1635,.8112,.4844,-.3275,-.6011,.7408,-.2997
                    ,.7327,.6804,.0126,.6847,-.6853,-.2481,.8112,.4844,-.3275,.5923,-.805,-.0349,.053,.23,-.9717,.8112,.4844,-.3275,-.0928,-.886,-.4544,-.4493,.4492,-.7722,.053,.23,-.9717,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,-.6011,.7408,-.2997,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7515,-.6521,.1001,.5923,-.805,-.0349
                    ,-.6444,-.7328,-.2185,.5915,.5141,-.6211,-.5451,-.597,-.5886,.5771,-.597,-.5572,.5915,.5141,-.6211,.5771,-.597,-.5572,.7515,-.6521,.1001,-.5451,-.597,-.5886,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.5915,.5141,-.6211,-.0027,-1,-.0007,.3311,-.801,-.4988,.0037,-1,.0042,-.5141,-.653,.5561,-.7129,.6067,.3515,-.2751,.9485,-.1569
                    ,-.6606,-.6894,.2973,-.7129,.6067,.3515,-.9687,.1924,.1569,.2464,-.6692,-.701,-.0928,-.886,-.4544,.0981,.5493,-.8298,.2464,-.6692,-.701,-.0952,.9879,-.1223,-.8233,.5666,-.0334,-.4484,.6003,-.6622,-.5141,-.653,.5561,-.8233,.5666,-.0334,-.5959,.6179,.5129,.2464,-.6692,-.701,.2417,.6733,-.6987,.3311,-.801,-.4988,-.4623,-.7775,.4264
                    ,-.7129,.6067,.3515,-.5959,.6179,.5129,.2417,.6733,-.6987,.2745,.5666,-.7768,-.4355,-.6299,-.6431,.281,-.604,-.7458,-.4484,.6003,-.6622,-.7968,-.604,-.0158,-.4355,-.6299,-.6431,.2745,.5666,-.7768,.2417,.6733,-.6987,-.7968,-.604,-.0158,.281,-.604,-.7458,-.4355,-.6299,-.6431,.3311,-.801,-.4988,-.7125,-.6444,-.2774,-.782,.6226,-.0298
                    ,-.6645,-.7031,-.2532,-.7155,.6953,-.0673,.2338,.2617,.9364,.6658,-.6399,.3838,.4044,.7185,.5658,.2338,.2617,.9364,-.7155,.6953,-.0673,-.8509,.3116,.423,-.6645,-.7031,-.2532,.4445,-.5635,.6962,.6206,-.7745,.1223,-.7155,.6953,-.0673,.5821,.6427,.498,-.782,.6226,-.0298,-.7125,-.6444,-.2774,.6658,-.6399,.3838,.5821,.6427,.498
                    ,-.6658,.5213,.5337,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6206,-.7745,.1223,.4452,.5213,.728,.5821,.6427,.498,-.6658,.5213,.5337,-.6544,-.5635,.5042,-.6658,.5213,.5337,-.782,.6226,-.0298,-.01,-.9999,-.0044,-.131,-.6233,.7709,.017,-.9998,.0032,.3678,-.7232,-.5845,.3597,-.7607,-.5402,.1871,-.8462,.499,.0462,.3166,.9474
                    ,-.246,-.8334,.4948,-.246,-.8334,.4948,.6101,.3539,.7089,.499,-.7212,-.4805,-.131,-.6233,.7709,.3478,.4827,.8037,.2482,-.6589,.71,.2134,.9687,.1265,.7305,.4858,-.4799,.7669,.5336,.3565,-.0778,.6307,.7721,.0462,.3166,.9474,.3597,-.7607,-.5402,.4516,.7245,-.5207,.4516,.7245,-.5207,-.0778,.6307,.7721,-.131,-.6233,.7709
                    ,.7669,.5336,.3565,.6376,-.6075,-.4736,.6865,-.6475,.3306,.3478,.4827,.8037,.2482,-.6589,.71,.6376,-.6075,-.4736,.2482,-.6589,.71,.6865,-.6475,.3306,.3478,.4827,.8037,.3678,-.7232,-.5845,.7305,.4858,-.4799,.7224,.516,-.4603,0,.6392,.769,.9662,.2155,-.1416,.5437,.6392,.5437,.769,.6392,0,.9662,.2155,-.1416
                    ,.6847,-.6853,-.2481,0,.6392,-.769,.053,.23,-.9717,-.5728,.6019,-.5564,-.769,.6392,0,.769,.6392,0,.5437,.6392,.5437,0,.6392,.769,0,.6392,.769,-.5437,.6392,.5437,-.5437,.6392,-.5437,0,.6392,-.769,0,.6392,-.769,.5437,.6392,-.5437,.769,.6392,0,.769,.6392,0,0,.6392,.769
                    ,-.6093,-.7868,.0983,-.7125,-.6444,-.2774,-.769,.6392,0,.3597,-.7607,-.5402,-.5437,.6392,.5437,-.6093,-.7868,.0983,.499,-.7212,-.4805,.6847,-.6853,-.2481,.6847,-.6853,-.2481,-.6093,-.7868,.0983,-.4493,.4492,-.7722,.6847,-.6853,-.2481,.7568,.1592,-.6339,.8112,.4844,-.3275,.053,.23,-.9717,-.4493,.4492,-.7722,.8112,.4844,-.3275
                    ,-.0928,-.886,-.4544,-.5332,-.7487,-.3938,-.5451,-.597,-.5886,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7327,.6804,.0126,.7515,-.6521,.1001,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.7327,.6804,.0126,.5915,.5141,-.6211,.7515,-.6521,.1001,.5771,-.597,-.5572,-.5451,-.597,-.5886,-.5559,.5141,-.6532,-.9687,.1924,.1569
                    ,-.6606,-.6894,.2973,-.4623,-.7775,.4264,-.7129,.6067,.3515,-.0928,-.886,-.4544,.053,.23,-.9717,.0981,.5493,-.8298,-.5959,.6179,.5129,-.5141,-.653,.5561,-.7968,-.604,-.0158,-.8233,.5666,-.0334,.2464,-.6692,-.701,.0981,.5493,-.8298,-.4623,-.7775,.4264,-.5141,-.653,.5561,-.5959,.6179,.5129,.2417,.6733,-.6987,-.4484,.6003,-.6622
                    ,-.4484,.6003,-.6622,-.8233,.5666,-.0334,.2745,.5666,-.7768,-.4355,-.6299,-.6431,-.7968,-.604,-.0158,.281,-.604,-.7458,.3311,-.801,-.4988,.2338,.2617,.9364,.1871,-.8462,.499,.6658,-.6399,.3838,.2338,.2617,.9364,.4044,.7185,.5658,-.7155,.6953,-.0673,-.6645,-.7031,-.2532,-.6544,-.5635,.5042,-.7155,.6953,-.0673,.4044,.7185,.5658
                    ,-.7125,-.6444,-.2774,-.6645,-.7031,-.2532,.6658,-.6399,.3838,.6206,-.7745,.1223,.5821,.6427,.498,.4452,.5213,.728,.4445,-.5635,.6962,.6206,-.7745,.1223,.4445,-.5635,.6962,-.6658,.5213,.5337,.4452,.5213,.728,-.6658,.5213,.5337,-.246,-.8334,.4948,.1871,-.8462,.499,-.246,-.8334,.4948,.6101,.3539,.7089,.3014,.9177,.2588
                    ,.499,-.7212,-.4805,-.131,-.6233,.7709,-.0778,.6307,.7721,.4516,.7245,-.5207,.3597,-.7607,-.5402,.3678,-.7232,-.5845,.7224,.516,-.4603,.4516,.7245,-.5207,-.0778,.6307,.7721,.7669,.5336,.3565,.7305,.4858,-.4799,.3478,.4827,.8037,.7669,.5336,.3565,.6865,-.6475,.3306,.6376,-.6075,-.4736,.2482,-.6589,.71,.3478,.4827,.8037
                    ,.3678,-.7232,-.5845,.6376,-.6075,-.4736,.7305,.4858,-.4799
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.4184,.6151,.3781,.6598,.3625,.6174,.8051,.7983,.9953,.5388,.8445,.819,.8509,.1792,.7749,.1231,.817,.1043,.2466,.6151,.2994,.9304,.2434,.9304,.2207,.278,.1704,.2776
                    ,.1938,.2605,1,.4598,.8129,.1961,.8509,.1792,.5129,.8884,.5394,.8148,.5602,.9171,.9661,.4749,.7637,.2217,.2703,.2843,.3314,.2385,.3158,.3185,.6593,0,.4903,.2723,.4583,.2497,.5354,.3042,.5227,.3962,.4875,.3713,.6878,.0202,.4903,.2723,.1229,.9411,.1582,.8593,.2434,.8932,.3076,.3774,.3469,.4758
                    ,.2543,.399,.7564,.0687,.5671,.3266,.8722,.1213,.8509,.1792,.9167,.4977,.7564,.773,.2048,.3926,.4277,.6151,.4382,.6779,.4184,.6807,.1648,.6462,.2161,.6475,.1686,.6619,.7637,.2217,.7821,.171,.0798,.8471,.1307,.8215,.1648,.8471,.0943,.7591,.1095,.616,.1281,.7619,.0811,.8175,.1281,.7619,.2161,.6475
                    ,.1969,.7226,.1686,.6619,.1521,.2164,.7355,.5711,.7295,.5606,.7355,.5605,.2434,.8561,.2328,.8593,.1329,.2219,.1006,.073,.1521,.2164,.4563,.8289,.4498,.8299,.3236,.2162,.3832,.1661,.3963,.1653,.406,.1737,.4947,.8216,.5156,.8093,0,.8792,.0567,.8401,.0798,.9076,.3017,.2058,.6444,.9129,.5959,.8088
                    ,.6373,.8072,.4937,.7248,.5557,.5605,.5583,.5605,.041,.7385,.0798,.6162,.0624,.744,.6373,.8072,.6115,.7229,.6336,.7221,.0166,.8297,.0567,.8401,.4807,.7251,.5033,.7333,.6276,.5626,.6319,.5605,.6321,.5625,.7321,.5889,.7295,.5846,.7321,.5846,.5602,.5622,.5033,.7333,.4583,.0017,.4537,.0001,.4563,0
                    ,.6336,.7221,.616,.4343,.693,.4912,.6767,.5125,.6424,.4,.7295,.8478,.6779,.7354,.7223,.7391,.3551,.6151,.3124,.7215,.2994,.6204,.4243,.5286,.4555,.6151,.4096,.5351,.3124,.7215,.3323,.8102,.3169,.8151,.3628,.4557,.6779,.7354,.6833,.6526,.7295,.5795,.7326,.5846,.7295,.5846,.656,.6504,.6745,.5609
                    ,.6833,.6526,.7564,.5564,.7532,.5605,.3522,.8999,.3169,.8151,.1551,.416,.1354,.4586,.1157,.4489,.1088,.4287,.1361,.3922,.763,.8689,.8441,.8664,.8189,.9111,.186,.4199,.8445,.819,.1592,.3585,.8788,.9338,.9953,.9934,.9915,1,.3768,.7097,.4184,.8189,.4141,.8205,.3564,.7014,.3551,.6396,.8472,.0767
                    ,.9092,.0947,.3973,.7018,.8968,.9021,.8788,.9338,.7295,.5755,.7374,.5713,.7374,.5755,.7295,.5795,.7374,.5795,0,.4891,.0056,.4954,.0014,.4934,.4098,.8188,.8914,.063,1,.0067,.4093,.6585,.9602,.5203,.8509,.1792,.2466,.6151,.2966,.6151,.2994,.9304,.1674,.2995,.9222,.4977,.7637,.2217,.4903,.2723
                    ,.728,.0487,.2434,.8932,.2434,.9411,.2081,.975,.2081,.975,.1582,.975,.1229,.8932,.1582,.8593,.1582,.8593,.2081,.8593,.2434,.8932,.2434,.8932,.2081,.975,.3076,.3774,.3628,.4557,.728,.0487,.8472,.0767,.9167,.4977,.3076,.3774,.1592,.3585,.1674,.2995,.1674,.2995,.3076,.3774,.4563,.6212,.1648,.6462
                    ,.2434,.6151,.2161,.6475,.7637,.2217,.7564,.1844,.7821,.171,.0798,.8471,.0811,.8175,.0984,.6151,.0811,.8175,.1281,.7619,.2161,.6475,.2293,.7128,.1329,.2219,.1521,.2164,.7295,.5713,.2293,.7128,.2434,.8561,.1329,.2219,.0943,.0748,.1006,.073,.4563,.8289,.4583,.9001,0,.8792,.0166,.8297,.0567,.8401
                    ,.6444,.9129,.5602,.9129,.5959,.8088,.4807,.7251,.041,.7385,.0754,.6151,.0798,.6162,.6373,.8072,.5959,.8088,.0166,.8297,.041,.7385,.4807,.7251,.5033,.7333,.6274,.5606,.7321,.5889,.7295,.5889,.5602,.5622,.4563,0,.4583,.0017,.4537,.0001,.6336,.7221,.7295,.8478,.6444,.8478,.6779,.7354,.3551,.6151
                    ,.3383,.7257,.3124,.7215,.4243,.5286,.4583,.6139,.3124,.7215,.3383,.7257,.3628,.4557,.4243,.5286,.6779,.7354,.656,.6504,.6833,.6526,.7326,.5795,.7326,.5846,.656,.6504,.6692,.5605,.7564,.5564,.3551,.899,.3522,.8999,.186,.4199,.763,.8689,.186,.4199,.8445,.819,.866,.878,.1592,.3585,.8788,.9338
                    ,.8968,.9021,.3973,.7018,.8472,.0767,.8914,.063,.4093,.6585,.3973,.7018,.8968,.9021,.7295,.5755,.7295,.5713,.7295,.5795,.7295,.5755,.0014,.4934,0,.4891,.0056,.4954,.4098,.8188,.8914,.063,.9963,0,1,.0067
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#2");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 307, 96, 492, this);
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
            clean(2);
        };
        return choinka_001;
    })(BABYLON.Mesh);
    map01.choinka_001 = choinka_001;

    var Circle_071 = (function (_super) {
        __extends(Circle_071, _super);
        function Circle_071(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -78.7945;
            this.position.y  = 1.3929;
            this.position.z  = 48.9883;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#3");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_071.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(3);
        };
        return Circle_071;
    })(BABYLON.Mesh);
    map01.Circle_071 = Circle_071;

    var Circle_070 = (function (_super) {
        __extends(Circle_070, _super);
        function Circle_070(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -71.6473;
            this.position.y  = 1.0632;
            this.position.z  = 48.9883;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#4");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_070.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(4);
        };
        return Circle_070;
    })(BABYLON.Mesh);
    map01.Circle_070 = Circle_070;

    var Circle_069 = (function (_super) {
        __extends(Circle_069, _super);
        function Circle_069(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -64.497;
            this.position.y  = 1.273;
            this.position.z  = 48.9883;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#5");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_069.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(5);
        };
        return Circle_069;
    })(BABYLON.Mesh);
    map01.Circle_069 = Circle_069;

    var Circle_068 = (function (_super) {
        __extends(Circle_068, _super);
        function Circle_068(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -67.1765;
            this.position.y  = 1.3929;
            this.position.z  = 41.0889;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#6");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_068.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(6);
        };
        return Circle_068;
    })(BABYLON.Mesh);
    map01.Circle_068 = Circle_068;

    var Circle_067 = (function (_super) {
        __extends(Circle_067, _super);
        function Circle_067(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -75.9682;
            this.position.y  = 1.273;
            this.position.z  = 41.9379;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#7");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_067.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(7);
        };
        return Circle_067;
    })(BABYLON.Mesh);
    map01.Circle_067 = Circle_067;

    var Circle_066 = (function (_super) {
        __extends(Circle_066, _super);
        function Circle_066(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -78.6389;
            this.position.y  = 1.273;
            this.position.z  = 27.3324;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#8");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_066.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(8);
        };
        return Circle_066;
    })(BABYLON.Mesh);
    map01.Circle_066 = Circle_066;

    var Circle_065 = (function (_super) {
        __extends(Circle_065, _super);
        function Circle_065(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -68.6633;
            this.position.y  = 1.3929;
            this.position.z  = 26.4834;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#9");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_065.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(9);
        };
        return Circle_065;
    })(BABYLON.Mesh);
    map01.Circle_065 = Circle_065;

    var Circle_064 = (function (_super) {
        __extends(Circle_064, _super);
        function Circle_064(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -64.497;
            this.position.y  = 1.273;
            this.position.z  = 34.3828;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#10");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_064.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(10);
        };
        return Circle_064;
    })(BABYLON.Mesh);
    map01.Circle_064 = Circle_064;

    var Circle_063 = (function (_super) {
        __extends(Circle_063, _super);
        function Circle_063(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -71.6473;
            this.position.y  = 1.0632;
            this.position.z  = 34.3828;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#11");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_063.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(11);
        };
        return Circle_063;
    })(BABYLON.Mesh);
    map01.Circle_063 = Circle_063;

    var Circle_062 = (function (_super) {
        __extends(Circle_062, _super);
        function Circle_062(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -78.7945;
            this.position.y  = 1.3929;
            this.position.z  = 34.3828;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#12");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_062.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(12);
        };
        return Circle_062;
    })(BABYLON.Mesh);
    map01.Circle_062 = Circle_062;

    var Circle_061 = (function (_super) {
        __extends(Circle_061, _super);
        function Circle_061(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -78.7945;
            this.position.y  = 1.3929;
            this.position.z  = 19.3264;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#13");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_061.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(13);
        };
        return Circle_061;
    })(BABYLON.Mesh);
    map01.Circle_061 = Circle_061;

    var Circle_060 = (function (_super) {
        __extends(Circle_060, _super);
        function Circle_060(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -72.4805;
            this.position.y  = 1.0632;
            this.position.z  = 20.2439;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#14");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_060.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(14);
        };
        return Circle_060;
    })(BABYLON.Mesh);
    map01.Circle_060 = Circle_060;

    var Circle_059 = (function (_super) {
        __extends(Circle_059, _super);
        function Circle_059(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -63.1812;
            this.position.y  = 1.273;
            this.position.z  = 19.3264;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#15");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_059.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(15);
        };
        return Circle_059;
    })(BABYLON.Mesh);
    map01.Circle_059 = Circle_059;

    var Circle_058 = (function (_super) {
        __extends(Circle_058, _super);
        function Circle_058(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -68.6633;
            this.position.y  = 1.3929;
            this.position.z  = 11.427;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#16");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_058.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(16);
        };
        return Circle_058;
    })(BABYLON.Mesh);
    map01.Circle_058 = Circle_058;

    var Circle_057 = (function (_super) {
        __extends(Circle_057, _super);
        function Circle_057(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -75.9682;
            this.position.y  = 1.273;
            this.position.z  = 12.2759;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#17");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_057.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(17);
        };
        return Circle_057;
    })(BABYLON.Mesh);
    map01.Circle_057 = Circle_057;

    var Circle_056 = (function (_super) {
        __extends(Circle_056, _super);
        function Circle_056(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -75.9682;
            this.position.y  = 1.273;
            this.position.z  = -2.8394;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#18");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_056.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(18);
        };
        return Circle_056;
    })(BABYLON.Mesh);
    map01.Circle_056 = Circle_056;

    var Circle_055 = (function (_super) {
        __extends(Circle_055, _super);
        function Circle_055(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -68.6633;
            this.position.y  = 1.3929;
            this.position.z  = -3.6884;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#19");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_055.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(19);
        };
        return Circle_055;
    })(BABYLON.Mesh);
    map01.Circle_055 = Circle_055;

    var Circle_054 = (function (_super) {
        __extends(Circle_054, _super);
        function Circle_054(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -64.497;
            this.position.y  = 1.273;
            this.position.z  = 4.211;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#20");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_054.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(20);
        };
        return Circle_054;
    })(BABYLON.Mesh);
    map01.Circle_054 = Circle_054;

    var Circle_053 = (function (_super) {
        __extends(Circle_053, _super);
        function Circle_053(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -71.6473;
            this.position.y  = 1.0632;
            this.position.z  = 4.211;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#21");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_053.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(21);
        };
        return Circle_053;
    })(BABYLON.Mesh);
    map01.Circle_053 = Circle_053;

    var Circle_052 = (function (_super) {
        __extends(Circle_052, _super);
        function Circle_052(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -78.7945;
            this.position.y  = 1.3929;
            this.position.z  = 4.211;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#22");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_052.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(22);
        };
        return Circle_052;
    })(BABYLON.Mesh);
    map01.Circle_052 = Circle_052;

    var Circle_051 = (function (_super) {
        __extends(Circle_051, _super);
        function Circle_051(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -44.9398;
            this.position.y  = 1.3929;
            this.position.z  = 42.0436;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#23");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_051.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(23);
        };
        return Circle_051;
    })(BABYLON.Mesh);
    map01.Circle_051 = Circle_051;

    var Circle_050 = (function (_super) {
        __extends(Circle_050, _super);
        function Circle_050(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.0869;
            this.position.y  = 1.0632;
            this.position.z  = 42.0436;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#24");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_050.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(24);
        };
        return Circle_050;
    })(BABYLON.Mesh);
    map01.Circle_050 = Circle_050;

    var Circle_049 = (function (_super) {
        __extends(Circle_049, _super);
        function Circle_049(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -59.2373;
            this.position.y  = 1.273;
            this.position.z  = 42.0436;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#25");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_049.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(25);
        };
        return Circle_049;
    })(BABYLON.Mesh);
    map01.Circle_049 = Circle_049;

    var Circle_048 = (function (_super) {
        __extends(Circle_048, _super);
        function Circle_048(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -55.0709;
            this.position.y  = 1.3929;
            this.position.z  = 49.943;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#26");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_048.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(26);
        };
        return Circle_048;
    })(BABYLON.Mesh);
    map01.Circle_048 = Circle_048;

    var Circle_047 = (function (_super) {
        __extends(Circle_047, _super);
        function Circle_047(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -47.7661;
            this.position.y  = 1.273;
            this.position.z  = 49.0941;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#27");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_047.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(27);
        };
        return Circle_047;
    })(BABYLON.Mesh);
    map01.Circle_047 = Circle_047;

    var Circle_046 = (function (_super) {
        __extends(Circle_046, _super);
        function Circle_046(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -47.7661;
            this.position.y  = 1.273;
            this.position.z  = 33.9033;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#28");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_046.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(28);
        };
        return Circle_046;
    })(BABYLON.Mesh);
    map01.Circle_046 = Circle_046;

    var Circle_045 = (function (_super) {
        __extends(Circle_045, _super);
        function Circle_045(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -55.0709;
            this.position.y  = 1.3929;
            this.position.z  = 32.7783;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#29");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_045.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(29);
        };
        return Circle_045;
    })(BABYLON.Mesh);
    map01.Circle_045 = Circle_045;

    var Circle_044 = (function (_super) {
        __extends(Circle_044, _super);
        function Circle_044(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -61.4703;
            this.position.y  = 1.273;
            this.position.z  = 26.8529;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#30");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_044.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(30);
        };
        return Circle_044;
    })(BABYLON.Mesh);
    map01.Circle_044 = Circle_044;

    var Circle_043 = (function (_super) {
        __extends(Circle_043, _super);
        function Circle_043(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -51.1218;
            this.position.y  = 1.0632;
            this.position.z  = 24.8878;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#31");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_043.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(31);
        };
        return Circle_043;
    })(BABYLON.Mesh);
    map01.Circle_043 = Circle_043;

    var Circle_042 = (function (_super) {
        __extends(Circle_042, _super);
        function Circle_042(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -44.9398;
            this.position.y  = 1.3929;
            this.position.z  = 26.8529;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#32");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_042.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(32);
        };
        return Circle_042;
    })(BABYLON.Mesh);
    map01.Circle_042 = Circle_042;

    var Circle_041 = (function (_super) {
        __extends(Circle_041, _super);
        function Circle_041(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -44.9398;
            this.position.y  = 1.3929;
            this.position.z  = 11.3944;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#33");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_041.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(33);
        };
        return Circle_041;
    })(BABYLON.Mesh);
    map01.Circle_041 = Circle_041;

    var Circle_040 = (function (_super) {
        __extends(Circle_040, _super);
        function Circle_040(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.0869;
            this.position.y  = 1.0632;
            this.position.z  = 11.3944;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#34");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_040.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(34);
        };
        return Circle_040;
    })(BABYLON.Mesh);
    map01.Circle_040 = Circle_040;

    var Circle_039 = (function (_super) {
        __extends(Circle_039, _super);
        function Circle_039(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -59.2373;
            this.position.y  = 1.273;
            this.position.z  = 11.3944;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#35");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_039.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(35);
        };
        return Circle_039;
    })(BABYLON.Mesh);
    map01.Circle_039 = Circle_039;

    var Circle_038 = (function (_super) {
        __extends(Circle_038, _super);
        function Circle_038(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -55.0709;
            this.position.y  = 1.3929;
            this.position.z  = 19.2937;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#36");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_038.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(36);
        };
        return Circle_038;
    })(BABYLON.Mesh);
    map01.Circle_038 = Circle_038;

    var Circle_037 = (function (_super) {
        __extends(Circle_037, _super);
        function Circle_037(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -47.7661;
            this.position.y  = 1.273;
            this.position.z  = 18.4448;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#37");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_037.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(37);
        };
        return Circle_037;
    })(BABYLON.Mesh);
    map01.Circle_037 = Circle_037;

    var Circle_036 = (function (_super) {
        __extends(Circle_036, _super);
        function Circle_036(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -115.6455;
            this.position.y  = 1.273;
            this.position.z  = 113.758;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#38");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_036.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(38);
        };
        return Circle_036;
    })(BABYLON.Mesh);
    map01.Circle_036 = Circle_036;

    var Circle_035 = (function (_super) {
        __extends(Circle_035, _super);
        function Circle_035(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -122.9503;
            this.position.y  = 1.3929;
            this.position.z  = 114.6069;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#39");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_035.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(39);
        };
        return Circle_035;
    })(BABYLON.Mesh);
    map01.Circle_035 = Circle_035;

    var Circle_034 = (function (_super) {
        __extends(Circle_034, _super);
        function Circle_034(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -127.1166;
            this.position.y  = 1.273;
            this.position.z  = 106.7076;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#40");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_034.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(40);
        };
        return Circle_034;
    })(BABYLON.Mesh);
    map01.Circle_034 = Circle_034;

    var Circle_033 = (function (_super) {
        __extends(Circle_033, _super);
        function Circle_033(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -119.9663;
            this.position.y  = 1.0632;
            this.position.z  = 106.7076;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#41");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_033.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(41);
        };
        return Circle_033;
    })(BABYLON.Mesh);
    map01.Circle_033 = Circle_033;

    var Circle_032 = (function (_super) {
        __extends(Circle_032, _super);
        function Circle_032(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -112.8191;
            this.position.y  = 1.3929;
            this.position.z  = 106.7076;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#42");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_032.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(42);
        };
        return Circle_032;
    })(BABYLON.Mesh);
    map01.Circle_032 = Circle_032;

    var Circle_031 = (function (_super) {
        __extends(Circle_031, _super);
        function Circle_031(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -112.8191;
            this.position.y  = 1.3929;
            this.position.z  = 122.1661;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#43");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_031.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(43);
        };
        return Circle_031;
    })(BABYLON.Mesh);
    map01.Circle_031 = Circle_031;

    var Circle_030 = (function (_super) {
        __extends(Circle_030, _super);
        function Circle_030(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -119.9663;
            this.position.y  = 1.0632;
            this.position.z  = 122.1661;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#44");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_030.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(44);
        };
        return Circle_030;
    })(BABYLON.Mesh);
    map01.Circle_030 = Circle_030;

    var Circle_029 = (function (_super) {
        __extends(Circle_029, _super);
        function Circle_029(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -127.1166;
            this.position.y  = 1.273;
            this.position.z  = 122.1661;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#45");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_029.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(45);
        };
        return Circle_029;
    })(BABYLON.Mesh);
    map01.Circle_029 = Circle_029;

    var Circle_028 = (function (_super) {
        __extends(Circle_028, _super);
        function Circle_028(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -122.9503;
            this.position.y  = 1.3929;
            this.position.z  = 130.0655;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#46");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_028.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(46);
        };
        return Circle_028;
    })(BABYLON.Mesh);
    map01.Circle_028 = Circle_028;

    var Circle_027 = (function (_super) {
        __extends(Circle_027, _super);
        function Circle_027(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -115.6455;
            this.position.y  = 1.273;
            this.position.z  = 129.2165;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#47");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_027.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(47);
        };
        return Circle_027;
    })(BABYLON.Mesh);
    map01.Circle_027 = Circle_027;

    var Circle_026 = (function (_super) {
        __extends(Circle_026, _super);
        function Circle_026(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -115.6455;
            this.position.y  = 1.273;
            this.position.z  = 144.4073;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#48");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_026.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(48);
        };
        return Circle_026;
    })(BABYLON.Mesh);
    map01.Circle_026 = Circle_026;

    var Circle_025 = (function (_super) {
        __extends(Circle_025, _super);
        function Circle_025(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -122.9503;
            this.position.y  = 1.3929;
            this.position.z  = 145.2562;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#49");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_025.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(49);
        };
        return Circle_025;
    })(BABYLON.Mesh);
    map01.Circle_025 = Circle_025;

    var Circle_024 = (function (_super) {
        __extends(Circle_024, _super);
        function Circle_024(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -127.1166;
            this.position.y  = 1.273;
            this.position.z  = 137.3568;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#50");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_024.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(50);
        };
        return Circle_024;
    })(BABYLON.Mesh);
    map01.Circle_024 = Circle_024;

    var Circle_023 = (function (_super) {
        __extends(Circle_023, _super);
        function Circle_023(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -119.9663;
            this.position.y  = 1.0632;
            this.position.z  = 137.3568;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#51");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_023.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(51);
        };
        return Circle_023;
    })(BABYLON.Mesh);
    map01.Circle_023 = Circle_023;

    var Circle_022 = (function (_super) {
        __extends(Circle_022, _super);
        function Circle_022(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -112.8191;
            this.position.y  = 1.3929;
            this.position.z  = 137.3568;
            this.rotation.x  = 0;
            this.rotation.y  = 3.1416;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#52");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_022.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(52);
        };
        return Circle_022;
    })(BABYLON.Mesh);
    map01.Circle_022 = Circle_022;

    var Circle_021 = (function (_super) {
        __extends(Circle_021, _super);
        function Circle_021(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -146.6739;
            this.position.y  = 1.3929;
            this.position.z  = 99.5242;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#53");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_021.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(53);
        };
        return Circle_021;
    })(BABYLON.Mesh);
    map01.Circle_021 = Circle_021;

    var Circle_020 = (function (_super) {
        __extends(Circle_020, _super);
        function Circle_020(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -139.5267;
            this.position.y  = 1.0632;
            this.position.z  = 99.5242;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#54");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_020.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(54);
        };
        return Circle_020;
    })(BABYLON.Mesh);
    map01.Circle_020 = Circle_020;

    var Circle_019 = (function (_super) {
        __extends(Circle_019, _super);
        function Circle_019(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -132.3763;
            this.position.y  = 1.273;
            this.position.z  = 99.5242;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#55");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_019.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(55);
        };
        return Circle_019;
    })(BABYLON.Mesh);
    map01.Circle_019 = Circle_019;

    var Circle_018 = (function (_super) {
        __extends(Circle_018, _super);
        function Circle_018(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -136.5427;
            this.position.y  = 1.3929;
            this.position.z  = 91.6248;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#56");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_018.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(56);
        };
        return Circle_018;
    })(BABYLON.Mesh);
    map01.Circle_018 = Circle_018;

    var Circle_017 = (function (_super) {
        __extends(Circle_017, _super);
        function Circle_017(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -143.8475;
            this.position.y  = 1.273;
            this.position.z  = 92.4738;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#57");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_017.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(57);
        };
        return Circle_017;
    })(BABYLON.Mesh);
    map01.Circle_017 = Circle_017;

    var Circle_016 = (function (_super) {
        __extends(Circle_016, _super);
        function Circle_016(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -143.8475;
            this.position.y  = 1.273;
            this.position.z  = 107.5891;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#58");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_016.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(58);
        };
        return Circle_016;
    })(BABYLON.Mesh);
    map01.Circle_016 = Circle_016;

    var Circle_015 = (function (_super) {
        __extends(Circle_015, _super);
        function Circle_015(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -136.5427;
            this.position.y  = 1.3929;
            this.position.z  = 106.7402;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#59");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_015.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(59);
        };
        return Circle_015;
    })(BABYLON.Mesh);
    map01.Circle_015 = Circle_015;

    var Circle_014 = (function (_super) {
        __extends(Circle_014, _super);
        function Circle_014(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -132.3763;
            this.position.y  = 1.273;
            this.position.z  = 114.6396;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#60");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_014.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(60);
        };
        return Circle_014;
    })(BABYLON.Mesh);
    map01.Circle_014 = Circle_014;

    var Circle_013 = (function (_super) {
        __extends(Circle_013, _super);
        function Circle_013(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -139.5267;
            this.position.y  = 1.0632;
            this.position.z  = 114.6396;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#61");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_013.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(61);
        };
        return Circle_013;
    })(BABYLON.Mesh);
    map01.Circle_013 = Circle_013;

    var Circle_012 = (function (_super) {
        __extends(Circle_012, _super);
        function Circle_012(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -146.6739;
            this.position.y  = 1.3929;
            this.position.z  = 114.6396;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#62");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_012.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(62);
        };
        return Circle_012;
    })(BABYLON.Mesh);
    map01.Circle_012 = Circle_012;

    var Circle_011 = (function (_super) {
        __extends(Circle_011, _super);
        function Circle_011(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -146.6739;
            this.position.y  = 1.3929;
            this.position.z  = 129.696;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#63");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_011.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(63);
        };
        return Circle_011;
    })(BABYLON.Mesh);
    map01.Circle_011 = Circle_011;

    var Circle_010 = (function (_super) {
        __extends(Circle_010, _super);
        function Circle_010(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -139.5267;
            this.position.y  = 1.0632;
            this.position.z  = 129.696;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#64");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_010.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(64);
        };
        return Circle_010;
    })(BABYLON.Mesh);
    map01.Circle_010 = Circle_010;

    var Circle_009 = (function (_super) {
        __extends(Circle_009, _super);
        function Circle_009(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -132.3763;
            this.position.y  = 1.273;
            this.position.z  = 129.696;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#65");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_009.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(65);
        };
        return Circle_009;
    })(BABYLON.Mesh);
    map01.Circle_009 = Circle_009;

    var Circle_008 = (function (_super) {
        __extends(Circle_008, _super);
        function Circle_008(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -136.5427;
            this.position.y  = 1.3929;
            this.position.z  = 121.7966;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#66");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_008.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(66);
        };
        return Circle_008;
    })(BABYLON.Mesh);
    map01.Circle_008 = Circle_008;

    var Circle_007 = (function (_super) {
        __extends(Circle_007, _super);
        function Circle_007(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -143.8475;
            this.position.y  = 1.273;
            this.position.z  = 122.6456;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#67");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_007.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(67);
        };
        return Circle_007;
    })(BABYLON.Mesh);
    map01.Circle_007 = Circle_007;

    var Circle_006 = (function (_super) {
        __extends(Circle_006, _super);
        function Circle_006(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -143.8475;
            this.position.y  = 1.273;
            this.position.z  = 137.2511;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#68");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_006.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(68);
        };
        return Circle_006;
    })(BABYLON.Mesh);
    map01.Circle_006 = Circle_006;

    var Circle_005 = (function (_super) {
        __extends(Circle_005, _super);
        function Circle_005(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -136.5427;
            this.position.y  = 1.3929;
            this.position.z  = 136.4021;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#69");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_005.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(69);
        };
        return Circle_005;
    })(BABYLON.Mesh);
    map01.Circle_005 = Circle_005;

    var Circle_003 = (function (_super) {
        __extends(Circle_003, _super);
        function Circle_003(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -132.3763;
            this.position.y  = 1.273;
            this.position.z  = 144.3015;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4905;
            this.scaling.y   = .4905;
            this.scaling.z   = .4905;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#70");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_003.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(70);
        };
        return Circle_003;
    })(BABYLON.Mesh);
    map01.Circle_003 = Circle_003;

    var Circle_002 = (function (_super) {
        __extends(Circle_002, _super);
        function Circle_002(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -139.5267;
            this.position.y  = 1.0632;
            this.position.z  = 144.3015;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .4201;
            this.scaling.y   = .4201;
            this.scaling.z   = .4201;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#71");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_002.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(71);
        };
        return Circle_002;
    })(BABYLON.Mesh);
    map01.Circle_002 = Circle_002;

    var Circle_001 = (function (_super) {
        __extends(Circle_001, _super);
        function Circle_001(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -146.6739;
            this.position.y  = 1.3929;
            this.position.z  = 144.3015;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = .112;
            this.scaling.x   = .5289;
            this.scaling.y   = .5289;
            this.scaling.z   = .5289;

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
                    1.0047,8.4564,-.0161,9.782,-3.608,-.0161,6.4458,-3.2327,6.6976,-10.2336,-1.3564,-.0161,-6.8973,-1.7317,6.6976,-6.8973,-1.7317,-6.7297,-.2258,-2.4822,-10.087,6.4458,-3.2327,-6.7297,-.2258,-2.4822,10.0549,.8904,13.2045,-.0161,8.3397,1.3733,-.0161,5.6675,1.5057,5.3341,-7.6919,2.1675,-.0161,-5.0197,2.0351,5.3341,-5.0197,2.0351,-5.3662,.3239,1.7704,-8.0417,5.6675,1.5057,-5.3662
                    ,.3239,1.7704,8.0096,.9762,18.938,-.0161,7.0424,6.1012,-.0161,4.933,6.1446,4.2031,-5.6129,6.3616,-.0161,-3.5035,6.3182,4.2031,-3.5035,6.3182,-4.2352,.7147,6.2314,-6.345,4.933,6.1446,-4.2352,.7147,6.2314,6.3129,1.2673,24.8143,-.0161,6.2124,11.2014,-.0161,4.5639,11.2014,3.2805,-3.6778,11.2014,-.0161,-2.0293,11.2014,3.2805,-2.0293,11.2014,-3.3126,1.2673,11.2014,-4.9612
                    ,4.5639,11.2014,-3.3126,1.2673,11.2014,4.9291,-.9191,-1.4547,1.2906,.223,-.158,.9844,.1128,-1.5708,1.4986,.9886,-1.6693,.9114,.8804,-.2319,.5437,1.1952,-1.6926,-.127,1.0355,-.2494,-.2357,.6117,-1.6269,-1.0084,.5975,-.2001,-.8972,-.4202,-1.5109,-1.2163,-.8343,-.0391,-.6125,-1.296,-1.4123,-.6291,1.1547,1.9318,-.5056,.7588,1.9763,-1.1036,-.9894,-.0216,.1668
                    ,-1.5027,-1.3891,.4093,-.5514,-.0709,.8283,2.2519,-3.2478,-.1397,-.5058,-2.9376,-1.9993,-2.3537,-2.7297,.7759,-.6757,2.1377,-.1418,.4203,2.0144,.5973,1.0145,1.9476,.1989,-.177,-.113,-1.0532,.0587,2.0551,-1.2447,-.2798,2.0932,.4562,-.5355,2.1219,-.8463,-1.3575,-2.8418,2.2804,-2.0009,-2.7694,-.9968,1.2558,-3.1357,-1.6443,1.8991,-3.2081,1.6329,.404,-3.0399,2.6354
                    
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,0,6,7,0,0,7,1,4,0,8,2,8,0,0,3,5,9,10,11,12,9,13,14,15,9,15,16,9,9,16,10,13,9,17,11,17,9,9,12,14,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,25,19,22,18,26,20,26,18,18,21,23,27,28,29,30,27,31,32,33,27,33,34,27,27,34,28,31,27,35,29,35,27,27,30,32,36,37,38,37
                ,39,38,40,41,39,42,43,41,44,45,43,45,46,47,44,48,49,47,50,51,51,52,36,53,54,55,46,56,50,40,57,58,59,49,60,50,61,52,52,57,37,42,58,48,59,62,46,55,36,63
                ,64,51,55,45,64,54,43,54,65,41,65,53,39,53,66,67,39,66,63,38,67,36,52,37,37,40,39,40,42,41,42,44,43,44,59,45,45,59,46,44,42,48,47,46,50,51,50,52,55,63
                ,67,67,66,53,53,65,54,54,64,55,55,67,53,46,62,56,40,37,57,59,44,49,50,56,61,52,61,57,42,40,58,59,60,62,55,51,36,64,47,51,45,47,64,43,45,54,41,43,65,39
                ,41,53,67,38,39,63,36,38]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .1118,.9937,0,.8086,.5883,0,.6051,.5892,.5354,-.6577,.7533,0,-.4591,.7089,.5354,-.4591,.7089,-.5354,.0754,.6708,-.7378,.6051,.5892,-.5354,.0754,.6708,.7378,.0495,.9987,0,.8462,.5328,0,.6164,.5215,.5899,-.7894,.6138,0,-.5619,.5799,.5899,-.5619,.5799,-.5899,.0284,.5733,-.8188,.6164,.5215,-.5899
                    ,.0284,.5733,.8188,.0206,.9998,0,.9041,.4272,0,.6487,.4117,.6401,-.8858,.4641,0,-.6312,.438,.6401,-.6312,.438,-.6401,.0092,.4457,-.8951,.6487,.4117,-.6401,.0092,.4457,.8951,0,1,0,.9399,.3414,0,.6689,.324,.6689,-.9399,.3414,0,-.6689,.324,.6689,-.6689,.324,-.6689,0,.3414,-.9399
                    ,.6689,.324,-.6689,0,.3414,.9399,-.4557,.5168,.7247,.2186,.2416,.9454,.2033,.4987,.8426,.7584,.4362,.4843,.8321,.1212,.5411,.9153,.3618,-.1767,.9812,.011,-.1924,.5384,.3166,-.7809,.5596,-.0237,-.8284,-.1712,.3322,-.9275,-.8141,.1662,-.5565,-.7549,.4009,-.5191,.9709,-.081,-.2254,.529,-.1189,-.8402,-.9417,.2772,.1905
                    ,-.8617,.4777,.1709,-.5071,.3062,.8056,.876,-.4551,-.1594,-.1968,-.4205,-.8857,-.9193,-.3392,.1994,-.9731,.1644,.1614,.2125,.1527,.9651,.847,.0318,.5306,-.1875,.0402,-.9814,-.1985,-.0648,-.9779,-.5483,.2081,.8099,-.8155,.0504,-.5765,-.5242,-.3365,.7822,-.7837,-.3769,-.4936,.4923,-.4508,-.7445,.7382,-.4255,.5234,.1621,-.3748,.9128
                    
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001
                    ,.8344,.1656,.5,.9999,.5,.5,.9999,.5,.8344,.8344,.0001,.5,.1656,.8344,.1656,.1656,.5,.0001,.8344,.1656,.5,.9999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#72");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 32, 96, 162, this);
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

        Circle_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(72);
        };
        return Circle_001;
    })(BABYLON.Mesh);
    map01.Circle_001 = Circle_001;

    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 59.0077;
            this.position.y  = -.2495;
            this.position.z  = -54.4497;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 5.8705;
            this.scaling.y   = 5.8705;
            this.scaling.z   = 5.8705;

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
                    .3827,0,-.9239,-.9239,0,-.3827,.9239,0,.3827,0,.0494,-1,1,.0494,0,-1,.0494,0,-.8315,0,-.5556,-.9239,.0494,-.3827,.9808,0,.1951,1,0,0,-.7071,0,-.7071,-.8315,.0494,-.5556,.9808,.0494,.1951,-.5556,0,-.8315,-.7071,.0494,-.7071,.8315,0,.5556,.9239,.0494,.3827
                    ,-.3827,0,-.9239,-.5556,.0494,-.8315,-.1951,0,.9808,0,.0494,1,0,0,1,.7071,0,.7071,.8315,.0494,.5556,-.1951,0,-.9808,-.3827,.0494,-.9239,-.3827,0,.9239,-.1951,.0494,.9808,.5556,0,.8315,.7071,.0494,.7071,0,0,-1,-.1951,.0494,-.9808,-.5556,0,.8315,-.3827,.0494,.9239
                    ,.3827,0,.9239,.5556,.0494,.8315,.1951,0,-.9808,-.7071,0,.7071,-.5556,.0494,.8315,.1951,0,.9808,.3827,.0494,.9239,.1951,.0494,-.9808,-.8315,0,.5556,-.7071,.0494,.7071,.1951,.0494,.9808,.5556,0,-.8315,.3827,.0494,-.9239,-.9239,0,.3827,-.8315,.0494,.5556,.7071,0,-.7071,.5556,.0494,-.8315
                    ,-.9808,0,.1951,-.9239,.0494,.3827,.8315,0,-.5556,.7071,.0494,-.7071,-1,0,0,-.9808,.0494,.1951,.9239,0,-.3827,.8315,.0494,-.5556,-.9808,0,-.1951,.9808,0,-.1951,.9239,.0494,-.3827,-.9808,.0494,-.1951,.9808,.0494,-.1951
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,1,8,4,9,10,11,6,2,12,8,13,14,10,15,16,2,17,18,13,19,20,21,22,23,15,24,25,17,26,27,19,28,29,22,30,31,24,32,33,26,34,35
                ,28,36,3,30,37,38,32,39,40,34,0,41,36,42,43,37,21,44,39,45,46,0,47,48,42,49,50,45,51,52,47,53,54,49,55,56,51,57,58,53,59,5,55,60,61,57,1,62,59,9
                ,63,60,26,19,21,21,39,26,34,28,22,22,15,2,2,8,9,9,60,2,57,53,0,49,45,0,0,36,30,30,24,17,17,13,10,10,6,1,1,59,55,55,51,1,47,42,37,37,32,26
                ,26,39,34,34,22,26,2,60,57,53,49,0,0,30,1,17,10,1,1,51,47,47,37,1,26,22,2,2,57,0,30,17,1,1,37,26,26,2,1,20,27,43,33,38,43,43,48,52,52,56
                ,43,5,62,7,7,11,14,14,18,25,25,31,14,3,41,46,46,50,54,54,58,61,61,63,54,4,12,16,16,23,29,29,35,40,40,44,29,27,33,43,43,56,5,5,7,3,14,31,3,3
                ,46,4,54,63,4,4,16,29,29,44,20,20,43,5,7,14,3,46,54,4,4,29,20,20,5,4,6,11,7,8,12,4,10,14,11,2,16,12,13,18,14,15,23,16,17,25,18,19,27,20
                ,22,29,23,24,31,25,26,33,27,28,35,29,30,3,31,32,38,33,34,40,35,36,41,3,37,43,38,39,44,40,0,46,41,42,48,43,21,20,44,45,50,46,47,52,48,49,54,50,51,56
                ,52,53,58,54,55,5,56,57,61,58,59,62,5,60,63,61,1,7,62,9,4,63]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .2785,-.6857,-.6725,-.6725,-.6857,-.2785,.6725,-.6857,.2785,0,.6857,-.7279,.7279,.6857,0,-.7279,.6857,0,-.6052,-.6857,-.4044,-.6725,.6857,-.2785,.7139,-.6857,.142,.7279,-.6857,0,-.5147,-.6857,-.5147,-.6052,.6857,-.4044,.7139,.6857,.142,-.4044,-.6857,-.6052,-.5147,.6857,-.5147,.6052,-.6857,.4044,.6725,.6857,.2785
                    ,-.2785,-.6857,-.6725,-.4044,.6857,-.6052,-.142,-.6857,.7139,0,.6857,.7279,0,-.6857,.7279,.5147,-.6857,.5147,.6052,.6857,.4044,-.142,-.6857,-.7139,-.2785,.6857,-.6725,-.2785,-.6857,.6725,-.142,.6857,.7139,.4044,-.6857,.6052,.5147,.6857,.5147,0,-.6857,-.7279,-.142,.6857,-.7139,-.4044,-.6857,.6052,-.2785,.6857,.6725
                    ,.2785,-.6857,.6725,.4044,.6857,.6052,.142,-.6857,-.7139,-.5147,-.6857,.5147,-.4044,.6857,.6052,.142,-.6857,.7139,.2785,.6857,.6725,.142,.6857,-.7139,-.6052,-.6857,.4044,-.5147,.6857,.5147,.142,.6857,.7139,.4044,-.6857,-.6052,.2785,.6857,-.6725,-.6725,-.6857,.2785,-.6052,.6857,.4044,.5147,-.6857,-.5147,.4044,.6857,-.6052
                    ,-.7139,-.6857,.142,-.6725,.6857,.2785,.6052,-.6857,-.4044,.5147,.6857,-.5147,-.7279,-.6857,0,-.7139,.6857,.142,.6725,-.6857,-.2785,.6052,.6857,-.4044,-.7139,-.6857,-.142,.7139,-.6857,-.142,.6725,.6857,-.2785,-.7139,.6857,-.142,.7139,.6857,-.142
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.007");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 64, 0, 372, this);
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

        Circle.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(73);
        };
        return Circle;
    })(BABYLON.Mesh);
    map01.Circle = Circle;

    var Cube_001 = (function (_super) {
        __extends(Cube_001, _super);
        function Cube_001(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 61.0829;
            this.position.y  = .8291;
            this.position.z  = -63.8242;
            this.rotation.x  = 0;
            this.rotation.y  = -1.5708;
            this.rotation.z  = 0;
            this.scaling.x   = 1.233;
            this.scaling.y   = .9206;
            this.scaling.z   = 2.1286;

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
                    -1,1,-1,-1,-1,1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,1,-1,-1,1,1,-1
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,5,6,4,7,2,6,4,2,1,3,7,5,0,3,1,3,5,4,5,7,6,7,0,2,4,6,2,3,0,7]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.5773,.5773,-.5773,-.5773,-.5773,.5773,-.5773,-.5773,-.5773,-.5773,.5773,.5773,.5773,-.5773,.5773,.5773,.5773,.5773,.5773,-.5773,-.5773,.5773,.5773,-.5773
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 8, 0, 36, this);
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

        Cube_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(74);
        };
        return Cube_001;
    })(BABYLON.Mesh);
    map01.Cube_001 = Cube_001;

    var Cube = (function (_super) {
        __extends(Cube, _super);
        function Cube(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 57.4174;
            this.position.y  = 1.1772;
            this.position.z  = -65.2397;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1.648;
            this.scaling.y   = 1.2305;
            this.scaling.z   = 2.845;

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
                    -1,1,-1,-1,-1,1,-1,-1,-1,0,-1,1,1,1,1,1,-1,1,1,-1,-1,0,-1,-1,-1,1,1,0,2.7037,-1,0,2.7037,1,1,1,-1
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,4,6,5,7,0,2,5,7,3,8,9,10,10,11,4,3,2,1,11,7,6,8,3,1,0,8,1,3,10,4,4,11,6,7,9,0,5,6,7,8,0,9,10,9
                ,11,3,7,2,11,9,7,8,10,3]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.7312,.1987,-.6525,-.5773,-.5773,.5773,-.5773,-.5773,-.5773,0,-.7071,.7071,.7312,.1987,.6525,.5773,-.5773,.5773,.5773,-.5773,-.5773,0,-.7071,-.7071,-.7312,.1987,.6525,0,.8317,-.5552,0,.8317,.5552,.7312,.1987,-.6525
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 60, this);
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

        Cube.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(75);
        };
        return Cube;
    })(BABYLON.Mesh);
    map01.Cube = Cube;

    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 150;
            this.scaling.y   = 50.1348;
            this.scaling.z   = 150;

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
                    1,0,-1,-1,0,1,-1,0,-1,1,0,1
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
                    0,0,1,1,0,1,1,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.ground");
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

        Plane.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(76);
        };
        return Plane;
    })(BABYLON.Mesh);
    map01.Plane = Plane;

    var body_002 = (function (_super) {
        __extends(body_002, _super);
        function body_002(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5938;
            this.position.y  = 1.3017;
            this.position.z  = .1109;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0798;
            this.scaling.y   = .0798;
            this.scaling.z   = .0924;

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
                    .0735,-9.9855,.0543,.6672,-14.969,.8779,.4263,-14.969,.0543,2.1297,-14.965,.8779,.4236,-16.2265,.9884,2.2003,-9.9796,1.4401,.5324,-9.9848,1.4401,2.0854,-9.9789,-1.3315,1.1642,-14.969,-.7694,2.1297,-14.965,-.7694,2.7696,-9.9789,.0543,2.5425,-14.965,.0543,2.4345,-16.222,-1.3166,.6575,-16.2265,-3.6216,.4236,-16.2265,-1.3166,2.4345,-16.222,-3.6216,2.4345,-16.222,.9884
                    ,.9666,-9.9855,-1.3315,-.0735,-9.9855,.0543,-.6672,-14.969,.8779,-.5324,-9.9848,1.4401,-.4236,-16.2265,.9884,-2.1297,-14.965,.8779,-2.2003,-9.9796,1.4401,-2.0854,-9.9789,-1.3315,-1.1642,-14.969,-.7694,-.9666,-9.9855,-1.3315,-2.7696,-9.9789,.0543,-2.1297,-14.965,-.7694,-2.4345,-16.222,-1.3166,-.6575,-16.2265,-3.6216,-2.4345,-16.222,-3.6216,-2.5425,-14.965,.0543,-.4263,-14.969,.0543
                    ,-.4236,-16.2265,-1.3166,-2.4345,-16.222,.9884
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,5,1,6,7,8,9,10,9,11,12,13,14,8,15,9,9,12,11,2,4,14,8,14,13,11,16,3,12,4,16,10,3,5,0,8,17,18,19,20,21,22,19,19,23
                ,20,24,25,26,27,28,24,29,30,31,31,25,28,29,28,32,33,21,19,25,34,33,35,32,22,21,29,35,22,27,23,25,18,26,0,6,1,3,16,4,5,3,1,7,17,8,10,7,9,12
                ,15,13,8,13,15,9,15,12,2,1,4,8,2,14,11,12,16,12,14,4,10,11,3,0,2,8,18,33,19,21,35,22,19,22,23,24,28,25,27,32,28,29,34,30,31,30,25,29,31,28
                ,33,34,21,25,30,34,35,29,32,21,34,29,22,32,27,25,33,18]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.9872,-.0834,-.1354,-.588,.0368,.808,-.9825,.1021,-.1557,.5098,.0522,.8587,-.5877,-.5302,.6112,.5405,-.1018,.8351,-.5687,-.1073,.8155,.5087,-.092,-.856,-.4928,.4576,-.7401,.6539,.3777,-.6555,.9981,-.0527,-.0301,.9986,.0511,.0143,.7688,-.6374,-.0516,-.5523,-.1632,-.8175,-.8406,-.5185,-.1566,.5636,-.1651,-.8094,.5725,-.5345,.6217
                    ,-.4693,-.1173,-.8751,.9872,-.0834,-.1354,.588,.0368,.808,.5687,-.1073,.8155,.5877,-.5302,.6112,-.5098,.0522,.8587,-.5405,-.1018,.8351,-.5087,-.092,-.856,.4928,.4576,-.7401,.4693,-.1173,-.8751,-.9981,-.0527,-.0301,-.6539,.3777,-.6555,-.7688,-.6374,-.0516,.5523,-.1632,-.8175,-.5636,-.1651,-.8094,-.9986,.0511,.0143,.9825,.1021,-.1557
                    ,.8406,-.5185,-.1566,-.5725,-.5345,.6217
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.004");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 168, this);
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

        body_002.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(77);
        };
        return body_002;
    })(BABYLON.Mesh);
    map01.body_002 = body_002;

    var body = (function (_super) {
        __extends(body, _super);
        function body(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5938;
            this.position.y  = 1.2806;
            this.position.z  = .1058;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0798;
            this.scaling.y   = .0798;
            this.scaling.z   = .0798;

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
                    1.0065,5.0109,.1015,.6989,6.6752,-.6084,.8846,4.964,-.7226,2.6419,1.9922,1.3436,0,3.6041,1.6044,3.296,3.8651,1.1191,2.4979,1.9922,-.1692,1.5335,-1,-1,1.9085,-1,-.0815,3.9309,2.626,-.6381,4.6642,-.2016,.2723,4.2418,2.7673,.0859,0,4.1971,-.8166,0,4.964,-.7226,2.7349,2.0172,1.254,1.9085,-1,1.3179,0,1.9922,1.6044
                    ,0,1.9922,-1.8168,0,-1,-1,2.9583,3.9267,-.9716,3.0053,2.0737,-1.1485,1.6557,-1.995,-1.0369,2.0306,-1.995,-.0815,2.4117,2.0172,-.1692,3.4149,3.989,.0737,3.8455,-.6672,1.0334,3.558,-1.5077,.2723,3.5223,-.6672,.2723,4.3533,-.3429,-.4887,4.3904,-.2016,1.0334,4.8234,-1.3094,-.6431,5.5562,-4.1018,.2707,5.1343,-1.1681,.2723,4.8606,-1.1681,1.1877
                    ,3.8812,-1.5077,1.1877,3.8615,-.6672,-.4887,4.6036,-4.341,.9374,4.2888,-4.5805,.2756,4.3638,-4.3409,.2753,4.6116,-4.3408,-.3868,5.3255,-4.2241,-.3915,5.3566,-4.1019,.9328,4.6916,-6.2575,.2747,5.2831,-6.0629,1.1717,5.3908,-6.0627,.2709,5.4951,-4.2989,1.0505,4.529,-4.5807,1.056,5.6944,-4.2987,.2701,5.4633,-4.421,-.5103,5.9306,-5.1666,.269,4.5364,-4.5804,-.5049
                    ,5.124,-6.1015,-.6299,5.6638,-5.3078,-.6318,2.1798,4.3652,.2231,2.1798,4.2049,-.8166,0,3.8217,-1.2583,2.1798,4.2049,1.0655,2.3443,1.9922,-1.5103,0,3.9936,1.4934,.8846,4.964,.8427,0,-1.995,-1.0369,1.861,-3.0666,-1.0369,0,-1,1.3179,1.8185,-1.995,1.3548,0,-1.995,1.3548,0,-3.9979,-1.0369,1.8885,-3.9956,-1.0369,2.2359,-3.0666,0
                    ,2.0238,-3.0666,1.5178,0,-3.9979,1.5178,.9321,-8.9688,-.8257,1.7285,-8.8998,-.8257,2.2633,-3.9956,0,2.0513,-3.9956,1.5178,0,-4.1258,1.5178,.6194,-8.9688,1.0307,.5483,-10.0017,-.1379,.461,-8.9688,-.1379,2.2501,-8.8998,-.1379,0,-4.1258,0,1.9786,-8.8998,1.0307,1.8187,-9.9978,-.8257,.9892,-10.9584,-.8569,1.8884,-10.9531,-.8569,.7067,-10.0017,1.0307
                    ,1.0194,-10.0017,-.8257,2.3403,-9.9978,-.1379,.4575,-10.9584,.0587,.7486,-14.9634,1.0838,.555,-14.9634,.0587,2.4382,-10.9531,.0587,2.1559,-10.9531,1.3182,.4651,-10.9584,1.3182,1.9266,-15.5496,1.2208,.776,-15.974,1.3187,.7646,-15.553,1.2208,1.7029,-14.9602,-.4855,2.2557,-14.9602,.0587,2.2981,-15.9704,-.0283,.7408,-15.974,-2.635,.4594,-15.974,.1106,1.9748,-15.5496,-2.3623
                    ,2.1689,-15.9704,-2.635,2.2804,-15.5496,.0079,.4992,-15.553,.089,5.7005,-5.1668,1.1698,.8797,-15.553,-2.3623,1.9284,-15.9704,1.3187,1.924,-14.9602,1.0838,2.0688,-9.9978,1.0307,1.0742,-14.9634,-.4855,0,-4.1258,-1.0369,4.7048,-6.2574,-.6261,3.8972,-1.5077,-.6431,3.9681,2.7673,1.0823,0,6.6752,-.0527,.8209,6.6752,.1015,.6989,6.6752,.4025,0,6.6752,-.6084
                    ,0,6.6752,.6049,-.6989,6.6752,-.6084,-1.0065,5.0109,.1015,-.8846,4.964,-.7226,-2.6419,1.9922,1.3436,-1.5335,-1,-1,-2.4979,1.9922,-.1692,-1.9085,-1,-.0815,-4.6642,-.2016,.2723,-3.9309,2.626,-.6381,-4.2418,2.7673,.0859,-2.1798,4.2049,-.8166,-2.7349,2.0172,1.254,-3.296,3.8651,1.1191,-1.9085,-1,1.3179,-2.3443,1.9922,-1.5103,-2.9583,3.9267,-.9716
                    ,-3.0053,2.0737,-1.1485,-1.6557,-1.995,-1.0369,-3.4149,3.989,.0737,-3.558,-1.5077,.2723,-3.8455,-.6672,1.0334,-3.5223,-.6672,.2723,-4.3533,-.3429,-.4887,-4.3904,-.2016,1.0334,-3.9681,2.7673,1.0823,-2.4117,2.0172,-.1692,-5.5562,-4.1018,.2707,-4.8234,-1.3094,-.6431,-5.1343,-1.1681,.2723,-4.8606,-1.1681,1.1877,-3.8615,-.6672,-.4887,-4.2888,-4.5805,.2756,-4.6036,-4.341,.9374
                    ,-4.3638,-4.3409,.2753,-4.6116,-4.3408,-.3868,-3.8972,-1.5077,-.6431,-3.8812,-1.5077,1.1877,-5.3566,-4.1019,.9328,-4.6916,-6.2575,.2747,-5.2831,-6.0629,1.1717,-4.6963,-6.2577,1.1755,-5.4951,-4.2989,1.0505,-5.6944,-4.2987,.2701,-5.3255,-4.2241,-.3915,-5.4633,-4.421,-.5103,-5.9306,-5.1666,.269,-5.124,-6.1015,-.6299,-4.7048,-6.2574,-.6261,-4.5364,-4.5804,-.5049,-4.529,-4.5807,1.056
                    ,-2.1798,4.3652,.2231,-2.1798,4.2049,1.0655,-.8846,4.964,.8427,-1.861,-3.0666,-1.0369,-1.8185,-1.995,1.3548,-1.8885,-3.9956,-1.0369,-2.0306,-1.995,-.0815,-2.0238,-3.0666,1.5178,-.9321,-8.9688,-.8257,-2.2359,-3.0666,0,-2.0513,-3.9956,1.5178,-.5483,-10.0017,-.1379,-.6194,-8.9688,1.0307,-.461,-8.9688,-.1379,-2.2501,-8.8998,-.1379,-2.2633,-3.9956,0,-1.9786,-8.8998,1.0307
                    ,-1.8187,-9.9978,-.8257,-.9892,-10.9584,-.8569,-1.0194,-10.0017,-.8257,-.7067,-10.0017,1.0307,-1.7285,-8.8998,-.8257,-.4575,-10.9584,.0587,-.7486,-14.9634,1.0838,-.4651,-10.9584,1.3182,-2.3403,-9.9978,-.1379,-1.8884,-10.9531,-.8569,-2.1559,-10.9531,1.3182,-2.0688,-9.9978,1.0307,-.776,-15.974,1.3187,-1.9266,-15.5496,1.2208,-.7646,-15.553,1.2208,-1.7029,-14.9602,-.4855,-2.4382,-10.9531,.0587
                    ,-2.2981,-15.9704,-.0283,-.7408,-15.974,-2.635,-2.1689,-15.9704,-2.635,-1.9748,-15.5496,-2.3623,-.8797,-15.553,-2.3623,-2.2804,-15.5496,.0079,-.4594,-15.974,.1106,-.4992,-15.553,.089,-5.3908,-6.0627,.2709,-5.6638,-5.3078,-.6318,-5.7005,-5.1668,1.1698,-1.9284,-15.9704,1.3187,-1.924,-14.9602,1.0838,-1.0742,-14.9634,-.4855,0,4.964,-.0527,0,4.964,1.0451,-.8209,6.6752,.1015
                    ,-.6989,6.6752,.4025,-2.2557,-14.9602,.0587,-.555,-14.9634,.0587,4.6963,-6.2577,1.1755
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(1344);
                CONTIG(_i, 0, 0, 12);
                _i.set([2,13,5,14,3,15,16,3,7,17,18,19,20,9,8,21,22,6,14,23,24,9,11,25,26,27,20,28,9,14,29,25,14,27,23,30,31,32,25,33,34,28,32,10,35,30,28,36,37,38
                ,30,39,40,34,38,26,34,41,36,42,43,44,36,45,46,40,47,31,39,48,40,48,49,47,50,51,52,46,42,37,53,19,24,54,55,19,4,56,5,57,55,17,58,59,56,53,59,0,60,61
                ,21,7,60,21,62,63,64,65,66,61,22,61,67,64,68,69,66,70,71,67,66,72,69,73,74,75,76,77,66,78,72,79,75,77,74,80,75,81,82,83,80,84,75,71,85,81,78,81,86,87
                ,88,89,86,83,90,84,87,76,84,91,92,93,94,95,91,88,92,82,96,83,90,96,97,98,99,100,101,99,102,101,98,103,95,100,104,52,44,49,105,43,46,105,44,43,106,100,99,93,98,107
                ,107,100,94,90,108,91,76,82,85,109,90,91,87,110,82,78,109,80,111,77,70,72,80,73,70,76,85,67,73,68,63,67,68,54,0,2,53,5,56,50,42,112,45,49,105,41,47,45,42,51
                ,112,113,38,39,39,37,50,10,33,29,32,41,33,23,35,20,35,26,113,24,114,5,57,23,20,15,22,63,11,29,114,15,6,8,115,1,116,117,115,116,0,117,116,13,1,118,59,119,117,108
                ,103,93,110,104,106,88,104,89,96,103,97,96,106,101,108,95,88,120,121,122,123,4,16,124,125,126,127,128,129,12,122,130,131,132,123,16,133,123,124,17,134,135,136,134,126,137,124,125,131,123
                ,138,128,135,139,140,141,142,136,128,131,143,144,141,131,145,146,147,148,140,149,143,148,142,127,147,150,142,151,152,153,147,154,155,153,156,139,156,157,149,158,159,160,152,161,157,162,163,146,164,154
                ,163,165,164,162,166,167,168,158,169,151,170,135,130,130,55,12,171,4,132,55,134,17,172,58,171,170,172,171,173,60,137,124,60,18,62,174,133,175,65,173,176,173,137,64,177,174,175,178,111,179
                ,175,173,69,180,177,181,182,183,184,175,185,79,182,74,74,186,180,187,188,189,190,186,182,191,189,178,184,187,191,192,193,194,195,196,187,192,190,181,190,197,198,199,200,201,193,197,194,202,188,196
                ,203,202,196,204,205,206,207,205,208,204,207,209,210,201,211,212,213,165,159,214,169,214,212,165,208,210,211,200,204,209,215,210,204,216,203,197,188,181,189,198,203,195,217,192,188,198,184,186,111,183
                ,79,186,185,180,178,181,183,180,179,177,174,179,176,130,121,170,132,170,171,168,158,151,161,165,162,157,162,146,166,158,167,155,153,139,154,151,153,149,127,143,157,148,149,150,145,136,150,139,141,144
                ,138,132,134,145,125,133,176,126,143,129,144,133,125,123,119,218,219,120,115,220,221,115,119,121,221,172,218,118,13,13,120,122,172,119,219,216,209,222,217,211,223,211,193,223,209,202,222,202,208,217
                ,201,216,193,0,116,1,3,16,4,6,57,7,9,28,10,12,54,2,5,114,14,15,62,16,7,57,17,19,57,20,8,7,21,6,3,14,24,19,9,25,34,26,20,35,28,14,114,29,14,25
                ,27,30,40,31,25,29,33,28,30,32,35,113,30,36,46,37,30,113,39,34,36,38,34,33,41,42,224,43,36,41,45,40,48,47,39,50,48,48,52,49,52,48,50,50,112,51,46,224,42,53
                ,54,19,54,12,55,4,58,56,57,19,55,58,219,59,53,56,59,60,65,61,7,18,60,62,15,63,65,111,66,22,21,61,64,63,68,66,111,70,67,61,66,69,68,73,75,84,76,66,71,78
                ,79,74,75,74,73,80,81,85,82,80,109,84,71,70,85,78,71,81,87,92,88,86,81,83,84,92,87,84,109,91,93,107,94,91,108,88,82,110,96,90,83,96,98,102,99,101,106,99,101,102
                ,98,95,94,100,52,51,44,224,46,43,45,105,46,105,49,44,106,104,100,93,103,98,107,98,100,90,97,108,76,87,82,109,86,90,87,89,110,78,86,109,111,79,77,72,78,80,70,77,76,67
                ,72,73,63,22,67,54,53,0,53,24,5,50,37,42,45,47,49,41,31,47,42,44,51,113,26,38,39,38,37,10,32,33,32,31,41,23,27,35,35,27,26,24,11,114,57,6,23,15,8,22
                ,11,10,29,15,3,6,115,118,1,117,119,115,0,59,117,13,2,1,59,219,119,108,97,103,110,89,104,88,95,104,96,101,103,96,110,106,108,93,95,120,220,121,123,132,4,124,134,125,127,142
                ,128,12,13,122,131,144,132,16,62,133,124,18,17,135,128,136,126,176,137,125,145,131,138,129,128,139,156,140,142,150,136,131,140,143,141,140,131,146,163,147,140,156,149,148,147,142,147,155,150,151
                ,169,152,147,163,154,153,152,156,156,152,157,158,212,159,152,169,161,162,164,163,164,168,154,165,213,164,168,164,213,213,166,168,158,160,169,170,138,135,130,135,55,171,58,4,55,135,134,172,219,58
                ,170,121,172,173,65,60,124,137,60,62,64,174,175,111,65,176,179,173,64,69,177,175,191,178,179,185,175,69,74,180,181,190,182,184,191,175,79,183,182,74,182,186,187,196,188,190,198,186,191,187
                ,189,184,195,187,192,223,193,195,203,196,192,194,190,190,194,197,199,215,200,193,216,197,202,217,188,203,222,202,204,210,205,207,206,205,204,206,207,210,199,201,212,166,213,161,169,214,160,159,169,214
                ,159,212,208,205,210,200,215,204,215,199,210,216,222,203,188,192,181,198,197,203,217,223,192,198,195,184,111,178,183,186,184,185,178,189,181,180,185,179,174,177,179,130,122,121,132,138,170,168,167,158
                ,161,214,165,157,161,162,166,212,158,155,154,153,154,168,151,149,148,127,157,146,148,150,141,145,150,155,139,144,129,138,134,136,145,133,174,176,143,127,129,133,126,125,119,115,218,120,118,115,221,220
                ,115,121,220,221,218,115,118,13,118,120,172,221,119,216,200,209,217,208,211,211,201,193,209,207,202,202,207,208,201,200,216], 13);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .8195,.5729,.0086,.4915,.6301,-.6011,.4128,.3582,-.8374,.5752,-.2787,.769,0,.1561,.9877,.4833,.5866,.6498,.8645,.4895,-.1138,.5519,-.0957,-.8283,.9805,-.0372,-.1927,.7196,.2209,-.6583,.9524,.3013,-.0462,.9333,.3471,-.0919,0,.4751,-.8799,.2329,.0916,-.9682,.1607,-.5678,.8073,.6872,-.0854,.7213,0,-.0277,.9996
                    ,0,.0362,-.9993,0,-.1144,-.9934,.424,.6098,-.6695,.1964,-.3505,-.9157,.5449,.0975,-.8328,.9816,.1332,-.1369,-.7567,.5883,-.285,.6258,.7761,-.0778,-.5461,-.0612,.8354,-.9903,-.1387,-.0079,-.9696,-.2444,-.0029,.5456,.1338,-.8272,.5333,.1869,.825,.5473,.1982,-.8131,.9267,.372,-.0525,.9535,.2982,-.0434,.569,.2112,.7947
                    ,-.58,-.0596,.8124,-.5323,-.1103,-.8393,-.5883,.2104,.7807,-.9989,.0462,-.0043,-.9999,.013,-.006,-.5726,.1962,-.796,.4678,.4001,-.7881,.516,.3767,.7692,-.5427,-.8399,-.006,.4754,-.5677,.672,.6412,-.7672,-.0145,.509,.4476,.7352,-.6458,.1836,.7411,.9005,.4318,-.0504,.4904,.425,-.7608,.9935,-.1128,-.012,-.6378,.194,-.7454
                    ,.3909,-.5876,-.7084,.6461,-.1126,-.7548,.3952,.9184,.0166,.2399,.8069,-.5397,0,.5171,-.8559,.2551,.7428,.6189,.4801,-.2065,-.8525,0,.3543,.9351,.4704,.5339,.7026,0,.0185,-.9998,.5882,.0614,-.8063,0,-.0292,.9996,.6277,.1082,.7708,0,.0699,.9975,0,0,-1,.5723,-.0036,-.82,.9898,.1054,-.0957
                    ,.6489,.1229,.7508,0,.0295,.9995,-.4524,-.081,-.8881,.4349,-.0098,-.9004,.9951,.0097,-.098,.6527,-.0309,.757,0,-.111,.9938,-.6631,-.097,.7421,-.969,-.01,-.2467,-.9703,-.114,-.2134,.9785,.0257,-.2044,0,-.9957,.0927,.6245,-.0118,.7809,.4466,.0495,-.8933,-.489,-.0331,-.8716,.4869,-.0338,-.8728,-.6607,.1481,.7359
                    ,-.4547,.0029,-.8907,.972,.083,-.2197,-.9755,.0158,-.2194,-.6628,.0571,.7466,-.955,.0258,-.2954,.9906,.0015,-.1364,.6092,.0964,.7871,-.6972,.1278,.7054,.6,.1805,.7794,-.4798,-.5273,.7013,-.6157,.1677,.7699,.5357,.4769,-.6968,.9738,.0077,-.2273,.7586,-.6494,.0527,-.5925,-.353,-.724,-.7747,-.6311,.0385,.4607,.7529,-.47
                    ,.6316,-.3301,-.7015,.9894,.1446,-.0068,-.9853,.1649,-.0438,.6582,-.0555,.7508,-.4845,.7284,-.4845,.4859,-.5196,.7027,.616,.0531,.7859,.6435,.1707,.7461,-.5596,.4692,-.6832,0,-.0735,-.9973,-.433,-.685,-.5858,-.5734,-.0527,-.8175,.6613,.2445,.7091,.4472,.8944,0,.7186,.6908,.079,.5088,.6996,.5017,.3361,.6878,-.6434
                    ,.3686,.6941,.6183,-.4915,.6301,-.6011,-.8195,.5729,.0086,-.4128,.3582,-.8374,-.5752,-.2787,.769,-.5519,-.0957,-.8283,-.8645,.4895,-.1138,-.9805,-.0372,-.1927,-.9524,.3013,-.0462,-.7196,.2209,-.6583,-.9333,.3471,-.0919,-.2399,.8069,-.5397,-.1607,-.5678,.8073,-.4833,.5866,.6498,-.6872,-.0854,.7213,-.4801,-.2065,-.8525,-.424,.6098,-.6695
                    ,-.1964,-.3505,-.9157,-.5449,.0975,-.8328,-.6258,.7761,-.0778,.9903,-.1387,-.0079,.5461,-.0612,.8354,.9696,-.2444,-.0029,-.5456,.1338,-.8272,-.5333,.1869,.825,-.6613,.2445,.7091,.7567,.5883,-.285,-.9267,.372,-.0525,-.5473,.1982,-.8131,-.9535,.2982,-.0434,-.569,.2112,.7947,.5323,-.1103,-.8393,.9989,.0462,-.0043,.5883,.2104,.7807
                    ,.9999,.013,-.006,.5726,.1962,-.796,.5734,-.0527,-.8175,.58,-.0596,.8124,-.516,.3767,.7692,.5427,-.8399,-.006,-.4754,-.5677,.672,.445,-.6739,.5897,-.509,.4476,.7352,-.9005,.4318,-.0504,-.4678,.4001,-.7881,-.4904,.425,-.7608,-.9935,-.1128,-.012,-.3909,-.5876,-.7084,.433,-.685,-.5858,.6378,.194,-.7454,.6458,.1836,.7411
                    ,-.3952,.9184,.0166,-.2551,.7428,.6189,-.4704,.5339,.7026,-.5882,.0614,-.8063,-.6277,.1082,.7708,-.5723,-.0036,-.82,-.9816,.1332,-.1369,-.6489,.1229,.7508,.4524,-.081,-.8881,-.9898,.1054,-.0957,-.6527,-.0309,.757,.969,-.01,-.2467,.6631,-.097,.7421,.9703,-.114,-.2134,-.9785,.0257,-.2044,-.9951,.0097,-.098,-.6245,-.0118,.7809
                    ,-.4466,.0495,-.8933,.489,-.0331,-.8716,.4547,.0029,-.8907,.6607,.1481,.7359,-.4349,-.0098,-.9004,.9755,.0158,-.2194,.6628,.0571,.7466,.6972,.1278,.7054,-.972,.083,-.2197,-.4869,-.0338,-.8728,-.6092,.0964,.7871,-.6435,.1707,.7461,.4798,-.5273,.7013,-.6,.1805,.7794,.6157,.1677,.7699,-.5357,.4769,-.6968,-.9906,.0015,-.1364
                    ,-.7586,-.6494,.0527,.5925,-.353,-.724,-.6316,-.3301,-.7015,-.4607,.7529,-.47,.4845,.7284,-.4845,-.9894,.1446,-.0068,.7747,-.6311,.0385,.9853,.1649,-.0438,-.6412,-.7672,-.0145,-.6461,-.1126,-.7548,-.6582,-.0555,.7508,-.4859,-.5196,.7027,-.616,.0531,.7859,.5596,.4692,-.6832,1,0,0,.2083,.3323,.9199,-.7186,.6908,.079
                    ,-.5088,.6996,.5017,-.9738,.0077,-.2273,.955,.0258,-.2954,-.445,-.6739,.5897
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.skin.002");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 225, 0, 1344, this);
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

        body.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(78);
        };
        return body;
    })(BABYLON.Mesh);
    map01.body = body;

    var pants = (function (_super) {
        __extends(pants, _super);
        function pants(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5938;
            this.position.y  = 1.2806;
            this.position.z  = .1058;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0798;
            this.scaling.y   = .0798;
            this.scaling.z   = .0798;

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
                    0,-1.9951,-1.1771,1.9435,-3.058,-1.15,1.7282,-1.9823,-1.1562,0,-3.9978,-1.1771,1.9656,-3.9969,-1.154,2.1672,-1.9687,-.0986,2.3746,-3.0514,-.0138,0,-1.9805,1.4943,2.1146,-3.0503,1.6234,0,-3.9925,1.6579,0,-4.1368,-1.1767,1.7946,-8.8998,-.9494,2.4025,-3.995,-.0173,2.1417,-3.9996,1.6249,0,-4.1397,1.6573,.3234,-8.9834,-.1608,.6146,-9.9814,1.1345
                    ,.4129,-10.001,-.1744,2.3879,-8.8957,-.1636,0,-4.2335,-.0897,.5253,-8.9829,1.1337,2.0669,-8.9019,1.1397,1.8832,-9.9928,-.9501,.9237,-10.9623,-.9808,1.9535,-10.957,-.9811,.9545,-10.0027,-.95,2.4766,-9.9861,-.1686,.3211,-10.9537,.0264,.6552,-14.9736,1.1878,.4199,-14.9705,.0218,2.5767,-10.9505,.0368,2.2397,-10.9393,1.4298,.3707,-10.9426,1.4207,1.7648,-14.9725,-.6107
                    ,2.393,-14.9698,.0319,2.0081,-14.9704,1.1955,2.1588,-9.9739,1.1355,1.0098,-14.9742,-.6096,.8596,-8.9789,-.9453,1.9045,-1.9669,1.4619,-1.9435,-3.058,-1.15,-1.7282,-1.9823,-1.1562,-1.9656,-3.9969,-1.154,-2.1672,-1.9687,-.0986,-2.1146,-3.0503,1.6234,-1.9045,-1.9669,1.4619,-1.7946,-8.8998,-.9494,-2.3746,-3.0514,-.0138,-2.1417,-3.9996,1.6249,-.3234,-8.9834,-.1608,-.6146,-9.9814,1.1345
                    ,-.5253,-8.9829,1.1337,-2.3879,-8.8957,-.1636,-2.4025,-3.995,-.0173,-2.0669,-8.9019,1.1397,-1.8832,-9.9928,-.9501,-.9237,-10.9623,-.9808,-.9545,-10.0027,-.95,-.8596,-8.9789,-.9453,-.3211,-10.9537,.0264,-.6552,-14.9736,1.1878,-.3707,-10.9426,1.4207,-2.4766,-9.9861,-.1686,-1.9535,-10.957,-.9811,-.4129,-10.001,-.1744,-2.2397,-10.9393,1.4298,-2.1588,-9.9739,1.1355,-1.7648,-14.9725,-.6107
                    ,-2.5767,-10.9505,.0368,-2.0081,-14.9704,1.1955,-1.0098,-14.9742,-.6096,-.4199,-14.9705,.0218,-2.393,-14.9698,.0319
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,5,1,6,7,8,9,10,11,4,6,4,12,9,13,14,15,16,17,4,18,12,19,20,15,14,21,20,22,23,24,21,16,20,11,25,22,18,22,26,27,28,29,26,24
                ,30,16,27,17,16,31,32,31,28,32,23,33,24,30,33,34,30,35,31,17,23,25,36,30,31,27,37,23,18,36,21,19,38,10,12,21,13,38,17,25,6,13,8,39,6,8,40,0,41,42
                ,3,40,43,40,41,7,44,45,46,10,42,47,42,40,9,48,44,49,50,51,52,42,53,19,51,14,14,54,48,55,56,57,50,54,51,46,57,58,52,55,46,59,60,61,62,63,55,59,50,64
                ,50,65,66,60,65,61,67,56,63,68,67,63,69,68,65,56,64,57,66,68,62,70,59,56,66,52,54,58,19,10,54,53,48,58,64,49,48,47,44,45,47,43,0,3,1,3,10,4,5,2
                ,1,7,39,8,10,38,11,6,1,4,9,8,13,15,20,16,4,11,18,19,14,20,14,13,21,22,25,23,21,36,16,11,38,25,18,11,22,27,32,28,26,22,24,16,32,27,16,36,31,31
                ,35,28,23,37,33,30,24,33,30,34,35,17,27,23,36,26,30,27,29,37,18,26,36,19,15,38,12,18,21,38,15,17,6,12,13,39,5,6,40,3,0,42,10,3,43,47,40,7,9,44
                ,46,58,10,47,53,42,9,14,48,49,64,50,52,46,42,19,49,51,14,51,54,55,63,56,50,66,54,46,55,57,52,62,55,59,71,60,62,68,63,59,61,50,50,61,65,60,69,65,67,70
                ,56,68,72,67,69,72,68,56,59,64,66,65,68,70,71,59,66,62,52,58,49,19,54,52,53,58,57,64,48,53,47,45,44,47]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,-.0011,-1,.5882,.0605,-.8064,.5084,.0967,-.8556,0,-.0009,-1,.5682,-.0027,-.8229,.9752,.1864,-.1195,.99,.1053,-.094,0,.1022,.9948,.649,.1228,.7508,0,.028,.9996,0,-.1064,-.9943,.435,-.0103,-.9004,.9951,.0097,-.0985,.6514,-.0308,.7581,0,-.1024,.9947,-.9727,-.0725,-.2202,-.6526,.1482,.743
                    ,-.9697,-.011,-.2441,.98,.0256,-.197,0,-.9821,-.1882,-.6626,-.0915,.7433,.6183,-.0143,.7858,.4461,.0497,-.8936,-.4837,-.0332,-.8746,.4833,-.0338,-.8748,-.4499,.0027,-.893,.9725,.0824,-.2175,-.9775,.0152,-.2104,-.6422,-.0604,.7641,-.9611,-.0233,-.275,.9912,.001,-.1319,.6006,.0964,.7937,-.6896,.1286,.7127,.4033,-.0736,-.9121
                    ,.9723,-.0441,-.2293,.585,-.0665,.8083,.6401,.1699,.7493,-.4199,-.0645,-.9053,-.4761,-.0515,-.8779,.621,.2289,.7496,-.5882,.0605,-.8064,-.5084,.0967,-.8556,-.5682,-.0027,-.8229,-.9752,.1864,-.1195,-.649,.1228,.7508,-.621,.2289,.7496,-.435,-.0103,-.9004,-.99,.1053,-.094,-.6514,-.0308,.7581,.9727,-.0725,-.2202,.6526,.1482,.743
                    ,.6626,-.0915,.7433,-.98,.0256,-.197,-.9951,.0097,-.0985,-.6183,-.0143,.7858,-.4461,.0497,-.8936,.4837,-.0332,-.8746,.4499,.0027,-.893,.4761,-.0515,-.8779,.9775,.0152,-.2104,.6422,-.0604,.7641,.6896,.1286,.7127,-.9725,.0824,-.2175,-.4833,-.0338,-.8748,.9697,-.011,-.2441,-.6006,.0964,.7937,-.6401,.1699,.7493,-.4033,-.0736,-.9121
                    ,-.9912,.001,-.1319,-.585,-.0665,.8083,.4199,-.0645,-.9053,.9611,-.0233,-.275,-.9723,-.0441,-.2293
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.005");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 73, 0, 384, this);
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

        pants.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(79);
        };
        return pants;
    })(BABYLON.Mesh);
    map01.pants = pants;

    var tshirt = (function (_super) {
        __extends(tshirt, _super);
        function tshirt(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5948;
            this.position.y  = 1.2806;
            this.position.z  = .1058;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0798;
            this.scaling.y   = .0798;
            this.scaling.z   = .0798;

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
                    2.7266,1.9723,1.4647,0,3.6352,1.7502,3.3673,3.951,1.2179,2.6257,1.9175,-.1866,1.6191,-1.0154,-1.1211,2.0555,-1.0124,-.1033,0,4.261,-.9513,.9184,5.0377,-.8477,0,4.9822,-.8705,2.843,1.9821,1.3505,2.0123,-1.0117,1.4243,0,1.9909,1.7535,0,1.995,-1.9659,0,-1.0142,-1.1484,3.0208,4.0194,-1.0703,3.0774,2.0149,-1.265,4.032,2.6778,-.7347
                    ,1.7422,-1.9806,-1.1574,2.1776,-1.9846,-.1037,2.5115,1.9072,-.1823,3.508,4.105,.0631,4.3664,2.8475,.0692,2.2388,4.5021,.2253,2.2123,4.3291,-.8925,0,3.8936,-1.3889,2.2207,4.3133,1.1593,2.4125,1.9629,-1.6397,0,4.0565,1.6286,.9304,5.0662,.9411,1.0792,5.141,.1021,0,-1.9895,-1.1859,0,-1.0016,1.467,1.9153,-1.9894,1.468,0,-1.9895,1.5038
                    ,4.0627,2.8194,1.185,-2.7266,1.9723,1.4647,-1.6191,-1.0154,-1.1211,-2.6257,1.9175,-.1866,-2.0555,-1.0124,-.1033,-.9184,5.0377,-.8477,-2.2123,4.3291,-.8925,-2.843,1.9821,1.3505,-3.3673,3.951,1.2179,-2.0123,-1.0117,1.4243,-2.4125,1.9629,-1.6397,-3.0208,4.0194,-1.0703,-3.0774,2.0149,-1.265,-1.7422,-1.9806,-1.1574,-3.508,4.105,.0631,-4.032,2.6778,-.7347,-2.2388,4.5021,.2253
                    ,-2.2207,4.3133,1.1593,-.9304,5.0662,.9411,-1.9153,-1.9894,1.468,-1.0792,5.141,.1021,-4.0627,2.8194,1.185,-2.5115,1.9072,-.1823,-2.1776,-1.9846,-.1037,0,5.0323,1.1776,-4.3664,2.8475,.0692
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,8,2,9,0,10,11,0,4,12,13,14,15,16,5,17,18,3,9,19,20,16,21,22,14,20,23,24,14,1,25,2,26,24,12,27,28,25,22,28,29,4,30
                ,17,31,32,33,23,29,7,22,2,25,20,34,2,26,19,15,10,18,32,10,3,5,35,1,11,36,37,38,6,39,40,41,42,35,11,43,35,36,12,44,45,46,44,38,47,36,37,41,35,48
                ,49,45,50,45,40,40,24,6,51,1,42,24,44,12,52,27,51,50,52,51,36,30,13,31,53,43,40,54,50,42,50,51,55,48,42,44,56,37,43,57,38,43,37,35,0,11,1,3,26,4
                ,6,23,7,2,34,9,10,31,11,4,26,12,14,26,15,5,4,17,3,0,9,20,14,16,22,23,14,23,6,24,1,27,25,26,14,24,27,58,28,22,25,28,4,13,30,31,10,32,23,22
                ,29,22,20,2,20,21,34,26,3,19,10,5,18,10,0,3,35,42,1,36,44,37,6,8,39,41,55,42,11,31,43,36,13,12,45,49,46,38,57,47,37,56,41,48,59,49,50,48,45,40
                ,45,24,51,27,1,24,45,44,52,58,27,50,54,52,36,47,30,31,33,53,40,39,54,42,48,50,55,59,48,44,46,56,43,53,57,43,38,37]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .5546,-.2617,.7898,0,.159,.9873,.4839,.5816,.6539,.7702,.6304,-.0963,.5515,-.0925,-.829,.9817,-.0345,-.1873,0,.4794,-.8776,.2292,.4753,-.8494,0,.1113,-.9938,.4584,-.6674,.5869,.6867,-.0852,.7219,0,-.0289,.9996,0,.0363,-.9993,0,-.1134,-.9935,.4254,.6051,-.673,.4522,-.4277,-.7826,.6597,.3482,-.666
                    ,.5793,.0998,-.809,.9849,.0831,-.1521,-.0862,.9962,.0021,.6253,.7769,-.0732,.8214,.5601,-.107,.398,.9171,.0212,.2491,.8055,-.5377,0,.5162,-.8564,.2577,.7384,.6232,.4678,-.1957,-.8619,0,.3555,.9347,.3078,.6841,.6612,.4767,.879,-.009,0,.0388,-.9992,0,-.0285,.9996,.6203,-.0275,.7839,0,.0372,.9993
                    ,.5847,.3614,.7263,-.5546,-.2617,.7898,-.5515,-.0925,-.829,-.7702,.6304,-.0963,-.9817,-.0345,-.1873,-.2292,.4753,-.8494,-.2491,.8055,-.5377,-.4584,-.6674,.5869,-.4839,.5816,.6539,-.6867,-.0852,.7219,-.4678,-.1957,-.8619,-.4254,.6051,-.673,-.4522,-.4277,-.7826,-.5793,.0998,-.809,-.6253,.7769,-.0732,-.6597,.3482,-.666,-.398,.9171,.0212
                    ,-.2577,.7384,.6232,-.3078,.6841,.6612,-.6203,-.0275,.7839,-.4767,.879,-.009,-.5847,.3614,.7263,.0862,.9962,.0021,-.9849,.0831,-.1521,0,.4195,.9077,-.8214,.5601,-.107
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.tshirt");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 60, 0, 288, this);
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

        tshirt.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(80);
        };
        return tshirt;
    })(BABYLON.Mesh);
    map01.tshirt = tshirt;

    var beard = (function (_super) {
        __extends(beard, _super);
        function beard(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5896;
            this.position.y  = 1.742;
            this.position.z  = -.0389;
            this.rotation.x  = -.0117;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0332;
            this.scaling.y   = .0332;
            this.scaling.z   = .0332;

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
                    .5093,1.0569,1.207,2.3673,.4649,2.985,.5297,.4398,1.1802,1.4716,.5261,.622,1.574,-.0665,.4116,1.3959,-3.3033,1.4371,.7005,-3.3156,.1623,.7006,-4.3308,1.2638,0,.8813,.6708,.4417,1.0569,.5801,.4566,.5671,.0252,0,.8813,.5581,0,.559,.0286,.5708,-1.2507,.0894,0,-1.3825,.0647,2.8217,-1.554,2.199,2.3129,-1.7558,.8388
                    ,.6097,-1.7936,1.2193,0,.4318,.6,0,-1.9653,.8648,2.2835,2.0641,3.1273,0,-3.588,.1056,0,-4.6884,1.1655,1.2103,-2.8626,.3429,-2.3673,.4649,2.985,-.5093,1.0569,1.207,-.5297,.4398,1.1802,-1.4716,.5261,.622,-2.2835,2.0641,3.1273,-.7005,-3.3156,.1623,-1.3959,-3.3033,1.4371,-.7006,-4.3308,1.2638,-.4417,1.0569,.5801,-.4566,.5671,.0252
                    ,-.5708,-1.2507,.0894,-2.8217,-1.554,2.199,-1.574,-.0665,.4116,-.6097,-1.7936,1.2193,-2.3129,-1.7558,.8388,-1.2103,-2.8626,.3429
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,1,3,4,5,6,7,8,9,0,10,11,12,13,12,14,15,4,16,2,15,17,18,17,19,4,13,16,3,10,4,0,3,20,7,21,22,8,2,18,23,13,6,19,7,22,17,5
                ,7,5,16,23,6,14,21,24,25,26,24,27,28,29,30,31,32,8,25,33,11,32,34,12,33,35,36,24,35,26,37,37,18,19,34,36,38,33,27,36,27,25,28,21,31,22,26,8,18,39
                ,34,38,31,19,22,30,37,31,30,38,35,29,14,34,0,20,1,1,20,3,5,23,6,8,11,9,10,9,11,13,10,12,15,1,4,2,1,15,18,2,17,4,10,13,3,9,10,0,9,3
                ,7,6,21,8,0,2,23,16,13,19,17,7,17,15,5,5,15,16,6,13,14,24,28,25,24,36,27,29,39,30,32,11,8,33,12,11,34,14,12,35,38,36,35,24,26,37,26,18,34,33
                ,36,33,32,27,27,32,25,21,29,31,26,25,8,39,29,34,31,37,19,30,35,37,30,39,38,29,21,14]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.5074,.7661,.3945,.4941,-.1406,.8579,-.6789,-.0836,.7294,.6338,.5369,-.5567,.6537,.1873,-.7331,.4981,-.6093,.6169,.4266,-.3785,-.8214,.464,-.7483,.474,0,.8334,.5526,.0387,.9445,-.3262,.162,.4296,-.8883,0,.9318,-.363,0,.4723,-.8814,.208,-.0257,-.9778,0,-.0248,-.9997,.7479,-.1865,.6371,.7985,-.1538,-.5819
                    ,-.4617,.0072,.887,0,-.0693,.9976,0,.0572,.9984,.3186,.7339,.5998,0,-.4638,-.8859,0,-.9555,.295,.6023,-.3391,-.7227,-.4941,-.1406,.8579,.5074,.7661,.3945,.6789,-.0836,.7294,-.6338,.5369,-.5567,-.3186,.7339,.5998,-.4266,-.3785,-.8214,-.4981,-.6093,.6169,-.464,-.7483,.474,-.0387,.9445,-.3262,-.162,.4296,-.8883
                    ,-.208,-.0257,-.9778,-.7479,-.1865,.6371,-.6537,.1873,-.7331,.4617,.0072,.887,-.7985,-.1538,-.5819,-.6023,-.3391,-.7227
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.hair.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 40, 0, 228, this);
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

        beard.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(81);
        };
        return beard;
    })(BABYLON.Mesh);
    map01.beard = beard;

    var belt = (function (_super) {
        __extends(belt, _super);
        function belt(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5935;
            this.position.y  = 1.0814;
            this.position.z  = .1186;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .1685;
            this.scaling.y   = .0432;
            this.scaling.z   = .1156;

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
                    -1.1273,1,.0244,-1,-1,.9878,-1.1273,-1,.0244,-1,1,.9878,1,-1,.9878,1.1273,1,.0244,1,-1,-1.0122,1.1273,-1,.0244,1,1,-1.0122,-1,-1,-1.0122,-1,1,-1.0122,1,1,.9878
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,5,6,7,8,9,6,2,6,9,5,10,8,3,5,11,4,2,1,11,7,4,10,2,9,0,3,1,3,11,4,5,8,6,8,10,9,2,7,6,5,0,10,3,0
                ,5,4,7,2,11,5,7,10,0,2]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.7335,.6797,.0034,-.5348,-.5846,.6101,-.7335,-.6797,.0034,-.5348,.5846,.6101,.5348,-.5846,.6101,.7335,.6797,.0034,.5378,-.584,-.6079,.7335,-.6797,.0034,.5378,.584,-.6079,-.5378,-.584,-.6079,-.5378,.584,-.6079,.5348,.5846,.6101
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.004");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 60, this);
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

        belt.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(82);
        };
        return belt;
    })(BABYLON.Mesh);
    map01.belt = belt;

    var belt1 = (function (_super) {
        __extends(belt1, _super);
        function belt1(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5941;
            this.position.y  = 1.0808;
            this.position.z  = -.0133;
            this.rotation.x  = -1.5708;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0632;
            this.scaling.y   = .0632;
            this.scaling.z   = .0632;

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
                    .8839,0,.8839,1.0773,.2378,0,1.25,0,0,.7617,.2378,.7617,.7028,.2525,0,.497,.2525,.497,.7028,-.0064,0,.497,-.0064,.497,1.0773,-.2378,0,0,0,1.25,0,.2378,1.0773,0,.2525,.7028,0,-.0064,.7028,.7617,-.2378,.7617,-.8839,0,.8839,-.7617,.2378,.7617,-.497,.2525,.497
                    ,-.7617,-.2378,.7617,0,-.2378,1.0773,-1.0773,.2378,0,-.7028,.2525,0,-.497,-.0064,.497,-.7028,-.0064,0,-1.0773,-.2378,0,-.8839,0,-.8839,-1.25,0,0,-.7617,.2378,-.7617,-.497,.2525,-.497,-.497,-.0064,-.497,-.7617,-.2378,-.7617,0,.2378,-1.0773,0,.2525,-.7028,0,-.0064,-.7028,0,-.2378,-1.0773
                    ,.8839,0,-.8839,0,0,-1.25,.7617,.2378,-.7617,.497,.2525,-.497,.7617,-.2378,-.7617,.497,-.0064,-.497
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,5,6,4,7,8,6,8,0,2,9,3,0,10,5,3,11,7,5,12,13,7,13,9,0,14,10,9,15,11,10,16,12,11,12,17,18,18,14,9,14,19,15,19,16
                ,15,20,21,16,22,17,21,23,14,17,24,19,25,26,20,19,27,22,20,28,23,22,29,25,23,24,30,26,26,31,27,31,28,27,32,29,28,33,24,29,34,30,35,36,31,30,37,32,31,32
                ,38,33,38,35,33,2,36,34,1,37,36,37,6,39,6,38,39,8,34,38,0,3,1,3,5,4,5,7,6,7,13,8,8,13,0,9,10,3,10,11,5,11,12,7,12,18,13,13,18,9
                ,14,15,10,15,16,11,16,21,12,12,21,17,18,17,14,14,25,19,19,20,16,20,22,21,22,23,17,23,25,14,24,26,19,26,27,20,27,28,22,28,29,23,29,24,25,24,35,30,26,30
                ,31,31,32,28,32,33,29,33,35,24,34,36,30,36,37,31,37,39,32,32,39,38,38,34,35,2,1,36,1,4,37,37,4,6,6,8,38,8,2,34]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .7071,0,.7071,.5474,.8369,0,1,0,0,.387,.8369,.387,-.5737,.819,0,-.4057,.819,-.4057,-.838,-.5457,0,-.5925,-.5457,-.5925,.3432,-.9392,0,0,0,1,0,.8369,.5474,0,.819,-.5737,0,-.5457,-.838,.2427,-.9392,.2427,-.7071,0,.7071,-.387,.8369,.387,.4057,.819,-.4057
                    ,-.2427,-.9392,.2427,0,-.9392,.3432,-.5474,.8369,0,.5737,.819,0,.5925,-.5457,-.5925,.838,-.5457,0,-.3432,-.9392,0,-.7071,0,-.7071,-1,0,0,-.387,.8369,-.387,.4057,.819,.4057,.5925,-.5457,.5925,-.2427,-.9392,-.2427,0,.8369,-.5474,0,.819,.5737,0,-.5457,.838,0,-.9392,-.3432
                    ,.7071,0,-.7071,0,0,-1,.387,.8369,-.387,-.4057,.819,.4057,.2427,-.9392,-.2427,-.5925,-.5457,.5925
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Material.003");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 40, 0, 240, this);
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

        belt1.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(83);
        };
        return belt1;
    })(BABYLON.Mesh);
    map01.belt1 = belt1;

    var eyebrows = (function (_super) {
        __extends(eyebrows, _super);
        function eyebrows(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5896;
            this.position.y  = 1.4644;
            this.position.z  = .1037;
            this.rotation.x  = -.0117;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .1364;
            this.scaling.y   = .1607;
            this.scaling.z   = .1607;

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
                    .0535,2.4318,-.8831,.0174,2.342,-.7944,.0535,2.342,-.8831,.4341,2.3383,-.7049,.4348,2.4766,-.4897,.5274,2.3254,-.4653,.5277,2.3254,-.6023,.4212,2.4744,-.783,.4909,2.3383,-.7646,.3465,2.4744,-.7062,.4709,2.4766,-.6267,-.0174,2.342,-.7944,-.0535,2.4318,-.8831,-.0535,2.342,-.8831,-.4341,2.3383,-.7049,-.4348,2.4766,-.4897,-.3465,2.4744,-.7062
                    ,-.5277,2.3254,-.6023,-.5274,2.3254,-.4653,-.4212,2.4744,-.783,-.4909,2.3383,-.7646,-.0174,2.4318,-.7944,-.4709,2.4766,-.6267,.0174,2.4318,-.7944
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,4,6,5,7,2,8,3,6,8,9,0,7,9,10,4,3,2,1,10,8,6,1,9,3,11,12,13,14,15,16,17,15,18,13,19,20,14,17,18,16,12,21,22,16
                ,15,13,14,11,20,22,17,11,16,21,0,23,1,3,9,4,4,10,6,7,0,2,3,5,6,9,23,0,9,7,10,3,8,2,10,7,8,1,23,9,11,21,12,14,18,15,17,22,15,13
                ,12,19,14,20,17,16,19,12,22,19,16,13,20,14,20,19,22,11,14,16]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.3883,.5421,-.7452,-.7338,-.5705,.3688,-.362,-.581,-.7289,-.3293,-.9095,.2536,-.1804,.4753,.8611,.3783,-.4121,.8289,.8122,-.5825,-.0323,.3988,.6889,-.6052,.6738,-.4908,-.5524,-.4137,.7444,.5241,.6138,.7892,-.0161,.7338,-.5705,.3688,.3883,.5421,-.7452,.362,-.581,-.7289,.3293,-.9095,.2536,.1804,.4753,.8611,.4137,.7444,.5241
                    ,-.8122,-.5825,-.0323,-.3783,-.4121,.8289,-.3988,.6889,-.6052,-.6738,-.4908,-.5524,.7647,.5327,.3625,-.6138,.7892,-.0161,-.7647,.5327,.3625
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.hair.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 24, 0, 120, this);
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

        eyebrows.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(84);
        };
        return eyebrows;
    })(BABYLON.Mesh);
    map01.eyebrows = eyebrows;

    var face = (function (_super) {
        __extends(face, _super);
        function face(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5896;
            this.position.y  = 1.8188;
            this.position.z  = .0966;
            this.rotation.x  = 0;
            this.rotation.y  = -1.5708;
            this.rotation.z  = .0117;
            this.scaling.x   = .1607;
            this.scaling.y   = .1607;
            this.scaling.z   = .1364;

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
                    .4633,.2101,0,.3514,.3027,-.4486,.3554,.2102,-.4671,.3246,-.1961,0,.299,-.6003,-.3272,.3588,-.6003,0,-.1592,.3011,-.5507,-.1592,.2117,-.5716,-.1592,-.309,-.5417,-.1592,-.6903,-.2767,-.7013,.1659,-.4506,-.7418,-.309,-.3919,-.7401,-.809,-.1784,-.7418,-.309,0,-.7401,-.809,0,-.7007,.3011,-.4266,-.8441,.1659,0
                    ,-.7013,.4839,0,-.8293,.3011,0,-.5933,.4823,-.3613,-.1556,.4829,-.4473,.4668,.3026,0,.3128,.4844,-.3556,-.7427,.1014,0,-.7016,.1014,-.4679,.3066,-.1974,-.3802,-.1595,.0925,-.5858,.43,.0811,0,.3156,.0812,-.4569,.4101,.4853,0,.1138,.6394,-.19,-.4621,.6381,-.1892,-.1522,.6381,-.2262,-.4873,.6389,0
                    ,.1755,.6403,0,.3514,.3027,.4486,.299,-.6003,.3272,.3554,.2102,.4671,-.1592,.3011,.5507,-.1592,-.309,.5417,.3066,-.1974,.3802,-.7013,.1659,.4506,-.1592,.2117,.5716,-.1592,-.6903,.2767,-.7418,-.309,.3919,-.7401,-.809,.1784,-.7007,.3011,.4266,-.5933,.4823,.3613,-.1556,.4829,.4473,.3128,.4844,.3556,-.7016,.1014,.4679
                    ,-.1595,.0925,.5858,.3156,.0812,.4569,.1138,.6394,.19,-.4621,.6381,.1892,-.1522,.6381,.2262
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,2,6,7,4,8,9,6,10,7,9,11,12,12,13,14,15,16,10,9,14,5,15,17,18,6,19,15,1,20,6,21,22,1,11,23,13,8,24,11,25,26,8,27,25
                ,3,10,23,24,7,24,26,28,7,26,27,2,28,29,30,22,20,31,19,20,30,32,17,31,33,32,34,33,0,35,21,36,3,5,37,38,35,36,39,40,41,38,42,43,44,39,45,13,44,16
                ,46,41,14,45,43,46,17,47,38,47,48,35,48,49,21,49,29,44,23,50,39,50,51,40,51,52,40,27,3,23,41,50,50,42,51,52,42,37,27,37,0,53,29,49,54,48,47,48,53,49
                ,17,54,47,34,53,55,0,21,1,3,25,4,2,1,6,4,25,8,6,15,10,9,8,11,12,11,13,15,18,16,5,4,9,9,12,14,15,19,17,6,20,19,1,22,20,21,29,22,11,24
                ,23,8,26,24,25,28,26,27,28,25,10,16,23,7,10,24,28,2,7,27,0,2,29,34,30,20,32,31,20,22,30,17,19,31,33,31,32,32,30,34,0,37,35,36,40,3,37,42,38,36
                ,43,39,41,46,38,43,45,44,45,14,13,16,18,46,43,36,5,5,14,43,46,18,17,38,46,47,35,38,48,21,35,49,44,13,23,39,44,50,40,39,51,40,52,27,23,16,41,50,41,42
                ,52,51,42,27,52,37,53,34,29,54,55,48,48,55,53,17,33,54,55,54,33,33,34,55]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .9909,-.1347,0,.6609,.3023,-.6869,.6984,-.0414,-.7145,.9852,-.1711,0,.6308,-.5832,-.5119,.8219,-.5695,0,-.012,.3521,-.9359,.0022,.1657,-.9862,.0192,-.3074,-.9514,.062,-.859,-.5082,-.7291,.111,-.6754,-.7521,-.1993,-.6282,-.5627,-.7255,-.3962,-1,-.0027,0,-.6326,-.7745,0,-.668,.3326,-.6657,-.916,-.4012,0
                    ,-.7393,.6733,0,-.9412,.3379,0,-.4773,.6646,-.5748,.0014,.652,-.7582,.9911,.1326,0,.562,.6335,-.5317,-.8988,-.4383,0,-.7096,.063,-.7017,.7775,-.1667,-.6063,.0395,-.0085,-.9992,.966,-.2586,0,.6444,-.2261,-.7305,.8153,.579,0,.2149,.9353,-.2811,-.2808,.9192,-.2761,.001,.9454,-.3258,-.3317,.9434,0
                    ,.3371,.9414,0,.6609,.3023,.6869,.6308,-.5832,.5119,.6984,-.0414,.7145,-.012,.3521,.9359,.0192,-.3074,.9514,.7775,-.1667,.6063,-.7291,.111,.6754,.0022,.1657,.9862,.062,-.859,.5082,-.7521,-.1993,.6282,-.5627,-.7255,.3962,-.668,.3326,.6657,-.4773,.6646,.5748,.0014,.652,.7582,.562,.6335,.5317,-.7096,.063,.7017
                    ,.0395,-.0085,.9992,.6444,-.2261,.7305,.2149,.9353,.2811,-.2808,.9192,.2761,.001,.9454,.3258
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.skin.002");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 56, 0, 324, this);
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

        face.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(85);
        };
        return face;
    })(BABYLON.Mesh);
    map01.face = face;

    var hair = (function (_super) {
        __extends(hair, _super);
        function hair(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.2147;
            this.position.y  = 1.9243;
            this.position.z  = .0597;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = -1.5708;
            this.scaling.x   = .2722;
            this.scaling.y   = .2722;
            this.scaling.z   = .0217;

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
                    .8709,-.9065,-.1385,1.0023,-.9442,.8491,.782,-.9859,.9359,1.0023,-.9506,-.8051,.782,-.9859,-.9227,.1114,-1.1197,-1,.2074,-1.0239,-.1253,.0218,-1.1022,-.1253,.1114,-1.1197,1,-.0013,-1.2681,1,-.0936,-1.2668,-.1253,-.0013,-1.2681,-1,.532,-1.03,-.8585,.2432,-1.0577,-1,.532,-1.03,.8585,.2432,-1.0577,1,-.0626,-1.3808,-.1253
                    ,.0238,-1.3721,-1,.0238,-1.3721,1,.5631,-.9753,-.1253,.8779,-.9772,-2.0644,1.0082,-.9399,-.8768,.7878,-.9896,-.5723,1.0082,-.9826,-2.6933,.7878,-1.0179,-2.5868,.1192,-1.1529,-2.5144,.2144,-1.046,-1.9782,.0311,-1.1187,-1.7706,.249,-1.0519,-.7512,.1192,-1.1175,-.5641,-.0866,-1.2792,-1.3129,.0046,-1.2623,-.1513,.0046,-1.2976,-2.1015,.5378,-1.0646,-2.5912
                    ,.249,-1.0872,-2.7015,.5378,-1.0343,-.7783,.0297,-1.3879,-1.844,-.0557,-1.3793,-1.0273,.0297,-1.3526,.1063,.57,-1.0248,-2.0089,.8875,-1.0153,-3.737,1.0163,-.958,-3.1152,.796,-1.0142,-2.6322,.796,-1.0682,-4.0877,1.2184,-.9793,-4.3169,.13,-1.1685,-3.7628,.224,-1.0508,-3.5729,.0439,-1.1184,-3.1781,.2572,-1.0403,-2.3051,.13,-1.1013,-1.9492,-.0769,-1.2677,-2.3074
                    ,.0127,-1.2359,-1.1639,.0184,-1.3031,-3.3794,.546,-1.0833,-4.0431,.2572,-1.1075,-4.1188,.546,-1.0256,-2.4861,.0435,-1.376,-2.8896,-.046,-1.3812,-1.7642,.0378,-1.3199,-.674,.5797,-1.0303,-3.6312,.8709,-.8861,1.5507,1.0023,-.9506,2.4818,.782,-.9859,2.6135,.782,-.9859,.5305,1.2018,-.745,1.5507,.1114,-1.1197,.5704,.2074,-1.0239,1.554,.0218,-1.1022,1.554
                    ,.1114,-1.1197,2.5704,-.0013,-1.2681,2.5704,-.0936,-1.2668,1.554,-.0013,-1.2681,.5704,.532,-1.03,.7119,.2432,-1.0577,.5704,.532,-1.03,2.4289,.2432,-1.0577,2.5704,-.0626,-1.3808,1.554,.0238,-1.3721,.5704,.0238,-1.3721,2.5704,.5631,-.9829,1.554,1.064,-.7459,3.7862,.782,-1.0166,4.1306,.8709,-.9138,3.2858,1.0023,-.9503,2.6236,.782,-.9803,2.1618
                    ,.2432,-1.0424,2.1406,.0218,-1.1114,2.9314,.1114,-1.1057,1.9005,.2074,-1.0406,3.1976,.1114,-1.151,3.818,-.0013,-1.2933,3.2884,-.0936,-1.2692,2.3441,-.0013,-1.248,1.3709,.532,-1.0196,2.3117,.5631,-.9958,3.2369,.2432,-1.1039,4.0581,-.0626,-1.3676,1.9778,.0238,-1.3367,1.0405,.0238,-1.382,2.958,.532,-1.0724,4.0562,1.0884,-.7341,6.3745,.797,-1.1085,5.5627
                    ,.8888,-1.0455,4.9943,1.0174,-1.013,4.7345,.797,-1.0253,3.6853,.2582,-1.0748,3.8693,.0456,-1.1642,4.2341,.1315,-1.1259,3.3195,.2253,-1.1076,4.8438,.1315,-1.2297,4.8376,.0138,-1.3423,3.6247,-.0757,-1.2891,2.8892,.0138,-1.2386,2.1066,.547,-1.0642,4.058,.581,-1.0888,4.9339,.2582,-1.1786,5.3874,-.0447,-1.3671,2.0502,.0389,-1.3089,1.35,.547,-1.1533,5.3613
                    ,.8888,-1.1825,6.42,1.0174,-1.2293,7.3113,.797,-1.2781,6.499,1.0174,-1.0345,6.4072,.797,-1.102,5.574,.2582,-1.1488,5.2801,.0456,-1.2397,5.3083,.1315,-1.1753,4.6895,.2253,-1.2103,6.1688,.1315,-1.3217,5.4781,.0138,-1.3803,3.7662,-.0757,-1.3046,3.4099,.0138,-1.2338,2.9775,.547,-1.1444,5.2694,.581,-1.206,6.2961,.2582,-1.2952,6.2542,-.0447,-1.3451,2.2257
                    ,.0389,-1.2703,1.9095,.547,-1.2809,6.3132,.8888,-1.3088,6.6293,1.0174,-1.3677,7.2155,.797,-1.3771,6.2901,1.0174,-1.256,7.1895,.797,-1.2493,6.2603,.2582,-1.2341,5.9056,.0456,-1.3107,5.3037,.1315,-1.2353,5.0612,.2582,-1.3934,5.9427,.1315,-1.3946,5.0983,-.0757,-1.3138,3.2383,.0138,-1.3974,3.2357,.0138,-1.2381,3.1986,.547,-1.2452,6.0331,.2253,-1.3093,6.24
                    ,.547,-1.3819,6.0649,.0389,-1.2398,2.0366,-.0447,-1.3157,1.9499,.0389,-1.3991,2.0738,.581,-1.3091,6.3785,.8709,-1.8449,-.1385,1.0023,-1.8071,.8491,.782,-1.7654,.9359,1.0023,-1.8008,-.8051,.782,-1.7654,-.9227,.1114,-1.6316,-1,.2074,-1.7274,-.1253,.0218,-1.6492,-.1253,.1114,-1.6316,1,-.0013,-1.4832,1,-.0936,-1.4846,-.1253,-.0013,-1.4832,-1
                    ,.532,-1.7213,-.8585,.2432,-1.6936,-1,.532,-1.7213,.8585,.2432,-1.6936,1,-.0626,-1.3705,-.1253,.0238,-1.3792,-1,.0238,-1.3792,1,.5631,-1.776,-.1253,.8779,-1.7742,-2.0644,1.0082,-1.8115,-.8768,.7878,-1.7618,-.5723,1.0082,-1.7687,-2.6933,.7878,-1.7334,-2.5868,.1192,-1.5985,-2.5144,.2144,-1.7054,-1.9782,.0311,-1.6326,-1.7706,.249,-1.6994,-.7512
                    ,.1192,-1.6338,-.5641,-.0866,-1.4721,-1.3129,.0046,-1.4891,-.1513,.0046,-1.4537,-2.1015,.5378,-1.6867,-2.5912,.249,-1.6641,-2.7015,.5378,-1.717,-.7783,.0297,-1.3635,-1.844,-.0557,-1.372,-1.0273,.0297,-1.3988,.1063,.57,-1.7266,-2.0089,.8875,-1.7361,-3.737,1.0163,-1.7933,-3.1152,.796,-1.7371,-2.6322,.796,-1.6832,-4.0877,1.2184,-1.7721,-4.3169,.13,-1.5828,-3.7628
                    ,.224,-1.7006,-3.5729,.0439,-1.6329,-3.1781,.2572,-1.711,-2.3051,.13,-1.65,-1.9492,-.0769,-1.4837,-2.3074,.0127,-1.5154,-1.1639,.0184,-1.4482,-3.3794,.546,-1.6681,-4.0431,.2572,-1.6438,-4.1188,.546,-1.7257,-2.4861,.0435,-1.3753,-2.8896,-.046,-1.3701,-1.7642,.0378,-1.4314,-.674,.5797,-1.721,-3.6312,.8709,-1.8652,1.5507,1.0023,-1.8008,2.4818,.782,-1.7654,2.6135
                    ,.782,-1.7654,.5305,1.2018,-2.0063,1.5507,.1114,-1.6316,.5704,.2074,-1.7274,1.554,.0218,-1.6492,1.554,.1114,-1.6316,2.5704,-.0013,-1.4832,2.5704,-.0936,-1.4846,1.554,-.0013,-1.4832,.5704,.532,-1.7213,.7119,.2432,-1.6936,.5704,.532,-1.7213,2.4289,.2432,-1.6936,2.5704,-.0626,-1.3705,1.554,.0238,-1.3792,.5704,.0238,-1.3792,2.5704,.5631,-1.7684,1.554
                    ,1.064,-2.0055,3.7862,.782,-1.7347,4.1306,.8709,-1.8375,3.2858,1.0023,-1.8011,2.6236,.782,-1.7711,2.1618,.2432,-1.709,2.1406,.0218,-1.64,2.9314,.1114,-1.6457,1.9005,.2074,-1.7108,3.1976,.1114,-1.6004,3.818,-.0013,-1.4581,3.2884,-.0936,-1.4822,2.3441,-.0013,-1.5034,1.3709,.532,-1.7317,2.3117,.5631,-1.7555,3.2369,.2432,-1.6474,4.0581,-.0626,-1.3837,1.9778
                    ,.0238,-1.4146,1.0405,.0238,-1.3693,2.958,.532,-1.6789,4.0562,1.0884,-2.0172,6.3745,.797,-1.6428,5.5627,.8888,-1.7059,4.9943,1.0174,-1.7383,4.7345,.797,-1.7261,3.6853,.2582,-1.6765,3.8693,.0456,-1.5871,4.2341,.1315,-1.6254,3.3195,.2253,-1.6438,4.8438,.1315,-1.5217,4.8376,.0138,-1.409,3.6247,-.0757,-1.4622,2.8892,.0138,-1.5128,2.1066,.547,-1.6872,4.058
                    ,.581,-1.6626,4.9339,.2582,-1.5728,5.3874,-.0447,-1.3843,2.0502,.0389,-1.4425,1.35,.547,-1.5981,5.3613,.8888,-1.5688,6.42,1.0174,-1.522,7.3113,.797,-1.4732,6.499,1.0174,-1.7168,6.4072,.797,-1.6494,5.574,.2582,-1.6026,5.2801,.0456,-1.5116,5.3083,.1315,-1.5761,4.6895,.2253,-1.541,6.1688,.1315,-1.4296,5.4781,.0138,-1.3711,3.7662,-.0757,-1.4467,3.4099
                    ,.0138,-1.5175,2.9775,.547,-1.6069,5.2694,.581,-1.5454,6.2961,.2582,-1.4561,6.2542,-.0447,-1.4062,2.2257,.0389,-1.481,1.9095,.547,-1.4704,6.3132,.8888,-1.4426,6.6293,1.0174,-1.3837,7.2155,.797,-1.3742,6.2901,1.0174,-1.4954,7.1895,.797,-1.5021,6.2603,.2582,-1.5173,5.9056,.0456,-1.4406,5.3037,.1315,-1.516,5.0612,.2582,-1.358,5.9427,.1315,-1.3567,5.0983
                    ,-.0757,-1.4376,3.2383,.0138,-1.354,3.2357,.0138,-1.5133,3.1986,.547,-1.5062,6.0331,.2253,-1.442,6.24,.547,-1.3694,6.0649,.0389,-1.5116,2.0366,-.0447,-1.4356,1.9499,.0389,-1.3522,2.0738,.581,-1.4422,6.3785,1.2018,-.8067,-.3965,1.2713,-.8665,-1.9197,1.0163,-1.0051,-4.3866,1.0023,-.928,.4513,1.0023,-.982,4.3434,.9896,-1.0382,6.6252,1.1434,-1.1248,8.051
                    ,1.2197,-1.3067,8.0048,1.2018,-1.9447,-.3965,1.2713,-1.8849,-1.9197,1.0163,-1.7463,-4.3866,1.0023,-1.8233,.4513,1.0023,-1.7693,4.3434,.9896,-1.7131,6.6252,1.1434,-1.6265,8.051,1.2197,-1.4446,8.0048
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,0,4,5,6,7,6,8,7,7,9,10,11,7,10,12,6,13,6,14,15,11,16,17,16,9,18,12,0,19,0,14,19,20,21,22,23,20,24,25,26,27,27,28,29,30,29
                ,31,32,27,30,33,26,34,26,35,28,36,30,37,37,31,38,24,39,33,20,35,39,40,41,42,43,44,40,45,46,47,47,48,49,50,49,51,52,47,50,53,46,54,46,55,48,56,50,57,57
                ,51,58,53,40,59,59,42,55,60,61,62,63,64,60,65,66,67,66,68,67,67,69,70,71,67,70,72,66,73,66,74,75,71,76,77,76,69,78,72,60,79,60,74,79,80,81,82,83,82,84
                ,85,86,87,88,89,86,86,90,91,87,91,92,93,88,85,94,95,88,92,96,97,91,98,96,93,82,94,82,99,94,100,101,102,103,102,104,105,106,107,108,109,106,106,110,111,107,111,112,113,108
                ,105,114,115,108,112,116,117,113,102,114,102,118,114,119,120,121,122,119,123,124,125,126,127,128,125,125,129,130,126,130,131,132,127,124,133,134,127,131,135,136,123,133,132,133,121,137,138,139,140,141
                ,138,142,143,144,145,144,146,147,148,147,149,145,148,150,151,152,143,152,153,146,154,148,155,148,156,155,142,157,151,157,140,153,158,159,160,161,158,162,163,164,165,164,166,165,165,167,168,169,165,168
                ,170,164,171,164,172,173,169,174,175,174,167,176,170,158,177,158,172,177,178,179,180,181,178,182,183,184,185,185,186,187,188,187,189,190,185,188,191,184,192,184,193,186,194,188,195,195,189,196,182,197
                ,191,178,193,197,198,199,200,201,202,198,203,204,205,205,206,207,208,207,209,210,205,208,211,204,212,204,213,206,214,208,215,215,209,216,211,198,217,217,200,213,218,219,220,221,222,218,223,224,225,224
                ,226,225,225,227,228,229,225,228,230,224,231,224,232,233,229,234,235,234,227,236,230,218,237,218,232,237,238,239,240,241,240,242,243,244,245,246,247,244,244,248,249,245,249,250,251,246,243,252,253,246
                ,250,254,255,249,256,254,251,240,252,240,257,252,258,259,260,261,260,262,263,264,265,266,267,264,264,268,269,265,269,270,271,266,263,272,273,266,270,274,275,271,260,272,260,276,272,277,278,279,280,277
                ,281,282,283,284,285,286,283,283,287,288,284,288,289,290,285,282,291,292,285,289,293,294,281,291,290,291,279,295,296,297,298,299,296,300,301,302,303,302,304,305,306,305,307,303,306,308,309,310,301,310
                ,311,304,312,306,313,306,314,313,300,315,309,315,298,311,0,316,1,3,316,0,5,13,6,6,15,8,7,8,9,11,5,7,12,19,6,6,19,14,11,10,16,16,10,9,12,4,0,0,2,14
                ,20,317,21,23,317,20,25,34,26,27,26,28,30,27,29,32,25,27,33,39,26,26,39,35,36,32,30,37,30,31,24,20,39,20,22,35,40,44,41,43,318,44,45,54,46,47,46,48,50,47
                ,49,52,45,47,53,59,46,46,59,55,56,52,50,57,50,51,53,43,40,59,40,42,60,64,61,63,319,64,65,73,66,66,75,68,67,68,69,71,65,67,72,79,66,66,79,74,71,70,76,76
                ,70,69,72,63,60,60,62,74,80,320,81,83,80,82,85,88,86,88,95,89,86,89,90,87,86,91,93,94,88,94,99,95,92,91,96,91,90,98,93,84,82,82,81,99,100,321,101,103,100,102
                ,105,108,106,108,115,109,106,109,110,107,106,111,113,114,108,114,118,115,112,111,116,113,104,102,102,101,118,119,322,120,122,322,119,124,127,125,127,134,128,125,128,129,126,125,130,132,133,127,133,137
                ,134,131,130,135,123,119,133,133,119,121,138,323,139,141,323,138,143,152,144,144,152,146,148,144,147,145,144,148,151,157,152,152,157,153,154,150,148,148,149,156,142,138,157,157,138,140,158,324,159,161
                ,324,158,163,171,164,164,173,166,165,166,167,169,163,165,170,177,164,164,177,172,169,168,174,174,168,167,170,162,158,158,160,172,178,325,179,181,325,178,183,192,184,185,184,186,188,185,187,190,183,185
                ,191,197,184,184,197,193,194,190,188,195,188,189,182,178,197,178,180,193,198,202,199,201,326,202,203,212,204,205,204,206,208,205,207,210,203,205,211,217,204,204,217,213,214,210,208,215,208,209,211,201
                ,198,217,198,200,218,222,219,221,327,222,223,231,224,224,233,226,225,226,227,229,223,225,230,237,224,224,237,232,229,228,234,234,228,227,230,221,218,218,220,232,238,328,239,241,238,240,243,246,244,246
                ,253,247,244,247,248,245,244,249,251,252,246,252,257,253,250,249,254,249,248,256,251,242,240,240,239,257,258,329,259,261,258,260,263,266,264,266,273,267,264,267,268,265,264,269,271,272,266,272,276,273
                ,270,269,274,271,262,260,260,259,276,277,330,278,280,330,277,282,285,283,285,292,286,283,286,287,284,283,288,290,291,285,291,295,292,289,288,293,281,277,291,291,277,279,296,331,297,299,331,296,301,310
                ,302,302,310,304,306,302,305,303,302,306,309,315,310,310,315,311,312,308,306,306,307,314,300,296,315,315,296,298]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.2365,.9716,-.0004,-.1737,.9829,.0607,-.1781,.9823,.0579,-.1853,.9774,-.1012,-.1605,.9836,-.0814,-.6172,.7833,-.0746,-.2622,.965,-.0067,-.6344,.7729,-.0085,-.6202,.7823,.0581,-.9752,.2052,.0821,-.9856,.1686,-.0112,-.973,.2051,-.1053,-.1395,.9884,-.0598,-.2804,.9586,-.0485,-.139,.9893,.0448,-.2832,.9583,.0378,-.9656,-.2597,-.0113
                    ,-.9674,-.2336,-.098,-.9692,-.234,.0763,-.1784,.9839,-.0076,-.2069,.9778,-.0311,-.2332,.9724,-.0049,-.1944,.9809,-.0035,-.2057,.9773,-.0511,-.1777,.9828,-.0501,-.5905,.8025,-.085,-.2587,.9648,-.0476,-.7041,.7078,-.0572,-.2827,.959,.0204,-.6599,.7501,.0435,-.9935,.1115,-.0215,-.9957,.0542,.0751,-.956,.2653,-.1249,-.1113,.992,-.0594
                    ,-.2244,.9722,-.0662,-.1238,.9923,.0018,-.8648,-.4942,-.0882,-.989,-.1357,.0591,-.9953,-.0589,.0764,-.1121,.9933,-.0259,-.1523,.9863,-.0636,-.2861,.9577,-.029,-.0848,.9963,-.0084,-.1675,.9825,-.082,-.1947,.9808,.0066,-.7116,.6897,-.134,-.3522,.931,-.0953,-.7452,.6636,-.0657,-.3044,.9525,.0084,-.6272,.7783,.0297,-.9915,.1285,-.02
                    ,-.9825,.1733,.0682,-.9632,.2275,-.1428,-.0735,.9904,-.1174,-.1997,.9733,-.1133,-.0533,.9985,-.0063,-.7941,-.6056,-.0515,-.997,.0421,.0649,-.9912,.1118,.0699,-.0674,.9959,-.06,-.3333,.9427,.0151,-.1545,.9839,.0899,-.17,.9823,.078,-.2772,.9566,-.0891,-.384,.9229,.0257,-.6187,.7828,-.0664,-.2544,.9671,-.0008,-.6343,.773,-.0011
                    ,-.6191,.7826,.0643,-.9745,.2052,.0908,-.9857,.1687,-.0014,-.9742,.2052,-.0938,-.1635,.985,-.0552,-.2818,.9585,-.0432,-.163,.9852,.0533,-.2822,.9584,.0417,-.9656,-.2598,-.0014,-.9684,-.2338,-.0872,-.9686,-.2339,.0844,-.2109,.9775,-.0007,-.612,.7887,.0576,-.4163,.892,.176,-.3618,.9314,-.039,-.0561,.9962,-.0659,-.1404,.989,-.0473
                    ,-.297,.9546,-.0207,-.7127,.6997,.0496,-.638,.7686,-.0468,-.2859,.9571,.0468,-.53,.8432,.0893,-.9619,.251,.1078,-.9918,.1274,.0085,-.986,.1415,-.0877,-.1376,.9902,-.0233,-.1959,.9801,.0302,-.2034,.9752,.0866,-.9967,-.0204,-.0782,-.9945,.0537,-.09,-.8585,-.5079,.0707,-.1819,.9792,.0891,-.8752,.4728,.1016,-.6441,.7649,.0053
                    ,-.3377,.9411,-.0162,-.2464,.9691,-.0009,-.1315,.991,.0245,-.2972,.9547,.0127,-.8768,.4727,.0877,-.571,.8207,-.0185,-.4506,.8853,.1146,-.8166,.5562,.1544,-.9764,-.1881,.106,-.6537,.7566,-.0144,-.8783,.4731,-.0686,-.0925,.9953,.0279,-.1153,.9897,.0852,-.196,.9701,.1434,-.8954,.4395,-.0717,-.8957,.4391,-.0705,-.1488,.9822,.1145
                    ,-.5802,.7855,.2151,-.9748,.1657,.1493,-.5241,.7618,.3807,-.7446,.6571,.1173,-.2718,.959,.0795,-.2554,.9653,.0549,-.966,.2329,.1124,-.5454,.8381,.0119,-.7187,.6019,.3481,-.8437,-.5085,.1721,-.7934,-.6045,.0714,-.6715,.7408,.0144,-.7237,.6891,-.0366,-.0864,.994,.0669,-.2785,.8249,.4919,-.5629,.4339,.7035,-.7458,.6649,-.0403
                    ,-.7463,.6644,-.0403,-.3511,.3564,.8659,-.963,.0461,.2654,-.9534,.1967,.2289,-.2663,-.9288,.2577,-.966,-.1131,.2324,-.2159,.9542,.207,-.4527,.879,.1498,-.9904,.0333,.1341,-.5907,.8058,.0419,-.5036,-.8452,.179,-.6362,-.7699,.0492,-.9993,.0268,.0245,-.6825,-.7307,.0151,-.6443,.7647,.0067,-.0912,.9756,.1995,-.6386,.0237,.7691
                    ,-.1143,-.9624,.2464,-.6616,.7496,-.0169,-.9927,.1179,-.024,-.6938,-.7199,-.0155,-.5651,.0325,.8244,.2365,.9716,.0004,.1737,.9829,-.0607,.1781,.9823,-.0579,.1853,.9774,.1012,.1605,.9836,.0814,.6172,.7833,.0746,.2622,.965,.0067,.6344,.7729,.0085,.6202,.7823,-.0581,.9752,.2052,-.0821,.9856,.1686,.0112,.973,.2051,.1053
                    ,.1395,.9884,.0598,.2804,.9586,.0485,.139,.9893,-.0448,.2832,.9583,-.0378,.9656,-.2597,.0113,.9674,-.2336,.098,.9692,-.234,-.0763,.1784,.9839,.0076,.2069,.9778,.0311,.2332,.9724,.0049,.1944,.9809,.0035,.2057,.9773,.0511,.1777,.9828,.0501,.5905,.8025,.085,.2587,.9648,.0476,.7041,.7078,.0572,.2827,.959,-.0204
                    ,.6599,.7501,-.0435,.9935,.1115,.0215,.9957,.0542,-.0751,.956,.2653,.1249,.1113,.992,.0594,.2244,.9722,.0662,.1238,.9923,-.0018,.8648,-.4942,.0882,.989,-.1357,-.0591,.9953,-.0589,-.0764,.1121,.9933,.0259,.1523,.9863,.0636,.2861,.9577,.029,.0848,.9963,.0084,.1675,.9825,.082,.1947,.9808,-.0066,.7116,.6897,.134
                    ,.3522,.931,.0953,.7452,.6636,.0657,.3044,.9525,-.0084,.6272,.7783,-.0297,.9915,.1285,.02,.9825,.1733,-.0682,.9632,.2275,.1428,.0735,.9904,.1174,.1997,.9733,.1133,.0533,.9985,.0063,.7941,-.6056,.0515,.997,.0421,-.0649,.9912,.1118,-.0699,.0674,.9959,.06,.3333,.9427,-.0151,.1545,.9839,-.0899,.17,.9823,-.078
                    ,.2772,.9566,.0891,.384,.9229,-.0257,.6187,.7828,.0664,.2544,.9671,.0008,.6343,.773,.0011,.6191,.7826,-.0643,.9745,.2052,-.0908,.9857,.1687,.0014,.9742,.2052,.0938,.1635,.985,.0552,.2818,.9585,.0432,.163,.9852,-.0533,.2822,.9584,-.0417,.9656,-.2598,.0014,.9684,-.2338,.0872,.9686,-.2339,-.0844,.2109,.9775,.0007
                    ,.612,.7887,-.0576,.4163,.892,-.176,.3618,.9314,.039,.0561,.9962,.0659,.1404,.989,.0473,.297,.9546,.0207,.7127,.6997,-.0496,.638,.7686,.0468,.2859,.9571,-.0468,.53,.8432,-.0893,.9619,.251,-.1078,.9918,.1274,-.0085,.986,.1415,.0877,.1376,.9902,.0233,.1959,.9801,-.0302,.2034,.9752,-.0866,.9967,-.0204,.0782
                    ,.9945,.0537,.09,.8585,-.5079,-.0707,.1819,.9792,-.0891,.8752,.4728,-.1016,.6441,.7649,-.0053,.3377,.9411,.0162,.2464,.9691,.0009,.1315,.991,-.0245,.2972,.9547,-.0127,.8768,.4727,-.0877,.571,.8207,.0185,.4506,.8853,-.1146,.8166,.5562,-.1544,.9764,-.1881,-.106,.6537,.7566,.0144,.8783,.4731,.0686,.0925,.9953,-.0279
                    ,.1153,.9897,-.0852,.196,.9701,-.1434,.8954,.4395,.0717,.8957,.4391,.0705,.1488,.9822,-.1145,.5802,.7855,-.2151,.9748,.1657,-.1493,.5241,.7618,-.3807,.7446,.6571,-.1173,.2718,.959,-.0795,.2554,.9653,-.0549,.966,.2329,-.1124,.5454,.8381,-.0119,.7187,.6019,-.3481,.8437,-.5085,-.1721,.7934,-.6045,-.0714,.6715,.7408,-.0144
                    ,.7237,.6891,.0366,.0864,.994,-.0669,.2785,.8249,-.4919,.5629,.4339,-.7034,.7458,.6649,.0403,.7463,.6644,.0403,.3511,.3564,-.8659,.963,.0461,-.2654,.9534,.1967,-.2289,.2663,-.9288,-.2577,.966,-.1131,-.2324,.2159,.9542,-.207,.4527,.879,-.1498,.9904,.0333,-.1341,.5907,.8058,-.0419,.5036,-.8452,-.179,.6362,-.7699,-.0492
                    ,.9993,.0268,-.0245,.6825,-.7307,-.0151,.6443,.7647,-.0067,.0912,.9756,-.1995,.6386,.0237,-.7691,.1143,-.9624,-.2464,.6616,.7496,.0169,.9927,.1179,.024,.6938,-.7199,.0155,.5651,.0325,-.8244,-.3402,.9375,-.0735,-.2635,.9644,-.0212,-.1572,.9833,.0916,-.2881,.9517,-.1061,-.4328,.8462,.3107,-.9034,.4063,.1368,-.8941,.4302,.1243
                    ,-.9707,.0567,.2334,.3402,.9375,.0735,.2635,.9644,.0212,.1572,.9833,-.0916,.2881,.9517,.1061,.4328,.8462,-.3107,.9034,.4063,-.1368,.8941,.4302,-.1243,.9707,.0567,-.2334
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.hair.001");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 332, 0, 1128, this);
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

        hair.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(86);
        };
        return hair;
    })(BABYLON.Mesh);
    map01.hair = hair;

    var nose = (function (_super) {
        __extends(nose, _super);
        function nose(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = -52.5896;
            this.position.y  = 1.8171;
            this.position.z  = -.0527;
            this.rotation.x  = -.0117;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = .0099;
            this.scaling.y   = .0339;
            this.scaling.z   = .0116;

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
                    -1.2631,.7765,1.6687,-.8592,-.067,2.7134,-1.0514,-.067,.889,-.828,.7765,2.644,.8592,-.067,2.7134,1.2631,.7765,1.6687,1.0514,-.067,.889,1.6128,-1.2251,2.8394,-.6568,-1.2251,.6366,-1.6128,-1.2251,2.8394,.828,.7765,2.644,.6568,-1.2251,.6366
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,1,4,5,6,5,2,6,7,8,9,3,5,10,6,8,11,7,6,11,9,4,7,2,9,8,0,3,1,3,10,4,4,10,5,5,0,2,7,11,8,3,0,5,6,2
                ,8,7,4,6,9,1,4,2,1,9]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.7687,.5997,-.2221,-.5364,.2078,.818,-.6314,.3019,-.7142,-.4233,.6358,.6453,.5364,.2078,.818,.7687,.5997,-.2221,.6314,.3019,-.7142,.7458,-.4104,.5247,-.3523,-.5817,-.7331,-.7458,-.4104,.5247,.4233,.6358,.6453,.3523,-.5817,-.7331
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.skin.002");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 12, 0, 60, this);
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

        nose.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(87);
        };
        return nose;
    })(BABYLON.Mesh);
    map01.nose = nose;

    var Cylinder = (function (_super) {
        __extends(Cylinder, _super);
        function Cylinder(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 47.5143;
            this.position.y  = 4.4206;
            this.position.z  = -67.2661;
            this.rotation.x  = 0;
            this.rotation.y  = -1.2862;
            this.rotation.z  = 0;
            this.scaling.x   = .1309;
            this.scaling.y   = .1309;
            this.scaling.z   = .1309;

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
                    4.6067,-29.4784,7.0005,5.9272,-25.0144,4.9538,7.6906,-29.4784,5.7231,6.886,-25.0144,2.6392,8.968,-29.4784,2.6392,7.6906,-29.4784,-.4447,5.9272,-25.0144,.3246,4.6067,-29.4784,-1.7221,3.6127,-25.0144,-.6341,1.5228,-29.4784,-.4447,1.2981,-25.0144,.3246,.2454,-29.4784,2.6392,5.1254,-18.1404,-.1623,3.0331,-18.1404,-1.029,1.2981,-25.0144,4.9538,1.5228,-29.4784,5.7231,3.6127,-25.0144,5.9126
                    ,10.8731,-33.9774,-2.6254,-1.8368,-33.9774,2.6392,.3439,-33.9774,7.9039,4.1356,-9.5755,1.93,3.3926,-9.5755,.1363,.3393,-25.0144,2.6392,.9408,-18.1404,4.0223,5.1254,-18.1404,4.0223,5.9921,-18.1404,1.93,.9408,-18.1404,-.1623,3.0331,-18.1404,4.8889,.0742,-18.1404,1.93,-.9377,-9.5755,1.93,-4.9428,.2375,2.4737,-.1948,-9.5755,3.7236,3.3926,-9.5755,3.7236,1.5989,-9.5755,4.4666
                    ,-.1948,-9.5755,.1363,1.5989,-9.5755,-.6067,-3.6437,.2375,-.6625,-7.808,14.8737,4.6564,-8.0831,14.8737,4.5425,-4.9428,.2375,-.1244,-1.8065,.2375,1.1747,-2.3446,.2375,-.1244,-2.3446,.2375,2.4737,-3.6437,.2375,3.0118,-5.4809,.2375,1.1747,-8.4721,14.8737,4.9315,-7.6941,14.8737,4.9315,-8.3581,14.8737,5.2066,-8.3581,14.8737,4.6564,-7.808,14.8737,5.2066,-8.0831,14.8737,5.3205
                    ,2.9174,-10.0359,.9958,7.5934,-4.5983,-.3013,2.0767,-9.4164,.0411,6.8585,-4.0567,2.216,13.6503,4.1882,1.2142,7.6826,-4.664,2.1702,2.9684,-10.0734,2.4093,8.2392,-5.0741,1.4138,1.0619,-8.6686,3.5169,6.2496,-3.608,1.5246,.9388,-8.5779,.1045,6.2127,-3.5808,.5009,.1702,-8.0115,1.1487,6.7693,-3.991,-.2554,8.2023,-5.0469,.3901,2.1998,-9.5071,3.4536,.2212,-8.0491,2.5622
                    ,13.7604,4.1071,.8373,13.4569,4.3307,.7006,13.3391,4.4176,.8607,13.3469,4.4118,1.0775,13.6314,4.2021,.6909,13.7682,4.1014,1.054,13.4758,4.3168,1.2239,5.6085,-33.9774,10.0845,.3439,-33.9774,-2.6254,5.6085,-33.9774,-4.8061,13.0538,-33.9774,2.6392,10.8731,-33.9774,7.9039,-38.5272,-9.9558,7.8549,-38.9931,-8.7468,-3.9331,-41.3398,5.0323,3.5381,-.8228,7.5235,-33.5988,-12.0613,3.7384,-33.5428
                    ,-6.675,6.2354,-39.4648,-17.0396,16.2975,-23.1785,-10.9645,19.1138,-29.8576,-23.1146,13.4812,-16.4993,-17.4477,1.2414,-27.6209,-29.1897,10.6649,-9.8202,-22.834,-1.2557,-21.6989,-33.6067,-6.2497,-9.855,-28.2204,-3.7527,-15.777,-35.2647,7.8486,-3.1411,28.9041,12.7546,7.5193,28.4383,13.9636,-4.2687,34.2905,15.2516,1.5973,15.4374,24.9247,-3.3934,22.586,12.6756,-10.1347,8.8369,23.472,-10.0095,16.7338,11.3875,-16.0007
                    ,10.8816,10.0995,-21.8667,2.2364,22.0193,-16.6255,5.0294,8.8115,-27.7328,-4.364,20.5666,-23.2416,15.9628,23.5611,9.9018,22.0378,26.3774,3.2226,8.0413,28.1896,3.9616,-6.7682,28.6267,-9.324,-12.437,23.6824,-16.565,23.5178,10.2576,13.4412,9.8878,20.7448,16.5809,.6013,28.7189,11.2678,.0579,30.1291,-2.4818,-7.4464,30.85,4.8465,-19.877,24.2118,-9.2588,12.7451,5.2635,25.2851,18.1314,7.7605,19.3632
                    ,3.8127,17.9285,23.26,-13.7291,27.9374,11.754,-14.2725,29.3476,-1.9957,-20.5552,26.435,4.9118,-26.1597,21.2992,-2.3513,7.3587,2.7665,31.2071,-10.8069,19.4518,24.684,-5.6814,25.8063,18.1753,-18.7902,21.3914,18.2405,-25.6163,19.889,11.3983,-31.2851,14.9447,4.1574,1.9724,.2694,37.129,-2.2623,15.1122,29.9392,-14.9379,10.8432,30.0023,-21.5383,9.3905,23.3862,-28.1388,7.9378,16.7702,-34.7393,6.485,10.1541
                    ,-9.2662,-3.5156,37.185,-8.3374,12.2959,36.6183,-15.1184,-4.8037,31.319,-20.9706,-6.0917,25.453,-32.675,-8.6677,13.7209,-4.1389,-4.0514,-43.7856,9.7138,.3682,-41.7319,-2.6222,13.0789,-38.3787,39.2615,3.8479,13.9843,40.7141,6.0106,-.4677,46.9142,7.139,7.7852,25.3491,18.1699,-1.1464,32.3419,19.4427,8.1617,18.3563,16.8972,-10.4545,34.514,4.8821,-8.7205,11.3634,15.6244,-19.7625,28.314,3.7536,-16.9734
                    ,15.9138,1.4967,-33.4791,22.1139,2.6251,-25.2262,4.3706,14.3517,-29.0706,-12.8543,-17.0272,42.9264,.9984,-12.6076,44.9801,-6.6543,-15.8987,51.1793,-2.1826,4.595,36.1288,8.651,-9.3165,38.781,6.4485,8.3069,29.137,16.3036,-6.0254,32.5818,23.9563,-2.7343,26.3826,15.0797,12.0189,22.1452,31.6089,.5568,20.1835,23.7108,15.7308,15.1535,-17.8065,-.3896,33.8125,-10.8137,.8831,43.1206,-11.7,10.4565,28.4975
                    ,-4.2069,18.5574,21.7605,15.0784,21.9728,6.8051,-19.0544,-18.1557,34.6736,-24.7993,-1.6624,24.5045,-20.3649,13.4023,19.365,-12.9515,21.7404,12.6555,4.7192,22.3962,14.5297,6.4135,24.9187,-2.3273,-25.2545,-19.2841,26.4207,-31.7921,-2.9351,15.1964,-27.5967,12.0861,9.7388,-20.1833,20.4241,3.0292,-4.0253,25.5792,5.4247,-11.2572,24.2629,-4.2016,-37.6546,-21.5411,9.915,-31.4545,-20.4126,18.1679,-33.3956,6.5077,-.3812
                    ,-25.9024,14.6086,-7.1183,-16.9763,18.4474,-14.349,-.8183,23.6024,-11.9536,-6.6171,18.024,-22.0736,-43.8547,-22.6696,1.6622,-38.7849,-4.2079,5.8883,-37.1466,-1.7687,-10.4115,-28.5155,1.9432,-17.4033,-19.8844,5.6551,-24.3951,-11.2533,9.367,-31.3869,-42.4021,-20.5069,-12.7898,-45.7777,-5.4807,-3.4197,-34.7495,-17.2158,-18.989,-27.0968,-13.9247,-25.1882,-11.7916,-7.3425,-37.5865,24.4385,14.2462,-8.2171,34.0017,9.9151,-11.4764
                    ,30.6211,7.9201,-4.0664,5.3742,2.9955,33.5703,10.3375,-4.0503,40.3938,3.138,-6.0287,36.5766,9.1871,5.2456,25.2128,13.7181,-2.0553,32.9838,12.9999,7.4958,16.8553,17.0987,-.0602,25.5737,23.8599,3.9299,10.7537,20.4793,1.9349,18.1637,16.8128,9.7459,8.4978,27.2405,5.925,3.3436,20.6256,11.9961,.1404,-40.0589,-17.8989,13.6734,-35.2259,-8.1611,12.044,-32.8594,-15.9205,17.4906,-27.1058,-5.9298,16.3493
                    ,-25.66,-13.9421,21.3078,-18.9858,-3.6985,20.6545,-18.4605,-11.9638,25.125,-11.261,-9.9854,28.9422,-10.8658,-1.4672,24.9598,-4.0615,-8.0071,32.7594,-2.7458,.7641,29.2651,-36.6783,-15.9038,6.2634,-31.413,-5.911,3.6865,-25.8758,1.9528,8.8787,-18.6355,7.7023,13.7299,-.6831,8.8756,22.236,-33.2977,-13.9087,-1.1466,-27.6002,-3.6608,-4.671,-23.0899,7.7218,.6342,-15.9139,13.6628,5.5076,-10.2379,10.0099,18.1823
                    ,2.1029,14.6446,13.9915,-29.9171,-11.9137,-8.5567,-23.7873,-1.4106,-13.0285,-19.1467,10.0489,-8.0089,-3.5731,18.2975,1.3169,-7.5163,15.9704,9.9601,-23.1559,-7.9235,-23.3768,-26.5365,-9.9186,-15.9667,-14.0462,8.934,-17.0508,-6.8059,14.6836,-12.1996,-11.9707,15.9899,-3.1356,1.5917,16.9911,-7.7472,6.0461,16.9717,5.3484,11.1465,15.8568,-3.6935,-19.7753,-5.9285,-30.7868,-19.9744,.8395,-21.386,-8.0416,5.321,-25.4382
                    ,.0784,7.5523,-21.1329,8.1985,9.7836,-16.8277,16.3185,12.0149,-12.5224,-16.3947,-3.9334,-38.1968,-16.1616,3.0897,-29.7435,-9.1952,-1.955,-34.3796,-1.9957,.0233,-30.5624,12.4033,3.98,-22.928,19.6028,5.9584,-19.1108,26.8022,7.9368,-15.2936,-5.9042,-10.4602,-3.5324,-6.2293,-10.4602,-9.9001,-4.9183,-4.3145,-6.7749,15.245,-10.4602,-26.9572,8.8773,-10.4602,-26.6321,11.8986,-10.4602,-29.9785,8.7121,-4.3145,-21.8719
                    ,12.1197,-4.3145,-25.6462,5.3045,-4.3145,-18.0977,5.8559,-10.4602,-23.2857,1.8969,-4.3145,-14.3234,2.8346,-10.4602,-19.9393,-3.208,-10.4602,-13.2465,-.1867,-10.4602,-16.5929,-1.5107,-4.3145,-10.5491,32.302,-10.4602,-5.4829,31.9769,-10.4602,-11.8506,35.3233,-10.4602,-8.8293,27.2168,-4.3145,-12.0158,28.6305,-10.4602,-14.8719,23.4425,-4.3145,-15.4234,25.2842,-10.4602,-17.8932,21.9377,-10.4602,-20.9146,19.6683,-4.3145,-18.831
                    ,18.5914,-10.4602,-23.9359,15.894,-4.3145,-22.2386,27.5835,-4.3145,-4.8339,30.9911,-4.3145,-8.6081,24.1774,-.9692,-8.2603,16.3709,.9948,-15.3085,12.4676,-.9692,-18.8326,29.2807,-10.4602,-2.1365,24.1758,-4.3145,-1.0596,20.6533,.9948,-4.357,20.2742,.9948,-11.7844,16.7501,3.0682,-7.8811,8.9435,.9948,-14.9293,23.2381,-10.4602,4.5563,26.2594,-10.4602,1.2099,17.1292,.9948,-.4537,13.226,3.0682,-3.9778
                    ,9.3227,3.0682,-7.5019,12.8468,3.0682,-11.4052,5.4194,.9948,-11.026,20.2168,-10.4602,7.9027,20.7682,-4.3145,2.7147,13.6052,-.9692,3.4496,9.7019,.9948,-.0745,5.7986,.9948,-3.5986,1.8953,-.9692,-7.1227,17.1955,-10.4602,11.2491,17.3606,-4.3145,6.4889,10.1787,-4.3145,6.8556,6.4045,-4.3145,3.448,2.6302,-4.3145,.0404,-1.1441,-4.3145,-3.3673,10.8278,-10.4602,11.5742,13.953,-4.3145,10.2632
                    ,7.4814,-10.4602,8.5528,4.135,-10.4602,5.5315,-2.5578,-10.4602,-.5111,26.9513,-14.9767,-21.8544,33.4769,-13.2576,-15.0514,29.823,-5.2109,-20.3285,25.4459,.8734,22.823,32.4016,-1.9361,16.861,32.1865,.3282,23.2435,28.8528,5.0044,8.4657,28.6103,7.5582,15.6643,29.0954,2.4506,1.2672,32.6166,-4.2004,10.4785,29.3379,-.1032,-5.9314,32.8317,-6.4647,4.0961,33.2618,-10.9933,-8.6689,33.0468,-8.729,-2.2865
                    ,29.5805,-2.6571,-13.1299,-14.7825,1.8797,13.9175,-8.257,3.5989,20.7205,-14.9976,4.144,20.3,-1.7995,10.0174,13.7672,-1.5164,3.0538,21.141,5.8029,9.4026,14.2415,5.2242,2.5087,21.5615,11.9648,1.9636,21.982,13.4054,8.7878,14.7158,18.7054,1.4185,22.4025,21.0078,8.173,15.19,-9.1594,8.0784,6.0944,-9.402,10.6323,13.2929,-1.474,12.3472,5.2549,6.6733,14.4832,4.7716,22.113,10.4397,6.7263
                    ,-14.5675,-.3846,7.535,-8.9169,5.5246,-1.1042,-.9382,12.478,-3.1635,7.2249,14.7682,-3.701,14.5356,13.8474,5.2621,22.6487,10.5705,-1.692,-14.3524,-2.6489,1.1525,-8.6743,2.9708,-8.3027,-.6874,9.8368,-10.6081,7.4757,12.1271,-11.1456,15.0872,14.1324,-3.2105,22.8996,7.9294,-9.1367,-13.9223,-7.1775,-11.6125,-14.1374,-4.9132,-5.23,-.7214,4.4238,-17.079,7.4258,6.5599,-17.5623,15.2881,5.9241,-17.0718
                    ,15.338,11.4913,-10.6551,22.8655,2.5164,-15.6075,-13.7073,-9.4418,-17.995,-8.4318,.417,-15.5013,-.5868,-2.7516,-22.2256,7.0157,-3.3664,-21.7513,14.6181,-3.9813,-21.2771,22.2206,-4.5961,-20.8028,-6.7516,-12.2512,-23.957,-8.1892,-2.1368,-22.6999,-.011,-12.7963,-23.5365,13.4701,-13.8865,-22.6954,20.2107,-14.4316,-22.2749,29.7362,10.7707,-4.627,29.9255,10.2321,5.3876,22.599,20.5911,1.0596,-.8187,-7.1763,30.1506
                    ,8.1006,-2.5872,30.2288,3.7356,-5.151,35.197,2.9067,9.0244,23.4736,-2.0164,6.1327,29.077,7.8298,11.9161,17.8701,12.4655,-.0233,25.2606,21.1955,5.1044,15.3241,16.8305,2.5405,20.2923,12.7528,14.8078,12.2666,25.5605,7.6683,10.3559,17.6759,17.6994,6.6631,-23.7795,-16.7639,-5.0963,-23.5902,-17.3025,4.9184,-28.1445,-19.3278,-.128,-22.5629,-3.0041,6.3103,-19.0359,-15.2773,9.9648,-17.4263,-.7199,12.002
                    ,-14.4816,-13.252,15.0113,-9.9273,-11.2268,20.0577,-12.2897,1.5643,17.6937,-5.373,-9.2015,25.1042,-7.153,3.8485,23.3853,-22.7764,-2.3966,-4.9848,-27.6995,-5.2883,.6186,-20.5616,4.2934,.999,-16.6621,9.3983,7.0595,-4.625,11.3803,18.6577,-19.4145,-14.2001,-10.0645,-17.8533,.4951,-10.5883,-16.8829,10.0266,-4.6218,-13.0619,15.2841,1.4484,-11.3499,11.7606,12.9457,-.9463,17.1134,13.0369,-10.6846,-9.0723,-20.001
                    ,-15.0496,-11.6362,-15.0327,-12.9302,3.3868,-16.1918,-7.9706,18.2746,-4.3467,-2.6584,20.6369,1.5396,-7.7497,17.6464,7.3346,4.1451,20.1039,7.2419,-6.3196,-6.5085,-24.9692,-5.2875,13.265,-16.386,-11.7915,13.0171,-10.4168,-1.3879,18.3699,-10.3256,3.9243,20.7322,-4.4393,10.6491,20.3518,1.2727,-1.9546,-3.9446,-29.9374,-8.0071,6.2785,-21.7953,2.0526,11.4543,-21.7071,7.1892,13.7385,-16.0154,12.3258,16.0227,-10.3237
                    ,17.4624,18.3069,-4.632,6.9647,.6445,-29.8592,-3.084,9.1701,-27.3987,11.519,2.6697,-24.8128,20.6276,6.7202,-14.7199,25.1819,8.7455,-9.6735,14.2427,-3.9085,7.2069,11.0966,-5.2753,13.32,9.8617,1.4512,10.1694,-17.7128,-13.4758,16.7541,-11.7288,-12.109,20.1394,-16.2939,-13.4758,21.5033,-10.7334,-4.7148,16.3225,-15.8822,-6.2563,17.8608,-5.5846,-3.1733,14.7842,-7.1638,-10.7423,18.7755,1.9664,-8.0088,16.0478
                    ,-2.5987,-9.3755,17.4117,-.4359,-1.6318,13.246,6.5315,-6.642,14.6839,4.7129,-.0903,11.7077,-21.6611,-12.109,-13.105,-24.8073,-13.4758,-6.9919,-26.2261,-13.4758,-11.7411,-22.2834,-6.2563,-3.565,-23.3884,-13.4758,-2.2427,-20.6831,-6.2563,1.7915,-21.9695,-13.4758,2.5065,-20.5506,-13.4758,7.2557,-19.0828,-6.2563,7.1479,-19.1317,-13.4758,12.0049,-17.4825,-6.2563,12.5043,-18.7349,-4.7148,-10.4597,-23.8837,-6.2563,-8.9214
                    ,-18.4523,-1.2587,-5.0087,-15.7128,.8169,6.2408,-13.4873,-1.2587,11.6099,-17.096,-10.7423,-14.4688,-13.5862,-3.1733,-11.9979,-13.6981,2.4111,-6.4291,-17.3678,.8169,.7013,-10.9903,4.6021,4.8299,-8.733,2.4111,10.1895,-12.5309,-9.3755,-15.8327,-8.4374,-1.6318,-13.5362,-8.3733,4.0053,-8.02,-7.3205,6.1963,-2.3005,-12.6453,4.6021,-.7097,-5.6655,6.1963,3.239,-3.4083,4.0053,8.5986,-3.4007,-6.642,-18.5605
                    ,-7.9658,-8.0088,-17.1966,-2.478,3.5239,-9.7812,-1.3935,5.5995,-4.0713,.2615,5.5995,1.4682,2.487,3.5239,6.8373,1.1643,-5.2753,-19.9244,-3.2886,-.0903,-15.0745,3.4605,1.4512,-11.2563,5.0608,1.4512,-5.8999,6.6611,1.4512,-.5434,8.2614,1.4512,4.813,7.1483,-3.9085,-16.539,1.8601,1.4512,-16.6127,8.5672,-3.9085,-11.7899,9.9861,-3.9085,-7.0406,12.8239,-3.9085,2.4577,-44.3794,-11.2438,1.9889
                    ,-3.414,-2.2276,43.051,-26.8228,-7.3797,19.5869,3.5137,-.7603,-49.9848,-50.0547,-23.798,-6.5907,-19.4442,-10.6336,-31.3873,5.2038,2.0017,-26.7452,-9.2506,-10.4602,-6.5537,14.1742,-10.4602,14.5955,.7886,-10.4602,2.5102,33.6919,-15.5219,-21.4339,-13.4922,-11.7061,-24.3775,6.7296,-13.3414,-23.116,34.2905,12.796,.4194,2.4104,-1.3808,-34.9057,16.0733,4.695,-19.7664,15.6616,-3.9085,11.9561,5.7294,-3.9085,-21.2883
                    ,11.405,-3.9085,-2.2915
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,2,3,4,3,5,4,6,7,5,8,9,7,10,11,9,8,12,13,11,14,15,15,16,0,17,18,19,12,20,21,22,23,14,3,24,25,10,13,26,14,27,16,16,24,1,6,25
                ,12,10,28,22,29,30,31,27,32,24,23,33,27,28,34,29,13,21,35,24,20,25,28,31,23,26,35,34,36,37,38,34,36,39,21,40,41,33,42,32,31,43,33,29,39,44,35,41,36,32
                ,40,20,45,38,46,42,46,40,30,45,47,39,38,48,40,37,41,43,49,42,30,50,43,44,48,45,51,52,53,54,55,56,57,56,58,59,60,54,61,62,63,53,64,61,51,58,65,66,54,56
                ,63,60,67,68,55,69,60,70,71,52,68,72,58,55,73,60,74,54,62,69,70,52,69,64,58,68,65,19,0,75,18,15,19,9,18,76,7,76,77,5,77,17,4,17,78,79,4,78,75,2
                ,79,0,16,1,2,1,3,3,6,5,6,8,7,8,10,9,10,22,11,8,6,12,11,22,14,15,14,16,19,75,17,79,78,17,17,77,76,76,18,17,75,79,17,12,25,20,22,28,23,3
                ,1,24,10,8,13,14,23,27,16,27,24,6,3,25,10,26,28,29,44,30,27,33,32,23,31,33,28,26,34,13,12,21,24,32,20,28,29,31,26,13,35,36,41,37,34,35,36,21,20,40
                ,33,43,42,31,30,43,29,34,39,35,21,41,32,42,40,46,49,50,50,47,46,45,48,38,38,37,46,46,47,45,42,49,46,30,44,45,39,36,38,40,46,37,43,50,49,30,47,50,44,39
                ,48,51,65,52,54,74,55,57,66,56,59,67,60,61,64,62,53,52,64,51,57,58,66,59,54,63,62,60,71,70,69,69,72,68,68,73,55,55,74,71,71,69,55,60,62,70,52,65,68,58
                ,56,55,60,71,74,62,64,69,52,72,69,58,73,68,19,15,0,18,11,15,9,11,18,7,9,76,5,7,77,4,5,17,79,2,4,75,0,2,80,81,82,83,84,85,86,84,87,88,89,86
                ,90,91,88,90,92,93,94,81,92,95,96,97,96,98,99,99,100,101,100,102,101,103,104,102,105,83,104,95,106,107,106,98,107,108,100,98,100,109,103,103,110,105,105,86,87,111,112,106,112,108
                ,106,113,114,108,115,109,114,109,116,110,110,88,86,117,112,118,119,113,112,113,120,115,120,121,115,122,116,121,123,88,116,124,119,117,119,125,126,126,127,120,127,122,120,128,123,122,129,90,123,130
                ,131,124,131,132,125,125,133,127,133,128,127,134,129,128,135,94,129,130,136,137,136,132,137,138,133,132,139,134,133,134,140,135,135,80,82,141,142,143,144,145,146,147,145,148,149,150,147,151,152,149
                ,151,153,154,155,142,153,156,157,158,157,159,160,160,161,162,161,163,162,164,165,163,166,144,165,156,167,168,167,159,168,169,161,159,170,164,161,164,171,166,166,147,148,172,173,167,173,169,167,174,170
                ,169,175,176,170,176,177,171,171,149,147,178,179,173,179,174,173,180,175,174,181,182,175,183,177,182,177,151,149,184,179,185,179,186,180,180,187,181,181,188,183,188,189,183,190,151,189,191,192,184,192
                ,193,186,186,194,187,194,188,187,195,190,188,196,155,190,191,197,198,197,193,198,199,194,193,200,195,194,195,201,196,196,141,143,202,203,204,205,206,207,208,209,205,210,211,208,210,212,213,214,215,212
                ,216,204,215,217,218,219,219,220,221,221,222,223,222,224,223,225,226,224,227,207,226,228,229,218,229,220,218,230,222,220,231,225,222,225,232,227,227,208,205,233,234,229,234,230,229,235,231,230,236,237
                ,231,237,238,232,232,210,208,239,240,234,240,235,234,241,236,235,236,242,243,242,238,243,238,214,210,244,240,245,240,246,241,241,247,248,247,242,248,249,250,242,251,214,250,252,253,244,253,254,246,246
                ,255,247,255,249,247,256,251,249,257,216,251,258,259,252,260,254,259,261,255,254,255,262,256,256,263,257,257,264,202,265,266,267,268,269,270,271,269,272,273,274,271,275,276,273,275,277,278,279,266,277
                ,280,281,282,281,283,284,284,285,286,285,287,286,288,289,287,290,268,289,280,291,292,291,283,292,293,285,283,285,294,288,288,295,290,290,271,272,296,297,291,297,293,291,298,299,293,300,294,299,294,301
                ,295,295,273,271,302,297,303,297,304,298,298,305,300,300,306,307,307,308,301,301,275,273,309,310,302,310,311,304,304,312,305,312,306,305,313,308,306,314,275,308,315,316,309,316,317,311,311,318,312,318
                ,313,312,319,314,313,320,279,314,315,321,322,321,317,322,323,318,317,324,319,318,319,325,320,320,265,267,326,327,328,329,330,331,332,330,333,334,335,332,336,337,334,336,338,339,340,327,338,341,342,343
                ,342,344,345,345,346,347,346,348,347,349,350,348,351,329,350,341,352,353,352,344,353,354,346,344,355,349,346,349,356,351,351,332,333,357,358,352,358,354,352,359,355,354,360,361,355,361,362,356,356,334
                ,332,363,364,358,364,359,358,365,360,359,366,367,360,367,368,362,362,336,334,369,364,370,364,371,365,365,372,366,366,373,374,373,368,374,375,336,368,376,377,369,377,378,371,371,379,372,372,380,373,380
                ,375,373,381,340,375,376,382,383,382,378,383,384,379,378,379,385,380,380,386,381,381,326,328,387,388,389,390,391,392,393,391,394,395,396,393,395,397,398,399,400,397,401,388,400,402,403,404,403,405,406
                ,406,407,408,407,409,408,410,411,409,412,390,411,402,413,414,413,405,414,415,407,405,416,410,407,410,417,412,412,393,394,418,419,413,419,415,413,420,416,415,421,422,416,422,423,417,417,395,393,424,419
                ,425,426,420,419,420,427,421,421,428,429,428,423,429,430,395,423,431,426,424,426,432,433,433,434,427,427,435,428,435,430,428,436,399,430,437,438,431,438,439,432,432,440,434,440,435,434,441,436,435,442
                ,401,436,437,443,444,443,439,444,445,440,439,440,446,441,441,447,442,442,387,389,448,449,450,451,452,453,454,452,455,456,457,454,456,458,459,460,461,458,462,449,461,463,464,465,464,466,467,467,468,469
                ,468,470,469,471,472,470,473,451,472,463,474,475,474,466,475,476,468,466,468,477,471,471,478,473,473,454,455,479,480,474,480,476,474,481,482,476,482,483,477,477,484,478,478,456,454,485,486,480,480,487
                ,481,481,488,489,488,483,489,490,484,483,491,456,484,492,486,493,486,494,487,487,495,488,495,490,488,496,491,490,497,460,491,498,499,492,499,500,494,494,501,495,495,502,496,502,497,496,503,462,497,498
                ,504,505,504,500,505,506,501,500,507,502,501,502,508,503,503,448,450,80,509,81,83,87,84,86,89,84,88,91,89,90,93,91,90,94,92,94,82,81,95,107,96,96,107,98,99,98,100,100,103,102
                ,103,105,104,105,87,83,95,111,106,106,108,98,108,114,100,100,114,109,103,109,110,105,110,86,111,118,112,112,113,108,113,115,114,115,121,109,109,121,116,110,116,88,117,119,112,119,126,113,113,126
                ,120,120,122,121,122,123,116,123,90,88,124,131,119,119,131,125,126,125,127,127,128,122,128,129,123,129,94,90,130,137,131,131,137,132,125,132,133,133,134,128,134,135,129,135,82,94,130,510,136,136
                ,138,132,138,139,133,139,511,134,134,511,140,135,140,80,141,512,142,144,148,145,147,150,145,149,152,150,151,154,152,151,155,153,155,143,142,156,168,157,157,168,159,160,159,161,161,164,163,164,166,165
                ,166,148,144,156,172,167,167,169,159,169,170,161,170,176,164,164,176,171,166,171,147,172,178,173,173,174,169,174,175,170,175,182,176,176,182,177,171,177,149,178,185,179,179,180,174,180,181,175,181,183
                ,182,183,189,177,177,189,151,184,192,179,179,192,186,180,186,187,181,187,188,188,190,189,190,155,151,191,198,192,192,198,193,186,193,194,194,195,188,195,196,190,196,143,155,191,513,197,197,199,193,199
                ,200,194,200,514,195,195,514,201,196,201,141,202,264,203,205,209,206,208,211,209,210,213,211,210,214,212,214,216,215,216,202,204,217,228,218,219,218,220,221,220,222,222,225,224,225,227,226,227,205,207
                ,228,233,229,229,230,220,230,231,222,231,237,225,225,237,232,227,232,208,233,239,234,234,235,230,235,236,231,236,243,237,237,243,238,232,238,210,239,245,240,240,241,235,241,248,236,236,248,242,242,250
                ,238,238,250,214,244,253,240,240,253,246,241,246,247,247,249,242,249,251,250,251,216,214,252,259,253,253,259,254,246,254,255,255,256,249,256,257,251,257,202,216,258,260,259,260,261,254,261,515,255,255
                ,515,262,256,262,263,257,263,264,265,516,266,268,272,269,271,274,269,273,276,274,275,278,276,275,279,277,279,267,266,280,292,281,281,292,283,284,283,285,285,288,287,288,290,289,290,272,268,280,296,291
                ,291,293,283,293,299,285,285,299,294,288,294,295,290,295,271,296,303,297,297,298,293,298,300,299,300,307,294,294,307,301,295,301,273,302,310,297,297,310,304,298,304,305,300,305,306,307,306,308,301,308
                ,275,309,316,310,310,316,311,304,311,312,312,313,306,313,314,308,314,279,275,315,322,316,316,322,317,311,317,318,318,319,313,319,320,314,320,267,279,315,517,321,321,323,317,323,324,318,324,518,319,319
                ,518,325,320,325,265,326,519,327,329,333,330,332,335,330,334,337,335,336,339,337,336,340,338,340,328,327,341,353,342,342,353,344,345,344,346,346,349,348,349,351,350,351,333,329,341,357,352,352,354,344
                ,354,355,346,355,361,349,349,361,356,351,356,332,357,363,358,358,359,354,359,360,355,360,367,361,361,367,362,356,362,334,363,370,364,364,365,359,365,366,360,366,374,367,367,374,368,362,368,336,369,377
                ,364,364,377,371,365,371,372,366,372,373,373,375,368,375,340,336,376,383,377,377,383,378,371,378,379,372,379,380,380,381,375,381,328,340,376,520,382,382,384,378,384,521,379,379,521,385,380,385,386,381
                ,386,326,387,522,388,390,394,391,393,396,391,395,398,396,395,399,397,399,401,400,401,389,388,402,414,403,403,414,405,406,405,407,407,410,409,410,412,411,412,394,390,402,418,413,413,415,405,415,416,407
                ,416,422,410,410,422,417,412,417,393,418,425,419,419,420,415,420,421,416,421,429,422,422,429,423,417,423,395,424,426,419,426,433,420,420,433,427,421,427,428,428,430,423,430,399,395,431,438,426,426,438
                ,432,433,432,434,427,434,435,435,436,430,436,401,399,437,444,438,438,444,439,432,439,440,440,441,435,441,442,436,442,389,401,437,523,443,443,445,439,445,524,440,440,524,446,441,446,447,442,447,387,448
                ,525,449,451,455,452,454,457,452,456,459,457,456,460,458,460,462,461,462,450,449,463,475,464,464,475,466,467,466,468,468,471,470,471,473,472,473,455,451,463,479,474,474,476,466,476,482,468,468,482,477
                ,471,477,478,473,478,454,479,485,480,480,481,476,481,489,482,482,489,483,477,483,484,478,484,456,485,493,486,480,486,487,481,487,488,488,490,483,490,491,484,491,460,456,492,499,486,486,499,494,487,494
                ,495,495,496,490,496,497,491,497,462,460,498,505,499,499,505,500,494,500,501,495,501,502,502,503,497,503,450,462,498,526,504,504,506,500,506,507,501,507,527,502,502,527,508,503,508,448]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.0047,.4249,.9052,.6634,.2792,.6942,.5956,.5328,.6012,.9567,.2907,.011,.8207,.5714,0,.5956,.5328,-.6012,.6872,.2136,-.6943,-.0047,.4249,-.9052,-.0181,.0887,-.9959,-.677,.2961,-.6738,-.7219,-.0034,-.6919,-.9715,.2371,0,.7011,.0968,-.7064,.0098,-.0016,-.9999,-.7084,.0716,.7021,-.677,.2961,.6738,-.0198,.1888,.9818
                    ,.6767,-.3543,-.6453,-.8868,-.4622,0,-.6164,-.4399,.6531,.934,.3571,.0053,.694,.2729,-.6662,-.9999,-.0075,.0127,-.7082,-.0055,.7059,.7066,.1721,.6863,.9858,.1675,-.0134,-.6933,-.0758,-.7166,.0085,.1019,.9948,-.9967,-.08,-.0121,-.9593,-.282,.0098,-.7029,-.2817,.6531,-.6714,-.1396,.7278,.6793,.3055,.6673,.0321,.1209,.9921
                    ,-.6727,-.2022,-.7117,.0378,.0499,-.998,-.0342,.1373,-.9899,.4274,.7925,-.4349,-.051,.7455,-.6645,-.6894,-.1247,-.7135,.888,.4588,-.03,.6156,.3814,-.6896,.6721,.3106,.6721,-.024,-.027,.9993,-.9542,-.2965,-.0404,-.8354,.5477,.0468,.6465,.7617,.0424,-.6085,.5192,.6001,-.5914,.6402,-.4903,.4761,.6642,.5763,-.0553,.5627,.8248
                    ,.5988,-.6847,-.4154,.2824,-.2259,-.9323,.171,-.2633,-.9494,-.147,.3266,.9336,.6498,.3496,.6749,.4091,-.2077,.8885,.6727,-.633,.3831,.754,-.5735,.3203,-.1396,.4274,.8932,-.5818,.7004,.4134,-.3324,.354,-.8741,-.6337,.6853,-.3589,-.5857,.7562,-.2917,-.2707,.2932,-.9169,.7001,-.5751,-.4232,.3457,-.1457,.9269,-.4977,.7692,.4008
                    ,.939,.1365,-.3157,.1415,.7241,-.6749,-.1683,.9524,-.254,-.1477,.9373,.3157,.6001,.3862,-.7005,.9595,.1213,.254,.1911,.6876,.7005,.0339,-.393,.9189,-.6164,-.4399,-.6531,.0339,-.393,-.9189,.9403,-.3403,0,.6767,-.3543,.6453,-.8748,.212,.4356,-.9044,.2888,-.3139,-.8853,.4577,.0819,.1611,.6923,-.7034,-.5534,.4516,-.6999
                    ,-.3168,.9422,.1091,-.6767,.5398,-.5007,-.2555,.7497,-.6105,-.7372,.4009,-.5438,-.7654,.2011,-.6113,-.7756,.3831,-.5016,-.7654,.2011,-.6113,-.7654,.2011,-.6113,-.7654,.2011,-.6113,-.779,.4923,-.3882,.5722,.6993,.4284,.5426,.7762,-.3211,-.3168,.9422,.1091,.319,.8621,-.3936,.4823,.6213,-.6175,.3813,.7727,-.5074,.4823,.6213,-.6175
                    ,.4823,.6213,-.6175,.3396,.7635,-.5492,.4823,.6213,-.6175,.2078,.8376,-.5051,.3557,.767,.534,.4287,.9003,.0754,.3271,.9413,.0836,-.0125,.9145,-.4043,-.275,.8088,-.5199,.534,.4871,.6911,.4259,.6569,.6221,.2205,.9034,.3676,.1983,.9609,-.1929,-.0649,.9924,.1043,-.5469,.7345,-.4016,.534,.4871,.6911,.534,.4871,.6911
                    ,.3876,.6391,.6643,-.2963,.8851,.3587,-.3163,.9371,-.1476,-.5477,.8298,.1068,-.741,.6446,-.1882,.534,.4871,.6911,-.227,.6844,.6928,.0264,.8135,.581,-.508,.6335,.5836,-.7188,.5871,.3723,-.8291,.5519,.0894,.2211,.5366,.8144,.2533,.7195,.6466,-.6312,.4216,.651,-.6893,.2764,.6697,-.731,.2672,.6279,-.7424,.3971,.5395
                    ,-.4934,.2959,.8179,-.201,.6083,.7678,-.7136,.0669,.6973,-.7136,.0669,.6973,-.7136,.0669,.6973,-.4529,.5147,-.728,.253,.7399,-.6234,-.164,.7891,-.592,.4942,.687,.5326,.5682,.7972,-.2037,-.3168,.9422,.1091,.3673,.8814,-.2969,.4124,.894,.1752,.4449,.7983,-.4059,.5495,.6663,-.504,.4093,.7918,-.4532,.5495,.6663,-.504
                    ,.5495,.6663,-.504,.5495,.6663,-.504,.2727,.8642,-.4227,-.6007,.2945,.7432,.1051,.5197,.8478,-.3168,.9422,.1091,.1599,.6963,.6997,.4212,.4753,.7724,.29,.6142,.7339,.4212,.4753,.7724,.4212,.4753,.7724,.3339,.633,.6984,.4212,.4753,.7724,.2766,.7465,.6052,-.7047,.4204,.5715,-.299,.588,.7515,-.3113,.6567,.6868
                    ,-.0433,.7859,.6168,.3244,.9302,.1718,-.8021,.085,.591,-.7685,.2764,.577,-.5752,.6162,.5379,-.3315,.8736,.3562,.1794,.8816,.4364,.2351,.9647,-.1185,-.8021,.085,.591,-.804,.27,.5297,-.7556,.5833,.2978,-.5466,.8344,.0699,-.066,.9878,.1411,-.2811,.9486,-.1451,-.8021,.085,.591,-.8021,.085,.591,-.8264,.563,.0012
                    ,-.6999,.6664,-.2571,-.4772,.7621,-.4375,.0548,.9319,-.3586,-.1906,.8364,-.5138,-.916,.2371,.3236,-.7992,.4032,.4457,-.7085,.5382,-.4563,-.693,.4353,-.5746,-.6492,.4541,-.6102,-.5919,.5884,-.5509,-.842,.3473,-.4128,-.8754,.4831,-.0157,-.6739,.276,-.6854,-.6739,.276,-.6854,-.6739,.276,-.6854,.1696,.9839,-.0562,.3734,.9191,-.1256
                    ,.4898,.7595,.428,-.1143,.8163,.5661,-.0138,.6906,.7231,-.5126,.383,.7684,.2749,.8539,.4418,.4898,.7595,.428,.421,.7938,.4389,.4898,.7595,.428,.4898,.7595,.428,.4898,.7595,.428,.4446,.8077,.3872,.4898,.7595,.428,.3365,.8903,.3067,-.8384,.464,.2859,-.719,.6501,.2455,-.5126,.383,.7684,-.5656,.5515,.6131
                    ,-.5126,.383,.7684,-.5367,.4392,.7204,-.5126,.383,.7684,-.5126,.383,.7684,-.4865,.453,.7471,-.5126,.383,.7684,-.4344,.5875,.6827,-.8745,.3846,-.2954,-.8216,.5526,-.1396,-.7952,.5422,.2713,-.6116,.6076,.5067,-.0546,.7457,.664,-.8745,.3846,-.2954,-.8643,.4406,-.2425,-.7932,.6084,-.0271,-.5336,.8257,.1827,-.3522,.6789,.6443
                    ,.1509,.8678,.4734,-.8745,.3846,-.2954,-.8407,.4545,-.2943,-.6714,.6802,-.2941,-.079,.9965,.0284,-.2243,.9107,.3467,-.8745,.3846,-.2954,-.8745,.3846,-.2954,-.4474,.7474,-.491,-.1683,.8692,-.4649,-.3883,.9115,-.1356,.0911,.9405,-.3274,.2727,.9397,.2065,.2932,.951,-.0983,-.8745,.3846,-.2954,-.76,.589,-.2746,-.0507,.8554,-.5155
                    ,.0668,.7953,-.6025,.117,.8091,-.5758,.0804,.8914,-.4459,-.4512,.6925,-.5629,-.4351,.8177,-.3768,.128,.7611,-.6359,.128,.7611,-.6359,.128,.7611,-.6359,.128,.7611,-.6359,.128,.7611,-.6359,-.7033,.5841,.4051,-.7409,.5841,-.3314,-.6662,.745,.034,.3314,.5841,-.7409,-.4051,.5841,-.7033,0,1,0,-.4736,.701,-.5332
                    ,-.034,.745,-.6662,-.5798,.5885,-.5634,-.6641,.4465,-.5996,-.6195,.5885,-.5195,-.6641,.4465,-.5996,-.6641,.4465,-.5996,-.6641,.4465,-.5996,-.5787,.701,-.4168,.7409,.5841,.3314,.7033,.5841,-.4051,0,1,0,.5332,.701,-.4736,.5996,.4465,-.6641,.5634,.5885,-.5798,.5996,.4465,-.6641,.5996,.4465,-.6641,.5195,.5885,-.6195
                    ,.5996,.4465,-.6641,.4168,.701,-.5787,.5787,.701,.4168,.6662,.745,-.034,.6092,.7924,-.0311,.2563,.8215,-.5093,-.0311,.7924,-.6092,.6641,.4465,.5996,.6195,.5885,.5195,.5093,.8215,.2563,.4805,.8215,-.3068,.2544,.967,-.013,-.3068,.8215,-.4805,.6641,.4465,.5996,.6641,.4465,.5996,.3068,.8215,.4805,.013,.967,.2544
                    ,-.2544,.967,.013,-.013,.967,-.2544,-.5093,.8215,-.2563,.6641,.4465,.5996,.5798,.5885,.5634,.0311,.7924,.6092,-.2563,.8215,.5093,-.4805,.8215,.3068,-.6092,.7924,.0311,.4051,.5841,.7033,.4736,.701,.5332,-.4168,.701,.5787,-.5195,.5885,.6195,-.5634,.5885,.5798,-.5332,.701,.4736,-.3314,.5841,.7409,.034,.745,.6662
                    ,-.5996,.4465,.6641,-.5996,.4465,.6641,-.5996,.4465,.6641,.3275,.2804,-.9022,.8277,.4122,-.3808,.5537,.5082,-.6596,.2788,.7928,.5419,.812,.5774,.085,.0965,.9391,-.3299,.7662,.6321,-.1153,.5239,.8217,.2241,.8563,.5027,-.1181,.9285,.3587,-.096,.8582,.483,-.1738,.9285,.3587,-.096,.9285,.3587,-.096,.9285,.3587,-.096
                    ,.7712,.5798,-.2628,-.7133,.7008,-.0102,-.2131,.8326,.5112,.0965,.9391,-.3299,-.0321,.9043,.4257,.016,.7272,.6862,.0023,.8286,.5597,.016,.7272,.6862,.016,.7272,.6862,.0612,.8239,.5634,.016,.7272,.6862,.1236,.8917,.4354,-.635,.7454,-.2027,-.4093,.8972,.1658,-.3663,.9229,.1181,-.0884,.9673,.2375,.4919,.8535,.1717
                    ,-.8401,.5017,-.2063,-.7436,.6321,-.2179,-.4725,.8662,-.1628,-.0916,.9828,-.1605,.2121,.943,.2563,.6214,.7777,-.0946,-.8401,.5017,-.2063,-.7417,.6124,-.2736,-.4629,.7652,-.4474,-.0801,.8624,-.4999,.2668,.9538,-.1382,.631,.6767,-.3792,-.8401,.5017,-.2063,-.8401,.5017,-.2063,-.3389,.6347,-.6945,-.0535,.5999,-.7983,.247,.5755,-.7795
                    ,.2782,.8334,-.4775,.5193,.5652,-.6409,-.6976,.5355,-.476,-.63,.6931,-.3502,.0126,.4335,-.901,.0534,.2912,-.9551,.1122,.2864,-.9515,.1683,.421,-.8913,-.1644,.3202,-.933,-.3795,.5837,-.7178,.0724,.1331,-.9884,.0724,.1331,-.9884,.0724,.1331,-.9884,.432,.835,-.3408,.4462,.7945,.4119,.287,.9568,.046,-.5605,.252,.7888
                    ,.1099,.5969,.7947,-.4572,.8876,.0564,.1203,.7755,.6197,-.3164,.6024,.7328,.2644,.717,.6449,.4307,.59,.6829,.4307,.59,.6829,.4307,.59,.6829,.3012,.7386,.6031,.4307,.59,.6829,.2184,.8331,.5081,-.9257,.1364,-.3527,-.9115,.0959,.4,-.4572,.8876,.0564,-.8119,.303,.499,-.7398,-.0123,.6726,-.7843,.1801,.5936
                    ,-.7398,-.0123,.6726,-.7398,-.0123,.6726,-.746,.1971,.6361,-.7398,-.0123,.6726,-.7095,.3486,.6124,-.8295,.3531,-.4327,-.9459,.3224,.0352,-.9047,.4242,.0399,-.8109,.4873,.3239,-.3507,.6706,.6537,-.7647,.0584,-.6417,-.8058,.2411,-.5409,-.8216,.5176,-.239,-.6686,.7418,.0525,-.6169,.5735,.5389,-.1155,.8315,.5433,-.7647,.0584,-.6417
                    ,-.7647,.0584,-.6417,-.769,.2627,-.5827,-.4469,.872,-.1998,-.2156,.9748,.0565,-.4373,.8446,.3088,.0704,.9407,.3317,-.7647,.0584,-.6417,-.3738,.736,-.5643,-.6356,.6268,-.4507,-.1342,.8848,-.4463,.0598,.971,-.2313,.1802,.9824,.0494,-.5893,.334,-.7356,-.7314,.4107,-.5444,.0985,.8377,-.5371,.2414,.7826,-.5739,.2797,.7996,-.5314
                    ,.2008,.8832,-.4237,.081,.6789,-.7297,-.3425,.6768,-.6515,.4059,.6607,-.6315,.4059,.6607,-.6315,.4059,.6607,-.6315,.6202,.781,.0727,.2906,.6378,.7132,.3685,.8486,.3794,-.7918,.3582,.4946,-.1648,.5014,.8493,-.2642,.9612,.0789,-.0569,.6567,.752,-.4954,.59,.6375,.0461,.5625,.8255,.1334,.4404,.8878,.1334,.4404,.8878
                    ,.1334,.4404,.8878,.1006,.5788,.8092,.1334,.4403,.8878,.0873,.6998,.7089,-.6037,.5014,-.6197,-.9334,.3582,.0208,-.2642,.9612,.0789,-.8574,.4841,.1745,-.9397,.1952,.2807,-.9059,.349,.2398,-.9397,.1952,.2807,-.9397,.1952,.2807,-.889,.349,.2965,-.9397,.1952,.2807,-.8126,.4841,.3245,-.4601,.6567,-.5975,-.764,.59,-.2613
                    ,-.7301,.6427,-.232,-.6802,.6381,.3609,-.4831,.6427,.5945,-.3755,.4404,-.8155,-.4143,.5625,-.7154,-.5136,.748,-.4204,-.7667,.6381,.0714,-.3698,.8798,.2985,-.1988,.748,.6332,-.3755,.4404,-.8155,-.3598,.5788,-.7317,-.2353,.8313,-.5035,-.1411,.9792,-.1458,-.4729,.8798,-.0467,-.038,.9792,.1993,.0795,.8313,.5501,-.3755,.4404,-.8155
                    ,-.3755,.4403,-.8155,.0644,.8806,-.4694,.2461,.9413,-.2312,.3326,.9413,.0583,.3114,.8806,.3571,-.1483,.6378,-.7558,-.3159,.6998,-.6406,.4398,.8724,-.2131,.5752,.7924,-.2027,.5922,.7924,-.146,.4846,.8724,-.0631,.4787,.781,-.401,.1,.8486,-.5194,.6976,.6854,-.2084,.6976,.6854,-.2084,.6976,.6854,-.2084,-.3168,.9422,.1091
                    ,-.3168,.9422,.1091,-.7136,.0669,.6973,-.3168,.9422,.1091,-.3168,.9422,.1091,-.6739,.276,-.6854,.128,.7611,-.6359,0,1,0,0,1,0,-.5996,.4465,.6641,.0965,.9391,-.3299,.0965,.9391,-.3299,.0724,.1331,-.9884,-.4572,.8876,.0564,-.4572,.8876,.0564,.4059,.6607,-.6315,-.2642,.9612,.0789,-.2642,.9612,.0789
                    ,.6976,.6854,-.2084
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,.9999,.8571,.8571,.9999,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571,.2858,.9999,.5714,.8571,.4286,.9999,.7142,.9999,.5714,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858
                    ,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714,.0001,.7142,.1429,.7142,.2858,.1429,.1429,.1429,.2858,.2858,.2858,.5714,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.2858,.4286,.4286,.4286,.4286,.7142,.5714,.0001,.4286,.0001,.5714,.1429,.5714,.4286,.4286,.5714,.5714,.5714,.5714,.7142,.7142,.0001
                    ,.7142,.2858,.5714,.2858,.7142,.4286,.7142,.5714,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858,.9999,.4286,.9999,.7142,.9999,.8571,.8571,.9999,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571
                    ,.2858,.9999,.5714,.8571,.4286,.9999,.7142,.9999,.5714,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714,.0001,.7142,.1429,.7142,.2858,.1429,.1429,.1429,.2858,.2858,.2858,.4286,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858
                    ,.4286,.4286,.2858,.5714,.4286,.7142,.4286,.0001,.5714,.1429,.5714,.2858,.5714,.4286,.4286,.5714,.5714,.5714,.7142,.0001,.5714,.0001,.7142,.2858,.7142,.4286,.7142,.5714,.5714,.7142,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858
                    ,.9999,.4286,.9999,.7142,.8571,.8571,.9999,.9999,.8571,.9999,.1429,.8571,.0001,.9999,.0001,.8571,.2858,.8571,.1429,.9999,.4286,.8571,.2858,.9999,.5714,.9999,.4286,.9999,.5714,.8571,.7142,.9999,.7142,.8571,.0001,.0001,.1429,.1429,.0001,.1429,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714
                    ,.1429,.5714,.0001,.7142,.1429,.7142,.1429,.0001,.2858,.1429,.2858,.2858,.2858,.4286,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.4286,.4286,.2858,.5714,.4286,.7142,.4286,.0001,.5714,.1429,.5714,.2858,.5714,.5714,.4286,.5714,.7142,.0001,.5714,.0001,.7142,.2858,.7142,.4286,.5714,.4286,.7142,.5714
                    ,.5714,.7142,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.0001,.8571,.1429,.9999,.1429,.9999,.2858,.9999,.5714,.9999,.7142,.9999,.8571,.9999,.8571,.8571,.9999,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571,.2858,.9999
                    ,.5714,.8571,.4286,.9999,.7142,.9999,.5714,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714,.0001,.7142,.1429,.7142,.2858,.1429,.1429,.1429,.2858,.2858,.2858,.5714,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.2858,.4286
                    ,.4286,.4286,.4286,.7142,.5714,.0001,.4286,.0001,.5714,.2858,.5714,.4286,.5714,.5714,.4286,.5714,.5714,.7142,.7142,.0001,.5714,.1429,.7142,.2858,.7142,.4286,.7142,.5714,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858,.9999,.4286
                    ,.9999,.7142,.9999,.8571,.8571,.9999,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571,.2858,.9999,.5714,.8571,.4286,.9999,.7142,.9999,.5714,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714
                    ,.0001,.7142,.1429,.7142,.2858,.1429,.1429,.1429,.2858,.2858,.2858,.4286,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.4286,.4286,.2858,.5714,.4286,.7142,.4286,.0001,.5714,.1429,.5714,.2858,.5714,.4286,.4286,.5714,.5714,.7142,.7142,.0001,.5714,.0001,.7142,.2858,.7142,.4286,.7142,.5714,.5714,.5714
                    ,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858,.9999,.5714,.9999,.7142,.9999,.8571,.8571,.9999,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571,.2858,.9999,.5714,.9999,.4286,.9999,.5714,.8571
                    ,.7142,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714,.0001,.7142,.1429,.7142,.2858,.1429,.1429,.1429,.2858,.2858,.2858,.4286,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.4286,.4286,.2858,.5714,.4286,.7142,.5714,.0001
                    ,.4286,.0001,.5714,.1429,.5714,.4286,.5714,.5714,.4286,.5714,.5714,.7142,.7142,.0001,.7142,.2858,.5714,.2858,.7142,.4286,.7142,.5714,.7142,.7142,.8571,.0001,.7142,.1429,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858,.9999,.5714,.9999,.7142,.9999,.8571,.8571,.9999
                    ,.8571,.8571,.0001,.8571,.1429,.9999,.0001,.9999,.2858,.8571,.1429,.8571,.4286,.8571,.2858,.9999,.5714,.9999,.4286,.9999,.5714,.8571,.7142,.9999,.7142,.8571,.1429,.0001,.0001,.1429,.0001,.0001,.1429,.2858,.0001,.2858,.1429,.4286,.0001,.4286,.0001,.5714,.1429,.5714,.0001,.7142,.1429,.7142,.2858,.1429
                    ,.1429,.1429,.2858,.2858,.2858,.5714,.2858,.7142,.2858,.0001,.4286,.1429,.4286,.2858,.2858,.4286,.4286,.5714,.4286,.7142,.4286,.0001,.5714,.1429,.5714,.2858,.5714,.4286,.4286,.4286,.5714,.5714,.5714,.7142,.7142,.0001,.5714,.0001,.7142,.2858,.7142,.4286,.7142,.5714,.7142,.7142,.8571,.0001,.7142,.1429
                    ,.8571,.2858,.8571,.4286,.8571,.5714,.8571,.7142,.9999,.1429,.8571,.1429,.9999,.2858,.9999,.4286,.9999,.7142,.9999,.9999,.9999,.0001,.9999,.5714,.9999,.9999,.9999,.0001,.9999,.5714,.9999,.4286,.9999,.9999,.9999,.0001,.9999,.5714,.9999,.9999,.9999,.0001,.9999,.4286,.9999,.9999,.9999,.0001,.9999,.4286
                    ,.9999,.9999,.9999,.0001,.9999,.5714
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#73");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 80, 0, 438, this);
                new _B.SubMesh(1, 80, 448, 438, 2058, this);
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

        Cylinder.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(88);
        };
        return Cylinder;
    })(BABYLON.Mesh);
    map01.Cylinder = Cylinder;

    var Sphere = (function (_super) {
        __extends(Sphere, _super);
        function Sphere(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            var load = _B.Tools.Now;
            var geo = 0;
            var shape = 0;
            this.position.x  = 37.8549;
            this.position.y  = .9673;
            this.position.z  = -53.9134;
            this.rotation.x  = 0;
            this.rotation.y  = .6958;
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
                    -.2742,7.4235,.8723,-.2742,7.6726,-.3802,.6114,7.4235,.5055,-.2742,5.6522,2.6436,2.4678,4.3997,2.3619,-.2742,4.3997,3.4976,1.3622,6.714,1.2563,-.2742,6.714,1.9341,1.8639,5.6522,1.758,3.6036,4.3997,-.3802,2.0401,6.714,-.3802,2.7496,5.6522,-.3802,.9783,7.4235,-.3802,1.8639,5.6522,-2.5183,.6114,7.4235,-1.2658,2.4678,4.3997,-3.1222,1.3622,6.714,-2.0166
                    ,-.2742,5.6522,-3.4039,-.2742,7.4235,-1.6327,-.2742,4.3997,-4.258,-.2742,6.714,-2.6945,-2.4123,5.6522,-2.5183,-3.0162,4.3997,-3.1222,-1.1599,7.4235,-1.2658,-1.9107,6.714,-2.0166,-2.5885,6.714,-.3802,-3.298,5.6522,-.3802,-1.5267,7.4235,-.3802,-4.152,4.3997,-.3802,-2.4123,5.6522,1.758,-1.1599,7.4235,.5055,-3.0162,4.3997,2.3619,-1.9107,6.714,1.2563,.1274,4.3876,.0888
                    ,.1274,4.5672,-.8142,.7659,4.3876,-.1757,.1274,3.1107,1.3657,1.7958,2.2078,.8542,.1274,2.2078,1.5453,1.3071,3.8762,.3656,.1274,3.8762,.8542,1.6688,3.1107,.7272,2.4869,2.2078,-.8142,1.7958,3.8762,-.8142,2.3073,3.1107,-.8142,1.0303,4.3876,-.8142,1.6688,3.1107,-2.3556,.7659,4.3876,-1.4526,1.7958,2.2078,-2.4826,1.3071,3.8762,-1.9939,.1274,3.1107,-2.994
                    ,.1274,4.3876,-1.7171,.1274,2.2078,-3.1736,.1274,3.8762,-2.4826,-1.541,2.2078,-2.4826,-1.0523,3.8762,-1.9939,-1.414,3.1107,-2.3556,-.5111,4.3876,-1.4526,-1.541,3.8762,-.8142,-2.0524,3.1107,-.8142,-.7755,4.3876,-.8142,-2.232,2.2078,-.8142,-1.414,3.1107,.7272,-.5111,4.3876,-.1757,-1.541,2.2078,.8542,-1.0523,3.8762,.3656,.1274,4.3876,2.1997,.1274,4.5672,1.2968
                    ,.7659,4.3876,1.9353,.1274,2.2078,3.6563,1.6688,3.1107,2.8382,1.7958,2.2078,2.9652,1.3071,3.8762,2.4765,.1274,3.8762,2.9652,.1274,3.1107,3.4767,2.4869,2.2078,1.2968,1.7958,3.8762,1.2968,2.3073,3.1107,1.2968,1.0303,4.3876,1.2968,1.6688,3.1107,-.2446,.7659,4.3876,.6583,1.7958,2.2078,-.3716,1.3071,3.8762,.1171,.1274,3.1107,-.883,.1274,4.3876,.3939
                    ,.1274,2.2078,-1.0626,.1274,3.8762,-.3716,-1.414,3.1107,-.2446,-1.541,2.2078,-.3716,-1.0523,3.8762,.1171,-.5111,4.3876,.6583,-1.541,3.8762,1.2968,-2.0524,3.1107,1.2968,-.7755,4.3876,1.2968,-2.232,2.2078,1.2968,-1.414,3.1107,2.8382,-.5111,4.3876,1.9353,-1.541,2.2078,2.9652,-1.0523,3.8762,2.4765,.1274,5.4991,2.3408,.1274,5.7067,1.2968,.8656,5.4991,2.035
                    ,.1274,2.9788,4.0248,1.9095,4.0227,3.0789,2.0564,2.9788,3.2258,1.4914,4.9077,2.6608,.1274,4.9077,3.2258,.1274,4.0227,3.8171,2.6477,4.0227,1.2968,2.8554,2.9788,1.2968,1.1714,5.4991,1.2968,2.0564,4.9077,1.2968,1.9095,4.0227,-.4853,.8656,5.4991,.5586,2.0564,2.9788,-.6322,1.4914,4.9077,-.0672,.1274,4.0227,-1.2235,.1274,5.4991,.2529,.1274,2.9788,-1.4312
                    ,.1274,4.9077,-.6322,-1.8016,2.9788,-.6322,-.6108,5.4991,.5586,-1.2366,4.9077,-.0672,-1.6547,4.0227,-.4853,-1.8016,4.9077,1.2968,-2.3929,4.0227,1.2968,-.9165,5.4991,1.2968,-2.6006,2.9788,1.2968,-1.6547,4.0227,3.0789,-.6108,5.4991,2.035,-1.8016,2.9788,3.2258,-1.2366,4.9077,2.6608,-.2742,6.4521,1.1572,-.2742,6.7579,-.3802,.8129,6.4521,.7069,-.2742,2.7406,3.6371
                    ,2.3502,4.2779,2.2443,2.5665,2.7406,2.4605,1.7344,5.5812,1.6285,-.2742,5.5812,2.4605,-.2742,4.2779,3.3313,3.7431,2.7406,-.3802,2.5665,5.5812,-.3802,3.4373,4.2779,-.3802,1.2631,6.4521,-.3802,2.3502,4.2779,-3.0046,.8129,6.4521,-1.4672,2.5665,2.7406,-3.2208,1.7344,5.5812,-2.3888,-.2742,4.2779,-4.0917,-.2742,6.4521,-1.9175,-.2742,2.7406,-4.3975,-.2742,5.5812,-3.2208
                    ,-3.1149,2.7406,-3.2208,-2.2829,5.5812,-2.3888,-2.8986,4.2779,-3.0046,-1.3613,6.4521,-1.4672,-3.1149,5.5812,-.3802,-3.9857,4.2779,-.3802,-1.8116,6.4521,-.3802,-4.2915,2.7406,-.3802,-2.8986,4.2779,2.2443,-1.3613,6.4521,.7069,-3.1149,2.7406,2.4605,-2.2829,5.5812,1.6285,-.1426,-.5904,.3164,.1314,-.0665,.3976,.1029,-.5904,.6216,.4237,-.0665,.4293,.4923,-.5904,.6638
                    ,.7976,-.5904,.4183,.6528,-.0665,.2451,.8398,-.5904,.0289,.6845,-.0665,-.0472,.5943,-.5904,-.2763,.5003,-.0665,-.2763,.2049,-.5904,-.3186,.6812,.7401,.1387,.7099,.7401,-.1255,-.0211,-.0665,-.1237,-.1004,-.5904,-.0731,-.0528,-.0665,.1685,1.1481,-1.1183,.7049,.8011,-1.1183,-.481,-.3848,-1.1183,-.134,.413,1.7452,.0962,.5905,1.7452,-.0466
                    ,.208,-.0665,-.308,.072,.7401,-.1947,.2099,.7401,.2766,.4741,.7401,.3053,.5433,.7401,-.3326,.0434,.7401,.0695,.2791,.7401,-.3612,.2458,1.7452,-.4752,.0526,2.8968,-.9084,.0682,1.7452,-.3324,.1865,1.7452,.0716,.0437,1.7452,-.1059,.4723,1.7452,-.4506,.6151,1.7452,-.2731,.4486,2.8968,-.8654,-.2877,4.6143,-1.1591,-.2839,4.6143,-1.1939
                    ,.3452,2.8968,-.994,.3022,2.8968,-.5979,.4308,2.8968,-.7014,.1382,2.8968,-.6157,.0348,2.8968,-.7443,.1811,2.8968,-1.0118,-.3406,4.6143,-1.2249,-.3149,4.6143,-1.1372,-.3678,4.6143,-1.203,-.3058,4.6143,-1.2211,-.3497,4.6143,-1.141,-.3715,4.6143,-1.1682,.478,1.6912,-.0718,.7782,2.3293,.4121,.5579,1.7639,-.1979,.4705,2.3929,.4123,.8071,3.3604,1.1442
                    ,.5028,2.3216,.5036,.3205,1.6868,-.0195,.6063,2.2735,.5414,.1329,1.8517,-.1977,.5283,2.4455,.3209,.5132,1.8623,-.324,.6424,2.4487,.283,.3703,1.9288,-.3762,.7459,2.4006,.3208,.7204,2.2767,.5035,.1776,1.7533,-.0716,.2128,1.9244,-.3238,.829,3.3502,1.1522,.8125,3.3866,1.1056,.8532,3.3509,1.1442,.8654,3.362,1.1249,.8003,3.3755,1.1249
                    ,.8586,3.3771,1.1055,.8367,3.3873,1.0975,-.4569,-1.1183,.5308,.1363,-1.1183,-.5531,1.2202,-1.1183,.0401,.627,-1.1183,1.124,-.0378,-1.1183,1.0519
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,0,6,7,3,6,8,8,9,4,2,10,6,6,11,8,2,1,12,10,13,11,12,1,14,11,15,9,10,14,16,16,17,13,14,1,18,13,19,15,16,18,20,19,21
                ,22,20,23,24,20,21,17,18,1,23,23,25,24,24,26,21,23,1,27,21,28,22,25,29,26,27,1,30,26,31,28,25,30,32,30,1,0,31,3,5,30,7,32,32,3,29,33,34,35,36
                ,37,38,33,39,40,40,41,36,41,42,37,35,43,39,41,43,44,35,34,45,43,46,44,45,34,47,44,48,42,43,47,49,49,50,46,47,34,51,46,52,48,47,53,49,50,54,52,51,55,53
                ,53,56,50,51,34,57,57,58,55,55,59,56,57,34,60,54,59,61,58,62,59,60,34,63,59,64,61,58,63,65,63,34,33,64,36,38,65,33,40,65,36,62,66,67,68,69,70,71,66,72
                ,73,73,70,74,70,75,71,68,76,72,72,77,70,68,67,78,76,79,77,78,67,80,77,81,75,76,80,82,82,83,79,80,67,84,79,85,81,80,86,82,85,87,88,84,89,86,86,87,83,84
                ,67,90,90,91,89,89,92,87,90,67,93,88,92,94,91,95,92,93,67,96,92,97,94,91,96,98,96,67,66,97,74,69,98,66,73,98,74,95,99,100,101,102,103,104,99,105,106,106,103,107
                ,104,108,109,105,110,111,105,108,103,101,100,110,111,112,108,110,100,113,109,112,114,110,115,111,115,116,112,113,100,117,112,118,114,113,119,115,116,120,118,119,121,122,119,123,116,117,100,121,121,124
                ,122,122,125,123,121,100,126,120,125,127,124,128,125,126,100,129,127,128,130,124,129,131,129,100,99,130,107,102,129,106,131,131,107,128,132,133,134,135,136,137,132,138,139,139,136,140,136,141,137,134
                ,142,138,138,143,136,134,133,144,142,145,143,144,133,146,143,147,141,144,148,142,148,149,145,146,133,150,145,151,147,146,152,148,149,153,151,150,154,152,152,155,149,150,133,156,156,157,154,154,158,155
                ,156,133,159,153,158,160,157,161,158,159,133,162,160,161,163,159,164,157,162,133,132,163,140,135,164,132,139,164,140,161,3,8,4,0,2,6,3,7,6,8,11,9,2,12,10,6,10,11,10,16
                ,13,11,13,15,10,12,14,16,20,17,13,17,19,16,14,18,19,17,21,20,18,23,20,24,21,23,27,25,24,25,26,21,26,28,25,32,29,26,29,31,25,27,30,31,29,3,30,0,7,32
                ,7,3,36,41,37,33,35,39,40,39,41,41,44,42,35,45,43,41,39,43,43,49,46,44,46,48,43,45,47,49,53,50,46,50,52,47,51,53,50,56,54,51,57,55,53,55,56,57,60,58
                ,55,58,59,54,56,59,58,65,62,59,62,64,58,60,63,64,62,36,65,63,33,65,40,36,69,74,70,66,68,72,73,72,70,70,77,75,68,78,76,72,76,77,76,82,79,77,79,81,76,78
                ,80,82,86,83,79,83,85,80,84,86,85,83,87,84,90,89,86,89,87,90,93,91,89,91,92,88,87,92,91,98,95,92,95,97,91,93,96,97,95,74,98,96,66,98,73,74,102,107,103,99
                ,101,105,106,105,103,104,103,108,105,101,110,105,111,108,111,115,112,109,108,112,110,113,115,115,119,116,112,116,118,113,117,119,116,123,120,119,117,121,119,122,123,121,126,124,122,124,125,120,123,125
                ,124,131,128,127,125,128,124,126,129,130,128,107,129,99,106,131,106,107,135,140,136,132,134,138,139,138,136,136,143,141,134,144,142,138,142,143,142,148,145,143,145,147,144,146,148,148,152,149,145,149
                ,151,146,150,152,149,155,153,150,156,154,152,154,155,156,159,157,154,157,158,153,155,158,157,164,161,160,158,161,159,162,164,163,161,140,164,162,132,164,139,140,165,166,167,167,168,169,168,170,169,171
                ,172,170,173,174,172,175,176,174,173,177,178,176,179,180,180,181,165,182,183,184,177,185,186,187,188,179,168,189,190,175,178,191,179,192,181,181,189,166,171,190,177,175,193,187,194,195,196,192,197,189
                ,188,198,192,193,199,194,178,186,200,189,185,190,193,196,188,191,200,199,201,202,203,199,201,204,186,205,206,198,207,197,196,208,198,194,204,209,200,206,201,197,205,185,210,202,211,207,211,205,195,210
                ,212,204,203,213,205,202,206,208,214,207,195,215,208,209,213,210,216,217,218,219,220,221,222,221,223,224,225,219,226,227,228,218,229,226,216,223,230,231,219,221,228,225,232,233,220,234,227,234,225,217
                ,235,236,223,220,233,219,234,237,227,238,239,229,236,238,223,235,230,184,165,240,241,180,184,174,241,183,172,183,242,170,242,182,169,182,243,244,169,243,240,167,244,165,181,166,167,166,168,168,171,170
                ,171,173,172,173,175,174,175,187,176,173,171,177,176,187,179,180,179,181,184,240,244,244,243,182,182,242,183,183,241,184,184,244,182,177,190,185,187,193,188,168,166,189,175,173,178,179,188,192,181,192
                ,189,171,168,190,175,191,193,194,209,195,192,198,197,188,196,198,193,191,199,178,177,186,189,197,185,193,194,196,191,178,200,201,206,202,199,200,201,186,185,205,198,208,207,196,195,208,194,199,204,200
                ,186,206,197,207,205,211,214,215,215,212,211,210,213,203,203,202,210,211,212,210,207,214,211,195,209,210,204,201,203,205,211,202,208,215,214,195,212,215,209,204,213,216,230,217,219,237,220,222,231,221
                ,224,232,225,226,229,227,218,217,229,216,222,223,231,224,219,228,227,225,234,239,238,238,236,234,235,233,234,220,237,234,234,236,235,227,239,234,217,230,235,223,221,220,219,225,234,227,229,238,229,217
                ,236,223,233,235,184,180,165,241,176,180,174,176,241,172,174,183,170,172,242,169,170,182,244,167,169,240,165,167]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,.9063,.4226,0,1,0,.2988,.9063,.2988,0,.56,.8285,.5842,.5633,.5842,0,.5633,.8262,.5159,.6838,.5159,0,.6838,.7296,.5858,.56,.5858,.8262,.5633,0,.7296,.6838,0,.8285,.56,0,.4226,.9063,0,.5858,.56,-.5858,.2988,.9063,-.2988,.5842,.5633,-.5842,.5159,.6838,-.5159
                    ,0,.56,-.8285,0,.9063,-.4226,0,.5633,-.8262,0,.6838,-.7296,-.5858,.56,-.5858,-.5842,.5633,-.5842,-.2988,.9063,-.2988,-.5159,.6838,-.5159,-.7296,.6838,0,-.8285,.56,0,-.4226,.9063,0,-.8262,.5633,0,-.5858,.56,.5858,-.2988,.9063,.2988,-.5842,.5633,.5842,-.5159,.6838,.5159,0,.9063,.4226
                    ,0,1,0,.2988,.9063,.2988,0,.3668,.9303,.6935,.1951,.6935,0,.1951,.9808,.5159,.6838,.5159,0,.6838,.7296,.6578,.3668,.6578,.9808,.1951,0,.7296,.6838,0,.9303,.3668,0,.4226,.9063,0,.6578,.3668,-.6578,.2988,.9063,-.2988,.6935,.1951,-.6935,.5159,.6838,-.5159,0,.3668,-.9303
                    ,0,.9063,-.4226,0,.1951,-.9808,0,.6838,-.7296,-.6935,.1951,-.6935,-.5159,.6838,-.5159,-.6578,.3668,-.6578,-.2988,.9063,-.2988,-.7296,.6838,0,-.9303,.3668,0,-.4226,.9063,0,-.9808,.1951,0,-.6578,.3668,.6578,-.2988,.9063,.2988,-.6935,.1951,.6935,-.5159,.6838,.5159,0,.9063,.4226,0,1,0
                    ,.2988,.9063,.2988,0,.1951,.9808,.6578,.3668,.6578,.6935,.1951,.6935,.5159,.6838,.5159,0,.6838,.7296,0,.3668,.9303,.9808,.1951,0,.7296,.6838,0,.9303,.3668,0,.4226,.9063,0,.6578,.3668,-.6578,.2988,.9063,-.2988,.6935,.1951,-.6935,.5159,.6838,-.5159,0,.3668,-.9303,0,.9063,-.4226
                    ,0,.1951,-.9808,0,.6838,-.7296,-.6578,.3668,-.6578,-.6935,.1951,-.6935,-.5159,.6838,-.5159,-.2988,.9063,-.2988,-.7296,.6838,0,-.9303,.3668,0,-.4226,.9063,0,-.9808,.1951,0,-.6578,.3668,.6578,-.2988,.9063,.2988,-.6935,.1951,.6935,-.5159,.6838,.5159,0,.9063,.4226,0,1,0,.2988,.9063,.2988
                    ,0,.1951,.9808,.6578,.3668,.6578,.6935,.1951,.6935,.5159,.6838,.5159,0,.6838,.7296,0,.3668,.9303,.9303,.3668,0,.9808,.1951,0,.4226,.9063,0,.7296,.6838,0,.6578,.3668,-.6578,.2988,.9063,-.2988,.6935,.1951,-.6935,.5159,.6838,-.5159,0,.3668,-.9303,0,.9063,-.4226,0,.1951,-.9808
                    ,0,.6838,-.7296,-.6935,.1951,-.6935,-.2988,.9063,-.2988,-.5159,.6838,-.5159,-.6578,.3668,-.6578,-.7296,.6838,0,-.9303,.3668,0,-.4226,.9063,0,-.9808,.1951,0,-.6578,.3668,.6578,-.2988,.9063,.2988,-.6935,.1951,.6935,-.5159,.6838,.5159,0,.9063,.4226,0,1,0,.2988,.9063,.2988,0,.1951,.9808
                    ,.6578,.3668,.6578,.6935,.1951,.6935,.5159,.6838,.5159,0,.6838,.7296,0,.3668,.9303,.9808,.1951,0,.7296,.6838,0,.9303,.3668,0,.4226,.9063,0,.6578,.3668,-.6578,.2988,.9063,-.2988,.6935,.1951,-.6935,.5159,.6838,-.5159,0,.3668,-.9303,0,.9063,-.4226,0,.1951,-.9808,0,.6838,-.7296
                    ,-.6935,.1951,-.6935,-.5159,.6838,-.5159,-.6578,.3668,-.6578,-.2988,.9063,-.2988,-.7296,.6838,0,-.9303,.3668,0,-.4226,.9063,0,-.9808,.1951,0,-.6578,.3668,.6578,-.2988,.9063,.2988,-.6935,.1951,.6935,-.5159,.6838,.5159,-.8701,.4249,.2497,-.4799,.2792,.8317,-.4097,.5328,.7404,.258,.2907,.9213,.2304,.5714,.7877
                    ,.7442,.5328,.4028,.8594,.2136,.4646,.8675,.4249,-.2587,.9507,.0887,-.2971,.4565,.2961,-.839,.4614,-.0034,-.8872,-.2728,.2371,-.9324,.8749,.0968,.4745,.9625,-.0016,-.2714,-.8728,.0716,-.4827,-.8368,.2961,-.4606,-.9478,.1888,.2567,.8094,-.3543,.4683,.4537,-.4399,-.775,-.7999,-.4399,-.4082,.2571,.3571,.8979,.8343,.2729,.479
                    ,-.2929,-.0075,-.9561,-.8764,-.0055,-.4815,-.4602,.1721,.8709,.2897,.1675,.9423,.4931,-.0758,-.8667,-.9523,.1019,.2875,-.2683,-.08,-.96,-.2788,-.282,-.918,-.8242,-.2817,-.4912,-.8871,-.1396,-.44,-.4497,.3055,.8393,-.9432,.1209,.3095,.4941,-.2022,-.8455,.9685,.0499,-.244,.9405,.1373,-.3108,.5374,.7926,.2882,.6235,.7455,-.2356
                    ,.4912,-.1247,-.8621,.2782,.4588,.8438,.8347,.3814,.3971,-.4563,.3106,.8338,-.9659,-.027,.2575,-.2291,-.2965,-.9271,-.2795,.5477,-.7886,.1408,.7617,.6324,-.7468,.5192,-.4155,.3045,.6402,-.7053,-.4194,.6642,.6188,-.8072,.5627,.1785,.5669,-.6847,.458,.9741,-.2259,.0092,.9593,-.2633,-.1025,-.9373,.3266,.121,-.4653,.3496,.8131
                    ,-.7379,-.2077,.6421,-.1788,-.633,.7532,-.0956,-.5735,.8136,-.8965,.4274,.1168,-.5601,.7004,-.4423,.7456,.354,-.5645,.1665,.6853,-.709,.1155,.7562,-.6441,.804,.2932,-.5173,.6027,-.5751,.5531,-.7926,-.1457,.5921,-.5244,.7692,-.3651,.0256,.1213,.9923,-.3445,.9373,-.0531,.5666,.1364,.8126,.8408,.3862,.3793,-.6186,.6876,.3801
                    ,.6875,.7241,-.0537,.1965,.9524,-.2329,-.8724,-.393,.2905,-.249,-.4622,-.8511,.8914,-.393,-.2255,.264,-.3403,.9025,-.4293,-.3543,.8307
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .4337,.601,.4606,.5148,.5026,.5948,.3522,.8046,.6505,.9583,.2813,.9626,.5431,.6833,.3998,.6923,.5889,.7964,.9085,.6941,.6381,.5756,.7505,.6232,.5469,.5417,.7423,.3865,.5406,.4728,.9041,.3249,.6291,.4323,.5691,.2249,.4875,.4285,.64,.0669,.5215,.3373,.3323,.2331,.2708,.0713,.4186,.4347,.3781,.3463
                    ,.2831,.4539,.1708,.4063,.3744,.4879,.0128,.3354,.179,.6431,.3806,.5568,.0171,.7046,.2921,.5973,.4337,.601,.4606,.5148,.5026,.5948,.3522,.8046,.6505,.9583,.2813,.9626,.5431,.6833,.3998,.6923,.5889,.7964,.9085,.6941,.6381,.5756,.7505,.6232,.5469,.5417,.7423,.3865,.5406,.4728,.9041,.3249,.6291,.4323
                    ,.5691,.2249,.4875,.4285,.64,.0669,.5215,.3373,.2708,.0713,.3781,.3463,.3323,.2331,.4186,.4347,.2831,.4539,.1708,.4063,.3744,.4879,.0128,.3354,.179,.6431,.3806,.5568,.0171,.7046,.2921,.5973,.4337,.601,.4606,.5148,.5026,.5948,.2813,.9626,.5889,.7964,.6505,.9583,.5431,.6833,.3998,.6923,.3522,.8046
                    ,.9085,.6941,.6381,.5756,.7505,.6232,.5469,.5417,.7423,.3865,.5406,.4728,.9041,.3249,.6291,.4323,.5691,.2249,.4875,.4285,.64,.0669,.5215,.3373,.3323,.2331,.2708,.0713,.3781,.3463,.4186,.4347,.2831,.4539,.1708,.4063,.3744,.4879,.0128,.3354,.179,.6431,.3806,.5568,.0171,.7046,.2921,.5973,.4337,.601
                    ,.4606,.5148,.5026,.5948,.2813,.9626,.5889,.7964,.6505,.9583,.5431,.6833,.3998,.6923,.3522,.8046,.7505,.6232,.9085,.6941,.5469,.5417,.6381,.5756,.7423,.3865,.5406,.4728,.9041,.3249,.6291,.4323,.5691,.2249,.4875,.4285,.64,.0669,.5215,.3373,.2708,.0713,.4186,.4347,.3781,.3463,.3323,.2331,.2831,.4539
                    ,.1708,.4063,.3744,.4879,.0128,.3354,.179,.6431,.3806,.5568,.0171,.7046,.2921,.5973,.4337,.601,.4606,.5148,.5026,.5948,.2813,.9626,.5889,.7964,.6505,.9583,.5431,.6833,.3998,.6923,.3522,.8046,.9085,.6941,.6381,.5756,.7505,.6232,.5469,.5417,.7423,.3865,.5406,.4728,.9041,.3249,.6291,.4323,.5691,.2249
                    ,.4875,.4285,.64,.0669,.5215,.3373,.2708,.0713,.3781,.3463,.3323,.2331,.4186,.4347,.2831,.4539,.1708,.4063,.3744,.4879,.0128,.3354,.179,.6431,.3806,.5568,.0171,.7046,.2921,.5973,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#74");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 165, 0, 840, this);
                new _B.SubMesh(1, 165, 80, 840, 438, this);
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

        Sphere.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(89);
        };
        return Sphere;
    })(BABYLON.Mesh);
    map01.Sphere = Sphere;

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
            this.position.x  = 0;
            this.position.y  = -.1267;
            this.position.z  = 19.6525;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 7.393;
            this.scaling.y   = 7.393;
            this.scaling.z   = 7.393;

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
                    ,.0833,1.3379,-.2017,.0814,1.3379,.1961,.0644,.0667,0,.0883,.0283,.0499,.0456,.0667,.0456,0,.0667,.0644,.0406,.3562,.0406,.0456,.0667,.0456,.0644,.0667,0,.0504,-.0079,-.0504,.0713,-.0079,0,.0406,.3562,.0406,.0644,.0667,0,.0456,.0667,.0456,0,-.0079,-.0575,.0427,-.009,-.0693,.0188,-.009,-.0792
                    ,.0575,.3562,0,.0456,.0667,-.0456,.0644,.0667,0,-.0456,.0667,-.0456,-.0859,.0312,-.1032,0,.0667,-.0644,.0406,.3562,-.0406,0,.0667,-.0644,-.0406,-.0079,-.0406,-.1034,-.0054,-.0674,-.0713,-.0079,0,0,.3562,-.0575,-.0456,.0667,-.0456,0,.0667,-.0644,-.0644,.0667,0,-.0504,-.0079,.0504,-.0713,-.0079,0
                    ,-.0406,.3562,-.0406,-.0456,.0667,-.0456,-.0575,.3562,0,0,.3562,-.0575,.0575,.3562,0,-.0504,-.0079,.0504,-.0604,.0127,.147,0,-.0079,.0575,-.0406,.3562,.0406,-.0456,.0667,.0456,.0988,.0283,.0245,.0644,.0667,0,-.0406,.3562,.0406,-.0456,.0667,.0456,.0406,-.0079,.0406,.0427,.0348,-.0693,.0439,.0278,-.1275
                    ,.0615,.0278,-.127,.0504,-.0079,-.0504,.0427,.0348,-.0693,.0427,-.009,-.0693,0,.0667,-.0644,.0427,.0348,-.0693,0,-.0079,-.0575,.0188,.0348,-.0792,0,.0667,-.0644,.0439,-.002,-.1275,.0537,.0001,-.2666,.0439,.0278,-.1275,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,-.002,-.127,.0427,-.009,-.0693
                    ,.0439,-.002,-.1275,.0595,.0001,-.2664,.0537,-.0097,-.2666,.0595,-.0097,-.2664,.0595,.0001,-.2664,.0595,-.0097,-.2664,.0615,-.002,-.127,.0537,-.0097,-.2666,.0439,-.002,-.1275,.0537,.0001,-.2666,.0595,.0001,-.2664,-.1021,-.0054,-.0889,-.1647,-.0065,-.1199,-.1759,-.0065,-.1176,-.1823,-.0065,-.108,-.1034,.0312,-.0674,-.1021,.0312,-.0889
                    ,-.0713,-.0079,0,-.1034,.0312,-.0674,-.0644,.0667,0,-.0859,-.0054,-.1032,0,-.0079,-.0575,-.0859,.0312,-.1032,-.0859,-.0054,-.1032,-.1759,.013,-.1176,-.2674,-.0024,-.2488,-.2661,-.0024,-.2507,-.1823,-.0065,-.108,-.2674,-.0024,-.2488,-.1823,.013,-.108,-.0859,-.0054,-.1032,-.1647,.013,-.1199,-.1647,-.0065,-.1199,-.1034,-.0054,-.0674
                    ,-.1034,.0312,-.0674,-.1823,.013,-.108,-.1647,.013,-.1199,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2638,-.0064,-.2512,-.2661,-.0024,-.2507,-.2674,-.0064,-.2488,-.2661,-.0064,-.2507,-.2638,-.0024,-.2512,-.1647,.013,-.1199,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.2661,-.0064,-.2507,-.1647,-.0065,-.1199,-.0786,.0127,.1329,-.114,.0109,.2109
                    ,-.114,-.0133,.2109,-.0786,.0518,.1329,0,.0667,.0644,-.0604,.0127,.147,-.0604,.0518,.147,0,.0667,.0644,-.0786,.0518,.1329,-.0456,.0667,.0456,-.114,-.0133,.2109,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.0786,.0518,.1329,-.0999,.0109,.2133,-.114,.0109,.2109,-.0786,.0127,.1329,-.0604,.0127,.147,-.0999,.0109,.2133
                    ,-.1227,-.0042,.2943,-.12,-.0088,.2948,-.1227,-.0088,.2943,-.0999,-.0133,.2133,-.12,-.0042,.2948,-.0999,.0109,.2133,-.1227,-.0042,.2943,-.1227,-.0088,.2943,-.1227,-.0042,.2943,-.114,.0109,.2109,.0883,-.0183,.0499,.1152,-.0116,.0834,.1297,-.0116,.0703,.1308,-.0116,.0508,.0988,-.0183,.0245,0,-.0079,.0575,.063,.0283,.0604
                    ,.063,-.0183,.0604,.063,-.0183,.0604,.0456,.0667,.0456,.0713,-.0079,0,.1152,-.0116,.0834,.2343,-.0106,.0865,.2343,-.0175,.0865,.1297,.0215,.0703,.2376,-.0106,.0797,.2374,-.0106,.0837,.1152,.0215,.0834,.063,.0283,.0604,.0988,-.0183,.0245,.1308,.0215,.0508,.1308,.0215,.0508,.1152,.0215,.0834,.1152,-.0116,.0834
                    ,.2374,-.0106,.0837,.2376,-.0175,.0797,.2374,-.0175,.0837,.2343,-.0106,.0865,.2343,-.0175,.0865,.2376,-.0175,.0797,.2343,-.0175,.0865,.2374,-.0175,.0837,.2343,-.0106,.0865,.1308,-.0116,.0508,.2376,-.0106,.0797,.0988,.0283,.0245,0,.3562,.0575,.0644,.0667,0,.0406,.3562,.0406,.0575,.3562,0,.0644,.0667,0
                    ,.0504,-.0079,-.0504,0,.3562,-.0575,0,.0667,-.0644,-.0456,.0667,-.0456,-.0575,.3562,0,.0575,.3562,0,.0406,.3562,.0406,0,.3562,.0575,0,.3562,.0575,-.0406,.3562,.0406,-.0406,.3562,-.0406,0,.3562,-.0575,0,.3562,-.0575,.0406,.3562,-.0406,.0575,.3562,0,.0575,.3562,0,0,.3562,.0575
                    ,-.0504,-.0079,.0504,-.0786,.0127,.1329,-.0575,.3562,0,.0988,-.0183,.0245,-.0406,.3562,.0406,-.0504,-.0079,.0504,.0713,-.0079,0,.0504,-.0079,-.0504,.0504,-.0079,-.0504,-.0504,-.0079,.0504,.0188,.0348,-.0792,.0504,-.0079,-.0504,.0456,.0667,-.0456,.0427,.0348,-.0693,0,.0667,-.0644,.0188,.0348,-.0792,.0427,.0348,-.0693
                    ,0,-.0079,-.0575,.0188,-.009,-.0792,.0537,-.0097,-.2666,.0188,-.009,-.0792,.0439,.0278,-.1275,.0427,.0348,-.0693,.0615,.0278,-.127,.0615,-.002,-.127,.0439,-.002,-.1275,.0537,.0001,-.2666,.0615,.0278,-.127,.0595,.0001,-.2664,.0615,-.002,-.127,.0595,-.0097,-.2664,.0537,-.0097,-.2666,.0537,.0001,-.2666,-.0644,.0667,0
                    ,-.0713,-.0079,0,-.1034,-.0054,-.0674,-.1034,.0312,-.0674,0,-.0079,-.0575,0,.0667,-.0644,-.0859,.0312,-.1032,-.1823,.013,-.108,-.1823,-.0065,-.108,-.2674,-.0064,-.2488,-.2674,-.0024,-.2488,-.0859,-.0054,-.1032,-.0859,.0312,-.1032,-.1034,-.0054,-.0674,-.1823,-.0065,-.108,-.1823,.013,-.108,-.1647,.013,-.1199,-.2661,-.0024,-.2507
                    ,-.2661,-.0024,-.2507,-.2674,-.0024,-.2488,-.2638,-.0024,-.2512,-.2661,-.0064,-.2507,-.2674,-.0064,-.2488,-.2638,-.0064,-.2512,-.1647,-.0065,-.1199,0,.0667,.0644,0,-.0079,.0575,-.0604,.0127,.147,0,.0667,.0644,-.0604,.0518,.147,-.0786,.0518,.1329,-.114,-.0133,.2109,-.1227,-.0088,.2943,-.0786,.0518,.1329,-.0604,.0518,.147
                    ,-.0786,.0127,.1329,-.114,-.0133,.2109,-.0604,.0127,.147,-.0999,-.0133,.2133,-.0999,.0109,.2133,-.12,-.0042,.2948,-.12,-.0088,.2948,-.0999,-.0133,.2133,-.12,-.0088,.2948,-.1227,-.0042,.2943,-.12,-.0042,.2948,-.1227,-.0042,.2943,.063,-.0183,.0604,0,-.0079,.0575,.063,-.0183,.0604,.0456,.0667,.0456,.0883,.0283,.0499
                    ,.0713,-.0079,0,.1152,-.0116,.0834,.1152,.0215,.0834,.1308,.0215,.0508,.0988,-.0183,.0245,.1308,-.0116,.0508,.0988,.0283,.0245,.1308,.0215,.0508,.1152,.0215,.0834,.2374,-.0106,.0837,.2376,-.0106,.0797,.2343,-.0106,.0865,.2374,-.0106,.0837,.2374,-.0175,.0837,.2376,-.0175,.0797,.2343,-.0175,.0865,.2343,-.0106,.0865
                    ,.1308,-.0116,.0508,.2376,-.0175,.0797,.2376,-.0106,.0797
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(588);
                _i.set([0,1,2,3,0,4,5,6,0,6,7,0,0,3,5,2,8,0,0,7,1,4,0,8,9,10,11,12,9,13,14,15,9,15,16,9,9,12,14,11,17,9,9,16,10,13,9,17,18,19
                ,20,21,18,22,23,24,18,24,25,18,18,21,23,20,26,18,18,25,19,22,18,26,27,28,29,30,27,31,32,33,27,33,34,27,27,30,32,29,35,27,27,34,28,31,27]);
                CONTIG(_i, 95, 35, 58);
                _i.set([52], 119);
                CONTIG(_i, 120, 59, 68);
                _i.set([65,69,70,71,72,73,74,75,65,76,77,44,78,79,80,39,81,48,59,82,83,84,85,86,87,88,89,90,52,91,92,93,94,95,96,97,98,92,99,100,101,49,102,50,103,104,105,100,106,107
                ,108,109,110,85,111,112,113,114,115,113,116,60,54,117,118,119,120,121,59,122,113], 130);
                CONTIG(_i, 201, 123, 135);
                _i.set([131,136,118,137,126,118,138,55,139,140,141,142,143,144,126,145,146,115,147,116,115,148,149,150,139,141,151,152,153,66,154,151], 214);
                CONTIG(_i, 246, 155, 167);
                _i.set([163,74,168,169,157,170,171,172,173,174,175,153,176,177,165,178,179,180,181,182,180,183,184,185,186,187,82,188,180,189,186,39,190,180,184,191,192,193,194,195,196,37,197,198,199,200,78,37,201,194
                ,187,202,203,204,205,206,207,206,208,182,209,183,182,210,211,194,212,197,213,214,200,36,215,37,39,216,40,217,52,43,218,219,220,48,221,49,51,57,52,54,118,55,57,222,223,59,113,60,62,68
                ,224,65,77,66,68,225,65,226,227,228,229,230,70,70,231,232,233,234,235,236,237,70,238,239,74,65,240,76,44,241,78,242,216,39,243,75,59,82,244,245,246,48,82,59,61,247,75,82,59,83
                ,248,84,249,250,251,252,253,254,255,256,92,94,257,95,258,94,259,260,261,100,49,262,263,103,264,104,100,265,266,267,268,269,85,84,270,113,122,114,113,115,116,54,271,117,272,273,274,59,48,122
                ,275,276,277,126,278,127,279,280,281,282,283,133,284,285,131,118,117,286,118,126,287,139,288,140,289,290,143,126,128,291,115,292,293,115,114,294,295,133,139,151,154,152,66,77,154,296,297,298,299,300
                ,301,302,303,162,304,305,165,306,307,163,308,309,310,170,311,312,313,314,174,153,152,315,165,316,317,180,318,181,180,182,183,319,39,186,82,75,320,321,322,186,323,82,180,324,325,192,194,326,195,37
                ,194,197,327,328,200,37,329,330,187,186,331,332,333,205,334,335,206,182,336,337,182,181,338,194,196], 259);
                CONTIG(_i, 584, 339, 342);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    0,1,0,-.2356,.5419,-.8067,.4005,.5524,-.731,.2356,.5419,.8067,.731,.5524,.4005,-.4005,.5524,.731,-.8067,.5419,.2356,-.731,.5524,-.4005,.8067,.5419,-.2356,0,1,0,.5398,.4631,.703,-.1147,.4731,.8735,-.5398,.4631,-.703,-.8735,.4731,-.1147,.1147,.4731,-.8735,.703,.4631,-.5398,.8735,.4731,.1147
                    ,-.703,.4631,.5398,0,1,0,-.0855,.3634,-.9277,.5933,.3721,-.7138,.0855,.3634,.9277,.7138,.3721,.5933,-.5933,.3721,.7138,-.9277,.3634,.0855,-.7138,.3721,-.5933,.9277,.3634,-.0855,0,1,0,.8847,.2868,-.3675,.8834,.294,.3649,-.8847,.2868,.3675,-.3649,.294,.8834,-.8834,.294,-.3649,-.3675,.2868,-.8847
                    ,.3649,.294,-.8834,.3675,.2868,.8847,.9662,.2155,-.1416,.3014,.9177,.2588,.6101,.3539,.7089,.2338,.2617,.9364,.5437,.6392,.5437,.6101,.3539,.7089,.9662,.2155,-.1416,.6847,-.6853,-.2481,.499,-.7212,-.4805,.5437,.6392,.5437,.9662,.2155,-.1416,.6101,.3539,.7089,-.0928,-.886,-.4544,.5923,-.805,-.0349,-.5332,-.7487,-.3938
                    ,.769,.6392,0,.7568,.1592,-.6339,.9662,.2155,-.1416,-.5728,.6019,-.5564,.0981,.5493,-.8298,.053,.23,-.9717,.5437,.6392,-.5437,.053,.23,-.9717,-.0126,-.9998,-.0148,-.4623,-.7775,.4264,-.6606,-.6894,.2973,0,.6392,-.769,-.5728,.6019,-.5564,.053,.23,-.9717,-.9687,.1924,.1569,-.6093,-.7868,.0983,-.6606,-.6894,.2973
                    ,-.5437,.6392,-.5437,-.5728,.6019,-.5564,-.769,.6392,0,0,.6392,-.769,.769,.6392,0,-.6093,-.7868,.0983,.6658,-.6399,.3838,.1871,-.8462,.499,-.5437,.6392,.5437,-.8509,.3116,.423,.7224,.516,-.4603,.9662,.2155,-.1416,-.5437,.6392,.5437,-.8509,.3116,.423,-.0911,-.9823,-.1635,.8112,.4844,-.3275,-.6011,.7408,-.2997
                    ,.7327,.6804,.0126,.6847,-.6853,-.2481,.8112,.4844,-.3275,.5923,-.805,-.0349,.053,.23,-.9717,.8112,.4844,-.3275,-.0928,-.886,-.4544,-.4493,.4492,-.7722,.053,.23,-.9717,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,-.6011,.7408,-.2997,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7515,-.6521,.1001,.5923,-.805,-.0349
                    ,-.6444,-.7328,-.2185,.5915,.5141,-.6211,-.5451,-.597,-.5886,.5771,-.597,-.5572,.5915,.5141,-.6211,.5771,-.597,-.5572,.7515,-.6521,.1001,-.5451,-.597,-.5886,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.5915,.5141,-.6211,-.0027,-1,-.0007,.3311,-.801,-.4988,.0037,-1,.0042,-.5141,-.653,.5561,-.7129,.6067,.3515,-.2751,.9485,-.1569
                    ,-.6606,-.6894,.2973,-.7129,.6067,.3515,-.9687,.1924,.1569,.2464,-.6692,-.701,-.0928,-.886,-.4544,.0981,.5493,-.8298,.2464,-.6692,-.701,-.0952,.9879,-.1223,-.8233,.5666,-.0334,-.4484,.6003,-.6622,-.5141,-.653,.5561,-.8233,.5666,-.0334,-.5959,.6179,.5129,.2464,-.6692,-.701,.2417,.6733,-.6987,.3311,-.801,-.4988,-.4623,-.7775,.4264
                    ,-.7129,.6067,.3515,-.5959,.6179,.5129,.2417,.6733,-.6987,.2745,.5666,-.7768,-.4355,-.6299,-.6431,.281,-.604,-.7458,-.4484,.6003,-.6622,-.7968,-.604,-.0158,-.4355,-.6299,-.6431,.2745,.5666,-.7768,.2417,.6733,-.6987,-.7968,-.604,-.0158,.281,-.604,-.7458,-.4355,-.6299,-.6431,.3311,-.801,-.4988,-.7125,-.6444,-.2774,-.782,.6226,-.0298
                    ,-.6645,-.7031,-.2532,-.7155,.6953,-.0673,.2338,.2617,.9364,.6658,-.6399,.3838,.4044,.7185,.5658,.2338,.2617,.9364,-.7155,.6953,-.0673,-.8509,.3116,.423,-.6645,-.7031,-.2532,.4445,-.5635,.6962,.6206,-.7745,.1223,-.7155,.6953,-.0673,.5821,.6427,.498,-.782,.6226,-.0298,-.7125,-.6444,-.2774,.6658,-.6399,.3838,.5821,.6427,.498
                    ,-.6658,.5213,.5337,.4445,-.5635,.6962,-.6544,-.5635,.5042,.6206,-.7745,.1223,.4452,.5213,.728,.5821,.6427,.498,-.6658,.5213,.5337,-.6544,-.5635,.5042,-.6658,.5213,.5337,-.782,.6226,-.0298,-.01,-.9999,-.0044,-.131,-.6233,.7709,.017,-.9998,.0032,.3678,-.7232,-.5845,.3597,-.7607,-.5402,.1871,-.8462,.499,.0462,.3166,.9474
                    ,-.246,-.8334,.4948,-.246,-.8334,.4948,.6101,.3539,.7089,.499,-.7212,-.4805,-.131,-.6233,.7709,.3478,.4827,.8037,.2482,-.6589,.71,.2134,.9687,.1265,.7305,.4858,-.4799,.7669,.5336,.3565,-.0778,.6307,.7721,.0462,.3166,.9474,.3597,-.7607,-.5402,.4516,.7245,-.5207,.4516,.7245,-.5207,-.0778,.6307,.7721,-.131,-.6233,.7709
                    ,.7669,.5336,.3565,.6376,-.6075,-.4736,.6865,-.6475,.3306,.3478,.4827,.8037,.2482,-.6589,.71,.6376,-.6075,-.4736,.2482,-.6589,.71,.6865,-.6475,.3306,.3478,.4827,.8037,.3678,-.7232,-.5845,.7305,.4858,-.4799,.7224,.516,-.4603,0,.6392,.769,.9662,.2155,-.1416,.5437,.6392,.5437,.769,.6392,0,.9662,.2155,-.1416
                    ,.6847,-.6853,-.2481,0,.6392,-.769,.053,.23,-.9717,-.5728,.6019,-.5564,-.769,.6392,0,.769,.6392,0,.5437,.6392,.5437,0,.6392,.769,0,.6392,.769,-.5437,.6392,.5437,-.5437,.6392,-.5437,0,.6392,-.769,0,.6392,-.769,.5437,.6392,-.5437,.769,.6392,0,.769,.6392,0,0,.6392,.769
                    ,-.6093,-.7868,.0983,-.7125,-.6444,-.2774,-.769,.6392,0,.3597,-.7607,-.5402,-.5437,.6392,.5437,-.6093,-.7868,.0983,.499,-.7212,-.4805,.6847,-.6853,-.2481,.6847,-.6853,-.2481,-.6093,-.7868,.0983,-.4493,.4492,-.7722,.6847,-.6853,-.2481,.7568,.1592,-.6339,.8112,.4844,-.3275,.053,.23,-.9717,-.4493,.4492,-.7722,.8112,.4844,-.3275
                    ,-.0928,-.886,-.4544,-.5332,-.7487,-.3938,-.5451,-.597,-.5886,-.5332,-.7487,-.3938,-.6011,.7408,-.2997,.8112,.4844,-.3275,.7327,.6804,.0126,.7515,-.6521,.1001,-.6444,-.7328,-.2185,-.5559,.5141,-.6532,.7327,.6804,.0126,.5915,.5141,-.6211,.7515,-.6521,.1001,.5771,-.597,-.5572,-.5451,-.597,-.5886,-.5559,.5141,-.6532,-.9687,.1924,.1569
                    ,-.6606,-.6894,.2973,-.4623,-.7775,.4264,-.7129,.6067,.3515,-.0928,-.886,-.4544,.053,.23,-.9717,.0981,.5493,-.8298,-.5959,.6179,.5129,-.5141,-.653,.5561,-.7968,-.604,-.0158,-.8233,.5666,-.0334,.2464,-.6692,-.701,.0981,.5493,-.8298,-.4623,-.7775,.4264,-.5141,-.653,.5561,-.5959,.6179,.5129,.2417,.6733,-.6987,-.4484,.6003,-.6622
                    ,-.4484,.6003,-.6622,-.8233,.5666,-.0334,.2745,.5666,-.7768,-.4355,-.6299,-.6431,-.7968,-.604,-.0158,.281,-.604,-.7458,.3311,-.801,-.4988,.2338,.2617,.9364,.1871,-.8462,.499,.6658,-.6399,.3838,.2338,.2617,.9364,.4044,.7185,.5658,-.7155,.6953,-.0673,-.6645,-.7031,-.2532,-.6544,-.5635,.5042,-.7155,.6953,-.0673,.4044,.7185,.5658
                    ,-.7125,-.6444,-.2774,-.6645,-.7031,-.2532,.6658,-.6399,.3838,.6206,-.7745,.1223,.5821,.6427,.498,.4452,.5213,.728,.4445,-.5635,.6962,.6206,-.7745,.1223,.4445,-.5635,.6962,-.6658,.5213,.5337,.4452,.5213,.728,-.6658,.5213,.5337,-.246,-.8334,.4948,.1871,-.8462,.499,-.246,-.8334,.4948,.6101,.3539,.7089,.3014,.9177,.2588
                    ,.499,-.7212,-.4805,-.131,-.6233,.7709,-.0778,.6307,.7721,.4516,.7245,-.5207,.3597,-.7607,-.5402,.3678,-.7232,-.5845,.7224,.516,-.4603,.4516,.7245,-.5207,-.0778,.6307,.7721,.7669,.5336,.3565,.7305,.4858,-.4799,.3478,.4827,.8037,.7669,.5336,.3565,.6865,-.6475,.3306,.6376,-.6075,-.4736,.2482,-.6589,.71,.3478,.4827,.8037
                    ,.3678,-.7232,-.5845,.6376,-.6075,-.4736,.7305,.4858,-.4799
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453
                    ,.8219,.1781,.5,.9547,.5,.5,.9547,.5,.8219,.8219,.0453,.5,.1781,.8219,.1781,.1781,.5,.0453,.8219,.1781,.5,.9547,.4184,.6151,.3781,.6598,.3625,.6174,.8051,.7983,.9953,.5388,.8445,.819,.8509,.1792,.7749,.1231,.817,.1043,.2466,.6151,.2994,.9304,.2434,.9304,.2207,.278,.1704,.2776
                    ,.1938,.2605,1,.4598,.8129,.1961,.8509,.1792,.5129,.8884,.5394,.8148,.5602,.9171,.9661,.4749,.7637,.2217,.2703,.2843,.3314,.2385,.3158,.3185,.6593,0,.4903,.2723,.4583,.2497,.5354,.3042,.5227,.3962,.4875,.3713,.6878,.0202,.4903,.2723,.1229,.9411,.1582,.8593,.2434,.8932,.3076,.3774,.3469,.4758
                    ,.2543,.399,.7564,.0687,.5671,.3266,.8722,.1213,.8509,.1792,.9167,.4977,.7564,.773,.2048,.3926,.4277,.6151,.4382,.6779,.4184,.6807,.1648,.6462,.2161,.6475,.1686,.6619,.7637,.2217,.7821,.171,.0798,.8471,.1307,.8215,.1648,.8471,.0943,.7591,.1095,.616,.1281,.7619,.0811,.8175,.1281,.7619,.2161,.6475
                    ,.1969,.7226,.1686,.6619,.1521,.2164,.7355,.5711,.7295,.5606,.7355,.5605,.2434,.8561,.2328,.8593,.1329,.2219,.1006,.073,.1521,.2164,.4563,.8289,.4498,.8299,.3236,.2162,.3832,.1661,.3963,.1653,.406,.1737,.4947,.8216,.5156,.8093,0,.8792,.0567,.8401,.0798,.9076,.3017,.2058,.6444,.9129,.5959,.8088
                    ,.6373,.8072,.4937,.7248,.5557,.5605,.5583,.5605,.041,.7385,.0798,.6162,.0624,.744,.6373,.8072,.6115,.7229,.6336,.7221,.0166,.8297,.0567,.8401,.4807,.7251,.5033,.7333,.6276,.5626,.6319,.5605,.6321,.5625,.7321,.5889,.7295,.5846,.7321,.5846,.5602,.5622,.5033,.7333,.4583,.0017,.4537,.0001,.4563,0
                    ,.6336,.7221,.616,.4343,.693,.4912,.6767,.5125,.6424,.4,.7295,.8478,.6779,.7354,.7223,.7391,.3551,.6151,.3124,.7215,.2994,.6204,.4243,.5286,.4555,.6151,.4096,.5351,.3124,.7215,.3323,.8102,.3169,.8151,.3628,.4557,.6779,.7354,.6833,.6526,.7295,.5795,.7326,.5846,.7295,.5846,.656,.6504,.6745,.5609
                    ,.6833,.6526,.7564,.5564,.7532,.5605,.3522,.8999,.3169,.8151,.1551,.416,.1354,.4586,.1157,.4489,.1088,.4287,.1361,.3922,.763,.8689,.8441,.8664,.8189,.9111,.186,.4199,.8445,.819,.1592,.3585,.8788,.9338,.9953,.9934,.9915,1,.3768,.7097,.4184,.8189,.4141,.8205,.3564,.7014,.3551,.6396,.8472,.0767
                    ,.9092,.0947,.3973,.7018,.8968,.9021,.8788,.9338,.7295,.5755,.7374,.5713,.7374,.5755,.7295,.5795,.7374,.5795,0,.4891,.0056,.4954,.0014,.4934,.4098,.8188,.8914,.063,1,.0067,.4093,.6585,.9602,.5203,.8509,.1792,.2466,.6151,.2966,.6151,.2994,.9304,.1674,.2995,.9222,.4977,.7637,.2217,.4903,.2723
                    ,.728,.0487,.2434,.8932,.2434,.9411,.2081,.975,.2081,.975,.1582,.975,.1229,.8932,.1582,.8593,.1582,.8593,.2081,.8593,.2434,.8932,.2434,.8932,.2081,.975,.3076,.3774,.3628,.4557,.728,.0487,.8472,.0767,.9167,.4977,.3076,.3774,.1592,.3585,.1674,.2995,.1674,.2995,.3076,.3774,.4563,.6212,.1648,.6462
                    ,.2434,.6151,.2161,.6475,.7637,.2217,.7564,.1844,.7821,.171,.0798,.8471,.0811,.8175,.0984,.6151,.0811,.8175,.1281,.7619,.2161,.6475,.2293,.7128,.1329,.2219,.1521,.2164,.7295,.5713,.2293,.7128,.2434,.8561,.1329,.2219,.0943,.0748,.1006,.073,.4563,.8289,.4583,.9001,0,.8792,.0166,.8297,.0567,.8401
                    ,.6444,.9129,.5602,.9129,.5959,.8088,.4807,.7251,.041,.7385,.0754,.6151,.0798,.6162,.6373,.8072,.5959,.8088,.0166,.8297,.041,.7385,.4807,.7251,.5033,.7333,.6274,.5606,.7321,.5889,.7295,.5889,.5602,.5622,.4563,0,.4583,.0017,.4537,.0001,.6336,.7221,.7295,.8478,.6444,.8478,.6779,.7354,.3551,.6151
                    ,.3383,.7257,.3124,.7215,.4243,.5286,.4583,.6139,.3124,.7215,.3383,.7257,.3628,.4557,.4243,.5286,.6779,.7354,.656,.6504,.6833,.6526,.7326,.5795,.7326,.5846,.656,.6504,.6692,.5605,.7564,.5564,.3551,.899,.3522,.8999,.186,.4199,.763,.8689,.186,.4199,.8445,.819,.866,.878,.1592,.3585,.8788,.9338
                    ,.8968,.9021,.3973,.7018,.8472,.0767,.8914,.063,.4093,.6585,.3973,.7018,.8968,.9021,.7295,.5755,.7295,.5713,.7295,.5795,.7295,.5755,.0014,.4934,0,.4891,.0056,.4954,.4098,.8188,.8914,.063,.9963,0,1,.0067
                ]),
                false);

                geo = (_B.Tools.Now - geo) / 1000;
                this.setMaterialByID("map01.Multimaterial#75");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 36, 0, 96, this);
                new _B.SubMesh(1, 36, 307, 96, 492, this);
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
            clean(90);
        };
        return choinka;
    })(BABYLON.Mesh);
    map01.choinka = choinka;

    function defineLights(scene, positionOffset) {
        if (!positionOffset) { positionOffset = null; }
        var light;

        light = new _B.DirectionalLight("Lamp", new _B.Vector3(0,-.9435,.3313), scene);
        light.position = new _B.Vector3(0,15.482,0);
        if (positionOffset) light.position.addInPlace(positionOffset);
        light.intensity = 1.5;
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