// File generated with Tower of Babel version: 5.3-beta on 07/14/17
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warrior;
(function (Warrior) {
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
    function UNPACK(compressed) {
        var len = compressed.length * 4;
        ret = new Float32Array(compressed.length * 4);
        for(var i = 0, j = 0; i < len; i += 4, j++) {
            ret[i    ] =  compressed[j] & 0x000000FF;
            ret[i + 1] = (compressed[j] & 0x0000FF00) >> 8;
            ret[i + 2] = (compressed[j] & 0x00FF0000) >> 16;
            ret[i + 3] =  compressed[j] >> 24;
        }
        return ret;
    }
    var _sceneTransitionName;
    var _overriddenMillis;
    var _overriddenSound;
    var _options;

    function initScene(scene, resourcesRootDir, positionOffset, sceneTransitionName, overriddenMillis, overriddenSound, options) {
        if (!resourcesRootDir) { resourcesRootDir = "./"; }
        function MOVE(mesh, positionOffset) {
            mesh.position.addInPlace(positionOffset);
            if (mesh.isWorldMatrixFrozen) mesh.freezeWorldMatrix();
        }

        _sceneTransitionName = sceneTransitionName;
        _overriddenMillis    = overriddenMillis;
        _overriddenSound     = overriddenSound;
        _options             = options;

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
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Boots", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Gloves", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Warrior", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Armor", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Hair", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Helm", true);
            if (positionOffset) MOVE(mesh, positionOffset);
        } else {
            mesh = new Boots("Boots", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Gloves("Gloves", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Warrior("Warrior", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Armor("Armor", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Hair("Hair", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Helm("Helm", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
        }
    }
    Warrior.initScene = initScene;
    var meshLib = new Array(6);
    var cloneCount = 1;

    var originalVerts = 0;
    var clonedVerts = 0;
    var MeshFactory = (function () {
        function MeshFactory(_scene, materialsRootDir) {
            this._scene = _scene;
            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(_scene, materialsRootDir); //embedded version check
        }

        MeshFactory.prototype.getModuleName = function () { return "Warrior";};

        MeshFactory.prototype.instance = function (meshName, cloneSkeleton) {
            var ret = null;
            var src;
            switch (meshName){
                case "Boots":
                    src = getViable(0);
                    if (src === null){
                        ret = new Boots("Boots", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[0].push(ret);
                    }else{
                        ret = new Boots("Boots" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Gloves":
                    src = getViable(1);
                    if (src === null){
                        ret = new Gloves("Gloves", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[1].push(ret);
                    }else{
                        ret = new Gloves("Gloves" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Warrior":
                    src = getViable(2);
                    if (src === null){
                        ret = new Warrior("Warrior", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[2].push(ret);
                    }else{
                        ret = new Warrior("Warrior" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Armor":
                    src = getViable(3);
                    if (src === null){
                        ret = new Armor("Armor", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[3].push(ret);
                    }else{
                        ret = new Armor("Armor" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Hair":
                    src = getViable(4);
                    if (src === null){
                        ret = new Hair("Hair", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[4].push(ret);
                    }else{
                        ret = new Hair("Hair" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Helm":
                    src = getViable(5);
                    if (src === null){
                        ret = new Helm("Helm", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[5].push(ret);
                    }else{
                        ret = new Helm("Helm" + "_" + cloneCount++, this._scene, null, src);
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
    Warrior.MeshFactory = MeshFactory;
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
    Warrior.getStats = getStats;


    var waitingMeshes = [];
    var pendingTextures = 0;
    function onTexturesLoaded(){
        if (--pendingTextures > 0) return;
        if (_sceneTransitionName) QI.SceneTransition.perform(_sceneTransitionName, waitingMeshes, _overriddenMillis, _overriddenSound, _options);
        else {
            for (var i = 0, len = waitingMeshes.length; i < len; i++) {
                if (typeof waitingMeshes[i].grandEntrance == "function") waitingMeshes[i].grandEntrance();
                else makeVisible(waitingMeshes[i]);
            }
        }
        waitingMeshes = [];
        _sceneTransitionName = null;
        matLoaded = true;
    }

    // QI.Mesh has similar method, using this to not require QI
    function makeVisible(mesh){
        var children = mesh.getChildMeshes();
        mesh.isVisible = true;
        for (var i = 0, len = children.length; i < len; i++) {
            children[i].isVisible = true;
        }
    }

    var aheadQueued = false;
    function matReadAhead(materialsRootDir) {
        if (aheadQueued) return;
        var txBuffer;
        var fName;

        fName = "Character_texture_complete.png";
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

        fName = "Skirt.png";
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

        fName = "Hair.png";
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
    Warrior.matReadAhead = matReadAhead;

    var matLoaded = false;
    function defineMaterials(scene, materialsRootDir) {
        if (!materialsRootDir) { materialsRootDir = "./"; }
        if (materialsRootDir.lastIndexOf("/") + 1  !== materialsRootDir.length) { materialsRootDir  += "/"; }
        if (typeof(QI) !== "undefined") QI.TimelineControl.initialize(scene);
        if (typeof(TOWER_OF_BABEL) !== "undefined") TOWER_OF_BABEL.Preloader.SCENE = scene;
        matReadAhead(materialsRootDir);
        var material;
        var texture;
        var txBuffer;

        material = scene.getMaterialByID("Warrior.Gloves");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Gloves", scene);
            material.ambientColor  = new _B.Color3(.0607,.0386,.0189);
            material.diffuseColor  = new _B.Color3(.0486,.0309,.0151);
            material.emissiveColor = new _B.Color3(.0261,.0166,.0081);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.texture");
        if (!material){
            material = new _B.StandardMaterial("Warrior.texture", scene);
            material.ambientColor  = new _B.Color3(1,1,1);
            material.diffuseColor  = new _B.Color3(1,1,1);
            material.emissiveColor = new _B.Color3(.43,.43,.43);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Character_texture_complete.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.002");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.002", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(.336,.336,.336);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Skirt.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Hair");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Hair", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(.336,.336,.336);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Hair.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.001");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.001", scene);
            material.ambientColor  = new _B.Color3(.477,.001,0);
            material.diffuseColor  = new _B.Color3(.3816,.0008,0);
            material.emissiveColor = new _B.Color3(0,0,0);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();
        var multiMaterial;
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#0", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Hair"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.001"));
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#1", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Hair"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Gloves"));

        if (pendingTextures === 0) {
            matLoaded = true; 
            if (_sceneTransitionName) QI.SceneTransition.perform(_sceneTransitionName, waitingMeshes, _overriddenMillis, _overriddenSound, _options);
        }
    }
    Warrior.defineMaterials = defineMaterials;

    function skel_metarig(name, scene){
        var bone;
        var animation;

        var skeleton = new QI.Skeleton(name, "0", scene);
        skeleton.dimensionsAtRest = new _V(2.6981,4.8573,1.3847);
        bone = new QI.Bone("root", skeleton,null, _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1), _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1));
        bone.length = 1.1261;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 16, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 30, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 50, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 60, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 61, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 70, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 130, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 140, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 202, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.L", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.3253,.2268,-.1367,1));
        bone.length = .51;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 1, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8693,-.1883,1)},
        {frame: 2, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.9465,-.3231,1)},
        {frame: 3, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.0237,-.458,1)},
        {frame: 4, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.0533,-.5096,1)},
        {frame: 5, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.934,-.3625,1)},
        {frame: 6, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.0161,-.2297,1)},
        {frame: 7, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.1308,-.1367,1)},
        {frame: 8, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.251,-.1229,1)},
        {frame: 9, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.3169,-.1367,1)},
        {frame: 10, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.307,-.1367,1)},
        {frame: 11, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.2646,-.1367,1)},
        {frame: 12, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.187,-.1367,1)},
        {frame: 13, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,1.0733,-.1367,1)},
        {frame: 14, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.9536,-.1367,1)},
        {frame: 15, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8686,-.1367,1)},
        {frame: 16, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1)},
        {frame: 31, value: _M(-1,0,0,0,0,-.8579,-.5137,0,0,-.5137,.8579,0,.2699,-.8492,-1.3884,1)},
        {frame: 32, value: _M(-1,0,0,0,0,-.7941,-.6077,0,0,-.6077,.7941,0,.2699,-.4581,-1.3411,1)},
        {frame: 33, value: _M(-1,0,0,0,0,-.8404,-.542,0,0,-.542,.8404,0,.2664,-.1346,-1.2006,1)},
        {frame: 34, value: _M(-1,0,0,0,0,-.9403,-.3402,0,0,-.3402,.9403,0,.2566,.2079,-.9985,1)},
        {frame: 35, value: _M(-1,0,0,0,0,-.9952,-.0981,0,0,-.0981,.9952,0,.2462,.587,-.826,1)},
        {frame: 36, value: _M(-1,0,0,0,0,-.9722,.2341,0,0,.2341,.9722,0,.2373,1.0638,-.7045,1)},
        {frame: 37, value: _M(-1,0,0,0,0,-.9047,.4261,0,0,.4261,.9047,0,.2262,1.472,-.6204,1)},
        {frame: 38, value: _M(-1,0,0,0,0,-.9229,.385,0,0,.385,.9229,0,.2132,1.6539,-.5975,1)},
        {frame: 39, value: _M(-1,0,0,0,0,-.9737,.2279,0,0,.2279,.9737,0,.196,1.7001,-.5325,1)},
        {frame: 40, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,.1715,1.2165,-.1367,1)},
        {frame: 41, value: _M(-1,0,0,0,0,-.9992,-.04,0,0,-.04,.9992,0,.1779,.8935,-.0759,1)},
        {frame: 42, value: _M(-1,0,0,0,0,-1,-.0017,0,0,-.0017,1,0,.1915,.613,-.1065,1)},
        {frame: 43, value: _M(-1,0,0,0,0,-.9986,-.0532,0,0,-.0532,.9986,0,.2047,.2226,-.1297,1)},
        {frame: 44, value: _M(-1,0,0,0,0,-.9866,-.1631,0,0,-.1631,.9866,0,.2196,-.204,-.1803,1)},
        {frame: 45, value: _M(-1,0,0,0,0,-.9769,-.2138,0,0,-.2138,.9769,0,.2355,-.5396,-.2838,1)},
        {frame: 46, value: _M(-1,0,0,0,0,-.9993,.0379,0,0,.0379,.9993,0,.2545,-.7366,-.4554,1)},
        {frame: 47, value: _M(-1,0,0,0,0,-.9579,.2871,0,0,.2871,.9579,0,.2699,-.8562,-.6738,1)},
        {frame: 48, value: _M(-1,0,0,0,0,-.9925,.1223,0,0,.1223,.9925,0,.2767,-.9946,-.8849,1)},
        {frame: 49, value: _M(-1,0,0,0,0,-.9828,-.1844,0,0,-.1844,.9828,0,.2776,-1.0954,-1.1108,1)},
        {frame: 50, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2776,-1.0515,-1.3797,1)},
        {frame: 60, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2776,-1.0515,-1.3797,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2776,-1.0515,-1.3797,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 130, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 140, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 202, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.L", skeleton,skeleton.bones[1], _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
        bone.length = .5841;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 16, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 30, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 31, value: _M(-1,0,0,0,0,.0209,.9998,0,0,.9998,-.0209,0,0,.1648,-.0002,1)},
        {frame: 32, value: _M(-1,0,0,0,0,-.0977,.9952,0,0,.9952,.0977,0,0,.1648,-.0002,1)},
        {frame: 33, value: _M(-1,0,0,0,0,-.2333,.9724,0,0,.9724,.2333,0,0,.1648,-.0002,1)},
        {frame: 34, value: _M(-1,0,0,0,0,-.3998,.9166,0,0,.9166,.3998,0,0,.1648,-.0002,1)},
        {frame: 35, value: _M(-1,0,0,0,0,-.5765,.8171,0,0,.8171,.5765,0,0,.1648,-.0002,1)},
        {frame: 36, value: _M(-1,0,0,0,0,-.7465,.6654,0,0,.6654,.7465,0,0,.1648,-.0002,1)},
        {frame: 37, value: _M(-1,0,0,0,0,-.8681,.4964,0,0,.4964,.8681,0,0,.1648,-.0002,1)},
        {frame: 38, value: _M(-1,0,0,0,0,-.9453,.3262,0,0,.3262,.9453,0,0,.1648,-.0002,1)},
        {frame: 39, value: _M(-1,0,0,0,0,-.9844,.1758,0,0,.1758,.9844,0,0,.1648,-.0002,1)},
        {frame: 40, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 41, value: _M(-1,0,0,0,0,-.995,.0995,0,0,.0995,.995,0,0,.1648,-.0002,1)},
        {frame: 42, value: _M(-1,0,0,0,0,-.9941,.1089,0,0,.1089,.9941,0,0,.1648,-.0002,1)},
        {frame: 43, value: _M(-1,0,0,0,0,-.9924,.1233,0,0,.1233,.9924,0,0,.1648,-.0002,1)},
        {frame: 44, value: _M(-1,0,0,0,0,-.9847,.1743,0,0,.1743,.9847,0,0,.1648,-.0002,1)},
        {frame: 45, value: _M(-1,0,0,0,0,-.9544,.2987,0,0,.2987,.9544,0,0,.1648,-.0002,1)},
        {frame: 46, value: _M(-1,0,0,0,0,-.8496,.5274,0,0,.5274,.8496,0,0,.1648,-.0002,1)},
        {frame: 47, value: _M(-1,0,0,0,0,-.6369,.771,0,0,.771,.6369,0,0,.1648,-.0002,1)},
        {frame: 48, value: _M(-1,0,0,0,0,-.3618,.9323,0,0,.9323,.3618,0,0,.1648,-.0002,1)},
        {frame: 49, value: _M(-1,0,0,0,0,-.0839,.9965,0,0,.9965,.0839,0,0,.1648,-.0002,1)},
        {frame: 50, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 60, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 61, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 130, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 140, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 202, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.R", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.3253,.2268,-.1367,1));
        bone.length = .51;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 8, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.2214,1)},
        {frame: 9, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.3061,1)},
        {frame: 12, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.291,1)},
        {frame: 13, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.2486,1)},
        {frame: 14, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1942,1)},
        {frame: 15, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1517,1)},
        {frame: 16, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 31, value: _M(-1,0,0,0,0,-.9992,-.0397,0,0,-.0397,.9992,0,-.1779,1.0152,-.1152,1)},
        {frame: 32, value: _M(-1,0,0,0,0,-1,-.0017,0,0,-.0017,1,0,-.1915,.613,-.1065,1)},
        {frame: 33, value: _M(-1,0,0,0,0,-.9985,-.0542,0,0,-.0542,.9985,0,-.2047,.2226,-.1297,1)},
        {frame: 34, value: _M(-1,0,0,0,0,-.9865,-.1636,0,0,-.1636,.9865,0,-.2196,-.204,-.1803,1)},
        {frame: 35, value: _M(-1,0,0,0,0,-.9769,-.2138,0,0,-.2138,.9769,0,-.2355,-.5396,-.2838,1)},
        {frame: 36, value: _M(-1,0,0,0,0,-.9992,.04,0,0,.04,.9992,0,-.2545,-.7366,-.4554,1)},
        {frame: 37, value: _M(-1,0,0,0,0,-.9579,.2871,0,0,.2871,.9579,0,-.2699,-.8562,-.6738,1)},
        {frame: 38, value: _M(-1,0,0,0,0,-.9921,.1253,0,0,.1253,.9921,0,-.2767,-.9946,-.8849,1)},
        {frame: 39, value: _M(-1,0,0,0,0,-.9828,-.1844,0,0,-.1844,.9828,0,-.2776,-1.0954,-1.1108,1)},
        {frame: 40, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,-.2776,-1.0515,-1.3797,1)},
        {frame: 41, value: _M(-1,0,0,0,0,-.8306,-.5568,0,0,-.5568,.8306,0,-.2755,-.7934,-1.4064,1)},
        {frame: 42, value: _M(-1,0,0,0,0,-.7941,-.6077,0,0,-.6077,.7941,0,-.2699,-.4581,-1.3411,1)},
        {frame: 43, value: _M(-1,0,0,0,0,-.8402,-.5423,0,0,-.5423,.8402,0,-.2633,-.1346,-1.2006,1)},
        {frame: 44, value: _M(-1,0,0,0,0,-.9401,-.3409,0,0,-.3409,.9401,0,-.2551,.2079,-.9985,1)},
        {frame: 45, value: _M(-1,0,0,0,0,-.9952,-.0981,0,0,-.0981,.9952,0,-.2462,.587,-.826,1)},
        {frame: 46, value: _M(-1,0,0,0,0,-.9722,.2343,0,0,.2343,.9722,0,-.2373,1.0638,-.7045,1)},
        {frame: 47, value: _M(-1,0,0,0,0,-.9047,.4261,0,0,.4261,.9047,0,-.2262,1.472,-.6204,1)},
        {frame: 48, value: _M(-1,0,0,0,0,-.9229,.385,0,0,.385,.9229,0,-.2132,1.6539,-.5975,1)},
        {frame: 49, value: _M(-1,0,0,0,0,-.9737,.2279,0,0,.2279,.9737,0,-.196,1.7001,-.5325,1)},
        {frame: 50, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 60, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.4565,-.0486,-.1367,1)},
        {frame: 130, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.4565,-.0486,-.1367,1)},
        {frame: 140, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 202, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.R", skeleton,skeleton.bones[3], _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
        bone.length = .5841;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 8, value: _M(-.8926,-.4233,.1551,0,.4319,-.7048,.5628,0,-.1289,.5693,.8119,0,0,.1648,-.0002,1)},
        {frame: 9, value: _M(-.8926,-.3891,.2276,0,.4319,-.5939,.6788,0,-.1289,.7042,.6982,0,0,.1648,-.0002,1)},
        {frame: 12, value: _M(-.8926,-.3961,.2152,0,.4319,-.615,.6597,0,-.1289,.6818,.7201,0,0,.1648,-.0002,1)},
        {frame: 13, value: _M(-.8926,-.4137,.1791,0,.4319,-.6713,.6023,0,-.1289,.615,.7779,0,0,.1648,-.0002,1)},
        {frame: 14, value: _M(-.8926,-.4315,.1305,0,.4319,-.7359,.5214,0,-.1289,.5218,.8433,0,0,.1648,-.0002,1)},
        {frame: 15, value: _M(-.8926,-.4414,.0916,0,.4319,-.7794,.4538,0,-.1289,.4446,.8864,0,0,.1648,-.0002,1)},
        {frame: 16, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 31, value: _M(-1,0,0,0,0,-.9951,.0986,0,0,.0986,.9951,0,0,.1648,-.0002,1)},
        {frame: 32, value: _M(-1,0,0,0,0,-.9941,.1089,0,0,.1089,.9941,0,0,.1648,-.0002,1)},
        {frame: 33, value: _M(-1,0,0,0,0,-.9927,.1204,0,0,.1204,.9927,0,0,.1648,-.0002,1)},
        {frame: 34, value: _M(-1,0,0,0,0,-.9863,.1652,0,0,.1652,.9863,0,0,.1648,-.0002,1)},
        {frame: 35, value: _M(-1,0,0,0,0,-.9544,.2987,0,0,.2987,.9544,0,0,.1648,-.0002,1)},
        {frame: 36, value: _M(-1,0,0,0,0,-.8415,.5403,0,0,.5403,.8415,0,0,.1648,-.0002,1)},
        {frame: 37, value: _M(-1,0,0,0,0,-.6369,.771,0,0,.771,.6369,0,0,.1648,-.0002,1)},
        {frame: 38, value: _M(-1,0,0,0,0,-.372,.9282,0,0,.9282,.372,0,0,.1648,-.0002,1)},
        {frame: 39, value: _M(-1,0,0,0,0,-.0839,.9965,0,0,.9965,.0839,0,0,.1648,-.0002,1)},
        {frame: 40, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 41, value: _M(-1,0,0,0,0,.0214,.9998,0,0,.9998,-.0214,0,0,.1648,-.0002,1)},
        {frame: 42, value: _M(-1,0,0,0,0,-.0977,.9952,0,0,.9952,.0977,0,0,.1648,-.0002,1)},
        {frame: 43, value: _M(-1,0,0,0,0,-.2393,.971,0,0,.971,.2393,0,0,.1648,-.0002,1)},
        {frame: 44, value: _M(-1,0,0,0,0,-.4082,.9129,0,0,.9129,.4082,0,0,.1648,-.0002,1)},
        {frame: 45, value: _M(-1,0,0,0,0,-.5765,.8171,0,0,.8171,.5765,0,0,.1648,-.0002,1)},
        {frame: 46, value: _M(-1,0,0,0,0,-.74,.6726,0,0,.6726,.74,0,0,.1648,-.0002,1)},
        {frame: 47, value: _M(-1,0,0,0,0,-.8681,.4964,0,0,.4964,.8681,0,0,.1648,-.0002,1)},
        {frame: 48, value: _M(-1,0,0,0,0,-.9467,.3221,0,0,.3221,.9467,0,0,.1648,-.0002,1)},
        {frame: 49, value: _M(-1,0,0,0,0,-.9844,.1758,0,0,.1758,.9844,0,0,.1648,-.0002,1)},
        {frame: 50, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 60, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 70, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 130, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 140, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 202, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hips", skeleton,skeleton.bones[0], _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3232,1), _M(1,0,0,0,0,.102,-.9948,0,0,.9948,.102,0,0,.2173,-2.5278,1));
        bone.length = .4281;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 1, value: _M(.9673,.2532,-.017,0,-.0313,.0525,-.9981,0,-.2519,.966,.0587,0,0,.2173,-2.3222,1)},
        {frame: 2, value: _M(.9513,.3003,-.0696,0,-.0471,-.0815,-.9956,0,-.3046,.9504,-.0634,0,0,.2173,-2.3195,1)},
        {frame: 3, value: _M(.9278,.3458,-.1401,0,-.0562,-.2416,-.9687,0,-.3689,.9066,-.2048,0,0,.2173,-2.3135,1)},
        {frame: 4, value: _M(.9086,.3701,-.1936,0,-.0559,-.3516,-.9345,0,-.4139,.8599,-.2988,0,0,.2173,-2.3047,1)},
        {frame: 5, value: _M(.9007,.3776,-.2149,0,-.0542,-.393,-.9179,0,-.431,.8384,-.3335,0,0,.2173,-2.2895,1)},
        {frame: 6, value: _M(.9202,.3629,-.1467,0,-.0526,-.2568,-.965,0,-.3879,.8957,-.2172,0,0,.2173,-2.2572,1)},
        {frame: 7, value: _M(.9566,.2907,-.0215,0,-.0406,.0597,-.9974,0,-.2887,.955,.0689,0,0,.2173,-2.2198,1)},
        {frame: 8, value: _M(.9891,.1288,.0719,0,.0011,.481,-.8767,0,-.1475,.8672,.4756,0,0,.2173,-2.1769,1)},
        {frame: 9, value: _M(.9961,.0208,.0857,0,.0485,.6827,-.729,0,-.0737,.7304,.6791,0,0,.2173,-2.1539,1)},
        {frame: 10, value: _M(.996,.0255,.0852,0,.046,.6721,-.739,0,-.0761,.74,.6683,0,0,.2173,-2.1574,1)},
        {frame: 11, value: _M(.9955,.0454,.0832,0,.0361,.6304,-.7754,0,-.0876,.7749,.6259,0,0,.2173,-2.1724,1)},
        {frame: 12, value: _M(.9937,.0821,.0768,0,.0194,.5479,-.8363,0,-.1107,.8325,.5428,0,0,.2173,-2.1999,1)},
        {frame: 13, value: _M(.989,.1354,.0602,0,-.0011,.4128,-.9108,0,-.1482,.9007,.4084,0,0,.2173,-2.2401,1)},
        {frame: 14, value: _M(.9814,.1889,.0335,0,-.0164,.2562,-.9665,0,-.1911,.948,.2546,0,0,.2173,-2.2825,1)},
        {frame: 15, value: _M(.9746,.2238,.0091,0,-.0227,.1393,-.99,0,-.2229,.9646,.1409,0,0,.2173,-2.3126,1)},
        {frame: 16, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 30, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 31, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5496,-2.2359,1)},
        {frame: 32, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5767,-2.0957,1)},
        {frame: 33, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5503,-2.0342,1)},
        {frame: 34, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5177,-2.1339,1)},
        {frame: 35, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 36, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5285,-2.4318,1)},
        {frame: 37, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.5352,1)},
        {frame: 38, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5416,-2.6062,1)},
        {frame: 39, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.6297,1)},
        {frame: 40, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 41, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5456,-2.1279,1)},
        {frame: 42, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5715,-2.0453,1)},
        {frame: 43, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5503,-2.0342,1)},
        {frame: 44, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5177,-2.1339,1)},
        {frame: 45, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 46, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5285,-2.4318,1)},
        {frame: 47, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.5352,1)},
        {frame: 48, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5416,-2.6062,1)},
        {frame: 49, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.6297,1)},
        {frame: 50, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 60, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 61, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 70, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4285,1)},
        {frame: 71, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4286,1)},
        {frame: 72, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4287,1)},
        {frame: 73, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.429,1)},
        {frame: 74, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4294,1)},
        {frame: 75, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4299,1)},
        {frame: 76, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4306,1)},
        {frame: 77, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4313,1)},
        {frame: 78, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4322,1)},
        {frame: 79, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4331,1)},
        {frame: 80, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4341,1)},
        {frame: 81, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4352,1)},
        {frame: 82, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4364,1)},
        {frame: 83, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4376,1)},
        {frame: 84, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4388,1)},
        {frame: 85, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4401,1)},
        {frame: 86, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4413,1)},
        {frame: 87, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4426,1)},
        {frame: 88, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4438,1)},
        {frame: 89, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.445,1)},
        {frame: 90, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4461,1)},
        {frame: 91, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4471,1)},
        {frame: 92, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.448,1)},
        {frame: 93, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4489,1)},
        {frame: 94, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4496,1)},
        {frame: 95, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4502,1)},
        {frame: 96, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4507,1)},
        {frame: 97, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4511,1)},
        {frame: 98, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4514,1)},
        {frame: 99, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4516,1)},
        {frame: 102, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4514,1)},
        {frame: 103, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4511,1)},
        {frame: 104, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4507,1)},
        {frame: 105, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4502,1)},
        {frame: 106, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4496,1)},
        {frame: 107, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4489,1)},
        {frame: 108, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.448,1)},
        {frame: 109, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4471,1)},
        {frame: 110, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4461,1)},
        {frame: 111, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.445,1)},
        {frame: 112, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4438,1)},
        {frame: 113, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4426,1)},
        {frame: 114, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4413,1)},
        {frame: 115, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4401,1)},
        {frame: 116, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4388,1)},
        {frame: 117, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4376,1)},
        {frame: 118, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4364,1)},
        {frame: 119, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4352,1)},
        {frame: 120, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4341,1)},
        {frame: 121, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4331,1)},
        {frame: 122, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4322,1)},
        {frame: 123, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4313,1)},
        {frame: 124, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4306,1)},
        {frame: 125, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4299,1)},
        {frame: 126, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4294,1)},
        {frame: 127, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.429,1)},
        {frame: 128, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4287,1)},
        {frame: 129, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4286,1)},
        {frame: 130, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4285,1)},
        {frame: 140, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 141, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)},
        {frame: 142, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3232,1)},
        {frame: 143, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3237,1)},
        {frame: 144, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3245,1)},
        {frame: 145, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3254,1)},
        {frame: 146, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3265,1)},
        {frame: 147, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3277,1)},
        {frame: 148, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.329,1)},
        {frame: 149, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3303,1)},
        {frame: 150, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3315,1)},
        {frame: 151, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3326,1)},
        {frame: 152, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3337,1)},
        {frame: 153, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.335,1)},
        {frame: 154, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3364,1)},
        {frame: 155, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.338,1)},
        {frame: 156, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3396,1)},
        {frame: 157, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3414,1)},
        {frame: 158, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3431,1)},
        {frame: 159, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.345,1)},
        {frame: 160, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3467,1)},
        {frame: 161, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3485,1)},
        {frame: 162, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3501,1)},
        {frame: 163, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3516,1)},
        {frame: 164, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3529,1)},
        {frame: 165, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3541,1)},
        {frame: 166, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.355,1)},
        {frame: 167, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3557,1)},
        {frame: 168, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3563,1)},
        {frame: 169, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3566,1)},
        {frame: 170, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3567,1)},
        {frame: 171, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3566,1)},
        {frame: 172, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3563,1)},
        {frame: 173, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3559,1)},
        {frame: 174, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3553,1)},
        {frame: 175, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3546,1)},
        {frame: 176, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3537,1)},
        {frame: 177, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3526,1)},
        {frame: 178, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3514,1)},
        {frame: 179, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.35,1)},
        {frame: 180, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3485,1)},
        {frame: 181, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3469,1)},
        {frame: 182, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3452,1)},
        {frame: 183, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3434,1)},
        {frame: 184, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3416,1)},
        {frame: 185, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3398,1)},
        {frame: 186, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3379,1)},
        {frame: 187, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3361,1)},
        {frame: 188, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3343,1)},
        {frame: 189, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3326,1)},
        {frame: 190, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.331,1)},
        {frame: 191, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3295,1)},
        {frame: 192, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3282,1)},
        {frame: 193, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.327,1)},
        {frame: 194, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3259,1)},
        {frame: 195, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.325,1)},
        {frame: 196, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3242,1)},
        {frame: 197, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3236,1)},
        {frame: 198, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3232,1)},
        {frame: 199, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.323,1)},
        {frame: 200, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)},
        {frame: 202, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("spine", skeleton,skeleton.bones[5], _M(1,.0001,0,0,-.0001,.9946,-.1042,0,0,.1042,.9946,0,0,.4281,0,1), _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1));
        bone.length = .3874;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 1, value: _M(.9935,-.0314,.1097,0,.0449,.9913,-.1236,0,-.1048,.1277,.9863,0,0,.4281,0,1)},
        {frame: 2, value: _M(.9125,-.1002,.3965,0,.1727,.9733,-.1513,0,-.3708,.2065,.9055,0,0,.4281,0,1)},
        {frame: 3, value: _M(.7465,-.1417,.6502,0,.3007,.9435,-.1396,0,-.5936,.2997,.7469,0,0,.4281,0,1)},
        {frame: 4, value: _M(.6659,-.1492,.7309,0,.3458,.9299,-.1252,0,-.661,.3362,.6709,0,0,.4281,0,1)},
        {frame: 5, value: _M(.9823,-.0382,.1832,0,.0625,.9897,-.1286,0,-.1764,.1378,.9746,0,0,.4281,0,1)},
        {frame: 6, value: _M(.9997,-.0051,.0229,0,.0075,.9942,-.1074,0,-.0223,.1076,.9939,0,0,.4281,0,1)},
        {frame: 7, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 16, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 30, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 31, value: _M(.9618,.0643,.2662,0,-.0364,.9934,-.1086,0,-.2715,.0948,.9578,0,0,.4281,0,1)},
        {frame: 32, value: _M(.9739,.0534,.2208,0,-.0302,.9938,-.1071,0,-.2252,.0976,.9694,0,0,.4281,0,1)},
        {frame: 33, value: _M(.9849,.0407,.1683,0,-.023,.9941,-.1056,0,-.1716,.1002,.9801,0,0,.4281,0,1)},
        {frame: 34, value: _M(.9943,.0249,.1032,0,-.0141,.9944,-.1044,0,-.1052,.1024,.9892,0,0,.4281,0,1)},
        {frame: 35, value: _M(.9995,.0077,.0317,0,-.0043,.9946,-.1038,0,-.0323,.1036,.9941,0,0,.4281,0,1)},
        {frame: 36, value: _M(.9988,-.0115,-.0474,0,.0065,.9946,-.1038,0,.0484,.1034,.9935,0,0,.4281,0,1)},
        {frame: 37, value: _M(.9916,-.0304,-.1258,0,.0172,.9943,-.1048,0,.1282,.1017,.9865,0,0,.4281,0,1)},
        {frame: 38, value: _M(.9793,-.0475,-.1968,0,.0269,.994,-.1064,0,.2006,.0989,.9747,0,0,.4281,0,1)},
        {frame: 39, value: _M(.9653,-.0613,-.2537,0,.0347,.9935,-.1082,0,.2587,.0956,.9612,0,0,.4281,0,1)},
        {frame: 40, value: _M(.9563,-.0687,-.2842,0,.0388,.9932,-.1093,0,.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 41, value: _M(.9618,-.0643,-.2662,0,.0364,.9934,-.1086,0,.2715,.0948,.9578,0,0,.4281,0,1)},
        {frame: 42, value: _M(.9739,-.0534,-.2208,0,.0302,.9938,-.1071,0,.2252,.0976,.9694,0,0,.4281,0,1)},
        {frame: 43, value: _M(.9849,-.0406,-.1681,0,.023,.9941,-.1056,0,.1714,.1002,.9801,0,0,.4281,0,1)},
        {frame: 44, value: _M(.9944,-.0248,-.1028,0,.014,.9944,-.1044,0,.1049,.1024,.9892,0,0,.4281,0,1)},
        {frame: 45, value: _M(.9995,-.0077,-.0317,0,.0043,.9946,-.1038,0,.0323,.1036,.9941,0,0,.4281,0,1)},
        {frame: 46, value: _M(.9988,.0113,.047,0,-.0064,.9946,-.1038,0,-.0479,.1034,.9935,0,0,.4281,0,1)},
        {frame: 47, value: _M(.9916,.0304,.1258,0,-.0172,.9943,-.1048,0,-.1282,.1017,.9865,0,0,.4281,0,1)},
        {frame: 48, value: _M(.9793,.0476,.1969,0,-.0269,.994,-.1064,0,-.2008,.0989,.9746,0,0,.4281,0,1)},
        {frame: 49, value: _M(.9653,.0613,.2537,0,-.0347,.9935,-.1082,0,-.2587,.0956,.9612,0,0,.4281,0,1)},
        {frame: 50, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 60, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 61, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 70, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 130, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 140, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 141, value: _M(1,0,0,0,0,.9946,-.1038,0,0,.1038,.9946,0,0,.4281,0,1)},
        {frame: 142, value: _M(1,.0001,0,0,-.0001,.9946,-.1042,0,0,.1042,.9946,0,0,.4281,0,1)},
        {frame: 143, value: _M(1,.0003,0,0,-.0003,.9945,-.1048,0,0,.1048,.9945,0,0,.4281,0,1)},
        {frame: 144, value: _M(1,.0005,0,0,-.0005,.9944,-.1056,0,0,.1056,.9944,0,0,.4281,0,1)},
        {frame: 145, value: _M(1,.0007,-.0001,0,-.0007,.9943,-.1068,0,0,.1068,.9943,0,0,.4281,0,1)},
        {frame: 146, value: _M(1,.0011,-.0001,0,-.0011,.9941,-.1081,0,0,.1081,.9941,0,0,.4281,0,1)},
        {frame: 147, value: _M(1,.0014,-.0001,0,-.0014,.994,-.1095,0,0,.1095,.994,0,0,.4281,0,1)},
        {frame: 148, value: _M(1,.0018,-.0002,0,-.0018,.9938,-.111,0,0,.111,.9938,0,0,.4281,0,1)},
        {frame: 149, value: _M(1,.0021,-.0002,0,-.0021,.9937,-.1124,0,0,.1124,.9937,0,0,.4281,0,1)},
        {frame: 150, value: _M(1,.0025,-.0003,0,-.0025,.9935,-.1138,0,0,.1138,.9935,0,0,.4281,0,1)},
        {frame: 151, value: _M(1,.0028,-.0003,0,-.0028,.9933,-.1152,0,0,.1152,.9933,0,0,.4281,0,1)},
        {frame: 152, value: _M(1,.0031,-.0003,0,-.0031,.9932,-.1165,0,0,.1165,.9932,0,0,.4281,0,1)},
        {frame: 153, value: _M(1,.0035,-.0004,0,-.0035,.993,-.118,0,0,.118,.993,0,0,.4281,0,1)},
        {frame: 154, value: _M(1,.0039,-.0004,0,-.0039,.9928,-.1197,0,0,.1197,.9928,0,0,.4281,0,1)},
        {frame: 155, value: _M(1,.0043,-.0005,0,-.0043,.9926,-.1215,0,0,.1215,.9926,0,0,.4281,0,1)},
        {frame: 156, value: _M(1,.0048,-.0005,0,-.0048,.9923,-.1234,0,-.0001,.1234,.9924,0,0,.4281,0,1)},
        {frame: 157, value: _M(1,.0053,-.0006,0,-.0053,.9921,-.1254,0,-.0001,.1254,.9921,0,0,.4281,0,1)},
        {frame: 158, value: _M(1,.0058,-.0007,0,-.0058,.9918,-.1275,0,-.0001,.1275,.9918,0,0,.4281,0,1)},
        {frame: 159, value: _M(1,.0063,-.0007,0,-.0063,.9915,-.1296,0,-.0001,.1296,.9916,0,0,.4281,0,1)},
        {frame: 160, value: _M(1,.0068,-.0008,0,-.0068,.9913,-.1317,0,-.0001,.1317,.9913,0,0,.4281,0,1)},
        {frame: 161, value: _M(1,.0073,-.0009,0,-.0073,.991,-.1337,0,-.0001,.1337,.991,0,0,.4281,0,1)},
        {frame: 162, value: _M(1,.0077,-.0009,0,-.0078,.9907,-.1357,0,-.0001,.1357,.9908,0,0,.4281,0,1)},
        {frame: 163, value: _M(1,.0082,-.001,0,-.0082,.9905,-.1374,0,-.0002,.1374,.9905,0,0,.4281,0,1)},
        {frame: 164, value: _M(1,.0085,-.001,0,-.0086,.9903,-.139,0,-.0002,.139,.9903,0,0,.4281,0,1)},
        {frame: 165, value: _M(1,.0088,-.0011,0,-.0089,.9901,-.1403,0,-.0002,.1403,.9901,0,0,.4281,0,1)},
        {frame: 166, value: _M(1,.0091,-.0011,0,-.0092,.9899,-.1414,0,-.0002,.1414,.99,0,0,.4281,0,1)},
        {frame: 167, value: _M(1,.0093,-.0011,0,-.0094,.9898,-.1422,0,-.0002,.1422,.9898,0,0,.4281,0,1)},
        {frame: 168, value: _M(1,.0095,-.0012,0,-.0095,.9897,-.1428,0,-.0002,.1428,.9897,0,0,.4281,0,1)},
        {frame: 169, value: _M(1,.0095,-.0012,0,-.0096,.9897,-.1432,0,-.0002,.1432,.9897,0,0,.4281,0,1)},
        {frame: 170, value: _M(1,.0096,-.0012,0,-.0096,.9896,-.1433,0,-.0002,.1433,.9897,0,0,.4281,0,1)},
        {frame: 171, value: _M(1,.0096,-.0012,0,-.0096,.9896,-.1432,0,-.0002,.1432,.9897,0,0,.4281,0,1)},
        {frame: 172, value: _M(1,.0095,-.0012,0,-.0096,.9897,-.1429,0,-.0002,.1429,.9897,0,0,.4281,0,1)},
        {frame: 173, value: _M(1,.0094,-.0011,0,-.0094,.9898,-.1424,0,-.0002,.1424,.9898,0,0,.4281,0,1)},
        {frame: 174, value: _M(1,.0092,-.0011,0,-.0093,.9899,-.1417,0,-.0002,.1417,.9899,0,0,.4281,0,1)},
        {frame: 175, value: _M(1,.009,-.0011,0,-.0091,.99,-.1409,0,-.0002,.1409,.99,0,0,.4281,0,1)},
        {frame: 176, value: _M(1,.0087,-.0011,0,-.0088,.9901,-.1398,0,-.0002,.1398,.9902,0,0,.4281,0,1)},
        {frame: 177, value: _M(1,.0084,-.001,0,-.0085,.9903,-.1385,0,-.0002,.1385,.9904,0,0,.4281,0,1)},
        {frame: 178, value: _M(1,.0081,-.001,0,-.0081,.9905,-.1371,0,-.0002,.1371,.9906,0,0,.4281,0,1)},
        {frame: 179, value: _M(1,.0077,-.0009,0,-.0077,.9907,-.1355,0,-.0001,.1355,.9908,0,0,.4281,0,1)},
        {frame: 180, value: _M(1,.0073,-.0009,0,-.0073,.991,-.1337,0,-.0001,.1337,.991,0,0,.4281,0,1)},
        {frame: 181, value: _M(1,.0068,-.0008,0,-.0069,.9912,-.1319,0,-.0001,.1319,.9913,0,0,.4281,0,1)},
        {frame: 182, value: _M(1,.0063,-.0007,0,-.0064,.9915,-.1299,0,-.0001,.1299,.9915,0,0,.4281,0,1)},
        {frame: 183, value: _M(1,.0058,-.0007,0,-.0059,.9918,-.1278,0,-.0001,.1278,.9918,0,0,.4281,0,1)},
        {frame: 184, value: _M(1,.0053,-.0006,0,-.0054,.9921,-.1257,0,-.0001,.1257,.9921,0,0,.4281,0,1)},
        {frame: 185, value: _M(1,.0048,-.0005,0,-.0048,.9923,-.1235,0,-.0001,.1235,.9923,0,0,.4281,0,1)},
        {frame: 186, value: _M(1,.0043,-.0005,0,-.0043,.9926,-.1214,0,0,.1214,.9926,0,0,.4281,0,1)},
        {frame: 187, value: _M(1,.0038,-.0004,0,-.0038,.9929,-.1192,0,0,.1192,.9929,0,0,.4281,0,1)},
        {frame: 188, value: _M(1,.0033,-.0004,0,-.0033,.9931,-.1171,0,0,.1171,.9931,0,0,.4281,0,1)},
        {frame: 189, value: _M(1,.0028,-.0003,0,-.0028,.9933,-.1152,0,0,.1152,.9933,0,0,.4281,0,1)},
        {frame: 190, value: _M(1,.0023,-.0002,0,-.0023,.9936,-.1133,0,0,.1133,.9936,0,0,.4281,0,1)},
        {frame: 191, value: _M(1,.0019,-.0002,0,-.0019,.9938,-.1115,0,0,.1115,.9938,0,0,.4281,0,1)},
        {frame: 192, value: _M(1,.0015,-.0002,0,-.0015,.9939,-.1099,0,0,.1099,.9939,0,0,.4281,0,1)},
        {frame: 193, value: _M(1,.0012,-.0001,0,-.0012,.9941,-.1085,0,0,.1085,.9941,0,0,.4281,0,1)},
        {frame: 194, value: _M(1,.0009,-.0001,0,-.0009,.9942,-.1072,0,0,.1072,.9942,0,0,.4281,0,1)},
        {frame: 195, value: _M(1,.0006,-.0001,0,-.0006,.9944,-.1061,0,0,.1061,.9944,0,0,.4281,0,1)},
        {frame: 196, value: _M(1,.0004,0,0,-.0004,.9944,-.1053,0,0,.1053,.9944,0,0,.4281,0,1)},
        {frame: 197, value: _M(1,.0002,0,0,-.0002,.9945,-.1046,0,0,.1046,.9945,0,0,.4281,0,1)},
        {frame: 198, value: _M(1,.0001,0,0,-.0001,.9946,-.1041,0,0,.1041,.9946,0,0,.4281,0,1)},
        {frame: 199, value: _M(1,0,0,0,0,.9946,-.1038,0,0,.1038,.9946,0,0,.4281,0,1)},
        {frame: 200, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 202, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("chest", skeleton,skeleton.bones[6], _M(.9922,.0001,.1246,0,.0156,.992,-.1252,0,-.1236,.1261,.9843,0,0,.3874,0,1), _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1));
        bone.length = .7816;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 16, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 30, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 50, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 60, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 61, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 70, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 71, value: _M(1,0,0,0,0,.9921,-.1256,0,0,.1256,.9921,0,0,.3874,0,1)},
        {frame: 72, value: _M(1,.0001,0,0,-.0001,.992,-.126,0,0,.126,.992,0,0,.3874,0,1)},
        {frame: 73, value: _M(1,.0002,0,0,-.0002,.9919,-.1269,0,0,.1269,.9919,0,0,.3874,0,1)},
        {frame: 74, value: _M(1,.0004,0,0,-.0004,.9918,-.128,0,-.0001,.128,.9918,0,0,.3874,0,1)},
        {frame: 75, value: _M(1,.0007,0,0,-.0007,.9916,-.1295,0,-.0001,.1295,.9916,0,0,.3874,0,1)},
        {frame: 76, value: _M(1,.001,0,0,-.001,.9914,-.1312,0,-.0001,.1312,.9914,0,0,.3874,0,1)},
        {frame: 77, value: _M(1,.0013,0,0,-.0013,.9911,-.1333,0,-.0002,.1333,.9911,0,0,.3874,0,1)},
        {frame: 78, value: _M(1,.0017,0,0,-.0017,.9907,-.1357,0,-.0002,.1357,.9908,0,0,.3874,0,1)},
        {frame: 79, value: _M(1,.0022,0,0,-.0022,.9904,-.1383,0,-.0003,.1383,.9904,0,0,.3874,0,1)},
        {frame: 80, value: _M(1,.0027,0,0,-.0027,.99,-.1412,0,-.0004,.1412,.99,0,0,.3874,0,1)},
        {frame: 81, value: _M(1,.0032,0,0,-.0032,.9895,-.1444,0,-.0004,.1443,.9895,0,0,.3874,0,1)},
        {frame: 82, value: _M(1,.0038,0,0,-.0037,.989,-.1476,0,-.0005,.1476,.989,0,0,.3874,0,1)},
        {frame: 83, value: _M(1,.0044,0,0,-.0043,.9885,-.1511,0,-.0006,.1511,.9885,0,0,.3874,0,1)},
        {frame: 84, value: _M(1,.005,-.0001,0,-.0049,.988,-.1546,0,-.0007,.1546,.988,0,0,.3874,0,1)},
        {frame: 85, value: _M(1,.0056,-.0001,0,-.0055,.9874,-.1582,0,-.0008,.1582,.9874,0,0,.3874,0,1)},
        {frame: 86, value: _M(1,.0062,-.0001,0,-.0061,.9868,-.1617,0,-.0009,.1617,.9868,0,0,.3874,0,1)},
        {frame: 87, value: _M(1,.0068,-.0001,0,-.0067,.9862,-.1652,0,-.001,.1652,.9863,0,0,.3874,0,1)},
        {frame: 88, value: _M(1,.0074,-.0001,0,-.0073,.9856,-.1687,0,-.0011,.1686,.9857,0,0,.3874,0,1)},
        {frame: 89, value: _M(1,.0079,-.0002,0,-.0078,.9851,-.1719,0,-.0012,.1719,.9851,0,0,.3874,0,1)},
        {frame: 90, value: _M(1,.0084,-.0002,0,-.0083,.9845,-.175,0,-.0013,.175,.9846,0,0,.3874,0,1)},
        {frame: 91, value: _M(1,.0089,-.0002,0,-.0088,.984,-.1779,0,-.0014,.1779,.984,0,0,.3874,0,1)},
        {frame: 92, value: _M(1,.0094,-.0002,0,-.0093,.9835,-.1805,0,-.0015,.1805,.9836,0,0,.3874,0,1)},
        {frame: 93, value: _M(1,.0098,-.0003,0,-.0097,.9831,-.1829,0,-.0015,.1829,.9831,0,0,.3874,0,1)},
        {frame: 94, value: _M(.9999,.0101,-.0003,0,-.01,.9827,-.185,0,-.0016,.185,.9827,0,0,.3874,0,1)},
        {frame: 95, value: _M(.9999,.0104,-.0003,0,-.0103,.9824,-.1867,0,-.0016,.1867,.9824,0,0,.3874,0,1)},
        {frame: 96, value: _M(.9999,.0107,-.0003,0,-.0106,.9821,-.1882,0,-.0017,.1882,.9821,0,0,.3874,0,1)},
        {frame: 97, value: _M(.9999,.0109,-.0003,0,-.0107,.9819,-.1893,0,-.0017,.1893,.9819,0,0,.3874,0,1)},
        {frame: 98, value: _M(.9999,.011,-.0003,0,-.0109,.9817,-.1901,0,-.0018,.1901,.9818,0,0,.3874,0,1)},
        {frame: 99, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1906,0,-.0018,.1906,.9817,0,0,.3874,0,1)},
        {frame: 100, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1907,0,-.0018,.1907,.9816,0,0,.3874,0,1)},
        {frame: 101, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1906,0,-.0018,.1906,.9817,0,0,.3874,0,1)},
        {frame: 102, value: _M(.9999,.011,-.0003,0,-.0109,.9817,-.1901,0,-.0018,.1901,.9818,0,0,.3874,0,1)},
        {frame: 103, value: _M(.9999,.0109,-.0003,0,-.0107,.9819,-.1893,0,-.0017,.1893,.9819,0,0,.3874,0,1)},
        {frame: 104, value: _M(.9999,.0107,-.0003,0,-.0106,.9821,-.1882,0,-.0017,.1882,.9821,0,0,.3874,0,1)},
        {frame: 105, value: _M(.9999,.0104,-.0003,0,-.0103,.9824,-.1867,0,-.0016,.1867,.9824,0,0,.3874,0,1)},
        {frame: 106, value: _M(.9999,.0101,-.0003,0,-.01,.9827,-.185,0,-.0016,.185,.9827,0,0,.3874,0,1)},
        {frame: 107, value: _M(1,.0098,-.0003,0,-.0097,.9831,-.1829,0,-.0015,.1829,.9831,0,0,.3874,0,1)},
        {frame: 108, value: _M(1,.0094,-.0002,0,-.0093,.9835,-.1805,0,-.0015,.1805,.9836,0,0,.3874,0,1)},
        {frame: 109, value: _M(1,.0089,-.0002,0,-.0088,.984,-.1779,0,-.0014,.1779,.984,0,0,.3874,0,1)},
        {frame: 110, value: _M(1,.0084,-.0002,0,-.0083,.9845,-.175,0,-.0013,.175,.9846,0,0,.3874,0,1)},
        {frame: 111, value: _M(1,.0079,-.0002,0,-.0078,.9851,-.1719,0,-.0012,.1719,.9851,0,0,.3874,0,1)},
        {frame: 112, value: _M(1,.0074,-.0001,0,-.0073,.9856,-.1687,0,-.0011,.1686,.9857,0,0,.3874,0,1)},
        {frame: 113, value: _M(1,.0068,-.0001,0,-.0067,.9862,-.1652,0,-.001,.1652,.9863,0,0,.3874,0,1)},
        {frame: 114, value: _M(1,.0062,-.0001,0,-.0061,.9868,-.1617,0,-.0009,.1617,.9868,0,0,.3874,0,1)},
        {frame: 115, value: _M(1,.0056,-.0001,0,-.0055,.9874,-.1582,0,-.0008,.1582,.9874,0,0,.3874,0,1)},
        {frame: 116, value: _M(1,.005,-.0001,0,-.0049,.988,-.1546,0,-.0007,.1546,.988,0,0,.3874,0,1)},
        {frame: 117, value: _M(1,.0044,0,0,-.0043,.9885,-.1511,0,-.0006,.1511,.9885,0,0,.3874,0,1)},
        {frame: 118, value: _M(1,.0038,0,0,-.0037,.989,-.1476,0,-.0005,.1476,.989,0,0,.3874,0,1)},
        {frame: 119, value: _M(1,.0032,0,0,-.0032,.9895,-.1444,0,-.0004,.1443,.9895,0,0,.3874,0,1)},
        {frame: 120, value: _M(1,.0027,0,0,-.0027,.99,-.1412,0,-.0004,.1412,.99,0,0,.3874,0,1)},
        {frame: 121, value: _M(1,.0022,0,0,-.0022,.9904,-.1383,0,-.0003,.1383,.9904,0,0,.3874,0,1)},
        {frame: 122, value: _M(1,.0017,0,0,-.0017,.9907,-.1357,0,-.0002,.1357,.9908,0,0,.3874,0,1)},
        {frame: 123, value: _M(1,.0013,0,0,-.0013,.9911,-.1333,0,-.0002,.1333,.9911,0,0,.3874,0,1)},
        {frame: 124, value: _M(1,.001,0,0,-.001,.9914,-.1312,0,-.0001,.1312,.9914,0,0,.3874,0,1)},
        {frame: 125, value: _M(1,.0007,0,0,-.0007,.9916,-.1295,0,-.0001,.1295,.9916,0,0,.3874,0,1)},
        {frame: 126, value: _M(1,.0004,0,0,-.0004,.9918,-.128,0,-.0001,.128,.9918,0,0,.3874,0,1)},
        {frame: 127, value: _M(1,.0002,0,0,-.0002,.9919,-.1269,0,0,.1269,.9919,0,0,.3874,0,1)},
        {frame: 128, value: _M(1,.0001,0,0,-.0001,.992,-.126,0,0,.126,.992,0,0,.3874,0,1)},
        {frame: 129, value: _M(1,0,0,0,0,.9921,-.1256,0,0,.1256,.9921,0,0,.3874,0,1)},
        {frame: 130, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 140, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 141, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)},
        {frame: 142, value: _M(.9922,.0001,.1246,0,.0156,.992,-.1252,0,-.1236,.1261,.9843,0,0,.3874,0,1)},
        {frame: 143, value: _M(.9922,.0004,.1246,0,.0154,.9919,-.1262,0,-.1237,.1271,.9841,0,0,.3874,0,1)},
        {frame: 144, value: _M(.9922,.001,.1246,0,.0151,.9917,-.1276,0,-.1237,.1285,.984,0,0,.3874,0,1)},
        {frame: 145, value: _M(.9922,.0016,.1246,0,.0146,.9915,-.1294,0,-.1238,.1302,.9837,0,0,.3874,0,1)},
        {frame: 146, value: _M(.9922,.0024,.1246,0,.0141,.9912,-.1315,0,-.1238,.1323,.9834,0,0,.3874,0,1)},
        {frame: 147, value: _M(.9922,.0033,.1246,0,.0135,.9909,-.1339,0,-.1239,.1345,.9831,0,0,.3874,0,1)},
        {frame: 148, value: _M(.9922,.0042,.1246,0,.013,.9906,-.1363,0,-.124,.1368,.9828,0,0,.3874,0,1)},
        {frame: 149, value: _M(.9922,.005,.1246,0,.0124,.9903,-.1387,0,-.1241,.1391,.9825,0,0,.3874,0,1)},
        {frame: 150, value: _M(.9922,.0059,.1246,0,.0118,.9899,-.141,0,-.1242,.1413,.9821,0,0,.3874,0,1)},
        {frame: 151, value: _M(.9922,.0067,.1246,0,.0113,.9896,-.1431,0,-.1242,.1434,.9818,0,0,.3874,0,1)},
        {frame: 152, value: _M(.9922,.0075,.1246,0,.0108,.9893,-.1453,0,-.1243,.1455,.9815,0,0,.3874,0,1)},
        {frame: 153, value: _M(.9922,.0084,.1245,0,.0102,.989,-.1478,0,-.1244,.1479,.9812,0,0,.3874,0,1)},
        {frame: 154, value: _M(.9922,.0094,.1245,0,.0095,.9886,-.1505,0,-.1245,.1505,.9807,0,0,.3874,0,1)},
        {frame: 155, value: _M(.9922,.0105,.1245,0,.0088,.9881,-.1534,0,-.1246,.1533,.9803,0,0,.3874,0,1)},
        {frame: 156, value: _M(.9922,.0116,.1244,0,.0081,.9876,-.1566,0,-.1247,.1563,.9798,0,0,.3874,0,1)},
        {frame: 157, value: _M(.9921,.0128,.1244,0,.0073,.9871,-.1599,0,-.1249,.1595,.9793,0,0,.3874,0,1)},
        {frame: 158, value: _M(.9921,.0141,.1244,0,.0064,.9866,-.1633,0,-.125,.1628,.9787,0,0,.3874,0,1)},
        {frame: 159, value: _M(.9921,.0154,.1243,0,.0056,.986,-.1667,0,-.1251,.1661,.9781,0,0,.3874,0,1)},
        {frame: 160, value: _M(.9921,.0166,.1243,0,.0048,.9854,-.1701,0,-.1253,.1694,.9776,0,0,.3874,0,1)},
        {frame: 161, value: _M(.9921,.0178,.1242,0,.004,.9848,-.1734,0,-.1254,.1725,.977,0,0,.3874,0,1)},
        {frame: 162, value: _M(.9921,.019,.1241,0,.0032,.9843,-.1765,0,-.1255,.1755,.9764,0,0,.3874,0,1)},
        {frame: 163, value: _M(.9921,.02,.1241,0,.0026,.9838,-.1793,0,-.1257,.1782,.9759,0,0,.3874,0,1)},
        {frame: 164, value: _M(.9921,.021,.124,0,.0019,.9833,-.1819,0,-.1258,.1807,.9755,0,0,.3874,0,1)},
        {frame: 165, value: _M(.992,.0218,.124,0,.0014,.9829,-.184,0,-.1259,.1828,.9751,0,0,.3874,0,1)},
        {frame: 166, value: _M(.992,.0224,.124,0,.001,.9826,-.1858,0,-.126,.1845,.9747,0,0,.3874,0,1)},
        {frame: 167, value: _M(.992,.0229,.1239,0,.0007,.9823,-.1872,0,-.126,.1858,.9745,0,0,.3874,0,1)},
        {frame: 168, value: _M(.992,.0233,.1239,0,.0004,.9821,-.1882,0,-.1261,.1867,.9743,0,0,.3874,0,1)},
        {frame: 169, value: _M(.992,.0235,.1239,0,.0003,.982,-.1887,0,-.1261,.1873,.9742,0,0,.3874,0,1)},
        {frame: 170, value: _M(.992,.0236,.1239,0,.0002,.982,-.1889,0,-.1261,.1874,.9741,0,0,.3874,0,1)},
        {frame: 171, value: _M(.992,.0235,.1239,0,.0003,.982,-.1888,0,-.1261,.1873,.9742,0,0,.3874,0,1)},
        {frame: 172, value: _M(.992,.0234,.1239,0,.0004,.9821,-.1883,0,-.1261,.1868,.9743,0,0,.3874,0,1)},
        {frame: 173, value: _M(.992,.0231,.1239,0,.0006,.9823,-.1875,0,-.126,.1861,.9744,0,0,.3874,0,1)},
        {frame: 174, value: _M(.992,.0227,.1239,0,.0009,.9825,-.1864,0,-.126,.185,.9746,0,0,.3874,0,1)},
        {frame: 175, value: _M(.992,.0221,.124,0,.0012,.9827,-.185,0,-.1259,.1836,.9749,0,0,.3874,0,1)},
        {frame: 176, value: _M(.992,.0215,.124,0,.0016,.9831,-.1832,0,-.1258,.182,.9752,0,0,.3874,0,1)},
        {frame: 177, value: _M(.9921,.0207,.1241,0,.0021,.9834,-.1812,0,-.1258,.18,.9756,0,0,.3874,0,1)},
        {frame: 178, value: _M(.9921,.0199,.1241,0,.0027,.9839,-.1789,0,-.1257,.1778,.976,0,0,.3874,0,1)},
        {frame: 179, value: _M(.9921,.0189,.1241,0,.0033,.9843,-.1763,0,-.1255,.1753,.9765,0,0,.3874,0,1)},
        {frame: 180, value: _M(.9921,.0179,.1242,0,.004,.9848,-.1734,0,-.1254,.1726,.977,0,0,.3874,0,1)},
        {frame: 181, value: _M(.9921,.0167,.1243,0,.0047,.9854,-.1704,0,-.1253,.1696,.9775,0,0,.3874,0,1)},
        {frame: 182, value: _M(.9921,.0155,.1243,0,.0055,.9859,-.1672,0,-.1252,.1665,.9781,0,0,.3874,0,1)},
        {frame: 183, value: _M(.9921,.0143,.1244,0,.0063,.9865,-.1638,0,-.125,.1633,.9786,0,0,.3874,0,1)},
        {frame: 184, value: _M(.9921,.013,.1244,0,.0071,.987,-.1603,0,-.1249,.16,.9792,0,0,.3874,0,1)},
        {frame: 185, value: _M(.9922,.0117,.1244,0,.008,.9876,-.1568,0,-.1247,.1566,.9798,0,0,.3874,0,1)},
        {frame: 186, value: _M(.9922,.0104,.1245,0,.0088,.9881,-.1533,0,-.1246,.1532,.9803,0,0,.3874,0,1)},
        {frame: 187, value: _M(.9922,.0092,.1245,0,.0097,.9887,-.1498,0,-.1245,.1499,.9808,0,0,.3874,0,1)},
        {frame: 188, value: _M(.9922,.0079,.1245,0,.0105,.9892,-.1465,0,-.1244,.1466,.9813,0,0,.3874,0,1)},
        {frame: 189, value: _M(.9922,.0067,.1246,0,.0113,.9896,-.1432,0,-.1242,.1435,.9818,0,0,.3874,0,1)},
        {frame: 190, value: _M(.9922,.0056,.1246,0,.012,.9901,-.1402,0,-.1241,.1406,.9823,0,0,.3874,0,1)},
        {frame: 191, value: _M(.9922,.0045,.1246,0,.0127,.9904,-.1373,0,-.124,.1378,.9827,0,0,.3874,0,1)},
        {frame: 192, value: _M(.9922,.0036,.1246,0,.0133,.9908,-.1347,0,-.1239,.1353,.983,0,0,.3874,0,1)},
        {frame: 193, value: _M(.9922,.0027,.1246,0,.0139,.9911,-.1324,0,-.1239,.1331,.9833,0,0,.3874,0,1)},
        {frame: 194, value: _M(.9922,.002,.1246,0,.0144,.9914,-.1303,0,-.1238,.1311,.9836,0,0,.3874,0,1)},
        {frame: 195, value: _M(.9922,.0013,.1246,0,.0148,.9916,-.1286,0,-.1237,.1294,.9838,0,0,.3874,0,1)},
        {frame: 196, value: _M(.9922,.0008,.1246,0,.0152,.9918,-.1271,0,-.1237,.128,.984,0,0,.3874,0,1)},
        {frame: 197, value: _M(.9922,.0004,.1246,0,.0154,.9919,-.126,0,-.1237,.1269,.9842,0,0,.3874,0,1)},
        {frame: 198, value: _M(.9922,.0001,.1246,0,.0156,.992,-.1252,0,-.1236,.1262,.9843,0,0,.3874,0,1)},
        {frame: 199, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1247,0,-.1236,.1257,.9843,0,0,.3874,0,1)},
        {frame: 200, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)},
        {frame: 202, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("neck", skeleton,skeleton.bones[7], _M(.9465,.0409,-.3202,0,.0923,.9163,.3898,0,.3094,-.3985,.8634,0,0,.7808,.0062,1), _M(1,0,0,0,0,.9161,.401,0,0,-.401,.9161,0,0,.7808,.0062,1));
        bone.length = .3144;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 2, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 4, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 5, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 6, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 9, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 10, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 11, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 12, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 13, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 14, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 15, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 16, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 30, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 31, value: _M(.9667,-.0012,-.2559,0,.0818,.9489,.3048,0,.2424,-.3156,.9174,0,0,.7808,.0062,1)},
        {frame: 32, value: _M(.9795,.0013,-.2012,0,.0738,.9281,.3651,0,.1872,-.3724,.909,0,0,.7808,.0062,1)},
        {frame: 33, value: _M(.9884,.0025,-.1518,0,.0582,.9171,.3943,0,.1402,-.3986,.9064,0,0,.7808,.0062,1)},
        {frame: 34, value: _M(.9954,.0027,-.096,0,.0358,.9173,.3966,0,.0892,-.3982,.9129,0,0,.7808,.0062,1)},
        {frame: 35, value: _M(.9995,.0016,-.0314,0,.011,.9186,.3951,0,.0295,-.3953,.9181,0,0,.7809,.0062,1)},
        {frame: 36, value: _M(.9989,-.0013,.0462,0,-.0158,.9292,.3693,0,-.0434,-.3696,.9282,0,0,.7809,.0062,1)},
        {frame: 37, value: _M(.9922,-.0019,.1249,0,-.0396,.9437,.3285,0,-.1184,-.3309,.9362,0,0,.7808,.0062,1)},
        {frame: 38, value: _M(.9807,.0001,.1953,0,-.059,.9533,.2961,0,-.1862,-.3019,.935,0,0,.7809,.0062,1)},
        {frame: 39, value: _M(.9678,.0019,.2518,0,-.0744,.9575,.2787,0,-.2406,-.2885,.9268,0,0,.7809,.0062,1)},
        {frame: 40, value: _M(.9594,.0021,.2822,0,-.0834,.9575,.2763,0,-.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 41, value: _M(.9667,.0012,.2559,0,-.0819,.9488,.3052,0,-.2424,-.316,.9173,0,0,.7809,.0062,1)},
        {frame: 42, value: _M(.9795,-.0014,.2012,0,-.0739,.9277,.366,0,-.1872,-.3733,.9086,0,0,.7808,.0062,1)},
        {frame: 43, value: _M(.9884,-.0026,.1515,0,-.0582,.9167,.3954,0,-.14,-.3996,.9059,0,0,.7809,.0062,1)},
        {frame: 44, value: _M(.9954,-.0028,.0957,0,-.0357,.9171,.3972,0,-.0889,-.3988,.9127,0,0,.7809,.0062,1)},
        {frame: 45, value: _M(.9995,-.0015,.0314,0,-.011,.9198,.3922,0,-.0295,-.3924,.9193,0,0,.7809,.0062,1)},
        {frame: 46, value: _M(.999,.0013,-.0457,0,.0156,.9304,.3663,0,.043,-.3666,.9294,0,0,.7808,.0062,1)},
        {frame: 47, value: _M(.9922,.0019,-.1249,0,.0396,.9437,.3285,0,.1184,-.3309,.9362,0,0,.7808,.0062,1)},
        {frame: 48, value: _M(.9807,0,-.1954,0,.0591,.9533,.2963,0,.1863,-.3021,.9349,0,0,.7809,.0062,1)},
        {frame: 49, value: _M(.9678,-.0019,-.2518,0,.0744,.9575,.2787,0,.2406,-.2885,.9268,0,0,.7808,.0062,1)},
        {frame: 50, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 60, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 61, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 70, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 73, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 74, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 75, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 77, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 78, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 80, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 81, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 85, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 86, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 88, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 89, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 90, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 91, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 97, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 98, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 103, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 104, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 110, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 111, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 112, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 113, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 115, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 116, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 120, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 121, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 123, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 124, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 126, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 127, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 128, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 130, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 140, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 141, value: _M(.9465,.041,-.3202,0,.0912,.9176,.387,0,.3097,-.3955,.8647,0,0,.7809,.0062,1)},
        {frame: 142, value: _M(.9465,.0409,-.3202,0,.0923,.9163,.3898,0,.3094,-.3985,.8634,0,0,.7808,.0062,1)},
        {frame: 143, value: _M(.9465,.0407,-.3203,0,.0941,.9142,.3943,0,.3088,-.4033,.8614,0,0,.7809,.0062,1)},
        {frame: 144, value: _M(.9465,.0405,-.3203,0,.0965,.9113,.4003,0,.3081,-.4098,.8586,0,0,.7809,.0062,1)},
        {frame: 145, value: _M(.9465,.0402,-.3203,0,.0993,.9079,.4073,0,.3072,-.4173,.8553,0,0,.7809,.0062,1)},
        {frame: 146, value: _M(.9464,.0399,-.3204,0,.1023,.9042,.4147,0,.3062,-.4252,.8517,0,0,.7808,.0062,1)},
        {frame: 147, value: _M(.9464,.0396,-.3204,0,.105,.9007,.4216,0,.3053,-.4327,.8483,0,0,.7809,.0062,1)},
        {frame: 148, value: _M(.9464,.0394,-.3205,0,.1074,.8976,.4275,0,.3045,-.4391,.8453,0,0,.7808,.0062,1)},
        {frame: 149, value: _M(.9464,.0392,-.3205,0,.1092,.8953,.432,0,.3039,-.4438,.843,0,0,.7809,.0062,1)},
        {frame: 150, value: _M(.9464,.0391,-.3205,0,.1103,.8938,.4347,0,.3035,-.4467,.8416,0,0,.7809,.0062,1)},
        {frame: 151, value: _M(.9464,.0391,-.3205,0,.1106,.8933,.4356,0,.3034,-.4477,.8412,0,0,.7808,.0062,1)},
        {frame: 152, value: _M(.9464,.0391,-.3205,0,.1105,.8934,.4354,0,.3034,-.4475,.8413,0,0,.7808,.0062,1)},
        {frame: 153, value: _M(.9464,.0391,-.3205,0,.1103,.8938,.4347,0,.3035,-.4468,.8416,0,0,.7808,.0062,1)},
        {frame: 154, value: _M(.9464,.0391,-.3205,0,.1099,.8944,.4337,0,.3036,-.4456,.8421,0,0,.7809,.0062,1)},
        {frame: 155, value: _M(.9464,.0392,-.3205,0,.1093,.8952,.4322,0,.3038,-.444,.8429,0,0,.7808,.0062,1)},
        {frame: 156, value: _M(.9464,.0393,-.3205,0,.1085,.8962,.4302,0,.3041,-.4419,.8439,0,0,.7809,.0062,1)},
        {frame: 157, value: _M(.9464,.0394,-.3205,0,.1075,.8974,.4278,0,.3044,-.4394,.8451,0,0,.7809,.0062,1)},
        {frame: 158, value: _M(.9464,.0395,-.3204,0,.1064,.8989,.4251,0,.3048,-.4364,.8465,0,0,.7809,.0062,1)},
        {frame: 159, value: _M(.9464,.0396,-.3204,0,.1052,.9005,.422,0,.3053,-.4331,.8481,0,0,.7808,.0062,1)},
        {frame: 160, value: _M(.9464,.0397,-.3204,0,.1038,.9022,.4186,0,.3057,-.4294,.8498,0,0,.7809,.0062,1)},
        {frame: 161, value: _M(.9465,.0399,-.3204,0,.1024,.904,.415,0,.3062,-.4256,.8515,0,0,.7808,.0062,1)},
        {frame: 162, value: _M(.9465,.04,-.3204,0,.1009,.9059,.4113,0,.3067,-.4216,.8533,0,0,.7808,.0062,1)},
        {frame: 163, value: _M(.9465,.0402,-.3203,0,.0994,.9077,.4076,0,.3072,-.4176,.8551,0,0,.7808,.0062,1)},
        {frame: 164, value: _M(.9465,.0403,-.3203,0,.0979,.9095,.4039,0,.3076,-.4136,.8569,0,0,.7809,.0062,1)},
        {frame: 165, value: _M(.9465,.0405,-.3203,0,.0965,.9113,.4003,0,.3081,-.4098,.8586,0,0,.7809,.0062,1)},
        {frame: 166, value: _M(.9465,.0406,-.3203,0,.0952,.9129,.397,0,.3085,-.4062,.8601,0,0,.7809,.0062,1)},
        {frame: 167, value: _M(.9465,.0407,-.3203,0,.0939,.9144,.3938,0,.3089,-.4028,.8616,0,0,.7809,.0062,1)},
        {frame: 168, value: _M(.9465,.0408,-.3202,0,.0928,.9157,.3909,0,.3092,-.3997,.8629,0,0,.7808,.0062,1)},
        {frame: 169, value: _M(.9465,.0409,-.3202,0,.0918,.9169,.3884,0,.3095,-.3969,.8641,0,0,.7808,.0062,1)},
        {frame: 170, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 171, value: _M(.9465,.0411,-.3202,0,.09,.919,.3839,0,.31,-.3922,.8661,0,0,.7809,.0062,1)},
        {frame: 172, value: _M(.9465,.0412,-.3202,0,.0891,.92,.3817,0,.3103,-.3898,.8671,0,0,.7809,.0062,1)},
        {frame: 173, value: _M(.9465,.0413,-.3202,0,.0882,.921,.3794,0,.3106,-.3873,.8681,0,0,.7808,.0062,1)},
        {frame: 174, value: _M(.9465,.0414,-.3202,0,.0873,.9221,.3771,0,.3108,-.3848,.8691,0,0,.7809,.0062,1)},
        {frame: 175, value: _M(.9465,.0414,-.3202,0,.0863,.9231,.3747,0,.3111,-.3823,.8701,0,0,.7808,.0062,1)},
        {frame: 176, value: _M(.9465,.0415,-.3202,0,.0854,.9241,.3724,0,.3113,-.3798,.8711,0,0,.7808,.0062,1)},
        {frame: 177, value: _M(.9465,.0416,-.3202,0,.0845,.9252,.3701,0,.3116,-.3773,.8721,0,0,.7809,.0062,1)},
        {frame: 178, value: _M(.9464,.0417,-.3201,0,.0836,.9262,.3678,0,.3118,-.3748,.8731,0,0,.7808,.0062,1)},
        {frame: 179, value: _M(.9464,.0418,-.3201,0,.0827,.9271,.3655,0,.3121,-.3724,.874,0,0,.7809,.0062,1)},
        {frame: 180, value: _M(.9464,.0419,-.3201,0,.0819,.928,.3634,0,.3123,-.3702,.8749,0,0,.7809,.0062,1)},
        {frame: 181, value: _M(.9464,.042,-.3201,0,.0811,.9289,.3614,0,.3125,-.368,.8757,0,0,.7808,.0062,1)},
        {frame: 182, value: _M(.9464,.042,-.3201,0,.0803,.9297,.3596,0,.3127,-.366,.8765,0,0,.7808,.0062,1)},
        {frame: 183, value: _M(.9464,.0421,-.3201,0,.0797,.9304,.3579,0,.3129,-.3642,.8772,0,0,.7809,.0062,1)},
        {frame: 184, value: _M(.9464,.0422,-.3201,0,.0791,.931,.3564,0,.313,-.3627,.8778,0,0,.7808,.0062,1)},
        {frame: 185, value: _M(.9464,.0422,-.3201,0,.0786,.9315,.3552,0,.3132,-.3613,.8783,0,0,.7808,.0062,1)},
        {frame: 186, value: _M(.9464,.0422,-.3201,0,.0782,.9319,.3541,0,.3133,-.3602,.8787,0,0,.7808,.0062,1)},
        {frame: 187, value: _M(.9464,.0423,-.3201,0,.0778,.9323,.3532,0,.3133,-.3592,.8791,0,0,.7809,.0062,1)},
        {frame: 188, value: _M(.9464,.0423,-.3201,0,.0776,.9326,.3526,0,.3134,-.3585,.8793,0,0,.7809,.0062,1)},
        {frame: 189, value: _M(.9464,.0423,-.3201,0,.0774,.9327,.3521,0,.3135,-.3581,.8795,0,0,.7808,.0062,1)},
        {frame: 190, value: _M(.9464,.0423,-.3201,0,.0773,.9328,.3519,0,.3135,-.3578,.8796,0,0,.7808,.0062,1)},
        {frame: 191, value: _M(.9464,.0423,-.3201,0,.0773,.9329,.3518,0,.3135,-.3577,.8797,0,0,.7809,.0062,1)},
        {frame: 192, value: _M(.9464,.0423,-.3201,0,.0776,.9325,.3527,0,.3134,-.3587,.8793,0,0,.7808,.0062,1)},
        {frame: 193, value: _M(.9464,.0422,-.3201,0,.0787,.9313,.3556,0,.3131,-.3617,.8781,0,0,.7809,.0062,1)},
        {frame: 194, value: _M(.9464,.042,-.3201,0,.0805,.9294,.3601,0,.3126,-.3666,.8763,0,0,.7809,.0062,1)},
        {frame: 195, value: _M(.9465,.0418,-.3201,0,.0828,.927,.3659,0,.312,-.3728,.8739,0,0,.7809,.0062,1)},
        {frame: 196, value: _M(.9465,.0415,-.3202,0,.0853,.9243,.3721,0,.3114,-.3795,.8712,0,0,.7808,.0062,1)},
        {frame: 197, value: _M(.9465,.0413,-.3202,0,.0876,.9217,.3779,0,.3107,-.3857,.8687,0,0,.7809,.0062,1)},
        {frame: 198, value: _M(.9465,.0412,-.3202,0,.0894,.9197,.3824,0,.3102,-.3905,.8668,0,0,.7809,.0062,1)},
        {frame: 199, value: _M(.9465,.041,-.3202,0,.0905,.9184,.3851,0,.3099,-.3935,.8655,0,0,.7809,.0062,1)},
        {frame: 200, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 202, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("head", skeleton,skeleton.bones[8], _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1), _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1));
        bone.length = .4309;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 16, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 30, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 50, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 60, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 61, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 70, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 100, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 101, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 130, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 140, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 180, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 181, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 202, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.L", skeleton,skeleton.bones[7], _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1), _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1));
        bone.length = .465;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 8, value: _M(.1418,-.1397,.98,0,.9713,-.1713,-.165,0,.191,.9753,.1114,0,.0448,.6372,.1036,1)},
        {frame: 9, value: _M(.2232,-.1507,.963,0,.9489,-.1925,-.25,0,.223,.9697,.1001,0,.0448,.6372,.1036,1)},
        {frame: 10, value: _M(.2199,-.1503,.9639,0,.95,-.1916,-.2466,0,.2217,.9699,.1007,0,.0448,.6372,.1036,1)},
        {frame: 11, value: _M(.2055,-.1484,.9673,0,.9545,-.1879,-.2316,0,.2162,.9709,.103,0,.0448,.6372,.1036,1)},
        {frame: 12, value: _M(.179,-.1448,.9731,0,.9621,-.1811,-.204,0,.2058,.9727,.1069,0,.0448,.6372,.1036,1)},
        {frame: 13, value: _M(.1401,-.1394,.9803,0,.9717,-.1709,-.1632,0,.1903,.9754,.1115,0,.0448,.6372,.1036,1)},
        {frame: 14, value: _M(.0988,-.1335,.9861,0,.9798,-.1599,-.1198,0,.1736,.9781,.115,0,.0448,.6372,.1036,1)},
        {frame: 15, value: _M(.0694,-.1291,.9892,0,.9844,-.1518,-.0889,0,.1617,.9799,.1166,0,.0448,.6372,.1036,1)},
        {frame: 16, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 30, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 31, value: _M(-.1351,-.0959,.9862,0,.9717,-.2073,.1129,0,.1936,.9736,.1212,0,.0448,.6372,.1036,1)},
        {frame: 32, value: _M(-.1645,-.0907,.9822,0,.9544,-.266,.1353,0,.249,.9597,.1303,0,.0448,.6372,.1036,1)},
        {frame: 33, value: _M(-.129,-.097,.9869,0,.9652,-.2405,.1026,0,.2274,.9658,.1246,0,.0448,.6372,.1036,1)},
        {frame: 34, value: _M(-.0384,-.1122,.9929,0,.9829,-.1831,.0173,0,.1799,.9767,.1174,0,.0448,.6372,.1036,1)},
        {frame: 35, value: _M(.0412,-.1248,.9913,0,.9867,-.151,-.06,0,.1572,.9806,.117,0,.0448,.6372,.1036,1)},
        {frame: 36, value: _M(.0922,-.1325,.9869,0,.9832,-.1445,-.1113,0,.1574,.9806,.117,0,.0448,.6372,.1036,1)},
        {frame: 37, value: _M(.1319,-.1383,.9816,0,.9785,-.1401,-.1512,0,.1584,.9804,.1168,0,.0448,.6372,.1036,1)},
        {frame: 38, value: _M(.1643,-.1428,.976,0,.9734,-.1366,-.1839,0,.1596,.9803,.1166,0,.0448,.6372,.1036,1)},
        {frame: 39, value: _M(.1923,-.1466,.9703,0,.9675,-.1372,-.2125,0,.1643,.9796,.1155,0,.0448,.6372,.1036,1)},
        {frame: 40, value: _M(.2221,-.1506,.9633,0,.958,-.1503,-.2444,0,.1816,.9771,.1109,0,.0448,.6372,.1036,1)},
        {frame: 41, value: _M(.2443,-.1535,.9575,0,.9354,-.2231,-.2744,0,.2557,.9626,.089,0,.0448,.6372,.1036,1)},
        {frame: 42, value: _M(.2533,-.1546,.955,0,.918,-.2732,-.2877,0,.3053,.9495,.0727,0,.0448,.6372,.1036,1)},
        {frame: 43, value: _M(.2235,-.1508,.963,0,.9343,-.2483,-.2557,0,.2777,.9569,.0854,0,.0448,.6372,.1036,1)},
        {frame: 44, value: _M(.1466,-.1403,.9792,0,.9666,-.19,-.172,0,.2102,.9717,.1078,0,.0448,.6372,.1036,1)},
        {frame: 45, value: _M(.0771,-.1303,.9885,0,.9838,-.1513,-.0967,0,.1621,.9799,.1165,0,.0448,.6372,.1036,1)},
        {frame: 46, value: _M(.0296,-.1231,.992,0,.9886,-.143,-.0473,0,.1477,.982,.1174,0,.0448,.6372,.1036,1)},
        {frame: 47, value: _M(-.0094,-.1169,.9931,0,.9896,-.1436,-.0075,0,.1435,.9827,.1171,0,.0448,.6372,.1036,1)},
        {frame: 48, value: _M(-.0415,-.1117,.9929,0,.9894,-.1428,.0253,0,.139,.9834,.1165,0,.0448,.6372,.1036,1)},
        {frame: 49, value: _M(-.071,-.1069,.9917,0,.988,-.1446,.0551,0,.1375,.9837,.1158,0,.0448,.6372,.1036,1)},
        {frame: 50, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 60, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 61, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 70, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 130, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 140, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 202, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.L", skeleton,skeleton.bones[10], _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1), _M(.1719,-.7324,-.6588,0,-.0799,.6562,-.7503,0,.9819,.1816,.0543,0,-.0268,.5347,-.0473,1));
        bone.length = .7926;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 1, value: _M(.187,-.7967,-.5747,0,-.0531,.5759,-.8158,0,.9809,.183,.0654,0,-.0268,.5347,-.0473,1)},
        {frame: 2, value: _M(.1846,-.7969,-.5752,0,-.0588,.5752,-.8159,0,.981,.1844,.0594,0,-.0268,.5347,-.0473,1)},
        {frame: 3, value: _M(.1795,-.7974,-.5762,0,-.0713,.5736,-.816,0,.9812,.1875,.0461,0,-.0268,.5347,-.0473,1)},
        {frame: 4, value: _M(.1718,-.7981,-.5775,0,-.0897,.5711,-.8159,0,.981,.192,.0265,0,-.0268,.5347,-.0473,1)},
        {frame: 5, value: _M(.1586,-.7993,-.5796,0,-.1215,.5667,-.8149,0,.9798,.1996,-.0073,0,-.0268,.5347,-.0473,1)},
        {frame: 6, value: _M(.1302,-.8024,-.5824,0,-.1887,.5566,-.8091,0,.9734,.2153,-.0789,0,-.0268,.5347,-.0473,1)},
        {frame: 7, value: _M(.0973,-.8066,-.583,0,-.2659,.5435,-.7962,0,.9591,.2324,-.1616,0,-.0268,.5347,-.0473,1)},
        {frame: 8, value: _M(.0597,-.8122,-.5804,0,-.3521,.5269,-.7736,0,.9341,.2505,-.2544,0,-.0268,.5347,-.0473,1)},
        {frame: 9, value: _M(.0399,-.8154,-.5775,0,-.397,.5174,-.7581,0,.917,.2595,-.3031,0,-.0268,.5347,-.0473,1)},
        {frame: 10, value: _M(.0429,-.8149,-.578,0,-.3902,.5189,-.7606,0,.9197,.2582,-.2958,0,-.0268,.5347,-.0473,1)},
        {frame: 11, value: _M(.0558,-.8128,-.5799,0,-.361,.5251,-.7707,0,.9309,.2523,-.2641,0,-.0268,.5347,-.0473,1)},
        {frame: 12, value: _M(.0798,-.8091,-.5822,0,-.3063,.536,-.7867,0,.9486,.2411,-.205,0,-.0268,.5347,-.0473,1)},
        {frame: 13, value: _M(.1152,-.8043,-.583,0,-.2241,.5507,-.804,0,.9677,.2233,-.1168,0,-.0268,.5347,-.0473,1)},
        {frame: 14, value: _M(.1525,-.8,-.5803,0,-.136,.5646,-.8141,0,.9789,.2031,-.0227,0,-.0268,.5347,-.0473,1)},
        {frame: 15, value: _M(.1787,-.7975,-.5763,0,-.0732,.5734,-.816,0,.9812,.188,.0441,0,-.0268,.5347,-.0473,1)},
        {frame: 16, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 30, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 31, value: _M(.164,-.8608,-.4819,0,-.0208,.4854,-.8741,0,.9862,.1533,.0617,0,-.0268,.5347,-.0473,1)},
        {frame: 32, value: _M(.1643,-.8537,-.4942,0,-.0391,.4949,-.868,0,.9856,.1619,.0479,0,-.0268,.5347,-.0473,1)},
        {frame: 33, value: _M(.1626,-.8457,-.5083,0,-.0408,.509,-.8598,0,.9859,.1605,.0482,0,-.0268,.5347,-.0473,1)},
        {frame: 34, value: _M(.1603,-.8356,-.5254,0,-.0416,.5261,-.8494,0,.9862,.158,.0496,0,-.0268,.5347,-.0473,1)},
        {frame: 35, value: _M(.1579,-.8243,-.5437,0,-.0441,.5441,-.8378,0,.9865,.1563,.0496,0,-.0268,.5347,-.0473,1)},
        {frame: 36, value: _M(.1557,-.8114,-.5634,0,-.0541,.5625,-.8251,0,.9863,.159,.0437,0,-.0268,.5347,-.0473,1)},
        {frame: 37, value: _M(.1535,-.798,-.5828,0,-.0683,.5798,-.8119,0,.9858,.1645,.0345,0,-.0268,.5347,-.0473,1)},
        {frame: 38, value: _M(.1511,-.7853,-.6003,0,-.0794,.5957,-.7993,0,.9853,.1684,.0276,0,-.0268,.5347,-.0473,1)},
        {frame: 39, value: _M(.149,-.7748,-.6144,0,-.0884,.6084,-.7887,0,.9849,.1718,.0222,0,-.0268,.5347,-.0473,1)},
        {frame: 40, value: _M(.1477,-.7689,-.622,0,-.0932,.6153,-.7828,0,.9846,.1736,.0192,0,-.0268,.5347,-.0473,1)},
        {frame: 41, value: _M(.1484,-.7724,-.6175,0,-.0904,.6113,-.7863,0,.9848,.1725,.0209,0,-.0268,.5347,-.0473,1)},
        {frame: 42, value: _M(.1502,-.781,-.6063,0,-.0832,.6011,-.7949,0,.9851,.1698,.0253,0,-.0268,.5347,-.0473,1)},
        {frame: 43, value: _M(.1521,-.7905,-.5933,0,-.0749,.5893,-.8044,0,.9855,.1668,.0304,0,-.0268,.5347,-.0473,1)},
        {frame: 44, value: _M(.1542,-.8019,-.5772,0,-.0648,.5747,-.8158,0,.9859,.1632,.0366,0,-.0268,.5347,-.0473,1)},
        {frame: 45, value: _M(.1563,-.8139,-.5595,0,-.0539,.5586,-.8277,0,.9862,.1595,.0435,0,-.0268,.5347,-.0473,1)},
        {frame: 46, value: _M(.1583,-.8268,-.5398,0,-.0418,.5406,-.8402,0,.9865,.1556,.0511,0,-.0268,.5347,-.0473,1)},
        {frame: 47, value: _M(.16,-.8392,-.5197,0,-.0295,.5221,-.8523,0,.9867,.1517,.0588,0,-.0268,.5347,-.0473,1)},
        {frame: 48, value: _M(.1614,-.8503,-.5009,0,-.0183,.5049,-.863,0,.9867,.1484,.066,0,-.0268,.5347,-.0473,1)},
        {frame: 49, value: _M(.1623,-.859,-.4856,0,-.0091,.4908,-.8712,0,.9867,.1458,.0718,0,-.0268,.5347,-.0473,1)},
        {frame: 50, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 60, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 61, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 70, value: _M(.1834,-.8775,-.4432,0,-.0545,.4411,-.8958,0,.9815,.1884,.0331,0,-.0268,.5347,-.0473,1)},
        {frame: 71, value: _M(.1834,-.8775,-.4432,0,-.0546,.441,-.8958,0,.9815,.1885,.0329,0,-.0268,.5347,-.0473,1)},
        {frame: 72, value: _M(.1832,-.8775,-.4432,0,-.0551,.441,-.8958,0,.9815,.1885,.0325,0,-.0268,.5347,-.0473,1)},
        {frame: 73, value: _M(.183,-.8775,-.4433,0,-.0558,.4409,-.8958,0,.9815,.1887,.0318,0,-.0268,.5347,-.0473,1)},
        {frame: 74, value: _M(.1827,-.8775,-.4434,0,-.0568,.4408,-.8958,0,.9815,.1888,.0307,0,-.0268,.5347,-.0473,1)},
        {frame: 75, value: _M(.1823,-.8775,-.4435,0,-.058,.4407,-.8958,0,.9815,.189,.0294,0,-.0268,.5347,-.0473,1)},
        {frame: 76, value: _M(.1818,-.8776,-.4436,0,-.0596,.4405,-.8958,0,.9815,.1893,.0278,0,-.0268,.5347,-.0473,1)},
        {frame: 77, value: _M(.1812,-.8776,-.4438,0,-.0615,.4403,-.8958,0,.9815,.1896,.0259,0,-.0268,.5347,-.0473,1)},
        {frame: 78, value: _M(.1806,-.8777,-.444,0,-.0636,.4401,-.8957,0,.9815,.19,.0237,0,-.0268,.5347,-.0473,1)},
        {frame: 79, value: _M(.1798,-.8777,-.4442,0,-.066,.4398,-.8957,0,.9815,.1903,.0212,0,-.0268,.5347,-.0473,1)},
        {frame: 80, value: _M(.179,-.8778,-.4444,0,-.0686,.4395,-.8956,0,.9815,.1908,.0184,0,-.0268,.5347,-.0473,1)},
        {frame: 81, value: _M(.1781,-.8778,-.4447,0,-.0715,.4392,-.8956,0,.9814,.1913,.0155,0,-.0268,.5347,-.0473,1)},
        {frame: 82, value: _M(.1771,-.8779,-.4449,0,-.0746,.4388,-.8955,0,.9814,.1918,.0123,0,-.0268,.5347,-.0473,1)},
        {frame: 83, value: _M(.1761,-.8779,-.4452,0,-.0779,.4384,-.8954,0,.9813,.1923,.0088,0,-.0268,.5347,-.0473,1)},
        {frame: 84, value: _M(.175,-.878,-.4455,0,-.0813,.438,-.8953,0,.9812,.1929,.0052,0,-.0268,.5347,-.0473,1)},
        {frame: 85, value: _M(.1738,-.8781,-.4458,0,-.0849,.4376,-.8951,0,.9811,.1934,.0015,0,-.0268,.5347,-.0473,1)},
        {frame: 86, value: _M(.1726,-.8782,-.4461,0,-.0886,.4372,-.895,0,.981,.1941,-.0024,0,-.0268,.5347,-.0473,1)},
        {frame: 87, value: _M(.1714,-.8783,-.4464,0,-.0924,.4368,-.8948,0,.9808,.1947,-.0063,0,-.0268,.5347,-.0473,1)},
        {frame: 88, value: _M(.1702,-.8783,-.4467,0,-.0963,.4363,-.8946,0,.9807,.1953,-.0103,0,-.0268,.5347,-.0473,1)},
        {frame: 89, value: _M(.169,-.8784,-.447,0,-.1002,.4359,-.8944,0,.9805,.1959,-.0144,0,-.0268,.5347,-.0473,1)},
        {frame: 90, value: _M(.1677,-.8785,-.4473,0,-.104,.4354,-.8942,0,.9803,.1965,-.0184,0,-.0268,.5347,-.0473,1)},
        {frame: 91, value: _M(.1665,-.8786,-.4476,0,-.1078,.435,-.894,0,.9801,.1971,-.0223,0,-.0268,.5347,-.0473,1)},
        {frame: 92, value: _M(.1654,-.8787,-.4478,0,-.1116,.4345,-.8937,0,.9799,.1977,-.0262,0,-.0268,.5347,-.0473,1)},
        {frame: 93, value: _M(.1642,-.8788,-.4481,0,-.1152,.4341,-.8935,0,.9797,.1983,-.0299,0,-.0268,.5347,-.0473,1)},
        {frame: 94, value: _M(.1631,-.8789,-.4483,0,-.1186,.4337,-.8932,0,.9795,.1989,-.0335,0,-.0268,.5347,-.0473,1)},
        {frame: 95, value: _M(.162,-.8789,-.4486,0,-.1219,.4333,-.893,0,.9792,.1994,-.0369,0,-.0268,.5347,-.0473,1)},
        {frame: 96, value: _M(.1611,-.879,-.4488,0,-.125,.4329,-.8927,0,.979,.1999,-.0401,0,-.0268,.5347,-.0473,1)},
        {frame: 97, value: _M(.1601,-.8791,-.449,0,-.1278,.4325,-.8925,0,.9788,.2003,-.0431,0,-.0268,.5347,-.0473,1)},
        {frame: 98, value: _M(.1593,-.8791,-.4491,0,-.1304,.4322,-.8923,0,.9786,.2007,-.0458,0,-.0268,.5347,-.0473,1)},
        {frame: 99, value: _M(.1585,-.8792,-.4493,0,-.1328,.4319,-.8921,0,.9784,.2011,-.0483,0,-.0268,.5347,-.0473,1)},
        {frame: 100, value: _M(.1579,-.8793,-.4494,0,-.1349,.4317,-.8919,0,.9782,.2014,-.0505,0,-.0268,.5347,-.0473,1)},
        {frame: 101, value: _M(.1573,-.8793,-.4496,0,-.1368,.4314,-.8917,0,.978,.2017,-.0524,0,-.0268,.5347,-.0473,1)},
        {frame: 102, value: _M(.1568,-.8793,-.4497,0,-.1383,.4313,-.8916,0,.9779,.202,-.054,0,-.0268,.5347,-.0473,1)},
        {frame: 103, value: _M(.1564,-.8794,-.4497,0,-.1396,.4311,-.8914,0,.9778,.2022,-.0554,0,-.0268,.5347,-.0473,1)},
        {frame: 104, value: _M(.156,-.8794,-.4498,0,-.1406,.431,-.8913,0,.9777,.2023,-.0564,0,-.0268,.5347,-.0473,1)},
        {frame: 105, value: _M(.1558,-.8794,-.4498,0,-.1413,.4309,-.8913,0,.9776,.2024,-.0571,0,-.0268,.5347,-.0473,1)},
        {frame: 106, value: _M(.1557,-.8794,-.4499,0,-.1417,.4308,-.8912,0,.9776,.2025,-.0576,0,-.0268,.5347,-.0473,1)},
        {frame: 107, value: _M(.1556,-.8794,-.4499,0,-.1419,.4308,-.8912,0,.9776,.2025,-.0577,0,-.0268,.5347,-.0473,1)},
        {frame: 108, value: _M(.1557,-.8794,-.4499,0,-.1415,.4309,-.8913,0,.9776,.2025,-.0573,0,-.0268,.5347,-.0473,1)},
        {frame: 109, value: _M(.1561,-.8794,-.4498,0,-.1404,.431,-.8914,0,.9777,.2023,-.0562,0,-.0268,.5347,-.0473,1)},
        {frame: 110, value: _M(.1567,-.8793,-.4497,0,-.1386,.4312,-.8915,0,.9779,.202,-.0543,0,-.0268,.5347,-.0473,1)},
        {frame: 111, value: _M(.1575,-.8793,-.4495,0,-.136,.4315,-.8918,0,.9781,.2016,-.0516,0,-.0268,.5347,-.0473,1)},
        {frame: 112, value: _M(.1586,-.8792,-.4493,0,-.1327,.4319,-.8921,0,.9784,.2011,-.0482,0,-.0268,.5347,-.0473,1)},
        {frame: 113, value: _M(.1598,-.8791,-.449,0,-.1288,.4324,-.8924,0,.9787,.2005,-.0441,0,-.0268,.5347,-.0473,1)},
        {frame: 114, value: _M(.1613,-.879,-.4487,0,-.1242,.433,-.8928,0,.9791,.1997,-.0393,0,-.0268,.5347,-.0473,1)},
        {frame: 115, value: _M(.163,-.8789,-.4484,0,-.119,.4336,-.8932,0,.9794,.1989,-.034,0,-.0268,.5347,-.0473,1)},
        {frame: 116, value: _M(.1647,-.8787,-.448,0,-.1135,.4343,-.8936,0,.9798,.198,-.0281,0,-.0268,.5347,-.0473,1)},
        {frame: 117, value: _M(.1666,-.8786,-.4475,0,-.1075,.435,-.894,0,.9801,.1971,-.022,0,-.0268,.5347,-.0473,1)},
        {frame: 118, value: _M(.1686,-.8785,-.4471,0,-.1014,.4357,-.8944,0,.9805,.1961,-.0156,0,-.0268,.5347,-.0473,1)},
        {frame: 119, value: _M(.1706,-.8783,-.4466,0,-.0951,.4365,-.8947,0,.9807,.1951,-.0091,0,-.0268,.5347,-.0473,1)},
        {frame: 120, value: _M(.1725,-.8782,-.4461,0,-.089,.4372,-.895,0,.981,.1941,-.0027,0,-.0268,.5347,-.0473,1)},
        {frame: 121, value: _M(.1744,-.8781,-.4456,0,-.083,.4379,-.8952,0,.9812,.1931,.0035,0,-.0268,.5347,-.0473,1)},
        {frame: 122, value: _M(.1762,-.8779,-.4452,0,-.0774,.4385,-.8954,0,.9813,.1922,.0093,0,-.0268,.5347,-.0473,1)},
        {frame: 123, value: _M(.1778,-.8778,-.4447,0,-.0723,.4391,-.8955,0,.9814,.1914,.0146,0,-.0268,.5347,-.0473,1)},
        {frame: 124, value: _M(.1793,-.8777,-.4443,0,-.0677,.4396,-.8956,0,.9815,.1906,.0194,0,-.0268,.5347,-.0473,1)},
        {frame: 125, value: _M(.1805,-.8777,-.444,0,-.0637,.44,-.8957,0,.9815,.19,.0236,0,-.0268,.5347,-.0473,1)},
        {frame: 126, value: _M(.1816,-.8776,-.4437,0,-.0604,.4404,-.8958,0,.9815,.1894,.027,0,-.0268,.5347,-.0473,1)},
        {frame: 127, value: _M(.1824,-.8775,-.4435,0,-.0578,.4407,-.8958,0,.9815,.189,.0296,0,-.0268,.5347,-.0473,1)},
        {frame: 128, value: _M(.1829,-.8775,-.4433,0,-.056,.4409,-.8958,0,.9815,.1887,.0316,0,-.0268,.5347,-.0473,1)},
        {frame: 129, value: _M(.1833,-.8775,-.4432,0,-.0549,.441,-.8958,0,.9815,.1885,.0327,0,-.0268,.5347,-.0473,1)},
        {frame: 130, value: _M(.1834,-.8775,-.4432,0,-.0545,.4411,-.8958,0,.9815,.1884,.0331,0,-.0268,.5347,-.0473,1)},
        {frame: 140, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 202, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.L", skeleton,skeleton.bones[11], _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1), _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1));
        bone.length = .6211;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 1, value: _M(.9403,-.1532,-.3038,0,.266,.8878,.3755,0,.2122,-.4339,.8756,0,0,.7926,0,1)},
        {frame: 2, value: _M(.9408,-.1523,-.3029,0,.2656,.8864,.3792,0,.2108,-.4372,.8743,0,0,.7926,0,1)},
        {frame: 3, value: _M(.9417,-.1504,-.301,0,.2649,.8831,.3874,0,.2075,-.4445,.8714,0,0,.7926,0,1)},
        {frame: 4, value: _M(.9431,-.1476,-.298,0,.2636,.878,.3994,0,.2027,-.4553,.867,0,0,.7926,0,1)},
        {frame: 5, value: _M(.9454,-.1428,-.2929,0,.2614,.8691,.42,0,.1945,-.4737,.859,0,0,.7926,0,1)},
        {frame: 6, value: _M(.9503,-.1331,-.2816,0,.2561,.8486,.463,0,.1773,-.512,.8405,0,0,.7926,0,1)},
        {frame: 7, value: _M(.9557,-.1225,-.2678,0,.2488,.8225,.5115,0,.1576,-.5554,.8165,0,0,.7926,0,1)},
        {frame: 8, value: _M(.9615,-.1113,-.2512,0,.239,.7896,.5651,0,.1355,-.6034,.7858,0,0,.7926,0,1)},
        {frame: 9, value: _M(.9645,-.1057,-.242,0,.2332,.7707,.5929,0,.1239,-.6283,.768,0,0,.7926,0,1)},
        {frame: 10, value: _M(.9641,-.1065,-.2434,0,.2341,.7737,.5887,0,.1256,-.6246,.7708,0,0,.7926,0,1)},
        {frame: 11, value: _M(.9621,-.1102,-.2494,0,.2379,.786,.5706,0,.1332,-.6084,.7824,0,0,.7926,0,1)},
        {frame: 12, value: _M(.9584,-.1172,-.2602,0,.2444,.8076,.5367,0,.1472,-.578,.8027,0,0,.7926,0,1)},
        {frame: 13, value: _M(.9528,-.1282,-.2754,0,.2529,.837,.4853,0,.1683,-.532,.8298,0,0,.7926,0,1)},
        {frame: 14, value: _M(.9465,-.1407,-.2905,0,.2603,.8648,.4294,0,.1908,-.482,.8551,0,0,.7926,0,1)},
        {frame: 15, value: _M(.9418,-.1501,-.3007,0,.2647,.8825,.3886,0,.207,-.4456,.871,0,0,.7926,0,1)},
        {frame: 16, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 30, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 31, value: _M(.9333,.1787,-.3114,0,.322,-.0331,.9462,0,.1588,-.9834,-.0884,0,0,.7926,0,1)},
        {frame: 32, value: _M(.901,.2422,-.3598,0,.3817,-.0489,.923,0,.206,-.969,-.1365,0,0,.7926,0,1)},
        {frame: 33, value: _M(.9108,.1929,-.365,0,.3687,.0177,.9294,0,.1858,-.9811,-.055,0,0,.7926,0,1)},
        {frame: 34, value: _M(.9389,.0821,-.3342,0,.3239,.1174,.9388,0,.1163,-.9897,.0836,0,0,.7926,0,1)},
        {frame: 35, value: _M(.9513,-.0033,-.3083,0,.298,.2657,.9168,0,.0789,-.9641,.2537,0,0,.7926,0,1)},
        {frame: 36, value: _M(.9511,-.0544,-.3041,0,.2874,.5166,.8065,0,.1132,-.8545,.507,0,0,.7926,0,1)},
        {frame: 37, value: _M(.9487,-.0923,-.3023,0,.272,.7253,.6324,0,.1609,-.6822,.7133,0,0,.7926,0,1)},
        {frame: 38, value: _M(.9466,-.1226,-.2983,0,.2712,.8032,.5305,0,.1745,-.583,.7935,0,0,.7926,0,1)},
        {frame: 39, value: _M(.9428,-.1431,-.301,0,.2753,.8434,.4614,0,.1879,-.5179,.8346,0,0,.7926,0,1)},
        {frame: 40, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 41, value: _M(.9365,-.1123,-.3322,0,.2643,.8488,.458,0,.2305,-.5167,.8245,0,0,.7926,0,1)},
        {frame: 42, value: _M(.9337,-.0582,-.3533,0,.2552,.8003,.5426,0,.2512,-.5968,.7621,0,0,.7926,0,1)},
        {frame: 43, value: _M(.9373,-.0447,-.3456,0,.2625,.743,.6157,0,.2292,-.6678,.7081,0,0,.7926,0,1)},
        {frame: 44, value: _M(.94,-.0396,-.3389,0,.2761,.6719,.6872,0,.2005,-.7396,.6425,0,0,.7926,0,1)},
        {frame: 45, value: _M(.9438,-.0296,-.3292,0,.2838,.5828,.7615,0,.1693,-.8121,.5584,0,0,.7926,0,1)},
        {frame: 46, value: _M(.9505,-.0128,-.3106,0,.2812,.4614,.8415,0,.1326,-.8871,.4421,0,0,.7926,0,1)},
        {frame: 47, value: _M(.9568,.0084,-.2906,0,.2718,.3294,.9042,0,.1033,-.9442,.3129,0,0,.7926,0,1)},
        {frame: 48, value: _M(.9611,.0319,-.2742,0,.2602,.2271,.9385,0,.0922,-.9734,.21,0,0,.7926,0,1)},
        {frame: 49, value: _M(.9618,.0651,-.2661,0,.2565,.1271,.9582,0,.0962,-.9897,.1056,0,0,.7926,0,1)},
        {frame: 50, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 60, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 61, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 70, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 130, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 140, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 202, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.L", skeleton,skeleton.bones[12], _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1), _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1));
        bone.length = .2494;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 16, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 30, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 31, value: _M(.2216,-.0752,-.9722,0,.0375,.9969,-.0685,0,.9744,-.0213,.2237,0,0,.6211,0,1)},
        {frame: 32, value: _M(.2373,-.0644,-.9693,0,.0544,.9971,-.0529,0,.9699,-.0401,.2401,0,0,.6211,0,1)},
        {frame: 33, value: _M(.2553,-.0525,-.9654,0,.0732,.9967,-.0348,0,.9641,-.0618,.2583,0,0,.6211,0,1)},
        {frame: 34, value: _M(.2774,-.0384,-.96,0,.0958,.9953,-.0122,0,.956,-.0886,.2798,0,0,.6211,0,1)},
        {frame: 35, value: _M(.3017,-.0239,-.9531,0,.1196,.9927,.013,0,.9459,-.118,.3024,0,0,.6211,0,1)},
        {frame: 36, value: _M(.3285,-.0088,-.9444,0,.145,.9886,.0413,0,.9333,-.1505,.3261,0,0,.6211,0,1)},
        {frame: 37, value: _M(.3556,.0055,-.9346,0,.1695,.983,.0702,0,.9191,-.1834,.3486,0,0,.6211,0,1)},
        {frame: 38, value: _M(.3804,.0176,-.9246,0,.191,.9768,.0972,0,.9049,-.2136,.3682,0,0,.6211,0,1)},
        {frame: 39, value: _M(.4007,.0269,-.9158,0,.2079,.9708,.1195,0,.8923,-.2383,.3834,0,0,.6211,0,1)},
        {frame: 40, value: _M(.4117,.0318,-.9108,0,.2169,.9673,.1318,0,.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 41, value: _M(.4052,.0289,-.9138,0,.2116,.9694,.1245,0,.8894,-.2438,.3867,0,0,.6211,0,1)},
        {frame: 42, value: _M(.3889,.0216,-.921,0,.1982,.9744,.1065,0,.8997,-.224,.3747,0,0,.6211,0,1)},
        {frame: 43, value: _M(.3704,.0128,-.9288,0,.1824,.9794,.0862,0,.9108,-.2013,.3604,0,0,.6211,0,1)},
        {frame: 44, value: _M(.3477,.0014,-.9376,0,.1625,.9848,.0618,0,.9234,-.1738,.3422,0,0,.6211,0,1)},
        {frame: 45, value: _M(.3233,-.0117,-.9462,0,.1401,.9895,.0357,0,.9359,-.1441,.3215,0,0,.6211,0,1)},
        {frame: 46, value: _M(.2965,-.0269,-.9547,0,.1146,.9934,.0076,0,.9481,-.1117,.2976,0,0,.6211,0,1)},
        {frame: 47, value: _M(.2697,-.0432,-.962,0,.0881,.9959,-.02,0,.9589,-.0793,.2725,0,0,.6211,0,1)},
        {frame: 48, value: _M(.2455,-.0589,-.9676,0,.063,.997,-.0447,0,.9674,-.05,.2484,0,0,.6211,0,1)},
        {frame: 49, value: _M(.226,-.0721,-.9715,0,.0422,.997,-.0642,0,.9732,-.0265,.2283,0,0,.6211,0,1)},
        {frame: 50, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 60, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 61, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 70, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 130, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 140, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 202, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone1.L", skeleton,skeleton.bones[13], _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1), _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1));
        bone.length = .1634;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 16, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 30, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 31, value: _M(-.0156,.6839,-.7294,0,-.0923,.7254,.6821,0,.9956,.078,.0518,0,0,.2494,0,1)},
        {frame: 32, value: _M(-.0144,.6668,-.7451,0,-.0797,.742,.6656,0,.9967,.069,.0425,0,0,.2494,0,1)},
        {frame: 33, value: _M(-.0134,.6469,-.7625,0,-.0654,.7603,.6462,0,.9978,.0585,.0321,0,0,.2494,0,1)},
        {frame: 34, value: _M(-.0126,.6219,-.783,0,-.0478,.7818,.6218,0,.9988,.0453,.0199,0,0,.2494,0,1)},
        {frame: 35, value: _M(-.0125,.5941,-.8043,0,-.0287,.8038,.5942,0,.9995,.0305,.007,0,0,.2494,0,1)},
        {frame: 36, value: _M(-.013,.5626,-.8266,0,-.0076,.8266,.5627,0,.9999,.0137,-.0065,0,0,.2494,0,1)},
        {frame: 37, value: _M(-.0145,.5302,-.8477,0,.0134,.8478,.5301,0,.9998,-.0037,-.0194,0,0,.2494,0,1)},
        {frame: 38, value: _M(-.0165,.4999,-.8659,0,.0327,.8659,.4992,0,.9993,-.0201,-.0306,0,0,.2494,0,1)},
        {frame: 39, value: _M(-.0186,.4747,-.8799,0,.0483,.8795,.4735,0,.9987,-.0337,-.0393,0,0,.2494,0,1)},
        {frame: 40, value: _M(-.0199,.4608,-.8873,0,.0567,.8865,.4592,0,.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 41, value: _M(-.0191,.469,-.883,0,.0517,.8824,.4676,0,.9985,-.0367,-.0411,0,0,.2494,0,1)},
        {frame: 42, value: _M(-.0173,.4894,-.8719,0,.0392,.8717,.4885,0,.9991,-.0257,-.0343,0,0,.2494,0,1)},
        {frame: 43, value: _M(-.0156,.5122,-.8587,0,.0249,.8587,.5118,0,.9996,-.0134,-.0261,0,0,.2494,0,1)},
        {frame: 44, value: _M(-.014,.5397,-.8417,0,.0073,.8418,.5397,0,.9999,.0014,-.0157,0,0,.2494,0,1)},
        {frame: 45, value: _M(-.0129,.5689,-.8223,0,-.0118,.8223,.569,0,.9998,.017,-.0039,0,0,.2494,0,1)},
        {frame: 46, value: _M(-.0124,.6001,-.7998,0,-.0328,.7992,.6002,0,.9994,.0337,.0097,0,0,.2494,0,1)},
        {frame: 47, value: _M(-.0128,.6307,-.776,0,-.0539,.7745,.6303,0,.9985,.0499,.0241,0,0,.2494,0,1)},
        {frame: 48, value: _M(-.0139,.6578,-.7531,0,-.0732,.7505,.6568,0,.9972,.0642,.0377,0,0,.2494,0,1)},
        {frame: 49, value: _M(-.0153,.6792,-.7338,0,-.0888,.7301,.6776,0,.9959,.0755,.0492,0,0,.2494,0,1)},
        {frame: 50, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 60, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 61, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 70, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 130, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 140, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 202, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone2.L", skeleton,skeleton.bones[14], _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1), _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1));
        bone.length = .1464;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 16, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 30, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 31, value: _M(.3242,.9458,-.0197,0,-.9314,.3155,-.1818,0,-.1657,.0772,.9831,0,0,.1634,0,1)},
        {frame: 32, value: _M(.3008,.9537,.0073,0,-.9409,.298,-.1608,0,-.1556,.0415,.987,0,0,.1634,0,1)},
        {frame: 33, value: _M(.2742,.9609,.0387,0,-.951,.277,-.1376,0,-.1429,.001,.9897,0,0,.1634,0,1)},
        {frame: 34, value: _M(.2421,.9671,.0779,0,-.9621,.2496,-.11,0,-.1258,-.0484,.9909,0,0,.1634,0,1)},
        {frame: 35, value: _M(.2075,.9706,.1216,0,-.9726,.2181,-.0811,0,-.1052,-.1014,.9893,0,0,.1634,0,1)},
        {frame: 36, value: _M(.1703,.9705,.1704,0,-.9821,.1813,-.051,0,-.0804,-.1587,.9841,0,0,.1634,0,1)},
        {frame: 37, value: _M(.1343,.9663,.2198,0,-.9895,.1427,-.0228,0,-.0534,-.2144,.9753,0,0,.1634,0,1)},
        {frame: 38, value: _M(.1024,.9587,.2652,0,-.9944,.1059,.0012,0,-.0269,-.2638,.9642,0,0,.1634,0,1)},
        {frame: 39, value: _M(.0773,.9501,.3023,0,-.997,.0749,.0195,0,-.0041,-.3029,.953,0,0,.1634,0,1)},
        {frame: 40, value: _M(.064,.9444,.3225,0,-.9979,.0577,.0289,0,.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 41, value: _M(.0718,.9478,.3106,0,-.9974,.0679,.0234,0,.0011,-.3115,.9503,0,0,.1634,0,1)},
        {frame: 42, value: _M(.0917,.9554,.2808,0,-.9956,.0929,.0091,0,-.0174,-.2804,.9597,0,0,.1634,0,1)},
        {frame: 43, value: _M(.1152,.9622,.2468,0,-.9926,.1209,-.0083,0,-.0378,-.244,.969,0,0,.1634,0,1)},
        {frame: 44, value: _M(.1447,.9679,.2053,0,-.9876,.1542,-.0308,0,-.0615,-.1983,.9782,0,0,.1634,0,1)},
        {frame: 45, value: _M(.1776,.9709,.1607,0,-.9804,.1887,-.0568,0,-.0855,-.1475,.9854,0,0,.1634,0,1)},
        {frame: 46, value: _M(.2148,.9702,.1122,0,-.9705,.2249,-.0871,0,-.1098,-.0902,.9899,0,0,.1634,0,1)},
        {frame: 47, value: _M(.2531,.9653,.0643,0,-.9584,.2592,-.1194,0,-.1319,-.0314,.9908,0,0,.1634,0,1)},
        {frame: 48, value: _M(.2886,.9572,.0216,0,-.9456,.2885,-.1501,0,-.1499,.0229,.9884,0,0,.1634,0,1)},
        {frame: 49, value: _M(.3177,.9481,-.0122,0,-.9341,.3107,-.1759,0,-.163,.0673,.9843,0,0,.1634,0,1)},
        {frame: 50, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 60, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 61, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 70, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 130, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 140, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 202, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.L", skeleton,skeleton.bones[12], _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1), _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1));
        bone.length = .1072;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 16, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 30, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 31, value: _M(.3885,-.0118,-.9214,0,.5668,.7914,.2288,0,.7265,-.6111,.3142,0,.1466,.7459,.1156,1)},
        {frame: 32, value: _M(.4061,-.0006,-.9138,0,.5763,.7762,.2556,0,.7092,-.6304,.3156,0,.1461,.7438,.1176,1)},
        {frame: 33, value: _M(.4261,.0116,-.9046,0,.5862,.7581,.2858,0,.6891,-.6521,.3162,0,.1457,.7415,.1199,1)},
        {frame: 34, value: _M(.4507,.0257,-.8923,0,.5969,.7346,.3226,0,.6638,-.678,.3158,0,.1451,.7387,.1227,1)},
        {frame: 35, value: _M(.4774,.0398,-.8778,0,.6067,.7077,.3621,0,.6356,-.7054,.3137,0,.1445,.7356,.1257,1)},
        {frame: 36, value: _M(.5068,.0541,-.8604,0,.6153,.6764,.4049,0,.6038,-.7346,.3095,0,.1438,.7322,.129,1)},
        {frame: 37, value: _M(.536,.0667,-.8416,0,.6216,.6434,.4469,0,.5713,-.7626,.3034,0,.1431,.7288,.1323,1)},
        {frame: 38, value: _M(.5624,.077,-.8233,0,.6253,.6119,.4844,0,.541,-.7872,.296,0,.1425,.7257,.1354,1)},
        {frame: 39, value: _M(.5838,.0845,-.8075,0,.6268,.5853,.5144,0,.516,-.8064,.2888,0,.142,.7232,.1379,1)},
        {frame: 40, value: _M(.5954,.0881,-.7986,0,.6271,.5705,.5305,0,.5023,-.8166,.2844,0,.1417,.7218,.1392,1)},
        {frame: 41, value: _M(.5886,.086,-.8039,0,.6269,.5792,.521,0,.5104,-.8106,.287,0,.1418,.7226,.1384,1)},
        {frame: 42, value: _M(.5715,.0803,-.8167,0,.626,.6008,.4971,0,.5306,-.7954,.2931,0,.1423,.7246,.1364,1)},
        {frame: 43, value: _M(.5518,.073,-.8308,0,.624,.6248,.4693,0,.5533,-.7774,.2992,0,.1427,.727,.1342,1)},
        {frame: 44, value: _M(.5275,.0632,-.8472,0,.62,.6532,.4347,0,.5808,-.7546,.3054,0,.1433,.7298,.1314,1)},
        {frame: 45, value: _M(.501,.0513,-.8639,0,.6138,.6827,.3965,0,.6101,-.7289,.3105,0,.1439,.7329,.1284,1)},
        {frame: 46, value: _M(.4717,.0369,-.881,0,.6048,.7135,.3537,0,.6417,-.6996,.3143,0,.1446,.7363,.1251,1)},
        {frame: 47, value: _M(.4422,.021,-.8967,0,.5933,.7429,.31,0,.6726,-.6691,.3161,0,.1453,.7397,.1217,1)},
        {frame: 48, value: _M(.4152,.0052,-.9097,0,.5808,.7681,.2695,0,.7002,-.6403,.3159,0,.1459,.7428,.1187,1)},
        {frame: 49, value: _M(.3934,-.0086,-.9193,0,.5694,.7874,.2363,0,.7218,-.6164,.3146,0,.1464,.7453,.1162,1)},
        {frame: 50, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 60, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 61, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 70, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 130, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 140, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 202, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone4.L", skeleton,skeleton.bones[16], _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1), _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1));
        bone.length = .0895;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 16, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 30, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 31, value: _M(-.2527,-.5406,-.8024,0,.0081,.8281,-.5605,0,.9675,-.1482,-.2049,0,0,.1072,0,1)},
        {frame: 32, value: _M(-.2523,-.5393,-.8034,0,.0032,.8298,-.558,0,.9676,-.1433,-.2077,0,0,.1072,0,1)},
        {frame: 33, value: _M(-.2519,-.5378,-.8046,0,-.0025,.8317,-.5552,0,.9678,-.1379,-.2108,0,0,.1072,0,1)},
        {frame: 34, value: _M(-.2513,-.5359,-.806,0,-.0093,.834,-.5516,0,.9679,-.1311,-.2146,0,0,.1072,0,1)},
        {frame: 35, value: _M(-.2508,-.5339,-.8075,0,-.0168,.8364,-.5478,0,.9679,-.1238,-.2187,0,0,.1072,0,1)},
        {frame: 36, value: _M(-.2502,-.5317,-.8092,0,-.0249,.839,-.5436,0,.9679,-.1158,-.2231,0,0,.1072,0,1)},
        {frame: 37, value: _M(-.2496,-.5294,-.8108,0,-.0332,.8415,-.5392,0,.9678,-.1077,-.2276,0,0,.1072,0,1)},
        {frame: 38, value: _M(-.2491,-.5273,-.8124,0,-.0407,.8437,-.5352,0,.9676,-.1002,-.2316,0,0,.1072,0,1)},
        {frame: 39, value: _M(-.2486,-.5256,-.8136,0,-.0468,.8455,-.5319,0,.9675,-.0941,-.2348,0,0,.1072,0,1)},
        {frame: 40, value: _M(-.2484,-.5247,-.8142,0,-.0502,.8464,-.5301,0,.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 41, value: _M(-.2486,-.5252,-.8139,0,-.0482,.8459,-.5312,0,.9674,-.0928,-.2356,0,0,.1072,0,1)},
        {frame: 42, value: _M(-.2489,-.5266,-.8129,0,-.0433,.8445,-.5338,0,.9676,-.0977,-.233,0,0,.1072,0,1)},
        {frame: 43, value: _M(-.2493,-.5282,-.8117,0,-.0376,.8428,-.5368,0,.9677,-.1033,-.23,0,0,.1072,0,1)},
        {frame: 44, value: _M(-.2497,-.5301,-.8104,0,-.0308,.8408,-.5405,0,.9678,-.11,-.2263,0,0,.1072,0,1)},
        {frame: 45, value: _M(-.2503,-.5321,-.8088,0,-.0233,.8385,-.5444,0,.9679,-.1174,-.2223,0,0,.1072,0,1)},
        {frame: 46, value: _M(-.2509,-.5343,-.8072,0,-.0152,.8359,-.5486,0,.9679,-.1254,-.2178,0,0,.1072,0,1)},
        {frame: 47, value: _M(-.2515,-.5366,-.8055,0,-.0069,.8332,-.5529,0,.9678,-.1335,-.2133,0,0,.1072,0,1)},
        {frame: 48, value: _M(-.2521,-.5386,-.804,0,.0006,.8307,-.5567,0,.9677,-.1408,-.2091,0,0,.1072,0,1)},
        {frame: 49, value: _M(-.2526,-.5402,-.8027,0,.0067,.8286,-.5598,0,.9675,-.1468,-.2057,0,0,.1072,0,1)},
        {frame: 50, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 60, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 61, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 70, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 130, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 140, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 202, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shield.bone", skeleton,skeleton.bones[12], _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1), _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1));
        bone.length = .4472;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 16, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 30, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 50, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 60, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 61, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 70, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 130, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 140, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 202, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.R", skeleton,skeleton.bones[7], _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1), _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1));
        bone.length = .465;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 8, value: _M(-.0279,.114,-.9931,0,-.9915,-.1295,.013,0,-.1272,.985,.1166,0,-.0448,.6372,.1036,1)},
        {frame: 9, value: _M(-.115,.0994,-.9884,0,-.9886,-.1086,.1041,0,-.097,.9891,.1107,0,-.0448,.6372,.1036,1)},
        {frame: 10, value: _M(-.1114,.1,-.9887,0,-.9889,-.1095,.1003,0,-.0982,.9889,.1111,0,-.0448,.6372,.1036,1)},
        {frame: 11, value: _M(-.0959,.1027,-.9901,0,-.99,-.1133,.0842,0,-.1035,.9882,.1125,0,-.0448,.6372,.1036,1)},
        {frame: 12, value: _M(-.0676,.1074,-.9919,0,-.9913,-.1202,.0546,0,-.1133,.9869,.1146,0,-.0448,.6372,.1036,1)},
        {frame: 13, value: _M(-.026,.1143,-.9931,0,-.9915,-.13,.0111,0,-.1278,.9849,.1167,0,-.0448,.6372,.1036,1)},
        {frame: 14, value: _M(.0178,.1212,-.9925,0,-.9895,-.1399,-.0348,0,-.1431,.9827,.1175,0,-.0448,.6372,.1036,1)},
        {frame: 15, value: _M(.0489,.126,-.9908,0,-.9869,-.1468,-.0674,0,-.1539,.9811,.1172,0,-.0448,.6372,.1036,1)},
        {frame: 16, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 30, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 31, value: _M(.2377,.1526,-.9593,0,-.9436,-.1982,-.2654,0,-.2307,.9682,.0969,0,-.0448,.6372,.1036,1)},
        {frame: 32, value: _M(.2533,.1546,-.955,0,-.918,-.2732,-.2877,0,-.3053,.9495,.0727,0,-.0448,.6372,.1036,1)},
        {frame: 33, value: _M(.2235,.1508,-.963,0,-.909,-.3242,-.2618,0,-.3517,.9339,.0646,0,-.0448,.6372,.1036,1)},
        {frame: 34, value: _M(.1466,.1403,-.9792,0,-.9097,-.3697,-.1892,0,-.3885,.9185,.0735,0,-.0448,.6372,.1036,1)},
        {frame: 35, value: _M(.0771,.1303,-.9885,0,-.9128,-.3895,-.1225,0,-.401,.9118,.0889,0,-.0448,.6372,.1036,1)},
        {frame: 36, value: _M(.0296,.1231,-.992,0,-.9312,-.3574,-.0722,0,-.3634,.9258,.104,0,-.0448,.6372,.1036,1)},
        {frame: 37, value: _M(-.0094,.1169,-.9931,0,-.9575,-.2874,-.0247,0,-.2884,.9506,.1147,0,-.0448,.6372,.1036,1)},
        {frame: 38, value: _M(-.0415,.1117,-.9929,0,-.9752,-.2208,.0159,0,-.2174,.9689,.1181,0,-.0448,.6372,.1036,1)},
        {frame: 39, value: _M(-.071,.1069,-.9917,0,-.9857,-.1599,.0533,0,-.1529,.9813,.1167,0,-.0448,.6372,.1036,1)},
        {frame: 40, value: _M(-.1055,.101,-.9893,0,-.9873,-.1293,.0921,0,-.1186,.9865,.1134,0,-.0448,.6372,.1036,1)},
        {frame: 41, value: _M(-.1444,.0943,-.985,0,-.9799,-.1522,.1291,0,-.1377,.9838,.1143,0,-.0448,.6372,.1036,1)},
        {frame: 42, value: _M(-.1645,.0907,-.9822,0,-.9727,-.1801,.1463,0,-.1637,.9794,.1179,0,-.0448,.6372,.1036,1)},
        {frame: 43, value: _M(-.129,.097,-.9869,0,-.9765,-.1856,.1094,0,-.1726,.9778,.1186,0,-.0448,.6372,.1036,1)},
        {frame: 44, value: _M(-.0384,.1122,-.9929,0,-.9837,-.1791,.0178,0,-.1758,.9774,.1173,0,-.0448,.6372,.1036,1)},
        {frame: 45, value: _M(.0412,.1248,-.9913,0,-.9832,-.1717,-.0625,0,-.178,.9772,.1157,0,-.0448,.6372,.1036,1)},
        {frame: 46, value: _M(.0922,.1325,-.9869,0,-.9792,-.1677,-.114,0,-.1806,.9769,.1143,0,-.0448,.6372,.1036,1)},
        {frame: 47, value: _M(.1319,.1383,-.9816,0,-.9745,-.1631,-.1539,0,-.1813,.9769,.1132,0,-.0448,.6372,.1036,1)},
        {frame: 48, value: _M(.1643,.1428,-.976,0,-.9698,-.1571,-.1863,0,-.18,.9772,.1127,0,-.0448,.6372,.1036,1)},
        {frame: 49, value: _M(.1923,.1466,-.9703,0,-.9649,-.1517,-.2142,0,-.1786,.9775,.1123,0,-.0448,.6372,.1036,1)},
        {frame: 50, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 60, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 61, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 70, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 130, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 140, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 202, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.R", skeleton,skeleton.bones[19], _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1), _M(.1719,.7324,.6588,0,.0799,.6562,-.7503,0,-.9819,.1816,.0543,0,.0268,.5347,-.0473,1));
        bone.length = .7926;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 1, value: _M(.1242,.7534,.6458,0,.1478,.6295,-.7628,0,-.9812,.1902,-.0331,0,.0268,.5347,-.0473,1)},
        {frame: 2, value: _M(.1412,.6147,.776,0,.0662,.7763,-.6269,0,-.9878,.1399,.0689,0,.0268,.5347,-.0473,1)},
        {frame: 3, value: _M(.1821,.4168,.8906,0,-.0268,.9075,-.4192,0,-.9829,.0525,.1764,0,.0268,.5347,-.0473,1)},
        {frame: 4, value: _M(.2227,.2654,.9381,0,-.0847,.9639,-.2526,0,-.9712,-.0232,.2371,0,.0268,.5347,-.0473,1)},
        {frame: 5, value: _M(.2405,.2059,.9485,0,-.1047,.977,-.1856,0,-.965,-.0547,.2566,0,.0268,.5347,-.0473,1)},
        {frame: 7, value: _M(.5318,.827,.1826,0,-.6329,.5313,-.5632,0,-.5628,.184,.8059,0,.0268,.5347,-.0473,1)},
        {frame: 8, value: _M(.4626,.862,.2073,0,-.5618,.4659,-.6837,0,-.6859,.1998,.6997,0,.0268,.5347,-.0473,1)},
        {frame: 9, value: _M(.3676,.8842,.2883,0,-.3947,.429,-.8125,0,-.8421,.1849,.5067,0,.0268,.5347,-.0473,1)},
        {frame: 10, value: _M(.3119,.8926,.3254,0,-.2873,.4151,-.8632,0,-.9056,.1758,.3859,0,.0268,.5347,-.0473,1)},
        {frame: 11, value: _M(.2737,.8907,.363,0,-.1972,.4213,-.8852,0,-.9414,.1707,.2909,0,.0268,.5347,-.0473,1)},
        {frame: 12, value: _M(.2365,.8786,.4149,0,-.099,.4465,-.8893,0,-.9666,.1692,.1926,0,.0268,.5347,-.0473,1)},
        {frame: 13, value: _M(.1959,.8552,.4799,0,.0079,.488,-.8728,0,-.9806,.1748,.0888,0,.0268,.5347,-.0473,1)},
        {frame: 14, value: _M(.1572,.826,.5413,0,.1008,.5318,-.8408,0,-.9824,.1867,.0003,0,.0268,.5347,-.0473,1)},
        {frame: 15, value: _M(.1307,.8031,.5814,0,.1584,.5619,-.8119,0,-.9787,.1982,-.0538,0,.0268,.5347,-.0473,1)},
        {frame: 16, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 30, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 31, value: _M(.1496,.7726,.6171,0,.13,.6033,-.7868,0,-.9802,.1979,-.0102,0,.0268,.5347,-.0473,1)},
        {frame: 32, value: _M(.1532,.7811,.6054,0,.1651,.5837,-.795,0,-.9743,.2217,-.0395,0,.0268,.5347,-.0473,1)},
        {frame: 33, value: _M(.1551,.7905,.5925,0,.143,.5755,-.8052,0,-.9775,.2097,-.0238,0,.0268,.5347,-.0473,1)},
        {frame: 34, value: _M(.1557,.8019,.5769,0,.0929,.5695,-.8167,0,-.9834,.1808,.0142,0,.0268,.5347,-.0473,1)},
        {frame: 35, value: _M(.1563,.8139,.5595,0,.0539,.5586,-.8277,0,-.9862,.1595,.0435,0,.0268,.5347,-.0473,1)},
        {frame: 36, value: _M(.158,.8268,.5399,0,.0379,.5413,-.84,0,-.9867,.1532,.0542,0,.0268,.5347,-.0473,1)},
        {frame: 37, value: _M(.16,.8392,.5197,0,.0295,.5221,-.8523,0,-.9867,.1517,.0588,0,.0268,.5347,-.0473,1)},
        {frame: 38, value: _M(.1614,.8503,.5009,0,.0183,.5049,-.863,0,-.9867,.1484,.066,0,.0268,.5347,-.0473,1)},
        {frame: 39, value: _M(.1623,.859,.4856,0,.0091,.4908,-.8712,0,-.9867,.1458,.0718,0,.0268,.5347,-.0473,1)},
        {frame: 40, value: _M(.1627,.8637,.4771,0,.0041,.4829,-.8757,0,-.9867,.1444,.0751,0,.0268,.5347,-.0473,1)},
        {frame: 41, value: _M(.1641,.8607,.4819,0,.0221,.4852,-.8742,0,-.9862,.1541,.0606,0,.0268,.5347,-.0473,1)},
        {frame: 42, value: _M(.1646,.8537,.4941,0,.0416,.4945,-.8682,0,-.9855,.1634,.0459,0,.0268,.5347,-.0473,1)},
        {frame: 43, value: _M(.1627,.8457,.5083,0,.0426,.5086,-.8599,0,-.9857,.1616,.0467,0,.0268,.5347,-.0473,1)},
        {frame: 44, value: _M(.1603,.8356,.5254,0,.0422,.526,-.8494,0,-.9862,.1584,.0491,0,.0268,.5347,-.0473,1)},
        {frame: 45, value: _M(.1579,.8243,.5437,0,.0441,.5441,-.8378,0,-.9865,.1563,.0496,0,.0268,.5347,-.0473,1)},
        {frame: 46, value: _M(.1557,.8114,.5633,0,.0541,.5624,-.8251,0,-.9863,.159,.0437,0,.0268,.5347,-.0473,1)},
        {frame: 47, value: _M(.1535,.798,.5828,0,.0683,.5798,-.8119,0,-.9858,.1645,.0345,0,.0268,.5347,-.0473,1)},
        {frame: 48, value: _M(.1511,.7853,.6004,0,.0794,.5957,-.7993,0,-.9853,.1684,.0276,0,.0268,.5347,-.0473,1)},
        {frame: 49, value: _M(.149,.7748,.6144,0,.0884,.6084,-.7887,0,-.9849,.1718,.0222,0,.0268,.5347,-.0473,1)},
        {frame: 50, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 60, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 61, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 70, value: _M(.1465,.8747,.4619,0,.1326,.4454,-.8855,0,-.9803,.191,-.0507,0,.0268,.5347,-.0473,1)},
        {frame: 71, value: _M(.1465,.8747,.462,0,.1327,.4454,-.8854,0,-.9803,.191,-.0509,0,.0268,.5347,-.0473,1)},
        {frame: 72, value: _M(.1463,.8747,.4621,0,.1331,.4455,-.8853,0,-.9802,.1911,-.0513,0,.0268,.5347,-.0473,1)},
        {frame: 73, value: _M(.1461,.8746,.4624,0,.1338,.4456,-.8852,0,-.9802,.1912,-.0519,0,.0268,.5347,-.0473,1)},
        {frame: 74, value: _M(.1458,.8744,.4627,0,.1348,.4458,-.8849,0,-.9801,.1914,-.0529,0,.0268,.5347,-.0473,1)},
        {frame: 75, value: _M(.1453,.8743,.4632,0,.136,.446,-.8846,0,-.98,.1916,-.0541,0,.0268,.5347,-.0473,1)},
        {frame: 76, value: _M(.1448,.8741,.4637,0,.1376,.4463,-.8842,0,-.9798,.1919,-.0556,0,.0268,.5347,-.0473,1)},
        {frame: 77, value: _M(.1442,.8738,.4644,0,.1394,.4467,-.8838,0,-.9797,.1922,-.0573,0,.0268,.5347,-.0473,1)},
        {frame: 78, value: _M(.1435,.8735,.4651,0,.1414,.4471,-.8832,0,-.9795,.1925,-.0594,0,.0268,.5347,-.0473,1)},
        {frame: 79, value: _M(.1427,.8732,.466,0,.1437,.4475,-.8827,0,-.9793,.1929,-.0616,0,.0268,.5347,-.0473,1)},
        {frame: 80, value: _M(.1419,.8729,.4669,0,.1463,.448,-.882,0,-.979,.1934,-.0641,0,.0268,.5347,-.0473,1)},
        {frame: 81, value: _M(.1409,.8725,.4679,0,.149,.4485,-.8813,0,-.9787,.1939,-.0668,0,.0268,.5347,-.0473,1)},
        {frame: 82, value: _M(.1399,.8721,.469,0,.152,.4491,-.8805,0,-.9784,.1945,-.0698,0,.0268,.5347,-.0473,1)},
        {frame: 83, value: _M(.1388,.8716,.4701,0,.1552,.4497,-.8796,0,-.9781,.195,-.0729,0,.0268,.5347,-.0473,1)},
        {frame: 84, value: _M(.1376,.8712,.4713,0,.1586,.4503,-.8787,0,-.9777,.1956,-.0762,0,.0268,.5347,-.0473,1)},
        {frame: 85, value: _M(.1364,.8707,.4726,0,.162,.451,-.8777,0,-.9773,.1963,-.0796,0,.0268,.5347,-.0473,1)},
        {frame: 86, value: _M(.1351,.8702,.4738,0,.1656,.4517,-.8767,0,-.9769,.1969,-.0831,0,.0268,.5347,-.0473,1)},
        {frame: 87, value: _M(.1338,.8697,.4751,0,.1693,.4523,-.8756,0,-.9764,.1976,-.0867,0,.0268,.5347,-.0473,1)},
        {frame: 88, value: _M(.1325,.8692,.4765,0,.173,.453,-.8745,0,-.976,.1983,-.0903,0,.0268,.5347,-.0473,1)},
        {frame: 89, value: _M(.1312,.8686,.4778,0,.1767,.4537,-.8734,0,-.9755,.199,-.094,0,.0268,.5347,-.0473,1)},
        {frame: 90, value: _M(.1298,.8681,.4791,0,.1804,.4544,-.8723,0,-.975,.1997,-.0976,0,.0268,.5347,-.0473,1)},
        {frame: 91, value: _M(.1285,.8676,.4804,0,.1841,.4551,-.8712,0,-.9745,.2004,-.1012,0,.0268,.5347,-.0473,1)},
        {frame: 92, value: _M(.1272,.8671,.4816,0,.1877,.4557,-.8701,0,-.974,.2011,-.1047,0,.0268,.5347,-.0473,1)},
        {frame: 93, value: _M(.126,.8666,.4828,0,.1911,.4564,-.869,0,-.9734,.2018,-.1081,0,.0268,.5347,-.0473,1)},
        {frame: 94, value: _M(.1248,.8661,.484,0,.1944,.457,-.868,0,-.9729,.2024,-.1114,0,.0268,.5347,-.0473,1)},
        {frame: 95, value: _M(.1236,.8657,.4851,0,.1976,.4575,-.867,0,-.9725,.203,-.1145,0,.0268,.5347,-.0473,1)},
        {frame: 96, value: _M(.1225,.8653,.4861,0,.2005,.4581,-.866,0,-.972,.2036,-.1174,0,.0268,.5347,-.0473,1)},
        {frame: 97, value: _M(.1215,.8649,.487,0,.2033,.4586,-.8651,0,-.9716,.2041,-.1201,0,.0268,.5347,-.0473,1)},
        {frame: 98, value: _M(.1206,.8645,.4879,0,.2058,.459,-.8643,0,-.9711,.2046,-.1225,0,.0268,.5347,-.0473,1)},
        {frame: 99, value: _M(.1197,.8642,.4887,0,.208,.4594,-.8635,0,-.9708,.205,-.1248,0,.0268,.5347,-.0473,1)},
        {frame: 100, value: _M(.119,.8639,.4893,0,.21,.4598,-.8628,0,-.9704,.2054,-.1268,0,.0268,.5347,-.0473,1)},
        {frame: 101, value: _M(.1183,.8637,.4899,0,.2118,.4601,-.8622,0,-.9701,.2058,-.1285,0,.0268,.5347,-.0473,1)},
        {frame: 102, value: _M(.1178,.8635,.4905,0,.2133,.4604,-.8617,0,-.9699,.2061,-.13,0,.0268,.5347,-.0473,1)},
        {frame: 103, value: _M(.1173,.8633,.4909,0,.2145,.4606,-.8613,0,-.9697,.2063,-.1312,0,.0268,.5347,-.0473,1)},
        {frame: 104, value: _M(.1169,.8632,.4912,0,.2155,.4608,-.861,0,-.9695,.2065,-.1321,0,.0268,.5347,-.0473,1)},
        {frame: 105, value: _M(.1167,.8631,.4914,0,.2161,.4609,-.8607,0,-.9694,.2066,-.1328,0,.0268,.5347,-.0473,1)},
        {frame: 106, value: _M(.1165,.863,.4916,0,.2165,.4609,-.8606,0,-.9693,.2067,-.1332,0,.0268,.5347,-.0473,1)},
        {frame: 107, value: _M(.1165,.863,.4916,0,.2167,.461,-.8606,0,-.9693,.2067,-.1333,0,.0268,.5347,-.0473,1)},
        {frame: 108, value: _M(.1166,.863,.4915,0,.2163,.4609,-.8607,0,-.9693,.2067,-.1329,0,.0268,.5347,-.0473,1)},
        {frame: 109, value: _M(.117,.8632,.4911,0,.2153,.4607,-.861,0,-.9695,.2065,-.1319,0,.0268,.5347,-.0473,1)},
        {frame: 110, value: _M(.1177,.8634,.4905,0,.2135,.4604,-.8616,0,-.9698,.2061,-.1302,0,.0268,.5347,-.0473,1)},
        {frame: 111, value: _M(.1186,.8638,.4897,0,.2111,.46,-.8625,0,-.9703,.2056,-.1278,0,.0268,.5347,-.0473,1)},
        {frame: 112, value: _M(.1198,.8642,.4886,0,.2079,.4594,-.8635,0,-.9708,.205,-.1247,0,.0268,.5347,-.0473,1)},
        {frame: 113, value: _M(.1212,.8648,.4873,0,.2042,.4587,-.8648,0,-.9714,.2043,-.121,0,.0268,.5347,-.0473,1)},
        {frame: 114, value: _M(.1228,.8654,.4858,0,.1998,.4579,-.8662,0,-.9721,.2034,-.1166,0,.0268,.5347,-.0473,1)},
        {frame: 115, value: _M(.1246,.8661,.4841,0,.1948,.4571,-.8678,0,-.9729,.2025,-.1118,0,.0268,.5347,-.0473,1)},
        {frame: 116, value: _M(.1266,.8668,.4822,0,.1895,.4561,-.8695,0,-.9737,.2014,-.1065,0,.0268,.5347,-.0473,1)},
        {frame: 117, value: _M(.1286,.8676,.4803,0,.1838,.455,-.8713,0,-.9745,.2003,-.1009,0,.0268,.5347,-.0473,1)},
        {frame: 118, value: _M(.1308,.8685,.4782,0,.1779,.4539,-.8731,0,-.9753,.1992,-.0951,0,.0268,.5347,-.0473,1)},
        {frame: 119, value: _M(.1329,.8693,.4761,0,.1719,.4528,-.8749,0,-.9761,.1981,-.0892,0,.0268,.5347,-.0473,1)},
        {frame: 120, value: _M(.135,.8701,.474,0,.1659,.4517,-.8766,0,-.9768,.197,-.0834,0,.0268,.5347,-.0473,1)},
        {frame: 121, value: _M(.137,.8709,.4719,0,.1602,.4506,-.8782,0,-.9775,.1959,-.0778,0,.0268,.5347,-.0473,1)},
        {frame: 122, value: _M(.1389,.8717,.47,0,.1548,.4496,-.8797,0,-.9781,.195,-.0725,0,.0268,.5347,-.0473,1)},
        {frame: 123, value: _M(.1406,.8724,.4682,0,.1498,.4487,-.881,0,-.9787,.194,-.0676,0,.0268,.5347,-.0473,1)},
        {frame: 124, value: _M(.1422,.873,.4666,0,.1454,.4478,-.8822,0,-.9791,.1932,-.0632,0,.0268,.5347,-.0473,1)},
        {frame: 125, value: _M(.1435,.8735,.4652,0,.1415,.4471,-.8832,0,-.9795,.1926,-.0595,0,.0268,.5347,-.0473,1)},
        {frame: 126, value: _M(.1446,.874,.464,0,.1383,.4465,-.884,0,-.9798,.192,-.0563,0,.0268,.5347,-.0473,1)},
        {frame: 127, value: _M(.1454,.8743,.4631,0,.1358,.446,-.8847,0,-.98,.1915,-.0539,0,.0268,.5347,-.0473,1)},
        {frame: 128, value: _M(.146,.8745,.4624,0,.134,.4457,-.8851,0,-.9802,.1912,-.0521,0,.0268,.5347,-.0473,1)},
        {frame: 129, value: _M(.1464,.8747,.462,0,.1329,.4454,-.8854,0,-.9803,.191,-.0511,0,.0268,.5347,-.0473,1)},
        {frame: 130, value: _M(.1465,.8747,.4619,0,.1326,.4454,-.8855,0,-.9803,.191,-.0507,0,.0268,.5347,-.0473,1)},
        {frame: 140, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 202, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.R", skeleton,skeleton.bones[20], _M(.9561,.1499,.2518,0,-.2514,.861,.4421,0,-.1505,-.486,.8609,0,0,.7926,0,1), _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1));
        bone.length = .6211;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 1, value: _M(.9826,.1169,.1446,0,-.1749,.8445,.5061,0,-.0629,-.5226,.8503,0,0,.7926,0,1)},
        {frame: 2, value: _M(.9794,.0484,-.196,0,.0896,.7659,.6367,0,.1809,-.6412,.7458,0,0,.7926,0,1)},
        {frame: 3, value: _M(.8048,.0367,-.5924,0,.4437,.6258,.6415,0,.3943,-.7791,.4873,0,0,.7926,0,1)},
        {frame: 4, value: _M(.5958,.0776,-.7994,0,.6604,.5191,.5426,0,.4571,-.8512,.258,0,0,.7926,0,1)},
        {frame: 5, value: _M(.5056,.1018,-.8568,0,.7292,.4804,.4874,0,.4612,-.8711,.1686,0,0,.7926,0,1)},
        {frame: 7, value: _M(.9484,.2753,.1572,0,-.2629,.4061,.8752,0,.1772,-.8714,.4575,0,0,.7926,0,1)},
        {frame: 8, value: _M(.6732,.307,.6728,0,-.6781,.6191,.396,0,-.295,-.7228,.6249,0,0,.7926,0,1)},
        {frame: 9, value: _M(.5889,.3733,.7168,0,-.5814,.8118,.0549,0,-.5614,-.4491,.6951,0,0,.7926,0,1)},
        {frame: 10, value: _M(.6014,.3891,.6977,0,-.5474,.8368,.0051,0,-.5819,-.3851,.7163,0,0,.7926,0,1)},
        {frame: 11, value: _M(.6343,.3883,.6685,0,-.5328,.8461,.014,0,-.5602,-.3651,.7436,0,0,.7926,0,1)},
        {frame: 12, value: _M(.7034,.361,.6123,0,-.5053,.8598,.0735,0,-.4999,-.3611,.7872,0,0,.7926,0,1)},
        {frame: 13, value: _M(.8038,.2973,.5153,0,-.4463,.8741,.1919,0,-.3934,-.3842,.8352,0,0,.7926,0,1)},
        {frame: 14, value: _M(.8937,.2213,.3903,0,-.3581,.8759,.3234,0,-.2703,-.4288,.862,0,0,.7926,0,1)},
        {frame: 15, value: _M(.9427,.1673,.2886,0,-.2801,.8668,.4125,0,-.1811,-.4697,.864,0,0,.7926,0,1)},
        {frame: 16, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 30, value: _M(.8333,-.0102,.5528,0,-.2446,.8899,.3851,0,-.4959,-.4561,.739,0,0,.7926,0,1)},
        {frame: 31, value: _M(.838,-.0123,.5455,0,-.2469,.883,.3991,0,-.4866,-.4692,.737,0,0,.7926,0,1)},
        {frame: 32, value: _M(.8446,-.0165,.5352,0,-.2515,.8702,.4237,0,-.4727,-.4924,.7308,0,0,.7926,0,1)},
        {frame: 33, value: _M(.8472,-.0222,.5308,0,-.2597,.8543,.4502,0,-.4635,-.5193,.718,0,0,.7926,0,1)},
        {frame: 34, value: _M(.8499,-.0303,.5261,0,-.2723,.8296,.4875,0,-.4512,-.5576,.6968,0,0,.7926,0,1)},
        {frame: 35, value: _M(.8534,-.0391,.5198,0,-.2904,.7924,.5365,0,-.4329,-.6088,.6648,0,0,.7926,0,1)},
        {frame: 36, value: _M(.8602,-.0487,.5077,0,-.3159,.7306,.6053,0,-.4004,-.681,.6131,0,0,.7926,0,1)},
        {frame: 37, value: _M(.8672,-.0573,.4947,0,-.3394,.659,.6712,0,-.3645,-.75,.552,0,0,.7926,0,1)},
        {frame: 38, value: _M(.8705,-.0643,.488,0,-.351,.6139,.707,0,-.345,-.7867,.5119,0,0,.7926,0,1)},
        {frame: 39, value: _M(.8738,-.0735,.4807,0,-.3652,.5535,.7485,0,-.321,-.8296,.4568,0,0,.7926,0,1)},
        {frame: 40, value: _M(.8818,-.085,.4639,0,-.3885,.4268,.8167,0,-.2674,-.9003,.3433,0,0,.7926,0,1)},
        {frame: 41, value: _M(.8814,-.0925,.4633,0,-.3943,.3959,.8293,0,-.2601,-.9136,.3124,0,0,.7926,0,1)},
        {frame: 42, value: _M(.8808,-.0963,.4635,0,-.398,.3797,.8351,0,-.2564,-.9201,.2961,0,0,.7926,0,1)},
        {frame: 43, value: _M(.8821,-.089,.4625,0,-.3955,.3933,.83,0,-.2558,-.9151,.3117,0,0,.7926,0,1)},
        {frame: 44, value: _M(.8821,-.0714,.4656,0,-.3834,.4656,.7977,0,-.2738,-.8821,.3833,0,0,.7926,0,1)},
        {frame: 45, value: _M(.878,-.054,.4756,0,-.3614,.5767,.7326,0,-.3139,-.8152,.4868,0,0,.7926,0,1)},
        {frame: 46, value: _M(.87,-.0393,.4915,0,-.3312,.6918,.6417,0,-.3652,-.7211,.5888,0,0,.7926,0,1)},
        {frame: 47, value: _M(.861,-.0256,.5079,0,-.2961,.7868,.5415,0,-.4135,-.6166,.6699,0,0,.7926,0,1)},
        {frame: 48, value: _M(.8559,-.0169,.5168,0,-.2745,.8322,.4818,0,-.4382,-.5543,.7076,0,0,.7926,0,1)},
        {frame: 49, value: _M(.8497,-.0121,.5271,0,-.2598,.8604,.4385,0,-.4588,-.5095,.7279,0,0,.7926,0,1)},
        {frame: 50, value: _M(.8333,-.0102,.5528,0,-.2446,.8899,.3851,0,-.4959,-.4561,.739,0,0,.7926,0,1)},
        {frame: 60, value: _M(.8333,-.0102,.5528,0,-.2446,.8899,.3851,0,-.4959,-.4561,.739,0,0,.7926,0,1)},
        {frame: 61, value: _M(.8333,-.0102,.5528,0,-.2446,.8899,.3851,0,-.4959,-.4561,.739,0,0,.7926,0,1)},
        {frame: 70, value: _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 130, value: _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 140, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 141, value: _M(.9561,.1496,.252,0,-.2511,.8614,.4415,0,-.151,-.4854,.8612,0,0,.7926,0,1)},
        {frame: 142, value: _M(.9561,.1499,.2518,0,-.2514,.861,.4421,0,-.1505,-.486,.8609,0,0,.7926,0,1)},
        {frame: 143, value: _M(.9561,.1504,.2515,0,-.2519,.8603,.4432,0,-.1497,-.4871,.8604,0,0,.7926,0,1)},
        {frame: 144, value: _M(.9561,.1512,.2511,0,-.2527,.8593,.4448,0,-.1485,-.4887,.8597,0,0,.7926,0,1)},
        {frame: 145, value: _M(.9561,.1521,.2505,0,-.2536,.858,.4467,0,-.147,-.4907,.8589,0,0,.7926,0,1)},
        {frame: 146, value: _M(.9561,.1533,.2499,0,-.2547,.8564,.4491,0,-.1452,-.493,.8578,0,0,.7926,0,1)},
        {frame: 147, value: _M(.956,.1545,.2492,0,-.2559,.8547,.4516,0,-.1432,-.4955,.8567,0,0,.7926,0,1)},
        {frame: 148, value: _M(.956,.1558,.2485,0,-.2571,.853,.4542,0,-.1412,-.4982,.8555,0,0,.7926,0,1)},
        {frame: 149, value: _M(.956,.1571,.2478,0,-.2583,.8512,.4569,0,-.1391,-.5008,.8543,0,0,.7926,0,1)},
        {frame: 150, value: _M(.956,.1584,.2471,0,-.2595,.8495,.4594,0,-.1372,-.5032,.8532,0,0,.7926,0,1)},
        {frame: 151, value: _M(.9559,.1596,.2465,0,-.2606,.8479,.4617,0,-.1353,-.5056,.8521,0,0,.7926,0,1)},
        {frame: 152, value: _M(.9559,.1607,.2459,0,-.2617,.8463,.4641,0,-.1335,-.5079,.851,0,0,.7926,0,1)},
        {frame: 153, value: _M(.9558,.1621,.2452,0,-.2629,.8444,.4667,0,-.1314,-.5106,.8497,0,0,.7926,0,1)},
        {frame: 154, value: _M(.9558,.1636,.2444,0,-.2642,.8424,.4697,0,-.129,-.5135,.8483,0,0,.7926,0,1)},
        {frame: 155, value: _M(.9557,.1652,.2435,0,-.2657,.8401,.4729,0,-.1265,-.5166,.8468,0,0,.7926,0,1)},
        {frame: 156, value: _M(.9557,.1669,.2426,0,-.2672,.8377,.4763,0,-.1238,-.52,.8452,0,0,.7926,0,1)},
        {frame: 157, value: _M(.9556,.1687,.2417,0,-.2688,.8352,.4798,0,-.1209,-.5235,.8434,0,0,.7926,0,1)},
        {frame: 158, value: _M(.9555,.1706,.2408,0,-.2705,.8325,.4835,0,-.118,-.5271,.8416,0,0,.7926,0,1)},
        {frame: 159, value: _M(.9554,.1725,.2398,0,-.2721,.8298,.4872,0,-.115,-.5307,.8397,0,0,.7926,0,1)},
        {frame: 160, value: _M(.9553,.1744,.2389,0,-.2737,.8271,.4909,0,-.112,-.5343,.8378,0,0,.7926,0,1)},
        {frame: 161, value: _M(.9552,.1762,.238,0,-.2753,.8245,.4944,0,-.1091,-.5377,.836,0,0,.7926,0,1)},
        {frame: 162, value: _M(.955,.1779,.2371,0,-.2767,.822,.4977,0,-.1064,-.541,.8343,0,0,.7926,0,1)},
        {frame: 163, value: _M(.9549,.1795,.2364,0,-.278,.8197,.5008,0,-.1039,-.5439,.8327,0,0,.7926,0,1)},
        {frame: 164, value: _M(.9548,.1809,.2357,0,-.2792,.8177,.5035,0,-.1016,-.5465,.8312,0,0,.7926,0,1)},
        {frame: 165, value: _M(.9548,.1821,.2351,0,-.2802,.8159,.5058,0,-.0997,-.5488,.83,0,0,.7926,0,1)},
        {frame: 166, value: _M(.9547,.1831,.2346,0,-.281,.8144,.5077,0,-.0981,-.5506,.829,0,0,.7926,0,1)},
        {frame: 167, value: _M(.9546,.1839,.2343,0,-.2816,.8133,.5092,0,-.0969,-.552,.8282,0,0,.7926,0,1)},
        {frame: 168, value: _M(.9546,.1844,.234,0,-.282,.8125,.5102,0,-.0961,-.553,.8276,0,0,.7926,0,1)},
        {frame: 169, value: _M(.9546,.1847,.2339,0,-.2823,.812,.5108,0,-.0955,-.5536,.8273,0,0,.7926,0,1)},
        {frame: 170, value: _M(.9545,.1848,.2338,0,-.2824,.8119,.511,0,-.0954,-.5538,.8272,0,0,.7926,0,1)},
        {frame: 171, value: _M(.9546,.1848,.2339,0,-.2823,.812,.5108,0,-.0955,-.5536,.8273,0,0,.7926,0,1)},
        {frame: 172, value: _M(.9546,.1845,.234,0,-.2821,.8124,.5103,0,-.0959,-.5532,.8275,0,0,.7926,0,1)},
        {frame: 173, value: _M(.9546,.184,.2342,0,-.2817,.813,.5095,0,-.0966,-.5523,.828,0,0,.7926,0,1)},
        {frame: 174, value: _M(.9547,.1834,.2345,0,-.2812,.814,.5083,0,-.0976,-.5512,.8286,0,0,.7926,0,1)},
        {frame: 175, value: _M(.9547,.1826,.2349,0,-.2806,.8151,.5068,0,-.0989,-.5497,.8295,0,0,.7926,0,1)},
        {frame: 176, value: _M(.9548,.1817,.2353,0,-.2798,.8166,.5049,0,-.1004,-.5479,.8305,0,0,.7926,0,1)},
        {frame: 177, value: _M(.9549,.1805,.2359,0,-.2789,.8182,.5027,0,-.1022,-.5458,.8316,0,0,.7926,0,1)},
        {frame: 178, value: _M(.955,.1792,.2365,0,-.2778,.8201,.5002,0,-.1043,-.5434,.833,0,0,.7926,0,1)},
        {frame: 179, value: _M(.9551,.1778,.2372,0,-.2766,.8222,.4975,0,-.1066,-.5407,.8344,0,0,.7926,0,1)},
        {frame: 180, value: _M(.9552,.1762,.238,0,-.2753,.8245,.4944,0,-.1091,-.5377,.836,0,0,.7926,0,1)},
        {frame: 181, value: _M(.9553,.1745,.2388,0,-.2738,.8269,.4911,0,-.1118,-.5345,.8377,0,0,.7926,0,1)},
        {frame: 182, value: _M(.9554,.1727,.2397,0,-.2723,.8295,.4876,0,-.1146,-.5311,.8395,0,0,.7926,0,1)},
        {frame: 183, value: _M(.9555,.1708,.2406,0,-.2707,.8321,.484,0,-.1176,-.5276,.8413,0,0,.7926,0,1)},
        {frame: 184, value: _M(.9556,.1689,.2416,0,-.269,.8348,.4803,0,-.1206,-.5239,.8432,0,0,.7926,0,1)},
        {frame: 185, value: _M(.9556,.167,.2426,0,-.2673,.8376,.4765,0,-.1236,-.5202,.8451,0,0,.7926,0,1)},
        {frame: 186, value: _M(.9557,.1651,.2436,0,-.2656,.8403,.4727,0,-.1267,-.5164,.8469,0,0,.7926,0,1)},
        {frame: 187, value: _M(.9558,.1632,.2446,0,-.2639,.8429,.4689,0,-.1297,-.5127,.8487,0,0,.7926,0,1)},
        {frame: 188, value: _M(.9559,.1613,.2456,0,-.2622,.8455,.4652,0,-.1326,-.5091,.8505,0,0,.7926,0,1)},
        {frame: 189, value: _M(.9559,.1596,.2465,0,-.2606,.8479,.4617,0,-.1353,-.5056,.8521,0,0,.7926,0,1)},
        {frame: 190, value: _M(.956,.1579,.2474,0,-.259,.8502,.4583,0,-.138,-.5022,.8537,0,0,.7926,0,1)},
        {frame: 191, value: _M(.956,.1563,.2482,0,-.2576,.8523,.4552,0,-.1404,-.4991,.8551,0,0,.7926,0,1)},
        {frame: 192, value: _M(.956,.1549,.249,0,-.2562,.8542,.4524,0,-.1426,-.4963,.8564,0,0,.7926,0,1)},
        {frame: 193, value: _M(.9561,.1537,.2497,0,-.255,.8559,.4498,0,-.1446,-.4937,.8575,0,0,.7926,0,1)},
        {frame: 194, value: _M(.9561,.1525,.2503,0,-.254,.8574,.4476,0,-.1463,-.4915,.8585,0,0,.7926,0,1)},
        {frame: 195, value: _M(.9561,.1516,.2508,0,-.2531,.8587,.4456,0,-.1478,-.4896,.8594,0,0,.7926,0,1)},
        {frame: 196, value: _M(.9561,.1508,.2513,0,-.2523,.8597,.4441,0,-.149,-.488,.86,0,0,.7926,0,1)},
        {frame: 197, value: _M(.9561,.1502,.2516,0,-.2517,.8605,.4428,0,-.15,-.4867,.8606,0,0,.7926,0,1)},
        {frame: 198, value: _M(.9561,.1498,.2518,0,-.2513,.8611,.442,0,-.1507,-.4859,.861,0,0,.7926,0,1)},
        {frame: 199, value: _M(.9561,.1495,.252,0,-.2511,.8614,.4414,0,-.1511,-.4853,.8612,0,0,.7926,0,1)},
        {frame: 200, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 202, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.R", skeleton,skeleton.bones[21], _M(.3341,.1315,.9333,0,-.1588,.9839,-.0818,0,-.9291,-.1209,.3496,0,0,.6211,0,1), _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1));
        bone.length = .2494;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 1, value: _M(.3541,.1195,.9275,0,-.1149,.9899,-.0836,0,-.9281,-.077,.3642,0,0,.6211,0,1)},
        {frame: 2, value: _M(.4051,.088,.91,0,.0129,.9947,-.1019,0,-.9142,.053,.4019,0,0,.6211,0,1)},
        {frame: 3, value: _M(.4594,.0411,.8873,0,.1648,.9776,-.1307,0,-.8728,.2063,.4423,0,0,.6211,0,1)},
        {frame: 4, value: _M(.4923,.0027,.8704,0,.2689,.9506,-.1551,0,-.8279,.3104,.4672,0,0,.6211,0,1)},
        {frame: 5, value: _M(.5037,-.0132,.8638,0,.308,.9369,-.1653,0,-.8071,.3493,.4759,0,0,.6211,0,1)},
        {frame: 7, value: _M(.1412,.0548,.9885,0,-.1924,.981,-.0269,0,-.9711,-.1864,.1491,0,0,.6211,0,1)},
        {frame: 8, value: _M(.1132,.2434,.9633,0,-.1087,.9667,-.2315,0,-.9876,-.0786,.1359,0,0,.6211,0,1)},
        {frame: 9, value: _M(.1086,.3925,.9133,0,-.0175,.9193,-.3931,0,-.9939,.0267,.1066,0,0,.6211,0,1)},
        {frame: 10, value: _M(.1198,.3872,.9142,0,-.0218,.9216,-.3875,0,-.9926,.0265,.1188,0,0,.6211,0,1)},
        {frame: 11, value: _M(.142,.3638,.9206,0,-.0375,.9313,-.3622,0,-.9892,.0169,.1459,0,0,.6211,0,1)},
        {frame: 12, value: _M(.1775,.3204,.9305,0,-.0643,.9473,-.3139,0,-.982,-.0041,.1888,0,0,.6211,0,1)},
        {frame: 13, value: _M(.2288,.2567,.939,0,-.1,.9657,-.2397,0,-.9683,-.0391,.2466,0,0,.6211,0,1)},
        {frame: 14, value: _M(.2832,.1904,.94,0,-.133,.9784,-.1581,0,-.9498,-.0802,.3024,0,0,.6211,0,1)},
        {frame: 15, value: _M(.322,.1442,.9357,0,-.1533,.9832,-.0987,0,-.9342,-.1117,.3387,0,0,.6211,0,1)},
        {frame: 16, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 30, value: _M(.4117,-.0318,.9108,0,-.2169,.9673,.1318,0,-.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 31, value: _M(.4052,-.0289,.9138,0,-.2116,.9694,.1245,0,-.8894,-.2438,.3866,0,0,.6211,0,1)},
        {frame: 32, value: _M(.3889,-.0216,.921,0,-.1982,.9744,.1065,0,-.8997,-.224,.3747,0,0,.6211,0,1)},
        {frame: 33, value: _M(.3704,-.0128,.9288,0,-.1824,.9794,.0863,0,-.9108,-.2014,.3604,0,0,.6211,0,1)},
        {frame: 34, value: _M(.3478,-.0015,.9376,0,-.1625,.9848,.0618,0,-.9234,-.1739,.3422,0,0,.6211,0,1)},
        {frame: 35, value: _M(.3233,.0117,.9462,0,-.1401,.9895,.0357,0,-.9359,-.1441,.3215,0,0,.6211,0,1)},
        {frame: 36, value: _M(.2964,.027,.9547,0,-.1146,.9934,.0075,0,-.9482,-.1116,.2976,0,0,.6211,0,1)},
        {frame: 37, value: _M(.2697,.0432,.962,0,-.0881,.9959,-.02,0,-.9589,-.0793,.2725,0,0,.6211,0,1)},
        {frame: 38, value: _M(.2455,.0588,.9676,0,-.063,.997,-.0446,0,-.9673,-.05,.2485,0,0,.6211,0,1)},
        {frame: 39, value: _M(.226,.0721,.9715,0,-.0422,.997,-.0642,0,-.9732,-.0265,.2283,0,0,.6211,0,1)},
        {frame: 40, value: _M(.2154,.0796,.9733,0,-.0307,.9967,-.0747,0,-.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 41, value: _M(.2216,.0752,.9722,0,-.0375,.9969,-.0685,0,-.9744,-.0213,.2237,0,0,.6211,0,1)},
        {frame: 42, value: _M(.2373,.0644,.9693,0,-.0544,.9971,-.0529,0,-.9699,-.0401,.2401,0,0,.6211,0,1)},
        {frame: 43, value: _M(.2553,.0524,.9654,0,-.0733,.9967,-.0348,0,-.9641,-.0619,.2583,0,0,.6211,0,1)},
        {frame: 44, value: _M(.2775,.0384,.96,0,-.0959,.9953,-.0121,0,-.9559,-.0887,.2799,0,0,.6211,0,1)},
        {frame: 45, value: _M(.3017,.0239,.9531,0,-.1196,.9927,.013,0,-.9459,-.118,.3024,0,0,.6211,0,1)},
        {frame: 46, value: _M(.3285,.0088,.9445,0,-.145,.9886,.0412,0,-.9333,-.1504,.326,0,0,.6211,0,1)},
        {frame: 47, value: _M(.3556,-.0055,.9346,0,-.1695,.983,.0702,0,-.9191,-.1834,.3486,0,0,.6211,0,1)},
        {frame: 48, value: _M(.3805,-.0177,.9246,0,-.191,.9767,.0973,0,-.9048,-.2137,.3682,0,0,.6211,0,1)},
        {frame: 49, value: _M(.4007,-.0269,.9158,0,-.2079,.9708,.1195,0,-.8923,-.2383,.3834,0,0,.6211,0,1)},
        {frame: 50, value: _M(.4117,-.0318,.9108,0,-.2169,.9673,.1318,0,-.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 60, value: _M(.4117,-.0318,.9108,0,-.2169,.9673,.1318,0,-.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 61, value: _M(.4117,-.0318,.9108,0,-.2169,.9673,.1318,0,-.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 70, value: _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 130, value: _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 140, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 141, value: _M(.3348,.1294,.9333,0,-.1594,.984,-.0793,0,-.9287,-.1223,.3501,0,0,.6211,0,1)},
        {frame: 142, value: _M(.3341,.1315,.9333,0,-.1588,.9839,-.0818,0,-.9291,-.1209,.3496,0,0,.6211,0,1)},
        {frame: 143, value: _M(.3328,.1349,.9333,0,-.1577,.9837,-.086,0,-.9297,-.1186,.3486,0,0,.6211,0,1)},
        {frame: 144, value: _M(.331,.1397,.9332,0,-.1562,.9834,-.0919,0,-.9306,-.1153,.3473,0,0,.6211,0,1)},
        {frame: 145, value: _M(.3287,.1457,.9331,0,-.1542,.983,-.0992,0,-.9317,-.1113,.3456,0,0,.6211,0,1)},
        {frame: 146, value: _M(.3262,.1525,.9329,0,-.152,.9825,-.1075,0,-.933,-.1068,.3437,0,0,.6211,0,1)},
        {frame: 147, value: _M(.3235,.1597,.9326,0,-.1497,.9819,-.1162,0,-.9343,-.102,.3416,0,0,.6211,0,1)},
        {frame: 148, value: _M(.3209,.1669,.9323,0,-.1473,.9812,-.1249,0,-.9356,-.0973,.3395,0,0,.6211,0,1)},
        {frame: 149, value: _M(.3185,.1736,.9319,0,-.1451,.9804,-.133,0,-.9368,-.0929,.3374,0,0,.6211,0,1)},
        {frame: 150, value: _M(.3163,.1796,.9315,0,-.1431,.9797,-.1403,0,-.9378,-.0889,.3356,0,0,.6211,0,1)},
        {frame: 151, value: _M(.3144,.1848,.9311,0,-.1413,.9791,-.1466,0,-.9387,-.0855,.3339,0,0,.6211,0,1)},
        {frame: 152, value: _M(.3125,.19,.9307,0,-.1395,.9784,-.1528,0,-.9396,-.0821,.3323,0,0,.6211,0,1)},
        {frame: 153, value: _M(.3104,.1958,.9302,0,-.1375,.9775,-.1599,0,-.9406,-.0783,.3304,0,0,.6211,0,1)},
        {frame: 154, value: _M(.3082,.202,.9296,0,-.1353,.9766,-.1674,0,-.9416,-.0742,.3283,0,0,.6211,0,1)},
        {frame: 155, value: _M(.306,.2083,.929,0,-.1331,.9755,-.1749,0,-.9427,-.0702,.3262,0,0,.6211,0,1)},
        {frame: 156, value: _M(.304,.2141,.9283,0,-.1311,.9745,-.1819,0,-.9436,-.0664,.3243,0,0,.6211,0,1)},
        {frame: 157, value: _M(.3023,.2189,.9277,0,-.1294,.9737,-.1876,0,-.9444,-.0633,.3226,0,0,.6211,0,1)},
        {frame: 158, value: _M(.301,.2224,.9273,0,-.1281,.973,-.1918,0,-.945,-.061,.3214,0,0,.6211,0,1)},
        {frame: 159, value: _M(.3003,.2245,.927,0,-.1274,.9726,-.1943,0,-.9453,-.0597,.3207,0,0,.6211,0,1)},
        {frame: 160, value: _M(.3001,.2252,.927,0,-.1271,.9725,-.1951,0,-.9454,-.0593,.3205,0,0,.6211,0,1)},
        {frame: 161, value: _M(.3003,.2245,.927,0,-.1273,.9726,-.1943,0,-.9453,-.0597,.3207,0,0,.6211,0,1)},
        {frame: 162, value: _M(.301,.2226,.9273,0,-.128,.973,-.192,0,-.945,-.0609,.3214,0,0,.6211,0,1)},
        {frame: 163, value: _M(.3021,.2193,.9277,0,-.1292,.9736,-.1881,0,-.9445,-.0631,.3225,0,0,.6211,0,1)},
        {frame: 164, value: _M(.3037,.2148,.9282,0,-.1309,.9744,-.1826,0,-.9437,-.066,.3241,0,0,.6211,0,1)},
        {frame: 165, value: _M(.3057,.2091,.9289,0,-.1328,.9754,-.1759,0,-.9428,-.0696,.326,0,0,.6211,0,1)},
        {frame: 166, value: _M(.3079,.2029,.9295,0,-.135,.9764,-.1684,0,-.9418,-.0737,.3281,0,0,.6211,0,1)},
        {frame: 167, value: _M(.3102,.1964,.9302,0,-.1373,.9774,-.1606,0,-.9407,-.0779,.3302,0,0,.6211,0,1)},
        {frame: 168, value: _M(.3125,.1902,.9307,0,-.1395,.9783,-.1531,0,-.9396,-.082,.3322,0,0,.6211,0,1)},
        {frame: 169, value: _M(.3145,.1844,.9312,0,-.1414,.9791,-.1462,0,-.9387,-.0857,.334,0,0,.6211,0,1)},
        {frame: 170, value: _M(.3163,.1794,.9315,0,-.1431,.9797,-.1401,0,-.9378,-.089,.3356,0,0,.6211,0,1)},
        {frame: 171, value: _M(.3182,.1743,.9319,0,-.1448,.9803,-.1339,0,-.9369,-.0924,.3372,0,0,.6211,0,1)},
        {frame: 172, value: _M(.3203,.1685,.9322,0,-.1468,.981,-.1269,0,-.9359,-.0962,.3389,0,0,.6211,0,1)},
        {frame: 173, value: _M(.3226,.1622,.9325,0,-.1489,.9816,-.1192,0,-.9347,-.1004,.3409,0,0,.6211,0,1)},
        {frame: 174, value: _M(.3251,.1556,.9328,0,-.151,.9823,-.1112,0,-.9336,-.1048,.3428,0,0,.6211,0,1)},
        {frame: 175, value: _M(.3275,.1491,.933,0,-.1531,.9828,-.1033,0,-.9324,-.1091,.3447,0,0,.6211,0,1)},
        {frame: 176, value: _M(.3296,.1433,.9332,0,-.155,.9832,-.0962,0,-.9313,-.113,.3463,0,0,.6211,0,1)},
        {frame: 177, value: _M(.3315,.1384,.9333,0,-.1566,.9835,-.0903,0,-.9304,-.1162,.3477,0,0,.6211,0,1)},
        {frame: 178, value: _M(.3328,.1348,.9333,0,-.1577,.9837,-.0858,0,-.9297,-.1186,.3487,0,0,.6211,0,1)},
        {frame: 179, value: _M(.3337,.1325,.9333,0,-.1584,.9839,-.0831,0,-.9293,-.1202,.3493,0,0,.6211,0,1)},
        {frame: 180, value: _M(.334,.1316,.9333,0,-.1588,.9839,-.0819,0,-.9291,-.1208,.3496,0,0,.6211,0,1)},
        {frame: 181, value: _M(.3342,.1312,.9333,0,-.1589,.9839,-.0814,0,-.929,-.1211,.3497,0,0,.6211,0,1)},
        {frame: 182, value: _M(.3343,.1309,.9333,0,-.159,.984,-.081,0,-.929,-.1213,.3497,0,0,.6211,0,1)},
        {frame: 183, value: _M(.3344,.1306,.9333,0,-.1591,.984,-.0807,0,-.9289,-.1215,.3498,0,0,.6211,0,1)},
        {frame: 184, value: _M(.3345,.1303,.9333,0,-.1592,.984,-.0803,0,-.9289,-.1217,.3499,0,0,.6211,0,1)},
        {frame: 185, value: _M(.3346,.13,.9333,0,-.1592,.984,-.08,0,-.9288,-.1219,.35,0,0,.6211,0,1)},
        {frame: 186, value: _M(.3347,.1298,.9333,0,-.1593,.984,-.0797,0,-.9288,-.122,.35,0,0,.6211,0,1)},
        {frame: 187, value: _M(.3348,.1296,.9333,0,-.1594,.984,-.0794,0,-.9287,-.1222,.3501,0,0,.6211,0,1)},
        {frame: 188, value: _M(.3349,.1294,.9333,0,-.1594,.984,-.0792,0,-.9287,-.1223,.3501,0,0,.6211,0,1)},
        {frame: 189, value: _M(.3349,.1292,.9333,0,-.1595,.984,-.079,0,-.9287,-.1224,.3502,0,0,.6211,0,1)},
        {frame: 190, value: _M(.335,.1291,.9333,0,-.1595,.984,-.0789,0,-.9286,-.1225,.3502,0,0,.6211,0,1)},
        {frame: 191, value: _M(.335,.129,.9333,0,-.1595,.984,-.0788,0,-.9286,-.1225,.3502,0,0,.6211,0,1)},
        {frame: 192, value: _M(.335,.1289,.9333,0,-.1596,.984,-.0787,0,-.9286,-.1226,.3503,0,0,.6211,0,1)},
        {frame: 193, value: _M(.3351,.1289,.9333,0,-.1596,.984,-.0786,0,-.9286,-.1226,.3503,0,0,.6211,0,1)},
        {frame: 194, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 202, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone1.R", skeleton,skeleton.bones[22], _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1), _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1));
        bone.length = .1634;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 16, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 30, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 31, value: _M(-.0191,-.469,.883,0,-.0517,.8824,.4676,0,-.9985,-.0367,-.0411,0,0,.2494,0,1)},
        {frame: 32, value: _M(-.0173,-.4894,.8719,0,-.0392,.8717,.4885,0,-.9991,-.0257,-.0343,0,0,.2494,0,1)},
        {frame: 33, value: _M(-.0156,-.5122,.8587,0,-.0249,.8588,.5118,0,-.9996,-.0134,-.0261,0,0,.2494,0,1)},
        {frame: 34, value: _M(-.014,-.5397,.8418,0,-.0074,.8419,.5396,0,-.9999,.0013,-.0157,0,0,.2494,0,1)},
        {frame: 35, value: _M(-.0129,-.5689,.8223,0,.0118,.8223,.569,0,-.9998,.017,-.0039,0,0,.2494,0,1)},
        {frame: 36, value: _M(-.0124,-.6002,.7998,0,.0328,.7992,.6002,0,-.9994,.0337,.0097,0,0,.2494,0,1)},
        {frame: 37, value: _M(-.0128,-.6307,.776,0,.0539,.7745,.6303,0,-.9985,.0499,.0241,0,0,.2494,0,1)},
        {frame: 38, value: _M(-.0139,-.6578,.7531,0,.0732,.7505,.6568,0,-.9972,.0642,.0377,0,0,.2494,0,1)},
        {frame: 39, value: _M(-.0153,-.6792,.7338,0,.0888,.7301,.6776,0,-.9959,.0755,.0492,0,0,.2494,0,1)},
        {frame: 40, value: _M(-.0162,-.6906,.723,0,.0973,.7186,.6886,0,-.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 41, value: _M(-.0156,-.6839,.7294,0,.0923,.7254,.6821,0,-.9956,.078,.0518,0,0,.2494,0,1)},
        {frame: 42, value: _M(-.0144,-.6668,.7451,0,.0797,.742,.6656,0,-.9967,.069,.0425,0,0,.2494,0,1)},
        {frame: 43, value: _M(-.0134,-.6469,.7625,0,.0654,.7604,.6462,0,-.9978,.0585,.0321,0,0,.2494,0,1)},
        {frame: 44, value: _M(-.0126,-.6219,.783,0,.0478,.7818,.6217,0,-.9988,.0452,.0198,0,0,.2494,0,1)},
        {frame: 45, value: _M(-.0125,-.5941,.8043,0,.0287,.8038,.5942,0,-.9995,.0305,.007,0,0,.2494,0,1)},
        {frame: 46, value: _M(-.013,-.5627,.8266,0,.0077,.8266,.5628,0,-.9999,.0137,-.0065,0,0,.2494,0,1)},
        {frame: 47, value: _M(-.0145,-.5302,.8477,0,-.0134,.8478,.5301,0,-.9998,-.0037,-.0194,0,0,.2494,0,1)},
        {frame: 48, value: _M(-.0165,-.4998,.866,0,-.0327,.8659,.4992,0,-.9993,-.0201,-.0306,0,0,.2494,0,1)},
        {frame: 49, value: _M(-.0186,-.4747,.8799,0,-.0483,.8795,.4735,0,-.9987,-.0337,-.0393,0,0,.2494,0,1)},
        {frame: 50, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 60, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 61, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 70, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 130, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 140, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 202, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone2.R", skeleton,skeleton.bones[23], _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1), _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1));
        bone.length = .1464;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 16, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 30, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 31, value: _M(.0718,-.9478,-.3106,0,.9974,.0679,.0234,0,-.0011,-.3115,.9503,0,0,.1634,0,1)},
        {frame: 32, value: _M(.0917,-.9554,-.2808,0,.9956,.0929,.0091,0,.0174,-.2804,.9597,0,0,.1634,0,1)},
        {frame: 33, value: _M(.1151,-.9622,-.2469,0,.9926,.1208,-.0082,0,.0377,-.2442,.969,0,0,.1634,0,1)},
        {frame: 34, value: _M(.1445,-.9679,-.2055,0,.9876,.154,-.0307,0,.0613,-.1985,.9782,0,0,.1634,0,1)},
        {frame: 35, value: _M(.1776,-.9709,-.1607,0,.9804,.1887,-.0568,0,.0855,-.1475,.9854,0,0,.1634,0,1)},
        {frame: 36, value: _M(.215,-.9702,-.112,0,.9704,.2251,-.0873,0,.1099,-.0899,.9899,0,0,.1634,0,1)},
        {frame: 37, value: _M(.2531,-.9653,-.0643,0,.9584,.2592,-.1194,0,.1319,-.0314,.9908,0,0,.1634,0,1)},
        {frame: 38, value: _M(.2885,-.9572,-.0217,0,.9457,.2884,-.15,0,.1499,.0228,.9884,0,0,.1634,0,1)},
        {frame: 39, value: _M(.3177,-.9481,.0122,0,.9341,.3107,-.1759,0,.163,.0673,.9843,0,0,.1634,0,1)},
        {frame: 40, value: _M(.3336,-.9422,.0303,0,.9274,.3222,-.1902,0,.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 41, value: _M(.3242,-.9458,.0197,0,.9314,.3155,-.1818,0,.1657,.0773,.9831,0,0,.1634,0,1)},
        {frame: 42, value: _M(.3008,-.9537,-.0073,0,.9409,.298,-.1608,0,.1556,.0415,.987,0,0,.1634,0,1)},
        {frame: 43, value: _M(.2741,-.9609,-.0388,0,.951,.2769,-.1375,0,.1428,.0008,.9897,0,0,.1634,0,1)},
        {frame: 44, value: _M(.2419,-.9672,-.0781,0,.9621,.2495,-.1098,0,.1257,-.0486,.9909,0,0,.1634,0,1)},
        {frame: 45, value: _M(.2075,-.9706,-.1216,0,.9726,.2181,-.0811,0,.1052,-.1014,.9893,0,0,.1634,0,1)},
        {frame: 46, value: _M(.1705,-.9705,-.1702,0,.9821,.1815,-.0511,0,.0805,-.1585,.9841,0,0,.1634,0,1)},
        {frame: 47, value: _M(.1343,-.9663,-.2198,0,.9895,.1427,-.0228,0,.0534,-.2144,.9753,0,0,.1634,0,1)},
        {frame: 48, value: _M(.1023,-.9587,-.2653,0,.9944,.1058,.0013,0,.0268,-.264,.9642,0,0,.1634,0,1)},
        {frame: 49, value: _M(.0773,-.9501,-.3023,0,.997,.0749,.0195,0,.0041,-.3029,.953,0,0,.1634,0,1)},
        {frame: 50, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 60, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 61, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 70, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 130, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 140, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 202, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("weapon.bone", skeleton,skeleton.bones[22], _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1), _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1));
        bone.length = .3374;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 16, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 30, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 50, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 60, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 61, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 70, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 130, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 140, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 202, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.R", skeleton,skeleton.bones[21], _M(.5218,.0441,.8519,0,-.6263,.6979,.3475,0,-.5792,-.7149,.3917,0,-.1446,.7402,.1228,1), _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1));
        bone.length = .1072;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 1, value: _M(.5363,.0233,.8437,0,-.5883,.727,.354,0,-.6052,-.6862,.4036,0,-.1403,.743,.1229,1)},
        {frame: 2, value: _M(.5695,-.033,.8213,0,-.4723,.8047,.3598,0,-.6728,-.5928,.4427,0,-.1283,.7516,.1224,1)},
        {frame: 3, value: _M(.5979,-.1063,.7945,0,-.3203,.8769,.3583,0,-.7348,-.4687,.4903,0,-.1138,.7619,.1218,1)},
        {frame: 4, value: _M(.61,-.1608,.776,0,-.2069,.9129,.3518,0,-.765,-.3751,.5236,0,-.1036,.7692,.1214,1)},
        {frame: 5, value: _M(.6128,-.1823,.7689,0,-.162,.9234,.348,0,-.7735,-.3379,.5363,0,-.0996,.772,.1212,1)},
        {frame: 7, value: _M(.3455,-.0178,.9383,0,-.7176,.6392,.2764,0,-.6047,-.7688,.2081,0,-.1518,.7258,.1064,1)},
        {frame: 8, value: _M(.267,.1785,.947,0,-.6895,.722,.0583,0,-.6733,-.6685,.3158,0,-.1556,.7423,.0895,1)},
        {frame: 9, value: _M(.2989,.2773,.9131,0,-.606,.7943,-.0429,0,-.7372,-.5405,.4055,0,-.152,.7583,.0828,1)},
        {frame: 10, value: _M(.3035,.272,.9132,0,-.6078,.7934,-.0344,0,-.7338,-.5446,.4061,0,-.1519,.7579,.0836,1)},
        {frame: 11, value: _M(.323,.25,.9128,0,-.6139,.7894,.001,0,-.7203,-.5607,.4084,0,-.1512,.7563,.0872,1)},
        {frame: 12, value: _M(.3591,.21,.9094,0,-.6229,.7796,.066,0,-.695,-.5901,.4107,0,-.15,.7533,.0937,1)},
        {frame: 13, value: _M(.4128,.1525,.898,0,-.6306,.7592,.161,0,-.6572,-.6328,.4096,0,-.1482,.7489,.1034,1)},
        {frame: 14, value: _M(.4695,.0942,.8779,0,-.6319,.7303,.2595,0,-.6167,-.6766,.4024,0,-.1464,.7443,.1135,1)},
        {frame: 15, value: _M(.5094,.0547,.8588,0,-.6284,.7055,.3278,0,-.5879,-.7066,.3938,0,-.145,.7411,.1207,1)},
        {frame: 16, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 30, value: _M(.5954,-.0881,.7986,0,-.6271,.5705,.5305,0,-.5023,-.8166,.2844,0,-.1417,.7218,.1392,1)},
        {frame: 31, value: _M(.5886,-.086,.8039,0,-.6269,.5792,.521,0,-.5104,-.8106,.287,0,-.1418,.7226,.1384,1)},
        {frame: 32, value: _M(.5715,-.0803,.8167,0,-.626,.6008,.4971,0,-.5306,-.7954,.2931,0,-.1423,.7246,.1364,1)},
        {frame: 33, value: _M(.5518,-.073,.8308,0,-.624,.6247,.4694,0,-.5533,-.7774,.2992,0,-.1427,.727,.1342,1)},
        {frame: 34, value: _M(.5276,-.0632,.8472,0,-.62,.6531,.4348,0,-.5807,-.7547,.3054,0,-.1433,.7298,.1314,1)},
        {frame: 35, value: _M(.501,-.0513,.8639,0,-.6138,.6827,.3965,0,-.6101,-.7289,.3105,0,-.1439,.7329,.1284,1)},
        {frame: 36, value: _M(.4716,-.0368,.881,0,-.6048,.7136,.3535,0,-.6417,-.6996,.3143,0,-.1446,.7363,.1251,1)},
        {frame: 37, value: _M(.4422,-.021,.8967,0,-.5933,.7429,.31,0,-.6726,-.6691,.3161,0,-.1453,.7397,.1217,1)},
        {frame: 38, value: _M(.4153,-.0052,.9097,0,-.5808,.7681,.2696,0,-.7001,-.6403,.3159,0,-.1459,.7428,.1187,1)},
        {frame: 39, value: _M(.3934,.0086,.9193,0,-.5694,.7874,.2363,0,-.7218,-.6164,.3146,0,-.1464,.7453,.1162,1)},
        {frame: 40, value: _M(.3815,.0164,.9242,0,-.5627,.7973,.2181,0,-.7333,-.6033,.3134,0,-.1467,.7467,.1148,1)},
        {frame: 41, value: _M(.3885,.0119,.9214,0,-.5668,.7914,.2288,0,-.7265,-.6111,.3142,0,-.1466,.7459,.1156,1)},
        {frame: 42, value: _M(.4061,.0006,.9138,0,-.5763,.7762,.2556,0,-.7092,-.6304,.3156,0,-.1461,.7438,.1176,1)},
        {frame: 43, value: _M(.4262,-.0116,.9046,0,-.5862,.758,.2859,0,-.689,-.6521,.3162,0,-.1457,.7415,.1199,1)},
        {frame: 44, value: _M(.4508,-.0257,.8923,0,-.5969,.7345,.3227,0,-.6637,-.6781,.3158,0,-.1451,.7387,.1227,1)},
        {frame: 45, value: _M(.4774,-.0398,.8778,0,-.6067,.7077,.3621,0,-.6356,-.7054,.3137,0,-.1445,.7356,.1257,1)},
        {frame: 46, value: _M(.5067,-.0539,.8604,0,-.6153,.6765,.4047,0,-.6039,-.7345,.3096,0,-.1438,.7322,.129,1)},
        {frame: 47, value: _M(.536,-.0667,.8416,0,-.6216,.6434,.4469,0,-.5713,-.7626,.3034,0,-.1431,.7288,.1323,1)},
        {frame: 48, value: _M(.5625,-.0771,.8232,0,-.6253,.6118,.4845,0,-.541,-.7873,.296,0,-.1425,.7257,.1354,1)},
        {frame: 49, value: _M(.5838,-.0845,.8075,0,-.6268,.5853,.5144,0,-.516,-.8064,.2888,0,-.142,.7232,.1379,1)},
        {frame: 50, value: _M(.5954,-.0881,.7986,0,-.6271,.5705,.5305,0,-.5023,-.8166,.2844,0,-.1417,.7218,.1392,1)},
        {frame: 60, value: _M(.5954,-.0881,.7986,0,-.6271,.5705,.5305,0,-.5023,-.8166,.2844,0,-.1417,.7218,.1392,1)},
        {frame: 61, value: _M(.5954,-.0881,.7986,0,-.6271,.5705,.5305,0,-.5023,-.8166,.2844,0,-.1417,.7218,.1392,1)},
        {frame: 70, value: _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1)},
        {frame: 130, value: _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1)},
        {frame: 140, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 141, value: _M(.5225,.0423,.8516,0,-.6264,.6967,.3497,0,-.5784,-.7161,.3905,0,-.1446,.74,.123,1)},
        {frame: 142, value: _M(.5218,.0441,.8519,0,-.6263,.6979,.3475,0,-.5792,-.7149,.3917,0,-.1446,.7402,.1228,1)},
        {frame: 143, value: _M(.5205,.047,.8525,0,-.6261,.6999,.3437,0,-.5805,-.7127,.3937,0,-.1447,.7405,.1225,1)},
        {frame: 144, value: _M(.5188,.0511,.8534,0,-.6259,.7026,.3384,0,-.5823,-.7097,.3965,0,-.1447,.7409,.122,1)},
        {frame: 145, value: _M(.5166,.0562,.8544,0,-.6256,.7061,.3318,0,-.5846,-.7059,.3999,0,-.1447,.7414,.1213,1)},
        {frame: 146, value: _M(.5141,.062,.8555,0,-.6252,.7099,.3243,0,-.5872,-.7016,.4038,0,-.1448,.742,.1206,1)},
        {frame: 147, value: _M(.5115,.0682,.8566,0,-.6248,.7138,.3163,0,-.5899,-.697,.4078,0,-.1449,.7427,.1199,1)},
        {frame: 148, value: _M(.509,.0743,.8576,0,-.6244,.7177,.3083,0,-.5926,-.6924,.4117,0,-.1449,.7433,.1191,1)},
        {frame: 149, value: _M(.5066,.0801,.8585,0,-.6239,.7213,.3008,0,-.5951,-.688,.4153,0,-.145,.7439,.1184,1)},
        {frame: 150, value: _M(.5044,.0853,.8592,0,-.6235,.7244,.2941,0,-.5974,-.6841,.4186,0,-.145,.7444,.1178,1)},
        {frame: 151, value: _M(.5025,.0898,.8599,0,-.6231,.7271,.2882,0,-.5994,-.6806,.4214,0,-.1451,.7449,.1172,1)},
        {frame: 152, value: _M(.5007,.0943,.8605,0,-.6227,.7298,.2824,0,-.6013,-.6772,.4241,0,-.1451,.7454,.1167,1)},
        {frame: 153, value: _M(.4986,.0993,.8611,0,-.6222,.7327,.2758,0,-.6035,-.6733,.4271,0,-.1451,.7459,.1161,1)},
        {frame: 154, value: _M(.4964,.1047,.8617,0,-.6217,.7358,.2687,0,-.6059,-.6691,.4304,0,-.1452,.7464,.1154,1)},
        {frame: 155, value: _M(.4942,.1102,.8623,0,-.6211,.7388,.2616,0,-.6083,-.6649,.4336,0,-.1452,.747,.1147,1)},
        {frame: 156, value: _M(.4922,.1152,.8628,0,-.6205,.7416,.255,0,-.6105,-.6609,.4365,0,-.1453,.7475,.1141,1)},
        {frame: 157, value: _M(.4905,.1194,.8632,0,-.6201,.7438,.2494,0,-.6123,-.6576,.4389,0,-.1453,.7479,.1136,1)},
        {frame: 158, value: _M(.4893,.1225,.8635,0,-.6197,.7455,.2454,0,-.6136,-.6552,.4406,0,-.1454,.7482,.1132,1)},
        {frame: 159, value: _M(.4886,.1243,.8636,0,-.6195,.7464,.2431,0,-.6144,-.6538,.4417,0,-.1454,.7484,.113,1)},
        {frame: 160, value: _M(.4883,.1248,.8637,0,-.6194,.7467,.2423,0,-.6147,-.6533,.442,0,-.1454,.7485,.113,1)},
        {frame: 161, value: _M(.4886,.1243,.8636,0,-.6195,.7464,.243,0,-.6144,-.6538,.4417,0,-.1454,.7484,.113,1)},
        {frame: 162, value: _M(.4892,.1226,.8635,0,-.6197,.7455,.2452,0,-.6137,-.6551,.4407,0,-.1454,.7482,.1132,1)},
        {frame: 163, value: _M(.4904,.1197,.8632,0,-.62,.744,.249,0,-.6124,-.6573,.4391,0,-.1453,.7479,.1135,1)},
        {frame: 164, value: _M(.492,.1158,.8629,0,-.6205,.7419,.2542,0,-.6107,-.6605,.4368,0,-.1453,.7475,.114,1)},
        {frame: 165, value: _M(.4939,.1109,.8624,0,-.621,.7392,.2606,0,-.6086,-.6643,.434,0,-.1452,.7469,.1145,1)},
        {frame: 166, value: _M(.4961,.1054,.8618,0,-.6216,.7362,.2678,0,-.6062,-.6685,.4308,0,-.1451,.7464,.1151,1)},
        {frame: 167, value: _M(.4984,.0998,.8612,0,-.6221,.733,.2751,0,-.6037,-.6729,.4275,0,-.1451,.7457,.1158,1)},
        {frame: 168, value: _M(.5006,.0944,.8605,0,-.6227,.7299,.2822,0,-.6014,-.6771,.4242,0,-.145,.7452,.1164,1)},
        {frame: 169, value: _M(.5027,.0895,.8598,0,-.6231,.7269,.2886,0,-.5992,-.6809,.4212,0,-.145,.7446,.117,1)},
        {frame: 170, value: _M(.5045,.0851,.8592,0,-.6235,.7243,.2943,0,-.5973,-.6842,.4185,0,-.1449,.7442,.1175,1)},
        {frame: 171, value: _M(.5063,.0808,.8586,0,-.6239,.7217,.3,0,-.5954,-.6875,.4157,0,-.1448,.7437,.118,1)},
        {frame: 172, value: _M(.5084,.0758,.8578,0,-.6243,.7186,.3065,0,-.5932,-.6913,.4126,0,-.1448,.7431,.1186,1)},
        {frame: 173, value: _M(.5106,.0703,.8569,0,-.6247,.7152,.3135,0,-.5908,-.6954,.4091,0,-.1447,.7426,.1192,1)},
        {frame: 174, value: _M(.513,.0647,.8559,0,-.6251,.7116,.3209,0,-.5883,-.6996,.4055,0,-.1446,.7419,.1199,1)},
        {frame: 175, value: _M(.5154,.0591,.8549,0,-.6254,.708,.3281,0,-.5859,-.7038,.4018,0,-.1446,.7414,.1205,1)},
        {frame: 176, value: _M(.5175,.0541,.854,0,-.6257,.7047,.3345,0,-.5837,-.7075,.3985,0,-.1445,.7408,.1211,1)},
        {frame: 177, value: _M(.5193,.05,.8532,0,-.626,.7019,.3399,0,-.5818,-.7105,.3957,0,-.1445,.7404,.1216,1)},
        {frame: 178, value: _M(.5206,.0469,.8525,0,-.6261,.6998,.3438,0,-.5805,-.7128,.3937,0,-.1444,.74,.122,1)},
        {frame: 179, value: _M(.5214,.045,.8521,0,-.6262,.6985,.3463,0,-.5796,-.7142,.3924,0,-.1444,.7399,.1223,1)},
        {frame: 180, value: _M(.5218,.0441,.8519,0,-.6263,.6979,.3474,0,-.5792,-.7148,.3918,0,-.1444,.7398,.1224,1)},
        {frame: 181, value: _M(.5219,.0438,.8519,0,-.6263,.6977,.3478,0,-.5791,-.715,.3916,0,-.1444,.7398,.1225,1)},
        {frame: 182, value: _M(.522,.0436,.8518,0,-.6263,.6975,.3481,0,-.579,-.7152,.3914,0,-.1444,.7398,.1226,1)},
        {frame: 183, value: _M(.5221,.0433,.8518,0,-.6263,.6973,.3485,0,-.5789,-.7154,.3912,0,-.1444,.7398,.1227,1)},
        {frame: 184, value: _M(.5222,.0431,.8517,0,-.6263,.6972,.3488,0,-.5788,-.7156,.391,0,-.1444,.7398,.1227,1)},
        {frame: 185, value: _M(.5223,.0428,.8517,0,-.6264,.697,.3491,0,-.5787,-.7158,.3909,0,-.1444,.7398,.1228,1)},
        {frame: 186, value: _M(.5224,.0426,.8516,0,-.6264,.6969,.3493,0,-.5786,-.7159,.3908,0,-.1444,.7398,.1228,1)},
        {frame: 187, value: _M(.5225,.0425,.8516,0,-.6264,.6968,.3496,0,-.5785,-.7161,.3906,0,-.1444,.7398,.1229,1)},
        {frame: 188, value: _M(.5226,.0423,.8516,0,-.6264,.6966,.3498,0,-.5784,-.7162,.3905,0,-.1444,.7398,.1229,1)},
        {frame: 189, value: _M(.5226,.0422,.8515,0,-.6264,.6966,.3499,0,-.5784,-.7163,.3904,0,-.1444,.7398,.123,1)},
        {frame: 190, value: _M(.5227,.0421,.8515,0,-.6264,.6965,.3501,0,-.5783,-.7163,.3904,0,-.1445,.7398,.123,1)},
        {frame: 191, value: _M(.5227,.042,.8515,0,-.6264,.6964,.3502,0,-.5783,-.7164,.3903,0,-.1445,.7398,.123,1)},
        {frame: 192, value: _M(.5227,.0419,.8515,0,-.6264,.6964,.3503,0,-.5783,-.7165,.3903,0,-.1445,.7399,.1231,1)},
        {frame: 193, value: _M(.5227,.0419,.8515,0,-.6264,.6963,.3503,0,-.5782,-.7165,.3902,0,-.1445,.7399,.1231,1)},
        {frame: 194, value: _M(.5228,.0418,.8515,0,-.6264,.6963,.3504,0,-.5782,-.7165,.3902,0,-.1445,.7399,.1231,1)},
        {frame: 195, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3504,0,-.5782,-.7165,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 197, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3504,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 198, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 202, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone4.R", skeleton,skeleton.bones[26], _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1), _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1));
        bone.length = .0895;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 16, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 30, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 31, value: _M(-.2486,.5252,.8139,0,.0482,.8459,-.5312,0,-.9674,-.0928,-.2356,0,0,.1072,0,1)},
        {frame: 32, value: _M(-.2489,.5266,.8129,0,.0433,.8445,-.5338,0,-.9676,-.0977,-.233,0,0,.1072,0,1)},
        {frame: 33, value: _M(-.2493,.5282,.8117,0,.0376,.8428,-.5368,0,-.9677,-.1033,-.23,0,0,.1072,0,1)},
        {frame: 34, value: _M(-.2497,.5301,.8104,0,.0308,.8408,-.5405,0,-.9678,-.11,-.2263,0,0,.1072,0,1)},
        {frame: 35, value: _M(-.2503,.5321,.8088,0,.0233,.8385,-.5444,0,-.9679,-.1174,-.2223,0,0,.1072,0,1)},
        {frame: 36, value: _M(-.2509,.5343,.8072,0,.0152,.8359,-.5486,0,-.9679,-.1254,-.2178,0,0,.1072,0,1)},
        {frame: 37, value: _M(-.2515,.5366,.8055,0,.0069,.8332,-.5529,0,-.9678,-.1335,-.2133,0,0,.1072,0,1)},
        {frame: 38, value: _M(-.2521,.5386,.804,0,-.0006,.8307,-.5567,0,-.9677,-.1408,-.2091,0,0,.1072,0,1)},
        {frame: 39, value: _M(-.2526,.5402,.8027,0,-.0067,.8286,-.5598,0,-.9675,-.1468,-.2057,0,0,.1072,0,1)},
        {frame: 40, value: _M(-.2529,.5411,.802,0,-.0101,.8274,-.5615,0,-.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 41, value: _M(-.2527,.5406,.8024,0,-.0081,.8281,-.5605,0,-.9675,-.1482,-.2049,0,0,.1072,0,1)},
        {frame: 42, value: _M(-.2523,.5393,.8034,0,-.0032,.8298,-.558,0,-.9676,-.1433,-.2077,0,0,.1072,0,1)},
        {frame: 43, value: _M(-.2519,.5378,.8046,0,.0025,.8317,-.5552,0,-.9678,-.1379,-.2108,0,0,.1072,0,1)},
        {frame: 44, value: _M(-.2513,.5359,.806,0,.0093,.834,-.5516,0,-.9679,-.1311,-.2146,0,0,.1072,0,1)},
        {frame: 45, value: _M(-.2508,.5339,.8075,0,.0168,.8364,-.5478,0,-.9679,-.1238,-.2187,0,0,.1072,0,1)},
        {frame: 46, value: _M(-.2502,.5317,.8092,0,.0249,.839,-.5436,0,-.9679,-.1158,-.2231,0,0,.1072,0,1)},
        {frame: 47, value: _M(-.2496,.5294,.8108,0,.0332,.8415,-.5392,0,-.9678,-.1077,-.2276,0,0,.1072,0,1)},
        {frame: 48, value: _M(-.2491,.5273,.8124,0,.0407,.8437,-.5352,0,-.9676,-.1002,-.2316,0,0,.1072,0,1)},
        {frame: 49, value: _M(-.2486,.5256,.8136,0,.0468,.8455,-.5319,0,-.9675,-.0942,-.2348,0,0,.1072,0,1)},
        {frame: 50, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 60, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 61, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 70, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 130, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 140, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 202, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.L", skeleton,skeleton.bones[5], _M(.9316,.3558,-.0738,0,.3524,-.8349,.4228,0,.0888,-.4199,-.9032,0,.2401,.1528,-.0013,1), _M(.9969,.0775,-.0101,0,.0781,-.9839,.1607,0,.0025,-.161,-.9869,0,.2401,.1528,-.0013,1));
        bone.length = 1.3168;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 1, value: _M(.9333,.3522,-.0699,0,.3448,-.8246,.4485,0,.1004,-.4427,-.8911,0,.2401,.1528,-.0013,1)},
        {frame: 2, value: _M(.9391,.3389,-.0561,0,.325,-.8237,.4647,0,.1113,-.4547,-.8837,0,.2401,.1528,-.0013,1)},
        {frame: 3, value: _M(.9478,.3164,-.0388,0,.3012,-.8492,.4337,0,.1043,-.4227,-.9002,0,.2401,.1528,-.0013,1)},
        {frame: 4, value: _M(.9567,.2901,-.0248,0,.2781,-.8852,.373,0,.0862,-.3638,-.9275,0,.2401,.1528,-.0013,1)},
        {frame: 5, value: _M(.9711,.2386,-.0083,0,.235,-.9494,.2082,0,.0418,-.2042,-.9781,0,.2401,.1528,-.0013,1)},
        {frame: 6, value: _M(.9567,.2901,-.0245,0,.2868,-.9245,.2509,0,.0501,-.2471,-.9677,0,.2401,.1528,-.0013,1)},
        {frame: 7, value: _M(.9211,.3783,-.0917,0,.3725,-.7883,.4896,0,.113,-.4852,-.8671,0,.2401,.1528,-.0013,1)},
        {frame: 8, value: _M(.8913,.3968,-.2195,0,.3743,-.3705,.8501,0,.256,-.8398,-.4787,0,.2401,.1528,-.0013,1)},
        {frame: 9, value: _M(.8912,.3562,-.2809,0,.3177,-.0481,.947,0,.3238,-.9332,-.1561,0,.2401,.1528,-.0013,1)},
        {frame: 10, value: _M(.8915,.3586,-.2769,0,.3208,-.0682,.9447,0,.3199,-.931,-.1758,0,.2401,.1528,-.0013,1)},
        {frame: 11, value: _M(.8923,.3682,-.2613,0,.333,-.1461,.9315,0,.3048,-.9182,-.2529,0,.2401,.1528,-.0013,1)},
        {frame: 12, value: _M(.8954,.3813,-.23,0,.3518,-.289,.8903,0,.273,-.8781,-.3929,0,.2401,.1528,-.0013,1)},
        {frame: 13, value: _M(.9037,.3888,-.1796,0,.3688,-.4933,.7878,0,.2177,-.7782,-.5891,0,.2401,.1528,-.0013,1)},
        {frame: 14, value: _M(.9165,.3802,-.1243,0,.3697,-.6869,.6257,0,.1525,-.6194,-.7701,0,.2401,.1528,-.0013,1)},
        {frame: 15, value: _M(.9276,.3634,-.0862,0,.3585,-.8014,.4787,0,.1049,-.475,-.8737,0,.2401,.1528,-.0013,1)},
        {frame: 16, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 30, value: _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 31, value: _M(.998,.0603,-.0186,0,.0623,-.9888,.1358,0,-.0102,-.1367,-.9906,0,.2401,.1528,-.0013,1)},
        {frame: 32, value: _M(.9985,.0419,-.0345,0,.0519,-.9241,.3786,0,-.016,-.3798,-.9249,0,.2401,.1528,-.0013,1)},
        {frame: 33, value: _M(.999,.0148,-.0411,0,.0378,-.7655,.6424,0,-.0219,-.6433,-.7653,0,.2401,.1528,-.0013,1)},
        {frame: 34, value: _M(.9994,.0005,-.0337,0,.0291,-.518,.8549,0,-.017,-.8554,-.5177,0,.2401,.1528,-.0013,1)},
        {frame: 35, value: _M(.9995,.0056,-.0316,0,.0314,-.3761,.926,0,-.0066,-.9266,-.3761,0,.2401,.1528,-.0013,1)},
        {frame: 36, value: _M(.9994,.0121,-.033,0,.0351,-.3017,.9528,0,.0015,-.9533,-.3019,0,.2401,.1528,-.0013,1)},
        {frame: 37, value: _M(.9993,.0184,-.0333,0,.0376,-.351,.9356,0,.0055,-.9362,-.3514,0,.2401,.1528,-.0013,1)},
        {frame: 38, value: _M(.9994,.02,-.0295,0,.0353,-.4393,.8976,0,.005,-.8981,-.4397,0,.2401,.1528,-.0013,1)},
        {frame: 39, value: _M(.9996,.019,-.0222,0,.029,-.5642,.8252,0,.0032,-.8255,-.5645,0,.2401,.1528,-.0013,1)},
        {frame: 40, value: _M(.9998,.007,-.021,0,.021,-.5973,.8017,0,-.0069,-.802,-.5973,0,.2401,.1528,-.0013,1)},
        {frame: 41, value: _M(.9997,.0025,-.0248,0,.0218,-.5737,.8188,0,-.0122,-.8191,-.5736,0,.2401,.1528,-.0013,1)},
        {frame: 42, value: _M(.9996,.0046,-.0275,0,.0246,-.6097,.7923,0,-.0131,-.7927,-.6095,0,.2401,.1528,-.0013,1)},
        {frame: 43, value: _M(.9995,.0155,-.0279,0,.0302,-.7401,.6718,0,-.0102,-.6723,-.7402,0,.2401,.1528,-.0013,1)},
        {frame: 44, value: _M(.9992,.0333,-.0218,0,.0395,-.8956,.4431,0,-.0048,-.4436,-.8962,0,.2401,.1528,-.0013,1)},
        {frame: 45, value: _M(.9989,.0466,-.0099,0,.0476,-.9872,.1525,0,-.0027,-.1528,-.9883,0,.2401,.1528,-.0013,1)},
        {frame: 46, value: _M(.9985,.0545,-.0025,0,.0544,-.9982,-.0271,0,-.004,.0269,-.9996,0,.2401,.1528,-.0013,1)},
        {frame: 47, value: _M(.9981,.062,-.0013,0,.0618,-.9964,-.0576,0,-.0049,.0574,-.9983,0,.2401,.1528,-.0013,1)},
        {frame: 48, value: _M(.9978,.0661,.0006,0,.0658,-.9925,-.1035,0,-.0062,.1033,-.9946,0,.2401,.1528,-.0013,1)},
        {frame: 49, value: _M(.9976,.0686,-.0001,0,.0683,-.9931,-.0957,0,-.0066,.0954,-.9954,0,.2401,.1528,-.0013,1)},
        {frame: 50, value: _M(.9975,.0695,-.0095,0,.0697,-.9973,.0222,0,-.0079,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 60, value: _M(.9975,.0695,-.0095,0,.0697,-.9973,.0222,0,-.0079,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 61, value: _M(.9975,.0695,-.0095,0,.0697,-.9973,.0222,0,-.0079,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 70, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4025,0,.0347,-.4023,-.9148,0,.2401,.1528,-.0013,1)},
        {frame: 71, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4024,0,.0347,-.4023,-.9149,0,.2401,.1528,-.0013,1)},
        {frame: 72, value: _M(.9864,.1607,-.0333,0,.1604,-.9014,.4021,0,.0347,-.402,-.915,0,.2401,.1528,-.0013,1)},
        {frame: 73, value: _M(.9864,.1607,-.0332,0,.1604,-.9016,.4017,0,.0346,-.4016,-.9152,0,.2401,.1528,-.0013,1)},
        {frame: 74, value: _M(.9864,.1607,-.0332,0,.1604,-.9019,.4011,0,.0345,-.401,-.9154,0,.2401,.1528,-.0013,1)},
        {frame: 75, value: _M(.9865,.1607,-.0332,0,.1604,-.9022,.4004,0,.0344,-.4003,-.9157,0,.2401,.1528,-.0013,1)},
        {frame: 76, value: _M(.9865,.1606,-.0331,0,.1604,-.9026,.3995,0,.0343,-.3994,-.9161,0,.2401,.1528,-.0013,1)},
        {frame: 77, value: _M(.9865,.1606,-.0331,0,.1604,-.903,.3985,0,.0342,-.3984,-.9166,0,.2401,.1528,-.0013,1)},
        {frame: 78, value: _M(.9865,.1606,-.033,0,.1604,-.9036,.3973,0,.034,-.3972,-.9171,0,.2401,.1528,-.0013,1)},
        {frame: 79, value: _M(.9865,.1606,-.0329,0,.1604,-.9041,.396,0,.0338,-.3959,-.9177,0,.2401,.1528,-.0013,1)},
        {frame: 80, value: _M(.9865,.1605,-.0328,0,.1604,-.9048,.3946,0,.0336,-.3945,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 81, value: _M(.9865,.1605,-.0328,0,.1603,-.9055,.393,0,.0334,-.3929,-.919,0,.2401,.1528,-.0013,1)},
        {frame: 82, value: _M(.9865,.1605,-.0327,0,.1603,-.9062,.3913,0,.0332,-.3913,-.9197,0,.2401,.1528,-.0013,1)},
        {frame: 83, value: _M(.9865,.1604,-.0326,0,.1603,-.9069,.3896,0,.033,-.3895,-.9204,0,.2401,.1528,-.0013,1)},
        {frame: 84, value: _M(.9865,.1604,-.0325,0,.1603,-.9077,.3877,0,.0327,-.3877,-.9212,0,.2401,.1528,-.0013,1)},
        {frame: 85, value: _M(.9865,.1603,-.0324,0,.1603,-.9085,.3859,0,.0325,-.3858,-.922,0,.2401,.1528,-.0013,1)},
        {frame: 86, value: _M(.9865,.1603,-.0323,0,.1603,-.9093,.384,0,.0322,-.384,-.9228,0,.2401,.1528,-.0013,1)},
        {frame: 87, value: _M(.9866,.1602,-.0321,0,.1603,-.9101,.3821,0,.032,-.3821,-.9236,0,.2401,.1528,-.0013,1)},
        {frame: 88, value: _M(.9866,.1602,-.032,0,.1603,-.9109,.3802,0,.0317,-.3803,-.9243,0,.2401,.1528,-.0013,1)},
        {frame: 89, value: _M(.9866,.1602,-.0319,0,.1602,-.9117,.3784,0,.0315,-.3785,-.9251,0,.2401,.1528,-.0013,1)},
        {frame: 90, value: _M(.9866,.1601,-.0319,0,.1602,-.9124,.3767,0,.0313,-.3768,-.9258,0,.2401,.1528,-.0013,1)},
        {frame: 91, value: _M(.9866,.1601,-.0318,0,.1602,-.913,.3751,0,.0311,-.3752,-.9264,0,.2401,.1528,-.0013,1)},
        {frame: 92, value: _M(.9866,.16,-.0317,0,.1602,-.9136,.3737,0,.0309,-.3737,-.927,0,.2401,.1528,-.0013,1)},
        {frame: 93, value: _M(.9866,.16,-.0316,0,.1602,-.9142,.3722,0,.0307,-.3723,-.9276,0,.2401,.1528,-.0013,1)},
        {frame: 94, value: _M(.9866,.16,-.0315,0,.1602,-.9147,.3711,0,.0305,-.3711,-.9281,0,.2401,.1528,-.0013,1)},
        {frame: 95, value: _M(.9866,.16,-.0315,0,.1602,-.9151,.37,0,.0304,-.3701,-.9285,0,.2401,.1528,-.0013,1)},
        {frame: 96, value: _M(.9866,.1599,-.0314,0,.1602,-.9154,.3692,0,.0303,-.3693,-.9288,0,.2401,.1528,-.0013,1)},
        {frame: 97, value: _M(.9866,.1599,-.0314,0,.1602,-.9157,.3686,0,.0302,-.3687,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 98, value: _M(.9866,.1599,-.0314,0,.1602,-.9159,.3681,0,.0301,-.3682,-.9293,0,.2401,.1528,-.0013,1)},
        {frame: 99, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3678,0,.0301,-.3679,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 100, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3677,0,.0301,-.3678,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 101, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3678,0,.0301,-.3679,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 102, value: _M(.9866,.1599,-.0314,0,.1602,-.9159,.3681,0,.0301,-.3682,-.9293,0,.2401,.1528,-.0013,1)},
        {frame: 103, value: _M(.9866,.1599,-.0314,0,.1602,-.9157,.3686,0,.0302,-.3687,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 104, value: _M(.9866,.1599,-.0314,0,.1602,-.9154,.3692,0,.0303,-.3693,-.9288,0,.2401,.1528,-.0013,1)},
        {frame: 105, value: _M(.9866,.16,-.0315,0,.1602,-.9151,.37,0,.0304,-.3701,-.9285,0,.2401,.1528,-.0013,1)},
        {frame: 106, value: _M(.9866,.16,-.0315,0,.1602,-.9147,.3711,0,.0305,-.3711,-.9281,0,.2401,.1528,-.0013,1)},
        {frame: 107, value: _M(.9866,.16,-.0316,0,.1602,-.9142,.3722,0,.0307,-.3723,-.9276,0,.2401,.1528,-.0013,1)},
        {frame: 108, value: _M(.9866,.16,-.0317,0,.1602,-.9136,.3737,0,.0309,-.3737,-.927,0,.2401,.1528,-.0013,1)},
        {frame: 109, value: _M(.9866,.1601,-.0318,0,.1602,-.913,.3751,0,.0311,-.3752,-.9264,0,.2401,.1528,-.0013,1)},
        {frame: 110, value: _M(.9866,.1601,-.0319,0,.1602,-.9124,.3767,0,.0313,-.3768,-.9258,0,.2401,.1528,-.0013,1)},
        {frame: 111, value: _M(.9866,.1602,-.0319,0,.1602,-.9117,.3784,0,.0315,-.3785,-.9251,0,.2401,.1528,-.0013,1)},
        {frame: 112, value: _M(.9866,.1602,-.032,0,.1603,-.9109,.3802,0,.0317,-.3803,-.9243,0,.2401,.1528,-.0013,1)},
        {frame: 113, value: _M(.9866,.1602,-.0321,0,.1603,-.9101,.3821,0,.032,-.3821,-.9236,0,.2401,.1528,-.0013,1)},
        {frame: 114, value: _M(.9865,.1603,-.0323,0,.1603,-.9093,.384,0,.0322,-.384,-.9228,0,.2401,.1528,-.0013,1)},
        {frame: 115, value: _M(.9865,.1603,-.0324,0,.1603,-.9085,.3859,0,.0325,-.3858,-.922,0,.2401,.1528,-.0013,1)},
        {frame: 116, value: _M(.9865,.1604,-.0325,0,.1603,-.9077,.3877,0,.0327,-.3877,-.9212,0,.2401,.1528,-.0013,1)},
        {frame: 117, value: _M(.9865,.1604,-.0326,0,.1603,-.9069,.3896,0,.033,-.3895,-.9204,0,.2401,.1528,-.0013,1)},
        {frame: 118, value: _M(.9865,.1605,-.0327,0,.1603,-.9062,.3913,0,.0332,-.3913,-.9197,0,.2401,.1528,-.0013,1)},
        {frame: 119, value: _M(.9865,.1605,-.0328,0,.1603,-.9055,.393,0,.0334,-.3929,-.919,0,.2401,.1528,-.0013,1)},
        {frame: 120, value: _M(.9865,.1605,-.0328,0,.1604,-.9048,.3946,0,.0336,-.3945,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 121, value: _M(.9865,.1606,-.0329,0,.1604,-.9041,.396,0,.0338,-.3959,-.9177,0,.2401,.1528,-.0013,1)},
        {frame: 122, value: _M(.9865,.1606,-.033,0,.1604,-.9036,.3973,0,.034,-.3972,-.9171,0,.2401,.1528,-.0013,1)},
        {frame: 123, value: _M(.9865,.1606,-.0331,0,.1604,-.903,.3985,0,.0342,-.3984,-.9166,0,.2401,.1528,-.0013,1)},
        {frame: 124, value: _M(.9865,.1606,-.0331,0,.1604,-.9026,.3995,0,.0343,-.3994,-.9161,0,.2401,.1528,-.0013,1)},
        {frame: 125, value: _M(.9865,.1607,-.0332,0,.1604,-.9022,.4004,0,.0344,-.4003,-.9157,0,.2401,.1528,-.0013,1)},
        {frame: 126, value: _M(.9864,.1607,-.0332,0,.1604,-.9019,.4011,0,.0345,-.401,-.9154,0,.2401,.1528,-.0013,1)},
        {frame: 127, value: _M(.9864,.1607,-.0332,0,.1604,-.9016,.4017,0,.0346,-.4016,-.9152,0,.2401,.1528,-.0013,1)},
        {frame: 128, value: _M(.9864,.1607,-.0333,0,.1604,-.9014,.4021,0,.0347,-.402,-.915,0,.2401,.1528,-.0013,1)},
        {frame: 129, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4024,0,.0347,-.4023,-.9149,0,.2401,.1528,-.0013,1)},
        {frame: 130, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4025,0,.0347,-.4023,-.9148,0,.2401,.1528,-.0013,1)},
        {frame: 140, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 141, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 142, value: _M(.9316,.3558,-.0738,0,.3524,-.8349,.4228,0,.0888,-.4199,-.9032,0,.2401,.1528,-.0013,1)},
        {frame: 143, value: _M(.9317,.3557,-.0738,0,.3524,-.8354,.4219,0,.0885,-.4191,-.9036,0,.2401,.1528,-.0013,1)},
        {frame: 144, value: _M(.9317,.3557,-.0737,0,.3524,-.836,.4206,0,.088,-.4179,-.9042,0,.2401,.1528,-.0013,1)},
        {frame: 145, value: _M(.9318,.3556,-.0736,0,.3524,-.8368,.419,0,.0874,-.4163,-.905,0,.2401,.1528,-.0013,1)},
        {frame: 146, value: _M(.9318,.3554,-.0734,0,.3524,-.8378,.4171,0,.0867,-.4145,-.9059,0,.2401,.1528,-.0013,1)},
        {frame: 147, value: _M(.9319,.3553,-.0733,0,.3525,-.8388,.415,0,.086,-.4125,-.9069,0,.2401,.1528,-.0013,1)},
        {frame: 148, value: _M(.9319,.3552,-.0732,0,.3525,-.8399,.4128,0,.0852,-.4105,-.9079,0,.2401,.1528,-.0013,1)},
        {frame: 149, value: _M(.932,.3551,-.073,0,.3525,-.8409,.4106,0,.0844,-.4084,-.9089,0,.2401,.1528,-.0013,1)},
        {frame: 150, value: _M(.9321,.3549,-.0729,0,.3525,-.842,.4084,0,.0836,-.4064,-.9099,0,.2401,.1528,-.0013,1)},
        {frame: 151, value: _M(.9321,.3548,-.0727,0,.3526,-.8429,.4064,0,.0829,-.4044,-.9108,0,.2401,.1528,-.0013,1)},
        {frame: 152, value: _M(.9322,.3547,-.0726,0,.3526,-.8439,.4043,0,.0822,-.4025,-.9117,0,.2401,.1528,-.0013,1)},
        {frame: 153, value: _M(.9322,.3545,-.0724,0,.3526,-.8451,.4019,0,.0813,-.4002,-.9128,0,.2401,.1528,-.0013,1)},
        {frame: 154, value: _M(.9323,.3544,-.0722,0,.3526,-.8463,.3992,0,.0804,-.3976,-.914,0,.2401,.1528,-.0013,1)},
        {frame: 155, value: _M(.9324,.3542,-.072,0,.3527,-.8477,.3962,0,.0793,-.3948,-.9153,0,.2401,.1528,-.0013,1)},
        {frame: 156, value: _M(.9325,.354,-.0718,0,.3527,-.8492,.3929,0,.0781,-.3917,-.9168,0,.2401,.1528,-.0013,1)},
        {frame: 157, value: _M(.9326,.3539,-.0716,0,.3527,-.8508,.3894,0,.0769,-.3884,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 158, value: _M(.9327,.3537,-.0713,0,.3528,-.8525,.3857,0,.0756,-.3849,-.9199,0,.2401,.1528,-.0013,1)},
        {frame: 159, value: _M(.9327,.3535,-.0711,0,.3528,-.8542,.3818,0,.0743,-.3812,-.9215,0,.2401,.1528,-.0013,1)},
        {frame: 160, value: _M(.9328,.3533,-.0708,0,.3528,-.856,.3779,0,.0729,-.3775,-.9231,0,.2401,.1528,-.0013,1)},
        {frame: 161, value: _M(.9329,.3531,-.0706,0,.3529,-.8577,.374,0,.0715,-.3738,-.9247,0,.2401,.1528,-.0013,1)},
        {frame: 162, value: _M(.933,.3529,-.0703,0,.3529,-.8593,.3702,0,.0702,-.3702,-.9263,0,.2401,.1528,-.0013,1)},
        {frame: 163, value: _M(.9331,.3527,-.0701,0,.3529,-.8609,.3666,0,.069,-.3668,-.9277,0,.2401,.1528,-.0013,1)},
        {frame: 164, value: _M(.9332,.3525,-.0699,0,.3529,-.8622,.3633,0,.0678,-.3637,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 165, value: _M(.9333,.3524,-.0697,0,.353,-.8635,.3604,0,.0668,-.3609,-.9302,0,.2401,.1528,-.0013,1)},
        {frame: 166, value: _M(.9333,.3523,-.0695,0,.353,-.8645,.3579,0,.066,-.3586,-.9312,0,.2401,.1528,-.0013,1)},
        {frame: 167, value: _M(.9333,.3522,-.0694,0,.353,-.8652,.356,0,.0653,-.3568,-.9319,0,.2401,.1528,-.0013,1)},
        {frame: 168, value: _M(.9334,.3521,-.0693,0,.353,-.8658,.3546,0,.0649,-.3555,-.9324,0,.2401,.1528,-.0013,1)},
        {frame: 169, value: _M(.9334,.3521,-.0693,0,.353,-.8661,.3538,0,.0646,-.3547,-.9327,0,.2401,.1528,-.0013,1)},
        {frame: 170, value: _M(.9334,.3521,-.0693,0,.353,-.8663,.3536,0,.0645,-.3545,-.9328,0,.2401,.1528,-.0013,1)},
        {frame: 171, value: _M(.9334,.3521,-.0693,0,.353,-.8662,.3538,0,.0646,-.3547,-.9328,0,.2401,.1528,-.0013,1)},
        {frame: 172, value: _M(.9334,.3521,-.0693,0,.353,-.8659,.3545,0,.0648,-.3553,-.9325,0,.2401,.1528,-.0013,1)},
        {frame: 173, value: _M(.9334,.3522,-.0694,0,.353,-.8654,.3556,0,.0652,-.3564,-.9321,0,.2401,.1528,-.0013,1)},
        {frame: 174, value: _M(.9333,.3523,-.0695,0,.353,-.8648,.3571,0,.0657,-.3578,-.9315,0,.2401,.1528,-.0013,1)},
        {frame: 175, value: _M(.9333,.3523,-.0696,0,.353,-.864,.3591,0,.0664,-.3597,-.9307,0,.2401,.1528,-.0013,1)},
        {frame: 176, value: _M(.9332,.3525,-.0698,0,.3529,-.863,.3615,0,.0672,-.3619,-.9298,0,.2401,.1528,-.0013,1)},
        {frame: 177, value: _M(.9332,.3526,-.0699,0,.3529,-.8619,.3642,0,.0681,-.3645,-.9287,0,.2401,.1528,-.0013,1)},
        {frame: 178, value: _M(.9331,.3527,-.0701,0,.3529,-.8606,.3672,0,.0692,-.3674,-.9275,0,.2401,.1528,-.0013,1)},
        {frame: 179, value: _M(.933,.3529,-.0703,0,.3529,-.8592,.3705,0,.0703,-.3705,-.9262,0,.2401,.1528,-.0013,1)},
        {frame: 180, value: _M(.9329,.3531,-.0706,0,.3529,-.8577,.3739,0,.0715,-.3738,-.9248,0,.2401,.1528,-.0013,1)},
        {frame: 181, value: _M(.9329,.3532,-.0708,0,.3528,-.8561,.3776,0,.0728,-.3772,-.9233,0,.2401,.1528,-.0013,1)},
        {frame: 182, value: _M(.9328,.3534,-.071,0,.3528,-.8545,.3813,0,.0741,-.3807,-.9217,0,.2401,.1528,-.0013,1)},
        {frame: 183, value: _M(.9327,.3536,-.0713,0,.3528,-.8528,.3851,0,.0754,-.3843,-.9201,0,.2401,.1528,-.0013,1)},
        {frame: 184, value: _M(.9326,.3538,-.0715,0,.3527,-.8511,.3889,0,.0767,-.3879,-.9185,0,.2401,.1528,-.0013,1)},
        {frame: 185, value: _M(.9325,.354,-.0718,0,.3527,-.8494,.3927,0,.078,-.3915,-.9169,0,.2401,.1528,-.0013,1)},
        {frame: 186, value: _M(.9324,.3542,-.072,0,.3527,-.8477,.3963,0,.0793,-.3949,-.9153,0,.2401,.1528,-.0013,1)},
        {frame: 187, value: _M(.9323,.3544,-.0723,0,.3526,-.846,.3998,0,.0806,-.3982,-.9137,0,.2401,.1528,-.0013,1)},
        {frame: 188, value: _M(.9322,.3546,-.0725,0,.3526,-.8445,.4032,0,.0818,-.4014,-.9123,0,.2401,.1528,-.0013,1)},
        {frame: 189, value: _M(.9321,.3548,-.0727,0,.3526,-.843,.4063,0,.0829,-.4043,-.9108,0,.2401,.1528,-.0013,1)},
        {frame: 190, value: _M(.932,.355,-.0729,0,.3525,-.8416,.4092,0,.0839,-.4071,-.9095,0,.2401,.1528,-.0013,1)},
        {frame: 191, value: _M(.932,.3551,-.0731,0,.3525,-.8403,.4118,0,.0849,-.4096,-.9083,0,.2401,.1528,-.0013,1)},
        {frame: 192, value: _M(.9319,.3553,-.0733,0,.3525,-.8392,.4142,0,.0857,-.4118,-.9072,0,.2401,.1528,-.0013,1)},
        {frame: 193, value: _M(.9318,.3554,-.0734,0,.3524,-.8381,.4163,0,.0865,-.4138,-.9062,0,.2401,.1528,-.0013,1)},
        {frame: 194, value: _M(.9318,.3555,-.0735,0,.3524,-.8372,.4182,0,.0871,-.4156,-.9054,0,.2401,.1528,-.0013,1)},
        {frame: 195, value: _M(.9317,.3556,-.0736,0,.3524,-.8364,.4197,0,.0877,-.417,-.9047,0,.2401,.1528,-.0013,1)},
        {frame: 196, value: _M(.9317,.3557,-.0737,0,.3524,-.8358,.4211,0,.0882,-.4183,-.904,0,.2401,.1528,-.0013,1)},
        {frame: 197, value: _M(.9317,.3557,-.0738,0,.3524,-.8353,.422,0,.0885,-.4192,-.9036,0,.2401,.1528,-.0013,1)},
        {frame: 198, value: _M(.9316,.3558,-.0738,0,.3524,-.8349,.4227,0,.0888,-.4199,-.9032,0,.2401,.1528,-.0013,1)},
        {frame: 199, value: _M(.9316,.3558,-.0739,0,.3524,-.8347,.4231,0,.0889,-.4202,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 200, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 202, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.L", skeleton,skeleton.bones[28], _M(.9955,.0885,.0336,0,-.0946,.9171,.3873,0,.0035,-.3887,.9213,0,0,1.3168,0,1), _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1));
        bone.length = 1.2357;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 1, value: _M(.9955,.0885,.0336,0,-.0934,.8611,.4998,0,.0153,-.5007,.8655,0,0,1.3168,0,1)},
        {frame: 2, value: _M(.9955,.0885,.0336,0,-.0875,.7251,.683,0,.0361,-.6829,.7296,0,0,1.3168,0,1)},
        {frame: 3, value: _M(.9955,.0885,.0336,0,-.0803,.6025,.7941,0,.05,-.7932,.6069,0,0,1.3168,0,1)},
        {frame: 4, value: _M(.9955,.0885,.0336,0,-.0775,.5585,.8259,0,.0543,-.8248,.5628,0,0,1.3168,0,1)},
        {frame: 5, value: _M(.9955,.0885,.0336,0,-.0848,.6761,.7319,0,.0421,-.7315,.6806,0,0,1.3168,0,1)},
        {frame: 6, value: _M(.9955,.0885,.0336,0,-.0921,.8243,.5586,0,.0217,-.5591,.8288,0,0,1.3168,0,1)},
        {frame: 7, value: _M(.9955,.0885,.0336,0,-.0944,.903,.4192,0,.0068,-.4205,.9073,0,0,1.3168,0,1)},
        {frame: 8, value: _M(.9955,.0885,.0336,0,-.0932,.8542,.5116,0,.0166,-.5124,.8586,0,0,1.3168,0,1)},
        {frame: 9, value: _M(.9955,.0885,.0336,0,-.0913,.8044,.587,0,.0249,-.5875,.8089,0,0,1.3168,0,1)},
        {frame: 10, value: _M(.9955,.0885,.0336,0,-.0913,.8055,.5855,0,.0248,-.5859,.81,0,0,1.3168,0,1)},
        {frame: 11, value: _M(.9955,.0885,.0336,0,-.0915,.8096,.5799,0,.0241,-.5803,.814,0,0,1.3168,0,1)},
        {frame: 12, value: _M(.9955,.0885,.0336,0,-.0919,.8204,.5643,0,.0224,-.5649,.8249,0,0,1.3168,0,1)},
        {frame: 13, value: _M(.9955,.0885,.0336,0,-.0928,.8443,.5278,0,.0184,-.5286,.8487,0,0,1.3168,0,1)},
        {frame: 14, value: _M(.9955,.0885,.0336,0,-.0939,.878,.4694,0,.0121,-.4705,.8823,0,0,1.3168,0,1)},
        {frame: 15, value: _M(.9955,.0885,.0336,0,-.0944,.9063,.412,0,.006,-.4133,.9106,0,0,1.3168,0,1)},
        {frame: 16, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 30, value: _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1)},
        {frame: 31, value: _M(.9955,.0885,.0336,0,-.0287,-.0558,.998,0,.0902,-.9945,-.053,0,0,1.3168,0,1)},
        {frame: 32, value: _M(.9955,.0885,.0336,0,.0039,-.3928,.9196,0,.0945,-.9154,-.3914,0,0,1.3168,0,1)},
        {frame: 33, value: _M(.9955,.0885,.0336,0,.0199,-.5424,.8399,0,.0925,-.8355,-.5417,0,0,1.3168,0,1)},
        {frame: 34, value: _M(.9955,.0885,.0336,0,.0108,-.4587,.8885,0,.094,-.8842,-.4576,0,0,1.3168,0,1)},
        {frame: 35, value: _M(.9955,.0885,.0336,0,-.016,-.1925,.9812,0,.0933,-.9773,-.1903,0,0,1.3168,0,1)},
        {frame: 36, value: _M(.9955,.0885,.0336,0,-.0465,.1485,.9878,0,.0824,-.9849,.152,0,0,1.3168,0,1)},
        {frame: 37, value: _M(.9955,.0885,.0336,0,-.0764,.5427,.8364,0,.0558,-.8352,.5471,0,0,1.3168,0,1)},
        {frame: 38, value: _M(.9955,.0885,.0336,0,-.0898,.7719,.6294,0,.0298,-.6296,.7764,0,0,1.3168,0,1)},
        {frame: 39, value: _M(.9955,.0885,.0336,0,-.0946,.9244,.3694,0,.0016,-.3709,.9287,0,0,1.3168,0,1)},
        {frame: 40, value: _M(.9955,.0885,.0336,0,-.0899,.7735,.6274,0,.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 41, value: _M(.9955,.0885,.0336,0,-.0742,.5103,.8568,0,.0587,-.8554,.5146,0,0,1.3168,0,1)},
        {frame: 42, value: _M(.9955,.0885,.0336,0,-.0613,.3333,.9408,0,.072,-.9387,.3372,0,0,1.3168,0,1)},
        {frame: 43, value: _M(.9955,.0885,.0336,0,-.0613,.3328,.941,0,.0721,-.9388,.3367,0,0,1.3168,0,1)},
        {frame: 44, value: _M(.9955,.0885,.0336,0,-.0758,.5337,.8422,0,.0566,-.841,.538,0,0,1.3168,0,1)},
        {frame: 45, value: _M(.9955,.0885,.0336,0,-.0916,.8119,.5766,0,.0238,-.5771,.8164,0,0,1.3168,0,1)},
        {frame: 46, value: _M(.9955,.0885,.0336,0,-.0945,.9108,.4019,0,.005,-.4032,.9151,0,0,1.3168,0,1)},
        {frame: 47, value: _M(.9955,.0885,.0336,0,-.0938,.8755,.474,0,.0125,-.475,.8799,0,0,1.3168,0,1)},
        {frame: 48, value: _M(.9955,.0885,.0336,0,-.0927,.8399,.5348,0,.0191,-.5355,.8443,0,0,1.3168,0,1)},
        {frame: 49, value: _M(.9955,.0885,.0336,0,-.0871,.719,.6895,0,.0369,-.6894,.7235,0,0,1.3168,0,1)},
        {frame: 50, value: _M(.9955,.0885,.0336,0,-.0467,.1508,.9875,0,.0823,-.9846,.1543,0,0,1.3168,0,1)},
        {frame: 60, value: _M(.9955,.0885,.0336,0,-.0467,.1508,.9875,0,.0823,-.9846,.1543,0,0,1.3168,0,1)},
        {frame: 61, value: _M(.9955,.0885,.0336,0,-.0467,.1508,.9875,0,.0823,-.9846,.1543,0,0,1.3168,0,1)},
        {frame: 70, value: _M(.9955,.0885,.0336,0,-.0936,.8676,.4884,0,.0141,-.4893,.872,0,0,1.3168,0,1)},
        {frame: 71, value: _M(.9955,.0885,.0336,0,-.0936,.8677,.4882,0,.0141,-.4892,.8721,0,0,1.3168,0,1)},
        {frame: 72, value: _M(.9955,.0885,.0336,0,-.0936,.8679,.4878,0,.014,-.4887,.8723,0,0,1.3168,0,1)},
        {frame: 73, value: _M(.9955,.0885,.0336,0,-.0936,.8684,.487,0,.0139,-.488,.8728,0,0,1.3168,0,1)},
        {frame: 74, value: _M(.9955,.0885,.0336,0,-.0936,.8691,.4858,0,.0138,-.4867,.8734,0,0,1.3168,0,1)},
        {frame: 75, value: _M(.9955,.0885,.0336,0,-.0936,.8698,.4844,0,.0136,-.4853,.8742,0,0,1.3168,0,1)},
        {frame: 76, value: _M(.9955,.0885,.0336,0,-.0937,.8708,.4827,0,.0135,-.4837,.8752,0,0,1.3168,0,1)},
        {frame: 77, value: _M(.9955,.0885,.0336,0,-.0937,.8719,.4807,0,.0133,-.4817,.8762,0,0,1.3168,0,1)},
        {frame: 78, value: _M(.9955,.0885,.0336,0,-.0937,.8731,.4784,0,.013,-.4794,.8775,0,0,1.3168,0,1)},
        {frame: 79, value: _M(.9955,.0885,.0336,0,-.0938,.8745,.4758,0,.0127,-.4768,.8789,0,0,1.3168,0,1)},
        {frame: 80, value: _M(.9955,.0885,.0336,0,-.0938,.8761,.473,0,.0124,-.474,.8804,0,0,1.3168,0,1)},
        {frame: 81, value: _M(.9955,.0885,.0336,0,-.0938,.8777,.4699,0,.0121,-.471,.8821,0,0,1.3168,0,1)},
        {frame: 82, value: _M(.9955,.0885,.0336,0,-.0939,.8794,.4667,0,.0118,-.4677,.8838,0,0,1.3168,0,1)},
        {frame: 83, value: _M(.9955,.0885,.0336,0,-.0939,.8812,.4632,0,.0114,-.4643,.8856,0,0,1.3168,0,1)},
        {frame: 84, value: _M(.9955,.0885,.0336,0,-.094,.8831,.4596,0,.011,-.4607,.8875,0,0,1.3168,0,1)},
        {frame: 85, value: _M(.9955,.0885,.0336,0,-.094,.885,.456,0,.0106,-.4571,.8894,0,0,1.3168,0,1)},
        {frame: 86, value: _M(.9955,.0885,.0336,0,-.0941,.8869,.4522,0,.0102,-.4534,.8913,0,0,1.3168,0,1)},
        {frame: 87, value: _M(.9955,.0885,.0336,0,-.0941,.8888,.4485,0,.0098,-.4497,.8931,0,0,1.3168,0,1)},
        {frame: 88, value: _M(.9955,.0885,.0336,0,-.0941,.8906,.4449,0,.0095,-.446,.895,0,0,1.3168,0,1)},
        {frame: 89, value: _M(.9955,.0885,.0336,0,-.0942,.8924,.4413,0,.0091,-.4425,.8967,0,0,1.3168,0,1)},
        {frame: 90, value: _M(.9955,.0885,.0336,0,-.0942,.894,.438,0,.0087,-.4392,.8984,0,0,1.3168,0,1)},
        {frame: 91, value: _M(.9955,.0885,.0336,0,-.0942,.8956,.4348,0,.0084,-.436,.8999,0,0,1.3168,0,1)},
        {frame: 92, value: _M(.9955,.0885,.0336,0,-.0943,.897,.4319,0,.0081,-.4331,.9013,0,0,1.3168,0,1)},
        {frame: 93, value: _M(.9955,.0885,.0336,0,-.0943,.8983,.429,0,.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 94, value: _M(.9955,.0885,.0336,0,-.0943,.8995,.4267,0,.0076,-.428,.9038,0,0,1.3168,0,1)},
        {frame: 95, value: _M(.9955,.0885,.0336,0,-.0943,.9004,.4247,0,.0073,-.426,.9047,0,0,1.3168,0,1)},
        {frame: 96, value: _M(.9955,.0885,.0336,0,-.0944,.9012,.4231,0,.0072,-.4243,.9055,0,0,1.3168,0,1)},
        {frame: 97, value: _M(.9955,.0885,.0336,0,-.0944,.9018,.4218,0,.007,-.423,.9061,0,0,1.3168,0,1)},
        {frame: 98, value: _M(.9955,.0885,.0336,0,-.0944,.9022,.4208,0,.0069,-.4221,.9065,0,0,1.3168,0,1)},
        {frame: 99, value: _M(.9955,.0885,.0336,0,-.0944,.9025,.4203,0,.0069,-.4216,.9068,0,0,1.3168,0,1)},
        {frame: 100, value: _M(.9955,.0885,.0336,0,-.0944,.9026,.4201,0,.0069,-.4214,.9069,0,0,1.3168,0,1)},
        {frame: 101, value: _M(.9955,.0885,.0336,0,-.0944,.9025,.4203,0,.0069,-.4216,.9068,0,0,1.3168,0,1)},
        {frame: 102, value: _M(.9955,.0885,.0336,0,-.0944,.9022,.4208,0,.0069,-.4221,.9065,0,0,1.3168,0,1)},
        {frame: 103, value: _M(.9955,.0885,.0336,0,-.0944,.9018,.4218,0,.007,-.423,.9061,0,0,1.3168,0,1)},
        {frame: 104, value: _M(.9955,.0885,.0336,0,-.0944,.9012,.4231,0,.0072,-.4243,.9055,0,0,1.3168,0,1)},
        {frame: 105, value: _M(.9955,.0885,.0336,0,-.0943,.9004,.4247,0,.0073,-.426,.9047,0,0,1.3168,0,1)},
        {frame: 106, value: _M(.9955,.0885,.0336,0,-.0943,.8995,.4267,0,.0076,-.428,.9038,0,0,1.3168,0,1)},
        {frame: 107, value: _M(.9955,.0885,.0336,0,-.0943,.8983,.429,0,.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 108, value: _M(.9955,.0885,.0336,0,-.0943,.897,.4319,0,.0081,-.4331,.9013,0,0,1.3168,0,1)},
        {frame: 109, value: _M(.9955,.0885,.0336,0,-.0942,.8956,.4348,0,.0084,-.436,.8999,0,0,1.3168,0,1)},
        {frame: 110, value: _M(.9955,.0885,.0336,0,-.0942,.894,.438,0,.0087,-.4392,.8984,0,0,1.3168,0,1)},
        {frame: 111, value: _M(.9955,.0885,.0336,0,-.0942,.8924,.4413,0,.0091,-.4425,.8967,0,0,1.3168,0,1)},
        {frame: 112, value: _M(.9955,.0885,.0336,0,-.0941,.8906,.4449,0,.0095,-.446,.895,0,0,1.3168,0,1)},
        {frame: 113, value: _M(.9955,.0885,.0336,0,-.0941,.8888,.4485,0,.0098,-.4497,.8931,0,0,1.3168,0,1)},
        {frame: 114, value: _M(.9955,.0885,.0336,0,-.0941,.8869,.4522,0,.0102,-.4534,.8913,0,0,1.3168,0,1)},
        {frame: 115, value: _M(.9955,.0885,.0336,0,-.094,.885,.456,0,.0106,-.4571,.8894,0,0,1.3168,0,1)},
        {frame: 116, value: _M(.9955,.0885,.0336,0,-.094,.8831,.4596,0,.011,-.4607,.8875,0,0,1.3168,0,1)},
        {frame: 117, value: _M(.9955,.0885,.0336,0,-.0939,.8812,.4632,0,.0114,-.4643,.8856,0,0,1.3168,0,1)},
        {frame: 118, value: _M(.9955,.0885,.0336,0,-.0939,.8794,.4667,0,.0118,-.4677,.8838,0,0,1.3168,0,1)},
        {frame: 119, value: _M(.9955,.0885,.0336,0,-.0938,.8777,.4699,0,.0121,-.471,.8821,0,0,1.3168,0,1)},
        {frame: 120, value: _M(.9955,.0885,.0336,0,-.0938,.8761,.473,0,.0124,-.474,.8804,0,0,1.3168,0,1)},
        {frame: 121, value: _M(.9955,.0885,.0336,0,-.0938,.8745,.4758,0,.0127,-.4768,.8789,0,0,1.3168,0,1)},
        {frame: 122, value: _M(.9955,.0885,.0336,0,-.0937,.8731,.4784,0,.013,-.4794,.8775,0,0,1.3168,0,1)},
        {frame: 123, value: _M(.9955,.0885,.0336,0,-.0937,.8719,.4807,0,.0133,-.4817,.8762,0,0,1.3168,0,1)},
        {frame: 124, value: _M(.9955,.0885,.0336,0,-.0937,.8708,.4827,0,.0135,-.4837,.8752,0,0,1.3168,0,1)},
        {frame: 125, value: _M(.9955,.0885,.0336,0,-.0936,.8698,.4844,0,.0136,-.4853,.8742,0,0,1.3168,0,1)},
        {frame: 126, value: _M(.9955,.0885,.0336,0,-.0936,.8691,.4858,0,.0138,-.4867,.8734,0,0,1.3168,0,1)},
        {frame: 127, value: _M(.9955,.0885,.0336,0,-.0936,.8684,.487,0,.0139,-.488,.8728,0,0,1.3168,0,1)},
        {frame: 128, value: _M(.9955,.0885,.0336,0,-.0936,.8679,.4878,0,.014,-.4887,.8723,0,0,1.3168,0,1)},
        {frame: 129, value: _M(.9955,.0885,.0336,0,-.0936,.8677,.4882,0,.0141,-.4892,.8721,0,0,1.3168,0,1)},
        {frame: 130, value: _M(.9955,.0885,.0336,0,-.0936,.8676,.4884,0,.0141,-.4893,.872,0,0,1.3168,0,1)},
        {frame: 140, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 141, value: _M(.9955,.0885,.0336,0,-.0946,.9167,.3883,0,.0036,-.3898,.9209,0,0,1.3168,0,1)},
        {frame: 142, value: _M(.9955,.0885,.0336,0,-.0946,.9171,.3873,0,.0035,-.3887,.9213,0,0,1.3168,0,1)},
        {frame: 143, value: _M(.9955,.0885,.0336,0,-.0946,.9178,.3855,0,.0033,-.387,.9221,0,0,1.3168,0,1)},
        {frame: 144, value: _M(.9955,.0885,.0336,0,-.0946,.9189,.3829,0,.003,-.3844,.9232,0,0,1.3168,0,1)},
        {frame: 145, value: _M(.9955,.0885,.0336,0,-.0946,.9204,.3795,0,.0027,-.381,.9246,0,0,1.3168,0,1)},
        {frame: 146, value: _M(.9955,.0885,.0336,0,-.0946,.9219,.3756,0,.0023,-.3771,.9262,0,0,1.3168,0,1)},
        {frame: 147, value: _M(.9955,.0885,.0336,0,-.0946,.9237,.3713,0,.0018,-.3728,.9279,0,0,1.3168,0,1)},
        {frame: 148, value: _M(.9955,.0885,.0336,0,-.0946,.9255,.3667,0,.0014,-.3683,.9297,0,0,1.3168,0,1)},
        {frame: 149, value: _M(.9955,.0885,.0336,0,-.0946,.9273,.3622,0,.0009,-.3637,.9315,0,0,1.3168,0,1)},
        {frame: 150, value: _M(.9955,.0885,.0336,0,-.0946,.929,.3577,0,.0005,-.3593,.9332,0,0,1.3168,0,1)},
        {frame: 151, value: _M(.9955,.0885,.0336,0,-.0946,.9306,.3535,0,0,-.3551,.9348,0,0,1.3168,0,1)},
        {frame: 152, value: _M(.9955,.0885,.0336,0,-.0946,.9323,.3492,0,-.0004,-.3508,.9365,0,0,1.3168,0,1)},
        {frame: 153, value: _M(.9955,.0885,.0336,0,-.0946,.9341,.3442,0,-.0009,-.3458,.9383,0,0,1.3168,0,1)},
        {frame: 154, value: _M(.9955,.0885,.0336,0,-.0946,.9362,.3386,0,-.0015,-.3402,.9403,0,0,1.3168,0,1)},
        {frame: 155, value: _M(.9955,.0885,.0336,0,-.0946,.9384,.3323,0,-.0021,-.334,.9426,0,0,1.3168,0,1)},
        {frame: 156, value: _M(.9955,.0885,.0336,0,-.0946,.9408,.3255,0,-.0028,-.3273,.9449,0,0,1.3168,0,1)},
        {frame: 157, value: _M(.9955,.0885,.0336,0,-.0946,.9433,.3182,0,-.0035,-.32,.9474,0,0,1.3168,0,1)},
        {frame: 158, value: _M(.9955,.0885,.0336,0,-.0945,.9459,.3105,0,-.0043,-.3122,.95,0,0,1.3168,0,1)},
        {frame: 159, value: _M(.9955,.0885,.0336,0,-.0945,.9485,.3024,0,-.0051,-.3042,.9526,0,0,1.3168,0,1)},
        {frame: 160, value: _M(.9955,.0885,.0336,0,-.0944,.9511,.2941,0,-.0059,-.296,.9552,0,0,1.3168,0,1)},
        {frame: 161, value: _M(.9955,.0885,.0336,0,-.0944,.9536,.2859,0,-.0067,-.2878,.9577,0,0,1.3168,0,1)},
        {frame: 162, value: _M(.9955,.0885,.0336,0,-.0943,.956,.2779,0,-.0075,-.2798,.96,0,0,1.3168,0,1)},
        {frame: 163, value: _M(.9955,.0885,.0336,0,-.0943,.9582,.2703,0,-.0083,-.2722,.9622,0,0,1.3168,0,1)},
        {frame: 164, value: _M(.9955,.0885,.0336,0,-.0942,.9601,.2633,0,-.0089,-.2653,.9641,0,0,1.3168,0,1)},
        {frame: 165, value: _M(.9955,.0885,.0336,0,-.0941,.9618,.2572,0,-.0095,-.2592,.9658,0,0,1.3168,0,1)},
        {frame: 166, value: _M(.9955,.0885,.0336,0,-.0941,.9631,.2521,0,-.01,-.2541,.9671,0,0,1.3168,0,1)},
        {frame: 167, value: _M(.9955,.0885,.0336,0,-.094,.9642,.248,0,-.0104,-.25,.9682,0,0,1.3168,0,1)},
        {frame: 168, value: _M(.9955,.0885,.0336,0,-.094,.9649,.2451,0,-.0107,-.2471,.9689,0,0,1.3168,0,1)},
        {frame: 169, value: _M(.9955,.0885,.0336,0,-.094,.9654,.2434,0,-.0109,-.2454,.9694,0,0,1.3168,0,1)},
        {frame: 170, value: _M(.9955,.0885,.0336,0,-.094,.9655,.2428,0,-.0109,-.2449,.9695,0,0,1.3168,0,1)},
        {frame: 171, value: _M(.9955,.0885,.0336,0,-.094,.9654,.2433,0,-.0109,-.2453,.9694,0,0,1.3168,0,1)},
        {frame: 172, value: _M(.9955,.0885,.0336,0,-.094,.965,.2447,0,-.0108,-.2467,.969,0,0,1.3168,0,1)},
        {frame: 173, value: _M(.9955,.0885,.0336,0,-.094,.9644,.2471,0,-.0105,-.2491,.9684,0,0,1.3168,0,1)},
        {frame: 174, value: _M(.9955,.0885,.0336,0,-.0941,.9636,.2504,0,-.0102,-.2524,.9676,0,0,1.3168,0,1)},
        {frame: 175, value: _M(.9955,.0885,.0336,0,-.0941,.9625,.2545,0,-.0098,-.2565,.9665,0,0,1.3168,0,1)},
        {frame: 176, value: _M(.9955,.0885,.0336,0,-.0942,.9611,.2595,0,-.0093,-.2615,.9652,0,0,1.3168,0,1)},
        {frame: 177, value: _M(.9955,.0885,.0336,0,-.0942,.9596,.2652,0,-.0088,-.2672,.9636,0,0,1.3168,0,1)},
        {frame: 178, value: _M(.9955,.0885,.0336,0,-.0943,.9578,.2716,0,-.0081,-.2735,.9618,0,0,1.3168,0,1)},
        {frame: 179, value: _M(.9955,.0885,.0336,0,-.0943,.9558,.2784,0,-.0075,-.2804,.9599,0,0,1.3168,0,1)},
        {frame: 180, value: _M(.9955,.0885,.0336,0,-.0944,.9536,.2858,0,-.0067,-.2876,.9577,0,0,1.3168,0,1)},
        {frame: 181, value: _M(.9955,.0885,.0336,0,-.0944,.9513,.2934,0,-.006,-.2953,.9554,0,0,1.3168,0,1)},
        {frame: 182, value: _M(.9955,.0885,.0336,0,-.0945,.9489,.3013,0,-.0052,-.3031,.953,0,0,1.3168,0,1)},
        {frame: 183, value: _M(.9955,.0885,.0336,0,-.0945,.9463,.3092,0,-.0044,-.311,.9504,0,0,1.3168,0,1)},
        {frame: 184, value: _M(.9955,.0885,.0336,0,-.0946,.9437,.3171,0,-.0036,-.3189,.9478,0,0,1.3168,0,1)},
        {frame: 185, value: _M(.9955,.0885,.0336,0,-.0946,.941,.3249,0,-.0028,-.3267,.9451,0,0,1.3168,0,1)},
        {frame: 186, value: _M(.9955,.0885,.0336,0,-.0946,.9383,.3326,0,-.0021,-.3342,.9425,0,0,1.3168,0,1)},
        {frame: 187, value: _M(.9955,.0885,.0336,0,-.0946,.9357,.3399,0,-.0013,-.3415,.9399,0,0,1.3168,0,1)},
        {frame: 188, value: _M(.9955,.0885,.0336,0,-.0946,.9331,.3468,0,-.0006,-.3484,.9373,0,0,1.3168,0,1)},
        {frame: 189, value: _M(.9955,.0885,.0336,0,-.0946,.9307,.3533,0,0,-.3549,.9349,0,0,1.3168,0,1)},
        {frame: 190, value: _M(.9955,.0885,.0336,0,-.0946,.9284,.3593,0,.0006,-.3609,.9326,0,0,1.3168,0,1)},
        {frame: 191, value: _M(.9955,.0885,.0336,0,-.0946,.9263,.3648,0,.0012,-.3663,.9305,0,0,1.3168,0,1)},
        {frame: 192, value: _M(.9955,.0885,.0336,0,-.0946,.9243,.3697,0,.0017,-.3712,.9285,0,0,1.3168,0,1)},
        {frame: 193, value: _M(.9955,.0885,.0336,0,-.0946,.9226,.3741,0,.0021,-.3756,.9268,0,0,1.3168,0,1)},
        {frame: 194, value: _M(.9955,.0885,.0336,0,-.0946,.921,.3779,0,.0025,-.3793,.9253,0,0,1.3168,0,1)},
        {frame: 195, value: _M(.9955,.0885,.0336,0,-.0946,.9197,.381,0,.0028,-.3825,.924,0,0,1.3168,0,1)},
        {frame: 196, value: _M(.9955,.0885,.0336,0,-.0946,.9186,.3838,0,.0031,-.3853,.9228,0,0,1.3168,0,1)},
        {frame: 197, value: _M(.9955,.0885,.0336,0,-.0946,.9177,.3858,0,.0033,-.3873,.922,0,0,1.3168,0,1)},
        {frame: 198, value: _M(.9955,.0885,.0336,0,-.0946,.9171,.3872,0,.0035,-.3887,.9214,0,0,1.3168,0,1)},
        {frame: 199, value: _M(.9955,.0885,.0336,0,-.0946,.9168,.3881,0,.0036,-.3895,.921,0,0,1.3168,0,1)},
        {frame: 200, value: _M(.9955,.0885,.0336,0,-.0946,.9166,.3884,0,.0036,-.3898,.9209,0,0,1.3168,0,1)},
        {frame: 202, value: _M(.9955,.0885,.0336,0,-.0946,.9166,.3884,0,.0036,-.3898,.9209,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.R", skeleton,skeleton.bones[5], _M(.9293,-.3692,.0136,0,-.369,-.9259,.0807,0,-.0173,-.08,-.9966,0,-.2401,.1528,-.0013,1), _M(.9969,-.0775,.0101,0,-.0781,-.9839,.1607,0,-.0025,-.161,-.9869,0,-.2401,.1528,-.0013,1));
        bone.length = 1.3168;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 1, value: _M(.9213,-.3889,.0086,0,-.3886,-.9191,.0652,0,-.0175,-.0634,-.9978,0,-.2401,.1528,-.0013,1)},
        {frame: 2, value: _M(.8943,-.4474,-.0088,0,-.4471,-.8942,.0217,0,-.0176,-.0155,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 3, value: _M(.8522,-.522,-.036,0,-.5229,-.8521,-.0225,0,-.0189,.038,-.9991,0,-.2401,.1528,-.0013,1)},
        {frame: 4, value: _M(.8147,-.5768,-.0592,0,-.5794,-.8138,-.0441,0,-.0227,.0702,-.9973,0,-.2401,.1528,-.0013,1)},
        {frame: 5, value: _M(.7973,-.5997,-.0686,0,-.6028,-.797,-.0388,0,-.0314,.0722,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 6, value: _M(.8426,-.5374,-.0352,0,-.536,-.8431,.0433,0,-.0529,-.0176,-.9984,0,-.2401,.1528,-.0013,1)},
        {frame: 7, value: _M(.9112,-.4114,.0193,0,-.4047,-.8856,.2278,0,-.0766,-.2154,-.9735,0,-.2401,.1528,-.0013,1)},
        {frame: 8, value: _M(.9512,-.3011,.0681,0,-.2832,-.7634,.5806,0,-.1229,-.5715,-.8114,0,-.2401,.1528,-.0013,1)},
        {frame: 9, value: _M(.9596,-.2662,.0908,0,-.2387,-.6006,.7631,0,-.1486,-.7539,-.6399,0,-.2401,.1528,-.0013,1)},
        {frame: 10, value: _M(.9593,-.268,.0895,0,-.2409,-.6107,.7543,0,-.1475,-.7451,-.6504,0,-.2401,.1528,-.0013,1)},
        {frame: 11, value: _M(.9577,-.2751,.0846,0,-.2496,-.6477,.7198,0,-.1433,-.7105,-.689,0,-.2401,.1528,-.0013,1)},
        {frame: 12, value: _M(.9545,-.2887,.0747,0,-.2671,-.7165,.6444,0,-.1325,-.6351,-.761,0,-.2401,.1528,-.0013,1)},
        {frame: 13, value: _M(.9486,-.3112,.0579,0,-.2969,-.8112,.5038,0,-.1098,-.4951,-.8619,0,-.2401,.1528,-.0013,1)},
        {frame: 14, value: _M(.9399,-.3393,.038,0,-.3334,-.8881,.3166,0,-.0737,-.3102,-.9478,0,-.2401,.1528,-.0013,1)},
        {frame: 15, value: _M(.9321,-.3616,.0204,0,-.3604,-.9206,.15,0,-.0354,-.1472,-.9885,0,-.2401,.1528,-.0013,1)},
        {frame: 16, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 30, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 31, value: _M(.9997,-.0062,.0238,0,-.0228,-.5934,.8046,0,.0091,-.8049,-.5933,0,-.2401,.1528,-.0013,1)},
        {frame: 32, value: _M(.9996,-.0074,.0271,0,-.0256,-.6378,.7698,0,.0115,-.7702,-.6378,0,-.2401,.1528,-.0013,1)},
        {frame: 33, value: _M(.9995,-.0155,.0279,0,-.0302,-.7401,.6718,0,.0102,-.6723,-.7402,0,-.2401,.1528,-.0013,1)},
        {frame: 34, value: _M(.9992,-.0333,.0218,0,-.0395,-.8956,.4431,0,.0048,-.4436,-.8962,0,-.2401,.1528,-.0013,1)},
        {frame: 35, value: _M(.9989,-.0466,.0099,0,-.0476,-.9872,.1525,0,.0027,-.1528,-.9883,0,-.2401,.1528,-.0013,1)},
        {frame: 36, value: _M(.9985,-.0545,.0025,0,-.0544,-.9981,-.0271,0,.004,.0269,-.9996,0,-.2401,.1528,-.0013,1)},
        {frame: 37, value: _M(.9981,-.062,.0013,0,-.0618,-.9964,-.0576,0,.0049,.0574,-.9983,0,-.2401,.1528,-.0013,1)},
        {frame: 38, value: _M(.9978,-.0661,-.0006,0,-.0658,-.9925,-.1035,0,.0062,.1033,-.9946,0,-.2401,.1528,-.0013,1)},
        {frame: 39, value: _M(.9976,-.0686,.0001,0,-.0683,-.9931,-.0957,0,.0066,.0954,-.9954,0,-.2401,.1528,-.0013,1)},
        {frame: 40, value: _M(.9975,-.0695,.0095,0,-.0697,-.9973,.0222,0,.0079,-.0228,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 41, value: _M(.9979,-.0617,.0209,0,-.0642,-.9864,.1511,0,.0113,-.1521,-.9883,0,-.2401,.1528,-.0013,1)},
        {frame: 42, value: _M(.9985,-.0413,.0355,0,-.0515,-.9282,.3685,0,.0177,-.3698,-.929,0,-.2401,.1528,-.0013,1)},
        {frame: 43, value: _M(.9991,-.0123,.0414,0,-.036,-.7655,.6424,0,.0238,-.6433,-.7653,0,-.2401,.1528,-.0013,1)},
        {frame: 44, value: _M(.9994,.0006,.0336,0,-.0285,-.518,.8549,0,.0179,-.8554,-.5177,0,-.2401,.1528,-.0013,1)},
        {frame: 45, value: _M(.9995,-.0056,.0316,0,-.0314,-.3761,.926,0,.0066,-.9266,-.3761,0,-.2401,.1528,-.0013,1)},
        {frame: 46, value: _M(.9994,-.0121,.033,0,-.0351,-.3017,.9528,0,-.0015,-.9533,-.3019,0,-.2401,.1528,-.0013,1)},
        {frame: 47, value: _M(.9993,-.0184,.0333,0,-.0376,-.351,.9356,0,-.0055,-.9362,-.3514,0,-.2401,.1528,-.0013,1)},
        {frame: 48, value: _M(.9994,-.02,.0295,0,-.0353,-.4393,.8976,0,-.005,-.8981,-.4397,0,-.2401,.1528,-.0013,1)},
        {frame: 49, value: _M(.9996,-.019,.0222,0,-.029,-.5642,.8252,0,-.0032,-.8255,-.5645,0,-.2401,.1528,-.0013,1)},
        {frame: 50, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 60, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 61, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 70, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2653,0,-.0204,-.2653,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 71, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2652,0,-.0204,-.2652,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 72, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.265,0,-.0204,-.265,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 73, value: _M(.9886,-.1492,.0201,0,-.1491,-.9528,.2646,0,-.0203,-.2646,-.9642,0,-.2401,.1528,-.0013,1)},
        {frame: 74, value: _M(.9886,-.1491,.0201,0,-.1491,-.9529,.264,0,-.0203,-.264,-.9643,0,-.2401,.1528,-.0013,1)},
        {frame: 75, value: _M(.9886,-.1491,.02,0,-.1491,-.9531,.2633,0,-.0202,-.2633,-.9645,0,-.2401,.1528,-.0013,1)},
        {frame: 76, value: _M(.9886,-.1491,.02,0,-.1491,-.9534,.2624,0,-.0201,-.2624,-.9647,0,-.2401,.1528,-.0013,1)},
        {frame: 77, value: _M(.9886,-.1491,.02,0,-.1491,-.9536,.2614,0,-.02,-.2614,-.965,0,-.2401,.1528,-.0013,1)},
        {frame: 78, value: _M(.9886,-.149,.0199,0,-.1491,-.954,.2602,0,-.0198,-.2602,-.9653,0,-.2401,.1528,-.0013,1)},
        {frame: 79, value: _M(.9886,-.149,.0198,0,-.149,-.9543,.2589,0,-.0197,-.2589,-.9657,0,-.2401,.1528,-.0013,1)},
        {frame: 80, value: _M(.9886,-.149,.0198,0,-.149,-.9547,.2574,0,-.0195,-.2574,-.9661,0,-.2401,.1528,-.0013,1)},
        {frame: 81, value: _M(.9887,-.1489,.0197,0,-.149,-.9552,.2558,0,-.0193,-.2559,-.9665,0,-.2401,.1528,-.0013,1)},
        {frame: 82, value: _M(.9887,-.1489,.0196,0,-.1489,-.9556,.2541,0,-.0191,-.2542,-.967,0,-.2401,.1528,-.0013,1)},
        {frame: 83, value: _M(.9887,-.1488,.0195,0,-.1489,-.9561,.2524,0,-.0189,-.2524,-.9674,0,-.2401,.1528,-.0013,1)},
        {frame: 84, value: _M(.9887,-.1488,.0194,0,-.1489,-.9566,.2505,0,-.0187,-.2506,-.9679,0,-.2401,.1528,-.0013,1)},
        {frame: 85, value: _M(.9887,-.1487,.0193,0,-.1488,-.9571,.2486,0,-.0185,-.2487,-.9684,0,-.2401,.1528,-.0013,1)},
        {frame: 86, value: _M(.9887,-.1487,.0192,0,-.1488,-.9576,.2467,0,-.0183,-.2468,-.9689,0,-.2401,.1528,-.0013,1)},
        {frame: 87, value: _M(.9887,-.1486,.0191,0,-.1488,-.9581,.2449,0,-.0181,-.2449,-.9694,0,-.2401,.1528,-.0013,1)},
        {frame: 88, value: _M(.9887,-.1486,.019,0,-.1487,-.9586,.243,0,-.0179,-.2431,-.9698,0,-.2401,.1528,-.0013,1)},
        {frame: 89, value: _M(.9887,-.1485,.019,0,-.1487,-.959,.2412,0,-.0177,-.2413,-.9703,0,-.2401,.1528,-.0013,1)},
        {frame: 90, value: _M(.9887,-.1485,.0189,0,-.1487,-.9595,.2395,0,-.0175,-.2396,-.9707,0,-.2401,.1528,-.0013,1)},
        {frame: 91, value: _M(.9887,-.1484,.0188,0,-.1486,-.9599,.2379,0,-.0173,-.238,-.9711,0,-.2401,.1528,-.0013,1)},
        {frame: 92, value: _M(.9888,-.1484,.0187,0,-.1486,-.9602,.2364,0,-.0171,-.2365,-.9715,0,-.2401,.1528,-.0013,1)},
        {frame: 93, value: _M(.9888,-.1484,.0186,0,-.1486,-.9606,.2351,0,-.017,-.2352,-.9718,0,-.2401,.1528,-.0013,1)},
        {frame: 94, value: _M(.9888,-.1483,.0186,0,-.1485,-.9609,.2339,0,-.0168,-.234,-.9721,0,-.2401,.1528,-.0013,1)},
        {frame: 95, value: _M(.9888,-.1483,.0185,0,-.1485,-.9611,.2329,0,-.0167,-.233,-.9723,0,-.2401,.1528,-.0013,1)},
        {frame: 96, value: _M(.9888,-.1483,.0185,0,-.1485,-.9613,.232,0,-.0166,-.2322,-.9725,0,-.2401,.1528,-.0013,1)},
        {frame: 97, value: _M(.9888,-.1483,.0185,0,-.1485,-.9615,.2314,0,-.0166,-.2315,-.9727,0,-.2401,.1528,-.0013,1)},
        {frame: 98, value: _M(.9888,-.1483,.0184,0,-.1485,-.9616,.2309,0,-.0165,-.231,-.9728,0,-.2401,.1528,-.0013,1)},
        {frame: 99, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2306,0,-.0165,-.2308,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 100, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2305,0,-.0165,-.2307,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 101, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2306,0,-.0165,-.2308,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 102, value: _M(.9888,-.1483,.0184,0,-.1485,-.9616,.2309,0,-.0165,-.231,-.9728,0,-.2401,.1528,-.0013,1)},
        {frame: 103, value: _M(.9888,-.1483,.0185,0,-.1485,-.9615,.2314,0,-.0166,-.2315,-.9727,0,-.2401,.1528,-.0013,1)},
        {frame: 104, value: _M(.9888,-.1483,.0185,0,-.1485,-.9613,.232,0,-.0166,-.2322,-.9725,0,-.2401,.1528,-.0013,1)},
        {frame: 105, value: _M(.9888,-.1483,.0185,0,-.1485,-.9611,.2329,0,-.0167,-.233,-.9723,0,-.2401,.1528,-.0013,1)},
        {frame: 106, value: _M(.9888,-.1483,.0186,0,-.1485,-.9609,.2339,0,-.0168,-.234,-.9721,0,-.2401,.1528,-.0013,1)},
        {frame: 107, value: _M(.9888,-.1484,.0186,0,-.1486,-.9606,.2351,0,-.017,-.2352,-.9718,0,-.2401,.1528,-.0013,1)},
        {frame: 108, value: _M(.9888,-.1484,.0187,0,-.1486,-.9602,.2364,0,-.0171,-.2365,-.9715,0,-.2401,.1528,-.0013,1)},
        {frame: 109, value: _M(.9887,-.1484,.0188,0,-.1486,-.9599,.2379,0,-.0173,-.238,-.9711,0,-.2401,.1528,-.0013,1)},
        {frame: 110, value: _M(.9887,-.1485,.0189,0,-.1487,-.9595,.2395,0,-.0175,-.2396,-.9707,0,-.2401,.1528,-.0013,1)},
        {frame: 111, value: _M(.9887,-.1485,.019,0,-.1487,-.959,.2412,0,-.0177,-.2413,-.9703,0,-.2401,.1528,-.0013,1)},
        {frame: 112, value: _M(.9887,-.1486,.019,0,-.1487,-.9586,.243,0,-.0179,-.2431,-.9698,0,-.2401,.1528,-.0013,1)},
        {frame: 113, value: _M(.9887,-.1486,.0191,0,-.1488,-.9581,.2449,0,-.0181,-.2449,-.9694,0,-.2401,.1528,-.0013,1)},
        {frame: 114, value: _M(.9887,-.1487,.0192,0,-.1488,-.9576,.2467,0,-.0183,-.2468,-.9689,0,-.2401,.1528,-.0013,1)},
        {frame: 115, value: _M(.9887,-.1487,.0193,0,-.1488,-.9571,.2486,0,-.0185,-.2487,-.9684,0,-.2401,.1528,-.0013,1)},
        {frame: 116, value: _M(.9887,-.1488,.0194,0,-.1489,-.9566,.2505,0,-.0187,-.2506,-.9679,0,-.2401,.1528,-.0013,1)},
        {frame: 117, value: _M(.9887,-.1488,.0195,0,-.1489,-.9561,.2524,0,-.0189,-.2524,-.9674,0,-.2401,.1528,-.0013,1)},
        {frame: 118, value: _M(.9887,-.1489,.0196,0,-.1489,-.9556,.2541,0,-.0191,-.2542,-.967,0,-.2401,.1528,-.0013,1)},
        {frame: 119, value: _M(.9887,-.1489,.0197,0,-.149,-.9552,.2558,0,-.0193,-.2559,-.9665,0,-.2401,.1528,-.0013,1)},
        {frame: 120, value: _M(.9886,-.149,.0198,0,-.149,-.9547,.2574,0,-.0195,-.2574,-.9661,0,-.2401,.1528,-.0013,1)},
        {frame: 121, value: _M(.9886,-.149,.0198,0,-.149,-.9543,.2589,0,-.0197,-.2589,-.9657,0,-.2401,.1528,-.0013,1)},
        {frame: 122, value: _M(.9886,-.149,.0199,0,-.1491,-.954,.2602,0,-.0198,-.2602,-.9653,0,-.2401,.1528,-.0013,1)},
        {frame: 123, value: _M(.9886,-.1491,.02,0,-.1491,-.9536,.2614,0,-.02,-.2614,-.965,0,-.2401,.1528,-.0013,1)},
        {frame: 124, value: _M(.9886,-.1491,.02,0,-.1491,-.9534,.2624,0,-.0201,-.2624,-.9647,0,-.2401,.1528,-.0013,1)},
        {frame: 125, value: _M(.9886,-.1491,.02,0,-.1491,-.9531,.2633,0,-.0202,-.2633,-.9645,0,-.2401,.1528,-.0013,1)},
        {frame: 126, value: _M(.9886,-.1491,.0201,0,-.1491,-.9529,.264,0,-.0203,-.264,-.9643,0,-.2401,.1528,-.0013,1)},
        {frame: 127, value: _M(.9886,-.1492,.0201,0,-.1491,-.9528,.2646,0,-.0203,-.2646,-.9642,0,-.2401,.1528,-.0013,1)},
        {frame: 128, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.265,0,-.0204,-.265,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 129, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2652,0,-.0204,-.2652,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 130, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2653,0,-.0204,-.2653,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 140, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 141, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 142, value: _M(.9293,-.3692,.0136,0,-.369,-.9259,.0807,0,-.0173,-.08,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 143, value: _M(.9293,-.3691,.0135,0,-.369,-.926,.0797,0,-.0169,-.079,-.9967,0,-.2401,.1528,-.0013,1)},
        {frame: 144, value: _M(.9293,-.369,.0134,0,-.3689,-.9262,.0781,0,-.0164,-.0776,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 145, value: _M(.9294,-.3689,.0134,0,-.3688,-.9264,.0761,0,-.0157,-.0757,-.997,0,-.2401,.1528,-.0013,1)},
        {frame: 146, value: _M(.9295,-.3687,.0132,0,-.3686,-.9266,.0737,0,-.0149,-.0734,-.9972,0,-.2401,.1528,-.0013,1)},
        {frame: 147, value: _M(.9295,-.3685,.0131,0,-.3685,-.9269,.0711,0,-.014,-.0709,-.9974,0,-.2401,.1528,-.0013,1)},
        {frame: 148, value: _M(.9296,-.3683,.013,0,-.3683,-.9272,.0683,0,-.0131,-.0683,-.9976,0,-.2401,.1528,-.0013,1)},
        {frame: 149, value: _M(.9297,-.3681,.0129,0,-.3681,-.9275,.0655,0,-.0122,-.0656,-.9978,0,-.2401,.1528,-.0013,1)},
        {frame: 150, value: _M(.9298,-.3679,.0128,0,-.368,-.9277,.0627,0,-.0112,-.063,-.998,0,-.2401,.1528,-.0013,1)},
        {frame: 151, value: _M(.9298,-.3677,.0127,0,-.3678,-.928,.06,0,-.0104,-.0605,-.9981,0,-.2401,.1528,-.0013,1)},
        {frame: 152, value: _M(.9299,-.3676,.0125,0,-.3677,-.9282,.0573,0,-.0094,-.0579,-.9983,0,-.2401,.1528,-.0013,1)},
        {frame: 153, value: _M(.93,-.3674,.0124,0,-.3675,-.9285,.0541,0,-.0084,-.0549,-.9985,0,-.2401,.1528,-.0013,1)},
        {frame: 154, value: _M(.9301,-.3671,.0122,0,-.3673,-.9287,.0505,0,-.0072,-.0515,-.9987,0,-.2401,.1528,-.0013,1)},
        {frame: 155, value: _M(.9302,-.3669,.012,0,-.367,-.9291,.0465,0,-.0059,-.0477,-.9988,0,-.2401,.1528,-.0013,1)},
        {frame: 156, value: _M(.9303,-.3666,.0118,0,-.3667,-.9294,.0421,0,-.0045,-.0434,-.999,0,-.2401,.1528,-.0013,1)},
        {frame: 157, value: _M(.9304,-.3663,.0115,0,-.3664,-.9297,.0372,0,-.0029,-.0388,-.9992,0,-.2401,.1528,-.0013,1)},
        {frame: 158, value: _M(.9306,-.366,.0112,0,-.3661,-.93,.0319,0,-.0012,-.0338,-.9994,0,-.2401,.1528,-.0013,1)},
        {frame: 159, value: _M(.9307,-.3656,.011,0,-.3658,-.9303,.0263,0,.0006,-.0285,-.9996,0,-.2401,.1528,-.0013,1)},
        {frame: 160, value: _M(.9308,-.3653,.0107,0,-.3654,-.9306,.0204,0,.0025,-.0229,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 161, value: _M(.931,-.3649,.0104,0,-.3651,-.9309,.0144,0,.0044,-.0172,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 162, value: _M(.9311,-.3646,.0101,0,-.3647,-.9311,.0083,0,.0064,-.0114,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 163, value: _M(.9312,-.3643,.0098,0,-.3643,-.9313,.0022,0,.0083,-.0057,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 164, value: _M(.9314,-.364,.0096,0,-.364,-.9314,-.0035,0,.0102,-.0002,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 165, value: _M(.9315,-.3637,.0094,0,-.3636,-.9315,-.0089,0,.012,.0049,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 166, value: _M(.9316,-.3635,.0092,0,-.3633,-.9316,-.0136,0,.0135,.0094,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 167, value: _M(.9316,-.3633,.0091,0,-.3632,-.9316,-.0155,0,.0141,.0112,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 168, value: _M(.9316,-.3633,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 169, value: _M(.9317,-.3632,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 172, value: _M(.9316,-.3633,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 173, value: _M(.9316,-.3633,.0091,0,-.3632,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 174, value: _M(.9316,-.3634,.0091,0,-.3632,-.9316,-.0152,0,.014,.0109,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 175, value: _M(.9315,-.3636,.0093,0,-.3635,-.9315,-.0113,0,.0127,.0072,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 176, value: _M(.9314,-.3638,.0095,0,-.3638,-.9315,-.0069,0,.0113,.0029,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 177, value: _M(.9313,-.3641,.0097,0,-.3641,-.9314,-.002,0,.0097,-.0017,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 178, value: _M(.9312,-.3643,.0099,0,-.3644,-.9312,.0033,0,.008,-.0066,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 179, value: _M(.9311,-.3646,.0101,0,-.3647,-.9311,.0087,0,.0062,-.0118,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 180, value: _M(.931,-.3649,.0104,0,-.3651,-.9309,.0143,0,.0044,-.0171,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 181, value: _M(.9308,-.3652,.0107,0,-.3654,-.9306,.0199,0,.0026,-.0224,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 182, value: _M(.9307,-.3656,.0109,0,-.3657,-.9304,.0255,0,.0008,-.0277,-.9996,0,-.2401,.1528,-.0013,1)},
        {frame: 183, value: _M(.9306,-.3659,.0112,0,-.3661,-.9301,.0311,0,-.001,-.033,-.9995,0,-.2401,.1528,-.0013,1)},
        {frame: 184, value: _M(.9305,-.3662,.0115,0,-.3664,-.9297,.0364,0,-.0027,-.0381,-.9993,0,-.2401,.1528,-.0013,1)},
        {frame: 185, value: _M(.9303,-.3666,.0117,0,-.3667,-.9294,.0417,0,-.0044,-.0431,-.9991,0,-.2401,.1528,-.0013,1)},
        {frame: 186, value: _M(.9302,-.3669,.012,0,-.367,-.929,.0466,0,-.006,-.0478,-.9988,0,-.2401,.1528,-.0013,1)},
        {frame: 187, value: _M(.9301,-.3672,.0122,0,-.3673,-.9287,.0514,0,-.0075,-.0523,-.9986,0,-.2401,.1528,-.0013,1)},
        {frame: 188, value: _M(.93,-.3675,.0125,0,-.3676,-.9283,.0558,0,-.0089,-.0565,-.9984,0,-.2401,.1528,-.0013,1)},
        {frame: 189, value: _M(.9298,-.3677,.0126,0,-.3678,-.928,.0599,0,-.0103,-.0603,-.9981,0,-.2401,.1528,-.0013,1)},
        {frame: 190, value: _M(.9297,-.368,.0128,0,-.368,-.9276,.0637,0,-.0116,-.0639,-.9979,0,-.2401,.1528,-.0013,1)},
        {frame: 191, value: _M(.9296,-.3682,.013,0,-.3682,-.9273,.0671,0,-.0127,-.0671,-.9977,0,-.2401,.1528,-.0013,1)},
        {frame: 192, value: _M(.9296,-.3684,.0131,0,-.3684,-.927,.0701,0,-.0137,-.07,-.9975,0,-.2401,.1528,-.0013,1)},
        {frame: 193, value: _M(.9295,-.3686,.0132,0,-.3686,-.9267,.0728,0,-.0146,-.0725,-.9973,0,-.2401,.1528,-.0013,1)},
        {frame: 194, value: _M(.9294,-.3688,.0133,0,-.3687,-.9265,.0751,0,-.0154,-.0747,-.9971,0,-.2401,.1528,-.0013,1)},
        {frame: 195, value: _M(.9294,-.3689,.0134,0,-.3688,-.9263,.0771,0,-.016,-.0766,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 196, value: _M(.9293,-.369,.0135,0,-.3689,-.9261,.0786,0,-.0166,-.078,-.9968,0,-.2401,.1528,-.0013,1)},
        {frame: 197, value: _M(.9293,-.3691,.0135,0,-.369,-.926,.0799,0,-.017,-.0792,-.9967,0,-.2401,.1528,-.0013,1)},
        {frame: 198, value: _M(.9293,-.3692,.0136,0,-.369,-.9259,.0807,0,-.0173,-.08,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 199, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0812,0,-.0174,-.0805,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 200, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 202, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.R", skeleton,skeleton.bones[30], _M(.9955,-.0885,-.0336,0,.0946,.9411,.3246,0,.0029,-.3263,.9453,0,0,1.3168,0,1), _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1));
        bone.length = 1.2357;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 1, value: _M(.9955,-.0885,-.0336,0,.0946,.9302,.3546,0,-.0001,-.3562,.9344,0,0,1.3168,0,1)},
        {frame: 2, value: _M(.9955,-.0885,-.0336,0,.0943,.8966,.4328,0,-.0082,-.434,.9009,0,0,1.3168,0,1)},
        {frame: 3, value: _M(.9955,-.0885,-.0336,0,.0929,.8478,.5221,0,-.0177,-.5229,.8522,0,0,1.3168,0,1)},
        {frame: 4, value: _M(.9955,-.0885,-.0336,0,.0913,.8046,.5867,0,-.0249,-.5872,.8091,0,0,1.3168,0,1)},
        {frame: 5, value: _M(.9955,-.0885,-.0336,0,.0898,.7713,.6301,0,-.0298,-.6303,.7758,0,0,1.3168,0,1)},
        {frame: 6, value: _M(.9955,-.0885,-.0336,0,.0895,.7654,.6373,0,-.0307,-.6374,.7699,0,0,1.3168,0,1)},
        {frame: 7, value: _M(.9955,-.0885,-.0336,0,.0903,.7825,.6161,0,-.0282,-.6164,.787,0,0,1.3168,0,1)},
        {frame: 8, value: _M(.9955,-.0885,-.0336,0,.0838,.6591,.7474,0,-.044,-.7469,.6635,0,0,1.3168,0,1)},
        {frame: 9, value: _M(.9955,-.0885,-.0336,0,.0754,.5278,.846,0,-.0571,-.8447,.5321,0,0,1.3168,0,1)},
        {frame: 10, value: _M(.9955,-.0885,-.0336,0,.0757,.5323,.8431,0,-.0567,-.8419,.5366,0,0,1.3168,0,1)},
        {frame: 11, value: _M(.9955,-.0885,-.0336,0,.077,.5512,.8308,0,-.055,-.8296,.5556,0,0,1.3168,0,1)},
        {frame: 12, value: _M(.9955,-.0885,-.0336,0,.0804,.6032,.7935,0,-.05,-.7927,.6076,0,0,1.3168,0,1)},
        {frame: 13, value: _M(.9955,-.0885,-.0336,0,.0863,.7039,.705,0,-.0387,-.7047,.7084,0,0,1.3168,0,1)},
        {frame: 14, value: _M(.9955,-.0885,-.0336,0,.092,.8216,.5626,0,-.0222,-.5631,.8261,0,0,1.3168,0,1)},
        {frame: 15, value: _M(.9955,-.0885,-.0336,0,.0945,.9098,.4042,0,-.0052,-.4056,.9141,0,0,1.3168,0,1)},
        {frame: 16, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 30, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 31, value: _M(.9955,-.0885,-.0336,0,.0821,.6306,.7718,0,-.0471,-.7711,.635,0,0,1.3168,0,1)},
        {frame: 32, value: _M(.9955,-.0885,-.0336,0,.0663,.3987,.9147,0,-.0675,-.9128,.4028,0,0,1.3168,0,1)},
        {frame: 33, value: _M(.9955,-.0885,-.0336,0,.0613,.3328,.941,0,-.0721,-.9388,.3367,0,0,1.3168,0,1)},
        {frame: 34, value: _M(.9955,-.0885,-.0336,0,.0758,.5337,.8422,0,-.0566,-.841,.538,0,0,1.3168,0,1)},
        {frame: 35, value: _M(.9955,-.0885,-.0336,0,.0916,.8119,.5766,0,-.0238,-.5771,.8164,0,0,1.3168,0,1)},
        {frame: 36, value: _M(.9955,-.0885,-.0336,0,.0945,.9108,.4019,0,-.005,-.4032,.9151,0,0,1.3168,0,1)},
        {frame: 37, value: _M(.9955,-.0885,-.0336,0,.0938,.8755,.474,0,-.0125,-.475,.8799,0,0,1.3168,0,1)},
        {frame: 38, value: _M(.9955,-.0885,-.0336,0,.0927,.8399,.5348,0,-.0191,-.5355,.8443,0,0,1.3168,0,1)},
        {frame: 39, value: _M(.9955,-.0885,-.0336,0,.0871,.719,.6895,0,-.0369,-.6894,.7235,0,0,1.3168,0,1)},
        {frame: 40, value: _M(.9955,-.0885,-.0336,0,.0467,.1508,.9875,0,-.0823,-.9846,.1543,0,0,1.3168,0,1)},
        {frame: 41, value: _M(.9955,-.0885,-.0336,0,.0172,-.1797,.9836,0,-.093,-.9797,-.1773,0,0,1.3168,0,1)},
        {frame: 42, value: _M(.9955,-.0885,-.0336,0,-.0071,-.4234,.9059,0,-.0944,-.9016,-.4221,0,0,1.3168,0,1)},
        {frame: 43, value: _M(.9955,-.0885,-.0336,0,-.0199,-.5424,.8399,0,-.0925,-.8354,-.5417,0,0,1.3168,0,1)},
        {frame: 44, value: _M(.9955,-.0885,-.0336,0,-.0108,-.4587,.8885,0,-.094,-.8842,-.4576,0,0,1.3168,0,1)},
        {frame: 45, value: _M(.9955,-.0885,-.0336,0,.016,-.1925,.9812,0,-.0933,-.9773,-.1903,0,0,1.3168,0,1)},
        {frame: 46, value: _M(.9955,-.0885,-.0336,0,.0465,.1485,.9878,0,-.0824,-.9849,.152,0,0,1.3168,0,1)},
        {frame: 47, value: _M(.9955,-.0885,-.0336,0,.0764,.5427,.8364,0,-.0558,-.8352,.5471,0,0,1.3168,0,1)},
        {frame: 48, value: _M(.9955,-.0885,-.0336,0,.0898,.7719,.6294,0,-.0298,-.6296,.7764,0,0,1.3168,0,1)},
        {frame: 49, value: _M(.9955,-.0885,-.0336,0,.0946,.9244,.3694,0,-.0016,-.3709,.9287,0,0,1.3168,0,1)},
        {frame: 50, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 60, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 61, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 70, value: _M(.9955,-.0885,-.0336,0,.0935,.8656,.4919,0,-.0145,-.4928,.87,0,0,1.3168,0,1)},
        {frame: 71, value: _M(.9955,-.0885,-.0336,0,.0935,.8657,.4917,0,-.0144,-.4927,.8701,0,0,1.3168,0,1)},
        {frame: 72, value: _M(.9955,-.0885,-.0336,0,.0935,.866,.4913,0,-.0144,-.4922,.8704,0,0,1.3168,0,1)},
        {frame: 73, value: _M(.9955,-.0885,-.0336,0,.0935,.8664,.4905,0,-.0143,-.4914,.8708,0,0,1.3168,0,1)},
        {frame: 74, value: _M(.9955,-.0885,-.0336,0,.0936,.867,.4894,0,-.0142,-.4904,.8714,0,0,1.3168,0,1)},
        {frame: 75, value: _M(.9955,-.0885,-.0336,0,.0936,.8678,.4881,0,-.014,-.489,.8722,0,0,1.3168,0,1)},
        {frame: 76, value: _M(.9955,-.0885,-.0336,0,.0936,.8687,.4864,0,-.0139,-.4873,.8731,0,0,1.3168,0,1)},
        {frame: 77, value: _M(.9955,-.0885,-.0336,0,.0936,.8698,.4844,0,-.0137,-.4854,.8742,0,0,1.3168,0,1)},
        {frame: 78, value: _M(.9955,-.0885,-.0336,0,.0937,.8711,.4821,0,-.0134,-.4831,.8755,0,0,1.3168,0,1)},
        {frame: 79, value: _M(.9955,-.0885,-.0336,0,.0937,.8725,.4796,0,-.0131,-.4805,.8769,0,0,1.3168,0,1)},
        {frame: 80, value: _M(.9955,-.0885,-.0336,0,.0937,.874,.4767,0,-.0128,-.4777,.8784,0,0,1.3168,0,1)},
        {frame: 81, value: _M(.9955,-.0885,-.0336,0,.0938,.8757,.4737,0,-.0125,-.4747,.8801,0,0,1.3168,0,1)},
        {frame: 82, value: _M(.9955,-.0885,-.0336,0,.0938,.8774,.4704,0,-.0122,-.4715,.8818,0,0,1.3168,0,1)},
        {frame: 83, value: _M(.9955,-.0885,-.0336,0,.0939,.8793,.467,0,-.0118,-.4681,.8836,0,0,1.3168,0,1)},
        {frame: 84, value: _M(.9955,-.0885,-.0336,0,.0939,.8811,.4634,0,-.0114,-.4645,.8855,0,0,1.3168,0,1)},
        {frame: 85, value: _M(.9955,-.0885,-.0336,0,.094,.883,.4598,0,-.011,-.4609,.8874,0,0,1.3168,0,1)},
        {frame: 86, value: _M(.9955,-.0885,-.0336,0,.094,.8849,.4561,0,-.0106,-.4572,.8893,0,0,1.3168,0,1)},
        {frame: 87, value: _M(.9955,-.0885,-.0336,0,.0941,.8868,.4524,0,-.0103,-.4536,.8912,0,0,1.3168,0,1)},
        {frame: 88, value: _M(.9955,-.0885,-.0336,0,.0941,.8887,.4488,0,-.0099,-.45,.893,0,0,1.3168,0,1)},
        {frame: 89, value: _M(.9955,-.0885,-.0336,0,.0941,.8904,.4453,0,-.0095,-.4465,.8947,0,0,1.3168,0,1)},
        {frame: 90, value: _M(.9955,-.0885,-.0336,0,.0942,.8921,.442,0,-.0092,-.4432,.8964,0,0,1.3168,0,1)},
        {frame: 91, value: _M(.9955,-.0885,-.0336,0,.0942,.8936,.4388,0,-.0088,-.44,.8979,0,0,1.3168,0,1)},
        {frame: 92, value: _M(.9955,-.0885,-.0336,0,.0942,.895,.4359,0,-.0085,-.4371,.8993,0,0,1.3168,0,1)},
        {frame: 93, value: _M(.9955,-.0885,-.0336,0,.0943,.8963,.4333,0,-.0082,-.4345,.9006,0,0,1.3168,0,1)},
        {frame: 94, value: _M(.9955,-.0885,-.0336,0,.0943,.8974,.431,0,-.008,-.4322,.9017,0,0,1.3168,0,1)},
        {frame: 95, value: _M(.9955,-.0885,-.0336,0,.0943,.8984,.429,0,-.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 96, value: _M(.9955,-.0885,-.0336,0,.0943,.8991,.4274,0,-.0076,-.4286,.9035,0,0,1.3168,0,1)},
        {frame: 97, value: _M(.9955,-.0885,-.0336,0,.0943,.8997,.4261,0,-.0075,-.4273,.9041,0,0,1.3168,0,1)},
        {frame: 98, value: _M(.9955,-.0885,-.0336,0,.0943,.9002,.4252,0,-.0074,-.4264,.9045,0,0,1.3168,0,1)},
        {frame: 99, value: _M(.9955,-.0885,-.0336,0,.0943,.9004,.4246,0,-.0073,-.4259,.9047,0,0,1.3168,0,1)},
        {frame: 100, value: _M(.9955,-.0885,-.0336,0,.0943,.9005,.4244,0,-.0073,-.4257,.9048,0,0,1.3168,0,1)},
        {frame: 101, value: _M(.9955,-.0885,-.0336,0,.0943,.9004,.4246,0,-.0073,-.4259,.9047,0,0,1.3168,0,1)},
        {frame: 102, value: _M(.9955,-.0885,-.0336,0,.0943,.9002,.4252,0,-.0074,-.4264,.9045,0,0,1.3168,0,1)},
        {frame: 103, value: _M(.9955,-.0885,-.0336,0,.0943,.8997,.4261,0,-.0075,-.4273,.9041,0,0,1.3168,0,1)},
        {frame: 104, value: _M(.9955,-.0885,-.0336,0,.0943,.8991,.4274,0,-.0076,-.4286,.9035,0,0,1.3168,0,1)},
        {frame: 105, value: _M(.9955,-.0885,-.0336,0,.0943,.8984,.429,0,-.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 106, value: _M(.9955,-.0885,-.0336,0,.0943,.8974,.431,0,-.008,-.4322,.9017,0,0,1.3168,0,1)},
        {frame: 107, value: _M(.9955,-.0885,-.0336,0,.0943,.8963,.4333,0,-.0082,-.4345,.9006,0,0,1.3168,0,1)},
        {frame: 108, value: _M(.9955,-.0885,-.0336,0,.0942,.895,.4359,0,-.0085,-.4371,.8993,0,0,1.3168,0,1)},
        {frame: 109, value: _M(.9955,-.0885,-.0336,0,.0942,.8936,.4388,0,-.0088,-.44,.8979,0,0,1.3168,0,1)},
        {frame: 110, value: _M(.9955,-.0885,-.0336,0,.0942,.8921,.442,0,-.0092,-.4432,.8964,0,0,1.3168,0,1)},
        {frame: 111, value: _M(.9955,-.0885,-.0336,0,.0941,.8904,.4453,0,-.0095,-.4465,.8947,0,0,1.3168,0,1)},
        {frame: 112, value: _M(.9955,-.0885,-.0336,0,.0941,.8887,.4488,0,-.0099,-.45,.893,0,0,1.3168,0,1)},
        {frame: 113, value: _M(.9955,-.0885,-.0336,0,.0941,.8868,.4524,0,-.0103,-.4536,.8912,0,0,1.3168,0,1)},
        {frame: 114, value: _M(.9955,-.0885,-.0336,0,.094,.8849,.4561,0,-.0106,-.4572,.8893,0,0,1.3168,0,1)},
        {frame: 115, value: _M(.9955,-.0885,-.0336,0,.094,.883,.4598,0,-.011,-.4609,.8874,0,0,1.3168,0,1)},
        {frame: 116, value: _M(.9955,-.0885,-.0336,0,.0939,.8811,.4634,0,-.0114,-.4645,.8855,0,0,1.3168,0,1)},
        {frame: 117, value: _M(.9955,-.0885,-.0336,0,.0939,.8793,.467,0,-.0118,-.4681,.8836,0,0,1.3168,0,1)},
        {frame: 118, value: _M(.9955,-.0885,-.0336,0,.0938,.8774,.4704,0,-.0122,-.4715,.8818,0,0,1.3168,0,1)},
        {frame: 119, value: _M(.9955,-.0885,-.0336,0,.0938,.8757,.4737,0,-.0125,-.4747,.8801,0,0,1.3168,0,1)},
        {frame: 120, value: _M(.9955,-.0885,-.0336,0,.0937,.874,.4767,0,-.0128,-.4777,.8784,0,0,1.3168,0,1)},
        {frame: 121, value: _M(.9955,-.0885,-.0336,0,.0937,.8725,.4796,0,-.0131,-.4805,.8769,0,0,1.3168,0,1)},
        {frame: 122, value: _M(.9955,-.0885,-.0336,0,.0937,.8711,.4821,0,-.0134,-.4831,.8755,0,0,1.3168,0,1)},
        {frame: 123, value: _M(.9955,-.0885,-.0336,0,.0936,.8698,.4844,0,-.0137,-.4854,.8742,0,0,1.3168,0,1)},
        {frame: 124, value: _M(.9955,-.0885,-.0336,0,.0936,.8687,.4864,0,-.0139,-.4873,.8731,0,0,1.3168,0,1)},
        {frame: 125, value: _M(.9955,-.0885,-.0336,0,.0936,.8678,.4881,0,-.014,-.489,.8722,0,0,1.3168,0,1)},
        {frame: 126, value: _M(.9955,-.0885,-.0336,0,.0936,.867,.4894,0,-.0142,-.4904,.8714,0,0,1.3168,0,1)},
        {frame: 127, value: _M(.9955,-.0885,-.0336,0,.0935,.8664,.4905,0,-.0143,-.4914,.8708,0,0,1.3168,0,1)},
        {frame: 128, value: _M(.9955,-.0885,-.0336,0,.0935,.866,.4913,0,-.0144,-.4922,.8704,0,0,1.3168,0,1)},
        {frame: 129, value: _M(.9955,-.0885,-.0336,0,.0935,.8657,.4917,0,-.0144,-.4927,.8701,0,0,1.3168,0,1)},
        {frame: 130, value: _M(.9955,-.0885,-.0336,0,.0935,.8656,.4919,0,-.0145,-.4928,.87,0,0,1.3168,0,1)},
        {frame: 140, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 141, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0028,-.3276,.9448,0,0,1.3168,0,1)},
        {frame: 142, value: _M(.9955,-.0885,-.0336,0,.0946,.9411,.3246,0,.0029,-.3263,.9453,0,0,1.3168,0,1)},
        {frame: 143, value: _M(.9955,-.0885,-.0336,0,.0946,.9419,.3224,0,.0031,-.3241,.946,0,0,1.3168,0,1)},
        {frame: 144, value: _M(.9955,-.0885,-.0336,0,.0946,.9429,.3193,0,.0034,-.321,.9471,0,0,1.3168,0,1)},
        {frame: 145, value: _M(.9955,-.0885,-.0336,0,.0945,.9443,.3152,0,.0038,-.317,.9484,0,0,1.3168,0,1)},
        {frame: 146, value: _M(.9955,-.0885,-.0336,0,.0945,.9459,.3104,0,.0043,-.3122,.95,0,0,1.3168,0,1)},
        {frame: 147, value: _M(.9955,-.0885,-.0336,0,.0945,.9477,.305,0,.0048,-.3068,.9518,0,0,1.3168,0,1)},
        {frame: 148, value: _M(.9955,-.0885,-.0336,0,.0945,.9495,.2993,0,.0054,-.3011,.9536,0,0,1.3168,0,1)},
        {frame: 149, value: _M(.9955,-.0885,-.0336,0,.0944,.9513,.2935,0,.006,-.2954,.9554,0,0,1.3168,0,1)},
        {frame: 150, value: _M(.9955,-.0885,-.0336,0,.0944,.953,.2878,0,.0065,-.2897,.9571,0,0,1.3168,0,1)},
        {frame: 151, value: _M(.9955,-.0885,-.0336,0,.0944,.9546,.2824,0,.0071,-.2843,.9587,0,0,1.3168,0,1)},
        {frame: 152, value: _M(.9955,-.0885,-.0336,0,.0943,.9563,.2768,0,.0076,-.2787,.9603,0,0,1.3168,0,1)},
        {frame: 153, value: _M(.9955,-.0885,-.0336,0,.0943,.9582,.2703,0,.0083,-.2723,.9622,0,0,1.3168,0,1)},
        {frame: 154, value: _M(.9955,-.0885,-.0336,0,.0942,.9602,.2629,0,.009,-.2649,.9642,0,0,1.3168,0,1)},
        {frame: 155, value: _M(.9955,-.0885,-.0336,0,.0941,.9624,.2547,0,.0098,-.2567,.9664,0,0,1.3168,0,1)},
        {frame: 156, value: _M(.9955,-.0885,-.0336,0,.094,.9648,.2455,0,.0107,-.2476,.9688,0,0,1.3168,0,1)},
        {frame: 157, value: _M(.9955,-.0885,-.0336,0,.0939,.9673,.2355,0,.0116,-.2376,.9713,0,0,1.3168,0,1)},
        {frame: 158, value: _M(.9955,-.0885,-.0336,0,.0938,.9699,.2247,0,.0127,-.2268,.9739,0,0,1.3168,0,1)},
        {frame: 159, value: _M(.9955,-.0885,-.0336,0,.0936,.9725,.2131,0,.0138,-.2153,.9765,0,0,1.3168,0,1)},
        {frame: 160, value: _M(.9955,-.0885,-.0336,0,.0934,.9751,.201,0,.015,-.2032,.979,0,0,1.3168,0,1)},
        {frame: 161, value: _M(.9955,-.0885,-.0336,0,.0932,.9776,.1884,0,.0162,-.1907,.9815,0,0,1.3168,0,1)},
        {frame: 162, value: _M(.9955,-.0885,-.0336,0,.093,.98,.1758,0,.0173,-.1781,.9839,0,0,1.3168,0,1)},
        {frame: 163, value: _M(.9955,-.0885,-.0336,0,.0928,.9822,.1633,0,.0185,-.1657,.986,0,0,1.3168,0,1)},
        {frame: 164, value: _M(.9955,-.0885,-.0336,0,.0926,.9841,.1514,0,.0196,-.1538,.9879,0,0,1.3168,0,1)},
        {frame: 165, value: _M(.9955,-.0885,-.0336,0,.0923,.9858,.1403,0,.0207,-.1427,.9895,0,0,1.3168,0,1)},
        {frame: 166, value: _M(.9955,-.0885,-.0336,0,.0921,.9872,.1305,0,.0216,-.133,.9909,0,0,1.3168,0,1)},
        {frame: 167, value: _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 174, value: _M(.9955,-.0885,-.0336,0,.0921,.9876,.1271,0,.0219,-.1296,.9913,0,0,1.3168,0,1)},
        {frame: 175, value: _M(.9955,-.0885,-.0336,0,.0922,.9865,.1352,0,.0212,-.1377,.9902,0,0,1.3168,0,1)},
        {frame: 176, value: _M(.9955,-.0885,-.0336,0,.0924,.9852,.1445,0,.0203,-.1469,.9889,0,0,1.3168,0,1)},
        {frame: 177, value: _M(.9955,-.0885,-.0336,0,.0926,.9836,.1547,0,.0193,-.1571,.9874,0,0,1.3168,0,1)},
        {frame: 178, value: _M(.9955,-.0885,-.0336,0,.0928,.9818,.1655,0,.0183,-.1678,.9856,0,0,1.3168,0,1)},
        {frame: 179, value: _M(.9955,-.0885,-.0336,0,.093,.9798,.1767,0,.0173,-.1791,.9837,0,0,1.3168,0,1)},
        {frame: 180, value: _M(.9955,-.0885,-.0336,0,.0932,.9777,.1883,0,.0162,-.1906,.9815,0,0,1.3168,0,1)},
        {frame: 181, value: _M(.9955,-.0885,-.0336,0,.0934,.9754,.1999,0,.0151,-.2021,.9792,0,0,1.3168,0,1)},
        {frame: 182, value: _M(.9955,-.0885,-.0336,0,.0936,.9729,.2115,0,.014,-.2137,.9768,0,0,1.3168,0,1)},
        {frame: 183, value: _M(.9955,-.0885,-.0336,0,.0937,.9703,.2229,0,.0129,-.225,.9743,0,0,1.3168,0,1)},
        {frame: 184, value: _M(.9955,-.0885,-.0336,0,.0939,.9677,.234,0,.0118,-.2361,.9717,0,0,1.3168,0,1)},
        {frame: 185, value: _M(.9955,-.0885,-.0336,0,.094,.965,.2447,0,.0107,-.2468,.969,0,0,1.3168,0,1)},
        {frame: 186, value: _M(.9955,-.0885,-.0336,0,.0941,.9624,.255,0,.0097,-.257,.9664,0,0,1.3168,0,1)},
        {frame: 187, value: _M(.9955,-.0885,-.0336,0,.0942,.9597,.2647,0,.0088,-.2667,.9638,0,0,1.3168,0,1)},
        {frame: 188, value: _M(.9955,-.0885,-.0336,0,.0943,.9572,.2737,0,.0079,-.2757,.9612,0,0,1.3168,0,1)},
        {frame: 189, value: _M(.9955,-.0885,-.0336,0,.0944,.9547,.2821,0,.0071,-.2841,.9588,0,0,1.3168,0,1)},
        {frame: 190, value: _M(.9955,-.0885,-.0336,0,.0944,.9524,.2898,0,.0063,-.2917,.9565,0,0,1.3168,0,1)},
        {frame: 191, value: _M(.9955,-.0885,-.0336,0,.0945,.9503,.2968,0,.0056,-.2987,.9543,0,0,1.3168,0,1)},
        {frame: 192, value: _M(.9955,-.0885,-.0336,0,.0945,.9483,.303,0,.005,-.3048,.9524,0,0,1.3168,0,1)},
        {frame: 193, value: _M(.9955,-.0885,-.0336,0,.0945,.9465,.3085,0,.0045,-.3103,.9506,0,0,1.3168,0,1)},
        {frame: 194, value: _M(.9955,-.0885,-.0336,0,.0945,.945,.3132,0,.004,-.315,.9491,0,0,1.3168,0,1)},
        {frame: 195, value: _M(.9955,-.0885,-.0336,0,.0946,.9437,.3171,0,.0036,-.3189,.9478,0,0,1.3168,0,1)},
        {frame: 196, value: _M(.9955,-.0885,-.0336,0,.0946,.9426,.3203,0,.0033,-.3221,.9467,0,0,1.3168,0,1)},
        {frame: 197, value: _M(.9955,-.0885,-.0336,0,.0946,.9417,.3228,0,.0031,-.3245,.9459,0,0,1.3168,0,1)},
        {frame: 198, value: _M(.9955,-.0885,-.0336,0,.0946,.9411,.3245,0,.0029,-.3263,.9453,0,0,1.3168,0,1)},
        {frame: 199, value: _M(.9955,-.0885,-.0336,0,.0946,.9408,.3256,0,.0028,-.3273,.9449,0,0,1.3168,0,1)},
        {frame: 200, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0027,-.3276,.9448,0,0,1.3168,0,1)},
        {frame: 202, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0027,-.3276,.9448,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        skeleton.createAnimationRange("Attack", 0, 16);
        skeleton.createAnimationRange("Run", 30, 50);
        skeleton.createAnimationRange("Run3", 60, 61);
        skeleton.createAnimationRange("stand", 70, 130);
        skeleton.createAnimationRange("Stand_with_weapon", 140, 202);
        return skeleton;
    }

    var Boots = (function (_super) {
        __extends(Boots, _super);
        function Boots(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 3;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .9229,.0569,-.2816,1.0366,-.0245,-.3138,.9237,-.0248,-.2665,.9275,-.03,-.4911,.7954,-.0236,-1.0024,.7826,-.026,-.4787,.9092,.0619,-1.0158,.7954,-.0236,-1.0024,.9085,-.0222,-1.065,1.0908,.065,-.9096,1.0791,-.0253,-.5015,1.0796,.0598,-.498,.8157,.0554,-.3072,.7826,-.026,-.4787,.786,.0529,-.481,.8178,.0597,-.9544,.7826,-.026,-.4787
                    ,.7954,-.0236,-1.0024,1.0377,.0564,-.3218,1.0791,-.0253,-.5015,.9275,-.03,-.4911,.8193,-.0247,-.2913,.9237,-.0248,-.2665,1.027,.1396,-.3948,1.0796,.0598,-.498,.8408,.1974,-.6057,.786,.0529,-.481,.8299,.1356,-.3352,.7988,.132,-.4958,.9469,.2211,-.5895,1.0655,.1464,-.4796,.8886,.2109,-.6239,.9232,.1387,-.3195,1.0366,-.0245,-.3138
                    ,.9275,-.03,-.4911,.9237,-.0248,-.2665,1.1289,-.0218,-.9556,1.1289,-.0218,-.9556,1.0791,-.0253,-.5015,.8193,-.0247,-.2913,-.9268,.0569,1.0005,-1.0164,-.0293,1.0032,-1.0244,.0515,.9956,-.987,-.0324,.809,-1.0978,-.0253,.2926,-1.2267,-.0319,.2872,-1.2107,.0527,.3328,-1.0978,-.0253,.2926,-1.1004,.0545,.3475,-1.1235,-.0361,.86,-1.3216,.0395,.5104
                    ,-1.1171,.0517,.8541,-.8459,-.0199,.7606,-.8215,.0565,.9678,-.8436,.0584,.7655,-.8459,-.0199,.7606,-.8436,.0584,.7655,-1.1235,-.0361,.86,-1.1171,.0517,.8541,-.8224,-.0234,.9818,-.987,-.0324,.809,-.9238,-.0246,1.0149,-1.0321,.1405,.9024,-1.1171,.0517,.8541,-1.0773,.1466,.8322,-.9087,.1691,.6434,-.8436,.0584,.7655,-.8186,.1334,.7736
                    ,-.8347,.1386,.939,-.8186,.1334,.7736,-1.0773,.1466,.8322,-.9943,.2005,.6975,-.9628,.1792,.646,-.9192,.1387,.9631,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.1235,-.0361,.86,-1.3739,-.045,.4841,-1.3739,-.045,.4841,-1.1235,-.0361,.86,-.8224,-.0234,.9818,.9085,-.0222,-1.065,.7954,-.0236,-1.0024,.8193,-.0247,-.2913,.7826,-.026,-.4787
                    ,.786,.0529,-.481,.7826,-.026,-.4787,1.0796,.0598,-.498,1.0791,-.0253,-.5015,.9275,-.03,-.4911,.7826,-.026,-.4787,1.0655,.1464,-.4796,1.0796,.0598,-.498,.7988,.132,-.4958,.786,.0529,-.481,1.0366,-.0245,-.3138,1.0791,-.0253,-.5015,.9275,-.03,-.4911,1.1289,-.0218,-.9556,.9085,-.0222,-1.065,.8193,-.0247,-.2913,-.9238,-.0246,1.0149
                    ,-.8459,-.0199,.7606,-1.2267,-.0319,.2872,-1.0978,-.0253,.2926,-.8224,-.0234,.9818,-1.0978,-.0253,.2926,-.8459,-.0199,.7606,-1.1235,-.0361,.86,-.8459,-.0199,.7606,-.987,-.0324,.809,-1.1171,.0517,.8541,-.8436,.0584,.7655,-1.0773,.1466,.8322,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.2267,-.0319,.2872,-1.3739,-.045,.4841,-.8224,-.0234,.9818
                    ,-.9238,-.0246,1.0149
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(240);
                CONTIG(_i, 0, 0, 19);
                _i.set([1,20,21,22,23,24,18,25,26,15,27,14,28,29,11,30,31,15,6,32,18,0,27,0,12,31,9,29,33,34,35,6,36,9,37,3,38,0,39,12], 20);
                CONTIG(_i, 60, 40, 54);
                _i.set([48,55,56,42], 75);
                CONTIG(_i, 79, 57, 67);
                _i.set([54,68,69,70,50,71,72,48,65,73,42,62,53,73,68,50,72,71,74,75,76,77,46,50,43,78,79,80,40,53,0,18,1,3,81,4,6,15,82,9,36,10,12,83,84,15,85,86,18,87
                ,88,89,90,21,23,91,92,25,93,94,27,12,14,29,9,11,31,25,15,32,23,18,27,32,0,31,6,9,95,96,97,6,8,36,98,99,3,0,2,100,40,101,41,43,102,44,46,103,104,49
                ,77,50,52,105,53,48,106,107,42,41,108,59,109,110,62,42,111,65,48,112,54,53,68,113,51,50,72,46,48,73,40,42,53,40,73,50,46,72,114,61,115,77,116,46,43,45,117,118,119,40
                ], 90);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .0632,.2833,.9569,.6004,-.5806,.5499,.0667,-.5664,.8214,.0018,-1,.0043,-.744,-.4254,-.5151,-.7527,-.6567,.0454,-.0285,.7238,-.6894,-.744,-.4254,-.5151,-.0179,-.4057,-.9138,.6559,.6893,-.3075,.7282,-.6786,.0953,.9783,.1969,.0645,-.7225,.218,.6561,-.7527,-.6567,.0454,-.9908,.1296,.0396,-.6952,.6261,-.353,-.7527,-.6567,.0454
                    ,-.744,-.4254,-.5151,.7186,.2635,.6436,.7282,-.6786,.0953,.0018,-1,.0043,-.5675,-.5523,.6106,.0667,-.5664,.8214,.8057,.3995,.4372,.9783,.1969,.0645,-.7996,.5655,-.2019,-.9908,.1296,.0396,-.7032,.3517,.6178,-.9832,.1369,-.1206,.5183,.8106,-.2723,.9685,.1917,-.1588,-.1136,.922,-.3702,.1316,.4836,.8653,.6004,-.5806,.5499
                    ,.0018,-1,.0043,.0667,-.5664,.8214,.7927,-.3764,-.4795,.7927,-.3764,-.4795,.7282,-.6786,.0953,-.5675,-.5523,.6106,.0969,.2821,.9545,-.3435,-.6086,.7152,-.4891,.2911,.8222,.054,-.9985,-.0057,.4602,-.3818,-.8015,-.3677,-.416,-.8317,-.3254,.7388,-.5902,.4602,-.3818,-.8015,.423,.6669,-.6135,-.6103,-.6755,.4138,-.7297,.6811,.0599
                    ,-.8171,.2719,.5082,.7319,-.6317,-.2555,.8219,.1959,.5348,.9438,-.0953,-.3164,.7319,-.6317,-.2555,.9438,-.0953,-.3164,-.6103,-.6755,.4138,-.8171,.2719,.5082,.6794,-.54,.4968,.054,-.9985,-.0057,.0932,-.5769,.8115,-.6295,.5293,.5688,-.8171,.2719,.5082,-.7039,.6066,.3694,.7548,.2452,-.6084,.9438,-.0953,-.3164,.9273,-.2815,-.2465
                    ,.8386,.228,.4947,.9273,-.2815,-.2465,-.7039,.6066,.3694,-.33,.9194,-.2139,-.0343,.9094,-.4145,.0226,.4884,.8723,-.3435,-.6086,.7152,.054,-.9985,-.0057,-.6103,-.6755,.4138,-.9055,-.4187,-.0683,-.9055,-.4187,-.0683,-.6103,-.6755,.4138,.6794,-.54,.4968,-.0179,-.4057,-.9138,-.744,-.4254,-.5151,-.5675,-.5523,.6106,-.7527,-.6567,.0454
                    ,-.9908,.1296,.0396,-.7527,-.6567,.0454,.9783,.1969,.0645,.7282,-.6786,.0953,.0018,-1,.0043,-.7527,-.6567,.0454,.9685,.1917,-.1588,.9783,.1969,.0645,-.9832,.1369,-.1206,-.9908,.1296,.0396,.6004,-.5806,.5499,.7282,-.6786,.0953,.0018,-1,.0043,.7927,-.3764,-.4795,-.0179,-.4057,-.9138,-.5675,-.5523,.6106,.0932,-.5769,.8115
                    ,.7319,-.6317,-.2555,-.3677,-.416,-.8317,.4602,-.3818,-.8015,.6794,-.54,.4968,.4602,-.3818,-.8015,.7319,-.6317,-.2555,-.6103,-.6755,.4138,.7319,-.6317,-.2555,.054,-.9985,-.0057,-.8171,.2719,.5082,.9438,-.0953,-.3164,-.7039,.6066,.3694,-.3435,-.6086,.7152,.054,-.9985,-.0057,-.3677,-.416,-.8317,-.9055,-.4187,-.0683,.6794,-.54,.4968
                    ,.0932,-.5769,.8115
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .6958,.2479,.7194,.2529,.6992,.2607,.903,.9482,.812,.9147,.9081,.9233,.2478,.6563,.2309,.6733,.234,.6489,.2767,.6368,.3519,.6419,.3497,.6557,.678,.2505,.6459,.2608,.6466,.2471,.2481,.6734,.2912,.75,.2309,.6733,.7143,.2409,.7483,.2322,.4786,.9175,.4568,.8833,.4745,.8777,.7125,.2218,.7389,.2217
                    ,.31,.6984,.3016,.7409,.6758,.2349,.6459,.2314,.3248,.6851,.3519,.6725,.3125,.6897,.6921,.2315,.4949,.8843,.4786,.9175,.4745,.8777,.2693,.6207,.8141,.9744,.8979,.9744,.6806,.2638,.5485,.2525,.5268,.2628,.5289,.2499,.2253,.9741,.1316,.9993,.1205,.9801,.8142,.8305,.8139,.8066,.8263,.8185,.8789,.9134
                    ,.8214,.8647,.8869,.9019,.6002,.2533,.5665,.2509,.5962,.2402,.9106,.7935,.9117,.8072,.4939,.2495,.5005,.2371,.5018,.9246,.4799,.9587,.4841,.9189,.5262,.231,.5005,.2371,.511,.2247,.8882,.8436,.9117,.8072,.9117,.8237,.565,.2351,.5933,.2247,.9002,.8914,.8896,.8635,.8839,.8516,.5484,.2357,.4637,.9254
                    ,.4799,.9587,.4532,.9586,.8049,.871,.139,.9401,.2225,.9476,.5671,.2644,.7991,.9329,.2309,.6733,.6806,.2638,.6459,.2608,.3016,.7409,.2912,.75,.7389,.2217,.7483,.2322,.4786,.9175,.4532,.9174,.7258,.2121,.7389,.2217,.313,.7291,.3016,.7409,.4949,.8843,.5053,.9175,.4786,.9175,.8141,.9744,.7991,.9329
                    ,.6806,.2638,.5483,.2658,.2281,.9993,.7991,.8262,.8139,.8066,.5671,.2644,.8139,.8066,.9106,.7935,.4939,.2495,.5053,.9587,.4799,.9587,.5005,.2371,.9117,.8072,.9002,.8914,.4637,.9254,.4799,.9587,.7991,.8262,.139,.9401,.5671,.2644,.5483,.2658
                ]),
                false);

                _i = new Float32Array(480);
                _i.set([.1104,.8865,0,0,.7157,.2754,0,0,.1612,.8364,0,0,.9715,0,0,0,.9895,0,0,0,.8731,.1033,0,0,.9957,0,0,0,.9895,0,0,0,.9966,0,0,0,.9291,.0707,0,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.151,.8362
                ,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.9607,.0208,0,0,.8731,.1033,0,0,.9895,0,0,0,.6813,.3003,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.1837,.8099,0,0,.1612,.8364,0,0,.2182,.072,.7098,0,.7202,.0706,.2092,0
                ,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.163,.04,.7919,0,.1625,.1407,.6968,0,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.0811,.8719,.0441,0,.8311,.1482,0,0,.7157,.2754,0,0,.9715,0,0,0,.1612,.8364,0,0,.9708,.0137,0,0,.9708,.0137
                ,0,0,.8876,.0038,.0855,0,.1837,.8099,0,0,.1104,.8865,0,0,.7157,.2754,0,0,.6813,.3003,0,0,.9715,0,0,0,.9895,0,0,0,.9966,0,0,0,.9957,0,0,0,.9895,0,0,0,.9607,.0208,0,0,.8876,.0038,.0855,0
                ,.9291,.0707,0,0,.7202,.0706,.2092,0,.8731,.1033,0,0,.151,.8362,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.1837,.8099,0,0,.9715,0,0,0,.1612,.8364,0,0,.2182,.072
                ,.7098,0,.7202,.0706,.2092,0,.2099,.2063,.5837,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.1625,.1407,.6968,0,.163,.04,.7919,0,.1625,.1407,.6968,0,.2099,.2063,.5837,0,.0269,.9044,.0571,0,.0811,.8719,.0441,0,.8311,.1482,0,0,.7157,.2754,0,0
                ,.9715,0,0,0,.8876,.0038,.0855,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0038,.0855,0,.1837,.8099,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0,.7202,.0706
                ,.2092,0,.8876,.0038,.0855,0,.9715,0,0,0,.8731,.1033,0,0,.2099,.2063,.5837,0,.7202,.0706,.2092,0,.1625,.1407,.6968,0,.7451,.0641,.1908,0,.7157,.2754,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.9708,.0137,0,0,.9966,0,0,0
                ,.1837,.8099,0,0,.1612,.8364,0,0,.8731,.1033,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.9895,0,0,0,.8731,.1033,0,0,.8876,.0038,.0855,0,.8731,.1033,0,0,.9715,0,0,0,.7202,.0706,.2092,0,.7451,.0641
                ,.1908,0,.2099,.2063,.5837,0,.7157,.2754,0,0,.9715,0,0,0,.9966,0,0,0,.9708,.0137,0,0,.1837,.8099,0,0,.1612,.8364]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(120);
                _i.set([258,258,258,2,2,258,2,2,2,7426,72962,72962,258,258,72962,7426,258,2,258,72962,2,258,258]);
                REPEAT(_i, 23, 9, 72962);
                _i.set([258,258,2,258,7426,7426,72962,258,772,772,772,4,4,4,4,4,7940,204548,7940,204548,772,772,204548,772,204548,204548,204548,772,4,772], 32);
                REPEAT(_i, 62, 11, 204548);
                _i.set([772,772,4,204548,7940,7940,204548,772,2,2,258,258,72962,258,72962,72962,2,258,72962,72962,72962,72962,258,72962,2,7426,2,258,772,772,4,4,772,4,772,204548,772,4,204548,204548,204548,772,4,4,7940], 73);
                REPEAT(_i, 118, 2, 772);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Gloves");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 120, 0, 240, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
        }

        Boots.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(0);
        };
        return Boots;
    })(QI.Mesh);
    Warrior.Boots = Boots;

    var Gloves = (function (_super) {
        __extends(Gloves, _super);
        function Gloves(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 3;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .9573,2.6114,-.5451,1.0377,2.4344,-.4596,1.0785,2.5989,-.3938,.8624,2.387,-.2544,.76,2.3866,-.3815,.8024,2.4269,-.3862,.8038,2.5699,-.4877,.9377,2.4528,-.5828,.8019,2.5308,-.3116,.8624,2.387,-.2544,.8024,2.4269,-.3862,.889,2.4877,-.1556,1.0386,2.4089,-.3051,.8624,2.387,-.2544,1.0386,2.4089,-.3051,.8929,2.338,-.2487,.9377,2.4528,-.5828
                    ,1.0327,2.3944,-.4666,1.0377,2.4344,-.4596,.8047,2.4489,-.5303,.9226,2.4201,-.6128,.9377,2.4528,-.5828,1.0386,2.4089,-.3051,1.0327,2.3944,-.4666,1.0611,2.3656,-.2964,.8024,2.4269,-.3862,.8047,2.4489,-.5303,.8024,2.4269,-.3862,.7391,2.4182,-.5347,1.0785,2.5989,-.3938,1.0841,2.5547,-.2095,1.0807,2.7302,-.3559,1.0877,2.6796,-.1421,.7323,2.6964,-.4694
                    ,.8019,2.5308,-.3116,.8672,2.6006,-.0827,.7261,2.6463,-.2508,.9411,2.7458,-.5316,1.0807,2.7302,-.3559,-1.0912,2.4303,.4986,-1.0979,2.6038,.3701,-1.0814,2.6011,.5607,-.8372,2.3851,.362,-.8228,2.3932,.5234,-.8552,2.4264,.3793,-.9753,2.4529,.2779,-.9408,2.5638,.2925,-.8064,2.5293,.4263,-.8228,2.3932,.5234,-.7779,2.5003,.6098,-.9829,2.4109,.6077
                    ,-.9586,2.5677,.7003,-.8382,2.3434,.5472,-.9829,2.4109,.6077,-1.0889,2.3864,.4978,-1.1121,2.4495,.3482,-1.0912,2.4303,.4986,-1.1271,2.4213,.3228,-.9753,2.4529,.2779,-.9829,2.4109,.6077,-1.0889,2.3864,.4978,-1.0912,2.4303,.4986,-.8552,2.4264,.3793,-.8064,2.5293,.4263,-.941,2.4237,.2487,-.8552,2.4264,.3793,-.9753,2.4529,.2779,-1.0814,2.6011,.5607
                    ,-1.0606,2.7347,.5821,-.918,2.6968,.7462,-.8832,2.6881,.2631,-.8064,2.5293,.4263,-.728,2.6502,.4206,-.7149,2.6166,.642,-.728,2.6502,.4206,-1.0792,2.7378,.3579,-1.0606,2.7347,.5821,.8047,2.4489,-.5303,.8624,2.387,-.2544,1.0386,2.4089,-.3051,.9377,2.4528,-.5828,1.0386,2.4089,-.3051,1.0377,2.4344,-.4596,1.0327,2.3944,-.4666,.8019,2.5308,-.3116
                    ,.8024,2.4269,-.3862,.8024,2.4269,-.3862,1.0785,2.5989,-.3938,1.0377,2.4344,-.4596,1.0785,2.5989,-.3938,.7261,2.6463,-.2508,.8019,2.5308,-.3116,-1.1121,2.4495,.3482,-1.1121,2.4495,.3482,-.8552,2.4264,.3793,-.8228,2.3932,.5234,-.8228,2.3932,.5234,-.9822,2.3574,.6286,-.9829,2.4109,.6077,-.9753,2.4529,.2779,-.9829,2.4109,.6077,-1.0889,2.3864,.4978
                    ,-.8552,2.4264,.3793,-.8552,2.4264,.3793,-1.0912,2.4303,.4986,-1.0814,2.6011,.5607,-1.0814,2.6011,.5607,-.8064,2.5293,.4263,-.728,2.6502,.4206
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array([0,1,2,3,4,5,6,7,0,8,9,10,11,12,13,14,15,3,16,17,18,19,20,21,22,23,24,6,25,26,27,28,19,29,12,30,31,30,32,33,34,6,35,30,11,36,11,8,37,6
                ,0,37,2,38,39,40,41,42,43,44,40,45,46,47,48,49,49,50,51,52,53,43,54,55,56,57,58,55,59,60,61,46,62,63,64,65,66,50,67,51,51,68,69,70,71,72,73,51,69,74
                ,49,73,75,46,70,41,75,76,0,7,1,3,15,4,6,77,7,8,11,78,11,30,12,79,24,15,80,20,17,19,28,20,81,82,83,6,84,85,86,4,28,87,88,12,31,89,30,33,90,91
                ,35,32,30,36,35,11,37,33,6,37,0,2,39,92,40,42,52,43,40,93,45,47,94,95,49,96,50,52,97,98,54,57,55,57,64,99,100,97,101,46,45,102,64,42,103,50,104,105,51,106
                ,68,70,46,107,73,49,51,108,47,49,75,40,46,41,40,75]);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .2989,.1507,-.9423,.9268,-.0624,-.3703,.9414,-.0125,-.337,-.5229,-.3209,.7896,-.673,.6307,.3864,-.8931,.365,.2627,-.7802,-.0531,-.6232,.3533,.3604,-.8633,-.9155,-.376,.1427,-.5229,-.3209,.7896,-.8931,.365,.2627,-.2119,-.6203,.7552,.8668,-.0586,.4951,-.5229,-.3209,.7896,.8668,-.0586,.4951,-.0781,.0738,.9942,.3533,.3604,-.8633
                    ,.9348,.0096,-.3551,.9268,-.0624,-.3703,-.5795,.6364,-.5091,.1422,.631,-.7626,.3533,.3604,-.8633,.8668,-.0586,.4951,.9348,.0096,-.3551,.6703,.4659,.5776,-.8931,.365,.2627,-.5795,.6364,-.5091,-.8931,.365,.2627,-.4641,.8813,-.0892,.9414,-.0125,-.337,.8318,-.3625,.4204,.9459,.0745,-.3157,.8276,-.2851,.4834,-.7227,-.3279,-.6084
                    ,-.9155,-.376,.1427,-.1916,-.5583,.8072,-.8305,-.5447,.1166,.2808,.109,-.9536,.9459,.0745,-.3157,-.9161,-.0616,.3962,-.8885,.1065,-.4462,-.9151,-.015,.4028,.8595,.4169,-.2957,.9123,-.3163,.26,.862,.21,-.4612,-.0168,.4422,-.8968,.1154,-.0806,-.99,.8107,-.3561,-.4646,.9123,-.3163,.26,.6842,-.5656,.4604,-.2916,-.1015,.9511
                    ,-.3129,-.3215,.8937,.7518,.0931,.6528,-.2916,-.1015,.9511,-.8791,.0003,.4766,-.8822,.3724,-.2881,-.9161,-.0616,.3962,-.7014,.6274,-.3382,-.0168,.4422,-.8968,-.2916,-.1015,.9511,-.8791,.0003,.4766,-.9161,-.0616,.3962,.862,.21,-.4612,.8107,-.3561,-.4646,.304,.7841,-.541,.862,.21,-.4612,-.0168,.4422,-.8968,-.9151,-.015,.4028
                    ,-.908,.0737,.4123,-.2666,-.2469,.9316,.1411,-.2844,-.9482,.8107,-.3561,-.4646,.7558,-.4821,-.4431,.7047,-.5166,.4863,.7558,-.4821,-.4431,-.8638,.0764,-.498,-.908,.0737,.4123,-.5795,.6364,-.5091,-.5229,-.3209,.7896,.8668,-.0586,.4951,.3533,.3604,-.8633,.8668,-.0586,.4951,.9268,-.0624,-.3703,.9348,.0096,-.3551,-.9155,-.376,.1427
                    ,-.8931,.365,.2627,-.8931,.365,.2627,.9414,-.0125,-.337,.9268,-.0624,-.3703,.9414,-.0125,-.337,-.8305,-.5447,.1166,-.9155,-.376,.1427,-.8822,.3724,-.2881,-.8822,.3724,-.2881,.862,.21,-.4612,.9123,-.3163,.26,.9123,-.3163,.26,-.0394,.3639,.9306,-.2916,-.1015,.9511,-.0168,.4422,-.8968,-.2916,-.1015,.9511,-.8791,.0003,.4766
                    ,.862,.21,-.4612,.862,.21,-.4612,-.9161,-.0616,.3962,-.9151,-.015,.4028,-.9151,-.015,.4028,.8107,-.3561,-.4646,.7558,-.4821,-.4431
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .8558,.1637,.8807,.1315,.8922,.1678,.6728,.5458,.6791,.5771,.6691,.5761,.8213,.1635,.85,.1315,.3413,.7942,.3147,.7716,.3441,.7683,.3079,.7985,.2811,.7671,.3147,.7716,.6753,.5133,.6839,.542,.6825,.6421,.6877,.6744,.6783,.6742,.6772,.6115,.6916,.6388,.6825,.6421,.6753,.5133,.6812,.4809,.6863,.5136
                    ,.7918,.1444,.8204,.1375,.6684,.5795,.6866,.6077,.2433,.7869,.2734,.8012,.2309,.844,.2689,.8491,.8237,.2118,.7856,.1694,.3046,.8462,.3441,.8515,.8553,.2124,.8902,.2267,.6707,.8872,.7037,.8635,.7066,.9,.4974,.3856,.5117,.357,.5074,.3872,.6787,.8272,.7047,.829,.7991,.0266,.8295,.0094,.8311,.0371
                    ,.8634,.0113,.8645,.0463,.502,.3504,.5178,.325,.4637,.4772,.4772,.4474,.4728,.4795,.4692,.4418,.4903,.4193,.5178,.325,.5206,.2921,.5293,.2957,.6866,.7988,.7118,.7935,.4822,.4132,.5071,.3906,.4903,.4193,.8967,.0379,.8981,.0964,.8598,.0942,.7528,.833,.7118,.7935,.7676,.7993,.8253,.0846,.7856,.0823
                    ,.7524,.8646,.7655,.9,.8204,.1375,.3147,.7716,.6753,.5133,.6825,.6421,.6753,.5133,.6719,.482,.6812,.4809,.7856,.1694,.7918,.1444,.6684,.5795,.2433,.7869,.2559,.7514,.2433,.7869,.7895,.2253,.7856,.1694,.6717,.8566,.6717,.8566,.8012,.0007,.8295,.0094,.8295,.0094,.5071,.3224,.5178,.325,.4903,.4193
                    ,.5178,.325,.5206,.2921,.6866,.7988,.5071,.3906,.891,.0007,.8967,.0379,.8967,.0379,.7118,.7935,.7856,.0823
                ]),
                false);

                _i = new Float32Array(436);
                _i.set([.9088,.0761,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.8944,.0752,0,0,.733,.0466,.2095,0,.8568,.0103,.1082,0,.9149,.0124,.0496,0,.4763,.4772,.0277,0,.9709,0,0,0,.8944,.0752,0,0,.8568,.0103,.1082,0,.9707,0,0,0,.7739,.2167
                ,0,0,.8944,.0752,0,0,.7739,.2167,0,0,.7672,.1875,.005,0,.4763,.4772,.0277,0,.1813,.8114,0,0,.7144,.2808,0,0,.6017,.1156,.275,0,.2312,.6709,.0773,0,.4763,.4772,.0277,0,.7739,.2167,0,0,.1813,.8114,0,0,.379,.6008,0,0
                ,.8568,.0103,.1082,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.3127,.1031,.5713,0,.9646,.0151,0,0,.9649,.0005,0,0,.98,0,0,0,.0692,.9272,0,0,.9662,0,0,0,.9709,0,0,0,.0023,.9701,0,0,.9807,0,0,0,.9669,0
                ,0,0,.98,0,0,0,.7144,.2808,0,0,.9088,.0761,0,0,.9646,.0151,0,0,.733,.0466,.2095,0,.8944,.0752,0,0,.8568,.0103,.1082,0,.6017,.1156,.275,0,.9149,.0124,.0496,0,.9709,0,0,0,.8944,.0752,0,0,.9707,0,0,0
                ,.7739,.2167,0,0,.9649,.0005,0,0,.7672,.1875,.005,0,.7739,.2167,0,0,.1813,.8114,0,0,.4763,.4772,.0277,0,.7144,.2808,0,0,.2312,.6709,.0773,0,.6017,.1156,.275,0,.7739,.2167,0,0,.1813,.8114,0,0,.7144,.2808,0,0,.8568,.0103
                ,.1082,0,.9709,0,0,0,.3127,.1031,.5713,0,.8568,.0103,.1082,0,.6017,.1156,.275,0,.9646,.0151,0,0,.98,0,0,0,.0692,.9272,0,0,.9662,0,0,0,.9709,0,0,0,.9807,0,0,0,.0023,.9701,0,0,.9807,0,0,0
                ,.9669,0,0,0,.98,0,0,0,.6017,.1156,.275,0,.8944,.0752,0,0,.7739,.2167,0,0,.4763,.4772,.0277,0,.7739,.2167,0,0,.7144,.2808,0,0,.1813,.8114,0,0,.9709,0,0,0,.8568,.0103,.1082,0,.8568,.0103,.1082,0,.9646,.0151
                ,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.9807,0,0,0,.9709,0,0,0,.4763,.4772,.0277,0,.4763,.4772,.0277,0,.8568,.0103,.1082,0,.8944,.0752,0,0,.8944,.0752,0,0,.379,.6008,0,0,.7739,.2167,0,0,.6017,.1156,.275,0
                ,.7739,.2167,0,0,.1813,.8114,0,0,.8568,.0103,.1082,0,.8568,.0103,.1082,0,.7144,.2808,0,0,.9646,.0151,0,0,.9646,.0151,0,0,.9709,0,0,0,.9807]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(109);
                _i.set([3340,3340,3340,3340,1051916,1051916,1051916,1051916,12,3340,1051916,12,3340,3340,3340,1051916,1051916,3340,3340,1051916,1051916,1051916,3340,3340,3340,1051916,1051916,1051916,1051916,3340,3340,12,3083,12,12,3083,12,12,12,5653,5653,5653,1709589,5653,1709589,1709589,1709589,21,5653,21
                ,5653,5653,1709589,5653,5653,1709589,5653,1709589,1709589,5653,5653,5653,1709589,21,1709589,1709589,1709589,5653,21,5396,21,21,21,5396,21,21,21,1051916,3340,3340,1051916,3340,3340,3340,12,1051916,1051916,3340,3340,3340,12,12,1709589,1709589,1709589,5653,5653,5653,5653,1709589
                ,5653,5653,1709589,1709589,5653,5653,5653]);
                REPEAT(_i, 107, 2, 21);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Gloves");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 109, 0, 216, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
        }

        Gloves.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(1);
        };
        return Gloves;
    })(QI.Mesh);
    Warrior.Gloves = Gloves;

    var Warrior = (function (_super) {
        __extends(Warrior, _super);
        function Warrior(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 1;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1392,3.9959,-.1509,.2227,4.0712,-.0471,.1302,4.0623,-.135,.2607,3.3502,.3385,.1157,3.7647,.4004,.3772,3.7461,.3029,.4261,3.3593,-.1376,.1825,3.0978,-.3238,.3114,3.0959,-.1305,.8987,3.2729,-.2389,.8614,2.9973,-.3304,.9671,2.9919,-.21,.0213,3.92,-.2052,.1392,3.9959,-.1509,.0381,3.9957,-.1693,.7415,3.714,.0418,.6066,3.3811,.0421
                    ,.5621,3.3659,.1655,.2279,2.8527,.2652,.0903,3.0906,.3504,.2264,3.0903,.285,.0197,3.4359,-.3935,-.1151,3.0909,-.3082,.0417,3.0932,-.3443,.499,3.7474,-.3902,.5204,3.4158,-.3167,.6979,3.416,-.3012,.3251,2.8776,-.0769,.2041,2.7316,-.2141,.3403,2.726,-.0561,.6877,3.7447,-.1768,.7832,3.4281,-.2143,.861,2.8695,-.0431,.7305,2.794,-.1969
                    ,.7548,2.9013,-.1568,.6372,3.1498,-.3763,.7794,3.2474,-.3667,.7577,3.1265,.0311,.9651,2.9583,-.0584,.861,2.8695,-.0431,.7548,2.9013,-.1568,.6091,3.1344,-.1651,.9525,2.608,-.5312,1.0237,2.4337,-.4539,1.0642,2.5986,-.3887,1.0656,2.8257,-.0923,.8612,2.7507,-.038,.8614,2.9973,-.3304,1.0569,2.871,-.2939,.9671,2.9919,-.21,.7686,2.9351,-.3126
                    ,.927,2.8846,-.4603,.8614,2.9973,-.3304,.8697,2.3906,-.2672,.7729,2.3815,-.3875,.8072,2.4264,-.3881,.8087,2.5694,-.4896,.9324,2.4481,-.5694,.8068,2.5303,-.3134,.8697,2.3906,-.2672,.8072,2.4264,-.3881,.8924,2.4961,-.1677,1.0256,2.4111,-.3125,.8697,2.3906,-.2672,.9519,2.1739,-.3332,.8407,2.0713,-.4929,.8878,2.1867,-.5041,1.0256,2.4111,-.3125
                    ,.8951,2.3356,-.2635,.9324,2.4481,-.5694,1.0187,2.3919,-.4614,1.0237,2.4337,-.4539,.8096,2.4485,-.5322,.9202,2.4127,-.5999,.9324,2.4481,-.5694,1.0151,2.1767,-.4903,.8359,2.2005,-.647,.9274,2.1891,-.6495,.3317,3.9472,-.0543,.499,3.7474,-.3902,.6877,3.7447,-.1768,-.0809,3.919,-.193,.0266,3.7804,-.3519,.1157,3.7647,.4004,.1772,3.8934,.2889
                    ,.3772,3.7461,.3029,.3093,3.4543,-.3842,.0266,3.7804,-.3519,.0585,3.9959,.2762,.1596,3.996,.2317,.3317,3.9472,-.0543,.2829,3.9975,.1248,.2562,4.0087,-.0365,-.0984,2.6618,-.2775,.0774,2.5613,-.2753,.0594,2.6911,-.3006,-.1021,2.857,-.2878,.0594,2.6911,-.3006,.049,2.8704,-.316,.3638,2.6623,.189,.2267,2.6466,.2676,-.0969,2.3479,-.2532
                    ,.1395,2.4315,-.3022,.3403,2.726,-.0561,.2269,2.6649,-.2272,.3716,2.6534,-.0528,.2267,2.6466,.2676,.3929,2.5772,.1865,.2848,2.4768,.2711,.3376,1.8974,-.5448,.3462,1.5355,-.6007,.4408,1.5724,-.62,.2875,2.5306,-.2824,.4377,2.5073,-.1163,.4604,2.4214,.1297,.337,2.3494,.2314,.4361,1.4254,-.2476,.3564,1.3686,-.5035,.3298,1.4844,-.4726
                    ,.6165,1.9186,-.3935,.5355,1.5978,-.608,.6617,1.5892,-.5068,.2288,1.7645,-.2891,.4361,1.4254,-.2476,.3298,1.4844,-.4726,.5185,1.7732,-.0973,.6696,1.5342,-.3533,.572,1.4752,-.2763,.4743,1.453,-.6652,.5307,1.0054,-.6518,.6133,1.0302,-.6698,.572,1.4752,-.2763,.706,1.4135,-.3973,.5899,1.3576,-.3161,.4408,1.5724,-.62,.3808,1.4233,-.6441
                    ,.6617,1.5892,-.5068,.5786,1.4682,-.637,.717,1.4669,-.5419,.7794,.3806,-.3277,.8103,.1283,-.4961,.7268,.378,-.4843,.7176,1.0574,-.6456,.8364,1.0842,-.5648,.4573,1.3171,-.2865,.4481,.9692,-.5154,.8206,1.0672,-.416,.7109,1.0175,-.2373,.9219,.0528,-.2929,1.0293,-.0176,-.3205,.923,-.0179,-.2765,.8832,.4089,-.3167,1.0176,.135,-.4007
                    ,.9216,.1328,-.33,.8234,.4173,-.6219,.851,.1911,-.6049,.8898,.2024,-.6256,.981,.4538,-.5177,.9418,.2105,-.5866,1.0548,.1411,-.4808,.9275,-.0179,-.4911,.8043,-.0182,-.9962,.7919,-.0182,-.4794,.9094,.0528,-1.0078,.8043,-.0182,-.9962,.9089,-.0179,-1.0536,1.0825,.0572,-.9056,1.07,-.0174,-.5029,1.0681,.0563,-.4995,.8243,.0525,-.3152
                    ,.7919,-.0182,-.4794,.7978,.0505,-.4818,.8049,2.0916,-.6469,.7093,2.0409,-.5668,.8698,2.0464,-.6545,1.0497,2.3616,-.3055,.929,2.0136,-.4954,.7514,1.9813,-.3538,.9743,1.9973,-.3319,.8261,.0522,-.9499,.7919,-.0182,-.4794,.8043,-.0182,-.9962,1.029,.0531,-.3296,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.8262,-.0182,-.2987,.923,-.0179,-.2765
                    ,.9591,.4399,-.4258,1.0548,.1411,-.4808,.3564,1.3686,-.5035,.8364,1.0842,-.5648,.7268,.378,-.4843,.7719,.4014,-.6099,.6696,1.5342,-.3533,.717,1.4669,-.5419,.2136,1.8465,-.5203,.3298,1.4844,-.4726,.6165,1.9186,-.3935,.6251,1.8409,-.1781,.3298,1.4844,-.4726,.3462,1.5355,-.6007,.3716,2.6534,-.0528,.3638,2.6623,.189,.3716,2.6534,-.0528
                    ,.236,3.9054,-.2377,.2562,4.0087,-.0365,.1392,3.9959,-.1509,.4159,3.906,.1202,.6877,3.7447,-.1768,.7415,3.714,.0418,.7911,2.2148,-.5093,1.0187,2.3919,-.4614,1.0473,2.1753,-.3169,1.0256,2.4111,-.3125,1.0187,2.3919,-.4614,.8072,2.4264,-.3881,.8096,2.4485,-.5322,.8072,2.4264,-.3881,.7502,2.4084,-.5317,.9671,2.9919,-.21,.9651,2.9583,-.0584
                    ,1.0642,2.5986,-.3887,1.0715,2.5598,-.2163,.6091,3.1344,-.1651,.7686,2.9351,-.3126,.7305,2.794,-.1969,.7352,2.8396,-.4032,.6877,3.7447,-.1768,.8067,3.4253,-.0335,.3732,2.8578,.1699,.3403,2.726,-.0561,.9102,3.2644,-.0404,.9671,2.9919,-.21,.4239,3.09,.1371,.4261,3.3593,-.1376,.3114,3.0959,-.1305,.2562,4.0087,-.0365,.2202,4.0598,.1066
                    ,.2227,4.0712,-.0471,.0441,4.0622,-.1704,.0381,3.9957,-.1693,.0585,3.9959,.2762,.1306,4.0585,.1985,.1596,3.996,.2317,1.0176,.135,-.4007,1.0681,.0563,-.4995,.851,.1911,-.6049,.7978,.0505,-.4818,.8385,.1316,-.3427,.8103,.1283,-.4961,.9418,.2105,-.5866,1.0548,.1411,-.4808,.8898,.2024,-.6256,.9216,.1328,-.33,.7832,3.4281,-.2143
                    ,.8067,3.4253,-.0335,.8067,3.4253,-.0335,.6066,3.3811,.0421,.6979,3.416,-.3012,.7832,3.4281,-.2143,1.0569,2.871,-.2939,.8068,2.5303,-.3134,.3251,2.8776,-.0769,.1153,3.3512,.4004,.193,2.8792,-.2226,.6066,3.3811,.0421,.5325,3.3026,-.1558,.4261,3.3593,-.1376,.3093,3.4543,-.3842,.5325,3.3026,-.1558,.5204,3.4158,-.3167,.4261,3.3593,-.1376
                    ,.5325,3.3026,-.1558,.5621,3.3659,.1655,.8898,.2024,-.6256,.9418,.2105,-.5866,.1596,3.996,.2317,.2829,3.9975,.1248,.0381,3.9957,-.1693,-.0196,4.0621,-.181,-.0389,3.9956,-.1729,1.0293,-.0176,-.3205,.9275,-.0179,-.4911,.923,-.0179,-.2765,1.1197,-.0166,-.9497,1.1197,-.0166,-.9497,1.07,-.0174,-.5029,.8833,.4327,-.5985,.8385,.1316,-.3427
                    ,.8262,-.0182,-.2987,.5035,.9624,-.2921,.5355,1.5978,-.608,.4361,1.4254,-.2476,.3206,1.7001,-.0529,.1263,2.2384,.3021,.0599,2.3725,.3471,.4605,1.9342,-.5317,.0527,2.6578,.3169,.0527,2.6578,.3169,.052,2.861,.3018,.2041,2.7316,-.2141,-.1452,3.7781,-.2947,-.1577,3.4339,-.3422,.3772,3.7461,.3029,.7415,3.714,.0418,.499,3.7474,-.3902
                    ,-.0389,3.9956,-.1729,.5621,3.3659,.1655,.7415,3.714,.0418,.1395,2.4315,-.3022,.2875,2.5306,-.2824,.337,2.3494,.2314,.1263,2.2384,.3021,.4377,2.5073,-.1163,.4604,2.4214,.1297,-.0057,2.2976,-.2824,.2288,1.7645,-.2891,.4604,2.4214,.1297,.337,2.3494,.2314,.0299,2.176,-.0612,.2875,2.5306,-.2824,.4377,2.5073,-.1163,.1395,2.4315,-.3022
                    ,.4481,.9692,-.5154,.981,.4538,-.5177,-.0297,2.2741,-.0056,-.0297,2.2741,-.0056,-.0057,2.2976,-.2824,.2267,2.6466,.2676,.1176,4.4728,.1563,.2016,4.5544,.0599,.2092,4.4723,.0621,.1049,4.1966,.1391,.1723,4.3335,.0135,.1758,4.1602,.0504,.2269,4.5505,-.1077,.2375,4.4698,-.1073,.202,4.2817,-.09,.2009,4.1517,-.0776,.2269,4.5505,-.1077
                    ,.2106,4.471,-.2595,.2375,4.4698,-.1073,.202,4.2817,-.09,.1211,4.1254,-.1766,.2009,4.1517,-.0776,.0568,4.2952,-.3487,.0059,4.2778,-.3534,.0783,4.1075,-.3377,.1345,4.4705,-.3679,.0052,4.5463,-.3759,.0044,4.4699,-.3976,.1281,4.5468,-.3541,.0064,4.6277,-.3406,.0052,4.5463,-.3759,.2269,4.5505,-.1077,.176,4.6279,-.2128,.2009,4.5473,-.2599
                    ,.2016,4.5544,.0599,.1955,4.6307,-.1063,.2269,4.5505,-.1077,.1138,4.555,.153,.1633,4.6343,.0429,.2016,4.5544,.0599,.1297,4.3721,-.3463,.0568,4.2952,-.3487,.1179,4.2778,-.3443,.202,4.2817,-.09,.2176,4.4426,-.2595,.1858,4.2781,-.2742,.1723,4.3335,.0135,.2371,4.4419,-.1068,.202,4.2817,-.09,.0988,4.3342,.1209,.2045,4.4398,.0455
                    ,.1723,4.3335,.0135,.0044,4.4699,-.3976,.0044,4.4419,-.3982,.0518,4.442,-.3864,.2375,4.4698,-.1073,.2176,4.4426,-.2595,.2371,4.4419,-.1068,.2045,4.4398,.0455,.2375,4.4698,-.1073,.2371,4.4419,-.1068,.115,4.4404,.141,.2092,4.4723,.0621,.2045,4.4398,.0455,.094,4.635,.1252,.0192,4.7023,.0447,.0572,4.7019,.0298,.1955,4.6307,-.1063
                    ,.1082,4.6974,-.1537,.0933,4.7013,-.0435,.106,4.6992,-.1028,.0639,4.6973,-.2413,.1109,4.6277,-.3105,.0933,4.7013,-.0435,.0192,4.7023,.0447,.0095,4.6974,-.2474,.0234,4.4407,.1693,.1176,4.4728,.1563,.0234,4.4407,.1693,.0224,4.3346,.1422,.0238,4.5553,.1815,.0224,4.3346,.1422,.0229,4.1969,.1576,.0238,4.4732,.1832,.1138,4.555,.153
                    ,.0095,4.6974,-.2474,.2106,4.471,-.2595,.1397,4.4422,-.3605,.2176,4.4426,-.2595,.1281,4.5468,-.3541,.1858,4.2781,-.2742,.0241,4.0651,-.2898,.1109,4.0877,-.1643,.1088,4.113,.171,.0249,4.1157,.1942,-.0072,4.1074,-.3476,-.0121,4.065,-.3028,.2009,4.1517,-.0776,.2078,4.1056,-.0622,.2078,4.1056,-.0622,.1903,4.1086,.0737,.0298,4.0585,.2257
                    ,.2227,4.0712,-.0471,.1858,4.2781,-.2742,.1179,4.2778,-.3443,.0059,4.2778,-.3534,.0431,4.2906,-.3552,.0061,4.2906,-.3472,.0061,4.2906,-.3472,.0235,4.2896,-.4039,.0038,4.2896,-.4164,.0379,4.3698,-.3683,.0431,4.2906,-.3552,.0043,4.3744,-.4009,.0568,4.2952,-.3487,.0403,4.3712,-.35,.0404,4.4249,-.3789,.0355,4.3744,-.3938,.0391,4.4031,-.3736
                    ,.0467,4.415,-.3486,.0355,4.3744,-.3938,.1397,4.4422,-.3605,.0518,4.442,-.3864,.0047,4.4364,-.3904,.7085,2.0627,-.4613,.7257,2.0161,-.4604,.7257,2.0161,-.4604,.7292,2.0331,-.3564,.9002,2.04,-.3351,.8407,2.0713,-.4929,.6906,2.0976,-.5677,.7085,2.0627,-.4613,.929,2.0136,-.4954,.6899,2.1637,-.4803,.7212,2.2983,-.4512,.7191,2.3113,-.5282
                    ,.7596,2.2176,-.588,.7308,2.1427,-.5669,.6978,2.0867,-.5388,.7251,2.0685,-.5632,.7491,2.1434,-.5202,.6844,2.1767,-.5246,.7356,2.0691,-.5363,.7012,2.0794,-.5134,1.0151,2.1767,-.4903,.929,2.0136,-.4954,.0913,3.7579,-.3575,.0056,4.1172,-.3623,.0053,3.7089,-.3695,.1635,4.128,-.3097,.1074,4.1337,-.3654,.0059,4.2778,-.3534,.056,4.2775,-.3691
                    ,.0568,4.2952,-.3487,.1179,4.2778,-.3443,.0568,4.2952,-.3487,.1179,4.2778,-.3443,.1858,4.2494,-.2944,.1858,4.2781,-.2742,.1858,4.2781,-.2742,.21,4.2562,-.1432,.202,4.2817,-.09,.257,4.0088,-.1943,.1109,4.2015,-.3477,.0065,4.1936,-.336,.1175,4.2601,-.3647,-.222,3.9958,-.0622,-.2266,4.0711,.0188,-.2751,4.0084,.1026,-.0333,3.3562,.4539
                    ,.1157,3.7647,.4004,.1153,3.3512,.4004,-.3878,3.0926,.1013,-.544,3.4432,-.0613,-.467,3.3557,.2135,-.8707,3.2721,.49,-.8896,2.9973,.4358,-.864,3.2264,.3198,-.1718,3.9199,-.1481,-.222,3.9958,-.0622,-.3915,3.904,-.015,-.4748,3.4038,.4884,-.5948,3.7364,.5382,-.362,3.3957,.5465,-.0567,3.0921,.3855,.052,2.861,.3018,-.1191,2.8628,.3432
                    ,-.2772,3.0879,-.2607,-.1577,3.4339,-.3422,-.3281,3.4321,-.2654,-.696,3.738,.0599,-.6492,3.3917,.1582,-.544,3.4432,-.0613,-.3963,2.7023,.0645,-.3421,2.8599,-.1154,-.383,2.8706,.0761,-.6999,3.7394,.3366,-.7705,3.3972,.2906,-.698,2.8008,.455,-.69,2.8881,.6527,-.6907,2.9105,.4954,-.7584,3.1238,.2307,-.5788,3.1566,.6143,-.7809,2.9812,.7064
                    ,-.7485,3.2897,.6449,-.6907,2.9105,.4954,-.5971,3.1335,.3698,-1.0773,2.43,.4927,-1.0847,2.6011,.377,-1.0675,2.6008,.5547,-.8719,2.8452,.7589,-.7809,2.9812,.7064,-1.0044,2.8783,.6034,-.8896,2.9973,.4358,-.8847,3.0018,.596,-1.0236,2.8801,.3928,-.8079,2.9346,.3893,-.8896,2.9973,.4358,-.8504,2.3796,.367,-.837,2.3962,.5191,-.8685,2.4247,.3863
                    ,-1.0986,2.4452,.3533,-.9431,2.5631,.3074,-.8193,2.5333,.4333,-.837,2.3962,.5191,-.7888,2.5081,.6029,-.9789,2.4129,.5933,-.9542,2.5722,.6866,-.986,2.0453,.3243,-.9263,2.1707,.5026,-1.015,2.1901,.3431,-.8501,2.3404,.5384,-.9789,2.4129,.5933,-1.0757,2.385,.4905,-1.0986,2.4452,.3533,-1.0773,2.43,.4927,-1.1155,2.4139,.3289,-.9759,2.4455,.2911
                    ,-1.0986,2.4452,.3533,-1.0873,2.1717,.4492,-1.0907,2.2112,.2142,-.9458,2.4128,.258,-.3505,3.9465,.1829,-.696,3.738,.0599,-.1452,3.7781,-.2947,-.0809,3.919,-.193,-.0139,3.8933,.3561,.1157,3.7647,.4004,-.1461,3.7539,.4978,-.3126,3.7802,-.2251,.0585,3.9959,.2762,.1018,3.8658,.3743,-.3505,3.9465,.1829,-.2141,3.9983,.2668,-.3062,3.9098,.3713
                    ,-.2654,2.4985,-.2097,-.0984,2.6618,-.2775,-.2587,2.6534,-.2475,-.2552,2.8543,-.2573,-.0984,2.6618,-.2775,-.1021,2.857,-.2878,-.2861,2.7026,.3013,-.2911,2.8741,.3246,-.3292,2.3326,-.1642,-.0969,2.3479,-.2532,-.3963,2.7023,.0645,-.381,2.5873,-.123,-.3559,2.6706,-.1299,-.1246,2.6725,.3346,-.3109,2.629,.3227,-.2861,2.7026,.3013,-.573,1.75,-.065
                    ,-.5765,1.3929,.0162,-.4497,1.6982,-.0909,-.4194,2.6288,.0918,-.4533,2.429,-.0952,-.1682,2.5401,.3727,-.3842,2.4753,.3573,-.521,1.2701,.1548,-.465,1.4157,.3793,-.493,1.3858,.1269,-.7375,1.8477,.189,-.7482,1.4675,.085,-.6751,1.801,-.0048,-.3384,1.6995,.1282,-.465,1.4157,.3793,-.2928,1.7253,.3809,-.4906,1.8,.4241,-.7285,1.5057,.3766
                    ,-.6289,1.8472,.3908,-.7114,1.3077,.0571,-.7179,.8996,.2248,-.6178,1.2776,.0367,-.6005,1.4663,.4084,-.7712,1.3812,.4009,-.7285,1.5057,.3766,-.6707,1.4304,.0362,-.5765,1.3929,.0162,-.8044,1.5055,.2321,-.7879,1.3413,.1272,-.7482,1.4675,.085,-.8298,.1295,.7751,-.7311,.4097,.7907,-.7621,.3606,.6328,-.8585,1.3849,.2733,-.8803,.9667,.3072
                    ,-.5763,.8959,.3067,-.4932,1.3026,.3962,-.6256,1.344,.4257,-.8561,1.0477,.5448,-.9263,.0529,.9892,-1.0121,-.0221,.9947,-1.0187,.0485,.9857,-.9214,.1328,.9528,-.9384,.4547,.7785,-.8171,.4484,.8402,-.9167,.3684,.5561,-.917,.1638,.6501,-.8651,.3522,.545,-1.0039,.4447,.7097,-.9878,.1907,.7004,-.958,.3945,.6007,-.9877,-.0204,.8092
                    ,-1.1033,-.0204,.3022,-1.2223,-.0275,.2975,-1.2067,.0437,.3398,-1.1033,-.0204,.3022,-1.1054,.0465,.3551,-1.1163,-.0278,.8551,-1.312,.0323,.5104,-1.1069,.0488,.8487,-.8549,-.0127,.7638,-.8305,.0535,.9605,-.8545,.0555,.769,-.9182,1.9903,.2029,-1.0721,2.0569,.1845,-1.1238,2.0235,.2368,-.9753,2.1652,.5856,-.9812,2.354,.614,-.8427,1.993,.4105
                    ,-1.0519,2.0081,.3977,-.9579,2.001,.5362,-.8549,-.0127,.7638,-.8545,.0555,.769,-1.1163,-.0278,.8551,-1.1069,.0488,.8487,-.8299,-.017,.9751,-.9877,-.0204,.8092,-.9239,-.0177,1.0051,-1.067,.1413,.8294,-1.0039,.4447,.7097,-.521,1.2701,.1548,-.9448,1.0242,.4253,-.8585,1.3849,.2733,-.7621,.3606,.6328,-.7285,1.5057,.3766,-.8585,1.3849,.2733
                    ,-.8044,1.5055,.2321,-.493,1.3858,.1269,-.3384,1.6995,.1282,-.7375,1.8477,.189,-.493,1.3858,.1269,-.5765,1.3929,.0162,-.4194,2.6288,.0918,-.2861,2.7026,.3013,-.4194,2.6288,.0918,-.3963,2.7023,.0645,-.2751,4.0084,.1026,-.6999,3.7394,.3366,-.3505,3.9465,.1829,-.9929,2.2333,.2056,-1.0757,2.385,.4905,-.9789,2.4129,.5933,-1.0757,2.385,.4905
                    ,-1.0773,2.43,.4927,-.8685,2.4247,.3863,-.8193,2.5333,.4333,-.8685,2.4247,.3863,-.8847,3.0018,.596,-.7809,2.9812,.7064,-1.0675,2.6008,.5547,-.8079,2.9346,.3893,-.5971,3.1335,.3698,-.698,2.8008,.455,-.6907,2.9105,.4954,-.6767,3.4464,.5602,-.6999,3.7394,.3366,-.383,2.8706,.0761,-.8847,3.0018,.596,-.8707,3.2721,.49,-.3047,3.1,.3927
                    ,-.467,3.3557,.2135,-.362,3.3957,.5465,-.2751,4.0084,.1026,-.18,4.0597,.1669,-.2141,3.9983,.2668,-.1108,3.9956,-.1409,-.1588,4.0623,-.0952,-.0518,3.9959,.2931,.0298,4.0585,.2257,.0585,3.9959,.2762,-1.0237,.1359,.8955,-1.1069,.0488,.8487,-1.067,.1413,.8294,-.917,.1638,.6501,-.8545,.0555,.769,-.8298,.1295,.7751,-.8437,.1344,.9324
                    ,-.8298,.1295,.7751,-.9878,.1907,.7004,-1.067,.1413,.8294,-.9641,.1706,.6472,-.917,.1638,.6501,-.9214,.1328,.9528,-.6767,3.4464,.5602,-.8707,3.2721,.49,-.778,3.4238,.4102,-.6767,3.4464,.5602,-.4748,3.4038,.4884,-.7705,3.3972,.2906,-.6492,3.3917,.1582,-.778,3.4238,.4102,-.7705,3.3972,.2906,-1.0044,2.8783,.6034,-.8436,2.8348,.3056
                    ,-.8193,2.5333,.4333,-.698,2.8008,.455,-.6837,2.7689,.6623,-.3878,3.0926,.1013,-.1151,3.0909,-.3082,.0903,3.0906,.3504,-.4009,3.0889,-.1411,-.4748,3.4038,.4884,-.467,3.3557,.2135,-.5455,3.2981,.3002,-.5455,3.2981,.3002,-.6492,3.3917,.1582,-.467,3.3557,.2135,-.5455,3.2981,.3002,-.362,3.3957,.5465,-.9214,.1328,.9528,-.9878,.1907,.7004
                    ,-.2141,3.9983,.2668,-.0705,4.0585,.2242,-.0389,3.9956,-.1729,-.0808,4.0622,-.1542,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.1163,-.0278,.8551,-1.3634,-.0392,.4854,-1.3634,-.0392,.4854,-1.1163,-.0278,.8551,-.9641,.1706,.6472,-.8437,.1344,.9324,-.8299,-.017,.9751,-.6689,1.0409,.6522,-.7482,1.4675,.085,-.8001,.9253,.2436,-.465,1.4157,.3793
                    ,.0599,2.3725,.3471,-.2233,2.417,.3993,.0527,2.6578,.3169,.0599,2.3725,.3471,.052,2.861,.3018,-.1246,2.6725,.3346,-.3559,2.6706,-.1299,-.1452,3.7781,-.2947,-.1577,3.4339,-.3422,-.5948,3.7364,.5382,-.3126,3.7802,-.2251,-.0809,3.919,-.193,-.1108,3.9956,-.1409,-.362,3.3957,.5465,-.1461,3.7539,.4978,-.3292,2.3326,-.1642,-.4533,2.429,-.0952
                    ,-.0147,2.2579,.3584,-.2233,2.417,.3993,-.4962,2.4743,.1223,-.3842,2.4753,.3573,-.0963,2.1486,.039,-.1863,2.2212,-.1972,-.3842,2.4753,.3573,-.2233,2.417,.3993,-.0963,2.1486,.039,-.4533,2.429,-.0952,-.4962,2.4743,.1223,-.3292,2.3326,-.1642,-.5128,.956,.52,-.5763,.8959,.3067,-1.0039,.4447,.7097,-.9448,1.0242,.4253,-.0147,2.2579,.3584
                    ,-.0297,2.2741,-.0056,-.0963,2.1486,.039,-.0297,2.2741,-.0056,-.1863,2.2212,-.1972,-.0963,2.1486,.039,.0527,2.6578,.3169,-.0715,4.4729,.1626,-.1618,4.5545,.072,-.0679,4.555,.1591,-.06,4.1966,.1447,-.1356,4.3336,.0238,-.0552,4.3342,.126,-.1692,4.4723,.0747,-.1982,4.5506,-.0935,-.1411,4.1602,.0687,-.1767,4.2817,-.0737,-.192,4.471,-.2461
                    ,-.1982,4.5506,-.0935,-.2087,4.4699,-.0925,-.1286,4.1254,-.156,-.1767,4.2817,-.0737,-.1888,4.1517,-.0475,-.0072,4.1074,-.3476,-.0445,4.2953,-.3453,-.1063,4.2779,-.3366,-.1233,4.4705,-.3593,.0052,4.5463,-.3759,-.116,4.5468,-.3459,-.116,4.5468,-.3459,.0064,4.6277,-.3406,-.0959,4.6277,-.3036,-.1982,4.5506,-.0935,-.1544,4.6279,-.2018,-.1667,4.6308,-.0942
                    ,-.1618,4.5545,.072,-.1667,4.6308,-.0942,-.1247,4.6343,.0525,-.0679,4.555,.1591,-.05,4.635,.13,-.0445,4.2953,-.3453,-.1172,4.3721,-.338,-.1063,4.2779,-.3366,-.1767,4.2817,-.0737,-.199,4.4426,-.2456,-.2083,4.442,-.0919,-.1356,4.3336,.0238,-.2083,4.442,-.0919,-.1656,4.4399,.0578,-.0552,4.3342,.126,-.07,4.4404,.1472,-.0421,4.4421,-.3833
                    ,.0044,4.4699,-.3976,-.1233,4.4705,-.3593,-.199,4.4426,-.2456,-.2087,4.4699,-.0925,-.2083,4.442,-.0919,-.1656,4.4399,.0578,-.2087,4.4699,-.0925,-.1692,4.4723,.0747,-.07,4.4404,.1472,-.1692,4.4723,.0747,-.0715,4.4729,.1626,.0192,4.7023,.0447,.0226,4.6355,.1446,-.0827,4.6975,-.1473,-.1667,4.6308,-.0942,-.0606,4.7013,-.0384,-.0444,4.6973,-.2377
                    ,.0095,4.6974,-.2474,.0192,4.7023,.0447,-.0606,4.7013,-.0384,-.0197,4.7019,.0324,.0234,4.4407,.1693,-.0715,4.4729,.1626,.0238,4.4732,.1832,-.0552,4.3342,.126,.0234,4.4407,.1693,.0224,4.3346,.1422,.0238,4.5553,.1815,.0224,4.3346,.1422,.0229,4.1969,.1576,.0238,4.4732,.1832,.0238,4.5553,.1815,.0064,4.6277,-.3406,-.1281,4.4422,-.3516
                    ,-.192,4.471,-.2461,-.199,4.4426,-.2456,-.1739,4.2781,-.2598,-.1824,4.5473,-.2471,-.1824,4.5473,-.2471,-.092,4.1075,-.3273,-.1739,4.2781,-.2598,-.0495,4.0651,-.2839,-.1311,4.0877,-.1383,-.0604,4.113,.1819,.0229,4.1969,.1576,.0249,4.1157,.1942,-.0072,4.1074,-.3476,-.2046,4.1056,-.0173,-.2046,4.1056,-.0173,-.1567,4.1086,.1059,.0298,4.0585,.2257
                    ,.0249,4.1157,.1942,-.2266,4.0711,.0188,-.0196,4.0621,-.181,-.1739,4.2781,-.2598,.0059,4.2778,-.3534,-.0314,4.2906,-.3527,-.0445,4.2953,-.3453,.0061,4.2906,-.3472,-.0151,4.2896,-.4026,-.0314,4.2906,-.3527,-.027,4.3698,-.3661,-.0314,4.2906,-.3527,.0043,4.3744,-.4009,-.0263,4.3744,-.3917,-.0445,4.2953,-.3453,-.0314,4.2906,-.3527,.0043,4.3744,-.4009
                    ,-.0302,4.4249,-.3766,-.0282,4.3712,-.3477,-.0282,4.4032,-.358,-.0345,4.415,-.3459,-.0263,4.3744,-.3917,-.1281,4.4422,-.3516,-.122,4.4156,-.3252,.0047,4.4364,-.3904,-.8735,2.0363,.2761,-.8709,2.0022,.3111,-.8332,2.0345,.3763,-.8709,2.0022,.3111,-.9112,2.0319,.4725,-.9134,2.041,.1735,-.986,2.0453,.3243,-1.0519,2.0081,.3977,-.8619,2.1814,.2114
                    ,-.9508,2.2186,.2788,-.8633,2.3052,.2786,-.9541,2.1634,.1832,-.9099,2.1123,.1623,-.8931,2.1997,.1824,-.9296,2.1544,.226,-.9226,2.3245,.2296,-.9315,2.0871,.1877,-.8922,2.1011,.1789,-1.0873,2.1717,.4492,-1.0519,2.0081,.3977,-1.153,2.1952,.2809,-.0797,3.7579,-.3518,-.0962,4.1337,-.3586,-.1498,4.128,-.2988,.0059,4.2778,-.3534,-.0451,4.2775,-.3657
                    ,.0052,4.2601,-.3737,-.1063,4.2779,-.3366,-.0445,4.2953,-.3453,-.1063,4.2779,-.3366,-.1739,4.2495,-.2806,-.1067,4.2601,-.3571,-.1739,4.2781,-.2598,-.1886,4.2563,-.1265,-.236,4.0089,-.1765,-.0987,4.2015,-.3406,.0404,4.4249,-.3789,.0518,4.442,-.3864,-.0302,4.4249,-.3766,-.0421,4.4421,-.3833,.2562,4.0087,-.0365,.1392,3.9959,-.1509,.3093,3.4543,-.3842
                    ,.7686,2.9351,-.3126,.861,2.8695,-.0431,.7548,2.9013,-.1568,.9651,2.9583,-.0584,.8614,2.9973,-.3304,.8096,2.4485,-.5322,.8697,2.3906,-.2672,1.0256,2.4111,-.3125,.9324,2.4481,-.5694,.499,3.7474,-.3902,-.1452,3.7781,-.2947,.1157,3.7647,.4004,.1018,3.8658,.3743,.499,3.7474,-.3902,.0266,3.7804,-.3519,.1018,3.8658,.3743,.3317,3.9472,-.0543
                    ,-.0984,2.6618,-.2775,.0594,2.6911,-.3006,-.0057,2.2976,-.2824,.3403,2.726,-.0561,.2041,2.7316,-.2141,.2267,2.6466,.2676,.3638,2.6623,.189,.4361,1.4254,-.2476,.572,1.4752,-.2763,.6696,1.5342,-.3533,.4408,1.5724,-.62,.3462,1.5355,-.6007,.6617,1.5892,-.5068,.5355,1.5978,-.608,.8385,.1316,-.3427,.9089,-.0179,-1.0536,.8043,-.0182,-.9962
                    ,.8262,-.0182,-.2987,.7919,-.0182,-.4794,.7257,2.0161,-.4604,.7978,.0505,-.4818,.7919,-.0182,-.4794,1.0681,.0563,-.4995,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.7919,-.0182,-.4794,.981,.4538,-.5177,1.0548,.1411,-.4808,.3564,1.3686,-.5035,.4481,.9692,-.5154,.717,1.4669,-.5419,.8364,1.0842,-.5648,.7268,.378,-.4843,.8103,.1283,-.4961
                    ,.6696,1.5342,-.3533,.6617,1.5892,-.5068,.717,1.4669,-.5419,.2288,1.7645,-.2891,.3298,1.4844,-.4726,.6165,1.9186,-.3935,.6617,1.5892,-.5068,.3298,1.4844,-.4726,.3564,1.3686,-.5035,.3716,2.6534,-.0528,.4377,2.5073,-.1163,.3638,2.6623,.189,.3403,2.726,-.0561,.3716,2.6534,-.0528,.2562,4.0087,-.0365,.3317,3.9472,-.0543,.6877,3.7447,-.1768
                    ,1.0187,2.3919,-.4614,1.0151,2.1767,-.4903,1.0256,2.4111,-.3125,1.0237,2.4337,-.4539,1.0187,2.3919,-.4614,.8407,2.0713,-.4929,.8068,2.5303,-.3134,.8072,2.4264,-.3881,.8072,2.4264,-.3881,.9671,2.9919,-.21,1.0569,2.871,-.2939,1.0642,2.5986,-.3887,1.0237,2.4337,-.4539,.6091,3.1344,-.1651,.7548,2.9013,-.1568,.7686,2.9351,-.3126,.7548,2.9013,-.1568
                    ,.7305,2.794,-.1969,.6877,3.7447,-.1768,.7832,3.4281,-.2143,.3251,2.8776,-.0769,.3403,2.726,-.0561,.8987,3.2729,-.2389,.9671,2.9919,-.21,.5621,3.3659,.1655,.4261,3.3593,-.1376,.2562,4.0087,-.0365,.2829,3.9975,.1248,.0585,3.9959,.2762,1.0176,.135,-.4007,1.0548,.1411,-.4808,1.0681,.0563,-.4995,.851,.1911,-.6049,.8103,.1283,-.4961
                    ,.7978,.0505,-.4818,.9418,.2105,-.5866,.8898,.2024,-.6256,.851,.1911,-.6049,.9216,.1328,-.33,1.0176,.135,-.4007,.7832,3.4281,-.2143,.8987,3.2729,-.2389,.8067,3.4253,-.0335,.6979,3.416,-.3012,.5204,3.4158,-.3167,.7832,3.4281,-.2143,.6979,3.416,-.3012,1.0569,2.871,-.2939,1.0642,2.5986,-.3887,.7305,2.794,-.1969,.8068,2.5303,-.3134
                    ,.3114,3.0959,-.1305,.3251,2.8776,-.0769,.6066,3.3811,.0421,.4261,3.3593,-.1376,.5325,3.3026,-.1558,.5325,3.3026,-.1558,.6091,3.1344,-.1651,.4261,3.3593,-.1376,.9216,.1328,-.33,.8898,.2024,-.6256,.1596,3.996,.2317,.0381,3.9957,-.1693,1.0293,-.0176,-.3205,1.07,-.0174,-.5029,.9275,-.0179,-.4911,1.1197,-.0166,-.9497,.9089,-.0179,-1.0536
                    ,.8385,.1316,-.3427,.8262,-.0182,-.2987,.5355,1.5978,-.608,.4408,1.5724,-.62,.572,1.4752,-.2763,.4361,1.4254,-.2476,.0527,2.6578,.3169,.0594,2.6911,-.3006,.0266,3.7804,-.3519,.3772,3.7461,.3029,-.0389,3.9956,-.1729,.5621,3.3659,.1655,.1395,2.4315,-.3022,.337,2.3494,.2314,.4377,2.5073,-.1163,.6165,1.9186,-.3935,.0299,2.176,-.0612
                    ,.2288,1.7645,-.2891,.4604,2.4214,.1297,.1263,2.2384,.3021,.2875,2.5306,-.2824,.4481,.9692,-.5154,.7268,.378,-.4843,.8364,1.0842,-.5648,.981,.4538,-.5177,.0299,2.176,-.0612,-.0297,2.2741,-.0056,.0299,2.176,-.0612,-.0057,2.2976,-.2824,.1138,4.555,.153,.0988,4.3342,.1209,.2269,4.5505,-.1077,.2009,4.5473,-.2599,.202,4.2817,-.09
                    ,.1858,4.2781,-.2742,.1179,4.2778,-.3443,.1281,4.5468,-.3541,.2269,4.5505,-.1077,.1955,4.6307,-.1063,.2016,4.5544,.0599,.0568,4.2952,-.3487,.202,4.2817,-.09,.2371,4.4419,-.1068,.1723,4.3335,.0135,.115,4.4404,.141,.1345,4.4705,-.3679,.1345,4.4705,-.3679,.0044,4.4699,-.3976,.2375,4.4698,-.1073,.2106,4.471,-.2595,.2176,4.4426,-.2595
                    ,.2045,4.4398,.0455,.2092,4.4723,.0621,.2375,4.4698,-.1073,.1176,4.4728,.1563,.2092,4.4723,.0621,.0226,4.6355,.1446,.1955,4.6307,-.1063,.106,4.6992,-.1028,.0639,4.6973,-.2413,.1082,4.6974,-.1537,.106,4.6992,-.1028,.0933,4.7013,-.0435,.0572,4.7019,.0298,.0192,4.7023,.0447,.0933,4.7013,-.0435,.1082,4.6974,-.1537,.106,4.6992,-.1028
                    ,.0238,4.4732,.1832,.1176,4.4728,.1563,.0234,4.4407,.1693,.115,4.4404,.141,.0226,4.6355,.1446,.0224,4.3346,.1422,.0988,4.3342,.1209,.0238,4.5553,.1815,.1138,4.555,.153,.2106,4.471,-.2595,.1345,4.4705,-.3679,.1397,4.4422,-.3605,.1354,4.4155,-.3338,.2009,4.5473,-.2599,.1281,4.5468,-.3541,.2009,4.1517,-.0776,.2078,4.1056,-.0622
                    ,.2078,4.1056,-.0622,.2227,4.0712,-.0471,.0059,4.2778,-.3534,.0568,4.2952,-.3487,.0061,4.2906,-.3472,.0431,4.2906,-.3552,.0355,4.3744,-.3938,.0431,4.2906,-.3552,.0568,4.2952,-.3487,.0404,4.4249,-.3789,.0355,4.3744,-.3938,.1397,4.4422,-.3605,.7257,2.0161,-.4604,.7085,2.0627,-.4613,.8407,2.0713,-.4929,.929,2.0136,-.4954,1.0151,2.1767,-.4903
                    ,.929,2.0136,-.4954,.0059,4.2778,-.3534,.1179,4.2778,-.3443,.1179,4.2778,-.3443,.1858,4.2781,-.2742,-.1461,3.7539,.4978,.1157,3.7647,.4004,-.8847,3.0018,.596,-.1108,3.9956,-.1409,-.222,3.9958,-.0622,.0903,3.0906,.3504,.052,2.861,.3018,-.1151,3.0909,-.3082,-.1577,3.4339,-.3422,-.3559,2.6706,-.1299,-.778,3.4238,.4102,-.8079,2.9346,.3893
                    ,-.69,2.8881,.6527,-.6907,2.9105,.4954,-.69,2.8881,.6527,-.8896,2.9973,.4358,-.9759,2.4455,.2911,-.8685,2.4247,.3863,-.837,2.3962,.5191,-.837,2.3962,.5191,-.9789,2.4129,.5933,-1.0986,2.4452,.3533,-.6999,3.7394,.3366,-.696,3.738,.0599,-.3126,3.7802,-.2251,-.1452,3.7781,-.2947,.1157,3.7647,.4004,-.696,3.738,.0599,-.0518,3.9959,.2931
                    ,.0585,3.9959,.2762,-.3505,3.9465,.1829,-.2751,4.0084,.1026,-.0969,2.3479,-.2532,-.0984,2.6618,-.2775,-.2587,2.6534,-.2475,-.0984,2.6618,-.2775,-.1246,2.6725,.3346,-.1863,2.2212,-.1972,-.0969,2.3479,-.2532,-.3963,2.7023,.0645,-.6707,1.4304,.0362,-.4962,2.4743,.1223,-.8044,1.5055,.2321,-.493,1.3858,.1269,-.465,1.4157,.3793,-.6005,1.4663,.4084
                    ,-.8437,.1344,.9324,-.9448,1.0242,.4253,-.9239,-.0177,1.0051,-1.0237,.1359,.8955,-.9641,.1706,.6472,-1.067,.1413,.8294,-.8549,-.0127,.7638,-1.2223,-.0275,.2975,-1.1033,-.0204,.3022,-.8299,-.017,.9751,-.8709,2.0022,.3111,-1.1033,-.0204,.3022,-.8549,-.0127,.7638,-1.1163,-.0278,.8551,-.8549,-.0127,.7638,-.9877,-.0204,.8092,-1.0237,.1359,.8955
                    ,-.5763,.8959,.3067,-.521,1.2701,.1548,-.8298,.1295,.7751,-.7621,.3606,.6328,-.7285,1.5057,.3766,-.8585,1.3849,.2733,-.493,1.3858,.1269,-.8044,1.5055,.2321,-.7375,1.8477,.189,-.521,1.2701,.1548,-.493,1.3858,.1269,-.4962,2.4743,.1223,-.4194,2.6288,.0918,-.2861,2.7026,.3013,-.4194,2.6288,.0918,-.222,3.9958,-.0622,-.2751,4.0084,.1026
                    ,-.5948,3.7364,.5382,-.6999,3.7394,.3366,-1.0873,2.1717,.4492,-1.0757,2.385,.4905,-.9789,2.4129,.5933,-1.0757,2.385,.4905,-.986,2.0453,.3243,-.9759,2.4455,.2911,-.8685,2.4247,.3863,-.8685,2.4247,.3863,-1.0044,2.8783,.6034,-.8847,3.0018,.596,-1.0773,2.43,.4927,-1.0675,2.6008,.5547,-.8079,2.9346,.3893,-.6907,2.9105,.4954,-.5971,3.1335,.3698
                    ,-.698,2.8008,.455,-.778,3.4238,.4102,-.6999,3.7394,.3366,-.3963,2.7023,.0645,-.383,2.8706,.0761,-.8847,3.0018,.596,-.3878,3.0926,.1013,-.467,3.3557,.2135,-.2751,4.0084,.1026,-.2266,4.0711,.0188,.0298,4.0585,.2257,-1.1069,.0488,.8487,-.917,.1638,.6501,-.8545,.0555,.769,-.9878,.1907,.7004,-.9214,.1328,.9528,-.6767,3.4464,.5602
                    ,-.8707,3.2721,.49,-.6767,3.4464,.5602,-.7705,3.3972,.2906,-.778,3.4238,.4102,-1.0675,2.6008,.5547,-1.0044,2.8783,.6034,-.8193,2.5333,.4333,-.383,2.8706,.0761,-.3878,3.0926,.1013,-.1021,2.857,-.2878,-.1151,3.0909,-.3082,.1153,3.3512,.4004,.0903,3.0906,.3504,-.4748,3.4038,.4884,-.5455,3.2981,.3002,-.467,3.3557,.2135,-.544,3.4432,-.0613
                    ,-.5971,3.1335,.3698,-.5455,3.2981,.3002,-.467,3.3557,.2135,-.9214,.1328,.9528,-.2141,3.9983,.2668,-.0389,3.9956,-.1729,-.0196,4.0621,-.181,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.2223,-.0275,.2975,-1.3634,-.0392,.4854,-.9641,.1706,.6472,-.8437,.1344,.9324,-.8299,-.017,.9751,-.9239,-.0177,1.0051,-.7482,1.4675,.085,-.465,1.4157,.3793
                    ,-.6005,1.4663,.4084,.0599,2.3725,.3471,-.0147,2.2579,.3584,-.6707,1.4304,.0362,.052,2.861,.3018,.0527,2.6578,.3169,-.1246,2.6725,.3346,-.3559,2.6706,-.1299,-.2587,2.6534,-.2475,-.0518,3.9959,.2931,-.1452,3.7781,-.2947,-.696,3.738,.0599,-.3126,3.7802,-.2251,-.0809,3.919,-.193,-.0389,3.9956,-.1729,-.1108,3.9956,-.1409,-.362,3.3957,.5465
                    ,-.5948,3.7364,.5382,-.1461,3.7539,.4978,-.3292,2.3326,-.1642,-.7375,1.8477,.189,-.3384,1.6995,.1282,-.3842,2.4753,.3573,-.0963,2.1486,.039,-.4533,2.429,-.0952,-.7621,.3606,.6328,-.5763,.8959,.3067,-1.0039,.4447,.7097,-.9448,1.0242,.4253,-.0147,2.2579,.3584,.0599,2.3725,.3471,-.0297,2.2741,-.0056,-.0297,2.2741,-.0056,-.0969,2.3479,-.2532
                    ,-.1863,2.2212,-.1972,-.2087,4.4699,-.0925,-.1888,4.1517,-.0475,-.1824,4.5473,-.2471,-.1982,4.5506,-.0935,-.1739,4.2781,-.2598,-.1767,4.2817,-.0737,-.0072,4.1074,-.3476,-.0072,4.1074,-.3476,.0059,4.2778,-.3534,.0044,4.4699,-.3976,.0052,4.5463,-.3759,-.116,4.5468,-.3459,.0052,4.5463,-.3759,.0064,4.6277,-.3406,-.1982,4.5506,-.0935,-.1618,4.5545,.072
                    ,-.1982,4.5506,-.0935,-.1667,4.6308,-.0942,-.0679,4.555,.1591,-.1618,4.5545,.072,-.0445,4.2953,-.3453,-.1767,4.2817,-.0737,-.1356,4.3336,.0238,-.1767,4.2817,-.0737,-.2083,4.442,-.0919,-.0552,4.3342,.126,-.1356,4.3336,.0238,-.1233,4.4705,-.3593,.0044,4.4419,-.3982,.0044,4.4699,-.3976,-.199,4.4426,-.2456,-.192,4.471,-.2461,-.2087,4.4699,-.0925
                    ,-.1656,4.4399,.0578,-.2083,4.442,-.0919,-.2087,4.4699,-.0925,-.07,4.4404,.1472,-.1656,4.4399,.0578,-.1692,4.4723,.0747,.0192,4.7023,.0447,-.0772,4.6992,-.0966,-.1667,4.6308,-.0942,-.0772,4.6992,-.0966,-.0772,4.6992,-.0966,-.0827,4.6975,-.1473,.0095,4.6974,-.2474,-.0444,4.6973,-.2377,.0095,4.6974,-.2474,-.0827,4.6975,-.1473,.0192,4.7023,.0447
                    ,-.0197,4.7019,.0324,-.0606,4.7013,-.0384,-.0606,4.7013,-.0384,-.0772,4.6992,-.0966,.0095,4.6974,-.2474,.0234,4.4407,.1693,-.07,4.4404,.1472,-.0715,4.4729,.1626,-.0552,4.3342,.126,.0234,4.4407,.1693,.0238,4.5553,.1815,-.0679,4.555,.1591,.0224,4.3346,.1422,.0238,4.4732,.1832,.0064,4.6277,-.3406,.0095,4.6974,-.2474,-.1233,4.4705,-.3593
                    ,-.192,4.471,-.2461,-.1063,4.2779,-.3366,-.1281,4.4422,-.3516,-.116,4.5468,-.3459,.0229,4.1969,.1576,-.0121,4.065,-.3028,-.0072,4.1074,-.3476,-.2046,4.1056,-.0173,-.1888,4.1517,-.0475,.0298,4.0585,.2257,-.2266,4.0711,.0188,-.2046,4.1056,-.0173,-.0196,4.0621,-.181,-.0121,4.065,-.3028,.0059,4.2778,-.3534,.0061,4.2906,-.3472,.0061,4.2906,-.3472
                    ,.0038,4.2896,-.4164,-.0263,4.3744,-.3917,.0038,4.2896,-.4164,.0043,4.3744,-.4009,-.0445,4.2953,-.3453,.0043,4.3744,-.4009,.0047,4.4364,-.3904,-.0263,4.3744,-.3917,-.0302,4.4249,-.3766,-.0421,4.4421,-.3833,-.1281,4.4422,-.3516,.0047,4.4364,-.3904,.0044,4.4419,-.3982,-.8735,2.0363,.2761,-.8709,2.0022,.3111,-.986,2.0453,.3243,-.8735,2.0363,.2761
                    ,-1.0519,2.0081,.3977,-.9456,2.0924,.163,-1.0873,2.1717,.4492,-1.0519,2.0081,.3977,.0059,4.2778,-.3534,-.0445,4.2953,-.3453,-.1063,4.2779,-.3366,-.1063,4.2779,-.3366,-.1739,4.2781,-.2598,-.1739,4.2781,-.2598,-.1767,4.2817,-.0737,.0404,4.4249,-.3789,-.0302,4.4249,-.3766
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(3258);
                CONTIG(_i, 0, 0, 30);
                _i.set([26,31,32,33,34,35,10,36,37,38,39,37,40,41,42,43,44,32], 31);
                CONTIG(_i, 49, 45, 57);
                _i.set([42], 62);
                CONTIG(_i, 63, 58, 68);
                _i.set([53,69,70,71,72,73,74,73,75,70,73,76,77,54,64,66,78,79,80,81,82,12,83,84,85,86,87,21,84], 74);
                CONTIG(_i, 103, 88, 98);
                _i.set([18,99,100,101,102,94,103,104,105,106,107,108,109,110,111,105,112,113,108], 114);
                CONTIG(_i, 133, 114, 135);
                _i.set([128,136,137,138,139,140,141,138,142,143,144,145,117,133], 155);
                CONTIG(_i, 169, 146, 175);
                _i.set([64,68,176,177,178,179,180,181,182,183,149,184,185,186,187,188,152,189,129,135,132,190,146,191,155,192,193,194,132,195,196,110,197,126,198,199,135,200,201,114,107,202,203,107,204,205,206,207,208,209
                ,76,210,66,211,212,175,213,214,175,66,172,76,56,215,216,217,218,72,219,45,220,221,62,222,223,224,35,50,225,226,227,228,15,229,230,99,231,232,38,233,234,235,236,237,238,0,239,240,241,242
                ,243,244,245,182,246,247,179,248,171,249,250,168,251,252,179,163,253,182,148,254,231,255,256,37,257,258,35,36,259,36,9,260,222,45,226,261,56,46,222,61,33,61,58,51,56,42,51,44,48,233
                ,262,229,98,22,96,20,263,3,8,264,27,265,41,266,267,25,268,269,35,270,271,16,272,233,3,273,7,98,264,248,148,169,274,166,275,276,237,277,278,279,280,281,282,283,163,284,166,285,160,286
                ,287,156,158,151,288,139,148,289,169,144,147,290,291,128,137,116,133,144,137,130,142,125,292,293,108,294,295,109,120,296,297,108,295,94,112,104,18,298,299,98,28,264,95,104,300,84,91,207,21,301
                ,302,303,207,304,204,82,305,7,21,23,229,20,233,12,306,81,307,5,308,309,296,310,311,293,312,313,198,314,315,316,195,317,125,318,319,293,122,320,119,321,315,109,322,147,139,290,142,154,287,323
                ,192,129,146,324,187,143,287,157,130,192,154,147,187,151,290,141,145,294,325,295,326,327,101,108,297,328,329,330,331,332,333,334,331,335,336,334], 199);
                CONTIG(_i, 535, 337, 391);
                _i.set([355,358,392,393,355,394,395,396,397,398,361,389,392,399,400,384,401,372,402,403,387,360,404,332,405,406,407,329,352,394,408,409,410,411,367,363,368,356,395,351,340,412,348,343,413,347,343,414,415,405
                ,416,417,414,418,419,420,415,421,334,422,423,332,423,416,424,416,242,416,237,242,423,425,237,421,2,1,415,239,2,414,279,239,347,426,427,428,429,430,431,432,433,434,432,435,432,436,433,434,437,438
                ,439,436,440,441,438,442,441,443,434,442,444,445,377,446,439,173,447,448,449,450,177,451,177,450,452,453,172,65,450,454,455,173,448,210,456,457,218,457,458,54,210,457,218,459,76,460,461,462,459,463
                ,210,459,464,460,457,464,458,461,465,462,456,461,464,463,466,456,460,465,463,64,178,451,467,178,212,77,468,75,77,172,174,469,470,471,469,472,473,474,475,476,475,477,478,479,480,481,482,483,484,472
                ,483,480,485,472,469,486,475,487,486,480,488,473,472,486,473,487,470], 590);
                CONTIG(_i, 807, 489, 520);
                _i.set([513,521,522,523,499,524,500,525,526,527,528,525,529,530,531,532,522], 839);
                CONTIG(_i, 856, 533, 545);
                _i.set([531,546,547,548,548,549,550,551,552,553,554,555,542,556,557,558,559,560,561,562,559,556,559,563,564,541,552,554,565,566,503,501,567,568,569,570,571,572,496,512,569], 869);
                CONTIG(_i, 910, 573, 583);
                _i.set([509,584,585,586,587,578], 921);
                CONTIG(_i, 927, 588, 598);
                _i.set([589,599,600,592], 938);
                CONTIG(_i, 942, 601, 619);
                _i.set([615,620,621,622,623,624,625,626,627,628,622,629,630,601,631,632,617], 961);
                CONTIG(_i, 978, 633, 659);
                _i.set([554,660,661,662,663,664,650,665,666,635,667,668,669,670,671,637,672,673,614,674,615,617,675,676,640,677,641,678,679,680,596,681,682,611,683,612,615,684,685,600,686,592,687,688,689,503,690,565,577,691
                ,692,553,693,563,660,694,661,695,696,697,658,553,563,545,698,699,564,700,560,533,701,702,549,703,550,704,705,524,539,706,707,708,709,505,584,710,585,527], 1005);
                CONTIG(_i, 1093, 711, 720);
                _i.set([489,721,722,723,724,725,726,727,728,729,656,730,731,653,732,733,734,650,735,736,635,724,737,738,739,525,740,741,742,524,743,744,500,745,550,746,533,747,748,749,750,550,533,521,548,750,538,545,747,532
                ,538,535,585,751,713,581,752,510,492,753,507,518,754,495,755,529,525,756,514,757,524,758,759,504,760,761,492,713,762,517,510,754,655,763,730,652,734,764,765,766,721,767,768,719,769,770,771,772,648,652
                ,645,773,774,644,775,639,776,638,625,777,633,655,630,778,631,779,613,619,602,631,616,622,780,613,781,610,609,782,783,599,605,594,606,784,785,599,598,578,589,786,787,509,788,581,517,589,580,590,576,569
                ,577,789,512,790,577,571,791,503,792,501,754,512,496,713,509,585,793,794,501,795,796,492,606,797,798,799,610,800,612,801,802,596,803,804,610,805,806,807,609,799,604,808,809,594,804,810,625,778,811,628
                ,639,780,641,812,614,632,813,675,814,644,628,780,641,614,778,637,632,626,811,629,815,816,817,818,819,820,599,591,821,822,823,824,825,826,827,828,829,823,830,831,826], 1103);
                CONTIG(_i, 1344, 832, 853);
                _i.set([852], 1366);
                CONTIG(_i, 1367, 854, 864);
                _i.set([863], 1378);
                CONTIG(_i, 1379, 865, 877);
                _i.set([854,878,879,880,849,848,881,882,852,883,848,846,884,885,886,852,887,854,888,889,890,891,892,893,894,854,879,825,895,896,897,824,898,899,883,846,900,901,902,856,859,903,904,846,848,832,843,905,835,906
                ,907,908,835,909,910,911,912,908,913,906,909,837,914,915,830,916,916,825,910,917,910,918,717,910,766,919,916,717,720,914,490,768,909,720,920,908,768,906,840,921,922,923,924,925,926,927,926,928,929,926
                ,930,931,928,932,933,934,935,931,936,937,938,939,937,928,938,940,941,942,866,935,943,657,944,945,946,662,947,662,664,948,949,658,551,945,947,950,657,659,951,952,953,564,953,541,541,952,553,693,564,563
                ,954,955,956,957,693,952,693,956,958,956,953,958,955,959,960,955,951,956,960,957,951,959,954,957,552,664,660,664,961,660,962,963,562,963,658,563,964,470,965,964,965,966,967,968,969,970,968,971,972,973
                ,974,975,976,973,976,966,973,977,964,966,968,974,978,978,973,966,965,978,966,487,965,470,363,442,438,979,442,980,938,856,936,938,981,982,0,983,1,3,263,4,6,86,7,9,36,10,12,204,984,15
                ,228,16,18,299,19,21,302,22,24,985,25,27,264,28,30,24,26,32,46,33,35,986,10,37,231,38,37,987,988,42,57,43,32,989,45,990,51,48,50,226,51,53,68,54,56,991,57,58,61,992
                ,61,222,62,64,451,65,993,175,68,994,73,70,72,218,73,73,77,75,73,218,76,54,68,64,78,204,995,81,996,82,997,998,84,86,999,1000,84,1001,88,1002,207,91,93,101,94,96,1003,1004,18,229
                ,99,101,1005,102,1006,1007,104,1008,1009,107,109,195,110,105,104,112,108,107,114,116,144,117,119,296,120,122,293,1010,125,198,126,128,135,129,1011,1012,132,1013,1014,135,1015,1016,137,139,1017,140,138,137,142,144
                ,290,145,133,132,146,148,182,149,151,187,152,154,192,155,157,287,158,160,1018,161,163,179,1019,166,284,167,169,1020,1021,172,453,173,175,212,64,176,1022,177,179,1023,1024,182,1025,1026,1027,1028,185,187,1029,1030
                ,1031,1032,129,132,1033,1034,1035,1036,155,1037,1038,1039,195,1040,1041,1042,1043,126,1044,1045,135,1046,1047,114,1048,1049,1050,204,78,1051,207,1052,1053,76,459,210,1054,1055,212,1056,1057,1058,66,1059,172,56,1060,1061,1062,54
                ,218,1063,1064,45,1065,1066,62,1067,1068,1069,50,1070,1071,1072,1073,228,229,1074,1075,231,1076,1077,233,1078,1079,1080,1081,237,0,2,239,1082,424,242,1083,1084,1085,1086,1087,1088,248,169,171,1089,166,168,1090,1091,179,1092
                ,1093,182,1094,1095,231,1096,231,37,1097,1098,35,1099,1100,36,1101,1102,222,226,1103,1104,46,45,222,33,46,61,51,226,56,51,42,44,233,1105,1106,98,23,22,20,19,263,8,7,264,1107,37,41,1108,1109,25
                ,1110,1111,35,1112,17,16,233,20,3,7,23,98,248,1113,148,1114,163,166,1115,242,237,1116,239,279,1117,1118,1119,163,165,284,1120,1121,160,287,154,156,151,153,1122,148,150,1123,144,133,147,1124,1125,128,116,1126
                ,133,137,128,130,125,127,1127,108,115,294,109,111,120,94,102,112,18,100,1128,98,1129,28,95,94,104,84,89,91,21,1130,301,1131,84,207,204,12,82,7,86,21,229,18,20,12,14,1132,1133,3,5,1134
                ,109,296,1135,125,293,1136,1137,198,315,1138,1139,1140,198,125,319,1141,293,1142,296,119,315,195,109,147,151,139,142,130,154,1143,1144,192,146,1145,1146,143,142,287,130,129,192,147,146,187,290,139,141,294,1147,325
                ,1148,1149,1150,329,1151,330,332,1152,333,331,330,335,334,333,337,1153,1154,340,1155,1156,343,418,347,346,1157,345,347,348,1158,349,351,395,352,1159,1160,355,1161,361,358,360,387,361,363,438,1162,1163,1164,367,1165,373
                ,370,372,1166,373,377,410,1167,1168,1169,377,1170,1171,1172,1173,1174,1175,384,1176,1177,387,1178,388,1179,1180,391,358,361,392,355,391,394,1181,1182,398,1183,1184,398,1185,1186,1187,398,1188,1189,361,387,389,399,1190,1191,1192
                ,1193,372,403,1194,387,1195,1196,332,406,1197,1198,352,395,394,1199,1200,410,365,368,363,367,1201,1202,1202,363,367,356,355,395,340,1203,1204,343,347,414,405,332,416,414,347,418,1205,343,415,334,338,1206,332,334,423
                ,424,417,416,416,423,237,423,1207,1208,421,415,2,415,414,239,414,419,279,1209,1210,429,1211,1212,432,434,1213,432,432,440,436,434,1214,1215,439,446,436,441,434,438,441,1216,1217,442,1202,1218,377,376,446,173,453
                ,447,1219,1220,450,451,178,177,1221,447,453,65,451,450,1222,174,173,210,463,456,218,54,457,54,66,210,218,458,459,460,464,461,459,460,463,459,458,464,457,456,464,461,466,465,456,466,461,463,465,466,460
                ,462,465,64,212,178,1223,176,178,77,174,1224,77,76,172,469,473,470,1225,969,475,475,488,1226,1227,488,480,1228,480,483,472,485,483,969,487,475,486,488,475,486,472,480,473,486,487,489,720,490,492,1229,1230
                ,495,754,496,498,1231,499,501,1232,1233,504,708,505,507,1234,1235,510,1236,1237,513,520,514,516,1238,517,519,1239,520,521,750,522,499,1240,524,525,1241,526,1242,1243,525,530,544,531,522,750,533,535,538,1244,538,747
                ,539,541,554,542,544,1245,545,546,1246,1247,548,1248,549,551,947,552,554,661,1249,556,559,1250,559,564,560,562,963,559,559,963,563,541,553,552,565,1251,1252,501,1253,1254,569,574,1255,572,1256,496,569,1257,1258,1259
                ,1260,576,578,1261,1262,581,1263,1264,509,1265,584,586,1266,1267,1268,597,589,591,599,592,594,1269,595,597,1270,598,599,783,600,601,630,602,604,1271,605,607,1272,1273,610,1274,611,613,780,614,616,631,617,619,613,615
                ,621,627,622,624,1275,625,627,1276,628,629,811,630,631,778,632,633,1277,634,636,1278,637,639,1279,640,642,1280,643,645,1281,646,648,1282,1283,651,772,652,654,1284,655,657,948,658,554,552,660,662,1285,663,650,1286
                ,1287,635,634,1288,669,1289,1290,637,1291,672,614,1292,1293,617,632,675,640,1294,1295,1296,617,1297,596,595,1298,611,1299,1300,615,1301,1302,600,1303,1304,1305,592,1306,503,1307,1308,577,1309,1310,553,952,693,660,1311,1312,1313
                ,661,1314,658,1315,553,545,1316,1317,564,541,1318,533,1319,1320,549,1321,1322,1323,1324,1325,539,747,1326,708,1327,1328,584,1329,1330,527,526,1331,713,1332,1333,1334,1335,717,719,768,720,721,766,1336,724,635,1337,1338,650,1339
                ,656,655,730,653,652,1340,734,648,650,1341,633,635,1342,527,1343,525,527,1344,1345,500,524,1346,498,500,550,1347,1348,747,545,1349,750,548,550,521,546,548,538,531,545,532,531,538,585,1350,1351,581,1352,1353,492,1354
                ,1355,518,517,754,1356,1357,529,1358,1359,514,524,1360,1361,504,506,1362,492,507,713,517,581,510,655,633,1363,652,648,734,1364,717,766,1365,1366,768,1367,671,1368,772,1369,648,645,647,1370,644,643,1371,1372,636,638,1373
                ,1374,633,630,811,778,1375,622,613,602,630,631,622,628,780,1376,1377,610,1378,1379,783,605,1380,594,598,586,578,1381,1382,1383,1384,1385,581,589,578,580,576,1386,569,1387,572,512,577,569,571,503,1388,1389,754,510,512
                ,713,507,509,1390,1391,1392,1393,1394,1395,606,594,1396,799,609,610,612,1397,801,596,1398,803,610,612,1399,1400,607,609,604,606,1401,594,596,804,625,638,778,628,644,639,641,1402,1403,632,637,1404,1405,642,644,780,639
                ,641,778,638,637,626,625,811,1406,1407,1408,1409,1410,1411,822,828,823,825,830,826,828,1412,829,830,1413,831,832,1414,1415,835,1416,1417,840,906,1418,1419,1420,839,841,1421,1422,1423,1424,1425,1426,904,848,1427,1428,1429,1430
                ,1431,852,1432,936,856,1433,903,859,1434,1435,1436,1437,1438,863,1439,900,866,866], 1392);
                CONTIG(_i, 3010, 1440, 1450);
                _i.set([854,887,1451,880,1452,849,1453,1454,882,883,880,848], 3021);
                CONTIG(_i, 3033, 1455, 1466);
                _i.set([852,882,887,1467,1468,1469,1470,865,1471,1472,1473,854,825,827,1474,1475,822,824,1476,1477,883,900,1478,1479,859,856,941,1480,856,903,941,1481,859,904,1482,846,832,841,843,908,906,835,910,825,1483,908,1484,1485,909,835
                ,837,1486,1487,830,916,830,825,1488,766,910,717,916,910,1489,1490,916,720,909,914,768,908,909,1491,1492,908,1493,1494,923,1495,1496,926,926,1497,928,926,1498,1499,928,936,1500,1501,1502,935,936,928,937,1503,1504,937,938
                ,1505,1506,1507,1508,866,943,948,657,945,1509,1510,947,945,662,948,943,1511,551,1512,945,1513,944,657,951,957,952,564,958,953,541,953,952,693,958,564,954,1514,955,957,954,693,693,954,956,956,951,953,955,1514,959
                ,955,960,951,960,959,957,959,1514,954,552,947,664,664,663,1515,1516,659,963,963,659,658,964,471,470,1517,1518,968,1519,974,968,1520,1521,973,1522,1523,976,976,977,966,978,487,968,969,968,487,978,974,973,487,978
                ,965,363,1202,442,1524,441,442,938,941,856,938,937,1525], 3045);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .3169,.5115,-.7987,.8741,.353,-.3335,.6054,-.0143,-.7957,.4459,-.1491,.8825,.3424,.2312,.9106,.4741,.2942,.8298,.3768,-.8439,-.3819,.4921,-.2481,-.8344,.8372,-.2456,-.4886,.8348,.3956,-.3829,.3052,.3601,-.8816,.8672,.4486,-.2163,-.0382,.5906,-.8061,.3169,.5115,-.7987,.1296,.1795,-.9752,.8313,.4136,.3712,.291,-.6921,.6605
                    ,.7616,-.4119,.5003,.4057,-.0393,.9131,.3122,-.2077,.927,.5033,-.1434,.8521,-.1187,-.015,-.9928,-.2408,-.1132,-.964,-.0354,-.1357,-.9901,.3304,.4388,-.8356,-.1575,-.4494,-.8793,.3995,.2828,-.872,.8809,-.0492,-.4707,.6232,.1564,-.7662,.9073,.1802,-.38,.7199,.611,-.3292,.7909,.4537,-.4105,-.2575,-.1493,.9547,-.9551,-.0977,.2798
                    ,-.9074,-.2494,.3381,-.5386,-.2662,-.7993,.3332,.2546,-.9078,-.2019,-.2348,.9508,.6893,.1499,.7088,-.2575,-.1493,.9547,-.9074,-.2494,.3381,-.8586,-.4806,.178,.3144,.2164,-.9243,.9284,-.0599,-.3667,.9411,.0193,-.3375,.8039,.0855,.5885,-.2758,-.2412,.9304,.3052,.3601,-.8816,.8705,.417,-.2614,.8672,.4486,-.2163,-.8183,.0753,-.5698
                    ,.2279,.534,-.8142,.3052,.3601,-.8816,-.4858,-.3113,.8167,-.8467,.1018,.5223,-.9218,.276,.2721,-.7912,.089,-.6051,.3814,.3554,-.8534,-.946,-.2523,.2036,-.4858,-.3113,.8167,-.9218,.276,.2721,-.2383,-.5608,.7929,.865,-.0917,.4933,-.4858,-.3113,.8167,-.4915,-.1357,.8602,-.498,.8072,.3168,-.8709,-.2644,.4141,.865,-.0917,.4933
                    ,-.237,-.2443,.9403,.3814,.3554,-.8534,.9276,.0308,-.3723,.9284,-.0599,-.3667,-.6072,.5323,-.5898,.2808,.4028,-.8712,.3814,.3554,-.8534,.916,-.1772,-.3598,-.5556,-.0252,-.831,.5392,-.0195,-.8419,.4978,.8389,-.22,.3304,.4388,-.8356,.7199,.611,-.3292,-.2673,.5418,-.7969,-.1501,.4161,-.8968,.3424,.2312,.9106,.4541,.5423,.7069
                    ,.4741,.2942,.8298,.2126,-.2633,-.941,-.1501,.4161,-.8968,.2163,.6091,.763,.4648,.5379,.7033,.4978,.8389,-.22,.5945,.7303,.3365,.6892,.6645,-.2888,-.1549,-.0965,-.9832,.0093,.027,-.9996,.163,-.0876,-.9827,-.1791,-.0804,-.9805,.163,-.0876,-.9827,.1506,-.1351,-.9793,.8383,.149,.5244,.3773,.0775,.9228,-.2069,-.3998,-.8929
                    ,-.1744,.2332,-.9566,.9073,.1802,-.38,.5083,.3613,-.7817,.872,.4254,-.2422,.3773,.0775,.9228,.8188,.2381,.5223,.4489,.0331,.8929,-.1389,.2779,-.9505,-.7185,-.0413,-.6942,-.1162,.2562,-.9596,.3626,.4577,-.8118,.8607,.4368,-.2614,.8906,.1251,.4372,.5425,-.1683,.823,-.3613,-.5048,.7839,-.9652,-.2611,.011,-.9443,-.3272,.0351
                    ,.8797,.3206,-.3511,.3523,.3243,-.8779,.8441,.3543,-.4024,-.8961,-.4373,.076,-.3613,-.5048,.7839,-.9443,-.3272,.0351,.5261,-.3288,.7843,.9083,.0267,.4175,.5078,-.2834,.8135,-.0334,.161,-.9864,-.539,-.199,-.8184,.016,-.0251,-.9995,.5078,-.2834,.8135,.8492,.1532,.5053,.4373,.0187,.8991,-.1162,.2562,-.9596,-.6782,-.0699,-.7316
                    ,.8441,.3543,-.4024,.3987,.25,-.8823,.8485,.3573,-.3903,-.565,-.276,.7775,-.9933,-.0409,-.1081,-.9199,-.3898,-.0431,.3861,.0991,-.9171,.8742,.2418,-.4209,-.517,-.185,.8357,-.9409,-.2971,-.1622,.8865,.2697,.3759,.3514,.1197,.9285,.0652,.3038,.9505,.6011,-.5754,.5546,.0698,-.5567,.8278,.4127,.0309,.9103,.8053,.2847,.52
                    ,.2069,.2646,.9419,.0735,-.0255,-.9969,-.8467,.1685,-.5046,-.0393,.6568,-.753,.9309,.191,-.3112,.6726,.4412,-.5941,.9778,.1915,-.0851,.003,-1,-.0003,-.7521,-.405,-.5199,-.7572,-.6518,.0425,-.0287,.7392,-.6728,-.7521,-.405,-.5199,-.0179,-.3948,-.9186,.6378,.7118,-.2941,.7288,-.678,.0956,.975,.2127,.0639,-.7201,.2369,.6521
                    ,-.7572,-.6518,.0425,-.9879,.1508,.0357,-.6067,.1872,-.7725,-.6382,-.6625,-.3921,.24,-.5984,-.7644,.8221,.1294,.5544,.49,-.8115,-.3184,-.4188,-.7485,.5141,.495,-.6855,.5338,-.6836,.6467,-.3382,-.7572,-.6518,.0425,-.7521,-.405,-.5199,.7157,.2797,.6399,.7288,-.678,.0956,.003,-1,-.0003,-.5676,-.5456,.6165,.0698,-.5567,.8278
                    ,.8777,.2033,.434,.9778,.1915,-.0851,-.9652,-.2611,.011,.8742,.2418,-.4209,-.9199,-.3898,-.0431,-.5816,-.2753,-.7654,.9083,.0267,.4175,.8485,.3573,-.3903,-.7438,-.0586,-.6658,-.9443,-.3272,.0351,.8797,.3206,-.3511,.9166,-.0149,.3996,-.9443,-.3272,.0351,-.7185,-.0413,-.6942,.872,.4254,-.2422,.8383,.149,.5244,.872,.4254,-.2422
                    ,.1532,.7885,-.5956,.6892,.6645,-.2888,.3169,.5115,-.7987,.5264,.7779,.343,.7199,.611,-.3292,.8313,.4136,.3712,.1695,-.8112,.5597,.9276,.0308,-.3723,.7345,-.1863,.6525,.865,-.0917,.4933,.9276,.0308,-.3723,-.9218,.276,.2721,-.6072,.5323,-.5898,-.9218,.276,.2721,-.7412,.5618,-.3675,.8672,.4486,-.2163,.6893,.1499,.7088
                    ,.9411,.0193,-.3375,.8361,-.3265,.4407,-.8586,-.4806,.178,-.8183,.0753,-.5698,-.9551,-.0977,.2798,-.8136,.2671,-.5164,.7199,.611,-.3292,.8052,.2783,.5235,.9103,-.065,.4087,.9073,.1802,-.38,.7915,.3171,.5224,.8672,.4486,-.2163,.9209,-.2836,.2673,.3768,-.8439,-.3819,.8372,-.2456,-.4886,.6892,.6645,-.2888,.6873,.6555,.3127
                    ,.8741,.353,-.3335,.2943,-.6271,-.7212,.1296,.1795,-.9752,.2163,.6091,.763,.4296,.573,.6979,.4648,.5379,.7033,.8053,.2847,.52,.975,.2127,.0639,-.8467,.1685,-.5046,-.9879,.1508,.0357,-.7017,.0982,.7056,-.9933,-.0409,-.1081,.6726,.4412,-.5941,.9778,.1915,-.0851,-.0393,.6568,-.753,.2069,.2646,.9419,.7909,.4537,-.4105
                    ,.8052,.2783,.5235,.8052,.2783,.5235,.291,-.6921,.6605,.3995,.2828,-.872,.7909,.4537,-.4105,.8705,.417,-.2614,-.946,-.2523,.2036,.8809,-.0492,-.4707,.3648,-.1101,.9245,.6696,-.1218,-.7326,.291,-.6921,.6605,-.7672,-.6355,.0862,.3768,-.8439,-.3819,.2126,-.2633,-.941,-.7672,-.6355,.0862,-.1575,-.4494,-.8793,.3768,-.8439,-.3819
                    ,-.7672,-.6355,.0862,.7616,-.4119,.5003,-.0393,.6568,-.753,.6726,.4412,-.5941,.4648,.5379,.7033,.5945,.7303,.3365,.1296,.1795,-.9752,-.0684,-.7819,-.6196,-.2011,.1779,-.9633,.6011,-.5754,.5546,.003,-1,-.0003,.0698,-.5567,.8278,.7995,-.3569,-.4831,.7995,-.3569,-.4831,.7288,-.678,.0956,.4986,.0882,-.8623,-.7017,.0982,.7056
                    ,-.5676,-.5456,.6165,-.6983,-.2278,.6786,.3523,.3243,-.8779,-.3613,-.5048,.7839,-.3326,-.6176,.7126,-.2165,-.5098,.8326,.2652,-.2184,.9391,.3352,.3722,-.8655,.1977,.095,.9756,.1977,.095,.9756,.2006,-.0996,.9746,.6232,.1564,-.7662,-.325,.4016,-.8562,-.337,.0162,-.9413,.4741,.2942,.8298,.8313,.4136,.3712,.3304,.4388,-.8356
                    ,-.2011,.1779,-.9633,.7616,-.4119,.5003,.8313,.4136,.3712,-.1744,.2332,-.9566,.3626,.4577,-.8118,.5425,-.1683,.823,-.2165,-.5098,.8326,.8607,.4368,-.2614,.8906,.1251,.4372,-.669,-.2235,-.7088,-.8961,-.4373,.076,.8906,.1251,.4372,.5425,-.1683,.823,-.8618,-.4976,.0983,.3626,.4577,-.8118,.8607,.4368,-.2614,-.1744,.2332,-.9566
                    ,-.9409,-.2971,-.1622,.9309,.191,-.3112,.0073,-.9937,-.112,.0073,-.9937,-.112,-.669,-.2235,-.7088,.3773,.0775,.9228,.5033,-.1692,.8473,.8632,.2662,.429,.876,-.1235,.4662,.5496,.2406,.8,.9037,-.1386,.4052,.9064,.245,.3441,.9694,.2451,-.0144,.9982,.0576,.0152,.9938,-.1081,.0252,.9589,-.0168,-.2832,.9694,.2451,-.0144
                    ,.9028,.1672,-.3962,.9982,.0576,.0152,.9938,-.1081,.0252,.8311,-.4199,-.3645,.9589,-.0168,-.2832,.187,.1746,-.9667,-.0263,.3828,-.9235,.4988,-.5492,-.6705,.5329,.0515,-.8446,-.0316,.3202,-.9468,-.033,.1386,-.9898,.5033,.3199,-.8027,-.0264,.6073,-.794,-.0316,.3202,-.9468,.9694,.2451,-.0144,.7515,.5961,-.2826,.8717,.2782,-.4033
                    ,.8632,.2662,.429,.8117,.5841,-.0058,.9694,.2451,-.0144,.5208,.2257,.8233,.6937,.6316,.3462,.8632,.2662,.429,.4139,.0375,-.9095,.187,.1746,-.9667,.4829,.2077,-.8507,.9938,-.1081,.0252,.9217,.0107,-.3878,.9226,-.0763,-.378,.9037,-.1386,.4052,.9905,-.1269,.0529,.9938,-.1081,.0252,.5667,-.0803,.82,.8643,-.3182,.3894
                    ,.9037,-.1386,.4052,-.033,.1386,-.9898,-.0303,-.4215,-.9063,.2765,-.3959,-.8757,.9982,.0576,.0152,.9217,.0107,-.3878,.9905,-.1269,.0529,.8643,-.3182,.3894,.9982,.0576,.0152,.9905,-.1269,.0529,.51,-.3265,.7958,.876,-.1235,.4662,.8643,-.3182,.3894,.4276,.6139,.6635,.011,.9451,.3266,.2397,.9392,.2459,.8117,.5841,-.0058
                    ,.3756,.921,-.1026,.3219,.9434,.079,.349,.937,.0149,.2362,.9148,-.3276,.4607,.6279,-.6272,.3219,.9434,.079,.011,.9451,.3266,-.0115,.9378,-.3469,.0315,-.3265,.9446,.5033,-.1692,.8473,.0315,-.3265,.9446,.0333,-.0612,.9976,.0326,.2095,.9772,.0333,-.0612,.9976,.0391,.2622,.9642,.0328,-.1781,.9834,.5208,.2257,.8233
                    ,-.0115,.9378,-.3469,.9028,.1672,-.3962,.5315,-.396,-.7487,.9217,.0107,-.3878,.5033,.3199,-.8027,.9226,-.0763,-.378,.2617,-.9246,-.2767,.6304,-.5185,-.5777,.4542,.4611,.7623,.053,.45,.8914,-.0454,-.4273,-.903,-.0475,-.8886,-.4562,.9589,-.0168,-.2832,.9325,.1274,-.3378,.9325,.1274,-.3378,.8151,.4975,.2968,.0992,.611,.7854
                    ,.8741,.353,-.3335,.9226,-.0763,-.378,.4829,.2077,-.8507,-.0263,.3828,-.9235,.5275,-.7518,-.3956,-.0289,-.5008,-.865,-.0289,-.5008,-.865,.5766,-.6262,-.5247,-.0282,-.5362,-.8436,.9844,-.0108,-.1752,.5275,-.7518,-.3956,-.0329,.1622,-.9862,.187,.1746,-.9667,.7049,.0419,-.708,.6371,-.3271,-.6979,.7373,.0578,-.673,.9841,-.0931,-.151
                    ,.5593,-.3669,-.7433,.7373,.0578,-.673,.5315,-.396,-.7487,.2765,-.3959,-.8757,-.0297,-.4563,-.8893,-.8002,.5158,.3061,-.6127,-.7837,-.1017,-.6127,-.7837,-.1017,-.6871,.3677,.6266,-.3074,.2491,.9184,-.498,.8072,.3168,-.7725,.5838,-.2496,-.8002,.5158,.3061,.49,-.8115,-.3184,-.527,-.2363,.8163,-.7183,-.0938,.6894,-.8984,.2543,-.3579
                    ,-.4213,-.3739,-.8262,.1448,-.1932,-.9704,-.8361,-.4222,-.3501,.0764,-.701,-.709,.8497,-.3961,.348,-.9486,.068,-.3091,.585,-.785,.2035,-.3981,-.6943,.5995,.916,-.1772,-.3598,.49,-.8115,-.3184,.2824,-.0052,-.9593,-.033,.1405,-.9895,-.0334,.0175,-.9993,.7893,.0332,-.6131,.3362,.1126,-.935,-.0263,.3828,-.9235,.0306,.3386,-.9404
                    ,.187,.1746,-.9667,.4829,.2077,-.8507,.187,.1746,-.9667,.4829,.2077,-.8507,.8653,.095,-.4922,.9226,-.0763,-.378,.9226,-.0763,-.378,.9305,.3213,-.1755,.9938,-.1081,.0252,.8067,.0642,-.5874,.3235,-.0599,-.9443,-.0335,-.0277,-.999,.4172,.1809,-.8906,-.6339,.5085,-.5827,-.8403,.5337,-.0953,-.6272,.7773,.048,.2614,-.1581,.9522
                    ,.3424,.2312,.9106,.3648,-.1101,.9245,-.9575,-.2245,.1809,-.7991,-.2582,-.5428,-.5372,-.8434,.0053,-.9052,.3659,.216,-.8434,.2952,-.4489,-.865,.1416,-.4813,-.4079,.5754,-.7089,-.6339,.5085,-.5827,-.5191,.7718,-.3673,.2518,-.5917,.7658,-.3955,.4955,.7733,-.1758,-.3728,.9111,.1286,-.2378,.9627,.2006,-.0996,.9746,.0535,-.1567,.9862
                    ,-.5266,-.1193,-.8416,-.337,.0162,-.9413,-.5591,.0132,-.829,-.8181,.4029,-.4102,-.4483,-.5463,-.7074,-.7991,-.2582,-.5428,-.9782,.1978,.0625,-.9188,-.0587,-.3904,-.992,-.0345,.121,-.786,.591,.1812,-.891,.1818,-.4159,.8929,-.0928,-.4405,.8451,-.0786,.5287,.9066,-.2445,-.3439,-.1149,-.4062,-.9065,.7934,-.1148,.5977,-.028,.2311,.9725
                    ,-.2595,.4043,.877,.9066,-.2445,-.3439,.7839,-.4948,-.375,-.9131,-.0599,.4032,-.869,.1675,-.4655,-.9159,.0162,.401,-.1874,.1335,.9731,-.028,.2311,.9725,-.8242,.4189,.381,-.8434,.2952,-.4489,-.7934,.4523,.4073,-.7351,.4919,-.4665,.2057,-.0016,-.9786,-.8434,.2952,-.4489,.9609,.0566,-.2709,.9131,-.2892,.2873,.8638,.1991,-.4628
                    ,-.8708,.3821,-.3094,.1494,.0207,-.9886,.8436,-.2577,-.4711,.9131,-.2892,.2873,.7279,-.5112,.4569,-.285,-.1187,.9511,-.302,-.2834,.9102,.5765,.7696,-.2743,.9669,-.2474,.0627,.8524,-.3433,-.3943,.8515,-.1659,.4974,-.285,-.1187,.9511,-.891,-.0166,.4537,-.8708,.3821,-.3094,-.9131,-.0599,.4032,-.8351,.4346,-.337,.0103,.4847,-.8746
                    ,-.8708,.3821,-.3094,-.871,-.1588,.4649,-.2221,.0377,-.9743,.237,.5971,-.7663,-.5064,.8535,.1225,-.8181,.4029,-.4102,-.325,.4016,-.8562,-.2673,.5418,-.7969,.0786,.5737,.8153,.3424,.2312,.9106,.193,.3396,.9205,-.4747,.4123,-.7776,.2163,.6091,.763,.2991,.4183,.8576,-.5064,.8535,.1225,-.275,.8157,.5089,-.1744,.8164,.5505
                    ,-.4355,-.089,-.8957,-.1549,-.0965,-.9832,-.4722,-.0942,-.8764,-.5537,-.044,-.8315,-.1549,-.0965,-.9832,-.1791,-.0804,-.9805,-.597,.1696,.7841,-.6341,-.1825,.7513,-.4014,-.0498,-.9145,-.2069,-.3998,-.8929,-.9782,.1978,.0625,-.8223,.1873,-.5372,-.8825,.1437,-.4478,-.0028,.1415,.9899,-.5202,.407,.7508,-.597,.1696,.7841,-.3971,-.0827,-.914
                    ,.2681,-.3411,-.901,.3064,-.3689,-.8775,-.9131,.396,.0969,-.7691,.2101,-.6036,.0219,.22,.9752,-.5549,.3423,.7582,.8604,-.33,-.3883,.7531,-.2462,.61,.8566,-.3888,-.3391,-.9609,.2706,.0573,-.7757,.0466,-.6294,-.7624,.0906,-.6407,.8475,-.4718,-.2432,.7531,-.2462,.61,.7091,-.3762,.5964,-.0208,.0024,.9998,-.5699,.2545,.7812
                    ,-.5821,.2097,.7855,-.4815,-.1607,-.8616,.0764,-.4672,-.8808,.2253,-.3608,-.905,.0021,.0563,.9984,-.4863,.3789,.7873,-.5699,.2545,.7812,-.4092,-.0905,-.9079,.2681,-.3411,-.901,-.9593,.2818,-.0132,-.8086,-.0015,-.5883,-.7757,.0466,-.6294,.9066,-.3603,-.2196,.8827,-.1238,.4533,.7956,-.4817,-.3673,-.9544,.2986,.0042,-.7972,-.131,-.5893
                    ,.7552,-.4079,-.513,.8741,.0384,.4841,.0743,.3328,.9401,-.6004,.4347,.6712,.0985,.302,.9482,-.341,-.6035,.7207,-.4859,.3071,.8183,-.0658,.4399,.8956,-.5615,.3866,.7316,.0816,.316,.9452,-.5536,-.2972,-.7779,.598,-.1887,-.779,.1401,-.5307,-.8358,-.9713,.1873,.1465,-.8421,.3822,-.3804,-.865,-.1096,-.4895,.0513,-.9986,-.01
                    ,.4646,-.3598,-.8091,-.3706,-.4051,-.8357,-.3179,.7546,-.574,.4646,-.3598,-.8091,.418,.6885,-.5926,-.6165,-.6681,.4165,-.6974,.7128,.0744,-.8215,.3834,.422,.7296,-.6324,-.26,.8213,.2147,.5285,.9438,-.0837,-.3198,.3413,-.8076,-.4809,-.0988,-.0111,-.995,-.7566,-.5921,-.2774,-.015,-.3025,.953,-.1851,.0792,.9795,.7286,-.6063,.3186
                    ,-.5793,-.7713,.2636,.0515,-.6585,.7508,.7296,-.6324,-.26,.9438,-.0837,-.3198,-.6165,-.6681,.4165,-.8215,.3834,.422,.6811,-.5329,.5021,.0513,-.9986,-.01,.0919,-.5685,.8175,-.93,.3598,.0744,-.9713,.1873,.1465,.8604,-.33,-.3883,-.9822,.1866,.0211,-.9544,.2986,.0042,.7956,-.4817,-.3673,-.5699,.2545,.7812,-.9544,.2986,.0042
                    ,-.9593,.2818,-.0132,.8566,-.3888,-.3391,.8475,-.4718,-.2432,-.9609,.2706,.0573,.8566,-.3888,-.3391,.2681,-.3411,-.901,-.9131,.396,.0969,-.597,.1696,.7841,-.9131,.396,.0969,-.9782,.1978,.0625,-.6272,.7773,.048,-.786,.591,.1812,-.5064,.8535,.1225,-.2913,-.2769,-.9156,-.891,-.0166,.4537,-.285,-.1187,.9511,-.891,-.0166,.4537
                    ,-.9131,-.0599,.4032,.8638,.1991,-.4628,.8436,-.2577,-.4711,.8638,.1991,-.4628,-.7934,.4523,.4073,-.028,.2311,.9725,-.9159,.0162,.401,.2057,-.0016,-.9786,.7839,-.4948,-.375,.8929,-.0928,-.4405,.9066,-.2445,-.3439,-.2617,.3876,.8839,-.786,.591,.1812,-.992,-.0345,.121,-.7934,.4523,.4073,-.9052,.3659,.216,-.5373,-.3525,.7661
                    ,-.5372,-.8434,.0053,-.1758,-.3728,.9111,-.6272,.7773,.048,-.4813,.7846,.3907,-.275,.8157,.5089,-.4852,.2651,-.8332,-.7434,.0871,-.6631,-.0233,.6134,.7894,.0992,.611,.7854,.2163,.6091,.763,-.6172,.4785,.6245,-.8215,.3834,.422,-.93,.3598,.0744,.598,-.1887,-.779,.9438,-.0837,-.3198,.9066,-.3603,-.2196,.7525,.1408,.6434
                    ,.9066,-.3603,-.2196,-.8421,.3822,-.3804,-.93,.3598,.0744,-.3248,.5954,-.7349,.598,-.1887,-.779,-.0658,.4399,.8956,-.2617,.3876,.8839,-.9052,.3659,.216,-.8905,.4309,.146,-.2617,.3876,.8839,.2518,-.5917,.7658,-.891,.1818,-.4159,-.4483,-.5463,-.7074,-.8905,.4309,.146,-.891,.1818,-.4159,-.8242,.4189,.381,.2291,.2304,-.9457
                    ,.8436,-.2577,-.4711,.8929,-.0928,-.4405,.8433,-.195,.5007,-.9575,-.2245,.1809,-.2408,-.1132,-.964,.3122,-.2077,.927,-.8764,-.2288,-.4237,.2518,-.5917,.7658,-.5372,-.8434,.0053,.6823,-.6373,-.3581,.6823,-.6373,-.3581,-.4483,-.5463,-.7074,-.5372,-.8434,.0053,.6823,-.6373,-.3581,-.1758,-.3728,.9111,-.0658,.4399,.8956,-.8421,.3822,-.3804
                    ,-.275,.8157,.5089,-.1382,.7089,.6915,-.2011,.1779,-.9633,-.5271,-.5472,-.6501,-.341,-.6035,.7207,.0513,-.9986,-.01,-.6165,-.6681,.4165,-.9154,-.3969,-.0674,-.9154,-.3969,-.0674,-.6165,-.6681,.4165,-.3248,.5954,-.7349,.7525,.1408,.6434,.6811,-.5329,.5021,.1473,.3993,.9049,-.7757,.0466,-.6294,-.5079,-.306,-.8052,.7531,-.2462,.61
                    ,.2652,-.2184,.9391,.0022,.1202,.9927,.1977,.095,.9756,.2652,-.2184,.9391,.2006,-.0996,.9746,-.0028,.1415,.9899,-.8825,.1437,-.4478,-.325,.4016,-.8562,-.337,.0162,-.9413,-.3955,.4955,.7733,-.4747,.4123,-.7776,-.2673,.5418,-.7969,-.4852,.2651,-.8332,-.1758,-.3728,.9111,.193,.3396,.9205,-.4014,-.0498,-.9145,-.7691,.2101,-.6036
                    ,.6856,-.3535,.6364,.0022,.1202,.9927,-.9097,.4069,.083,-.5549,.3423,.7582,.8307,-.4987,-.2474,.2586,-.4193,-.8702,-.5549,.3423,.7582,.0022,.1202,.9927,.8307,-.4987,-.2474,-.7691,.2101,-.6036,-.9097,.4069,.083,-.4014,-.0498,-.9145,.9563,-.0876,.2788,.7552,-.4079,-.513,-.9713,.1873,.1465,-.9822,.1866,.0211,.6856,-.3535,.6364
                    ,.0073,-.9937,-.112,.8307,-.4987,-.2474,.0073,-.9937,-.112,.2586,-.4193,-.8702,.8307,-.4987,-.2474,.1977,.095,.9756,-.4457,-.1691,.879,-.8326,.2663,.4856,-.4646,.2258,.8562,-.4635,.2836,.8394,-.8692,-.116,.4806,-.5107,-.0801,.856,-.843,-.1234,.5236,-.9681,.2453,.0502,-.8126,.3685,.4516,-.992,-.0422,.1191,-.9272,.1674,-.3351
                    ,-.9681,.2453,.0502,-.995,.0578,.0818,-.9148,-.2488,-.3183,-.992,-.0422,.1191,-.9828,.1235,-.1369,-.0454,-.4273,-.903,-.2497,.1844,-.9506,-.5259,.226,-.82,-.588,.0516,-.8072,-.0316,.3202,-.9468,-.5557,.32,-.7673,-.5557,.32,-.7673,-.0264,.6073,-.794,-.5014,.628,-.5951,-.9681,.2453,.0502,-.7685,.5963,-.2318,-.8101,.5842,.0483
                    ,-.8326,.2663,.4856,-.8101,.5842,.0483,-.6689,.6317,.3917,-.4646,.2258,.8562,-.3823,.614,.6905,-.2497,.1844,-.9506,-.4684,.0425,-.8825,-.5259,.226,-.82,-.992,-.0422,.1191,-.9443,.022,-.3282,-.9858,-.1155,.1214,-.8692,-.116,.4806,-.9858,-.1155,.1214,-.8365,-.318,.4462,-.5107,-.0801,.856,-.4558,-.3264,.828,-.3343,-.3958,-.8553
                    ,-.033,.1386,-.9898,-.588,.0516,-.8072,-.9443,.022,-.3282,-.995,.0578,.0818,-.9858,-.1155,.1214,-.8365,-.318,.4462,-.995,.0578,.0818,-.843,-.1234,.5236,-.4558,-.3264,.828,-.843,-.1234,.5236,-.4457,-.1691,.879,.011,.9451,.3266,.0259,.6308,.7755,-.3815,.9211,-.0774,-.8101,.5842,.0483,-.3157,.9435,.1003,-.2573,.9149,-.3111
                    ,-.0115,.9378,-.3469,.011,.9451,.3266,-.3157,.9435,.1003,-.2226,.9392,.2613,.0315,-.3265,.9446,-.4457,-.1691,.879,.0328,-.1781,.9834,-.5107,-.0801,.856,.0315,-.3265,.9446,.0333,-.0612,.9976,.0326,.2095,.9772,.0333,-.0612,.9976,.0391,.2622,.9642,.0328,-.1781,.9834,.0326,.2095,.9772,-.0264,.6073,-.794,-.5804,-.3959,-.7116
                    ,-.9272,.1674,-.3351,-.9443,.022,-.3282,-.9457,-.0431,-.3221,-.8966,.2784,-.3443,-.8966,.2784,-.3443,-.5885,-.5057,-.6308,-.9457,-.0431,-.3221,-.3288,-.9064,-.265,-.7643,-.3704,-.5279,-.2942,.5262,.7978,.0391,.2622,.9642,.053,.45,.8914,-.0454,-.4273,-.903,-.9405,.3014,-.1567,-.9405,.3014,-.1567,-.6647,.6214,.4148,.0992,.611,.7854
                    ,.053,.45,.8914,-.8403,.5337,-.0953,-.0684,-.7819,-.6196,-.9457,-.0431,-.3221,-.0263,.3828,-.9235,-.5528,-.7517,-.3595,-.2497,.1844,-.9506,-.0289,-.5008,-.865,-.6105,-.6261,-.4851,-.5528,-.7517,-.3595,-.9942,.0044,-.107,-.5528,-.7517,-.3595,-.0329,.1622,-.9862,-.7829,.0612,-.619,-.2497,.1844,-.9506,-.5528,-.7517,-.3595,-.0329,.1622,-.9862
                    ,-.6842,-.3426,-.6438,-.7447,.0588,-.6648,-.9753,-.1306,-.1778,-.5694,-.388,-.7248,-.7829,.0612,-.619,-.5804,-.3959,-.7116,-.5453,-.2634,-.7957,-.0297,-.4563,-.8893,.7787,.5578,-.2872,.5645,-.7969,-.215,.8663,.4994,-.0069,.5645,-.7969,-.215,.8527,.3653,.3734,.4593,.379,-.8033,.5765,.7696,-.2743,-.5793,-.7713,.2636,.9709,-.2265,.0771
                    ,.285,-.8598,.4237,.9932,-.0739,-.0894,-.8345,-.1135,-.5392,.2713,-.1921,-.9431,.3665,.269,-.8907,-.2524,-.5836,.7718,.3266,.3773,-.8665,-.1927,-.9087,.3704,.735,-.6719,-.0911,-.871,-.1588,.4649,-.5793,-.7713,.2636,-.9868,.0239,-.1599,-.3459,-.0055,-.9382,-.394,.1127,-.9121,-.8238,.0275,-.5661,-.0263,.3828,-.9235,-.0928,.3381,-.9365
                    ,-.0333,.0374,-.9987,-.5259,.226,-.82,-.2497,.1844,-.9506,-.5259,.226,-.82,-.8929,.0815,-.4428,-.4691,.18,-.8646,-.9457,-.0431,-.3221,-.942,.3166,-.1116,-.8435,.0623,-.5335,-.3806,-.0618,-.9227,.6371,-.3271,-.6979,.2765,-.3959,-.8757,-.6842,-.3426,-.6438,-.3343,-.3958,-.8553,.6892,.6645,-.2888,.3169,.5115,-.7987,.2126,-.2633,-.941
                    ,-.8183,.0753,-.5698,-.2575,-.1493,.9547,-.9074,-.2494,.3381,.6893,.1499,.7088,.3052,.3601,-.8816,-.6072,.5323,-.5898,-.4858,-.3113,.8167,.865,-.0917,.4933,.3814,.3554,-.8534,.3304,.4388,-.8356,-.325,.4016,-.8562,.3424,.2312,.9106,.2991,.4183,.8576,.3304,.4388,-.8356,-.1501,.4161,-.8968,.2991,.4183,.8576,.4978,.8389,-.22
                    ,-.1549,-.0965,-.9832,.163,-.0876,-.9827,-.669,-.2235,-.7088,.9073,.1802,-.38,.6232,.1564,-.7662,.3773,.0775,.9228,.8383,.149,.5244,-.3613,-.5048,.7839,.5078,-.2834,.8135,.9083,.0267,.4175,-.1162,.2562,-.9596,-.7185,-.0413,-.6942,.8441,.3543,-.4024,.3523,.3243,-.8779,-.7017,.0982,.7056,-.0179,-.3948,-.9186,-.7521,-.405,-.5199
                    ,-.5676,-.5456,.6165,-.7572,-.6518,.0425,-.6127,-.7837,-.1017,-.9879,.1508,.0357,-.7572,-.6518,.0425,.975,.2127,.0639,.7288,-.678,.0956,.003,-1,-.0003,-.7572,-.6518,.0425,.9309,.191,-.3112,.9778,.1915,-.0851,-.9652,-.2611,.011,-.9409,-.2971,-.1622,.8485,.3573,-.3903,.8742,.2418,-.4209,-.9199,-.3898,-.0431,-.9933,-.0409,-.1081
                    ,.9083,.0267,.4175,.8441,.3543,-.4024,.8485,.3573,-.3903,-.8961,-.4373,.076,-.9443,-.3272,.0351,.8797,.3206,-.3511,.8441,.3543,-.4024,-.9443,-.3272,.0351,-.9652,-.2611,.011,.872,.4254,-.2422,.8607,.4368,-.2614,.8383,.149,.5244,.9073,.1802,-.38,.872,.4254,-.2422,.6892,.6645,-.2888,.4978,.8389,-.22,.7199,.611,-.3292
                    ,.9276,.0308,-.3723,.916,-.1772,-.3598,.865,-.0917,.4933,.9284,-.0599,-.3667,.9276,.0308,-.3723,-.498,.8072,.3168,-.946,-.2523,.2036,-.9218,.276,.2721,-.9218,.276,.2721,.8672,.4486,-.2163,.8705,.417,-.2614,.9411,.0193,-.3375,.9284,-.0599,-.3667,-.8586,-.4806,.178,-.9074,-.2494,.3381,-.8183,.0753,-.5698,-.9074,-.2494,.3381
                    ,-.9551,-.0977,.2798,.7199,.611,-.3292,.7909,.4537,-.4105,.8809,-.0492,-.4707,.9073,.1802,-.38,.8348,.3956,-.3829,.8672,.4486,-.2163,.7616,-.4119,.5003,.3768,-.8439,-.3819,.6892,.6645,-.2888,.5945,.7303,.3365,.2163,.6091,.763,.8053,.2847,.52,.9778,.1915,-.0851,.975,.2127,.0639,-.8467,.1685,-.5046,-.9933,-.0409,-.1081
                    ,-.9879,.1508,.0357,.6726,.4412,-.5941,-.0393,.6568,-.753,-.8467,.1685,-.5046,.2069,.2646,.9419,.8053,.2847,.52,.7909,.4537,-.4105,.8348,.3956,-.3829,.8052,.2783,.5235,.3995,.2828,-.872,-.1575,-.4494,-.8793,.7909,.4537,-.4105,.3995,.2828,-.872,.8705,.417,-.2614,.9411,.0193,-.3375,-.9551,-.0977,.2798,-.946,-.2523,.2036
                    ,.8372,-.2456,-.4886,.8809,-.0492,-.4707,.291,-.6921,.6605,.3768,-.8439,-.3819,-.7672,-.6355,.0862,-.7672,-.6355,.0862,-.8586,-.4806,.178,.3768,-.8439,-.3819,.2069,.2646,.9419,-.0393,.6568,-.753,.4648,.5379,.7033,.1296,.1795,-.9752,.6011,-.5754,.5546,.7288,-.678,.0956,.003,-1,-.0003,.7995,-.3569,-.4831,-.0179,-.3948,-.9186
                    ,-.7017,.0982,.7056,-.5676,-.5456,.6165,.3523,.3243,-.8779,-.1162,.2562,-.9596,.5078,-.2834,.8135,-.3613,-.5048,.7839,.1977,.095,.9756,.163,-.0876,-.9827,-.1501,.4161,-.8968,.4741,.2942,.8298,-.2011,.1779,-.9633,.7616,-.4119,.5003,-.1744,.2332,-.9566,.5425,-.1683,.823,.8607,.4368,-.2614,.8797,.3206,-.3511,-.8618,-.4976,.0983
                    ,-.8961,-.4373,.076,.8906,.1251,.4372,-.2165,-.5098,.8326,.3626,.4577,-.8118,-.9409,-.2971,-.1622,-.9199,-.3898,-.0431,.8742,.2418,-.4209,.9309,.191,-.3112,-.8618,-.4976,.0983,.0073,-.9937,-.112,-.8618,-.4976,.0983,-.669,-.2235,-.7088,.5208,.2257,.8233,.5667,-.0803,.82,.9694,.2451,-.0144,.8717,.2782,-.4033,.9938,-.1081,.0252
                    ,.9226,-.0763,-.378,.4829,.2077,-.8507,.5033,.3199,-.8027,.9694,.2451,-.0144,.8117,.5841,-.0058,.8632,.2662,.429,.187,.1746,-.9667,.9938,-.1081,.0252,.9905,-.1269,.0529,.9037,-.1386,.4052,.51,-.3265,.7958,.5329,.0515,-.8446,.5329,.0515,-.8446,-.033,.1386,-.9898,.9982,.0576,.0152,.9028,.1672,-.3962,.9217,.0107,-.3878
                    ,.8643,-.3182,.3894,.876,-.1235,.4662,.9982,.0576,.0152,.5033,-.1692,.8473,.876,-.1235,.4662,.0259,.6308,.7755,.8117,.5841,-.0058,.349,.937,.0149,.2362,.9148,-.3276,.3756,.921,-.1026,.349,.937,.0149,.3219,.9434,.079,.2397,.9392,.2459,.011,.9451,.3266,.3219,.9434,.079,.3756,.921,-.1026,.349,.937,.0149
                    ,.0328,-.1781,.9834,.5033,-.1692,.8473,.0315,-.3265,.9446,.51,-.3265,.7958,.0259,.6308,.7755,.0333,-.0612,.9976,.5667,-.0803,.82,.0326,.2095,.9772,.5208,.2257,.8233,.9028,.1672,-.3962,.5329,.0515,-.8446,.5315,-.396,-.7487,.491,-.2635,-.8303,.8717,.2782,-.4033,.5033,.3199,-.8027,.9589,-.0168,-.2832,.9325,.1274,-.3378
                    ,.9325,.1274,-.3378,.8741,.353,-.3335,-.0263,.3828,-.9235,.187,.1746,-.9667,-.0289,-.5008,-.865,.5275,-.7518,-.3956,.7373,.0578,-.673,.5275,-.7518,-.3956,.187,.1746,-.9667,.6371,-.3271,-.6979,.7373,.0578,-.673,.5315,-.396,-.7487,-.6127,-.7837,-.1017,-.8002,.5158,.3061,-.498,.8072,.3168,.49,-.8115,-.3184,.916,-.1772,-.3598
                    ,.49,-.8115,-.3184,-.0263,.3828,-.9235,.4829,.2077,-.8507,.4829,.2077,-.8507,.9226,-.0763,-.378,.193,.3396,.9205,.3424,.2312,.9106,-.7934,.4523,.4073,-.4852,.2651,-.8332,-.6339,.5085,-.5827,.3122,-.2077,.927,.2006,-.0996,.9746,-.2408,-.1132,-.964,-.337,.0162,-.9413,-.8825,.1437,-.4478,-.8905,.4309,.146,.2057,-.0016,-.9786
                    ,.8451,-.0786,.5287,.9066,-.2445,-.3439,.8451,-.0786,.5287,-.8434,.2952,-.4489,.0103,.4847,-.8746,.8638,.1991,-.4628,.9131,-.2892,.2873,.9131,-.2892,.2873,-.285,-.1187,.9511,-.8708,.3821,-.3094,-.786,.591,.1812,-.8181,.4029,-.4102,-.4747,.4123,-.7776,-.325,.4016,-.8562,.3424,.2312,.9106,-.8181,.4029,-.4102,-.0233,.6134,.7894
                    ,.2163,.6091,.763,-.5064,.8535,.1225,-.6272,.7773,.048,-.2069,-.3998,-.8929,-.1549,-.0965,-.9832,-.4722,-.0942,-.8764,-.1549,-.0965,-.9832,-.0028,.1415,.9899,.2586,-.4193,-.8702,-.2069,-.3998,-.8929,-.9782,.1978,.0625,-.4092,-.0905,-.9079,-.9097,.4069,.083,-.9593,.2818,-.0132,.8566,-.3888,-.3391,.7531,-.2462,.61,.0021,.0563,.9984
                    ,.7525,.1408,.6434,-.9822,.1866,.0211,.0919,-.5685,.8175,-.6172,.4785,.6245,-.3248,.5954,-.7349,-.93,.3598,.0744,.7296,-.6324,-.26,-.3706,-.4051,-.8357,.4646,-.3598,-.8091,.6811,-.5329,.5021,.5645,-.7969,-.215,.4646,-.3598,-.8091,.7296,-.6324,-.26,-.6165,-.6681,.4165,.7296,-.6324,-.26,.0513,-.9986,-.01,-.6172,.4785,.6245
                    ,.7552,-.4079,-.513,.8604,-.33,-.3883,.9066,-.3603,-.2196,.7956,-.4817,-.3673,-.5699,.2545,.7812,-.9544,.2986,.0042,.8566,-.3888,-.3391,-.9593,.2818,-.0132,-.9609,.2706,.0573,.8604,-.33,-.3883,.8566,-.3888,-.3391,-.9097,.4069,.083,-.9131,.396,.0969,-.597,.1696,.7841,-.9131,.396,.0969,-.6339,.5085,-.5827,-.6272,.7773,.048
                    ,-.3955,.4955,.7733,-.786,.591,.1812,-.871,-.1588,.4649,-.891,-.0166,.4537,-.285,-.1187,.9511,-.891,-.0166,.4537,.5765,.7696,-.2743,.0103,.4847,-.8746,.8638,.1991,-.4628,.8638,.1991,-.4628,-.8242,.4189,.381,-.7934,.4523,.4073,-.9131,-.0599,.4032,-.9159,.0162,.401,.2057,-.0016,-.9786,.9066,-.2445,-.3439,.7839,-.4948,-.375
                    ,.8929,-.0928,-.4405,-.8905,.4309,.146,-.786,.591,.1812,-.9782,.1978,.0625,-.992,-.0345,.121,-.7934,.4523,.4073,-.9575,-.2245,.1809,-.5372,-.8434,.0053,-.6272,.7773,.048,-.8403,.5337,-.0953,.0992,.611,.7854,-.8215,.3834,.422,.598,-.1887,-.779,.9438,-.0837,-.3198,-.8421,.3822,-.3804,-.0658,.4399,.8956,-.2617,.3876,.8839
                    ,-.9052,.3659,.216,-.2617,.3876,.8839,-.891,.1818,-.4159,-.8905,.4309,.146,-.9159,.0162,.401,-.8242,.4189,.381,.8436,-.2577,-.4711,-.992,-.0345,.121,-.9575,-.2245,.1809,-.1791,-.0804,-.9805,-.2408,-.1132,-.964,.3648,-.1101,.9245,.3122,-.2077,.927,.2518,-.5917,.7658,.6823,-.6373,-.3581,-.5372,-.8434,.0053,-.7991,-.2582,-.5428
                    ,.7839,-.4948,-.375,.6823,-.6373,-.3581,-.5372,-.8434,.0053,-.0658,.4399,.8956,-.275,.8157,.5089,-.2011,.1779,-.9633,-.0684,-.7819,-.6196,-.341,-.6035,.7207,.0513,-.9986,-.01,-.3706,-.4051,-.8357,-.9154,-.3969,-.0674,-.3248,.5954,-.7349,.7525,.1408,.6434,.6811,-.5329,.5021,.0919,-.5685,.8175,-.7757,.0466,-.6294,.7531,-.2462,.61
                    ,.0021,.0563,.9984,.2652,-.2184,.9391,.6856,-.3535,.6364,-.4092,-.0905,-.9079,.2006,-.0996,.9746,.1977,.095,.9756,-.0028,.1415,.9899,-.8825,.1437,-.4478,-.4722,-.0942,-.8764,-.0233,.6134,.7894,-.325,.4016,-.8562,-.8181,.4029,-.4102,-.4747,.4123,-.7776,-.2673,.5418,-.7969,-.2011,.1779,-.9633,-.4852,.2651,-.8332,-.1758,-.3728,.9111
                    ,-.3955,.4955,.7733,.193,.3396,.9205,-.4014,-.0498,-.9145,-.9609,.2706,.0573,.8475,-.4718,-.2432,-.5549,.3423,.7582,.8307,-.4987,-.2474,-.7691,.2101,-.6036,.7956,-.4817,-.3673,.7552,-.4079,-.513,-.9713,.1873,.1465,-.9822,.1866,.0211,.6856,-.3535,.6364,.2652,-.2184,.9391,.0073,-.9937,-.112,.0073,-.9937,-.112,-.2069,-.3998,-.8929
                    ,.2586,-.4193,-.8702,-.995,.0578,.0818,-.9828,.1235,-.1369,-.8966,.2784,-.3443,-.9681,.2453,.0502,-.9457,-.0431,-.3221,-.992,-.0422,.1191,-.0454,-.4273,-.903,-.0454,-.4273,-.903,-.0263,.3828,-.9235,-.033,.1386,-.9898,-.0316,.3202,-.9468,-.5557,.32,-.7673,-.0316,.3202,-.9468,-.0264,.6073,-.794,-.9681,.2453,.0502,-.8326,.2663,.4856
                    ,-.9681,.2453,.0502,-.8101,.5842,.0483,-.4646,.2258,.8562,-.8326,.2663,.4856,-.2497,.1844,-.9506,-.992,-.0422,.1191,-.8692,-.116,.4806,-.992,-.0422,.1191,-.9858,-.1155,.1214,-.5107,-.0801,.856,-.8692,-.116,.4806,-.588,.0516,-.8072,-.0303,-.4215,-.9063,-.033,.1386,-.9898,-.9443,.022,-.3282,-.9272,.1674,-.3351,-.995,.0578,.0818
                    ,-.8365,-.318,.4462,-.9858,-.1155,.1214,-.995,.0578,.0818,-.4558,-.3264,.828,-.8365,-.318,.4462,-.843,-.1234,.5236,.011,.9451,.3266,-.347,.9371,.0381,-.8101,.5842,.0483,-.347,.9371,.0381,-.347,.9371,.0381,-.3815,.9211,-.0774,-.0115,.9378,-.3469,-.2573,.9149,-.3111,-.0115,.9378,-.3469,-.3815,.9211,-.0774,.011,.9451,.3266
                    ,-.2226,.9392,.2613,-.3157,.9435,.1003,-.3157,.9435,.1003,-.347,.9371,.0381,-.0115,.9378,-.3469,.0315,-.3265,.9446,-.4558,-.3264,.828,-.4457,-.1691,.879,-.5107,-.0801,.856,.0315,-.3265,.9446,.0326,.2095,.9772,-.4646,.2258,.8562,.0333,-.0612,.9976,.0328,-.1781,.9834,-.0264,.6073,-.794,-.0115,.9378,-.3469,-.588,.0516,-.8072
                    ,-.9272,.1674,-.3351,-.5259,.226,-.82,-.5804,-.3959,-.7116,-.5557,.32,-.7673,.0391,.2622,.9642,-.0475,-.8886,-.4562,-.0454,-.4273,-.903,-.9405,.3014,-.1567,-.9828,.1235,-.1369,.0992,.611,.7854,-.8403,.5337,-.0953,-.9405,.3014,-.1567,-.0684,-.7819,-.6196,-.0475,-.8886,-.4562,-.0263,.3828,-.9235,-.0289,-.5008,-.865,-.0289,-.5008,-.865
                    ,-.0282,-.5362,-.8436,-.7829,.0612,-.619,-.0282,-.5362,-.8436,-.0329,.1622,-.9862,-.2497,.1844,-.9506,-.0329,.1622,-.9862,-.0297,-.4563,-.8893,-.7829,.0612,-.619,-.6842,-.3426,-.6438,-.3343,-.3958,-.8553,-.5804,-.3959,-.7116,-.0297,-.4563,-.8893,-.0303,-.4215,-.9063,.7787,.5578,-.2872,.5645,-.7969,-.215,.5765,.7696,-.2743,.7787,.5578,-.2872
                    ,-.5793,-.7713,.2636,-.5768,-.6002,-.5541,-.871,-.1588,.4649,-.5793,-.7713,.2636,-.0263,.3828,-.9235,-.2497,.1844,-.9506,-.5259,.226,-.82,-.5259,.226,-.82,-.9457,-.0431,-.3221,-.9457,-.0431,-.3221,-.992,-.0422,.1191,.6371,-.3271,-.6979,-.6842,-.3426,-.6438
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .9028,.6357,.8994,.6593,.8875,.6367,.6118,.1482,.6445,.2228,.5943,.2213,.6714,.3962,.6054,.3517,.6497,.3473,.2256,.9012,.1988,.8506,.2295,.8445,.3129,.2245,.327,.2461,.3058,.2387,.0429,.9566,.0737,.8882,.0956,.9004,.6064,.0551,.6401,.0999,.6115,.0991,.5695,.4128,.5422,.3464,.5744,.3494,.2775,.982
                    ,.2729,.9184,.3065,.9144,.65,.3054,.6132,.2696,.6521,.2693,.3294,.9755,.3294,.9138,.3023,.8691,.3441,.8515,.3353,.8745,.1667,.8881,.1931,.8983,.8888,.7304,.867,.6826,.8934,.6773,.9226,.6877,.9331,.74,.8558,.1637,.8807,.1315,.8922,.1678,.2689,.8491,.3046,.8462,.8454,.2444,.8902,.2267,.8749,.2585
                    ,.8244,.2353,.8553,.2124,.8454,.2444,.6728,.5458,.6791,.5771,.6691,.5761,.8213,.1635,.85,.1315,.3413,.7942,.3147,.7716,.3441,.7683,.3079,.7985,.2811,.7671,.3147,.7716,.7212,.5367,.7633,.5607,.7331,.5731,.6753,.5133,.6839,.542,.6825,.6421,.6877,.6744,.6783,.6742,.6772,.6115,.6916,.6388,.6825,.6421
                    ,.7389,.6749,.7326,.6139,.7354,.6334,.367,.2706,.4172,.2106,.4429,.2561,.2941,.2201,.3308,.1912,.5211,.8808,.5387,.851,.5729,.882,.6232,.4214,.5642,.4768,.5188,.8301,.5396,.828,.5972,.8024,.5688,.8198,.5811,.7903,.7001,.7921,.7353,.7641,.7337,.7921,.5455,.3044,.5805,.2705,.5777,.3063,.5767,.0146
                    ,.6098,.0202,.6993,.7345,.7412,.7311,.8051,.7894,.7679,.7724,.8101,.7729,.2099,.7489,.1769,.7722,.1826,.7402,.4232,.5563,.3948,.4948,.4142,.4924,.7713,.7389,.8133,.7395,.1452,.7612,.1581,.7314,.2359,.2712,.286,.2533,.2856,.277,.4842,.544,.4326,.4895,.4623,.4809,.2306,.2834,.1695,.3278,.1646,.2797
                    ,.2281,.3695,.1582,.3804,.1646,.3552,.0467,.8129,.031,.7395,.0474,.7394,.2073,.2724,.1786,.2485,.2087,.247,.0461,.8365,.0286,.8132,.0951,.834,.0667,.8117,.0979,.8082,.2336,.0566,.2587,.0008,.2656,.0557,.0678,.7378,.095,.7345,.2376,.2475,.2902,.1764,.1743,.1742,.2116,.1712,.6958,.2479,.7194,.2529
                    ,.6992,.2607,.2124,.0565,.1904,.0007,.2125,.0007,.0483,.6173,.0379,.5751,.0467,.5752,.0848,.6136,.0591,.5735,.0826,.5592,.903,.9482,.812,.9147,.9081,.9233,.2478,.6563,.2309,.6733,.234,.6489,.2767,.6368,.3519,.6419,.3497,.6557,.678,.2505,.6459,.2608,.6466,.2471,.765,.6135,.7931,.6197,.7659,.6284
                    ,.6863,.5136,.7642,.4905,.7727,.524,.7489,.5177,.2481,.6734,.2912,.75,.2309,.6733,.7143,.2409,.7483,.2322,.4786,.9175,.4568,.8833,.4745,.8777,.1858,.0559,.1743,.0007,.0007,.8099,.1461,.1756,.0125,.6144,.0378,.6174,.1807,.2748,.1487,.2517,.3986,.5591,.3681,.4948,.2068,.4359,.2223,.3964,.0007,.8328
                    ,.0267,.8352,.1618,.8171,.1925,.7792,.1618,.8171,.3567,.2328,.3469,.2706,.327,.2461,.5917,.8391,.6693,.8296,.6544,.8689,.7175,.5876,.6812,.4809,.7199,.516,.6753,.5133,.6812,.4809,.7918,.1444,.8204,.1375,.6684,.5795,.6866,.6077,.2414,.8804,.2748,.8789,.2433,.7869,.2734,.8012,.1309,.876,.1773,.8431
                    ,.7895,.2253,.8237,.2118,.0007,.9604,.0346,.9008,.5692,.0505,.5298,.0007,.8516,.7369,.8365,.6795,.558,.096,.4939,.1243,.505,.074,.9131,.8107,.9394,.8128,.9137,.8271,.8791,.618,.8922,.6161,.9881,.8044,.9639,.8132,.9686,.7983,.7125,.2218,.7389,.2217,.31,.6984,.3016,.7409,.6758,.2349,.6459,.2314
                    ,.3248,.6851,.3519,.6725,.3125,.6897,.6921,.2315,.8147,.7708,.8509,.772,.8509,.772,.8911,.7845,.1862,.9345,.2111,.9388,.2309,.844,.7856,.1694,.5206,.0355,.6412,.1473,.6119,.3064,.8911,.7845,.9331,.7754,.251,.885,.2309,.9359,.1205,.9116,.1498,.9388,.0818,.8386,.0581,.849,.5459,.156,.3125,.6897
                    ,.3248,.6851,.9686,.7983,.9394,.7935,.8922,.6161,.8771,.6052,.8885,.6027,.4949,.8843,.4786,.9175,.4745,.8777,.2693,.6207,.8141,.9744,.8979,.9744,.0608,.6164,.2288,.0007,.6806,.2638,.2483,.1728,.0648,.8372,.1695,.3278,.2351,.3313,.1592,.6859,.1851,.6893,.4464,.5535,.2295,.718,.6445,.0237,.6414,.0576
                    ,.7666,.7894,.5306,.4739,.5353,.4098,.5729,.882,.6544,.8689,.4172,.2106,.2916,.2352,.5459,.156,.5141,.2233,.436,.6727,.4678,.6759,.352,.3885,.3398,.3443,.3298,.4674,.3454,.4203,.4027,.6633,.3534,.5603,.3454,.4203,.352,.3885,.3228,.2797,.4678,.6759,.5095,.6683,.436,.6727,.0007,.7359,.1678,.0557
                    ,.1706,.6207,.6707,.6932,.7109,.7156,.2099,.7489,.0572,.9772,.0333,.9891,.0327,.9768,.9595,.8435,.9367,.8722,.9366,.8392,.0017,.9903,.0007,.9782,.9165,.8678,.9131,.8449,.5941,.9817,.5665,.968,.5953,.9697,.8602,.6714,.8708,.6356,.8814,.6587,.8164,.6219,.8156,.6114,.8479,.615,.5437,.968,.5199,.9805
                    ,.5188,.9693,.9209,.077,.9075,.1011,.8995,.0865,.9717,.0859,.947,.0949,.9436,.077,.9476,.6007,.9215,.623,.9166,.6077,.9717,.6033,.9491,.6172,.9476,.6007,.7186,.9227,.7051,.908,.7169,.9049,.7709,.9024,.742,.9389,.736,.9047,.9379,.8829,.9131,.907,.9177,.8736,.962,.8803,.9421,.907,.9379,.8829
                    ,.6707,.9366,.6735,.9323,.681,.9373,.734,.978,.7141,.9572,.7371,.9739,.4852,.2718,.4556,.2724,.4565,.2673,.5097,.2713,.4871,.2784,.4852,.2718,.968,.6191,.9648,.6427,.9577,.6391,.9661,.1015,.9485,.1159,.9419,.6402,.9306,.6427,.9299,.1132,.926,.0935,.4917,.9635,.5077,.9779,.4532,.9779,.5271,.2673
                    ,.5116,.2778,.9836,.8988,.9763,.8765,.9888,.6105,.9735,.8698,.9751,.8452,.0754,.9781,.0571,.9894,.921,.1186,.7107,.9615,.6951,.9466,.7141,.9572,.5431,.9792,.835,.6476,.8581,.6077,.8781,.6319,.9625,.8261,.9787,.8296,.845,.6007,.8564,.6007,.8814,.6587,.891,.6577,.9133,.8356,.9375,.827,.9823,.8184
                    ,.9137,.8271,.835,.6476,.8243,.6316,.2916,.272,.2992,.2733,.2924,.2754,.701,.9014,.6925,.9082,.689,.9057,.6998,.9225,.7022,.9083,.6811,.9195,.7051,.908,.703,.9216,.6808,.9334,.686,.9228,.6998,.9287,.7026,.9299,.6953,.9238,.7197,.9391,.7022,.9382,.6751,.9295,.8122,.6074,.8143,.629,.7894,.5199
                    ,.7752,.5305,.7515,.5309,.7771,.5765,.7916,.6114,.7904,.537,.7808,.6651,.7103,.5939,.6986,.589,.7004,.6001,.7164,.601,.7114,.5948,.7111,.5944,.7111,.5944,.7117,.5941,.7102,.5948,.7112,.5944,.7111,.5944,.7285,.4809,.7808,.6651,.611,.6866,.5946,.7533,.5946,.6773,.6278,.7563,.6129,.7564,.5946,.7862
                    ,.6037,.7838,.6043,.7886,.6156,.7851,.6043,.7886,.6156,.7851,.6311,.7796,.6341,.7853,.6341,.7853,.6598,.7827,.6693,.7889,.656,.7335,.6139,.7695,.5946,.768,.6139,.7807,.9554,.1617,.9389,.1445,.9489,.1315,.2769,.5867,.3515,.6194,.2759,.616,.6691,.0787,.6933,.1535,.6459,.1269,.8186,.3745,.7996,.3205
                    ,.8385,.3487,.9073,.4263,.8905,.4459,.8628,.4291,.9305,.287,.8989,.3549,.907,.2784,.2277,.5863,.1863,.6163,.1838,.5813,.7442,.0831,.7814,.1446,.7472,.1466,.4053,.978,.4099,.9143,.4519,.9318,.669,.0007,.7081,.039,.67,.0368,.3534,.9715,.3762,.9103,.7856,.0823,.8233,.1076,.7898,.1067,.8489,.3224
                    ,.8696,.5263,.9168,.5493,.8621,.5633,.9131,.4936,.8612,.4818,.6707,.8872,.7037,.8635,.7066,.9,.8598,.0942,.8485,.1223,.7655,.9,.7847,.8558,.7978,.8858,.7524,.8646,.7763,.8345,.7847,.8558,.4974,.3856,.5117,.357,.5074,.3872,.6717,.8566,.7047,.829,.7991,.0266,.8295,.0094,.8311,.0371,.8634,.0113
                    ,.8645,.0463,.4205,.3477,.4673,.3355,.4463,.3676,.502,.3504,.5178,.325,.4637,.4772,.4772,.4474,.4728,.4795,.4692,.4418,.4903,.4193,.4772,.4474,.4142,.4643,.4361,.407,.4822,.4132,.8478,.4653,.8055,.3994,.927,.3907,.9264,.4243,.4834,.8462,.5003,.8764,.4485,.8764,.7506,.2108,.5038,.8257,.5031,.857
                    ,.4261,.7962,.4541,.8142,.4308,.833,.4257,.7404,.44,.7831,.4118,.7648,.7422,.0399,.7741,.0039,.7745,.039,.1433,.5516,.1792,.5441,.4387,.7095,.472,.7353,.3534,.7236,.3939,.7297,.3857,.7446,.6924,.3975,.7253,.4208,.7097,.4278,.5973,.5563,.6257,.4948,.6218,.5591,.3582,.707,.4092,.6997,.7196,.3888
                    ,.7571,.4098,.0047,.2532,.0547,.2711,.0051,.2769,.5362,.544,.5878,.4895,.574,.5535,.4267,.0174,.4808,.07,.4155,.0641,.4169,.103,.4846,.1236,.4189,.1304,.0518,.5336,.0676,.4602,.07,.5339,.0833,.2724,.1122,.2486,.1099,.2749,.0524,.5572,.0718,.5559,.0034,.5547,.0318,.5323,.0337,.5579,.0326,.0007
                    ,.0576,.0566,.0256,.0556,.0007,.5289,.0308,.4585,.0007,.1762,.0532,.2474,.082,.2471,.1166,.1743,.5485,.2525,.5268,.2628,.5289,.2499,.0788,.0007,.1054,.056,.0788,.0565,.0503,.3379,.0607,.2958,.0608,.338,.0138,.3342,.0396,.2942,.0379,.337,.2253,.9741,.1316,.9993,.1205,.9801,.8142,.8305,.8139,.8066
                    ,.8263,.8185,.8789,.9134,.8214,.8647,.8869,.9019,.6002,.2533,.5665,.2509,.5962,.2402,.3763,.3969,.405,.3983,.4002,.4123,.4741,.316,.5071,.3224,.421,.3098,.438,.2797,.4457,.31,.9106,.7935,.9117,.8072,.4939,.2495,.5005,.2371,.5018,.9246,.4799,.9587,.4841,.9189,.117,.0008,.1234,.0558,.0979,.5306
                    ,.1448,.1757,.142,.2518,.0862,.3351,.1099,.2749,.142,.2518,.1413,.2785,.6523,.4948,.6671,.5603,.4286,.1718,.0979,.5535,.0718,.5559,.7405,.4657,.7097,.4278,.7405,.4657,.7252,.4742,.8677,.4678,.3534,.8217,.4261,.7962,.4552,.3989,.5206,.2921,.5178,.325,.5206,.2921,.5293,.2957,.6866,.7988,.7118,.7935
                    ,.5071,.3906,.881,.1301,.8485,.1223,.8967,.0379,.8087,.2996,.8643,.2879,.7676,.7993,.7893,.8062,.9466,.3247,.9237,.3894,.1641,.4954,.9191,.5799,.8662,.5994,.2246,.5328,.253,.4687,.2847,.5207,.9611,.0757,.9589,.0494,.9783,.0494,.9584,.1838,.9425,.1699,.9734,.0202,.9533,.0064,.9674,.0007,.5262,.231
                    ,.5005,.2371,.511,.2247,.8882,.8436,.9117,.8072,.9117,.8237,.565,.2351,.5933,.2247,.8896,.8635,.9002,.8914,.8839,.8516,.8882,.8436,.5484,.2357,.8271,.5631,.8662,.5994,.8273,.5994,.8271,.5631,.8156,.5226,.8698,.3682,.8976,.3444,.856,.3894,.8698,.3682,.8981,.0964,.7528,.833,.7118,.7935,.7676,.7993
                    ,.8253,.0846,.2026,.4798,.7765,.0811,.2286,.615,.7132,.0844,.8156,.5226,.4318,.8809,.4061,.8777,.8976,.3044,.8976,.3444,.9628,.2484,.9704,.2731,.2847,.5207,.5484,.2357,.8896,.8635,.9783,.0494,.9586,.0249,.9632,.1967,.9466,.1899,.4637,.9254,.4799,.9587,.4532,.9586,.8049,.871,.139,.9401,.2225,.9476
                    ,.052,.2959,.0625,.0007,.5671,.2644,.0793,.1712,.0337,.5579,.0511,.46,.4808,.07,.7171,.3379,.7442,.38,.6727,.3666,.7171,.3379,.1863,.6163,.1489,.5847,.7079,.0021,.7842,.2088,.7814,.1446,.3673,.8614,.8936,.391,.9264,.4243,.9125,.4413,.2847,.5207,.35,.5692,.5844,.6727,.5527,.6759,.31,.0622
                    ,.2916,.1042,.3024,.1854,.2936,.1366,.6671,.653,.6177,.6633,.2936,.1366,.2916,.1042,.3359,.0007,.5527,.6759,.5109,.6683,.5844,.6727,.0426,.1728,.0979,.4566,.1234,.0558,.0036,.4551,.7431,.3345,.7316,.2693,.7508,.2693,.5186,.7162,.4726,.7131,.5186,.6972,.6727,.3666,.8557,.9888,.8317,.9769,.8556,.9766
                    ,.9282,.0293,.8995,.0521,.9023,.0292,.8312,.9892,.8001,.9757,.9325,.0522,.904,.0723,.0483,.9755,.0759,.9617,.0771,.9738,.9295,.1805,.9,.1577,.9246,.1556,.9291,.2239,.8936,.2235,.8942,.211,.0255,.9755,.0017,.9629,.025,.9643,.0992,.3013,.1233,.2879,.1156,.3064,.1081,.3521,.117,.3274,.1236,.3465
                    ,.9404,.9567,.9144,.9343,.9419,.9401,.9645,.954,.9609,.9383,.5609,.959,.5687,.9406,.5731,.9579,.6247,.9419,.5851,.9174,.6132,.9098,.933,.9833,.9094,.958,.9384,.9595,.957,.9871,.9624,.9643,.5283,.9396,.5188,.9438,.5334,.9239,.5527,.9096,.5644,.8833,.5687,.8862,.9233,.2404,.8936,.2397,.9251,.2338
                    ,.9477,.2408,.9251,.2338,.9496,.2344,.9576,.9147,.973,.932,.1381,.3289,.9144,.9343,.9348,.9172,.1354,.3103,.9166,.644,.9711,.644,.9551,.6584,.9506,.9183,.9651,.2448,.9496,.2344,.9673,.2386,.957,.9871,.9794,.9697,.971,.9916,.9817,.9469,.9019,.0152,.9266,.0137,.8738,.9879,.8732,.9757,.1233,.2879
                    ,.5384,.926,.5481,.9068,.5527,.9096,.5911,.9516,.0992,.324,.0472,.9642,.9231,.2106,.8936,.1917,.9357,.2106,.9377,.1792,.9456,.0263,.9266,.0137,.9421,.0101,.9291,.2239,.933,.1508,.9361,.0755,.9447,.0512,.9533,.0064,.9421,.0101,.9446,.0751,.9525,.2015,.8936,.1917,.3131,.272,.3055,.2733,.303,.272
                    ,.5594,.9666,.549,.9631,.5581,.9597,.551,.9472,.5581,.9597,.5344,.9563,.538,.9516,.5609,.959,.5581,.9597,.5344,.9563,.5295,.9434,.5543,.9469,.5489,.9414,.5511,.9393,.5463,.9475,.5642,.9247,.5664,.9327,.5254,.949,.361,.3799,.3534,.4002,.4169,.3154,.406,.3015,.4397,.322,.3798,.3893,.403,.3593
                    ,.3763,.4439,.4629,.3936,.4576,.3857,.4755,.392,.4616,.3942,.462,.3939,.4628,.3945,.4616,.3934,.4709,.4022,.462,.3939,.462,.3939,.4749,.2797,.3763,.4439,.4283,.4251,.5782,.6866,.5763,.7564,.5614,.7563,.5946,.7862,.5855,.7838,.5946,.7813,.5736,.7851,.5849,.7886,.5736,.7851,.5582,.7796,.5753,.7807
                    ,.5551,.7853,.5294,.7827,.5332,.7335,.5753,.7695,.6997,.9348,.7022,.9382,.5468,.9356,.548,.9316,.9152,.664,.327,.2461,.2309,.9359,.1773,.8431,.8934,.6773,.9226,.6877,.2748,.8789,.8454,.2444,.8204,.1375,.3147,.7716,.6753,.5133,.6825,.6421,.4172,.2106,.2977,.1868,.5211,.8808,.5188,.8614,.6517,.4795
                    ,.5642,.4768,.5188,.8614,.5972,.8024,.547,.2693,.5805,.2705,.7109,.7156,.8051,.7894,.7666,.7894,.2099,.7489,.1925,.7792,.1695,.3278,.2073,.2724,.1807,.2748,.0461,.8365,.0267,.8352,.0951,.834,.0648,.8372,.2288,.0007,.7991,.9329,.2309,.6733,.6806,.2638,.6459,.2608,.7894,.5199,.3016,.7409,.2912,.75
                    ,.7389,.2217,.7483,.2322,.4786,.9175,.4532,.9174,.1678,.0557,.1743,.0007,.0007,.8099,.0007,.7359,.1487,.2517,.1461,.1756,.0125,.6144,.0132,.5602,.1807,.2748,.1493,.2784,.1487,.2517,.3534,.5603,.3681,.4948,.2068,.4359,.1461,.4088,.0007,.8328,.0007,.8099,.1618,.8171,.1293,.8074,.1925,.7792,.177,.8256
                    ,.1618,.8171,.3469,.2706,.5972,.8024,.6693,.8296,.6812,.4809,.7285,.4809,.6753,.5133,.6719,.482,.6812,.4809,.7771,.5765,.7856,.1694,.7918,.1444,.6684,.5795,.2414,.8804,.2309,.844,.2433,.7869,.2559,.7514,.1309,.876,.151,.8269,.1773,.8431,.7956,.2473,.7895,.2253,.0007,.9604,.0007,.8987,.5206,.0355
                    ,.5298,.0007,.8157,.7319,.8365,.6795,.5459,.156,.4939,.1243,.9131,.8107,.9394,.7935,.9881,.8044,.7125,.2218,.7258,.2121,.7389,.2217,.31,.6984,.313,.7291,.3016,.7409,.3248,.6851,.3125,.6897,.31,.6984,.6921,.2315,.7125,.2218,.8147,.7708,.8157,.7319,.8509,.772,.1862,.9345,.1498,.9388,.2111,.9388
                    ,.1862,.9345,.2309,.844,.2433,.7869,.7895,.2253,.7856,.1694,.505,.074,.5206,.0355,.8911,.7845,.251,.885,.2766,.8818,.1205,.9116,.1309,.876,.0818,.8386,.6921,.2315,.3125,.6897,.9686,.7983,.8922,.6161,.4949,.8843,.5053,.9175,.4786,.9175,.8141,.9744,.7991,.9329,.2288,.0007,.6806,.2638,.0648,.8372
                    ,.0461,.8365,.2073,.2724,.1695,.3278,.6445,.0237,.5805,.2705,.5642,.4768,.5729,.882,.2916,.2352,.5459,.156,.436,.6727,.352,.3885,.3298,.4674,.2068,.4359,.3534,.653,.3534,.5603,.3454,.4203,.3398,.3443,.4678,.6759,.0007,.7359,.0125,.6144,.1461,.1756,.1678,.0557,.1515,.6207,.6707,.6932,.681,.6773
                    ,.7109,.7156,.0571,.9894,.9596,.8695,.5941,.9817,.5654,.9792,.8602,.6714,.835,.6476,.8243,.6316,.5431,.9792,.9717,.0859,.9661,.1015,.9476,.6007,.7051,.908,.7709,.9024,.7709,.9366,.9379,.8829,.9663,.9033,.6911,.9504,.6911,.9504,.6707,.9366,.734,.978,.7107,.9615,.7141,.9572,.4852,.2718,.4871,.2784
                    ,.4556,.2724,.5116,.2778,.4871,.2784,.9801,.6254,.9661,.1015,.9569,.1208,.4547,.9678,.4713,.96,.4808,.9608,.4917,.9635,.5052,.9707,.5077,.9779,.4917,.9635,.4713,.96,.4808,.9608,.5293,.2736,.5116,.2778,.9836,.8988,.9663,.9033,.9801,.6254,.9735,.8698,.9596,.8695,.0747,.9903,.0571,.9894,.7107,.9615
                    ,.6911,.9504,.7197,.9391,.7192,.9309,.5654,.9792,.5431,.9792,.8814,.6587,.9133,.8356,.9133,.8356,.9137,.8271,.2916,.272,.3016,.272,.701,.9014,.7022,.9083,.6953,.9238,.7022,.9083,.7051,.908,.6997,.9348,.6953,.9238,.7197,.9391,.7894,.5199,.7904,.537,.7771,.5765,.7808,.6651,.7285,.4809,.7808,.6651
                    ,.5946,.7862,.6156,.7851,.6156,.7851,.6341,.7853,.35,.5692,.3515,.6194,.7743,.3389,.9125,.4413,.8905,.4459,.2286,.615,.1863,.6163,.7765,.0811,.7814,.1446,.7079,.0021,.3534,.9098,.8087,.2996,.9229,.5231,.9131,.4936,.9229,.5231,.7847,.8558,.6787,.8272,.8012,.0007,.8295,.0094,.8295,.0094,.5178,.325
                    ,.4772,.4474,.7743,.4413,.8055,.3994,.8936,.391,.927,.3907,.5003,.8764,.663,.2108,.4831,.8231,.5038,.8257,.4261,.7962,.4425,.7845,.472,.7353,.44,.7831,.7406,.0041,.7741,.0039,.1489,.5847,.4726,.7131,.472,.7353,.3534,.7236,.6063,.4924,.3737,.6773,.5582,.4809,.4925,.0231,.4808,.07,.4819,.0978
                    ,.0625,.0007,.0036,.4551,.5483,.2658,.1009,.0007,.052,.2959,.016,.2799,.2281,.9993,.7991,.8262,.8139,.8066,.5671,.2644,.406,.3015,.8139,.8066,.9106,.7935,.4939,.2495,.5053,.9587,.4799,.9587,.1009,.0007,.0979,.4566,.0979,.5306,.0855,.2809,.0862,.3351,.1099,.2749,.142,.2518,.6523,.4948,.4925,.1535
                    ,.4286,.1718,.0979,.5306,.0979,.5535,.7729,.456,.7405,.4657,.7097,.4278,.7405,.4657,.8905,.4459,.8677,.4678,.3673,.8614,.3534,.8217,.4749,.2797,.5206,.2921,.5178,.325,.5206,.2921,.403,.3593,.6787,.8272,.6866,.7988,.5071,.3906,.8981,.0964,.881,.1301,.891,.0007,.8967,.0379,.8087,.2996,.8147,.2693
                    ,.8643,.2879,.7676,.7993,.9704,.3491,.9237,.3894,.1293,.5047,.1641,.4954,.9191,.5799,.2026,.4798,.253,.4687,.9611,.0757,.9446,.0751,.9533,.0064,.5005,.2371,.8882,.8436,.9117,.8072,.8896,.8635,.5484,.2357,.8271,.5631,.8662,.5994,.8271,.5631,.8698,.3682,.856,.3894,.8967,.0379,.8981,.0964,.7118,.7935
                    ,.1641,.4954,.2026,.4798,.7745,.039,.7765,.0811,.2759,.616,.2286,.615,.8156,.5226,.8258,.4809,.4318,.8809,.4519,.9318,.8643,.2879,.8976,.3044,.9628,.2484,.5484,.2357,.9783,.0494,.9632,.1967,.9525,.2015,.4637,.9254,.4799,.9587,.7991,.8262,.139,.9401,.052,.2959,.0625,.0007,.5671,.2644,.5483,.2658
                    ,.0337,.5579,.4808,.07,.4819,.0978,.7171,.3379,.7431,.3345,.6063,.4924,.1863,.6163,.1524,.6194,.1489,.5847,.7079,.0021,.7406,.0041,.4831,.8231,.7842,.2088,.8055,.3994,.8936,.391,.9264,.4243,.927,.4395,.9125,.4413,.2847,.5207,.352,.489,.35,.5692,.5844,.6727,.4286,.1718,.6671,.5603,.2936,.1366
                    ,.3359,.0007,.5527,.6759,.0862,.3351,.0979,.4566,.1234,.0558,.0036,.4551,.7431,.3345,.7171,.3379,.7316,.2693,.5186,.7162,.472,.7353,.4726,.7131,.7991,.9878,.9268,.0757,.0472,.9642,.0759,.9617,.8936,.1917,.9,.1577,.9291,.2239,.9291,.2239,.8991,.2324,.0007,.9741,.0017,.9629,.0992,.3013,.1087,.2799
                    ,.1233,.2879,.1081,.3521,.9404,.9567,.9094,.9497,.9144,.9343,.9645,.954,.9404,.9567,.5609,.959,.6247,.9419,.933,.9833,.9124,.9916,.9094,.958,.957,.9871,.933,.9833,.5334,.9239,.5229,.9468,.5188,.9438,.5527,.9096,.5481,.9068,.5644,.8833,.9233,.2404,.8946,.2448,.8936,.2397,.9477,.2408,.9233,.2404
                    ,.9251,.2338,.9576,.9147,.143,.3373,.9144,.9343,.9234,.9147,.9441,.6611,.9346,.6618,.9166,.644,.918,.6541,.9166,.644,.9346,.6618,.9711,.644,.9685,.6512,.9551,.6584,.9551,.6584,.9441,.6611,.9166,.644,.9651,.2448,.9477,.2408,.9496,.2344,.957,.9871,.9794,.9697,.9817,.9469,.9645,.954,.9019,.0152
                    ,.8738,.9879,.1233,.2879,.1408,.3014,.5334,.9239,.5481,.9068,.5731,.9579,.5642,.9247,.0992,.3013,.9266,.0137,.9383,.2172,.9291,.2239,.9361,.0755,.9268,.0757,.9533,.0064,.9446,.0751,.9361,.0755,.9525,.2015,.9383,.2172,.3131,.272,.3122,.2754,.5594,.9666,.5466,.9666,.5463,.9475,.5466,.9666,.5344,.9563
                    ,.5609,.959,.5344,.9563,.5254,.949,.5463,.9475,.5468,.9356,.548,.9316,.5642,.9247,.5254,.949,.5229,.9468,.4005,.3177,.406,.3015,.403,.3593,.4005,.3177,.3763,.4439,.462,.3939,.4749,.2797,.3763,.4439,.5946,.7862,.5849,.7886,.5736,.7851,.5736,.7851,.5551,.7853,.5551,.7853,.5199,.7889,.6997,.9348
                    ,.5468,.9356
                ]),
                false);

                _i = new Float32Array(6104);
                _i.set([.5525,.2248,.1319,.0537,.4771,.3214,.1405,.0003,.3796,.2891,.2591,.0496,.7541,.1157,.0549,.016,.7793,.0782,.0782,0,.4785,.3122,.1626,0,.4,.3823,.1418,.039,.4623,.2831,.093,.0584,.5163,.1803,.1063,.097,.9086,.0878,0,0,.8968,.1005,0,0,.9125,.0868,0,0,.5852,.1473
                ,.1306,.0894,.5525,.2248,.1319,.0537,.3321,.2976,.2148,.1261,.8624,.1355,0,0,.9052,.0425,.0089,0,.7379,.1548,.0658,0,.5423,.1849,.1197,.1105,.7508,.1427,.0111,0,.7258,.1432,.0221,.0083,.4918,.2346,.1063,.0642,.606,.2026,.0288,.024,.5285,.259,.0629,.0367,.7578,.2054,0,0
                ,.8153,.1271,.014,0,.9441,.0171,0,0,.4647,.2572,.1702,.0204,.611,.1865,.1058,.053,.728,.1516,.0533,.0279,.871,.1177,0,0,.9739,0,0,0,.9087,.0907,0,0,.9807,0,0,0,.9255,.0729,0,0,.8617,.1216,0,0,.8897,.1001,0,0,.924,.0701
                ,0,0,.5677,.4319,0,0,.9087,.0907,0,0,.9255,.0729,0,0,.9212,.0638,0,0,.9088,.0761,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.9272,.0692,0,0,.9701,.0023,0,0,.8968,.1005,0,0,.98,0,0,0,.9125,.0868,0,0
                ,.9072,.0892,0,0,.9669,0,0,0,.8968,.1005,0,0,.8944,.0752,0,0,.733,.2095,.0466,0,.8568,.1082,.0103,0,.9149,.0496,.0124,0,.4772,.4763,.0277,0,.9709,0,0,0,.8944,.0752,0,0,.8568,.1082,.0103,0,.9707,0,0,0,.7739,.2167
                ,0,0,.8944,.0752,0,0,.7887,.095,.0878,0,.9495,0,0,0,.7478,.1344,.0912,0,.7739,.2167,0,0,.7672,.1875,.005,0,.4772,.4763,.0277,0,.8114,.1813,0,0,.7144,.2808,0,0,.6017,.275,.1156,0,.6709,.2312,.0773,0,.4772,.4763,.0277,0
                ,.9607,.0106,0,0,.5914,.2248,.1166,.0172,.7379,.1346,.0756,0,.7956,.0716,.0691,.0312,.7578,.2054,0,0,.871,.1177,0,0,.3718,.3718,.1231,.0909,.6812,.1189,.0959,.0123,.7793,.0782,.0782,0,.6828,.2441,.0729,0,.4785,.3122,.1626,0,.4939,.2195,.185,.0562,.6812,.1189
                ,.0959,.0123,.6904,.2253,.0335,.0335,.6031,.2393,.1382,0,.7956,.0716,.0691,.0312,.4882,.2339,.1942,.0589,.6072,.2475,.0585,.029,.4638,.2051,.1392,.1392,.5804,.2031,.0973,.0886,.3435,.3342,.2081,.0526,.5927,.1445,.0873,.0681,.3435,.3342,.2081,.0526,.561,.1339,.12,.1066,.6782,.1442,.0964,.0553
                ,.4361,.3152,.1611,.0544,.3231,.3193,.3193,.009,.8355,.0843,.0492,0,.728,.1516,.0533,.0279,.7464,.1032,.0834,.0081,.8607,.0704,.0086,0,.4361,.3152,.1611,.0544,.8291,.0682,.0646,0,.7225,.194,.043,0,.9838,0,0,0,.9766,0,0,0,.9797,0,0,0,.9097,.0283
                ,0,0,.9616,0,0,0,.9366,.0376,0,0,.8095,.1628,0,0,.9795,0,0,0,.9229,.0765,0,0,.9786,0,0,0,.9958,0,0,0,.9836,0,0,0,.9873,0,0,0,.9808,0,0,0,.9795,0,0,0,.9786,0,0,0
                ,.9825,0,0,0,.99,0,0,0,.9892,0,0,0,.9278,.0717,0,0,.9523,.0453,0,0,.96,.0299,0,0,.9892,0,0,0,.9426,.0572,0,0,.9407,.059,0,0,.9797,0,0,0,.9254,.074,0,0,.9873,0,0,0,.935,.0648
                ,0,0,.9355,.0644,0,0,.9492,.023,0,0,.6968,.1625,.1407,0,.9784,0,0,0,.9667,.0165,0,0,.9596,.0301,0,0,.916,.0833,0,0,.9458,.0537,0,0,.9582,.0321,0,0,.9423,.0557,0,0,.8865,.1104,0,0,.7157,.2754,0,0
                ,.8364,.1612,0,0,.9491,.0065,0,0,.7098,.2182,.072,0,.8311,.1482,0,0,.9981,0,0,0,.8381,.0827,.0792,0,.8719,.0811,.0441,0,.9835,0,0,0,.9044,.0571,.0269,0,.5837,.2099,.2063,0,.9715,0,0,0,.9895,0,0,0,.8731,.1033
                ,0,0,.9957,0,0,0,.9895,0,0,0,.9966,0,0,0,.9291,.0707,0,0,.8876,.0855,.0038,0,.7202,.2092,.0706,0,.8362,.151,0,0,.8731,.1033,0,0,.7451,.1908,.0641,0,.7201,.1292,.1058,.0213,.8246,.1492,0,0,.74,.136,.0931,0
                ,.6008,.379,0,0,.9551,.0011,0,0,.7641,.2039,.0071,0,.7921,.1424,.0515,0,.9607,.0208,0,0,.8731,.1033,0,0,.9895,0,0,0,.6813,.3003,0,0,.8876,.0855,.0038,0,.9715,0,0,0,.8099,.1837,0,0,.8364,.1612,0,0,.9669,0
                ,0,0,.5837,.2099,.2063,0,.9229,.0765,0,0,.9596,.0301,0,0,.9784,0,0,0,1.0022,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9751,0,0,0,.9786,0,0,0,.9958,0,0,0,.9938,0,0,0,.9786,0,0,0
                ,.9766,0,0,0,.8607,.0704,.0086,0,.6782,.1442,.0964,.0553,.8607,.0704,.0086,0,.8231,.054,.0307,.0063,.6072,.2475,.0585,.029,.5525,.2248,.1319,.0537,.5842,.1826,.1638,.0561,.871,.1177,0,0,.8624,.1355,0,0,.8816,.0554,.0437,0,.8114,.1813,0,0,.8279,.0929
                ,.0662,0,.7739,.2167,0,0,.8114,.1813,0,0,.8568,.1082,.0103,0,.6017,.275,.1156,0,.8568,.1082,.0103,0,.5713,.3127,.1031,0,.9125,.0868,0,0,.5677,.4319,0,0,.9646,.0151,0,0,.9649,.0005,0,0,.9212,.0638,0,0,.9072,.0892,0,0
                ,.9807,0,0,0,.9662,0,0,0,.871,.1177,0,0,.9702,0,0,0,.4626,.2225,.1853,.0557,.728,.1516,.0533,.0279,.9426,.0539,0,0,.9125,.0868,0,0,.5327,.1761,.1494,.0608,.4,.3823,.1418,.039,.5163,.1803,.1063,.097,.6072,.2475,.0585,.029,.5883,.2488
                ,.0925,.0331,.4771,.3214,.1405,.0003,.4013,.2924,.195,.0922,.3321,.2976,.2148,.1261,.6904,.2253,.0335,.0335,.6933,.1992,.0799,0,.6031,.2393,.1382,0,.7098,.2182,.072,0,.7202,.2092,.0706,0,.8381,.0827,.0792,0,.7451,.1908,.0641,0,.7919,.163,.04,0,.6968,.1625,.1407,0
                ,.9044,.0571,.0269,0,.5837,.2099,.2063,0,.8719,.0811,.0441,0,.8311,.1482,0,0,.9739,0,0,0,.9702,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.9739,0,0,0,.98,0,0,0,.9709,0,0,0,.4647,.2572
                ,.1702,.0204,.8252,.0294,.0294,.0125,.5054,.2109,.1497,.0623,.9052,.0425,.0089,0,.8622,.081,.0094,0,.4,.3823,.1418,.039,.4939,.2195,.185,.0562,.8622,.081,.0094,0,.8153,.1271,.014,0,.4,.3823,.1418,.039,.8622,.081,.0094,0,.7379,.1548,.0658,0,.8719,.0811,.0441,0
                ,.9044,.0571,.0269,0,.6031,.2393,.1382,0,.4882,.2339,.1942,.0589,.3321,.2976,.2148,.1261,.4319,.2727,.1387,.1387,.2886,.2316,.226,.226,.7157,.2754,0,0,.9715,0,0,0,.8364,.1612,0,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0855,.0038,0,.9959,0
                ,0,0,.7919,.163,.04,0,.8099,.1837,0,0,.9359,.0623,0,0,.9836,0,0,0,.9795,0,0,0,.9636,.0131,0,0,.689,.2658,.0262,0,.7308,.1244,.1244,0,.9903,0,0,0,.657,.1395,.0792,.0792,.657,.1395,.0792,.0792,.6207,.1559,.1408,.0155
                ,.611,.1865,.1058,.053,.4104,.4104,.0863,.013,.5291,.1339,.1339,.1218,.4785,.3122,.1626,0,.8624,.1355,0,0,.7578,.2054,0,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.8624,.1355,0,0,.8355,.0843,.0492,0,.9097,.0283,0,0,.8095,.1628,0,0,.689,.2658
                ,.0262,0,.9616,0,0,0,.9366,.0376,0,0,.7112,.1598,.1128,0,.9808,0,0,0,.9366,.0376,0,0,.8095,.1628,0,0,.7122,.2185,.0664,0,.9097,.0283,0,0,.9616,0,0,0,.8355,.0843,.0492,0,.9458,.0537,0,0,.9835,0,0,0
                ,.5933,.202,.202,0,.5933,.202,.202,0,.7112,.1598,.1128,0,.4361,.3152,.1611,.0544,.9757,0,0,0,.9829,0,0,0,.9697,.0017,0,0,.8423,.1277,0,0,.8667,.1136,0,0,.7178,.1796,.0736,0,.9702,0,0,0,.9507,.0271,0,0,.7723,.175
                ,.0295,0,.4989,.3399,.1305,0,.9702,0,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.7723,.175,.0295,0,.5053,.3194,.1304,.0166,.4989,.3399,.1305,0,.8191,.14,0,0,.7805,.1746,0,0,.6178,.2816,.0556,.0277,.9347,.0488,0,0,.95,.0262,0,0
                ,.9311,.0527,0,0,.9517,.0231,0,0,.9687,0,0,0,.95,.0262,0,0,.9702,0,0,0,.9772,0,0,0,.9582,.0129,0,0,.9829,0,0,0,.9844,0,0,0,.9702,0,0,0,.9868,0,0,0,.992,0,0,0,.9829,0
                ,0,0,.8794,.0909,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.8094,.1375,.02,0,.8667,.1136,0,0,.9381,.0467,0,0,.7723,.175,.0295,0,.8771,.1167,0,0,.9574,.0224,0,0,.8667,.1136,0,0
                ,.9311,.0527,0,0,.9199,.0613,0,0,.921,.0604,0,0,.9507,.0271,0,0,.9314,.0511,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9652,.0146,0,0,.9697,.0017,0,0,.9574,.0224,0,0,.9936,0
                ,0,0,.9987,0,0,0,.9983,0,0,0,.9844,0,0,0,.9897,0,0,0,.9959,0,0,0,.9934,0,0,0,.9839,0,0,0,.9705,0,0,0,.9959,0,0,0,.9987,0,0,0,.9843,0,0,0,.9679,.0109,0,0
                ,.9757,0,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.8919,.0915,0,0,.9775,0,0,0,.9868,0,0,0,.9843,0,0,0,.9416,.0373,0,0,.9245,.057,0,0,.9314,.0511,0,0,.9517,.0231
                ,0,0,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.8514,.0667,.0256,.0252,.9001,.0563,0,0,.6152,.289,.0399,.0399,.5947,.2662,.0655,.0655,.4989,.3399,.1305,0,.518,.22,.2176,0,.518,.22,.2176,0,.701,.1407,.0974,.0373,.761,.1897,0,0
                ,.4771,.3214,.1405,.0003,.8094,.1375,.02,0,.8138,.1394,.0032,0,.7805,.1746,0,0,.8191,.1402,0,0,.8047,.1538,0,0,.8047,.1538,0,0,.8399,.1245,0,0,.8443,.121,0,0,.8786,.0935,0,0,.8191,.1402,0,0,.8832,.0901,0,0,.8191,.14
                ,0,0,.8761,.0953,0,0,.9122,.0672,0,0,.8828,.0903,0,0,.8954,.0803,0,0,.8985,.0779,0,0,.8828,.0903,0,0,.9245,.057,0,0,.921,.0604,0,0,.9122,.0673,0,0,.7543,.2312,0,0,.9611,.0231,0,0,.9611,.0231,0,0
                ,.7097,.2579,.0074,0,.7677,.1278,.0888,0,.9495,0,0,0,.7897,.1803,0,0,.7543,.2312,0,0,.9551,.0011,0,0,.5209,.4758,0,0,.8389,.1201,0,0,.8669,.0653,.0147,.0132,.7248,.1225,.1125,0,.9135,.0775,0,0,.9878,0,0,0,.9971,0
                ,0,0,.9143,.0826,0,0,.5037,.4935,0,0,1.0025,0,0,0,.9631,.0231,0,0,.9607,.0106,0,0,.9551,.0011,0,0,.8076,.1443,0,0,.8112,.142,0,0,.8075,.1444,0,0,.8075,.1439,.0042,0,.8097,.1427,0,0,.7805,.1746,0,0
                ,.8108,.1459,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7832,.1644,.0255,0,.7723,.175,.0295,0,.8024,.1482,.0081,0,.8117,.1415,.0006,0,.8176,.1387
                ,0,0,.8126,.141,.0014,0,.5525,.2248,.1319,.0537,.4771,.3214,.1405,.0003,.6072,.2475,.0585,.029,.7541,.1157,.0549,.016,.7793,.0782,.0782,0,.8252,.0294,.0294,.0125,.5163,.1803,.1063,.097,.4939,.2195,.185,.0562,.4,.3823,.1418,.039,.9086,.0878,0,0,.8968,.1005,0,0
                ,.8897,.1001,0,0,.5852,.1473,.1306,.0894,.5525,.2248,.1319,.0537,.8231,.054,.0307,.0063,.9052,.0425,.0089,0,.8624,.1355,0,0,.7379,.1548,.0658,0,.7258,.1432,.0221,.0083,.6207,.1559,.1408,.0155,.5423,.1849,.1197,.1105,.5285,.259,.0629,.0367,.5291,.1339,.1339,.1218,.4918,.2346
                ,.1063,.0642,.7578,.2054,0,0,.8153,.1271,.014,0,.4939,.2195,.185,.0562,.728,.1516,.0533,.0279,.5054,.2109,.1497,.0623,.4647,.2572,.1702,.0204,.871,.1177,0,0,.9441,.0171,0,0,.9807,0,0,0,.9087,.0907,0,0,.9255,.0729,0,0,.8617,.1216,0,0
                ,.924,.0701,0,0,.5677,.4319,0,0,.9426,.0539,0,0,.9255,.0729,0,0,.9212,.0638,0,0,.7144,.2808,0,0,.9088,.0761,0,0,.9646,.0151,0,0,.9272,.0692,0,0,.5677,.4319,0,0,.98,0,0,0,.8968,.1005,0,0,.9125,.0868
                ,0,0,.9669,0,0,0,.9072,.0892,0,0,.8968,.1005,0,0,.733,.2095,.0466,0,.8944,.0752,0,0,.8568,.1082,.0103,0,.4772,.4763,.0277,0,.9149,.0496,.0124,0,.9709,0,0,0,.8944,.0752,0,0,.9707,0,0,0,.7739,.2167,0,0
                ,.9649,.0005,0,0,.9495,0,0,0,.7887,.095,.0878,0,.7478,.1344,.0912,0,.7672,.1875,.005,0,.7739,.2167,0,0,.8114,.1813,0,0,.4772,.4763,.0277,0,.7144,.2808,0,0,.6709,.2312,.0773,0,.6017,.275,.1156,0,.4772,.4763,.0277,0,.9607,.0106
                ,0,0,.5914,.2248,.1166,.0172,.5713,.3127,.1031,0,.7956,.0716,.0691,.0312,.7578,.2054,0,0,.4104,.4104,.0863,.013,.3718,.3718,.1231,.0909,.6828,.2441,.0729,0,.7793,.0782,.0782,0,.4785,.3122,.1626,0,.6812,.1189,.0959,.0123,.6904,.2253,.0335,.0335,.7898,.0825,.0825,.0501
                ,.7956,.0716,.0691,.0312,.4882,.2339,.1942,.0589,.5842,.1826,.1638,.0561,.5804,.2031,.0973,.0886,.4638,.2051,.1392,.1392,.3435,.3342,.2081,.0526,.561,.1339,.12,.1066,.4638,.2051,.1392,.1392,.5927,.1445,.0873,.0681,.6782,.1442,.0964,.0553,.4626,.2225,.1853,.0557,.8355,.0843,.0492,0,.3231,.3193
                ,.3193,.009,.728,.1516,.0533,.0279,.7464,.1032,.0834,.0081,.611,.1865,.1058,.053,.4361,.3152,.1611,.0544,.8291,.0682,.0646,0,.6782,.1442,.0964,.0553,.9838,0,0,0,.9766,0,0,0,.9751,0,0,0,.8607,.0704,.0086,0,.9097,.0283,0,0,.7225,.194,.043,0
                ,.9366,.0376,0,0,.9229,.0765,0,0,.9795,0,0,0,.9786,0,0,0,.9958,0,0,0,.9836,0,0,0,.9903,0,0,0,.9808,0,0,0,.9795,0,0,0,.9636,.0131,0,0,.9825,0,0,0,.99,0,0,0,.9938,0
                ,0,0,.9278,.0717,0,0,.9523,.0453,0,0,.9254,.074,0,0,.9892,0,0,0,.9426,.0572,0,0,.99,0,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.935,.0648,0,0,.9836,0,0,0,.6968,.1625,.1407,0
                ,.9492,.023,0,0,.9784,0,0,0,.9355,.0644,0,0,.9667,.0165,0,0,.9458,.0537,0,0,.916,.0833,0,0,.9407,.059,0,0,.9582,.0321,0,0,.8865,.1104,0,0,.7157,.2754,0,0,.6813,.3003,0,0,.8311,.1482,0,0,.9669,0
                ,0,0,.9491,.0065,0,0,.9981,0,0,0,.8381,.0827,.0792,0,1.0022,0,0,0,.9835,0,0,0,.9044,.0571,.0269,0,.9959,0,0,0,.9715,0,0,0,.9895,0,0,0,.9966,0,0,0,.9957,0,0,0,.9895,0,0,0
                ,.9607,.0208,0,0,.8876,.0855,.0038,0,.9291,.0707,0,0,.7202,.2092,.0706,0,.8731,.1033,0,0,.8362,.151,0,0,.7451,.1908,.0641,0,.8246,.1492,0,0,.7201,.1292,.1058,.0213,.74,.136,.0931,0,.8279,.0929,.0662,0,.6008,.379,0,0,.7641,.2039
                ,.0071,0,.9551,.0011,0,0,.7921,.1424,.0515,0,.8731,.1033,0,0,.7451,.1908,.0641,0,.8876,.0855,.0038,0,.7202,.2092,.0706,0,.8099,.1837,0,0,.9715,0,0,0,.8364,.1612,0,0,.5837,.2099,.2063,0,.9835,0,0,0,.9229,.0765,0,0
                ,.9596,.0301,0,0,.9355,.0644,0,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9873,0,0,0,.9786,0,0,0,.9808,0,0,0,.9958,0,0,0,.9786,0,0,0,.9766,0,0,0,.8607,.0704,.0086,0,.6782,.1442
                ,.0964,.0553,.8607,.0704,.0086,0,.728,.1516,.0533,.0279,.6072,.2475,.0585,.029,.871,.1177,0,0,.7956,.0716,.0691,.0312,.7248,.1225,.1125,0,.8114,.1813,0,0,.7739,.2167,0,0,.8114,.1813,0,0,.7144,.2808,0,0,.8568,.1082,.0103,0,.9709,0,0,0
                ,.8568,.1082,.0103,0,.9125,.0868,0,0,.5677,.4319,0,0,.9646,.0151,0,0,.9072,.0892,0,0,.9212,.0638,0,0,.9807,0,0,0,.9255,.0729,0,0,.9702,0,0,0,.871,.1177,0,0,.4647,.2572,.1702,.0204,.9125,.0868,0,0,.9086,.0878
                ,0,0,.5327,.1761,.1494,.0608,.4,.3823,.1418,.039,.7379,.1548,.0658,0,.6072,.2475,.0585,.029,.5883,.2488,.0925,.0331,.4882,.2339,.1942,.0589,.3321,.2976,.2148,.1261,.3796,.2891,.2591,.0496,.6031,.2393,.1382,0,.761,.1897,0,0,.6904,.2253,.0335,.0335,.7098,.2182,.072,0
                ,.7202,.2092,.0706,0,.5837,.2099,.2063,0,.8381,.0827,.0792,0,.7451,.1908,.0641,0,.6968,.1625,.1407,0,.7919,.163,.04,0,.6968,.1625,.1407,0,.9044,.0571,.0269,0,.5837,.2099,.2063,0,.8719,.0811,.0441,0,.8381,.0827,.0792,0,.8311,.1482,0,0,.9702,0
                ,0,0,.9086,.0878,0,0,.9739,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.8153,.1271,.014,0,.9739,0,0,0,.9441,.0171,0,0,.98,0,0,0,.9662,0,0,0,.9709,0,0,0,.9807,0,0,0
                ,.9701,.0023,0,0,.5163,.1803,.1063,.097,.606,.2026,.0288,.024,.7508,.1427,.0111,0,.4623,.2831,.093,.0584,.9052,.0425,.0089,0,.4,.3823,.1418,.039,.8622,.081,.0094,0,.8622,.081,.0094,0,.8153,.1271,.014,0,.4,.3823,.1418,.039,.8622,.081,.0094,0,.7379,.1548
                ,.0658,0,.8311,.1482,0,0,.9044,.0571,.0269,0,.4882,.2339,.1942,.0589,.6933,.1992,.0799,0,.2886,.2316,.226,.226,.4013,.2924,.195,.0922,.7157,.2754,0,0,.9715,0,0,0,.8876,.0855,.0038,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0855,.0038,0
                ,.8719,.0811,.0441,0,.7919,.163,.04,0,.8099,.1837,0,0,.9423,.0557,0,0,.9836,0,0,0,.96,.0299,0,0,.9795,0,0,0,.7308,.1244,.1244,0,.8095,.1628,0,0,.657,.1395,.0792,.0792,.7308,.1244,.1244,0,.6207,.1559,.1408,.0155,.4361,.3152
                ,.1611,.0544,.611,.1865,.1058,.053,.4104,.4104,.0863,.013,.5291,.1339,.1339,.1218,.8624,.1355,0,0,.6812,.1189,.0959,.0123,.3718,.3718,.1231,.0909,.3321,.2976,.2148,.1261,.7379,.1548,.0658,0,.4785,.3122,.1626,0,.8355,.0843,.0492,0,.9097,.0283,0,0,.689,.2658,.0262,0
                ,.8095,.1628,0,0,.9616,0,0,0,.9366,.0376,0,0,.7122,.2185,.0664,0,.7112,.1598,.1128,0,.9366,.0376,0,0,.8095,.1628,0,0,.7122,.2185,.0664,0,.9097,.0283,0,0,.9616,0,0,0,.8355,.0843,.0492,0,.9359,.0623,0,0,.9458,.0537
                ,0,0,.9835,0,0,0,.9596,.0301,0,0,.689,.2658,.0262,0,.5933,.202,.202,0,.7122,.2185,.0664,0,.5933,.202,.202,0,.7112,.1598,.1128,0,.7122,.2185,.0664,0,.657,.1395,.0792,.0792,.9757,0,0,0,.9829,0,0,0,.9868,0,0,0
                ,.8423,.1277,0,0,.8667,.1136,0,0,.8771,.1167,0,0,.9697,.0017,0,0,.9702,0,0,0,.7178,.1796,.0736,0,.7723,.175,.0295,0,.9416,.0373,0,0,.9702,0,0,0,.9507,.0271,0,0,.5053,.3194,.1304,.0166,.7723,.175,.0295,0,.4989,.3399
                ,.1305,0,.6152,.289,.0399,.0399,.8191,.14,0,0,.8138,.1394,.0032,0,.9347,.0488,0,0,.95,.0262,0,0,.9517,.0231,0,0,.9517,.0231,0,0,.9687,0,0,0,.9705,0,0,0,.9702,0,0,0,.9772,0,0,0,.9844,0,0,0
                ,.9829,0,0,0,.9844,0,0,0,.992,0,0,0,.9868,0,0,0,.9936,0,0,0,.8191,.14,0,0,.8794,.0909,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.9381,.0467,0,0,.8667,.1136,0,0,.9381,.0467
                ,0,0,.9574,.0224,0,0,.8771,.1167,0,0,.9652,.0146,0,0,.921,.0604,0,0,.9311,.0527,0,0,.9347,.0488,0,0,.9314,.0511,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0,.9697,.0017,0,0
                ,.9652,.0146,0,0,.9697,.0017,0,0,.9757,0,0,0,.9987,0,0,0,.9956,0,0,0,.9897,0,0,0,.9844,0,0,0,.9959,0,0,0,.9839,0,0,0,.9843,0,0,0,.9987,0,0,0,.9959,0,0,0,.9983,0
                ,0,0,.9679,.0109,0,0,.9757,0,0,0,.9775,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.8919,.0915,0,0,.9775,0,0,0,.9877,0,0,0,.9687,0,0,0
                ,.9245,.057,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.8094,.1375,.02,0,.9582,.0129,0,0,.9582,.0129,0,0,.6178,.2816,.0556,.0277,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.8514,.0667,.0256,.0252,.8919,.0915,0,0,.9001,.0563
                ,0,0,.6152,.289,.0399,.0399,.518,.22,.2176,0,.518,.22,.2176,0,.701,.1407,.0974,.0373,.761,.1897,0,0,.9001,.0563,0,0,.4771,.3214,.1405,.0003,.4319,.2727,.1387,.1387,.8094,.1375,.02,0,.7805,.1746,0,0,.8191,.1402,0,0,.8191,.14,0,0
                ,.8047,.1538,0,0,.8399,.1245,0,0,.8191,.1402,0,0,.8786,.0935,0,0,.8191,.1402,0,0,.8832,.0901,0,0,.8828,.0903,0,0,.8191,.14,0,0,.8191,.1402,0,0,.8832,.0901,0,0,.9122,.0672,0,0,.8761,.0953,0,0,.8954,.0803
                ,0,0,.8985,.0779,0,0,.8828,.0903,0,0,.9245,.057,0,0,.9019,.074,0,0,.9122,.0673,0,0,.7543,.2312,0,0,.9611,.0231,0,0,.7097,.2579,.0074,0,.9611,.0231,0,0,.7677,.1278,.0888,0,.7897,.1803,0,0,.9495,0,0,0
                ,.9551,.0011,0,0,.5209,.4758,0,0,.8816,.0554,.0437,0,.8389,.1201,0,0,.9135,.0775,0,0,.9878,0,0,0,.5037,.4935,0,0,.9143,.0826,0,0,.8669,.0653,.0147,.0132,1.0025,0,0,0,.9631,.0231,0,0,.9607,.0106,0,0,.9551,.0011
                ,0,0,.7379,.1346,.0756,0,.8076,.1443,0,0,.8097,.1427,0,0,.8075,.1439,.0042,0,.7805,.1746,0,0,.8108,.1459,0,0,.8027,.1537,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0,.8126,.141,.0014,0
                ,.8094,.1375,.02,0,.7832,.1644,.0255,0,.8024,.1482,.0081,0,.8117,.1415,.0006,0,.9122,.0672,0,0,.921,.0604,0,0,.9122,.0672,0,0,.921,.0604,0,0,.6072,.2475,.0585,.029,.5525,.2248,.1319,.0537,.4939,.2195,.185,.0562,.9072,.0892,0,0,.9087,.0907
                ,0,0,.9255,.0729,0,0,.5677,.4319,0,0,.8968,.1005,0,0,.6017,.275,.1156,0,.8944,.0752,0,0,.7739,.2167,0,0,.4772,.4763,.0277,0,.7578,.2054,0,0,.4104,.4104,.0863,.013,.7793,.0782,.0782,0,.7898,.0825,.0825,.0501,.7578,.2054,0,0
                ,.6812,.1189,.0959,.0123,.7898,.0825,.0825,.0501,.7956,.0716,.0691,.0312,.4638,.2051,.1392,.1392,.3435,.3342,.2081,.0526,.7112,.1598,.1128,0,.728,.1516,.0533,.0279,.611,.1865,.1058,.053,.4361,.3152,.1611,.0544,.6782,.1442,.0964,.0553,.9795,0,0,0,.9892,0,0,0,.99,0
                ,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.9836,0,0,0,.7919,.163,.04,0,.9966,0,0,0,.9895,0,0,0,.8099,.1837,0,0,.8731,.1033,0,0,.9611,.0231,0,0,.7451,.1908,.0641,0,.8731,.1033,0,0
                ,.7202,.2092,.0706,0,.8876,.0855,.0038,0,.9715,0,0,0,.8731,.1033,0,0,.9835,0,0,0,.5837,.2099,.2063,0,.9229,.0765,0,0,.9458,.0537,0,0,.9355,.0644,0,0,.9596,.0301,0,0,.9784,0,0,0,.6968,.1625,.1407,0,.99,0
                ,0,0,.9873,0,0,0,.9355,.0644,0,0,.9808,0,0,0,.9786,0,0,0,.9958,0,0,0,.9873,0,0,0,.9786,0,0,0,.9229,.0765,0,0,.8607,.0704,.0086,0,.9616,0,0,0,.6782,.1442,.0964,.0553,.728,.1516,.0533,.0279
                ,.8607,.0704,.0086,0,.6072,.2475,.0585,.029,.7956,.0716,.0691,.0312,.871,.1177,0,0,.8114,.1813,0,0,.9607,.0106,0,0,.7739,.2167,0,0,.7144,.2808,0,0,.8114,.1813,0,0,.9495,0,0,0,.9709,0,0,0,.8568,.1082,.0103,0,.8568,.1082
                ,.0103,0,.9125,.0868,0,0,.98,0,0,0,.9646,.0151,0,0,.7144,.2808,0,0,.9212,.0638,0,0,.9255,.0729,0,0,.9072,.0892,0,0,.9255,.0729,0,0,.9807,0,0,0,.871,.1177,0,0,.9739,0,0,0,.4647,.2572,.1702,.0204
                ,.728,.1516,.0533,.0279,.9086,.0878,0,0,.9125,.0868,0,0,.7379,.1548,.0658,0,.4,.3823,.1418,.039,.6072,.2475,.0585,.029,.4882,.2339,.1942,.0589,.6904,.2253,.0335,.0335,.7098,.2182,.072,0,.5837,.2099,.2063,0,.7202,.2092,.0706,0,.8381,.0827,.0792,0,.6968,.1625
                ,.1407,0,.7451,.1908,.0641,0,.9044,.0571,.0269,0,.8719,.0811,.0441,0,.8381,.0827,.0792,0,.8311,.1482,0,0,.7098,.2182,.072,0,.9739,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.8153,.1271,.014,0,.9739,0,0,0
                ,.9441,.0171,0,0,.98,0,0,0,.9646,.0151,0,0,.9807,0,0,0,.9709,0,0,0,.5163,.1803,.1063,.097,.4647,.2572,.1702,.0204,.9052,.0425,.0089,0,.4,.3823,.1418,.039,.8622,.081,.0094,0,.8622,.081,.0094,0,.9212,.0638,0,0,.4,.3823
                ,.1418,.039,.8311,.1482,0,0,.8719,.0811,.0441,0,.6031,.2393,.1382,0,.3321,.2976,.2148,.1261,.7157,.2754,0,0,.8876,.0855,.0038,0,.9715,0,0,0,.9708,.0137,0,0,.9966,0,0,0,.7919,.163,.04,0,.8099,.1837,0,0,.9836,0,0,0
                ,.9797,0,0,0,.9892,0,0,0,.9795,0,0,0,.657,.1395,.0792,.0792,.3435,.3342,.2081,.0526,.6812,.1189,.0959,.0123,.4785,.3122,.1626,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.8355,.0843,.0492,0,.8095,.1628,0,0,.9616,0,0,0,.9958,0
                ,0,0,.7122,.2185,.0664,0,.9808,0,0,0,.9366,.0376,0,0,.689,.2658,.0262,0,.9097,.0283,0,0,.9458,.0537,0,0,.9784,0,0,0,.9596,.0301,0,0,.9835,0,0,0,.7122,.2185,.0664,0,.5933,.202,.202,0,.7122,.2185,.0664,0
                ,.7112,.1598,.1128,0,.9868,0,0,0,.8771,.1167,0,0,.9702,0,0,0,.9582,.0129,0,0,.7723,.175,.0295,0,.8094,.1375,.02,0,.8138,.1394,.0032,0,.9517,.0231,0,0,.9702,0,0,0,.9844,0,0,0,.9829,0,0,0,.8191,.14
                ,0,0,.7723,.175,.0295,0,.9381,.0467,0,0,.8667,.1136,0,0,.9652,.0146,0,0,.9347,.0488,0,0,.9347,.0488,0,0,.9311,.0527,0,0,.9507,.0271,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.9574,.0224,0,0,.9697,.0017,0,0
                ,.9507,.0271,0,0,.9757,0,0,0,.9697,.0017,0,0,.9956,0,0,0,.9844,0,0,0,.9934,0,0,0,.9839,0,0,0,.9897,0,0,0,.9934,0,0,0,.9959,0,0,0,.9983,0,0,0,.9987,0,0,0,.9959,0
                ,0,0,.9897,0,0,0,.9934,0,0,0,.9775,0,0,0,.9757,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9956,0,0,0,.8876,.1087,0,0,.8771,.1167,0,0,.9877,0,0,0,.9868,0,0,0,.9416,.0373,0,0
                ,.9347,.0488,0,0,.9245,.057,0,0,.9019,.074,0,0,.9582,.0129,0,0,.9517,.0231,0,0,.4989,.3399,.1305,0,.518,.22,.2176,0,.518,.22,.2176,0,.4771,.3214,.1405,.0003,.7805,.1746,0,0,.8191,.14,0,0,.8047,.1538,0,0,.8191,.1402
                ,0,0,.8828,.0903,0,0,.8191,.1402,0,0,.8191,.14,0,0,.9122,.0672,0,0,.8828,.0903,0,0,.9245,.057,0,0,.9611,.0231,0,0,.7543,.2312,0,0,.9495,0,0,0,.9551,.0011,0,0,.9607,.0106,0,0,.9551,.0011,0,0
                ,.7805,.1746,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.4785,.3122,.1626,0,.7793,.0782,.0782,0,.9125,.0868,0,0,.3321,.2976,.2148,.1261,.5525,.2248,.1319,.0537,.7508,.1427,.0111,0,.6207,.1559,.1408,.0155,.606,.2026,.0288,.024,.5291,.1339
                ,.1339,.1218,.611,.1865,.1058,.053,.9739,0,0,0,.9072,.0892,0,0,.9087,.0907,0,0,.9255,.0729,0,0,.9087,.0907,0,0,.8968,.1005,0,0,.6017,.275,.1156,0,.8568,.1082,.0103,0,.8944,.0752,0,0,.8944,.0752,0,0,.7739,.2167,0,0
                ,.4772,.4763,.0277,0,.871,.1177,0,0,.7578,.2054,0,0,.6812,.1189,.0959,.0123,.4104,.4104,.0863,.013,.7793,.0782,.0782,0,.7578,.2054,0,0,.6031,.2393,.1382,0,.6904,.2253,.0335,.0335,.7956,.0716,.0691,.0312,.6072,.2475,.0585,.029,.3231,.3193,.3193,.009,.4638,.2051
                ,.1392,.1392,.3435,.3342,.2081,.0526,.4638,.2051,.1392,.1392,.4361,.3152,.1611,.0544,.7112,.1598,.1128,0,.3231,.3193,.3193,.009,.728,.1516,.0533,.0279,.9797,0,0,0,.9616,0,0,0,.9873,0,0,0,.9786,0,0,0,.9795,0,0,0,.9892,0,0,0
                ,.7919,.163,.04,0,.9596,.0301,0,0,.8364,.1612,0,0,.7098,.2182,.072,0,.8719,.0811,.0441,0,.5837,.2099,.2063,0,.8731,.1033,0,0,.9966,0,0,0,.9895,0,0,0,.8099,.1837,0,0,.9611,.0231,0,0,.9895,0,0,0,.8731,.1033
                ,0,0,.8876,.0855,.0038,0,.8731,.1033,0,0,.9715,0,0,0,.7098,.2182,.072,0,.9458,.0537,0,0,.9229,.0765,0,0,.6968,.1625,.1407,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9786,0,0,0,.9873,0,0,0
                ,.9958,0,0,0,.9229,.0765,0,0,.9786,0,0,0,.9616,0,0,0,.8607,.0704,.0086,0,.6782,.1442,.0964,.0553,.8607,.0704,.0086,0,.5525,.2248,.1319,.0537,.6072,.2475,.0585,.029,.8624,.1355,0,0,.871,.1177,0,0,.9607,.0106,0,0,.8114,.1813
                ,0,0,.7739,.2167,0,0,.8114,.1813,0,0,.9495,0,0,0,.6017,.275,.1156,0,.8568,.1082,.0103,0,.8568,.1082,.0103,0,.98,0,0,0,.9125,.0868,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.9072,.0892,0,0,.9255,.0729,0,0
                ,.9212,.0638,0,0,.9807,0,0,0,.9739,0,0,0,.871,.1177,0,0,.728,.1516,.0533,.0279,.4647,.2572,.1702,.0204,.9125,.0868,0,0,.5163,.1803,.1063,.097,.4,.3823,.1418,.039,.6072,.2475,.0585,.029,.4771,.3214,.1405,.0003,.761,.1897,0,0,.7202,.2092
                ,.0706,0,.8381,.0827,.0792,0,.7451,.1908,.0641,0,.9044,.0571,.0269,0,.8311,.1482,0,0,.9702,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.9739,0,0,0,.9646,.0151,0,0,.98,0,0,0,.9709,0,0,0
                ,.4647,.2572,.1702,.0204,.5163,.1803,.1063,.097,.5927,.1445,.0873,.0681,.606,.2026,.0288,.024,.8252,.0294,.0294,.0125,.7508,.1427,.0111,0,.9052,.0425,.0089,0,.8622,.081,.0094,0,.4,.3823,.1418,.039,.4939,.2195,.185,.0562,.9212,.0638,0,0,.8622,.081,.0094,0,.4,.3823
                ,.1418,.039,.8311,.1482,0,0,.4882,.2339,.1942,.0589,.2886,.2316,.226,.226,.4319,.2727,.1387,.1387,.7157,.2754,0,0,.9715,0,0,0,.9966,0,0,0,.9708,.0137,0,0,.8719,.0811,.0441,0,.7919,.163,.04,0,.8099,.1837,0,0,.8364,.1612,0,0
                ,.9836,0,0,0,.9795,0,0,0,.9892,0,0,0,.7308,.1244,.1244,0,.689,.2658,.0262,0,.9797,0,0,0,.6207,.1559,.1408,.0155,.657,.1395,.0792,.0792,.4361,.3152,.1611,.0544,.611,.1865,.1058,.053,.3435,.3342,.2081,.0526,.6031,.2393,.1382,0,.4104,.4104
                ,.0863,.013,.7578,.2054,0,0,.6812,.1189,.0959,.0123,.3718,.3718,.1231,.0909,.2886,.2316,.226,.226,.3321,.2976,.2148,.1261,.7379,.1548,.0658,0,.8624,.1355,0,0,.4785,.3122,.1626,0,.8355,.0843,.0492,0,.9958,0,0,0,.9808,0,0,0,.9366,.0376,0,0
                ,.7122,.2185,.0664,0,.9097,.0283,0,0,.9784,0,0,0,.9458,.0537,0,0,.9835,0,0,0,.9596,.0301,0,0,.689,.2658,.0262,0,.7308,.1244,.1244,0,.5933,.202,.202,0,.5933,.202,.202,0,.3231,.3193,.3193,.009,.7112,.1598,.1128,0,.9507,.0271
                ,0,0,.4989,.3399,.1305,0,.9582,.0129,0,0,.9702,0,0,0,.8094,.1375,.02,0,.7723,.175,.0295,0,.6152,.289,.0399,.0399,.6152,.289,.0399,.0399,.7805,.1746,0,0,.9311,.0527,0,0,.95,.0262,0,0,.9517,.0231,0,0,.95,.0262,0,0
                ,.9687,0,0,0,.9702,0,0,0,.9829,0,0,0,.9702,0,0,0,.9844,0,0,0,.9868,0,0,0,.9829,0,0,0,.8191,.14,0,0,.7723,.175,.0295,0,.8667,.1136,0,0,.7723,.175,.0295,0,.9381,.0467,0,0,.8771,.1167
                ,0,0,.8667,.1136,0,0,.9347,.0488,0,0,.9199,.0613,0,0,.9311,.0527,0,0,.9314,.0511,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.9574,.0224,0,0,.9381,.0467,0,0,.9507,.0271,0,0,.9652,.0146,0,0,.9574,.0224,0,0
                ,.9697,.0017,0,0,.9987,0,0,0,.9934,0,0,0,.9844,0,0,0,.9934,0,0,0,.9934,0,0,0,.9897,0,0,0,.9843,0,0,0,.9839,0,0,0,.9843,0,0,0,.9897,0,0,0,.9987,0,0,0,.9983,0
                ,0,0,.9959,0,0,0,.9959,0,0,0,.9934,0,0,0,.9843,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9757,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.9877,0,0,0,.9868,0,0,0,.8876,.1087,0,0
                ,.9775,0,0,0,.9687,0,0,0,.9843,0,0,0,.9347,.0488,0,0,.9416,.0373,0,0,.8138,.1394,.0032,0,.9245,.057,0,0,.9517,.0231,0,0,.8919,.0915,0,0,.5947,.2662,.0655,.0655,.6152,.289,.0399,.0399,.518,.22,.2176,0,.4989,.3399
                ,.1305,0,.761,.1897,0,0,.4771,.3214,.1405,.0003,.518,.22,.2176,0,.4319,.2727,.1387,.1387,.5947,.2662,.0655,.0655,.7805,.1746,0,0,.8047,.1538,0,0,.8047,.1538,0,0,.8443,.121,0,0,.8828,.0903,0,0,.8443,.121,0,0,.8832,.0901,0,0
                ,.8191,.14,0,0,.8832,.0901,0,0,.9122,.0673,0,0,.8828,.0903,0,0,.9122,.0672,0,0,.921,.0604,0,0,.9245,.057,0,0,.9122,.0673,0,0,.9199,.0613,0,0,.7543,.2312,0,0,.9611,.0231,0,0,.9495,0,0,0,.7543,.2312
                ,0,0,.9551,.0011,0,0,.9971,0,0,0,.9607,.0106,0,0,.9551,.0011,0,0,.7805,.1746,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7723,.175,.0295,0,.9122,.0672,0,0
                ,.9122,.0672]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(1526);
                _i.set([319358986,118032904,319424776,101321479,1247751,722698,101124619,470418951,168494599,3083,2828,2828,151524106,319358986,319358986,2571,657163,657163,470091526,329223,84608519,319162887,168101638,470419206,2826,461323,2571,185015302,117769756,84346396,2571,11,2828,12,2828,3083,3083,3083,2828,2828,2828,3083,3340,3340,3340,2828,2828,2828,12,2828
                ,2828,12,2828,3340,856076,856076,856076,1051661,12,3340,856076,12,3340,3340,790029,14,921613,3340,1051916,1051661,3085,3340,856076,1051661,1051661,3597,286134285,1052173,117967626,2826,2571,151524106,134681354,1247751,526855,722698,101124874,134681354,319424519,657415,117967626,185010186,118032394,505153029,503711004,503716869,470222086,503716869,117775366,117769756
                ,117840901,102636549,1967388,84346396,117769756,329244,117840901,394524,394524,28,28,28,1308,28,1308,1308,28,7452]);
                REPEAT(_i, 118, 10, 28);
                _i.set([7452,7197,7197,28,7452,7452,28,7452,28,7452,7452,285,1901057,29,7197,7197,7452,7197,7197,7197,513,258,513,541,1901057,258,29,131357,66077,29,131357,1901057,2,2,258,2,2,2,7426,1900802,1900802,513,258,1900802,269421838,3599,986382,3085,3342,855567
                ,986382,7426,258,2,258,1900802,2,513,513,29,1901057,7452,7197,29,29,28,7452,28,28,28,28,28,28,329244,117769756,329244,319490058,118032394,319358986,134679306,2571,2571,1117456,3085,790029,3340,3085,856076,856076,856076,855056,2828,2828,3340,3340,3083,2828,12,12,2571
                ,11,84352006,84346396,3083,2828,470158087,101124619,168494599,118032394,151456264,118032904,319424521,319358986,319424519,657160,657415,1901057,1900802,131357,1900802,1901057,1901057,131357,1901057,66077,258,11,11,11,657163,2571,11,12,12,185015302,101976839,84352006,657163,461323,101124619,101124874,461323,461323,101124619,461323,657163,66077,131357,657415,185010186
                ,319358986,319424521,319424776,258,2,513,7426,7426,1900802,29,1901057,513,7197,28,28,1308,1973253,1973253,28,505153029,505153029,470091526,117769756,134681354,101911047,722698,2571,2826,319424776,657163,2571,1967388,1308,1308,1973253,28,1308,1967388,28,1308,1308,1967388,1308,28,1967388,7197,29,1973253,1973253,1967388
                ,117840901,9,9,2057,2312,2057,657672,9,2057,657417,657672,9,2057,2057,657417,319424521,657672,2057,2057,319424521,2057,2057,2057,2057,9,2057,9,9,2057,9,9,9,9,9,9,2057,2057,657417,657417,2057,657417,2057,2057,657417], 128);
                REPEAT(_i, 372, 15, 2057);
                REPEAT(_i, 387, 12, 9);
                _i.set([2057,9,2057,2057,9,2057,2312,9,9,9,2057,2057,2057,2057,657417,319424521,319424521,151652104,1800,319424521,319424521,657672,592392,592392,118032904,1800,118032904,657417,657417], 399);
                REPEAT(_i, 428, 19, 2057);
                _i.set([3599,3599,3599,855567,986382,14,3599,3599,3342,4113,3088,286067728,1117456,4113,17,17,4113,4113,17,4113,3597,3342,2057,2057,2057,657417,2057,2057,2057,2057,657417,2057], 447);
                REPEAT(_i, 479, 8, 657417);
                _i.set([2057,657417,168364051,118035208,118032403,101913607,1247751,101976839,320079367,101127187,101126932,5396,5141,5396,151521811,168364051,169084947,1246996,4884,1246996,85198343,470091526,503645958,504563462,101911047,168170247,5139,463636,101127187,84346398,84352518,336010758,4884,4884,21,5141,5141,5396,5396,5141,5396,5141,5396,5653,5653,5653,5141,5141,21,5141
                ,5141,21,5141,5141,1448469,5653,1448469,1709334,1448469,21,5653,21,5653,5653,23,1382166,1514006,1709589,5653,5398,1709334,5653,1709334,1448469,1709334,5910,454498838,1447194,117969939,5139,134681354,151524106,529159,1247751,1312531,134679059,319424519,135465479,117969939,336005139,134681619,470156574,505153029,470162949,117775878,505153029,470222086,117769758,84352518,1836318
                ,102636549,84346398,117769758,117769758,117841413,394526,117769758,30,30,30,329246,1310,394526,1310,7966,30,30,30,30,30,30,30,1310,30,30,30,7966,7711,7966,30,7966,30,30,30,30,7966,30,2032643,799,31,7966,7711,7711,7966,7966,7711,1027,772,772,772
                ,31,1055,31,262943,31,31,262943,31,4,4,4,4,4,7940,2032388,7940,2032388,772,1027,2032388,5912,437786135,1578519,1382166,5398,1447704,5655,1578519,772,2032388,2032388,2032388,1027,4,1027,2032643,31,7966,7711,7966,31,30,7966,30,30,30,30,30,30,329246
                ,117769758,329246,84346398,118032403,4884,117969939,1775130,5398,5653,5398,5653,1448469,21,1448469,5141,5141,5653,5141,5396,21,5141,20,4884,336010758,5141,5396,503714823,101126932,1246996,118032403,151458568,336005139,168364051,169019656,1247239,1800,319424519,2032643,2032388,2032643,262943,2032388,2032643,2032643,2032643,262943,2032643,197663,262943,772
                ,20,5396,20,20,1246996,4884,463636,20,4884,21,21,21,21,5141,320079367,168101638,329223,504563207,1246996,101126932,463636,463636,463636,101126932,463636,1246996,772,262943,336005139,1246984,319424776,169019401,772,4,2032388,7940,7940,2032388,197663,2032643,1027,7711,30,7711,30,1973253,1310,505153029,1973253,470091526
                ,117841413,117769758,134681354,101911047,4884,134679059,151524106,168364051,1246996,1312531,1836318,1310,1842693,1310,30,1310,1836318,1836318,1310,1310,1836318,1310,30,1836318,7711,7711,31,7711,1842693,1973253,1836318,1973253,1836318,1836318,505153029,9,9,9,2312,2057,2057,2057,9,1247496,1247241,2057,9,2057,169019401,1247241
                ,1247496,319424521,2057,1247241,2057,2057,2057,2057], 487);
                REPEAT(_i, 845, 10, 9);
                _i.set([2057,2057,1247241,1247241], 855);
                REPEAT(_i, 859, 18, 2057);
                REPEAT(_i, 877, 11, 9);
                _i.set([2057,9,9,2057,2057,2057,9,2057,2312,9,9,9,2057,2057,2057,1247241,2057,2057,169019401,1247241,169019401,169019401,152241928,2312,1800,319424521,594696,594696,118035208,1800,1800,118035208,319424521,1247241], 888);
                REPEAT(_i, 922, 21, 2057);
                _i.set([5912,5912,1447704,5912,1578519,5912,23,5655,6683,1775130,5402,6683,27,6683,6683,454432026,27,6683,5910,5655,1709846,2057,2057,1247241,2057,2057,2057,1247241,2057,1247241,1247241,1247241,1247241,1247241,1247241,1247241,2057,2057,2057,2057,118032394,319358986,101124874,2828,2828,2828,2828,2828,856076,3340
                ,3340,1051661,2826,134681354,1247751,135465479,2826,134681354,135465479,117967626,505153029,503716869,1967388,84346396,117769756,117840901,117769756,28,28,28,28,28,28,28,1901057,2,2,513,258,3599,1900802,258,1900802,1900802,2,258,29,1901057,7452,7197,7452,7197,29,1901057,28,28,7452,28,28,28
                ,28,28,7452,329244,28,117769756,84346396,329244,118032394,117967626,2571,3085,3597,3340,3340,3085,14,12,856076,856076,2828,12,3340,3340,3083,2828,2828,2828,12,2571,11,185015302,84346396,3083,2828,657163,101124619,118032394,185010186,319424519,1901057,1901057,1900802,131357,1901057,1900802,131357,66077,131357,258
                ,1901057,11,3083,11,2571,461323,11,2571,12,3340,12,12,168494599,185015302,657163,101124619,461323,461323,3083,101124619,258,66077,657415,319358986,258,1900802,2,7426,2,1901057,513,28,28,28,28,505153029,503716869,134681354,722698,319424776,657163,1967388,1308,28,28,1967388,28,1308,1973253,1308
                ,7197,29,7197,29,1967388,1973253,1967388,1967388,9,2057,9,2057,657417,657417,657417,2057,9,9,9,2057,657417], 943);
                REPEAT(_i, 1164, 12, 2057);
                _i.set([9,2057], 1176);
                REPEAT(_i, 1178, 14, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,2057,2057,2057,2057,2057,657672,592392,592392,118032904], 1192);
                REPEAT(_i, 1209, 10, 2057);
                _i.set([3599,3599,14,3342,3597,3342,2057,657417,657417,657417,1312531,1247751,5141,168364051,168364051,329223,470091526,168101638,101911047,117769758,20,5141,5141,5141,5141,5141,1448469,1448469,5653,5653,5653,1709334,4884,5139,134679059,134681354,1247751,5139,1247239,319424519,117969939,118032403,102636549,505153029,470162949,505153029,117841413,1836318,102636549,84346398
                ,30,30,30,30,30,30,2032643,7711,1027,2032643,197663,2032643,772,4,4,1027,5912,4,772,2032388,772,4,2032643,7711,7966,2032643,31,30,7966,30,30,30,7966,30,30,329246,117769758,329246,168364051,118032403,4884,4884,5910,5398,5653,5398,23,1448469,1448469,1448469
                ,21,5141,5653,5653,5141,5141,5396,21,20,4884,84346398,336010758,5141,320079367,101126932,118032403,118035208,1800,2032388,262943,2032388,262943,772,20,5396,20,4884,20,5653,21,21,336010758,320079367,470222086,168101638,101976839,329223,1246996,463636,101126932,101127187,5396,463636,101126932,772,336005139,319424776,319424521,772,4
                ,4,7940,197663,2032643,1027,1027,30,30,30,1973253,1842693,30,470091526,505153029,117841413,117769758,470162949,1247239,134681354,5139,134679059,151524106,319424776,168364051,1246996,4884,1312531,1836318,30,30,1310,1836318,1310,31,7711,31,7711,1842693,1973253,1973253,1973253,102636549,1836318,2057,1247496,2057,9,1247241,1247241,319424521
                ,319424521,2057,2057,2057,2057,2057,9,9,9,9,9,9,9,2057,1247241,2057,1247241], 1219);
                REPEAT(_i, 1436, 15, 2057);
                REPEAT(_i, 1451, 16, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,9,9,9,2057,2057,1247241,2057,2057,2312,319424521,319424521,594696,1247496,1800,118035208,594696,319424521,319424521], 1467);
                REPEAT(_i, 1493, 16, 2057);
                _i.set([5912,5912,23,5912,5655,27,5910,5655,2057,2057,1247241,1247241,1247241,1247241,1247241], 1509);
                REPEAT(_i, 1524, 2, 2057);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.texture");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 1526, 0, 3258, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Warrior.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(2);
        };
        return Warrior;
    })(QI.Mesh);
    Warrior.Warrior = Warrior;

    var Armor = (function (_super) {
        __extends(Armor, _super);
        function Armor(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 8;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.1178,2.8607,.358,.0622,2.8648,.3355,-.1233,2.8675,.3813,-.1022,2.6611,-.2921,.061,2.5574,-.3215,.0596,2.6926,-.3153,.0596,2.6926,-.3153,-.1073,2.6554,-.3118,-.1022,2.6611,-.2921,-.3682,2.6741,-.1373,-.2831,2.6483,-.2773,-.3921,2.6717,-.146,-.1091,2.3617,-.2997,.1152,2.4348,-.3503,.061,2.5574,-.3215,.3526,2.7322,-.061,.2288,2.6746,-.2628
                    ,.3888,2.6703,-.0653,.2332,2.648,.2805,.4058,2.5877,.2037,.2812,2.4823,.3094,.3271,1.9162,-.6201,.3201,1.5534,-.6926,.4322,1.5941,-.7144,.3888,2.6703,-.0653,.2894,2.5453,-.3211,.4647,2.5225,-.1276,.4874,2.4194,.1524,.3444,2.3325,.2787,.4878,1.9615,-.5998,.692,1.8268,-.4624,.6578,1.9332,-.4151,.5608,1.7457,-.0373,.7545,1.5327,-.3067
                    ,.6212,1.4475,-.1979,.7783,1.4111,-.3338,.633,1.3437,-.2329,.3535,1.4451,-.7342,.4676,1.4781,-.7583,.5699,1.627,-.6939,.7276,1.7087,-.4769,.6973,1.8379,-.148,.4058,2.5877,.2037,.3766,2.6658,.195,-.3968,2.8699,.0766,-.3791,2.8651,-.1276,-.3546,2.8578,-.1223,.6084,1.4976,-.7242,.4664,1.3911,-.1628,.4837,1.2975,-.1975,.3479,1.6654,.0118
                    ,.136,2.2342,.352,.071,2.3729,.3915,.0563,2.6598,.3309,.061,2.5574,-.3215,.2288,2.6746,-.2628,.05,2.8685,-.3305,.2166,2.8856,-.254,.2008,2.8788,-.2332,.2332,2.648,.2805,.0614,2.6533,.3513,.2498,2.638,.2983,.2113,2.7373,-.2254,.1152,2.4348,-.3503,.4878,1.9615,-.5998,.2894,2.5453,-.3211,.3444,2.3325,.2787,.3479,1.6654,.0118
                    ,.136,2.2342,.352,.4647,2.5225,-.1276,.6973,1.8379,-.148,.4874,2.4194,.1524,.4874,2.4194,.1524,.5608,1.7457,-.0373,.3444,2.3325,.2787,.2894,2.5453,-.3211,.6578,1.9332,-.4151,.4647,2.5225,-.1276,-.0297,2.3036,-.3283,.3271,1.9162,-.6201,.1152,2.4348,-.3503,-.294,2.708,.3127,-.1298,2.6713,.3704,-.1238,2.6754,.3491,-.2733,2.4928,-.2561
                    ,-.2662,2.6535,-.2604,.3866,2.8555,.1764,.252,2.8559,.2942,.2342,2.8498,.2789,-.4368,2.7095,.0694,-.313,2.7098,.3322,-.333,2.3254,-.219,-.2733,2.4928,-.2561,-.4417,2.6432,.0857,-.3682,2.6741,-.1373,-.4097,2.7081,.0651,-.1238,2.6754,.3491,-.3139,2.6444,.3411,-.294,2.708,.3127,-.6038,1.7416,-.1364,-.6022,1.3766,-.0761,-.4702,1.6853,-.1654
                    ,-.4417,2.6432,.0857,-.4758,2.4305,-.1301,-.4013,2.5869,-.1546,-.1465,2.5509,.4031,-.3957,2.4832,.3898,-.3139,2.6444,.3411,-.8295,1.7463,.2032,-.7354,1.8067,-.0545,-.7851,1.8583,.1878,-.4939,1.7984,.5023,-.7776,1.5281,.4571,-.6753,1.8615,.4523,-.6006,1.4711,.505,-.801,1.4067,.489,-.713,1.4186,-.0505,-.6419,1.2659,-.0563,-.8564,1.6339,.2491
                    ,-.8237,1.4698,.0242,-.0297,2.3036,-.3283,-.1901,2.2272,-.2554,.1924,1.8612,-.5942,-.1901,2.2272,-.2554,-.4702,1.6853,-.1654,-.3139,2.6444,.3411,-.5265,2.4875,.1218,-.4417,2.6432,.0857,-.294,2.708,.3127,-.2662,2.6535,-.2604,-.7549,1.3001,-.029,-.445,1.4146,.4737,-.6193,1.3617,.5192,-.2804,1.7167,.4578,-.2055,2.4111,.4463,-.2733,2.4928,-.2561
                    ,.3526,2.7322,-.061,.228,2.7397,-.2429,.2113,2.7373,-.2254,-.2799,2.858,-.2872,-.2633,2.8515,-.2699,-.4013,2.5869,-.1546,-.3682,2.6741,-.1373,-.7354,1.8067,-.0545,-.333,2.3254,-.219,-.4758,2.4305,-.1301,.0005,2.2572,.4068,-.4939,1.7984,.5023,-.2055,2.4111,.4463,-.6753,1.8615,.4523,-.5265,2.4875,.1218,-.3957,2.4832,.3898,.0005,2.2572,.4068
                    ,-.4939,1.7984,.5023,-.3957,2.4832,.3898,-.2055,2.4111,.4463,-.7851,1.8583,.1878,-.4758,2.4305,-.1301,-.5265,2.4875,.1218,-.6038,1.7416,-.1364,-.1901,2.2272,-.2554,-.333,2.3254,-.219,-.4693,1.315,.4877,-.2804,1.7167,.4578,.136,2.2342,.352,.3479,1.6654,.0118,-.1238,2.6754,.3491,-.3546,2.8578,-.1223,-.2723,2.916,-.2731,-.3716,2.9199,-.1354
                    ,.2342,2.8498,.2789,.0643,2.9224,.325,.2439,2.9153,.2776,.3866,2.8555,.1764,.3965,2.9197,.1682,.05,2.8685,-.3305,-.1097,2.9199,-.3097,-.1058,2.8546,-.3022,-.3546,2.8578,-.1223,-.41,2.9297,.0743,-.3968,2.8699,.0766,.05,2.8685,-.3305,.1961,2.9377,-.267,.0499,2.9298,-.3407,-.2994,2.8729,.3364,-.2998,2.9353,.3524,.0558,2.8585,.3164
                    ,-.1135,2.9248,.369,-.1178,2.8607,.358,.2008,2.8788,-.2332,.3395,2.9368,-.1099,.3377,2.8775,-.0817,-.2633,2.8515,-.2699,.3631,2.885,-.0917,.228,2.7397,-.2429,.3788,2.7347,-.0686,-.1113,2.8611,-.3227,.0661,2.6896,-.3381,.0553,2.8754,-.354,.252,2.8559,.2942,.4037,2.6618,.2052,.2498,2.638,.2983,.4149,2.8624,.1821,.252,2.8559,.2942
                    ,.0614,2.6533,.3513,.0622,2.8648,.3355,.228,2.7397,-.2429,.2166,2.8856,-.254,-.4368,2.7095,.0694,-.3791,2.8651,-.1276,-.4233,2.8776,.0829,-.2799,2.858,-.2872,-.1073,2.6554,-.3118,-.1233,2.8675,.3813,-.313,2.7098,.3322,-.3179,2.8805,.3602,-.313,2.7098,.3322,.0622,2.8648,.3355,-.1298,2.6713,.3704,-.1233,2.8675,.3813,-.3921,2.6717,-.146
                    ,-.2799,2.858,-.2872,-.3791,2.8651,-.1276,.3766,2.6658,.195,.4037,2.6618,.2052,.3377,2.8775,-.0817,.3631,2.885,-.0917,-.1113,2.8611,-.3227,-.1058,2.8546,-.3022,.0596,2.6926,-.3153,.0661,2.6896,-.3381,.0558,2.8585,.3164,.3631,2.885,-.0917,.4149,2.8624,.1821,-.1113,2.8611,-.3227,.0553,2.8754,-.354,.3766,2.6658,.195,.3788,2.7347,-.0686
                    ,.3526,2.7322,-.061,-.4097,2.7081,.0651,-.2994,2.8729,.3364,-.3179,2.8805,.3602,.0563,2.6598,.3309,-.2994,2.8729,.3364,-.4233,2.8776,.0829,.0558,2.8585,.3164,-.1091,2.3617,-.2997,.0596,2.6926,-.3153,.0661,2.6896,-.3381,-.2662,2.6535,-.2604,-.0297,2.3036,-.3283,.1924,1.8612,-.5942,.3888,2.6703,-.0653,.2288,2.6746,-.2628,.4058,2.5877,.2037
                    ,.4058,2.5877,.2037,.3888,2.6703,-.0653,-.4233,2.8776,.0829,.061,2.5574,-.3215,.0553,2.8754,-.354,.2332,2.648,.2805,.0563,2.6598,.3309,.1152,2.4348,-.3503,.3271,1.9162,-.6201,.4878,1.9615,-.5998,.3444,2.3325,.2787,.5608,1.7457,-.0373,.3479,1.6654,.0118,.4647,2.5225,-.1276,.6578,1.9332,-.4151,.6973,1.8379,-.148,.4874,2.4194,.1524
                    ,.6973,1.8379,-.148,.5608,1.7457,-.0373,.2894,2.5453,-.3211,.4878,1.9615,-.5998,.6578,1.9332,-.4151,.3271,1.9162,-.6201,-.1091,2.3617,-.2997,.4149,2.8624,.1821,-.4097,2.7081,.0651,-.4013,2.5869,-.1546,-.3682,2.6741,-.1373,-.1238,2.6754,.3491,-.4417,2.6432,.0857,.1924,1.8612,-.5942,-.8603,1.3431,.0628,-.1901,2.2272,-.2554,-.3139,2.6444,.3411
                    ,-.294,2.708,.3127,-.2662,2.6535,-.2604,-.1022,2.6611,-.2921,.0005,2.2572,.4068,-.2733,2.4928,-.2561,.3526,2.7322,-.061,.3788,2.7347,-.0686,-.4013,2.5869,-.1546,-.7354,1.8067,-.0545,-.6038,1.7416,-.1364,-.333,2.3254,-.219,-.2804,1.7167,.4578,-.4939,1.7984,.5023,-.6753,1.8615,.4523,-.7851,1.8583,.1878,-.5265,2.4875,.1218,-.4939,1.7984,.5023
                    ,-.6753,1.8615,.4523,-.3957,2.4832,.3898,-.7851,1.8583,.1878,-.7354,1.8067,-.0545,-.4758,2.4305,-.1301,-.6038,1.7416,-.1364,-.4702,1.6853,-.1654,-.1901,2.2272,-.2554,-.2804,1.7167,.4578,.136,2.2342,.352,-.3546,2.8578,-.1223,-.2633,2.8515,-.2699,.2342,2.8498,.2789,.3866,2.8555,.1764,.2342,2.8498,.2789,.05,2.8685,-.3305,-.3546,2.8578,-.1223
                    ,.05,2.8685,-.3305,.2008,2.8788,-.2332,-.3968,2.8699,.0766,-.1178,2.8607,.358,.2008,2.8788,-.2332,.3866,2.8555,.1764,-.2633,2.8515,-.2699,.2166,2.8856,-.254,.228,2.7397,-.2429,-.1073,2.6554,-.3118,.252,2.8559,.2942,.252,2.8559,.2942,.2498,2.638,.2983,.0614,2.6533,.3513,.228,2.7397,-.2429,-.4368,2.7095,.0694,-.3921,2.6717,-.146
                    ,-.3791,2.8651,-.1276,-.2799,2.858,-.2872,-.2831,2.6483,-.2773,-.1073,2.6554,-.3118,-.1233,2.8675,.3813,-.1298,2.6713,.3704,-.313,2.7098,.3322,-.313,2.7098,.3322,-.4368,2.7095,.0694,.0622,2.8648,.3355,.0614,2.6533,.3513,-.1298,2.6713,.3704,-.3921,2.6717,-.146,-.2831,2.6483,-.2773,-.2799,2.858,-.2872,.3766,2.6658,.195,.2332,2.648,.2805
                    ,.3377,2.8775,-.0817,-.1113,2.8611,-.3227,.0596,2.6926,-.3153,.2113,2.7373,-.2254,.3377,2.8775,-.0817,.3631,2.885,-.0917,-.1058,2.8546,-.3022,-.1113,2.8611,-.3227,.3766,2.6658,.195,.4037,2.6618,.2052,.3788,2.7347,-.0686,-.4097,2.7081,.0651,-.2994,2.8729,.3364,-.2994,2.8729,.3364,-.3179,2.8805,.3602,-.4233,2.8776,.0829
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(690);
                CONTIG(_i, 0, 0, 26);
                _i.set([20,27,28,29,30,31,32,33,34,34,35,36,23,37,38,39,40,30,33,40,35,41,30,33,42,26,27,43,17,19,44,45,46,39,38,47,48,36,49,32,48,50,20,51,52,21,39,29,53,20
                ,52,54,25,55,56,57,58,59,60,61,5,16], 27);
                CONTIG(_i, 89, 62, 80);
                _i.set([20,53,18,81,82,83,84,3,85,86,87,88,81,89,90,91,12], 108);
                CONTIG(_i, 125, 92, 107);
                _i.set([22,101,100,108,109,110,100,37,22,111,112,113,114,115,112,116,117,100,118,119,108,112,118,108,120,12,121,113,108,110,122,123,124,125,126,127,128,93,95,129,7,10,119,130,116,131,132,114,131,111
                ,133,52,134,105,119,99,109,53,52,105,103,135,104,136,137,138,46,139,140,141,85], 141);
                CONTIG(_i, 212, 142, 151);
                _i.set([52,51,152,153,154,155,131,50,48,156,157,158,159,160,161,162,48,49,163,164,165,105,166,53,167,168,169,170,171,172,173,172], 222);
                CONTIG(_i, 254, 174, 184);
                _i.set([179,185,186,187,171,184,187,188,189,190,182,191,174,190,192,176,168], 265);
                CONTIG(_i, 282, 193, 202);
                _i.set([195,200,203,204,205,198,206,207,208,209,210,211,212,196,213,214,215,216,210,215,217,218,219,220,221,222,223,61,224,225,57,226,140,227,228,229,137,230,88,1,231,86,232,233,56,234,235,236,237,238
                ,239,11,89,240,2,241,83,60,242,243,244,44,0,245,1,3,246,4,247,248,7,9,249,10,12,250,13,15,62,16,18,43,19,21,251,22,252,253,25,20,254,27,29,39,30,32,41,33,34,33
                ,35,23,22,37,39,47,40,33,30,40,41,31,30,255,256,26,43,15,17,44,257,45,39,23,38,48,34,36,32,34,48,20,28,51,21,23,39,258,13,25,56,259,57,260,261,60,5,4,16], 292);
                CONTIG(_i, 441, 262, 276);
                _i.set([78,122,277,81,90,82,84,278,3,86,279,87,81,280,89,91,121,12,93,281,282,283,105,97,99,116,100,284,126,103,105,134,106,22,285,101,108,119,109,100,117,37,111,114,112,114,132,115,116,130
                ,117,118,286,119,112,115,118,113,112,108,122,78,287,288,106,126,289,97,93,290,291,7,119,286,130,131,162,132,131,114,111,52,292,134,119,116,99,103,91,293,294,295,137,46,45,139,296,84,85,297
                ,298,299,146,300,301,302,303,304,305,306,307,131,133,50,308,309,310,311,312,313,162,131,48,314,146,315,316,317,168,318,186,171,319,320,172,321,183,176,322,169,179,323,324,182,184,325,179,186,326,187
                ,184,185,187,327,191,190,191,328,174,329,177,176,193,330,331,196,332,197,333,202,200,202,193,195,334,335,336,198,197], 456);
                CONTIG(_i, 635, 337, 348);
                _i.set([210,349,350,351,352,353,354,355,356,61,357,58,57,140,139,358,359,360,137,88,87,1,86,361,362,56,363,364,365,366,367,368,9,11,369,0,2,83,82,60], 647);
                CONTIG(_i, 687, 370, 372);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .0491,.7989,.5994,.1278,.825,.5504,.0599,.7218,.6894,-.0216,-.7715,-.6358,-.055,.1321,-.9897,.2695,-.777,-.5688,.2695,-.777,-.5688,-.0131,-.8104,-.5857,-.0216,-.7715,-.6358,-.731,-.6499,-.2078,-.3728,-.7371,-.5636,-.7138,-.6633,-.2247,-.2926,-.01,-.9561,-.1812,.2651,-.947,-.055,.1321,-.9897,.7027,-.571,-.4244,.4374,.4858,-.7567
                    ,.8344,.5042,-.2226,.2406,-.7756,.5835,.7863,.3064,.5365,.4349,.1279,.8913,-.1395,.3287,-.9341,-.4179,.1656,-.8932,-.103,.2871,-.9523,.8344,.5042,-.2226,.3581,.4916,-.7938,.8466,.4709,-.248,.8712,.1796,.4569,.5337,-.1042,.8392,.3683,.436,-.8211,.8712,.3429,-.3511,.8537,.4207,-.307,.5335,-.2765,.7993,.9219,.043,.385
                    ,.5121,-.2592,.8189,.7979,-.0132,.6026,.4592,-.2376,.856,-.4088,.2112,-.8878,-.0689,.3029,-.9505,.4086,.3458,-.8446,.92,.3057,-.2452,.9235,.0601,.3789,.7863,.3064,.5365,.6403,-.7624,.0934,-.5918,.8056,.0261,-.5596,.7863,-.2617,-.5875,.7588,-.2811,.3933,.319,-.8623,.4383,-.2821,.8534,.4256,-.2439,.8714,.453,-.3194,.8323
                    ,.4244,-.1791,.8876,.2926,.0533,.9547,.0979,-.7444,.6605,-.055,.1321,-.9897,.4374,.4858,-.7567,.0042,.8376,-.5462,.3943,.7616,-.5143,.4694,.6995,-.5388,.2406,-.7756,.5835,.051,-.7648,.6423,.243,-.8189,.5199,.6164,-.5278,-.5844,-.1812,.2651,-.947,.3683,.436,-.8211,.3581,.4916,-.7938,.5337,-.1042,.8392,.453,-.3194,.8323
                    ,.4244,-.1791,.8876,.8466,.4709,-.248,.9235,.0601,.3789,.8712,.1796,.4569,.8712,.1796,.4569,.5335,-.2765,.7993,.5337,-.1042,.8392,.3581,.4916,-.7938,.8537,.4207,-.307,.8466,.4709,-.248,-.3847,.1789,-.9055,-.1395,.3287,-.9341,-.1812,.2651,-.947,-.5542,-.6543,.5144,-.1057,-.7549,.6472,-.1277,-.6571,.7429,-.4049,.0034,-.9143
                    ,-.2565,-.8404,-.4774,.3451,.912,.2216,.2516,.7581,.6016,.2441,.8426,.48,-.8088,-.5757,.1202,-.5334,-.6148,.5809,-.3993,-.0078,-.9167,-.4049,.0034,-.9143,-.8792,.4705,.0746,-.731,-.6499,-.2078,-.771,-.624,.1271,-.1277,-.6571,.7429,-.4812,.4758,.7362,-.5542,-.6543,.5144,-.3954,-.0337,-.9178,-.4183,-.0428,-.9073,-.4103,-.0267,-.9116
                    ,-.8792,.4705,.0746,-.7642,.2464,-.596,-.7806,.2883,-.5545,.0455,.3135,.9485,-.5307,.3994,.7475,-.4812,.4758,.7362,-.9554,.2916,.0454,-.7748,.1676,-.6095,-.9245,.3785,.0454,-.0229,.0588,.998,-.5994,.2605,.7569,-.6048,.2741,.7477,-.001,.0841,.9964,-.3754,.2708,.8864,-.4193,-.0573,-.906,-.3833,-.029,-.9232,-.9416,.2927,.1667
                    ,-.809,.0834,-.5818,-.3847,.1789,-.9055,-.4014,.0378,-.9151,-.4224,.1972,-.8847,-.4014,.0378,-.9151,-.4103,-.0267,-.9116,-.4812,.4758,.7362,-.8935,.4425,.076,-.8792,.4705,.0746,-.5542,-.6543,.5144,-.2565,-.8404,-.4774,-.4493,-.0386,-.8925,.3819,-.0474,.9229,.0625,.117,.9911,.3727,-.1436,.9167,.015,.1792,.9837,-.4049,.0034,-.9143
                    ,.7027,-.571,-.4244,.557,-.6104,-.5632,.6164,-.5278,-.5844,-.367,.6977,-.6153,-.2759,.8738,-.4003,-.7806,.2883,-.5545,-.731,-.6499,-.2078,-.7748,.1676,-.6095,-.3993,-.0078,-.9167,-.7642,.2464,-.596,.2756,-.0459,.9602,-.0229,.0588,.998,.015,.1792,.9837,-.6048,.2741,.7477,-.8935,.4425,.076,-.5307,.3994,.7475,.2756,-.0459,.9602
                    ,-.0229,.0588,.998,-.5307,.3994,.7475,.015,.1792,.9837,-.9245,.3785,.0454,-.7642,.2464,-.596,-.8935,.4425,.076,-.3954,-.0337,-.9178,-.4014,.0378,-.9151,-.3993,-.0078,-.9167,.3946,.0278,.9184,.3727,-.1436,.9167,.4244,-.1791,.8876,.453,-.3194,.8323,-.1277,-.6571,.7429,-.5875,.7588,-.2811,-.5846,-.1465,-.7979,-.8744,-.3171,-.3673
                    ,.2441,.8426,.48,.2215,-.1436,.9645,.428,-.0365,.903,.3451,.912,.2216,.9503,-.1051,.2928,.0042,.8376,-.5462,-.1859,-.1215,-.975,-.1616,.776,-.6097,-.5875,.7588,-.2811,-.9734,-.2138,.0818,-.5918,.8056,.0261,.0042,.8376,-.5462,.5861,-.3363,-.7371,.1508,-.1605,-.9754,-.2823,.882,.3772,-.5607,-.2089,.8012,.1698,.7488,.6407
                    ,.0566,-.1809,.9818,.0491,.7989,.5994,.4694,.6995,-.5388,.828,-.2599,-.4968,.5814,.7938,-.1784,-.2759,.8738,-.4003,.5949,.7502,-.2886,.557,-.6104,-.5632,.7249,-.571,-.3853,-.155,.7742,-.6136,.2625,-.6999,-.6643,.0765,.6935,-.7164,.2516,.7581,.6016,.6963,-.6612,.2791,.243,-.8189,.5199,.686,.6605,.305,.2516,.7581,.6016
                    ,.051,-.7648,.6423,.1278,.825,.5504,.557,-.6104,-.5632,.3943,.7616,-.5143,-.8088,-.5757,.1202,-.5596,.7863,-.2617,-.6551,.7528,.0641,-.367,.6977,-.6153,-.0131,-.8104,-.5857,.0599,.7218,.6894,-.5334,-.6148,.5809,-.446,.6335,.6322,-.5334,-.6148,.5809,.1278,.825,.5504,-.1057,-.7549,.6472,.0599,.7218,.6894,-.7138,-.6633,-.2247
                    ,-.367,.6977,-.6153,-.5596,.7863,-.2617,.6403,-.7624,.0934,.6963,-.6612,.2791,.5814,.7938,-.1784,.5949,.7502,-.2886,-.155,.7742,-.6136,-.1616,.776,-.6097,.2695,-.777,-.5688,.2625,-.6999,-.6643,.1698,.7488,.6407,.5949,.7502,-.2886,.686,.6605,.305,-.155,.7742,-.6136,.0765,.6935,-.7164,.6403,-.7624,.0934,.7249,-.571,-.3853
                    ,.7027,-.571,-.4244,-.771,-.624,.1271,-.2823,.882,.3772,-.446,.6335,.6322,.0979,-.7444,.6605,-.2823,.882,.3772,-.6551,.7528,.0641,.1698,.7488,.6407,-.2926,-.01,-.9561,.2695,-.777,-.5688,.2625,-.6999,-.6643,-.2565,-.8404,-.4774,-.3847,.1789,-.9055,-.4224,.1972,-.8847,.8344,.5042,-.2226,.4374,.4858,-.7567,.7863,.3064,.5365
                    ,.7863,.3064,.5365,.8344,.5042,-.2226,-.6551,.7528,.0641,-.055,.1321,-.9897,.0765,.6935,-.7164,.2406,-.7756,.5835,.0979,-.7444,.6605,-.1812,.2651,-.947,-.1395,.3287,-.9341,.3683,.436,-.8211,.5337,-.1042,.8392,.5335,-.2765,.7993,.453,-.3194,.8323,.8466,.4709,-.248,.8537,.4207,-.307,.9235,.0601,.3789,.8712,.1796,.4569
                    ,.9235,.0601,.3789,.5335,-.2765,.7993,.3581,.4916,-.7938,.3683,.436,-.8211,.8537,.4207,-.307,-.1395,.3287,-.9341,-.2926,-.01,-.9561,.686,.6605,.305,-.771,-.624,.1271,-.7806,.2883,-.5545,-.731,-.6499,-.2078,-.1277,-.6571,.7429,-.8792,.4705,.0746,-.4224,.1972,-.8847,-.8032,.0511,-.5935,-.4014,.0378,-.9151,-.4812,.4758,.7362
                    ,-.5542,-.6543,.5144,-.2565,-.8404,-.4774,-.0216,-.7715,-.6358,.2756,-.0459,.9602,-.4049,.0034,-.9143,.7027,-.571,-.4244,.7249,-.571,-.3853,-.7806,.2883,-.5545,-.7748,.1676,-.6095,-.3954,-.0337,-.9178,-.3993,-.0078,-.9167,.3727,-.1436,.9167,-.0229,.0588,.998,-.6048,.2741,.7477,-.9245,.3785,.0454,-.8935,.4425,.076,-.0229,.0588,.998
                    ,-.6048,.2741,.7477,-.5307,.3994,.7475,-.9245,.3785,.0454,-.7748,.1676,-.6095,-.7642,.2464,-.596,-.3954,-.0337,-.9178,-.4103,-.0267,-.9116,-.4014,.0378,-.9151,.3727,-.1436,.9167,.4244,-.1791,.8876,-.5875,.7588,-.2811,-.2759,.8738,-.4003,.2441,.8426,.48,.3451,.912,.2216,.2441,.8426,.48,.0042,.8376,-.5462,-.5875,.7588,-.2811
                    ,.0042,.8376,-.5462,.4694,.6995,-.5388,-.5918,.8056,.0261,.0491,.7989,.5994,.4694,.6995,-.5388,.3451,.912,.2216,-.2759,.8738,-.4003,.3943,.7616,-.5143,.557,-.6104,-.5632,-.0131,-.8104,-.5857,.2516,.7581,.6016,.2516,.7581,.6016,.243,-.8189,.5199,.051,-.7648,.6423,.557,-.6104,-.5632,-.8088,-.5757,.1202,-.7138,-.6633,-.2247
                    ,-.5596,.7863,-.2617,-.367,.6977,-.6153,-.3728,-.7371,-.5636,-.0131,-.8104,-.5857,.0599,.7218,.6894,-.1057,-.7549,.6472,-.5334,-.6148,.5809,-.5334,-.6148,.5809,-.8088,-.5757,.1202,.1278,.825,.5504,.051,-.7648,.6423,-.1057,-.7549,.6472,-.7138,-.6633,-.2247,-.3728,-.7371,-.5636,-.367,.6977,-.6153,.6403,-.7624,.0934,.2406,-.7756,.5835
                    ,.5814,.7938,-.1784,-.155,.7742,-.6136,.2695,-.777,-.5688,.6164,-.5278,-.5844,.5814,.7938,-.1784,.5949,.7502,-.2886,-.1616,.776,-.6097,-.155,.7742,-.6136,.6403,-.7624,.0934,.6963,-.6612,.2791,.7249,-.571,-.3853,-.771,-.624,.1271,-.2823,.882,.3772,-.2823,.882,.3772,-.446,.6335,.6322,-.6551,.7528,.0641
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .7657,.952,.8127,.9576,.7626,.9571,.5532,.3039,.4883,.2648,.5356,.2551,.6362,.9532,.5909,.9584,.591,.9532,.5088,.9268,.5428,.9576,.5033,.9303,.9516,.1155,.9026,.0811,.9336,.0429,.5769,.1556,.5092,.1945,.5657,.1288,.689,.1743,.6578,.1111,.7236,.1414,.281,.7333,.293,.649,.3251,.6647,.8021,.0133
                    ,.87,.0545,.8173,.0607,.7753,.0973,.7739,.1364,.3045,.7479,.3422,.7718,.3203,.776,.2867,.8321,.385,.8603,.3394,.9079,.4256,.8922,.3614,.9511,.3068,.6119,.3486,.6297,.3581,.69,.3743,.7794,.3141,.8108,.7285,.0682,.6472,.1371,.7126,.8688,.7322,.8218,.7372,.8251,.393,.6628,.2872,.9356,.2955,.9776
                    ,.2444,.8437,.8016,.1735,.7802,.1945,.7172,.2241,.9336,.0429,.88,.0101,.8561,.7958,.8944,.8225,.8894,.8258,.6403,.8002,.5924,.7899,.6435,.7952,.5421,.2045,.2846,.1695,.4424,.1189,.2976,.1848,.2665,.2425,.2429,.4282,.2394,.2508,.3032,.2115,.4318,.3601,.2889,.235,.2889,.235,.3551,.4191,.2665,.2425
                    ,.2976,.1848,.4772,.2245,.3032,.2115,.2706,.1514,.4065,.0733,.2846,.1695,.4995,.8158,.5411,.7943,.5442,.7994,.5424,.3792,.5805,.3485,.9061,.9358,.8627,.9576,.8597,.9524,.4777,.8807,.4934,.8118,.9456,.176,.9965,.1771,.698,.4061,.6239,.3771,.6834,.3809,.7382,.2778,.7659,.3424,.739,.3346,.1693,.7283
                    ,.1672,.6413,.1954,.727,.9348,.3002,.9459,.2209,.9876,.2415,.7855,.2722,.8539,.2608,.8438,.3155,.1082,.7629,.1458,.7371,.1315,.7677,.1567,.8303,.057,.8519,.1353,.8076,.1006,.9035,.0125,.882,.1332,.6541,.1571,.6034,.074,.7683,.0975,.6763,.9165,.118,.9266,.1404,.3681,.0421,.254,.1465,.2458,.0002
                    ,.8438,.3155,.9091,.2576,.9348,.3002,.739,.3346,.5458,.9524,.1131,.6164,.1529,.9339,.0755,.947,.1949,.8405,.8215,.2366,.9965,.1771,.6984,.8822,.679,.9318,.6736,.9282,.768,.7901,.7708,.7954,.6104,.4093,.6239,.3771,.1355,.0152,.2331,.1505,.2133,.1551,.2244,.2467,.0323,.3241,.2094,.2243,.0002,.2287
                    ,.1971,.1761,.1969,.2055,.8098,.1915,.0323,.3241,.1969,.2055,.2094,.2243,.0405,.0839,.2133,.1551,.1971,.1761,.1945,.0002,.254,.1465,.2331,.1505,.1429,.9776,.1268,.395,.2394,.2508,.2429,.4282,.7382,.2778,.7479,.5382,.7622,.5935,.731,.55,.933,.4514,.8855,.4055,.9468,.4343,.9742,.4896,.9946,.485
                    ,.8676,.6142,.8119,.6208,.8192,.6008,.7479,.5382,.7195,.4841,.7388,.4822,.8676,.6142,.9217,.6183,.8684,.6329,.7653,.4185,.7516,.4032,.8782,.4267,.8187,.3897,.8193,.4115,.9156,.5979,.9736,.5718,.9588,.5582,.7746,.58,.6841,.5987,.7189,.5199,.74,.5975,.5806,.5124,.6674,.464,.6306,.5185,.6197,.6808
                    ,.7153,.6909,.6492,.7448,.666,.6566,.6197,.6808,.5594,.7614,.5639,.6835,.7189,.5199,.6643,.5505,.4023,.571,.4899,.5396,.4592,.5842,.5307,.5142,.5856,.4367,.507,.6731,.4067,.6744,.4623,.6484,.4067,.6744,.5639,.6835,.4705,.7365,.507,.6731,.4411,.498,.5307,.5142,.4899,.5396,.6848,.8174,.6909,.8135
                    ,.9136,.8697,.9203,.8693,.8135,.7899,.8134,.7952,.6362,.9532,.6391,.9584,.8127,.9524,.9203,.8693,.9122,.9398,.8135,.7899,.8589,.7906,.6848,.8174,.7054,.8827,.6984,.8822,.4848,.8804,.7195,.9349,.7134,.9388,.5923,.7952,.7195,.9349,.7059,.8683,.8127,.9524,.4669,.3449,.6362,.9532,.6391,.9584,.5458,.9524
                    ,.9165,.118,.2544,.7295,.8021,.0133,.88,.0101,.7285,.0682,.7285,.0682,.8021,.0133,.7059,.8683,.9336,.0429,.8589,.7906,.6403,.8002,.5923,.7952,.2846,.1695,.4065,.0733,.4424,.1189,.2665,.2425,.3551,.4191,.2429,.4282,.3032,.2115,.4772,.2245,.4318,.3601,.2889,.235,.4318,.3601,.3551,.4191,.2976,.1848
                    ,.4424,.1189,.4772,.2245,.4065,.0733,.4669,.3449,.9122,.9398,.4848,.8804,.6104,.4093,.6239,.3771,.7382,.2778,.9348,.3002,.2544,.7295,.0643,.6455,.254,.1465,.8438,.3155,.739,.3346,.5458,.9524,.591,.9532,.8098,.1915,.9965,.1771,.6984,.8822,.7054,.8827,.6104,.4093,.1355,.0152,.1945,.0002,.2331,.1505
                    ,.1268,.395,.0323,.3241,.0002,.2287,.0405,.0839,.1971,.1761,.0323,.3241,.0002,.2287,.1969,.2055,.0405,.0839,.1355,.0152,.2133,.1551,.1945,.0002,.2458,.0002,.254,.1465,.1268,.395,.2394,.2508,.7479,.5382,.7746,.58,.933,.4514,.9742,.4896,.933,.4514,.8676,.6142,.7479,.5382,.8676,.6142,.9156,.5979
                    ,.7388,.4822,.8193,.4115,.9156,.5979,.9742,.4896,.7746,.58,.6643,.5505,.7189,.5199,.5856,.4367,.6197,.6808,.6197,.6808,.6492,.7448,.5594,.7614,.7189,.5199,.4023,.571,.4411,.498,.4899,.5396,.5307,.5142,.5023,.4534,.5856,.4367,.507,.6731,.4705,.7365,.4067,.6744,.4067,.6744,.4023,.571,.5639,.6835
                    ,.5594,.7614,.4705,.7365,.4411,.498,.5023,.4534,.5307,.5142,.6848,.8174,.6403,.8002,.9136,.8697,.8135,.7899,.6362,.9532,.6736,.9282,.9136,.8697,.9203,.8693,.8134,.7952,.8135,.7899,.6848,.8174,.6909,.8135,.7054,.8827,.4848,.8804,.7195,.9349,.7195,.9349,.7134,.9388,.7059,.8683
                ]),
                false);

                _i = new Float32Array([.5382,.1836,.123,.1127,.5951,.1879,.1338,.0146,.5259,.2037,.1142,.1093,.4638,.2051,.1392,.1392,.5432,.2232,.1021,.0986,.343,.3337,.2088,.0525,.343,.3337,.2088,.0525,.4622,.203,.1411,.1411,.4638,.2051,.1392,.1392,.6109,.1866,.1058,.053,.3435,.3342,.2081,.0526,.6256,.1776,.1034,.0481,.3303,.31
                ,.31,.0192,.8108,.0966,.0581,.0042,.5432,.2232,.1021,.0986,.7256,.1532,.0539,.0279,.7497,.1011,.0823,.0079,.8495,.0773,.0103,.0045,.4319,.3124,.1662,.0561,.8166,.0712,.0706,.0046,.6854,.2207,.0485,.0046,.9838,0,0,0,.9735,.0045,0,0,.9759,.0052,0,0,.8495,.0773,.0103,.0045
                ,.9098,.0283,0,0,.9616,0,0,0,.9366,.0376,0,0,.78,.1899,.0019,.0007,.9903,0,0,0,.993,0,0,0,.9958,0,0,0,.9825,0,0,0,.9901,0,0,0,.9855,.0045,0,0,.9277,.072,0,0,.8784,.1212,0,0,.9254,.074
                ,0,0,.9278,.0717,0,0,.9836,0,0,0,.99,0,0,0,.9938,0,0,0,.8166,.0712,.0706,.0046,.67,.15,.0957,.0576,.4581,.2671,.1678,.02,.4937,.2029,.1662,.0591,.4978,.2204,.1474,.0634,.9358,.0637,0,0,.9735,.008,0,0,.8598,.1394,0,0
                ,.9637,.013,0,0,.6905,.2607,.0298,0,.7308,.1244,.1244,0,.6536,.1426,.0788,.0788,.5432,.2232,.1021,.0986,.7497,.1011,.0823,.0079,.5568,.1363,.1226,.1057,.4937,.2029,.1662,.0591,.4978,.2204,.1474,.0634,.4319,.3124,.1662,.0561,.6592,.1353,.0806,.0806,.4146,.3515,.1505,.0495,.611,.1865
                ,.1058,.053,.8108,.0966,.0581,.0042,.9903,0,0,0,.9098,.0283,0,0,.78,.1899,.0019,.0007,.9637,.013,0,0,.6905,.2607,.0298,0,.9616,0,0,0,.9938,0,0,0,.9366,.0376,0,0,.9366,.0376,0,0,.9825,0,0,0,.78,.1899,.0019,.0007
                ,.9098,.0283,0,0,.9958,0,0,0,.9616,0,0,0,.6581,.1819,.1408,.0012,.9838,0,0,0,.8108,.0966,.0581,.0042,.67,.15,.0957,.0576,.4146,.3515,.1506,.0495,.4319,.3124,.1662,.0561,.5432,.2232,.1021,.0986,.343,.3337,.2088,.0525,.4593,.2271,.1839,.0561,.5259,.2037
                ,.1142,.1093,.5382,.1836,.123,.1127,.7414,.1434,.0479,.026,.6997,.1329,.0924,.0474,.8107,.0966,.0581,.0042,.5432,.2232,.1021,.0986,.8495,.0773,.0103,.0045,.6109,.1866,.1058,.053,.7256,.1532,.0539,.0279,.4319,.3124,.1662,.0561,.8166,.0712,.0706,.0046,.67,.15,.0957,.0576,.9838,0,0,0
                ,.9735,.0045,0,0,.9751,0,0,0,.8495,.0773,.0103,.0045,.9098,.0283,0,0,.7497,.1011,.0823,.0079,.6854,.2207,.0485,.0046,.9366,.0376,0,0,.8166,.0712,.0706,.0046,.993,0,0,0,.9903,0,0,0,.9958,0,0,0,.9825,0,0,0,.9901,0
                ,0,0,.9938,0,0,0,.9855,.0045,0,0,.9276,.0721,0,0,.9759,.0052,0,0,.9254,.074,0,0,.99,0,0,0,.9836,0,0,0,.6581,.1819,.1408,.0012,.6581,.1819,.1408,.0012,.9751,0,0,0,.6581,.1819,.1408,.0012,.9751,0,0,0
                ,.8166,.0712,.0706,.0046,.9616,0,0,0,.8495,.0773,.0103,.0045,.67,.15,.0957,.0576,.343,.3337,.2088,.0525,.9278,.0717,0,0,.9735,.008,0,0,.8784,.1212,0,0,.9637,.013,0,0,.7799,.1899,.0019,.0007,.5432,.2232,.1021,.0986,.7256,.1532,.0539,.0279,.6256,.1776
                ,.1034,.0481,.611,.1865,.1058,.053,.5601,.1315,.1175,.1104,.5568,.1363,.1226,.1057,.7497,.1011,.0823,.0079,.6109,.1866,.1058,.053,.9903,0,0,0,.8107,.0966,.0581,.0042,.9098,.0283,0,0,.6905,.2607,.0298,0,.9825,0,0,0,.7799,.1899,.0019,.0007,.9938,0,0,0
                ,.9616,0,0,0,.9366,.0376,0,0,.6905,.2607,.0298,0,.9825,0,0,0,.9366,.0376,0,0,.7799,.1899,.0019,.0007,.9958,0,0,0,.9098,.0283,0,0,.9616,0,0,0,.9838,0,0,0,.6581,.1819,.1408,.0012,.8107,.0966,.0581,.0042,.8598,.1394
                ,0,0,.9637,.013,0,0,.6905,.2607,.0298,0,.9637,.013,0,0,.4319,.3124,.1662,.0561,.4978,.2204,.1474,.0634,.5522,.1478,.1076,.0932,.4419,.2389,.1674,.0446,.5382,.1836,.123,.1127,.4874,.3219,.1046,.0111,.4292,.3298,.0872,.0864,.4593,.2271,.1839,.0561,.3754,.2819,.1775,.0812
                ,.5568,.1363,.1226,.1057,.5964,.1191,.1126,.0497,.5891,.1475,.0867,.0687,.4978,.2204,.1474,.0634,.3925,.2595,.2083,.0418,.4581,.2671,.1678,.02,.5568,.1363,.1226,.1057,.4419,.2389,.1674,.0446,.5522,.1478,.1076,.0932,.4593,.2271,.1839,.0561,.3754,.2819,.1775,.0812,.6125,.1538,.1495,.0165,.4292,.3298
                ,.0872,.0864,.5382,.1836,.123,.1127,.4978,.2204,.1474,.0634,.3925,.2595,.2083,.0418,.4581,.2671,.1678,.02,.5568,.1363,.1226,.1057,.4612,.255,.1744,.0215,.6256,.1776,.1034,.0481,.7414,.1434,.0479,.026,.5931,.1414,.0904,.0663,.3435,.3342,.2081,.0526,.5601,.1315,.1175,.1104,.5259,.2037,.1142,.1093
                ,.6997,.1329,.0924,.0474,.4146,.3515,.1505,.0495,.446,.2139,.2037,.0528,.5259,.2037,.1142,.1093,.6592,.1353,.0806,.0806,.5951,.1879,.1338,.0146,.6256,.1776,.1034,.0481,.4937,.2029,.1662,.0591,.7414,.1434,.0479,.026,.4937,.2029,.1662,.0591,.4612,.255,.1744,.0215,.5601,.1315,.1175,.1104,.4622,.203
                ,.1411,.1411,.5259,.2037,.1142,.1093,.6997,.1329,.0924,.0474,.446,.2139,.2037,.0528,.6997,.1329,.0924,.0474,.5951,.1879,.1338,.0146,.4146,.3515,.1506,.0495,.5259,.2037,.1142,.1093,.6256,.1776,.1034,.0481,.5601,.1315,.1175,.1104,.4937,.2029,.1662,.0591,.67,.15,.0957,.0576,.6997,.1329,.0924,.0474
                ,.4581,.2671,.1678,.02,.4612,.255,.1744,.0215,.5931,.1414,.0904,.0663,.5891,.1475,.0867,.0687,.343,.3337,.2088,.0525,.3435,.3342,.2081,.0526,.6125,.1538,.1495,.0165,.4612,.255,.1744,.0215,.446,.2139,.2037,.0528,.5931,.1414,.0904,.0663,.5601,.1315,.1175,.1104,.67,.15,.0957,.0576,.7414,.1434
                ,.0479,.026,.7256,.1532,.0539,.0279,.7256,.1532,.0539,.0279,.4593,.2271,.1839,.0561,.446,.2139,.2037,.0528,.6536,.1426,.0788,.0788,.4593,.2271,.1839,.0561,.4612,.255,.1744,.0215,.6125,.1538,.1495,.0165,.3303,.31,.31,.0192,.343,.3337,.2088,.0525,.3435,.3342,.2081,.0526,.343,.3337,.2088,.0525
                ,.6581,.1819,.1408,.0012,.9751,0,0,0,.8495,.0773,.0103,.0045,.7497,.1011,.0823,.0079,.8166,.0712,.0706,.0046,.8166,.0712,.0706,.0046,.8495,.0773,.0103,.0045,.4612,.255,.1744,.0215,.5432,.2232,.1021,.0986,.5601,.1315,.1175,.1104,.4319,.3124,.1662,.0561,.6536,.1426,.0788,.0788,.8108,.0966
                ,.0581,.0042,.9838,0,0,0,.9903,0,0,0,.78,.1899,.0019,.0007,.9825,0,0,0,.9637,.013,0,0,.9616,0,0,0,.9958,0,0,0,.9938,0,0,0,.9366,.0376,0,0,.9938,0,0,0,.9825,0,0,0,.9098,.0283,0,0
                ,.9903,0,0,0,.9958,0,0,0,.9838,0,0,0,.3303,.31,.31,.0192,.446,.2139,.2037,.0528,.7256,.1532,.0539,.0279,.7497,.1011,.0823,.0079,.6109,.1866,.1058,.053,.4319,.3124,.1662,.0561,.8495,.0773,.0103,.0045,.9751,0,0,0,.9357,.0637,0,0,.6581,.1819
                ,.1408,.0012,.8166,.0712,.0706,.0046,.67,.15,.0957,.0576,.343,.3337,.2088,.0525,.4638,.2051,.1392,.1392,.6905,.2607,.0298,0,.5432,.2232,.1021,.0986,.7256,.1532,.0539,.0279,.7414,.1434,.0479,.026,.7497,.1011,.0823,.0079,.9903,0,0,0,.9838,0,0,0,.8107,.0966,.0581,.0042
                ,.9637,.013,0,0,.9825,0,0,0,.9938,0,0,0,.9958,0,0,0,.9616,0,0,0,.9825,0,0,0,.9938,0,0,0,.9366,.0376,0,0,.9958,0,0,0,.9903,0,0,0,.9098,.0283,0,0,.9838,0,0,0,.9751,0
                ,0,0,.6581,.1819,.1408,.0012,.9637,.013,0,0,.6905,.2607,.0298,0,.4978,.2204,.1474,.0634,.5568,.1363,.1226,.1057,.5382,.1836,.123,.1127,.4593,.2271,.1839,.0561,.5382,.1836,.123,.1127,.5568,.1363,.1226,.1057,.4978,.2204,.1474,.0634,.5568,.1363,.1226,.1057,.4978,.2204,.1474,.0634
                ,.4581,.2671,.1678,.02,.5382,.1836,.123,.1127,.4978,.2204,.1474,.0634,.4593,.2271,.1839,.0561,.5568,.1363,.1226,.1057,.4937,.2029,.1662,.0591,.6256,.1776,.1034,.0481,.4622,.203,.1411,.1411,.5259,.2037,.1142,.1093,.5259,.2037,.1142,.1093,.4146,.3515,.1505,.0495,.6592,.1353,.0806,.0806,.6256,.1776
                ,.1034,.0481,.7414,.1434,.0479,.026,.6256,.1776,.1034,.0481,.4937,.2029,.1662,.0591,.5601,.1315,.1175,.1104,.3435,.3342,.2081,.0526,.4622,.203,.1411,.1411,.5259,.2037,.1142,.1093,.4146,.3515,.1506,.0495,.6997,.1329,.0924,.0474,.6997,.1329,.0924,.0474,.7414,.1434,.0479,.026,.5951,.1879,.1338,.0146
                ,.6592,.1353,.0806,.0806,.4146,.3515,.1506,.0495,.6256,.1776,.1034,.0481,.3435,.3342,.2081,.0526,.5601,.1315,.1175,.1104,.67,.15,.0957,.0576,.4319,.3124,.1662,.0561,.4581,.2671,.1678,.02,.5931,.1414,.0904,.0663,.343,.3337,.2088,.0525,.611,.1865,.1058,.053,.4581,.2671,.1678,.02,.4612,.255
                ,.1744,.0215,.5891,.1475,.0867,.0687,.5931,.1414,.0904,.0663,.67,.15,.0957,.0576,.6997,.1329,.0924,.0474,.7414,.1434,.0479,.026,.7256,.1532,.0539,.0279,.4593,.2271,.1839,.0561,.4593,.2271,.1839,.0561,.446,.2139,.2037,.0528,.4612,.255,.1744,.0215]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array([503645958,470091526,503645958,505153029,503711004,503716869,503716869,505153029,505153029,117769758,470162949,117769758,102636549,102630684,503711004,84346396,117769756,117769756,117840901,117769756,503711004,34867996,336272668,336272668,117769756,336266524,34867996,336266524,102630684,34867996,34867996,34867996,34867996,34867996,336272668,336272668,336272668,336272668,336272668,34867996,34867996,34867996,117769756,117769756,336010758,84352518,84352518,336272668,336272668,336272668
                ,336266524,186522629,186522629,505153029,503711004,117769756,117775366,84352006,84352006,117840901,505153029,117840901,117769756,102630684,34867996,336266524,102630684,336266524,186522629,34867996,34867996,336266524,336266524,34867996,102630684,336266524,34867996,34867996,102630684,34867996,102630684,117769758,117841413,117841413,470156574,470162949,84352006,470091526,470091526,84346398,117769758,102499614,470156574,117769758,117769758,84346398,117841413,117769758,117769758,34867998
                ,336273182,34867998,117769758,336266526,117769758,470156574,336266526,117769758,34867998,34867998,34867998,34867998,34867998,34867998,336273182,336273182,336273182,336273182,34867998,34867998,102630684,102499614,34867996,102499614,34867998,117769758,34867998,117769758,117769758,470162949,336273182,336273182,336273182,336266526,102499614,470156574,84346396,117769756,117769756,117775878,117775878,117769758,117769758,34867998,102499614,336266526,186392069,34867998,102499614,34867998
                ,34867998,336266526,186392069,34867998,336266526,102499614,34867998,336266526,34867998,34867998,102499614,102499614,336273182,336266526,186522629,336266524,117841413,84352518,85853958,85853958,470091526,470091526,85722886,84352006,186386182,117775366,470091526,470222086,84352518,337512198,336010758,117775366,85722886,85722886,84352518,337512198,470091526,85853958,503645958,84352006,186386182,185015302,117775878,185015302,117769756,84346396,470222086,503716869,117775366,470091526
                ,117769756,117840901,84352006,470091526,505153029,470091526,117769756,84352006,84346398,84352518,336010758,117775878,505153029,503645958,117769758,84352518,117769758,470091526,117841413,503645958,117769758,117775878,84352518,117769756,117769756,185015302,185015302,470222086,470222086,503716869,503716869,470091526,185015302,84352006,470222086,117775366,117769756,84346396,84346396,84346398,84352518,84352518,505153029,84352518,336010758,470091526,102636549,503716869,503716869,470162949
                ,102630684,34867996,117769756,117769756,117769756,117769756,117769756,336010758,503711004,117775366,117840901,505153029,102630684,34867996,34867996,102630684,34867996,336266524,34867996,34867996,34867996,336266524,34867996,34867996,336266524,34867996,34867996,34867996,102636549,84352006,84346398,117769758,117769758,117841413,117769758,34867996,336273182,102499614,117769758,117769758,470162949,505153029,186392069,470156574,84346396,84346396,117769758,34867998,34867998,102499614
                ,336266526,34867998,34867998,34867998,34867998,34867998,34867998,336266526,34867998,34867998,336266526,34867998,34867998,102499614,336266526,186522629,84352518,117775878,470091526,84352006,470091526,117775366,84352518,117775366,84352006,336010758,503645958,84352006,84352006,117775878,84352006,117769756,505153029,470091526,470091526,117840901,505153029,117769756,84346398,117769758,84352518,117775878,470162949,505153029,503645958,117841413,117769758,117769758,84346398,470091526
                ,505153029,117841413,117769758,470162949,117775878,117769756,117840901,185015302,470222086,503716869,117769756,185015302,185015302,470222086,470222086,117769756,117769756,84346396,84346398,84352518,84352518,84352518,336010758]);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                _i = new Float32Array(1492);
                _i.set([0,0,0,0,.0146,0,0,0,.0027,.0003,0,0,.0239,0,0,0,.0027,0,0,0,.0374,0,0,0,.0374,0,0,0,.0236,0,0,0,.0239,0,0,0,0,0,0,0,.0372,0,0,0,.0004,0,0,0,.0012,0
                ,0,0,0,0,0,0,.0027,0,0,0,.0001,0,0,0,.0032]);
                _i.set([.0016], 80);
                _i.set([.0008,0,0,0,.018,.0082,0,0,.0121,.0028,0,0,.0074], 172);
                _i.set([.0295,0,0,0,.0027,0,0,0,.0032,0,0,0,.0163,0,0,0,.0121,.0028,0,0,.0074,0,0,0,0,0,0,0,.0278], 212);
                _i.set([.0008], 324);
                _i.set([.0027,0,0,0,.0374,0,0,0,.0442,0,0,0,.0027,.0003], 336);
                _i.set([.0027], 368);
                _i.set([.0001], 380);
                _i.set([.0008], 392);
                _i.set([.0032,0,0,0,.0016], 416);
                _i.set([.0008,0,0,0,.0374], 512);
                _i.set([.0027,0,0,0,.0001,0,0,0,.0004,0,0,0,0,0,0,0,.0154,.0016,.0001,0,.0163,0,0,0,.0032], 540);
                _i.set([.0074,0,0,0,.017,.0116,.001,0,.032,.0154,0,0,0,0,0,0,.0111,0,0,0,.0115,.0013,0,0,.0442,0,0,0,.0402,.0146,0,0,.0163,0,0,0,.0497,.0066,.0066,0,.0687,0,0,0,.0074,0,0,0,.0315,.0141
                ,0,0,.018,.0082,0,0,.0163,0,0,0,.032,.0154,0,0,.017,.0116,.001,0,.0442,0,0,0,.0402,.0146,0,0,.0165,0,0,0,.0115,.0013,0,0,0,0,0,0,.0074,0,0,0,.0315,.0141,0,0,.018,.0082,0,0
                ,.0163,0,0,0,.0175,.0095,0,0,.0004,0,0,0,0,0,0,0,.0663,.0006,.0006,0,.0372,0,0,0,.0154,.0016,.0001,0,.0027,.0003], 668);
                _i.set([.0516,.0028,0,0,.0027,.0003,0,0,.0278,0,0,0,.0146,0,0,0,.0004,0,0,0,.0121,.0028,0,0,0,0,0,0,.0121,.0028,0,0,.0175,.0095,0,0,.0154,.0016,.0001,0,.0236,0,0,0,.0027,.0003,0,0,0,0
                ,0,0,.0516,.0028,0,0,0,0,0,0,.0146,0,0,0,0,0,0,0,.0027,.0003,0,0,.0004,0,0,0,.0154,.0016,.0001,0,.0121,.0028,0,0,.0008,0,0,0,0,0,0,0,.018,.0082,0,0,.0175,.0095,0,0
                ,.0663,.0006,.0006,0,.0687,0,0,0,.0374,0,0,0,.0372,0,0,0,.0165,0,0,0,.0175,.0095,0,0,.0516,.0028,0,0,.0663,.0006,.0006,0,.0154,.0016,.0001,0,.0008,0,0,0,0,0,0,0,.0001,0,0,0,.0001,0
                ,0,0,.0442,0,0,0,.0516,.0028,0,0,.0295,0,0,0,.0442,0,0,0,.0175,.0095,0,0,.0165,0,0,0,.0012,0,0,0,.0374,0,0,0,.0372,0,0,0,.0374], 808);
                _i.set([.0032], 1012);
                _i.set([.0175,.0095,0,0,.0027,0,0,0,.0154,.0016,.0001,0,0,0,0,0,.0295], 1028);
                _i.set([.0012,0,0,0,.0516,.0028,0,0,.0001,0,0,0,.0032], 1112);
                _i.set([.0008,0,0,0,.0374,0,0,0,.0239,0,0,0,0,0,0,0,.0027,0,0,0,.0001,0,0,0,0,0,0,0,.0032], 1156);
                _i.set([.0074,0,0,0,.0163,0,0,0,0,0,0,0,.0442,0,0,0,0,0,0,0,.0163,0,0,0,.0074,0,0,0,.0163,0,0,0,.0074,0,0,0,.018,.0082,0,0,0,0,0,0,.0074,0,0,0,.0442,0
                ,0,0,.0163,0,0,0,.0121,.0028,0,0,.0004,0,0,0,.0236,0,0,0,.0027,.0003,0,0,.0027,.0003,0,0,0,0,0,0,.0278,0,0,0,.0004,0,0,0,0,0,0,0,.0004,0,0,0,.0121,.0028,0,0
                ,.0154,.0016,.0001,0,.0372,0,0,0,.0236,0,0,0,.0027,.0003], 1264);
                _i.set([.0146,0,0,0,.0278,0,0,0,0,0,0,0,.0004,0,0,0,.0372,0,0,0,.0154,.0016,.0001,0,.0008,0,0,0,0,0,0,0,.018,.0082,0,0,.0663,.0006,.0006,0,.0374,0,0,0,0,0,0,0,.018,.0082
                ,0,0,.0175,.0095,0,0,.0687,0,0,0,.0663,.0006,.0006,0,.0008], 1396);
                _i.set([.0001,0,0,0,.0442,0,0,0,.0442,0,0,0,.0516,.0028,0,0,.0175,.0095], 1472);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsExtraKind, _i, false);

                _i = new Uint32Array([67245067,34867998,34280212,34867975,34867975,34867975,34867975,34867975,34867975,34867987,34867975,34867996,34867975,67245067,34867975,34867723,34867998,67245067,67245067,67245067,34867975,83888388,590850,590850,67245067,590850,83888388,590850,67245067,83888388,83888388,83888388,83888388,83888388,590850,590850,590850,590850,590850,83888388,83888388,83888388,67245067,67245067,34280197,34280467,34867987,590850,590850,590850
                ,590850,151257620,151257620,34867975,34867975,34867998,34867998,34867978,34867978,67245067,34867975,67245067,67245067,67245067,83888388,590850,67245067,590850,151257620,83888388,83888388,590850,590850,83888388,67245067,590850,83888388,83888388,67245067,83888388,67245067,67242772,67245067,67245067,34867975,34867975,67245067,34867723,67245067,67245067,67245067,67245067,34867975,67245067,34867987,34280212,67245067,67245067,67242772,83888388
                ,590850,83888388,67245067,590850,34867996,34867975,590850,67245067,83888388,83888388,83888388,83888388,83888388,83888388,590850,590850,590850,590850,83888388,83888388,67245067,67245067,83888388,67245067,83888388,67245067,83888388,67245067,67242772,34867975,590850,590850,590850,590850,67245067,34867975,34867723,34867998,67245067,185864988,34867996,34867996,34867987,83888388,67245067,590850,151257620,83888388,67245067,83888388
                ,83888388,590850,151257620,83888388,590850,67245067,83888388,590850,83888388,83888388,67245067,67245067,590850,590850,151257620,590850,67245067,34867987,185867283,34280467,67245067,34867998,34867723,67245067,34867717,34867998,185797150,34867998,34867987,34276627,34280197,34867998,34867978,336272906,67242772,34280197,34867998,34280212,67245067,34867978,34866442,34867717,34867996,34867717,34867998,67245067,185797150,34867975,336267806,34867723
                ,67245067,67245067,34867723,34867723,34867975,34867998,34867998,34867978,67245067,34280467,34280197,185864988,34867975,34280212,67245067,34280212,67245067,34867998,67245067,34280212,34867996,185864988,34280467,67245067,67245067,34867717,34867717,185797150,34867998,34867975,34867975,34867998,34867717,34867723,185797150,336267806,67245067,67245067,34867723,34280212,67242772,34280212,34867975,67242772,34280197,34867998,34867975,34867975,34867975,34867975
                ,67245067,83888388,67245067,34867998,67245067,67245067,67245067,34280197,34867975,336267806,67245067,34867975,67245067,83888388,83888388,67245067,83888388,590850,83888388,83888388,83888388,590850,83888388,83888388,590850,83888388,83888388,83888388,34867975,34867723,34280212,34867996,34867987,67245067,67245067,83888388,590850,67245067,67245067,67242772,34867975,34867975,151257620,34867975,34867723,67245067,34867996,83888388,83888388,67245067
                ,590850,83888388,83888388,83888388,83888388,83888388,83888388,590850,83888388,83888388,590850,83888388,83888388,67245067,590850,151257620,34867987,34867996,67245067,67245067,67245067,34867998,34867987,34867998,34867978,34280197,67245067,34867978,67245067,34867996,34867978,34867998,34867975,34867723,34867723,67245067,34867975,34867998,67245067,34867996,34280467,185864988,34867975,34867975,34280212,67245067,67245067,67245067,67245067,34867998
                ,34867975,67245067,34867996,34867975,185864988,67245067,67245067,34867717,185797150,34867975,67245067,34867717,34867717,34867998,185797150,67245067,67245067,67245067,34280212,67242772,67242772,34280212,34280197]);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesExtraKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Material.002");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 373, 0, 690, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
        }

        Armor.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(3);
        };
        return Armor;
    })(QI.Mesh);
    Warrior.Armor = Armor;

    var Hair = (function (_super) {
        __extends(Hair, _super);
        function Hair(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 4.8376;
            this.position.z  = -.0275;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 1;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1591,-1.1605,.4595,.1304,-1.0674,.4848,.2859,-1.1218,.463,.0955,-1.2,.4803,.0589,-1.2119,.5082,.101,-.3877,.3222,.1679,-.3405,.2264,.2056,-.4109,.2865,.0952,-.3195,.2662,.0957,-.2448,.2726,.0342,-1.2111,.5245,.1325,-.6989,.3774,.0271,-.3929,.3099,.3392,-1.0897,.3992,.3011,-.8184,.3216,.4306,-1.0573,.3251,.2412,-.688,.3217
                    ,.2412,-.688,.3217,.3256,-.6645,.1795,.3011,-.8184,.3216,.2594,-.4341,.19,.2412,-.688,.3217,.2056,-.4109,.2865,.2061,-.3372,.1906,.2487,-.3646,.1334,.2108,-1.1588,.4622,.2859,-1.1218,.463,.2894,-1.1154,.4362,.2108,-1.1588,.4622,.5637,-1.0518,.1217,.5825,-1.0832,.1998,.3952,-.7699,-.0203,.4387,-1.0788,.2942,.4306,-1.0573,.3251
                    ,.5217,-1.0925,.2663,.255,-.349,-.0712,.2623,-.3095,.0391,.2421,-.3117,-.1239,.5661,-1.0916,.2468,.3488,-.692,.0486,.2897,-.3868,.1398,.3056,-.3834,.0602,.5217,-1.0925,.2663,.3256,-.6645,.1795,.5661,-1.0916,.2468,.3256,-.6645,.1795,.2594,-.4341,.19,.2897,-.3868,.1398,.3501,-.6054,-.0313,.3507,-.8261,-.1985,.3213,-.6816,-.2092
                    ,.3085,-.3936,-.1344,.2421,-.3117,-.1239,.2497,-.352,-.1999,.2788,-.3791,-.2551,.5751,-1.0836,.0922,.5208,-1.0242,.0221,.5039,-1.0067,-.0272,.5249,-1.0348,-.0528,.4647,-.992,-.0998,.5075,-1.0685,-.0931,.5491,-1.0738,-.0326,.4263,-1.025,-.1493,.4412,-1.091,-.1481,.526,-1.1232,-.0744,.2445,-.2684,.1038,.2153,-.2726,.1668,.2105,-.1645,.1227
                    ,.2654,-.2058,-.0392,.2553,-.2568,-.1206,.0586,-.0437,-.0193,.0151,-.0678,-.0516,.0472,-.0489,-.1297,.1838,-.1063,-.0261,.2105,-.1645,.1227,.0586,-.0437,-.0193,.0208,-.095,.118,.0767,-.093,.1638,.1009,-.1633,.2465,.0767,-.093,.1638,.2105,-.1645,.1227,.2153,-.2726,.1668,.0257,-.1983,.265,.0365,-.1099,-.2794,.136,-.1327,-.2544
                    ,.1582,-.1,-.1544,.136,-.1327,-.2544,.0451,-.2082,-.3766,.163,-.2403,-.3129,.0077,-.1457,-.2739,.0051,-.2726,-.3503,.0451,-.2082,-.3766,.2237,-.2349,-.2226,.1582,-.1,-.1544,.2298,-.3012,-.1906,.2142,-.3155,-.2386,.1745,-.3336,-.2803,.4089,-1.1161,-.2374,.2935,-.8876,-.2999,.3286,-1.1691,-.2836,.2935,-.8876,-.2999,.1924,-.9611,-.3333
                    ,.3897,-1.1147,-.2564,.2935,-.8876,-.2999,.2403,-1.1029,-.3115,.2619,-1.2225,-.307,.3143,-.7645,-.3322,.2996,-.5325,-.307,.2689,-.5549,-.3144,.1746,-.3958,-.3247,.2996,-.5325,-.307,.3143,-.7645,-.3322,.2788,-.3791,-.2551,.1746,-.3958,-.3247,.2996,-.5325,-.307,.2689,-.5549,-.3144,.2654,-.6708,-.2586,.3143,-.7645,-.3322,.1746,-.3958,-.3247
                    ,.1582,-.3863,-.2746,.2689,-.5549,-.3144,.1296,-.2637,-.3303,.163,-.2403,-.3129,.0664,-.2504,-.3309,.1296,-.2637,-.3303,.2078,-1.1726,-.291,.3143,-.7645,-.3322,.2654,-.6708,-.2586,.1924,-.9611,-.3333,.1909,-1.0437,-.2807,.2078,-1.1726,-.291,.2424,-1.2262,-.3052,.0256,-.3281,.265,.0767,-.093,.1638,.3256,-.6645,.1795,.2412,-.688,.3217
                    ,.2056,-.4109,.2865,.2061,-.3372,.1906,.2061,-.3372,.1906,.2153,-.2726,.1668,.2859,-1.1218,.463,.3392,-1.0897,.3992,.3392,-1.0897,.3992,.4306,-1.0573,.3251,.5217,-1.0925,.2663,.3256,-.6645,.1795,.3056,-.3834,.0602,.2897,-.3868,.1398,.2487,-.3646,.1334,.2897,-.3868,.1398,.2594,-.4341,.19,.2487,-.3646,.1334,.2788,-.3791,-.2551
                    ,.2788,-.3791,-.2551,.2788,-.3791,-.2551,.1582,-.1,-.1544,.1838,-.1063,-.0261,.1838,-.1063,-.0261,.1838,-.1063,-.0261,.0586,-.0437,-.0193,.2105,-.1645,.1227,.0767,-.093,.1638,.2105,-.1645,.1227,.2153,-.2726,.1668,.136,-.1327,-.2544,.0451,-.2082,-.3766,.136,-.1327,-.2544,.1582,-.1,-.1544,.2532,-.5907,-.0922,.2158,-.4722,-.1537
                    ,.236,-.4891,-.1168,.2497,-.352,-.1999,.2497,-.352,-.1999,.3143,-.7645,-.3322,.2935,-.8876,-.2999,.3897,-1.1147,-.2564,.3845,-1.1747,-.2513,.1746,-.3958,-.3247,.1746,-.3958,-.3247,.2788,-.3791,-.2551,.2142,-.3155,-.2386,.2788,-.3791,-.2551,.2497,-.352,-.1999,.2996,-.5325,-.307,.2788,-.3791,-.2551,.2654,-.6708,-.2586,.259,-.699,-.1401
                    ,.2171,-.7849,-.211,.2654,-.6708,-.2586,.2689,-.5549,-.3144,.1582,-.3863,-.2746,.2654,-.6708,-.2586,.1582,-.3863,-.2746,.2654,-.6708,-.2586,.1924,-.9611,-.3333,.2045,-.8763,-.2176,.2019,-.97,-.2143,.1582,-.3863,-.2746,.1622,-.42,-.187,.1746,-.3958,-.3247,.1745,-.3336,-.2803,.163,-.2403,-.3129,.0451,-.2082,-.3766,.0664,-.2504,-.3309
                    ,.0664,-.2504,-.3309,.0451,-.2082,-.3766,.0051,-.2726,-.3503,.2654,-.6708,-.2586,.1897,-1.0509,-.2326,-.0947,-1.1604,.468,-.221,-1.1218,.4799,-.0643,-1.0674,.4913,-.0299,-1.2,.4844,.0086,-1.2119,.5099,-.0457,-.3877,.3271,-.1525,-.4108,.2984,-.1189,-.3405,.236,-.0437,-.3195,.2709,-.0437,-.2448,.2772,-.0735,-.6989,.3843,-.2784,-1.0896,.4198
                    ,-.3746,-1.0572,.352,-.2455,-.8184,.3399,-.1857,-.6879,.336,-.1857,-.6879,.336,-.2455,-.8184,.3399,-.2794,-.6645,.1997,-.2126,-.4341,.2058,-.1857,-.6879,.336,-.1525,-.4108,.2984,-.1594,-.3372,.2029,-.2057,-.3646,.1486,-.1461,-1.1588,.4741,-.221,-1.1218,.4799,-.1461,-1.1588,.4741,-.2263,-1.1154,.4534,-.5209,-1.0516,.1579,-.3622,-.7698,.005
                    ,-.5344,-1.0831,.2371,-.3847,-1.0787,.3217,-.4694,-1.0924,.2994,-.3746,-1.0572,.352,-.2256,-.3489,-.0552,-.2163,-.3117,-.1086,-.2255,-.3095,.0554,-.3113,-.692,.0706,-.515,-1.0915,.2828,-.2673,-.3833,.0793,-.2462,-.3868,.1577,-.4694,-1.0924,.2994,-.515,-1.0915,.2828,-.2794,-.6645,.1997,-.3179,-.6053,-.009,-.3297,-.8261,-.1758,-.301,-.6816,-.1884
                    ,-.2256,-.3489,-.0552,-.2673,-.3833,.0793,-.2833,-.3936,-.1146,-.2163,-.3117,-.1086,-.2616,-.379,-.237,-.2289,-.3519,-.1839,-.5343,-1.0835,.1292,-.4847,-1.0241,.0556,-.4712,-1.0066,.0054,-.4939,-1.0347,-.0188,-.4369,-.9919,-.0697,-.3297,-.8261,-.1758,-.4369,-.9919,-.0697,-.5166,-1.0737,.003,-.4792,-1.0684,-.0602,-.3297,-.8261,-.1758,-.4792,-1.0684,-.0602
                    ,-.4019,-1.0249,-.1216,-.4019,-1.0249,-.1216,-.4964,-1.1231,-.0403,-.4167,-1.0909,-.1195,-.2034,-.2683,.1187,-.1682,-.1644,.1354,-.1701,-.2726,.1796,-.2339,-.2058,-.0226,-.2292,-.2568,-.1044,-.0261,-.0437,-.0164,-.0221,-.0489,-.1274,.0151,-.0678,-.0516,-.1515,-.1062,-.0149,-.1682,-.1644,.1354,-.0261,-.0437,-.0164,.0151,-.0678,-.0516,.0208,-.095,.118
                    ,-.032,-.093,.1674,.0208,-.095,.118,-.0506,-.1632,.2516,-.1682,-.1644,.1354,-.1701,-.2726,.1796,-.0506,-.1632,.2516,-.0506,-.1632,.2516,-.0214,-.1099,-.2774,-.1346,-.1,-.1446,-.119,-.1327,-.2459,-.1499,-.2402,-.3025,-.0365,-.2082,-.3739,-.0221,-.0489,-.1274,-.0214,-.1099,-.2774,.0077,-.1457,-.2739,.0051,-.2726,-.3503,-.0214,-.1099,-.2774
                    ,-.0365,-.2082,-.3739,-.2044,-.2348,-.2083,-.2339,-.2058,-.0226,-.2084,-.3012,-.176,-.1961,-.3155,-.2249,-.2044,-.2348,-.2083,-.1592,-.3336,-.2692,-.1499,-.2402,-.3025,-.1961,-.3155,-.2249,-.3904,-1.116,-.2107,-.2794,-.8875,-.2808,-.3134,-1.1691,-.2622,-.1807,-.9611,-.3208,-.2794,-.8875,-.2808,-.2794,-.8875,-.2808,-.3725,-1.1146,-.231,-.2271,-1.1028,-.2959
                    ,-.2484,-1.2224,-.29,-.3023,-.7644,-.3116,-.2558,-.5548,-.2969,-.2859,-.5325,-.2875,-.1623,-.3958,-.3135,-.1592,-.3336,-.2692,-.1961,-.3155,-.2249,-.3023,-.7644,-.3116,-.2859,-.5325,-.2875,-.1623,-.3958,-.3135,-.2616,-.379,-.237,-.2859,-.5325,-.2875,-.2558,-.5548,-.2969,-.3023,-.7644,-.3116,-.2486,-.6708,-.2415,-.1623,-.3958,-.3135,-.2558,-.5548,-.2969
                    ,-.1426,-.3862,-.2646,-.1499,-.2402,-.3025,-.1177,-.2637,-.3221,-.1499,-.2402,-.3025,-.0547,-.2503,-.3269,-.1933,-1.1725,-.2776,-.3023,-.7644,-.3116,-.2486,-.6708,-.2415,-.1807,-.9611,-.3208,-.1933,-1.1725,-.2776,-.1758,-1.0436,-.2684,-.2288,-1.2262,-.2895,-.032,-.093,.1674,.0208,-.095,.118,-.2455,-.8184,.3399,-.3746,-1.0572,.352,-.1857,-.6879,.336
                    ,-.1525,-.4108,.2984,-.1594,-.3372,.2029,-.1594,-.3372,.2029,-.1701,-.2726,.1796,-.221,-1.1218,.4799,-.2784,-1.0896,.4198,-.3847,-1.0787,.3217,-.3746,-1.0572,.352,-.2784,-1.0896,.4198,-.4694,-1.0924,.2994,-.2794,-.6645,.1997,-.3746,-1.0572,.352,-.2673,-.3833,.0793,-.2057,-.3646,.1486,-.2462,-.3868,.1577,-.2462,-.3868,.1577,-.2057,-.3646,.1486
                    ,-.2126,-.4341,.2058,-.3622,-.7698,.005,-.4939,-1.0347,-.0188,-.3297,-.8261,-.1758,-.2616,-.379,-.237,-.2833,-.3936,-.1146,-.2833,-.3936,-.1146,-.2616,-.379,-.237,-.2163,-.3117,-.1086,-.2256,-.3489,-.0552,-.2163,-.3117,-.1086,-.4939,-1.0347,-.0188,-.4369,-.9919,-.0697,-.4792,-1.0684,-.0602,-.3297,-.8261,-.1758,-.4019,-1.0249,-.1216,-.4167,-1.0909,-.1195
                    ,-.2339,-.2058,-.0226,-.2339,-.2058,-.0226,-.1682,-.1644,.1354,-.1682,-.1644,.1354,-.0506,-.1632,.2516,-.2044,-.2348,-.2083,-.0506,-.1632,.2516,.0151,-.0678,-.0516,-.0221,-.0489,-.1274,.0077,-.1457,-.2739,.0077,-.1457,-.2739,-.0214,-.1099,-.2774,.0051,-.2726,-.3503,-.2253,-.5907,-.0762,-.192,-.4722,-.1401,-.2289,-.3519,-.1839,-.1499,-.2402,-.3025
                    ,-.2044,-.2348,-.2083,-.1961,-.3155,-.2249,-.2084,-.3012,-.176,-.3023,-.7644,-.3116,-.2794,-.8875,-.2808,-.2794,-.8875,-.2808,-.3904,-1.116,-.2107,-.4167,-1.0909,-.1195,-.367,-1.1746,-.2263,-.1623,-.3958,-.3135,-.1961,-.3155,-.2249,-.1961,-.3155,-.2249,-.2859,-.5325,-.2875,-.2616,-.379,-.237,-.1972,-.7849,-.1972,-.2343,-.6989,-.1236,-.2558,-.5548,-.2969
                    ,-.1426,-.3862,-.2646,-.1426,-.3862,-.2646,-.1807,-.9611,-.3208,-.1851,-.8763,-.2046,-.1426,-.3862,-.2646,-.192,-.4722,-.1401,-.1407,-.4199,-.1769,-.1623,-.3958,-.3135,-.1426,-.3862,-.2646,-.1592,-.3336,-.2692,-.1499,-.2402,-.3025,-.0365,-.2082,-.3739,.0051,-.2726,-.3503,-.0365,-.2082,-.3739,-.1823,-.97,-.2015,-.1713,-1.0509,-.2206,.0208,-.095,.118
                    ,.0767,-.093,.1638,.2654,-.6708,-.2586,.1924,-.9611,-.3333,.2654,-.6708,-.2586,.1924,-.9611,-.3333,-.0506,-.1632,.2516,-.032,-.093,.1674,-.2044,-.2348,-.2083,-.2097,-.4891,-.1019,-.1807,-.9611,-.3208,-.1807,-.9611,-.3208,.148,-.2964,.2515,.2049,-.3521,.211,.1487,-.3532,.2732,.2535,-.2891,.0966,.2807,-.3429,-.0377,.2709,-.3475,.1006
                    ,.2456,-.2799,-.1623,.2126,-.3337,-.2796,.2572,-.3383,-.1648,.1168,-.3319,-.344,.0053,-.2714,-.3453,.0047,-.3299,-.3631,.0264,-.2991,.2863,.027,-.3543,.3047,.2651,-.2845,-.0351,.2012,-.2753,-.2772,-.1568,-.3521,.2231,-.0973,-.2964,.2597,-.0966,-.3531,.2814,-.2491,-.3429,-.0201,-.2129,-.289,.1122,-.2301,-.3474,.1173,-.1972,-.3337,-.266
                    ,-.2223,-.2799,-.1467,-.2341,-.3383,-.1484,-.1059,-.3318,-.3365,-.1056,-.2734,-.328,-.1428,-.2936,.2258,-.2333,-.2844,-.0185,-.1857,-.2753,-.2643,.1911,-.2937,.2147,.1171,-.2734,-.3355
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(1032);
                _i.set([0,1,2,3,4,1,5,6,7,5,8,6,8,9,6,4,10,1,1,10,11,11,12,5,13,14,15,16,2,1,17,18,19,5,16,11,20,18,21,5,7,16,22,23,20,23,24,20,2,25
                ,0]);
                CONTIG(_i, 51, 26, 37);
                _i.set([30,38,39,39,40,41,42,43,44,38,18,39,41,24,36,45,46,47,48,49,31,48,50,49,35,51,41,52,53,54,31,55,29,31,56,55,31,57,56,58,49,59,59,60,61,49,62,60,62,63
                ,64,65,66,67,65,67,68,36,65,68,24,23,65,37,36,69,70,71,72,73,74,75,70,76,71,77,76,70,78,79,80,81,6,78,9,82,78,83,84,85,86,87,88,72,83,85,70,72,85,72
                ,89,83,90,91,83,92,68,93,94,37,69,95,94,92,96,95,88,97,49,98,99,100,101,99,102,103,104,105,99,106,107,108,109,95,96,98,110,111,107,112,113,98,50,114,115,116,117,118,119,120
                ,88,121,96,122,123,124,101,125,104,126,127,101,128,129,130,104,125,131,0,3,1,8,12,132,16,1,11,11,10,12,9,132,82,2,14,13,82,133,78,14,134,15,135,136,20,7,6,137,138,6
                ,139,140,141,27,32,142,143,31,39,48,31,30,39,48,39,41,35,41,36,39,18,40,144,15,145,146,147,148,149,150,151,31,49,58,48,152,50,41,51,48,51,153,48,51,35,37,51,37,154,31
                ,58,57,59,49,60,62,49,63,155,68,156,68,67,157,65,23,66,69,36,68,36,24,65,85,158,70,159,160,161,162,163,78,69,92,94,78,6,9,92,164,88,84,83,165,71,89,72,89,90,83
                ,166,92,167,168,169,170,94,171,37,88,95,92,95,172,94,173,101,174,175,97,98,104,99,101,97,63,49,99,176,102,104,131,105,108,107,177,178,179,180,95,181,182,98,49,50,183,50,184,185,186
                ,187,188,168,186,189,190,191,192,169,193,194,195,196,197,198,169,199,200,119,201,202,203,204,205,206,207,187,195,129,196,208,209,210,211,212,211,213,214,215,216,214,216,217,217,216,218,213,211,10,211
                ,219,10,219,214,12,220,221,222,223,211,210,224,225,226,214,219,223,227,228,226,214,223,215,229,227,230,230,227,231,210,209], 63);
                CONTIG(_i, 494, 232, 244);
                _i.set([238,245,246,245,247,248,249,250,251,246,245,226,247,244,231,226,248,227,252,237,253,252,253,254,255,256,257,258,259,260,237,236,261,237,261,262,237], 507);
                CONTIG(_i, 544, 262, 278);
                _i.set([276,279,277,244,279,276,231,276,230,243,280,244,281,282,283,284,281,285,286,287,288,289,281,290,291,292,289,293,294,216,218,295,82,296,297,298,298,299,300,282,297,296,281,297,282,301,302,303,304,305
                ,306,307,297,308,309,280,243,310,311,309,312,313,314,315,316,253,317,318,319,317,320,321,322,317,323,324,325,326,327,328,329,316,330,331,326,332,333,316,334,254,335,336,337,338,339,340,341,312,342,343
                ,342,344,318,322,345,346,318,347,348,349,350,322,351,345,209,211,212,217,12,214,223,219,211,219,12,10,218,132,217,222,210,220,82,352,353,354,355,226,356,227,357,215,358,216,359,360,216,361,235,362
                ,363,364,365,237,252,245,237,245,238,252,247,245,242,244,247,245,248,226], 561);
                CONTIG(_i, 729, 366, 377);
                _i.set([252,254,378,247,252,379,380,252,381,257,382,383,257,259,384,237,263,385,386,387,388,389,390,253,297,284,391,392,284,393,276,278,230,280,279,244,244,276,231,297,281,284,281,289,394,277,395,278,280,396
                ,279,397,218,216,307,299,298,298,300,296,398,399,400,401,402,403,298,297,307,404,405,337,309,243,406,407,408,310,409,410,260,411,412,318,321,413,414,322,318,317,315,253,415,317,321,416,322,323,351,325
                ,417,326,327,418,259,419,260,259,316,254,253,420,421,254,337,422,423,337,423,404,424,337,425,426,337,405,427,428,337,429,430,431,432,433,434,435,344,436,344,437,438,337,428,422,439,350,440,8,5,12
                ,9,8,132,2,16,14,82,441,442,69,68,92,168,443,169,444,445,195,129,446,196,217,132,12,218,82,132,222,223,210,82,447,448,280,309,449,404,450,405,451,439,428,439,452,350], 741);
                CONTIG(_i, 936, 453, 465);
                _i.set([455,466,454,456,458,467,461,457,468,462,460], 949);
                CONTIG(_i, 960, 469, 478);
                _i.set([463,479,471,465,466,469,473,480,477,481,472,478,482,475,453,483,454,456,467,457,459,468,460,462,484,463,465,453,455,454,483,456,467,459,461,468,484,462,469,480,470,472,481,473,475,482,476,478,464,463
                ,471,470,465,469,474,473,477,476,481,478,479,482], 970);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .2066,-.1691,.9637,.1593,.1517,.9755,.5852,-.4582,.669,.5665,-.1761,.805,.572,-.1521,.806,.1201,.4377,.891,.5522,.456,.6979,.616,.4021,.6774,.2467,.2583,.934,.3142,.1057,.9434,.0334,.0183,.9993,.2684,.2413,.9326,.0305,.4039,.9142,.6547,.1881,.732,.6897,.3441,.637,.645,-.0625,.7616,.6243,.268,.7338
                    ,.6243,.268,.7338,.8816,.3131,.353,.6897,.3441,.637,.7871,.3114,.5325,.6243,.268,.7338,.616,.4021,.6774,.758,.34,.5565,.7383,.5029,.4493,-.0064,-.0091,.9999,.5852,-.4582,.669,.3766,-.9112,-.167,-.0064,-.0091,.9999,.8708,.4871,-.0667,.7841,.5665,.2533,.9072,.3991,-.1331,.2304,-.7695,.5955,.645,-.0625,.7616
                    ,.4539,.2849,.8443,.8577,.5135,-.0249,.9685,.236,.0795,.9772,.1874,-.0997,.6305,.5005,.5932,.9325,.3268,.1537,.6889,.5661,.4526,.9007,.414,.1312,.4539,.2849,.8443,.8816,.3131,.353,.6305,.5005,.5932,.8816,.3131,.353,.7871,.3114,.5325,.6889,.5661,.4526,.9855,.1682,-.0201,.8549,.2317,-.4641,.9648,.0896,-.2473
                    ,.9137,.3963,-.0895,.9772,.1874,-.0997,.4727,.816,-.3328,.749,.4812,-.4555,.8785,.4275,-.2131,.8736,.3811,-.3026,.9059,.4133,.0923,.9025,.3795,-.2036,.7918,.2193,-.5699,.769,.3407,-.5408,.7747,.391,-.4968,.7158,.1087,-.6897,.789,.1829,-.5865,.679,.1404,-.7205,.933,.1692,.3176,.8104,.1572,.5644,.7495,.5476,.3719
                    ,.9459,.323,-.0303,.9794,-.0201,-.2008,-.03,.9934,.1102,-.0001,1,-.0065,-.221,.9501,-.22,.6163,.7854,.0578,.7495,.5476,.3719,-.03,.9934,.1102,.012,.9338,.3574,.0683,.8888,.4532,.3227,.5515,.7692,.0683,.8888,.4532,.7495,.5476,.3719,.8104,.1572,.5644,.0306,.3973,.9171,-.2778,.7999,-.5319,.5264,.6894,-.4976
                    ,.5851,.7717,-.2493,.5264,.6894,-.4976,-.1279,.1639,-.9781,.6341,.1632,-.7559,-.0239,.6946,-.719,-.0331,-.1183,-.9924,-.1279,.1639,-.9781,.8788,.2496,-.4067,.5851,.7717,-.2493,.9542,.1246,-.272,.7992,.2903,-.5262,.4848,.2605,-.8349,.8137,.2094,-.5423,.6755,-.0349,-.7365,.3722,-.0238,-.9278,.6755,-.0349,-.7365,-.6225,.039,-.7816
                    ,.56,.0499,-.827,.6755,-.0349,-.7365,.0428,-.1078,-.9932,.0824,-.0226,-.9963,.6969,.3234,-.64,.7607,.1513,-.6311,-.311,-.1067,-.9444,-.452,.0911,-.8873,.7607,.1513,-.6311,.6969,.3234,-.64,.749,.4812,-.4555,-.452,.0911,-.8873,.7607,.1513,-.6311,-.311,-.1067,-.9444,-.9593,-.0108,-.282,.6969,.3234,-.64,-.452,.0911,-.8873
                    ,-.9446,-.2282,-.2359,-.311,-.1067,-.9444,.3107,.2398,-.9197,.6341,.1632,-.7559,.2935,-.5521,-.7804,.3107,.2398,-.9197,-.4742,-.0902,-.8758,.6969,.3234,-.64,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9965,-.0068,-.0832,-.4742,-.0902,-.8758,-.1985,-.0535,-.9786,.0319,.2974,.9542,.0683,.8888,.4532,.8816,.3131,.353,.6243,.268,.7338
                    ,.616,.4021,.6774,.758,.34,.5565,.758,.34,.5565,.8104,.1572,.5644,.5852,-.4582,.669,.6547,.1881,.732,.6547,.1881,.732,.645,-.0625,.7616,.4539,.2849,.8443,.8816,.3131,.353,.9007,.414,.1312,.6889,.5661,.4526,.7383,.5029,.4493,.6889,.5661,.4526,.7871,.3114,.5325,.7383,.5029,.4493,.749,.4812,-.4555
                    ,.749,.4812,-.4555,.749,.4812,-.4555,.5851,.7717,-.2493,.6163,.7854,.0578,.6163,.7854,.0578,.6163,.7854,.0578,-.03,.9934,.1102,.7495,.5476,.3719,.0683,.8888,.4532,.7495,.5476,.3719,.8104,.1572,.5644,.5264,.6894,-.4976,-.1279,.1639,-.9781,.5264,.6894,-.4976,.5851,.7717,-.2493,-.9807,-.1826,.0699,-.9267,-.3398,.1602
                    ,-.8841,-.0374,.4657,.4727,.816,-.3328,.4727,.816,-.3328,.6969,.3234,-.64,.6755,-.0349,-.7365,.56,.0499,-.827,.4881,-.1157,-.8651,-.452,.0911,-.8873,-.452,.0911,-.8873,.749,.4812,-.4555,.7992,.2903,-.5262,.749,.4812,-.4555,.4727,.816,-.3328,.7607,.1513,-.6311,.749,.4812,-.4555,-.9593,-.0108,-.282,-.9885,.1499,-.0177
                    ,-.9031,.2319,-.3614,-.9593,-.0108,-.282,-.311,-.1067,-.9444,-.9446,-.2282,-.2359,-.9593,-.0108,-.282,-.9446,-.2282,-.2359,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9786,.1891,-.0804,-.9955,.0646,.0684,-.9446,-.2282,-.2359,-.581,-.768,-.2691,-.452,.0911,-.8873,.4848,.2605,-.8349,.6341,.1632,-.7559,-.1279,.1639,-.9781,.2935,-.5521,-.7804
                    ,.2935,-.5521,-.7804,-.1279,.1639,-.9781,-.0331,-.1183,-.9924,-.9593,-.0108,-.282,-.9886,.1506,-.0028,-.1419,-.1691,.9753,-.5394,-.4581,.7065,-.0938,.1517,.9839,-.5116,-.176,.841,-.517,-.152,.8424,-.0603,.4377,.8971,-.5694,.4022,.7169,-.5043,.4561,.7332,-.1839,.2583,.9484,-.2506,.1057,.9623,-.2056,.2413,.9484,-.6044,.1882,.7741
                    ,-.5928,-.0624,.8029,-.6456,.3442,.6816,-.5739,.2681,.7738,-.5739,.2681,.7738,-.6456,.3442,.6816,-.8561,.3133,.411,-.7497,.3115,.5838,-.5739,.2681,.7738,-.5694,.4022,.7169,-.7192,.3402,.6058,-.7066,.5031,.4975,.0731,-.0091,.9973,-.5394,-.4581,.7065,.0731,-.0091,.9973,-.3871,-.9111,-.1415,-.8732,.4873,-.0085,-.914,.3992,-.0723
                    ,-.7654,.5667,.3051,-.1904,-.7695,.6096,-.3965,.285,.8727,-.5928,-.0624,.8029,-.8573,.5137,.0323,-.9816,.1876,-.0343,-.961,.2362,.144,-.9201,.327,.2156,-.5894,.5007,.6339,-.8899,.4142,.191,-.6571,.5663,.4975,-.3965,.285,.8727,-.5894,.5007,.6339,-.8561,.3133,.411,-.9846,.1684,.0457,-.8839,.2319,-.4061,-.9791,.0898,-.1824
                    ,-.8573,.5137,.0323,-.8899,.4142,.191,-.9176,.3965,-.0284,-.9816,.1876,-.0343,-.7776,.4814,-.4045,-.4937,.8161,-.3005,-.8907,.4277,-.1541,-.8918,.3813,-.2437,-.8976,.4135,.1525,-.914,.3797,-.1429,-.8281,.2195,-.5159,-.8839,.2319,-.4061,-.8281,.2195,-.5159,-.8061,.3912,-.444,-.8033,.3408,-.4883,-.8839,.2319,-.4061,-.8033,.3408,-.4883
                    ,-.7602,.1088,-.6404,-.7602,.1088,-.6404,-.7255,.1406,-.6736,-.8263,.1831,-.5326,-.9097,.1694,.3792,-.723,.5477,.421,-.7709,.1574,.6172,-.9457,.3232,.0328,-.9906,-.0199,-.1351,.0375,.9934,.108,.206,.9501,-.2343,-.0001,1,-.0065,-.6109,.7855,.0988,-.723,.5477,.421,.0375,.9934,.108,-.0001,1,-.0065,.012,.9338,.3574
                    ,-.0378,.8888,.4567,.012,.9338,.3574,-.2705,.5516,.789,-.723,.5477,.421,-.7709,.1574,.6172,-.2705,.5516,.789,-.2705,.5516,.789,.2419,.7999,-.5492,-.6002,.7718,-.2098,-.5583,.6895,-.4614,-.683,.1634,-.7119,.0624,.1639,-.9845,.206,.9501,-.2343,.2419,.7999,-.5492,-.0239,.6946,-.719,-.0331,-.1183,-.9924,.2419,.7999,-.5492
                    ,.0624,.1639,-.9845,-.9039,.2498,-.3471,-.9457,.3232,.0328,-.9702,.1248,-.2078,-.8325,.2905,-.4718,-.9039,.2498,-.3471,-.5394,.2607,-.8007,-.683,.1634,-.7119,-.8325,.2905,-.4718,-.848,.2095,-.4868,-.7231,-.0348,-.6898,-.4333,-.0237,-.9009,.569,.0389,-.8214,-.7231,-.0348,-.6898,-.7231,-.0348,-.6898,-.6139,.05,-.7878,-.109,-.1077,-.9882
                    ,-.1486,-.0226,-.9886,-.738,.3236,-.5921,.2473,-.1067,-.963,-.8011,.1514,-.579,.3919,.091,-.9155,-.5394,.2607,-.8007,-.8325,.2905,-.4718,-.738,.3236,-.5921,-.8011,.1514,-.579,.3919,.091,-.9155,-.7776,.4814,-.4045,-.8011,.1514,-.579,.2473,-.1067,-.963,-.738,.3236,-.5921,.9384,-.011,-.3454,.3919,.091,-.9155,.2473,-.1067,-.963
                    ,.9267,-.2284,-.2984,-.683,.1634,-.7119,-.3713,.2399,-.8969,-.683,.1634,-.7119,-.345,-.552,-.7591,.4147,-.0903,-.9054,-.738,.3236,-.5921,.9384,-.011,-.3454,.569,.0389,-.8214,.4147,-.0903,-.9054,.9887,-.007,-.1495,.1328,-.0536,-.9897,-.0378,.8888,.4567,.012,.9338,.3574,-.6456,.3442,.6816,-.5928,-.0624,.8029,-.5739,.2681,.7738
                    ,-.5694,.4022,.7169,-.7192,.3402,.6058,-.7192,.3402,.6058,-.7709,.1574,.6172,-.5394,-.4581,.7065,-.6044,.1882,.7741,-.1904,-.7695,.6096,-.5928,-.0624,.8029,-.6044,.1882,.7741,-.3965,.285,.8727,-.8561,.3133,.411,-.5928,-.0624,.8029,-.8899,.4142,.191,-.7066,.5031,.4975,-.6571,.5663,.4975,-.6571,.5663,.4975,-.7066,.5031,.4975
                    ,-.7497,.3115,.5838,-.914,.3992,-.0723,-.914,.3797,-.1429,-.8839,.2319,-.4061,-.7776,.4814,-.4045,-.9176,.3965,-.0284,-.9176,.3965,-.0284,-.7776,.4814,-.4045,-.9816,.1876,-.0343,-.8573,.5137,.0323,-.9816,.1876,-.0343,-.914,.3797,-.1429,-.8281,.2195,-.5159,-.8033,.3408,-.4883,-.8839,.2319,-.4061,-.7602,.1088,-.6404,-.8263,.1831,-.5326
                    ,-.9457,.3232,.0328,-.9457,.3232,.0328,-.723,.5477,.421,-.723,.5477,.421,-.2705,.5516,.789,-.9039,.2498,-.3471,-.2705,.5516,.789,-.0001,1,-.0065,.206,.9501,-.2343,-.0239,.6946,-.719,-.0239,.6946,-.719,.2419,.7999,-.5492,-.0331,-.1183,-.9924,.9831,-.1828,.0043,.9353,-.34,.098,-.4937,.8161,-.3005,-.683,.1634,-.7119
                    ,-.9039,.2498,-.3471,-.8325,.2905,-.4718,-.9702,.1248,-.2078,-.738,.3236,-.5921,-.7231,-.0348,-.6898,-.7231,-.0348,-.6898,-.848,.2095,-.4868,-.8263,.1831,-.5326,-.5447,-.1155,-.8306,.3919,.091,-.9155,-.8325,.2905,-.4718,-.8325,.2905,-.4718,-.8011,.1514,-.579,-.7776,.4814,-.4045,.877,.2317,-.4209,.9852,.1497,-.0836,.2473,-.1067,-.963
                    ,.9267,-.2284,-.2984,.9267,-.2284,-.2984,.569,.0389,-.8214,.9711,.1889,-.1455,.9267,-.2284,-.2984,.9353,-.34,.098,.5617,-.7682,-.3073,.3919,.091,-.9155,.9267,-.2284,-.2984,-.5394,.2607,-.8007,-.683,.1634,-.7119,.0624,.1639,-.9845,-.0331,-.1183,-.9924,.0624,.1639,-.9845,.9979,.0644,.0018,.9862,.1504,-.0687,.012,.9338,.3574
                    ,.0683,.8888,.4532,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.2705,.5516,.789,-.0378,.8888,.4567,-.9039,.2498,-.3471,.9132,-.0376,.4057,.569,.0389,-.8214,.569,.0389,-.8214,.5124,.273,.8142,.7869,.1959,.5852,.4698,.3137,.8251,.9167,.2727,.2918,.9634,.2653,-.0386,.9085,.2924,.2985
                    ,.948,.1983,-.249,.7843,.1786,-.5941,.9465,.208,-.2465,.3425,.162,-.9254,-.0323,.246,-.9687,-.0319,.2904,-.9564,.0316,.3269,.9445,.0317,.3153,.9485,.9673,.2514,-.0332,.7598,.1699,-.6275,-.7461,.1961,.6363,-.4569,.2732,.8465,-.4136,.3138,.8546,-.9638,.2655,.0257,-.8952,.2728,.3523,-.8865,.2926,.3584,-.8221,.1788,-.5405
                    ,-.9624,.1985,-.1852,-.9608,.2082,-.1828,-.4035,.1621,-.9005,-.406,.1333,-.9041,-.714,.138,.6864,-.9673,.2516,.0314,-.8,.17,-.5754,.7582,.1379,.6373,.3448,.1332,-.9292
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .2067,.4981,.207,.4581,.2634,.5031,.1738,.5056,.1554,.5069,.3054,.1661,.3458,.1498,.3467,.1891,.3168,.133,.3275,.1035,.1444,.504,.2689,.3011,.2756,.1554,.294,.4933,.3234,.3715,.3406,.4887,.3182,.3094,.4218,.3004,.4763,.283,.4265,.3584,.4613,.1819,.4218,.3004,.4218,.1766,.4581,.1386,.4818,.1479
                    ,.2277,.5059,.9722,.5405,.982,.5333,.9869,.5742,.5113,.4528,.4787,.4716,.5641,.3181,.9514,.2106,.9611,.2053,.9621,.2391,.5679,.1287,.5179,.1183,.5889,.109,.4601,.4779,.5326,.2875,.4781,.1587,.511,.1526,.3762,.5125,.3653,.3016,.3956,.5176,.9437,.4177,.9261,.3166,.9437,.2933,.5613,.2448,.6463,.3311
                    ,.6436,.2668,.5946,.1453,.9777,.6662,.9722,.629,.9777,.6007,.5252,.4652,.5546,.434,.5755,.423,.5869,.4341,.6078,.4115,.6073,.4461,.5793,.4528,.6332,.4222,.6359,.4514,.6016,.4714,.4888,.104,.4638,.1091,.4762,.0592,.5448,.0684,.5833,.0855,.3212,.6119,.3398,.6296,.3175,.6584,.1126,.8674,.1347,.8333
                    ,.1347,.9248,.3565,.5639,.3383,.5441,.3432,.0693,.3492,.0303,.3956,.077,.3789,.125,.3064,.073,.3205,.7297,.2882,.7218,.2819,.6752,.6396,.021,.7017,.045,.6697,.0649,.3386,.7335,.3565,.7851,.3271,.7852,.6273,.0692,.5936,.0132,.6174,.1002,.6397,.1032,.6609,.1079,.6774,.4564,.6966,.3507,.8749,.232
                    ,.8853,.1071,.9253,.1358,.8515,.2106,.8853,.1071,.9087,.1999,.9012,.253,.9574,.9486,.931,.851,.9456,.8553,.6837,.1324,.6774,.1954,.7017,.2954,.9218,.7849,.9574,.7747,.6774,.1954,.0403,.9268,.0131,.8775,.0403,.8333,.0665,.8637,.0865,.8555,.0865,.9331,.6805,.0735,.6995,.9355,.6995,.975,.6913,.9485
                    ,.9253,.2307,.8719,.0522,.8994,.0132,.8256,.5955,.7996,.5616,.798,.5043,.9097,.2544,.2874,.1253,.3492,.0303,.3653,.3016,.4218,.3004,.4218,.1766,.3641,.1515,.3641,.1515,.3789,.125,.9722,.5405,.9869,.5043,.9621,.153,.9611,.2053,.3762,.5125,.3653,.3016,.6652,.9763,.6564,.9427,.6652,.9355,.9437,.2933
                    ,.9261,.3166,.9274,.2808,.6469,.1311,.6469,.1311,.6469,.1311,.5936,.0132,.5377,.0242,.5377,.0242,.2837,.623,.7934,.3753,.8245,.4592,.7907,.4592,.3956,.077,.3789,.125,.6396,.021,.3271,.7852,.6396,.021,.5936,.0132,.7347,.7677,.7676,.8176,.7502,.8115,.6233,.1221,.6233,.1221,.8719,.0522,.8853,.1071
                    ,.6866,.4542,.8548,.237,.9574,.7747,.9574,.7747,.9218,.7849,.9394,.7486,.6469,.1311,.6233,.1221,.6774,.1954,.6469,.1311,.8027,.7251,.7506,.718,.7793,.6778,.8027,.7251,.3495,.898,.3738,.8117,.3738,.946,.8256,.8508,.8027,.7251,.8256,.5955,.7788,.6376,.7736,.5967,.8256,.8508,.7863,.8398,.0665,.8637
                    ,.0808,.8333,.8022,.9486,.781,.9001,.8038,.9073,.8038,.9073,.781,.9001,.8038,.8773,.8027,.7251,.7786,.5606,.1035,.4584,.0572,.4237,.1278,.4276,.1228,.486,.1349,.4991,.2457,.1431,.201,.133,.2291,.1048,.2603,.1112,.2708,.0817,.1851,.2688,.0427,.3965,.0131,.3625,.101,.2858,.1446,.2425,.7085,.7397
                    ,.7043,.796,.6468,.7238,.6584,.624,.7085,.7397,.7013,.6175,.6618,.5823,.6359,.592,.0825,.45,.4218,.954,.4336,.9355,.4301,.9628,.6089,.888,.5565,.7631,.6419,.9036,.6241,.9728,.6303,.9355,.6303,.9858,.5474,.5791,.5256,.5615,.5964,.5648,.589,.7317,.6621,.909,.6031,.5971,.6377,.6011,.8817,.5118
                    ,.8997,.5043,.8997,.7221,.5567,.6913,.4778,.7836,.4775,.7203,.8889,.8669,.8788,.926,.8523,.8484,.8957,.8461,.8518,.796,.8748,.8146,.5951,.9009,.5668,.8738,.546,.865,.391,.6742,.3826,.639,.391,.5441,.9431,.6645,.9431,.7193,.9258,.6921,.9461,.5043,.9461,.6381,.9258,.5983,.9863,.3766,.9863,.4437
                    ,.9698,.4011,.6257,.5489,.6372,.5043,.6532,.5531,.5653,.5169,.5286,.5372,.1214,.7174,.1326,.6713,.1364,.7002,.0618,.7046,.0307,.756,.3826,.7116,.3954,.7006,.3954,.7761,.0928,.7844,.1176,.7652,.0652,.8068,.0307,.756,.2221,.0646,.2816,.0456,.2816,.0456,.1364,.6,.0818,.653,.0917,.6067,.0661,.5651
                    ,.1224,.5441,.2966,.9469,.2819,.8776,.2967,.8711,.3234,.8117,.2819,.8776,.2929,.8175,.037,.6031,.0131,.683,.4971,.5552,.4759,.5604,.4851,.5252,.7646,.3923,.7278,.4138,.7518,.3753,.4523,.909,.4325,.8089,.2132,.759,.1805,.6521,.2335,.6356,.2335,.6356,.2469,.7453,.1836,.7188,.1776,.7718,.8999,.2808
                    ,.8854,.3723,.8692,.3765,.8761,.7486,.8957,.7703,.891,.7952,.4218,.7534,.4394,.6523,.8999,.452,.8515,.4389,.4394,.6523,.8253,.0895,.8092,.1806,.7881,.1319,.7347,.9453,.7549,.8773,.7549,.9562,.7278,.4138,.7421,.4254,.7278,.4138,.7464,.4531,.1625,.7455,.2558,.5843,.2518,.5441,.7824,.2642,.74,.3488
                    ,.7505,.2929,.1692,.7712,.305,.0132,.3294,.0184,.7043,.796,.6981,.8987,.7085,.7397,.7013,.6175,.2154,.0943,.2154,.0943,.2221,.0646,.4218,.954,.4336,.9868,.5136,.9831,.5026,.9708,.5136,.9355,.8817,.5118,.8997,.7221,.8518,.5391,.4765,.9355,.4765,.9745,.4597,.9626,.5397,.948,.556,.9355,.556,.9714
                    ,.2426,.7983,.2426,.9104,.1625,.8225,.4665,.5867,.5183,.596,.5183,.596,.4665,.5867,.8957,.8461,.8889,.8669,.8957,.8461,.5339,.8763,.9514,.0444,.962,.0132,.962,.1265,.493,.8711,.4915,.8999,.0131,.683,.0131,.683,.0307,.756,.0307,.756,.6918,.5094,.4851,.5252,.2816,.0456,.3234,.9711,.2966,.9469
                    ,.2967,.8711,.2967,.8711,.2819,.8776,.3234,.8117,.7278,.0778,.7664,.035,.4914,.5769,.4461,.5262,.4851,.5252,.891,.7952,.8945,.8181,.2558,.5843,.2335,.6356,.2335,.6356,.2558,.7494,.4915,.8999,.2374,.7701,.8999,.452,.891,.7952,.891,.7952,.4394,.6523,.4665,.5867,.7531,.1746,.7351,.1295,.8253,.0895
                    ,.8253,.0132,.8253,.0132,.7824,.2642,.7446,.2142,.9861,.2808,.9861,.3501,.9698,.3185,.5979,.9692,.5822,.9528,.5979,.9355,.7278,.4138,.7318,.472,.7646,.4763,.7318,.472,.7319,.2536,.7296,.2901,.3294,.0184,.3492,.0303,.8027,.7251,.8256,.5955,.8027,.7251,.8256,.5955,.2816,.0456,.305,.0132,.4851,.5252
                    ,.7496,.0377,.7824,.2642,.7824,.2642,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.ColorKind, new Float32Array([
                    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                ]),
                false);

                _i = new Float32Array(1940);
                _i.set([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(485);
                REPEAT(_i, 0, 485, 9);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Multimaterial#0");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 453, 0, 936, this);
                new _B.SubMesh(1, 453, 32, 936, 96, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
        }

        Hair.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(4);
        };
        return Hair;
    })(QI.Mesh);
    Warrior.Hair = Hair;

    var Helm = (function (_super) {
        __extends(Helm, _super);
        function Helm(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = 0;
            this.position.y  = 0;
            this.position.z  = 0;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = 0;
            this.scaling.x   = 1;
            this.scaling.y   = 1;
            this.scaling.z   = 1;
            this.skeleton = skel_metarig(name, scene);
            this.numBoneInfluencers = 1;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1591,3.6771,.4321,.1304,3.7702,.4573,.2859,3.7158,.4356,.0955,3.6376,.4528,.0589,3.6257,.4808,.101,4.4499,.2947,.1679,4.4971,.1989,.2056,4.4267,.259,.0952,4.5181,.2388,.0957,4.5928,.2451,.0342,3.6265,.4971,.1325,4.1386,.3499,.0271,4.4446,.2824,.3392,3.7479,.3717,.3011,4.0192,.2941,.4306,3.7803,.2977,.2412,4.1496,.2943
                    ,.2412,4.1496,.2943,.3256,4.1731,.152,.3011,4.0192,.2941,.2594,4.4035,.1626,.2412,4.1496,.2943,.2056,4.4267,.259,.2061,4.5004,.1632,.2487,4.473,.106,.2108,3.6788,.4347,.2859,3.7158,.4356,.2894,3.7222,.4087,.2108,3.6788,.4347,.5637,3.7858,.0942,.5825,3.7544,.1724,.3952,4.0677,-.0477,.4387,3.7588,.2668,.4306,3.7803,.2977
                    ,.5217,3.7451,.2388,.255,4.4886,-.0987,.2623,4.5281,.0116,.2421,4.5259,-.1514,.5661,3.746,.2193,.3488,4.1456,.0211,.2897,4.4508,.1123,.3056,4.4542,.0327,.5217,3.7451,.2388,.3256,4.1731,.152,.5661,3.746,.2193,.3256,4.1731,.152,.2594,4.4035,.1626,.2897,4.4508,.1123,.3501,4.2322,-.0588,.3507,4.0115,-.226,.3213,4.1559,-.2366
                    ,.3085,4.444,-.1618,.2421,4.5259,-.1514,.2497,4.4856,-.2273,.2788,4.4585,-.2825,.5751,3.754,.0647,.5208,3.8133,-.0054,.5039,3.8309,-.0546,.5249,3.8028,-.0802,.4647,3.8456,-.1272,.5075,3.7691,-.1206,.5491,3.7638,-.06,.4263,3.8126,-.1767,.4412,3.7466,-.1756,.526,3.7144,-.1019,.2445,4.5692,.0763,.2153,4.565,.1393,.2105,4.6731,.0953
                    ,.2654,4.6317,-.0667,.2553,4.5808,-.148,.0586,4.7939,-.0467,.0151,4.7698,-.0791,.0472,4.7887,-.1572,.1838,4.7313,-.0535,.2105,4.6731,.0953,.0586,4.7939,-.0467,.0208,4.7426,.0906,.0767,4.7446,.1363,.1009,4.6743,.2191,.0767,4.7446,.1363,.2105,4.6731,.0953,.2153,4.565,.1393,.0257,4.6393,.2376,.0365,4.7277,-.3068,.136,4.7049,-.2818
                    ,.1582,4.7376,-.1819,.136,4.7049,-.2818,.0451,4.6294,-.4041,.163,4.5973,-.3404,.0077,4.6919,-.3014,.0051,4.565,-.3778,.0451,4.6294,-.4041,.2237,4.6027,-.25,.1582,4.7376,-.1819,.2298,4.5364,-.2181,.2142,4.5221,-.266,.1745,4.5039,-.3078,.4089,3.7215,-.2648,.2935,3.95,-.3273,.3286,3.6685,-.3111,.2935,3.95,-.3273,.1924,3.8765,-.3607
                    ,.3897,3.7229,-.2839,.2935,3.95,-.3273,.2403,3.7347,-.339,.2619,3.6151,-.3345,.3143,4.0731,-.3597,.2996,4.3051,-.3345,.2689,4.2827,-.3418,.1746,4.4418,-.3522,.2996,4.3051,-.3345,.3143,4.0731,-.3597,.2788,4.4585,-.2825,.1746,4.4418,-.3522,.2996,4.3051,-.3345,.2689,4.2827,-.3418,.2654,4.1668,-.2861,.3143,4.0731,-.3597,.1746,4.4418,-.3522
                    ,.1582,4.4513,-.3021,.2689,4.2827,-.3418,.1296,4.5739,-.3578,.163,4.5973,-.3404,.0664,4.5872,-.3584,.1296,4.5739,-.3578,.2078,3.665,-.3184,.3143,4.0731,-.3597,.2654,4.1668,-.2861,.1924,3.8765,-.3607,.1909,3.7939,-.3081,.2078,3.665,-.3184,.2424,3.6113,-.3327,.0256,4.5094,.2375,.0767,4.7446,.1363,.3256,4.1731,.152,.2412,4.1496,.2943
                    ,.2056,4.4267,.259,.2061,4.5004,.1632,.2061,4.5004,.1632,.2153,4.565,.1393,.2859,3.7158,.4356,.3392,3.7479,.3717,.3392,3.7479,.3717,.4306,3.7803,.2977,.5217,3.7451,.2388,.3256,4.1731,.152,.3056,4.4542,.0327,.2897,4.4508,.1123,.2487,4.473,.106,.2897,4.4508,.1123,.2594,4.4035,.1626,.2487,4.473,.106,.2788,4.4585,-.2825
                    ,.2788,4.4585,-.2825,.2788,4.4585,-.2825,.1582,4.7376,-.1819,.1838,4.7313,-.0535,.1838,4.7313,-.0535,.1838,4.7313,-.0535,.0586,4.7939,-.0467,.2105,4.6731,.0953,.0767,4.7446,.1363,.2105,4.6731,.0953,.2153,4.565,.1393,.136,4.7049,-.2818,.0451,4.6294,-.4041,.136,4.7049,-.2818,.1582,4.7376,-.1819,.2532,4.2469,-.1196,.2158,4.3654,-.1812
                    ,.236,4.3484,-.1442,.2497,4.4856,-.2273,.2497,4.4856,-.2273,.3143,4.0731,-.3597,.2935,3.95,-.3273,.3897,3.7229,-.2839,.3845,3.6629,-.2788,.1746,4.4418,-.3522,.1746,4.4418,-.3522,.2788,4.4585,-.2825,.2142,4.5221,-.266,.2788,4.4585,-.2825,.2497,4.4856,-.2273,.2996,4.3051,-.3345,.2788,4.4585,-.2825,.2654,4.1668,-.2861,.259,4.1386,-.1676
                    ,.2171,4.0527,-.2385,.2654,4.1668,-.2861,.2689,4.2827,-.3418,.1582,4.4513,-.3021,.2654,4.1668,-.2861,.1582,4.4513,-.3021,.2654,4.1668,-.2861,.1924,3.8765,-.3607,.2045,3.9612,-.2451,.2019,3.8676,-.2418,.1582,4.4513,-.3021,.1622,4.4176,-.2145,.1746,4.4418,-.3522,.1745,4.5039,-.3078,.163,4.5973,-.3404,.0451,4.6294,-.4041,.0664,4.5872,-.3584
                    ,.0664,4.5872,-.3584,.0451,4.6294,-.4041,.0051,4.565,-.3778,.2654,4.1668,-.2861,.1897,3.7867,-.2601,-.0947,3.6771,.4406,-.221,3.7158,.4525,-.0643,3.7702,.4638,-.0299,3.6376,.457,.0086,3.6257,.4825,-.0457,4.4499,.2996,-.1525,4.4267,.271,-.1189,4.4971,.2085,-.0437,4.5181,.2434,-.0437,4.5928,.2498,-.0735,4.1387,.3568,-.2784,3.748,.3923
                    ,-.3746,3.7803,.3245,-.2455,4.0192,.3124,-.1857,4.1496,.3085,-.1857,4.1496,.3085,-.2455,4.0192,.3124,-.2794,4.1731,.1722,-.2126,4.4035,.1783,-.1857,4.1496,.3085,-.1525,4.4267,.271,-.1594,4.5004,.1754,-.2057,4.473,.1211,-.1461,3.6788,.4467,-.221,3.7158,.4525,-.1461,3.6788,.4467,-.2263,3.7222,.4259,-.5209,3.7859,.1304,-.3622,4.0678,-.0225
                    ,-.5344,3.7545,.2097,-.3847,3.7589,.2943,-.4694,3.7452,.2719,-.3746,3.7803,.3245,-.2256,4.4887,-.0826,-.2163,4.5259,-.1361,-.2255,4.5281,.0279,-.3113,4.1456,.0431,-.515,3.7461,.2554,-.2673,4.4543,.0518,-.2462,4.4508,.1302,-.4694,3.7452,.2719,-.515,3.7461,.2554,-.2794,4.1731,.1722,-.3179,4.2322,-.0365,-.3297,4.0115,-.2032,-.301,4.156,-.2159
                    ,-.2256,4.4887,-.0826,-.2673,4.4543,.0518,-.2833,4.444,-.1421,-.2163,4.5259,-.1361,-.2616,4.4586,-.2645,-.2289,4.4857,-.2113,-.5343,3.7541,.1018,-.4847,3.8134,.0282,-.4712,3.831,-.0221,-.4939,3.8029,-.0462,-.4369,3.8457,-.0971,-.3297,4.0115,-.2032,-.4369,3.8457,-.0971,-.5166,3.7639,-.0244,-.4792,3.7692,-.0877,-.3297,4.0115,-.2032,-.4792,3.7692,-.0877
                    ,-.4019,3.8127,-.1491,-.4019,3.8127,-.1491,-.4964,3.7145,-.0678,-.4167,3.7467,-.1469,-.2034,4.5692,.0913,-.1682,4.6731,.1079,-.1701,4.565,.1522,-.2339,4.6318,-.05,-.2292,4.5808,-.1318,-.0261,4.7939,-.0439,-.0221,4.7887,-.1549,.0151,4.7698,-.0791,-.1515,4.7314,-.0423,-.1682,4.6731,.1079,-.0261,4.7939,-.0439,.0151,4.7698,-.0791,.0208,4.7426,.0906
                    ,-.032,4.7446,.1399,.0208,4.7426,.0906,-.0506,4.6743,.2241,-.1682,4.6731,.1079,-.1701,4.565,.1522,-.0506,4.6743,.2241,-.0506,4.6743,.2241,-.0214,4.7277,-.3049,-.1346,4.7376,-.1721,-.119,4.7049,-.2733,-.1499,4.5973,-.3299,-.0365,4.6294,-.4013,-.0221,4.7887,-.1549,-.0214,4.7277,-.3049,.0077,4.6919,-.3014,.0051,4.565,-.3778,-.0214,4.7277,-.3049
                    ,-.0365,4.6294,-.4013,-.2044,4.6028,-.2357,-.2339,4.6318,-.05,-.2084,4.5364,-.2034,-.1961,4.5221,-.2523,-.2044,4.6028,-.2357,-.1592,4.504,-.2966,-.1499,4.5973,-.3299,-.1961,4.5221,-.2523,-.3904,3.7216,-.2382,-.2794,3.9501,-.3082,-.3134,3.6685,-.2896,-.1807,3.8765,-.3483,-.2794,3.9501,-.3082,-.2794,3.9501,-.3082,-.3725,3.723,-.2584,-.2271,3.7347,-.3234
                    ,-.2484,3.6152,-.3175,-.3023,4.0731,-.3391,-.2558,4.2828,-.3243,-.2859,4.3051,-.3149,-.1623,4.4418,-.3409,-.1592,4.504,-.2966,-.1961,4.5221,-.2523,-.3023,4.0731,-.3391,-.2859,4.3051,-.3149,-.1623,4.4418,-.3409,-.2616,4.4586,-.2645,-.2859,4.3051,-.3149,-.2558,4.2828,-.3243,-.3023,4.0731,-.3391,-.2486,4.1668,-.2689,-.1623,4.4418,-.3409,-.2558,4.2828,-.3243
                    ,-.1426,4.4514,-.292,-.1499,4.5973,-.3299,-.1177,4.5739,-.3495,-.1499,4.5973,-.3299,-.0547,4.5872,-.3543,-.1933,3.6651,-.305,-.3023,4.0731,-.3391,-.2486,4.1668,-.2689,-.1807,3.8765,-.3483,-.1933,3.6651,-.305,-.1758,3.794,-.2959,-.2288,3.6114,-.3169,-.032,4.7446,.1399,.0208,4.7426,.0906,-.2455,4.0192,.3124,-.3746,3.7803,.3245,-.1857,4.1496,.3085
                    ,-.1525,4.4267,.271,-.1594,4.5004,.1754,-.1594,4.5004,.1754,-.1701,4.565,.1522,-.221,3.7158,.4525,-.2784,3.748,.3923,-.3847,3.7589,.2943,-.3746,3.7803,.3245,-.2784,3.748,.3923,-.4694,3.7452,.2719,-.2794,4.1731,.1722,-.3746,3.7803,.3245,-.2673,4.4543,.0518,-.2057,4.473,.1211,-.2462,4.4508,.1302,-.2462,4.4508,.1302,-.2057,4.473,.1211
                    ,-.2126,4.4035,.1783,-.3622,4.0678,-.0225,-.4939,3.8029,-.0462,-.3297,4.0115,-.2032,-.2616,4.4586,-.2645,-.2833,4.444,-.1421,-.2833,4.444,-.1421,-.2616,4.4586,-.2645,-.2163,4.5259,-.1361,-.2256,4.4887,-.0826,-.2163,4.5259,-.1361,-.4939,3.8029,-.0462,-.4369,3.8457,-.0971,-.4792,3.7692,-.0877,-.3297,4.0115,-.2032,-.4019,3.8127,-.1491,-.4167,3.7467,-.1469
                    ,-.2339,4.6318,-.05,-.2339,4.6318,-.05,-.1682,4.6731,.1079,-.1682,4.6731,.1079,-.0506,4.6743,.2241,-.2044,4.6028,-.2357,-.0506,4.6743,.2241,.0151,4.7698,-.0791,-.0221,4.7887,-.1549,.0077,4.6919,-.3014,.0077,4.6919,-.3014,-.0214,4.7277,-.3049,.0051,4.565,-.3778,-.2253,4.2469,-.1036,-.192,4.3654,-.1676,-.2289,4.4857,-.2113,-.1499,4.5973,-.3299
                    ,-.2044,4.6028,-.2357,-.1961,4.5221,-.2523,-.2084,4.5364,-.2034,-.3023,4.0731,-.3391,-.2794,3.9501,-.3082,-.2794,3.9501,-.3082,-.3904,3.7216,-.2382,-.4167,3.7467,-.1469,-.367,3.663,-.2537,-.1623,4.4418,-.3409,-.1961,4.5221,-.2523,-.1961,4.5221,-.2523,-.2859,4.3051,-.3149,-.2616,4.4586,-.2645,-.1972,4.0527,-.2246,-.2343,4.1387,-.1511,-.2558,4.2828,-.3243
                    ,-.1426,4.4514,-.292,-.1426,4.4514,-.292,-.1807,3.8765,-.3483,-.1851,3.9613,-.2321,-.1426,4.4514,-.292,-.192,4.3654,-.1676,-.1407,4.4177,-.2044,-.1623,4.4418,-.3409,-.1426,4.4514,-.292,-.1592,4.504,-.2966,-.1499,4.5973,-.3299,-.0365,4.6294,-.4013,.0051,4.565,-.3778,-.0365,4.6294,-.4013,-.1823,3.8676,-.229,-.1713,3.7867,-.248,.0208,4.7426,.0906
                    ,.0767,4.7446,.1363,.2654,4.1668,-.2861,.1924,3.8765,-.3607,.2654,4.1668,-.2861,.1924,3.8765,-.3607,-.0506,4.6743,.2241,-.032,4.7446,.1399,-.2044,4.6028,-.2357,-.2097,4.3485,-.1293,-.1807,3.8765,-.3483,-.1807,3.8765,-.3483,.148,4.5412,.2241,.2049,4.4855,.1835,.1487,4.4844,.2457,.2535,4.5485,.0691,.2807,4.4947,-.0652,.2709,4.4901,.0732
                    ,.2456,4.5577,-.1898,.2126,4.5039,-.3071,.2572,4.4992,-.1922,.1171,4.5642,-.3629,.0047,4.5077,-.3905,.1166,4.4937,-.3757,.0264,4.5385,.2589,.027,4.4832,.2772,.2651,4.5531,-.0626,-.1568,4.4855,.1956,-.0973,4.5412,.2323,-.0966,4.4844,.2539,-.2491,4.4947,-.0475,-.2129,4.5486,.0847,-.2301,4.4902,.0899,-.1972,4.5039,-.2934,-.2223,4.5577,-.1741
                    ,-.2341,4.4993,-.1758,-.1056,4.5642,-.3555,-.106,4.4938,-.3683,-.1428,4.544,.1984,-.2333,4.5531,-.0459,-.1857,4.5623,-.2917,-.0377,4.4859,-.3829,.0045,4.4871,-.3964,.0475,4.4859,-.3858,-.0255,4.3776,-.4019,.0039,4.3785,-.4136,.034,4.3776,-.4039,.1911,4.5439,.1872,.2012,4.5623,-.3046,.0053,4.5662,-.3728
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(1056);
                _i.set([0,1,2,3,4,1,5,6,7,5,8,6,8,9,6,4,10,1,1,10,11,11,12,5,13,14,15,16,2,1,17,18,19,5,16,11,20,18,21,5,7,16,22,23,20,23,24,20,2,25
                ,0]);
                CONTIG(_i, 51, 26, 37);
                _i.set([30,38,39,39,40,41,42,43,44,38,18,39,41,24,36,45,46,47,48,49,31,48,50,49,35,51,41,52,53,54,31,55,29,31,56,55,31,57,56,58,49,59,59,60,61,49,62,60,62,63
                ,64,65,66,67,65,67,68,36,65,68,24,23,65,37,36,69,70,71,72,73,74,75,70,76,71,77,76,70,78,79,80,81,6,78,9,82,78,83,84,85,86,87,88,72,83,85,70,72,85,72
                ,89,83,90,91,83,92,68,93,94,37,69,95,94,92,96,95,88,97,49,98,99,100,101,99,102,103,104,105,99,106,107,108,109,95,96,98,110,111,107,112,113,98,50,114,115,116,117,118,119,120
                ,88,121,96,122,123,124,101,125,104,126,127,101,128,129,130,104,125,131,0,3,1,8,12,132,16,1,11,11,10,12,9,132,82,2,14,13,82,133,78,14,134,15,135,136,20,7,6,137,138,6
                ,139,140,141,27,32,142,143,31,39,48,31,30,39,48,39,41,35,41,36,39,18,40,144,15,145,146,147,148,149,150,151,31,49,58,48,152,50,41,51,48,51,153,48,51,35,37,51,37,154,31
                ,58,57,59,49,60,62,49,63,155,68,156,68,67,157,65,23,66,69,36,68,36,24,65,85,158,70,159,160,161,162,163,78,69,92,94,78,6,9,92,164,88,84,83,165,71,89,72,89,90,83
                ,166,92,167,168,169,170,94,171,37,88,95,92,95,172,94,173,101,174,175,97,98,104,99,101,97,63,49,99,176,102,104,131,105,108,107,177,178,179,180,95,181,182,98,49,50,183,50,184,185,186
                ,187,188,168,186,189,190,191,192,169,193,194,195,196,197,198,169,199,200,119,201,202,203,204,205,206,207,187,195,129,196,208,209,210,211,212,211,213,214,215,216,214,216,217,217,216,218,213,211,10,211
                ,219,10,219,214,12,220,221,222,223,211,210,224,225,226,214,219,223,227,228,226,214,223,215,229,227,230,230,227,231,210,209], 63);
                CONTIG(_i, 494, 232, 244);
                _i.set([238,245,246,245,247,248,249,250,251,246,245,226,247,244,231,226,248,227,252,237,253,252,253,254,255,256,257,258,259,260,237,236,261,237,261,262,237], 507);
                CONTIG(_i, 544, 262, 278);
                _i.set([276,279,277,244,279,276,231,276,230,243,280,244,281,282,283,284,281,285,286,287,288,289,281,290,291,292,289,293,294,216,218,295,82,296,297,298,298,299,300,282,297,296,281,297,282,301,302,303,304,305
                ,306,307,297,308,309,280,243,310,311,309,312,313,314,315,316,253,317,318,319,317,320,321,322,317,323,324,325,326,327,328,329,316,330,331,326,332,333,316,334,254,335,336,337,338,339,340,341,312,342,343
                ,342,344,318,322,345,346,318,347,348,349,350,322,351,345,209,211,212,217,12,214,223,219,211,219,12,10,218,132,217,222,210,220,82,352,353,354,355,226,356,227,357,215,358,216,359,360,216,361,235,362
                ,363,364,365,237,252,245,237,245,238,252,247,245,242,244,247,245,248,226], 561);
                CONTIG(_i, 729, 366, 377);
                _i.set([252,254,378,247,252,379,380,252,381,257,382,383,257,259,384,237,263,385,386,387,388,389,390,253,297,284,391,392,284,393,276,278,230,280,279,244,244,276,231,297,281,284,281,289,394,277,395,278,280,396
                ,279,397,218,216,307,299,298,298,300,296,398,399,400,401,402,403,298,297,307,404,405,337,309,243,406,407,408,310,409,410,260,411,412,318,321,413,414,322,318,317,315,253,415,317,321,416,322,323,351,325
                ,417,326,327,418,259,419,260,259,316,254,253,420,421,254,337,422,423,337,423,404,424,337,425,426,337,405,427,428,337,429,430,431,432,433,434,435,344,436,344,437,438,337,428,422,439,350,440,8,5,12
                ,9,8,132,2,16,14,82,441,442,69,68,92,168,443,169,444,445,195,129,446,196,217,132,12,218,82,132,222,223,210,82,447,448,280,309,449,404,450,405,451,439,428,439,452,350], 741);
                CONTIG(_i, 936, 453, 465);
                _i.set([455,466,454,456,458,467,461,457,460,462,464,468,469,470,471,472,473,474,475,476,463,477,478,470,465,466,468,472,479,476,480,471,474,477,481,463,482,483,463,484,464,483,485,486,483,487,484,453,488,454
                ,456,467,457,459,489,460,462,490,463,465,453,455,454,488,456,467,459,461,460,489,462,468,479,469,471,480,472,474,481,475,463,490,477,470,469,465,468,473,472,476,475,480,474,478,477,463,478,482,463,483
                ,484,483,482,485,483], 949);
                CONTIG(_i, 1054, 486, 487);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .2066,-.1691,.9637,.1593,.1517,.9755,.5852,-.4582,.669,.5665,-.1761,.805,.572,-.1521,.806,.1201,.4377,.891,.5522,.456,.6979,.616,.4021,.6774,.2467,.2583,.934,.3142,.1057,.9434,.0334,.0183,.9993,.2684,.2413,.9326,.0305,.4039,.9142,.6547,.1881,.732,.6897,.3441,.637,.645,-.0625,.7616,.6243,.268,.7338
                    ,.6243,.268,.7338,.8816,.3131,.353,.6897,.3441,.637,.7871,.3114,.5325,.6243,.268,.7338,.616,.4021,.6774,.758,.34,.5565,.7383,.5029,.4493,-.0064,-.0091,.9999,.5852,-.4582,.669,.3766,-.9112,-.167,-.0064,-.0091,.9999,.8708,.4871,-.0667,.7841,.5665,.2533,.9072,.3991,-.1331,.2304,-.7695,.5955,.645,-.0625,.7616
                    ,.4539,.2849,.8443,.8577,.5135,-.0249,.9685,.236,.0795,.9772,.1874,-.0997,.6305,.5005,.5932,.9325,.3268,.1537,.6889,.5661,.4526,.9007,.414,.1312,.4539,.2849,.8443,.8816,.3131,.353,.6305,.5005,.5932,.8816,.3131,.353,.7871,.3114,.5325,.6889,.5661,.4526,.9855,.1682,-.0201,.8549,.2317,-.4641,.9648,.0896,-.2473
                    ,.9137,.3963,-.0895,.9772,.1874,-.0997,.4727,.816,-.3328,.749,.4812,-.4555,.8785,.4275,-.2131,.8736,.3811,-.3026,.9059,.4133,.0923,.9025,.3795,-.2036,.7918,.2193,-.5699,.769,.3407,-.5408,.7747,.391,-.4968,.7158,.1087,-.6897,.789,.1829,-.5865,.679,.1404,-.7205,.933,.1692,.3176,.8104,.1572,.5644,.7495,.5476,.3719
                    ,.9459,.323,-.0303,.9794,-.0201,-.2008,-.03,.9934,.1102,-.0001,1,-.0065,-.221,.9501,-.22,.6163,.7854,.0578,.7495,.5476,.3719,-.03,.9934,.1102,.012,.9338,.3574,.0683,.8888,.4532,.3227,.5515,.7692,.0683,.8888,.4532,.7495,.5476,.3719,.8104,.1572,.5644,.0306,.3973,.9171,-.2778,.7999,-.5319,.5264,.6894,-.4976
                    ,.5851,.7717,-.2493,.5264,.6894,-.4976,-.1279,.1639,-.9781,.6341,.1632,-.7559,-.0239,.6946,-.719,-.0331,-.1183,-.9924,-.1279,.1639,-.9781,.8788,.2496,-.4067,.5851,.7717,-.2493,.9542,.1246,-.272,.7992,.2903,-.5262,.4848,.2605,-.8349,.8137,.2094,-.5423,.6755,-.0349,-.7365,.3722,-.0238,-.9278,.6755,-.0349,-.7365,-.6225,.039,-.7816
                    ,.56,.0499,-.827,.6755,-.0349,-.7365,.0428,-.1078,-.9932,.0824,-.0226,-.9963,.6969,.3234,-.64,.7607,.1513,-.6311,-.311,-.1067,-.9444,-.452,.0911,-.8873,.7607,.1513,-.6311,.6969,.3234,-.64,.749,.4812,-.4555,-.452,.0911,-.8873,.7607,.1513,-.6311,-.311,-.1067,-.9444,-.9593,-.0108,-.282,.6969,.3234,-.64,-.452,.0911,-.8873
                    ,-.9446,-.2282,-.2359,-.311,-.1067,-.9444,.3107,.2398,-.9197,.6341,.1632,-.7559,.2935,-.5521,-.7804,.3107,.2398,-.9197,-.4742,-.0902,-.8758,.6969,.3234,-.64,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9965,-.0068,-.0832,-.4742,-.0902,-.8758,-.1985,-.0535,-.9786,.0319,.2974,.9542,.0683,.8888,.4532,.8816,.3131,.353,.6243,.268,.7338
                    ,.616,.4021,.6774,.758,.34,.5565,.758,.34,.5565,.8104,.1572,.5644,.5852,-.4582,.669,.6547,.1881,.732,.6547,.1881,.732,.645,-.0625,.7616,.4539,.2849,.8443,.8816,.3131,.353,.9007,.414,.1312,.6889,.5661,.4526,.7383,.5029,.4493,.6889,.5661,.4526,.7871,.3114,.5325,.7383,.5029,.4493,.749,.4812,-.4555
                    ,.749,.4812,-.4555,.749,.4812,-.4555,.5851,.7717,-.2493,.6163,.7854,.0578,.6163,.7854,.0578,.6163,.7854,.0578,-.03,.9934,.1102,.7495,.5476,.3719,.0683,.8888,.4532,.7495,.5476,.3719,.8104,.1572,.5644,.5264,.6894,-.4976,-.1279,.1639,-.9781,.5264,.6894,-.4976,.5851,.7717,-.2493,-.9807,-.1826,.0699,-.9267,-.3398,.1602
                    ,-.8841,-.0374,.4657,.4727,.816,-.3328,.4727,.816,-.3328,.6969,.3234,-.64,.6755,-.0349,-.7365,.56,.0499,-.827,.4881,-.1157,-.8651,-.452,.0911,-.8873,-.452,.0911,-.8873,.749,.4812,-.4555,.7992,.2903,-.5262,.749,.4812,-.4555,.4727,.816,-.3328,.7607,.1513,-.6311,.749,.4812,-.4555,-.9593,-.0108,-.282,-.9885,.1499,-.0177
                    ,-.9031,.2319,-.3614,-.9593,-.0108,-.282,-.311,-.1067,-.9444,-.9446,-.2282,-.2359,-.9593,-.0108,-.282,-.9446,-.2282,-.2359,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9786,.1891,-.0804,-.9955,.0646,.0684,-.9446,-.2282,-.2359,-.581,-.768,-.2691,-.452,.0911,-.8873,.4848,.2605,-.8349,.6341,.1632,-.7559,-.1279,.1639,-.9781,.2935,-.5521,-.7804
                    ,.2935,-.5521,-.7804,-.1279,.1639,-.9781,-.0331,-.1183,-.9924,-.9593,-.0108,-.282,-.9886,.1506,-.0028,-.1419,-.1691,.9753,-.5394,-.4581,.7065,-.0938,.1517,.9839,-.5116,-.176,.841,-.517,-.152,.8424,-.0603,.4377,.8971,-.5694,.4022,.7169,-.5043,.4561,.7332,-.1839,.2583,.9484,-.2506,.1057,.9623,-.2056,.2413,.9484,-.6044,.1882,.7741
                    ,-.5928,-.0624,.8029,-.6456,.3442,.6816,-.5739,.2681,.7738,-.5739,.2681,.7738,-.6456,.3442,.6816,-.8561,.3133,.411,-.7497,.3115,.5838,-.5739,.2681,.7738,-.5694,.4022,.7169,-.7192,.3402,.6058,-.7066,.5031,.4975,.0731,-.0091,.9973,-.5394,-.4581,.7065,.0731,-.0091,.9973,-.3871,-.9111,-.1415,-.8732,.4873,-.0085,-.914,.3992,-.0723
                    ,-.7654,.5667,.3051,-.1904,-.7695,.6096,-.3965,.285,.8727,-.5928,-.0624,.8029,-.8573,.5137,.0323,-.9816,.1876,-.0343,-.961,.2362,.144,-.9201,.327,.2156,-.5894,.5007,.6339,-.8899,.4142,.191,-.6571,.5663,.4975,-.3965,.285,.8727,-.5894,.5007,.6339,-.8561,.3133,.411,-.9846,.1684,.0457,-.8839,.2319,-.4061,-.9791,.0898,-.1824
                    ,-.8573,.5137,.0323,-.8899,.4142,.191,-.9176,.3965,-.0284,-.9816,.1876,-.0343,-.7776,.4814,-.4045,-.4937,.8161,-.3005,-.8907,.4277,-.1541,-.8918,.3813,-.2437,-.8976,.4135,.1525,-.914,.3797,-.1429,-.8281,.2195,-.5159,-.8839,.2319,-.4061,-.8281,.2195,-.5159,-.8061,.3912,-.444,-.8033,.3408,-.4883,-.8839,.2319,-.4061,-.8033,.3408,-.4883
                    ,-.7602,.1088,-.6404,-.7602,.1088,-.6404,-.7255,.1406,-.6736,-.8263,.1831,-.5326,-.9097,.1694,.3792,-.723,.5477,.421,-.7709,.1574,.6172,-.9457,.3232,.0328,-.9906,-.0199,-.1351,.0375,.9934,.108,.206,.9501,-.2343,-.0001,1,-.0065,-.6109,.7855,.0988,-.723,.5477,.421,.0375,.9934,.108,-.0001,1,-.0065,.012,.9338,.3574
                    ,-.0378,.8888,.4567,.012,.9338,.3574,-.2705,.5516,.789,-.723,.5477,.421,-.7709,.1574,.6172,-.2705,.5516,.789,-.2705,.5516,.789,.2419,.7999,-.5492,-.6002,.7718,-.2098,-.5583,.6895,-.4614,-.683,.1634,-.7119,.0624,.1639,-.9845,.206,.9501,-.2343,.2419,.7999,-.5492,-.0239,.6946,-.719,-.0331,-.1183,-.9924,.2419,.7999,-.5492
                    ,.0624,.1639,-.9845,-.9039,.2498,-.3471,-.9457,.3232,.0328,-.9702,.1248,-.2078,-.8325,.2905,-.4718,-.9039,.2498,-.3471,-.5394,.2607,-.8007,-.683,.1634,-.7119,-.8325,.2905,-.4718,-.848,.2095,-.4868,-.7231,-.0348,-.6898,-.4333,-.0237,-.9009,.569,.0389,-.8214,-.7231,-.0348,-.6898,-.7231,-.0348,-.6898,-.6139,.05,-.7878,-.109,-.1077,-.9882
                    ,-.1486,-.0226,-.9886,-.738,.3236,-.5921,.2473,-.1067,-.963,-.8011,.1514,-.579,.3919,.091,-.9155,-.5394,.2607,-.8007,-.8325,.2905,-.4718,-.738,.3236,-.5921,-.8011,.1514,-.579,.3919,.091,-.9155,-.7776,.4814,-.4045,-.8011,.1514,-.579,.2473,-.1067,-.963,-.738,.3236,-.5921,.9384,-.011,-.3454,.3919,.091,-.9155,.2473,-.1067,-.963
                    ,.9267,-.2284,-.2984,-.683,.1634,-.7119,-.3713,.2399,-.8969,-.683,.1634,-.7119,-.345,-.552,-.7591,.4147,-.0903,-.9054,-.738,.3236,-.5921,.9384,-.011,-.3454,.569,.0389,-.8214,.4147,-.0903,-.9054,.9887,-.007,-.1495,.1328,-.0536,-.9897,-.0378,.8888,.4567,.012,.9338,.3574,-.6456,.3442,.6816,-.5928,-.0624,.8029,-.5739,.2681,.7738
                    ,-.5694,.4022,.7169,-.7192,.3402,.6058,-.7192,.3402,.6058,-.7709,.1574,.6172,-.5394,-.4581,.7065,-.6044,.1882,.7741,-.1904,-.7695,.6096,-.5928,-.0624,.8029,-.6044,.1882,.7741,-.3965,.285,.8727,-.8561,.3133,.411,-.5928,-.0624,.8029,-.8899,.4142,.191,-.7066,.5031,.4975,-.6571,.5663,.4975,-.6571,.5663,.4975,-.7066,.5031,.4975
                    ,-.7497,.3115,.5838,-.914,.3992,-.0723,-.914,.3797,-.1429,-.8839,.2319,-.4061,-.7776,.4814,-.4045,-.9176,.3965,-.0284,-.9176,.3965,-.0284,-.7776,.4814,-.4045,-.9816,.1876,-.0343,-.8573,.5137,.0323,-.9816,.1876,-.0343,-.914,.3797,-.1429,-.8281,.2195,-.5159,-.8033,.3408,-.4883,-.8839,.2319,-.4061,-.7602,.1088,-.6404,-.8263,.1831,-.5326
                    ,-.9457,.3232,.0328,-.9457,.3232,.0328,-.723,.5477,.421,-.723,.5477,.421,-.2705,.5516,.789,-.9039,.2498,-.3471,-.2705,.5516,.789,-.0001,1,-.0065,.206,.9501,-.2343,-.0239,.6946,-.719,-.0239,.6946,-.719,.2419,.7999,-.5492,-.0331,-.1183,-.9924,.9831,-.1828,.0043,.9353,-.34,.098,-.4937,.8161,-.3005,-.683,.1634,-.7119
                    ,-.9039,.2498,-.3471,-.8325,.2905,-.4718,-.9702,.1248,-.2078,-.738,.3236,-.5921,-.7231,-.0348,-.6898,-.7231,-.0348,-.6898,-.848,.2095,-.4868,-.8263,.1831,-.5326,-.5447,-.1155,-.8306,.3919,.091,-.9155,-.8325,.2905,-.4718,-.8325,.2905,-.4718,-.8011,.1514,-.579,-.7776,.4814,-.4045,.877,.2317,-.4209,.9852,.1497,-.0836,.2473,-.1067,-.963
                    ,.9267,-.2284,-.2984,.9267,-.2284,-.2984,.569,.0389,-.8214,.9711,.1889,-.1455,.9267,-.2284,-.2984,.9353,-.34,.098,.5617,-.7682,-.3073,.3919,.091,-.9155,.9267,-.2284,-.2984,-.5394,.2607,-.8007,-.683,.1634,-.7119,.0624,.1639,-.9845,-.0331,-.1183,-.9924,.0624,.1639,-.9845,.9979,.0644,.0018,.9862,.1504,-.0687,.012,.9338,.3574
                    ,.0683,.8888,.4532,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.9593,-.0108,-.282,-.6225,.039,-.7816,-.2705,.5516,.789,-.0378,.8888,.4567,-.9039,.2498,-.3471,.9132,-.0376,.4057,.569,.0389,-.8214,.569,.0389,-.8214,.5124,.273,.8142,.7869,.1959,.5852,.4698,.3137,.8251,.9167,.2727,.2918,.9634,.2653,-.0386,.9085,.2924,.2985
                    ,.948,.1983,-.249,.7819,.1781,-.5973,.9465,.208,-.2465,.3647,.1817,-.9132,-.0323,.2383,-.9706,.3432,.1561,-.9262,.0316,.3269,.9445,.0317,.3153,.9485,.9673,.2514,-.0332,-.7461,.1961,.6363,-.4569,.2732,.8465,-.4136,.3138,.8546,-.9638,.2655,.0257,-.8952,.2728,.3523,-.8865,.2926,.3584,-.82,.1783,-.5438,-.9624,.1985,-.1852
                    ,-.9608,.2082,-.1828,-.4248,.1817,-.8868,-.4042,.1561,-.9012,-.714,.138,.6864,-.9673,.2516,.0314,-.8027,.1753,-.57,-.247,.1015,-.9637,-.0326,.2064,-.9779,.1823,.1015,-.978,-.3548,.1438,-.9238,-.0329,.1568,-.9871,.2925,.1438,-.9454,.7582,.1379,.6373,.7629,.1751,-.6223,-.0319,.2904,-.9564
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .2067,.4981,.207,.4581,.2634,.5031,.1738,.5056,.1554,.5069,.3054,.1661,.3458,.1498,.3467,.1891,.3168,.133,.3275,.1035,.1444,.504,.2689,.3011,.2756,.1554,.294,.4933,.3234,.3715,.3406,.4887,.3182,.3094,.4218,.3004,.4763,.283,.4265,.3584,.4613,.1819,.4218,.3004,.4218,.1766,.4581,.1386,.4818,.1479
                    ,.2277,.5059,.9722,.5405,.982,.5333,.9869,.5742,.5113,.4528,.4787,.4716,.5641,.3181,.9514,.2106,.9611,.2053,.9621,.2391,.5679,.1287,.5179,.1183,.5889,.109,.4601,.4779,.5326,.2875,.4781,.1587,.511,.1526,.3762,.5125,.3653,.3016,.3956,.5176,.9437,.4177,.9261,.3166,.9437,.2933,.5613,.2448,.6463,.3311
                    ,.6436,.2668,.5946,.1453,.9777,.6662,.9722,.629,.9777,.6007,.5252,.4652,.5546,.434,.5755,.423,.5869,.4341,.6078,.4115,.6073,.4461,.5793,.4528,.6332,.4222,.6359,.4514,.6016,.4714,.4888,.104,.4638,.1091,.4762,.0592,.5448,.0684,.5833,.0855,.3212,.6119,.3398,.6296,.3175,.6584,.1126,.8674,.1347,.8333
                    ,.1347,.9248,.3565,.5639,.3383,.5441,.3432,.0693,.3492,.0303,.3956,.077,.3789,.125,.3064,.073,.3205,.7297,.2882,.7218,.2819,.6752,.6396,.021,.7017,.045,.6697,.0649,.3386,.7335,.3565,.7851,.3271,.7852,.6273,.0692,.5936,.0132,.6174,.1002,.6397,.1032,.6609,.1079,.6774,.4564,.6966,.3507,.8749,.232
                    ,.8853,.1071,.9253,.1358,.8515,.2106,.8853,.1071,.9087,.1999,.9012,.253,.9574,.9486,.931,.851,.9456,.8553,.6837,.1324,.6774,.1954,.7017,.2954,.9218,.7849,.9574,.7747,.6774,.1954,.0403,.9268,.0131,.8775,.0403,.8333,.0665,.8637,.0865,.8555,.0865,.9331,.6805,.0735,.6995,.9355,.6995,.975,.6913,.9485
                    ,.9253,.2307,.8719,.0522,.8994,.0132,.8256,.5955,.7996,.5616,.798,.5043,.9097,.2544,.2874,.1253,.3492,.0303,.3653,.3016,.4218,.3004,.4218,.1766,.3641,.1515,.3641,.1515,.3789,.125,.9722,.5405,.9869,.5043,.9621,.153,.9611,.2053,.3762,.5125,.3653,.3016,.6652,.9763,.6564,.9427,.6652,.9355,.9437,.2933
                    ,.9261,.3166,.9274,.2808,.6469,.1311,.6469,.1311,.6469,.1311,.5936,.0132,.5377,.0242,.5377,.0242,.2837,.623,.7934,.3753,.8245,.4592,.7907,.4592,.3956,.077,.3789,.125,.6396,.021,.3271,.7852,.6396,.021,.5936,.0132,.7347,.7677,.7676,.8176,.7502,.8115,.6233,.1221,.6233,.1221,.8719,.0522,.8853,.1071
                    ,.6866,.4542,.8548,.237,.9574,.7747,.9574,.7747,.9218,.7849,.9394,.7486,.6469,.1311,.6233,.1221,.6774,.1954,.6469,.1311,.8027,.7251,.7506,.718,.7793,.6778,.8027,.7251,.3495,.898,.3738,.8117,.3738,.946,.8256,.8508,.8027,.7251,.8256,.5955,.7788,.6376,.7736,.5967,.8256,.8508,.7863,.8398,.0665,.8637
                    ,.0808,.8333,.8022,.9486,.781,.9001,.8038,.9073,.8038,.9073,.781,.9001,.8038,.8773,.8027,.7251,.7786,.5606,.1035,.4584,.0572,.4237,.1278,.4276,.1228,.486,.1349,.4991,.2457,.1431,.201,.133,.2291,.1048,.2603,.1112,.2708,.0817,.1851,.2688,.0427,.3965,.0131,.3625,.101,.2858,.1446,.2425,.7085,.7397
                    ,.7043,.796,.6468,.7238,.6584,.624,.7085,.7397,.7013,.6175,.6618,.5823,.6359,.592,.0825,.45,.4218,.954,.4336,.9355,.4301,.9628,.6089,.888,.5565,.7631,.6419,.9036,.6241,.9728,.6303,.9355,.6303,.9858,.5474,.5791,.5256,.5615,.5964,.5648,.589,.7317,.6621,.909,.6031,.5971,.6377,.6011,.8817,.5118
                    ,.8997,.5043,.8997,.7221,.5567,.6913,.4778,.7836,.4775,.7203,.8889,.8669,.8788,.926,.8523,.8484,.8957,.8461,.8518,.796,.8748,.8146,.5951,.9009,.5668,.8738,.546,.865,.391,.6742,.3826,.639,.391,.5441,.9431,.6645,.9431,.7193,.9258,.6921,.9461,.5043,.9461,.6381,.9258,.5983,.9863,.3766,.9863,.4437
                    ,.9698,.4011,.6257,.5489,.6372,.5043,.6532,.5531,.5653,.5169,.5286,.5372,.1214,.7174,.1326,.6713,.1364,.7002,.0618,.7046,.0307,.756,.3826,.7116,.3954,.7006,.3954,.7761,.0928,.7844,.1176,.7652,.0652,.8068,.0307,.756,.2221,.0646,.2816,.0456,.2816,.0456,.1364,.6,.0818,.653,.0917,.6067,.0661,.5651
                    ,.1224,.5441,.2966,.9469,.2819,.8776,.2967,.8711,.3234,.8117,.2819,.8776,.2929,.8175,.037,.6031,.0131,.683,.4971,.5552,.4759,.5604,.4851,.5252,.7646,.3923,.7278,.4138,.7518,.3753,.4523,.909,.4325,.8089,.2132,.759,.1805,.6521,.2335,.6356,.2335,.6356,.2469,.7453,.1836,.7188,.1776,.7718,.8999,.2808
                    ,.8854,.3723,.8692,.3765,.8761,.7486,.8957,.7703,.891,.7952,.4218,.7534,.4394,.6523,.8999,.452,.8515,.4389,.4394,.6523,.8253,.0895,.8092,.1806,.7881,.1319,.7347,.9453,.7549,.8773,.7549,.9562,.7278,.4138,.7421,.4254,.7278,.4138,.7464,.4531,.1625,.7455,.2558,.5843,.2518,.5441,.7824,.2642,.74,.3488
                    ,.7505,.2929,.1692,.7712,.305,.0132,.3294,.0184,.7043,.796,.6981,.8987,.7085,.7397,.7013,.6175,.2154,.0943,.2154,.0943,.2221,.0646,.4218,.954,.4336,.9868,.5136,.9831,.5026,.9708,.5136,.9355,.8817,.5118,.8997,.7221,.8518,.5391,.4765,.9355,.4765,.9745,.4597,.9626,.5397,.948,.556,.9355,.556,.9714
                    ,.2426,.7983,.2426,.9104,.1625,.8225,.4665,.5867,.5183,.596,.5183,.596,.4665,.5867,.8957,.8461,.8889,.8669,.8957,.8461,.5339,.8763,.9514,.0444,.962,.0132,.962,.1265,.493,.8711,.4915,.8999,.0131,.683,.0131,.683,.0307,.756,.0307,.756,.6918,.5094,.4851,.5252,.2816,.0456,.3234,.9711,.2966,.9469
                    ,.2967,.8711,.2967,.8711,.2819,.8776,.3234,.8117,.7278,.0778,.7664,.035,.4914,.5769,.4461,.5262,.4851,.5252,.891,.7952,.8945,.8181,.2558,.5843,.2335,.6356,.2335,.6356,.2558,.7494,.4915,.8999,.2374,.7701,.8999,.452,.891,.7952,.891,.7952,.4394,.6523,.4665,.5867,.7531,.1746,.7351,.1295,.8253,.0895
                    ,.8253,.0132,.8253,.0132,.7824,.2642,.7446,.2142,.9861,.2808,.9861,.3501,.9698,.3185,.5979,.9692,.5822,.9528,.5979,.9355,.7278,.4138,.7318,.472,.7646,.4763,.7318,.472,.7319,.2536,.7296,.2901,.3294,.0184,.3492,.0303,.8027,.7251,.8256,.5955,.8027,.7251,.8256,.5955,.2816,.0456,.305,.0132,.4851,.5252
                    ,.7496,.0377,.7824,.2642,.7824,.2642,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.ColorKind, new Float32Array([
                    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                    ,1,1,1,1,1,1,1,1,1,1,1,1,1,1
                ]),
                false);

                _i = new Float32Array(1964);
                _i.set([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0
                ,0,0,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(491);
                REPEAT(_i, 0, 491, 9);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Multimaterial#1");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 453, 0, 936, this);
                new _B.SubMesh(1, 453, 38, 936, 120, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
        }

        Helm.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(5);
        };
        return Helm;
    })(QI.Mesh);
    Warrior.Helm = Helm;

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
    Warrior.freshenShadowRenderLists = freshenShadowRenderLists;
})(Warrior || (Warrior = {}));