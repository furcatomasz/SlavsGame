// File generated with Tower of Babel version: 5.3-beta on 08/13/17
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
        scene.clearColor    = new _B.Color3(0,0,0);
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
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Sword", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Axe", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Shield", true);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Warrior", "Warrior.001", true);
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
            mesh = new Sword("Sword", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Axe("Axe", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Shield("Shield", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
            mesh = new Warrior_001("Warrior.001", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
        }

        if (sceneTransitionName && matLoaded) {
            QI.SceneTransition.perform(sceneTransitionName, waitingMeshes, overriddenMillis, overriddenSound, options);
        }
    }
    Warrior.initScene = initScene;
    var meshLib = new Array(10);
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
                case "Sword":
                    src = getViable(6);
                    if (src === null){
                        ret = new Sword("Sword", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[6].push(ret);
                    }else{
                        ret = new Sword("Sword" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Axe":
                    src = getViable(7);
                    if (src === null){
                        ret = new Axe("Axe", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[7].push(ret);
                    }else{
                        ret = new Axe("Axe" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Shield":
                    src = getViable(8);
                    if (src === null){
                        ret = new Shield("Shield", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[8].push(ret);
                    }else{
                        ret = new Shield("Shield" + "_" + cloneCount++, this._scene, null, src);
                        clonedVerts += ret.getTotalVertices();
                    }
                    break;
                case "Warrior.001":
                    src = getViable(9);
                    if (src === null){
                        ret = new Warrior_001("Warrior.001", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[9].push(ret);
                    }else{
                        ret = new Warrior_001("Warrior.001" + "_" + cloneCount++, this._scene, null, src);
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
                if (!waitingMeshes[i].initComplete) continue;
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

        fName = "short_sword.png";
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

        fName = "Small_shield.png";
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

        material = scene.getMaterialByID("Warrior.Material.003");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.003", scene);
            material.ambientColor  = new _B.Color3(.1845,.1845,.1845);
            material.diffuseColor  = new _B.Color3(.1476,.1476,.1476);
            material.emissiveColor = new _B.Color3(.0793,.0793,.0793);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.000");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.000", scene);
            material.ambientColor  = new _B.Color3(.3032,.2344,.0755);
            material.diffuseColor  = new _B.Color3(.3032,.2344,.0755);
            material.emissiveColor = new _B.Color3(.1243,.0961,.031);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
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

        material = scene.getMaterialByID("Warrior.short_sword");
        if (!material){
            material = new _B.StandardMaterial("Warrior.short_sword", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(.112,.112,.112);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("short_sword.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.004");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.004", scene);
            material.ambientColor  = new _B.Color3(.0578,.0365,.0311);
            material.diffuseColor  = new _B.Color3(.0462,.0292,.0249);
            material.emissiveColor = new _B.Color3(.0428,.027,.023);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material", scene);
            material.ambientColor  = new _B.Color3(.1107,.1107,.1107);
            material.diffuseColor  = new _B.Color3(.0885,.0885,.0885);
            material.emissiveColor = new _B.Color3(.0675,.0675,.0675);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.005");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.005", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(.328,.328,.328);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Shield");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Shield", scene);
            material.ambientColor  = new _B.Color3(.8,.8,.8);
            material.diffuseColor  = new _B.Color3(.64,.64,.64);
            material.emissiveColor = new _B.Color3(.336,.336,.336);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        txtBuffer = TOWER_OF_BABEL.Preloader.findTextureBuffer("Small_shield.png");
        txtBuffer.applyWhenReady(material, TOWER_OF_BABEL.TextureBuffer.DIFFUSE_TEX, onTexturesLoaded);
        } else material.markDirty();

        material = scene.getMaterialByID("Warrior.Material.006");
        if (!material){
            material = new _B.StandardMaterial("Warrior.Material.006", scene);
            material.ambientColor  = new _B.Color3(.6983,.5189,.3011);
            material.diffuseColor  = new _B.Color3(.6983,.5189,.3011);
            material.emissiveColor = new _B.Color3(.1047,.0778,.0452);
            material.specularColor = new _B.Color3(0,0,0);
            material.specularPower = 50;
            material.alpha =  1;
            material.backFaceCulling = true;
            material.checkReadyOnlyOnce = false;
            material.maxSimultaneousLights = 4;
        } else material.markDirty();
        var multiMaterial;
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#0", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.002"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.003"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.000"));
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#1", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Hair"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.001"));
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#2", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Hair"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Gloves"));
        multiMaterial = new _B.MultiMaterial("Warrior.Multimaterial#3", scene);
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.004"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material"));
        multiMaterial.subMaterials.push(scene.getMaterialByID("Warrior.Material.005"));

        matLoaded = pendingTextures === 0;
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
        {frame: 20, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 30, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 51, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 59, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 83, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 90, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 108, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 120, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 180, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 190, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 252, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.L", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.3253,.2268,-.1367,1));
        bone.length = .51;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 1, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8414,-.1356,1)},
        {frame: 2, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8502,-.1343,1)},
        {frame: 3, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8714,-.137,1)},
        {frame: 4, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.9043,-.146,1)},
        {frame: 5, value: _M(-1,0,0,0,0,-.9786,.2057,0,0,.2057,.9786,0,.672,.9412,-.2351,1)},
        {frame: 6, value: _M(-1,0,0,0,0,-.9946,.1041,0,0,.1041,.9946,0,.5362,.9897,-.2952,1)},
        {frame: 7, value: _M(-1,0,0,0,0,-.9935,.114,0,0,.114,.9935,0,.4469,.9879,-.2911,1)},
        {frame: 8, value: _M(-1,0,0,0,0,-.9881,.154,0,0,.154,.9881,0,.4151,.9824,-.2645,1)},
        {frame: 9, value: _M(-1,0,0,0,0,-.9693,.2459,0,0,.2459,.9693,0,.6658,.9961,-.1821,1)},
        {frame: 10, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.9742,-.1096,1)},
        {frame: 11, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 20, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 41, value: _M(-1,0,0,0,0,-.9994,.0348,0,0,.0348,.9994,0,.9165,.8398,-.1367,1)},
        {frame: 42, value: _M(-1,0,0,0,0,-.6511,-.759,0,0,-.759,.6511,0,.9165,.8398,-.1367,1)},
        {frame: 43, value: _M(-1,0,0,0,0,.1866,-.9824,0,0,-.9824,-.1866,0,.9165,.8398,-.1367,1)},
        {frame: 44, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,.8398,-.1367,1)},
        {frame: 45, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,.6463,-.1466,1)},
        {frame: 46, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,.1669,-.1711,1)},
        {frame: 47, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,-.2281,-.1912,1)},
        {frame: 48, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,-.3995,-.2,1)},
        {frame: 51, value: _M(-1,0,0,0,0,.448,-.894,0,0,-.894,-.448,0,.9165,-.3995,-.2,1)},
        {frame: 59, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.8579,-.5137,0,0,-.5137,.8579,0,.2699,-.8492,-1.3884,1)},
        {frame: 62, value: _M(-1,0,0,0,0,-.7941,-.6077,0,0,-.6077,.7941,0,.2699,-.4581,-1.3411,1)},
        {frame: 63, value: _M(-1,0,0,0,0,-.8404,-.542,0,0,-.542,.8404,0,.2664,-.1165,-1.2064,1)},
        {frame: 64, value: _M(-1,0,0,0,0,-.9403,-.3402,0,0,-.3402,.9403,0,.2566,.2464,-1.0108,1)},
        {frame: 65, value: _M(-1,0,0,0,0,-.9952,-.0981,0,0,-.0981,.9952,0,.2462,.587,-.826,1)},
        {frame: 66, value: _M(-1,0,0,0,0,-.9722,.2341,0,0,.2341,.9722,0,.2373,.912,-.6556,1)},
        {frame: 67, value: _M(-1,0,0,0,0,-.9047,.4261,0,0,.4261,.9047,0,.2262,1.1761,-.5251,1)},
        {frame: 68, value: _M(-1,0,0,0,0,-.9229,.385,0,0,.385,.9229,0,.2132,1.3664,-.5049,1)},
        {frame: 69, value: _M(-1,0,0,0,0,-.9737,.2279,0,0,.2279,.9737,0,.196,1.4568,-.454,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,.1715,1.2165,-.1367,1)},
        {frame: 71, value: _M(-1,0,0,0,0,-.9992,-.04,0,0,-.04,.9992,0,.1779,.9291,-.0874,1)},
        {frame: 72, value: _M(-1,0,0,0,0,-1,-.0017,0,0,-.0017,1,0,.1915,.613,-.1065,1)},
        {frame: 73, value: _M(-1,0,0,0,0,-.9986,-.0532,0,0,-.0532,.9986,0,.2047,.2226,-.1297,1)},
        {frame: 74, value: _M(-1,0,0,0,0,-.9866,-.1631,0,0,-.1631,.9866,0,.2196,-.204,-.1803,1)},
        {frame: 75, value: _M(-1,0,0,0,0,-.9769,-.2138,0,0,-.2138,.9769,0,.2355,-.5396,-.2838,1)},
        {frame: 76, value: _M(-1,0,0,0,0,-.9993,.0379,0,0,.0379,.9993,0,.2545,-.7366,-.4554,1)},
        {frame: 77, value: _M(-1,0,0,0,0,-.9579,.2871,0,0,.2871,.9579,0,.2699,-.8562,-.6738,1)},
        {frame: 78, value: _M(-1,0,0,0,0,-.9925,.1223,0,0,.1223,.9925,0,.2767,-.9946,-.8849,1)},
        {frame: 79, value: _M(-1,0,0,0,0,-.9828,-.1844,0,0,-.1844,.9828,0,.2776,-1.0954,-1.1108,1)},
        {frame: 80, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1)},
        {frame: 83, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1)},
        {frame: 90, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 108, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 120, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 180, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 190, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 252, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.L", skeleton,skeleton.bones[1], _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
        bone.length = .5841;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 20, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 51, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 59, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 61, value: _M(-1,0,0,0,0,.0209,.9998,0,0,.9998,-.0209,0,0,.1648,-.0002,1)},
        {frame: 62, value: _M(-1,0,0,0,0,-.0977,.9952,0,0,.9952,.0977,0,0,.1648,-.0002,1)},
        {frame: 63, value: _M(-1,0,0,0,0,-.2333,.9724,0,0,.9724,.2333,0,0,.1648,-.0002,1)},
        {frame: 64, value: _M(-1,0,0,0,0,-.3998,.9166,0,0,.9166,.3998,0,0,.1648,-.0002,1)},
        {frame: 65, value: _M(-1,0,0,0,0,-.5765,.8171,0,0,.8171,.5765,0,0,.1648,-.0002,1)},
        {frame: 66, value: _M(-1,0,0,0,0,-.7465,.6654,0,0,.6654,.7465,0,0,.1648,-.0002,1)},
        {frame: 67, value: _M(-1,0,0,0,0,-.8681,.4964,0,0,.4964,.8681,0,0,.1648,-.0002,1)},
        {frame: 68, value: _M(-1,0,0,0,0,-.9453,.3262,0,0,.3262,.9453,0,0,.1648,-.0002,1)},
        {frame: 69, value: _M(-1,0,0,0,0,-.9844,.1758,0,0,.1758,.9844,0,0,.1648,-.0002,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 71, value: _M(-1,0,0,0,0,-.995,.0995,0,0,.0995,.995,0,0,.1648,-.0002,1)},
        {frame: 72, value: _M(-1,0,0,0,0,-.9941,.1089,0,0,.1089,.9941,0,0,.1648,-.0002,1)},
        {frame: 73, value: _M(-1,0,0,0,0,-.9924,.1233,0,0,.1233,.9924,0,0,.1648,-.0002,1)},
        {frame: 74, value: _M(-1,0,0,0,0,-.9847,.1743,0,0,.1743,.9847,0,0,.1648,-.0002,1)},
        {frame: 75, value: _M(-1,0,0,0,0,-.9544,.2987,0,0,.2987,.9544,0,0,.1648,-.0002,1)},
        {frame: 76, value: _M(-1,0,0,0,0,-.8496,.5274,0,0,.5274,.8496,0,0,.1648,-.0002,1)},
        {frame: 77, value: _M(-1,0,0,0,0,-.6369,.771,0,0,.771,.6369,0,0,.1648,-.0002,1)},
        {frame: 78, value: _M(-1,0,0,0,0,-.3618,.9323,0,0,.9323,.3618,0,0,.1648,-.0002,1)},
        {frame: 79, value: _M(-1,0,0,0,0,-.0839,.9965,0,0,.9965,.0839,0,0,.1648,-.0002,1)},
        {frame: 80, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 83, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 90, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 108, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 120, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 180, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 190, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 252, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.R", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.3253,.2268,-.1367,1));
        bone.length = .51;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 20, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 31, value: _M(-1,0,0,0,0,-.9543,.2989,0,0,.2989,.9543,0,-.9244,-.4429,-.1367,1)},
        {frame: 32, value: _M(-1,0,0,0,0,-.97,.243,0,0,.243,.97,0,-.9244,-.4429,-.1367,1)},
        {frame: 33, value: _M(-1,0,0,0,0,-.996,.0889,0,0,.0889,.996,0,-.9244,-.4429,-.1367,1)},
        {frame: 34, value: _M(-1,0,0,0,0,-.973,-.2308,0,0,-.2308,.973,0,-.9244,-.4429,-.1367,1)},
        {frame: 35, value: _M(-1,0,0,0,0,-.763,-.6464,0,0,-.6464,.763,0,-.9244,-.4429,-.1367,1)},
        {frame: 36, value: _M(-1,0,0,0,0,-.379,-.9254,0,0,-.9254,.379,0,-.9244,-.4429,-.1367,1)},
        {frame: 37, value: _M(-1,0,0,0,0,-.0333,-.9994,0,0,-.9994,.0333,0,-.9244,-.4429,-.1367,1)},
        {frame: 38, value: _M(-1,0,0,0,0,.2462,-.9692,0,0,-.9692,-.2462,0,-.9244,-.4429,-.1367,1)},
        {frame: 39, value: _M(-1,0,0,0,0,.442,-.897,0,0,-.897,-.442,0,-.9244,-.4429,-.1367,1)},
        {frame: 40, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.1367,1)},
        {frame: 45, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.1466,1)},
        {frame: 46, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.1711,1)},
        {frame: 47, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.1912,1)},
        {frame: 48, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.2,1)},
        {frame: 51, value: _M(-1,0,0,0,0,.4992,-.8665,0,0,-.8665,-.4992,0,-.9244,-.4429,-.2,1)},
        {frame: 59, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.9992,-.0397,0,0,-.0397,.9992,0,-.1779,1.0152,-.1152,1)},
        {frame: 62, value: _M(-1,0,0,0,0,-1,-.0017,0,0,-.0017,1,0,-.1915,.613,-.1065,1)},
        {frame: 63, value: _M(-1,0,0,0,0,-.9985,-.0542,0,0,-.0542,.9985,0,-.2047,.2226,-.1297,1)},
        {frame: 64, value: _M(-1,0,0,0,0,-.9865,-.1636,0,0,-.1636,.9865,0,-.2196,-.204,-.1803,1)},
        {frame: 65, value: _M(-1,0,0,0,0,-.9769,-.2138,0,0,-.2138,.9769,0,-.2355,-.5396,-.2838,1)},
        {frame: 66, value: _M(-1,0,0,0,0,-.9992,.04,0,0,.04,.9992,0,-.2545,-.7366,-.4554,1)},
        {frame: 67, value: _M(-1,0,0,0,0,-.9579,.2871,0,0,.2871,.9579,0,-.2699,-.8562,-.6738,1)},
        {frame: 68, value: _M(-1,0,0,0,0,-.9921,.1253,0,0,.1253,.9921,0,-.2767,-.9946,-.8849,1)},
        {frame: 69, value: _M(-1,0,0,0,0,-.9828,-.1844,0,0,-.1844,.9828,0,-.2776,-1.0954,-1.1108,1)},
        {frame: 70, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,-.2776,-1.0515,-1.3797,1)},
        {frame: 71, value: _M(-1,0,0,0,0,-.8306,-.5568,0,0,-.5568,.8306,0,-.2755,-.7934,-1.4064,1)},
        {frame: 72, value: _M(-1,0,0,0,0,-.7941,-.6077,0,0,-.6077,.7941,0,-.2699,-.4581,-1.3411,1)},
        {frame: 73, value: _M(-1,0,0,0,0,-.8402,-.5423,0,0,-.5423,.8402,0,-.2633,-.1095,-1.2087,1)},
        {frame: 74, value: _M(-1,0,0,0,0,-.9401,-.3409,0,0,-.3409,.9401,0,-.2551,.2614,-1.0157,1)},
        {frame: 75, value: _M(-1,0,0,0,0,-.9952,-.0981,0,0,-.0981,.9952,0,-.2462,.587,-.826,1)},
        {frame: 76, value: _M(-1,0,0,0,0,-.9722,.2343,0,0,.2343,.9722,0,-.2373,.8604,-.639,1)},
        {frame: 77, value: _M(-1,0,0,0,0,-.9047,.4261,0,0,.4261,.9047,0,-.2262,1.0607,-.4879,1)},
        {frame: 78, value: _M(-1,0,0,0,0,-.9229,.385,0,0,.385,.9229,0,-.2132,1.1945,-.4495,1)},
        {frame: 79, value: _M(-1,0,0,0,0,-.9737,.2279,0,0,.2279,.9737,0,-.196,1.2576,-.3899,1)},
        {frame: 80, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 83, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
        {frame: 90, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 91, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.5175,-.1367,1)},
        {frame: 92, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.7276,-.1367,1)},
        {frame: 93, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.9974,-.1367,1)},
        {frame: 94, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-1.2075,-.1367,1)},
        {frame: 95, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-1.2821,-.1367,1)},
        {frame: 98, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.9358,-.1367,1)},
        {frame: 102, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.9134,-.1367,1)},
        {frame: 103, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.8473,-.1367,1)},
        {frame: 104, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.7465,-.1367,1)},
        {frame: 105, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.6322,-.1367,1)},
        {frame: 106, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.5314,-.1367,1)},
        {frame: 107, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4653,-.1367,1)},
        {frame: 108, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 120, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.4565,-.0486,-.1367,1)},
        {frame: 180, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.4565,-.0486,-.1367,1)},
        {frame: 190, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)},
        {frame: 252, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.R", skeleton,skeleton.bones[3], _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
        bone.length = .5841;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 1, value: _M(-.8829,-.4615,.0871,0,.4518,-.784,.4258,0,-.1282,.4152,.9006,0,0,.1648,-.0002,1)},
        {frame: 2, value: _M(-.8555,-.5057,.1112,0,.5022,-.7578,.4166,0,-.1264,.4122,.9023,0,0,.1648,-.0002,1)},
        {frame: 3, value: _M(-.8258,-.5478,.1345,0,.5501,-.7296,.4062,0,-.1244,.4094,.9039,0,0,.1648,-.0002,1)},
        {frame: 4, value: _M(-.8138,-.5632,.1431,0,.5678,-.7184,.4019,0,-.1235,.4083,.9044,0,0,.1648,-.0002,1)},
        {frame: 9, value: _M(-.8555,-.5057,.1112,0,.5022,-.7578,.4166,0,-.1264,.4122,.9023,0,0,.1648,-.0002,1)},
        {frame: 10, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 20, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 30, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 51, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 59, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 61, value: _M(-1,0,0,0,0,-.9951,.0986,0,0,.0986,.9951,0,0,.1648,-.0002,1)},
        {frame: 62, value: _M(-1,0,0,0,0,-.9941,.1089,0,0,.1089,.9941,0,0,.1648,-.0002,1)},
        {frame: 63, value: _M(-1,0,0,0,0,-.9927,.1204,0,0,.1204,.9927,0,0,.1648,-.0002,1)},
        {frame: 64, value: _M(-1,0,0,0,0,-.9863,.1652,0,0,.1652,.9863,0,0,.1648,-.0002,1)},
        {frame: 65, value: _M(-1,0,0,0,0,-.9544,.2987,0,0,.2987,.9544,0,0,.1648,-.0002,1)},
        {frame: 66, value: _M(-1,0,0,0,0,-.8415,.5403,0,0,.5403,.8415,0,0,.1648,-.0002,1)},
        {frame: 67, value: _M(-1,0,0,0,0,-.6369,.771,0,0,.771,.6369,0,0,.1648,-.0002,1)},
        {frame: 68, value: _M(-1,0,0,0,0,-.372,.9282,0,0,.9282,.372,0,0,.1648,-.0002,1)},
        {frame: 69, value: _M(-1,0,0,0,0,-.0839,.9965,0,0,.9965,.0839,0,0,.1648,-.0002,1)},
        {frame: 70, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
        {frame: 71, value: _M(-1,0,0,0,0,.0214,.9998,0,0,.9998,-.0214,0,0,.1648,-.0002,1)},
        {frame: 72, value: _M(-1,0,0,0,0,-.0977,.9952,0,0,.9952,.0977,0,0,.1648,-.0002,1)},
        {frame: 73, value: _M(-1,0,0,0,0,-.2393,.971,0,0,.971,.2393,0,0,.1648,-.0002,1)},
        {frame: 74, value: _M(-1,0,0,0,0,-.4082,.9129,0,0,.9129,.4082,0,0,.1648,-.0002,1)},
        {frame: 75, value: _M(-1,0,0,0,0,-.5765,.8171,0,0,.8171,.5765,0,0,.1648,-.0002,1)},
        {frame: 76, value: _M(-1,0,0,0,0,-.74,.6726,0,0,.6726,.74,0,0,.1648,-.0002,1)},
        {frame: 77, value: _M(-1,0,0,0,0,-.8681,.4964,0,0,.4964,.8681,0,0,.1648,-.0002,1)},
        {frame: 78, value: _M(-1,0,0,0,0,-.9467,.3221,0,0,.3221,.9467,0,0,.1648,-.0002,1)},
        {frame: 79, value: _M(-1,0,0,0,0,-.9844,.1758,0,0,.1758,.9844,0,0,.1648,-.0002,1)},
        {frame: 80, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 83, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
        {frame: 90, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 108, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 120, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 180, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 190, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 252, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hips", skeleton,skeleton.bones[0], _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3245,1), _M(1,0,0,0,0,.102,-.9948,0,0,.9948,.102,0,0,.2173,-2.5278,1));
        bone.length = .4281;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 1, value: _M(.9679,.2513,.001,0,-.0245,.0983,-.9949,0,-.2501,.9629,.1013,0,0,.2118,-2.2928,1)},
        {frame: 2, value: _M(.9499,.3127,.0007,0,-.0293,.0913,-.9954,0,-.3113,.9455,.0959,0,0,.1827,-2.216,1)},
        {frame: 3, value: _M(.9062,.4228,-.0081,0,-.0419,.0708,-.9966,0,-.4208,.9035,.0819,0,0,.1137,-2.1432,1)},
        {frame: 4, value: _M(.8298,.5572,-.0303,0,-.0593,.034,-.9977,0,-.5549,.8297,.0612,0,0,.0075,-2.1235,1)},
        {frame: 5, value: _M(.6696,.7303,-.1355,0,-.0758,-.1143,-.9906,0,-.7388,.6735,-.0212,0,0,-.1764,-2.3632,1)},
        {frame: 6, value: _M(.6636,.713,-.2264,0,-.0784,-.2347,-.9689,0,-.7439,.6608,-.0998,0,0,-.2456,-2.2803,1)},
        {frame: 7, value: _M(.6653,.7084,-.2358,0,-.0751,-.2507,-.9651,0,-.7428,.6598,-.1136,0,0,-.3076,-2.2616,1)},
        {frame: 8, value: _M(.6696,.7038,-.2374,0,-.0758,-.2532,-.9644,0,-.7388,.6638,-.1162,0,0,-.337,-2.261,1)},
        {frame: 9, value: _M(.9333,.3431,-.106,0,-.0633,-.1334,-.989,0,-.3535,.9298,-.1028,0,0,-.1921,-2.2622,1)},
        {frame: 10, value: _M(.9952,-.0978,0,0,.01,.1016,-.9948,0,.0973,.99,.102,0,0,.1625,-2.2419,1)},
        {frame: 11, value: _M(.9952,-.0933,-.0296,0,.01,.3977,-.9175,0,.0973,.9128,.3967,0,0,.5898,-1.7974,1)},
        {frame: 12, value: _M(.9952,-.0933,-.0296,0,.01,.3977,-.9175,0,.0973,.9128,.3967,0,0,.7049,-1.7769,1)},
        {frame: 13, value: _M(.9952,-.0933,-.0296,0,.01,.3977,-.9175,0,.0973,.9128,.3967,0,0,.7522,-1.7685,1)},
        {frame: 14, value: _M(.9952,-.0933,-.0296,0,.01,.3977,-.9175,0,.0973,.9128,.3967,0,0,.7577,-1.7675,1)},
        {frame: 15, value: _M(.997,-.0735,-.0249,0,.005,.3807,-.9247,0,.0774,.9218,.3799,0,0,.7243,-1.8018,1)},
        {frame: 16, value: _M(.9998,-.0149,-.0133,0,-.0076,.3295,-.9441,0,.0184,.944,.3294,0,0,.6271,-1.9017,1)},
        {frame: 17, value: _M(.9975,.0707,-.0021,0,-.02,.2528,-.9673,0,-.0678,.9649,.2536,0,0,.4875,-2.0452,1)},
        {frame: 18, value: _M(.9877,.1563,.0022,0,-.0253,.1738,-.9845,0,-.1543,.9723,.1756,0,0,.3478,-2.1887,1)},
        {frame: 19, value: _M(.9766,.2151,.0011,0,-.0249,.1182,-.9927,0,-.2136,.9694,.1208,0,0,.2507,-2.2885,1)},
        {frame: 20, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 30, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.1652,-2.3281,1)},
        {frame: 31, value: _M(.972,.2311,-.0425,0,-.024,-.0822,-.9963,0,-.2337,.9695,-.0744,0,0,.1639,-2.3158,1)},
        {frame: 32, value: _M(.972,.2196,-.0835,0,-.024,-.261,-.965,0,-.2337,.94,-.2484,0,0,.1551,-2.2296,1)},
        {frame: 33, value: _M(.972,.2208,-.0801,0,-.024,-.246,-.969,0,-.2337,.9438,-.2338,0,0,.1395,-2.0754,1)},
        {frame: 34, value: _M(.972,.2243,-.0697,0,-.024,-.2005,-.9794,0,-.2337,.9537,-.1895,0,0,.1206,-1.8666,1)},
        {frame: 35, value: _M(.972,.2286,-.0542,0,-.024,-.133,-.9908,0,-.2337,.9644,-.1238,0,0,.1035,-1.6244,1)},
        {frame: 36, value: _M(.972,.2318,-.0382,0,-.024,-.0639,-.9977,0,-.2337,.9707,-.0565,0,0,.0942,-1.3887,1)},
        {frame: 37, value: _M(.972,.2335,-.0256,0,-.024,-.0099,-.9997,0,-.2337,.9723,-.0041,0,0,.0949,-1.1888,1)},
        {frame: 38, value: _M(.972,.2345,-.0141,0,-.024,.0392,-.9989,0,-.2337,.9713,.0437,0,0,.0925,-.991,1)},
        {frame: 39, value: _M(.972,.2349,-.0037,0,-.024,.0836,-.9962,0,-.2337,.9684,.0869,0,0,.1149,-.8115,1)},
        {frame: 40, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2167,-.7388,1)},
        {frame: 41, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.4206,-.7341,1)},
        {frame: 42, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.7359,-.7442,1)},
        {frame: 43, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,1.0814,-.7513,1)},
        {frame: 44, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,1.3615,-.7388,1)},
        {frame: 45, value: _M(.9783,.2066,.0151,0,-.0496,.3042,-.9513,0,-.2011,.9299,.3079,0,0,1.5819,-.6334,1)},
        {frame: 46, value: _M(.9923,.1215,.0229,0,-.079,.7658,-.6382,0,-.0951,.6314,.7696,0,0,1.7522,-.411,1)},
        {frame: 47, value: _M(.9984,.057,-.0062,0,-.0569,.9718,-.2288,0,-.007,.2288,.9735,0,0,1.862,-.2308,1)},
        {frame: 48, value: _M(.999,.0358,-.0258,0,-.0369,.9983,-.0454,0,.0242,.0463,.9986,0,0,1.8934,-.1543,1)},
        {frame: 51, value: _M(.999,.0358,-.0258,0,-.0369,.9983,-.0454,0,.0242,.0463,.9986,0,0,1.8934,-.1543,1)},
        {frame: 59, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 61, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.552,-2.2588,1)},
        {frame: 62, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.584,-2.1674,1)},
        {frame: 63, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.56,-2.1287,1)},
        {frame: 64, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5233,-2.1881,1)},
        {frame: 65, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 66, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5302,-2.4487,1)},
        {frame: 67, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.5352,1)},
        {frame: 68, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5302,-2.4943,1)},
        {frame: 69, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5161,-2.4049,1)},
        {frame: 70, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 71, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5548,-2.2174,1)},
        {frame: 72, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5821,-2.1483,1)},
        {frame: 73, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.56,-2.1287,1)},
        {frame: 74, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5233,-2.1881,1)},
        {frame: 75, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 76, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5302,-2.4487,1)},
        {frame: 77, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5392,-2.5352,1)},
        {frame: 78, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5302,-2.4943,1)},
        {frame: 79, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5161,-2.4049,1)},
        {frame: 80, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 83, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
        {frame: 90, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 91, value: _M(.9667,.256,0,0,-.0261,.0986,-.9948,0,-.2546,.9616,.102,0,0,.1829,-2.2802,1)},
        {frame: 92, value: _M(.9471,.3211,0,0,-.0328,.0966,-.9948,0,-.3194,.9421,.102,0,0,.0861,-2.1602,1)},
        {frame: 93, value: _M(.9079,.4193,0,0,-.0428,.0926,-.9948,0,-.4171,.9031,.102,0,0,-.0382,-2.0062,1)},
        {frame: 94, value: _M(.8521,.5233,0,0,-.0534,.087,-.9948,0,-.5206,.8477,.102,0,0,-.1349,-1.8862,1)},
        {frame: 95, value: _M(.7913,.6115,0,0,-.0624,.0807,-.9948,0,-.6083,.7871,.102,0,0,-.1693,-1.8436,1)},
        {frame: 96, value: _M(.6982,.7159,0,0,-.0731,.0712,-.9948,0,-.7122,.6945,.102,0,0,-.1693,-1.8436,1)},
        {frame: 97, value: _M(.6363,.7714,0,0,-.0787,.0649,-.9948,0,-.7674,.633,.102,0,0,-.1693,-1.8436,1)},
        {frame: 98, value: _M(.8755,.4832,0,0,-.0493,.0893,-.9948,0,-.4807,.8709,.102,0,0,.4293,-2.0559,1)},
        {frame: 99, value: _M(.8755,.4832,0,0,-.0493,.0893,-.9948,0,-.4807,.8709,.102,0,0,.368,-2.0622,1)},
        {frame: 100, value: _M(.8755,.4832,0,0,-.0493,.0893,-.9948,0,-.4807,.8709,.102,0,0,.3414,-2.0649,1)},
        {frame: 101, value: _M(.8755,.4832,0,0,-.0493,.0893,-.9948,0,-.4807,.8709,.102,0,0,.3271,-2.0664,1)},
        {frame: 102, value: _M(.8813,.4726,0,0,-.0482,.0899,-.9948,0,-.4701,.8767,.102,0,0,.3062,-2.0796,1)},
        {frame: 103, value: _M(.8976,.4407,0,0,-.045,.0916,-.9948,0,-.4384,.893,.102,0,0,.284,-2.1148,1)},
        {frame: 104, value: _M(.9204,.391,0,0,-.0399,.0939,-.9948,0,-.389,.9156,.102,0,0,.262,-2.1672,1)},
        {frame: 105, value: _M(.9429,.3332,0,0,-.034,.0962,-.9948,0,-.3315,.9379,.102,0,0,.2427,-2.226,1)},
        {frame: 106, value: _M(.9596,.2812,0,0,-.0287,.0979,-.9948,0,-.2797,.9546,.102,0,0,.2283,-2.2776,1)},
        {frame: 107, value: _M(.9691,.2467,0,0,-.0252,.0989,-.9948,0,-.2454,.964,.102,0,0,.2199,-2.3114,1)},
        {frame: 108, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 120, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4285,1)},
        {frame: 121, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4286,1)},
        {frame: 122, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4287,1)},
        {frame: 123, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.429,1)},
        {frame: 124, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4294,1)},
        {frame: 125, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4299,1)},
        {frame: 126, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4306,1)},
        {frame: 127, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4313,1)},
        {frame: 128, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4322,1)},
        {frame: 129, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4331,1)},
        {frame: 130, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4341,1)},
        {frame: 131, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4352,1)},
        {frame: 132, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4364,1)},
        {frame: 133, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4376,1)},
        {frame: 134, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4388,1)},
        {frame: 135, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4401,1)},
        {frame: 136, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4413,1)},
        {frame: 137, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4426,1)},
        {frame: 138, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4438,1)},
        {frame: 139, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.445,1)},
        {frame: 140, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4461,1)},
        {frame: 141, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4471,1)},
        {frame: 142, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.448,1)},
        {frame: 143, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4489,1)},
        {frame: 144, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4496,1)},
        {frame: 145, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4502,1)},
        {frame: 146, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4507,1)},
        {frame: 147, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4511,1)},
        {frame: 148, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4514,1)},
        {frame: 149, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4516,1)},
        {frame: 152, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4514,1)},
        {frame: 153, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4511,1)},
        {frame: 154, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4507,1)},
        {frame: 155, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4502,1)},
        {frame: 156, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4496,1)},
        {frame: 157, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4489,1)},
        {frame: 158, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.448,1)},
        {frame: 159, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4471,1)},
        {frame: 160, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4461,1)},
        {frame: 161, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.445,1)},
        {frame: 162, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4438,1)},
        {frame: 163, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4426,1)},
        {frame: 164, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4413,1)},
        {frame: 165, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4401,1)},
        {frame: 166, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4388,1)},
        {frame: 167, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4376,1)},
        {frame: 168, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4364,1)},
        {frame: 169, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4352,1)},
        {frame: 170, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4341,1)},
        {frame: 171, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4331,1)},
        {frame: 172, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4322,1)},
        {frame: 173, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4313,1)},
        {frame: 174, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4306,1)},
        {frame: 175, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4299,1)},
        {frame: 176, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4294,1)},
        {frame: 177, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.429,1)},
        {frame: 178, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4287,1)},
        {frame: 179, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4286,1)},
        {frame: 180, value: _M(.9862,.1658,0,0,-.0169,.1006,-.9948,0,-.1649,.981,.102,0,0,.2173,-2.4285,1)},
        {frame: 190, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3228,1)},
        {frame: 191, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)},
        {frame: 192, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3232,1)},
        {frame: 193, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3237,1)},
        {frame: 194, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3245,1)},
        {frame: 195, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3254,1)},
        {frame: 196, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3265,1)},
        {frame: 197, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3277,1)},
        {frame: 198, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.329,1)},
        {frame: 199, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3303,1)},
        {frame: 200, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3315,1)},
        {frame: 201, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3326,1)},
        {frame: 202, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3337,1)},
        {frame: 203, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.335,1)},
        {frame: 204, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3364,1)},
        {frame: 205, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.338,1)},
        {frame: 206, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3396,1)},
        {frame: 207, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3414,1)},
        {frame: 208, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3431,1)},
        {frame: 209, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.345,1)},
        {frame: 210, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3467,1)},
        {frame: 211, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3485,1)},
        {frame: 212, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3501,1)},
        {frame: 213, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3516,1)},
        {frame: 214, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3529,1)},
        {frame: 215, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3541,1)},
        {frame: 216, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.355,1)},
        {frame: 217, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3557,1)},
        {frame: 218, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3563,1)},
        {frame: 219, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3566,1)},
        {frame: 220, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3567,1)},
        {frame: 221, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3566,1)},
        {frame: 222, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3563,1)},
        {frame: 223, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3559,1)},
        {frame: 224, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3553,1)},
        {frame: 225, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3546,1)},
        {frame: 226, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3537,1)},
        {frame: 227, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3526,1)},
        {frame: 228, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3514,1)},
        {frame: 229, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.35,1)},
        {frame: 230, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3485,1)},
        {frame: 231, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3469,1)},
        {frame: 232, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3452,1)},
        {frame: 233, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3434,1)},
        {frame: 234, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3416,1)},
        {frame: 235, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3398,1)},
        {frame: 236, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3379,1)},
        {frame: 237, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3361,1)},
        {frame: 238, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3343,1)},
        {frame: 239, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3326,1)},
        {frame: 240, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.331,1)},
        {frame: 241, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3295,1)},
        {frame: 242, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3282,1)},
        {frame: 243, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.327,1)},
        {frame: 244, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3259,1)},
        {frame: 245, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.325,1)},
        {frame: 246, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3242,1)},
        {frame: 247, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3236,1)},
        {frame: 248, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3232,1)},
        {frame: 249, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.323,1)},
        {frame: 250, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)},
        {frame: 252, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("spine", skeleton,skeleton.bones[5], _M(1,.0005,0,0,-.0005,.9944,-.1056,0,0,.1056,.9944,0,0,.4281,0,1), _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1));
        bone.length = .3874;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 1, value: _M(1,.0007,-.0001,0,-.0007,.9945,-.1043,0,0,.1043,.9945,0,0,.4281,0,1)},
        {frame: 2, value: _M(1,.0067,-.0007,0,-.0068,.9939,-.1098,0,-.0001,.1098,.994,0,0,.4281,0,1)},
        {frame: 3, value: _M(.9997,.0243,-.0027,0,-.0244,.9918,-.1257,0,-.0004,.1257,.9921,0,0,.4281,0,1)},
        {frame: 4, value: _M(.9985,.0538,-.0068,0,-.0542,.9868,-.1524,0,-.0015,.1525,.9883,0,0,.4281,0,1)},
        {frame: 5, value: _M(.99,.1391,-.0233,0,-.1408,.9634,-.2281,0,-.0092,.2291,.9734,0,0,.4281,0,1)},
        {frame: 6, value: _M(.98,.1952,-.0382,0,-.1981,.9403,-.2768,0,-.0182,.2788,.9602,0,0,.4281,0,1)},
        {frame: 7, value: _M(.9833,.1789,-.0343,0,-.1814,.9454,-.2708,0,-.016,.2725,.962,0,0,.4281,0,1)},
        {frame: 8, value: _M(.99,.1391,-.0233,0,-.1408,.9634,-.2281,0,-.0092,.2291,.9734,0,0,.4281,0,1)},
        {frame: 9, value: _M(.9867,.0627,-.1497,0,-.0686,.9971,-.0343,0,.1471,.0441,.9881,0,0,.4281,0,1)},
        {frame: 10, value: _M(.9583,.0434,-.2823,0,.0143,.9798,.1995,0,.2853,-.1952,.9384,0,0,.4281,0,1)},
        {frame: 11, value: _M(.9581,.0643,-.2793,0,.0187,.9583,.2851,0,.286,-.2783,.9169,0,0,.4281,0,1)},
        {frame: 12, value: _M(.9754,.0551,-.2136,0,.005,.9625,.2713,0,.2205,-.2657,.9385,0,0,.4281,0,1)},
        {frame: 13, value: _M(.997,.0369,-.0679,0,-.0205,.9735,.228,0,.0746,-.2259,.9713,0,0,.4281,0,1)},
        {frame: 14, value: _M(.9996,.0278,.0011,0,-.0276,.9834,.1793,0,.0039,-.1792,.9838,0,0,.4281,0,1)},
        {frame: 15, value: _M(.9997,.023,.0003,0,-.0228,.9913,.1299,0,.0026,-.1298,.9915,0,0,.4281,0,1)},
        {frame: 16, value: _M(.9999,.0168,-.0003,0,-.0168,.9976,.0673,0,.0014,-.0673,.9977,0,0,.4281,0,1)},
        {frame: 17, value: _M(.9999,.0103,-.0005,0,-.0103,.9999,.0007,0,.0005,-.0007,1,0,0,.4281,0,1)},
        {frame: 18, value: _M(1,.0047,-.0004,0,-.0047,.9984,-.0562,0,.0001,.0562,.9984,0,0,.4281,0,1)},
        {frame: 19, value: _M(1,.0011,-.0001,0,-.0011,.9958,-.0921,0,0,.0921,.9958,0,0,.4281,0,1)},
        {frame: 20, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 30, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 41, value: _M(1,.0043,-.0005,0,-.0043,.9926,-.1213,0,0,.1213,.9926,0,0,.4281,0,1)},
        {frame: 42, value: _M(.9999,.0154,-.0021,0,-.0155,.9858,-.1673,0,-.0005,.1673,.9859,0,0,.4281,0,1)},
        {frame: 43, value: _M(.9996,.0264,-.0042,0,-.0267,.9767,-.2128,0,-.0015,.2129,.9771,0,0,.4281,0,1)},
        {frame: 44, value: _M(.9995,.0306,-.0051,0,-.0309,.9727,-.2301,0,-.002,.2302,.9731,0,0,.4281,0,1)},
        {frame: 45, value: _M(.9997,.0233,-.0035,0,-.0235,.9795,-.1999,0,-.0012,.1999,.9798,0,0,.4281,0,1)},
        {frame: 46, value: _M(1,.0074,-.0009,0,-.0075,.9909,-.1345,0,-.0001,.1345,.9909,0,0,.4281,0,1)},
        {frame: 47, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 49, value: _M(1,-.0004,-.0006,0,.0003,.9928,-.1195,0,.0006,.1195,.9928,0,0,.4281,0,1)},
        {frame: 50, value: _M(1,-.0008,-.0012,0,.0006,.9908,-.1353,0,.0013,.1353,.9908,0,0,.4281,0,1)},
        {frame: 51, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 59, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 61, value: _M(.9618,.0643,.2662,0,-.0364,.9934,-.1086,0,-.2715,.0948,.9578,0,0,.4281,0,1)},
        {frame: 62, value: _M(.9739,.0534,.2208,0,-.0302,.9938,-.1071,0,-.2252,.0976,.9694,0,0,.4281,0,1)},
        {frame: 63, value: _M(.9849,.0407,.1683,0,-.023,.9941,-.1056,0,-.1716,.1002,.9801,0,0,.4281,0,1)},
        {frame: 64, value: _M(.9943,.0249,.1032,0,-.0141,.9944,-.1044,0,-.1052,.1024,.9892,0,0,.4281,0,1)},
        {frame: 65, value: _M(.9995,.0077,.0317,0,-.0043,.9946,-.1038,0,-.0323,.1036,.9941,0,0,.4281,0,1)},
        {frame: 66, value: _M(.9988,-.0115,-.0474,0,.0065,.9946,-.1038,0,.0484,.1034,.9935,0,0,.4281,0,1)},
        {frame: 67, value: _M(.9916,-.0304,-.1258,0,.0172,.9943,-.1048,0,.1282,.1017,.9865,0,0,.4281,0,1)},
        {frame: 68, value: _M(.9793,-.0475,-.1968,0,.0269,.994,-.1064,0,.2006,.0989,.9747,0,0,.4281,0,1)},
        {frame: 69, value: _M(.9653,-.0613,-.2537,0,.0347,.9935,-.1082,0,.2587,.0956,.9612,0,0,.4281,0,1)},
        {frame: 70, value: _M(.9563,-.0687,-.2842,0,.0388,.9932,-.1093,0,.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 71, value: _M(.9618,-.0643,-.2662,0,.0364,.9934,-.1086,0,.2715,.0948,.9578,0,0,.4281,0,1)},
        {frame: 72, value: _M(.9739,-.0534,-.2208,0,.0302,.9938,-.1071,0,.2252,.0976,.9694,0,0,.4281,0,1)},
        {frame: 73, value: _M(.9849,-.0406,-.1681,0,.023,.9941,-.1056,0,.1714,.1002,.9801,0,0,.4281,0,1)},
        {frame: 74, value: _M(.9944,-.0248,-.1028,0,.014,.9944,-.1044,0,.1049,.1024,.9892,0,0,.4281,0,1)},
        {frame: 75, value: _M(.9995,-.0077,-.0317,0,.0043,.9946,-.1038,0,.0323,.1036,.9941,0,0,.4281,0,1)},
        {frame: 76, value: _M(.9988,.0113,.047,0,-.0064,.9946,-.1038,0,-.0479,.1034,.9935,0,0,.4281,0,1)},
        {frame: 77, value: _M(.9916,.0304,.1258,0,-.0172,.9943,-.1048,0,-.1282,.1017,.9865,0,0,.4281,0,1)},
        {frame: 78, value: _M(.9793,.0476,.1969,0,-.0269,.994,-.1064,0,-.2008,.0989,.9746,0,0,.4281,0,1)},
        {frame: 79, value: _M(.9653,.0613,.2537,0,-.0347,.9935,-.1082,0,-.2587,.0956,.9612,0,0,.4281,0,1)},
        {frame: 80, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 83, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
        {frame: 90, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 91, value: _M(.9999,.0107,.002,0,-.0104,.9921,-.1251,0,-.0033,.1251,.9921,0,0,.4281,0,1)},
        {frame: 92, value: _M(.9991,.0415,.0093,0,-.039,.9819,-.1855,0,-.0168,.1849,.9826,0,0,.4281,0,1)},
        {frame: 93, value: _M(.9963,.083,.0233,0,-.074,.9621,-.2626,0,-.0442,.2599,.9646,0,0,.4281,0,1)},
        {frame: 94, value: _M(.9918,.1189,.0462,0,-.0978,.9415,-.3225,0,-.0819,.3154,.9454,0,0,.4281,0,1)},
        {frame: 95, value: _M(.9872,.1377,.0798,0,-.1023,.9331,-.3448,0,-.122,.3323,.9353,0,0,.4281,0,1)},
        {frame: 96, value: _M(.9788,.1364,.1525,0,-.0815,.9436,-.3208,0,-.1877,.3016,.9348,0,0,.4281,0,1)},
        {frame: 97, value: _M(.974,.0661,.2169,0,-.0244,.9816,-.1896,0,-.2254,.1793,.9576,0,0,.4281,0,1)},
        {frame: 98, value: _M(.9944,-.1057,.0006,0,.1052,.9905,.0884,0,-.01,-.0878,.9961,0,0,.4281,0,1)},
        {frame: 102, value: _M(.9949,-.1009,.0011,0,.1005,.9917,.0797,0,-.0091,-.0792,.9968,0,0,.4281,0,1)},
        {frame: 103, value: _M(.9962,-.0868,.002,0,.0866,.9948,.054,0,-.0067,-.0536,.9985,0,0,.4281,0,1)},
        {frame: 104, value: _M(.9979,-.0652,.0028,0,.0651,.9978,.0146,0,-.0038,-.0144,.9999,0,0,.4281,0,1)},
        {frame: 105, value: _M(.9992,-.0406,.0027,0,.0407,.9987,-.03,0,-.0014,.0301,.9995,0,0,.4281,0,1)},
        {frame: 106, value: _M(.9998,-.019,.0016,0,.019,.9974,-.0693,0,-.0003,.0694,.9976,0,0,.4281,0,1)},
        {frame: 107, value: _M(1,-.0048,.0005,0,.0048,.9955,-.095,0,0,.095,.9955,0,0,.4281,0,1)},
        {frame: 108, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 120, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 180, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 190, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 191, value: _M(1,0,0,0,0,.9946,-.1038,0,0,.1038,.9946,0,0,.4281,0,1)},
        {frame: 192, value: _M(1,.0001,0,0,-.0001,.9946,-.1042,0,0,.1042,.9946,0,0,.4281,0,1)},
        {frame: 193, value: _M(1,.0003,0,0,-.0003,.9945,-.1048,0,0,.1048,.9945,0,0,.4281,0,1)},
        {frame: 194, value: _M(1,.0005,0,0,-.0005,.9944,-.1056,0,0,.1056,.9944,0,0,.4281,0,1)},
        {frame: 195, value: _M(1,.0007,-.0001,0,-.0007,.9943,-.1068,0,0,.1068,.9943,0,0,.4281,0,1)},
        {frame: 196, value: _M(1,.0011,-.0001,0,-.0011,.9941,-.1081,0,0,.1081,.9941,0,0,.4281,0,1)},
        {frame: 197, value: _M(1,.0014,-.0001,0,-.0014,.994,-.1095,0,0,.1095,.994,0,0,.4281,0,1)},
        {frame: 198, value: _M(1,.0018,-.0002,0,-.0018,.9938,-.111,0,0,.111,.9938,0,0,.4281,0,1)},
        {frame: 199, value: _M(1,.0021,-.0002,0,-.0021,.9937,-.1124,0,0,.1124,.9937,0,0,.4281,0,1)},
        {frame: 200, value: _M(1,.0025,-.0003,0,-.0025,.9935,-.1138,0,0,.1138,.9935,0,0,.4281,0,1)},
        {frame: 201, value: _M(1,.0028,-.0003,0,-.0028,.9933,-.1152,0,0,.1152,.9933,0,0,.4281,0,1)},
        {frame: 202, value: _M(1,.0031,-.0003,0,-.0031,.9932,-.1165,0,0,.1165,.9932,0,0,.4281,0,1)},
        {frame: 203, value: _M(1,.0035,-.0004,0,-.0035,.993,-.118,0,0,.118,.993,0,0,.4281,0,1)},
        {frame: 204, value: _M(1,.0039,-.0004,0,-.0039,.9928,-.1197,0,0,.1197,.9928,0,0,.4281,0,1)},
        {frame: 205, value: _M(1,.0043,-.0005,0,-.0043,.9926,-.1215,0,0,.1215,.9926,0,0,.4281,0,1)},
        {frame: 206, value: _M(1,.0048,-.0005,0,-.0048,.9923,-.1234,0,-.0001,.1234,.9924,0,0,.4281,0,1)},
        {frame: 207, value: _M(1,.0053,-.0006,0,-.0053,.9921,-.1254,0,-.0001,.1254,.9921,0,0,.4281,0,1)},
        {frame: 208, value: _M(1,.0058,-.0007,0,-.0058,.9918,-.1275,0,-.0001,.1275,.9918,0,0,.4281,0,1)},
        {frame: 209, value: _M(1,.0063,-.0007,0,-.0063,.9915,-.1296,0,-.0001,.1296,.9916,0,0,.4281,0,1)},
        {frame: 210, value: _M(1,.0068,-.0008,0,-.0068,.9913,-.1317,0,-.0001,.1317,.9913,0,0,.4281,0,1)},
        {frame: 211, value: _M(1,.0073,-.0009,0,-.0073,.991,-.1337,0,-.0001,.1337,.991,0,0,.4281,0,1)},
        {frame: 212, value: _M(1,.0077,-.0009,0,-.0078,.9907,-.1357,0,-.0001,.1357,.9908,0,0,.4281,0,1)},
        {frame: 213, value: _M(1,.0082,-.001,0,-.0082,.9905,-.1374,0,-.0002,.1374,.9905,0,0,.4281,0,1)},
        {frame: 214, value: _M(1,.0085,-.001,0,-.0086,.9903,-.139,0,-.0002,.139,.9903,0,0,.4281,0,1)},
        {frame: 215, value: _M(1,.0088,-.0011,0,-.0089,.9901,-.1403,0,-.0002,.1403,.9901,0,0,.4281,0,1)},
        {frame: 216, value: _M(1,.0091,-.0011,0,-.0092,.9899,-.1414,0,-.0002,.1414,.99,0,0,.4281,0,1)},
        {frame: 217, value: _M(1,.0093,-.0011,0,-.0094,.9898,-.1422,0,-.0002,.1422,.9898,0,0,.4281,0,1)},
        {frame: 218, value: _M(1,.0095,-.0012,0,-.0095,.9897,-.1428,0,-.0002,.1428,.9897,0,0,.4281,0,1)},
        {frame: 219, value: _M(1,.0095,-.0012,0,-.0096,.9897,-.1432,0,-.0002,.1432,.9897,0,0,.4281,0,1)},
        {frame: 220, value: _M(1,.0096,-.0012,0,-.0096,.9896,-.1433,0,-.0002,.1433,.9897,0,0,.4281,0,1)},
        {frame: 221, value: _M(1,.0096,-.0012,0,-.0096,.9896,-.1432,0,-.0002,.1432,.9897,0,0,.4281,0,1)},
        {frame: 222, value: _M(1,.0095,-.0012,0,-.0096,.9897,-.1429,0,-.0002,.1429,.9897,0,0,.4281,0,1)},
        {frame: 223, value: _M(1,.0094,-.0011,0,-.0094,.9898,-.1424,0,-.0002,.1424,.9898,0,0,.4281,0,1)},
        {frame: 224, value: _M(1,.0092,-.0011,0,-.0093,.9899,-.1417,0,-.0002,.1417,.9899,0,0,.4281,0,1)},
        {frame: 225, value: _M(1,.009,-.0011,0,-.0091,.99,-.1409,0,-.0002,.1409,.99,0,0,.4281,0,1)},
        {frame: 226, value: _M(1,.0087,-.0011,0,-.0088,.9901,-.1398,0,-.0002,.1398,.9902,0,0,.4281,0,1)},
        {frame: 227, value: _M(1,.0084,-.001,0,-.0085,.9903,-.1385,0,-.0002,.1385,.9904,0,0,.4281,0,1)},
        {frame: 228, value: _M(1,.0081,-.001,0,-.0081,.9905,-.1371,0,-.0002,.1371,.9906,0,0,.4281,0,1)},
        {frame: 229, value: _M(1,.0077,-.0009,0,-.0077,.9907,-.1355,0,-.0001,.1355,.9908,0,0,.4281,0,1)},
        {frame: 230, value: _M(1,.0073,-.0009,0,-.0073,.991,-.1337,0,-.0001,.1337,.991,0,0,.4281,0,1)},
        {frame: 231, value: _M(1,.0068,-.0008,0,-.0069,.9912,-.1319,0,-.0001,.1319,.9913,0,0,.4281,0,1)},
        {frame: 232, value: _M(1,.0063,-.0007,0,-.0064,.9915,-.1299,0,-.0001,.1299,.9915,0,0,.4281,0,1)},
        {frame: 233, value: _M(1,.0058,-.0007,0,-.0059,.9918,-.1278,0,-.0001,.1278,.9918,0,0,.4281,0,1)},
        {frame: 234, value: _M(1,.0053,-.0006,0,-.0054,.9921,-.1257,0,-.0001,.1257,.9921,0,0,.4281,0,1)},
        {frame: 235, value: _M(1,.0048,-.0005,0,-.0048,.9923,-.1235,0,-.0001,.1235,.9923,0,0,.4281,0,1)},
        {frame: 236, value: _M(1,.0043,-.0005,0,-.0043,.9926,-.1214,0,0,.1214,.9926,0,0,.4281,0,1)},
        {frame: 237, value: _M(1,.0038,-.0004,0,-.0038,.9929,-.1192,0,0,.1192,.9929,0,0,.4281,0,1)},
        {frame: 238, value: _M(1,.0033,-.0004,0,-.0033,.9931,-.1171,0,0,.1171,.9931,0,0,.4281,0,1)},
        {frame: 239, value: _M(1,.0028,-.0003,0,-.0028,.9933,-.1152,0,0,.1152,.9933,0,0,.4281,0,1)},
        {frame: 240, value: _M(1,.0023,-.0002,0,-.0023,.9936,-.1133,0,0,.1133,.9936,0,0,.4281,0,1)},
        {frame: 241, value: _M(1,.0019,-.0002,0,-.0019,.9938,-.1115,0,0,.1115,.9938,0,0,.4281,0,1)},
        {frame: 242, value: _M(1,.0015,-.0002,0,-.0015,.9939,-.1099,0,0,.1099,.9939,0,0,.4281,0,1)},
        {frame: 243, value: _M(1,.0012,-.0001,0,-.0012,.9941,-.1085,0,0,.1085,.9941,0,0,.4281,0,1)},
        {frame: 244, value: _M(1,.0009,-.0001,0,-.0009,.9942,-.1072,0,0,.1072,.9942,0,0,.4281,0,1)},
        {frame: 245, value: _M(1,.0006,-.0001,0,-.0006,.9944,-.1061,0,0,.1061,.9944,0,0,.4281,0,1)},
        {frame: 246, value: _M(1,.0004,0,0,-.0004,.9944,-.1053,0,0,.1053,.9944,0,0,.4281,0,1)},
        {frame: 247, value: _M(1,.0002,0,0,-.0002,.9945,-.1046,0,0,.1046,.9945,0,0,.4281,0,1)},
        {frame: 248, value: _M(1,.0001,0,0,-.0001,.9946,-.1041,0,0,.1041,.9946,0,0,.4281,0,1)},
        {frame: 249, value: _M(1,0,0,0,0,.9946,-.1038,0,0,.1038,.9946,0,0,.4281,0,1)},
        {frame: 250, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)},
        {frame: 252, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("chest", skeleton,skeleton.bones[6], _M(.9922,.001,.1246,0,.0151,.9917,-.1276,0,-.1237,.1285,.984,0,0,.3874,0,1), _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1));
        bone.length = .7816;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 9, value: _M(.9969,-.0061,.0783,0,.0159,.9921,-.1248,0,-.0769,.1256,.9891,0,0,.3874,0,1)},
        {frame: 10, value: _M(.9993,-.0201,-.0327,0,.0159,.9919,-.1257,0,.035,.125,.9915,0,0,.3874,0,1)},
        {frame: 11, value: _M(.9843,-.0377,-.1726,0,.0158,.9918,-.1268,0,.176,.1221,.9768,0,0,.3874,0,1)},
        {frame: 12, value: _M(.9872,-.0356,-.1557,0,.0158,.9918,-.1266,0,.159,.1225,.9796,0,0,.3874,0,1)},
        {frame: 13, value: _M(.9934,-.03,-.1111,0,.0158,.9919,-.1263,0,.114,.1237,.9858,0,0,.3874,0,1)},
        {frame: 14, value: _M(.9974,-.0246,-.0684,0,.0159,.9919,-.1259,0,.071,.1245,.9897,0,0,.3874,0,1)},
        {frame: 15, value: _M(.9993,-.0199,-.0307,0,.0159,.9919,-.1256,0,.033,.1251,.9916,0,0,.3874,0,1)},
        {frame: 16, value: _M(.9998,-.0143,.0133,0,.0159,.992,-.1253,0,-.0114,.1255,.992,0,0,.3874,0,1)},
        {frame: 17, value: _M(.9983,-.0087,.0579,0,.0159,.992,-.1249,0,-.0563,.1256,.9905,0,0,.3874,0,1)},
        {frame: 18, value: _M(.9955,-.004,.0946,0,.0159,.9921,-.1246,0,-.0934,.1256,.9877,0,0,.3874,0,1)},
        {frame: 19, value: _M(.9931,-.0011,.1173,0,.0158,.9921,-.1245,0,-.1163,.1255,.9853,0,0,.3874,0,1)},
        {frame: 20, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 30, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 45, value: _M(.9927,.0106,.1198,0,.0141,.9791,-.2031,0,-.1194,.2033,.9718,0,0,.3874,0,1)},
        {frame: 46, value: _M(.9938,.0322,.1066,0,.0092,.9302,-.367,0,-.1109,.3657,.9241,0,0,.3874,0,1)},
        {frame: 47, value: _M(.9942,.0414,.0992,0,.0065,.898,-.44,0,-.1073,.4381,.8925,0,0,.3874,0,1)},
        {frame: 48, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 51, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 59, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 83, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 90, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 108, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 120, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 121, value: _M(1,0,0,0,0,.9921,-.1256,0,0,.1256,.9921,0,0,.3874,0,1)},
        {frame: 122, value: _M(1,.0001,0,0,-.0001,.992,-.126,0,0,.126,.992,0,0,.3874,0,1)},
        {frame: 123, value: _M(1,.0002,0,0,-.0002,.9919,-.1269,0,0,.1269,.9919,0,0,.3874,0,1)},
        {frame: 124, value: _M(1,.0004,0,0,-.0004,.9918,-.128,0,-.0001,.128,.9918,0,0,.3874,0,1)},
        {frame: 125, value: _M(1,.0007,0,0,-.0007,.9916,-.1295,0,-.0001,.1295,.9916,0,0,.3874,0,1)},
        {frame: 126, value: _M(1,.001,0,0,-.001,.9914,-.1312,0,-.0001,.1312,.9914,0,0,.3874,0,1)},
        {frame: 127, value: _M(1,.0013,0,0,-.0013,.9911,-.1333,0,-.0002,.1333,.9911,0,0,.3874,0,1)},
        {frame: 128, value: _M(1,.0017,0,0,-.0017,.9907,-.1357,0,-.0002,.1357,.9908,0,0,.3874,0,1)},
        {frame: 129, value: _M(1,.0022,0,0,-.0022,.9904,-.1383,0,-.0003,.1383,.9904,0,0,.3874,0,1)},
        {frame: 130, value: _M(1,.0027,0,0,-.0027,.99,-.1412,0,-.0004,.1412,.99,0,0,.3874,0,1)},
        {frame: 131, value: _M(1,.0032,0,0,-.0032,.9895,-.1444,0,-.0004,.1443,.9895,0,0,.3874,0,1)},
        {frame: 132, value: _M(1,.0038,0,0,-.0037,.989,-.1476,0,-.0005,.1476,.989,0,0,.3874,0,1)},
        {frame: 133, value: _M(1,.0044,0,0,-.0043,.9885,-.1511,0,-.0006,.1511,.9885,0,0,.3874,0,1)},
        {frame: 134, value: _M(1,.005,-.0001,0,-.0049,.988,-.1546,0,-.0007,.1546,.988,0,0,.3874,0,1)},
        {frame: 135, value: _M(1,.0056,-.0001,0,-.0055,.9874,-.1582,0,-.0008,.1582,.9874,0,0,.3874,0,1)},
        {frame: 136, value: _M(1,.0062,-.0001,0,-.0061,.9868,-.1617,0,-.0009,.1617,.9868,0,0,.3874,0,1)},
        {frame: 137, value: _M(1,.0068,-.0001,0,-.0067,.9862,-.1652,0,-.001,.1652,.9863,0,0,.3874,0,1)},
        {frame: 138, value: _M(1,.0074,-.0001,0,-.0073,.9856,-.1687,0,-.0011,.1686,.9857,0,0,.3874,0,1)},
        {frame: 139, value: _M(1,.0079,-.0002,0,-.0078,.9851,-.1719,0,-.0012,.1719,.9851,0,0,.3874,0,1)},
        {frame: 140, value: _M(1,.0084,-.0002,0,-.0083,.9845,-.175,0,-.0013,.175,.9846,0,0,.3874,0,1)},
        {frame: 141, value: _M(1,.0089,-.0002,0,-.0088,.984,-.1779,0,-.0014,.1779,.984,0,0,.3874,0,1)},
        {frame: 142, value: _M(1,.0094,-.0002,0,-.0093,.9835,-.1805,0,-.0015,.1805,.9836,0,0,.3874,0,1)},
        {frame: 143, value: _M(1,.0098,-.0003,0,-.0097,.9831,-.1829,0,-.0015,.1829,.9831,0,0,.3874,0,1)},
        {frame: 144, value: _M(.9999,.0101,-.0003,0,-.01,.9827,-.185,0,-.0016,.185,.9827,0,0,.3874,0,1)},
        {frame: 145, value: _M(.9999,.0104,-.0003,0,-.0103,.9824,-.1867,0,-.0016,.1867,.9824,0,0,.3874,0,1)},
        {frame: 146, value: _M(.9999,.0107,-.0003,0,-.0106,.9821,-.1882,0,-.0017,.1882,.9821,0,0,.3874,0,1)},
        {frame: 147, value: _M(.9999,.0109,-.0003,0,-.0107,.9819,-.1893,0,-.0017,.1893,.9819,0,0,.3874,0,1)},
        {frame: 148, value: _M(.9999,.011,-.0003,0,-.0109,.9817,-.1901,0,-.0018,.1901,.9818,0,0,.3874,0,1)},
        {frame: 149, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1906,0,-.0018,.1906,.9817,0,0,.3874,0,1)},
        {frame: 150, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1907,0,-.0018,.1907,.9816,0,0,.3874,0,1)},
        {frame: 151, value: _M(.9999,.0111,-.0003,0,-.011,.9816,-.1906,0,-.0018,.1906,.9817,0,0,.3874,0,1)},
        {frame: 152, value: _M(.9999,.011,-.0003,0,-.0109,.9817,-.1901,0,-.0018,.1901,.9818,0,0,.3874,0,1)},
        {frame: 153, value: _M(.9999,.0109,-.0003,0,-.0107,.9819,-.1893,0,-.0017,.1893,.9819,0,0,.3874,0,1)},
        {frame: 154, value: _M(.9999,.0107,-.0003,0,-.0106,.9821,-.1882,0,-.0017,.1882,.9821,0,0,.3874,0,1)},
        {frame: 155, value: _M(.9999,.0104,-.0003,0,-.0103,.9824,-.1867,0,-.0016,.1867,.9824,0,0,.3874,0,1)},
        {frame: 156, value: _M(.9999,.0101,-.0003,0,-.01,.9827,-.185,0,-.0016,.185,.9827,0,0,.3874,0,1)},
        {frame: 157, value: _M(1,.0098,-.0003,0,-.0097,.9831,-.1829,0,-.0015,.1829,.9831,0,0,.3874,0,1)},
        {frame: 158, value: _M(1,.0094,-.0002,0,-.0093,.9835,-.1805,0,-.0015,.1805,.9836,0,0,.3874,0,1)},
        {frame: 159, value: _M(1,.0089,-.0002,0,-.0088,.984,-.1779,0,-.0014,.1779,.984,0,0,.3874,0,1)},
        {frame: 160, value: _M(1,.0084,-.0002,0,-.0083,.9845,-.175,0,-.0013,.175,.9846,0,0,.3874,0,1)},
        {frame: 161, value: _M(1,.0079,-.0002,0,-.0078,.9851,-.1719,0,-.0012,.1719,.9851,0,0,.3874,0,1)},
        {frame: 162, value: _M(1,.0074,-.0001,0,-.0073,.9856,-.1687,0,-.0011,.1686,.9857,0,0,.3874,0,1)},
        {frame: 163, value: _M(1,.0068,-.0001,0,-.0067,.9862,-.1652,0,-.001,.1652,.9863,0,0,.3874,0,1)},
        {frame: 164, value: _M(1,.0062,-.0001,0,-.0061,.9868,-.1617,0,-.0009,.1617,.9868,0,0,.3874,0,1)},
        {frame: 165, value: _M(1,.0056,-.0001,0,-.0055,.9874,-.1582,0,-.0008,.1582,.9874,0,0,.3874,0,1)},
        {frame: 166, value: _M(1,.005,-.0001,0,-.0049,.988,-.1546,0,-.0007,.1546,.988,0,0,.3874,0,1)},
        {frame: 167, value: _M(1,.0044,0,0,-.0043,.9885,-.1511,0,-.0006,.1511,.9885,0,0,.3874,0,1)},
        {frame: 168, value: _M(1,.0038,0,0,-.0037,.989,-.1476,0,-.0005,.1476,.989,0,0,.3874,0,1)},
        {frame: 169, value: _M(1,.0032,0,0,-.0032,.9895,-.1444,0,-.0004,.1443,.9895,0,0,.3874,0,1)},
        {frame: 170, value: _M(1,.0027,0,0,-.0027,.99,-.1412,0,-.0004,.1412,.99,0,0,.3874,0,1)},
        {frame: 171, value: _M(1,.0022,0,0,-.0022,.9904,-.1383,0,-.0003,.1383,.9904,0,0,.3874,0,1)},
        {frame: 172, value: _M(1,.0017,0,0,-.0017,.9907,-.1357,0,-.0002,.1357,.9908,0,0,.3874,0,1)},
        {frame: 173, value: _M(1,.0013,0,0,-.0013,.9911,-.1333,0,-.0002,.1333,.9911,0,0,.3874,0,1)},
        {frame: 174, value: _M(1,.001,0,0,-.001,.9914,-.1312,0,-.0001,.1312,.9914,0,0,.3874,0,1)},
        {frame: 175, value: _M(1,.0007,0,0,-.0007,.9916,-.1295,0,-.0001,.1295,.9916,0,0,.3874,0,1)},
        {frame: 176, value: _M(1,.0004,0,0,-.0004,.9918,-.128,0,-.0001,.128,.9918,0,0,.3874,0,1)},
        {frame: 177, value: _M(1,.0002,0,0,-.0002,.9919,-.1269,0,0,.1269,.9919,0,0,.3874,0,1)},
        {frame: 178, value: _M(1,.0001,0,0,-.0001,.992,-.126,0,0,.126,.992,0,0,.3874,0,1)},
        {frame: 179, value: _M(1,0,0,0,0,.9921,-.1256,0,0,.1256,.9921,0,0,.3874,0,1)},
        {frame: 180, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 190, value: _M(.9922,-.0002,.1246,0,.0158,.9921,-.1244,0,-.1236,.1254,.9844,0,0,.3874,0,1)},
        {frame: 191, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)},
        {frame: 192, value: _M(.9922,.0001,.1246,0,.0156,.992,-.1252,0,-.1236,.1261,.9843,0,0,.3874,0,1)},
        {frame: 193, value: _M(.9922,.0004,.1246,0,.0154,.9919,-.1262,0,-.1237,.1271,.9841,0,0,.3874,0,1)},
        {frame: 194, value: _M(.9922,.001,.1246,0,.0151,.9917,-.1276,0,-.1237,.1285,.984,0,0,.3874,0,1)},
        {frame: 195, value: _M(.9922,.0016,.1246,0,.0146,.9915,-.1294,0,-.1238,.1302,.9837,0,0,.3874,0,1)},
        {frame: 196, value: _M(.9922,.0024,.1246,0,.0141,.9912,-.1315,0,-.1238,.1323,.9834,0,0,.3874,0,1)},
        {frame: 197, value: _M(.9922,.0033,.1246,0,.0135,.9909,-.1339,0,-.1239,.1345,.9831,0,0,.3874,0,1)},
        {frame: 198, value: _M(.9922,.0042,.1246,0,.013,.9906,-.1363,0,-.124,.1368,.9828,0,0,.3874,0,1)},
        {frame: 199, value: _M(.9922,.005,.1246,0,.0124,.9903,-.1387,0,-.1241,.1391,.9825,0,0,.3874,0,1)},
        {frame: 200, value: _M(.9922,.0059,.1246,0,.0118,.9899,-.141,0,-.1242,.1413,.9821,0,0,.3874,0,1)},
        {frame: 201, value: _M(.9922,.0067,.1246,0,.0113,.9896,-.1431,0,-.1242,.1434,.9818,0,0,.3874,0,1)},
        {frame: 202, value: _M(.9922,.0075,.1246,0,.0108,.9893,-.1453,0,-.1243,.1455,.9815,0,0,.3874,0,1)},
        {frame: 203, value: _M(.9922,.0084,.1245,0,.0102,.989,-.1478,0,-.1244,.1479,.9812,0,0,.3874,0,1)},
        {frame: 204, value: _M(.9922,.0094,.1245,0,.0095,.9886,-.1505,0,-.1245,.1505,.9807,0,0,.3874,0,1)},
        {frame: 205, value: _M(.9922,.0105,.1245,0,.0088,.9881,-.1534,0,-.1246,.1533,.9803,0,0,.3874,0,1)},
        {frame: 206, value: _M(.9922,.0116,.1244,0,.0081,.9876,-.1566,0,-.1247,.1563,.9798,0,0,.3874,0,1)},
        {frame: 207, value: _M(.9921,.0128,.1244,0,.0073,.9871,-.1599,0,-.1249,.1595,.9793,0,0,.3874,0,1)},
        {frame: 208, value: _M(.9921,.0141,.1244,0,.0064,.9866,-.1633,0,-.125,.1628,.9787,0,0,.3874,0,1)},
        {frame: 209, value: _M(.9921,.0154,.1243,0,.0056,.986,-.1667,0,-.1251,.1661,.9781,0,0,.3874,0,1)},
        {frame: 210, value: _M(.9921,.0166,.1243,0,.0048,.9854,-.1701,0,-.1253,.1694,.9776,0,0,.3874,0,1)},
        {frame: 211, value: _M(.9921,.0178,.1242,0,.004,.9848,-.1734,0,-.1254,.1725,.977,0,0,.3874,0,1)},
        {frame: 212, value: _M(.9921,.019,.1241,0,.0032,.9843,-.1765,0,-.1255,.1755,.9764,0,0,.3874,0,1)},
        {frame: 213, value: _M(.9921,.02,.1241,0,.0026,.9838,-.1793,0,-.1257,.1782,.9759,0,0,.3874,0,1)},
        {frame: 214, value: _M(.9921,.021,.124,0,.0019,.9833,-.1819,0,-.1258,.1807,.9755,0,0,.3874,0,1)},
        {frame: 215, value: _M(.992,.0218,.124,0,.0014,.9829,-.184,0,-.1259,.1828,.9751,0,0,.3874,0,1)},
        {frame: 216, value: _M(.992,.0224,.124,0,.001,.9826,-.1858,0,-.126,.1845,.9747,0,0,.3874,0,1)},
        {frame: 217, value: _M(.992,.0229,.1239,0,.0007,.9823,-.1872,0,-.126,.1858,.9745,0,0,.3874,0,1)},
        {frame: 218, value: _M(.992,.0233,.1239,0,.0004,.9821,-.1882,0,-.1261,.1867,.9743,0,0,.3874,0,1)},
        {frame: 219, value: _M(.992,.0235,.1239,0,.0003,.982,-.1887,0,-.1261,.1873,.9742,0,0,.3874,0,1)},
        {frame: 220, value: _M(.992,.0236,.1239,0,.0002,.982,-.1889,0,-.1261,.1874,.9741,0,0,.3874,0,1)},
        {frame: 221, value: _M(.992,.0235,.1239,0,.0003,.982,-.1888,0,-.1261,.1873,.9742,0,0,.3874,0,1)},
        {frame: 222, value: _M(.992,.0234,.1239,0,.0004,.9821,-.1883,0,-.1261,.1868,.9743,0,0,.3874,0,1)},
        {frame: 223, value: _M(.992,.0231,.1239,0,.0006,.9823,-.1875,0,-.126,.1861,.9744,0,0,.3874,0,1)},
        {frame: 224, value: _M(.992,.0227,.1239,0,.0009,.9825,-.1864,0,-.126,.185,.9746,0,0,.3874,0,1)},
        {frame: 225, value: _M(.992,.0221,.124,0,.0012,.9827,-.185,0,-.1259,.1836,.9749,0,0,.3874,0,1)},
        {frame: 226, value: _M(.992,.0215,.124,0,.0016,.9831,-.1832,0,-.1258,.182,.9752,0,0,.3874,0,1)},
        {frame: 227, value: _M(.9921,.0207,.1241,0,.0021,.9834,-.1812,0,-.1258,.18,.9756,0,0,.3874,0,1)},
        {frame: 228, value: _M(.9921,.0199,.1241,0,.0027,.9839,-.1789,0,-.1257,.1778,.976,0,0,.3874,0,1)},
        {frame: 229, value: _M(.9921,.0189,.1241,0,.0033,.9843,-.1763,0,-.1255,.1753,.9765,0,0,.3874,0,1)},
        {frame: 230, value: _M(.9921,.0179,.1242,0,.004,.9848,-.1734,0,-.1254,.1726,.977,0,0,.3874,0,1)},
        {frame: 231, value: _M(.9921,.0167,.1243,0,.0047,.9854,-.1704,0,-.1253,.1696,.9775,0,0,.3874,0,1)},
        {frame: 232, value: _M(.9921,.0155,.1243,0,.0055,.9859,-.1672,0,-.1252,.1665,.9781,0,0,.3874,0,1)},
        {frame: 233, value: _M(.9921,.0143,.1244,0,.0063,.9865,-.1638,0,-.125,.1633,.9786,0,0,.3874,0,1)},
        {frame: 234, value: _M(.9921,.013,.1244,0,.0071,.987,-.1603,0,-.1249,.16,.9792,0,0,.3874,0,1)},
        {frame: 235, value: _M(.9922,.0117,.1244,0,.008,.9876,-.1568,0,-.1247,.1566,.9798,0,0,.3874,0,1)},
        {frame: 236, value: _M(.9922,.0104,.1245,0,.0088,.9881,-.1533,0,-.1246,.1532,.9803,0,0,.3874,0,1)},
        {frame: 237, value: _M(.9922,.0092,.1245,0,.0097,.9887,-.1498,0,-.1245,.1499,.9808,0,0,.3874,0,1)},
        {frame: 238, value: _M(.9922,.0079,.1245,0,.0105,.9892,-.1465,0,-.1244,.1466,.9813,0,0,.3874,0,1)},
        {frame: 239, value: _M(.9922,.0067,.1246,0,.0113,.9896,-.1432,0,-.1242,.1435,.9818,0,0,.3874,0,1)},
        {frame: 240, value: _M(.9922,.0056,.1246,0,.012,.9901,-.1402,0,-.1241,.1406,.9823,0,0,.3874,0,1)},
        {frame: 241, value: _M(.9922,.0045,.1246,0,.0127,.9904,-.1373,0,-.124,.1378,.9827,0,0,.3874,0,1)},
        {frame: 242, value: _M(.9922,.0036,.1246,0,.0133,.9908,-.1347,0,-.1239,.1353,.983,0,0,.3874,0,1)},
        {frame: 243, value: _M(.9922,.0027,.1246,0,.0139,.9911,-.1324,0,-.1239,.1331,.9833,0,0,.3874,0,1)},
        {frame: 244, value: _M(.9922,.002,.1246,0,.0144,.9914,-.1303,0,-.1238,.1311,.9836,0,0,.3874,0,1)},
        {frame: 245, value: _M(.9922,.0013,.1246,0,.0148,.9916,-.1286,0,-.1237,.1294,.9838,0,0,.3874,0,1)},
        {frame: 246, value: _M(.9922,.0008,.1246,0,.0152,.9918,-.1271,0,-.1237,.128,.984,0,0,.3874,0,1)},
        {frame: 247, value: _M(.9922,.0004,.1246,0,.0154,.9919,-.126,0,-.1237,.1269,.9842,0,0,.3874,0,1)},
        {frame: 248, value: _M(.9922,.0001,.1246,0,.0156,.992,-.1252,0,-.1236,.1262,.9843,0,0,.3874,0,1)},
        {frame: 249, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1247,0,-.1236,.1257,.9843,0,0,.3874,0,1)},
        {frame: 250, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)},
        {frame: 252, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("neck", skeleton,skeleton.bones[7], _M(.9465,.0405,-.3203,0,.0965,.9113,.4003,0,.3081,-.4098,.8586,0,0,.7809,.0062,1), _M(1,0,0,0,0,.9161,.401,0,0,-.401,.9161,0,0,.7808,.0062,1));
        bone.length = .3144;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 1, value: _M(.941,.0468,-.3352,0,.0916,.9183,.3852,0,.3258,-.3932,.8598,0,0,.7808,.0062,1)},
        {frame: 2, value: _M(.9174,.0647,-.3926,0,.0982,.9194,.3809,0,.3856,-.388,.8371,0,0,.7808,.0062,1)},
        {frame: 3, value: _M(.8633,.0895,-.4968,0,.1172,.9217,.3698,0,.491,-.3774,.7852,0,0,.7808,.0062,1)},
        {frame: 4, value: _M(.7732,.112,-.6242,0,.1477,.9254,.349,0,.6168,-.3621,.6989,0,0,.7809,.0062,1)},
        {frame: 5, value: _M(.589,.1027,-.8016,0,.2274,.9308,.2863,0,.7755,-.3509,.5249,0,0,.7808,.0062,1)},
        {frame: 6, value: _M(.5888,.0985,-.8022,0,.338,.8716,.3551,0,.7342,-.4802,.4799,0,0,.7808,.0062,1)},
        {frame: 7, value: _M(.5828,.0898,-.8076,0,.3126,.8926,.3249,0,.75,-.4418,.4922,0,0,.7808,.0062,1)},
        {frame: 8, value: _M(.589,.1027,-.8016,0,.2274,.9308,.2863,0,.7755,-.3509,.5249,0,0,.7808,.0062,1)},
        {frame: 9, value: _M(.8802,.1037,-.4632,0,.044,.9538,.2972,0,.4726,-.282,.8349,0,0,.7809,.0062,1)},
        {frame: 10, value: _M(.9947,.0915,-.0474,0,-.0759,.9618,.2631,0,.0697,-.2581,.9636,0,0,.7809,.0062,1)},
        {frame: 11, value: _M(.9947,.0915,-.0474,0,-.0759,.9618,.2631,0,.0697,-.2581,.9636,0,0,.7808,.0062,1)},
        {frame: 12, value: _M(.9943,.0886,-.0589,0,-.0696,.9605,.2693,0,.0804,-.2636,.9613,0,0,.7808,.0062,1)},
        {frame: 13, value: _M(.9926,.0809,-.0908,0,-.0518,.9568,.286,0,.1101,-.2792,.9539,0,0,.7808,.0062,1)},
        {frame: 14, value: _M(.9895,.0733,-.1249,0,-.0323,.9524,.3031,0,.1411,-.2959,.9447,0,0,.7808,.0062,1)},
        {frame: 15, value: _M(.985,.0661,-.1596,0,-.0117,.9474,.3198,0,.1723,-.3131,.934,0,0,.7809,.0062,1)},
        {frame: 16, value: _M(.9774,.058,-.2031,0,.0148,.9405,.3395,0,.2107,-.3348,.9184,0,0,.7808,.0062,1)},
        {frame: 17, value: _M(.9672,.0504,-.249,0,.0438,.9324,.3589,0,.2503,-.358,.8996,0,0,.7808,.0062,1)},
        {frame: 18, value: _M(.9566,.045,-.2879,0,.0691,.9248,.3742,0,.283,-.3778,.8815,0,0,.7809,.0062,1)},
        {frame: 19, value: _M(.9491,.0419,-.3123,0,.0855,.9197,.3832,0,.3033,-.3904,.8692,0,0,.7808,.0062,1)},
        {frame: 20, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 30, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7809,.0062,1)},
        {frame: 31, value: _M(.9463,.0366,-.3211,0,.1356,.8568,.4975,0,.2933,-.5143,.8059,0,0,.7809,.0062,1)},
        {frame: 32, value: _M(.946,.0323,-.3225,0,.1778,.7801,.5999,0,.271,-.6248,.7322,0,0,.7808,.0062,1)},
        {frame: 33, value: _M(.9461,.0327,-.3223,0,.1743,.7872,.5915,0,.2731,-.6158,.739,0,0,.7808,.0062,1)},
        {frame: 34, value: _M(.9462,.0338,-.3219,0,.1637,.808,.5659,0,.2792,-.5882,.759,0,0,.7809,.0062,1)},
        {frame: 35, value: _M(.9463,.0354,-.3214,0,.1478,.8368,.5272,0,.2876,-.5464,.7866,0,0,.7808,.0062,1)},
        {frame: 36, value: _M(.9464,.037,-.321,0,.1312,.8637,.4866,0,.2952,-.5026,.8125,0,0,.7808,.0062,1)},
        {frame: 37, value: _M(.9464,.0383,-.3207,0,.1181,.8831,.4541,0,.3006,-.4676,.8312,0,0,.7809,.0062,1)},
        {frame: 38, value: _M(.9464,.0395,-.3204,0,.1059,.8995,.4239,0,.305,-.4351,.8471,0,0,.7809,.0062,1)},
        {frame: 39, value: _M(.9465,.0406,-.3203,0,.0948,.9133,.396,0,.3086,-.4052,.8606,0,0,.7808,.0062,1)},
        {frame: 40, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 45, value: _M(.9186,.062,-.3902,0,.1006,.9184,.3827,0,.3821,-.3909,.8374,0,0,.7808,.0062,1)},
        {frame: 46, value: _M(.825,.1126,-.5539,0,.1237,.9202,.3713,0,.5515,-.3748,.7452,0,0,.7809,.0062,1)},
        {frame: 47, value: _M(.7241,.1512,-.673,0,.1407,.9228,.3588,0,.6752,-.3545,.6468,0,0,.7809,.0062,1)},
        {frame: 48, value: _M(.6747,.1668,-.719,0,.1474,.9241,.3526,0,.7232,-.3439,.5989,0,0,.7809,.0062,1)},
        {frame: 49, value: _M(.6747,.1668,-.719,0,.1474,.9241,.3526,0,.7232,-.3439,.5989,0,0,.7808,.0062,1)},
        {frame: 51, value: _M(.6747,.1668,-.719,0,.1474,.9241,.3526,0,.7232,-.3439,.5989,0,0,.7809,.0062,1)},
        {frame: 59, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 61, value: _M(.9667,-.0012,-.2559,0,.0818,.9489,.3048,0,.2424,-.3156,.9174,0,0,.7809,.0062,1)},
        {frame: 62, value: _M(.9795,.0013,-.2012,0,.0738,.9281,.3651,0,.1872,-.3724,.909,0,0,.7809,.0062,1)},
        {frame: 63, value: _M(.9884,.0025,-.1518,0,.0582,.9171,.3943,0,.1402,-.3986,.9064,0,0,.7808,.0062,1)},
        {frame: 64, value: _M(.9954,.0027,-.096,0,.0358,.9173,.3966,0,.0892,-.3982,.9129,0,0,.7808,.0062,1)},
        {frame: 65, value: _M(.9995,.0016,-.0314,0,.011,.9186,.3951,0,.0295,-.3953,.9181,0,0,.7809,.0062,1)},
        {frame: 66, value: _M(.9989,-.0013,.0462,0,-.0158,.9292,.3693,0,-.0434,-.3696,.9282,0,0,.7809,.0062,1)},
        {frame: 67, value: _M(.9922,-.0019,.1249,0,-.0396,.9437,.3285,0,-.1184,-.3309,.9362,0,0,.7808,.0062,1)},
        {frame: 68, value: _M(.9807,.0001,.1953,0,-.059,.9533,.2961,0,-.1862,-.3019,.935,0,0,.7809,.0062,1)},
        {frame: 69, value: _M(.9678,.0019,.2518,0,-.0744,.9575,.2787,0,-.2406,-.2885,.9268,0,0,.7809,.0062,1)},
        {frame: 70, value: _M(.9594,.0021,.2822,0,-.0834,.9575,.2763,0,-.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 71, value: _M(.9667,.0012,.2559,0,-.0819,.9488,.3052,0,-.2424,-.316,.9173,0,0,.7809,.0062,1)},
        {frame: 72, value: _M(.9795,-.0014,.2012,0,-.0739,.9277,.366,0,-.1872,-.3733,.9086,0,0,.7808,.0062,1)},
        {frame: 73, value: _M(.9884,-.0026,.1515,0,-.0582,.9167,.3954,0,-.14,-.3996,.9059,0,0,.7809,.0062,1)},
        {frame: 74, value: _M(.9954,-.0028,.0957,0,-.0357,.9171,.3972,0,-.0889,-.3988,.9127,0,0,.7809,.0062,1)},
        {frame: 75, value: _M(.9995,-.0015,.0314,0,-.011,.9198,.3922,0,-.0295,-.3924,.9193,0,0,.7809,.0062,1)},
        {frame: 76, value: _M(.999,.0013,-.0457,0,.0156,.9304,.3663,0,.043,-.3666,.9294,0,0,.7808,.0062,1)},
        {frame: 77, value: _M(.9922,.0019,-.1249,0,.0396,.9437,.3285,0,.1184,-.3309,.9362,0,0,.7808,.0062,1)},
        {frame: 78, value: _M(.9807,0,-.1954,0,.0591,.9533,.2963,0,.1863,-.3021,.9349,0,0,.7808,.0062,1)},
        {frame: 79, value: _M(.9678,-.0019,-.2518,0,.0744,.9575,.2787,0,.2406,-.2885,.9268,0,0,.7808,.0062,1)},
        {frame: 80, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 83, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
        {frame: 90, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 91, value: _M(.9382,.044,-.3432,0,.0974,.9183,.3838,0,.332,-.3935,.8573,0,0,.7809,.0062,1)},
        {frame: 92, value: _M(.9119,.0521,-.407,0,.1155,.9192,.3764,0,.3938,-.3903,.8322,0,0,.7808,.0062,1)},
        {frame: 93, value: _M(.8717,.0623,-.4861,0,.1379,.9207,.3652,0,.4703,-.3854,.7939,0,0,.7808,.0062,1)},
        {frame: 94, value: _M(.8355,.0698,-.545,0,.1546,.9219,.3551,0,.5272,-.381,.7595,0,0,.7808,.0062,1)},
        {frame: 95, value: _M(.8218,.0724,-.5652,0,.1604,.9224,.3513,0,.5468,-.3793,.7464,0,0,.7808,.0062,1)},
        {frame: 98, value: _M(.8218,.0724,-.5652,0,.1604,.9224,.3513,0,.5468,-.3793,.7464,0,0,.7809,.0062,1)},
        {frame: 99, value: _M(.8218,.0724,-.5652,0,.1604,.9224,.3513,0,.5468,-.3793,.7464,0,0,.7808,.0062,1)},
        {frame: 100, value: _M(.8218,.0724,-.5652,0,.1604,.9224,.3513,0,.5468,-.3793,.7464,0,0,.7809,.0062,1)},
        {frame: 102, value: _M(.8288,.0711,-.5549,0,.1574,.9222,.3533,0,.5369,-.3802,.7532,0,0,.7809,.0062,1)},
        {frame: 103, value: _M(.8491,.0671,-.524,0,.1487,.9215,.3589,0,.5069,-.3826,.7724,0,0,.7808,.0062,1)},
        {frame: 104, value: _M(.8777,.0609,-.4753,0,.1349,.9204,.3669,0,.4598,-.3861,.7997,0,0,.7809,.0062,1)},
        {frame: 105, value: _M(.9068,.0536,-.4182,0,.1187,.9194,.375,0,.4046,-.3897,.8273,0,0,.7808,.0062,1)},
        {frame: 106, value: _M(.9292,.0469,-.3665,0,.104,.9186,.3813,0,.3546,-.3924,.8487,0,0,.7809,.0062,1)},
        {frame: 107, value: _M(.9423,.0425,-.332,0,.0942,.9181,.3849,0,.3212,-.394,.8612,0,0,.7808,.0062,1)},
        {frame: 108, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 120, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 123, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 124, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 125, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 127, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 128, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 130, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 131, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 135, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 136, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 138, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 139, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 140, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 141, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 147, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 148, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 153, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 154, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 160, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 161, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 162, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 163, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 165, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 166, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 170, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 171, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 173, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 174, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 176, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 177, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7808,.0062,1)},
        {frame: 178, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 180, value: _M(.99,.0179,-.1397,0,.0396,.9164,.3982,0,.1352,-.3998,.9066,0,0,.7809,.0062,1)},
        {frame: 190, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 191, value: _M(.9465,.041,-.3202,0,.0912,.9176,.387,0,.3097,-.3955,.8647,0,0,.7809,.0062,1)},
        {frame: 192, value: _M(.9465,.0409,-.3202,0,.0923,.9163,.3898,0,.3094,-.3985,.8634,0,0,.7808,.0062,1)},
        {frame: 193, value: _M(.9465,.0407,-.3203,0,.0941,.9142,.3943,0,.3088,-.4033,.8614,0,0,.7809,.0062,1)},
        {frame: 194, value: _M(.9465,.0405,-.3203,0,.0965,.9113,.4003,0,.3081,-.4098,.8586,0,0,.7809,.0062,1)},
        {frame: 195, value: _M(.9465,.0402,-.3203,0,.0993,.9079,.4073,0,.3072,-.4173,.8553,0,0,.7809,.0062,1)},
        {frame: 196, value: _M(.9464,.0399,-.3204,0,.1023,.9042,.4147,0,.3062,-.4252,.8517,0,0,.7808,.0062,1)},
        {frame: 197, value: _M(.9464,.0396,-.3204,0,.105,.9007,.4216,0,.3053,-.4327,.8483,0,0,.7809,.0062,1)},
        {frame: 198, value: _M(.9464,.0394,-.3205,0,.1074,.8976,.4275,0,.3045,-.4391,.8453,0,0,.7808,.0062,1)},
        {frame: 199, value: _M(.9464,.0392,-.3205,0,.1092,.8953,.432,0,.3039,-.4438,.843,0,0,.7809,.0062,1)},
        {frame: 200, value: _M(.9464,.0391,-.3205,0,.1103,.8938,.4347,0,.3035,-.4467,.8416,0,0,.7809,.0062,1)},
        {frame: 201, value: _M(.9464,.0391,-.3205,0,.1106,.8933,.4356,0,.3034,-.4477,.8412,0,0,.7808,.0062,1)},
        {frame: 202, value: _M(.9464,.0391,-.3205,0,.1105,.8934,.4354,0,.3034,-.4475,.8413,0,0,.7808,.0062,1)},
        {frame: 203, value: _M(.9464,.0391,-.3205,0,.1103,.8938,.4347,0,.3035,-.4468,.8416,0,0,.7808,.0062,1)},
        {frame: 204, value: _M(.9464,.0391,-.3205,0,.1099,.8944,.4337,0,.3036,-.4456,.8421,0,0,.7809,.0062,1)},
        {frame: 205, value: _M(.9464,.0392,-.3205,0,.1093,.8952,.4322,0,.3038,-.444,.8429,0,0,.7808,.0062,1)},
        {frame: 206, value: _M(.9464,.0393,-.3205,0,.1085,.8962,.4302,0,.3041,-.4419,.8439,0,0,.7809,.0062,1)},
        {frame: 207, value: _M(.9464,.0394,-.3205,0,.1075,.8974,.4278,0,.3044,-.4394,.8451,0,0,.7809,.0062,1)},
        {frame: 208, value: _M(.9464,.0395,-.3204,0,.1064,.8989,.4251,0,.3048,-.4364,.8465,0,0,.7809,.0062,1)},
        {frame: 209, value: _M(.9464,.0396,-.3204,0,.1052,.9005,.422,0,.3053,-.4331,.8481,0,0,.7808,.0062,1)},
        {frame: 210, value: _M(.9464,.0397,-.3204,0,.1038,.9022,.4186,0,.3057,-.4294,.8498,0,0,.7809,.0062,1)},
        {frame: 211, value: _M(.9465,.0399,-.3204,0,.1024,.904,.415,0,.3062,-.4256,.8515,0,0,.7808,.0062,1)},
        {frame: 212, value: _M(.9465,.04,-.3204,0,.1009,.9059,.4113,0,.3067,-.4216,.8533,0,0,.7808,.0062,1)},
        {frame: 213, value: _M(.9465,.0402,-.3203,0,.0994,.9077,.4076,0,.3072,-.4176,.8551,0,0,.7808,.0062,1)},
        {frame: 214, value: _M(.9465,.0403,-.3203,0,.0979,.9095,.4039,0,.3076,-.4136,.8569,0,0,.7809,.0062,1)},
        {frame: 215, value: _M(.9465,.0405,-.3203,0,.0965,.9113,.4003,0,.3081,-.4098,.8586,0,0,.7809,.0062,1)},
        {frame: 216, value: _M(.9465,.0406,-.3203,0,.0952,.9129,.397,0,.3085,-.4062,.8601,0,0,.7809,.0062,1)},
        {frame: 217, value: _M(.9465,.0407,-.3203,0,.0939,.9144,.3938,0,.3089,-.4028,.8616,0,0,.7809,.0062,1)},
        {frame: 218, value: _M(.9465,.0408,-.3202,0,.0928,.9157,.3909,0,.3092,-.3997,.8629,0,0,.7808,.0062,1)},
        {frame: 219, value: _M(.9465,.0409,-.3202,0,.0918,.9169,.3884,0,.3095,-.3969,.8641,0,0,.7808,.0062,1)},
        {frame: 220, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 221, value: _M(.9465,.0411,-.3202,0,.09,.919,.3839,0,.31,-.3922,.8661,0,0,.7809,.0062,1)},
        {frame: 222, value: _M(.9465,.0412,-.3202,0,.0891,.92,.3817,0,.3103,-.3898,.8671,0,0,.7809,.0062,1)},
        {frame: 223, value: _M(.9465,.0413,-.3202,0,.0882,.921,.3794,0,.3106,-.3873,.8681,0,0,.7808,.0062,1)},
        {frame: 224, value: _M(.9465,.0414,-.3202,0,.0873,.9221,.3771,0,.3108,-.3848,.8691,0,0,.7809,.0062,1)},
        {frame: 225, value: _M(.9465,.0414,-.3202,0,.0863,.9231,.3747,0,.3111,-.3823,.8701,0,0,.7808,.0062,1)},
        {frame: 226, value: _M(.9465,.0415,-.3202,0,.0854,.9241,.3724,0,.3113,-.3798,.8711,0,0,.7808,.0062,1)},
        {frame: 227, value: _M(.9465,.0416,-.3202,0,.0845,.9252,.3701,0,.3116,-.3773,.8721,0,0,.7809,.0062,1)},
        {frame: 228, value: _M(.9464,.0417,-.3201,0,.0836,.9262,.3678,0,.3118,-.3748,.8731,0,0,.7808,.0062,1)},
        {frame: 229, value: _M(.9464,.0418,-.3201,0,.0827,.9271,.3655,0,.3121,-.3724,.874,0,0,.7809,.0062,1)},
        {frame: 230, value: _M(.9464,.0419,-.3201,0,.0819,.928,.3634,0,.3123,-.3702,.8749,0,0,.7809,.0062,1)},
        {frame: 231, value: _M(.9464,.042,-.3201,0,.0811,.9289,.3614,0,.3125,-.368,.8757,0,0,.7808,.0062,1)},
        {frame: 232, value: _M(.9464,.042,-.3201,0,.0803,.9297,.3596,0,.3127,-.366,.8765,0,0,.7808,.0062,1)},
        {frame: 233, value: _M(.9464,.0421,-.3201,0,.0797,.9304,.3579,0,.3129,-.3642,.8772,0,0,.7809,.0062,1)},
        {frame: 234, value: _M(.9464,.0422,-.3201,0,.0791,.931,.3564,0,.313,-.3627,.8778,0,0,.7808,.0062,1)},
        {frame: 235, value: _M(.9464,.0422,-.3201,0,.0786,.9315,.3552,0,.3132,-.3613,.8783,0,0,.7808,.0062,1)},
        {frame: 236, value: _M(.9464,.0422,-.3201,0,.0782,.9319,.3541,0,.3133,-.3602,.8787,0,0,.7808,.0062,1)},
        {frame: 237, value: _M(.9464,.0423,-.3201,0,.0778,.9323,.3532,0,.3133,-.3592,.8791,0,0,.7809,.0062,1)},
        {frame: 238, value: _M(.9464,.0423,-.3201,0,.0776,.9326,.3526,0,.3134,-.3585,.8793,0,0,.7809,.0062,1)},
        {frame: 239, value: _M(.9464,.0423,-.3201,0,.0774,.9327,.3521,0,.3135,-.3581,.8795,0,0,.7808,.0062,1)},
        {frame: 240, value: _M(.9464,.0423,-.3201,0,.0773,.9328,.3519,0,.3135,-.3578,.8796,0,0,.7808,.0062,1)},
        {frame: 241, value: _M(.9464,.0423,-.3201,0,.0773,.9329,.3518,0,.3135,-.3577,.8797,0,0,.7809,.0062,1)},
        {frame: 242, value: _M(.9464,.0423,-.3201,0,.0776,.9325,.3527,0,.3134,-.3587,.8793,0,0,.7808,.0062,1)},
        {frame: 243, value: _M(.9464,.0422,-.3201,0,.0787,.9313,.3556,0,.3131,-.3617,.8781,0,0,.7809,.0062,1)},
        {frame: 244, value: _M(.9464,.042,-.3201,0,.0805,.9294,.3601,0,.3126,-.3666,.8763,0,0,.7809,.0062,1)},
        {frame: 245, value: _M(.9465,.0418,-.3201,0,.0828,.927,.3659,0,.312,-.3728,.8739,0,0,.7809,.0062,1)},
        {frame: 246, value: _M(.9465,.0415,-.3202,0,.0853,.9243,.3721,0,.3114,-.3795,.8712,0,0,.7808,.0062,1)},
        {frame: 247, value: _M(.9465,.0413,-.3202,0,.0876,.9217,.3779,0,.3107,-.3857,.8687,0,0,.7809,.0062,1)},
        {frame: 248, value: _M(.9465,.0412,-.3202,0,.0894,.9197,.3824,0,.3102,-.3905,.8668,0,0,.7809,.0062,1)},
        {frame: 249, value: _M(.9465,.041,-.3202,0,.0905,.9184,.3851,0,.3099,-.3935,.8655,0,0,.7809,.0062,1)},
        {frame: 250, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)},
        {frame: 252, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("head", skeleton,skeleton.bones[8], _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1), _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1));
        bone.length = .4309;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 20, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 30, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 51, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 59, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 83, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 90, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 108, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 120, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 150, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 151, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 180, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 190, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 230, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 231, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 252, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.L", skeleton,skeleton.bones[7], _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1), _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1));
        bone.length = .465;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 20, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 30, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 51, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 59, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 61, value: _M(-.1351,-.0959,.9862,0,.9717,-.2073,.1129,0,.1936,.9736,.1212,0,.0448,.6372,.1036,1)},
        {frame: 62, value: _M(-.1645,-.0907,.9822,0,.9544,-.266,.1353,0,.249,.9597,.1303,0,.0448,.6372,.1036,1)},
        {frame: 63, value: _M(-.129,-.097,.9869,0,.9652,-.2405,.1026,0,.2274,.9658,.1246,0,.0448,.6372,.1036,1)},
        {frame: 64, value: _M(-.0384,-.1122,.9929,0,.9829,-.1831,.0173,0,.1799,.9767,.1174,0,.0448,.6372,.1036,1)},
        {frame: 65, value: _M(.0412,-.1248,.9913,0,.9867,-.151,-.06,0,.1572,.9806,.117,0,.0448,.6372,.1036,1)},
        {frame: 66, value: _M(.0922,-.1325,.9869,0,.9832,-.1445,-.1113,0,.1574,.9806,.117,0,.0448,.6372,.1036,1)},
        {frame: 67, value: _M(.1319,-.1383,.9816,0,.9785,-.1401,-.1512,0,.1584,.9804,.1168,0,.0448,.6372,.1036,1)},
        {frame: 68, value: _M(.1643,-.1428,.976,0,.9734,-.1366,-.1839,0,.1596,.9803,.1166,0,.0448,.6372,.1036,1)},
        {frame: 69, value: _M(.1923,-.1466,.9703,0,.9675,-.1372,-.2125,0,.1643,.9796,.1155,0,.0448,.6372,.1036,1)},
        {frame: 70, value: _M(.2221,-.1506,.9633,0,.958,-.1503,-.2444,0,.1816,.9771,.1109,0,.0448,.6372,.1036,1)},
        {frame: 71, value: _M(.2443,-.1535,.9575,0,.9354,-.2231,-.2744,0,.2557,.9626,.089,0,.0448,.6372,.1036,1)},
        {frame: 72, value: _M(.2533,-.1546,.955,0,.918,-.2732,-.2877,0,.3053,.9495,.0727,0,.0448,.6372,.1036,1)},
        {frame: 73, value: _M(.2235,-.1508,.963,0,.9343,-.2483,-.2557,0,.2777,.9569,.0854,0,.0448,.6372,.1036,1)},
        {frame: 74, value: _M(.1466,-.1403,.9792,0,.9666,-.19,-.172,0,.2102,.9717,.1078,0,.0448,.6372,.1036,1)},
        {frame: 75, value: _M(.0771,-.1303,.9885,0,.9838,-.1513,-.0967,0,.1621,.9799,.1165,0,.0448,.6372,.1036,1)},
        {frame: 76, value: _M(.0296,-.1231,.992,0,.9886,-.143,-.0473,0,.1477,.982,.1174,0,.0448,.6372,.1036,1)},
        {frame: 77, value: _M(-.0094,-.1169,.9931,0,.9896,-.1436,-.0075,0,.1435,.9827,.1171,0,.0448,.6372,.1036,1)},
        {frame: 78, value: _M(-.0415,-.1117,.9929,0,.9894,-.1428,.0253,0,.139,.9834,.1165,0,.0448,.6372,.1036,1)},
        {frame: 79, value: _M(-.071,-.1069,.9917,0,.988,-.1446,.0551,0,.1375,.9837,.1158,0,.0448,.6372,.1036,1)},
        {frame: 80, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 83, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
        {frame: 90, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 108, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 120, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 180, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 190, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 252, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.L", skeleton,skeleton.bones[10], _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1), _M(.1719,-.7324,-.6588,0,-.0799,.6562,-.7503,0,.9819,.1816,.0543,0,-.0268,.5347,-.0473,1));
        bone.length = .7926;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 1, value: _M(.1857,-.7925,-.5809,0,-.0505,.5827,-.8111,0,.9813,.1799,.0682,0,-.0268,.5347,-.0473,1)},
        {frame: 2, value: _M(.179,-.7763,-.6044,0,-.0448,.6073,-.7932,0,.9828,.1691,.0739,0,-.0268,.5347,-.0473,1)},
        {frame: 3, value: _M(.1674,-.7449,-.6459,0,-.034,.6503,-.7589,0,.9853,.149,.0835,0,-.0268,.5347,-.0473,1)},
        {frame: 4, value: _M(.1534,-.7011,-.6963,0,-.0193,.7024,-.7115,0,.988,.1226,.0942,0,-.0268,.5347,-.0473,1)},
        {frame: 5, value: _M(.1338,-.6273,-.7672,0,.005,.7745,-.6325,0,.991,.0808,.1068,0,-.0268,.5347,-.0473,1)},
        {frame: 9, value: _M(.2074,-.7355,-.645,0,.1586,.6759,-.7197,0,.9653,.047,.2568,0,-.0268,.5347,-.0473,1)},
        {frame: 10, value: _M(.2535,-.8293,-.4979,0,.3191,.5576,-.7663,0,.9132,.0354,.406,0,-.0268,.5347,-.0473,1)},
        {frame: 11, value: _M(.2183,-.8114,-.5422,0,.2921,.5845,-.757,0,.9311,.0069,.3646,0,-.0268,.5347,-.0473,1)},
        {frame: 12, value: _M(.2065,-.8047,-.5566,0,.1556,.5886,-.7933,0,.966,.0772,.2467,0,-.0268,.5347,-.0473,1)},
        {frame: 13, value: _M(.2096,-.7996,-.5628,0,-.0617,.5637,-.8237,0,.9758,.2074,.0688,0,-.0268,.5347,-.0473,1)},
        {frame: 14, value: _M(.2092,-.7972,-.5663,0,-.1557,.5445,-.8242,0,.9654,.2605,-.0102,0,-.0268,.5347,-.0473,1)},
        {frame: 15, value: _M(.2026,-.7969,-.5691,0,-.1498,.5491,-.8223,0,.9677,.2518,-.0081,0,-.0268,.5347,-.0473,1)},
        {frame: 16, value: _M(.1968,-.7968,-.5713,0,-.1311,.5561,-.8207,0,.9716,.2365,.005,0,-.0268,.5347,-.0473,1)},
        {frame: 17, value: _M(.1923,-.7967,-.573,0,-.1041,.564,-.8192,0,.9758,.2172,.0255,0,-.0268,.5347,-.0473,1)},
        {frame: 18, value: _M(.1894,-.7967,-.574,0,-.0771,.5707,-.8175,0,.9789,.1991,.0466,0,-.0268,.5347,-.0473,1)},
        {frame: 19, value: _M(.1879,-.7967,-.5744,0,-.0584,.5748,-.8162,0,.9805,.1869,.0615,0,-.0268,.5347,-.0473,1)},
        {frame: 20, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 30, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 31, value: _M(.1772,-.7408,-.648,0,-.0155,.6562,-.7544,0,.9841,.1437,.1048,0,-.0268,.5347,-.0473,1)},
        {frame: 32, value: _M(.165,-.6783,-.716,0,.0221,.7284,-.6848,0,.986,.0972,.1352,0,-.0268,.5347,-.0473,1)},
        {frame: 33, value: _M(.1545,-.7015,-.6957,0,.0223,.7065,-.7074,0,.9877,.0937,.1248,0,-.0268,.5347,-.0473,1)},
        {frame: 34, value: _M(.1403,-.7359,-.6623,0,.014,.6704,-.7419,0,.99,.0948,.1044,0,-.0268,.5347,-.0473,1)},
        {frame: 35, value: _M(.1258,-.757,-.6412,0,-.0049,.6459,-.7634,0,.992,.0991,.0775,0,-.0268,.5347,-.0473,1)},
        {frame: 36, value: _M(.1165,-.776,-.6199,0,-.0238,.6218,-.7829,0,.9929,.1059,.0539,0,-.0268,.5347,-.0473,1)},
        {frame: 37, value: _M(.1145,-.7911,-.6009,0,-.0368,.601,-.7984,0,.9927,.1136,.0397,0,-.0268,.5347,-.0473,1)},
        {frame: 38, value: _M(.1332,-.7989,-.5865,0,-.0455,.5863,-.8088,0,.99,.1344,.0417,0,-.0268,.5347,-.0473,1)},
        {frame: 39, value: _M(.1704,-.7983,-.5776,0,-.0507,.5783,-.8142,0,.9841,.1681,.058,0,-.0268,.5347,-.0473,1)},
        {frame: 40, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 45, value: _M(.2836,-.7774,-.5615,0,-.0306,.5779,-.8155,0,.9585,.2484,.1401,0,-.0268,.5347,-.0473,1)},
        {frame: 46, value: _M(.48,-.7144,-.5092,0,.0143,.5867,-.8097,0,.8771,.3814,.2919,0,-.0268,.5347,-.0473,1)},
        {frame: 47, value: _M(.5644,-.6757,-.4741,0,.0342,.593,-.8045,0,.8248,.4378,.3578,0,-.0268,.5347,-.0473,1)},
        {frame: 48, value: _M(.472,-.6465,-.5994,0,-.2258,.5686,-.7911,0,.8522,.5087,.1224,0,-.0268,.5347,-.0473,1)},
        {frame: 51, value: _M(.472,-.6465,-.5994,0,-.2258,.5686,-.7911,0,.8522,.5087,.1224,0,-.0268,.5347,-.0473,1)},
        {frame: 59, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 61, value: _M(.164,-.8608,-.4819,0,-.0208,.4854,-.8741,0,.9862,.1533,.0617,0,-.0268,.5347,-.0473,1)},
        {frame: 62, value: _M(.1643,-.8537,-.4942,0,-.0391,.4949,-.868,0,.9856,.1619,.0479,0,-.0268,.5347,-.0473,1)},
        {frame: 63, value: _M(.1626,-.8457,-.5083,0,-.0408,.509,-.8598,0,.9859,.1605,.0482,0,-.0268,.5347,-.0473,1)},
        {frame: 64, value: _M(.1603,-.8356,-.5254,0,-.0416,.5261,-.8494,0,.9862,.158,.0496,0,-.0268,.5347,-.0473,1)},
        {frame: 65, value: _M(.1579,-.8243,-.5437,0,-.0441,.5441,-.8378,0,.9865,.1563,.0496,0,-.0268,.5347,-.0473,1)},
        {frame: 66, value: _M(.1557,-.8114,-.5634,0,-.0541,.5625,-.8251,0,.9863,.159,.0437,0,-.0268,.5347,-.0473,1)},
        {frame: 67, value: _M(.1535,-.798,-.5828,0,-.0683,.5798,-.8119,0,.9858,.1645,.0345,0,-.0268,.5347,-.0473,1)},
        {frame: 68, value: _M(.1511,-.7853,-.6003,0,-.0794,.5957,-.7993,0,.9853,.1684,.0276,0,-.0268,.5347,-.0473,1)},
        {frame: 69, value: _M(.149,-.7748,-.6144,0,-.0884,.6084,-.7887,0,.9849,.1718,.0222,0,-.0268,.5347,-.0473,1)},
        {frame: 70, value: _M(.1477,-.7689,-.622,0,-.0932,.6153,-.7828,0,.9846,.1736,.0192,0,-.0268,.5347,-.0473,1)},
        {frame: 71, value: _M(.1484,-.7724,-.6175,0,-.0904,.6113,-.7863,0,.9848,.1725,.0209,0,-.0268,.5347,-.0473,1)},
        {frame: 72, value: _M(.1502,-.781,-.6063,0,-.0832,.6011,-.7949,0,.9851,.1698,.0253,0,-.0268,.5347,-.0473,1)},
        {frame: 73, value: _M(.1521,-.7905,-.5933,0,-.0749,.5893,-.8044,0,.9855,.1668,.0304,0,-.0268,.5347,-.0473,1)},
        {frame: 74, value: _M(.1542,-.8019,-.5772,0,-.0648,.5747,-.8158,0,.9859,.1632,.0366,0,-.0268,.5347,-.0473,1)},
        {frame: 75, value: _M(.1563,-.8139,-.5595,0,-.0539,.5586,-.8277,0,.9862,.1595,.0435,0,-.0268,.5347,-.0473,1)},
        {frame: 76, value: _M(.1583,-.8268,-.5398,0,-.0418,.5406,-.8402,0,.9865,.1556,.0511,0,-.0268,.5347,-.0473,1)},
        {frame: 77, value: _M(.16,-.8392,-.5197,0,-.0295,.5221,-.8523,0,.9867,.1517,.0588,0,-.0268,.5347,-.0473,1)},
        {frame: 78, value: _M(.1614,-.8503,-.5009,0,-.0183,.5049,-.863,0,.9867,.1484,.066,0,-.0268,.5347,-.0473,1)},
        {frame: 79, value: _M(.1623,-.859,-.4856,0,-.0091,.4908,-.8712,0,.9867,.1458,.0718,0,-.0268,.5347,-.0473,1)},
        {frame: 80, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 83, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
        {frame: 90, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 96, value: _M(.2296,-.855,-.465,0,-.0155,.4745,-.8801,0,.9732,.2092,.0957,0,-.0268,.5347,-.0473,1)},
        {frame: 97, value: _M(.2575,-.9031,-.3437,0,.0788,.3741,-.924,0,.9631,.2109,.1675,0,-.0268,.5347,-.0473,1)},
        {frame: 98, value: _M(-.3718,.0765,-.9252,0,.3268,.9436,-.0533,0,.8689,-.3222,-.3758,0,-.0268,.5347,-.0473,1)},
        {frame: 99, value: _M(-.3955,.0355,-.9178,0,.3417,.9332,-.1112,0,.8525,-.3575,-.3812,0,-.0268,.5347,-.0473,1)},
        {frame: 100, value: _M(-.4164,-.0783,-.9058,0,.331,.9149,-.2313,0,.8468,-.3961,-.3551,0,-.0268,.5347,-.0473,1)},
        {frame: 101, value: _M(-.43,-.2051,-.8792,0,.3091,.8816,-.3568,0,.8483,-.4252,-.3157,0,-.0268,.5347,-.0473,1)},
        {frame: 102, value: _M(-.4167,-.3233,-.8496,0,.272,.8475,-.4559,0,.8674,-.4211,-.2652,0,-.0268,.5347,-.0473,1)},
        {frame: 103, value: _M(-.3518,-.4655,-.8121,0,.2052,.8081,-.5521,0,.9133,-.3609,-.1888,0,-.0268,.5347,-.0473,1)},
        {frame: 104, value: _M(-.2317,-.6078,-.7595,0,.1223,.7564,-.6426,0,.9651,-.2418,-.1009,0,-.0268,.5347,-.0473,1)},
        {frame: 105, value: _M(-.0785,-.7158,-.6939,0,.0442,.6928,-.7197,0,.9959,-.0872,-.0227,0,-.0268,.5347,-.0473,1)},
        {frame: 106, value: _M(.0633,-.7731,-.6311,0,-.0119,.6317,-.7751,0,.9979,.0566,.0308,0,-.0268,.5347,-.0473,1)},
        {frame: 107, value: _M(.1564,-.7931,-.5887,0,-.0426,.5901,-.8062,0,.9868,.1511,.0585,0,-.0268,.5347,-.0473,1)},
        {frame: 108, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 120, value: _M(.1834,-.8775,-.4432,0,-.0545,.4411,-.8958,0,.9815,.1884,.0331,0,-.0268,.5347,-.0473,1)},
        {frame: 121, value: _M(.1834,-.8775,-.4432,0,-.0546,.441,-.8958,0,.9815,.1885,.0329,0,-.0268,.5347,-.0473,1)},
        {frame: 122, value: _M(.1832,-.8775,-.4432,0,-.0551,.441,-.8958,0,.9815,.1885,.0325,0,-.0268,.5347,-.0473,1)},
        {frame: 123, value: _M(.183,-.8775,-.4433,0,-.0558,.4409,-.8958,0,.9815,.1887,.0318,0,-.0268,.5347,-.0473,1)},
        {frame: 124, value: _M(.1827,-.8775,-.4434,0,-.0568,.4408,-.8958,0,.9815,.1888,.0307,0,-.0268,.5347,-.0473,1)},
        {frame: 125, value: _M(.1823,-.8775,-.4435,0,-.058,.4407,-.8958,0,.9815,.189,.0294,0,-.0268,.5347,-.0473,1)},
        {frame: 126, value: _M(.1818,-.8776,-.4436,0,-.0596,.4405,-.8958,0,.9815,.1893,.0278,0,-.0268,.5347,-.0473,1)},
        {frame: 127, value: _M(.1812,-.8776,-.4438,0,-.0615,.4403,-.8958,0,.9815,.1896,.0259,0,-.0268,.5347,-.0473,1)},
        {frame: 128, value: _M(.1806,-.8777,-.444,0,-.0636,.4401,-.8957,0,.9815,.19,.0237,0,-.0268,.5347,-.0473,1)},
        {frame: 129, value: _M(.1798,-.8777,-.4442,0,-.066,.4398,-.8957,0,.9815,.1903,.0212,0,-.0268,.5347,-.0473,1)},
        {frame: 130, value: _M(.179,-.8778,-.4444,0,-.0686,.4395,-.8956,0,.9815,.1908,.0184,0,-.0268,.5347,-.0473,1)},
        {frame: 131, value: _M(.1781,-.8778,-.4447,0,-.0715,.4392,-.8956,0,.9814,.1913,.0155,0,-.0268,.5347,-.0473,1)},
        {frame: 132, value: _M(.1771,-.8779,-.4449,0,-.0746,.4388,-.8955,0,.9814,.1918,.0123,0,-.0268,.5347,-.0473,1)},
        {frame: 133, value: _M(.1761,-.8779,-.4452,0,-.0779,.4384,-.8954,0,.9813,.1923,.0088,0,-.0268,.5347,-.0473,1)},
        {frame: 134, value: _M(.175,-.878,-.4455,0,-.0813,.438,-.8953,0,.9812,.1929,.0052,0,-.0268,.5347,-.0473,1)},
        {frame: 135, value: _M(.1738,-.8781,-.4458,0,-.0849,.4376,-.8951,0,.9811,.1934,.0015,0,-.0268,.5347,-.0473,1)},
        {frame: 136, value: _M(.1726,-.8782,-.4461,0,-.0886,.4372,-.895,0,.981,.1941,-.0024,0,-.0268,.5347,-.0473,1)},
        {frame: 137, value: _M(.1714,-.8783,-.4464,0,-.0924,.4368,-.8948,0,.9808,.1947,-.0063,0,-.0268,.5347,-.0473,1)},
        {frame: 138, value: _M(.1702,-.8783,-.4467,0,-.0963,.4363,-.8946,0,.9807,.1953,-.0103,0,-.0268,.5347,-.0473,1)},
        {frame: 139, value: _M(.169,-.8784,-.447,0,-.1002,.4359,-.8944,0,.9805,.1959,-.0144,0,-.0268,.5347,-.0473,1)},
        {frame: 140, value: _M(.1677,-.8785,-.4473,0,-.104,.4354,-.8942,0,.9803,.1965,-.0184,0,-.0268,.5347,-.0473,1)},
        {frame: 141, value: _M(.1665,-.8786,-.4476,0,-.1078,.435,-.894,0,.9801,.1971,-.0223,0,-.0268,.5347,-.0473,1)},
        {frame: 142, value: _M(.1654,-.8787,-.4478,0,-.1116,.4345,-.8937,0,.9799,.1977,-.0262,0,-.0268,.5347,-.0473,1)},
        {frame: 143, value: _M(.1642,-.8788,-.4481,0,-.1152,.4341,-.8935,0,.9797,.1983,-.0299,0,-.0268,.5347,-.0473,1)},
        {frame: 144, value: _M(.1631,-.8789,-.4483,0,-.1186,.4337,-.8932,0,.9795,.1989,-.0335,0,-.0268,.5347,-.0473,1)},
        {frame: 145, value: _M(.162,-.8789,-.4486,0,-.1219,.4333,-.893,0,.9792,.1994,-.0369,0,-.0268,.5347,-.0473,1)},
        {frame: 146, value: _M(.1611,-.879,-.4488,0,-.125,.4329,-.8927,0,.979,.1999,-.0401,0,-.0268,.5347,-.0473,1)},
        {frame: 147, value: _M(.1601,-.8791,-.449,0,-.1278,.4325,-.8925,0,.9788,.2003,-.0431,0,-.0268,.5347,-.0473,1)},
        {frame: 148, value: _M(.1593,-.8791,-.4491,0,-.1304,.4322,-.8923,0,.9786,.2007,-.0458,0,-.0268,.5347,-.0473,1)},
        {frame: 149, value: _M(.1585,-.8792,-.4493,0,-.1328,.4319,-.8921,0,.9784,.2011,-.0483,0,-.0268,.5347,-.0473,1)},
        {frame: 150, value: _M(.1579,-.8793,-.4494,0,-.1349,.4317,-.8919,0,.9782,.2014,-.0505,0,-.0268,.5347,-.0473,1)},
        {frame: 151, value: _M(.1573,-.8793,-.4496,0,-.1368,.4314,-.8917,0,.978,.2017,-.0524,0,-.0268,.5347,-.0473,1)},
        {frame: 152, value: _M(.1568,-.8793,-.4497,0,-.1383,.4313,-.8916,0,.9779,.202,-.054,0,-.0268,.5347,-.0473,1)},
        {frame: 153, value: _M(.1564,-.8794,-.4497,0,-.1396,.4311,-.8914,0,.9778,.2022,-.0554,0,-.0268,.5347,-.0473,1)},
        {frame: 154, value: _M(.156,-.8794,-.4498,0,-.1406,.431,-.8913,0,.9777,.2023,-.0564,0,-.0268,.5347,-.0473,1)},
        {frame: 155, value: _M(.1558,-.8794,-.4498,0,-.1413,.4309,-.8913,0,.9776,.2024,-.0571,0,-.0268,.5347,-.0473,1)},
        {frame: 156, value: _M(.1557,-.8794,-.4499,0,-.1417,.4308,-.8912,0,.9776,.2025,-.0576,0,-.0268,.5347,-.0473,1)},
        {frame: 157, value: _M(.1556,-.8794,-.4499,0,-.1419,.4308,-.8912,0,.9776,.2025,-.0577,0,-.0268,.5347,-.0473,1)},
        {frame: 158, value: _M(.1557,-.8794,-.4499,0,-.1415,.4309,-.8913,0,.9776,.2025,-.0573,0,-.0268,.5347,-.0473,1)},
        {frame: 159, value: _M(.1561,-.8794,-.4498,0,-.1404,.431,-.8914,0,.9777,.2023,-.0562,0,-.0268,.5347,-.0473,1)},
        {frame: 160, value: _M(.1567,-.8793,-.4497,0,-.1386,.4312,-.8915,0,.9779,.202,-.0543,0,-.0268,.5347,-.0473,1)},
        {frame: 161, value: _M(.1575,-.8793,-.4495,0,-.136,.4315,-.8918,0,.9781,.2016,-.0516,0,-.0268,.5347,-.0473,1)},
        {frame: 162, value: _M(.1586,-.8792,-.4493,0,-.1327,.4319,-.8921,0,.9784,.2011,-.0482,0,-.0268,.5347,-.0473,1)},
        {frame: 163, value: _M(.1598,-.8791,-.449,0,-.1288,.4324,-.8924,0,.9787,.2005,-.0441,0,-.0268,.5347,-.0473,1)},
        {frame: 164, value: _M(.1613,-.879,-.4487,0,-.1242,.433,-.8928,0,.9791,.1997,-.0393,0,-.0268,.5347,-.0473,1)},
        {frame: 165, value: _M(.163,-.8789,-.4484,0,-.119,.4336,-.8932,0,.9794,.1989,-.034,0,-.0268,.5347,-.0473,1)},
        {frame: 166, value: _M(.1647,-.8787,-.448,0,-.1135,.4343,-.8936,0,.9798,.198,-.0281,0,-.0268,.5347,-.0473,1)},
        {frame: 167, value: _M(.1666,-.8786,-.4475,0,-.1075,.435,-.894,0,.9801,.1971,-.022,0,-.0268,.5347,-.0473,1)},
        {frame: 168, value: _M(.1686,-.8785,-.4471,0,-.1014,.4357,-.8944,0,.9805,.1961,-.0156,0,-.0268,.5347,-.0473,1)},
        {frame: 169, value: _M(.1706,-.8783,-.4466,0,-.0951,.4365,-.8947,0,.9807,.1951,-.0091,0,-.0268,.5347,-.0473,1)},
        {frame: 170, value: _M(.1725,-.8782,-.4461,0,-.089,.4372,-.895,0,.981,.1941,-.0027,0,-.0268,.5347,-.0473,1)},
        {frame: 171, value: _M(.1744,-.8781,-.4456,0,-.083,.4379,-.8952,0,.9812,.1931,.0035,0,-.0268,.5347,-.0473,1)},
        {frame: 172, value: _M(.1762,-.8779,-.4452,0,-.0774,.4385,-.8954,0,.9813,.1922,.0093,0,-.0268,.5347,-.0473,1)},
        {frame: 173, value: _M(.1778,-.8778,-.4447,0,-.0723,.4391,-.8955,0,.9814,.1914,.0146,0,-.0268,.5347,-.0473,1)},
        {frame: 174, value: _M(.1793,-.8777,-.4443,0,-.0677,.4396,-.8956,0,.9815,.1906,.0194,0,-.0268,.5347,-.0473,1)},
        {frame: 175, value: _M(.1805,-.8777,-.444,0,-.0637,.44,-.8957,0,.9815,.19,.0236,0,-.0268,.5347,-.0473,1)},
        {frame: 176, value: _M(.1816,-.8776,-.4437,0,-.0604,.4404,-.8958,0,.9815,.1894,.027,0,-.0268,.5347,-.0473,1)},
        {frame: 177, value: _M(.1824,-.8775,-.4435,0,-.0578,.4407,-.8958,0,.9815,.189,.0296,0,-.0268,.5347,-.0473,1)},
        {frame: 178, value: _M(.1829,-.8775,-.4433,0,-.056,.4409,-.8958,0,.9815,.1887,.0316,0,-.0268,.5347,-.0473,1)},
        {frame: 179, value: _M(.1833,-.8775,-.4432,0,-.0549,.441,-.8958,0,.9815,.1885,.0327,0,-.0268,.5347,-.0473,1)},
        {frame: 180, value: _M(.1834,-.8775,-.4432,0,-.0545,.4411,-.8958,0,.9815,.1884,.0331,0,-.0268,.5347,-.0473,1)},
        {frame: 190, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)},
        {frame: 252, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.L", skeleton,skeleton.bones[11], _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1), _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1));
        bone.length = .6211;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 1, value: _M(.9408,-.154,-.3018,0,.269,.8811,.389,0,.206,-.4472,.8704,0,0,.7926,0,1)},
        {frame: 2, value: _M(.9458,-.1602,-.2826,0,.2785,.8477,.4515,0,.1673,-.5057,.8463,0,0,.7926,0,1)},
        {frame: 3, value: _M(.9564,-.1836,-.2271,0,.2841,.7649,.5782,0,.0675,-.6175,.7837,0,0,.7926,0,1)},
        {frame: 4, value: _M(.9617,-.2371,-.1375,0,.2589,.6211,.7397,0,-.09,-.747,.6587,0,0,.7926,0,1)},
        {frame: 5, value: _M(.9534,-.2895,.0847,0,.0286,.3663,.9301,0,-.3003,-.8843,.3575,0,0,.7926,0,1)},
        {frame: 6, value: _M(.9404,-.2165,.2621,0,-.2259,.1782,.9577,0,-.254,-.9599,.1187,0,0,.7926,0,1)},
        {frame: 7, value: _M(.9362,-.1936,.2933,0,-.2586,.186,.9479,0,-.2381,-.9633,.124,0,0,.7926,0,1)},
        {frame: 8, value: _M(.9374,-.1788,.299,0,-.2573,.2234,.9402,0,-.2349,-.9582,.1634,0,0,.7926,0,1)},
        {frame: 9, value: _M(.9748,-.2232,-.0045,0,.0829,.3433,.9356,0,-.2073,-.9123,.3531,0,0,.7926,0,1)},
        {frame: 10, value: _M(.9004,-.3122,-.303,0,.428,.5103,.7459,0,-.0783,-.8013,.5931,0,0,.7926,0,1)},
        {frame: 11, value: _M(.9049,-.3164,-.2847,0,.4256,.6807,.5963,0,.0051,-.6607,.7506,0,0,.7926,0,1)},
        {frame: 12, value: _M(.9081,-.31,-.2814,0,.4177,.7176,.5573,0,.0292,-.6236,.7812,0,0,.7926,0,1)},
        {frame: 13, value: _M(.9137,-.2912,-.2835,0,.4035,.7325,.5483,0,.048,-.6154,.7867,0,0,.7926,0,1)},
        {frame: 14, value: _M(.9192,-.271,-.2857,0,.3877,.7497,.5363,0,.0688,-.6037,.7942,0,0,.7926,0,1)},
        {frame: 15, value: _M(.9245,-.2504,-.2873,0,.3688,.7778,.5089,0,.096,-.5764,.8115,0,0,.7926,0,1)},
        {frame: 16, value: _M(.9302,-.2245,-.2903,0,.3435,.8109,.4738,0,.1291,-.5405,.8314,0,0,.7926,0,1)},
        {frame: 17, value: _M(.9351,-.1968,-.2947,0,.3148,.8432,.4358,0,.1628,-.5003,.8504,0,0,.7926,0,1)},
        {frame: 18, value: _M(.9383,-.1731,-.2994,0,.2888,.8686,.4027,0,.1903,-.4644,.865,0,0,.7926,0,1)},
        {frame: 19, value: _M(.9398,-.1582,-.3028,0,.2717,.8835,.3816,0,.2072,-.4409,.8733,0,0,.7926,0,1)},
        {frame: 20, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 30, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 45, value: _M(.9645,-.0834,-.2505,0,.1834,.8941,.4085,0,.1899,-.44,.8777,0,0,.7926,0,1)},
        {frame: 46, value: _M(.9903,.0915,-.1048,0,-.0315,.8813,.4714,0,.1355,-.4635,.8757,0,0,.7926,0,1)},
        {frame: 47, value: _M(.9731,.2293,.0229,0,-.21,.8415,.4978,0,.0949,-.4892,.867,0,0,.7926,0,1)},
        {frame: 48, value: _M(.9552,.2853,.0785,0,-.2851,.8167,.5018,0,.079,-.5017,.8614,0,0,.7926,0,1)},
        {frame: 51, value: _M(.9552,.2853,.0785,0,-.2851,.8167,.5018,0,.079,-.5017,.8614,0,0,.7926,0,1)},
        {frame: 59, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 61, value: _M(.9333,.1787,-.3114,0,.322,-.0331,.9462,0,.1588,-.9834,-.0884,0,0,.7926,0,1)},
        {frame: 62, value: _M(.901,.2422,-.3598,0,.3817,-.0489,.923,0,.206,-.969,-.1365,0,0,.7926,0,1)},
        {frame: 63, value: _M(.9108,.1929,-.365,0,.3687,.0177,.9294,0,.1858,-.9811,-.055,0,0,.7926,0,1)},
        {frame: 64, value: _M(.9389,.0821,-.3342,0,.3239,.1174,.9388,0,.1163,-.9897,.0836,0,0,.7926,0,1)},
        {frame: 65, value: _M(.9513,-.0033,-.3083,0,.298,.2657,.9168,0,.0789,-.9641,.2537,0,0,.7926,0,1)},
        {frame: 66, value: _M(.9511,-.0544,-.3041,0,.2874,.5166,.8065,0,.1132,-.8545,.507,0,0,.7926,0,1)},
        {frame: 67, value: _M(.9487,-.0923,-.3023,0,.272,.7253,.6324,0,.1609,-.6822,.7133,0,0,.7926,0,1)},
        {frame: 68, value: _M(.9466,-.1226,-.2983,0,.2712,.8032,.5305,0,.1745,-.583,.7935,0,0,.7926,0,1)},
        {frame: 69, value: _M(.9428,-.1431,-.301,0,.2753,.8434,.4614,0,.1879,-.5179,.8346,0,0,.7926,0,1)},
        {frame: 70, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 71, value: _M(.9365,-.1123,-.3322,0,.2643,.8488,.458,0,.2305,-.5167,.8245,0,0,.7926,0,1)},
        {frame: 72, value: _M(.9337,-.0582,-.3533,0,.2552,.8003,.5426,0,.2512,-.5968,.7621,0,0,.7926,0,1)},
        {frame: 73, value: _M(.9373,-.0447,-.3456,0,.2625,.743,.6157,0,.2292,-.6678,.7081,0,0,.7926,0,1)},
        {frame: 74, value: _M(.94,-.0396,-.3389,0,.2761,.6719,.6872,0,.2005,-.7396,.6425,0,0,.7926,0,1)},
        {frame: 75, value: _M(.9438,-.0296,-.3292,0,.2838,.5828,.7615,0,.1693,-.8121,.5584,0,0,.7926,0,1)},
        {frame: 76, value: _M(.9505,-.0128,-.3106,0,.2812,.4614,.8415,0,.1326,-.8871,.4421,0,0,.7926,0,1)},
        {frame: 77, value: _M(.9568,.0084,-.2906,0,.2718,.3294,.9042,0,.1033,-.9442,.3129,0,0,.7926,0,1)},
        {frame: 78, value: _M(.9611,.0319,-.2742,0,.2602,.2271,.9385,0,.0922,-.9734,.21,0,0,.7926,0,1)},
        {frame: 79, value: _M(.9618,.0651,-.2661,0,.2565,.1271,.9582,0,.0962,-.9897,.1056,0,0,.7926,0,1)},
        {frame: 80, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 83, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
        {frame: 90, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 91, value: _M(.9328,-.1594,-.3233,0,.3008,.8384,.4546,0,.1986,-.5213,.8299,0,0,.7926,0,1)},
        {frame: 92, value: _M(.907,-.1669,-.3866,0,.397,.6449,.653,0,.1403,-.7458,.6512,0,0,.7926,0,1)},
        {frame: 93, value: _M(.8635,-.1488,-.4819,0,.5036,.3044,.8085,0,.0263,-.9408,.3378,0,0,.7926,0,1)},
        {frame: 94, value: _M(.8126,-.1079,-.5727,0,.576,-.0005,.8174,0,-.0885,-.9942,.0617,0,0,.7926,0,1)},
        {frame: 95, value: _M(.7568,-.079,-.6488,0,.6368,-.1344,.7592,0,-.1472,-.9878,-.0514,0,0,.7926,0,1)},
        {frame: 96, value: _M(.6661,-.0742,-.7422,0,.7232,-.1792,.667,0,-.1825,-.981,-.0657,0,0,.7926,0,1)},
        {frame: 97, value: _M(.6087,-.0763,-.7897,0,.7669,-.1986,.6103,0,-.2034,-.9771,-.0624,0,0,.7926,0,1)},
        {frame: 98, value: _M(.8437,-.2533,.4733,0,-.0966,.7956,.5981,0,-.5281,-.5503,.6467,0,0,.7926,0,1)},
        {frame: 102, value: _M(.8619,-.2467,.443,0,-.0773,.7995,.5956,0,-.5011,-.5476,.67,0,0,.7926,0,1)},
        {frame: 103, value: _M(.9094,-.2277,.348,0,-.0202,.8117,.5838,0,-.4154,-.538,.7335,0,0,.7926,0,1)},
        {frame: 104, value: _M(.9608,-.2014,.1908,0,.0645,.8311,.5524,0,-.2698,-.5184,.8115,0,0,.7926,0,1)},
        {frame: 105, value: _M(.9842,-.1771,.0021,0,.1525,.8536,.4982,0,-.0901,-.4899,.8671,0,0,.7926,0,1)},
        {frame: 106, value: _M(.9731,-.1618,-.1643,0,.2188,.8727,.4366,0,.0727,-.4607,.8845,0,0,.7926,0,1)},
        {frame: 107, value: _M(.9504,-.1551,-.2696,0,.2551,.8844,.3909,0,.1778,-.4402,.8801,0,0,.7926,0,1)},
        {frame: 108, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 120, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 180, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 190, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 252, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.L", skeleton,skeleton.bones[12], _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1), _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1));
        bone.length = .2494;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 20, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 30, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 51, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 59, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 61, value: _M(.2216,-.0752,-.9722,0,.0375,.9969,-.0685,0,.9744,-.0213,.2237,0,0,.6211,0,1)},
        {frame: 62, value: _M(.2373,-.0644,-.9693,0,.0544,.9971,-.0529,0,.9699,-.0401,.2401,0,0,.6211,0,1)},
        {frame: 63, value: _M(.2553,-.0525,-.9654,0,.0732,.9967,-.0348,0,.9641,-.0618,.2583,0,0,.6211,0,1)},
        {frame: 64, value: _M(.2774,-.0384,-.96,0,.0958,.9953,-.0122,0,.956,-.0886,.2798,0,0,.6211,0,1)},
        {frame: 65, value: _M(.3017,-.0239,-.9531,0,.1196,.9927,.013,0,.9459,-.118,.3024,0,0,.6211,0,1)},
        {frame: 66, value: _M(.3285,-.0088,-.9444,0,.145,.9886,.0413,0,.9333,-.1505,.3261,0,0,.6211,0,1)},
        {frame: 67, value: _M(.3556,.0055,-.9346,0,.1695,.983,.0702,0,.9191,-.1834,.3486,0,0,.6211,0,1)},
        {frame: 68, value: _M(.3804,.0176,-.9246,0,.191,.9768,.0972,0,.9049,-.2136,.3682,0,0,.6211,0,1)},
        {frame: 69, value: _M(.4007,.0269,-.9158,0,.2079,.9708,.1195,0,.8923,-.2383,.3834,0,0,.6211,0,1)},
        {frame: 70, value: _M(.4117,.0318,-.9108,0,.2169,.9673,.1318,0,.8851,-.2518,.3913,0,0,.6211,0,1)},
        {frame: 71, value: _M(.4052,.0289,-.9138,0,.2116,.9694,.1245,0,.8894,-.2438,.3867,0,0,.6211,0,1)},
        {frame: 72, value: _M(.3889,.0216,-.921,0,.1982,.9744,.1065,0,.8997,-.224,.3747,0,0,.6211,0,1)},
        {frame: 73, value: _M(.3704,.0128,-.9288,0,.1824,.9794,.0862,0,.9108,-.2013,.3604,0,0,.6211,0,1)},
        {frame: 74, value: _M(.3477,.0014,-.9376,0,.1625,.9848,.0618,0,.9234,-.1738,.3422,0,0,.6211,0,1)},
        {frame: 75, value: _M(.3233,-.0117,-.9462,0,.1401,.9895,.0357,0,.9359,-.1441,.3215,0,0,.6211,0,1)},
        {frame: 76, value: _M(.2965,-.0269,-.9547,0,.1146,.9934,.0076,0,.9481,-.1117,.2976,0,0,.6211,0,1)},
        {frame: 77, value: _M(.2697,-.0432,-.962,0,.0881,.9959,-.02,0,.9589,-.0793,.2725,0,0,.6211,0,1)},
        {frame: 78, value: _M(.2455,-.0589,-.9676,0,.063,.997,-.0447,0,.9674,-.05,.2484,0,0,.6211,0,1)},
        {frame: 79, value: _M(.226,-.0721,-.9715,0,.0422,.997,-.0642,0,.9732,-.0265,.2283,0,0,.6211,0,1)},
        {frame: 80, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 83, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
        {frame: 90, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 108, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 120, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 180, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 190, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 252, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone1.L", skeleton,skeleton.bones[13], _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1), _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1));
        bone.length = .1634;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 20, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 30, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 51, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 59, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 61, value: _M(-.0156,.6839,-.7294,0,-.0923,.7254,.6821,0,.9956,.078,.0518,0,0,.2494,0,1)},
        {frame: 62, value: _M(-.0144,.6668,-.7451,0,-.0797,.742,.6656,0,.9967,.069,.0425,0,0,.2494,0,1)},
        {frame: 63, value: _M(-.0134,.6469,-.7625,0,-.0654,.7603,.6462,0,.9978,.0585,.0321,0,0,.2494,0,1)},
        {frame: 64, value: _M(-.0126,.6219,-.783,0,-.0478,.7818,.6218,0,.9988,.0453,.0199,0,0,.2494,0,1)},
        {frame: 65, value: _M(-.0125,.5941,-.8043,0,-.0287,.8038,.5942,0,.9995,.0305,.007,0,0,.2494,0,1)},
        {frame: 66, value: _M(-.013,.5626,-.8266,0,-.0076,.8266,.5627,0,.9999,.0137,-.0065,0,0,.2494,0,1)},
        {frame: 67, value: _M(-.0145,.5302,-.8477,0,.0134,.8478,.5301,0,.9998,-.0037,-.0194,0,0,.2494,0,1)},
        {frame: 68, value: _M(-.0165,.4999,-.8659,0,.0327,.8659,.4992,0,.9993,-.0201,-.0306,0,0,.2494,0,1)},
        {frame: 69, value: _M(-.0186,.4747,-.8799,0,.0483,.8795,.4735,0,.9987,-.0337,-.0393,0,0,.2494,0,1)},
        {frame: 70, value: _M(-.0199,.4608,-.8873,0,.0567,.8865,.4592,0,.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 71, value: _M(-.0191,.469,-.883,0,.0517,.8824,.4676,0,.9985,-.0367,-.0411,0,0,.2494,0,1)},
        {frame: 72, value: _M(-.0173,.4894,-.8719,0,.0392,.8717,.4885,0,.9991,-.0257,-.0343,0,0,.2494,0,1)},
        {frame: 73, value: _M(-.0156,.5122,-.8587,0,.0249,.8587,.5118,0,.9996,-.0134,-.0261,0,0,.2494,0,1)},
        {frame: 74, value: _M(-.014,.5397,-.8417,0,.0073,.8418,.5397,0,.9999,.0014,-.0157,0,0,.2494,0,1)},
        {frame: 75, value: _M(-.0129,.5689,-.8223,0,-.0118,.8223,.569,0,.9998,.017,-.0039,0,0,.2494,0,1)},
        {frame: 76, value: _M(-.0124,.6001,-.7998,0,-.0328,.7992,.6002,0,.9994,.0337,.0097,0,0,.2494,0,1)},
        {frame: 77, value: _M(-.0128,.6307,-.776,0,-.0539,.7745,.6303,0,.9985,.0499,.0241,0,0,.2494,0,1)},
        {frame: 78, value: _M(-.0139,.6578,-.7531,0,-.0732,.7505,.6568,0,.9972,.0642,.0377,0,0,.2494,0,1)},
        {frame: 79, value: _M(-.0153,.6792,-.7338,0,-.0888,.7301,.6776,0,.9959,.0755,.0492,0,0,.2494,0,1)},
        {frame: 80, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 83, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 90, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 108, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 120, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 180, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 190, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 252, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone2.L", skeleton,skeleton.bones[14], _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1), _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1));
        bone.length = .1464;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 20, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 30, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 51, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 59, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 61, value: _M(.3242,.9458,-.0197,0,-.9314,.3155,-.1818,0,-.1657,.0772,.9831,0,0,.1634,0,1)},
        {frame: 62, value: _M(.3008,.9537,.0073,0,-.9409,.298,-.1608,0,-.1556,.0415,.987,0,0,.1634,0,1)},
        {frame: 63, value: _M(.2742,.9609,.0387,0,-.951,.277,-.1376,0,-.1429,.001,.9897,0,0,.1634,0,1)},
        {frame: 64, value: _M(.2421,.9671,.0779,0,-.9621,.2496,-.11,0,-.1258,-.0484,.9909,0,0,.1634,0,1)},
        {frame: 65, value: _M(.2075,.9706,.1216,0,-.9726,.2181,-.0811,0,-.1052,-.1014,.9893,0,0,.1634,0,1)},
        {frame: 66, value: _M(.1703,.9705,.1704,0,-.9821,.1813,-.051,0,-.0804,-.1587,.9841,0,0,.1634,0,1)},
        {frame: 67, value: _M(.1343,.9663,.2198,0,-.9895,.1427,-.0228,0,-.0534,-.2144,.9753,0,0,.1634,0,1)},
        {frame: 68, value: _M(.1024,.9587,.2652,0,-.9944,.1059,.0012,0,-.0269,-.2638,.9642,0,0,.1634,0,1)},
        {frame: 69, value: _M(.0773,.9501,.3023,0,-.997,.0749,.0195,0,-.0041,-.3029,.953,0,0,.1634,0,1)},
        {frame: 70, value: _M(.064,.9444,.3225,0,-.9979,.0577,.0289,0,.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 71, value: _M(.0718,.9478,.3106,0,-.9974,.0679,.0234,0,.0011,-.3115,.9503,0,0,.1634,0,1)},
        {frame: 72, value: _M(.0917,.9554,.2808,0,-.9956,.0929,.0091,0,-.0174,-.2804,.9597,0,0,.1634,0,1)},
        {frame: 73, value: _M(.1152,.9622,.2468,0,-.9926,.1209,-.0083,0,-.0378,-.244,.969,0,0,.1634,0,1)},
        {frame: 74, value: _M(.1447,.9679,.2053,0,-.9876,.1542,-.0308,0,-.0615,-.1983,.9782,0,0,.1634,0,1)},
        {frame: 75, value: _M(.1776,.9709,.1607,0,-.9804,.1887,-.0568,0,-.0855,-.1475,.9854,0,0,.1634,0,1)},
        {frame: 76, value: _M(.2148,.9702,.1122,0,-.9705,.2249,-.0871,0,-.1098,-.0902,.9899,0,0,.1634,0,1)},
        {frame: 77, value: _M(.2531,.9653,.0643,0,-.9584,.2592,-.1194,0,-.1319,-.0314,.9908,0,0,.1634,0,1)},
        {frame: 78, value: _M(.2886,.9572,.0216,0,-.9456,.2885,-.1501,0,-.1499,.0229,.9884,0,0,.1634,0,1)},
        {frame: 79, value: _M(.3177,.9481,-.0122,0,-.9341,.3107,-.1759,0,-.163,.0673,.9843,0,0,.1634,0,1)},
        {frame: 80, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 83, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 90, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 108, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 120, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 180, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 190, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 252, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.L", skeleton,skeleton.bones[12], _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1), _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1));
        bone.length = .1072;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 20, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 30, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 51, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 59, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 61, value: _M(.3885,-.0118,-.9214,0,.5668,.7914,.2288,0,.7265,-.6111,.3142,0,.1466,.7459,.1156,1)},
        {frame: 62, value: _M(.4061,-.0006,-.9138,0,.5763,.7762,.2556,0,.7092,-.6304,.3156,0,.1461,.7438,.1176,1)},
        {frame: 63, value: _M(.4261,.0116,-.9046,0,.5862,.7581,.2858,0,.6891,-.6521,.3162,0,.1457,.7415,.1199,1)},
        {frame: 64, value: _M(.4507,.0257,-.8923,0,.5969,.7346,.3226,0,.6638,-.678,.3158,0,.1451,.7387,.1227,1)},
        {frame: 65, value: _M(.4774,.0398,-.8778,0,.6067,.7077,.3621,0,.6356,-.7054,.3137,0,.1445,.7356,.1257,1)},
        {frame: 66, value: _M(.5068,.0541,-.8604,0,.6153,.6764,.4049,0,.6038,-.7346,.3095,0,.1438,.7322,.129,1)},
        {frame: 67, value: _M(.536,.0667,-.8416,0,.6216,.6434,.4469,0,.5713,-.7626,.3034,0,.1431,.7288,.1323,1)},
        {frame: 68, value: _M(.5624,.077,-.8233,0,.6253,.6119,.4844,0,.541,-.7872,.296,0,.1425,.7257,.1354,1)},
        {frame: 69, value: _M(.5838,.0845,-.8075,0,.6268,.5853,.5144,0,.516,-.8064,.2888,0,.142,.7232,.1379,1)},
        {frame: 70, value: _M(.5954,.0881,-.7986,0,.6271,.5705,.5305,0,.5023,-.8166,.2844,0,.1417,.7218,.1392,1)},
        {frame: 71, value: _M(.5886,.086,-.8039,0,.6269,.5792,.521,0,.5104,-.8106,.287,0,.1418,.7226,.1384,1)},
        {frame: 72, value: _M(.5715,.0803,-.8167,0,.626,.6008,.4971,0,.5306,-.7954,.2931,0,.1423,.7246,.1364,1)},
        {frame: 73, value: _M(.5518,.073,-.8308,0,.624,.6248,.4693,0,.5533,-.7774,.2992,0,.1427,.727,.1342,1)},
        {frame: 74, value: _M(.5275,.0632,-.8472,0,.62,.6532,.4347,0,.5808,-.7546,.3054,0,.1433,.7298,.1314,1)},
        {frame: 75, value: _M(.501,.0513,-.8639,0,.6138,.6827,.3965,0,.6101,-.7289,.3105,0,.1439,.7329,.1284,1)},
        {frame: 76, value: _M(.4717,.0369,-.881,0,.6048,.7135,.3537,0,.6417,-.6996,.3143,0,.1446,.7363,.1251,1)},
        {frame: 77, value: _M(.4422,.021,-.8967,0,.5933,.7429,.31,0,.6726,-.6691,.3161,0,.1453,.7397,.1217,1)},
        {frame: 78, value: _M(.4152,.0052,-.9097,0,.5808,.7681,.2695,0,.7002,-.6403,.3159,0,.1459,.7428,.1187,1)},
        {frame: 79, value: _M(.3934,-.0086,-.9193,0,.5694,.7874,.2363,0,.7218,-.6164,.3146,0,.1464,.7453,.1162,1)},
        {frame: 80, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 83, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
        {frame: 90, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 108, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 120, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 180, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 190, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 252, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone4.L", skeleton,skeleton.bones[16], _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1), _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1));
        bone.length = .0895;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 20, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 30, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 51, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 59, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 61, value: _M(-.2527,-.5406,-.8024,0,.0081,.8281,-.5605,0,.9675,-.1482,-.2049,0,0,.1072,0,1)},
        {frame: 62, value: _M(-.2523,-.5393,-.8034,0,.0032,.8298,-.558,0,.9676,-.1433,-.2077,0,0,.1072,0,1)},
        {frame: 63, value: _M(-.2519,-.5378,-.8046,0,-.0025,.8317,-.5552,0,.9678,-.1379,-.2108,0,0,.1072,0,1)},
        {frame: 64, value: _M(-.2513,-.5359,-.806,0,-.0093,.834,-.5516,0,.9679,-.1311,-.2146,0,0,.1072,0,1)},
        {frame: 65, value: _M(-.2508,-.5339,-.8075,0,-.0168,.8364,-.5478,0,.9679,-.1238,-.2187,0,0,.1072,0,1)},
        {frame: 66, value: _M(-.2502,-.5317,-.8092,0,-.0249,.839,-.5436,0,.9679,-.1158,-.2231,0,0,.1072,0,1)},
        {frame: 67, value: _M(-.2496,-.5294,-.8108,0,-.0332,.8415,-.5392,0,.9678,-.1077,-.2276,0,0,.1072,0,1)},
        {frame: 68, value: _M(-.2491,-.5273,-.8124,0,-.0407,.8437,-.5352,0,.9676,-.1002,-.2316,0,0,.1072,0,1)},
        {frame: 69, value: _M(-.2486,-.5256,-.8136,0,-.0468,.8455,-.5319,0,.9675,-.0941,-.2348,0,0,.1072,0,1)},
        {frame: 70, value: _M(-.2484,-.5247,-.8142,0,-.0502,.8464,-.5301,0,.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 71, value: _M(-.2486,-.5252,-.8139,0,-.0482,.8459,-.5312,0,.9674,-.0928,-.2356,0,0,.1072,0,1)},
        {frame: 72, value: _M(-.2489,-.5266,-.8129,0,-.0433,.8445,-.5338,0,.9676,-.0977,-.233,0,0,.1072,0,1)},
        {frame: 73, value: _M(-.2493,-.5282,-.8117,0,-.0376,.8428,-.5368,0,.9677,-.1033,-.23,0,0,.1072,0,1)},
        {frame: 74, value: _M(-.2497,-.5301,-.8104,0,-.0308,.8408,-.5405,0,.9678,-.11,-.2263,0,0,.1072,0,1)},
        {frame: 75, value: _M(-.2503,-.5321,-.8088,0,-.0233,.8385,-.5444,0,.9679,-.1174,-.2223,0,0,.1072,0,1)},
        {frame: 76, value: _M(-.2509,-.5343,-.8072,0,-.0152,.8359,-.5486,0,.9679,-.1254,-.2178,0,0,.1072,0,1)},
        {frame: 77, value: _M(-.2515,-.5366,-.8055,0,-.0069,.8332,-.5529,0,.9678,-.1335,-.2133,0,0,.1072,0,1)},
        {frame: 78, value: _M(-.2521,-.5386,-.804,0,.0006,.8307,-.5567,0,.9677,-.1408,-.2091,0,0,.1072,0,1)},
        {frame: 79, value: _M(-.2526,-.5402,-.8027,0,.0067,.8286,-.5598,0,.9675,-.1468,-.2057,0,0,.1072,0,1)},
        {frame: 80, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 83, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 90, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 108, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 120, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 180, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 190, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 252, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shield.bone", skeleton,skeleton.bones[12], _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1), _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1));
        bone.length = .4472;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 20, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 30, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 51, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 59, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 83, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 90, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 108, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 120, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 180, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 190, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 252, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.R", skeleton,skeleton.bones[7], _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1), _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1));
        bone.length = .465;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 1, value: _M(.0696,.1292,-.9892,0,-.985,-.1481,-.0886,0,-.1579,.9805,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 2, value: _M(.1077,.1348,-.985,0,-.9814,-.144,-.127,0,-.159,.9804,.1168,0,-.0448,.6372,.1036,1)},
        {frame: 3, value: _M(.1762,.1445,-.9737,0,-.9711,-.1362,-.196,0,-.1609,.9801,.1163,0,-.0448,.6372,.1036,1)},
        {frame: 4, value: _M(.2627,.1558,-.9522,0,-.951,-.1252,-.2828,0,-.1632,.9798,.1153,0,-.0448,.6372,.1036,1)},
        {frame: 5, value: _M(.3905,.1707,-.9047,0,-.9054,-.1065,-.4109,0,-.1665,.9796,.1129,0,-.0448,.6372,.1036,1)},
        {frame: 9, value: _M(.2899,.1592,-.9437,0,-.9426,-.1232,-.3103,0,-.1657,.9795,.1143,0,-.0448,.6372,.1036,1)},
        {frame: 10, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 11, value: _M(-.2036,.0836,-.9755,0,-.9776,.0371,.2072,0,.0535,.9958,.0742,0,-.0448,.6372,.1036,1)},
        {frame: 12, value: _M(-.3398,.0573,-.9387,0,-.9358,.0793,.3436,0,.0942,.9952,.0267,0,-.0448,.6372,.1036,1)},
        {frame: 13, value: _M(-.4033,.0442,-.914,0,-.9088,.0973,.4057,0,.1069,.9943,.0009,0,-.0448,.6372,.1036,1)},
        {frame: 14, value: _M(-.4146,.0418,-.909,0,-.9036,.0993,.4167,0,.1077,.9942,-.0034,0,-.0448,.6372,.1036,1)},
        {frame: 15, value: _M(-.3871,.0476,-.9208,0,-.9172,.0826,.3899,0,.0946,.9954,.0117,0,-.0448,.6372,.1036,1)},
        {frame: 16, value: _M(-.3051,.0643,-.9502,0,-.9508,.035,.3077,0,.053,.9973,.0504,0,-.0448,.6372,.1036,1)},
        {frame: 17, value: _M(-.1831,.0873,-.9792,0,-.983,-.0309,.1811,0,-.0144,.9957,.0915,0,-.0448,.6372,.1036,1)},
        {frame: 18, value: _M(-.0582,.109,-.9923,0,-.9945,-.0935,.0481,0,-.0876,.9896,.1138,0,-.0448,.6372,.1036,1)},
        {frame: 19, value: _M(.0294,.123,-.992,0,-.9898,-.1352,-.046,0,-.1397,.9832,.1178,0,-.0448,.6372,.1036,1)},
        {frame: 20, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 30, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 51, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 59, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 61, value: _M(.2377,.1526,-.9593,0,-.9436,-.1982,-.2654,0,-.2307,.9682,.0969,0,-.0448,.6372,.1036,1)},
        {frame: 62, value: _M(.2533,.1546,-.955,0,-.918,-.2732,-.2877,0,-.3053,.9495,.0727,0,-.0448,.6372,.1036,1)},
        {frame: 63, value: _M(.2235,.1508,-.963,0,-.909,-.3242,-.2618,0,-.3517,.9339,.0646,0,-.0448,.6372,.1036,1)},
        {frame: 64, value: _M(.1466,.1403,-.9792,0,-.9097,-.3697,-.1892,0,-.3885,.9185,.0735,0,-.0448,.6372,.1036,1)},
        {frame: 65, value: _M(.0771,.1303,-.9885,0,-.9128,-.3895,-.1225,0,-.401,.9118,.0889,0,-.0448,.6372,.1036,1)},
        {frame: 66, value: _M(.0296,.1231,-.992,0,-.9312,-.3574,-.0722,0,-.3634,.9258,.104,0,-.0448,.6372,.1036,1)},
        {frame: 67, value: _M(-.0094,.1169,-.9931,0,-.9575,-.2874,-.0247,0,-.2884,.9506,.1147,0,-.0448,.6372,.1036,1)},
        {frame: 68, value: _M(-.0415,.1117,-.9929,0,-.9752,-.2208,.0159,0,-.2174,.9689,.1181,0,-.0448,.6372,.1036,1)},
        {frame: 69, value: _M(-.071,.1069,-.9917,0,-.9857,-.1599,.0533,0,-.1529,.9813,.1167,0,-.0448,.6372,.1036,1)},
        {frame: 70, value: _M(-.1055,.101,-.9893,0,-.9873,-.1293,.0921,0,-.1186,.9865,.1134,0,-.0448,.6372,.1036,1)},
        {frame: 71, value: _M(-.1444,.0943,-.985,0,-.9799,-.1522,.1291,0,-.1377,.9838,.1143,0,-.0448,.6372,.1036,1)},
        {frame: 72, value: _M(-.1645,.0907,-.9822,0,-.9727,-.1801,.1463,0,-.1637,.9794,.1179,0,-.0448,.6372,.1036,1)},
        {frame: 73, value: _M(-.129,.097,-.9869,0,-.9765,-.1856,.1094,0,-.1726,.9778,.1186,0,-.0448,.6372,.1036,1)},
        {frame: 74, value: _M(-.0384,.1122,-.9929,0,-.9837,-.1791,.0178,0,-.1758,.9774,.1173,0,-.0448,.6372,.1036,1)},
        {frame: 75, value: _M(.0412,.1248,-.9913,0,-.9832,-.1717,-.0625,0,-.178,.9772,.1157,0,-.0448,.6372,.1036,1)},
        {frame: 76, value: _M(.0922,.1325,-.9869,0,-.9792,-.1677,-.114,0,-.1806,.9769,.1143,0,-.0448,.6372,.1036,1)},
        {frame: 77, value: _M(.1319,.1383,-.9816,0,-.9745,-.1631,-.1539,0,-.1813,.9769,.1132,0,-.0448,.6372,.1036,1)},
        {frame: 78, value: _M(.1643,.1428,-.976,0,-.9698,-.1571,-.1863,0,-.18,.9772,.1127,0,-.0448,.6372,.1036,1)},
        {frame: 79, value: _M(.1923,.1466,-.9703,0,-.9649,-.1517,-.2142,0,-.1786,.9775,.1123,0,-.0448,.6372,.1036,1)},
        {frame: 80, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 83, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
        {frame: 90, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 108, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 120, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 180, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 190, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 252, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.R", skeleton,skeleton.bones[19], _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1), _M(.1719,.7324,.6588,0,.0799,.6562,-.7503,0,-.9819,.1816,.0543,0,.0268,.5347,-.0473,1));
        bone.length = .7926;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 1, value: _M(.1376,.7862,.6024,0,.1513,.5844,-.7972,0,-.9789,.2008,-.0385,0,.0268,.5347,-.0473,1)},
        {frame: 2, value: _M(.1997,.7523,.6279,0,.0564,.6309,-.7738,0,-.9782,.19,.0835,0,.0268,.5347,-.0473,1)},
        {frame: 3, value: _M(.323,.6873,.6506,0,-.1127,.7105,-.6946,0,-.9397,.151,.3069,0,.0268,.5347,-.0473,1)},
        {frame: 4, value: _M(.487,.6052,.6297,0,-.3025,.7933,-.5284,0,-.8194,.0669,.5694,0,.0268,.5347,-.0473,1)},
        {frame: 5, value: _M(.7032,.5059,.4997,0,-.4821,.8557,-.188,0,-.5227,-.1087,.8456,0,.0268,.5347,-.0473,1)},
        {frame: 9, value: _M(.714,.5952,.3688,0,-.4809,.7997,-.3594,0,-.5089,.0792,.8572,0,.0268,.5347,-.0473,1)},
        {frame: 10, value: _M(.7013,.7013,.1278,0,-.4927,.6064,-.6241,0,-.5151,.3747,.7709,0,.0268,.5347,-.0473,1)},
        {frame: 11, value: _M(.6012,.798,.0426,0,-.5038,.4199,-.7549,0,-.6203,.4324,.6545,0,.0268,.5347,-.0473,1)},
        {frame: 12, value: _M(.5337,.8385,.1099,0,-.444,.3884,-.8075,0,-.7198,.3822,.5795,0,.0268,.5347,-.0473,1)},
        {frame: 13, value: _M(.4495,.8732,.1883,0,-.3815,.3783,-.8434,0,-.8077,.3073,.5032,0,.0268,.5347,-.0473,1)},
        {frame: 14, value: _M(.379,.8876,.2616,0,-.3086,.3877,-.8686,0,-.8724,.2485,.4209,0,.0268,.5347,-.0473,1)},
        {frame: 15, value: _M(.32,.8861,.3352,0,-.2152,.4126,-.8851,0,-.9226,.2111,.3227,0,.0268,.5347,-.0473,1)},
        {frame: 16, value: _M(.2601,.8708,.4171,0,-.1014,.4542,-.8851,0,-.9602,.1879,.2064,0,.0268,.5347,-.0473,1)},
        {frame: 17, value: _M(.2033,.8456,.4936,0,.0132,.5017,-.865,0,-.979,.1824,.0908,0,.0268,.5347,-.0473,1)},
        {frame: 18, value: _M(.1578,.8194,.5511,0,.1047,.541,-.8345,0,-.9819,.1894,-.0004,0,.0268,.5347,-.0473,1)},
        {frame: 19, value: _M(.1305,.8011,.5841,0,.1592,.5646,-.8099,0,-.9786,.1986,-.0539,0,.0268,.5347,-.0473,1)},
        {frame: 20, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 30, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 31, value: _M(.1809,.7768,.6031,0,.0507,.6051,-.7945,0,-.9822,.1743,.0701,0,.0268,.5347,-.0473,1)},
        {frame: 32, value: _M(.2411,.7178,.6531,0,-.0706,.6842,-.7259,0,-.9679,.1289,.2156,0,.0268,.5347,-.0473,1)},
        {frame: 33, value: _M(.2361,.5427,.806,0,-.0379,.834,-.5505,0,-.971,.0994,.2175,0,.0268,.5347,-.0473,1)},
        {frame: 34, value: _M(.2226,.3496,.9101,0,-.0053,.9339,-.3574,0,-.9749,.0748,.2098,0,.0268,.5347,-.0473,1)},
        {frame: 35, value: _M(.2215,.3644,.9045,0,-.0143,.9287,-.3706,0,-.975,.0692,.2109,0,.0268,.5347,-.0473,1)},
        {frame: 36, value: _M(.2225,.4706,.8538,0,-.04,.8795,-.4743,0,-.9741,.0714,.2145,0,.0268,.5347,-.0473,1)},
        {frame: 37, value: _M(.2178,.5915,.7764,0,-.0695,.8028,-.5922,0,-.9735,.075,.2159,0,.0268,.5347,-.0473,1)},
        {frame: 38, value: _M(.1853,.6956,.6941,0,-.0254,.7095,-.7042,0,-.9824,.1128,.1492,0,.0268,.5347,-.0473,1)},
        {frame: 39, value: _M(.1385,.7683,.625,0,.111,.615,-.7806,0,-.9841,.1775,-.0001,0,.0268,.5347,-.0473,1)},
        {frame: 40, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 45, value: _M(.1872,.7969,.5744,0,.1385,.5575,-.8186,0,-.9725,.2328,-.006,0,.0268,.5347,-.0473,1)},
        {frame: 46, value: _M(.3219,.7934,.5167,0,.0523,.53,-.8464,0,-.9453,.2994,.1291,0,.0268,.5347,-.0473,1)},
        {frame: 47, value: _M(.3813,.7881,.4832,0,.0103,.5191,-.8547,0,-.9244,.3308,.1898,0,.0268,.5347,-.0473,1)},
        {frame: 48, value: _M(.3123,.7307,.6071,0,.2572,.5501,-.7945,0,-.9145,.4042,-.0161,0,.0268,.5347,-.0473,1)},
        {frame: 51, value: _M(.3123,.7307,.6071,0,.2572,.5501,-.7945,0,-.9145,.4042,-.0161,0,.0268,.5347,-.0473,1)},
        {frame: 59, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 61, value: _M(.1496,.7726,.6171,0,.13,.6033,-.7868,0,-.9802,.1979,-.0102,0,.0268,.5347,-.0473,1)},
        {frame: 62, value: _M(.1532,.7811,.6054,0,.1651,.5837,-.795,0,-.9743,.2217,-.0395,0,.0268,.5347,-.0473,1)},
        {frame: 63, value: _M(.1551,.7905,.5925,0,.143,.5755,-.8052,0,-.9775,.2097,-.0238,0,.0268,.5347,-.0473,1)},
        {frame: 64, value: _M(.1557,.8019,.5769,0,.0929,.5695,-.8167,0,-.9834,.1808,.0142,0,.0268,.5347,-.0473,1)},
        {frame: 65, value: _M(.1563,.8139,.5595,0,.0539,.5586,-.8277,0,-.9862,.1595,.0435,0,.0268,.5347,-.0473,1)},
        {frame: 66, value: _M(.158,.8268,.5399,0,.0379,.5413,-.84,0,-.9867,.1532,.0542,0,.0268,.5347,-.0473,1)},
        {frame: 67, value: _M(.16,.8392,.5197,0,.0295,.5221,-.8523,0,-.9867,.1517,.0588,0,.0268,.5347,-.0473,1)},
        {frame: 68, value: _M(.1614,.8503,.5009,0,.0183,.5049,-.863,0,-.9867,.1484,.066,0,.0268,.5347,-.0473,1)},
        {frame: 69, value: _M(.1623,.859,.4856,0,.0091,.4908,-.8712,0,-.9867,.1458,.0718,0,.0268,.5347,-.0473,1)},
        {frame: 70, value: _M(.1627,.8637,.4771,0,.0041,.4829,-.8757,0,-.9867,.1444,.0751,0,.0268,.5347,-.0473,1)},
        {frame: 71, value: _M(.1641,.8607,.4819,0,.0221,.4852,-.8742,0,-.9862,.1541,.0606,0,.0268,.5347,-.0473,1)},
        {frame: 72, value: _M(.1646,.8537,.4941,0,.0416,.4945,-.8682,0,-.9855,.1634,.0459,0,.0268,.5347,-.0473,1)},
        {frame: 73, value: _M(.1627,.8457,.5083,0,.0426,.5086,-.8599,0,-.9857,.1616,.0467,0,.0268,.5347,-.0473,1)},
        {frame: 74, value: _M(.1603,.8356,.5254,0,.0422,.526,-.8494,0,-.9862,.1584,.0491,0,.0268,.5347,-.0473,1)},
        {frame: 75, value: _M(.1579,.8243,.5437,0,.0441,.5441,-.8378,0,-.9865,.1563,.0496,0,.0268,.5347,-.0473,1)},
        {frame: 76, value: _M(.1557,.8114,.5633,0,.0541,.5624,-.8251,0,-.9863,.159,.0437,0,.0268,.5347,-.0473,1)},
        {frame: 77, value: _M(.1535,.798,.5828,0,.0683,.5798,-.8119,0,-.9858,.1645,.0345,0,.0268,.5347,-.0473,1)},
        {frame: 78, value: _M(.1511,.7853,.6004,0,.0794,.5957,-.7993,0,-.9853,.1684,.0276,0,.0268,.5347,-.0473,1)},
        {frame: 79, value: _M(.149,.7748,.6144,0,.0884,.6084,-.7887,0,-.9849,.1718,.0222,0,.0268,.5347,-.0473,1)},
        {frame: 80, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 83, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
        {frame: 90, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 91, value: _M(.1139,.7861,.6075,0,.1914,.5827,-.7899,0,-.9749,.2063,-.084,0,.0268,.5347,-.0473,1)},
        {frame: 92, value: _M(.09,.7604,.6432,0,.2329,.6118,-.7559,0,-.9683,.2178,-.122,0,.0268,.5347,-.0473,1)},
        {frame: 93, value: _M(.0565,.7256,.6858,0,.2841,.6468,-.7077,0,-.9571,.2348,-.1696,0,.0268,.5347,-.0473,1)},
        {frame: 94, value: _M(.0284,.6973,.7162,0,.322,.6719,-.667,0,-.9463,.2496,-.2055,0,.0268,.5347,-.0473,1)},
        {frame: 95, value: _M(.0181,.6871,.7264,0,.3351,.6803,-.6519,0,-.942,.2551,-.2179,0,.0268,.5347,-.0473,1)},
        {frame: 102, value: _M(.0234,.6923,.7212,0,.3285,.676,-.6596,0,-.9442,.2523,-.2116,0,.0268,.5347,-.0473,1)},
        {frame: 103, value: _M(.0387,.7077,.7055,0,.3085,.663,-.6821,0,-.9504,.2441,-.1926,0,.0268,.5347,-.0473,1)},
        {frame: 104, value: _M(.0613,.7306,.6801,0,.2771,.6421,-.7147,0,-.9589,.2323,-.1631,0,.0268,.5347,-.0473,1)},
        {frame: 105, value: _M(.0855,.7557,.6494,0,.2402,.6169,-.7495,0,-.967,.22,-.1288,0,.0268,.5347,-.0473,1)},
        {frame: 106, value: _M(.1055,.7769,.6207,0,.2066,.5934,-.7779,0,-.9727,.2103,-.0979,0,.0268,.5347,-.0473,1)},
        {frame: 107, value: _M(.1179,.7904,.6011,0,.184,.5774,-.7954,0,-.9758,.2044,-.0774,0,.0268,.5347,-.0473,1)},
        {frame: 108, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 120, value: _M(.1465,.8747,.4619,0,.1326,.4454,-.8855,0,-.9803,.191,-.0507,0,.0268,.5347,-.0473,1)},
        {frame: 121, value: _M(.1465,.8747,.462,0,.1327,.4454,-.8854,0,-.9803,.191,-.0509,0,.0268,.5347,-.0473,1)},
        {frame: 122, value: _M(.1463,.8747,.4621,0,.1331,.4455,-.8853,0,-.9802,.1911,-.0513,0,.0268,.5347,-.0473,1)},
        {frame: 123, value: _M(.1461,.8746,.4624,0,.1338,.4456,-.8852,0,-.9802,.1912,-.0519,0,.0268,.5347,-.0473,1)},
        {frame: 124, value: _M(.1458,.8744,.4627,0,.1348,.4458,-.8849,0,-.9801,.1914,-.0529,0,.0268,.5347,-.0473,1)},
        {frame: 125, value: _M(.1453,.8743,.4632,0,.136,.446,-.8846,0,-.98,.1916,-.0541,0,.0268,.5347,-.0473,1)},
        {frame: 126, value: _M(.1448,.8741,.4637,0,.1376,.4463,-.8842,0,-.9798,.1919,-.0556,0,.0268,.5347,-.0473,1)},
        {frame: 127, value: _M(.1442,.8738,.4644,0,.1394,.4467,-.8838,0,-.9797,.1922,-.0573,0,.0268,.5347,-.0473,1)},
        {frame: 128, value: _M(.1435,.8735,.4651,0,.1414,.4471,-.8832,0,-.9795,.1925,-.0594,0,.0268,.5347,-.0473,1)},
        {frame: 129, value: _M(.1427,.8732,.466,0,.1437,.4475,-.8827,0,-.9793,.1929,-.0616,0,.0268,.5347,-.0473,1)},
        {frame: 130, value: _M(.1419,.8729,.4669,0,.1463,.448,-.882,0,-.979,.1934,-.0641,0,.0268,.5347,-.0473,1)},
        {frame: 131, value: _M(.1409,.8725,.4679,0,.149,.4485,-.8813,0,-.9787,.1939,-.0668,0,.0268,.5347,-.0473,1)},
        {frame: 132, value: _M(.1399,.8721,.469,0,.152,.4491,-.8805,0,-.9784,.1945,-.0698,0,.0268,.5347,-.0473,1)},
        {frame: 133, value: _M(.1388,.8716,.4701,0,.1552,.4497,-.8796,0,-.9781,.195,-.0729,0,.0268,.5347,-.0473,1)},
        {frame: 134, value: _M(.1376,.8712,.4713,0,.1586,.4503,-.8787,0,-.9777,.1956,-.0762,0,.0268,.5347,-.0473,1)},
        {frame: 135, value: _M(.1364,.8707,.4726,0,.162,.451,-.8777,0,-.9773,.1963,-.0796,0,.0268,.5347,-.0473,1)},
        {frame: 136, value: _M(.1351,.8702,.4738,0,.1656,.4517,-.8767,0,-.9769,.1969,-.0831,0,.0268,.5347,-.0473,1)},
        {frame: 137, value: _M(.1338,.8697,.4751,0,.1693,.4523,-.8756,0,-.9764,.1976,-.0867,0,.0268,.5347,-.0473,1)},
        {frame: 138, value: _M(.1325,.8692,.4765,0,.173,.453,-.8745,0,-.976,.1983,-.0903,0,.0268,.5347,-.0473,1)},
        {frame: 139, value: _M(.1312,.8686,.4778,0,.1767,.4537,-.8734,0,-.9755,.199,-.094,0,.0268,.5347,-.0473,1)},
        {frame: 140, value: _M(.1298,.8681,.4791,0,.1804,.4544,-.8723,0,-.975,.1997,-.0976,0,.0268,.5347,-.0473,1)},
        {frame: 141, value: _M(.1285,.8676,.4804,0,.1841,.4551,-.8712,0,-.9745,.2004,-.1012,0,.0268,.5347,-.0473,1)},
        {frame: 142, value: _M(.1272,.8671,.4816,0,.1877,.4557,-.8701,0,-.974,.2011,-.1047,0,.0268,.5347,-.0473,1)},
        {frame: 143, value: _M(.126,.8666,.4828,0,.1911,.4564,-.869,0,-.9734,.2018,-.1081,0,.0268,.5347,-.0473,1)},
        {frame: 144, value: _M(.1248,.8661,.484,0,.1944,.457,-.868,0,-.9729,.2024,-.1114,0,.0268,.5347,-.0473,1)},
        {frame: 145, value: _M(.1236,.8657,.4851,0,.1976,.4575,-.867,0,-.9725,.203,-.1145,0,.0268,.5347,-.0473,1)},
        {frame: 146, value: _M(.1225,.8653,.4861,0,.2005,.4581,-.866,0,-.972,.2036,-.1174,0,.0268,.5347,-.0473,1)},
        {frame: 147, value: _M(.1215,.8649,.487,0,.2033,.4586,-.8651,0,-.9716,.2041,-.1201,0,.0268,.5347,-.0473,1)},
        {frame: 148, value: _M(.1206,.8645,.4879,0,.2058,.459,-.8643,0,-.9711,.2046,-.1225,0,.0268,.5347,-.0473,1)},
        {frame: 149, value: _M(.1197,.8642,.4887,0,.208,.4594,-.8635,0,-.9708,.205,-.1248,0,.0268,.5347,-.0473,1)},
        {frame: 150, value: _M(.119,.8639,.4893,0,.21,.4598,-.8628,0,-.9704,.2054,-.1268,0,.0268,.5347,-.0473,1)},
        {frame: 151, value: _M(.1183,.8637,.4899,0,.2118,.4601,-.8622,0,-.9701,.2058,-.1285,0,.0268,.5347,-.0473,1)},
        {frame: 152, value: _M(.1178,.8635,.4905,0,.2133,.4604,-.8617,0,-.9699,.2061,-.13,0,.0268,.5347,-.0473,1)},
        {frame: 153, value: _M(.1173,.8633,.4909,0,.2145,.4606,-.8613,0,-.9697,.2063,-.1312,0,.0268,.5347,-.0473,1)},
        {frame: 154, value: _M(.1169,.8632,.4912,0,.2155,.4608,-.861,0,-.9695,.2065,-.1321,0,.0268,.5347,-.0473,1)},
        {frame: 155, value: _M(.1167,.8631,.4914,0,.2161,.4609,-.8607,0,-.9694,.2066,-.1328,0,.0268,.5347,-.0473,1)},
        {frame: 156, value: _M(.1165,.863,.4916,0,.2165,.4609,-.8606,0,-.9693,.2067,-.1332,0,.0268,.5347,-.0473,1)},
        {frame: 157, value: _M(.1165,.863,.4916,0,.2167,.461,-.8606,0,-.9693,.2067,-.1333,0,.0268,.5347,-.0473,1)},
        {frame: 158, value: _M(.1166,.863,.4915,0,.2163,.4609,-.8607,0,-.9693,.2067,-.1329,0,.0268,.5347,-.0473,1)},
        {frame: 159, value: _M(.117,.8632,.4911,0,.2153,.4607,-.861,0,-.9695,.2065,-.1319,0,.0268,.5347,-.0473,1)},
        {frame: 160, value: _M(.1177,.8634,.4905,0,.2135,.4604,-.8616,0,-.9698,.2061,-.1302,0,.0268,.5347,-.0473,1)},
        {frame: 161, value: _M(.1186,.8638,.4897,0,.2111,.46,-.8625,0,-.9703,.2056,-.1278,0,.0268,.5347,-.0473,1)},
        {frame: 162, value: _M(.1198,.8642,.4886,0,.2079,.4594,-.8635,0,-.9708,.205,-.1247,0,.0268,.5347,-.0473,1)},
        {frame: 163, value: _M(.1212,.8648,.4873,0,.2042,.4587,-.8648,0,-.9714,.2043,-.121,0,.0268,.5347,-.0473,1)},
        {frame: 164, value: _M(.1228,.8654,.4858,0,.1998,.4579,-.8662,0,-.9721,.2034,-.1166,0,.0268,.5347,-.0473,1)},
        {frame: 165, value: _M(.1246,.8661,.4841,0,.1948,.4571,-.8678,0,-.9729,.2025,-.1118,0,.0268,.5347,-.0473,1)},
        {frame: 166, value: _M(.1266,.8668,.4822,0,.1895,.4561,-.8695,0,-.9737,.2014,-.1065,0,.0268,.5347,-.0473,1)},
        {frame: 167, value: _M(.1286,.8676,.4803,0,.1838,.455,-.8713,0,-.9745,.2003,-.1009,0,.0268,.5347,-.0473,1)},
        {frame: 168, value: _M(.1308,.8685,.4782,0,.1779,.4539,-.8731,0,-.9753,.1992,-.0951,0,.0268,.5347,-.0473,1)},
        {frame: 169, value: _M(.1329,.8693,.4761,0,.1719,.4528,-.8749,0,-.9761,.1981,-.0892,0,.0268,.5347,-.0473,1)},
        {frame: 170, value: _M(.135,.8701,.474,0,.1659,.4517,-.8766,0,-.9768,.197,-.0834,0,.0268,.5347,-.0473,1)},
        {frame: 171, value: _M(.137,.8709,.4719,0,.1602,.4506,-.8782,0,-.9775,.1959,-.0778,0,.0268,.5347,-.0473,1)},
        {frame: 172, value: _M(.1389,.8717,.47,0,.1548,.4496,-.8797,0,-.9781,.195,-.0725,0,.0268,.5347,-.0473,1)},
        {frame: 173, value: _M(.1406,.8724,.4682,0,.1498,.4487,-.881,0,-.9787,.194,-.0676,0,.0268,.5347,-.0473,1)},
        {frame: 174, value: _M(.1422,.873,.4666,0,.1454,.4478,-.8822,0,-.9791,.1932,-.0632,0,.0268,.5347,-.0473,1)},
        {frame: 175, value: _M(.1435,.8735,.4652,0,.1415,.4471,-.8832,0,-.9795,.1926,-.0595,0,.0268,.5347,-.0473,1)},
        {frame: 176, value: _M(.1446,.874,.464,0,.1383,.4465,-.884,0,-.9798,.192,-.0563,0,.0268,.5347,-.0473,1)},
        {frame: 177, value: _M(.1454,.8743,.4631,0,.1358,.446,-.8847,0,-.98,.1915,-.0539,0,.0268,.5347,-.0473,1)},
        {frame: 178, value: _M(.146,.8745,.4624,0,.134,.4457,-.8851,0,-.9802,.1912,-.0521,0,.0268,.5347,-.0473,1)},
        {frame: 179, value: _M(.1464,.8747,.462,0,.1329,.4454,-.8854,0,-.9803,.191,-.0511,0,.0268,.5347,-.0473,1)},
        {frame: 180, value: _M(.1465,.8747,.4619,0,.1326,.4454,-.8855,0,-.9803,.191,-.0507,0,.0268,.5347,-.0473,1)},
        {frame: 190, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)},
        {frame: 252, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.R", skeleton,skeleton.bones[20], _M(.9561,.1512,.2511,0,-.2527,.8593,.4448,0,-.1485,-.4887,.8597,0,0,.7926,0,1), _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1));
        bone.length = .6211;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 1, value: _M(.9553,.1437,.2583,0,-.2519,.8528,.4574,0,-.1546,-.5021,.8509,0,0,.7926,0,1)},
        {frame: 2, value: _M(.9537,.1269,.2727,0,-.259,.8075,.53,0,-.153,-.5761,.8029,0,0,.7926,0,1)},
        {frame: 3, value: _M(.954,.1055,.2806,0,-.2744,.6844,.6755,0,-.1208,-.7215,.6818,0,0,.7926,0,1)},
        {frame: 4, value: _M(.9583,.0925,.2702,0,-.2822,.4525,.8459,0,-.044,-.887,.4597,0,0,.7926,0,1)},
        {frame: 5, value: _M(.8202,.5632,-.1003,0,.0726,.0714,.9948,0,.5675,-.8232,.0176,0,0,.7926,0,1)},
        {frame: 6, value: _M(.592,.756,-.2792,0,.3951,.0297,.9181,0,.7024,-.6539,-.2812,0,0,.7926,0,1)},
        {frame: 7, value: _M(.5617,.7695,-.3039,0,.442,.0313,.8964,0,.6993,-.6379,-.3226,0,0,.7926,0,1)},
        {frame: 8, value: _M(.5574,.7713,-.3072,0,.4485,.0317,.8932,0,.6987,-.6356,-.3283,0,0,.7926,0,1)},
        {frame: 9, value: _M(.6351,.6905,-.3462,0,.2651,.2261,.9373,0,.7255,-.6871,-.0395,0,0,.7926,0,1)},
        {frame: 10, value: _M(.7279,.5944,-.3419,0,-.0206,.5173,.8555,0,.6854,-.6157,.3888,0,0,.7926,0,1)},
        {frame: 11, value: _M(.7505,.5943,-.289,0,-.2598,.6674,.6979,0,.6076,-.4487,.6553,0,0,.7926,0,1)},
        {frame: 12, value: _M(.9011,.4245,-.0886,0,-.3428,.8224,.454,0,.2656,-.3787,.8866,0,0,.7926,0,1)},
        {frame: 13, value: _M(.9275,.2329,.2926,0,-.313,.9116,.2664,0,-.2047,-.3386,.9184,0,0,.7926,0,1)},
        {frame: 14, value: _M(.8824,.1475,.4468,0,-.2873,.9209,.2635,0,-.3726,-.3608,.855,0,0,.7926,0,1)},
        {frame: 15, value: _M(.8933,.1276,.4309,0,-.3203,.8535,.4111,0,-.3153,-.5053,.8033,0,0,.7926,0,1)},
        {frame: 16, value: _M(.9139,.1143,.3896,0,-.3604,.6702,.6488,0,-.187,-.7333,.6537,0,0,.7926,0,1)},
        {frame: 17, value: _M(.9308,.128,.3425,0,-.3311,.6922,.6413,0,-.155,-.7103,.6866,0,0,.7926,0,1)},
        {frame: 18, value: _M(.9445,.1418,.2963,0,-.2921,.775,.5603,0,-.1502,-.6158,.7735,0,0,.7926,0,1)},
        {frame: 19, value: _M(.9532,.1482,.2634,0,-.2628,.8369,.4801,0,-.1493,-.5268,.8368,0,0,.7926,0,1)},
        {frame: 20, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 30, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 31, value: _M(.9599,.2799,-.0178,0,-.1872,.6865,.7026,0,.2089,-.6711,.7113,0,0,.7926,0,1)},
        {frame: 32, value: _M(.8558,.4616,-.2336,0,-.0174,.4769,.8788,0,.517,-.748,.4162,0,0,.7926,0,1)},
        {frame: 33, value: _M(.8682,.4453,-.2189,0,-.0348,.4947,.8684,0,.495,-.7463,.445,0,0,.7926,0,1)},
        {frame: 34, value: _M(.9022,.3966,-.1698,0,-.0848,.549,.8315,0,.423,-.7357,.5289,0,0,.7926,0,1)},
        {frame: 35, value: _M(.9407,.3278,-.0869,0,-.1486,.6286,.7634,0,.3048,-.7053,.6401,0,0,.7926,0,1)},
        {frame: 36, value: _M(.9646,.2636,.0082,0,-.199,.7066,.679,0,.1732,-.6566,.7341,0,0,.7926,0,1)},
        {frame: 37, value: _M(.9717,.2195,.0872,0,-.2267,.7632,.6051,0,.0663,-.6077,.7914,0,0,.7926,0,1)},
        {frame: 38, value: _M(.9695,.1846,.1612,0,-.2429,.8105,.5331,0,-.0322,-.5559,.8306,0,0,.7926,0,1)},
        {frame: 39, value: _M(.9607,.1578,.2284,0,-.2501,.849,.4655,0,-.1205,-.5043,.8551,0,0,.7926,0,1)},
        {frame: 40, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 45, value: _M(.9841,.1171,.1339,0,-.1719,.8196,.5465,0,-.0458,-.5608,.8267,0,0,.7926,0,1)},
        {frame: 46, value: _M(.9787,.0844,-.187,0,.0839,.6674,.74,0,.1873,-.7399,.6461,0,0,.7926,0,1)},
        {frame: 47, value: _M(.8925,.1149,-.4362,0,.3236,.5106,.7966,0,.3142,-.8521,.4185,0,0,.7926,0,1)},
        {frame: 48, value: _M(.837,.1422,-.5284,0,.4241,.4415,.7907,0,.3458,-.8859,.3092,0,0,.7926,0,1)},
        {frame: 51, value: _M(.837,.1422,-.5284,0,.4241,.4415,.7907,0,.3458,-.8859,.3092,0,0,.7926,0,1)},
        {frame: 59, value: _M(.9509,.1695,.2591,0,-.305,.3686,.8781,0,.0533,-.914,.4022,0,0,.7926,0,1)},
        {frame: 60, value: _M(.9513,.1748,.254,0,-.3025,.3692,.8788,0,.0598,-.9128,.404,0,0,.7926,0,1)},
        {frame: 61, value: _M(.9536,.1782,.2427,0,-.2978,.4411,.8466,0,.0438,-.8796,.4737,0,0,.7926,0,1)},
        {frame: 62, value: _M(.9567,.174,.2334,0,-.291,.548,.7843,0,.0085,-.8182,.5749,0,0,.7926,0,1)},
        {frame: 63, value: _M(.9595,.1686,.2259,0,-.2793,.6768,.6811,0,-.038,-.7166,.6965,0,0,.7926,0,1)},
        {frame: 64, value: _M(.9618,.1628,.2201,0,-.2633,.7698,.5814,0,-.0748,-.6171,.7833,0,0,.7926,0,1)},
        {frame: 65, value: _M(.9632,.1613,.2152,0,-.2554,.7992,.5441,0,-.0843,-.579,.811,0,0,.7926,0,1)},
        {frame: 66, value: _M(.9632,.165,.2122,0,-.262,.7527,.604,0,-.06,-.6374,.7682,0,0,.7926,0,1)},
        {frame: 67, value: _M(.9625,.1712,.2106,0,-.2704,.6692,.6921,0,-.0224,-.7231,.6904,0,0,.7926,0,1)},
        {frame: 68, value: _M(.9623,.1752,.208,0,-.2719,.6141,.7409,0,.0021,-.7696,.6386,0,0,.7926,0,1)},
        {frame: 69, value: _M(.9622,.1788,.2055,0,-.2715,.5661,.7783,0,.0228,-.8047,.5932,0,0,.7926,0,1)},
        {frame: 70, value: _M(.9619,.182,.204,0,-.2706,.5268,.8058,0,.0392,-.8303,.5559,0,0,.7926,0,1)},
        {frame: 71, value: _M(.9625,.1828,.2003,0,-.2687,.5427,.7958,0,.0368,-.8198,.5715,0,0,.7926,0,1)},
        {frame: 72, value: _M(.9638,.18,.1965,0,-.2661,.6138,.7432,0,.0131,-.7687,.6395,0,0,.7926,0,1)},
        {frame: 73, value: _M(.9647,.1745,.1971,0,-.2625,.6948,.6695,0,-.0201,-.6977,.7161,0,0,.7926,0,1)},
        {frame: 74, value: _M(.9649,.168,.2019,0,-.2556,.7775,.5745,0,-.0604,-.606,.7932,0,0,.7926,0,1)},
        {frame: 75, value: _M(.9643,.1638,.2082,0,-.2509,.817,.5192,0,-.0851,-.5529,.8289,0,0,.7926,0,1)},
        {frame: 76, value: _M(.9621,.167,.2157,0,-.2645,.7642,.5883,0,-.0666,-.623,.7794,0,0,.7926,0,1)},
        {frame: 77, value: _M(.9595,.173,.2224,0,-.2805,.6599,.6971,0,-.0261,-.7312,.6817,0,0,.7926,0,1)},
        {frame: 78, value: _M(.9574,.1731,.231,0,-.2886,.5906,.7536,0,-.006,-.7882,.6154,0,0,.7926,0,1)},
        {frame: 79, value: _M(.9538,.1617,.253,0,-.3003,.5051,.8092,0,.0031,-.8478,.5303,0,0,.7926,0,1)},
        {frame: 80, value: _M(.9513,.1748,.254,0,-.3025,.3692,.8788,0,.0598,-.9128,.404,0,0,.7926,0,1)},
        {frame: 83, value: _M(.9513,.1748,.254,0,-.3025,.3692,.8788,0,.0598,-.9128,.404,0,0,.7926,0,1)},
        {frame: 90, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 91, value: _M(.9504,.1905,.2459,0,-.2888,.8338,.4704,0,-.1155,-.5181,.8475,0,0,.7926,0,1)},
        {frame: 92, value: _M(.9223,.3061,.2359,0,-.3864,.7397,.551,0,-.0058,-.5993,.8005,0,0,.7926,0,1)},
        {frame: 93, value: _M(.8612,.4483,.2394,0,-.486,.5887,.6459,0,.1486,-.6726,.7249,0,0,.7926,0,1)},
        {frame: 94, value: _M(.7969,.5477,.2549,0,-.5392,.4544,.7091,0,.2725,-.7025,.6574,0,0,.7926,0,1)},
        {frame: 95, value: _M(.7712,.5798,.2629,0,-.5525,.4045,.7287,0,.3162,-.7072,.6323,0,0,.7926,0,1)},
        {frame: 96, value: _M(.847,.4776,.2335,0,-.5007,.5692,.6522,0,.1785,-.6693,.7212,0,0,.7926,0,1)},
        {frame: 97, value: _M(.9098,.3583,.2093,0,-.4148,.771,.4832,0,.0118,-.5265,.8501,0,0,.7926,0,1)},
        {frame: 98, value: _M(.9145,.3536,.1968,0,-.4035,.8336,.3773,0,-.0306,-.4244,.905,0,0,.7926,0,1)},
        {frame: 99, value: _M(.9183,.3452,.1939,0,-.395,.8314,.3907,0,-.0264,-.4354,.8999,0,0,.7926,0,1)},
        {frame: 100, value: _M(.9101,.3564,.2112,0,-.4131,.741,.5294,0,.0321,-.5691,.8217,0,0,.7926,0,1)},
        {frame: 101, value: _M(.9029,.3626,.231,0,-.4217,.6426,.6397,0,.0835,-.6749,.7331,0,0,.7926,0,1)},
        {frame: 102, value: _M(.9066,.351,.2344,0,-.4165,.6543,.6312,0,.0681,-.6698,.7394,0,0,.7926,0,1)},
        {frame: 103, value: _M(.9168,.3221,.2362,0,-.3981,.6883,.6064,0,.0327,-.65,.7592,0,0,.7926,0,1)},
        {frame: 104, value: _M(.9303,.279,.2382,0,-.3664,.7374,.5674,0,-.0174,-.6151,.7883,0,0,.7926,0,1)},
        {frame: 105, value: _M(.9427,.2301,.2417,0,-.3261,.7887,.5212,0,-.0707,-.5702,.8185,0,0,.7926,0,1)},
        {frame: 106, value: _M(.9509,.187,.2465,0,-.2873,.8294,.4791,0,-.1148,-.5264,.8425,0,0,.7926,0,1)},
        {frame: 107, value: _M(.955,.1589,.2505,0,-.2603,.8538,.4509,0,-.1422,-.4958,.8567,0,0,.7926,0,1)},
        {frame: 108, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 120, value: _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 180, value: _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1)},
        {frame: 190, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 191, value: _M(.9561,.1496,.252,0,-.2511,.8614,.4415,0,-.151,-.4854,.8612,0,0,.7926,0,1)},
        {frame: 192, value: _M(.9561,.1499,.2518,0,-.2514,.861,.4421,0,-.1505,-.486,.8609,0,0,.7926,0,1)},
        {frame: 193, value: _M(.9561,.1504,.2515,0,-.2519,.8603,.4432,0,-.1497,-.4871,.8604,0,0,.7926,0,1)},
        {frame: 194, value: _M(.9561,.1512,.2511,0,-.2527,.8593,.4448,0,-.1485,-.4887,.8597,0,0,.7926,0,1)},
        {frame: 195, value: _M(.9561,.1521,.2505,0,-.2536,.858,.4467,0,-.147,-.4907,.8589,0,0,.7926,0,1)},
        {frame: 196, value: _M(.9561,.1533,.2499,0,-.2547,.8564,.4491,0,-.1452,-.493,.8578,0,0,.7926,0,1)},
        {frame: 197, value: _M(.956,.1545,.2492,0,-.2559,.8547,.4516,0,-.1432,-.4955,.8567,0,0,.7926,0,1)},
        {frame: 198, value: _M(.956,.1558,.2485,0,-.2571,.853,.4542,0,-.1412,-.4982,.8555,0,0,.7926,0,1)},
        {frame: 199, value: _M(.956,.1571,.2478,0,-.2583,.8512,.4569,0,-.1391,-.5008,.8543,0,0,.7926,0,1)},
        {frame: 200, value: _M(.956,.1584,.2471,0,-.2595,.8495,.4594,0,-.1372,-.5032,.8532,0,0,.7926,0,1)},
        {frame: 201, value: _M(.9559,.1596,.2465,0,-.2606,.8479,.4617,0,-.1353,-.5056,.8521,0,0,.7926,0,1)},
        {frame: 202, value: _M(.9559,.1607,.2459,0,-.2617,.8463,.4641,0,-.1335,-.5079,.851,0,0,.7926,0,1)},
        {frame: 203, value: _M(.9558,.1621,.2452,0,-.2629,.8444,.4667,0,-.1314,-.5106,.8497,0,0,.7926,0,1)},
        {frame: 204, value: _M(.9558,.1636,.2444,0,-.2642,.8424,.4697,0,-.129,-.5135,.8483,0,0,.7926,0,1)},
        {frame: 205, value: _M(.9557,.1652,.2435,0,-.2657,.8401,.4729,0,-.1265,-.5166,.8468,0,0,.7926,0,1)},
        {frame: 206, value: _M(.9557,.1669,.2426,0,-.2672,.8377,.4763,0,-.1238,-.52,.8452,0,0,.7926,0,1)},
        {frame: 207, value: _M(.9556,.1687,.2417,0,-.2688,.8352,.4798,0,-.1209,-.5235,.8434,0,0,.7926,0,1)},
        {frame: 208, value: _M(.9555,.1706,.2408,0,-.2705,.8325,.4835,0,-.118,-.5271,.8416,0,0,.7926,0,1)},
        {frame: 209, value: _M(.9554,.1725,.2398,0,-.2721,.8298,.4872,0,-.115,-.5307,.8397,0,0,.7926,0,1)},
        {frame: 210, value: _M(.9553,.1744,.2389,0,-.2737,.8271,.4909,0,-.112,-.5343,.8378,0,0,.7926,0,1)},
        {frame: 211, value: _M(.9552,.1762,.238,0,-.2753,.8245,.4944,0,-.1091,-.5377,.836,0,0,.7926,0,1)},
        {frame: 212, value: _M(.955,.1779,.2371,0,-.2767,.822,.4977,0,-.1064,-.541,.8343,0,0,.7926,0,1)},
        {frame: 213, value: _M(.9549,.1795,.2364,0,-.278,.8197,.5008,0,-.1039,-.5439,.8327,0,0,.7926,0,1)},
        {frame: 214, value: _M(.9548,.1809,.2357,0,-.2792,.8177,.5035,0,-.1016,-.5465,.8312,0,0,.7926,0,1)},
        {frame: 215, value: _M(.9548,.1821,.2351,0,-.2802,.8159,.5058,0,-.0997,-.5488,.83,0,0,.7926,0,1)},
        {frame: 216, value: _M(.9547,.1831,.2346,0,-.281,.8144,.5077,0,-.0981,-.5506,.829,0,0,.7926,0,1)},
        {frame: 217, value: _M(.9546,.1839,.2343,0,-.2816,.8133,.5092,0,-.0969,-.552,.8282,0,0,.7926,0,1)},
        {frame: 218, value: _M(.9546,.1844,.234,0,-.282,.8125,.5102,0,-.0961,-.553,.8276,0,0,.7926,0,1)},
        {frame: 219, value: _M(.9546,.1847,.2339,0,-.2823,.812,.5108,0,-.0955,-.5536,.8273,0,0,.7926,0,1)},
        {frame: 220, value: _M(.9545,.1848,.2338,0,-.2824,.8119,.511,0,-.0954,-.5538,.8272,0,0,.7926,0,1)},
        {frame: 221, value: _M(.9546,.1848,.2339,0,-.2823,.812,.5108,0,-.0955,-.5536,.8273,0,0,.7926,0,1)},
        {frame: 222, value: _M(.9546,.1845,.234,0,-.2821,.8124,.5103,0,-.0959,-.5532,.8275,0,0,.7926,0,1)},
        {frame: 223, value: _M(.9546,.184,.2342,0,-.2817,.813,.5095,0,-.0966,-.5523,.828,0,0,.7926,0,1)},
        {frame: 224, value: _M(.9547,.1834,.2345,0,-.2812,.814,.5083,0,-.0976,-.5512,.8286,0,0,.7926,0,1)},
        {frame: 225, value: _M(.9547,.1826,.2349,0,-.2806,.8151,.5068,0,-.0989,-.5497,.8295,0,0,.7926,0,1)},
        {frame: 226, value: _M(.9548,.1817,.2353,0,-.2798,.8166,.5049,0,-.1004,-.5479,.8305,0,0,.7926,0,1)},
        {frame: 227, value: _M(.9549,.1805,.2359,0,-.2789,.8182,.5027,0,-.1022,-.5458,.8316,0,0,.7926,0,1)},
        {frame: 228, value: _M(.955,.1792,.2365,0,-.2778,.8201,.5002,0,-.1043,-.5434,.833,0,0,.7926,0,1)},
        {frame: 229, value: _M(.9551,.1778,.2372,0,-.2766,.8222,.4975,0,-.1066,-.5407,.8344,0,0,.7926,0,1)},
        {frame: 230, value: _M(.9552,.1762,.238,0,-.2753,.8245,.4944,0,-.1091,-.5377,.836,0,0,.7926,0,1)},
        {frame: 231, value: _M(.9553,.1745,.2388,0,-.2738,.8269,.4911,0,-.1118,-.5345,.8377,0,0,.7926,0,1)},
        {frame: 232, value: _M(.9554,.1727,.2397,0,-.2723,.8295,.4876,0,-.1146,-.5311,.8395,0,0,.7926,0,1)},
        {frame: 233, value: _M(.9555,.1708,.2406,0,-.2707,.8321,.484,0,-.1176,-.5276,.8413,0,0,.7926,0,1)},
        {frame: 234, value: _M(.9556,.1689,.2416,0,-.269,.8348,.4803,0,-.1206,-.5239,.8432,0,0,.7926,0,1)},
        {frame: 235, value: _M(.9556,.167,.2426,0,-.2673,.8376,.4765,0,-.1236,-.5202,.8451,0,0,.7926,0,1)},
        {frame: 236, value: _M(.9557,.1651,.2436,0,-.2656,.8403,.4727,0,-.1267,-.5164,.8469,0,0,.7926,0,1)},
        {frame: 237, value: _M(.9558,.1632,.2446,0,-.2639,.8429,.4689,0,-.1297,-.5127,.8487,0,0,.7926,0,1)},
        {frame: 238, value: _M(.9559,.1613,.2456,0,-.2622,.8455,.4652,0,-.1326,-.5091,.8505,0,0,.7926,0,1)},
        {frame: 239, value: _M(.9559,.1596,.2465,0,-.2606,.8479,.4617,0,-.1353,-.5056,.8521,0,0,.7926,0,1)},
        {frame: 240, value: _M(.956,.1579,.2474,0,-.259,.8502,.4583,0,-.138,-.5022,.8537,0,0,.7926,0,1)},
        {frame: 241, value: _M(.956,.1563,.2482,0,-.2576,.8523,.4552,0,-.1404,-.4991,.8551,0,0,.7926,0,1)},
        {frame: 242, value: _M(.956,.1549,.249,0,-.2562,.8542,.4524,0,-.1426,-.4963,.8564,0,0,.7926,0,1)},
        {frame: 243, value: _M(.9561,.1537,.2497,0,-.255,.8559,.4498,0,-.1446,-.4937,.8575,0,0,.7926,0,1)},
        {frame: 244, value: _M(.9561,.1525,.2503,0,-.254,.8574,.4476,0,-.1463,-.4915,.8585,0,0,.7926,0,1)},
        {frame: 245, value: _M(.9561,.1516,.2508,0,-.2531,.8587,.4456,0,-.1478,-.4896,.8594,0,0,.7926,0,1)},
        {frame: 246, value: _M(.9561,.1508,.2513,0,-.2523,.8597,.4441,0,-.149,-.488,.86,0,0,.7926,0,1)},
        {frame: 247, value: _M(.9561,.1502,.2516,0,-.2517,.8605,.4428,0,-.15,-.4867,.8606,0,0,.7926,0,1)},
        {frame: 248, value: _M(.9561,.1498,.2518,0,-.2513,.8611,.442,0,-.1507,-.4859,.861,0,0,.7926,0,1)},
        {frame: 249, value: _M(.9561,.1495,.252,0,-.2511,.8614,.4414,0,-.1511,-.4853,.8612,0,0,.7926,0,1)},
        {frame: 250, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)},
        {frame: 252, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.R", skeleton,skeleton.bones[21], _M(.331,.1397,.9332,0,-.1562,.9834,-.0919,0,-.9306,-.1153,.3473,0,0,.6211,0,1), _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1));
        bone.length = .2494;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 1, value: _M(.3322,.0853,.9393,0,-.019,.9963,-.0838,0,-.943,.01,.3326,0,0,.6211,0,1)},
        {frame: 2, value: _M(.3261,-.0114,.9453,0,.1391,.9896,-.036,0,-.9351,.1432,.3243,0,0,.6211,0,1)},
        {frame: 3, value: _M(.3564,-.0889,.9301,0,.022,.996,.0867,0,-.9341,-.0105,.3569,0,0,.6211,0,1)},
        {frame: 4, value: _M(.4062,-.1043,.9078,0,-.1077,.9811,.1609,0,-.9074,-.1632,.3872,0,0,.6211,0,1)},
        {frame: 5, value: _M(.4457,.1406,.8841,0,-.1674,.9833,-.0719,0,-.8794,-.1159,.4618,0,0,.6211,0,1)},
        {frame: 6, value: _M(.6086,-.2165,.7634,0,.0019,.9625,.2714,0,-.7935,-.1637,.5862,0,0,.6211,0,1)},
        {frame: 7, value: _M(.6037,-.3423,.7199,0,.0329,.913,.4065,0,-.7965,-.2218,.5625,0,0,.6211,0,1)},
        {frame: 8, value: _M(.5552,-.3707,.7446,0,.0244,.9021,.4309,0,-.8314,-.2211,.5098,0,0,.6211,0,1)},
        {frame: 9, value: _M(.3419,.2483,.9063,0,-.2174,.9592,-.1807,0,-.9142,-.1352,.382,0,0,.6211,0,1)},
        {frame: 10, value: _M(-.0726,.9017,.4262,0,-.2294,.4008,-.887,0,-.9706,-.1622,.1778,0,0,.6211,0,1)},
        {frame: 11, value: _M(-.1121,.9654,.2355,0,.0181,.239,-.9709,0,-.9935,-.1046,-.0442,0,0,.6211,0,1)},
        {frame: 12, value: _M(-.1241,.8842,.4504,0,-.0128,.4524,-.8917,0,-.9922,-.1164,-.0448,0,0,.6211,0,1)},
        {frame: 13, value: _M(-.065,.7069,.7043,0,-.0783,.7,-.7098,0,-.9948,-.1013,.0099,0,0,.6211,0,1)},
        {frame: 14, value: _M(-.0365,.6084,.7928,0,-.1057,.7865,-.6084,0,-.9937,-.106,.0356,0,0,.6211,0,1)},
        {frame: 15, value: _M(-.0224,.5556,.8311,0,-.1221,.8236,-.5539,0,-.9923,-.1139,.0494,0,0,.6211,0,1)},
        {frame: 16, value: _M(.0169,.4904,.8713,0,-.1363,.8645,-.4839,0,-.9905,-.1106,.0814,0,0,.6211,0,1)},
        {frame: 17, value: _M(.0884,.4015,.9116,0,-.1499,.9101,-.3863,0,-.9847,-.1025,.1406,0,0,.6211,0,1)},
        {frame: 18, value: _M(.1908,.2862,.939,0,-.1619,.9526,-.2574,0,-.9682,-.1029,.2281,0,0,.6211,0,1)},
        {frame: 19, value: _M(.2923,.1752,.9401,0,-.1631,.9778,-.1315,0,-.9423,-.1149,.3144,0,0,.6211,0,1)},
        {frame: 20, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 30, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 31, value: _M(.3266,.0067,.9451,0,-.2084,.9759,.0651,0,-.9219,-.2183,.3201,0,0,.6211,0,1)},
        {frame: 32, value: _M(.3242,-.1162,.9388,0,-.2571,.9443,.2056,0,-.9104,-.308,.2763,0,0,.6211,0,1)},
        {frame: 33, value: _M(.3242,-.1057,.9401,0,-.253,.9479,.1939,0,-.9115,-.3007,.2805,0,0,.6211,0,1)},
        {frame: 34, value: _M(.3244,-.0742,.943,0,-.2405,.9577,.1581,0,-.9148,-.2781,.2928,0,0,.6211,0,1)},
        {frame: 35, value: _M(.3253,-.0279,.9452,0,-.2222,.9693,.1051,0,-.9191,-.2442,.3091,0,0,.6211,0,1)},
        {frame: 36, value: _M(.3272,.0191,.9448,0,-.2035,.9778,.0507,0,-.9228,-.2089,.3238,0,0,.6211,0,1)},
        {frame: 37, value: _M(.3293,.0555,.9426,0,-.189,.9819,.0082,0,-.9251,-.1808,.3338,0,0,.6211,0,1)},
        {frame: 38, value: _M(.3316,.0886,.9392,0,-.1758,.984,-.0307,0,-.9269,-.1549,.3419,0,0,.6211,0,1)},
        {frame: 39, value: _M(.3341,.1183,.9351,0,-.1638,.9843,-.066,0,-.9282,-.1311,.3483,0,0,.6211,0,1)},
        {frame: 40, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 45, value: _M(.3565,.118,.9268,0,-.0992,.9912,-.088,0,-.929,-.0605,.3651,0,0,.6211,0,1)},
        {frame: 46, value: _M(.4062,.0852,.9098,0,.0517,.9919,-.116,0,-.9123,.0942,.3985,0,0,.6211,0,1)},
        {frame: 47, value: _M(.4425,.0524,.8953,0,.174,.9743,-.143,0,-.8797,.219,.422,0,0,.6211,0,1)},
        {frame: 48, value: _M(.4566,.0367,.8889,0,.2256,.9617,-.1556,0,-.8606,.2715,.4308,0,0,.6211,0,1)},
        {frame: 51, value: _M(.4566,.0367,.8889,0,.2256,.9617,-.1556,0,-.8606,.2715,.4308,0,0,.6211,0,1)},
        {frame: 59, value: _M(.126,.1673,.9778,0,-.1478,.9778,-.1483,0,-.981,-.1258,.1479,0,0,.6211,0,1)},
        {frame: 61, value: _M(.1249,.168,.9778,0,-.1465,.9779,-.1493,0,-.9813,-.1246,.1468,0,0,.6211,0,1)},
        {frame: 62, value: _M(.1222,.1699,.9779,0,-.1433,.9779,-.152,0,-.9821,-.1216,.1439,0,0,.6211,0,1)},
        {frame: 63, value: _M(.1192,.172,.9779,0,-.1397,.978,-.155,0,-.983,-.1181,.1406,0,0,.6211,0,1)},
        {frame: 64, value: _M(.1154,.1746,.9778,0,-.1352,.978,-.1587,0,-.9841,-.1139,.1365,0,0,.6211,0,1)},
        {frame: 65, value: _M(.1114,.1775,.9778,0,-.1304,.978,-.1626,0,-.9852,-.1094,.1321,0,0,.6211,0,1)},
        {frame: 66, value: _M(.1071,.1805,.9777,0,-.1251,.978,-.1669,0,-.9864,-.1044,.1273,0,0,.6211,0,1)},
        {frame: 67, value: _M(.1027,.1837,.9776,0,-.1197,.9779,-.1712,0,-.9875,-.0994,.1224,0,0,.6211,0,1)},
        {frame: 68, value: _M(.0986,.1867,.9775,0,-.1147,.9778,-.1752,0,-.9885,-.0949,.1179,0,0,.6211,0,1)},
        {frame: 69, value: _M(.0954,.1891,.9773,0,-.1107,.9777,-.1784,0,-.9893,-.0912,.1142,0,0,.6211,0,1)},
        {frame: 70, value: _M(.0936,.1904,.9772,0,-.1085,.9776,-.1801,0,-.9897,-.0892,.1122,0,0,.6211,0,1)},
        {frame: 71, value: _M(.0947,.1897,.9773,0,-.1098,.9777,-.1791,0,-.9894,-.0903,.1134,0,0,.6211,0,1)},
        {frame: 72, value: _M(.0974,.1877,.9774,0,-.1131,.9778,-.1765,0,-.9888,-.0933,.1164,0,0,.6211,0,1)},
        {frame: 73, value: _M(.1004,.1855,.9775,0,-.1168,.9779,-.1736,0,-.9881,-.0967,.1198,0,0,.6211,0,1)},
        {frame: 74, value: _M(.1041,.1828,.9776,0,-.1213,.978,-.17,0,-.9871,-.1009,.124,0,0,.6211,0,1)},
        {frame: 75, value: _M(.1081,.18,.9777,0,-.1261,.978,-.1661,0,-.9861,-.1054,.1284,0,0,.6211,0,1)},
        {frame: 76, value: _M(.1125,.1768,.9778,0,-.1315,.978,-.1618,0,-.9849,-.1103,.1333,0,0,.6211,0,1)},
        {frame: 77, value: _M(.117,.1737,.9778,0,-.1368,.978,-.1574,0,-.9837,-.1154,.1381,0,0,.6211,0,1)},
        {frame: 78, value: _M(.121,.1709,.9778,0,-.1417,.978,-.1534,0,-.9825,-.12,.1425,0,0,.6211,0,1)},
        {frame: 79, value: _M(.1243,.1686,.9778,0,-.1456,.9779,-.1501,0,-.9815,-.1237,.1461,0,0,.6211,0,1)},
        {frame: 80, value: _M(.1261,.1674,.9778,0,-.1477,.9778,-.1483,0,-.981,-.1258,.148,0,0,.6211,0,1)},
        {frame: 81, value: _M(.126,.1673,.9778,0,-.1478,.9778,-.1483,0,-.981,-.1258,.148,0,0,.6211,0,1)},
        {frame: 83, value: _M(.126,.1673,.9778,0,-.1478,.9778,-.1483,0,-.981,-.1258,.1479,0,0,.6211,0,1)},
        {frame: 90, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 108, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 120, value: _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 180, value: _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 190, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 191, value: _M(.3348,.1294,.9333,0,-.1594,.984,-.0793,0,-.9287,-.1223,.3501,0,0,.6211,0,1)},
        {frame: 192, value: _M(.3341,.1315,.9333,0,-.1588,.9839,-.0818,0,-.9291,-.1209,.3496,0,0,.6211,0,1)},
        {frame: 193, value: _M(.3328,.1349,.9333,0,-.1577,.9837,-.086,0,-.9297,-.1186,.3486,0,0,.6211,0,1)},
        {frame: 194, value: _M(.331,.1397,.9332,0,-.1562,.9834,-.0919,0,-.9306,-.1153,.3473,0,0,.6211,0,1)},
        {frame: 195, value: _M(.3287,.1457,.9331,0,-.1542,.983,-.0992,0,-.9317,-.1113,.3456,0,0,.6211,0,1)},
        {frame: 196, value: _M(.3262,.1525,.9329,0,-.152,.9825,-.1075,0,-.933,-.1068,.3437,0,0,.6211,0,1)},
        {frame: 197, value: _M(.3235,.1597,.9326,0,-.1497,.9819,-.1162,0,-.9343,-.102,.3416,0,0,.6211,0,1)},
        {frame: 198, value: _M(.3209,.1669,.9323,0,-.1473,.9812,-.1249,0,-.9356,-.0973,.3395,0,0,.6211,0,1)},
        {frame: 199, value: _M(.3185,.1736,.9319,0,-.1451,.9804,-.133,0,-.9368,-.0929,.3374,0,0,.6211,0,1)},
        {frame: 200, value: _M(.3163,.1796,.9315,0,-.1431,.9797,-.1403,0,-.9378,-.0889,.3356,0,0,.6211,0,1)},
        {frame: 201, value: _M(.3144,.1848,.9311,0,-.1413,.9791,-.1466,0,-.9387,-.0855,.3339,0,0,.6211,0,1)},
        {frame: 202, value: _M(.3125,.19,.9307,0,-.1395,.9784,-.1528,0,-.9396,-.0821,.3323,0,0,.6211,0,1)},
        {frame: 203, value: _M(.3104,.1958,.9302,0,-.1375,.9775,-.1599,0,-.9406,-.0783,.3304,0,0,.6211,0,1)},
        {frame: 204, value: _M(.3082,.202,.9296,0,-.1353,.9766,-.1674,0,-.9416,-.0742,.3283,0,0,.6211,0,1)},
        {frame: 205, value: _M(.306,.2083,.929,0,-.1331,.9755,-.1749,0,-.9427,-.0702,.3262,0,0,.6211,0,1)},
        {frame: 206, value: _M(.304,.2141,.9283,0,-.1311,.9745,-.1819,0,-.9436,-.0664,.3243,0,0,.6211,0,1)},
        {frame: 207, value: _M(.3023,.2189,.9277,0,-.1294,.9737,-.1876,0,-.9444,-.0633,.3226,0,0,.6211,0,1)},
        {frame: 208, value: _M(.301,.2224,.9273,0,-.1281,.973,-.1918,0,-.945,-.061,.3214,0,0,.6211,0,1)},
        {frame: 209, value: _M(.3003,.2245,.927,0,-.1274,.9726,-.1943,0,-.9453,-.0597,.3207,0,0,.6211,0,1)},
        {frame: 210, value: _M(.3001,.2252,.927,0,-.1271,.9725,-.1951,0,-.9454,-.0593,.3205,0,0,.6211,0,1)},
        {frame: 211, value: _M(.3003,.2245,.927,0,-.1273,.9726,-.1943,0,-.9453,-.0597,.3207,0,0,.6211,0,1)},
        {frame: 212, value: _M(.301,.2226,.9273,0,-.128,.973,-.192,0,-.945,-.0609,.3214,0,0,.6211,0,1)},
        {frame: 213, value: _M(.3021,.2193,.9277,0,-.1292,.9736,-.1881,0,-.9445,-.0631,.3225,0,0,.6211,0,1)},
        {frame: 214, value: _M(.3037,.2148,.9282,0,-.1309,.9744,-.1826,0,-.9437,-.066,.3241,0,0,.6211,0,1)},
        {frame: 215, value: _M(.3057,.2091,.9289,0,-.1328,.9754,-.1759,0,-.9428,-.0696,.326,0,0,.6211,0,1)},
        {frame: 216, value: _M(.3079,.2029,.9295,0,-.135,.9764,-.1684,0,-.9418,-.0737,.3281,0,0,.6211,0,1)},
        {frame: 217, value: _M(.3102,.1964,.9302,0,-.1373,.9774,-.1606,0,-.9407,-.0779,.3302,0,0,.6211,0,1)},
        {frame: 218, value: _M(.3125,.1902,.9307,0,-.1395,.9783,-.1531,0,-.9396,-.082,.3322,0,0,.6211,0,1)},
        {frame: 219, value: _M(.3145,.1844,.9312,0,-.1414,.9791,-.1462,0,-.9387,-.0857,.334,0,0,.6211,0,1)},
        {frame: 220, value: _M(.3163,.1794,.9315,0,-.1431,.9797,-.1401,0,-.9378,-.089,.3356,0,0,.6211,0,1)},
        {frame: 221, value: _M(.3182,.1743,.9319,0,-.1448,.9803,-.1339,0,-.9369,-.0924,.3372,0,0,.6211,0,1)},
        {frame: 222, value: _M(.3203,.1685,.9322,0,-.1468,.981,-.1269,0,-.9359,-.0962,.3389,0,0,.6211,0,1)},
        {frame: 223, value: _M(.3226,.1622,.9325,0,-.1489,.9816,-.1192,0,-.9347,-.1004,.3409,0,0,.6211,0,1)},
        {frame: 224, value: _M(.3251,.1556,.9328,0,-.151,.9823,-.1112,0,-.9336,-.1048,.3428,0,0,.6211,0,1)},
        {frame: 225, value: _M(.3275,.1491,.933,0,-.1531,.9828,-.1033,0,-.9324,-.1091,.3447,0,0,.6211,0,1)},
        {frame: 226, value: _M(.3296,.1433,.9332,0,-.155,.9832,-.0962,0,-.9313,-.113,.3463,0,0,.6211,0,1)},
        {frame: 227, value: _M(.3315,.1384,.9333,0,-.1566,.9835,-.0903,0,-.9304,-.1162,.3477,0,0,.6211,0,1)},
        {frame: 228, value: _M(.3328,.1348,.9333,0,-.1577,.9837,-.0858,0,-.9297,-.1186,.3487,0,0,.6211,0,1)},
        {frame: 229, value: _M(.3337,.1325,.9333,0,-.1584,.9839,-.0831,0,-.9293,-.1202,.3493,0,0,.6211,0,1)},
        {frame: 230, value: _M(.334,.1316,.9333,0,-.1588,.9839,-.0819,0,-.9291,-.1208,.3496,0,0,.6211,0,1)},
        {frame: 231, value: _M(.3342,.1312,.9333,0,-.1589,.9839,-.0814,0,-.929,-.1211,.3497,0,0,.6211,0,1)},
        {frame: 232, value: _M(.3343,.1309,.9333,0,-.159,.984,-.081,0,-.929,-.1213,.3497,0,0,.6211,0,1)},
        {frame: 233, value: _M(.3344,.1306,.9333,0,-.1591,.984,-.0807,0,-.9289,-.1215,.3498,0,0,.6211,0,1)},
        {frame: 234, value: _M(.3345,.1303,.9333,0,-.1592,.984,-.0803,0,-.9289,-.1217,.3499,0,0,.6211,0,1)},
        {frame: 235, value: _M(.3346,.13,.9333,0,-.1592,.984,-.08,0,-.9288,-.1219,.35,0,0,.6211,0,1)},
        {frame: 236, value: _M(.3347,.1298,.9333,0,-.1593,.984,-.0797,0,-.9288,-.122,.35,0,0,.6211,0,1)},
        {frame: 237, value: _M(.3348,.1296,.9333,0,-.1594,.984,-.0794,0,-.9287,-.1222,.3501,0,0,.6211,0,1)},
        {frame: 238, value: _M(.3349,.1294,.9333,0,-.1594,.984,-.0792,0,-.9287,-.1223,.3501,0,0,.6211,0,1)},
        {frame: 239, value: _M(.3349,.1292,.9333,0,-.1595,.984,-.079,0,-.9287,-.1224,.3502,0,0,.6211,0,1)},
        {frame: 240, value: _M(.335,.1291,.9333,0,-.1595,.984,-.0789,0,-.9286,-.1225,.3502,0,0,.6211,0,1)},
        {frame: 241, value: _M(.335,.129,.9333,0,-.1595,.984,-.0788,0,-.9286,-.1225,.3502,0,0,.6211,0,1)},
        {frame: 242, value: _M(.335,.1289,.9333,0,-.1596,.984,-.0787,0,-.9286,-.1226,.3503,0,0,.6211,0,1)},
        {frame: 243, value: _M(.3351,.1289,.9333,0,-.1596,.984,-.0786,0,-.9286,-.1226,.3503,0,0,.6211,0,1)},
        {frame: 244, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)},
        {frame: 252, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone1.R", skeleton,skeleton.bones[22], _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1), _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1));
        bone.length = .1634;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 20, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 30, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 51, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 59, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 61, value: _M(-.0191,-.469,.883,0,-.0517,.8824,.4676,0,-.9985,-.0367,-.0411,0,0,.2494,0,1)},
        {frame: 62, value: _M(-.0173,-.4894,.8719,0,-.0392,.8717,.4885,0,-.9991,-.0257,-.0343,0,0,.2494,0,1)},
        {frame: 63, value: _M(-.0156,-.5122,.8587,0,-.0249,.8588,.5118,0,-.9996,-.0134,-.0261,0,0,.2494,0,1)},
        {frame: 64, value: _M(-.014,-.5397,.8418,0,-.0074,.8419,.5396,0,-.9999,.0013,-.0157,0,0,.2494,0,1)},
        {frame: 65, value: _M(-.0129,-.5689,.8223,0,.0118,.8223,.569,0,-.9998,.017,-.0039,0,0,.2494,0,1)},
        {frame: 66, value: _M(-.0124,-.6002,.7998,0,.0328,.7992,.6002,0,-.9994,.0337,.0097,0,0,.2494,0,1)},
        {frame: 67, value: _M(-.0128,-.6307,.776,0,.0539,.7745,.6303,0,-.9985,.0499,.0241,0,0,.2494,0,1)},
        {frame: 68, value: _M(-.0139,-.6578,.7531,0,.0732,.7505,.6568,0,-.9972,.0642,.0377,0,0,.2494,0,1)},
        {frame: 69, value: _M(-.0153,-.6792,.7338,0,.0888,.7301,.6776,0,-.9959,.0755,.0492,0,0,.2494,0,1)},
        {frame: 70, value: _M(-.0162,-.6906,.723,0,.0973,.7186,.6886,0,-.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 71, value: _M(-.0156,-.6839,.7294,0,.0923,.7254,.6821,0,-.9956,.078,.0518,0,0,.2494,0,1)},
        {frame: 72, value: _M(-.0144,-.6668,.7451,0,.0797,.742,.6656,0,-.9967,.069,.0425,0,0,.2494,0,1)},
        {frame: 73, value: _M(-.0134,-.6469,.7625,0,.0654,.7604,.6462,0,-.9978,.0585,.0321,0,0,.2494,0,1)},
        {frame: 74, value: _M(-.0126,-.6219,.783,0,.0478,.7818,.6217,0,-.9988,.0452,.0198,0,0,.2494,0,1)},
        {frame: 75, value: _M(-.0125,-.5941,.8043,0,.0287,.8038,.5942,0,-.9995,.0305,.007,0,0,.2494,0,1)},
        {frame: 76, value: _M(-.013,-.5627,.8266,0,.0077,.8266,.5628,0,-.9999,.0137,-.0065,0,0,.2494,0,1)},
        {frame: 77, value: _M(-.0145,-.5302,.8477,0,-.0134,.8478,.5301,0,-.9998,-.0037,-.0194,0,0,.2494,0,1)},
        {frame: 78, value: _M(-.0165,-.4998,.866,0,-.0327,.8659,.4992,0,-.9993,-.0201,-.0306,0,0,.2494,0,1)},
        {frame: 79, value: _M(-.0186,-.4747,.8799,0,-.0483,.8795,.4735,0,-.9987,-.0337,-.0393,0,0,.2494,0,1)},
        {frame: 80, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 83, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 90, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 108, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 120, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 180, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 190, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 252, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone2.R", skeleton,skeleton.bones[23], _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1), _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1));
        bone.length = .1464;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 20, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 30, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 51, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 59, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 61, value: _M(.0718,-.9478,-.3106,0,.9974,.0679,.0234,0,-.0011,-.3115,.9503,0,0,.1634,0,1)},
        {frame: 62, value: _M(.0917,-.9554,-.2808,0,.9956,.0929,.0091,0,.0174,-.2804,.9597,0,0,.1634,0,1)},
        {frame: 63, value: _M(.1151,-.9622,-.2469,0,.9926,.1208,-.0082,0,.0377,-.2442,.969,0,0,.1634,0,1)},
        {frame: 64, value: _M(.1445,-.9679,-.2055,0,.9876,.154,-.0307,0,.0613,-.1985,.9782,0,0,.1634,0,1)},
        {frame: 65, value: _M(.1776,-.9709,-.1607,0,.9804,.1887,-.0568,0,.0855,-.1475,.9854,0,0,.1634,0,1)},
        {frame: 66, value: _M(.215,-.9702,-.112,0,.9704,.2251,-.0873,0,.1099,-.0899,.9899,0,0,.1634,0,1)},
        {frame: 67, value: _M(.2531,-.9653,-.0643,0,.9584,.2592,-.1194,0,.1319,-.0314,.9908,0,0,.1634,0,1)},
        {frame: 68, value: _M(.2885,-.9572,-.0217,0,.9457,.2884,-.15,0,.1499,.0228,.9884,0,0,.1634,0,1)},
        {frame: 69, value: _M(.3177,-.9481,.0122,0,.9341,.3107,-.1759,0,.163,.0673,.9843,0,0,.1634,0,1)},
        {frame: 70, value: _M(.3336,-.9422,.0303,0,.9274,.3222,-.1902,0,.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 71, value: _M(.3242,-.9458,.0197,0,.9314,.3155,-.1818,0,.1657,.0773,.9831,0,0,.1634,0,1)},
        {frame: 72, value: _M(.3008,-.9537,-.0073,0,.9409,.298,-.1608,0,.1556,.0415,.987,0,0,.1634,0,1)},
        {frame: 73, value: _M(.2741,-.9609,-.0388,0,.951,.2769,-.1375,0,.1428,.0008,.9897,0,0,.1634,0,1)},
        {frame: 74, value: _M(.2419,-.9672,-.0781,0,.9621,.2495,-.1098,0,.1257,-.0486,.9909,0,0,.1634,0,1)},
        {frame: 75, value: _M(.2075,-.9706,-.1216,0,.9726,.2181,-.0811,0,.1052,-.1014,.9893,0,0,.1634,0,1)},
        {frame: 76, value: _M(.1705,-.9705,-.1702,0,.9821,.1815,-.0511,0,.0805,-.1585,.9841,0,0,.1634,0,1)},
        {frame: 77, value: _M(.1343,-.9663,-.2198,0,.9895,.1427,-.0228,0,.0534,-.2144,.9753,0,0,.1634,0,1)},
        {frame: 78, value: _M(.1023,-.9587,-.2653,0,.9944,.1058,.0013,0,.0268,-.264,.9642,0,0,.1634,0,1)},
        {frame: 79, value: _M(.0773,-.9501,-.3023,0,.997,.0749,.0195,0,.0041,-.3029,.953,0,0,.1634,0,1)},
        {frame: 80, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 83, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 90, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 108, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 120, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 180, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 190, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 252, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("weapon.bone", skeleton,skeleton.bones[22], _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1), _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1));
        bone.length = .3374;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 20, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 30, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 51, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 59, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 83, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 90, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 108, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 120, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 180, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 190, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 252, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.R", skeleton,skeleton.bones[21], _M(.5188,.0511,.8534,0,-.6259,.7026,.3384,0,-.5823,-.7097,.3965,0,-.1447,.7409,.122,1), _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1));
        bone.length = .1072;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 1, value: _M(.5058,.0738,.8595,0,-.5957,.7505,.2861,0,-.624,-.6567,.4236,0,-.1471,.7387,.1169,1)},
        {frame: 2, value: _M(.4697,.1732,.8656,0,-.5868,.7939,.1595,0,-.6596,-.5829,.4746,0,-.1537,.7353,.1008,1)},
        {frame: 3, value: _M(.4236,.2859,.8595,0,-.7127,.6909,.1215,0,-.5591,-.664,.4964,0,-.1602,.7319,.0846,1)},
        {frame: 4, value: _M(.4144,.3604,.8357,0,-.8015,.5796,.1475,0,-.4312,-.7309,.529,0,-.1627,.7306,.0784,1)},
        {frame: 5, value: _M(.6508,.2401,.7203,0,-.6618,.6443,.3832,0,-.3721,-.7261,.5783,0,-.1446,.7399,.1231,1)},
        {frame: 6, value: _M(.8783,.1336,.459,0,-.4166,.6849,.5978,0,-.2345,-.7163,.6572,0,-.1186,.7321,.1505,1)},
        {frame: 7, value: _M(.9266,.0133,.3758,0,-.2805,.6901,.6672,0,-.2505,-.7236,.6431,0,-.1136,.7294,.1536,1)},
        {frame: 8, value: _M(.9148,-.0563,.4001,0,-.2661,.6611,.7015,0,-.304,-.7482,.5898,0,-.1129,.729,.1541,1)},
        {frame: 9, value: _M(.5035,.2672,.8216,0,-.7434,.6185,.2545,0,-.4401,-.739,.5101,0,-.1196,.7288,.1423,1)},
        {frame: 10, value: _M(-.3929,.5776,.7155,0,-.7645,.2272,-.6032,0,-.511,-.784,.3524,0,-.1354,.728,.1079,1)},
        {frame: 11, value: _M(-.5876,.6362,.4999,0,-.4747,.2293,-.8498,0,-.6553,-.7366,.1673,0,-.1555,.7263,.0537,1)},
        {frame: 12, value: _M(-.465,.5513,.6927,0,-.6013,.3777,-.7041,0,-.6498,-.744,.1559,0,-.1555,.7263,.0537,1)},
        {frame: 13, value: _M(-.206,.4286,.8797,0,-.7357,.5249,-.428,0,-.6452,-.7354,.2072,0,-.155,.7292,.0637,1)},
        {frame: 14, value: _M(-.0814,.3585,.93,0,-.7674,.5728,-.288,0,-.6359,-.7372,.2285,0,-.1545,.7321,.0738,1)},
        {frame: 15, value: _M(-.0188,.3159,.9486,0,-.7762,.5934,-.213,0,-.6302,-.7404,.234,0,-.1545,.7321,.0738,1)},
        {frame: 16, value: _M(.067,.2695,.9607,0,-.7761,.6192,-.1196,0,-.6271,-.7375,.2506,0,-.1545,.7321,.0738,1)},
        {frame: 17, value: _M(.1869,.2116,.9593,0,-.7602,.6496,.0048,0,-.6222,-.7302,.2823,0,-.1531,.7332,.0806,1)},
        {frame: 18, value: _M(.3362,.1393,.9314,0,-.7187,.6771,.1581,0,-.6086,-.7226,.3278,0,-.1495,.736,.0984,1)},
        {frame: 19, value: _M(.4699,.0705,.8799,0,-.6579,.6926,.2958,0,-.5886,-.7179,.3719,0,-.146,.7389,.1163,1)},
        {frame: 20, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 30, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 31, value: _M(.5186,-.058,.8531,0,-.661,.6056,.443,0,-.5424,-.7936,.2757,0,-.1466,.7267,.1299,1)},
        {frame: 32, value: _M(.5193,-.1571,.84,0,-.6912,.5008,.521,0,-.5025,-.8512,.1515,0,-.1485,.7135,.1366,1)},
        {frame: 33, value: _M(.5191,-.1488,.8417,0,-.6888,.5102,.515,0,-.506,-.8471,.1623,0,-.1484,.7147,.136,1)},
        {frame: 34, value: _M(.5185,-.1234,.8461,0,-.6814,.5381,.4961,0,-.5165,-.8338,.1949,0,-.1479,.7181,.1343,1)},
        {frame: 35, value: _M(.5183,-.0861,.8509,0,-.67,.5775,.4665,0,-.5315,-.8119,.2416,0,-.1471,.723,.1317,1)},
        {frame: 36, value: _M(.5188,-.0479,.8536,0,-.6577,.6155,.4343,0,-.5462,-.7867,.2878,0,-.1464,.7281,.1292,1)},
        {frame: 37, value: _M(.5197,-.0183,.8542,0,-.6477,.6435,.4078,0,-.5572,-.7652,.3226,0,-.1458,.732,.1272,1)},
        {frame: 38, value: _M(.5208,.0088,.8536,0,-.6383,.6679,.3826,0,-.5668,-.7442,.3535,0,-.1453,.7356,.1254,1)},
        {frame: 39, value: _M(.5222,.0332,.8522,0,-.6296,.6891,.359,0,-.5753,-.724,.3807,0,-.1448,.7388,.1237,1)},
        {frame: 40, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 45, value: _M(.5372,.0185,.8433,0,-.5765,.7379,.351,0,-.6157,-.6746,.4071,0,-.139,.7441,.1231,1)},
        {frame: 46, value: _M(.566,-.0433,.8233,0,-.4415,.8275,.347,0,-.6962,-.5599,.4492,0,-.1253,.7545,.123,1)},
        {frame: 47, value: _M(.5817,-.0974,.8076,0,-.3212,.8846,.3381,0,-.7473,-.456,.4833,0,-.1139,.7631,.1229,1)},
        {frame: 48, value: _M(.5861,-.1214,.8011,0,-.2674,.9043,.3327,0,-.7648,-.4092,.4976,0,-.109,.7668,.1228,1)},
        {frame: 51, value: _M(.5861,-.1214,.8011,0,-.2674,.9043,.3327,0,-.7648,-.4092,.4976,0,-.109,.7668,.1228,1)},
        {frame: 59, value: _M(.2971,-.4403,.8473,0,-.6929,.5111,.5086,0,-.657,-.7382,-.1533,0,-.1417,.7218,.1392,1)},
        {frame: 61, value: _M(.2882,-.4372,.8519,0,-.691,.521,.5011,0,-.6629,-.7331,-.1519,0,-.1418,.7226,.1384,1)},
        {frame: 62, value: _M(.2661,-.4288,.8633,0,-.6855,.5454,.4823,0,-.6776,-.7202,-.1488,0,-.1423,.7246,.1364,1)},
        {frame: 63, value: _M(.241,-.4185,.8756,0,-.6784,.5726,.4604,0,-.6941,-.705,-.1459,0,-.1427,.727,.1342,1)},
        {frame: 64, value: _M(.2104,-.4047,.8899,0,-.6682,.605,.4331,0,-.7136,-.6857,-.1432,0,-.1433,.7298,.1314,1)},
        {frame: 65, value: _M(.1776,-.388,.9044,0,-.6553,.639,.4029,0,-.7342,-.6642,-.1408,0,-.1439,.7329,.1284,1)},
        {frame: 66, value: _M(.1428,-.3673,.9191,0,-.639,.675,.369,0,-.7559,-.64,-.1383,0,-.1446,.7363,.1251,1)},
        {frame: 67, value: _M(.108,-.3453,.9323,0,-.6205,.7092,.3346,0,-.7767,-.6146,-.1377,0,-.1453,.7397,.1217,1)},
        {frame: 68, value: _M(.0753,-.3249,.9428,0,-.6019,.7389,.3027,0,-.795,-.5903,-.1399,0,-.1459,.7428,.1187,1)},
        {frame: 69, value: _M(.0491,-.3071,.9504,0,-.5857,.7619,.2765,0,-.8091,-.5702,-.1424,0,-.1464,.7453,.1162,1)},
        {frame: 70, value: _M(.0357,-.2965,.9544,0,-.5763,.7741,.2621,0,-.8164,-.5594,-.1433,0,-.1467,.7467,.1148,1)},
        {frame: 71, value: _M(.0441,-.3024,.9522,0,-.5819,.7669,.2705,0,-.812,-.566,-.1421,0,-.1466,.7459,.1156,1)},
        {frame: 72, value: _M(.0648,-.317,.9462,0,-.5953,.7487,.2916,0,-.8009,-.5822,-.1402,0,-.1461,.7438,.1176,1)},
        {frame: 73, value: _M(.0886,-.3331,.9387,0,-.6097,.7271,.3156,0,-.7876,-.6004,-.1386,0,-.1457,.7415,.1199,1)},
        {frame: 74, value: _M(.1182,-.3517,.9286,0,-.6261,.6994,.3446,0,-.7707,-.6221,-.1376,0,-.1451,.7387,.1227,1)},
        {frame: 75, value: _M(.1505,-.3707,.9165,0,-.6422,.6681,.3757,0,-.7516,-.6451,-.1375,0,-.1445,.7356,.1257,1)},
        {frame: 76, value: _M(.1863,-.3901,.9017,0,-.658,.6321,.4094,0,-.7296,-.6696,-.1389,0,-.1438,.7322,.129,1)},
        {frame: 77, value: _M(.2224,-.4082,.8854,0,-.6716,.5941,.4427,0,-.7067,-.6931,-.1421,0,-.1431,.7288,.1323,1)},
        {frame: 78, value: _M(.2556,-.4234,.8692,0,-.6822,.558,.4724,0,-.685,-.7137,-.1462,0,-.1425,.7257,.1354,1)},
        {frame: 79, value: _M(.2824,-.4346,.8552,0,-.6895,.5279,.496,0,-.667,-.7297,-.1505,0,-.142,.7232,.1379,1)},
        {frame: 80, value: _M(.2971,-.4403,.8473,0,-.6929,.5111,.5086,0,-.657,-.7382,-.1533,0,-.1417,.7218,.1392,1)},
        {frame: 83, value: _M(.2971,-.4403,.8473,0,-.6929,.5111,.5086,0,-.657,-.7382,-.1533,0,-.1417,.7218,.1392,1)},
        {frame: 90, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 108, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 120, value: _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1)},
        {frame: 180, value: _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1)},
        {frame: 190, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 191, value: _M(.5225,.0423,.8516,0,-.6264,.6967,.3497,0,-.5784,-.7161,.3905,0,-.1446,.74,.123,1)},
        {frame: 192, value: _M(.5218,.0441,.8519,0,-.6263,.6979,.3475,0,-.5792,-.7149,.3917,0,-.1446,.7402,.1228,1)},
        {frame: 193, value: _M(.5205,.047,.8525,0,-.6261,.6999,.3437,0,-.5805,-.7127,.3937,0,-.1447,.7405,.1225,1)},
        {frame: 194, value: _M(.5188,.0511,.8534,0,-.6259,.7026,.3384,0,-.5823,-.7097,.3965,0,-.1447,.7409,.122,1)},
        {frame: 195, value: _M(.5166,.0562,.8544,0,-.6256,.7061,.3318,0,-.5846,-.7059,.3999,0,-.1447,.7414,.1213,1)},
        {frame: 196, value: _M(.5141,.062,.8555,0,-.6252,.7099,.3243,0,-.5872,-.7016,.4038,0,-.1448,.742,.1206,1)},
        {frame: 197, value: _M(.5115,.0682,.8566,0,-.6248,.7138,.3163,0,-.5899,-.697,.4078,0,-.1449,.7427,.1199,1)},
        {frame: 198, value: _M(.509,.0743,.8576,0,-.6244,.7177,.3083,0,-.5926,-.6924,.4117,0,-.1449,.7433,.1191,1)},
        {frame: 199, value: _M(.5066,.0801,.8585,0,-.6239,.7213,.3008,0,-.5951,-.688,.4153,0,-.145,.7439,.1184,1)},
        {frame: 200, value: _M(.5044,.0853,.8592,0,-.6235,.7244,.2941,0,-.5974,-.6841,.4186,0,-.145,.7444,.1178,1)},
        {frame: 201, value: _M(.5025,.0898,.8599,0,-.6231,.7271,.2882,0,-.5994,-.6806,.4214,0,-.1451,.7449,.1172,1)},
        {frame: 202, value: _M(.5007,.0943,.8605,0,-.6227,.7298,.2824,0,-.6013,-.6772,.4241,0,-.1451,.7454,.1167,1)},
        {frame: 203, value: _M(.4986,.0993,.8611,0,-.6222,.7327,.2758,0,-.6035,-.6733,.4271,0,-.1451,.7459,.1161,1)},
        {frame: 204, value: _M(.4964,.1047,.8617,0,-.6217,.7358,.2687,0,-.6059,-.6691,.4304,0,-.1452,.7464,.1154,1)},
        {frame: 205, value: _M(.4942,.1102,.8623,0,-.6211,.7388,.2616,0,-.6083,-.6649,.4336,0,-.1452,.747,.1147,1)},
        {frame: 206, value: _M(.4922,.1152,.8628,0,-.6205,.7416,.255,0,-.6105,-.6609,.4365,0,-.1453,.7475,.1141,1)},
        {frame: 207, value: _M(.4905,.1194,.8632,0,-.6201,.7438,.2494,0,-.6123,-.6576,.4389,0,-.1453,.7479,.1136,1)},
        {frame: 208, value: _M(.4893,.1225,.8635,0,-.6197,.7455,.2454,0,-.6136,-.6552,.4406,0,-.1454,.7482,.1132,1)},
        {frame: 209, value: _M(.4886,.1243,.8636,0,-.6195,.7464,.2431,0,-.6144,-.6538,.4417,0,-.1454,.7484,.113,1)},
        {frame: 210, value: _M(.4883,.1248,.8637,0,-.6194,.7467,.2423,0,-.6147,-.6533,.442,0,-.1454,.7485,.113,1)},
        {frame: 211, value: _M(.4886,.1243,.8636,0,-.6195,.7464,.243,0,-.6144,-.6538,.4417,0,-.1454,.7484,.113,1)},
        {frame: 212, value: _M(.4892,.1226,.8635,0,-.6197,.7455,.2452,0,-.6137,-.6551,.4407,0,-.1454,.7482,.1132,1)},
        {frame: 213, value: _M(.4904,.1197,.8632,0,-.62,.744,.249,0,-.6124,-.6573,.4391,0,-.1453,.7479,.1135,1)},
        {frame: 214, value: _M(.492,.1158,.8629,0,-.6205,.7419,.2542,0,-.6107,-.6605,.4368,0,-.1453,.7475,.114,1)},
        {frame: 215, value: _M(.4939,.1109,.8624,0,-.621,.7392,.2606,0,-.6086,-.6643,.434,0,-.1452,.7469,.1145,1)},
        {frame: 216, value: _M(.4961,.1054,.8618,0,-.6216,.7362,.2678,0,-.6062,-.6685,.4308,0,-.1451,.7464,.1151,1)},
        {frame: 217, value: _M(.4984,.0998,.8612,0,-.6221,.733,.2751,0,-.6037,-.6729,.4275,0,-.1451,.7457,.1158,1)},
        {frame: 218, value: _M(.5006,.0944,.8605,0,-.6227,.7299,.2822,0,-.6014,-.6771,.4242,0,-.145,.7452,.1164,1)},
        {frame: 219, value: _M(.5027,.0895,.8598,0,-.6231,.7269,.2886,0,-.5992,-.6809,.4212,0,-.145,.7446,.117,1)},
        {frame: 220, value: _M(.5045,.0851,.8592,0,-.6235,.7243,.2943,0,-.5973,-.6842,.4185,0,-.1449,.7442,.1175,1)},
        {frame: 221, value: _M(.5063,.0808,.8586,0,-.6239,.7217,.3,0,-.5954,-.6875,.4157,0,-.1448,.7437,.118,1)},
        {frame: 222, value: _M(.5084,.0758,.8578,0,-.6243,.7186,.3065,0,-.5932,-.6913,.4126,0,-.1448,.7431,.1186,1)},
        {frame: 223, value: _M(.5106,.0703,.8569,0,-.6247,.7152,.3135,0,-.5908,-.6954,.4091,0,-.1447,.7426,.1192,1)},
        {frame: 224, value: _M(.513,.0647,.8559,0,-.6251,.7116,.3209,0,-.5883,-.6996,.4055,0,-.1446,.7419,.1199,1)},
        {frame: 225, value: _M(.5154,.0591,.8549,0,-.6254,.708,.3281,0,-.5859,-.7038,.4018,0,-.1446,.7414,.1205,1)},
        {frame: 226, value: _M(.5175,.0541,.854,0,-.6257,.7047,.3345,0,-.5837,-.7075,.3985,0,-.1445,.7408,.1211,1)},
        {frame: 227, value: _M(.5193,.05,.8532,0,-.626,.7019,.3399,0,-.5818,-.7105,.3957,0,-.1445,.7404,.1216,1)},
        {frame: 228, value: _M(.5206,.0469,.8525,0,-.6261,.6998,.3438,0,-.5805,-.7128,.3937,0,-.1444,.74,.122,1)},
        {frame: 229, value: _M(.5214,.045,.8521,0,-.6262,.6985,.3463,0,-.5796,-.7142,.3924,0,-.1444,.7399,.1223,1)},
        {frame: 230, value: _M(.5218,.0441,.8519,0,-.6263,.6979,.3474,0,-.5792,-.7148,.3918,0,-.1444,.7398,.1224,1)},
        {frame: 231, value: _M(.5219,.0438,.8519,0,-.6263,.6977,.3478,0,-.5791,-.715,.3916,0,-.1444,.7398,.1225,1)},
        {frame: 232, value: _M(.522,.0436,.8518,0,-.6263,.6975,.3481,0,-.579,-.7152,.3914,0,-.1444,.7398,.1226,1)},
        {frame: 233, value: _M(.5221,.0433,.8518,0,-.6263,.6973,.3485,0,-.5789,-.7154,.3912,0,-.1444,.7398,.1227,1)},
        {frame: 234, value: _M(.5222,.0431,.8517,0,-.6263,.6972,.3488,0,-.5788,-.7156,.391,0,-.1444,.7398,.1227,1)},
        {frame: 235, value: _M(.5223,.0428,.8517,0,-.6264,.697,.3491,0,-.5787,-.7158,.3909,0,-.1444,.7398,.1228,1)},
        {frame: 236, value: _M(.5224,.0426,.8516,0,-.6264,.6969,.3493,0,-.5786,-.7159,.3908,0,-.1444,.7398,.1228,1)},
        {frame: 237, value: _M(.5225,.0425,.8516,0,-.6264,.6968,.3496,0,-.5785,-.7161,.3906,0,-.1444,.7398,.1229,1)},
        {frame: 238, value: _M(.5226,.0423,.8516,0,-.6264,.6966,.3498,0,-.5784,-.7162,.3905,0,-.1444,.7398,.1229,1)},
        {frame: 239, value: _M(.5226,.0422,.8515,0,-.6264,.6966,.3499,0,-.5784,-.7163,.3904,0,-.1444,.7398,.123,1)},
        {frame: 240, value: _M(.5227,.0421,.8515,0,-.6264,.6965,.3501,0,-.5783,-.7163,.3904,0,-.1445,.7398,.123,1)},
        {frame: 241, value: _M(.5227,.042,.8515,0,-.6264,.6964,.3502,0,-.5783,-.7164,.3903,0,-.1445,.7398,.123,1)},
        {frame: 242, value: _M(.5227,.0419,.8515,0,-.6264,.6964,.3503,0,-.5783,-.7165,.3903,0,-.1445,.7399,.1231,1)},
        {frame: 243, value: _M(.5227,.0419,.8515,0,-.6264,.6963,.3503,0,-.5782,-.7165,.3902,0,-.1445,.7399,.1231,1)},
        {frame: 244, value: _M(.5228,.0418,.8515,0,-.6264,.6963,.3504,0,-.5782,-.7165,.3902,0,-.1445,.7399,.1231,1)},
        {frame: 245, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3504,0,-.5782,-.7165,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 247, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3504,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 248, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)},
        {frame: 252, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone4.R", skeleton,skeleton.bones[26], _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1), _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1));
        bone.length = .0895;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 20, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 30, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 51, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 59, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 61, value: _M(-.2486,.5252,.8139,0,.0482,.8459,-.5312,0,-.9674,-.0928,-.2356,0,0,.1072,0,1)},
        {frame: 62, value: _M(-.2489,.5266,.8129,0,.0433,.8445,-.5338,0,-.9676,-.0977,-.233,0,0,.1072,0,1)},
        {frame: 63, value: _M(-.2493,.5282,.8117,0,.0376,.8428,-.5368,0,-.9677,-.1033,-.23,0,0,.1072,0,1)},
        {frame: 64, value: _M(-.2497,.5301,.8104,0,.0308,.8408,-.5405,0,-.9678,-.11,-.2263,0,0,.1072,0,1)},
        {frame: 65, value: _M(-.2503,.5321,.8088,0,.0233,.8385,-.5444,0,-.9679,-.1174,-.2223,0,0,.1072,0,1)},
        {frame: 66, value: _M(-.2509,.5343,.8072,0,.0152,.8359,-.5486,0,-.9679,-.1254,-.2178,0,0,.1072,0,1)},
        {frame: 67, value: _M(-.2515,.5366,.8055,0,.0069,.8332,-.5529,0,-.9678,-.1335,-.2133,0,0,.1072,0,1)},
        {frame: 68, value: _M(-.2521,.5386,.804,0,-.0006,.8307,-.5567,0,-.9677,-.1408,-.2091,0,0,.1072,0,1)},
        {frame: 69, value: _M(-.2526,.5402,.8027,0,-.0067,.8286,-.5598,0,-.9675,-.1468,-.2057,0,0,.1072,0,1)},
        {frame: 70, value: _M(-.2529,.5411,.802,0,-.0101,.8274,-.5615,0,-.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 71, value: _M(-.2527,.5406,.8024,0,-.0081,.8281,-.5605,0,-.9675,-.1482,-.2049,0,0,.1072,0,1)},
        {frame: 72, value: _M(-.2523,.5393,.8034,0,-.0032,.8298,-.558,0,-.9676,-.1433,-.2077,0,0,.1072,0,1)},
        {frame: 73, value: _M(-.2519,.5378,.8046,0,.0025,.8317,-.5552,0,-.9678,-.1379,-.2108,0,0,.1072,0,1)},
        {frame: 74, value: _M(-.2513,.5359,.806,0,.0093,.834,-.5516,0,-.9679,-.1311,-.2146,0,0,.1072,0,1)},
        {frame: 75, value: _M(-.2508,.5339,.8075,0,.0168,.8364,-.5478,0,-.9679,-.1238,-.2187,0,0,.1072,0,1)},
        {frame: 76, value: _M(-.2502,.5317,.8092,0,.0249,.839,-.5436,0,-.9679,-.1158,-.2231,0,0,.1072,0,1)},
        {frame: 77, value: _M(-.2496,.5294,.8108,0,.0332,.8415,-.5392,0,-.9678,-.1077,-.2276,0,0,.1072,0,1)},
        {frame: 78, value: _M(-.2491,.5273,.8124,0,.0407,.8437,-.5352,0,-.9676,-.1002,-.2316,0,0,.1072,0,1)},
        {frame: 79, value: _M(-.2486,.5256,.8136,0,.0468,.8455,-.5319,0,-.9675,-.0942,-.2348,0,0,.1072,0,1)},
        {frame: 80, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 83, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 90, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 108, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 120, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 180, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 190, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 252, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.L", skeleton,skeleton.bones[5], _M(.9317,.3557,-.0737,0,.3524,-.836,.4206,0,.088,-.4179,-.9042,0,.2401,.1528,-.0013,1), _M(.9969,.0775,-.0101,0,.0781,-.9839,.1607,0,.0025,-.161,-.9869,0,.2401,.1528,-.0013,1));
        bone.length = 1.3168;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 1, value: _M(.9288,.3561,-.1023,0,.3617,-.8118,.4584,0,.0802,-.4628,-.8829,0,.2401,.1528,-.0013,1)},
        {frame: 2, value: _M(.9141,.3508,-.2036,0,.4049,-.7597,.5089,0,.0239,-.5476,-.8364,0,.2401,.1528,-.0013,1)},
        {frame: 3, value: _M(.865,.3302,-.3778,0,.4905,-.7152,.4979,0,-.1058,-.616,-.7806,0,.2401,.1528,-.0013,1)},
        {frame: 4, value: _M(.7604,.2939,-.5792,0,.5772,-.7146,.3951,0,-.2978,-.6347,-.713,0,.2401,.1528,-.0013,1)},
        {frame: 5, value: _M(.5674,.1479,-.8101,0,.3603,-.9292,.0828,0,-.7404,-.3388,-.5805,0,.2401,.1528,-.0013,1)},
        {frame: 6, value: _M(.6065,.114,-.7869,0,.4134,-.8906,.1896,0,-.6792,-.4402,-.5873,0,.2401,.1528,-.0013,1)},
        {frame: 7, value: _M(.6315,.0859,-.7706,0,.3901,-.8941,.22,0,-.6701,-.4396,-.5981,0,.2401,.1528,-.0013,1)},
        {frame: 8, value: _M(.688,.0867,-.7205,0,.3333,-.9197,.2077,0,-.6446,-.3831,-.6616,0,.2401,.1528,-.0013,1)},
        {frame: 9, value: _M(.9136,.1612,-.3733,0,.2815,-.9132,.2946,0,-.2934,-.3742,-.8797,0,.2401,.1528,-.0013,1)},
        {frame: 10, value: _M(.9591,.2694,-.0872,0,.2704,-.7797,.5647,0,.0841,-.5652,-.8207,0,.2401,.1528,-.0013,1)},
        {frame: 11, value: _M(.9402,.3134,-.1337,0,.2311,-.2983,.9261,0,.2503,-.9016,-.3528,0,.2401,.1528,-.0013,1)},
        {frame: 12, value: _M(.9373,.3246,-.1269,0,.2398,-.3362,.9107,0,.253,-.8841,-.393,0,.2401,.1528,-.0013,1)},
        {frame: 13, value: _M(.9361,.3291,-.1239,0,.2437,-.3531,.9033,0,.2535,-.8758,-.4108,0,.2401,.1528,-.0013,1)},
        {frame: 14, value: _M(.936,.3296,-.1235,0,.2442,-.3551,.9024,0,.2536,-.8748,-.4129,0,.2401,.1528,-.0013,1)},
        {frame: 15, value: _M(.9361,.3301,-.1218,0,.2498,-.3797,.8907,0,.2478,-.8642,-.4379,0,.2401,.1528,-.0013,1)},
        {frame: 16, value: _M(.9357,.333,-.1161,0,.2675,-.4554,.8491,0,.2299,-.8256,-.5153,0,.2401,.1528,-.0013,1)},
        {frame: 17, value: _M(.9343,.3404,-.106,0,.2958,-.5739,.7637,0,.1991,-.7448,-.6369,0,.2401,.1528,-.0013,1)},
        {frame: 18, value: _M(.9325,.3492,-.0924,0,.3257,-.7019,.6335,0,.1563,-.6208,-.7682,0,.2401,.1528,-.0013,1)},
        {frame: 19, value: _M(.9316,.3546,-.0796,0,.3459,-.7981,.4934,0,.1114,-.4872,-.8661,0,.2401,.1528,-.0013,1)},
        {frame: 20, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 30, value: _M(.9306,.358,-.0764,0,.3568,-.8402,.4085,0,.082,-.4074,-.9096,0,.2401,.1528,-.0013,1)},
        {frame: 31, value: _M(.9449,.3247,-.0424,0,.3246,-.9118,.2516,0,.0431,-.2515,-.9669,0,.2401,.1528,-.0013,1)},
        {frame: 32, value: _M(.9534,.3009,-.0233,0,.2983,-.928,.2234,0,.0456,-.2199,-.9745,0,.2401,.1528,-.0013,1)},
        {frame: 33, value: _M(.9449,.3223,-.0566,0,.3174,-.8608,.3979,0,.0796,-.394,-.9157,0,.2401,.1528,-.0013,1)},
        {frame: 34, value: _M(.927,.3491,-.1372,0,.3611,-.732,.5777,0,.1013,-.5851,-.8046,0,.2401,.1528,-.0013,1)},
        {frame: 35, value: _M(.8964,.3661,-.25,0,.4232,-.5388,.7284,0,.132,-.7588,-.6379,0,.2401,.1528,-.0013,1)},
        {frame: 36, value: _M(.8578,.3653,-.3616,0,.4805,-.32,.8165,0,.1826,-.8741,-.4501,0,.2401,.1528,-.0013,1)},
        {frame: 37, value: _M(.8212,.3575,-.4448,0,.5144,-.1261,.8482,0,.2472,-.9253,-.2875,0,.2401,.1528,-.0013,1)},
        {frame: 38, value: _M(.7821,.3461,-.5183,0,.5287,.0717,.8457,0,.3299,-.9355,-.1269,0,.2401,.1528,-.0013,1)},
        {frame: 39, value: _M(.7401,.3398,-.5803,0,.5252,.2467,.8144,0,.4199,-.9075,.0041,0,.2401,.1528,-.0013,1)},
        {frame: 40, value: _M(.7104,.3742,-.5961,0,.5297,.2735,.8029,0,.4634,-.8861,-.0039,0,.2401,.1528,-.0013,1)},
        {frame: 41, value: _M(.7025,.4893,-.5169,0,.5293,.1263,.839,0,.4758,-.8629,-.1702,0,.2401,.1528,-.0013,1)},
        {frame: 42, value: _M(.7404,.6112,-.2796,0,.5052,-.2317,.8313,0,.4433,-.7568,-.4804,0,.2401,.1528,-.0013,1)},
        {frame: 43, value: _M(.8232,.5672,-.0257,0,.4463,-.6184,.6469,0,.351,-.5439,-.7622,0,.2401,.1528,-.0013,1)},
        {frame: 44, value: _M(.8798,.4698,.0729,0,.3998,-.814,.4214,0,.2573,-.3416,-.904,0,.2401,.1528,-.0013,1)},
        {frame: 45, value: _M(.9217,.3809,.0736,0,.3554,-.905,.2338,0,.1557,-.1893,-.9695,0,.2401,.1528,-.0013,1)},
        {frame: 46, value: _M(.9519,.3053,.0279,0,.2931,-.9331,.2085,0,.0897,-.1903,-.9776,0,.2401,.1528,-.0013,1)},
        {frame: 47, value: _M(.9583,.2857,-.0057,0,.2816,-.9408,.1885,0,.0485,-.1822,-.9821,0,.2401,.1528,-.0013,1)},
        {frame: 48, value: _M(.9607,.2775,-.0107,0,.2776,-.9606,.0106,0,-.0074,-.0132,-.9999,0,.2401,.1528,-.0013,1)},
        {frame: 51, value: _M(.9607,.2775,-.0107,0,.2776,-.9606,.0106,0,-.0074,-.0132,-.9999,0,.2401,.1528,-.0013,1)},
        {frame: 59, value: _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 61, value: _M(.998,.0604,-.0183,0,.0623,-.9885,.138,0,-.0098,-.1388,-.9903,0,.2401,.1528,-.0013,1)},
        {frame: 62, value: _M(.9985,.043,-.0331,0,.0525,-.9194,.3898,0,-.0137,-.3909,-.9203,0,.2401,.1528,-.0013,1)},
        {frame: 63, value: _M(.9991,.0178,-.0392,0,.0392,-.7524,.6575,0,-.0178,-.6585,-.7524,0,.2401,.1528,-.0013,1)},
        {frame: 64, value: _M(.9994,.002,-.0333,0,.0298,-.5022,.8642,0,-.015,-.8648,-.502,0,.2401,.1528,-.0013,1)},
        {frame: 65, value: _M(.9995,.0056,-.0316,0,.0314,-.3761,.926,0,-.0066,-.9266,-.3761,0,.2401,.1528,-.0013,1)},
        {frame: 66, value: _M(.9993,.0158,-.0334,0,.0369,-.3976,.9168,0,.0012,-.9174,-.3979,0,.2401,.1528,-.0013,1)},
        {frame: 67, value: _M(.9993,.0213,-.0322,0,.0384,-.4719,.8808,0,.0036,-.8814,-.4724,0,.2401,.1528,-.0013,1)},
        {frame: 68, value: _M(.9994,.0157,-.0304,0,.0342,-.4242,.9049,0,.0014,-.9054,-.4245,0,.2401,.1528,-.0013,1)},
        {frame: 69, value: _M(.9996,.0075,-.0275,0,.0282,-.382,.9237,0,-.0036,-.9241,-.3821,0,.2401,.1528,-.0013,1)},
        {frame: 70, value: _M(.9998,.007,-.021,0,.021,-.5973,.8017,0,-.0069,-.802,-.5973,0,.2401,.1528,-.0013,1)},
        {frame: 71, value: _M(.9997,.0068,-.0237,0,.0228,-.621,.7835,0,-.0094,-.7838,-.621,0,.2401,.1528,-.0013,1)},
        {frame: 72, value: _M(.9996,.0103,-.0264,0,.0265,-.6677,.7439,0,-.0099,-.7443,-.6677,0,.2401,.1528,-.0013,1)},
        {frame: 73, value: _M(.9995,.0201,-.0261,0,.032,-.7799,.6251,0,-.0078,-.6256,-.7801,0,.2401,.1528,-.0013,1)},
        {frame: 74, value: _M(.9992,.035,-.0201,0,.0401,-.9115,.4094,0,-.004,-.4098,-.9122,0,.2401,.1528,-.0013,1)},
        {frame: 75, value: _M(.9989,.0466,-.0099,0,.0476,-.9872,.1525,0,-.0027,-.1528,-.9883,0,.2401,.1528,-.0013,1)},
        {frame: 76, value: _M(.9985,.0539,-.0013,0,.0538,-.9971,-.0545,0,-.0042,.0543,-.9985,0,.2401,.1528,-.0013,1)},
        {frame: 77, value: _M(.9981,.062,-.0013,0,.0618,-.9964,-.0576,0,-.0049,.0574,-.9983,0,.2401,.1528,-.0013,1)},
        {frame: 78, value: _M(.9977,.0675,-.0032,0,.0673,-.9974,-.0256,0,-.0049,.0253,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 79, value: _M(.9976,.0696,-.0048,0,.0695,-.9975,-.0159,0,-.0059,.0155,-.9999,0,.2401,.1528,-.0013,1)},
        {frame: 80, value: _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 83, value: _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
        {frame: 90, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 91, value: _M(.9273,.3658,-.0797,0,.3577,-.8028,.477,0,.1105,-.4708,-.8753,0,.2401,.1528,-.0013,1)},
        {frame: 92, value: _M(.9128,.3975,-.0939,0,.375,-.7244,.5785,0,.1619,-.5632,-.8103,0,.2401,.1528,-.0013,1)},
        {frame: 93, value: _M(.8871,.4483,-.1097,0,.4037,-.6386,.6551,0,.2237,-.6254,-.7476,0,.2401,.1528,-.0013,1)},
        {frame: 94, value: _M(.8579,.5004,-.1165,0,.4365,-.5903,.679,0,.271,-.6334,-.7248,0,.2401,.1528,-.0013,1)},
        {frame: 95, value: _M(.8409,.5303,-.1081,0,.4614,-.5982,.6552,0,.2828,-.6009,-.7477,0,.2401,.1528,-.0013,1)},
        {frame: 96, value: _M(.8348,.5439,-.0853,0,.4825,-.6482,.5891,0,.2651,-.533,-.8035,0,.2401,.1528,-.0013,1)},
        {frame: 97, value: _M(.8347,.5462,-.0707,0,.4904,-.6786,.5469,0,.2508,-.4911,-.8342,0,.2401,.1528,-.0013,1)},
        {frame: 98, value: _M(.9234,.38,-.054,0,.3498,-.7752,.5261,0,.158,-.5047,-.8487,0,.2401,.1528,-.0013,1)},
        {frame: 99, value: _M(.9188,.3903,-.0592,0,.3589,-.7636,.5367,0,.1643,-.5144,-.8417,0,.2401,.1528,-.0013,1)},
        {frame: 100, value: _M(.9168,.3946,-.0615,0,.3629,-.7588,.5408,0,.1668,-.5181,-.8389,0,.2401,.1528,-.0013,1)},
        {frame: 101, value: _M(.9157,.3969,-.0627,0,.365,-.7563,.5429,0,.1681,-.52,-.8375,0,.2401,.1528,-.0013,1)},
        {frame: 102, value: _M(.9148,.3986,-.0651,0,.3675,-.7546,.5437,0,.1676,-.5213,-.8368,0,.2401,.1528,-.0013,1)},
        {frame: 103, value: _M(.9155,.3963,-.0686,0,.3683,-.7575,.539,0,.1617,-.5187,-.8395,0,.2401,.1528,-.0013,1)},
        {frame: 104, value: _M(.9183,.3894,-.0721,0,.3667,-.7674,.5259,0,.1495,-.5093,-.8475,0,.2401,.1528,-.0013,1)},
        {frame: 105, value: _M(.9225,.3786,-.0746,0,.3628,-.7851,.5019,0,.1315,-.4901,-.8617,0,.2401,.1528,-.0013,1)},
        {frame: 106, value: _M(.9271,.3672,-.0751,0,.3578,-.8074,.4691,0,.1116,-.4618,-.8799,0,.2401,.1528,-.0013,1)},
        {frame: 107, value: _M(.9304,.3588,-.0744,0,.3538,-.8268,.4372,0,.0954,-.4331,-.8963,0,.2401,.1528,-.0013,1)},
        {frame: 108, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 120, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4025,0,.0347,-.4023,-.9148,0,.2401,.1528,-.0013,1)},
        {frame: 121, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4024,0,.0347,-.4023,-.9149,0,.2401,.1528,-.0013,1)},
        {frame: 122, value: _M(.9864,.1607,-.0333,0,.1604,-.9014,.4021,0,.0347,-.402,-.915,0,.2401,.1528,-.0013,1)},
        {frame: 123, value: _M(.9864,.1607,-.0332,0,.1604,-.9016,.4017,0,.0346,-.4016,-.9152,0,.2401,.1528,-.0013,1)},
        {frame: 124, value: _M(.9864,.1607,-.0332,0,.1604,-.9019,.4011,0,.0345,-.401,-.9154,0,.2401,.1528,-.0013,1)},
        {frame: 125, value: _M(.9865,.1607,-.0332,0,.1604,-.9022,.4004,0,.0344,-.4003,-.9157,0,.2401,.1528,-.0013,1)},
        {frame: 126, value: _M(.9865,.1606,-.0331,0,.1604,-.9026,.3995,0,.0343,-.3994,-.9161,0,.2401,.1528,-.0013,1)},
        {frame: 127, value: _M(.9865,.1606,-.0331,0,.1604,-.903,.3985,0,.0342,-.3984,-.9166,0,.2401,.1528,-.0013,1)},
        {frame: 128, value: _M(.9865,.1606,-.033,0,.1604,-.9036,.3973,0,.034,-.3972,-.9171,0,.2401,.1528,-.0013,1)},
        {frame: 129, value: _M(.9865,.1606,-.0329,0,.1604,-.9041,.396,0,.0338,-.3959,-.9177,0,.2401,.1528,-.0013,1)},
        {frame: 130, value: _M(.9865,.1605,-.0328,0,.1604,-.9048,.3946,0,.0336,-.3945,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 131, value: _M(.9865,.1605,-.0328,0,.1603,-.9055,.393,0,.0334,-.3929,-.919,0,.2401,.1528,-.0013,1)},
        {frame: 132, value: _M(.9865,.1605,-.0327,0,.1603,-.9062,.3913,0,.0332,-.3913,-.9197,0,.2401,.1528,-.0013,1)},
        {frame: 133, value: _M(.9865,.1604,-.0326,0,.1603,-.9069,.3896,0,.033,-.3895,-.9204,0,.2401,.1528,-.0013,1)},
        {frame: 134, value: _M(.9865,.1604,-.0325,0,.1603,-.9077,.3877,0,.0327,-.3877,-.9212,0,.2401,.1528,-.0013,1)},
        {frame: 135, value: _M(.9865,.1603,-.0324,0,.1603,-.9085,.3859,0,.0325,-.3858,-.922,0,.2401,.1528,-.0013,1)},
        {frame: 136, value: _M(.9865,.1603,-.0323,0,.1603,-.9093,.384,0,.0322,-.384,-.9228,0,.2401,.1528,-.0013,1)},
        {frame: 137, value: _M(.9866,.1602,-.0321,0,.1603,-.9101,.3821,0,.032,-.3821,-.9236,0,.2401,.1528,-.0013,1)},
        {frame: 138, value: _M(.9866,.1602,-.032,0,.1603,-.9109,.3802,0,.0317,-.3803,-.9243,0,.2401,.1528,-.0013,1)},
        {frame: 139, value: _M(.9866,.1602,-.0319,0,.1602,-.9117,.3784,0,.0315,-.3785,-.9251,0,.2401,.1528,-.0013,1)},
        {frame: 140, value: _M(.9866,.1601,-.0319,0,.1602,-.9124,.3767,0,.0313,-.3768,-.9258,0,.2401,.1528,-.0013,1)},
        {frame: 141, value: _M(.9866,.1601,-.0318,0,.1602,-.913,.3751,0,.0311,-.3752,-.9264,0,.2401,.1528,-.0013,1)},
        {frame: 142, value: _M(.9866,.16,-.0317,0,.1602,-.9136,.3737,0,.0309,-.3737,-.927,0,.2401,.1528,-.0013,1)},
        {frame: 143, value: _M(.9866,.16,-.0316,0,.1602,-.9142,.3722,0,.0307,-.3723,-.9276,0,.2401,.1528,-.0013,1)},
        {frame: 144, value: _M(.9866,.16,-.0315,0,.1602,-.9147,.3711,0,.0305,-.3711,-.9281,0,.2401,.1528,-.0013,1)},
        {frame: 145, value: _M(.9866,.16,-.0315,0,.1602,-.9151,.37,0,.0304,-.3701,-.9285,0,.2401,.1528,-.0013,1)},
        {frame: 146, value: _M(.9866,.1599,-.0314,0,.1602,-.9154,.3692,0,.0303,-.3693,-.9288,0,.2401,.1528,-.0013,1)},
        {frame: 147, value: _M(.9866,.1599,-.0314,0,.1602,-.9157,.3686,0,.0302,-.3687,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 148, value: _M(.9866,.1599,-.0314,0,.1602,-.9159,.3681,0,.0301,-.3682,-.9293,0,.2401,.1528,-.0013,1)},
        {frame: 149, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3678,0,.0301,-.3679,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 150, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3677,0,.0301,-.3678,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 151, value: _M(.9866,.1599,-.0314,0,.1602,-.916,.3678,0,.0301,-.3679,-.9294,0,.2401,.1528,-.0013,1)},
        {frame: 152, value: _M(.9866,.1599,-.0314,0,.1602,-.9159,.3681,0,.0301,-.3682,-.9293,0,.2401,.1528,-.0013,1)},
        {frame: 153, value: _M(.9866,.1599,-.0314,0,.1602,-.9157,.3686,0,.0302,-.3687,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 154, value: _M(.9866,.1599,-.0314,0,.1602,-.9154,.3692,0,.0303,-.3693,-.9288,0,.2401,.1528,-.0013,1)},
        {frame: 155, value: _M(.9866,.16,-.0315,0,.1602,-.9151,.37,0,.0304,-.3701,-.9285,0,.2401,.1528,-.0013,1)},
        {frame: 156, value: _M(.9866,.16,-.0315,0,.1602,-.9147,.3711,0,.0305,-.3711,-.9281,0,.2401,.1528,-.0013,1)},
        {frame: 157, value: _M(.9866,.16,-.0316,0,.1602,-.9142,.3722,0,.0307,-.3723,-.9276,0,.2401,.1528,-.0013,1)},
        {frame: 158, value: _M(.9866,.16,-.0317,0,.1602,-.9136,.3737,0,.0309,-.3737,-.927,0,.2401,.1528,-.0013,1)},
        {frame: 159, value: _M(.9866,.1601,-.0318,0,.1602,-.913,.3751,0,.0311,-.3752,-.9264,0,.2401,.1528,-.0013,1)},
        {frame: 160, value: _M(.9866,.1601,-.0319,0,.1602,-.9124,.3767,0,.0313,-.3768,-.9258,0,.2401,.1528,-.0013,1)},
        {frame: 161, value: _M(.9866,.1602,-.0319,0,.1602,-.9117,.3784,0,.0315,-.3785,-.9251,0,.2401,.1528,-.0013,1)},
        {frame: 162, value: _M(.9866,.1602,-.032,0,.1603,-.9109,.3802,0,.0317,-.3803,-.9243,0,.2401,.1528,-.0013,1)},
        {frame: 163, value: _M(.9866,.1602,-.0321,0,.1603,-.9101,.3821,0,.032,-.3821,-.9236,0,.2401,.1528,-.0013,1)},
        {frame: 164, value: _M(.9865,.1603,-.0323,0,.1603,-.9093,.384,0,.0322,-.384,-.9228,0,.2401,.1528,-.0013,1)},
        {frame: 165, value: _M(.9865,.1603,-.0324,0,.1603,-.9085,.3859,0,.0325,-.3858,-.922,0,.2401,.1528,-.0013,1)},
        {frame: 166, value: _M(.9865,.1604,-.0325,0,.1603,-.9077,.3877,0,.0327,-.3877,-.9212,0,.2401,.1528,-.0013,1)},
        {frame: 167, value: _M(.9865,.1604,-.0326,0,.1603,-.9069,.3896,0,.033,-.3895,-.9204,0,.2401,.1528,-.0013,1)},
        {frame: 168, value: _M(.9865,.1605,-.0327,0,.1603,-.9062,.3913,0,.0332,-.3913,-.9197,0,.2401,.1528,-.0013,1)},
        {frame: 169, value: _M(.9865,.1605,-.0328,0,.1603,-.9055,.393,0,.0334,-.3929,-.919,0,.2401,.1528,-.0013,1)},
        {frame: 170, value: _M(.9865,.1605,-.0328,0,.1604,-.9048,.3946,0,.0336,-.3945,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 171, value: _M(.9865,.1606,-.0329,0,.1604,-.9041,.396,0,.0338,-.3959,-.9177,0,.2401,.1528,-.0013,1)},
        {frame: 172, value: _M(.9865,.1606,-.033,0,.1604,-.9036,.3973,0,.034,-.3972,-.9171,0,.2401,.1528,-.0013,1)},
        {frame: 173, value: _M(.9865,.1606,-.0331,0,.1604,-.903,.3985,0,.0342,-.3984,-.9166,0,.2401,.1528,-.0013,1)},
        {frame: 174, value: _M(.9865,.1606,-.0331,0,.1604,-.9026,.3995,0,.0343,-.3994,-.9161,0,.2401,.1528,-.0013,1)},
        {frame: 175, value: _M(.9865,.1607,-.0332,0,.1604,-.9022,.4004,0,.0344,-.4003,-.9157,0,.2401,.1528,-.0013,1)},
        {frame: 176, value: _M(.9864,.1607,-.0332,0,.1604,-.9019,.4011,0,.0345,-.401,-.9154,0,.2401,.1528,-.0013,1)},
        {frame: 177, value: _M(.9864,.1607,-.0332,0,.1604,-.9016,.4017,0,.0346,-.4016,-.9152,0,.2401,.1528,-.0013,1)},
        {frame: 178, value: _M(.9864,.1607,-.0333,0,.1604,-.9014,.4021,0,.0347,-.402,-.915,0,.2401,.1528,-.0013,1)},
        {frame: 179, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4024,0,.0347,-.4023,-.9149,0,.2401,.1528,-.0013,1)},
        {frame: 180, value: _M(.9864,.1607,-.0333,0,.1604,-.9013,.4025,0,.0347,-.4023,-.9148,0,.2401,.1528,-.0013,1)},
        {frame: 190, value: _M(.9316,.3558,-.0739,0,.3523,-.8346,.4234,0,.089,-.4205,-.9029,0,.2401,.1528,-.0013,1)},
        {frame: 191, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 192, value: _M(.9316,.3558,-.0738,0,.3524,-.8349,.4228,0,.0888,-.4199,-.9032,0,.2401,.1528,-.0013,1)},
        {frame: 193, value: _M(.9317,.3557,-.0738,0,.3524,-.8354,.4219,0,.0885,-.4191,-.9036,0,.2401,.1528,-.0013,1)},
        {frame: 194, value: _M(.9317,.3557,-.0737,0,.3524,-.836,.4206,0,.088,-.4179,-.9042,0,.2401,.1528,-.0013,1)},
        {frame: 195, value: _M(.9318,.3556,-.0736,0,.3524,-.8368,.419,0,.0874,-.4163,-.905,0,.2401,.1528,-.0013,1)},
        {frame: 196, value: _M(.9318,.3554,-.0734,0,.3524,-.8378,.4171,0,.0867,-.4145,-.9059,0,.2401,.1528,-.0013,1)},
        {frame: 197, value: _M(.9319,.3553,-.0733,0,.3525,-.8388,.415,0,.086,-.4125,-.9069,0,.2401,.1528,-.0013,1)},
        {frame: 198, value: _M(.9319,.3552,-.0732,0,.3525,-.8399,.4128,0,.0852,-.4105,-.9079,0,.2401,.1528,-.0013,1)},
        {frame: 199, value: _M(.932,.3551,-.073,0,.3525,-.8409,.4106,0,.0844,-.4084,-.9089,0,.2401,.1528,-.0013,1)},
        {frame: 200, value: _M(.9321,.3549,-.0729,0,.3525,-.842,.4084,0,.0836,-.4064,-.9099,0,.2401,.1528,-.0013,1)},
        {frame: 201, value: _M(.9321,.3548,-.0727,0,.3526,-.8429,.4064,0,.0829,-.4044,-.9108,0,.2401,.1528,-.0013,1)},
        {frame: 202, value: _M(.9322,.3547,-.0726,0,.3526,-.8439,.4043,0,.0822,-.4025,-.9117,0,.2401,.1528,-.0013,1)},
        {frame: 203, value: _M(.9322,.3545,-.0724,0,.3526,-.8451,.4019,0,.0813,-.4002,-.9128,0,.2401,.1528,-.0013,1)},
        {frame: 204, value: _M(.9323,.3544,-.0722,0,.3526,-.8463,.3992,0,.0804,-.3976,-.914,0,.2401,.1528,-.0013,1)},
        {frame: 205, value: _M(.9324,.3542,-.072,0,.3527,-.8477,.3962,0,.0793,-.3948,-.9153,0,.2401,.1528,-.0013,1)},
        {frame: 206, value: _M(.9325,.354,-.0718,0,.3527,-.8492,.3929,0,.0781,-.3917,-.9168,0,.2401,.1528,-.0013,1)},
        {frame: 207, value: _M(.9326,.3539,-.0716,0,.3527,-.8508,.3894,0,.0769,-.3884,-.9183,0,.2401,.1528,-.0013,1)},
        {frame: 208, value: _M(.9327,.3537,-.0713,0,.3528,-.8525,.3857,0,.0756,-.3849,-.9199,0,.2401,.1528,-.0013,1)},
        {frame: 209, value: _M(.9327,.3535,-.0711,0,.3528,-.8542,.3818,0,.0743,-.3812,-.9215,0,.2401,.1528,-.0013,1)},
        {frame: 210, value: _M(.9328,.3533,-.0708,0,.3528,-.856,.3779,0,.0729,-.3775,-.9231,0,.2401,.1528,-.0013,1)},
        {frame: 211, value: _M(.9329,.3531,-.0706,0,.3529,-.8577,.374,0,.0715,-.3738,-.9247,0,.2401,.1528,-.0013,1)},
        {frame: 212, value: _M(.933,.3529,-.0703,0,.3529,-.8593,.3702,0,.0702,-.3702,-.9263,0,.2401,.1528,-.0013,1)},
        {frame: 213, value: _M(.9331,.3527,-.0701,0,.3529,-.8609,.3666,0,.069,-.3668,-.9277,0,.2401,.1528,-.0013,1)},
        {frame: 214, value: _M(.9332,.3525,-.0699,0,.3529,-.8622,.3633,0,.0678,-.3637,-.9291,0,.2401,.1528,-.0013,1)},
        {frame: 215, value: _M(.9333,.3524,-.0697,0,.353,-.8635,.3604,0,.0668,-.3609,-.9302,0,.2401,.1528,-.0013,1)},
        {frame: 216, value: _M(.9333,.3523,-.0695,0,.353,-.8645,.3579,0,.066,-.3586,-.9312,0,.2401,.1528,-.0013,1)},
        {frame: 217, value: _M(.9333,.3522,-.0694,0,.353,-.8652,.356,0,.0653,-.3568,-.9319,0,.2401,.1528,-.0013,1)},
        {frame: 218, value: _M(.9334,.3521,-.0693,0,.353,-.8658,.3546,0,.0649,-.3555,-.9324,0,.2401,.1528,-.0013,1)},
        {frame: 219, value: _M(.9334,.3521,-.0693,0,.353,-.8661,.3538,0,.0646,-.3547,-.9327,0,.2401,.1528,-.0013,1)},
        {frame: 220, value: _M(.9334,.3521,-.0693,0,.353,-.8663,.3536,0,.0645,-.3545,-.9328,0,.2401,.1528,-.0013,1)},
        {frame: 221, value: _M(.9334,.3521,-.0693,0,.353,-.8662,.3538,0,.0646,-.3547,-.9328,0,.2401,.1528,-.0013,1)},
        {frame: 222, value: _M(.9334,.3521,-.0693,0,.353,-.8659,.3545,0,.0648,-.3553,-.9325,0,.2401,.1528,-.0013,1)},
        {frame: 223, value: _M(.9334,.3522,-.0694,0,.353,-.8654,.3556,0,.0652,-.3564,-.9321,0,.2401,.1528,-.0013,1)},
        {frame: 224, value: _M(.9333,.3523,-.0695,0,.353,-.8648,.3571,0,.0657,-.3578,-.9315,0,.2401,.1528,-.0013,1)},
        {frame: 225, value: _M(.9333,.3523,-.0696,0,.353,-.864,.3591,0,.0664,-.3597,-.9307,0,.2401,.1528,-.0013,1)},
        {frame: 226, value: _M(.9332,.3525,-.0698,0,.3529,-.863,.3615,0,.0672,-.3619,-.9298,0,.2401,.1528,-.0013,1)},
        {frame: 227, value: _M(.9332,.3526,-.0699,0,.3529,-.8619,.3642,0,.0681,-.3645,-.9287,0,.2401,.1528,-.0013,1)},
        {frame: 228, value: _M(.9331,.3527,-.0701,0,.3529,-.8606,.3672,0,.0692,-.3674,-.9275,0,.2401,.1528,-.0013,1)},
        {frame: 229, value: _M(.933,.3529,-.0703,0,.3529,-.8592,.3705,0,.0703,-.3705,-.9262,0,.2401,.1528,-.0013,1)},
        {frame: 230, value: _M(.9329,.3531,-.0706,0,.3529,-.8577,.3739,0,.0715,-.3738,-.9248,0,.2401,.1528,-.0013,1)},
        {frame: 231, value: _M(.9329,.3532,-.0708,0,.3528,-.8561,.3776,0,.0728,-.3772,-.9233,0,.2401,.1528,-.0013,1)},
        {frame: 232, value: _M(.9328,.3534,-.071,0,.3528,-.8545,.3813,0,.0741,-.3807,-.9217,0,.2401,.1528,-.0013,1)},
        {frame: 233, value: _M(.9327,.3536,-.0713,0,.3528,-.8528,.3851,0,.0754,-.3843,-.9201,0,.2401,.1528,-.0013,1)},
        {frame: 234, value: _M(.9326,.3538,-.0715,0,.3527,-.8511,.3889,0,.0767,-.3879,-.9185,0,.2401,.1528,-.0013,1)},
        {frame: 235, value: _M(.9325,.354,-.0718,0,.3527,-.8494,.3927,0,.078,-.3915,-.9169,0,.2401,.1528,-.0013,1)},
        {frame: 236, value: _M(.9324,.3542,-.072,0,.3527,-.8477,.3963,0,.0793,-.3949,-.9153,0,.2401,.1528,-.0013,1)},
        {frame: 237, value: _M(.9323,.3544,-.0723,0,.3526,-.846,.3998,0,.0806,-.3982,-.9137,0,.2401,.1528,-.0013,1)},
        {frame: 238, value: _M(.9322,.3546,-.0725,0,.3526,-.8445,.4032,0,.0818,-.4014,-.9123,0,.2401,.1528,-.0013,1)},
        {frame: 239, value: _M(.9321,.3548,-.0727,0,.3526,-.843,.4063,0,.0829,-.4043,-.9108,0,.2401,.1528,-.0013,1)},
        {frame: 240, value: _M(.932,.355,-.0729,0,.3525,-.8416,.4092,0,.0839,-.4071,-.9095,0,.2401,.1528,-.0013,1)},
        {frame: 241, value: _M(.932,.3551,-.0731,0,.3525,-.8403,.4118,0,.0849,-.4096,-.9083,0,.2401,.1528,-.0013,1)},
        {frame: 242, value: _M(.9319,.3553,-.0733,0,.3525,-.8392,.4142,0,.0857,-.4118,-.9072,0,.2401,.1528,-.0013,1)},
        {frame: 243, value: _M(.9318,.3554,-.0734,0,.3524,-.8381,.4163,0,.0865,-.4138,-.9062,0,.2401,.1528,-.0013,1)},
        {frame: 244, value: _M(.9318,.3555,-.0735,0,.3524,-.8372,.4182,0,.0871,-.4156,-.9054,0,.2401,.1528,-.0013,1)},
        {frame: 245, value: _M(.9317,.3556,-.0736,0,.3524,-.8364,.4197,0,.0877,-.417,-.9047,0,.2401,.1528,-.0013,1)},
        {frame: 246, value: _M(.9317,.3557,-.0737,0,.3524,-.8358,.4211,0,.0882,-.4183,-.904,0,.2401,.1528,-.0013,1)},
        {frame: 247, value: _M(.9317,.3557,-.0738,0,.3524,-.8353,.422,0,.0885,-.4192,-.9036,0,.2401,.1528,-.0013,1)},
        {frame: 248, value: _M(.9316,.3558,-.0738,0,.3524,-.8349,.4227,0,.0888,-.4199,-.9032,0,.2401,.1528,-.0013,1)},
        {frame: 249, value: _M(.9316,.3558,-.0739,0,.3524,-.8347,.4231,0,.0889,-.4202,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 250, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)},
        {frame: 252, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.L", skeleton,skeleton.bones[28], _M(.9955,.0885,.0336,0,-.0946,.9189,.3829,0,.003,-.3844,.9232,0,0,1.3168,0,1), _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1));
        bone.length = 1.2357;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 1, value: _M(.9955,.0885,.0336,0,-.0938,.8766,.4721,0,.0123,-.4731,.8809,0,0,1.3168,0,1)},
        {frame: 2, value: _M(.9955,.0885,.0336,0,-.0903,.7818,.617,0,.0283,-.6172,.7863,0,0,1.3168,0,1)},
        {frame: 3, value: _M(.9955,.0885,.0336,0,-.0868,.7135,.6953,0,.0376,-.6951,.7179,0,0,1.3168,0,1)},
        {frame: 4, value: _M(.9955,.0885,.0336,0,-.0883,.7405,.6663,0,.0341,-.6662,.745,0,0,1.3168,0,1)},
        {frame: 5, value: _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 6, value: _M(.9955,.0885,.0336,0,-.0941,.8868,.4525,0,.0103,-.4537,.8911,0,0,1.3168,0,1)},
        {frame: 7, value: _M(.9955,.0885,.0336,0,-.0942,.8949,.4363,0,.0086,-.4375,.8992,0,0,1.3168,0,1)},
        {frame: 8, value: _M(.9955,.0885,.0336,0,-.0946,.9428,.3196,0,-.0034,-.3213,.947,0,0,1.3168,0,1)},
        {frame: 9, value: _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 10, value: _M(.9955,.0885,.0336,0,-.0945,.9492,.3003,0,-.0053,-.3021,.9533,0,0,1.3168,0,1)},
        {frame: 11, value: _M(.9955,.0885,.0336,0,-.0473,.1576,.9864,0,.082,-.9835,.1611,0,0,1.3168,0,1)},
        {frame: 12, value: _M(.9955,.0885,.0336,0,-.0444,.124,.9913,0,.0835,-.9883,.1274,0,0,1.3168,0,1)},
        {frame: 13, value: _M(.9955,.0885,.0336,0,-.0435,.1126,.9927,0,.084,-.9897,.1159,0,0,1.3168,0,1)},
        {frame: 14, value: _M(.9955,.0885,.0336,0,-.0434,.1113,.9928,0,.0841,-.9898,.1147,0,0,1.3168,0,1)},
        {frame: 15, value: _M(.9955,.0885,.0336,0,-.0467,.1505,.9875,0,.0823,-.9846,.154,0,0,1.3168,0,1)},
        {frame: 16, value: _M(.9955,.0885,.0336,0,-.0566,.2722,.9606,0,.0758,-.9582,.276,0,0,1.3168,0,1)},
        {frame: 17, value: _M(.9955,.0885,.0336,0,-.0713,.4678,.8809,0,.0622,-.8794,.472,0,0,1.3168,0,1)},
        {frame: 18, value: _M(.9955,.0885,.0336,0,-.0854,.6881,.7206,0,.0406,-.7202,.6926,0,0,1.3168,0,1)},
        {frame: 19, value: _M(.9955,.0885,.0336,0,-.0932,.856,.5085,0,.0162,-.5093,.8604,0,0,1.3168,0,1)},
        {frame: 20, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 30, value: _M(.9955,.0885,.0336,0,-.0946,.9427,.3199,0,-.0033,-.3217,.9469,0,0,1.3168,0,1)},
        {frame: 31, value: _M(.9955,.0885,.0336,0,-.0944,.951,.2943,0,-.0059,-.2961,.9551,0,0,1.3168,0,1)},
        {frame: 32, value: _M(.9955,.0885,.0336,0,-.0931,.8516,.5158,0,.017,-.5166,.856,0,0,1.3168,0,1)},
        {frame: 33, value: _M(.9955,.0885,.0336,0,-.0832,.6499,.7554,0,.045,-.7548,.6544,0,0,1.3168,0,1)},
        {frame: 34, value: _M(.9955,.0885,.0336,0,-.0661,.3969,.9155,0,.0677,-.9136,.401,0,0,1.3168,0,1)},
        {frame: 35, value: _M(.9955,.0885,.0336,0,-.0452,.1334,.99,0,.0831,-.9871,.1368,0,0,1.3168,0,1)},
        {frame: 36, value: _M(.9955,.0885,.0336,0,-.0254,-.092,.9954,0,.0912,-.9918,-.0894,0,0,1.3168,0,1)},
        {frame: 37, value: _M(.9955,.0885,.0336,0,-.0095,-.2595,.9657,0,.0941,-.9617,-.2575,0,0,1.3168,0,1)},
        {frame: 38, value: _M(.9955,.0885,.0336,0,.0045,-.3987,.9171,0,.0945,-.9128,-.3973,0,0,1.3168,0,1)},
        {frame: 39, value: _M(.9955,.0885,.0336,0,.0167,-.5138,.8578,0,.0931,-.8533,-.513,0,0,1.3168,0,1)},
        {frame: 40, value: _M(.9955,.0885,.0336,0,.025,-.5885,.8081,0,.0912,-.8037,-.5881,0,0,1.3168,0,1)},
        {frame: 41, value: _M(.9955,.0885,.0336,0,.0318,-.6471,.7617,0,.0891,-.7573,-.647,0,0,1.3168,0,1)},
        {frame: 42, value: _M(.9955,.0885,.0336,0,.0357,-.6794,.7329,0,.0876,-.7284,-.6795,0,0,1.3168,0,1)},
        {frame: 43, value: _M(.9955,.0885,.0336,0,.0318,-.6467,.7621,0,.0891,-.7576,-.6466,0,0,1.3168,0,1)},
        {frame: 44, value: _M(.9955,.0885,.0336,0,.0235,-.5747,.818,0,.0917,-.8136,-.5742,0,0,1.3168,0,1)},
        {frame: 45, value: _M(.9955,.0885,.0336,0,.0055,-.4083,.9128,0,.0945,-.9085,-.407,0,0,1.3168,0,1)},
        {frame: 46, value: _M(.9955,.0885,.0336,0,-.0423,.099,.9942,0,.0846,-.9912,.1023,0,0,1.3168,0,1)},
        {frame: 47, value: _M(.9955,.0885,.0336,0,-.0863,.7026,.7064,0,.0389,-.7061,.707,0,0,1.3168,0,1)},
        {frame: 48, value: _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 51, value: _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 59, value: _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1)},
        {frame: 61, value: _M(.9955,.0885,.0336,0,-.0302,-.0394,.9988,0,.0897,-.9953,-.0366,0,0,1.3168,0,1)},
        {frame: 62, value: _M(.9955,.0885,.0336,0,-.0008,-.3467,.938,0,.0946,-.9338,-.3451,0,0,1.3168,0,1)},
        {frame: 63, value: _M(.9955,.0885,.0336,0,.0142,-.4904,.8714,0,.0936,-.867,-.4894,0,0,1.3168,0,1)},
        {frame: 64, value: _M(.9955,.0885,.0336,0,.008,-.4321,.9018,0,.0943,-.8975,-.4309,0,0,1.3168,0,1)},
        {frame: 65, value: _M(.9955,.0885,.0336,0,-.016,-.1925,.9812,0,.0933,-.9773,-.1903,0,0,1.3168,0,1)},
        {frame: 66, value: _M(.9955,.0885,.0336,0,-.0497,.1868,.9811,0,.0805,-.9784,.1904,0,0,1.3168,0,1)},
        {frame: 67, value: _M(.9955,.0885,.0336,0,-.0757,.5321,.8433,0,.0567,-.8421,.5364,0,0,1.3168,0,1)},
        {frame: 68, value: _M(.9955,.0885,.0336,0,-.0795,.5894,.8039,0,.0513,-.803,.5938,0,0,1.3168,0,1)},
        {frame: 69, value: _M(.9955,.0885,.0336,0,-.0798,.5935,.8009,0,.0509,-.7999,.5979,0,0,1.3168,0,1)},
        {frame: 70, value: _M(.9955,.0885,.0336,0,-.0899,.7735,.6274,0,.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 71, value: _M(.9955,.0885,.0336,0,-.0816,.6226,.7783,0,.048,-.7776,.627,0,0,1.3168,0,1)},
        {frame: 72, value: _M(.9955,.0885,.0336,0,-.0713,.4685,.8806,0,.0622,-.879,.4727,0,0,1.3168,0,1)},
        {frame: 73, value: _M(.9955,.0885,.0336,0,-.0705,.4568,.8867,0,.0631,-.8851,.461,0,0,1.3168,0,1)},
        {frame: 74, value: _M(.9955,.0885,.0336,0,-.0806,.6071,.7905,0,.0496,-.7897,.6115,0,0,1.3168,0,1)},
        {frame: 75, value: _M(.9955,.0885,.0336,0,-.0916,.8119,.5766,0,.0238,-.5771,.8164,0,0,1.3168,0,1)},
        {frame: 76, value: _M(.9955,.0885,.0336,0,-.0946,.9343,.3437,0,-.001,-.3453,.9385,0,0,1.3168,0,1)},
        {frame: 77, value: _M(.9955,.0885,.0336,0,-.0938,.8755,.474,0,.0125,-.475,.8799,0,0,1.3168,0,1)},
        {frame: 78, value: _M(.9955,.0885,.0336,0,-.0863,.7043,.7047,0,.0387,-.7044,.7087,0,0,1.3168,0,1)},
        {frame: 79, value: _M(.9955,.0885,.0336,0,-.0722,.481,.8737,0,.0611,-.8722,.4853,0,0,1.3168,0,1)},
        {frame: 80, value: _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1)},
        {frame: 83, value: _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1)},
        {frame: 90, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 91, value: _M(.9955,.0885,.0336,0,-.0935,.8668,.4898,0,.0142,-.4908,.8712,0,0,1.3168,0,1)},
        {frame: 92, value: _M(.9955,.0885,.0336,0,-.088,.7355,.6717,0,.0347,-.6717,.74,0,0,1.3168,0,1)},
        {frame: 93, value: _M(.9955,.0885,.0336,0,-.0793,.586,.8065,0,.0517,-.8055,.5903,0,0,1.3168,0,1)},
        {frame: 94, value: _M(.9955,.0885,.0336,0,-.0724,.4836,.8723,0,.0609,-.8708,.4878,0,0,1.3168,0,1)},
        {frame: 95, value: _M(.9955,.0885,.0336,0,-.0699,.4487,.8909,0,.0638,-.8893,.4529,0,0,1.3168,0,1)},
        {frame: 96, value: _M(.9955,.0885,.0336,0,-.0698,.4474,.8916,0,.0639,-.8899,.4516,0,0,1.3168,0,1)},
        {frame: 97, value: _M(.9955,.0885,.0336,0,-.0699,.4486,.891,0,.0638,-.8894,.4527,0,0,1.3168,0,1)},
        {frame: 98, value: _M(.9955,.0885,.0336,0,-.0733,.4971,.8646,0,.0598,-.8631,.5014,0,0,1.3168,0,1)},
        {frame: 99, value: _M(.9955,.0885,.0336,0,-.0747,.517,.8527,0,.0581,-.8514,.5213,0,0,1.3168,0,1)},
        {frame: 100, value: _M(.9955,.0885,.0336,0,-.0753,.5263,.847,0,.0573,-.8457,.5306,0,0,1.3168,0,1)},
        {frame: 101, value: _M(.9955,.0885,.0336,0,-.0757,.5315,.8437,0,.0568,-.8424,.5358,0,0,1.3168,0,1)},
        {frame: 102, value: _M(.9955,.0885,.0336,0,-.0772,.5535,.8293,0,.0548,-.8281,.5578,0,0,1.3168,0,1)},
        {frame: 103, value: _M(.9955,.0885,.0336,0,-.0805,.605,.7922,0,.0498,-.7913,.6094,0,0,1.3168,0,1)},
        {frame: 104, value: _M(.9955,.0885,.0336,0,-.085,.6811,.7273,0,.0415,-.7269,.6855,0,0,1.3168,0,1)},
        {frame: 105, value: _M(.9955,.0885,.0336,0,-.0896,.7682,.6339,0,.0303,-.6341,.7727,0,0,1.3168,0,1)},
        {frame: 106, value: _M(.9955,.0885,.0336,0,-.0929,.8465,.5242,0,.018,-.525,.8509,0,0,1.3168,0,1)},
        {frame: 107, value: _M(.9955,.0885,.0336,0,-.0943,.8988,.4281,0,.0077,-.4293,.9031,0,0,1.3168,0,1)},
        {frame: 108, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 120, value: _M(.9955,.0885,.0336,0,-.0936,.8676,.4884,0,.0141,-.4893,.872,0,0,1.3168,0,1)},
        {frame: 121, value: _M(.9955,.0885,.0336,0,-.0936,.8677,.4882,0,.0141,-.4892,.8721,0,0,1.3168,0,1)},
        {frame: 122, value: _M(.9955,.0885,.0336,0,-.0936,.8679,.4878,0,.014,-.4887,.8723,0,0,1.3168,0,1)},
        {frame: 123, value: _M(.9955,.0885,.0336,0,-.0936,.8684,.487,0,.0139,-.488,.8728,0,0,1.3168,0,1)},
        {frame: 124, value: _M(.9955,.0885,.0336,0,-.0936,.8691,.4858,0,.0138,-.4867,.8734,0,0,1.3168,0,1)},
        {frame: 125, value: _M(.9955,.0885,.0336,0,-.0936,.8698,.4844,0,.0136,-.4853,.8742,0,0,1.3168,0,1)},
        {frame: 126, value: _M(.9955,.0885,.0336,0,-.0937,.8708,.4827,0,.0135,-.4837,.8752,0,0,1.3168,0,1)},
        {frame: 127, value: _M(.9955,.0885,.0336,0,-.0937,.8719,.4807,0,.0133,-.4817,.8762,0,0,1.3168,0,1)},
        {frame: 128, value: _M(.9955,.0885,.0336,0,-.0937,.8731,.4784,0,.013,-.4794,.8775,0,0,1.3168,0,1)},
        {frame: 129, value: _M(.9955,.0885,.0336,0,-.0938,.8745,.4758,0,.0127,-.4768,.8789,0,0,1.3168,0,1)},
        {frame: 130, value: _M(.9955,.0885,.0336,0,-.0938,.8761,.473,0,.0124,-.474,.8804,0,0,1.3168,0,1)},
        {frame: 131, value: _M(.9955,.0885,.0336,0,-.0938,.8777,.4699,0,.0121,-.471,.8821,0,0,1.3168,0,1)},
        {frame: 132, value: _M(.9955,.0885,.0336,0,-.0939,.8794,.4667,0,.0118,-.4677,.8838,0,0,1.3168,0,1)},
        {frame: 133, value: _M(.9955,.0885,.0336,0,-.0939,.8812,.4632,0,.0114,-.4643,.8856,0,0,1.3168,0,1)},
        {frame: 134, value: _M(.9955,.0885,.0336,0,-.094,.8831,.4596,0,.011,-.4607,.8875,0,0,1.3168,0,1)},
        {frame: 135, value: _M(.9955,.0885,.0336,0,-.094,.885,.456,0,.0106,-.4571,.8894,0,0,1.3168,0,1)},
        {frame: 136, value: _M(.9955,.0885,.0336,0,-.0941,.8869,.4522,0,.0102,-.4534,.8913,0,0,1.3168,0,1)},
        {frame: 137, value: _M(.9955,.0885,.0336,0,-.0941,.8888,.4485,0,.0098,-.4497,.8931,0,0,1.3168,0,1)},
        {frame: 138, value: _M(.9955,.0885,.0336,0,-.0941,.8906,.4449,0,.0095,-.446,.895,0,0,1.3168,0,1)},
        {frame: 139, value: _M(.9955,.0885,.0336,0,-.0942,.8924,.4413,0,.0091,-.4425,.8967,0,0,1.3168,0,1)},
        {frame: 140, value: _M(.9955,.0885,.0336,0,-.0942,.894,.438,0,.0087,-.4392,.8984,0,0,1.3168,0,1)},
        {frame: 141, value: _M(.9955,.0885,.0336,0,-.0942,.8956,.4348,0,.0084,-.436,.8999,0,0,1.3168,0,1)},
        {frame: 142, value: _M(.9955,.0885,.0336,0,-.0943,.897,.4319,0,.0081,-.4331,.9013,0,0,1.3168,0,1)},
        {frame: 143, value: _M(.9955,.0885,.0336,0,-.0943,.8983,.429,0,.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 144, value: _M(.9955,.0885,.0336,0,-.0943,.8995,.4267,0,.0076,-.428,.9038,0,0,1.3168,0,1)},
        {frame: 145, value: _M(.9955,.0885,.0336,0,-.0943,.9004,.4247,0,.0073,-.426,.9047,0,0,1.3168,0,1)},
        {frame: 146, value: _M(.9955,.0885,.0336,0,-.0944,.9012,.4231,0,.0072,-.4243,.9055,0,0,1.3168,0,1)},
        {frame: 147, value: _M(.9955,.0885,.0336,0,-.0944,.9018,.4218,0,.007,-.423,.9061,0,0,1.3168,0,1)},
        {frame: 148, value: _M(.9955,.0885,.0336,0,-.0944,.9022,.4208,0,.0069,-.4221,.9065,0,0,1.3168,0,1)},
        {frame: 149, value: _M(.9955,.0885,.0336,0,-.0944,.9025,.4203,0,.0069,-.4216,.9068,0,0,1.3168,0,1)},
        {frame: 150, value: _M(.9955,.0885,.0336,0,-.0944,.9026,.4201,0,.0069,-.4214,.9069,0,0,1.3168,0,1)},
        {frame: 151, value: _M(.9955,.0885,.0336,0,-.0944,.9025,.4203,0,.0069,-.4216,.9068,0,0,1.3168,0,1)},
        {frame: 152, value: _M(.9955,.0885,.0336,0,-.0944,.9022,.4208,0,.0069,-.4221,.9065,0,0,1.3168,0,1)},
        {frame: 153, value: _M(.9955,.0885,.0336,0,-.0944,.9018,.4218,0,.007,-.423,.9061,0,0,1.3168,0,1)},
        {frame: 154, value: _M(.9955,.0885,.0336,0,-.0944,.9012,.4231,0,.0072,-.4243,.9055,0,0,1.3168,0,1)},
        {frame: 155, value: _M(.9955,.0885,.0336,0,-.0943,.9004,.4247,0,.0073,-.426,.9047,0,0,1.3168,0,1)},
        {frame: 156, value: _M(.9955,.0885,.0336,0,-.0943,.8995,.4267,0,.0076,-.428,.9038,0,0,1.3168,0,1)},
        {frame: 157, value: _M(.9955,.0885,.0336,0,-.0943,.8983,.429,0,.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 158, value: _M(.9955,.0885,.0336,0,-.0943,.897,.4319,0,.0081,-.4331,.9013,0,0,1.3168,0,1)},
        {frame: 159, value: _M(.9955,.0885,.0336,0,-.0942,.8956,.4348,0,.0084,-.436,.8999,0,0,1.3168,0,1)},
        {frame: 160, value: _M(.9955,.0885,.0336,0,-.0942,.894,.438,0,.0087,-.4392,.8984,0,0,1.3168,0,1)},
        {frame: 161, value: _M(.9955,.0885,.0336,0,-.0942,.8924,.4413,0,.0091,-.4425,.8967,0,0,1.3168,0,1)},
        {frame: 162, value: _M(.9955,.0885,.0336,0,-.0941,.8906,.4449,0,.0095,-.446,.895,0,0,1.3168,0,1)},
        {frame: 163, value: _M(.9955,.0885,.0336,0,-.0941,.8888,.4485,0,.0098,-.4497,.8931,0,0,1.3168,0,1)},
        {frame: 164, value: _M(.9955,.0885,.0336,0,-.0941,.8869,.4522,0,.0102,-.4534,.8913,0,0,1.3168,0,1)},
        {frame: 165, value: _M(.9955,.0885,.0336,0,-.094,.885,.456,0,.0106,-.4571,.8894,0,0,1.3168,0,1)},
        {frame: 166, value: _M(.9955,.0885,.0336,0,-.094,.8831,.4596,0,.011,-.4607,.8875,0,0,1.3168,0,1)},
        {frame: 167, value: _M(.9955,.0885,.0336,0,-.0939,.8812,.4632,0,.0114,-.4643,.8856,0,0,1.3168,0,1)},
        {frame: 168, value: _M(.9955,.0885,.0336,0,-.0939,.8794,.4667,0,.0118,-.4677,.8838,0,0,1.3168,0,1)},
        {frame: 169, value: _M(.9955,.0885,.0336,0,-.0938,.8777,.4699,0,.0121,-.471,.8821,0,0,1.3168,0,1)},
        {frame: 170, value: _M(.9955,.0885,.0336,0,-.0938,.8761,.473,0,.0124,-.474,.8804,0,0,1.3168,0,1)},
        {frame: 171, value: _M(.9955,.0885,.0336,0,-.0938,.8745,.4758,0,.0127,-.4768,.8789,0,0,1.3168,0,1)},
        {frame: 172, value: _M(.9955,.0885,.0336,0,-.0937,.8731,.4784,0,.013,-.4794,.8775,0,0,1.3168,0,1)},
        {frame: 173, value: _M(.9955,.0885,.0336,0,-.0937,.8719,.4807,0,.0133,-.4817,.8762,0,0,1.3168,0,1)},
        {frame: 174, value: _M(.9955,.0885,.0336,0,-.0937,.8708,.4827,0,.0135,-.4837,.8752,0,0,1.3168,0,1)},
        {frame: 175, value: _M(.9955,.0885,.0336,0,-.0936,.8698,.4844,0,.0136,-.4853,.8742,0,0,1.3168,0,1)},
        {frame: 176, value: _M(.9955,.0885,.0336,0,-.0936,.8691,.4858,0,.0138,-.4867,.8734,0,0,1.3168,0,1)},
        {frame: 177, value: _M(.9955,.0885,.0336,0,-.0936,.8684,.487,0,.0139,-.488,.8728,0,0,1.3168,0,1)},
        {frame: 178, value: _M(.9955,.0885,.0336,0,-.0936,.8679,.4878,0,.014,-.4887,.8723,0,0,1.3168,0,1)},
        {frame: 179, value: _M(.9955,.0885,.0336,0,-.0936,.8677,.4882,0,.0141,-.4892,.8721,0,0,1.3168,0,1)},
        {frame: 180, value: _M(.9955,.0885,.0336,0,-.0936,.8676,.4884,0,.0141,-.4893,.872,0,0,1.3168,0,1)},
        {frame: 190, value: _M(.9955,.0885,.0336,0,-.0946,.9165,.3887,0,.0036,-.3901,.9208,0,0,1.3168,0,1)},
        {frame: 191, value: _M(.9955,.0885,.0336,0,-.0946,.9167,.3883,0,.0036,-.3898,.9209,0,0,1.3168,0,1)},
        {frame: 192, value: _M(.9955,.0885,.0336,0,-.0946,.9171,.3873,0,.0035,-.3887,.9213,0,0,1.3168,0,1)},
        {frame: 193, value: _M(.9955,.0885,.0336,0,-.0946,.9178,.3855,0,.0033,-.387,.9221,0,0,1.3168,0,1)},
        {frame: 194, value: _M(.9955,.0885,.0336,0,-.0946,.9189,.3829,0,.003,-.3844,.9232,0,0,1.3168,0,1)},
        {frame: 195, value: _M(.9955,.0885,.0336,0,-.0946,.9204,.3795,0,.0027,-.381,.9246,0,0,1.3168,0,1)},
        {frame: 196, value: _M(.9955,.0885,.0336,0,-.0946,.9219,.3756,0,.0023,-.3771,.9262,0,0,1.3168,0,1)},
        {frame: 197, value: _M(.9955,.0885,.0336,0,-.0946,.9237,.3713,0,.0018,-.3728,.9279,0,0,1.3168,0,1)},
        {frame: 198, value: _M(.9955,.0885,.0336,0,-.0946,.9255,.3667,0,.0014,-.3683,.9297,0,0,1.3168,0,1)},
        {frame: 199, value: _M(.9955,.0885,.0336,0,-.0946,.9273,.3622,0,.0009,-.3637,.9315,0,0,1.3168,0,1)},
        {frame: 200, value: _M(.9955,.0885,.0336,0,-.0946,.929,.3577,0,.0005,-.3593,.9332,0,0,1.3168,0,1)},
        {frame: 201, value: _M(.9955,.0885,.0336,0,-.0946,.9306,.3535,0,0,-.3551,.9348,0,0,1.3168,0,1)},
        {frame: 202, value: _M(.9955,.0885,.0336,0,-.0946,.9323,.3492,0,-.0004,-.3508,.9365,0,0,1.3168,0,1)},
        {frame: 203, value: _M(.9955,.0885,.0336,0,-.0946,.9341,.3442,0,-.0009,-.3458,.9383,0,0,1.3168,0,1)},
        {frame: 204, value: _M(.9955,.0885,.0336,0,-.0946,.9362,.3386,0,-.0015,-.3402,.9403,0,0,1.3168,0,1)},
        {frame: 205, value: _M(.9955,.0885,.0336,0,-.0946,.9384,.3323,0,-.0021,-.334,.9426,0,0,1.3168,0,1)},
        {frame: 206, value: _M(.9955,.0885,.0336,0,-.0946,.9408,.3255,0,-.0028,-.3273,.9449,0,0,1.3168,0,1)},
        {frame: 207, value: _M(.9955,.0885,.0336,0,-.0946,.9433,.3182,0,-.0035,-.32,.9474,0,0,1.3168,0,1)},
        {frame: 208, value: _M(.9955,.0885,.0336,0,-.0945,.9459,.3105,0,-.0043,-.3122,.95,0,0,1.3168,0,1)},
        {frame: 209, value: _M(.9955,.0885,.0336,0,-.0945,.9485,.3024,0,-.0051,-.3042,.9526,0,0,1.3168,0,1)},
        {frame: 210, value: _M(.9955,.0885,.0336,0,-.0944,.9511,.2941,0,-.0059,-.296,.9552,0,0,1.3168,0,1)},
        {frame: 211, value: _M(.9955,.0885,.0336,0,-.0944,.9536,.2859,0,-.0067,-.2878,.9577,0,0,1.3168,0,1)},
        {frame: 212, value: _M(.9955,.0885,.0336,0,-.0943,.956,.2779,0,-.0075,-.2798,.96,0,0,1.3168,0,1)},
        {frame: 213, value: _M(.9955,.0885,.0336,0,-.0943,.9582,.2703,0,-.0083,-.2722,.9622,0,0,1.3168,0,1)},
        {frame: 214, value: _M(.9955,.0885,.0336,0,-.0942,.9601,.2633,0,-.0089,-.2653,.9641,0,0,1.3168,0,1)},
        {frame: 215, value: _M(.9955,.0885,.0336,0,-.0941,.9618,.2572,0,-.0095,-.2592,.9658,0,0,1.3168,0,1)},
        {frame: 216, value: _M(.9955,.0885,.0336,0,-.0941,.9631,.2521,0,-.01,-.2541,.9671,0,0,1.3168,0,1)},
        {frame: 217, value: _M(.9955,.0885,.0336,0,-.094,.9642,.248,0,-.0104,-.25,.9682,0,0,1.3168,0,1)},
        {frame: 218, value: _M(.9955,.0885,.0336,0,-.094,.9649,.2451,0,-.0107,-.2471,.9689,0,0,1.3168,0,1)},
        {frame: 219, value: _M(.9955,.0885,.0336,0,-.094,.9654,.2434,0,-.0109,-.2454,.9694,0,0,1.3168,0,1)},
        {frame: 220, value: _M(.9955,.0885,.0336,0,-.094,.9655,.2428,0,-.0109,-.2449,.9695,0,0,1.3168,0,1)},
        {frame: 221, value: _M(.9955,.0885,.0336,0,-.094,.9654,.2433,0,-.0109,-.2453,.9694,0,0,1.3168,0,1)},
        {frame: 222, value: _M(.9955,.0885,.0336,0,-.094,.965,.2447,0,-.0108,-.2467,.969,0,0,1.3168,0,1)},
        {frame: 223, value: _M(.9955,.0885,.0336,0,-.094,.9644,.2471,0,-.0105,-.2491,.9684,0,0,1.3168,0,1)},
        {frame: 224, value: _M(.9955,.0885,.0336,0,-.0941,.9636,.2504,0,-.0102,-.2524,.9676,0,0,1.3168,0,1)},
        {frame: 225, value: _M(.9955,.0885,.0336,0,-.0941,.9625,.2545,0,-.0098,-.2565,.9665,0,0,1.3168,0,1)},
        {frame: 226, value: _M(.9955,.0885,.0336,0,-.0942,.9611,.2595,0,-.0093,-.2615,.9652,0,0,1.3168,0,1)},
        {frame: 227, value: _M(.9955,.0885,.0336,0,-.0942,.9596,.2652,0,-.0088,-.2672,.9636,0,0,1.3168,0,1)},
        {frame: 228, value: _M(.9955,.0885,.0336,0,-.0943,.9578,.2716,0,-.0081,-.2735,.9618,0,0,1.3168,0,1)},
        {frame: 229, value: _M(.9955,.0885,.0336,0,-.0943,.9558,.2784,0,-.0075,-.2804,.9599,0,0,1.3168,0,1)},
        {frame: 230, value: _M(.9955,.0885,.0336,0,-.0944,.9536,.2858,0,-.0067,-.2876,.9577,0,0,1.3168,0,1)},
        {frame: 231, value: _M(.9955,.0885,.0336,0,-.0944,.9513,.2934,0,-.006,-.2953,.9554,0,0,1.3168,0,1)},
        {frame: 232, value: _M(.9955,.0885,.0336,0,-.0945,.9489,.3013,0,-.0052,-.3031,.953,0,0,1.3168,0,1)},
        {frame: 233, value: _M(.9955,.0885,.0336,0,-.0945,.9463,.3092,0,-.0044,-.311,.9504,0,0,1.3168,0,1)},
        {frame: 234, value: _M(.9955,.0885,.0336,0,-.0946,.9437,.3171,0,-.0036,-.3189,.9478,0,0,1.3168,0,1)},
        {frame: 235, value: _M(.9955,.0885,.0336,0,-.0946,.941,.3249,0,-.0028,-.3267,.9451,0,0,1.3168,0,1)},
        {frame: 236, value: _M(.9955,.0885,.0336,0,-.0946,.9383,.3326,0,-.0021,-.3342,.9425,0,0,1.3168,0,1)},
        {frame: 237, value: _M(.9955,.0885,.0336,0,-.0946,.9357,.3399,0,-.0013,-.3415,.9399,0,0,1.3168,0,1)},
        {frame: 238, value: _M(.9955,.0885,.0336,0,-.0946,.9331,.3468,0,-.0006,-.3484,.9373,0,0,1.3168,0,1)},
        {frame: 239, value: _M(.9955,.0885,.0336,0,-.0946,.9307,.3533,0,0,-.3549,.9349,0,0,1.3168,0,1)},
        {frame: 240, value: _M(.9955,.0885,.0336,0,-.0946,.9284,.3593,0,.0006,-.3609,.9326,0,0,1.3168,0,1)},
        {frame: 241, value: _M(.9955,.0885,.0336,0,-.0946,.9263,.3648,0,.0012,-.3663,.9305,0,0,1.3168,0,1)},
        {frame: 242, value: _M(.9955,.0885,.0336,0,-.0946,.9243,.3697,0,.0017,-.3712,.9285,0,0,1.3168,0,1)},
        {frame: 243, value: _M(.9955,.0885,.0336,0,-.0946,.9226,.3741,0,.0021,-.3756,.9268,0,0,1.3168,0,1)},
        {frame: 244, value: _M(.9955,.0885,.0336,0,-.0946,.921,.3779,0,.0025,-.3793,.9253,0,0,1.3168,0,1)},
        {frame: 245, value: _M(.9955,.0885,.0336,0,-.0946,.9197,.381,0,.0028,-.3825,.924,0,0,1.3168,0,1)},
        {frame: 246, value: _M(.9955,.0885,.0336,0,-.0946,.9186,.3838,0,.0031,-.3853,.9228,0,0,1.3168,0,1)},
        {frame: 247, value: _M(.9955,.0885,.0336,0,-.0946,.9177,.3858,0,.0033,-.3873,.922,0,0,1.3168,0,1)},
        {frame: 248, value: _M(.9955,.0885,.0336,0,-.0946,.9171,.3872,0,.0035,-.3887,.9214,0,0,1.3168,0,1)},
        {frame: 249, value: _M(.9955,.0885,.0336,0,-.0946,.9168,.3881,0,.0036,-.3895,.921,0,0,1.3168,0,1)},
        {frame: 250, value: _M(.9955,.0885,.0336,0,-.0946,.9166,.3884,0,.0036,-.3898,.9209,0,0,1.3168,0,1)},
        {frame: 252, value: _M(.9955,.0885,.0336,0,-.0946,.9166,.3884,0,.0036,-.3898,.9209,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.R", skeleton,skeleton.bones[5], _M(.9293,-.369,.0134,0,-.3689,-.9262,.0781,0,-.0164,-.0776,-.9969,0,-.2401,.1528,-.0013,1), _M(.9969,-.0775,.0101,0,-.0781,-.9839,.1607,0,-.0025,-.161,-.9869,0,-.2401,.1528,-.0013,1));
        bone.length = 1.3168;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 1, value: _M(.9269,-.3748,.0175,0,-.3733,-.9163,.1452,0,-.0383,-.1411,-.9893,0,-.2401,.1528,-.0013,1)},
        {frame: 2, value: _M(.9202,-.3905,.0287,0,-.3824,-.8803,.2808,0,-.0843,-.2694,-.9593,0,-.2401,.1528,-.0013,1)},
        {frame: 3, value: _M(.9125,-.4063,.0467,0,-.3864,-.8192,.4238,0,-.134,-.4048,-.9045,0,-.2401,.1528,-.0013,1)},
        {frame: 4, value: _M(.9126,-.4033,.067,0,-.3737,-.7564,.5369,0,-.1659,-.515,-.841,0,-.2401,.1528,-.0013,1)},
        {frame: 5, value: _M(.9171,-.3923,.0708,0,-.3841,-.8221,.4204,0,-.1067,-.4127,-.9046,0,-.2401,.1528,-.0013,1)},
        {frame: 6, value: _M(.8858,-.4575,.0776,0,-.4328,-.7543,.4936,0,-.1672,-.4708,-.8662,0,-.2401,.1528,-.0013,1)},
        {frame: 7, value: _M(.8903,-.4486,.0787,0,-.4215,-.746,.5156,0,-.1726,-.4922,-.8532,0,-.2401,.1528,-.0013,1)},
        {frame: 8, value: _M(.8932,-.4427,.0788,0,-.4158,-.7465,.5194,0,-.1711,-.4968,-.8509,0,-.2401,.1528,-.0013,1)},
        {frame: 9, value: _M(.898,-.4389,.0307,0,-.4253,-.8479,.3164,0,-.1128,-.2972,-.9481,0,-.2401,.1528,-.0013,1)},
        {frame: 10, value: _M(.9526,-.3043,-.0004,0,-.3032,-.9494,.0823,0,-.0254,-.0783,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 11, value: _M(.9436,-.331,.0131,0,-.3175,-.8924,.3208,0,-.0945,-.3069,-.9471,0,-.2401,.1528,-.0013,1)},
        {frame: 12, value: _M(.9462,-.3235,.004,0,-.3147,-.9178,.2421,0,-.0747,-.2303,-.9702,0,-.2401,.1528,-.0013,1)},
        {frame: 13, value: _M(.9473,-.3202,.0003,0,-.3133,-.9266,.2079,0,-.0663,-.197,-.9782,0,-.2401,.1528,-.0013,1)},
        {frame: 14, value: _M(.9475,-.3198,-.0001,0,-.3131,-.9276,.2038,0,-.0653,-.193,-.979,0,-.2401,.1528,-.0013,1)},
        {frame: 15, value: _M(.9447,-.328,.001,0,-.3209,-.9235,.2101,0,-.068,-.1988,-.9777,0,-.2401,.1528,-.0013,1)},
        {frame: 16, value: _M(.9375,-.3478,.0048,0,-.3401,-.9138,.222,0,-.0728,-.2098,-.975,0,-.2401,.1528,-.0013,1)},
        {frame: 17, value: _M(.9306,-.3659,.0102,0,-.3591,-.9073,.2187,0,-.0708,-.2072,-.9757,0,-.2401,.1528,-.0013,1)},
        {frame: 18, value: _M(.9279,-.3726,.014,0,-.3688,-.9117,.181,0,-.0547,-.1731,-.9834,0,-.2401,.1528,-.0013,1)},
        {frame: 19, value: _M(.9285,-.3711,.0143,0,-.3701,-.9215,.1181,0,-.0306,-.1149,-.9929,0,-.2401,.1528,-.0013,1)},
        {frame: 20, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 30, value: _M(.9308,-.365,.0179,0,-.3645,-.9238,.1172,0,-.0263,-.1156,-.9929,0,-.2401,.1528,-.0013,1)},
        {frame: 31, value: _M(.9121,-.4099,-.0112,0,-.4098,-.9121,.0106,0,-.0145,-.0051,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 32, value: _M(.8853,-.4628,-.0459,0,-.4638,-.8858,-.0139,0,-.0342,.0336,-.9989,0,-.2401,.1528,-.0013,1)},
        {frame: 33, value: _M(.878,-.4771,-.0389,0,-.4692,-.8738,.1277,0,-.0949,-.0938,-.9911,0,-.2401,.1528,-.0013,1)},
        {frame: 34, value: _M(.8703,-.4918,-.0257,0,-.4639,-.8362,.2923,0,-.1653,-.2425,-.956,0,-.2401,.1528,-.0013,1)},
        {frame: 35, value: _M(.8599,-.5104,-.0104,0,-.4513,-.7696,.4516,0,-.2385,-.3836,-.8922,0,-.2401,.1528,-.0013,1)},
        {frame: 36, value: _M(.8441,-.5362,.0011,0,-.4401,-.6916,.5728,0,-.3064,-.4839,-.8197,0,-.2401,.1528,-.0013,1)},
        {frame: 37, value: _M(.8223,-.569,.0052,0,-.4371,-.6258,.646,0,-.3643,-.5335,-.7633,0,-.2401,.1528,-.0013,1)},
        {frame: 38, value: _M(.7908,-.6121,.0049,0,-.4398,-.5625,.7001,0,-.4258,-.5558,-.714,0,-.2401,.1528,-.0013,1)},
        {frame: 39, value: _M(.7486,-.663,-.0066,0,-.4575,-.5238,.7186,0,-.4799,-.5349,-.6954,0,-.2401,.1528,-.0013,1)},
        {frame: 40, value: _M(.7244,-.6883,-.0397,0,-.4998,-.5639,.6574,0,-.4749,-.4564,-.7525,0,-.2401,.1528,-.0013,1)},
        {frame: 41, value: _M(.7221,-.6859,-.0901,0,-.5582,-.6546,.5098,0,-.4087,-.3178,-.8556,0,-.2401,.1528,-.0013,1)},
        {frame: 42, value: _M(.7323,-.6646,-.1484,0,-.6149,-.739,.2754,0,-.2927,-.1104,-.9498,0,-.2401,.1528,-.0013,1)},
        {frame: 43, value: _M(.7466,-.6363,-.1944,0,-.6456,-.7634,.0192,0,-.1606,.1112,-.9807,0,-.2401,.1528,-.0013,1)},
        {frame: 44, value: _M(.7563,-.6141,-.2254,0,-.6524,-.7333,-.1914,0,-.0477,.2919,-.9553,0,-.2401,.1528,-.0013,1)},
        {frame: 45, value: _M(.8053,-.562,-.1887,0,-.5927,-.7574,-.2739,0,.011,.3325,-.9431,0,-.2401,.1528,-.0013,1)},
        {frame: 46, value: _M(.8891,-.4518,-.0725,0,-.4576,-.8764,-.15,0,.0042,.1665,-.986,0,-.2401,.1528,-.0013,1)},
        {frame: 47, value: _M(.9292,-.3694,-.0099,0,-.369,-.9261,-.0781,0,.0197,.0762,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 48, value: _M(.9399,-.3414,.0091,0,-.3414,-.9399,-.007,0,.0109,.0035,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 51, value: _M(.9399,-.3414,.0091,0,-.3414,-.9399,-.007,0,.0109,.0035,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 59, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 61, value: _M(.9997,-.0075,.0233,0,-.023,-.6114,.791,0,.0084,-.7913,-.6114,0,-.2401,.1528,-.0013,1)},
        {frame: 62, value: _M(.9996,-.0114,.0261,0,-.0268,-.6788,.7338,0,.0094,-.7343,-.6788,0,-.2401,.1528,-.0013,1)},
        {frame: 63, value: _M(.9995,-.0201,.0261,0,-.032,-.7799,.6251,0,.0078,-.6256,-.7801,0,-.2401,.1528,-.0013,1)},
        {frame: 64, value: _M(.9992,-.035,.0201,0,-.0401,-.9115,.4093,0,.004,-.4098,-.9122,0,-.2401,.1528,-.0013,1)},
        {frame: 65, value: _M(.9989,-.0466,.0099,0,-.0476,-.9872,.1525,0,.0027,-.1528,-.9883,0,-.2401,.1528,-.0013,1)},
        {frame: 66, value: _M(.9985,-.0539,.0013,0,-.0538,-.9971,-.0545,0,.0042,.0543,-.9985,0,-.2401,.1528,-.0013,1)},
        {frame: 67, value: _M(.9981,-.062,.0013,0,-.0618,-.9964,-.0576,0,.0049,.0574,-.9983,0,-.2401,.1528,-.0013,1)},
        {frame: 68, value: _M(.9977,-.0675,.0032,0,-.0673,-.9974,-.0256,0,.0049,.0253,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 69, value: _M(.9976,-.0696,.0048,0,-.0695,-.9975,-.0159,0,.0059,.0155,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 70, value: _M(.9975,-.0695,.0095,0,-.0697,-.9973,.0222,0,.0079,-.0228,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 71, value: _M(.9979,-.0618,.0201,0,-.0643,-.9841,.1656,0,.0096,-.1666,-.986,0,-.2401,.1528,-.0013,1)},
        {frame: 72, value: _M(.9985,-.0427,.0335,0,-.0523,-.9205,.3871,0,.0143,-.3883,-.9214,0,-.2401,.1528,-.0013,1)},
        {frame: 73, value: _M(.9991,-.0148,.0395,0,-.0372,-.7486,.6619,0,.0198,-.6628,-.7485,0,-.2401,.1528,-.0013,1)},
        {frame: 74, value: _M(.9995,0,.033,0,-.0287,-.4907,.8709,0,.0162,-.8713,-.4904,0,-.2401,.1528,-.0013,1)},
        {frame: 75, value: _M(.9995,-.0056,.0316,0,-.0314,-.3761,.926,0,.0066,-.9266,-.3761,0,-.2401,.1528,-.0013,1)},
        {frame: 76, value: _M(.9993,-.0169,.0334,0,-.0374,-.4267,.9036,0,-.001,-.9042,-.4271,0,-.2401,.1528,-.0013,1)},
        {frame: 77, value: _M(.9992,-.023,.0315,0,-.0389,-.5247,.8504,0,-.0031,-.851,-.5252,0,-.2401,.1528,-.0013,1)},
        {frame: 78, value: _M(.9994,-.0176,.0298,0,-.0346,-.4944,.8686,0,-.0005,-.8691,-.4947,0,-.2401,.1528,-.0013,1)},
        {frame: 79, value: _M(.9996,-.0091,.0273,0,-.0284,-.4583,.8884,0,.0044,-.8888,-.4584,0,-.2401,.1528,-.0013,1)},
        {frame: 80, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 83, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
        {frame: 90, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 91, value: _M(.9242,-.3816,.0148,0,-.3802,-.9156,.1308,0,-.0364,-.1265,-.9913,0,-.2401,.1528,-.0013,1)},
        {frame: 92, value: _M(.9076,-.4195,.0158,0,-.4127,-.8847,.2168,0,-.077,-.2032,-.9761,0,-.2401,.1528,-.0013,1)},
        {frame: 93, value: _M(.8781,-.4781,.0164,0,-.4616,-.8377,.2918,0,-.1258,-.2638,-.9564,0,-.2401,.1528,-.0013,1)},
        {frame: 94, value: _M(.8444,-.5352,.0224,0,-.5069,-.7848,.3567,0,-.1733,-.3125,-.934,0,-.2401,.1528,-.0013,1)},
        {frame: 95, value: _M(.8244,-.5647,.0376,0,-.5263,-.7406,.4177,0,-.2081,-.3641,-.9078,0,-.2401,.1528,-.0013,1)},
        {frame: 96, value: _M(.8164,-.5738,.065,0,-.5246,-.6898,.4989,0,-.2414,-.4414,-.8642,0,-.2401,.1528,-.0013,1)},
        {frame: 97, value: _M(.8154,-.5732,.0814,0,-.518,-.6596,.5446,0,-.2584,-.4862,-.8348,0,-.2401,.1528,-.0013,1)},
        {frame: 98, value: _M(.8451,-.534,-.0237,0,-.5339,-.8411,-.0863,0,.0262,.0856,-.996,0,-.2401,.1528,-.0013,1)},
        {frame: 99, value: _M(.8495,-.5274,-.0147,0,-.5276,-.8495,-.0097,0,-.0074,.016,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 100, value: _M(.8515,-.5242,-.0112,0,-.524,-.8515,.0182,0,-.0191,-.0096,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 101, value: _M(.8527,-.5224,-.0094,0,-.5219,-.8524,.0324,0,-.025,-.0227,-.9994,0,-.2401,.1528,-.0013,1)},
        {frame: 102, value: _M(.8588,-.5123,-.0061,0,-.5113,-.8577,.0537,0,-.0328,-.043,-.9985,0,-.2401,.1528,-.0013,1)},
        {frame: 103, value: _M(.8729,-.488,-.0015,0,-.4865,-.8704,.0763,0,-.0385,-.0658,-.9971,0,-.2401,.1528,-.0013,1)},
        {frame: 104, value: _M(.891,-.454,.0039,0,-.4523,-.8868,.0943,0,-.0394,-.0858,-.9955,0,-.2401,.1528,-.0013,1)},
        {frame: 105, value: _M(.908,-.419,.0086,0,-.4176,-.9029,.1022,0,-.035,-.0964,-.9947,0,-.2401,.1528,-.0013,1)},
        {frame: 106, value: _M(.9202,-.3912,.0117,0,-.3904,-.9154,.0979,0,-.0275,-.0946,-.9951,0,-.2401,.1528,-.0013,1)},
        {frame: 107, value: _M(.9271,-.3746,.0132,0,-.3742,-.9232,.0872,0,-.0205,-.0858,-.9961,0,-.2401,.1528,-.0013,1)},
        {frame: 108, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 120, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2653,0,-.0204,-.2653,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 121, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2652,0,-.0204,-.2652,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 122, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.265,0,-.0204,-.265,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 123, value: _M(.9886,-.1492,.0201,0,-.1491,-.9528,.2646,0,-.0203,-.2646,-.9642,0,-.2401,.1528,-.0013,1)},
        {frame: 124, value: _M(.9886,-.1491,.0201,0,-.1491,-.9529,.264,0,-.0203,-.264,-.9643,0,-.2401,.1528,-.0013,1)},
        {frame: 125, value: _M(.9886,-.1491,.02,0,-.1491,-.9531,.2633,0,-.0202,-.2633,-.9645,0,-.2401,.1528,-.0013,1)},
        {frame: 126, value: _M(.9886,-.1491,.02,0,-.1491,-.9534,.2624,0,-.0201,-.2624,-.9647,0,-.2401,.1528,-.0013,1)},
        {frame: 127, value: _M(.9886,-.1491,.02,0,-.1491,-.9536,.2614,0,-.02,-.2614,-.965,0,-.2401,.1528,-.0013,1)},
        {frame: 128, value: _M(.9886,-.149,.0199,0,-.1491,-.954,.2602,0,-.0198,-.2602,-.9653,0,-.2401,.1528,-.0013,1)},
        {frame: 129, value: _M(.9886,-.149,.0198,0,-.149,-.9543,.2589,0,-.0197,-.2589,-.9657,0,-.2401,.1528,-.0013,1)},
        {frame: 130, value: _M(.9886,-.149,.0198,0,-.149,-.9547,.2574,0,-.0195,-.2574,-.9661,0,-.2401,.1528,-.0013,1)},
        {frame: 131, value: _M(.9887,-.1489,.0197,0,-.149,-.9552,.2558,0,-.0193,-.2559,-.9665,0,-.2401,.1528,-.0013,1)},
        {frame: 132, value: _M(.9887,-.1489,.0196,0,-.1489,-.9556,.2541,0,-.0191,-.2542,-.967,0,-.2401,.1528,-.0013,1)},
        {frame: 133, value: _M(.9887,-.1488,.0195,0,-.1489,-.9561,.2524,0,-.0189,-.2524,-.9674,0,-.2401,.1528,-.0013,1)},
        {frame: 134, value: _M(.9887,-.1488,.0194,0,-.1489,-.9566,.2505,0,-.0187,-.2506,-.9679,0,-.2401,.1528,-.0013,1)},
        {frame: 135, value: _M(.9887,-.1487,.0193,0,-.1488,-.9571,.2486,0,-.0185,-.2487,-.9684,0,-.2401,.1528,-.0013,1)},
        {frame: 136, value: _M(.9887,-.1487,.0192,0,-.1488,-.9576,.2467,0,-.0183,-.2468,-.9689,0,-.2401,.1528,-.0013,1)},
        {frame: 137, value: _M(.9887,-.1486,.0191,0,-.1488,-.9581,.2449,0,-.0181,-.2449,-.9694,0,-.2401,.1528,-.0013,1)},
        {frame: 138, value: _M(.9887,-.1486,.019,0,-.1487,-.9586,.243,0,-.0179,-.2431,-.9698,0,-.2401,.1528,-.0013,1)},
        {frame: 139, value: _M(.9887,-.1485,.019,0,-.1487,-.959,.2412,0,-.0177,-.2413,-.9703,0,-.2401,.1528,-.0013,1)},
        {frame: 140, value: _M(.9887,-.1485,.0189,0,-.1487,-.9595,.2395,0,-.0175,-.2396,-.9707,0,-.2401,.1528,-.0013,1)},
        {frame: 141, value: _M(.9887,-.1484,.0188,0,-.1486,-.9599,.2379,0,-.0173,-.238,-.9711,0,-.2401,.1528,-.0013,1)},
        {frame: 142, value: _M(.9888,-.1484,.0187,0,-.1486,-.9602,.2364,0,-.0171,-.2365,-.9715,0,-.2401,.1528,-.0013,1)},
        {frame: 143, value: _M(.9888,-.1484,.0186,0,-.1486,-.9606,.2351,0,-.017,-.2352,-.9718,0,-.2401,.1528,-.0013,1)},
        {frame: 144, value: _M(.9888,-.1483,.0186,0,-.1485,-.9609,.2339,0,-.0168,-.234,-.9721,0,-.2401,.1528,-.0013,1)},
        {frame: 145, value: _M(.9888,-.1483,.0185,0,-.1485,-.9611,.2329,0,-.0167,-.233,-.9723,0,-.2401,.1528,-.0013,1)},
        {frame: 146, value: _M(.9888,-.1483,.0185,0,-.1485,-.9613,.232,0,-.0166,-.2322,-.9725,0,-.2401,.1528,-.0013,1)},
        {frame: 147, value: _M(.9888,-.1483,.0185,0,-.1485,-.9615,.2314,0,-.0166,-.2315,-.9727,0,-.2401,.1528,-.0013,1)},
        {frame: 148, value: _M(.9888,-.1483,.0184,0,-.1485,-.9616,.2309,0,-.0165,-.231,-.9728,0,-.2401,.1528,-.0013,1)},
        {frame: 149, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2306,0,-.0165,-.2308,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 150, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2305,0,-.0165,-.2307,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 151, value: _M(.9888,-.1482,.0184,0,-.1485,-.9617,.2306,0,-.0165,-.2308,-.9729,0,-.2401,.1528,-.0013,1)},
        {frame: 152, value: _M(.9888,-.1483,.0184,0,-.1485,-.9616,.2309,0,-.0165,-.231,-.9728,0,-.2401,.1528,-.0013,1)},
        {frame: 153, value: _M(.9888,-.1483,.0185,0,-.1485,-.9615,.2314,0,-.0166,-.2315,-.9727,0,-.2401,.1528,-.0013,1)},
        {frame: 154, value: _M(.9888,-.1483,.0185,0,-.1485,-.9613,.232,0,-.0166,-.2322,-.9725,0,-.2401,.1528,-.0013,1)},
        {frame: 155, value: _M(.9888,-.1483,.0185,0,-.1485,-.9611,.2329,0,-.0167,-.233,-.9723,0,-.2401,.1528,-.0013,1)},
        {frame: 156, value: _M(.9888,-.1483,.0186,0,-.1485,-.9609,.2339,0,-.0168,-.234,-.9721,0,-.2401,.1528,-.0013,1)},
        {frame: 157, value: _M(.9888,-.1484,.0186,0,-.1486,-.9606,.2351,0,-.017,-.2352,-.9718,0,-.2401,.1528,-.0013,1)},
        {frame: 158, value: _M(.9888,-.1484,.0187,0,-.1486,-.9602,.2364,0,-.0171,-.2365,-.9715,0,-.2401,.1528,-.0013,1)},
        {frame: 159, value: _M(.9887,-.1484,.0188,0,-.1486,-.9599,.2379,0,-.0173,-.238,-.9711,0,-.2401,.1528,-.0013,1)},
        {frame: 160, value: _M(.9887,-.1485,.0189,0,-.1487,-.9595,.2395,0,-.0175,-.2396,-.9707,0,-.2401,.1528,-.0013,1)},
        {frame: 161, value: _M(.9887,-.1485,.019,0,-.1487,-.959,.2412,0,-.0177,-.2413,-.9703,0,-.2401,.1528,-.0013,1)},
        {frame: 162, value: _M(.9887,-.1486,.019,0,-.1487,-.9586,.243,0,-.0179,-.2431,-.9698,0,-.2401,.1528,-.0013,1)},
        {frame: 163, value: _M(.9887,-.1486,.0191,0,-.1488,-.9581,.2449,0,-.0181,-.2449,-.9694,0,-.2401,.1528,-.0013,1)},
        {frame: 164, value: _M(.9887,-.1487,.0192,0,-.1488,-.9576,.2467,0,-.0183,-.2468,-.9689,0,-.2401,.1528,-.0013,1)},
        {frame: 165, value: _M(.9887,-.1487,.0193,0,-.1488,-.9571,.2486,0,-.0185,-.2487,-.9684,0,-.2401,.1528,-.0013,1)},
        {frame: 166, value: _M(.9887,-.1488,.0194,0,-.1489,-.9566,.2505,0,-.0187,-.2506,-.9679,0,-.2401,.1528,-.0013,1)},
        {frame: 167, value: _M(.9887,-.1488,.0195,0,-.1489,-.9561,.2524,0,-.0189,-.2524,-.9674,0,-.2401,.1528,-.0013,1)},
        {frame: 168, value: _M(.9887,-.1489,.0196,0,-.1489,-.9556,.2541,0,-.0191,-.2542,-.967,0,-.2401,.1528,-.0013,1)},
        {frame: 169, value: _M(.9887,-.1489,.0197,0,-.149,-.9552,.2558,0,-.0193,-.2559,-.9665,0,-.2401,.1528,-.0013,1)},
        {frame: 170, value: _M(.9886,-.149,.0198,0,-.149,-.9547,.2574,0,-.0195,-.2574,-.9661,0,-.2401,.1528,-.0013,1)},
        {frame: 171, value: _M(.9886,-.149,.0198,0,-.149,-.9543,.2589,0,-.0197,-.2589,-.9657,0,-.2401,.1528,-.0013,1)},
        {frame: 172, value: _M(.9886,-.149,.0199,0,-.1491,-.954,.2602,0,-.0198,-.2602,-.9653,0,-.2401,.1528,-.0013,1)},
        {frame: 173, value: _M(.9886,-.1491,.02,0,-.1491,-.9536,.2614,0,-.02,-.2614,-.965,0,-.2401,.1528,-.0013,1)},
        {frame: 174, value: _M(.9886,-.1491,.02,0,-.1491,-.9534,.2624,0,-.0201,-.2624,-.9647,0,-.2401,.1528,-.0013,1)},
        {frame: 175, value: _M(.9886,-.1491,.02,0,-.1491,-.9531,.2633,0,-.0202,-.2633,-.9645,0,-.2401,.1528,-.0013,1)},
        {frame: 176, value: _M(.9886,-.1491,.0201,0,-.1491,-.9529,.264,0,-.0203,-.264,-.9643,0,-.2401,.1528,-.0013,1)},
        {frame: 177, value: _M(.9886,-.1492,.0201,0,-.1491,-.9528,.2646,0,-.0203,-.2646,-.9642,0,-.2401,.1528,-.0013,1)},
        {frame: 178, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.265,0,-.0204,-.265,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 179, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2652,0,-.0204,-.2652,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 180, value: _M(.9886,-.1492,.0201,0,-.1491,-.9526,.2653,0,-.0204,-.2653,-.964,0,-.2401,.1528,-.0013,1)},
        {frame: 190, value: _M(.9292,-.3693,.0136,0,-.3691,-.9258,.0816,0,-.0175,-.0808,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 191, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 192, value: _M(.9293,-.3692,.0136,0,-.369,-.9259,.0807,0,-.0173,-.08,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 193, value: _M(.9293,-.3691,.0135,0,-.369,-.926,.0797,0,-.0169,-.079,-.9967,0,-.2401,.1528,-.0013,1)},
        {frame: 194, value: _M(.9293,-.369,.0134,0,-.3689,-.9262,.0781,0,-.0164,-.0776,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 195, value: _M(.9294,-.3689,.0134,0,-.3688,-.9264,.0761,0,-.0157,-.0757,-.997,0,-.2401,.1528,-.0013,1)},
        {frame: 196, value: _M(.9295,-.3687,.0132,0,-.3686,-.9266,.0737,0,-.0149,-.0734,-.9972,0,-.2401,.1528,-.0013,1)},
        {frame: 197, value: _M(.9295,-.3685,.0131,0,-.3685,-.9269,.0711,0,-.014,-.0709,-.9974,0,-.2401,.1528,-.0013,1)},
        {frame: 198, value: _M(.9296,-.3683,.013,0,-.3683,-.9272,.0683,0,-.0131,-.0683,-.9976,0,-.2401,.1528,-.0013,1)},
        {frame: 199, value: _M(.9297,-.3681,.0129,0,-.3681,-.9275,.0655,0,-.0122,-.0656,-.9978,0,-.2401,.1528,-.0013,1)},
        {frame: 200, value: _M(.9298,-.3679,.0128,0,-.368,-.9277,.0627,0,-.0112,-.063,-.998,0,-.2401,.1528,-.0013,1)},
        {frame: 201, value: _M(.9298,-.3677,.0127,0,-.3678,-.928,.06,0,-.0104,-.0605,-.9981,0,-.2401,.1528,-.0013,1)},
        {frame: 202, value: _M(.9299,-.3676,.0125,0,-.3677,-.9282,.0573,0,-.0094,-.0579,-.9983,0,-.2401,.1528,-.0013,1)},
        {frame: 203, value: _M(.93,-.3674,.0124,0,-.3675,-.9285,.0541,0,-.0084,-.0549,-.9985,0,-.2401,.1528,-.0013,1)},
        {frame: 204, value: _M(.9301,-.3671,.0122,0,-.3673,-.9287,.0505,0,-.0072,-.0515,-.9987,0,-.2401,.1528,-.0013,1)},
        {frame: 205, value: _M(.9302,-.3669,.012,0,-.367,-.9291,.0465,0,-.0059,-.0477,-.9988,0,-.2401,.1528,-.0013,1)},
        {frame: 206, value: _M(.9303,-.3666,.0118,0,-.3667,-.9294,.0421,0,-.0045,-.0434,-.999,0,-.2401,.1528,-.0013,1)},
        {frame: 207, value: _M(.9304,-.3663,.0115,0,-.3664,-.9297,.0372,0,-.0029,-.0388,-.9992,0,-.2401,.1528,-.0013,1)},
        {frame: 208, value: _M(.9306,-.366,.0112,0,-.3661,-.93,.0319,0,-.0012,-.0338,-.9994,0,-.2401,.1528,-.0013,1)},
        {frame: 209, value: _M(.9307,-.3656,.011,0,-.3658,-.9303,.0263,0,.0006,-.0285,-.9996,0,-.2401,.1528,-.0013,1)},
        {frame: 210, value: _M(.9308,-.3653,.0107,0,-.3654,-.9306,.0204,0,.0025,-.0229,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 211, value: _M(.931,-.3649,.0104,0,-.3651,-.9309,.0144,0,.0044,-.0172,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 212, value: _M(.9311,-.3646,.0101,0,-.3647,-.9311,.0083,0,.0064,-.0114,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 213, value: _M(.9312,-.3643,.0098,0,-.3643,-.9313,.0022,0,.0083,-.0057,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 214, value: _M(.9314,-.364,.0096,0,-.364,-.9314,-.0035,0,.0102,-.0002,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 215, value: _M(.9315,-.3637,.0094,0,-.3636,-.9315,-.0089,0,.012,.0049,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 216, value: _M(.9316,-.3635,.0092,0,-.3633,-.9316,-.0136,0,.0135,.0094,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 217, value: _M(.9316,-.3633,.0091,0,-.3632,-.9316,-.0155,0,.0141,.0112,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 218, value: _M(.9316,-.3633,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 219, value: _M(.9317,-.3632,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 222, value: _M(.9316,-.3633,.0091,0,-.3631,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 223, value: _M(.9316,-.3633,.0091,0,-.3632,-.9316,-.0155,0,.0141,.0111,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 224, value: _M(.9316,-.3634,.0091,0,-.3632,-.9316,-.0152,0,.014,.0109,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 225, value: _M(.9315,-.3636,.0093,0,-.3635,-.9315,-.0113,0,.0127,.0072,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 226, value: _M(.9314,-.3638,.0095,0,-.3638,-.9315,-.0069,0,.0113,.0029,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 227, value: _M(.9313,-.3641,.0097,0,-.3641,-.9314,-.002,0,.0097,-.0017,-1,0,-.2401,.1528,-.0013,1)},
        {frame: 228, value: _M(.9312,-.3643,.0099,0,-.3644,-.9312,.0033,0,.008,-.0066,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 229, value: _M(.9311,-.3646,.0101,0,-.3647,-.9311,.0087,0,.0062,-.0118,-.9999,0,-.2401,.1528,-.0013,1)},
        {frame: 230, value: _M(.931,-.3649,.0104,0,-.3651,-.9309,.0143,0,.0044,-.0171,-.9998,0,-.2401,.1528,-.0013,1)},
        {frame: 231, value: _M(.9308,-.3652,.0107,0,-.3654,-.9306,.0199,0,.0026,-.0224,-.9997,0,-.2401,.1528,-.0013,1)},
        {frame: 232, value: _M(.9307,-.3656,.0109,0,-.3657,-.9304,.0255,0,.0008,-.0277,-.9996,0,-.2401,.1528,-.0013,1)},
        {frame: 233, value: _M(.9306,-.3659,.0112,0,-.3661,-.9301,.0311,0,-.001,-.033,-.9995,0,-.2401,.1528,-.0013,1)},
        {frame: 234, value: _M(.9305,-.3662,.0115,0,-.3664,-.9297,.0364,0,-.0027,-.0381,-.9993,0,-.2401,.1528,-.0013,1)},
        {frame: 235, value: _M(.9303,-.3666,.0117,0,-.3667,-.9294,.0417,0,-.0044,-.0431,-.9991,0,-.2401,.1528,-.0013,1)},
        {frame: 236, value: _M(.9302,-.3669,.012,0,-.367,-.929,.0466,0,-.006,-.0478,-.9988,0,-.2401,.1528,-.0013,1)},
        {frame: 237, value: _M(.9301,-.3672,.0122,0,-.3673,-.9287,.0514,0,-.0075,-.0523,-.9986,0,-.2401,.1528,-.0013,1)},
        {frame: 238, value: _M(.93,-.3675,.0125,0,-.3676,-.9283,.0558,0,-.0089,-.0565,-.9984,0,-.2401,.1528,-.0013,1)},
        {frame: 239, value: _M(.9298,-.3677,.0126,0,-.3678,-.928,.0599,0,-.0103,-.0603,-.9981,0,-.2401,.1528,-.0013,1)},
        {frame: 240, value: _M(.9297,-.368,.0128,0,-.368,-.9276,.0637,0,-.0116,-.0639,-.9979,0,-.2401,.1528,-.0013,1)},
        {frame: 241, value: _M(.9296,-.3682,.013,0,-.3682,-.9273,.0671,0,-.0127,-.0671,-.9977,0,-.2401,.1528,-.0013,1)},
        {frame: 242, value: _M(.9296,-.3684,.0131,0,-.3684,-.927,.0701,0,-.0137,-.07,-.9975,0,-.2401,.1528,-.0013,1)},
        {frame: 243, value: _M(.9295,-.3686,.0132,0,-.3686,-.9267,.0728,0,-.0146,-.0725,-.9973,0,-.2401,.1528,-.0013,1)},
        {frame: 244, value: _M(.9294,-.3688,.0133,0,-.3687,-.9265,.0751,0,-.0154,-.0747,-.9971,0,-.2401,.1528,-.0013,1)},
        {frame: 245, value: _M(.9294,-.3689,.0134,0,-.3688,-.9263,.0771,0,-.016,-.0766,-.9969,0,-.2401,.1528,-.0013,1)},
        {frame: 246, value: _M(.9293,-.369,.0135,0,-.3689,-.9261,.0786,0,-.0166,-.078,-.9968,0,-.2401,.1528,-.0013,1)},
        {frame: 247, value: _M(.9293,-.3691,.0135,0,-.369,-.926,.0799,0,-.017,-.0792,-.9967,0,-.2401,.1528,-.0013,1)},
        {frame: 248, value: _M(.9293,-.3692,.0136,0,-.369,-.9259,.0807,0,-.0173,-.08,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 249, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0812,0,-.0174,-.0805,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 250, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)},
        {frame: 252, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.R", skeleton,skeleton.bones[30], _M(.9955,-.0885,-.0336,0,.0946,.9429,.3193,0,.0034,-.321,.9471,0,0,1.3168,0,1), _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1));
        bone.length = 1.2357;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 1, value: _M(.9955,-.0885,-.0336,0,.0942,.8949,.4362,0,-.0085,-.4374,.8992,0,0,1.3168,0,1)},
        {frame: 2, value: _M(.9955,-.0885,-.0336,0,.0899,.7732,.6278,0,-.0296,-.628,.7777,0,0,1.3168,0,1)},
        {frame: 3, value: _M(.9955,-.0885,-.0336,0,.0829,.645,.7597,0,-.0456,-.7591,.6494,0,0,1.3168,0,1)},
        {frame: 4, value: _M(.9955,-.0885,-.0336,0,.0792,.5844,.8076,0,-.0518,-.8066,.5888,0,0,1.3168,0,1)},
        {frame: 5, value: _M(.9955,-.0885,-.0336,0,.0935,.864,.4947,0,-.0148,-.4956,.8684,0,0,1.3168,0,1)},
        {frame: 6, value: _M(.9955,-.0885,-.0336,0,.0867,.7107,.6981,0,-.0379,-.6979,.7152,0,0,1.3168,0,1)},
        {frame: 7, value: _M(.9955,-.0885,-.0336,0,.0852,.6828,.7256,0,-.0413,-.7252,.6873,0,0,1.3168,0,1)},
        {frame: 8, value: _M(.9955,-.0885,-.0336,0,.0851,.6824,.726,0,-.0413,-.7256,.6869,0,0,1.3168,0,1)},
        {frame: 9, value: _M(.9955,-.0885,-.0336,0,.0866,.7085,.7004,0,-.0382,-.7002,.713,0,0,1.3168,0,1)},
        {frame: 10, value: _M(.9955,-.0885,-.0336,0,.0925,.8358,.5412,0,-.0198,-.5419,.8402,0,0,1.3168,0,1)},
        {frame: 11, value: _M(.9955,-.0885,-.0336,0,.0745,.5142,.8545,0,-.0583,-.8531,.5184,0,0,1.3168,0,1)},
        {frame: 12, value: _M(.9955,-.0885,-.0336,0,.0785,.5746,.8147,0,-.0528,-.8136,.579,0,0,1.3168,0,1)},
        {frame: 13, value: _M(.9955,-.0885,-.0336,0,.0803,.6018,.7946,0,-.0501,-.7937,.6062,0,0,1.3168,0,1)},
        {frame: 14, value: _M(.9955,-.0885,-.0336,0,.0805,.6051,.7921,0,-.0498,-.7912,.6095,0,0,1.3168,0,1)},
        {frame: 15, value: _M(.9955,-.0885,-.0336,0,.081,.613,.7859,0,-.0489,-.7851,.6174,0,0,1.3168,0,1)},
        {frame: 16, value: _M(.9955,-.0885,-.0336,0,.083,.6456,.7591,0,-.0455,-.7585,.6501,0,0,1.3168,0,1)},
        {frame: 17, value: _M(.9955,-.0885,-.0336,0,.0871,.7178,.6908,0,-.037,-.6906,.7223,0,0,1.3168,0,1)},
        {frame: 18, value: _M(.9955,-.0885,-.0336,0,.0919,.8193,.5659,0,-.0226,-.5665,.8238,0,0,1.3168,0,1)},
        {frame: 19, value: _M(.9955,-.0885,-.0336,0,.0944,.9071,.4101,0,-.0058,-.4114,.9114,0,0,1.3168,0,1)},
        {frame: 20, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 30, value: _M(.9955,-.0885,-.0336,0,.0946,.9293,.357,0,-.0004,-.3586,.9335,0,0,1.3168,0,1)},
        {frame: 31, value: _M(.9955,-.0885,-.0336,0,.0941,.8875,.4511,0,-.0101,-.4522,.8919,0,0,1.3168,0,1)},
        {frame: 32, value: _M(.9955,-.0885,-.0336,0,.088,.7358,.6715,0,-.0347,-.6714,.7403,0,0,1.3168,0,1)},
        {frame: 33, value: _M(.9955,-.0885,-.0336,0,.0756,.5305,.8443,0,-.0569,-.843,.5348,0,0,1.3168,0,1)},
        {frame: 34, value: _M(.9955,-.0885,-.0336,0,.0572,.2796,.9584,0,-.0754,-.956,.2834,0,0,1.3168,0,1)},
        {frame: 35, value: _M(.9955,-.0885,-.0336,0,.0358,.0237,.9991,0,-.0876,-.9958,.0268,0,0,1.3168,0,1)},
        {frame: 36, value: _M(.9955,-.0885,-.0336,0,.0162,-.1905,.9816,0,-.0932,-.9777,-.1882,0,0,1.3168,0,1)},
        {frame: 37, value: _M(.9955,-.0885,-.0336,0,.001,-.3446,.9387,0,-.0946,-.9346,-.343,0,0,1.3168,0,1)},
        {frame: 38, value: _M(.9955,-.0885,-.0336,0,-.0126,-.4752,.8798,0,-.0938,-.8754,-.4742,0,0,1.3168,0,1)},
        {frame: 39, value: _M(.9955,-.0885,-.0336,0,-.0225,-.5661,.824,0,-.0919,-.8196,-.5655,0,0,1.3168,0,1)},
        {frame: 40, value: _M(.9955,-.0885,-.0336,0,-.0224,-.5649,.8249,0,-.0919,-.8204,-.5644,0,0,1.3168,0,1)},
        {frame: 41, value: _M(.9955,-.0885,-.0336,0,-.0127,-.4769,.8789,0,-.0938,-.8745,-.4758,0,0,1.3168,0,1)},
        {frame: 42, value: _M(.9955,-.0885,-.0336,0,.0072,-.2825,.9593,0,-.0943,-.9552,-.2806,0,0,1.3168,0,1)},
        {frame: 43, value: _M(.9955,-.0885,-.0336,0,.0336,-.0012,.9994,0,-.0885,-.9961,.0018,0,0,1.3168,0,1)},
        {frame: 44, value: _M(.9955,-.0885,-.0336,0,.0566,.2721,.9606,0,-.0758,-.9582,.2759,0,0,1.3168,0,1)},
        {frame: 45, value: _M(.9955,-.0885,-.0336,0,.0749,.5197,.851,0,-.0578,-.8497,.524,0,0,1.3168,0,1)},
        {frame: 46, value: _M(.9955,-.0885,-.0336,0,.0899,.7743,.6264,0,-.0294,-.6266,.7788,0,0,1.3168,0,1)},
        {frame: 47, value: _M(.9955,-.0885,-.0336,0,.0938,.9686,.2302,0,.0122,-.2323,.9726,0,0,1.3168,0,1)},
        {frame: 48, value: _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 51, value: _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 59, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 61, value: _M(.9955,-.0885,-.0336,0,.0839,.6619,.7449,0,-.0437,-.7443,.6664,0,0,1.3168,0,1)},
        {frame: 62, value: _M(.9955,-.0885,-.0336,0,.0731,.4943,.8662,0,-.06,-.8648,.4986,0,0,1.3168,0,1)},
        {frame: 63, value: _M(.9955,-.0885,-.0336,0,.0705,.4568,.8867,0,-.0631,-.8851,.461,0,0,1.3168,0,1)},
        {frame: 64, value: _M(.9955,-.0885,-.0336,0,.0806,.6071,.7905,0,-.0496,-.7897,.6115,0,0,1.3168,0,1)},
        {frame: 65, value: _M(.9955,-.0885,-.0336,0,.0916,.8119,.5766,0,-.0238,-.5771,.8164,0,0,1.3168,0,1)},
        {frame: 66, value: _M(.9955,-.0885,-.0336,0,.0946,.9343,.3437,0,.001,-.3453,.9385,0,0,1.3168,0,1)},
        {frame: 67, value: _M(.9955,-.0885,-.0336,0,.0938,.8755,.474,0,-.0125,-.475,.8799,0,0,1.3168,0,1)},
        {frame: 68, value: _M(.9955,-.0885,-.0336,0,.0863,.7043,.7047,0,-.0387,-.7044,.7087,0,0,1.3168,0,1)},
        {frame: 69, value: _M(.9955,-.0885,-.0336,0,.0722,.481,.8737,0,-.0611,-.8722,.4853,0,0,1.3168,0,1)},
        {frame: 70, value: _M(.9955,-.0885,-.0336,0,.0467,.1508,.9875,0,-.0823,-.9846,.1543,0,0,1.3168,0,1)},
        {frame: 71, value: _M(.9955,-.0885,-.0336,0,.0226,-.1218,.9923,0,-.0919,-.9886,-.1192,0,0,1.3168,0,1)},
        {frame: 72, value: _M(.9955,-.0885,-.0336,0,-.0005,-.3593,.9332,0,-.0946,-.929,-.3577,0,0,1.3168,0,1)},
        {frame: 73, value: _M(.9955,-.0885,-.0336,0,-.0147,-.495,.8688,0,-.0935,-.8644,-.4941,0,0,1.3168,0,1)},
        {frame: 74, value: _M(.9955,-.0885,-.0336,0,-.0087,-.439,.8984,0,-.0942,-.8941,-.4378,0,0,1.3168,0,1)},
        {frame: 75, value: _M(.9955,-.0885,-.0336,0,.016,-.1925,.9812,0,-.0933,-.9773,-.1903,0,0,1.3168,0,1)},
        {frame: 76, value: _M(.9955,-.0885,-.0336,0,.0505,.1969,.9791,0,-.08,-.9764,.2005,0,0,1.3168,0,1)},
        {frame: 77, value: _M(.9955,-.0885,-.0336,0,.0765,.5441,.8355,0,-.0556,-.8343,.5485,0,0,1.3168,0,1)},
        {frame: 78, value: _M(.9955,-.0885,-.0336,0,.0795,.5888,.8043,0,-.0514,-.8034,.5932,0,0,1.3168,0,1)},
        {frame: 79, value: _M(.9955,-.0885,-.0336,0,.0789,.5803,.8106,0,-.0522,-.8096,.5847,0,0,1.3168,0,1)},
        {frame: 80, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 83, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
        {frame: 90, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 91, value: _M(.9955,-.0885,-.0336,0,.0942,.894,.438,0,-.0087,-.4392,.8983,0,0,1.3168,0,1)},
        {frame: 92, value: _M(.9955,-.0885,-.0336,0,.0899,.7728,.6282,0,-.0296,-.6284,.7773,0,0,1.3168,0,1)},
        {frame: 93, value: _M(.9955,-.0885,-.0336,0,.0825,.6381,.7655,0,-.0463,-.7649,.6425,0,0,1.3168,0,1)},
        {frame: 94, value: _M(.9955,-.0885,-.0336,0,.0768,.5479,.833,0,-.0553,-.8318,.5523,0,0,1.3168,0,1)},
        {frame: 95, value: _M(.9955,-.0885,-.0336,0,.0746,.5154,.8537,0,-.0582,-.8524,.5197,0,0,1.3168,0,1)},
        {frame: 96, value: _M(.9955,-.0885,-.0336,0,.0742,.5091,.8575,0,-.0588,-.8562,.5134,0,0,1.3168,0,1)},
        {frame: 97, value: _M(.9955,-.0885,-.0336,0,.074,.5074,.8585,0,-.0589,-.8571,.5117,0,0,1.3168,0,1)},
        {frame: 98, value: _M(.9955,-.0885,-.0336,0,.0942,.9591,.267,0,.0086,-.269,.9631,0,0,1.3168,0,1)},
        {frame: 99, value: _M(.9955,-.0885,-.0336,0,.0946,.9207,.3786,0,-.0026,-.3801,.925,0,0,1.3168,0,1)},
        {frame: 100, value: _M(.9955,-.0885,-.0336,0,.0944,.9048,.4152,0,-.0064,-.4165,.9091,0,0,1.3168,0,1)},
        {frame: 101, value: _M(.9955,-.0885,-.0336,0,.0943,.8964,.433,0,-.0082,-.4343,.9008,0,0,1.3168,0,1)},
        {frame: 102, value: _M(.9955,-.0885,-.0336,0,.094,.8845,.457,0,-.0107,-.4581,.8889,0,0,1.3168,0,1)},
        {frame: 103, value: _M(.9955,-.0885,-.0336,0,.0938,.8753,.4744,0,-.0126,-.4754,.8797,0,0,1.3168,0,1)},
        {frame: 104, value: _M(.9955,-.0885,-.0336,0,.0938,.876,.4732,0,-.0125,-.4742,.8803,0,0,1.3168,0,1)},
        {frame: 105, value: _M(.9955,-.0885,-.0336,0,.0941,.8903,.4455,0,-.0095,-.4467,.8946,0,0,1.3168,0,1)},
        {frame: 106, value: _M(.9955,-.0885,-.0336,0,.0945,.9132,.3965,0,-.0044,-.3979,.9174,0,0,1.3168,0,1)},
        {frame: 107, value: _M(.9955,-.0885,-.0336,0,.0946,.933,.3473,0,.0006,-.3489,.9372,0,0,1.3168,0,1)},
        {frame: 108, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 120, value: _M(.9955,-.0885,-.0336,0,.0935,.8656,.4919,0,-.0145,-.4928,.87,0,0,1.3168,0,1)},
        {frame: 121, value: _M(.9955,-.0885,-.0336,0,.0935,.8657,.4917,0,-.0144,-.4927,.8701,0,0,1.3168,0,1)},
        {frame: 122, value: _M(.9955,-.0885,-.0336,0,.0935,.866,.4913,0,-.0144,-.4922,.8704,0,0,1.3168,0,1)},
        {frame: 123, value: _M(.9955,-.0885,-.0336,0,.0935,.8664,.4905,0,-.0143,-.4914,.8708,0,0,1.3168,0,1)},
        {frame: 124, value: _M(.9955,-.0885,-.0336,0,.0936,.867,.4894,0,-.0142,-.4904,.8714,0,0,1.3168,0,1)},
        {frame: 125, value: _M(.9955,-.0885,-.0336,0,.0936,.8678,.4881,0,-.014,-.489,.8722,0,0,1.3168,0,1)},
        {frame: 126, value: _M(.9955,-.0885,-.0336,0,.0936,.8687,.4864,0,-.0139,-.4873,.8731,0,0,1.3168,0,1)},
        {frame: 127, value: _M(.9955,-.0885,-.0336,0,.0936,.8698,.4844,0,-.0137,-.4854,.8742,0,0,1.3168,0,1)},
        {frame: 128, value: _M(.9955,-.0885,-.0336,0,.0937,.8711,.4821,0,-.0134,-.4831,.8755,0,0,1.3168,0,1)},
        {frame: 129, value: _M(.9955,-.0885,-.0336,0,.0937,.8725,.4796,0,-.0131,-.4805,.8769,0,0,1.3168,0,1)},
        {frame: 130, value: _M(.9955,-.0885,-.0336,0,.0937,.874,.4767,0,-.0128,-.4777,.8784,0,0,1.3168,0,1)},
        {frame: 131, value: _M(.9955,-.0885,-.0336,0,.0938,.8757,.4737,0,-.0125,-.4747,.8801,0,0,1.3168,0,1)},
        {frame: 132, value: _M(.9955,-.0885,-.0336,0,.0938,.8774,.4704,0,-.0122,-.4715,.8818,0,0,1.3168,0,1)},
        {frame: 133, value: _M(.9955,-.0885,-.0336,0,.0939,.8793,.467,0,-.0118,-.4681,.8836,0,0,1.3168,0,1)},
        {frame: 134, value: _M(.9955,-.0885,-.0336,0,.0939,.8811,.4634,0,-.0114,-.4645,.8855,0,0,1.3168,0,1)},
        {frame: 135, value: _M(.9955,-.0885,-.0336,0,.094,.883,.4598,0,-.011,-.4609,.8874,0,0,1.3168,0,1)},
        {frame: 136, value: _M(.9955,-.0885,-.0336,0,.094,.8849,.4561,0,-.0106,-.4572,.8893,0,0,1.3168,0,1)},
        {frame: 137, value: _M(.9955,-.0885,-.0336,0,.0941,.8868,.4524,0,-.0103,-.4536,.8912,0,0,1.3168,0,1)},
        {frame: 138, value: _M(.9955,-.0885,-.0336,0,.0941,.8887,.4488,0,-.0099,-.45,.893,0,0,1.3168,0,1)},
        {frame: 139, value: _M(.9955,-.0885,-.0336,0,.0941,.8904,.4453,0,-.0095,-.4465,.8947,0,0,1.3168,0,1)},
        {frame: 140, value: _M(.9955,-.0885,-.0336,0,.0942,.8921,.442,0,-.0092,-.4432,.8964,0,0,1.3168,0,1)},
        {frame: 141, value: _M(.9955,-.0885,-.0336,0,.0942,.8936,.4388,0,-.0088,-.44,.8979,0,0,1.3168,0,1)},
        {frame: 142, value: _M(.9955,-.0885,-.0336,0,.0942,.895,.4359,0,-.0085,-.4371,.8993,0,0,1.3168,0,1)},
        {frame: 143, value: _M(.9955,-.0885,-.0336,0,.0943,.8963,.4333,0,-.0082,-.4345,.9006,0,0,1.3168,0,1)},
        {frame: 144, value: _M(.9955,-.0885,-.0336,0,.0943,.8974,.431,0,-.008,-.4322,.9017,0,0,1.3168,0,1)},
        {frame: 145, value: _M(.9955,-.0885,-.0336,0,.0943,.8984,.429,0,-.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 146, value: _M(.9955,-.0885,-.0336,0,.0943,.8991,.4274,0,-.0076,-.4286,.9035,0,0,1.3168,0,1)},
        {frame: 147, value: _M(.9955,-.0885,-.0336,0,.0943,.8997,.4261,0,-.0075,-.4273,.9041,0,0,1.3168,0,1)},
        {frame: 148, value: _M(.9955,-.0885,-.0336,0,.0943,.9002,.4252,0,-.0074,-.4264,.9045,0,0,1.3168,0,1)},
        {frame: 149, value: _M(.9955,-.0885,-.0336,0,.0943,.9004,.4246,0,-.0073,-.4259,.9047,0,0,1.3168,0,1)},
        {frame: 150, value: _M(.9955,-.0885,-.0336,0,.0943,.9005,.4244,0,-.0073,-.4257,.9048,0,0,1.3168,0,1)},
        {frame: 151, value: _M(.9955,-.0885,-.0336,0,.0943,.9004,.4246,0,-.0073,-.4259,.9047,0,0,1.3168,0,1)},
        {frame: 152, value: _M(.9955,-.0885,-.0336,0,.0943,.9002,.4252,0,-.0074,-.4264,.9045,0,0,1.3168,0,1)},
        {frame: 153, value: _M(.9955,-.0885,-.0336,0,.0943,.8997,.4261,0,-.0075,-.4273,.9041,0,0,1.3168,0,1)},
        {frame: 154, value: _M(.9955,-.0885,-.0336,0,.0943,.8991,.4274,0,-.0076,-.4286,.9035,0,0,1.3168,0,1)},
        {frame: 155, value: _M(.9955,-.0885,-.0336,0,.0943,.8984,.429,0,-.0078,-.4303,.9027,0,0,1.3168,0,1)},
        {frame: 156, value: _M(.9955,-.0885,-.0336,0,.0943,.8974,.431,0,-.008,-.4322,.9017,0,0,1.3168,0,1)},
        {frame: 157, value: _M(.9955,-.0885,-.0336,0,.0943,.8963,.4333,0,-.0082,-.4345,.9006,0,0,1.3168,0,1)},
        {frame: 158, value: _M(.9955,-.0885,-.0336,0,.0942,.895,.4359,0,-.0085,-.4371,.8993,0,0,1.3168,0,1)},
        {frame: 159, value: _M(.9955,-.0885,-.0336,0,.0942,.8936,.4388,0,-.0088,-.44,.8979,0,0,1.3168,0,1)},
        {frame: 160, value: _M(.9955,-.0885,-.0336,0,.0942,.8921,.442,0,-.0092,-.4432,.8964,0,0,1.3168,0,1)},
        {frame: 161, value: _M(.9955,-.0885,-.0336,0,.0941,.8904,.4453,0,-.0095,-.4465,.8947,0,0,1.3168,0,1)},
        {frame: 162, value: _M(.9955,-.0885,-.0336,0,.0941,.8887,.4488,0,-.0099,-.45,.893,0,0,1.3168,0,1)},
        {frame: 163, value: _M(.9955,-.0885,-.0336,0,.0941,.8868,.4524,0,-.0103,-.4536,.8912,0,0,1.3168,0,1)},
        {frame: 164, value: _M(.9955,-.0885,-.0336,0,.094,.8849,.4561,0,-.0106,-.4572,.8893,0,0,1.3168,0,1)},
        {frame: 165, value: _M(.9955,-.0885,-.0336,0,.094,.883,.4598,0,-.011,-.4609,.8874,0,0,1.3168,0,1)},
        {frame: 166, value: _M(.9955,-.0885,-.0336,0,.0939,.8811,.4634,0,-.0114,-.4645,.8855,0,0,1.3168,0,1)},
        {frame: 167, value: _M(.9955,-.0885,-.0336,0,.0939,.8793,.467,0,-.0118,-.4681,.8836,0,0,1.3168,0,1)},
        {frame: 168, value: _M(.9955,-.0885,-.0336,0,.0938,.8774,.4704,0,-.0122,-.4715,.8818,0,0,1.3168,0,1)},
        {frame: 169, value: _M(.9955,-.0885,-.0336,0,.0938,.8757,.4737,0,-.0125,-.4747,.8801,0,0,1.3168,0,1)},
        {frame: 170, value: _M(.9955,-.0885,-.0336,0,.0937,.874,.4767,0,-.0128,-.4777,.8784,0,0,1.3168,0,1)},
        {frame: 171, value: _M(.9955,-.0885,-.0336,0,.0937,.8725,.4796,0,-.0131,-.4805,.8769,0,0,1.3168,0,1)},
        {frame: 172, value: _M(.9955,-.0885,-.0336,0,.0937,.8711,.4821,0,-.0134,-.4831,.8755,0,0,1.3168,0,1)},
        {frame: 173, value: _M(.9955,-.0885,-.0336,0,.0936,.8698,.4844,0,-.0137,-.4854,.8742,0,0,1.3168,0,1)},
        {frame: 174, value: _M(.9955,-.0885,-.0336,0,.0936,.8687,.4864,0,-.0139,-.4873,.8731,0,0,1.3168,0,1)},
        {frame: 175, value: _M(.9955,-.0885,-.0336,0,.0936,.8678,.4881,0,-.014,-.489,.8722,0,0,1.3168,0,1)},
        {frame: 176, value: _M(.9955,-.0885,-.0336,0,.0936,.867,.4894,0,-.0142,-.4904,.8714,0,0,1.3168,0,1)},
        {frame: 177, value: _M(.9955,-.0885,-.0336,0,.0935,.8664,.4905,0,-.0143,-.4914,.8708,0,0,1.3168,0,1)},
        {frame: 178, value: _M(.9955,-.0885,-.0336,0,.0935,.866,.4913,0,-.0144,-.4922,.8704,0,0,1.3168,0,1)},
        {frame: 179, value: _M(.9955,-.0885,-.0336,0,.0935,.8657,.4917,0,-.0144,-.4927,.8701,0,0,1.3168,0,1)},
        {frame: 180, value: _M(.9955,-.0885,-.0336,0,.0935,.8656,.4919,0,-.0145,-.4928,.87,0,0,1.3168,0,1)},
        {frame: 190, value: _M(.9955,-.0885,-.0336,0,.0946,.9405,.3263,0,.0027,-.328,.9447,0,0,1.3168,0,1)},
        {frame: 191, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0028,-.3276,.9448,0,0,1.3168,0,1)},
        {frame: 192, value: _M(.9955,-.0885,-.0336,0,.0946,.9411,.3246,0,.0029,-.3263,.9453,0,0,1.3168,0,1)},
        {frame: 193, value: _M(.9955,-.0885,-.0336,0,.0946,.9419,.3224,0,.0031,-.3241,.946,0,0,1.3168,0,1)},
        {frame: 194, value: _M(.9955,-.0885,-.0336,0,.0946,.9429,.3193,0,.0034,-.321,.9471,0,0,1.3168,0,1)},
        {frame: 195, value: _M(.9955,-.0885,-.0336,0,.0945,.9443,.3152,0,.0038,-.317,.9484,0,0,1.3168,0,1)},
        {frame: 196, value: _M(.9955,-.0885,-.0336,0,.0945,.9459,.3104,0,.0043,-.3122,.95,0,0,1.3168,0,1)},
        {frame: 197, value: _M(.9955,-.0885,-.0336,0,.0945,.9477,.305,0,.0048,-.3068,.9518,0,0,1.3168,0,1)},
        {frame: 198, value: _M(.9955,-.0885,-.0336,0,.0945,.9495,.2993,0,.0054,-.3011,.9536,0,0,1.3168,0,1)},
        {frame: 199, value: _M(.9955,-.0885,-.0336,0,.0944,.9513,.2935,0,.006,-.2954,.9554,0,0,1.3168,0,1)},
        {frame: 200, value: _M(.9955,-.0885,-.0336,0,.0944,.953,.2878,0,.0065,-.2897,.9571,0,0,1.3168,0,1)},
        {frame: 201, value: _M(.9955,-.0885,-.0336,0,.0944,.9546,.2824,0,.0071,-.2843,.9587,0,0,1.3168,0,1)},
        {frame: 202, value: _M(.9955,-.0885,-.0336,0,.0943,.9563,.2768,0,.0076,-.2787,.9603,0,0,1.3168,0,1)},
        {frame: 203, value: _M(.9955,-.0885,-.0336,0,.0943,.9582,.2703,0,.0083,-.2723,.9622,0,0,1.3168,0,1)},
        {frame: 204, value: _M(.9955,-.0885,-.0336,0,.0942,.9602,.2629,0,.009,-.2649,.9642,0,0,1.3168,0,1)},
        {frame: 205, value: _M(.9955,-.0885,-.0336,0,.0941,.9624,.2547,0,.0098,-.2567,.9664,0,0,1.3168,0,1)},
        {frame: 206, value: _M(.9955,-.0885,-.0336,0,.094,.9648,.2455,0,.0107,-.2476,.9688,0,0,1.3168,0,1)},
        {frame: 207, value: _M(.9955,-.0885,-.0336,0,.0939,.9673,.2355,0,.0116,-.2376,.9713,0,0,1.3168,0,1)},
        {frame: 208, value: _M(.9955,-.0885,-.0336,0,.0938,.9699,.2247,0,.0127,-.2268,.9739,0,0,1.3168,0,1)},
        {frame: 209, value: _M(.9955,-.0885,-.0336,0,.0936,.9725,.2131,0,.0138,-.2153,.9765,0,0,1.3168,0,1)},
        {frame: 210, value: _M(.9955,-.0885,-.0336,0,.0934,.9751,.201,0,.015,-.2032,.979,0,0,1.3168,0,1)},
        {frame: 211, value: _M(.9955,-.0885,-.0336,0,.0932,.9776,.1884,0,.0162,-.1907,.9815,0,0,1.3168,0,1)},
        {frame: 212, value: _M(.9955,-.0885,-.0336,0,.093,.98,.1758,0,.0173,-.1781,.9839,0,0,1.3168,0,1)},
        {frame: 213, value: _M(.9955,-.0885,-.0336,0,.0928,.9822,.1633,0,.0185,-.1657,.986,0,0,1.3168,0,1)},
        {frame: 214, value: _M(.9955,-.0885,-.0336,0,.0926,.9841,.1514,0,.0196,-.1538,.9879,0,0,1.3168,0,1)},
        {frame: 215, value: _M(.9955,-.0885,-.0336,0,.0923,.9858,.1403,0,.0207,-.1427,.9895,0,0,1.3168,0,1)},
        {frame: 216, value: _M(.9955,-.0885,-.0336,0,.0921,.9872,.1305,0,.0216,-.133,.9909,0,0,1.3168,0,1)},
        {frame: 217, value: _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1)},
        {frame: 224, value: _M(.9955,-.0885,-.0336,0,.0921,.9876,.1271,0,.0219,-.1296,.9913,0,0,1.3168,0,1)},
        {frame: 225, value: _M(.9955,-.0885,-.0336,0,.0922,.9865,.1352,0,.0212,-.1377,.9902,0,0,1.3168,0,1)},
        {frame: 226, value: _M(.9955,-.0885,-.0336,0,.0924,.9852,.1445,0,.0203,-.1469,.9889,0,0,1.3168,0,1)},
        {frame: 227, value: _M(.9955,-.0885,-.0336,0,.0926,.9836,.1547,0,.0193,-.1571,.9874,0,0,1.3168,0,1)},
        {frame: 228, value: _M(.9955,-.0885,-.0336,0,.0928,.9818,.1655,0,.0183,-.1678,.9856,0,0,1.3168,0,1)},
        {frame: 229, value: _M(.9955,-.0885,-.0336,0,.093,.9798,.1767,0,.0173,-.1791,.9837,0,0,1.3168,0,1)},
        {frame: 230, value: _M(.9955,-.0885,-.0336,0,.0932,.9777,.1883,0,.0162,-.1906,.9815,0,0,1.3168,0,1)},
        {frame: 231, value: _M(.9955,-.0885,-.0336,0,.0934,.9754,.1999,0,.0151,-.2021,.9792,0,0,1.3168,0,1)},
        {frame: 232, value: _M(.9955,-.0885,-.0336,0,.0936,.9729,.2115,0,.014,-.2137,.9768,0,0,1.3168,0,1)},
        {frame: 233, value: _M(.9955,-.0885,-.0336,0,.0937,.9703,.2229,0,.0129,-.225,.9743,0,0,1.3168,0,1)},
        {frame: 234, value: _M(.9955,-.0885,-.0336,0,.0939,.9677,.234,0,.0118,-.2361,.9717,0,0,1.3168,0,1)},
        {frame: 235, value: _M(.9955,-.0885,-.0336,0,.094,.965,.2447,0,.0107,-.2468,.969,0,0,1.3168,0,1)},
        {frame: 236, value: _M(.9955,-.0885,-.0336,0,.0941,.9624,.255,0,.0097,-.257,.9664,0,0,1.3168,0,1)},
        {frame: 237, value: _M(.9955,-.0885,-.0336,0,.0942,.9597,.2647,0,.0088,-.2667,.9638,0,0,1.3168,0,1)},
        {frame: 238, value: _M(.9955,-.0885,-.0336,0,.0943,.9572,.2737,0,.0079,-.2757,.9612,0,0,1.3168,0,1)},
        {frame: 239, value: _M(.9955,-.0885,-.0336,0,.0944,.9547,.2821,0,.0071,-.2841,.9588,0,0,1.3168,0,1)},
        {frame: 240, value: _M(.9955,-.0885,-.0336,0,.0944,.9524,.2898,0,.0063,-.2917,.9565,0,0,1.3168,0,1)},
        {frame: 241, value: _M(.9955,-.0885,-.0336,0,.0945,.9503,.2968,0,.0056,-.2987,.9543,0,0,1.3168,0,1)},
        {frame: 242, value: _M(.9955,-.0885,-.0336,0,.0945,.9483,.303,0,.005,-.3048,.9524,0,0,1.3168,0,1)},
        {frame: 243, value: _M(.9955,-.0885,-.0336,0,.0945,.9465,.3085,0,.0045,-.3103,.9506,0,0,1.3168,0,1)},
        {frame: 244, value: _M(.9955,-.0885,-.0336,0,.0945,.945,.3132,0,.004,-.315,.9491,0,0,1.3168,0,1)},
        {frame: 245, value: _M(.9955,-.0885,-.0336,0,.0946,.9437,.3171,0,.0036,-.3189,.9478,0,0,1.3168,0,1)},
        {frame: 246, value: _M(.9955,-.0885,-.0336,0,.0946,.9426,.3203,0,.0033,-.3221,.9467,0,0,1.3168,0,1)},
        {frame: 247, value: _M(.9955,-.0885,-.0336,0,.0946,.9417,.3228,0,.0031,-.3245,.9459,0,0,1.3168,0,1)},
        {frame: 248, value: _M(.9955,-.0885,-.0336,0,.0946,.9411,.3245,0,.0029,-.3263,.9453,0,0,1.3168,0,1)},
        {frame: 249, value: _M(.9955,-.0885,-.0336,0,.0946,.9408,.3256,0,.0028,-.3273,.9449,0,0,1.3168,0,1)},
        {frame: 250, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0027,-.3276,.9448,0,0,1.3168,0,1)},
        {frame: 252, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0027,-.3276,.9448,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        skeleton.createAnimationRange("Attack", 0, 20);
        skeleton.createAnimationRange("death", 30, 51);
        skeleton.createAnimationRange("Run", 60, 83);
        skeleton.createAnimationRange("Skill01", 90, 108);
        skeleton.createAnimationRange("stand", 120, 180);
        skeleton.createAnimationRange("Stand_with_weapon", 190, 252);
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .9229,.0569,-.2816,1.0366,-.0245,-.3138,.9237,-.0248,-.2665,.9275,-.03,-.4911,.7954,-.0236,-1.0024,.7826,-.026,-.4787,.9092,.0619,-1.0158,.7954,-.0236,-1.0024,.9085,-.0222,-1.065,1.0908,.0651,-.9096,1.0791,-.0253,-.5016,1.0796,.0598,-.498,.8157,.0554,-.3072,.7826,-.026,-.4787,.786,.0529,-.481,.8177,.0597,-.9544,.7826,-.026,-.4787
                    ,.7954,-.0236,-1.0024,1.0377,.0564,-.3218,1.0791,-.0253,-.5016,.9275,-.03,-.4911,.8193,-.0247,-.2913,.9237,-.0248,-.2665,1.027,.1396,-.3948,1.0796,.0598,-.498,.8408,.1976,-.6056,.786,.0529,-.481,.8299,.1356,-.3352,.7988,.132,-.4958,.9469,.2213,-.5893,1.0655,.1463,-.4796,.8886,.2112,-.6237,.9232,.1387,-.3195,1.0366,-.0245,-.3138
                    ,.9275,-.03,-.4911,.9237,-.0248,-.2665,1.1289,-.0218,-.9556,1.1289,-.0218,-.9556,1.0791,-.0253,-.5016,.8193,-.0247,-.2913,-.9268,.0569,1.0005,-1.0164,-.0293,1.0032,-1.0244,.0515,.9956,-.987,-.0324,.809,-1.0978,-.0253,.2926,-1.2267,-.0319,.2872,-1.2107,.0527,.3328,-1.0978,-.0253,.2926,-1.1004,.0545,.3475,-1.1235,-.0361,.86,-1.3216,.0395,.5104
                    ,-1.1171,.0517,.854,-.8459,-.0199,.7606,-.8215,.0565,.9678,-.8436,.0584,.7655,-.8459,-.0199,.7606,-.8436,.0584,.7655,-1.1235,-.0361,.86,-1.1171,.0517,.854,-.8224,-.0234,.9818,-.987,-.0324,.809,-.9238,-.0246,1.0149,-1.0321,.1405,.9024,-1.1171,.0517,.854,-1.0773,.1466,.8322,-.9087,.1694,.6434,-.8436,.0584,.7655,-.8186,.1334,.7736
                    ,-.8347,.1386,.939,-.8186,.1334,.7736,-1.0773,.1466,.8322,-.9942,.2007,.6976,-.9627,.1795,.646,-.9192,.1387,.9631,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.1235,-.0361,.86,-1.3739,-.045,.4841,-1.3739,-.045,.4841,-1.1235,-.0361,.86,-.8224,-.0234,.9818,.9085,-.0222,-1.065,.7954,-.0236,-1.0024,.8193,-.0247,-.2913,.7826,-.026,-.4787
                    ,.786,.0529,-.481,.7826,-.026,-.4787,1.0796,.0598,-.498,1.0791,-.0253,-.5016,.9275,-.03,-.4911,.7826,-.026,-.4787,1.0655,.1463,-.4796,1.0796,.0598,-.498,.7988,.132,-.4958,.786,.0529,-.481,1.0366,-.0245,-.3138,1.0791,-.0253,-.5016,.9275,-.03,-.4911,1.1289,-.0218,-.9556,.9085,-.0222,-1.065,.8193,-.0247,-.2913,-.9238,-.0246,1.0149
                    ,-.8459,-.0199,.7606,-1.2267,-.0319,.2872,-1.0978,-.0253,.2926,-.8224,-.0234,.9818,-1.0978,-.0253,.2926,-.8459,-.0199,.7606,-1.1235,-.0361,.86,-.8459,-.0199,.7606,-.987,-.0324,.809,-1.1171,.0517,.854,-.8436,.0584,.7655,-1.0773,.1466,.8322,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.2267,-.0319,.2872,-1.3739,-.045,.4841,-.8224,-.0234,.9818
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
                    .0632,.2833,.9569,.6004,-.5806,.5499,.0667,-.5664,.8214,.0018,-1,.0043,-.744,-.4255,-.5151,-.7527,-.6568,.0454,-.0285,.7237,-.6895,-.744,-.4255,-.5151,-.0179,-.4057,-.9138,.6559,.6892,-.3077,.7283,-.6786,.0953,.9783,.1969,.0645,-.7225,.2181,.6561,-.7527,-.6568,.0454,-.9908,.1296,.0396,-.6953,.626,-.3532,-.7527,-.6568,.0454
                    ,-.744,-.4255,-.5151,.7186,.2635,.6436,.7283,-.6786,.0953,.0018,-1,.0043,-.5675,-.5523,.6106,.0667,-.5664,.8214,.8057,.3995,.4372,.9783,.1969,.0645,-.7997,.5654,-.2021,-.9908,.1296,.0396,-.7032,.3518,.6178,-.9832,.1369,-.1208,.5188,.8104,-.2721,.9684,.1917,-.1591,-.1133,.922,-.3702,.1316,.4837,.8653,.6004,-.5806,.5499
                    ,.0018,-1,.0043,.0667,-.5664,.8214,.7927,-.3764,-.4795,.7927,-.3764,-.4795,.7283,-.6786,.0953,-.5675,-.5523,.6106,.0969,.2821,.9545,-.3435,-.6086,.7152,-.4892,.2911,.8222,.054,-.9985,-.0058,.4602,-.3819,-.8015,-.3677,-.416,-.8317,-.3254,.7385,-.5904,.4602,-.3819,-.8015,.4229,.6665,-.6138,-.6103,-.6755,.4137,-.7298,.681,.0597
                    ,-.8172,.2719,.5082,.7319,-.6317,-.2554,.8219,.1959,.5348,.9438,-.0952,-.3164,.7319,-.6317,-.2554,.9438,-.0952,-.3164,-.6103,-.6755,.4137,-.8172,.2719,.5082,.6794,-.54,.4968,.054,-.9985,-.0058,.0932,-.5769,.8115,-.6295,.5293,.5687,-.8172,.2719,.5082,-.704,.6064,.3696,.7546,.2453,-.6086,.9438,-.0952,-.3164,.9273,-.2814,-.2468
                    ,.8386,.2281,.4947,.9273,-.2814,-.2468,-.704,.6064,.3696,-.3308,.9193,-.2129,-.0345,.9093,-.4146,.0226,.4884,.8723,-.3435,-.6086,.7152,.054,-.9985,-.0058,-.6103,-.6755,.4137,-.9055,-.4187,-.0683,-.9055,-.4187,-.0683,-.6103,-.6755,.4137,.6794,-.54,.4968,-.0179,-.4057,-.9138,-.744,-.4255,-.5151,-.5675,-.5523,.6106,-.7527,-.6568,.0454
                    ,-.9908,.1296,.0396,-.7527,-.6568,.0454,.9783,.1969,.0645,.7283,-.6786,.0953,.0018,-1,.0043,-.7527,-.6568,.0454,.9684,.1917,-.1591,.9783,.1969,.0645,-.9832,.1369,-.1208,-.9908,.1296,.0396,.6004,-.5806,.5499,.7283,-.6786,.0953,.0018,-1,.0043,.7927,-.3764,-.4795,-.0179,-.4057,-.9138,-.5675,-.5523,.6106,.0932,-.5769,.8115
                    ,.7319,-.6317,-.2554,-.3677,-.416,-.8317,.4602,-.3819,-.8015,.6794,-.54,.4968,.4602,-.3819,-.8015,.7319,-.6317,-.2554,-.6103,-.6755,.4137,.7319,-.6317,-.2554,.054,-.9985,-.0058,-.8172,.2719,.5082,.9438,-.0952,-.3164,-.704,.6064,.3696,-.3435,-.6086,.7152,.054,-.9985,-.0058,-.3677,-.416,-.8317,-.9055,-.4187,-.0683,.6794,-.54,.4968
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
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .9573,2.6152,-.5467,1.0377,2.4378,-.4618,1.0785,2.602,-.3954,.8624,2.3895,-.2568,.76,2.3897,-.3839,.8024,2.43,-.3885,.8038,2.5735,-.4894,.9377,2.4567,-.585,.8019,2.5337,-.3134,.8624,2.3895,-.2568,.8024,2.43,-.3885,.889,2.4899,-.1576,1.0386,2.4117,-.3075,.8624,2.3895,-.2568,1.0386,2.4117,-.3075,.8929,2.3406,-.2514,.9377,2.4567,-.585
                    ,1.0327,2.3978,-.469,1.0377,2.4378,-.4618,.8047,2.4526,-.5325,.9226,2.4241,-.6151,.9377,2.4567,-.585,1.0386,2.4117,-.3075,1.0327,2.3978,-.469,1.0611,2.3684,-.2989,.8024,2.43,-.3885,.8047,2.4526,-.5325,.8024,2.43,-.3885,.7391,2.4219,-.537,1.0785,2.602,-.3954,1.0841,2.5571,-.2113,1.0807,2.7332,-.357,1.0877,2.6817,-.1433,.7323,2.6998,-.4706
                    ,.8019,2.5337,-.3134,.8672,2.6025,-.0842,.7261,2.6489,-.2522,.9411,2.7495,-.5326,1.0807,2.7332,-.357,-1.0912,2.4303,.4943,-1.0979,2.6046,.3671,-1.0814,2.6004,.5578,-.8372,2.3859,.3574,-.8228,2.3928,.5189,-.8552,2.4271,.375,-.9753,2.4539,.2734,-.9408,2.5651,.2892,-.8064,2.5297,.4229,-.8228,2.3928,.5189,-.7779,2.4992,.6062,-.9829,2.4102,.6033
                    ,-.9586,2.5659,.6972,-.8382,2.343,.5425,-.9829,2.4102,.6033,-1.0889,2.3866,.4933,-1.1121,2.45,.3437,-1.0912,2.4303,.4943,-1.1271,2.4215,.3181,-.9753,2.4539,.2734,-.9829,2.4102,.6033,-1.0889,2.3866,.4933,-1.0912,2.4303,.4943,-.8552,2.4271,.375,-.8064,2.5297,.4229,-.941,2.4245,.2438,-.8552,2.4271,.375,-.9753,2.4539,.2734,-1.0814,2.6004,.5578
                    ,-1.0606,2.7338,.5802,-.918,2.6947,.7441,-.8832,2.6897,.2609,-.8064,2.5297,.4229,-.728,2.6506,.4181,-.7149,2.6153,.6393,-.728,2.6506,.4181,-1.0792,2.7386,.3561,-1.0606,2.7338,.5802,.8047,2.4526,-.5325,.8624,2.3895,-.2568,1.0386,2.4117,-.3075,.9377,2.4567,-.585,1.0386,2.4117,-.3075,1.0377,2.4378,-.4618,1.0327,2.3978,-.469,.8019,2.5337,-.3134
                    ,.8024,2.43,-.3885,.8024,2.43,-.3885,1.0785,2.602,-.3954,1.0377,2.4378,-.4618,1.0785,2.602,-.3954,.7261,2.6489,-.2522,.8019,2.5337,-.3134,-1.1121,2.45,.3437,-1.1121,2.45,.3437,-.8552,2.4271,.375,-.8228,2.3928,.5189,-.8228,2.3928,.5189,-.9822,2.3573,.6241,-.9829,2.4102,.6033,-.9753,2.4539,.2734,-.9829,2.4102,.6033,-1.0889,2.3866,.4933
                    ,-.8552,2.4271,.375,-.8552,2.4271,.375,-1.0912,2.4303,.4943,-1.0814,2.6004,.5578,-1.0814,2.6004,.5578,-.8064,2.5297,.4229,-.728,2.6506,.4181
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
                    .2989,.1545,-.9417,.9268,-.0609,-.3706,.9414,-.0111,-.337,-.5229,-.3241,.7884,-.673,.6291,.389,-.8931,.364,.2642,-.7802,-.0506,-.6234,.3533,.3639,-.8618,-.9155,-.3766,.1412,-.5229,-.3241,.7884,-.8931,.364,.2642,-.2119,-.6233,.7527,.8668,-.0606,.4949,-.5229,-.3241,.7884,.8668,-.0606,.4949,-.0781,.0697,.9945,.3533,.3639,-.8618
                    ,.9348,.011,-.3551,.9268,-.0609,-.3706,-.5795,.6384,-.5065,.1422,.6341,-.76,.3533,.3639,-.8618,.8668,-.0606,.4949,.9348,.011,-.3551,.6703,.4635,.5795,-.8931,.364,.2642,-.5795,.6384,-.5065,-.8931,.364,.2642,-.464,.8816,-.0856,.9414,-.0111,-.337,.8318,-.3642,.4189,.9459,.0758,-.3154,.8276,-.2871,.4823,-.7227,-.3254,-.6097
                    ,-.9155,-.3766,.1412,-.1916,-.5615,.8049,-.8305,-.5451,.1144,.2808,.1128,-.9531,.9459,.0758,-.3154,-.9163,-.0644,.3952,-.8884,.1105,-.4455,-.9152,-.0183,.4026,.8591,.4191,-.2937,.9124,-.3182,.2575,.862,.2132,-.4599,-.016,.4482,-.8938,.1163,-.0713,-.9906,.8109,-.3524,-.4671,.9124,-.3182,.2575,.6839,-.5694,.456,-.2922,-.1054,.9505
                    ,-.313,-.3289,.891,.7523,.0898,.6526,-.2922,-.1054,.9505,-.8797,-.0025,.4756,-.8821,.3725,-.2881,-.9163,-.0644,.3952,-.7037,.6248,-.3382,-.016,.4482,-.8938,-.2922,-.1054,.9505,-.8797,-.0025,.4756,-.9163,-.0644,.3952,.862,.2132,-.4599,.8109,-.3524,-.4671,.3027,.7843,-.5415,.862,.2132,-.4599,-.016,.4482,-.8938,-.9152,-.0183,.4026
                    ,-.9081,.0704,.4128,-.2667,-.2544,.9296,.1416,-.2763,-.9506,.8109,-.3524,-.4671,.7558,-.4787,-.4468,.7046,-.5204,.4824,.7558,-.4787,-.4468,-.8639,.081,-.4971,-.9081,.0704,.4128,-.5795,.6384,-.5065,-.5229,-.3241,.7884,.8668,-.0606,.4949,.3533,.3639,-.8618,.8668,-.0606,.4949,.9268,-.0609,-.3706,.9348,.011,-.3551,-.9155,-.3766,.1412
                    ,-.8931,.364,.2642,-.8931,.364,.2642,.9414,-.0111,-.337,.9268,-.0609,-.3706,.9414,-.0111,-.337,-.8305,-.5451,.1144,-.9155,-.3766,.1412,-.8821,.3725,-.2881,-.8821,.3725,-.2881,.862,.2132,-.4599,.9124,-.3182,.2575,.9124,-.3182,.2575,-.037,.3651,.9302,-.2922,-.1054,.9505,-.016,.4482,-.8938,-.2922,-.1054,.9505,-.8797,-.0025,.4756
                    ,.862,.2132,-.4599,.862,.2132,-.4599,-.9163,-.0644,.3952,-.9152,-.0183,.4026,-.9152,-.0183,.4026,.8109,-.3524,-.4671,.7558,-.4787,-.4468
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
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
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
            this.numBoneInfluencers = 7;


            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1392,3.9968,-.1472,.2227,4.0714,-.044,.1302,4.062,-.1319,.2607,3.3504,.3399,.1157,3.7646,.4035,.3772,3.7464,.3059,.4261,3.3614,-.1361,.1824,3.1003,-.3235,.3113,3.0979,-.1302,.8987,3.2754,-.2377,.8614,3.0002,-.3303,.9671,2.9943,-.21,.0213,3.9214,-.2014,.1392,3.9968,-.1472,.0381,3.9958,-.1658,.7415,3.7154,.0448,.6066,3.3825,.0437
                    ,.5621,3.3668,.167,.2278,2.8538,.2652,.0903,3.0908,.3508,.2264,3.0908,.2854,.0197,3.4389,-.3918,-.1151,3.093,-.3078,.0417,3.0954,-.3439,.499,3.7505,-.3871,.5204,3.4186,-.3149,.6979,3.4188,-.2995,.3251,2.8792,-.0772,.2041,2.7328,-.2146,.3403,2.7272,-.0566,.6877,3.7469,-.1737,.7832,3.4305,-.2126,.861,2.8712,-.0436,.7305,2.7963,-.1977
                    ,.7548,2.9035,-.1572,.6372,3.1529,-.3756,.7794,3.2505,-.3657,.7577,3.1279,.0317,.9651,2.9601,-.0585,.861,2.8712,-.0436,.7548,2.9035,-.1572,.6091,3.1367,-.1646,.9525,2.6117,-.5327,1.0237,2.437,-.4562,1.0642,2.6017,-.3903,1.0656,2.8276,-.0929,.8612,2.7523,-.039,.8614,3.0002,-.3303,1.0569,2.8738,-.2944,.9671,2.9943,-.21,.7686,2.9379,-.3128
                    ,.927,2.888,-.4607,.8614,3.0002,-.3303,.8697,2.3932,-.2696,.7729,2.3846,-.3899,.8072,2.4295,-.3904,.8087,2.573,-.4913,.9324,2.452,-.5716,.8068,2.5331,-.3153,.8697,2.3932,-.2696,.8072,2.4295,-.3904,.8924,2.4984,-.1697,1.0256,2.4139,-.3149,.8697,2.3932,-.2696,.9519,2.1768,-.3365,.8407,2.0749,-.4966,.8878,2.1903,-.5074,1.0256,2.4139,-.3149
                    ,.8951,2.3382,-.2662,.9324,2.452,-.5716,1.0187,2.3953,-.4638,1.0237,2.437,-.4562,.8096,2.4522,-.5344,.9202,2.4167,-.6022,.9324,2.452,-.5716,1.0151,2.1802,-.4936,.8359,2.2047,-.6502,.9274,2.1932,-.6528,.3317,3.9489,-.0504,.499,3.7505,-.3871,.6877,3.7469,-.1737,-.0809,3.9203,-.1892,.0266,3.7833,-.3486,.1157,3.7646,.4035,.1772,3.8939,.2926
                    ,.3772,3.7464,.3059,.3093,3.4573,-.3824,.0266,3.7833,-.3486,.0585,3.9967,.2801,.1596,3.9969,.2356,.3317,3.9489,-.0504,.2829,3.9987,.1286,.2562,4.0098,-.0328,-.0985,2.663,-.2778,.0775,2.5621,-.2756,.0594,2.6923,-.3009,-.1021,2.8587,-.2879,.0594,2.6923,-.3009,.049,2.8721,-.3161,.3637,2.6638,.1887,.2267,2.6479,.2674,-.0969,2.3486,-.2531
                    ,.1397,2.4321,-.3022,.3403,2.7272,-.0566,.227,2.6658,-.2276,.3716,2.6545,-.0531,.2267,2.6479,.2674,.3927,2.5788,.1864,.2847,2.4785,.2712,.3382,1.8974,-.5434,.3469,1.5354,-.5985,.4415,1.5723,-.6178,.2877,2.5312,-.2825,.4378,2.5082,-.1162,.4603,2.423,.1299,.3369,2.351,.2318,.4366,1.4261,-.2451,.3571,1.3688,-.5009,.3304,1.4846,-.4703
                    ,.6169,1.9191,-.392,.5363,1.5977,-.6058,.6624,1.5894,-.5045,.2293,1.765,-.2875,.4366,1.4261,-.2451,.3304,1.4846,-.4703,.5188,1.7742,-.0955,.6702,1.5347,-.3509,.5725,1.4759,-.2738,.4751,1.4528,-.6627,.5311,1.0059,-.6496,.6137,1.0306,-.6676,.5725,1.4759,-.2738,.7066,1.4139,-.3945,.5905,1.3581,-.3133,.4415,1.5723,-.6178,.3816,1.4231,-.6416
                    ,.6624,1.5894,-.5045,.5793,1.4681,-.6344,.7177,1.4671,-.5392,.727,.3781,-.4837,.8385,.1316,-.3427,.8103,.1283,-.4961,.7181,1.0578,-.6434,.8369,1.0843,-.5626,.4579,1.3176,-.2837,.4486,.9694,-.5132,.8212,1.0671,-.4138,.7116,1.0171,-.2351,.9219,.0528,-.2929,1.0293,-.0176,-.3205,.923,-.0179,-.2765,.8834,.4085,-.3161,1.0176,.135,-.4007
                    ,.9216,.1328,-.33,.8236,.4176,-.6212,.851,.1913,-.6048,.8897,.2026,-.6254,.9812,.4538,-.517,.9418,.2107,-.5865,1.0548,.141,-.4808,.9275,-.0179,-.4911,.8043,-.0182,-.9962,.7919,-.0182,-.4794,.9094,.0528,-1.0078,.8043,-.0182,-.9962,.9089,-.0179,-1.0536,1.0825,.0573,-.9056,1.07,-.0174,-.5029,1.0681,.0563,-.4995,.8243,.0525,-.3152
                    ,.7919,-.0182,-.4794,.7978,.0505,-.4818,.8049,2.0958,-.6506,.7093,2.0448,-.5707,.8698,2.0506,-.6584,1.0497,2.3644,-.308,.929,2.0171,-.4994,.7514,1.9843,-.3579,.9743,2.0002,-.336,.8261,.0522,-.9499,.7919,-.0182,-.4794,.8043,-.0182,-.9962,1.029,.0531,-.3296,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.8262,-.0182,-.2987,.923,-.0179,-.2765
                    ,.9593,.4397,-.4251,1.0548,.141,-.4808,.3571,1.3688,-.5009,.8369,1.0843,-.5626,.727,.3781,-.4837,.772,.4017,-.6093,.6702,1.5347,-.3509,.7177,1.4671,-.5392,.2142,1.8465,-.5189,.3304,1.4846,-.4703,.6169,1.9191,-.392,.6254,1.8418,-.1764,.3304,1.4846,-.4703,.3469,1.5354,-.5985,.3716,2.6545,-.0531,.3637,2.6638,.1887,.3716,2.6545,-.0531
                    ,.236,3.9076,-.234,.2562,4.0098,-.0328,.1392,3.9968,-.1472,.4159,3.9071,.1239,.6877,3.7469,-.1737,.7415,3.7154,.0448,.7911,2.2184,-.5125,1.0187,2.3953,-.4638,1.0473,2.1782,-.3202,1.0256,2.4139,-.3149,1.0187,2.3953,-.4638,.8072,2.4295,-.3904,.8096,2.4522,-.5344,.8072,2.4295,-.3904,.7502,2.4121,-.5341,.9671,2.9943,-.21,.9651,2.9601,-.0585
                    ,1.0642,2.6017,-.3903,1.0715,2.5622,-.218,.6091,3.1367,-.1646,.7686,2.9379,-.3128,.7305,2.7963,-.1977,.7352,2.8428,-.4038,.6877,3.7469,-.1737,.8067,3.427,-.0317,.3731,2.8591,.1697,.3403,2.7272,-.0566,.9102,3.2661,-.0393,.9671,2.9943,-.21,.4239,3.0912,.1374,.4261,3.3614,-.1361,.3113,3.0979,-.1302,.2562,4.0098,-.0328,.2202,4.0607,.1098
                    ,.2227,4.0714,-.044,.0441,4.0615,-.1674,.0381,3.9958,-.1658,.0585,3.9967,.2801,.1306,4.0597,.2016,.1596,3.9969,.2356,1.0176,.135,-.4007,1.0681,.0563,-.4995,.851,.1913,-.6048,.7978,.0505,-.4818,.8385,.1316,-.3427,.8103,.1283,-.4961,.9418,.2107,-.5865,1.0548,.141,-.4808,.8897,.2026,-.6254,.9216,.1328,-.33,.7832,3.4305,-.2126
                    ,.8067,3.427,-.0317,.8067,3.427,-.0317,.6066,3.3825,.0437,.6979,3.4188,-.2995,.7832,3.4305,-.2126,1.0569,2.8738,-.2944,.8068,2.5331,-.3153,.3251,2.8792,-.0772,.1153,3.3511,.4018,.193,2.8809,-.2229,.6066,3.3825,.0437,.5325,3.3047,-.1545,.4261,3.3614,-.1361,.3093,3.4573,-.3824,.5325,3.3047,-.1545,.5204,3.4186,-.3149,.4261,3.3614,-.1361
                    ,.5325,3.3047,-.1545,.5621,3.3668,.167,.8385,.1316,-.3427,.8897,.2026,-.6254,.9418,.2107,-.5865,.1596,3.9969,.2356,.2829,3.9987,.1286,.0381,3.9958,-.1658,-.0196,4.0613,-.178,-.0389,3.9956,-.1694,1.0293,-.0176,-.3205,.9275,-.0179,-.4911,.923,-.0179,-.2765,1.1197,-.0166,-.9497,1.1197,-.0166,-.9497,1.07,-.0174,-.5029,.8834,.433,-.5978
                    ,.7796,.3803,-.3271,.8262,-.0182,-.2987,.5041,.9622,-.29,.5363,1.5977,-.6058,.4366,1.4261,-.2451,.3209,1.7011,-.0511,.1263,2.2398,.3023,.0599,2.3739,.3472,.4611,1.9342,-.5304,.0527,2.659,.3167,.0527,2.659,.3167,.052,2.8619,.3018,.2041,2.7328,-.2146,-.1452,3.7808,-.2915,-.1577,3.4367,-.3405,.3772,3.7464,.3059,.7415,3.7154,.0448
                    ,.499,3.7505,-.3871,-.0389,3.9956,-.1694,.5621,3.3668,.167,.7415,3.7154,.0448,.1397,2.4321,-.3022,.2877,2.5312,-.2825,.3369,2.351,.2318,.1263,2.2398,.3023,.4378,2.5082,-.1162,.4603,2.423,.1299,-.0174,2.2675,-.3508,.2293,1.765,-.2875,.4603,2.423,.1299,.3369,2.351,.2318,.0301,2.177,-.0608,.2877,2.5312,-.2825,.4378,2.5082,-.1162
                    ,.1397,2.4321,-.3022,.4486,.9694,-.5132,.9812,.4538,-.517,.0301,2.177,-.0608,-.1022,2.1917,-.2865,-.0174,2.2675,-.3508,.2267,2.6479,.2674,.1176,4.4737,.1553,.2016,4.5545,.0582,.2092,4.4724,.0612,.1049,4.1974,.1405,.1723,4.3332,.0137,.1758,4.1604,.0523,.2269,4.5492,-.1093,.2375,4.4685,-.1082,.202,4.2806,-.0892,.2009,4.1511,-.0755
                    ,.2269,4.5492,-.1093,.2106,4.4684,-.2604,.2375,4.4685,-.1082,.202,4.2806,-.0892,.1211,4.1242,-.1743,.2009,4.1511,-.0755,.0568,4.2919,-.3481,.0059,4.2745,-.3527,.0783,4.1048,-.3354,.1345,4.467,-.3688,.0052,4.5427,-.3775,.0044,4.4661,-.3985,.1281,4.5434,-.3556,.0064,4.6244,-.3428,.0052,4.5427,-.3775,.2269,4.5492,-.1093,.176,4.6257,-.215
                    ,.2009,4.5447,-.2614,.2016,4.5545,.0582,.1955,4.6294,-.1085,.2269,4.5492,-.1093,.1138,4.5558,.1514,.1633,4.6342,.0406,.2016,4.5545,.0582,.1297,4.3688,-.3463,.0568,4.2919,-.3481,.1179,4.2746,-.3436,.202,4.2806,-.0892,.2176,4.44,-.2601,.1858,4.2755,-.2734,.1723,4.3332,.0137,.2371,4.4406,-.1075,.202,4.2806,-.0892,.0988,4.3348,.1211
                    ,.2045,4.4398,.0448,.1723,4.3332,.0137,.0044,4.4661,-.3985,.0044,4.4382,-.3988,.0518,4.4384,-.3871,.2375,4.4685,-.1082,.2176,4.44,-.2601,.2371,4.4406,-.1075,.2045,4.4398,.0448,.2375,4.4685,-.1082,.2371,4.4406,-.1075,.115,4.4411,.1403,.2092,4.4724,.0612,.2045,4.4398,.0448,.094,4.6356,.1229,.0192,4.7022,.0418,.0572,4.7017,.027
                    ,.1955,4.6294,-.1085,.1082,4.6957,-.1565,.0933,4.7005,-.0464,.106,4.6979,-.1056,.0639,4.6948,-.2441,.1109,4.6246,-.3127,.0933,4.7005,-.0464,.0192,4.7022,.0418,.0095,4.6949,-.2502,.0234,4.4417,.1686,.1176,4.4737,.1553,.0234,4.4417,.1686,.0224,4.3354,.1424,.0238,4.5564,.1799,.0224,4.3354,.1424,.0229,4.1978,.159,.0238,4.4743,.1823
                    ,.1138,4.5558,.1514,.0095,4.6949,-.2502,.2106,4.4684,-.2604,.1397,4.4388,-.3612,.2176,4.44,-.2601,.1281,4.5434,-.3556,.1858,4.2755,-.2734,.0241,4.063,-.2871,.1109,4.0869,-.1615,.1088,4.114,.1733,.0249,4.1169,.1964,-.0072,4.1046,-.3453,-.0121,4.0628,-.3,.2009,4.1511,-.0755,.2078,4.1054,-.0595,.2078,4.1054,-.0595,.1903,4.1091,.0762
                    ,.0298,4.0599,.2286,.2227,4.0714,-.044,.1858,4.2755,-.2734,.1179,4.2746,-.3436,.0059,4.2745,-.3527,.0431,4.2872,-.3546,.0061,4.2873,-.3466,.0061,4.2873,-.3466,.0235,4.2858,-.4033,.0038,4.2857,-.4158,.0379,4.3663,-.3684,.0431,4.2872,-.3546,.0043,4.3707,-.401,.0568,4.2919,-.3481,.0403,4.3679,-.35,.0404,4.4213,-.3795,.0355,4.3708,-.3939
                    ,.0391,4.3996,-.374,.0467,4.4117,-.349,.0355,4.3708,-.3939,.1397,4.4388,-.3612,.0518,4.4384,-.3871,.0047,4.4328,-.391,.7085,2.0661,-.4651,.7257,2.0195,-.4644,.7257,2.0195,-.4644,.7292,2.0361,-.3603,.9002,2.0429,-.3389,.8407,2.0749,-.4966,.6906,2.1014,-.5713,.7085,2.0661,-.4651,.929,2.0171,-.4994,.6899,2.1672,-.4837,.7212,2.3017,-.454
                    ,.7191,2.315,-.5309,.7596,2.2215,-.5911,.7308,2.1466,-.5703,.6978,2.0904,-.5425,.7251,2.0724,-.5669,.7491,2.1471,-.5236,.6844,2.1803,-.5279,.7356,2.0728,-.5401,.7012,2.083,-.5171,1.0151,2.1802,-.4936,.929,2.0171,-.4994,.0913,3.7545,-.3524,.0056,4.1137,-.3603,.0053,3.7054,-.3641,.1635,4.125,-.3078,.1074,4.1302,-.3635,.0059,4.2745,-.3527
                    ,.056,4.274,-.3684,.0568,4.2919,-.3481,.1179,4.2746,-.3436,.0568,4.2919,-.3481,.1179,4.2746,-.3436,.1858,4.2467,-.2934,.1858,4.2755,-.2734,.1858,4.2755,-.2734,.21,4.2548,-.1422,.202,4.2806,-.0892,.257,4.0069,-.1913,.1109,4.1982,-.3463,.0065,4.1904,-.3346,.1175,4.2567,-.3638,-.222,3.9964,-.0585,-.2266,4.0712,.0219,-.2751,4.009,.1064
                    ,-.0333,3.3559,.4553,.1157,3.7646,.4035,.1153,3.3511,.4018,-.3879,3.0937,.1016,-.544,3.445,-.0595,-.467,3.3564,.215,-.8707,3.2717,.4912,-.8896,2.9975,.436,-.864,3.2267,.3209,-.1718,3.9211,-.1444,-.222,3.9964,-.0585,-.3915,3.9053,-.0113,-.4748,3.4033,.49,-.5948,3.7358,.5412,-.362,3.3951,.5481,-.0567,3.0923,.386,.052,2.8619,.3018
                    ,-.1192,2.8637,.3431,-.2772,3.0898,-.2603,-.1577,3.4367,-.3405,-.3281,3.4346,-.2637,-.696,3.7393,.063,-.6492,3.3926,.1598,-.544,3.445,-.0595,-.3965,2.7033,.0641,-.3422,2.8612,-.1156,-.3831,2.8717,.0758,-.6999,3.7396,.3397,-.7705,3.3976,.2923,-.698,2.8009,.4537,-.69,2.8867,.6521,-.6907,2.9103,.495,-.7584,3.1245,.2314,-.5788,3.1556,.615
                    ,-.7809,2.9796,.7065,-.7485,3.2886,.6461,-.6907,2.9103,.495,-.5971,3.1336,.3704,-1.0773,2.43,.4884,-1.0847,2.6018,.374,-1.0675,2.6002,.5518,-.8719,2.843,.7579,-.7809,2.9796,.7065,-1.0044,2.8773,.6027,-.8896,2.9975,.436,-.8847,3.0009,.5962,-1.0236,2.8807,.3921,-.8079,2.9352,.389,-.8896,2.9975,.436,-.8504,2.3803,.3623,-.837,2.3959,.5146
                    ,-.8685,2.4254,.382,-1.0986,2.4456,.3488,-.9431,2.5644,.3041,-.8193,2.5336,.4299,-.837,2.3959,.5146,-.7888,2.5071,.5993,-.9789,2.4123,.5889,-.9542,2.5705,.6835,-.986,2.0451,.3207,-.9263,2.1709,.4984,-1.015,2.1901,.339,-.8501,2.34,.5336,-.9789,2.4123,.5889,-1.0757,2.3851,.486,-1.0986,2.4456,.3488,-1.0773,2.43,.4884,-1.1155,2.4141,.3242
                    ,-.9759,2.4465,.2865,-1.0986,2.4456,.3488,-1.0873,2.1718,.4453,-1.0907,2.2109,.21,-.9458,2.4136,.2531,-.3505,3.9472,.1867,-.696,3.7393,.063,-.1452,3.7808,-.2915,-.0809,3.9203,-.1892,-.0139,3.8935,.3598,.1157,3.7646,.4035,-.1461,3.7534,.5009,-.3126,3.7826,-.2219,.0585,3.9967,.2801,.1018,3.866,.3779,-.3505,3.9472,.1867,-.2141,3.9989,.2706
                    ,-.3062,3.9099,.375,-.2656,2.4992,-.2098,-.0985,2.663,-.2778,-.2589,2.6544,-.2477,-.2553,2.8558,-.2574,-.0985,2.663,-.2778,-.1021,2.8587,-.2879,-.2862,2.704,.3008,-.2912,2.875,.3244,-.3294,2.3331,-.1638,-.0969,2.3486,-.2531,-.3965,2.7033,.0641,-.3812,2.588,-.1232,-.3562,2.6714,-.1302,-.1246,2.6738,.3343,-.3109,2.6306,.3224,-.2862,2.704,.3008
                    ,-.5727,1.7505,-.0629,-.5758,1.3936,.0191,-.4494,1.6987,-.0889,-.4196,2.6298,.0916,-.4535,2.4296,-.0949,-.1681,2.5418,.3725,-.384,2.4769,.3575,-.5201,1.2712,.158,-.464,1.4174,.3821,-.4922,1.3868,.1297,-.737,1.8487,.191,-.7475,1.4683,.0878,-.6748,1.8016,-.0028,-.3379,1.7006,.1301,-.464,1.4174,.3821,-.2921,1.7271,.3827,-.4898,1.8017,.4259
                    ,-.7276,1.5071,.3794,-.6282,1.8488,.3927,-.7106,1.3085,.0604,-.7171,.901,.2272,-.617,1.2784,.0399,-.5996,1.468,.4111,-.7702,1.3826,.404,-.7276,1.5071,.3794,-.67,1.4311,.0391,-.5758,1.3936,.0191,-.8036,1.5066,.2349,-.7871,1.3422,.1304,-.7475,1.4683,.0878,-.8298,.1295,.7751,-.731,.4095,.7916,-.7619,.3609,.6335,-.8576,1.3861,.2765
                    ,-.8795,.9679,.3096,-.5755,.897,.3092,-.4922,1.3042,.3992,-.6245,1.3456,.4288,-.8554,1.0483,.5475,-.9263,.0529,.9892,-1.0121,-.0221,.9947,-1.0187,.0485,.9857,-.9214,.1328,.9528,-.9382,.4547,.7793,-.817,.4482,.8412,-.9164,.369,.5568,-.9169,.1641,.6502,-.8648,.3528,.5456,-1.0037,.4449,.7105,-.9877,.1909,.7005,-.9577,.395,.6014
                    ,-.9877,-.0204,.8092,-1.1033,-.0204,.3022,-1.2223,-.0275,.2975,-1.2067,.0437,.3398,-1.1033,-.0204,.3022,-1.1054,.0466,.3551,-1.1163,-.0278,.8551,-1.312,.0323,.5103,-1.1069,.0487,.8487,-.8549,-.0127,.7638,-.8305,.0535,.9605,-.8545,.0555,.769,-.9182,1.9897,.1995,-1.0721,2.0563,.1809,-1.1238,2.023,.2333,-.9753,2.1656,.5816,-.9812,2.354,.6094
                    ,-.8427,1.993,.4071,-1.0519,2.0081,.3943,-.9579,2.0014,.5327,-.8549,-.0127,.7638,-.8545,.0555,.769,-1.1163,-.0278,.8551,-1.1069,.0487,.8487,-.8299,-.017,.9751,-.9877,-.0204,.8092,-.9239,-.0177,1.0051,-1.067,.1413,.8294,-1.0037,.4449,.7105,-.5201,1.2712,.158,-.9441,1.0252,.4279,-.8576,1.3861,.2765,-.7619,.3609,.6335,-.7276,1.5071,.3794
                    ,-.8576,1.3861,.2765,-.8036,1.5066,.2349,-.4922,1.3868,.1297,-.3379,1.7006,.1301,-.737,1.8487,.191,-.4922,1.3868,.1297,-.5758,1.3936,.0191,-.4196,2.6298,.0916,-.2862,2.704,.3008,-.4196,2.6298,.0916,-.3965,2.7033,.0641,-.2751,4.009,.1064,-.6999,3.7396,.3397,-.3505,3.9472,.1867,-.9929,2.2335,.201,-1.0757,2.3851,.486,-.9789,2.4123,.5889
                    ,-1.0757,2.3851,.486,-1.0773,2.43,.4884,-.8685,2.4254,.382,-.8193,2.5336,.4299,-.8685,2.4254,.382,-.8847,3.0009,.5962,-.7809,2.9796,.7065,-1.0675,2.6002,.5518,-.8079,2.9352,.389,-.5971,3.1336,.3704,-.698,2.8009,.4537,-.6907,2.9103,.495,-.6767,3.4457,.5621,-.6999,3.7396,.3397,-.3831,2.8717,.0758,-.8847,3.0009,.5962,-.8707,3.2717,.4912
                    ,-.3048,3.1001,.393,-.467,3.3564,.215,-.362,3.3951,.5481,-.2751,4.009,.1064,-.18,4.0605,.1701,-.2141,3.9989,.2706,-.1108,3.9957,-.1374,-.1588,4.0619,-.0922,-.0518,3.9966,.2969,.0298,4.0599,.2286,.0585,3.9967,.2801,-1.0237,.1358,.8955,-1.1069,.0487,.8487,-1.067,.1413,.8294,-.9169,.1641,.6502,-.8545,.0555,.769,-.8298,.1295,.7751
                    ,-.8437,.1344,.9324,-.8298,.1295,.7751,-.9877,.1909,.7005,-1.067,.1413,.8294,-.964,.1709,.6473,-.9169,.1641,.6502,-.9214,.1328,.9528,-.6767,3.4457,.5621,-.8707,3.2717,.4912,-.778,3.4237,.4119,-.6767,3.4457,.5621,-.4748,3.4033,.49,-.7705,3.3976,.2923,-.6492,3.3926,.1598,-.778,3.4237,.4119,-.7705,3.3976,.2923,-1.0044,2.8773,.6027
                    ,-.8436,2.8361,.3046,-.8193,2.5336,.4299,-.698,2.8009,.4537,-.6837,2.7674,.6607,-.3879,3.0937,.1016,-.1151,3.093,-.3078,.0903,3.0908,.3508,-.401,3.0907,-.1408,-.4748,3.4033,.49,-.467,3.3564,.215,-.5455,3.2984,.3015,-.5455,3.2984,.3015,-.6492,3.3926,.1598,-.467,3.3564,.215,-.5455,3.2984,.3015,-.362,3.3951,.5481,-.9214,.1328,.9528
                    ,-.9877,.1909,.7005,-.2141,3.9989,.2706,-.0705,4.0596,.2273,-.0389,3.9956,-.1694,-.0808,4.0615,-.1512,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.1163,-.0278,.8551,-1.3634,-.0392,.4854,-1.3634,-.0392,.4854,-1.1163,-.0278,.8551,-.964,.1709,.6473,-.8437,.1344,.9324,-.8299,-.017,.9751,-.6682,1.0411,.655,-.7475,1.4683,.0878,-.7992,.9267,.246
                    ,-.464,1.4174,.3821,.0599,2.3739,.3472,-.2231,2.4187,.3994,.0527,2.659,.3167,.0599,2.3739,.3472,.052,2.8619,.3018,-.1246,2.6738,.3343,-.3562,2.6714,-.1302,-.1452,3.7808,-.2915,-.1577,3.4367,-.3405,-.5948,3.7358,.5412,-.3126,3.7826,-.2219,-.0809,3.9203,-.1892,-.1108,3.9957,-.1374,-.362,3.3951,.5481,-.1461,3.7534,.5009,-.3294,2.3331,-.1638
                    ,-.4535,2.4296,-.0949,-.0146,2.2593,.3586,-.2231,2.4187,.3994,-.4962,2.4753,.1226,-.384,2.4769,.3575,-.0962,2.1498,.0395,-.2093,2.1768,-.254,-.384,2.4769,.3575,-.2231,2.4187,.3994,-.0962,2.1498,.0395,-.4535,2.4296,-.0949,-.4962,2.4753,.1226,-.3294,2.3331,-.1638,-.5121,.9565,.5227,-.5755,.897,.3092,-1.0037,.4449,.7105,-.9441,1.0252,.4279
                    ,.0599,2.3739,.3472,-.0962,2.1498,.0395,-.0146,2.2593,.3586,-.1022,2.1917,-.2865,-.2093,2.1768,-.254,-.0962,2.1498,.0395,.0527,2.659,.3167,-.0715,4.4738,.1617,-.1618,4.5546,.0704,-.0679,4.5559,.1575,-.06,4.1975,.146,-.1356,4.3334,.024,-.0552,4.3349,.1262,-.1692,4.4725,.0738,-.1982,4.5494,-.0951,-.1411,4.1605,.0706,-.1767,4.2807,-.0729
                    ,-.192,4.4686,-.247,-.1982,4.5494,-.0951,-.2087,4.4687,-.0934,-.1286,4.1242,-.1536,-.1767,4.2807,-.0729,-.1888,4.1512,-.0454,-.0072,4.1046,-.3453,-.0445,4.292,-.3448,-.1063,4.2747,-.3358,-.1233,4.4671,-.3602,.0052,4.5427,-.3775,-.116,4.5435,-.3475,-.116,4.5435,-.3475,.0064,4.6244,-.3428,-.0959,4.6247,-.3058,-.1982,4.5494,-.0951,-.1544,4.6258,-.204
                    ,-.1667,4.6296,-.0964,-.1618,4.5546,.0704,-.1667,4.6296,-.0964,-.1247,4.6343,.0502,-.0679,4.5559,.1575,-.05,4.6356,.1277,-.0445,4.292,-.3448,-.1172,4.3689,-.3381,-.1063,4.2747,-.3358,-.1767,4.2807,-.0729,-.199,4.4402,-.2462,-.2083,4.4408,-.0926,-.1356,4.3334,.024,-.2083,4.4408,-.0926,-.1656,4.4399,.0572,-.0552,4.3349,.1262,-.07,4.4412,.1465
                    ,-.0421,4.4384,-.3839,.0044,4.4661,-.3985,-.1233,4.4671,-.3602,-.199,4.4402,-.2462,-.2087,4.4687,-.0934,-.2083,4.4408,-.0926,-.1656,4.4399,.0572,-.2087,4.4687,-.0934,-.1692,4.4725,.0738,-.07,4.4412,.1465,-.1692,4.4725,.0738,-.0715,4.4738,.1617,.0192,4.7022,.0418,.0226,4.6362,.1423,-.0827,4.6958,-.1501,-.1667,4.6296,-.0964,-.0606,4.7006,-.0412
                    ,-.0444,4.6949,-.2405,.0095,4.6949,-.2502,.0192,4.7022,.0418,-.0606,4.7006,-.0412,-.0197,4.7018,.0295,.0234,4.4417,.1686,-.0715,4.4738,.1617,.0238,4.4743,.1823,-.0552,4.3349,.1262,.0234,4.4417,.1686,.0224,4.3354,.1424,.0238,4.5564,.1799,.0224,4.3354,.1424,.0229,4.1978,.159,.0238,4.4743,.1823,.0238,4.5564,.1799,.0064,4.6244,-.3428
                    ,-.1281,4.4389,-.3523,-.192,4.4686,-.247,-.199,4.4402,-.2462,-.1739,4.2756,-.259,-.1824,4.5449,-.2486,-.1824,4.5449,-.2486,-.092,4.1048,-.325,-.1739,4.2756,-.259,-.0495,4.063,-.2812,-.1311,4.0869,-.1355,-.0604,4.1141,.1842,.0229,4.1978,.159,.0249,4.1169,.1964,-.0072,4.1046,-.3453,-.2046,4.1054,-.0146,-.2046,4.1054,-.0146,-.1567,4.1091,.1085
                    ,.0298,4.0599,.2286,.0249,4.1169,.1964,-.2266,4.0712,.0219,-.0196,4.0613,-.178,-.1739,4.2756,-.259,.0059,4.2745,-.3527,-.0314,4.2873,-.3521,-.0445,4.292,-.3448,.0061,4.2873,-.3466,-.0151,4.2859,-.402,-.0314,4.2873,-.3521,-.027,4.3663,-.3662,-.0314,4.2873,-.3521,.0043,4.3707,-.401,-.0263,4.3708,-.3918,-.0445,4.292,-.3448,-.0314,4.2873,-.3521
                    ,.0043,4.3707,-.401,-.0302,4.4213,-.3771,-.0282,4.3679,-.3477,-.0282,4.3998,-.3583,-.0345,4.4117,-.3463,-.0263,4.3708,-.3918,-.1281,4.4389,-.3523,-.122,4.4125,-.3256,.0047,4.4328,-.391,-.8735,2.0359,.2725,-.8709,2.0019,.3076,-.8332,2.0344,.3727,-.8709,2.0019,.3076,-.9112,2.0321,.4689,-.9134,2.0403,.1699,-.986,2.0451,.3207,-1.0519,2.0081,.3943
                    ,-.8619,2.1818,.2068,-.9508,2.2191,.2742,-.8633,2.3058,.2736,-.9541,2.1637,.1787,-.9099,2.1126,.1579,-.8931,2.2001,.1778,-.9296,2.1548,.2216,-.9226,2.325,.2246,-.9315,2.0875,.1834,-.8922,2.1014,.1746,-1.0873,2.1718,.4453,-1.0519,2.0081,.3943,-1.153,2.1949,.2768,-.0797,3.7546,-.3467,-.0962,4.1303,-.3567,-.1498,4.1251,-.2969,.0059,4.2745,-.3527
                    ,-.0451,4.2741,-.365,.0052,4.2566,-.3729,-.1063,4.2747,-.3358,-.0445,4.292,-.3448,-.1063,4.2747,-.3358,-.1739,4.2468,-.2796,-.1067,4.2568,-.3562,-.1739,4.2756,-.259,-.1886,4.2549,-.1255,-.236,4.007,-.1735,-.0987,4.1982,-.3393,.0404,4.4213,-.3795,.0518,4.4384,-.3871,-.0302,4.4213,-.3771,-.0421,4.4384,-.3839,.2562,4.0098,-.0328,.1392,3.9968,-.1472
                    ,.3093,3.4573,-.3824,.7686,2.9379,-.3128,.861,2.8712,-.0436,.7548,2.9035,-.1572,.9651,2.9601,-.0585,.8614,3.0002,-.3303,.8096,2.4522,-.5344,.8697,2.3932,-.2696,1.0256,2.4139,-.3149,.9324,2.452,-.5716,.499,3.7505,-.3871,-.1452,3.7808,-.2915,.1157,3.7646,.4035,.1018,3.866,.3779,.499,3.7505,-.3871,.0266,3.7833,-.3486,.1018,3.866,.3779
                    ,.3317,3.9489,-.0504,-.0985,2.663,-.2778,.0594,2.6923,-.3009,-.0174,2.2675,-.3508,.3403,2.7272,-.0566,.2041,2.7328,-.2146,.2267,2.6479,.2674,.3637,2.6638,.1887,.4366,1.4261,-.2451,.5725,1.4759,-.2738,.6702,1.5347,-.3509,.4415,1.5723,-.6178,.3469,1.5354,-.5985,.6624,1.5894,-.5045,.5363,1.5977,-.6058,.9089,-.0179,-1.0536,.8043,-.0182,-.9962
                    ,.8262,-.0182,-.2987,.7919,-.0182,-.4794,.7257,2.0195,-.4644,.7978,.0505,-.4818,.7919,-.0182,-.4794,1.0681,.0563,-.4995,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.7919,-.0182,-.4794,.9812,.4538,-.517,1.0548,.141,-.4808,.3571,1.3688,-.5009,.4486,.9694,-.5132,.7177,1.4671,-.5392,.8369,1.0843,-.5626,.727,.3781,-.4837,.8103,.1283,-.4961
                    ,.6702,1.5347,-.3509,.6624,1.5894,-.5045,.7177,1.4671,-.5392,.2293,1.765,-.2875,.3304,1.4846,-.4703,.6169,1.9191,-.392,.6624,1.5894,-.5045,.3304,1.4846,-.4703,.3571,1.3688,-.5009,.3716,2.6545,-.0531,.4378,2.5082,-.1162,.3637,2.6638,.1887,.3403,2.7272,-.0566,.3716,2.6545,-.0531,.2562,4.0098,-.0328,.3317,3.9489,-.0504,.6877,3.7469,-.1737
                    ,1.0187,2.3953,-.4638,1.0151,2.1802,-.4936,1.0256,2.4139,-.3149,1.0237,2.437,-.4562,1.0187,2.3953,-.4638,.8407,2.0749,-.4966,.8068,2.5331,-.3153,.8072,2.4295,-.3904,.8072,2.4295,-.3904,.9671,2.9943,-.21,1.0569,2.8738,-.2944,1.0642,2.6017,-.3903,1.0237,2.437,-.4562,.6091,3.1367,-.1646,.7548,2.9035,-.1572,.7686,2.9379,-.3128,.7548,2.9035,-.1572
                    ,.7305,2.7963,-.1977,.6877,3.7469,-.1737,.7832,3.4305,-.2126,.3251,2.8792,-.0772,.3403,2.7272,-.0566,.8987,3.2754,-.2377,.9671,2.9943,-.21,.5621,3.3668,.167,.4261,3.3614,-.1361,.2562,4.0098,-.0328,.2829,3.9987,.1286,.0585,3.9967,.2801,1.0176,.135,-.4007,1.0548,.141,-.4808,1.0681,.0563,-.4995,.851,.1913,-.6048,.8103,.1283,-.4961
                    ,.7978,.0505,-.4818,.8385,.1316,-.3427,.9418,.2107,-.5865,.8897,.2026,-.6254,.851,.1913,-.6048,.9216,.1328,-.33,1.0176,.135,-.4007,.7832,3.4305,-.2126,.8987,3.2754,-.2377,.8067,3.427,-.0317,.6979,3.4188,-.2995,.5204,3.4186,-.3149,.7832,3.4305,-.2126,.6979,3.4188,-.2995,1.0569,2.8738,-.2944,1.0642,2.6017,-.3903,.7305,2.7963,-.1977
                    ,.8068,2.5331,-.3153,.3113,3.0979,-.1302,.3251,2.8792,-.0772,.6066,3.3825,.0437,.4261,3.3614,-.1361,.5325,3.3047,-.1545,.5325,3.3047,-.1545,.6091,3.1367,-.1646,.4261,3.3614,-.1361,.8385,.1316,-.3427,.9216,.1328,-.33,.8897,.2026,-.6254,.1596,3.9969,.2356,.0381,3.9958,-.1658,1.0293,-.0176,-.3205,1.07,-.0174,-.5029,.9275,-.0179,-.4911
                    ,1.1197,-.0166,-.9497,.9089,-.0179,-1.0536,.8262,-.0182,-.2987,.5363,1.5977,-.6058,.4415,1.5723,-.6178,.5725,1.4759,-.2738,.4366,1.4261,-.2451,.0527,2.659,.3167,.0594,2.6923,-.3009,.0266,3.7833,-.3486,.3772,3.7464,.3059,-.0389,3.9956,-.1694,.5621,3.3668,.167,.1397,2.4321,-.3022,.3369,2.351,.2318,.4378,2.5082,-.1162,.6169,1.9191,-.392
                    ,.0301,2.177,-.0608,.2293,1.765,-.2875,.4603,2.423,.1299,.1263,2.2398,.3023,.2877,2.5312,-.2825,.4486,.9694,-.5132,.727,.3781,-.4837,.8369,1.0843,-.5626,.9812,.4538,-.517,.0301,2.177,-.0608,-.1022,2.1917,-.2865,.0301,2.177,-.0608,-.0174,2.2675,-.3508,.1138,4.5558,.1514,.0988,4.3348,.1211,.2269,4.5492,-.1093,.2009,4.5447,-.2614
                    ,.202,4.2806,-.0892,.1858,4.2755,-.2734,.1179,4.2746,-.3436,.1281,4.5434,-.3556,.2269,4.5492,-.1093,.1955,4.6294,-.1085,.2016,4.5545,.0582,.0568,4.2919,-.3481,.202,4.2806,-.0892,.2371,4.4406,-.1075,.1723,4.3332,.0137,.115,4.4411,.1403,.1345,4.467,-.3688,.1345,4.467,-.3688,.0044,4.4661,-.3985,.2375,4.4685,-.1082,.2106,4.4684,-.2604
                    ,.2176,4.44,-.2601,.2045,4.4398,.0448,.2092,4.4724,.0612,.2375,4.4685,-.1082,.1176,4.4737,.1553,.2092,4.4724,.0612,.0226,4.6362,.1423,.1955,4.6294,-.1085,.106,4.6979,-.1056,.0639,4.6948,-.2441,.1082,4.6957,-.1565,.106,4.6979,-.1056,.0933,4.7005,-.0464,.0572,4.7017,.027,.0192,4.7022,.0418,.0933,4.7005,-.0464,.1082,4.6957,-.1565
                    ,.106,4.6979,-.1056,.0238,4.4743,.1823,.1176,4.4737,.1553,.0234,4.4417,.1686,.115,4.4411,.1403,.0226,4.6362,.1423,.0224,4.3354,.1424,.0988,4.3348,.1211,.0238,4.5564,.1799,.1138,4.5558,.1514,.2106,4.4684,-.2604,.1345,4.467,-.3688,.1397,4.4388,-.3612,.1354,4.4124,-.3342,.2009,4.5447,-.2614,.1281,4.5434,-.3556,.2009,4.1511,-.0755
                    ,.2078,4.1054,-.0595,.2078,4.1054,-.0595,.2227,4.0714,-.044,.0059,4.2745,-.3527,.0568,4.2919,-.3481,.0061,4.2873,-.3466,.0431,4.2872,-.3546,.0355,4.3708,-.3939,.0431,4.2872,-.3546,.0568,4.2919,-.3481,.0404,4.4213,-.3795,.0355,4.3708,-.3939,.1397,4.4388,-.3612,.7257,2.0195,-.4644,.7085,2.0661,-.4651,.8407,2.0749,-.4966,.929,2.0171,-.4994
                    ,1.0151,2.1802,-.4936,.929,2.0171,-.4994,.0059,4.2745,-.3527,.1179,4.2746,-.3436,.1179,4.2746,-.3436,.1858,4.2755,-.2734,-.1461,3.7534,.5009,.1157,3.7646,.4035,-.8847,3.0009,.5962,-.1108,3.9957,-.1374,-.222,3.9964,-.0585,.0903,3.0908,.3508,.052,2.8619,.3018,-.1151,3.093,-.3078,-.1577,3.4367,-.3405,-.3562,2.6714,-.1302,-.778,3.4237,.4119
                    ,-.8079,2.9352,.389,-.69,2.8867,.6521,-.6907,2.9103,.495,-.69,2.8867,.6521,-.8896,2.9975,.436,-.9759,2.4465,.2865,-.8685,2.4254,.382,-.837,2.3959,.5146,-.837,2.3959,.5146,-.9789,2.4123,.5889,-1.0986,2.4456,.3488,-.6999,3.7396,.3397,-.696,3.7393,.063,-.3126,3.7826,-.2219,-.1452,3.7808,-.2915,.1157,3.7646,.4035,-.696,3.7393,.063
                    ,-.0518,3.9966,.2969,.0585,3.9967,.2801,-.3505,3.9472,.1867,-.2751,4.009,.1064,-.0969,2.3486,-.2531,-.0985,2.663,-.2778,-.2589,2.6544,-.2477,-.0985,2.663,-.2778,-.1246,2.6738,.3343,-.2093,2.1768,-.254,-.0969,2.3486,-.2531,-.3965,2.7033,.0641,-.67,1.4311,.0391,-.4962,2.4753,.1226,-.8036,1.5066,.2349,-.4922,1.3868,.1297,-.464,1.4174,.3821
                    ,-.5996,1.468,.4111,-.8437,.1344,.9324,-.9441,1.0252,.4279,-.9239,-.0177,1.0051,-1.0237,.1358,.8955,-.964,.1709,.6473,-1.067,.1413,.8294,-.8549,-.0127,.7638,-1.2223,-.0275,.2975,-1.1033,-.0204,.3022,-.8299,-.017,.9751,-.8709,2.0019,.3076,-1.1033,-.0204,.3022,-.8549,-.0127,.7638,-1.1163,-.0278,.8551,-.8549,-.0127,.7638,-.9877,-.0204,.8092
                    ,-1.0237,.1358,.8955,-.5755,.897,.3092,-.5201,1.2712,.158,-.8298,.1295,.7751,-.7619,.3609,.6335,-.7276,1.5071,.3794,-.8576,1.3861,.2765,-.4922,1.3868,.1297,-.8036,1.5066,.2349,-.737,1.8487,.191,-.5201,1.2712,.158,-.4922,1.3868,.1297,-.4962,2.4753,.1226,-.4196,2.6298,.0916,-.2862,2.704,.3008,-.4196,2.6298,.0916,-.222,3.9964,-.0585
                    ,-.2751,4.009,.1064,-.5948,3.7358,.5412,-.6999,3.7396,.3397,-1.0873,2.1718,.4453,-1.0757,2.3851,.486,-.9789,2.4123,.5889,-1.0757,2.3851,.486,-.986,2.0451,.3207,-.9759,2.4465,.2865,-.8685,2.4254,.382,-.8685,2.4254,.382,-1.0044,2.8773,.6027,-.8847,3.0009,.5962,-1.0773,2.43,.4884,-1.0675,2.6002,.5518,-.8079,2.9352,.389,-.6907,2.9103,.495
                    ,-.5971,3.1336,.3704,-.698,2.8009,.4537,-.778,3.4237,.4119,-.6999,3.7396,.3397,-.3965,2.7033,.0641,-.3831,2.8717,.0758,-.8847,3.0009,.5962,-.3879,3.0937,.1016,-.467,3.3564,.215,-.2751,4.009,.1064,-.2266,4.0712,.0219,.0298,4.0599,.2286,-1.1069,.0487,.8487,-.9169,.1641,.6502,-.8545,.0555,.769,-.9877,.1909,.7005,-.9214,.1328,.9528
                    ,-.6767,3.4457,.5621,-.8707,3.2717,.4912,-.6767,3.4457,.5621,-.7705,3.3976,.2923,-.778,3.4237,.4119,-1.0675,2.6002,.5518,-1.0044,2.8773,.6027,-.8193,2.5336,.4299,-.3831,2.8717,.0758,-.3879,3.0937,.1016,-.1021,2.8587,-.2879,-.1151,3.093,-.3078,.1153,3.3511,.4018,.0903,3.0908,.3508,-.4748,3.4033,.49,-.5455,3.2984,.3015,-.467,3.3564,.215
                    ,-.544,3.445,-.0595,-.5971,3.1336,.3704,-.5455,3.2984,.3015,-.467,3.3564,.215,-.9214,.1328,.9528,-.2141,3.9989,.2706,-.0389,3.9956,-.1694,-.0196,4.0613,-.178,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.2223,-.0275,.2975,-1.3634,-.0392,.4854,-.964,.1709,.6473,-.8437,.1344,.9324,-.8299,-.017,.9751,-.9239,-.0177,1.0051,-.7475,1.4683,.0878
                    ,-.464,1.4174,.3821,-.5996,1.468,.4111,.0599,2.3739,.3472,-.0146,2.2593,.3586,-.67,1.4311,.0391,.052,2.8619,.3018,.0527,2.659,.3167,-.1246,2.6738,.3343,-.3562,2.6714,-.1302,-.2589,2.6544,-.2477,-.0518,3.9966,.2969,-.1452,3.7808,-.2915,-.696,3.7393,.063,-.3126,3.7826,-.2219,-.0809,3.9203,-.1892,-.0389,3.9956,-.1694,-.1108,3.9957,-.1374
                    ,-.362,3.3951,.5481,-.5948,3.7358,.5412,-.1461,3.7534,.5009,-.3294,2.3331,-.1638,-.737,1.8487,.191,-.3379,1.7006,.1301,-.384,2.4769,.3575,-.0962,2.1498,.0395,-.4535,2.4296,-.0949,-.7619,.3609,.6335,-.5755,.897,.3092,-1.0037,.4449,.7105,-.9441,1.0252,.4279,.0599,2.3739,.3472,-.1022,2.1917,-.2865,-.0962,2.1498,.0395,-.1022,2.1917,-.2865
                    ,-.0969,2.3486,-.2531,-.2093,2.1768,-.254,-.2087,4.4687,-.0934,-.1888,4.1512,-.0454,-.1824,4.5449,-.2486,-.1982,4.5494,-.0951,-.1739,4.2756,-.259,-.1767,4.2807,-.0729,-.0072,4.1046,-.3453,-.0072,4.1046,-.3453,.0059,4.2745,-.3527,.0044,4.4661,-.3985,.0052,4.5427,-.3775,-.116,4.5435,-.3475,.0052,4.5427,-.3775,.0064,4.6244,-.3428,-.1982,4.5494,-.0951
                    ,-.1618,4.5546,.0704,-.1982,4.5494,-.0951,-.1667,4.6296,-.0964,-.0679,4.5559,.1575,-.1618,4.5546,.0704,-.0445,4.292,-.3448,-.1767,4.2807,-.0729,-.1356,4.3334,.024,-.1767,4.2807,-.0729,-.2083,4.4408,-.0926,-.0552,4.3349,.1262,-.1356,4.3334,.024,-.1233,4.4671,-.3602,.0044,4.4382,-.3988,.0044,4.4661,-.3985,-.199,4.4402,-.2462,-.192,4.4686,-.247
                    ,-.2087,4.4687,-.0934,-.1656,4.4399,.0572,-.2083,4.4408,-.0926,-.2087,4.4687,-.0934,-.07,4.4412,.1465,-.1656,4.4399,.0572,-.1692,4.4725,.0738,.0192,4.7022,.0418,-.0772,4.698,-.0995,-.1667,4.6296,-.0964,-.0772,4.698,-.0995,-.0772,4.698,-.0995,-.0827,4.6958,-.1501,.0095,4.6949,-.2502,-.0444,4.6949,-.2405,.0095,4.6949,-.2502,-.0827,4.6958,-.1501
                    ,.0192,4.7022,.0418,-.0197,4.7018,.0295,-.0606,4.7006,-.0412,-.0606,4.7006,-.0412,-.0772,4.698,-.0995,.0095,4.6949,-.2502,.0234,4.4417,.1686,-.07,4.4412,.1465,-.0715,4.4738,.1617,-.0552,4.3349,.1262,.0234,4.4417,.1686,.0238,4.5564,.1799,-.0679,4.5559,.1575,.0224,4.3354,.1424,.0238,4.4743,.1823,.0064,4.6244,-.3428,.0095,4.6949,-.2502
                    ,-.1233,4.4671,-.3602,-.192,4.4686,-.247,-.1063,4.2747,-.3358,-.1281,4.4389,-.3523,-.116,4.5435,-.3475,.0229,4.1978,.159,-.0121,4.0628,-.3,-.0072,4.1046,-.3453,-.2046,4.1054,-.0146,-.1888,4.1512,-.0454,.0298,4.0599,.2286,-.2266,4.0712,.0219,-.2046,4.1054,-.0146,-.0196,4.0613,-.178,-.0121,4.0628,-.3,.0059,4.2745,-.3527,.0061,4.2873,-.3466
                    ,.0061,4.2873,-.3466,.0038,4.2857,-.4158,-.0263,4.3708,-.3918,.0038,4.2857,-.4158,.0043,4.3707,-.401,-.0445,4.292,-.3448,.0043,4.3707,-.401,.0047,4.4328,-.391,-.0263,4.3708,-.3918,-.0302,4.4213,-.3771,-.0421,4.4384,-.3839,-.1281,4.4389,-.3523,.0047,4.4328,-.391,.0044,4.4382,-.3988,-.8735,2.0359,.2725,-.8709,2.0019,.3076,-.986,2.0451,.3207
                    ,-.8735,2.0359,.2725,-1.0519,2.0081,.3943,-.9456,2.0927,.1587,-1.0873,2.1718,.4453,-1.0519,2.0081,.3943,.0059,4.2745,-.3527,-.0445,4.292,-.3448,-.1063,4.2747,-.3358,-.1063,4.2747,-.3358,-.1739,4.2756,-.259,-.1739,4.2756,-.259,-.1767,4.2807,-.0729,.0404,4.4213,-.3795,-.0302,4.4213,-.3771
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
                ,262,229,98,22,96,20,263,3,8,264,27,265,41,266,267,25,268,269,35,270,271,16,272,233,3,273,7,98,264,274,148,169,275,166,276,277,237,278,279,280,281,282,283,284,163,285,166,286,160,287
                ,288,156,158,151,140,289,148,290,169,144,147,291,292,128,137,116,133,144,137,130,142,125,293,294,108,295,296,109,120,297,298,108,296,94,112,104,18,299,300,98,28,264,95,104,301,84,91,207,21,302
                ,303,304,207,305,204,82,306,7,21,23,229,20,233,12,307,81,308,5,309,310,297,311,312,294,313,314,198,315,316,317,195,318,125,319,320,294,122,321,119,322,316,109,323,147,289,291,142,154,288,324
                ,192,129,146,325,187,143,288,157,130,192,154,147,187,151,291,139,145,326,296,295,327,328,101,108,298,329,330,331,332,333,334,335,332,336,337,335], 199);
                CONTIG(_i, 535, 338, 392);
                _i.set([356,359,393,394,356,395,396,397,398,399,362,390,393,400,401,385,402,373,403,404,388,361,405,333,406,407,408,330,353,395,409,410,411,412,368,364,369,357,396,352,341,413,349,344,414,348,344,415,416,406
                ,417,418,415,419,420,421,416,422,335,423,424,333,424,417,425,417,242,417,237,242,424,426,237,422,2,1,416,239,2,415,280,239,348,427,428,429,430,431,432,433,434,435,433,436,433,437,434,435,438,439
                ,440,437,441,442,439,443,442,444,435,443,445,446,378,447,440,173,448,449,450,451,177,452,177,451,453,454,172,65,451,455,456,173,449,210,457,458,218,458,459,54,210,458,218,460,76,461,462,463,460,464
                ,210,460,465,461,458,465,459,462,466,463,457,462,465,464,467,457,461,466,464,64,178,452,468,178,212,77,469,75,77,172,174,470,471,472,470,473,474,475,476,477,476,478,479,480,481,482,483,484,485,473
                ,484,481,486,473,470,487,476,488,487,481,489,474,473,487,474,488,471], 590);
                CONTIG(_i, 807, 490, 521);
                _i.set([514,522,523,524,500,525,501,526,527,528,529,526,530,531,532,533,523], 839);
                CONTIG(_i, 856, 534, 546);
                _i.set([532,547,548,549,549,550,551,552,553,554,555,556,543,557,558,559,560,561,562,563,560,557,560,564,565,542,553,555,566,567,504,502,568,569,570,571,572,573,497,513,570], 869);
                CONTIG(_i, 910, 574, 584);
                _i.set([510,585,586,587,588,579], 921);
                CONTIG(_i, 927, 589, 599);
                _i.set([590,600,601,593], 938);
                CONTIG(_i, 942, 602, 620);
                _i.set([616,621,622,623,624,625,626,627,628,629,623,630,631,602,632,633,618], 961);
                CONTIG(_i, 978, 634, 660);
                _i.set([555,661,662,663,664,665,651,666,667,636,668,669,670,671,672,638,673,674,615,675,616,618,676,677,641,678,642,679,680,681,597,682,683,612,684,613,616,685,686,601,687,593,688,689,690,504,691,566,578,692
                ,693,554,694,564,661,695,662,696,697,698,659,554,564,546,699,700,565,701,561,534,702,703,550,704,551,705,706,525,540,707,708,709,710,506,585,711,586,528], 1005);
                CONTIG(_i, 1093, 712, 721);
                _i.set([490,722,723,724,725,726,727,728,729,730,657,731,732,654,733,734,735,651,736,737,636,725,738,739,740,526,741,742,743,525,744,745,501,746,551,747,534,748,749,750,751,551,534,522,549,751,539,546,748,533
                ,539,536,586,752,714,582,753,511,493,754,508,519,755,496,756,530,526,757,515,758,525,759,760,505,761,762,493,714,763,518,511,755,656,764,731,653,735,765,766,767,722,768,769,720,770,771,772,773,649,653
                ,646,774,775,645,776,640,777,639,626,778,634,656,631,779,632,780,614,620,603,632,617,623,781,614,782,611,610,783,784,600,606,595,607,785,786,600,599,579,590,787,788,510,789,582,518,590,581,591,577,570
                ,578,790,513,791,578,572,792,504,793,502,755,513,497,714,510,586,794,795,502,796,797,493,607,798,799,800,611,801,613,802,803,597,804,805,611,806,807,808,610,800,605,809,810,595,805,811,626,779,812,629
                ,640,781,642,813,615,633,814,676,815,645,629,781,642,615,779,638,633,627,812,630,816,817,818,819,820,821,600,592,822,823,824,825,826,827,828,829,830,824,831,832,827], 1103);
                CONTIG(_i, 1344, 833, 854);
                _i.set([853], 1366);
                CONTIG(_i, 1367, 855, 865);
                _i.set([864], 1378);
                CONTIG(_i, 1379, 866, 878);
                _i.set([855,879,880,881,850,849,882,883,853,884,849,847,885,886,887,853,888,855,889,890,891,892,893,894,895,855,880,826,896,897,898,825,899,900,884,847,901,902,903,857,860,904,905,847,849,833,844,906,836,907
                ,908,909,836,910,911,912,913,909,914,907,910,838,915,916,831,917,917,826,911,918,911,919,718,911,767,920,917,718,721,915,491,769,910,721,921,909,769,907,841,922,923,924,925,926,927,928,927,929,930,927
                ,931,932,929,933,934,935,936,932,937,938,939,940,938,929,939,941,942,943,867,936,944,658,945,946,947,663,948,663,665,949,950,659,552,946,948,951,658,660,952,953,954,565,954,542,542,953,554,694,565,564
                ,955,956,957,958,694,953,694,957,959,957,954,959,956,960,961,956,952,957,961,958,952,960,955,958,553,665,661,665,962,661,963,964,563,964,659,564,965,471,966,965,966,967,968,969,970,971,969,972,973,974
                ,975,976,977,974,977,967,974,978,965,967,969,975,979,979,974,967,966,979,967,488,966,471,364,443,439,980,443,981,939,857,937,939,982,983,0,984,1,3,263,4,6,86,7,9,36,10,12,204,985,15
                ,228,16,18,300,19,21,303,22,24,986,25,27,264,28,30,24,26,32,46,33,35,987,10,37,231,38,37,988,989,42,57,43,32,990,45,991,51,48,50,226,51,53,68,54,56,992,57,58,61,993
                ,61,222,62,64,452,65,994,175,68,995,73,70,72,218,73,73,77,75,73,218,76,54,68,64,78,204,996,81,997,82,998,999,84,86,1000,1001,84,1002,88,1003,207,91,93,101,94,96,1004,1005,18,229
                ,99,101,1006,102,1007,1008,104,1009,1010,107,109,195,110,105,104,112,108,107,114,116,144,117,119,297,120,122,294,1011,125,198,126,128,135,129,1012,1013,132,1014,1015,135,1016,1017,137,139,289,140,138,137,142,144
                ,291,145,133,132,146,148,182,149,151,187,152,154,192,155,157,288,158,160,1018,161,163,179,1019,166,285,167,169,1020,1021,172,454,173,175,212,64,176,1022,177,179,1023,1024,182,1025,1026,1027,1028,185,187,1029,1030
                ,1031,1032,129,132,1033,1034,1035,1036,155,1037,1038,1039,195,1040,1041,1042,1043,126,1044,1045,135,1046,1047,114,1048,1049,1050,204,78,1051,207,1052,1053,76,460,210,1054,1055,212,1056,1057,1058,66,1059,172,56,1060,1061,1062,54
                ,218,1063,1064,45,1065,1066,62,1067,1068,1069,50,1070,1071,1072,1073,228,229,1074,1075,231,1076,1077,233,1078,1079,1080,1081,237,0,2,239,1082,425,242,1083,1084,1085,1086,1087,1088,1089,169,171,1090,166,168,1091,1092,179,1093
                ,1094,182,1095,1096,231,1097,231,37,1098,1099,35,1100,1101,36,1102,1103,222,226,1104,1105,46,45,222,33,46,61,51,226,56,51,42,44,233,1106,1107,98,23,22,20,19,263,8,7,264,1108,37,41,1109,1110,25
                ,1111,1112,35,1113,17,16,233,20,3,7,23,98,1114,1115,148,1116,163,166,1117,242,237,1118,239,280,1119,1120,1121,163,165,285,1122,1123,160,288,154,156,151,153,140,148,150,1124,144,133,147,1125,1126,128,116,1127
                ,133,137,128,130,125,127,1128,108,115,295,109,111,120,94,102,112,18,100,1129,98,1130,28,95,94,104,84,89,91,21,1131,302,1132,84,207,204,12,82,7,86,21,229,18,20,12,14,1133,1134,3,5,1135
                ,109,297,1136,125,294,1137,1138,198,316,1139,1140,1141,198,125,320,1142,294,1143,297,119,316,195,109,147,151,289,142,130,154,1144,1145,192,146,1146,1147,143,142,288,130,129,192,147,146,187,291,289,139,1148,1149,296
                ,327,1150,1151,330,1152,331,333,1153,334,332,331,336,335,334,338,1154,1155,341,1156,1157,344,419,348,347,1158,346,348,349,1159,350,352,396,353,1160,1161,356,1162,362,359,361,388,362,364,439,1163,1164,1165,368,1166,374
                ,371,373,1167,374,378,411,1168,1169,1170,378,1171,1172,1173,1174,1175,1176,385,1177,1178,388,1179,389,1180,1181,392,359,362,393,356,392,395,1182,1183,399,1184,1185,399,1186,1187,1188,399,1189,1190,362,388,390,400,1191,1192,1193
                ,1194,373,404,1195,388,1196,1197,333,407,1198,1199,353,396,395,1200,1201,411,366,369,364,368,1202,1203,1203,364,368,357,356,396,341,1204,1205,344,348,415,406,333,417,415,348,419,1206,344,416,335,339,1207,333,335,424
                ,425,418,417,417,424,237,424,1208,1209,422,416,2,416,415,239,415,420,280,1210,1211,430,1212,1213,433,435,1214,433,433,441,437,435,1215,1216,440,447,437,442,435,439,442,1217,1218,443,1203,1219,378,377,447,173,454
                ,448,1220,1221,451,452,178,177,1222,448,454,65,452,451,1223,174,173,210,464,457,218,54,458,54,66,210,218,459,460,461,465,462,460,461,464,460,459,465,458,457,465,462,467,466,457,467,462,464,466,467,461
                ,463,466,64,212,178,1224,176,178,77,174,1225,77,76,172,470,474,471,1226,970,476,476,489,1227,1228,489,481,1229,481,484,473,486,484,970,488,476,487,489,476,487,473,481,474,487,488,490,721,491,493,1230,1231
                ,496,755,497,499,1232,500,502,1233,1234,505,709,506,508,1235,1236,511,1237,1238,514,521,515,517,1239,518,520,1240,521,522,751,523,500,1241,525,526,1242,527,1243,1244,526,531,545,532,523,751,534,536,539,1245,539,748
                ,540,542,555,543,545,1246,546,547,1247,1248,549,1249,550,552,948,553,555,662,1250,557,560,1251,560,565,561,563,964,560,560,964,564,542,554,553,566,1252,1253,502,1254,1255,570,575,1256,573,1257,497,570,1258,1259,1260
                ,1261,577,579,1262,1263,582,1264,1265,510,1266,585,587,1267,1268,1269,598,590,592,600,593,595,1270,596,598,1271,599,600,784,601,602,631,603,605,1272,606,608,1273,1274,611,1275,612,614,781,615,617,632,618,620,614,616
                ,622,628,623,625,1276,626,628,1277,629,630,812,631,632,779,633,634,1278,635,637,1279,638,640,1280,641,643,1281,644,646,1282,647,649,1283,1284,652,773,653,655,1285,656,658,949,659,555,553,661,663,1286,664,651,1287
                ,1288,636,635,1289,670,1290,1291,638,1292,673,615,1293,1294,618,633,676,641,1295,1296,1297,618,1298,597,596,1299,612,1300,1301,616,1302,1303,601,1304,1305,1306,593,1307,504,1308,1309,578,1310,1311,554,953,694,661,1312,1313,1314
                ,662,1315,659,1316,554,546,1317,1318,565,542,1319,534,1320,1321,550,1322,1323,1324,1325,1326,540,748,1327,709,1328,1329,585,1330,1331,528,527,1332,714,1333,1334,1335,1336,718,720,769,721,722,767,1337,725,636,1338,1339,651,1340
                ,657,656,731,654,653,1341,735,649,651,1342,634,636,1343,528,1344,526,528,1345,1346,501,525,1347,499,501,551,1348,1349,748,546,1350,751,549,551,522,547,549,539,532,546,533,532,539,586,1351,1352,582,1353,1354,493,1355
                ,1356,519,518,755,1357,1358,530,1359,1360,515,525,1361,1362,505,507,1363,493,508,714,518,582,511,656,634,1364,653,649,735,1365,718,767,1366,1367,769,1368,672,1369,773,1370,649,646,648,1371,645,644,1372,1373,637,639,1374
                ,1375,634,631,812,779,1376,623,614,603,631,632,623,629,781,1377,1378,611,1379,1380,784,606,1381,595,599,587,579,1382,1383,1384,1385,1386,582,590,579,581,577,1387,570,1388,573,513,578,570,572,504,1389,1390,755,511,513
                ,714,508,510,1391,1392,1393,1394,1395,1396,607,595,1397,800,610,611,613,1398,802,597,1399,804,611,613,1400,1401,608,610,605,607,1402,595,597,805,626,639,779,629,645,640,642,1403,1404,633,638,1405,1406,643,645,781,640
                ,642,779,639,638,627,626,812,1407,1408,1409,1410,1411,1412,823,829,824,826,831,827,829,1413,830,831,1414,832,833,1415,1416,836,1417,1418,841,907,1419,1420,1421,840,842,1422,1423,1424,1425,1426,1427,905,849,1428,1429,1430,1431
                ,1432,853,1433,937,857,1434,904,860,1435,1436,1437,1438,1439,864,1440,901,867,867], 1392);
                CONTIG(_i, 3010, 1441, 1451);
                _i.set([855,888,1452,881,1453,850,1454,1455,883,884,881,849], 3021);
                CONTIG(_i, 3033, 1456, 1467);
                _i.set([853,883,888,1468,1469,1470,1471,866,1472,1473,1474,855,826,828,1475,1476,823,825,1477,1478,884,901,1479,1480,860,857,942,1481,857,904,942,1482,860,905,1483,847,833,842,844,909,907,836,911,826,1484,909,1485,1486,910,836
                ,838,1487,1488,831,917,831,826,1489,767,911,718,917,911,1490,1491,917,721,910,915,769,909,910,1492,1493,909,1494,1495,924,1496,1497,927,927,1498,929,927,1499,1500,929,937,1501,1502,1503,936,937,929,938,1504,1505,938,939
                ,1506,1507,1508,1509,867,944,949,658,946,1510,1511,948,946,663,949,944,1512,552,1513,946,1514,945,658,952,958,953,565,959,954,542,954,953,694,959,565,955,1515,956,958,955,694,694,955,957,957,952,954,956,1515,960
                ,956,961,952,961,960,958,960,1515,955,553,948,665,665,664,1516,1517,660,964,964,660,659,965,472,471,1518,1519,969,1520,975,969,1521,1522,974,1523,1524,977,977,978,967,979,488,969,970,969,488,979,975,974,488,979
                ,966,364,1203,443,1525,442,443,939,942,857,939,938,1526], 3045);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .3157,.5131,-.7981,.8735,.3535,-.3348,.6062,-.0211,-.795,.4459,-.1528,.8819,.3424,.2273,.9116,.4742,.2907,.831,.377,-.8423,-.3852,.492,-.2449,-.8354,.8373,-.2438,-.4893,.8348,.3971,-.3812,.3052,.3637,-.8801,.8672,.4494,-.2145,-.039,.5951,-.8027,.3157,.5131,-.7981,.1298,.178,-.9754,.8314,.4121,.3728,.291,-.6948,.6577
                    ,.7615,-.4141,.4986,.4063,-.0407,.9128,.3122,-.2107,.9263,.5035,-.1462,.8515,-.1187,-.0108,-.9929,-.2408,-.1101,-.9643,-.0358,-.1323,-.9905,.3303,.4423,-.8338,-.1573,-.4459,-.8811,.3995,.2863,-.8708,.8809,-.0482,-.4707,.6229,.1563,-.7665,.9073,.1799,-.3801,.7199,.6124,-.3267,.7909,.4554,-.4087,-.2575,-.1532,.954,-.9551,-.0988,.2794
                    ,-.9074,-.2507,.3371,-.5386,-.263,-.8004,.3332,.2582,-.9068,-.2019,-.2387,.9499,.6893,.147,.7094,-.2575,-.1532,.954,-.9074,-.2507,.3371,-.8586,-.4813,.1761,.3144,.2201,-.9234,.9284,-.0584,-.3669,.9411,.0206,-.3374,.8039,.0831,.5889,-.2758,-.2449,.9294,.3052,.3637,-.8801,.8705,.418,-.2597,.8672,.4494,-.2145,-.8183,.0776,-.5695
                    ,.2279,.5372,-.812,.3052,.3637,-.8801,-.4858,-.3146,.8155,-.8467,.0996,.5227,-.9218,.2749,.2732,-.7912,.0914,-.6047,.3814,.3588,-.8519,-.946,-.2532,.2026,-.4858,-.3146,.8155,-.9218,.2749,.2732,-.2383,-.5641,.7906,.865,-.0937,.4929,-.4858,-.3146,.8155,-.4915,-.1392,.8596,-.498,.8059,.3201,-.8709,-.2661,.4131,.865,-.0937,.4929
                    ,-.237,-.2481,.9393,.3814,.3588,-.8519,.9276,.0323,-.3721,.9284,-.0584,-.3669,-.6072,.5347,-.5877,.2808,.4063,-.8695,.3814,.3588,-.8519,.916,-.1757,-.3605,-.5556,-.0219,-.8311,.5392,-.0161,-.842,.4967,.8403,-.217,.3303,.4423,-.8338,.7199,.6124,-.3267,-.2671,.5464,-.7938,-.1503,.4209,-.8945,.3424,.2273,.9116,.4542,.5396,.7089
                    ,.4742,.2907,.831,.2129,-.2593,-.942,-.1503,.4209,-.8945,.2157,.6093,.763,.4638,.5389,.7032,.4967,.8403,-.217,.5929,.7308,.338,.6873,.6673,-.2869,-.1552,-.0964,-.9832,.0092,.0258,-.9996,.1622,-.0871,-.9829,-.1793,-.0787,-.9806,.1622,-.0871,-.9829,.1502,-.1329,-.9797,.8386,.1494,.5238,.3777,.0781,.9226,-.3616,.1567,-.9191
                    ,-.1373,.2896,-.9472,.9073,.1799,-.3801,.5087,.3594,-.7823,.8722,.4249,-.2425,.3777,.0781,.9226,.8185,.2394,.5222,.4486,.0345,.8931,-.1164,.2629,-.9578,-.718,-.0431,-.6947,-.1156,.254,-.9603,.3632,.4558,-.8126,.8608,.4365,-.2618,.8903,.1263,.4375,.5419,-.1665,.8238,-.3618,-.5031,.7848,-.9652,-.261,.0113,-.9442,-.3274,.0351
                    ,.8798,.3201,-.3512,.3528,.3224,-.8784,.8443,.3536,-.4025,-.8897,-.4493,.0807,-.3618,-.5031,.7848,-.9442,-.3274,.0351,.5256,-.3269,.7854,.908,.028,.4181,.5072,-.2814,.8146,-.033,.1602,-.9865,-.5396,-.1975,-.8184,.0156,-.0236,-.9996,.5072,-.2814,.8146,.849,.1533,.5057,.4371,.0189,.8992,-.1156,.254,-.9603,-.6781,-.0707,-.7315
                    ,.8443,.3536,-.4025,.3992,.2494,-.8823,.8488,.3571,-.3898,-.9251,-.3759,-.0536,-.6927,.0815,.7166,-.9912,-.0537,-.1208,.3858,.1004,-.9171,.8743,.2421,-.4207,-.5164,-.1846,.8362,-.9412,-.2964,-.1621,.8869,.2684,.3759,.352,.1174,.9286,.0652,.3038,.9505,.6011,-.5754,.5546,.0698,-.5567,.8278,.4131,.0285,.9102,.8056,.2839,.52
                    ,.207,.2634,.9422,.0729,-.0232,-.997,-.8466,.1694,-.5045,-.0394,.6573,-.7526,.9308,.1912,-.3113,.6724,.4418,-.5938,.9778,.1913,-.0855,.003,-1,-.0003,-.752,-.4051,-.5199,-.7572,-.6518,.0425,-.0287,.7391,-.673,-.752,-.4051,-.5199,-.0179,-.3948,-.9186,.6378,.7117,-.2943,.7288,-.678,.0956,.975,.2127,.064,-.7201,.237,.6521
                    ,-.7572,-.6518,.0425,-.9879,.1508,.0358,-.6067,.1904,-.7718,-.6382,-.6609,-.3948,.24,-.5953,-.7668,.8221,.1272,.5549,.49,-.8102,-.3217,-.4188,-.7505,.5111,.495,-.6877,.531,-.6836,.6466,-.3384,-.7572,-.6518,.0425,-.752,-.4051,-.5199,.7157,.2797,.6399,.7288,-.678,.0956,.003,-1,-.0003,-.5676,-.5456,.6165,.0698,-.5567,.8278
                    ,.878,.2019,.4339,.9778,.1913,-.0855,-.9652,-.261,.0113,.8743,.2421,-.4207,-.9251,-.3759,-.0536,-.5822,-.2732,-.7657,.908,.028,.4181,.8488,.3571,-.3898,-.7269,-.1138,-.6772,-.9442,-.3274,.0351,.8798,.3201,-.3512,.9163,-.0137,.4003,-.9442,-.3274,.0351,-.718,-.0431,-.6947,.8722,.4249,-.2425,.8386,.1494,.5238,.8722,.4249,-.2425
                    ,.1517,.7917,-.5917,.6873,.6673,-.2869,.3157,.5131,-.7981,.5264,.7766,.346,.7199,.6124,-.3267,.8314,.4121,.3728,.1695,-.8134,.5564,.9276,.0323,-.3721,.7345,-.189,.6518,.865,-.0937,.4929,.9276,.0323,-.3721,-.9218,.2749,.2732,-.6072,.5347,-.5877,-.9218,.2749,.2732,-.7412,.5632,-.3652,.8672,.4494,-.2145,.6893,.147,.7094
                    ,.9411,.0206,-.3374,.8361,-.3283,.4394,-.8586,-.4813,.1761,-.8183,.0776,-.5695,-.9551,-.0988,.2794,-.8136,.2692,-.5153,.7199,.6124,-.3267,.8052,.2762,.5247,.9105,-.0659,.4082,.9073,.1799,-.3801,.7915,.315,.5236,.8672,.4494,-.2145,.921,-.2847,.2658,.377,-.8423,-.3852,.8373,-.2438,-.4893,.6873,.6673,-.2869,.6846,.6596,.3101
                    ,.8735,.3535,-.3348,.2938,-.6352,-.7143,.1298,.178,-.9754,.2157,.6093,.763,.4276,.5786,.6945,.4638,.5389,.7032,.8056,.2839,.52,.975,.2127,.064,-.8466,.1694,-.5045,-.9879,.1508,.0358,-.6927,.0815,.7166,-.9912,-.0537,-.1208,.6724,.4418,-.5938,.9778,.1913,-.0855,-.0394,.6573,-.7526,.207,.2634,.9422,.7909,.4554,-.4087
                    ,.8052,.2762,.5247,.8052,.2762,.5247,.291,-.6948,.6577,.3995,.2863,-.8708,.7909,.4554,-.4087,.8705,.418,-.2597,-.946,-.2532,.2026,.8809,-.0482,-.4707,.3648,-.1139,.9241,.6694,-.1198,-.7331,.291,-.6948,.6577,-.7672,-.6359,.0836,.377,-.8423,-.3852,.2129,-.2593,-.942,-.7672,-.6359,.0836,-.1573,-.4459,-.8811,.377,-.8423,-.3852
                    ,-.7672,-.6359,.0836,.7615,-.4141,.4986,-.6927,.0815,.7166,-.0394,.6573,-.7526,.6724,.4418,-.5938,.4638,.5389,.7032,.5929,.7308,.338,.1298,.178,-.9754,-.0669,-.7885,-.6113,-.2015,.1758,-.9636,.6011,-.5754,.5546,.003,-1,-.0003,.0698,-.5567,.8278,.7995,-.3569,-.4831,.7995,-.3569,-.4831,.7288,-.678,.0956,.4982,.0898,-.8624
                    ,-.5607,-.2605,.786,-.5676,-.5456,.6165,-.6979,-.2288,.6786,.3528,.3224,-.8784,-.3618,-.5031,.7848,-.333,-.6161,.7137,-.2328,-.5056,.8308,.2689,-.2184,.938,.3358,.3703,-.8661,.1975,.0953,.9756,.1975,.0953,.9756,.2005,-.101,.9745,.6229,.1563,-.7665,-.3248,.4066,-.8539,-.337,.0201,-.9413,.4742,.2907,.831,.8314,.4121,.3728
                    ,.3303,.4423,-.8338,-.2015,.1758,-.9636,.7615,-.4141,.4986,.8314,.4121,.3728,-.1373,.2896,-.9472,.3632,.4558,-.8126,.5419,-.1665,.8238,-.2328,-.5056,.8308,.8608,.4365,-.2618,.8903,.1263,.4375,-.5252,.0355,-.8502,-.8897,-.4493,.0807,.8903,.1263,.4375,.5419,-.1665,.8238,-.7627,-.605,.2284,.3632,.4558,-.8126,.8608,.4365,-.2618
                    ,-.1373,.2896,-.9472,-.9412,-.2964,-.1621,.9308,.1912,-.3113,-.7627,-.605,.2284,-.0535,-.6677,-.7425,-.5252,.0355,-.8502,.3777,.0781,.9226,.5033,-.1621,.8488,.8632,.2697,.4268,.876,-.1196,.4672,.5492,.2487,.7978,.9037,-.1349,.4064,.9058,.2495,.3423,.9694,.245,-.0165,.9982,.0577,.0147,.9938,-.1082,.0261,.9589,-.0201,-.283
                    ,.9694,.245,-.0165,.9028,.1639,-.3975,.9982,.0577,.0147,.9938,-.1082,.0261,.8305,-.4252,-.3599,.9589,-.0201,-.283,.187,.1662,-.9682,-.0263,.3746,-.9268,.4983,-.5563,-.6649,.5329,.0445,-.845,-.0316,.3123,-.9495,-.033,.1303,-.9909,.5033,.3132,-.8053,-.0264,.6007,-.799,-.0316,.3123,-.9495,.9694,.245,-.0165,.7515,.5938,-.2876
                    ,.8717,.2748,-.4057,.8632,.2697,.4268,.8117,.584,-.0107,.9694,.245,-.0165,.5208,.2326,.8214,.6937,.6345,.3409,.8632,.2697,.4268,.4141,.0297,-.9097,.187,.1662,-.9682,.4832,.2001,-.8523,.9938,-.1082,.0261,.9217,.0073,-.3879,.9227,-.08,-.377,.9037,-.1349,.4064,.9905,-.1265,.054,.9938,-.1082,.0261,.5667,-.0734,.8206
                    ,.8643,-.315,.3921,.9037,-.1349,.4064,-.033,.1303,-.9909,-.0303,-.429,-.9028,.2765,-.4031,-.8723,.9982,.0577,.0147,.9217,.0073,-.3879,.9905,-.1265,.054,.8643,-.315,.3921,.9982,.0577,.0147,.9905,-.1265,.054,.51,-.3199,.7985,.876,-.1196,.4672,.8643,-.315,.3921,.4276,.6194,.6583,.011,.9478,.3187,.2397,.9412,.238
                    ,.8117,.584,-.0107,.3756,.9202,-.1103,.3219,.9441,.0712,.349,.9371,.0071,.2362,.912,-.3352,.4607,.6227,-.6324,.3219,.9441,.0712,.011,.9478,.3187,-.0115,.9349,-.3547,.0315,-.3186,.9473,.5033,-.1621,.8488,.0315,-.3186,.9473,.0333,-.0529,.998,.0326,.2177,.9755,.0333,-.0529,.998,.0391,.2712,.9617,.0328,-.1699,.9849
                    ,.5208,.2326,.8214,-.0115,.9349,-.3547,.9028,.1639,-.3975,.5315,-.4022,-.7454,.9217,.0073,-.3879,.5033,.3132,-.8053,.9227,-.08,-.377,.2611,-.928,-.2658,.629,-.528,-.5706,.4523,.4696,.7582,.0528,.4588,.8869,-.0452,-.4369,-.8984,-.0468,-.8939,-.4458,.9589,-.0201,-.283,.9327,.1244,-.3385,.9327,.1244,-.3385,.8133,.5023,.2938
                    ,.0984,.6163,.7813,.8735,.3535,-.3348,.9227,-.08,-.377,.4832,.2001,-.8523,-.0263,.3746,-.9268,.5275,-.7551,-.3893,-.0289,-.508,-.8608,-.0289,-.508,-.8608,.5766,-.6305,-.5195,-.0282,-.5432,-.8391,.9844,-.0123,-.1751,.5275,-.7551,-.3893,-.0329,.154,-.9875,.187,.1662,-.9682,.7049,.036,-.7083,.6371,-.3329,-.6952,.7373,.0522,-.6735
                    ,.9841,-.0943,-.1502,.5593,-.3731,-.7402,.7373,.0522,-.6735,.5315,-.4022,-.7454,.2765,-.4031,-.8723,-.0297,-.4637,-.8855,-.8002,.5145,.3082,-.6127,-.7833,-.1048,-.6127,-.7833,-.1048,-.6871,.3652,.6281,-.3074,.2453,.9194,-.498,.8059,.3201,-.7725,.5848,-.2472,-.8002,.5145,.3082,.49,-.8102,-.3217,-.527,-.2396,.8154,-.7183,-.0966,.689
                    ,-.8984,.2558,-.3569,-.4213,-.3706,-.8277,.1448,-.1892,-.9712,-.8361,-.4208,-.3518,.0764,-.6981,-.7119,.8497,-.3975,.3464,-.9486,.0692,-.3088,.585,-.7859,.2003,-.3981,-.6967,.5967,.916,-.1757,-.3605,.49,-.8102,-.3217,.2824,-.0132,-.9592,-.033,.1322,-.9907,-.0334,.0092,-.9994,.7894,.0282,-.6132,.3362,.1048,-.9359,-.0263,.3746,-.9268
                    ,.0306,.3307,-.9432,.187,.1662,-.9682,.4832,.2001,-.8523,.187,.1662,-.9682,.4832,.2001,-.8523,.8654,.0911,-.4928,.9227,-.08,-.377,.9227,-.08,-.377,.9305,.32,-.178,.9938,-.1082,.0261,.8067,.0594,-.5879,.3237,-.0677,-.9437,-.0335,-.036,-.9988,.4174,.1734,-.892,-.633,.5099,-.5824,-.8394,.5347,-.0972,-.6253,.7789,.0482
                    ,.2613,-.1621,.9515,.3424,.2273,.9116,.3648,-.1139,.9241,-.9575,-.2249,.1802,-.7992,-.2558,-.5438,-.5372,-.8434,.002,-.9051,.3652,.2176,-.8439,.2982,-.4459,-.8651,.1434,-.4806,-.4066,.5797,-.7061,-.633,.5099,-.5824,-.5178,.7739,-.3645,.2518,-.5948,.7634,-.3956,.4923,.7753,-.1757,-.3766,.9095,.1283,-.2411,.9619,.2005,-.101,.9745
                    ,.0527,-.1587,.9859,-.5263,-.1166,-.8422,-.337,.0201,-.9413,-.5591,.0167,-.8289,-.818,.4047,-.4086,-.4484,-.5435,-.7096,-.7992,-.2558,-.5438,-.9782,.1979,.0623,-.9186,-.0576,-.3908,-.992,-.0345,.121,-.786,.5903,.1835,-.891,.1834,-.4152,.8929,-.0894,-.4412,.8451,-.082,.5283,.9066,-.2425,-.3452,-.1153,-.4029,-.9079,.7934,-.1173,.5972
                    ,-.0277,.2253,.9739,-.2593,.4008,.8787,.9066,-.2425,-.3452,.7837,-.4936,-.3771,-.9133,-.0627,.4023,-.8689,.1714,-.4643,-.916,.0129,.401,-.1874,.1261,.9742,-.0277,.2253,.9739,-.8242,.4159,.3841,-.8439,.2982,-.4459,-.793,.45,.4107,-.7351,.4957,-.4625,.2052,.004,-.9787,-.8439,.2982,-.4459,.9609,.0586,-.2704,.9132,-.2911,.2851
                    ,.8638,.2022,-.4614,-.8707,.3825,-.3091,.15,.0292,-.9882,.8438,-.254,-.4727,.9132,-.2911,.2851,.7277,-.515,.453,-.2855,-.1231,.9504,-.3021,-.2908,.9078,.5766,.7687,-.2767,.967,-.2471,.0622,.8526,-.3424,-.3947,.8524,-.1681,.4951,-.2855,-.1231,.9504,-.8913,-.0173,.453,-.8707,.3825,-.3091,-.9133,-.0627,.4023,-.8359,.4328,-.3375
                    ,.0105,.4901,-.8716,-.8707,.3825,-.3091,-.871,-.1574,.4654,-.2226,.0334,-.9743,.2355,.5972,-.7667,-.5058,.8535,.1248,-.818,.4047,-.4086,-.3248,.4066,-.8539,-.2671,.5464,-.7938,.0784,.5705,.8175,.3424,.2273,.9116,.193,.3356,.922,-.4742,.4165,-.7757,.2157,.6093,.763,.2991,.4146,.8594,-.5058,.8535,.1248,-.275,.8149,.5101
                    ,-.1745,.8142,.5536,-.4356,-.0904,-.8956,-.1552,-.0964,-.9832,-.4717,-.0942,-.8767,-.5533,-.0425,-.8318,-.1552,-.0964,-.9832,-.1793,-.0787,-.9806,-.5976,.17,.7835,-.6346,-.1843,.7505,-.4577,.0286,-.8886,-.3616,.1567,-.9191,-.9782,.1979,.0623,-.8226,.1857,-.5374,-.8823,.1433,-.4482,-.0035,.142,.9898,-.5199,.4086,.7501,-.5976,.17,.7835
                    ,-.4204,-.0986,-.9019,.2675,-.3431,-.9004,.305,-.4155,-.8569,-.9132,.3957,.0968,-.7698,.2082,-.6034,.0221,.2217,.9749,-.5544,.3438,.7579,.8606,-.3298,-.388,.7539,-.244,.6099,.8566,-.389,-.3389,-.9611,.2701,.0575,-.7763,.0445,-.6287,-.7631,.0885,-.6402,.8476,-.4717,-.2428,.7539,-.244,.6099,.71,-.3741,.5966,-.0198,.0048,.9998
                    ,-.5694,.256,.7811,-.5816,.2111,.7856,-.4818,-.1615,-.8612,.0769,-.4655,-.8817,.2255,-.3615,-.9047,.003,.0588,.9983,-.4859,.3791,.7875,-.5694,.256,.7811,-.4099,-.0931,-.9073,.2675,-.3431,-.9004,-.9596,.2811,-.0131,-.809,-.002,-.5878,-.7763,.0445,-.6287,.9065,-.3603,-.2202,.8824,-.1257,.4534,.7956,-.4811,-.3681,-.9543,.2986,.0049
                    ,-.797,-.1294,-.5899,.7554,-.4071,-.5134,.8738,.0389,.4847,.0745,.3329,.94,-.6006,.4333,.6719,.0985,.302,.9482,-.341,-.6035,.7207,-.4859,.3071,.8183,-.066,.439,.896,-.5618,.385,.7322,.0812,.3134,.9461,-.5532,-.2945,-.7792,.5977,-.1873,-.7795,.1404,-.5283,-.8373,-.9713,.1874,.1463,-.8418,.3833,-.3801,-.8648,-.1076,-.4905
                    ,.0513,-.9986,-.01,.4645,-.3599,-.8091,-.3706,-.4051,-.8357,-.318,.7543,-.5743,.4645,-.3599,-.8091,.418,.6882,-.5929,-.6165,-.6681,.4165,-.6976,.7126,.0742,-.8215,.3834,.4221,.7297,-.6324,-.26,.8213,.2147,.5285,.9438,-.0837,-.3198,.3413,-.809,-.4785,-.0987,-.0143,-.995,-.7566,-.5929,-.2756,-.0149,-.2998,.9539,-.1845,.0802,.9796
                    ,.7286,-.6054,.3204,-.5793,-.7705,.2658,.0516,-.6561,.7529,.7297,-.6324,-.26,.9438,-.0837,-.3198,-.6165,-.6681,.4165,-.8215,.3834,.4221,.6811,-.5329,.5021,.0513,-.9986,-.01,.0919,-.5685,.8175,-.9301,.3598,.074,-.9713,.1874,.1463,.8606,-.3298,-.388,-.9821,.187,.0213,-.9543,.2986,.0049,.7956,-.4811,-.3681,-.5694,.256,.7811
                    ,-.9543,.2986,.0049,-.9596,.2811,-.0131,.8566,-.389,-.3389,.8476,-.4717,-.2428,-.9611,.2701,.0575,.8566,-.389,-.3389,.2675,-.3431,-.9004,-.9132,.3957,.0968,-.5976,.17,.7835,-.9132,.3957,.0968,-.9782,.1979,.0623,-.6253,.7789,.0482,-.786,.5903,.1835,-.5058,.8535,.1248,-.2927,-.2771,-.9151,-.8913,-.0173,.453,-.2855,-.1231,.9504
                    ,-.8913,-.0173,.453,-.9133,-.0627,.4023,.8638,.2022,-.4614,.8438,-.254,-.4727,.8638,.2022,-.4614,-.793,.45,.4107,-.0277,.2253,.9739,-.916,.0129,.401,.2052,.004,-.9787,.7837,-.4936,-.3771,.8929,-.0894,-.4412,.9066,-.2425,-.3452,-.2616,.3841,.8854,-.786,.5903,.1835,-.992,-.0345,.121,-.793,.45,.4107,-.9051,.3652,.2176
                    ,-.5376,-.3554,.7646,-.5372,-.8434,.002,-.1757,-.3766,.9095,-.6253,.7789,.0482,-.4806,.7865,.3879,-.275,.8149,.5101,-.4855,.2646,-.8332,-.7437,.0821,-.6634,-.0235,.613,.7897,.0984,.6163,.7813,.2157,.6093,.763,-.6176,.4779,.6247,-.8215,.3834,.4221,-.9301,.3598,.074,.5977,-.1873,-.7795,.9438,-.0837,-.3198,.9065,-.3603,-.2202
                    ,.7526,.1395,.6435,.9065,-.3603,-.2202,-.8418,.3833,-.3801,-.9301,.3598,.074,-.3244,.5959,-.7346,.5977,-.1873,-.7795,-.066,.439,.896,-.2616,.3841,.8854,-.9051,.3652,.2176,-.8905,.4304,.1477,-.2616,.3841,.8854,.2518,-.5948,.7634,-.891,.1834,-.4152,-.4484,-.5435,-.7096,-.8905,.4304,.1477,-.891,.1834,-.4152,-.8242,.4159,.3841
                    ,.2293,.2379,-.9438,.8438,-.254,-.4727,.8929,-.0894,-.4412,.8433,-.1989,.4992,-.9575,-.2249,.1802,-.2408,-.1101,-.9643,.3122,-.2107,.9263,-.8764,-.227,-.4246,.2518,-.5948,.7634,-.5372,-.8434,.002,.6821,-.636,-.3607,.6821,-.636,-.3607,-.4484,-.5435,-.7096,-.5372,-.8434,.002,.6821,-.636,-.3607,-.1757,-.3766,.9095,-.066,.439,.896
                    ,-.8418,.3833,-.3801,-.275,.8149,.5101,-.1381,.7126,.6878,-.2015,.1758,-.9636,-.5254,-.5552,-.6447,-.341,-.6035,.7207,.0513,-.9986,-.01,-.6165,-.6681,.4165,-.9153,-.3969,-.0673,-.9153,-.3969,-.0673,-.6165,-.6681,.4165,-.3244,.5959,-.7346,.7526,.1395,.6435,.6811,-.5329,.5021,.1469,.3967,.9061,-.7763,.0445,-.6287,-.5075,-.3042,-.8061
                    ,.7539,-.244,.6099,.2689,-.2184,.938,.0031,.1222,.9925,.1975,.0953,.9756,.2689,-.2184,.938,.2005,-.101,.9745,-.0035,.142,.9898,-.8823,.1433,-.4482,-.3248,.4066,-.8539,-.337,.0201,-.9413,-.3956,.4923,.7753,-.4742,.4165,-.7757,-.2671,.5464,-.7938,-.4855,.2646,-.8332,-.1757,-.3766,.9095,.193,.3356,.922,-.4577,.0286,-.8886
                    ,-.7698,.2082,-.6034,.6783,-.3544,.6437,.0031,.1222,.9925,-.9099,.4065,.0829,-.5544,.3438,.7579,.8295,-.5365,-.1551,-.0956,-.3578,-.9289,-.5544,.3438,.7579,.0031,.1222,.9925,.8295,-.5365,-.1551,-.7698,.2082,-.6034,-.9099,.4065,.0829,-.4577,.0286,-.8886,.956,-.0889,.2794,.7554,-.4071,-.5134,-.9713,.1874,.1463,-.9821,.187,.0213
                    ,.2689,-.2184,.938,.8295,-.5365,-.1551,.6783,-.3544,.6437,-.0535,-.6677,-.7425,-.0956,-.3578,-.9289,.8295,-.5365,-.1551,.1975,.0953,.9756,-.4457,-.1617,.8804,-.8326,.2704,.4834,-.4646,.233,.8543,-.4631,.2918,.8369,-.8692,-.1117,.4817,-.5107,-.073,.8566,-.843,-.119,.5246,-.9681,.2457,.0482,-.8117,.3736,.449,-.992,-.0413,.1194
                    ,-.9272,.1646,-.3365,-.9681,.2457,.0482,-.995,.0585,.0813,-.9145,-.2526,-.3158,-.992,-.0413,.1194,-.9829,.122,-.1376,-.0452,-.4369,-.8984,-.2498,.1761,-.9521,-.5261,.2188,-.8218,-.588,.0449,-.8076,-.0316,.3123,-.9495,-.5557,.3136,-.77,-.5557,.3136,-.77,-.0264,.6007,-.799,-.5014,.623,-.6003,-.9681,.2457,.0482,-.7685,.5943,-.2368
                    ,-.8101,.5846,.0435,-.8326,.2704,.4834,-.8101,.5846,.0435,-.6689,.635,.3864,-.4646,.233,.8543,-.3823,.6197,.6854,-.2498,.1761,-.9521,-.4685,.035,-.8827,-.5261,.2188,-.8218,-.992,-.0413,.1194,-.9443,.0192,-.3284,-.9858,-.1145,.1223,-.8692,-.1117,.4817,-.9858,-.1145,.1223,-.8365,-.3143,.4489,-.5107,-.073,.8566,-.4558,-.3195,.8307
                    ,-.3343,-.4029,-.852,-.033,.1303,-.9909,-.588,.0449,-.8076,-.9443,.0192,-.3284,-.995,.0585,.0813,-.9858,-.1145,.1223,-.8365,-.3143,.4489,-.995,.0585,.0813,-.843,-.119,.5246,-.4558,-.3195,.8307,-.843,-.119,.5246,-.4457,-.1617,.8804,.011,.9478,.3187,.0259,.6372,.7702,-.3815,.9204,-.085,-.8101,.5846,.0435,-.3157,.9443,.0924
                    ,-.2573,.9122,-.3187,-.0115,.9349,-.3547,.011,.9478,.3187,-.3157,.9443,.0924,-.2226,.9413,.2535,.0315,-.3186,.9473,-.4457,-.1617,.8804,.0328,-.1699,.9849,-.5107,-.073,.8566,.0315,-.3186,.9473,.0333,-.0529,.998,.0326,.2177,.9755,.0333,-.0529,.998,.0391,.2712,.9617,.0328,-.1699,.9849,.0326,.2177,.9755,-.0264,.6007,-.799
                    ,-.5804,-.4018,-.7083,-.9272,.1646,-.3365,-.9443,.0192,-.3284,-.9458,-.0462,-.3215,-.8966,.2755,-.3466,-.8966,.2755,-.3466,-.5878,-.5127,-.6258,-.9458,-.0462,-.3215,-.327,-.9101,-.2545,-.7631,-.3785,-.5239,-.2933,.5339,.793,.0391,.2712,.9617,.0528,.4588,.8869,-.0452,-.4369,-.8984,-.9405,.3004,-.1584,-.9405,.3004,-.1584,-.6633,.6254,.4109
                    ,.0984,.6163,.7813,.0528,.4588,.8869,-.8394,.5347,-.0972,-.0669,-.7885,-.6113,-.9458,-.0462,-.3215,-.0263,.3746,-.9268,-.5528,-.7547,-.3533,-.2498,.1761,-.9521,-.0289,-.508,-.8608,-.6105,-.6301,-.4799,-.5528,-.7547,-.3533,-.9942,.0035,-.1071,-.5528,-.7547,-.3533,-.0329,.154,-.9875,-.7829,.056,-.6195,-.2498,.1761,-.9521,-.5528,-.7547,-.3533
                    ,-.0329,.154,-.9875,-.6842,-.348,-.6409,-.7447,.0533,-.6652,-.9753,-.1321,-.1767,-.5694,-.394,-.7215,-.7829,.056,-.6195,-.5804,-.4018,-.7083,-.5453,-.27,-.7935,-.0297,-.4637,-.8855,.7787,.5569,-.2888,.5645,-.7975,-.2127,.8663,.4994,-.0084,.5645,-.7975,-.2127,.8526,.3665,.3726,.4593,.3766,-.8044,.5766,.7687,-.2767,-.5793,-.7705,.2658
                    ,.9709,-.2264,.0777,.2895,-.8588,.4227,.9932,-.0728,-.0911,-.8343,-.1149,-.5392,.2713,-.1949,-.9426,.3662,.2664,-.8916,-.2522,-.5817,.7733,.3247,.3758,-.8679,-.1927,-.9076,.373,.735,-.6722,-.0891,-.871,-.1574,.4654,-.5793,-.7705,.2658,-.9869,.0231,-.1597,-.346,-.0133,-.9381,-.3941,.1051,-.913,-.8239,.0228,-.5662,-.0263,.3746,-.9268
                    ,-.0928,.3303,-.9393,-.0333,.0291,-.999,-.5261,.2188,-.8218,-.2498,.1761,-.9521,-.5261,.2188,-.8218,-.8929,.078,-.4433,-.4692,.1728,-.866,-.9458,-.0462,-.3215,-.942,.3157,-.1141,-.8435,.058,-.534,-.3808,-.0694,-.922,.6371,-.3329,-.6952,.2765,-.4031,-.8723,-.6842,-.348,-.6409,-.3343,-.4029,-.852,.6873,.6673,-.2869,.3157,.5131,-.7981
                    ,.2129,-.2593,-.942,-.8183,.0776,-.5695,-.2575,-.1532,.954,-.9074,-.2507,.3371,.6893,.147,.7094,.3052,.3637,-.8801,-.6072,.5347,-.5877,-.4858,-.3146,.8155,.865,-.0937,.4929,.3814,.3588,-.8519,.3303,.4423,-.8338,-.3248,.4066,-.8539,.3424,.2273,.9116,.2991,.4146,.8594,.3303,.4423,-.8338,-.1503,.4209,-.8945,.2991,.4146,.8594
                    ,.4967,.8403,-.217,-.1552,-.0964,-.9832,.1622,-.0871,-.9829,-.5252,.0355,-.8502,.9073,.1799,-.3801,.6229,.1563,-.7665,.3777,.0781,.9226,.8386,.1494,.5238,-.3618,-.5031,.7848,.5072,-.2814,.8146,.908,.028,.4181,-.1156,.254,-.9603,-.718,-.0431,-.6947,.8443,.3536,-.4025,.3528,.3224,-.8784,-.0179,-.3948,-.9186,-.752,-.4051,-.5199
                    ,-.5676,-.5456,.6165,-.7572,-.6518,.0425,-.6127,-.7833,-.1048,-.9879,.1508,.0358,-.7572,-.6518,.0425,.975,.2127,.064,.7288,-.678,.0956,.003,-1,-.0003,-.7572,-.6518,.0425,.9308,.1912,-.3113,.9778,.1913,-.0855,-.9652,-.261,.0113,-.9412,-.2964,-.1621,.8488,.3571,-.3898,.8743,.2421,-.4207,-.9251,-.3759,-.0536,-.9912,-.0537,-.1208
                    ,.908,.028,.4181,.8443,.3536,-.4025,.8488,.3571,-.3898,-.8897,-.4493,.0807,-.9442,-.3274,.0351,.8798,.3201,-.3512,.8443,.3536,-.4025,-.9442,-.3274,.0351,-.9652,-.261,.0113,.8722,.4249,-.2425,.8608,.4365,-.2618,.8386,.1494,.5238,.9073,.1799,-.3801,.8722,.4249,-.2425,.6873,.6673,-.2869,.4967,.8403,-.217,.7199,.6124,-.3267
                    ,.9276,.0323,-.3721,.916,-.1757,-.3605,.865,-.0937,.4929,.9284,-.0584,-.3669,.9276,.0323,-.3721,-.498,.8059,.3201,-.946,-.2532,.2026,-.9218,.2749,.2732,-.9218,.2749,.2732,.8672,.4494,-.2145,.8705,.418,-.2597,.9411,.0206,-.3374,.9284,-.0584,-.3669,-.8586,-.4813,.1761,-.9074,-.2507,.3371,-.8183,.0776,-.5695,-.9074,-.2507,.3371
                    ,-.9551,-.0988,.2794,.7199,.6124,-.3267,.7909,.4554,-.4087,.8809,-.0482,-.4707,.9073,.1799,-.3801,.8348,.3971,-.3812,.8672,.4494,-.2145,.7615,-.4141,.4986,.377,-.8423,-.3852,.6873,.6673,-.2869,.5929,.7308,.338,.2157,.6093,.763,.8056,.2839,.52,.9778,.1913,-.0855,.975,.2127,.064,-.8466,.1694,-.5045,-.9912,-.0537,-.1208
                    ,-.9879,.1508,.0358,-.6927,.0815,.7166,.6724,.4418,-.5938,-.0394,.6573,-.7526,-.8466,.1694,-.5045,.207,.2634,.9422,.8056,.2839,.52,.7909,.4554,-.4087,.8348,.3971,-.3812,.8052,.2762,.5247,.3995,.2863,-.8708,-.1573,-.4459,-.8811,.7909,.4554,-.4087,.3995,.2863,-.8708,.8705,.418,-.2597,.9411,.0206,-.3374,-.9551,-.0988,.2794
                    ,-.946,-.2532,.2026,.8373,-.2438,-.4893,.8809,-.0482,-.4707,.291,-.6948,.6577,.377,-.8423,-.3852,-.7672,-.6359,.0836,-.7672,-.6359,.0836,-.8586,-.4813,.1761,.377,-.8423,-.3852,-.6927,.0815,.7166,.207,.2634,.9422,-.0394,.6573,-.7526,.4638,.5389,.7032,.1298,.178,-.9754,.6011,-.5754,.5546,.7288,-.678,.0956,.003,-1,-.0003
                    ,.7995,-.3569,-.4831,-.0179,-.3948,-.9186,-.5676,-.5456,.6165,.3528,.3224,-.8784,-.1156,.254,-.9603,.5072,-.2814,.8146,-.3618,-.5031,.7848,.1975,.0953,.9756,.1622,-.0871,-.9829,-.1503,.4209,-.8945,.4742,.2907,.831,-.2015,.1758,-.9636,.7615,-.4141,.4986,-.1373,.2896,-.9472,.5419,-.1665,.8238,.8608,.4365,-.2618,.8798,.3201,-.3512
                    ,-.7627,-.605,.2284,-.8897,-.4493,.0807,.8903,.1263,.4375,-.2328,-.5056,.8308,.3632,.4558,-.8126,-.9412,-.2964,-.1621,-.9251,-.3759,-.0536,.8743,.2421,-.4207,.9308,.1912,-.3113,-.7627,-.605,.2284,-.0535,-.6677,-.7425,-.7627,-.605,.2284,-.5252,.0355,-.8502,.5208,.2326,.8214,.5667,-.0734,.8206,.9694,.245,-.0165,.8717,.2748,-.4057
                    ,.9938,-.1082,.0261,.9227,-.08,-.377,.4832,.2001,-.8523,.5033,.3132,-.8053,.9694,.245,-.0165,.8117,.584,-.0107,.8632,.2697,.4268,.187,.1662,-.9682,.9938,-.1082,.0261,.9905,-.1265,.054,.9037,-.1349,.4064,.51,-.3199,.7985,.5329,.0445,-.845,.5329,.0445,-.845,-.033,.1303,-.9909,.9982,.0577,.0147,.9028,.1639,-.3975
                    ,.9217,.0073,-.3879,.8643,-.315,.3921,.876,-.1196,.4672,.9982,.0577,.0147,.5033,-.1621,.8488,.876,-.1196,.4672,.0259,.6372,.7702,.8117,.584,-.0107,.349,.9371,.0071,.2362,.912,-.3352,.3756,.9202,-.1103,.349,.9371,.0071,.3219,.9441,.0712,.2397,.9412,.238,.011,.9478,.3187,.3219,.9441,.0712,.3756,.9202,-.1103
                    ,.349,.9371,.0071,.0328,-.1699,.9849,.5033,-.1621,.8488,.0315,-.3186,.9473,.51,-.3199,.7985,.0259,.6372,.7702,.0333,-.0529,.998,.5667,-.0734,.8206,.0326,.2177,.9755,.5208,.2326,.8214,.9028,.1639,-.3975,.5329,.0445,-.845,.5315,-.4022,-.7454,.491,-.2704,-.8281,.8717,.2748,-.4057,.5033,.3132,-.8053,.9589,-.0201,-.283
                    ,.9327,.1244,-.3385,.9327,.1244,-.3385,.8735,.3535,-.3348,-.0263,.3746,-.9268,.187,.1662,-.9682,-.0289,-.508,-.8608,.5275,-.7551,-.3893,.7373,.0522,-.6735,.5275,-.7551,-.3893,.187,.1662,-.9682,.6371,-.3329,-.6952,.7373,.0522,-.6735,.5315,-.4022,-.7454,-.6127,-.7833,-.1048,-.8002,.5145,.3082,-.498,.8059,.3201,.49,-.8102,-.3217
                    ,.916,-.1757,-.3605,.49,-.8102,-.3217,-.0263,.3746,-.9268,.4832,.2001,-.8523,.4832,.2001,-.8523,.9227,-.08,-.377,.193,.3356,.922,.3424,.2273,.9116,-.793,.45,.4107,-.4855,.2646,-.8332,-.633,.5099,-.5824,.3122,-.2107,.9263,.2005,-.101,.9745,-.2408,-.1101,-.9643,-.337,.0201,-.9413,-.8823,.1433,-.4482,-.8905,.4304,.1477
                    ,.2052,.004,-.9787,.8451,-.082,.5283,.9066,-.2425,-.3452,.8451,-.082,.5283,-.8439,.2982,-.4459,.0105,.4901,-.8716,.8638,.2022,-.4614,.9132,-.2911,.2851,.9132,-.2911,.2851,-.2855,-.1231,.9504,-.8707,.3825,-.3091,-.786,.5903,.1835,-.818,.4047,-.4086,-.4742,.4165,-.7757,-.3248,.4066,-.8539,.3424,.2273,.9116,-.818,.4047,-.4086
                    ,-.0235,.613,.7897,.2157,.6093,.763,-.5058,.8535,.1248,-.6253,.7789,.0482,-.3616,.1567,-.9191,-.1552,-.0964,-.9832,-.4717,-.0942,-.8767,-.1552,-.0964,-.9832,-.0035,.142,.9898,-.0956,-.3578,-.9289,-.3616,.1567,-.9191,-.9782,.1979,.0623,-.4099,-.0931,-.9073,-.9099,.4065,.0829,-.9596,.2811,-.0131,.8566,-.389,-.3389,.7539,-.244,.6099
                    ,.003,.0588,.9983,.7526,.1395,.6435,-.9821,.187,.0213,.0919,-.5685,.8175,-.6176,.4779,.6247,-.3244,.5959,-.7346,-.9301,.3598,.074,.7297,-.6324,-.26,-.3706,-.4051,-.8357,.4645,-.3599,-.8091,.6811,-.5329,.5021,.5645,-.7975,-.2127,.4645,-.3599,-.8091,.7297,-.6324,-.26,-.6165,-.6681,.4165,.7297,-.6324,-.26,.0513,-.9986,-.01
                    ,-.6176,.4779,.6247,.7554,-.4071,-.5134,.8606,-.3298,-.388,.9065,-.3603,-.2202,.7956,-.4811,-.3681,-.5694,.256,.7811,-.9543,.2986,.0049,.8566,-.389,-.3389,-.9596,.2811,-.0131,-.9611,.2701,.0575,.8606,-.3298,-.388,.8566,-.389,-.3389,-.9099,.4065,.0829,-.9132,.3957,.0968,-.5976,.17,.7835,-.9132,.3957,.0968,-.633,.5099,-.5824
                    ,-.6253,.7789,.0482,-.3956,.4923,.7753,-.786,.5903,.1835,-.871,-.1574,.4654,-.8913,-.0173,.453,-.2855,-.1231,.9504,-.8913,-.0173,.453,.5766,.7687,-.2767,.0105,.4901,-.8716,.8638,.2022,-.4614,.8638,.2022,-.4614,-.8242,.4159,.3841,-.793,.45,.4107,-.9133,-.0627,.4023,-.916,.0129,.401,.2052,.004,-.9787,.9066,-.2425,-.3452
                    ,.7837,-.4936,-.3771,.8929,-.0894,-.4412,-.8905,.4304,.1477,-.786,.5903,.1835,-.9782,.1979,.0623,-.992,-.0345,.121,-.793,.45,.4107,-.9575,-.2249,.1802,-.5372,-.8434,.002,-.6253,.7789,.0482,-.8394,.5347,-.0972,.0984,.6163,.7813,-.8215,.3834,.4221,.5977,-.1873,-.7795,.9438,-.0837,-.3198,-.8418,.3833,-.3801,-.066,.439,.896
                    ,-.2616,.3841,.8854,-.9051,.3652,.2176,-.2616,.3841,.8854,-.891,.1834,-.4152,-.8905,.4304,.1477,-.916,.0129,.401,-.8242,.4159,.3841,.8438,-.254,-.4727,-.992,-.0345,.121,-.9575,-.2249,.1802,-.1793,-.0787,-.9806,-.2408,-.1101,-.9643,.3648,-.1139,.9241,.3122,-.2107,.9263,.2518,-.5948,.7634,.6821,-.636,-.3607,-.5372,-.8434,.002
                    ,-.7992,-.2558,-.5438,.7837,-.4936,-.3771,.6821,-.636,-.3607,-.5372,-.8434,.002,-.066,.439,.896,-.275,.8149,.5101,-.2015,.1758,-.9636,-.0669,-.7885,-.6113,-.341,-.6035,.7207,.0513,-.9986,-.01,-.3706,-.4051,-.8357,-.9153,-.3969,-.0673,-.3244,.5959,-.7346,.7526,.1395,.6435,.6811,-.5329,.5021,.0919,-.5685,.8175,-.7763,.0445,-.6287
                    ,.7539,-.244,.6099,.003,.0588,.9983,.2689,-.2184,.938,.6783,-.3544,.6437,-.4099,-.0931,-.9073,.2005,-.101,.9745,.1975,.0953,.9756,-.0035,.142,.9898,-.8823,.1433,-.4482,-.4717,-.0942,-.8767,-.0235,.613,.7897,-.3248,.4066,-.8539,-.818,.4047,-.4086,-.4742,.4165,-.7757,-.2671,.5464,-.7938,-.2015,.1758,-.9636,-.4855,.2646,-.8332
                    ,-.1757,-.3766,.9095,-.3956,.4923,.7753,.193,.3356,.922,-.4577,.0286,-.8886,-.9611,.2701,.0575,.8476,-.4717,-.2428,-.5544,.3438,.7579,.8295,-.5365,-.1551,-.7698,.2082,-.6034,.7956,-.4811,-.3681,.7554,-.4071,-.5134,-.9713,.1874,.1463,-.9821,.187,.0213,.2689,-.2184,.938,-.0535,-.6677,-.7425,.8295,-.5365,-.1551,-.0535,-.6677,-.7425
                    ,-.3616,.1567,-.9191,-.0956,-.3578,-.9289,-.995,.0585,.0813,-.9829,.122,-.1376,-.8966,.2755,-.3466,-.9681,.2457,.0482,-.9458,-.0462,-.3215,-.992,-.0413,.1194,-.0452,-.4369,-.8984,-.0452,-.4369,-.8984,-.0263,.3746,-.9268,-.033,.1303,-.9909,-.0316,.3123,-.9495,-.5557,.3136,-.77,-.0316,.3123,-.9495,-.0264,.6007,-.799,-.9681,.2457,.0482
                    ,-.8326,.2704,.4834,-.9681,.2457,.0482,-.8101,.5846,.0435,-.4646,.233,.8543,-.8326,.2704,.4834,-.2498,.1761,-.9521,-.992,-.0413,.1194,-.8692,-.1117,.4817,-.992,-.0413,.1194,-.9858,-.1145,.1223,-.5107,-.073,.8566,-.8692,-.1117,.4817,-.588,.0449,-.8076,-.0303,-.429,-.9028,-.033,.1303,-.9909,-.9443,.0192,-.3284,-.9272,.1646,-.3365
                    ,-.995,.0585,.0813,-.8365,-.3143,.4489,-.9858,-.1145,.1223,-.995,.0585,.0813,-.4558,-.3195,.8307,-.8365,-.3143,.4489,-.843,-.119,.5246,.011,.9478,.3187,-.347,.9373,.0303,-.8101,.5846,.0435,-.347,.9373,.0303,-.347,.9373,.0303,-.3815,.9204,-.085,-.0115,.9349,-.3547,-.2573,.9122,-.3187,-.0115,.9349,-.3547,-.3815,.9204,-.085
                    ,.011,.9478,.3187,-.2226,.9413,.2535,-.3157,.9443,.0924,-.3157,.9443,.0924,-.347,.9373,.0303,-.0115,.9349,-.3547,.0315,-.3186,.9473,-.4558,-.3195,.8307,-.4457,-.1617,.8804,-.5107,-.073,.8566,.0315,-.3186,.9473,.0326,.2177,.9755,-.4646,.233,.8543,.0333,-.0529,.998,.0328,-.1699,.9849,-.0264,.6007,-.799,-.0115,.9349,-.3547
                    ,-.588,.0449,-.8076,-.9272,.1646,-.3365,-.5261,.2188,-.8218,-.5804,-.4018,-.7083,-.5557,.3136,-.77,.0391,.2712,.9617,-.0468,-.8939,-.4458,-.0452,-.4369,-.8984,-.9405,.3004,-.1584,-.9829,.122,-.1376,.0984,.6163,.7813,-.8394,.5347,-.0972,-.9405,.3004,-.1584,-.0669,-.7885,-.6113,-.0468,-.8939,-.4458,-.0263,.3746,-.9268,-.0289,-.508,-.8608
                    ,-.0289,-.508,-.8608,-.0282,-.5432,-.8391,-.7829,.056,-.6195,-.0282,-.5432,-.8391,-.0329,.154,-.9875,-.2498,.1761,-.9521,-.0329,.154,-.9875,-.0297,-.4637,-.8855,-.7829,.056,-.6195,-.6842,-.348,-.6409,-.3343,-.4029,-.852,-.5804,-.4018,-.7083,-.0297,-.4637,-.8855,-.0303,-.429,-.9028,.7787,.5569,-.2888,.5645,-.7975,-.2127,.5766,.7687,-.2767
                    ,.7787,.5569,-.2888,-.5793,-.7705,.2658,-.5768,-.6018,-.5524,-.871,-.1574,.4654,-.5793,-.7705,.2658,-.0263,.3746,-.9268,-.2498,.1761,-.9521,-.5261,.2188,-.8218,-.5261,.2188,-.8218,-.9458,-.0462,-.3215,-.9458,-.0462,-.3215,-.992,-.0413,.1194,.6371,-.3329,-.6952,-.6842,-.348,-.6409
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .9028,.6357,.8994,.6593,.8875,.6367,.6118,.1482,.6445,.2228,.5943,.2213,.6714,.3962,.6054,.3517,.6497,.3473,.2256,.9012,.1988,.8506,.2295,.8445,.3129,.2245,.327,.2461,.3058,.2387,.0429,.9566,.0737,.8882,.0956,.9004,.6064,.0551,.6401,.0999,.6115,.0991,.5695,.4128,.5422,.3464,.5744,.3494,.2775,.982
                    ,.2729,.9184,.3065,.9144,.65,.3054,.6132,.2696,.6521,.2693,.3294,.9755,.3294,.9138,.3023,.8691,.3441,.8515,.3353,.8745,.1667,.8881,.1931,.8983,.8888,.7304,.867,.6826,.8934,.6773,.9226,.6877,.9331,.74,.8558,.1637,.8807,.1315,.8922,.1678,.2689,.8491,.3046,.8462,.8454,.2444,.8902,.2267,.8749,.2585
                    ,.8244,.2353,.8553,.2124,.8454,.2444,.6728,.5458,.6791,.5771,.6691,.5761,.8213,.1635,.85,.1315,.3413,.7942,.3147,.7716,.3441,.7683,.3079,.7985,.2811,.7671,.3147,.7716,.7212,.5367,.7633,.5607,.7331,.5731,.6753,.5133,.6839,.542,.6825,.6421,.6877,.6744,.6783,.6742,.6772,.6115,.6916,.6388,.6825,.6421
                    ,.7389,.6749,.7326,.6139,.7354,.6334,.367,.2706,.4172,.2106,.4429,.2561,.2941,.2201,.3308,.1912,.5211,.8808,.5387,.851,.5729,.882,.6232,.4214,.5642,.4768,.5188,.8301,.5396,.828,.5972,.8024,.5688,.8198,.5811,.7903,.7001,.7921,.7353,.7641,.7337,.7921,.5455,.3044,.5805,.2705,.5777,.3063,.5767,.0146
                    ,.6098,.0202,.6993,.7345,.7412,.7311,.8051,.7894,.7679,.7724,.8101,.7729,.2099,.7489,.1769,.7722,.1826,.7402,.4232,.5563,.3948,.4948,.4142,.4924,.7713,.7389,.8133,.7395,.1452,.7612,.1581,.7314,.2359,.2712,.286,.2533,.2856,.277,.4842,.544,.4326,.4895,.4623,.4809,.2306,.2834,.1695,.3278,.1646,.2797
                    ,.2281,.3695,.1582,.3804,.1646,.3552,.0467,.8129,.031,.7395,.0474,.7394,.2073,.2724,.1786,.2485,.2087,.247,.0461,.8365,.0286,.8132,.0951,.834,.0667,.8117,.0979,.8082,.2656,.0557,.2288,.0007,.2587,.0008,.0678,.7378,.095,.7345,.2376,.2475,.2902,.1764,.1743,.1742,.2116,.1712,.6958,.2479,.7194,.2529
                    ,.6992,.2607,.2124,.0565,.1904,.0007,.2125,.0007,.0483,.6173,.0379,.5751,.0467,.5752,.0848,.6136,.0591,.5735,.0826,.5592,.903,.9482,.812,.9147,.9081,.9233,.2478,.6563,.2309,.6733,.234,.6489,.2767,.6368,.3519,.6419,.3497,.6557,.678,.2505,.6459,.2608,.6466,.2471,.765,.6135,.7931,.6197,.7659,.6284
                    ,.6863,.5136,.7642,.4905,.7727,.524,.7489,.5177,.2481,.6734,.2912,.75,.2309,.6733,.7143,.2409,.7483,.2322,.4786,.9175,.4568,.8833,.4745,.8777,.1858,.0559,.1743,.0007,.0007,.8099,.1461,.1756,.0125,.6144,.0378,.6174,.1807,.2748,.1487,.2517,.3986,.5591,.3681,.4948,.2068,.4359,.2223,.3964,.0007,.8328
                    ,.0267,.8352,.1618,.8171,.1925,.7792,.1618,.8171,.3567,.2328,.3469,.2706,.327,.2461,.5917,.8391,.6693,.8296,.6544,.8689,.7175,.5876,.6812,.4809,.7199,.516,.6753,.5133,.6812,.4809,.7918,.1444,.8204,.1375,.6684,.5795,.6866,.6077,.2414,.8804,.2748,.8789,.2433,.7869,.2734,.8012,.1309,.876,.1773,.8431
                    ,.7895,.2253,.8237,.2118,.0007,.9604,.0346,.9008,.5692,.0505,.5298,.0007,.8516,.7369,.8365,.6795,.558,.096,.4939,.1243,.505,.074,.9131,.8107,.9394,.8128,.9137,.8271,.8791,.618,.8922,.6161,.9881,.8044,.9639,.8132,.9686,.7983,.7125,.2218,.7389,.2217,.31,.6984,.3016,.7409,.6758,.2349,.6459,.2314
                    ,.3248,.6851,.3519,.6725,.3125,.6897,.6921,.2315,.8147,.7708,.8509,.772,.8509,.772,.8911,.7845,.1862,.9345,.2111,.9388,.2309,.844,.7856,.1694,.5206,.0355,.6412,.1473,.6119,.3064,.8911,.7845,.9331,.7754,.251,.885,.2309,.9359,.1205,.9116,.1498,.9388,.0818,.8386,.0581,.849,.5459,.156,.6758,.2349
                    ,.3125,.6897,.3248,.6851,.9686,.7983,.9394,.7935,.8922,.6161,.8771,.6052,.8885,.6027,.4949,.8843,.4786,.9175,.4745,.8777,.2693,.6207,.8141,.9744,.8979,.9744,.0608,.6164,.2336,.0566,.6806,.2638,.2483,.1728,.0648,.8372,.1695,.3278,.2351,.3313,.1592,.6859,.1851,.6893,.4464,.5535,.2295,.718,.6445,.0237
                    ,.6414,.0576,.7666,.7894,.5306,.4739,.5353,.4098,.5729,.882,.6544,.8689,.4172,.2106,.2916,.2352,.5459,.156,.5141,.2233,.436,.6727,.4678,.6759,.352,.3885,.3398,.3443,.3298,.4674,.3454,.4203,.4027,.6633,.3534,.5603,.3454,.4203,.352,.3885,.3228,.2797,.4678,.6759,.5095,.6683,.436,.6727,.0007,.7359
                    ,.1678,.0557,.1515,.6207,.6707,.6932,.7109,.7156,.2099,.7489,.0572,.9772,.0333,.9891,.0327,.9768,.9595,.8435,.9367,.8722,.9366,.8392,.0017,.9903,.0007,.9782,.9165,.8678,.9131,.8449,.5941,.9817,.5665,.968,.5953,.9697,.8602,.6714,.8708,.6356,.8814,.6587,.8164,.6219,.8156,.6114,.8479,.615,.5437,.968
                    ,.5199,.9805,.5188,.9693,.9209,.077,.9075,.1011,.8995,.0865,.9717,.0859,.947,.0949,.9436,.077,.9476,.6007,.9215,.623,.9166,.6077,.9717,.6033,.9491,.6172,.9476,.6007,.7186,.9227,.7051,.908,.7169,.9049,.7709,.9024,.742,.9389,.736,.9047,.9379,.8829,.9131,.907,.9177,.8736,.962,.8803,.9421,.907
                    ,.9379,.8829,.6707,.9366,.6735,.9323,.681,.9373,.734,.978,.7141,.9572,.7371,.9739,.4852,.2718,.4556,.2724,.4565,.2673,.5097,.2713,.4871,.2784,.4852,.2718,.968,.6191,.9648,.6427,.9577,.6391,.9661,.1015,.9485,.1159,.9419,.6402,.9306,.6427,.9299,.1132,.926,.0935,.4917,.9635,.5077,.9779,.4532,.9779
                    ,.5271,.2673,.5116,.2778,.9836,.8988,.9763,.8765,.9888,.6105,.9735,.8698,.9751,.8452,.0754,.9781,.0571,.9894,.921,.1186,.7107,.9615,.6951,.9466,.7141,.9572,.5431,.9792,.835,.6476,.8581,.6077,.8781,.6319,.9625,.8261,.9787,.8296,.845,.6007,.8564,.6007,.8814,.6587,.891,.6577,.9133,.8356,.9375,.827
                    ,.9823,.8184,.9137,.8271,.835,.6476,.8243,.6316,.2916,.272,.2992,.2733,.2924,.2754,.701,.9014,.6925,.9082,.689,.9057,.6998,.9225,.7022,.9083,.6811,.9195,.7051,.908,.703,.9216,.6808,.9334,.686,.9228,.6998,.9287,.7026,.9299,.6953,.9238,.7197,.9391,.7022,.9382,.6751,.9295,.8122,.6074,.8143,.629
                    ,.7894,.5199,.7752,.5305,.7515,.5309,.7771,.5765,.7916,.6114,.7904,.537,.7808,.6651,.7103,.5939,.6986,.589,.7004,.6001,.7164,.601,.7114,.5948,.7111,.5944,.7111,.5944,.7117,.5941,.7102,.5948,.7112,.5944,.7111,.5944,.7285,.4809,.7808,.6651,.611,.6866,.5946,.7533,.5946,.6773,.6278,.7563,.6129,.7564
                    ,.5946,.7862,.6037,.7838,.6043,.7886,.6156,.7851,.6043,.7886,.6156,.7851,.6311,.7796,.6341,.7853,.6341,.7853,.6598,.7827,.6693,.7889,.656,.7335,.6139,.7695,.5946,.768,.6139,.7807,.9554,.1617,.9389,.1445,.9489,.1315,.2769,.5867,.3515,.6194,.2759,.616,.6691,.0787,.6933,.1535,.6459,.1269,.8186,.3745
                    ,.7996,.3205,.8385,.3487,.9073,.4263,.8905,.4459,.8628,.4291,.9305,.287,.8989,.3549,.907,.2784,.2277,.5863,.1863,.6163,.1838,.5813,.7442,.0831,.7814,.1446,.7472,.1466,.4053,.978,.4099,.9143,.4519,.9318,.669,.0007,.7081,.039,.67,.0368,.3534,.9715,.3762,.9103,.7856,.0823,.8233,.1076,.7898,.1067
                    ,.8489,.3224,.8696,.5263,.9168,.5493,.8621,.5633,.9131,.4936,.8612,.4818,.6707,.8872,.7037,.8635,.7066,.9,.8598,.0942,.8485,.1223,.7655,.9,.7847,.8558,.7978,.8858,.7524,.8646,.7763,.8345,.7847,.8558,.4974,.3856,.5117,.357,.5074,.3872,.6717,.8566,.7047,.829,.7991,.0266,.8295,.0094,.8311,.0371
                    ,.8634,.0113,.8645,.0463,.4205,.3477,.4673,.3355,.4463,.3676,.502,.3504,.5178,.325,.4637,.4772,.4772,.4474,.4728,.4795,.4692,.4418,.4903,.4193,.4772,.4474,.4142,.4643,.4361,.407,.4822,.4132,.8478,.4653,.8055,.3994,.927,.3907,.9264,.4243,.4834,.8462,.5003,.8764,.4485,.8764,.7506,.2108,.5038,.8257
                    ,.5031,.857,.4261,.7962,.4541,.8142,.4308,.833,.4257,.7404,.44,.7831,.4118,.7648,.7422,.0399,.7741,.0039,.7745,.039,.1433,.5516,.1792,.5441,.4387,.7095,.472,.7353,.3534,.7236,.3939,.7297,.3857,.7446,.6924,.3975,.7253,.4208,.7097,.4278,.5973,.5563,.6257,.4948,.6218,.5591,.3582,.707,.4092,.6997
                    ,.7196,.3888,.7571,.4098,.0047,.2532,.0547,.2711,.0051,.2769,.5362,.544,.5878,.4895,.574,.5535,.4267,.0174,.4808,.07,.4155,.0641,.4169,.103,.4846,.1236,.4189,.1304,.0518,.5336,.0676,.4602,.07,.5339,.0833,.2724,.1122,.2486,.1099,.2749,.0524,.5572,.0718,.5559,.0034,.5547,.0318,.5323,.0337,.5579
                    ,.0326,.0007,.0576,.0566,.0256,.0556,.0007,.5289,.0308,.4585,.0007,.1762,.0532,.2474,.082,.2471,.1166,.1743,.5485,.2525,.5268,.2628,.5289,.2499,.0788,.0007,.1054,.056,.0788,.0565,.0503,.3379,.0607,.2958,.0608,.338,.0138,.3342,.0396,.2942,.0379,.337,.2253,.9741,.1316,.9993,.1205,.9801,.8142,.8305
                    ,.8139,.8066,.8263,.8185,.8789,.9134,.8214,.8647,.8869,.9019,.6002,.2533,.5665,.2509,.5962,.2402,.3763,.3969,.405,.3983,.4002,.4123,.4741,.316,.5071,.3224,.421,.3098,.438,.2797,.4457,.31,.9106,.7935,.9117,.8072,.4939,.2495,.5005,.2371,.5018,.9246,.4799,.9587,.4841,.9189,.117,.0008,.1234,.0558
                    ,.0979,.5306,.1448,.1757,.142,.2518,.0862,.3351,.1099,.2749,.142,.2518,.1413,.2785,.6523,.4948,.6671,.5603,.4286,.1718,.0979,.5535,.0718,.5559,.7405,.4657,.7097,.4278,.7405,.4657,.7252,.4742,.8677,.4678,.3534,.8217,.4261,.7962,.4552,.3989,.5206,.2921,.5178,.325,.5206,.2921,.5293,.2957,.6866,.7988
                    ,.7118,.7935,.5071,.3906,.881,.1301,.8485,.1223,.8967,.0379,.8087,.2996,.8643,.2879,.7676,.7993,.7893,.8062,.9466,.3247,.9237,.3894,.1641,.4954,.9191,.5799,.8662,.5994,.2246,.5328,.253,.4687,.2847,.5207,.9611,.0757,.9589,.0494,.9783,.0494,.9584,.1838,.9425,.1699,.9734,.0202,.9533,.0064,.9674,.0007
                    ,.5262,.231,.5005,.2371,.511,.2247,.8882,.8436,.9117,.8072,.9117,.8237,.565,.2351,.5933,.2247,.8896,.8635,.9002,.8914,.8839,.8516,.8882,.8436,.5484,.2357,.8271,.5631,.8662,.5994,.8273,.5994,.8271,.5631,.8156,.5226,.8698,.3682,.8976,.3444,.856,.3894,.8698,.3682,.8981,.0964,.7528,.833,.7118,.7935
                    ,.7676,.7993,.8253,.0846,.2026,.4798,.7765,.0811,.2286,.615,.7132,.0844,.8156,.5226,.4318,.8809,.4061,.8777,.8976,.3044,.8976,.3444,.9628,.2484,.9704,.2731,.2847,.5207,.5484,.2357,.8896,.8635,.9783,.0494,.9586,.0249,.9632,.1967,.9466,.1899,.4637,.9254,.4799,.9587,.4532,.9586,.8049,.871,.139,.9401
                    ,.2225,.9476,.052,.2959,.0625,.0007,.5671,.2644,.0793,.1712,.0337,.5579,.0511,.46,.4808,.07,.7171,.3379,.7442,.38,.6727,.3666,.7171,.3379,.1863,.6163,.1489,.5847,.7079,.0021,.7842,.2088,.7814,.1446,.3673,.8614,.8936,.391,.9264,.4243,.9125,.4413,.2847,.5207,.35,.5692,.5844,.6727,.5527,.6759
                    ,.31,.0622,.2916,.1042,.3024,.1854,.2936,.1366,.6671,.653,.6177,.6633,.2936,.1366,.2916,.1042,.3359,.0007,.5527,.6759,.5109,.6683,.5844,.6727,.0426,.1728,.0979,.4566,.1234,.0558,.0036,.4551,.7171,.3379,.7508,.2693,.7431,.3345,.5186,.7162,.4726,.7131,.5186,.6972,.6727,.3666,.8557,.9888,.8317,.9769
                    ,.8556,.9766,.9282,.0293,.8995,.0521,.9023,.0292,.8312,.9892,.8001,.9757,.9325,.0522,.904,.0723,.0483,.9755,.0759,.9617,.0771,.9738,.9295,.1805,.9,.1577,.9246,.1556,.9291,.2239,.8936,.2235,.8942,.211,.0255,.9755,.0017,.9629,.025,.9643,.0992,.3013,.1233,.2879,.1156,.3064,.1081,.3521,.117,.3274
                    ,.1236,.3465,.9404,.9567,.9144,.9343,.9419,.9401,.9645,.954,.9609,.9383,.5609,.959,.5687,.9406,.5731,.9579,.6247,.9419,.5851,.9174,.6132,.9098,.933,.9833,.9094,.958,.9384,.9595,.957,.9871,.9624,.9643,.5283,.9396,.5188,.9438,.5334,.9239,.5527,.9096,.5644,.8833,.5687,.8862,.9233,.2404,.8936,.2397
                    ,.9251,.2338,.9477,.2408,.9251,.2338,.9496,.2344,.9576,.9147,.973,.932,.1381,.3289,.9144,.9343,.9348,.9172,.1354,.3103,.9166,.644,.9711,.644,.9551,.6584,.9506,.9183,.9651,.2448,.9496,.2344,.9673,.2386,.957,.9871,.9794,.9697,.971,.9916,.9817,.9469,.9019,.0152,.9266,.0137,.8738,.9879,.8732,.9757
                    ,.1233,.2879,.5384,.926,.5481,.9068,.5527,.9096,.5911,.9516,.0992,.324,.0472,.9642,.9231,.2106,.8936,.1917,.9357,.2106,.9377,.1792,.9456,.0263,.9266,.0137,.9421,.0101,.9291,.2239,.933,.1508,.9361,.0755,.9447,.0512,.9533,.0064,.9421,.0101,.9446,.0751,.9525,.2015,.8936,.1917,.3131,.272,.3055,.2733
                    ,.303,.272,.5594,.9666,.549,.9631,.5581,.9597,.551,.9472,.5581,.9597,.5344,.9563,.538,.9516,.5609,.959,.5581,.9597,.5344,.9563,.5295,.9434,.5543,.9469,.5489,.9414,.5511,.9393,.5463,.9475,.5642,.9247,.5664,.9327,.5254,.949,.361,.3799,.3534,.4002,.4169,.3154,.406,.3015,.4397,.322,.3798,.3893
                    ,.403,.3593,.3763,.4439,.4629,.3936,.4576,.3857,.4755,.392,.4616,.3942,.462,.3939,.4628,.3945,.4616,.3934,.4709,.4022,.462,.3939,.462,.3939,.4749,.2797,.3763,.4439,.4283,.4251,.5782,.6866,.5763,.7564,.5614,.7563,.5946,.7862,.5855,.7838,.5946,.7813,.5736,.7851,.5849,.7886,.5736,.7851,.5582,.7796
                    ,.5753,.7807,.5551,.7853,.5294,.7827,.5332,.7335,.5753,.7695,.6997,.9348,.7022,.9382,.5468,.9356,.548,.9316,.9152,.664,.327,.2461,.2309,.9359,.1773,.8431,.8934,.6773,.9226,.6877,.2748,.8789,.8454,.2444,.8204,.1375,.3147,.7716,.6753,.5133,.6825,.6421,.4172,.2106,.2977,.1868,.5211,.8808,.5188,.8614
                    ,.6517,.4795,.5642,.4768,.5188,.8614,.5972,.8024,.547,.2693,.5805,.2705,.7109,.7156,.8051,.7894,.7666,.7894,.2099,.7489,.1925,.7792,.1695,.3278,.2073,.2724,.1807,.2748,.0461,.8365,.0267,.8352,.0951,.834,.0648,.8372,.7991,.9329,.2309,.6733,.6806,.2638,.6459,.2608,.7894,.5199,.3016,.7409,.2912,.75
                    ,.7389,.2217,.7483,.2322,.4786,.9175,.4532,.9174,.1678,.0557,.1743,.0007,.0007,.8099,.0007,.7359,.1487,.2517,.1461,.1756,.0125,.6144,.0132,.5602,.1807,.2748,.1493,.2784,.1487,.2517,.3534,.5603,.3681,.4948,.2068,.4359,.1461,.4088,.0007,.8328,.0007,.8099,.1618,.8171,.1293,.8074,.1925,.7792,.177,.8256
                    ,.1618,.8171,.3469,.2706,.5972,.8024,.6693,.8296,.6812,.4809,.7285,.4809,.6753,.5133,.6719,.482,.6812,.4809,.7771,.5765,.7856,.1694,.7918,.1444,.6684,.5795,.2414,.8804,.2309,.844,.2433,.7869,.2559,.7514,.1309,.876,.151,.8269,.1773,.8431,.7956,.2473,.7895,.2253,.0007,.9604,.0007,.8987,.5206,.0355
                    ,.5298,.0007,.8157,.7319,.8365,.6795,.5459,.156,.4939,.1243,.9131,.8107,.9394,.7935,.9881,.8044,.7125,.2218,.7258,.2121,.7389,.2217,.31,.6984,.313,.7291,.3016,.7409,.6758,.2349,.3248,.6851,.3125,.6897,.31,.6984,.6921,.2315,.7125,.2218,.8147,.7708,.8157,.7319,.8509,.772,.1862,.9345,.1498,.9388
                    ,.2111,.9388,.1862,.9345,.2309,.844,.2433,.7869,.7895,.2253,.7856,.1694,.505,.074,.5206,.0355,.8911,.7845,.251,.885,.2766,.8818,.1205,.9116,.1309,.876,.0818,.8386,.6758,.2349,.6921,.2315,.3125,.6897,.9686,.7983,.8922,.6161,.4949,.8843,.5053,.9175,.4786,.9175,.8141,.9744,.7991,.9329,.6806,.2638
                    ,.0648,.8372,.0461,.8365,.2073,.2724,.1695,.3278,.6445,.0237,.5805,.2705,.5642,.4768,.5729,.882,.2916,.2352,.5459,.156,.436,.6727,.352,.3885,.3298,.4674,.2068,.4359,.3534,.653,.3534,.5603,.3454,.4203,.3398,.3443,.4678,.6759,.0007,.7359,.0125,.6144,.1461,.1756,.1678,.0557,.1515,.6207,.1706,.6207
                    ,.681,.6773,.7109,.7156,.0571,.9894,.9596,.8695,.5941,.9817,.5654,.9792,.8602,.6714,.835,.6476,.8243,.6316,.5431,.9792,.9717,.0859,.9661,.1015,.9476,.6007,.7051,.908,.7709,.9024,.7709,.9366,.9379,.8829,.9663,.9033,.6911,.9504,.6911,.9504,.6707,.9366,.734,.978,.7107,.9615,.7141,.9572,.4852,.2718
                    ,.4871,.2784,.4556,.2724,.5116,.2778,.4871,.2784,.9801,.6254,.9661,.1015,.9569,.1208,.4547,.9678,.4713,.96,.4808,.9608,.4917,.9635,.5052,.9707,.5077,.9779,.4917,.9635,.4713,.96,.4808,.9608,.5293,.2736,.5116,.2778,.9836,.8988,.9663,.9033,.9801,.6254,.9735,.8698,.9596,.8695,.0747,.9903,.0571,.9894
                    ,.7107,.9615,.6911,.9504,.7197,.9391,.7192,.9309,.5654,.9792,.5431,.9792,.8814,.6587,.9133,.8356,.9133,.8356,.9137,.8271,.2916,.272,.3016,.272,.701,.9014,.7022,.9083,.6953,.9238,.7022,.9083,.7051,.908,.6997,.9348,.6953,.9238,.7197,.9391,.7894,.5199,.7904,.537,.7771,.5765,.7808,.6651,.7285,.4809
                    ,.7808,.6651,.5946,.7862,.6156,.7851,.6156,.7851,.6341,.7853,.35,.5692,.3515,.6194,.7743,.3389,.9125,.4413,.8905,.4459,.2286,.615,.1863,.6163,.7765,.0811,.7814,.1446,.7079,.0021,.3534,.9098,.8087,.2996,.9229,.5231,.9131,.4936,.9229,.5231,.7847,.8558,.6787,.8272,.8012,.0007,.8295,.0094,.8295,.0094
                    ,.5178,.325,.4772,.4474,.7743,.4413,.8055,.3994,.8936,.391,.927,.3907,.5003,.8764,.663,.2108,.4831,.8231,.5038,.8257,.4261,.7962,.4425,.7845,.472,.7353,.44,.7831,.7406,.0041,.7741,.0039,.1489,.5847,.4726,.7131,.472,.7353,.3534,.7236,.6063,.4924,.3737,.6773,.5582,.4809,.4925,.0231,.4808,.07
                    ,.4819,.0978,.0625,.0007,.0036,.4551,.5483,.2658,.1009,.0007,.052,.2959,.016,.2799,.2281,.9993,.7991,.8262,.8139,.8066,.5671,.2644,.406,.3015,.8139,.8066,.9106,.7935,.4939,.2495,.5053,.9587,.4799,.9587,.1009,.0007,.0979,.4566,.0979,.5306,.0855,.2809,.0862,.3351,.1099,.2749,.142,.2518,.6523,.4948
                    ,.4925,.1535,.4286,.1718,.0979,.5306,.0979,.5535,.7729,.456,.7405,.4657,.7097,.4278,.7405,.4657,.8905,.4459,.8677,.4678,.3673,.8614,.3534,.8217,.4749,.2797,.5206,.2921,.5178,.325,.5206,.2921,.403,.3593,.6787,.8272,.6866,.7988,.5071,.3906,.8981,.0964,.881,.1301,.891,.0007,.8967,.0379,.8087,.2996
                    ,.8147,.2693,.8643,.2879,.7676,.7993,.9704,.3491,.9237,.3894,.1293,.5047,.1641,.4954,.9191,.5799,.2026,.4798,.253,.4687,.9611,.0757,.9446,.0751,.9533,.0064,.5005,.2371,.8882,.8436,.9117,.8072,.8896,.8635,.5484,.2357,.8271,.5631,.8662,.5994,.8271,.5631,.8698,.3682,.856,.3894,.8967,.0379,.8981,.0964
                    ,.7118,.7935,.1641,.4954,.2026,.4798,.7745,.039,.7765,.0811,.2759,.616,.2286,.615,.8156,.5226,.8258,.4809,.4318,.8809,.4519,.9318,.8643,.2879,.8976,.3044,.9628,.2484,.5484,.2357,.9783,.0494,.9632,.1967,.9525,.2015,.4637,.9254,.4799,.9587,.7991,.8262,.139,.9401,.052,.2959,.0625,.0007,.5671,.2644
                    ,.5483,.2658,.0337,.5579,.4808,.07,.4819,.0978,.7171,.3379,.7431,.3345,.6063,.4924,.1863,.6163,.1524,.6194,.1489,.5847,.7079,.0021,.7406,.0041,.4831,.8231,.7842,.2088,.8055,.3994,.8936,.391,.9264,.4243,.927,.4395,.9125,.4413,.2847,.5207,.352,.489,.35,.5692,.5844,.6727,.4286,.1718,.6671,.5603
                    ,.2936,.1366,.3359,.0007,.5527,.6759,.0862,.3351,.0979,.4566,.1234,.0558,.0036,.4551,.7171,.3379,.7316,.2693,.7508,.2693,.5186,.7162,.472,.7353,.4726,.7131,.7991,.9878,.9268,.0757,.0472,.9642,.0759,.9617,.8936,.1917,.9,.1577,.9291,.2239,.9291,.2239,.8991,.2324,.0007,.9741,.0017,.9629,.0992,.3013
                    ,.1087,.2799,.1233,.2879,.1081,.3521,.9404,.9567,.9094,.9497,.9144,.9343,.9645,.954,.9404,.9567,.5609,.959,.6247,.9419,.933,.9833,.9124,.9916,.9094,.958,.957,.9871,.933,.9833,.5334,.9239,.5229,.9468,.5188,.9438,.5527,.9096,.5481,.9068,.5644,.8833,.9233,.2404,.8946,.2448,.8936,.2397,.9477,.2408
                    ,.9233,.2404,.9251,.2338,.9576,.9147,.143,.3373,.9144,.9343,.9234,.9147,.9441,.6611,.9346,.6618,.9166,.644,.918,.6541,.9166,.644,.9346,.6618,.9711,.644,.9685,.6512,.9551,.6584,.9551,.6584,.9441,.6611,.9166,.644,.9651,.2448,.9477,.2408,.9496,.2344,.957,.9871,.9794,.9697,.9817,.9469,.9645,.954
                    ,.9019,.0152,.8738,.9879,.1233,.2879,.1408,.3014,.5334,.9239,.5481,.9068,.5731,.9579,.5642,.9247,.0992,.3013,.9266,.0137,.9383,.2172,.9291,.2239,.9361,.0755,.9268,.0757,.9533,.0064,.9446,.0751,.9361,.0755,.9525,.2015,.9383,.2172,.3131,.272,.3122,.2754,.5594,.9666,.5466,.9666,.5463,.9475,.5466,.9666
                    ,.5344,.9563,.5609,.959,.5344,.9563,.5254,.949,.5463,.9475,.5468,.9356,.548,.9316,.5642,.9247,.5254,.949,.5229,.9468,.4005,.3177,.406,.3015,.403,.3593,.4005,.3177,.3763,.4439,.462,.3939,.4749,.2797,.3763,.4439,.5946,.7862,.5849,.7886,.5736,.7851,.5736,.7851,.5551,.7853,.5551,.7853,.5199,.7889
                    ,.6997,.9348,.5468,.9356
                ]),
                false);

                _i = new Float32Array(6108);
                _i.set([.2248,.1319,.5525,.0537,.0003,.4771,.1405,.3214,.3796,.2891,.2591,.0496,.1157,.016,.7541,.0549,.0782,.0782,.7793,0,.1626,.3122,.4785,0,.4,.039,.1418,.3823,.054,.2831,.4623,.093,.1063,.1803,.5163,.097,.9086,.0878,0,0,.1005,.8968,0,0,.0868,.9125,0,0,.0071,.1306
                ,.0894,.5852,.2248,.1319,.5525,.0537,.2976,.2148,.3321,.1261,.8624,.1355,0,0,.9052,.0425,.0089,0,.7379,.1548,.0658,0,.1197,.5423,.1849,.1105,.7508,.1427,.0111,0,.0221,.0083,.1432,.7258,.0595,.1063,.4918,.2346,.0288,.606,.2026,.024,.0036,.0207,.5285,.259,.2054,.7578,0,0
                ,.8153,.014,.1271,0,.9441,.0171,0,0,.0204,.0178,.4647,.1702,.1058,.1865,.053,.611,.0279,.1516,.0533,.728,.871,.1177,0,0,.9739,0,0,0,.0907,.9087,0,0,.9807,0,0,0,.0729,.9255,0,0,.8617,.1216,0,0,.8897,.1001,0,0,.924,.0701
                ,0,0,.4319,.5677,0,0,.0907,.9087,0,0,.0729,.9255,0,0,.9212,.0638,0,0,.9088,.0761,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.0692,.9272,0,0,.0023,.9701,0,0,.1005,.8968,0,0,.98,0,0,0,.0868,.9125,0,0
                ,.0892,.9072,0,0,.9669,0,0,0,.1005,.8968,0,0,.8944,.0752,0,0,.733,.0466,.2095,0,.8568,.0103,.1082,0,.9149,.0124,.0496,0,.4763,.4772,.0277,0,.9709,0,0,0,.8944,.0752,0,0,.8568,.0103,.1082,0,.9707,0,0,0,.7739,.2167
                ,0,0,.8944,.0752,0,0,.0878,.7887,.095,0,.9495,0,0,0,.7478,.0912,.1344,0,.7739,.2167,0,0,.7672,.1875,.005,0,.4763,.4772,.0277,0,.1813,.8114,0,0,.7144,.2808,0,0,.6017,.1156,.275,0,.2312,.6709,.0773,0,.4763,.4772,.0277,0
                ,.9607,.0106,0,0,.5914,.1166,.2248,.0172,.7379,.1346,.0756,0,.0716,.0312,.0691,.7956,.2054,.7578,0,0,.871,.1177,0,0,.0035,.1231,.0909,.3718,.6812,.0959,.0123,.1189,.0782,.0782,.7793,0,.6828,.0729,.2441,0,.1626,.3122,.4785,0,.2195,.0562,.185,.4939,.6812,.0959
                ,.0123,.1189,.6904,.2253,.0335,.0335,.6031,.2393,.1382,0,.0716,.0312,.0691,.7956,.0589,.1942,.2339,.4882,.029,.2475,.0585,.6072,.4638,.2051,.0239,.1392,.2031,.0973,.5804,.0886,.3435,.2081,.0372,.3342,.1445,.5927,.0873,.0681,.3435,.2081,.0372,.3342,.12,.561,.1066,.1339,.0964,.1442,.0553,.6782
                ,.4361,.1611,.0544,.3152,.3231,.009,.3193,.3193,.0843,.8355,.0492,0,.0279,.1516,.0533,.728,.0834,.1032,.0081,.7464,.0086,.0704,.8607,0,.4361,.1611,.0544,.3152,.0682,.0646,.8291,0,.194,.043,.7225,0,.9838,0,0,0,.9766,0,0,0,.9797,0,0,0,.0283,.9097
                ,0,0,.9616,0,0,0,.0376,.9366,0,0,.1628,.8095,0,0,.9795,0,0,0,.9229,.0765,0,0,.9786,0,0,0,.9958,0,0,0,.9836,0,0,0,.9873,0,0,0,.9808,0,0,0,.9795,0,0,0,.9786,0,0,0
                ,.9825,0,0,0,.99,0,0,0,.9892,0,0,0,.9278,.0717,0,0,.0453,.9523,0,0,.0299,.96,0,0,.9892,0,0,0,.9426,.0572,0,0,.9407,.059,0,0,.9797,0,0,0,.9254,.074,0,0,.9873,0,0,0,.935,.0648
                ,0,0,.9355,.0644,0,0,.9784,0,0,0,.163,.04,.7919,0,.1625,.1407,.6968,0,.0165,.9667,0,0,.0301,.9596,0,0,.916,.0833,0,0,.0537,.9458,0,0,.0321,.9582,0,0,.0557,.9423,0,0,.1104,.8865,0,0,.7157,.2754,0,0
                ,.1612,.8364,0,0,.0065,.9491,0,0,.2182,.072,.7098,0,.8311,.1482,0,0,.9981,0,0,0,.0792,.8381,.0827,0,.0811,.8719,.0441,0,.9835,0,0,0,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.9715,0,0,0,.9895,0,0,0,.8731,.1033
                ,0,0,.9957,0,0,0,.9895,0,0,0,.9966,0,0,0,.9291,.0707,0,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.151,.8362,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.1292,.7201,.1058,.0213,.1492,.8246,0,0,.136,.74,.0931,0
                ,.379,.6008,0,0,.0011,.9551,0,0,.0071,.2039,.7641,0,.1424,.7921,.0515,0,.9607,.0208,0,0,.8731,.1033,0,0,.9895,0,0,0,.6813,.3003,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.1837,.8099,0,0,.1612,.8364,0,0,.9669,0
                ,0,0,.2099,.2063,.5837,0,.9229,.0765,0,0,.0301,.9596,0,0,.9784,0,0,0,1.0022,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9751,0,0,0,.9786,0,0,0,.9958,0,0,0,.9938,0,0,0,.9786,0,0,0
                ,.9766,0,0,0,.0086,.0704,.8607,0,.0964,.1442,.0553,.6782,.0086,.0704,.8607,0,.0307,.054,.0005,.8231,.029,.2475,.0585,.6072,.2248,.1319,.5525,.0537,.1826,.1638,.0561,.5842,.871,.1177,0,0,.8624,.1355,0,0,.0554,.8816,.0437,0,.1813,.8114,0,0,.0662,.8279
                ,.0929,0,.7739,.2167,0,0,.1813,.8114,0,0,.8568,.0103,.1082,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.3127,.1031,.5713,0,.0868,.9125,0,0,.4319,.5677,0,0,.9646,.0151,0,0,.9649,.0005,0,0,.9212,.0638,0,0,.0892,.9072,0,0
                ,.9807,0,0,0,.9662,0,0,0,.871,.1177,0,0,.9702,0,0,0,.0446,.0557,.4626,.1853,.0279,.1516,.0533,.728,.9426,.0539,0,0,.0868,.9125,0,0,.1761,.1494,.5327,.0526,.4,.039,.1418,.3823,.1063,.1803,.5163,.097,.029,.2475,.0585,.6072,.0925,.5883
                ,.0331,.2488,.0003,.4771,.1405,.3214,.2924,.4013,.195,.0922,.2976,.2148,.3321,.1261,.6904,.2253,.0335,.0335,.1992,.6933,.0799,0,.6031,.2393,.1382,0,.2182,.072,.7098,0,.7202,.0706,.2092,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.163,.04,.7919,0,.1625,.1407,.6968,0
                ,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.0811,.8719,.0441,0,.8311,.1482,0,0,.9739,0,0,0,.9702,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.9739,0,0,0,.98,0,0,0,.9709,0,0,0,.0204,.0178
                ,.4647,.1702,.0294,.0294,.0125,.8252,.0623,.5054,.1497,.0076,.9052,.0425,.0089,0,.8622,.0094,.081,0,.4,.039,.1418,.3823,.2195,.0562,.185,.4939,.8622,.0094,.081,0,.8153,.014,.1271,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.7379,.1548,.0658,0,.163,.04,.7919,0
                ,.0811,.8719,.0441,0,.0269,.9044,.0571,0,.6031,.2393,.1382,0,.0589,.1942,.2339,.4882,.2976,.2148,.3321,.1261,.2727,.4319,.1387,.1387,.2886,.2316,.226,.226,.7157,.2754,0,0,.9715,0,0,0,.1612,.8364,0,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0038
                ,.0855,0,.9959,0,0,0,.023,.9492,0,0,.1837,.8099,0,0,.0623,.9359,0,0,.9836,0,0,0,.9795,0,0,0,.0131,.9636,0,0,.689,.2658,.0262,0,.7308,.1244,.1244,0,.9903,0,0,0,.657,.1395,.0286,.0792,.657,.1395,.0286,.0792
                ,.1408,.6207,.1559,.0155,.1058,.1865,.053,.611,.4104,.4104,.0863,.013,.1339,.1339,.1218,.5291,.1626,.3122,.4785,0,.8624,.1355,0,0,.2054,.7578,0,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.8624,.1355,0,0,.0843,.8355,.0492,0,.0283,.9097,0,0,.1628,.8095
                ,0,0,.689,.2658,.0262,0,.9616,0,0,0,.0376,.9366,0,0,.1598,.7112,.1128,0,.9808,0,0,0,.0376,.9366,0,0,.1628,.8095,0,0,.2185,.7122,.0664,0,.0283,.9097,0,0,.9616,0,0,0,.0843,.8355,.0492,0,.0537,.9458,0,0
                ,.9835,0,0,0,.2185,.7122,.0664,0,.5933,.202,.202,0,.1598,.7112,.1128,0,.4361,.1611,.0544,.3152,.9757,0,0,0,.9829,0,0,0,.9697,.0017,0,0,.1277,.8423,0,0,.8667,.1136,0,0,.1796,.7178,.0736,0,.9702,0,0,0,.9507,.0271
                ,0,0,.7723,.175,.0295,0,.3399,.4989,.1305,0,.9702,0,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.7723,.175,.0295,0,.5053,.3194,.1304,.0166,.3399,.4989,.1305,0,.8191,.14,0,0,.7805,.1746,0,0,.6178,.2816,.0556,.0277,.9347,.0488,0,0
                ,.95,.0262,0,0,.9311,.0527,0,0,.9517,.0231,0,0,.9687,0,0,0,.95,.0262,0,0,.9702,0,0,0,.9772,0,0,0,.9582,.0129,0,0,.9829,0,0,0,.9844,0,0,0,.9702,0,0,0,.9868,0,0,0,.992,0
                ,0,0,.9829,0,0,0,.8794,.0909,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.8094,.1375,.02,0,.8667,.1136,0,0,.9381,.0467,0,0,.7723,.175,.0295,0,.8771,.1167,0,0,.9574,.0224,0,0
                ,.8667,.1136,0,0,.9311,.0527,0,0,.9199,.0613,0,0,.921,.0604,0,0,.9507,.0271,0,0,.9314,.0511,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9652,.0146,0,0,.9697,.0017,0,0,.9574,.0224
                ,0,0,.9936,0,0,0,.9987,0,0,0,.9983,0,0,0,.9844,0,0,0,.9897,0,0,0,.9959,0,0,0,.9934,0,0,0,.9839,0,0,0,.9705,0,0,0,.9959,0,0,0,.9987,0,0,0,.9843,0,0,0
                ,.9679,.0109,0,0,.9757,0,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.0915,.8919,0,0,.9775,0,0,0,.9868,0,0,0,.9843,0,0,0,.9416,.0373,0,0,.9245,.057,0,0,.9314,.0511
                ,0,0,.9517,.0231,0,0,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.0252,.0667,.8514,.0256,.9001,.0563,0,0,.6152,.289,.0399,.0399,.5947,.2662,.0655,.0655,.3399,.4989,.1305,0,.2176,.518,.22,0,.2176,.518,.22,0,.0974,.0373,.701,.1407
                ,.1897,.761,0,0,.0003,.4771,.1405,.3214,.8094,.1375,.02,0,.8138,.1394,.0032,0,.7805,.1746,0,0,.1402,.8191,0,0,.1538,.8047,0,0,.1538,.8047,0,0,.1245,.8399,0,0,.121,.8443,0,0,.0935,.8786,0,0,.1402,.8191,0,0,.0901,.8832
                ,0,0,.8191,.14,0,0,.8761,.0953,0,0,.0672,.9122,0,0,.0903,.8828,0,0,.8954,.0803,0,0,.0779,.8985,0,0,.0903,.8828,0,0,.9245,.057,0,0,.921,.0604,0,0,.0673,.9122,0,0,.2312,.7543,0,0,.0231,.9611,0,0
                ,.0231,.9611,0,0,.0074,.2579,.7097,0,.1278,.7677,.0888,0,.9495,0,0,0,.1803,.7897,0,0,.2312,.7543,0,0,.0011,.9551,0,0,.4758,.5209,0,0,.1201,.8389,0,0,.0653,.0147,.8669,.0132,.1225,.7248,.1125,0,.0775,.9135,0,0,.9878,0
                ,0,0,.9971,0,0,0,.0826,.9143,0,0,.4935,.5037,0,0,1.0025,0,0,0,.0231,.9631,0,0,.9607,.0106,0,0,.0011,.9551,0,0,.8076,.1443,0,0,.8112,.142,0,0,.8075,.1444,0,0,.8075,.1439,.0042,0,.8097,.1427,0,0
                ,.7805,.1746,0,0,.8108,.1459,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7832,.1644,.0255,0,.7723,.175,.0295,0,.8024,.1482,.0081,0,.8117,.1415
                ,.0006,0,.8176,.1387,0,0,.8126,.141,.0014,0,.2248,.1319,.5525,.0537,.0003,.4771,.1405,.3214,.029,.2475,.0585,.6072,.1157,.016,.7541,.0549,.0782,.0782,.7793,0,.0294,.0294,.0125,.8252,.1063,.1803,.5163,.097,.2195,.0562,.185,.4939,.4,.039,.1418,.3823,.9086,.0878,0,0
                ,.1005,.8968,0,0,.8897,.1001,0,0,.0071,.1306,.0894,.5852,.2248,.1319,.5525,.0537,.0307,.054,.0005,.8231,.9052,.0425,.0089,0,.8624,.1355,0,0,.7379,.1548,.0658,0,.0221,.0083,.1432,.7258,.1408,.6207,.1559,.0155,.1197,.5423,.1849,.1105,.0036,.0207,.5285,.259,.1339,.1339
                ,.1218,.5291,.0595,.1063,.4918,.2346,.2054,.7578,0,0,.8153,.014,.1271,0,.2195,.0562,.185,.4939,.0279,.1516,.0533,.728,.0623,.5054,.1497,.0076,.0204,.0178,.4647,.1702,.871,.1177,0,0,.9441,.0171,0,0,.9807,0,0,0,.0907,.9087,0,0,.0729,.9255,0,0
                ,.8617,.1216,0,0,.924,.0701,0,0,.4319,.5677,0,0,.9426,.0539,0,0,.0729,.9255,0,0,.9212,.0638,0,0,.7144,.2808,0,0,.9088,.0761,0,0,.9646,.0151,0,0,.0692,.9272,0,0,.4319,.5677,0,0,.98,0,0,0,.1005,.8968
                ,0,0,.0868,.9125,0,0,.9669,0,0,0,.0892,.9072,0,0,.1005,.8968,0,0,.733,.0466,.2095,0,.8944,.0752,0,0,.8568,.0103,.1082,0,.4763,.4772,.0277,0,.9149,.0124,.0496,0,.9709,0,0,0,.8944,.0752,0,0,.9707,0,0,0
                ,.7739,.2167,0,0,.9649,.0005,0,0,.9495,0,0,0,.0878,.7887,.095,0,.7478,.0912,.1344,0,.7672,.1875,.005,0,.7739,.2167,0,0,.1813,.8114,0,0,.4763,.4772,.0277,0,.7144,.2808,0,0,.2312,.6709,.0773,0,.6017,.1156,.275,0,.4763,.4772
                ,.0277,0,.9607,.0106,0,0,.5914,.1166,.2248,.0172,.3127,.1031,.5713,0,.0716,.0312,.0691,.7956,.2054,.7578,0,0,.4104,.4104,.0863,.013,.0035,.1231,.0909,.3718,.6828,.0729,.2441,0,.0782,.0782,.7793,0,.1626,.3122,.4785,0,.6812,.0959,.0123,.1189,.6904,.2253,.0335,.0335
                ,.7898,.0501,.0825,.0825,.0716,.0312,.0691,.7956,.0589,.1942,.2339,.4882,.1826,.1638,.0561,.5842,.2031,.0973,.5804,.0886,.4638,.2051,.0239,.1392,.3435,.2081,.0372,.3342,.12,.561,.1066,.1339,.4638,.2051,.0239,.1392,.1445,.5927,.0873,.0681,.0964,.1442,.0553,.6782,.0446,.0557,.4626,.1853,.0843,.8355
                ,.0492,0,.3231,.009,.3193,.3193,.0279,.1516,.0533,.728,.0834,.1032,.0081,.7464,.1058,.1865,.053,.611,.4361,.1611,.0544,.3152,.0682,.0646,.8291,0,.0964,.1442,.0553,.6782,.9838,0,0,0,.9766,0,0,0,.9751,0,0,0,.0086,.0704,.8607,0,.0283,.9097,0,0
                ,.194,.043,.7225,0,.0376,.9366,0,0,.9229,.0765,0,0,.9795,0,0,0,.9786,0,0,0,.9958,0,0,0,.9836,0,0,0,.9903,0,0,0,.9808,0,0,0,.9795,0,0,0,.0131,.9636,0,0,.9825,0,0,0,.99,0
                ,0,0,.9938,0,0,0,.9278,.0717,0,0,.0453,.9523,0,0,.9254,.074,0,0,.9892,0,0,0,.9426,.0572,0,0,.99,0,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.935,.0648,0,0,.9836,0,0,0
                ,.1625,.1407,.6968,0,.023,.9492,0,0,.9784,0,0,0,.9355,.0644,0,0,.0165,.9667,0,0,.0537,.9458,0,0,.916,.0833,0,0,.9407,.059,0,0,.0321,.9582,0,0,.1104,.8865,0,0,.7157,.2754,0,0,.6813,.3003,0,0,.8311,.1482
                ,0,0,.9669,0,0,0,.0065,.9491,0,0,.9981,0,0,0,.0792,.8381,.0827,0,1.0022,0,0,0,.9835,0,0,0,.0269,.9044,.0571,0,.9959,0,0,0,.9715,0,0,0,.9895,0,0,0,.9966,0,0,0,.9957,0,0,0
                ,.9895,0,0,0,.9607,.0208,0,0,.8876,.0038,.0855,0,.9291,.0707,0,0,.7202,.0706,.2092,0,.8731,.1033,0,0,.151,.8362,0,0,.7451,.0641,.1908,0,.1492,.8246,0,0,.1292,.7201,.1058,.0213,.136,.74,.0931,0,.0662,.8279,.0929,0,.379,.6008
                ,0,0,.0071,.2039,.7641,0,.0011,.9551,0,0,.1424,.7921,.0515,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.1837,.8099,0,0,.9715,0,0,0,.1612,.8364,0,0,.2099,.2063,.5837,0,.9835,0,0,0
                ,.9229,.0765,0,0,.0301,.9596,0,0,.9355,.0644,0,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9873,0,0,0,.9786,0,0,0,.9808,0,0,0,.9958,0,0,0,.9786,0,0,0,.9766,0,0,0,.0086,.0704
                ,.8607,0,.0964,.1442,.0553,.6782,.0086,.0704,.8607,0,.0279,.1516,.0533,.728,.029,.2475,.0585,.6072,.871,.1177,0,0,.0716,.0312,.0691,.7956,.1225,.7248,.1125,0,.1813,.8114,0,0,.7739,.2167,0,0,.1813,.8114,0,0,.7144,.2808,0,0,.8568,.0103,.1082,0
                ,.9709,0,0,0,.8568,.0103,.1082,0,.0868,.9125,0,0,.4319,.5677,0,0,.9646,.0151,0,0,.0892,.9072,0,0,.9212,.0638,0,0,.9807,0,0,0,.0729,.9255,0,0,.9702,0,0,0,.871,.1177,0,0,.0204,.0178,.4647,.1702,.0868,.9125
                ,0,0,.9086,.0878,0,0,.1761,.1494,.5327,.0526,.4,.039,.1418,.3823,.7379,.1548,.0658,0,.029,.2475,.0585,.6072,.0925,.5883,.0331,.2488,.0589,.1942,.2339,.4882,.2976,.2148,.3321,.1261,.3796,.2891,.2591,.0496,.6031,.2393,.1382,0,.1897,.761,0,0,.6904,.2253,.0335,.0335
                ,.2182,.072,.7098,0,.7202,.0706,.2092,0,.2099,.2063,.5837,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.1625,.1407,.6968,0,.163,.04,.7919,0,.1625,.1407,.6968,0,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.0811,.8719,.0441,0,.0792,.8381,.0827,0,.8311,.1482
                ,0,0,.9702,0,0,0,.9086,.0878,0,0,.9739,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.8153,.014,.1271,0,.9739,0,0,0,.9441,.0171,0,0,.98,0,0,0,.9662,0,0,0,.9709,0,0,0
                ,.9807,0,0,0,.0023,.9701,0,0,.1063,.1803,.5163,.097,.0288,.606,.2026,.024,.7508,.1427,.0111,0,.054,.2831,.4623,.093,.9052,.0425,.0089,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.8622,.0094,.081,0,.8153,.014,.1271,0,.4,.039,.1418,.3823,.8622,.0094
                ,.081,0,.7379,.1548,.0658,0,.8311,.1482,0,0,.0269,.9044,.0571,0,.0589,.1942,.2339,.4882,.1992,.6933,.0799,0,.2886,.2316,.226,.226,.2924,.4013,.195,.0922,.7157,.2754,0,0,.9715,0,0,0,.8876,.0038,.0855,0,.9708,.0137,0,0,.9708,.0137,0,0
                ,.8876,.0038,.0855,0,.0811,.8719,.0441,0,.163,.04,.7919,0,.1837,.8099,0,0,.0557,.9423,0,0,.9836,0,0,0,.0299,.96,0,0,.9795,0,0,0,.7308,.1244,.1244,0,.1628,.8095,0,0,.657,.1395,.0286,.0792,.7308,.1244,.1244,0,.1408,.6207
                ,.1559,.0155,.4361,.1611,.0544,.3152,.1058,.1865,.053,.611,.4104,.4104,.0863,.013,.1339,.1339,.1218,.5291,.8624,.1355,0,0,.6812,.0959,.0123,.1189,.0035,.1231,.0909,.3718,.2976,.2148,.3321,.1261,.7379,.1548,.0658,0,.1626,.3122,.4785,0,.0843,.8355,.0492,0,.0283,.9097,0,0
                ,.689,.2658,.0262,0,.1628,.8095,0,0,.9616,0,0,0,.0376,.9366,0,0,.2185,.7122,.0664,0,.1598,.7112,.1128,0,.0376,.9366,0,0,.1628,.8095,0,0,.2185,.7122,.0664,0,.0283,.9097,0,0,.9616,0,0,0,.0843,.8355,.0492,0,.0623,.9359
                ,0,0,.0537,.9458,0,0,.9835,0,0,0,.0301,.9596,0,0,.7308,.1244,.1244,0,.2185,.7122,.0664,0,.689,.2658,.0262,0,.5933,.202,.202,0,.1598,.7112,.1128,0,.2185,.7122,.0664,0,.657,.1395,.0286,.0792,.9757,0,0,0,.9829,0,0,0
                ,.9868,0,0,0,.1277,.8423,0,0,.8667,.1136,0,0,.8771,.1167,0,0,.9697,.0017,0,0,.9702,0,0,0,.1796,.7178,.0736,0,.7723,.175,.0295,0,.9416,.0373,0,0,.9702,0,0,0,.9507,.0271,0,0,.5053,.3194,.1304,.0166,.7723,.175
                ,.0295,0,.3399,.4989,.1305,0,.6152,.289,.0399,.0399,.8191,.14,0,0,.8138,.1394,.0032,0,.9347,.0488,0,0,.95,.0262,0,0,.9517,.0231,0,0,.9517,.0231,0,0,.9687,0,0,0,.9705,0,0,0,.9702,0,0,0,.9772,0,0,0
                ,.9844,0,0,0,.9829,0,0,0,.9844,0,0,0,.992,0,0,0,.9868,0,0,0,.9936,0,0,0,.8191,.14,0,0,.8794,.0909,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.9381,.0467,0,0,.8667,.1136
                ,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.8771,.1167,0,0,.9652,.0146,0,0,.921,.0604,0,0,.9311,.0527,0,0,.9347,.0488,0,0,.9314,.0511,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0
                ,.9697,.0017,0,0,.9652,.0146,0,0,.9697,.0017,0,0,.9757,0,0,0,.9987,0,0,0,.9956,0,0,0,.9897,0,0,0,.9844,0,0,0,.9959,0,0,0,.9839,0,0,0,.9843,0,0,0,.9987,0,0,0,.9959,0
                ,0,0,.9983,0,0,0,.9679,.0109,0,0,.9757,0,0,0,.9775,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.0915,.8919,0,0,.9775,0,0,0,.9877,0,0,0
                ,.9687,0,0,0,.9245,.057,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.8094,.1375,.02,0,.9582,.0129,0,0,.9582,.0129,0,0,.6178,.2816,.0556,.0277,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.0252,.0667,.8514,.0256,.0915,.8919
                ,0,0,.9001,.0563,0,0,.6152,.289,.0399,.0399,.2176,.518,.22,0,.2176,.518,.22,0,.0974,.0373,.701,.1407,.1897,.761,0,0,.9001,.0563,0,0,.0003,.4771,.1405,.3214,.2727,.4319,.1387,.1387,.8094,.1375,.02,0,.7805,.1746,0,0,.1402,.8191,0,0
                ,.8191,.14,0,0,.1538,.8047,0,0,.1245,.8399,0,0,.1402,.8191,0,0,.0935,.8786,0,0,.1402,.8191,0,0,.0901,.8832,0,0,.0903,.8828,0,0,.8191,.14,0,0,.1402,.8191,0,0,.0901,.8832,0,0,.0672,.9122,0,0,.8761,.0953
                ,0,0,.8954,.0803,0,0,.0779,.8985,0,0,.0903,.8828,0,0,.9245,.057,0,0,.074,.9019,0,0,.0673,.9122,0,0,.2312,.7543,0,0,.0231,.9611,0,0,.0074,.2579,.7097,0,.0231,.9611,0,0,.1278,.7677,.0888,0,.1803,.7897,0,0
                ,.9495,0,0,0,.0011,.9551,0,0,.4758,.5209,0,0,.0554,.8816,.0437,0,.1201,.8389,0,0,.0775,.9135,0,0,.9878,0,0,0,.4935,.5037,0,0,.0826,.9143,0,0,.0653,.0147,.8669,.0132,1.0025,0,0,0,.0231,.9631,0,0,.9607,.0106
                ,0,0,.0011,.9551,0,0,.7379,.1346,.0756,0,.8076,.1443,0,0,.8097,.1427,0,0,.8075,.1439,.0042,0,.7805,.1746,0,0,.8108,.1459,0,0,.8027,.1537,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0
                ,.8126,.141,.0014,0,.8094,.1375,.02,0,.7832,.1644,.0255,0,.8024,.1482,.0081,0,.8117,.1415,.0006,0,.0672,.9122,0,0,.921,.0604,0,0,.0672,.9122,0,0,.921,.0604,0,0,.029,.2475,.0585,.6072,.2248,.1319,.5525,.0537,.2195,.0562,.185,.4939,.0892,.9072
                ,0,0,.0907,.9087,0,0,.0729,.9255,0,0,.4319,.5677,0,0,.1005,.8968,0,0,.6017,.1156,.275,0,.8944,.0752,0,0,.7739,.2167,0,0,.4763,.4772,.0277,0,.2054,.7578,0,0,.4104,.4104,.0863,.013,.0782,.0782,.7793,0,.7898,.0501,.0825,.0825
                ,.2054,.7578,0,0,.6812,.0959,.0123,.1189,.7898,.0501,.0825,.0825,.0716,.0312,.0691,.7956,.4638,.2051,.0239,.1392,.3435,.2081,.0372,.3342,.1598,.7112,.1128,0,.0279,.1516,.0533,.728,.1058,.1865,.053,.611,.4361,.1611,.0544,.3152,.0964,.1442,.0553,.6782,.9795,0,0,0,.9892,0
                ,0,0,.99,0,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.9836,0,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.8731,.1033,0,0,.0231,.9611,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0
                ,.7202,.0706,.2092,0,.8876,.0038,.0855,0,.9715,0,0,0,.8731,.1033,0,0,.9835,0,0,0,.2099,.2063,.5837,0,.9229,.0765,0,0,.0537,.9458,0,0,.9355,.0644,0,0,.0301,.9596,0,0,.9784,0,0,0,.1625,.1407,.6968,0,.99,0
                ,0,0,.9873,0,0,0,.9355,.0644,0,0,.9808,0,0,0,.9786,0,0,0,.9958,0,0,0,.9873,0,0,0,.9786,0,0,0,.9229,.0765,0,0,.0086,.0704,.8607,0,.9616,0,0,0,.0964,.1442,.0553,.6782,.0279,.1516,.0533,.728
                ,.0086,.0704,.8607,0,.029,.2475,.0585,.6072,.0716,.0312,.0691,.7956,.871,.1177,0,0,.1813,.8114,0,0,.9607,.0106,0,0,.7739,.2167,0,0,.7144,.2808,0,0,.1813,.8114,0,0,.9495,0,0,0,.9709,0,0,0,.8568,.0103,.1082,0,.8568,.0103
                ,.1082,0,.0868,.9125,0,0,.98,0,0,0,.9646,.0151,0,0,.7144,.2808,0,0,.9212,.0638,0,0,.0729,.9255,0,0,.0892,.9072,0,0,.0729,.9255,0,0,.9807,0,0,0,.871,.1177,0,0,.9739,0,0,0,.0204,.0178,.4647,.1702
                ,.0279,.1516,.0533,.728,.9086,.0878,0,0,.0868,.9125,0,0,.7379,.1548,.0658,0,.4,.039,.1418,.3823,.029,.2475,.0585,.6072,.0589,.1942,.2339,.4882,.6904,.2253,.0335,.0335,.2182,.072,.7098,0,.2099,.2063,.5837,0,.7202,.0706,.2092,0,.0792,.8381,.0827,0,.1625,.1407
                ,.6968,0,.7451,.0641,.1908,0,.163,.04,.7919,0,.0269,.9044,.0571,0,.0811,.8719,.0441,0,.0792,.8381,.0827,0,.8311,.1482,0,0,.2182,.072,.7098,0,.9739,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.8153,.014,.1271,0
                ,.9739,0,0,0,.9441,.0171,0,0,.98,0,0,0,.9646,.0151,0,0,.9807,0,0,0,.9709,0,0,0,.1063,.1803,.5163,.097,.0204,.0178,.4647,.1702,.9052,.0425,.0089,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.8622,.0094,.081,0,.9212,.0638
                ,0,0,.4,.039,.1418,.3823,.163,.04,.7919,0,.8311,.1482,0,0,.0811,.8719,.0441,0,.6031,.2393,.1382,0,.2976,.2148,.3321,.1261,.7157,.2754,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.9708,.0137,0,0,.9966,0,0,0,.1837,.8099,0,0
                ,.9836,0,0,0,.9797,0,0,0,.9892,0,0,0,.9795,0,0,0,.657,.1395,.0286,.0792,.3435,.2081,.0372,.3342,.6812,.0959,.0123,.1189,.1626,.3122,.4785,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.0843,.8355,.0492,0,.1628,.8095,0,0,.9616,0
                ,0,0,.9958,0,0,0,.2185,.7122,.0664,0,.9808,0,0,0,.0376,.9366,0,0,.689,.2658,.0262,0,.0283,.9097,0,0,.0537,.9458,0,0,.9784,0,0,0,.0301,.9596,0,0,.9835,0,0,0,.2185,.7122,.0664,0,.5933,.202,.202,0
                ,.2185,.7122,.0664,0,.1598,.7112,.1128,0,.9868,0,0,0,.8771,.1167,0,0,.9702,0,0,0,.9582,.0129,0,0,.7723,.175,.0295,0,.8094,.1375,.02,0,.8138,.1394,.0032,0,.9517,.0231,0,0,.9702,0,0,0,.9844,0,0,0,.9829,0
                ,0,0,.8191,.14,0,0,.7723,.175,.0295,0,.9381,.0467,0,0,.8667,.1136,0,0,.9652,.0146,0,0,.9347,.0488,0,0,.9347,.0488,0,0,.9311,.0527,0,0,.9507,.0271,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.9574,.0224,0,0
                ,.9697,.0017,0,0,.9507,.0271,0,0,.9757,0,0,0,.9697,.0017,0,0,.9956,0,0,0,.9844,0,0,0,.9934,0,0,0,.9839,0,0,0,.9897,0,0,0,.9934,0,0,0,.9959,0,0,0,.9983,0,0,0,.9987,0
                ,0,0,.9959,0,0,0,.9897,0,0,0,.9934,0,0,0,.9775,0,0,0,.9757,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9956,0,0,0,.8876,.1087,0,0,.8771,.1167,0,0,.9877,0,0,0,.9868,0,0,0
                ,.9416,.0373,0,0,.9347,.0488,0,0,.9245,.057,0,0,.074,.9019,0,0,.9582,.0129,0,0,.9517,.0231,0,0,.3399,.4989,.1305,0,.2176,.518,.22,0,.2176,.518,.22,0,.0003,.4771,.1405,.3214,.7805,.1746,0,0,.8191,.14,0,0,.1538,.8047
                ,0,0,.1402,.8191,0,0,.0903,.8828,0,0,.1402,.8191,0,0,.8191,.14,0,0,.0672,.9122,0,0,.0903,.8828,0,0,.9245,.057,0,0,.0231,.9611,0,0,.2312,.7543,0,0,.9495,0,0,0,.0011,.9551,0,0,.9607,.0106,0,0
                ,.0011,.9551,0,0,.7805,.1746,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.1626,.3122,.4785,0,.0782,.0782,.7793,0,.0868,.9125,0,0,.2976,.2148,.3321,.1261,.2248,.1319,.5525,.0537,.7508,.1427,.0111,0,.1408,.6207,.1559,.0155,.0288,.606
                ,.2026,.024,.1339,.1339,.1218,.5291,.1058,.1865,.053,.611,.9739,0,0,0,.0892,.9072,0,0,.0907,.9087,0,0,.0729,.9255,0,0,.0907,.9087,0,0,.1005,.8968,0,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.8944,.0752,0,0,.8944,.0752,0,0
                ,.7739,.2167,0,0,.4763,.4772,.0277,0,.871,.1177,0,0,.2054,.7578,0,0,.6812,.0959,.0123,.1189,.4104,.4104,.0863,.013,.0782,.0782,.7793,0,.2054,.7578,0,0,.6031,.2393,.1382,0,.6904,.2253,.0335,.0335,.0716,.0312,.0691,.7956,.029,.2475,.0585,.6072,.3231,.009
                ,.3193,.3193,.4638,.2051,.0239,.1392,.3435,.2081,.0372,.3342,.4638,.2051,.0239,.1392,.4361,.1611,.0544,.3152,.1598,.7112,.1128,0,.3231,.009,.3193,.3193,.0279,.1516,.0533,.728,.9797,0,0,0,.9616,0,0,0,.9873,0,0,0,.9786,0,0,0,.9795,0,0,0
                ,.9892,0,0,0,.163,.04,.7919,0,.0301,.9596,0,0,.1612,.8364,0,0,.2182,.072,.7098,0,.0811,.8719,.0441,0,.2099,.2063,.5837,0,.8731,.1033,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.0231,.9611,0,0,.9895,0
                ,0,0,.8731,.1033,0,0,.8876,.0038,.0855,0,.8731,.1033,0,0,.9715,0,0,0,.2182,.072,.7098,0,.0537,.9458,0,0,.9229,.0765,0,0,.1625,.1407,.6968,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9786,0,0,0
                ,.9873,0,0,0,.9958,0,0,0,.9229,.0765,0,0,.9786,0,0,0,.9616,0,0,0,.0086,.0704,.8607,0,.0964,.1442,.0553,.6782,.0086,.0704,.8607,0,.2248,.1319,.5525,.0537,.029,.2475,.0585,.6072,.8624,.1355,0,0,.871,.1177,0,0,.9607,.0106
                ,0,0,.1813,.8114,0,0,.7739,.2167,0,0,.1813,.8114,0,0,.9495,0,0,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.8568,.0103,.1082,0,.98,0,0,0,.0868,.9125,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.0892,.9072,0,0
                ,.0729,.9255,0,0,.9212,.0638,0,0,.9807,0,0,0,.9739,0,0,0,.871,.1177,0,0,.0279,.1516,.0533,.728,.0204,.0178,.4647,.1702,.0868,.9125,0,0,.1063,.1803,.5163,.097,.4,.039,.1418,.3823,.029,.2475,.0585,.6072,.0003,.4771,.1405,.3214,.1897,.761
                ,0,0,.7202,.0706,.2092,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.0269,.9044,.0571,0,.8311,.1482,0,0,.9702,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.9739,0,0,0,.9646,.0151,0,0,.98,0,0,0
                ,.9709,0,0,0,.0204,.0178,.4647,.1702,.1063,.1803,.5163,.097,.1445,.5927,.0873,.0681,.0288,.606,.2026,.024,.0294,.0294,.0125,.8252,.7508,.1427,.0111,0,.9052,.0425,.0089,0,.8622,.0094,.081,0,.4,.039,.1418,.3823,.2195,.0562,.185,.4939,.9212,.0638,0,0,.8622,.0094
                ,.081,0,.4,.039,.1418,.3823,.8311,.1482,0,0,.0589,.1942,.2339,.4882,.2886,.2316,.226,.226,.2727,.4319,.1387,.1387,.7157,.2754,0,0,.9715,0,0,0,.9966,0,0,0,.9708,.0137,0,0,.0811,.8719,.0441,0,.163,.04,.7919,0,.1837,.8099,0,0
                ,.1612,.8364,0,0,.9836,0,0,0,.9795,0,0,0,.9892,0,0,0,.7308,.1244,.1244,0,.689,.2658,.0262,0,.9797,0,0,0,.1408,.6207,.1559,.0155,.657,.1395,.0286,.0792,.4361,.1611,.0544,.3152,.1058,.1865,.053,.611,.3435,.2081,.0372,.3342,.6031,.2393
                ,.1382,0,.4104,.4104,.0863,.013,.2054,.7578,0,0,.6812,.0959,.0123,.1189,.0035,.1231,.0909,.3718,.2886,.2316,.226,.226,.2976,.2148,.3321,.1261,.7379,.1548,.0658,0,.8624,.1355,0,0,.1626,.3122,.4785,0,.0843,.8355,.0492,0,.9958,0,0,0,.9808,0,0,0
                ,.0376,.9366,0,0,.2185,.7122,.0664,0,.0283,.9097,0,0,.9784,0,0,0,.0537,.9458,0,0,.9835,0,0,0,.0301,.9596,0,0,.7308,.1244,.1244,0,.5933,.202,.202,0,.2185,.7122,.0664,0,.5933,.202,.202,0,.3231,.009,.3193,.3193,.1598,.7112
                ,.1128,0,.9507,.0271,0,0,.3399,.4989,.1305,0,.9582,.0129,0,0,.9702,0,0,0,.8094,.1375,.02,0,.7723,.175,.0295,0,.6152,.289,.0399,.0399,.6152,.289,.0399,.0399,.7805,.1746,0,0,.9311,.0527,0,0,.95,.0262,0,0,.9517,.0231,0,0
                ,.95,.0262,0,0,.9687,0,0,0,.9702,0,0,0,.9829,0,0,0,.9702,0,0,0,.9844,0,0,0,.9868,0,0,0,.9829,0,0,0,.8191,.14,0,0,.7723,.175,.0295,0,.8667,.1136,0,0,.7723,.175,.0295,0,.9381,.0467
                ,0,0,.8771,.1167,0,0,.8667,.1136,0,0,.9347,.0488,0,0,.9199,.0613,0,0,.9311,.0527,0,0,.9314,.0511,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.9574,.0224,0,0,.9381,.0467,0,0,.9507,.0271,0,0,.9652,.0146,0,0
                ,.9574,.0224,0,0,.9697,.0017,0,0,.9987,0,0,0,.9934,0,0,0,.9844,0,0,0,.9934,0,0,0,.9934,0,0,0,.9897,0,0,0,.9843,0,0,0,.9839,0,0,0,.9843,0,0,0,.9897,0,0,0,.9987,0
                ,0,0,.9983,0,0,0,.9959,0,0,0,.9959,0,0,0,.9934,0,0,0,.9843,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9757,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.9877,0,0,0,.9868,0,0,0
                ,.8876,.1087,0,0,.9775,0,0,0,.9687,0,0,0,.9843,0,0,0,.9347,.0488,0,0,.9416,.0373,0,0,.8138,.1394,.0032,0,.9245,.057,0,0,.9517,.0231,0,0,.0915,.8919,0,0,.5947,.2662,.0655,.0655,.6152,.289,.0399,.0399,.2176,.518
                ,.22,0,.3399,.4989,.1305,0,.1897,.761,0,0,.0003,.4771,.1405,.3214,.2176,.518,.22,0,.2727,.4319,.1387,.1387,.5947,.2662,.0655,.0655,.7805,.1746,0,0,.1538,.8047,0,0,.1538,.8047,0,0,.121,.8443,0,0,.0903,.8828,0,0,.121,.8443,0,0
                ,.0901,.8832,0,0,.8191,.14,0,0,.0901,.8832,0,0,.0673,.9122,0,0,.0903,.8828,0,0,.0672,.9122,0,0,.921,.0604,0,0,.9245,.057,0,0,.0673,.9122,0,0,.9199,.0613,0,0,.2312,.7543,0,0,.0231,.9611,0,0,.9495,0
                ,0,0,.2312,.7543,0,0,.0011,.9551,0,0,.9971,0,0,0,.9607,.0106,0,0,.0011,.9551,0,0,.7805,.1746,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7723,.175,.0295,0
                ,.0672,.9122,0,0,.0672,.9122]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(1527);
                _i.set([319424776,168364039,319424776,168232459,463626,657163,168232459,168232459,168232459,3083,3083,3083,168364039,319424776,319424776,2571,657163,657163,470222341,329223,117835019,168232459,168232453,117835019,2571,657163,2571,117835019,470222341,470222341,2571,11,3083,12]);
                REPEAT(_i, 34, 8, 3083);
                _i.set([3340,3340,3340,3083,3083,3083,12,3083,3083,12,3083,3340,1051916,1051916,1051916,1051916,12,3340,1051916,12,3340,3340,920844,14,1052173,3340,1051916,1051916,3340,3340,1051916,1051916,1051916,3597,286264845,1052173,168298251,2571,2571,168364039,319293194,463626,657415,657163,168232459,319293194,319424519,657415,168298251,168298251
                ,168364039,470222341,505153029,470222341,470222341,470222341,470222341,470222341,470222341,505153029,1973253,470222341,470222341,1836549,470222341,1836549,1836549,28,28,28,7173,28,7173,7173,28,7452], 42);
                REPEAT(_i, 118, 10, 28);
                _i.set([7452,7452,7452,28,7452,7452,28,7452,28,7452,7452,29,72962,72962,7452,7452,7452,7452,7452,7452,258,258,258,7426,72962,258,29,72962,72962,29,72962,72962,2,2,258,2,2,2,7426,72962,72962,258,258,72962,269422093,3854,986637,3340,3597,986637
                ,986637,7426,258,2,258,72962,2,258,258,29,72962,7452,7452,29,29,28,7452,28,28,28,28,28,28,1836549,470222341,1836549,168364043,168364039,319424776,168298251,2571,2571,1118221,3340,920844,3340,3340,1051916,1051916,1051916,1051916,3083,3083,3340,3340,3083,3083,12,12,2571
                ,11,117835019,470222341,3083,3083,168232459,168232459,168232459,168364039,168364039,168364039,319424776,319424776,319424519,657415,657415], 128);
                REPEAT(_i, 244, 9, 72962);
                _i.set([258,11,11,11,657163,2571,11,12,12,117835019,117838859,168232453,657163,657163,168232459,168232459,657163,657163,168232459,657163,657163,72962,72962,72962,657415,168298251,319424776,319424776,319424776,258,2,258,7426,7426,72962,29,7425,258,7452,28,28,7173,1973253,1973253,28,470222341,470222341,470222341,470222341,134681354
                ,117838602,657163,2571,2571,319424776,657163,2571,1973253,7173,7173,1973253,28,7173,1973253,28,7173,7173,1973253,7173,28,1973253,7452,29,1973253,1973253,1973253,470222341,9,9,2057,2057,2057,657417,9,2057,657417,657417,9,2057,2057,657417,319424521,657417,2057,2057,319424521,2057,2057,2057,2057
                ,9,2057,9,9,2057,9,9,9,9,9,9,2057,2057,657417,657417,2057,657417,2057,2057,657417], 253);
                REPEAT(_i, 373, 15, 2057);
                REPEAT(_i, 388, 12, 9);
                _i.set([2057,9,2057,2057,9,2057,2057,9,9,9,2057,2057,2057,2057,657417,319424521,319424521,168298249,1800,319424521,319424521,657417,657417,657417,168298249,2055,168364039,657417,657417,2057], 400);
                REPEAT(_i, 430, 8, 2312);
                _i.set([2057,2057,2312,2312,2057,2312,2312,2057,2057,2312,3854,3854,3854,986637,986637,14,3854,3854,3597,4368,4108,286264588,1118221,4368,17,17,4368,4368,17,4368,3597,3597,2057,2057,2057,657417,2057,2057,2057,2057,657417,2057], 438);
                REPEAT(_i, 480, 8, 657417);
                _i.set([2057,657417,169019656,319358983,319358983,319227412,463626,117838859,319227412,319227412,319227412,5396,5396,5396,319358983,169019656,319358996,1246996,4884,1246996,117835028,470222341,503776773,117835028,117838602,319227412,4884,1246996,319227412,503776773,319227397,117835028,4884,4884,21], 488);
                REPEAT(_i, 523, 8, 5396);
                _i.set([5653,5653,5653,5396,5396,21,5396,5396,21,5396,5396,1709589,5653,1709589,1709589,1709589,21,5653,21,5653,5653,23,1512981,1709846,1709589,5653,5653,1709589,5653,1709589,1709589,1709589,5910,454694678,1709589,319293204,4884,134681354,168364039,1247239,463626,1246996,168298259,319424519,319424519,319293204,319293204,319293204,471729669,470222341
                ,503776773,503776773,470222341,470222341,503776773,117835028,1842693,505153029,503776773,503776773,503776773,503776773,1967621,503776773,30,30,30,1967621,7685,1967621,7685,7966,30,30,30,30,30,30,30,7685,30,30,30,7966,7966,7966,30,7966,30,30,30,30,7966,30,204548,7939,31,7966,7966,7966
                ,7966,7966,7966,772,772,772,772,31,7940,31,204548,31,31,204548,31,4,4,4,4,4,7940,204548,7940,204548,772,772,204548,6167,437786390,1578774,1512981,5653,1578774,5910,1578774,772,204548,204548,204548,772,4,772,204548,31,7966,7966,7966,31,30,7966
                ,30,30,30,30,30,30,1967621,503776773,1967621,503776773,319358983,4884,319293204,1776150,5653,5653,5653,5653,1709589,21,1709589,5396,5396,5653,5396,5396,21,5396,20,4884,117835028,5396,5396,319227412,319227412,1246996,319358983,319358983,319293204,169019656,169019656,1247239,2055,319424519], 531);
                REPEAT(_i, 725, 12, 204548);
                _i.set([772,20,5396,20,20,1246996,4884,1246996,20,4884,21,21,21,21,5396,319227412,168232453,329223,319227412,1246996,319227412,1246996,1246996,1246996,319227412,1246996,1246996,772,204548,319293204,1247239,319424776,169019656,772,4,204548,7940,7940,204548,204548,204548,772,7966,30,7966,30,1973253,7685,470222341,1973253
                ,470222341,503776773,503776773,134681354,117838602,4884,168298259,168364039,169019656,1246996,1246996,1842693,7685,1842693,7685,30,7685,1842693,1842693,7685,7685,1842693,7685,30,1842693,7966,7966,31,7966,1973253,1842693,1842693,1973253,1842693,1842693,470222341,9,9,9,2057,2057,2057,2057,9,1247241,1247241,2057,9,2057,169019401
                ,1247241,1247241,319424521,2057,1247241,2057,2057,2057,2057], 737);
                REPEAT(_i, 846, 10, 9);
                _i.set([2057,2057,1247241,1247241], 856);
                REPEAT(_i, 860, 18, 2057);
                REPEAT(_i, 878, 11, 9);
                _i.set([2057,9,9,2057,2057,2057,9,2057,2057,9,9,9,2057,2057,2057,1247241,2057,2057,169019401,1247241,169019401,169019401,319293193,2057,1800,319424521,1247241,1247241,319293193,2055,1800,319358983,319424776,1247241,2057,2312,2057,2312,2312,2312,2312,2312,2312,2312,2057,2312,2312,2312,2057,2057
                ,2312,2312,2057,2312,2312,6167,6167,1578774,6167,1578774,6167,23,5910,6938,1776150,6677,6938,27,6938,6938,454694421,27,6938,5910,5910,1709846,2057,2057,1247241,2057,2057,2057,1247241,2057,1247241,1247241,1247241,1247241,1247241,1247241,1247241,2312,2057,2312,2057,168364039,319424776,168232459,3083,3083
                ,3083,3083,3083,1051916,3340,3340,1051916,2571,134681354,463626,319424519,2571,319293194,319424519,168298251,470222341,470222341,1973253,470222341,470222341,470222341,470222341,28,28,28,28,28,28,28,2,2,258,258,3854,72962,258,72962,72962,2,258,29,72962,7452,7452,7452,7452,29,72962,28,28
                ,7452,28,28,28,28,28,7452,1836549,28,470222341,470222341,1836549,168364039,168298251,2571,3340,3597,3340,3340,3340,14,12,1051916,1051916,3083,12,3340,3340,3083,3083,3083,3083,12,2571,11,117835019,470222341,3083,3083,657163,168232459,168364039,168298251,319424519], 889);
                REPEAT(_i, 1083, 10, 72962);
                _i.set([258,72962,11,3083,11,2571,657163,11,2571,12,3340,12,12,168232459,117835019,657163,168232459,657163,657163,3083,168232459,72962,258,72962,657415,319424776,258,72962,2,7426,2,258,28,28,28,28,470222341,470222341,319293194,657163,319424776,657163,1973253,7173,28,28,1973253,28,7173,1973253
                ,7173,7452,29,7452,29,1973253,1973253,1973253,1973253,9,2057,9,2057,657417,657417,657417,2057,9,9,9,2057,657417], 1093);
                REPEAT(_i, 1165, 12, 2057);
                _i.set([9,2057], 1177);
                REPEAT(_i, 1179, 14, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,2057,2057,2312,2057,2057,657417,657417,657417,168364039,2057,2057,2312,2312,2312,2312,2057,2312,2312,2057,3854,3854,14,3597,3597,3597,2057,657417,657417,657417,1246996,463626,5396,169019656,169019656,329223,470222341,168232453,117838602,503776773,20,5396,5396
                ,5396,5396,5396,1709589,1709589,5653,5653,5653,1709589,4884,4884,168298259,134681354,463626,4884,1247239,319424519,319293204,319358983,505153029,470222341,503776773,470222341,503776773,1842693,505153029,503776773,30,30,30,30,30,30,204548,7966,772,204548,204548,204548,772,4,4,772,6167,4,772,204548,772,4,204548
                ,7966,7966,204548,31,30,7966,30,30,30,7966,30,30,1967621,503776773,1967621,169019656,319358983,4884,4884,5910,5653,5653,5653,23,1709589,1709589,1709589,21,5396,5653,5653,5396,5396,5396,21,20,4884,503776773,117835028,5396,319227412,319227412,319358983,319358983,2055,204548,204548,204548,204548,772
                ,20,5396,20,4884,20,5653,21,21,117835028,319227412,470222341,168232453,117838859,329223,1246996,1246996,319227412,319227412,5396,1246996,319227412,772,319293204,319424776,319424776,772,4,4,7940,204548,204548,772,772,30,30,30,1973253,1842693,30,470222341,470222341,503776773,503776773,503776773,1247239,134681354,4884,168298259,168364039,319424776
                ,169019656,1246996,4884,1246996,1842693,30,30,7685,1842693,7685,31,7966,31,7966,1973253,1973253,1842693,1973253,505153029,1842693,2057,1247241,2057,9,1247241,1247241,319424521,319424521,2057,2057,2057,2057,2057,9,9,9,9,9,9,9,2057,1247241,2057,1247241], 1193);
                REPEAT(_i, 1437, 15, 2057);
                REPEAT(_i, 1452, 16, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,9,9,9,2057,2057,1247241,2057,2057,2057,319424521,319424521,1247241,1247241,2055,319358983,1247241,319424776,319424521,2057,2312,2312,2312,2312,2312,2312,2057,2312,2312,2312,2312,2057,2057,2312,2057,6167,6167,23,6167,5910,27,5910,5910
                ,2057,2057,1247241,1247241,1247241,1247241,1247241], 1468);
                REPEAT(_i, 1525, 2, 2312);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                _i = new Float32Array(6108);
                _i.set([.0584,0,0,0,.0746], 28);
                _i.set([.1473], 48);
                _i.set([.0073,0,0,0,.0642,0,0,0,.024,.0016,.0016,0,.0629,.0367], 80);
                _i.set([.0084,.2572], 108);
                _i.set([.3718], 324);
                _i.set([.0158,0,0,0,.1392,0,0,0,0,0,0,0,.0526,0,0,0,.0681,0,0,0,.0526,0,0,0,.0158], 368);
                _i.set([.0033], 416);
                _i.set([.0063,0,0,0,.0158], 816);
                _i.set([.2225], 916);
                _i.set([.0608,0,0,0,0,0,0,0,.0746,0,0,0,.0158], 932);
                _i.set([.0084,.2572,0,0,0,0,0,0,.2109], 1048);
                _i.set([.0792,0,0,0,.0792,0,0,0,.0155], 1192);
                _i.set([.0158], 1968);
                _i.set([.0746], 1984);
                _i.set([.1473,0,0,0,0,0,0,0,.0063], 2008);
                _i.set([.0073,0,0,0,.0155,0,0,0,0,0,0,0,.0629,.0367,0,0,0,0,0,0,.0642], 2032);
                _i.set([.2109,0,0,0,.0084,.2572], 2072);
                _i.set([.3718], 2276);
                _i.set([.1392,0,0,0,.0526,0,0,0,.0158,0,0,0,.1392,0,0,0,.0681,0,0,0,0,0,0,0,.2225], 2320);
                _i.set([.0033], 2360);
                _i.set([.0158], 2764);
                _i.set([.0084,.2572], 2844);
                _i.set([.0608], 2856);
                _i.set([.0158], 2868);
                _i.set([.0746,0,0,0,.024,.0016,.0016,0,0,0,0,0,.0584], 3008);
                _i.set([.0792,0,0,0,0,0,0,0,.0155], 3140);
                _i.set([.3718], 3176);
                _i.set([.0792], 3288);
                _i.set([.0158], 3936);
                _i.set([.1392,0,0,0,.0526], 4016);
                _i.set([.0158], 4204);
                _i.set([.0084,.2572], 4296);
                _i.set([.0158], 4320);
                _i.set([.0746,0,0,0,.0084,.2572], 4424);
                _i.set([.0792,0,0,0,.0526], 4516);
                _i.set([.0155,0,0,0,.024,.0016,.0016], 4944);
                _i.set([.0158,0,0,0,0,0,0,0,.1392,0,0,0,.0526,0,0,0,.1392], 5044);
                _i.set([.0158], 5236);
                _i.set([.0084,.2572,0,0,0,0,0,0,.0746,0,0,0,0,0,0,0,.0158], 5324);
                _i.set([.0084,.2572,0,0,.0746,0,0,0,.0681,0,0,0,.024,.0016,.0016], 5404);
                _i.set([.0155,0,0,0,.0792], 5528);
                _i.set([.0526], 5544);
                _i.set([.3718], 5564);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsExtraKind, _i, false);

                _i = new Uint32Array(1527);
                _i.set([0,0,0,0,0,0,0,28,28,0,0,0,19,0,0,0,0,0,0,0,28,19,1973267,7178,0,0,0,7178]);
                _i.set([19], 81);
                _i.set([11,30,0,30,30,30,30,0,0,0,0,0,30], 92);
                _i.set([19,11], 204);
                _i.set([28,0,0,0,28,0,28,11], 229);
                _i.set([7178,0,28], 262);
                _i.set([30,30,30], 298);
                _i.set([20,0,0,0,30,0,0,0,0,0,10,0,10,0,0,0,30,30,0,7699,0,10,0,0,0,0,30,7699], 492);
                _i.set([19], 569);
                _i.set([30,28,28,30,30,0,30,0,0,0,28], 580);
                _i.set([20], 691);
                _i.set([7699,0,0,30,0,0,20], 711);
                _i.set([30,1973267,0,30], 752);
                _i.set([30,0,30,0,0,0,0,0,0,19], 785);
                _i.set([30], 822);
                _i.set([11], 984);
                _i.set([30,30], 1004);
                _i.set([11], 1051);
                _i.set([7178,0,0,0,0,0,11], 1074);
                _i.set([28,7178], 1106);
                _i.set([30,30], 1129);
                _i.set([30,1973267], 1236);
                _i.set([20,0,30,28,30], 1261);
                _i.set([20], 1309);
                _i.set([7699,0,30,0,20], 1331);
                _i.set([7699,30,30,1973267], 1351);
                _i.set([30,30,0,0,28,0,0,0,0,19], 1382);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesExtraKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.texture");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 1527, 0, 3258, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.1178,2.8615,.3578,.0622,2.8656,.3355,-.1234,2.8682,.3811,-.1022,2.6622,-.2923,.0611,2.5581,-.3218,.0597,2.6938,-.3157,.0597,2.6938,-.3157,-.1073,2.6566,-.3121,-.1022,2.6622,-.2923,-.3685,2.6749,-.1376,-.2832,2.6493,-.2775,-.3924,2.6725,-.1463,-.1091,2.3624,-.2997,.1154,2.4353,-.3503,.0611,2.5581,-.3218,.3526,2.7335,-.0615,.2289,2.6755,-.2633
                    ,.3888,2.6715,-.0656,.2332,2.6494,.2803,.4057,2.5893,.2036,.2811,2.484,.3094,.3278,1.916,-.6188,.3209,1.553,-.6905,.433,1.5938,-.7123,.3888,2.6715,-.0656,.2896,2.5458,-.3213,.4648,2.5235,-.1276,.4873,2.421,.1527,.3443,2.3342,.2791,.4884,1.9615,-.5985,.6925,1.827,-.4607,.6582,1.9335,-.4136,.561,1.7469,-.0354,.755,1.5334,-.3042
                    ,.6216,1.4483,-.1953,.7789,1.4116,-.331,.6336,1.3443,-.23,.3544,1.4448,-.7318,.4684,1.4778,-.7559,.5707,1.6268,-.6917,.7282,1.7089,-.4749,.6976,1.8389,-.1462,.4057,2.5893,.2036,.3765,2.6674,.1947,-.3969,2.871,.0763,-.3792,2.8665,-.1278,-.3547,2.8591,-.1225,.6092,1.4973,-.7218,.4668,1.392,-.1602,.4843,1.2981,-.1947,.3481,1.6666,.0137
                    ,.136,2.2357,.3522,.071,2.3744,.3915,.0563,2.6611,.3308,.0611,2.5581,-.3218,.2289,2.6755,-.2633,.05,2.8702,-.3307,.2166,2.8873,-.2542,.2008,2.8805,-.2335,.2332,2.6494,.2803,.0614,2.6545,.3512,.2497,2.6394,.2981,.2113,2.7384,-.2259,.1154,2.4353,-.3503,.4884,1.9615,-.5985,.2896,2.5458,-.3213,.3443,2.3342,.2791,.3481,1.6666,.0137
                    ,.136,2.2357,.3522,.4648,2.5235,-.1276,.6976,1.8389,-.1462,.4873,2.421,.1527,.4873,2.421,.1527,.561,1.7469,-.0354,.3443,2.3342,.2791,.2896,2.5458,-.3213,.6582,1.9335,-.4136,.4648,2.5235,-.1276,-.0295,2.3041,-.3281,.3278,1.916,-.6188,.1154,2.4353,-.3503,-.294,2.7094,.3122,-.1298,2.6726,.3701,-.1238,2.6767,.3488,-.2735,2.4935,-.2562
                    ,-.2664,2.6545,-.2606,.3865,2.8568,.1762,.2519,2.8569,.2941,.2342,2.8508,.2788,-.437,2.7105,.069,-.3131,2.7112,.3317,-.3332,2.3258,-.2186,-.2735,2.4935,-.2562,-.4419,2.6442,.0855,-.3685,2.6749,-.1376,-.4099,2.7091,.0647,-.1238,2.6767,.3488,-.3139,2.646,.3407,-.294,2.7094,.3122,-.6036,1.7419,-.1344,-.6016,1.377,-.0732,-.47,1.6857,-.1633
                    ,-.4419,2.6442,.0855,-.476,2.431,-.1298,-.4016,2.5875,-.1547,-.1464,2.5526,.4029,-.3955,2.4849,.3899,-.3139,2.646,.3407,-.8289,1.7472,.2055,-.7351,1.8071,-.0524,-.7847,1.8592,.1898,-.4931,1.8003,.5042,-.7767,1.5297,.4598,-.6746,1.8632,.4541,-.5995,1.473,.5077,-.7999,1.4083,.4921,-.7124,1.4191,-.0476,-.6412,1.2665,-.0531,-.8557,1.6349,.2516
                    ,-.8231,1.4703,.0271,-.0295,2.3041,-.3281,-.1902,2.2277,-.2549,.193,1.8611,-.5929,-.1902,2.2277,-.2549,-.47,1.6857,-.1633,-.3139,2.646,.3407,-.5265,2.4885,.122,-.4419,2.6442,.0855,-.294,2.7094,.3122,-.2664,2.6545,-.2606,-.7542,1.3007,-.0257,-.4439,1.4165,.4765,-.6182,1.3634,.5223,-.2796,1.7186,.4596,-.2052,2.413,.4464,-.2735,2.4935,-.2562
                    ,.3526,2.7335,-.0615,.228,2.7408,-.2435,.2113,2.7384,-.2259,-.28,2.8596,-.2873,-.2634,2.853,-.27,-.4016,2.5875,-.1547,-.3685,2.6749,-.1376,-.7351,1.8071,-.0524,-.3332,2.3258,-.2186,-.476,2.431,-.1298,.0006,2.2587,.4069,-.4931,1.8003,.5042,-.2052,2.413,.4464,-.6746,1.8632,.4541,-.5265,2.4885,.122,-.3955,2.4849,.3899,.0006,2.2587,.4069
                    ,-.4931,1.8003,.5042,-.3955,2.4849,.3899,-.2052,2.413,.4464,-.7847,1.8592,.1898,-.476,2.431,-.1298,-.5265,2.4885,.122,-.6036,1.7419,-.1344,-.1902,2.2277,-.2549,-.3332,2.3258,-.2186,-.4682,1.3167,.4908,-.2796,1.7186,.4596,.136,2.2357,.3522,.3481,1.6666,.0137,-.1238,2.6767,.3488,-.3547,2.8591,-.1225,-.2724,2.9177,-.2731,-.3718,2.9214,-.1355
                    ,.2342,2.8508,.2788,.0643,2.9231,.325,.2438,2.9163,.2776,.3865,2.8568,.1762,.3965,2.921,.168,.05,2.8702,-.3307,-.1098,2.9216,-.3097,-.1058,2.8563,-.3023,-.3547,2.8591,-.1225,-.4101,2.9308,.0741,-.3969,2.871,.0763,.05,2.8702,-.3307,.1961,2.9396,-.2672,.0499,2.9317,-.3407,-.2995,2.8738,.3361,-.2998,2.936,.3522,.0558,2.8594,.3164
                    ,-.1135,2.9254,.369,-.1178,2.8615,.3578,.2008,2.8805,-.2335,.3395,2.9386,-.1101,.3377,2.8791,-.0819,-.2634,2.853,-.27,.3631,2.8866,-.0919,.228,2.7408,-.2435,.3788,2.7359,-.069,-.1113,2.8628,-.3228,.0661,2.6907,-.3385,.0553,2.8772,-.3542,.2519,2.8569,.2941,.4036,2.6634,.2049,.2497,2.6394,.2981,.4149,2.8637,.1819,.2519,2.8569,.2941
                    ,.0614,2.6545,.3512,.0622,2.8656,.3355,.228,2.7408,-.2435,.2166,2.8873,-.2542,-.437,2.7105,.069,-.3792,2.8665,-.1278,-.4234,2.8786,.0826,-.28,2.8596,-.2873,-.1073,2.6566,-.3121,-.1234,2.8682,.3811,-.3131,2.7112,.3317,-.3179,2.8812,.3599,-.3131,2.7112,.3317,.0622,2.8656,.3355,-.1298,2.6726,.3701,-.1234,2.8682,.3811,-.3924,2.6725,-.1463
                    ,-.28,2.8596,-.2873,-.3792,2.8665,-.1278,.3765,2.6674,.1947,.4036,2.6634,.2049,.3377,2.8791,-.0819,.3631,2.8866,-.0919,-.1113,2.8628,-.3228,-.1058,2.8563,-.3023,.0597,2.6938,-.3157,.0661,2.6907,-.3385,.0558,2.8594,.3164,.3631,2.8866,-.0919,.4149,2.8637,.1819,-.1113,2.8628,-.3228,.0553,2.8772,-.3542,.3765,2.6674,.1947,.3788,2.7359,-.069
                    ,.3526,2.7335,-.0615,-.4099,2.7091,.0647,-.2995,2.8738,.3361,-.3179,2.8812,.3599,.0563,2.6611,.3308,-.2995,2.8738,.3361,-.4234,2.8786,.0826,.0558,2.8594,.3164,-.1091,2.3624,-.2997,.0597,2.6938,-.3157,.0661,2.6907,-.3385,-.2664,2.6545,-.2606,-.0295,2.3041,-.3281,.193,1.8611,-.5929,.3888,2.6715,-.0656,.2289,2.6755,-.2633,.4057,2.5893,.2036
                    ,.4057,2.5893,.2036,.3888,2.6715,-.0656,-.4234,2.8786,.0826,.0611,2.5581,-.3218,.0553,2.8772,-.3542,.2332,2.6494,.2803,.0563,2.6611,.3308,.1154,2.4353,-.3503,.3278,1.916,-.6188,.4884,1.9615,-.5985,.3443,2.3342,.2791,.561,1.7469,-.0354,.3481,1.6666,.0137,.4648,2.5235,-.1276,.6582,1.9335,-.4136,.6976,1.8389,-.1462,.4873,2.421,.1527
                    ,.6976,1.8389,-.1462,.561,1.7469,-.0354,.2896,2.5458,-.3213,.4884,1.9615,-.5985,.6582,1.9335,-.4136,.3278,1.916,-.6188,-.1091,2.3624,-.2997,.4149,2.8637,.1819,-.4099,2.7091,.0647,-.4016,2.5875,-.1547,-.3685,2.6749,-.1376,-.1238,2.6767,.3488,-.4419,2.6442,.0855,.193,1.8611,-.5929,-.8595,1.3438,.066,-.1902,2.2277,-.2549,-.3139,2.646,.3407
                    ,-.294,2.7094,.3122,-.2664,2.6545,-.2606,-.1022,2.6622,-.2923,.0006,2.2587,.4069,-.2735,2.4935,-.2562,.3526,2.7335,-.0615,.3788,2.7359,-.069,-.4016,2.5875,-.1547,-.7351,1.8071,-.0524,-.6036,1.7419,-.1344,-.3332,2.3258,-.2186,-.2796,1.7186,.4596,-.4931,1.8003,.5042,-.6746,1.8632,.4541,-.7847,1.8592,.1898,-.5265,2.4885,.122,-.4931,1.8003,.5042
                    ,-.6746,1.8632,.4541,-.3955,2.4849,.3899,-.7847,1.8592,.1898,-.7351,1.8071,-.0524,-.476,2.431,-.1298,-.6036,1.7419,-.1344,-.47,1.6857,-.1633,-.1902,2.2277,-.2549,-.2796,1.7186,.4596,.136,2.2357,.3522,-.3547,2.8591,-.1225,-.2634,2.853,-.27,.2342,2.8508,.2788,.3865,2.8568,.1762,.2342,2.8508,.2788,.05,2.8702,-.3307,-.3547,2.8591,-.1225
                    ,.05,2.8702,-.3307,.2008,2.8805,-.2335,-.3969,2.871,.0763,-.1178,2.8615,.3578,.2008,2.8805,-.2335,.3865,2.8568,.1762,-.2634,2.853,-.27,.2166,2.8873,-.2542,.228,2.7408,-.2435,-.1073,2.6566,-.3121,.2519,2.8569,.2941,.2519,2.8569,.2941,.2497,2.6394,.2981,.0614,2.6545,.3512,.228,2.7408,-.2435,-.437,2.7105,.069,-.3924,2.6725,-.1463
                    ,-.3792,2.8665,-.1278,-.28,2.8596,-.2873,-.2832,2.6493,-.2775,-.1073,2.6566,-.3121,-.1234,2.8682,.3811,-.1298,2.6726,.3701,-.3131,2.7112,.3317,-.3131,2.7112,.3317,-.437,2.7105,.069,.0622,2.8656,.3355,.0614,2.6545,.3512,-.1298,2.6726,.3701,-.3924,2.6725,-.1463,-.2832,2.6493,-.2775,-.28,2.8596,-.2873,.3765,2.6674,.1947,.2332,2.6494,.2803
                    ,.3377,2.8791,-.0819,-.1113,2.8628,-.3228,.0597,2.6938,-.3157,.2113,2.7384,-.2259,.3377,2.8791,-.0819,.3631,2.8866,-.0919,-.1058,2.8563,-.3023,-.1113,2.8628,-.3228,.3765,2.6674,.1947,.4036,2.6634,.2049,.3788,2.7359,-.069,-.4099,2.7091,.0647,-.2995,2.8738,.3361,-.2995,2.8738,.3361,-.3179,2.8812,.3599,-.4234,2.8786,.0826
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
                    .0487,.7978,.601,.1275,.8239,.5521,.0593,.7207,.6907,-.0215,-.7719,-.6353,-.055,.1306,-.9899,.2689,-.7775,-.5684,.2689,-.7775,-.5684,-.0129,-.8103,-.5859,-.0215,-.7719,-.6353,-.7299,-.6511,-.2079,-.3721,-.737,-.5643,-.7134,-.6637,-.2248,-.2926,-.0119,-.9561,-.1805,.2629,-.9478,-.055,.1306,-.9899,.7025,-.5719,-.4235,.4381,.4837,-.7577
                    ,.8347,.5035,-.2231,.2419,-.7746,.5843,.786,.3077,.5362,.4346,.1293,.8913,-.1388,.3265,-.9349,-.4177,.1632,-.8938,-.1024,.285,-.953,.8347,.5035,-.2231,.3587,.4898,-.7946,.8466,.4706,-.2485,.8708,.1809,.4571,.533,-.1023,.8398,.3688,.4343,-.8218,.8714,.3424,-.3512,.8538,.4202,-.3073,.533,-.2745,.8003,.9216,.0442,.3856
                    ,.5115,-.2569,.8199,.7974,-.0113,.6034,.4585,-.2348,.8571,-.4086,.2089,-.8885,-.0683,.3007,-.9512,.4091,.344,-.8451,.9201,.3054,-.2452,.9232,.0613,.3795,.786,.3077,.5362,.6414,-.7614,.0937,-.5917,.8057,.027,-.5592,.7869,-.2608,-.5867,.7598,-.28,.3939,.3172,-.8627,.4383,-.2793,.8543,.4256,-.2408,.8723,.453,-.3171,.8332
                    ,.4244,-.1773,.8879,.2926,.0541,.9547,.098,-.744,.6609,-.055,.1306,-.9899,.4381,.4837,-.7577,.0034,.8386,-.5447,.3934,.7629,-.513,.4682,.7013,-.5376,.2419,-.7746,.5843,.051,-.7647,.6424,.244,-.8187,.5199,.6156,-.5295,-.5836,-.1805,.2629,-.9478,.3688,.4343,-.8218,.3587,.4898,-.7946,.533,-.1023,.8398,.453,-.3171,.8332
                    ,.4244,-.1773,.8879,.8466,.4706,-.2485,.9232,.0613,.3795,.8708,.1809,.4571,.8708,.1809,.4571,.533,-.2745,.8003,.533,-.1023,.8398,.3587,.4898,-.7946,.8538,.4202,-.3073,.8466,.4706,-.2485,-.3843,.1766,-.9062,-.1388,.3265,-.9349,-.1805,.2629,-.9478,-.555,-.6526,.5157,-.1064,-.7546,.6475,-.1283,-.6555,.7442,-.4051,.0019,-.9142
                    ,-.2552,-.8408,-.4774,.3454,.9114,.2235,.2516,.7572,.6027,.2438,.8418,.4815,-.8086,-.5757,.1208,-.5336,-.6146,.581,-.4001,-.0101,-.9164,-.4051,.0019,-.9142,-.8794,.4701,.0744,-.7299,-.6511,-.2079,-.7706,-.6243,.1279,-.1283,-.6555,.7442,-.4808,.4775,.7353,-.555,-.6526,.5157,-.3963,-.0362,-.9174,-.4188,-.0455,-.9069,-.4107,-.0294,-.9113
                    ,-.8794,.4701,.0744,-.765,.2444,-.5959,-.7812,.2865,-.5547,.0457,.3152,.9479,-.5303,.4009,.747,-.4808,.4775,.7353,-.9556,.291,.0456,-.7755,.1656,-.6092,-.9247,.3779,.0454,-.0219,.0612,.9979,-.5989,.262,.7567,-.6043,.2755,.7476,-.0001,.0869,.9962,-.3746,.273,.886,-.42,-.0598,-.9055,-.3838,-.0316,-.9228,-.9416,.2924,.1668
                    ,-.8096,.0814,-.5813,-.3843,.1766,-.9062,-.4017,.0352,-.9151,-.4221,.1948,-.8853,-.4017,.0352,-.9151,-.4107,-.0294,-.9113,-.4808,.4775,.7353,-.8938,.4421,.0757,-.8794,.4701,.0744,-.555,-.6526,.5157,-.2552,-.8408,-.4774,-.4501,-.0411,-.892,.3827,-.0443,.9228,.0634,.1202,.9907,.3736,-.1409,.9168,.0159,.1812,.9833,-.4051,.0019,-.9142
                    ,.7025,-.5719,-.4235,.5569,-.6102,-.5633,.6156,-.5295,-.5836,-.3667,.6985,-.6144,-.276,.8745,-.3988,-.7812,.2865,-.5547,-.7299,-.6511,-.2079,-.7755,.1656,-.6092,-.4001,-.0101,-.9164,-.765,.2444,-.5959,.2761,-.0441,.9601,-.0219,.0612,.9979,.0159,.1812,.9833,-.6043,.2755,.7476,-.8938,.4421,.0757,-.5303,.4009,.747,.2761,-.0441,.9601
                    ,-.0219,.0612,.9979,-.5303,.4009,.747,.0159,.1812,.9833,-.9247,.3779,.0454,-.765,.2444,-.5959,-.8938,.4421,.0757,-.3963,-.0362,-.9174,-.4017,.0352,-.9151,-.4001,-.0101,-.9164,.3953,.0313,.918,.3736,-.1409,.9168,.4244,-.1773,.8879,.453,-.3171,.8332,-.1283,-.6555,.7442,-.5867,.7598,-.28,-.5842,-.1452,-.7985,-.8744,-.316,-.3682
                    ,.2438,.8418,.4815,.2215,-.1444,.9644,.4286,-.0372,.9027,.3454,.9114,.2235,.9505,-.1057,.2921,.0034,.8386,-.5447,-.1861,-.1198,-.9752,-.1619,.7769,-.6084,-.5867,.7598,-.28,-.9735,-.2137,.0815,-.5917,.8057,.027,.0034,.8386,-.5447,.5861,-.3343,-.738,.1505,-.1587,-.9758,-.2833,.8809,.379,-.5608,-.2104,.8007,.1695,.7478,.6419
                    ,.0559,-.1821,.9817,.0487,.7978,.601,.4682,.7013,-.5376,.8282,-.2588,-.4971,.581,.7943,-.1774,-.276,.8745,-.3988,.5947,.7507,-.2874,.5569,-.6102,-.5633,.7251,-.5712,-.3848,-.1555,.7751,-.6124,.2618,-.6996,-.6648,.0757,.6946,-.7154,.2516,.7572,.6027,.6966,-.6608,.2793,.244,-.8187,.5199,.6861,.6602,.3056,.2516,.7572,.6027
                    ,.051,-.7647,.6424,.1275,.8239,.5521,.5569,-.6102,-.5633,.3934,.7629,-.513,-.8086,-.5757,.1208,-.5592,.7869,-.2608,-.655,.7527,.0651,-.3667,.6985,-.6144,-.0129,-.8103,-.5859,.0593,.7207,.6907,-.5336,-.6146,.581,-.4465,.6323,.6331,-.5336,-.6146,.581,.1275,.8239,.5521,-.1064,-.7546,.6475,.0593,.7207,.6907,-.7134,-.6637,-.2248
                    ,-.3667,.6985,-.6144,-.5592,.7869,-.2608,.6414,-.7614,.0937,.6966,-.6608,.2793,.581,.7943,-.1774,.5947,.7507,-.2874,-.1555,.7751,-.6124,-.1619,.7769,-.6084,.2689,-.7775,-.5684,.2618,-.6996,-.6648,.1695,.7478,.6419,.5947,.7507,-.2874,.6861,.6602,.3056,-.1555,.7751,-.6124,.0757,.6946,-.7154,.6414,-.7614,.0937,.7251,-.5712,-.3848
                    ,.7025,-.5719,-.4235,-.7706,-.6243,.1279,-.2833,.8809,.379,-.4465,.6323,.6331,.098,-.744,.6609,-.2833,.8809,.379,-.655,.7527,.0651,.1695,.7478,.6419,-.2926,-.0119,-.9561,.2689,-.7775,-.5684,.2618,-.6996,-.6648,-.2552,-.8408,-.4774,-.3843,.1766,-.9062,-.4221,.1948,-.8853,.8347,.5035,-.2231,.4381,.4837,-.7577,.786,.3077,.5362
                    ,.786,.3077,.5362,.8347,.5035,-.2231,-.655,.7527,.0651,-.055,.1306,-.9899,.0757,.6946,-.7154,.2419,-.7746,.5843,.098,-.744,.6609,-.1805,.2629,-.9478,-.1388,.3265,-.9349,.3688,.4343,-.8218,.533,-.1023,.8398,.533,-.2745,.8003,.453,-.3171,.8332,.8466,.4706,-.2485,.8538,.4202,-.3073,.9232,.0613,.3795,.8708,.1809,.4571
                    ,.9232,.0613,.3795,.533,-.2745,.8003,.3587,.4898,-.7946,.3688,.4343,-.8218,.8538,.4202,-.3073,-.1388,.3265,-.9349,-.2926,-.0119,-.9561,.6861,.6602,.3056,-.7706,-.6243,.1279,-.7812,.2865,-.5547,-.7299,-.6511,-.2079,-.1283,-.6555,.7442,-.8794,.4701,.0744,-.4221,.1948,-.8853,-.8039,.049,-.5928,-.4017,.0352,-.9151,-.4808,.4775,.7353
                    ,-.555,-.6526,.5157,-.2552,-.8408,-.4774,-.0215,-.7719,-.6353,.2761,-.0441,.9601,-.4051,.0019,-.9142,.7025,-.5719,-.4235,.7251,-.5712,-.3848,-.7812,.2865,-.5547,-.7755,.1656,-.6092,-.3963,-.0362,-.9174,-.4001,-.0101,-.9164,.3736,-.1409,.9168,-.0219,.0612,.9979,-.6043,.2755,.7476,-.9247,.3779,.0454,-.8938,.4421,.0757,-.0219,.0612,.9979
                    ,-.6043,.2755,.7476,-.5303,.4009,.747,-.9247,.3779,.0454,-.7755,.1656,-.6092,-.765,.2444,-.5959,-.3963,-.0362,-.9174,-.4107,-.0294,-.9113,-.4017,.0352,-.9151,.3736,-.1409,.9168,.4244,-.1773,.8879,-.5867,.7598,-.28,-.276,.8745,-.3988,.2438,.8418,.4815,.3454,.9114,.2235,.2438,.8418,.4815,.0034,.8386,-.5447,-.5867,.7598,-.28
                    ,.0034,.8386,-.5447,.4682,.7013,-.5376,-.5917,.8057,.027,.0487,.7978,.601,.4682,.7013,-.5376,.3454,.9114,.2235,-.276,.8745,-.3988,.3934,.7629,-.513,.5569,-.6102,-.5633,-.0129,-.8103,-.5859,.2516,.7572,.6027,.2516,.7572,.6027,.244,-.8187,.5199,.051,-.7647,.6424,.5569,-.6102,-.5633,-.8086,-.5757,.1208,-.7134,-.6637,-.2248
                    ,-.5592,.7869,-.2608,-.3667,.6985,-.6144,-.3721,-.737,-.5643,-.0129,-.8103,-.5859,.0593,.7207,.6907,-.1064,-.7546,.6475,-.5336,-.6146,.581,-.5336,-.6146,.581,-.8086,-.5757,.1208,.1275,.8239,.5521,.051,-.7647,.6424,-.1064,-.7546,.6475,-.7134,-.6637,-.2248,-.3721,-.737,-.5643,-.3667,.6985,-.6144,.6414,-.7614,.0937,.2419,-.7746,.5843
                    ,.581,.7943,-.1774,-.1555,.7751,-.6124,.2689,-.7775,-.5684,.6156,-.5295,-.5836,.581,.7943,-.1774,.5947,.7507,-.2874,-.1619,.7769,-.6084,-.1555,.7751,-.6124,.6414,-.7614,.0937,.6966,-.6608,.2793,.7251,-.5712,-.3848,-.7706,-.6243,.1279,-.2833,.8809,.379,-.2833,.8809,.379,-.4465,.6323,.6331,-.655,.7527,.0651
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

                this.setMaterialByID("Warrior.Multimaterial#0");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 373, 0, 690, this);
                new _B.SubMesh(1, 373, 0, 690, 0, this);
                new _B.SubMesh(2, 373, 0, 690, 0, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1591,-1.1572,.4652,.1304,-1.064,.4897,.2859,-1.1186,.4684,.0955,-1.1966,.4863,.0589,-1.2083,.5144,.101,-.3857,.3214,.1679,-.3393,.2253,.2056,-.4091,.2859,.0952,-.3179,.2649,.0957,-.2432,.2706,.0342,-1.2073,.5306,.1325,-.6964,.3793,.0271,-.391,.3092,.3392,-1.087,.4043,.3011,-.8164,.3244,.4306,-1.0552,.33,.2412,-.6859,.3235
                    ,.2412,-.6859,.3235,.3256,-.6637,.1811,.3011,-.8164,.3244,.2594,-.4332,.1897,.2412,-.6859,.3235,.2056,-.4091,.2859,.2061,-.3362,.1895,.2487,-.3641,.1325,.2108,-1.1556,.4679,.2859,-1.1186,.4684,.2894,-1.1124,.4415,.2108,-1.1556,.4679,.5637,-1.0514,.1264,.5825,-1.0821,.2049,.3952,-.7706,-.0178,.4387,-1.077,.2992,.4306,-1.0552,.33
                    ,.5217,-1.0909,.2714,.255,-.3502,-.0723,.2623,-.3098,.0377,.2421,-.3134,-.1253,.5661,-1.0902,.2519,.3488,-.6923,.0504,.2897,-.3863,.139,.3056,-.3835,.0594,.5217,-1.0909,.2714,.3256,-.6637,.1811,.5661,-1.0902,.2519,.3256,-.6637,.1811,.2594,-.4332,.1897,.2897,-.3863,.139,.3501,-.6063,-.0303,.3507,-.8284,-.1956,.3213,-.684,-.2075
                    ,.3085,-.3954,-.135,.2421,-.3134,-.1253,.2497,-.3543,-.2009,.2788,-.3818,-.2559,.5751,-1.0835,.0972,.5208,-1.0247,.0266,.5039,-1.0075,-.0227,.5249,-1.0359,-.0481,.4647,-.9934,-.0955,.5075,-1.0698,-.0882,.5491,-1.0747,-.0276,.4263,-1.0268,-.1447,.4412,-1.0929,-.143,.526,-1.1244,-.069,.2445,-.2682,.102,.2153,-.2718,.1651,.2105,-.1641,.1201
                    ,.2654,-.2068,-.0415,.2553,-.2585,-.1224,.0586,-.0445,-.0229,.0151,-.0689,-.055,.0472,-.0506,-.1333,.1838,-.1071,-.0292,.2105,-.1641,.1201,.0586,-.0445,-.0229,.0208,-.0947,.1148,.0767,-.0923,.1606,.1009,-.1619,.2439,.0767,-.0923,.1606,.2105,-.1641,.1201,.2153,-.2718,.1651,.0257,-.1967,.2627,.0365,-.1129,-.2824,.136,-.1355,-.2572
                    ,.1582,-.1019,-.1576,.136,-.1355,-.2572,.0451,-.212,-.3788,.163,-.2435,-.3149,.0077,-.1486,-.2767,.0051,-.2761,-.352,.0451,-.212,-.3788,.2237,-.2374,-.2246,.1582,-.1019,-.1576,.2298,-.3034,-.192,.2142,-.3181,-.2399,.1745,-.3366,-.2815,.4089,-1.1187,-.232,.2935,-.8907,-.2964,.3286,-1.1721,-.2778,.2935,-.8907,-.2964,.1924,-.9645,-.3292
                    ,.3897,-1.1174,-.2511,.2935,-.8907,-.2964,.2403,-1.1061,-.3063,.2619,-1.2256,-.3008,.3143,-.7679,-.3298,.2996,-.5357,-.3065,.2689,-.5581,-.3137,.1746,-.3991,-.3254,.2996,-.5357,-.3065,.3143,-.7679,-.3298,.2788,-.3818,-.2559,.1746,-.3991,-.3254,.2996,-.5357,-.3065,.2689,-.5581,-.3137,.2654,-.6736,-.257,.3143,-.7679,-.3298,.1746,-.3991,-.3254
                    ,.1582,-.3892,-.2754,.2689,-.5581,-.3137,.1296,-.2671,-.3321,.163,-.2435,-.3149,.0664,-.2538,-.3328,.1296,-.2671,-.3321,.2078,-1.1756,-.2851,.3143,-.7679,-.3298,.2654,-.6736,-.257,.1924,-.9645,-.3292,.1909,-1.0466,-.2759,.2078,-1.1756,-.2851,.2424,-1.2294,-.2989,.0256,-.3266,.2637,.0767,-.0923,.1606,.3256,-.6637,.1811,.2412,-.6859,.3235
                    ,.2056,-.4091,.2859,.2061,-.3362,.1895,.2061,-.3362,.1895,.2153,-.2718,.1651,.2859,-1.1186,.4684,.3392,-1.087,.4043,.3392,-1.087,.4043,.4306,-1.0552,.33,.5217,-1.0909,.2714,.3256,-.6637,.1811,.3056,-.3835,.0594,.2897,-.3863,.139,.2487,-.3641,.1325,.2897,-.3863,.139,.2594,-.4332,.1897,.2487,-.3641,.1325,.2788,-.3818,-.2559
                    ,.2788,-.3818,-.2559,.2788,-.3818,-.2559,.1582,-.1019,-.1576,.1838,-.1071,-.0292,.1838,-.1071,-.0292,.1838,-.1071,-.0292,.0586,-.0445,-.0229,.2105,-.1641,.1201,.0767,-.0923,.1606,.2105,-.1641,.1201,.2153,-.2718,.1651,.136,-.1355,-.2572,.0451,-.212,-.3788,.136,-.1355,-.2572,.1582,-.1019,-.1576,.2532,-.5921,-.0912,.2158,-.4741,-.1538
                    ,.236,-.4907,-.1167,.2497,-.3543,-.2009,.2497,-.3543,-.2009,.3143,-.7679,-.3298,.2935,-.8907,-.2964,.3897,-1.1174,-.2511,.3845,-1.1774,-.2455,.1746,-.3991,-.3254,.1746,-.3991,-.3254,.2788,-.3818,-.2559,.2142,-.3181,-.2399,.2788,-.3818,-.2559,.2497,-.3543,-.2009,.2996,-.5357,-.3065,.2788,-.3818,-.2559,.2654,-.6736,-.257,.259,-.7008,-.1382
                    ,.2171,-.7873,-.2084,.2654,-.6736,-.257,.2689,-.5581,-.3137,.1582,-.3892,-.2754,.2654,-.6736,-.257,.1582,-.3892,-.2754,.2654,-.6736,-.257,.1924,-.9645,-.3292,.2045,-.8788,-.2143,.2019,-.9724,-.2102,.1582,-.3892,-.2754,.1622,-.4222,-.1875,.1746,-.3991,-.3254,.1745,-.3366,-.2815,.163,-.2435,-.3149,.0451,-.212,-.3788,.0664,-.2538,-.3328
                    ,.0664,-.2538,-.3328,.0451,-.212,-.3788,.0051,-.2761,-.352,.2654,-.6736,-.257,.1897,-1.0534,-.2278,-.0947,-1.1571,.4737,-.221,-1.1184,.4853,-.0643,-1.0639,.4962,-.0299,-1.1966,.4905,.0086,-1.2083,.516,-.0457,-.3856,.3263,-.1525,-.409,.2979,-.1189,-.3391,.2348,-.0437,-.3179,.2695,-.0437,-.2431,.2753,-.0735,-.6963,.3861,-.2784,-1.0867,.4249
                    ,-.3746,-1.0549,.3568,-.2455,-.8162,.3427,-.1857,-.6858,.3377,-.1857,-.6858,.3377,-.2455,-.8162,.3427,-.2794,-.6634,.2013,-.2126,-.433,.2054,-.1857,-.6858,.3377,-.1525,-.409,.2979,-.1594,-.3361,.2017,-.2057,-.364,.1477,-.1461,-1.1554,.4798,-.221,-1.1184,.4853,-.1461,-1.1554,.4798,-.2263,-1.1122,.4587,-.5209,-1.0509,.1627,-.3622,-.7704,.0074
                    ,-.5344,-1.0817,.2422,-.3847,-1.0767,.3267,-.4694,-1.0905,.3045,-.3746,-1.0549,.3568,-.2256,-.35,-.0562,-.2163,-.3132,-.11,-.2255,-.3097,.054,-.3113,-.692,.0724,-.515,-1.0897,.288,-.2673,-.3833,.0785,-.2462,-.3861,.1569,-.4694,-1.0905,.3045,-.515,-1.0897,.288,-.2794,-.6634,.2013,-.3179,-.6061,-.008,-.3297,-.8282,-.1729,-.301,-.6838,-.1867
                    ,-.2256,-.35,-.0562,-.2673,-.3833,.0785,-.2833,-.3952,-.1153,-.2163,-.3132,-.11,-.2616,-.3816,-.2378,-.2289,-.3541,-.1849,-.5343,-1.083,.1343,-.4847,-1.0243,.0602,-.4712,-1.0071,.0098,-.4939,-1.0355,-.0141,-.4369,-.9931,-.0654,-.3297,-.8282,-.1729,-.4369,-.9931,-.0654,-.5166,-1.0742,.008,-.4792,-1.0695,-.0553,-.3297,-.8282,-.1729,-.4792,-1.0695,-.0553
                    ,-.4019,-1.0265,-.117,-.4019,-1.0265,-.117,-.4964,-1.124,-.0349,-.4167,-1.0925,-.1143,-.2034,-.268,.117,-.1682,-.164,.1327,-.1701,-.2717,.1779,-.2339,-.2066,-.0248,-.2292,-.2583,-.1062,-.0261,-.0445,-.0201,-.0221,-.0506,-.131,.0151,-.0689,-.055,-.1515,-.107,-.018,-.1682,-.164,.1327,-.0261,-.0445,-.0201,.0151,-.0689,-.055,.0208,-.0947,.1148
                    ,-.032,-.0922,.1642,.0208,-.0947,.1148,-.0506,-.1618,.249,-.1682,-.164,.1327,-.1701,-.2717,.1779,-.0506,-.1618,.249,-.0506,-.1618,.249,-.0214,-.1129,-.2805,-.1346,-.1018,-.1478,-.119,-.1354,-.2487,-.1499,-.2434,-.3044,-.0365,-.2119,-.3761,-.0221,-.0506,-.131,-.0214,-.1129,-.2805,.0077,-.1486,-.2767,.0051,-.2761,-.352,-.0214,-.1129,-.2805
                    ,-.0365,-.2119,-.3761,-.2044,-.2372,-.2103,-.2339,-.2066,-.0248,-.2084,-.3033,-.1774,-.1961,-.318,-.2262,-.2044,-.2372,-.2103,-.1592,-.3365,-.2704,-.1499,-.2434,-.3044,-.1961,-.318,-.2262,-.3904,-1.1184,-.2054,-.2794,-.8905,-.2773,-.3134,-1.1719,-.2564,-.1807,-.9643,-.3167,-.2794,-.8905,-.2773,-.2794,-.8905,-.2773,-.3725,-1.1171,-.2257,-.2271,-1.1059,-.2907
                    ,-.2484,-1.2254,-.2838,-.3023,-.7677,-.3092,-.2558,-.5579,-.2962,-.2859,-.5355,-.287,-.1623,-.399,-.3141,-.1592,-.3365,-.2704,-.1961,-.318,-.2262,-.3023,-.7677,-.3092,-.2859,-.5355,-.287,-.1623,-.399,-.3141,-.2616,-.3816,-.2378,-.2859,-.5355,-.287,-.2558,-.5579,-.2962,-.3023,-.7677,-.3092,-.2486,-.6734,-.2398,-.1623,-.399,-.3141,-.2558,-.5579,-.2962
                    ,-.1426,-.3891,-.2653,-.1499,-.2434,-.3044,-.1177,-.267,-.3238,-.1499,-.2434,-.3044,-.0547,-.2537,-.3288,-.1933,-1.1754,-.2718,-.3023,-.7677,-.3092,-.2486,-.6734,-.2398,-.1807,-.9643,-.3167,-.1933,-1.1754,-.2718,-.1758,-1.0465,-.2637,-.2288,-1.2292,-.2832,-.032,-.0922,.1642,.0208,-.0947,.1148,-.2455,-.8162,.3427,-.3746,-1.0549,.3568,-.1857,-.6858,.3377
                    ,-.1525,-.409,.2979,-.1594,-.3361,.2017,-.1594,-.3361,.2017,-.1701,-.2717,.1779,-.221,-1.1184,.4853,-.2784,-1.0867,.4249,-.3847,-1.0767,.3267,-.3746,-1.0549,.3568,-.2784,-1.0867,.4249,-.4694,-1.0905,.3045,-.2794,-.6634,.2013,-.3746,-1.0549,.3568,-.2673,-.3833,.0785,-.2057,-.364,.1477,-.2462,-.3861,.1569,-.2462,-.3861,.1569,-.2057,-.364,.1477
                    ,-.2126,-.433,.2054,-.3622,-.7704,.0074,-.4939,-1.0355,-.0141,-.3297,-.8282,-.1729,-.2616,-.3816,-.2378,-.2833,-.3952,-.1153,-.2833,-.3952,-.1153,-.2616,-.3816,-.2378,-.2163,-.3132,-.11,-.2256,-.35,-.0562,-.2163,-.3132,-.11,-.4939,-1.0355,-.0141,-.4369,-.9931,-.0654,-.4792,-1.0695,-.0553,-.3297,-.8282,-.1729,-.4019,-1.0265,-.117,-.4167,-1.0925,-.1143
                    ,-.2339,-.2066,-.0248,-.2339,-.2066,-.0248,-.1682,-.164,.1327,-.1682,-.164,.1327,-.0506,-.1618,.249,-.2044,-.2372,-.2103,-.0506,-.1618,.249,.0151,-.0689,-.055,-.0221,-.0506,-.131,.0077,-.1486,-.2767,.0077,-.1486,-.2767,-.0214,-.1129,-.2805,.0051,-.2761,-.352,-.2253,-.592,-.0752,-.192,-.474,-.1401,-.2289,-.3541,-.1849,-.1499,-.2434,-.3044
                    ,-.2044,-.2372,-.2103,-.1961,-.318,-.2262,-.2084,-.3033,-.1774,-.3023,-.7677,-.3092,-.2794,-.8905,-.2773,-.2794,-.8905,-.2773,-.3904,-1.1184,-.2054,-.4167,-1.0925,-.1143,-.367,-1.1771,-.2204,-.1623,-.399,-.3141,-.1961,-.318,-.2262,-.1961,-.318,-.2262,-.2859,-.5355,-.287,-.2616,-.3816,-.2378,-.1972,-.7871,-.1946,-.2343,-.7006,-.1218,-.2558,-.5579,-.2962
                    ,-.1426,-.3891,-.2653,-.1426,-.3891,-.2653,-.1807,-.9643,-.3167,-.1851,-.8786,-.2013,-.1426,-.3891,-.2653,-.192,-.474,-.1401,-.1407,-.422,-.1774,-.1623,-.399,-.3141,-.1426,-.3891,-.2653,-.1592,-.3365,-.2704,-.1499,-.2434,-.3044,-.0365,-.2119,-.3761,.0051,-.2761,-.352,-.0365,-.2119,-.3761,-.1823,-.9723,-.1974,-.1713,-1.0533,-.2158,.0208,-.0947,.1148
                    ,.0767,-.0923,.1606,.2654,-.6736,-.257,.1924,-.9645,-.3292,.2654,-.6736,-.257,.1924,-.9645,-.3292,-.0506,-.1618,.249,-.032,-.0922,.1642,-.2044,-.2372,-.2103,-.2097,-.4906,-.1018,-.1807,-.9643,-.3167,-.1807,-.9643,-.3167,.148,-.2949,.25,.2049,-.351,.2099,.1487,-.3515,.2722,.2535,-.2889,.095,.2807,-.3439,-.0388,.2709,-.3473,.0995
                    ,.2456,-.2819,-.1639,.2126,-.3367,-.2808,.2572,-.3404,-.1659,.1168,-.3354,-.3452,.0053,-.2749,-.347,.0047,-.3335,-.3643,.0264,-.2974,.2849,.027,-.3524,.3036,.2651,-.2854,-.0367,.2012,-.2783,-.2788,-.1568,-.3508,.222,-.0973,-.2948,.2582,-.0966,-.3514,.2803,-.2491,-.3437,-.0212,-.2129,-.2887,.1106,-.2301,-.3471,.1163,-.1972,-.3365,-.2671
                    ,-.2223,-.2817,-.1483,-.2341,-.3402,-.1495,-.1059,-.3353,-.3377,-.1056,-.2768,-.3297,-.1428,-.2924,.2243,-.2333,-.2852,-.0201,-.1857,-.2781,-.2659,.1911,-.2925,.2132,.1171,-.2769,-.3372
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
                    .2066,-.1611,.9651,.1593,.1599,.9742,.5852,-.4526,.6728,.5665,-.1694,.8065,.572,-.1453,.8072,.12,.4451,.8874,.5522,.4618,.6941,.616,.4077,.674,.2467,.2661,.9318,.3142,.1135,.9425,.0334,.0266,.9991,.2684,.2491,.9305,.0305,.4115,.9109,.6547,.1942,.7304,.6897,.3494,.6341,.645,-.0562,.762,.6243,.2741,.7315
                    ,.6243,.2741,.7315,.8816,.316,.3504,.6897,.3494,.6341,.7871,.3158,.5299,.6243,.2741,.7315,.616,.4077,.674,.758,.3446,.5536,.7383,.5067,.4451,-.0064,-.0007,1,.5852,-.4526,.6728,.3766,-.9126,-.1594,-.0064,-.0007,1,.8708,.4866,-.0707,.7841,.5686,.2486,.9072,.3979,-.1364,.2304,-.7645,.6019,.645,-.0562,.762
                    ,.4539,.2919,.8419,.8577,.5133,-.0292,.9685,.2366,.0776,.9772,.1865,-.1012,.6305,.5054,.589,.9325,.328,.151,.6889,.5699,.4479,.9007,.4151,.1277,.4539,.2919,.8419,.8816,.316,.3504,.6305,.5054,.589,.8816,.316,.3504,.7871,.3158,.5299,.6889,.5699,.4479,.9855,.168,-.0215,.8549,.2279,-.466,.9648,.0875,-.248
                    ,.9137,.3956,-.0928,.9772,.1865,-.1012,.4727,.8132,-.3395,.749,.4774,-.4595,.8785,.4258,-.2167,.8736,.3786,-.3058,.9059,.4141,.0888,.9025,.3778,-.2067,.7918,.2146,-.5717,.769,.3361,-.5436,.7747,.3869,-.5,.7158,.1029,-.6906,.789,.178,-.588,.679,.1344,-.7217,.933,.1718,.3162,.8104,.1619,.563,.7495,.5507,.3673
                    ,.9459,.3227,-.033,.9794,-.0218,-.2007,-.03,.9943,.1019,-.0001,.9999,-.0148,-.221,.9482,-.2279,.6163,.7858,.0513,.7495,.5507,.3673,-.03,.9943,.1019,.012,.9368,.3497,.0683,.8925,.4458,.3227,.5579,.7646,.0683,.8925,.4458,.7495,.5507,.3673,.8104,.1619,.563,.0306,.405,.9138,-.2778,.7955,-.5385,.5264,.6852,-.5033
                    ,.585,.7696,-.2557,.5264,.6852,-.5033,-.1279,.1558,-.9795,.6341,.157,-.7572,-.0239,.6886,-.7248,-.0331,-.1265,-.9914,-.1279,.1558,-.9795,.8788,.2462,-.4087,.585,.7696,-.2557,.9542,.1223,-.2731,.7992,.2859,-.5286,.4848,.2536,-.837,.8137,.2048,-.544,.6755,-.0411,-.7362,.3722,-.0315,-.9276,.6755,-.0411,-.7362,-.6225,.0324,-.7819
                    ,.56,.043,-.8273,.6755,-.0411,-.7362,.0428,-.116,-.9923,.0824,-.0309,-.9961,.6969,.3181,-.6427,.7607,.146,-.6324,-.311,-.1145,-.9435,-.452,.0837,-.8881,.7607,.146,-.6324,.6969,.3181,-.6427,.749,.4774,-.4595,-.452,.0837,-.8881,.7607,.146,-.6324,-.311,-.1145,-.9435,-.9593,-.0132,-.2819,.6969,.3181,-.6427,-.452,.0837,-.8881
                    ,-.9446,-.2301,-.234,-.311,-.1145,-.9435,.3107,.2322,-.9217,.6341,.157,-.7572,.2935,-.5586,-.7757,.3107,.2322,-.9217,-.4742,-.0975,-.875,.6969,.3181,-.6427,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9965,-.0075,-.0831,-.4742,-.0975,-.875,-.1985,-.0617,-.9781,.0319,.3054,.9517,.0683,.8925,.4458,.8816,.316,.3504,.6243,.2741,.7315
                    ,.616,.4077,.674,.758,.3446,.5536,.758,.3446,.5536,.8104,.1619,.563,.5852,-.4526,.6728,.6547,.1942,.7304,.6547,.1942,.7304,.645,-.0562,.762,.4539,.2919,.8419,.8816,.316,.3504,.9007,.4151,.1277,.6889,.5699,.4479,.7383,.5067,.4451,.6889,.5699,.4479,.7871,.3158,.5299,.7383,.5067,.4451,.749,.4774,-.4595
                    ,.749,.4774,-.4595,.749,.4774,-.4595,.585,.7696,-.2557,.6163,.7858,.0513,.6163,.7858,.0513,.6163,.7858,.0513,-.03,.9943,.1019,.7495,.5507,.3673,.0683,.8925,.4458,.7495,.5507,.3673,.8104,.1619,.563,.5264,.6852,-.5033,-.1279,.1558,-.9795,.5264,.6852,-.5033,.585,.7696,-.2557,-.9807,-.182,.0714,-.9267,-.3385,.163
                    ,-.8841,-.0335,.466,.4727,.8132,-.3395,.4727,.8132,-.3395,.6969,.3181,-.6427,.6755,-.0411,-.7362,.56,.043,-.8273,.4881,-.1229,-.8641,-.452,.0837,-.8881,-.452,.0837,-.8881,.749,.4774,-.4595,.7992,.2859,-.5286,.749,.4774,-.4595,.4727,.8132,-.3395,.7607,.146,-.6324,.749,.4774,-.4595,-.9593,-.0132,-.2819,-.9885,.1498,-.019
                    ,-.9031,.2289,-.3634,-.9593,-.0132,-.2819,-.311,-.1145,-.9435,-.9446,-.2301,-.234,-.9593,-.0132,-.2819,-.9446,-.2301,-.234,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9786,.1884,-.082,-.9955,.0652,.0678,-.9446,-.2301,-.234,-.5811,-.7703,-.2627,-.452,.0837,-.8881,.4848,.2536,-.837,.6341,.157,-.7572,-.1279,.1558,-.9795,.2935,-.5586,-.7757
                    ,.2935,-.5586,-.7757,-.1279,.1558,-.9795,-.0331,-.1265,-.9914,-.9593,-.0132,-.2819,-.9886,.1505,-.0041,-.1419,-.161,.9767,-.5394,-.4522,.7103,-.0938,.1599,.9826,-.5116,-.169,.8424,-.517,-.1449,.8436,-.0603,.4452,.8934,-.5694,.4081,.7136,-.5043,.4622,.7294,-.1839,.2662,.9462,-.2506,.1137,.9614,-.2056,.2492,.9463,-.6044,.1947,.7725
                    ,-.5928,-.0557,.8034,-.6456,.3499,.6787,-.5739,.2745,.7715,-.5739,.2745,.7715,-.6456,.3499,.6787,-.8561,.3167,.4084,-.7497,.3164,.5812,-.5739,.2745,.7715,-.5694,.4081,.7136,-.7192,.3452,.603,-.7066,.5072,.4933,.0731,-.0008,.9973,-.5394,-.4522,.7103,.0731,-.0008,.9973,-.3871,-.9123,-.1339,-.8732,.4872,-.0125,-.914,.3986,-.0756
                    ,-.7654,.5692,.3003,-.1904,-.7644,.616,-.3965,.2922,.8703,-.5928,-.0557,.8034,-.8573,.514,.028,-.9816,.1873,-.0358,-.961,.2374,.142,-.9201,.3287,.2128,-.5894,.5059,.6297,-.8899,.4158,.1875,-.6571,.5704,.4928,-.3965,.2922,.8703,-.5894,.5059,.6297,-.8561,.3167,.4084,-.9846,.1687,.0443,-.8839,.2285,-.408,-.9791,.0883,-.1831
                    ,-.8573,.514,.028,-.8899,.4158,.1875,-.9176,.3963,-.0316,-.9816,.1873,-.0358,-.7776,.478,-.4085,-.4937,.8135,-.3073,-.8907,.4264,-.1576,-.8918,.3792,-.2468,-.8976,.4147,.149,-.914,.3785,-.1461,-.8281,.2152,-.5177,-.8839,.2285,-.408,-.8281,.2152,-.5177,-.8061,.3875,-.4473,-.8033,.3367,-.4911,-.8839,.2285,-.408,-.8033,.3367,-.4911
                    ,-.7602,.1035,-.6413,-.7602,.1035,-.6413,-.7255,.135,-.6748,-.8263,.1786,-.5341,-.9097,.1726,.3777,-.723,.5512,.4165,-.7709,.1625,.6158,-.9457,.3234,.0301,-.9906,-.0211,-.1349,.0375,.9943,.0997,.206,.9481,-.2422,-.0001,.9999,-.0148,-.6109,.7863,.0923,-.723,.5512,.4165,.0375,.9943,.0997,-.0001,.9999,-.0148,.012,.9368,.3497
                    ,-.0378,.8926,.4493,.012,.9368,.3497,-.2705,.5582,.7844,-.723,.5512,.4165,-.7709,.1625,.6158,-.2705,.5582,.7844,-.2705,.5582,.7844,.2419,.7953,-.5559,-.6002,.77,-.2162,-.5583,.6856,-.4671,-.683,.1574,-.7132,.0624,.1557,-.9858,.206,.9481,-.2422,.2419,.7953,-.5559,-.0239,.6886,-.7248,-.0331,-.1265,-.9914,.2419,.7953,-.5559
                    ,.0624,.1557,-.9858,-.9039,.2469,-.3492,-.9457,.3234,.0301,-.9702,.1231,-.2088,-.8325,.2865,-.4742,-.9039,.2469,-.3492,-.5394,.254,-.8028,-.683,.1574,-.7132,-.8325,.2865,-.4742,-.848,.2055,-.4886,-.7231,-.0406,-.6895,-.4333,-.0312,-.9007,.569,.032,-.8217,-.7231,-.0406,-.6895,-.7231,-.0406,-.6895,-.6139,.0435,-.7881,-.109,-.116,-.9872
                    ,-.1486,-.0308,-.9884,-.738,.3186,-.5948,.2473,-.1147,-.9621,-.8011,.1466,-.5802,.3919,.0833,-.9162,-.5394,.254,-.8028,-.8325,.2865,-.4742,-.738,.3186,-.5948,-.8011,.1466,-.5802,.3919,.0833,-.9162,-.7776,.478,-.4085,-.8011,.1466,-.5802,.2473,-.1147,-.9621,-.738,.3186,-.5948,.9384,-.0139,-.3453,.3919,.0833,-.9162,.2473,-.1147,-.9621
                    ,.9267,-.2309,-.2965,-.683,.1574,-.7132,-.3713,.2324,-.8989,-.683,.1574,-.7132,-.345,-.5583,-.7544,.4147,-.0978,-.9047,-.738,.3186,-.5948,.9384,-.0139,-.3453,.569,.032,-.8217,.4147,-.0978,-.9047,.9887,-.0083,-.1494,.1328,-.0618,-.9892,-.0378,.8926,.4493,.012,.9368,.3497,-.6456,.3499,.6787,-.5928,-.0557,.8034,-.5739,.2745,.7715
                    ,-.5694,.4081,.7136,-.7192,.3452,.603,-.7192,.3452,.603,-.7709,.1625,.6158,-.5394,-.4522,.7103,-.6044,.1947,.7725,-.1904,-.7644,.616,-.5928,-.0557,.8034,-.6044,.1947,.7725,-.3965,.2922,.8703,-.8561,.3167,.4084,-.5928,-.0557,.8034,-.8899,.4158,.1875,-.7066,.5072,.4933,-.6571,.5704,.4928,-.6571,.5704,.4928,-.7066,.5072,.4933
                    ,-.7497,.3164,.5812,-.914,.3986,-.0756,-.914,.3785,-.1461,-.8839,.2285,-.408,-.7776,.478,-.4085,-.9176,.3963,-.0316,-.9176,.3963,-.0316,-.7776,.478,-.4085,-.9816,.1873,-.0358,-.8573,.514,.028,-.9816,.1873,-.0358,-.914,.3785,-.1461,-.8281,.2152,-.5177,-.8033,.3367,-.4911,-.8839,.2285,-.408,-.7602,.1035,-.6413,-.8263,.1786,-.5341
                    ,-.9457,.3234,.0301,-.9457,.3234,.0301,-.723,.5512,.4165,-.723,.5512,.4165,-.2705,.5582,.7844,-.9039,.2469,-.3492,-.2705,.5582,.7844,-.0001,.9999,-.0148,.206,.9481,-.2422,-.0239,.6886,-.7248,-.0239,.6886,-.7248,.2419,.7953,-.5559,-.0331,-.1265,-.9914,.9831,-.1828,.0059,.9353,-.3392,.1009,-.4937,.8135,-.3073,-.683,.1574,-.7132
                    ,-.9039,.2469,-.3492,-.8325,.2865,-.4742,-.9702,.1231,-.2088,-.738,.3186,-.5948,-.7231,-.0406,-.6895,-.7231,-.0406,-.6895,-.848,.2055,-.4886,-.8263,.1786,-.5341,-.5447,-.1225,-.8296,.3919,.0833,-.9162,-.8325,.2865,-.4742,-.8325,.2865,-.4742,-.8011,.1466,-.5802,-.7776,.478,-.4085,.877,.2282,-.4228,.9852,.149,-.0849,.2473,-.1147,-.9621
                    ,.9267,-.2309,-.2965,.9267,-.2309,-.2965,.569,.032,-.8217,.9711,.1877,-.1471,.9267,-.2309,-.2965,.9353,-.3392,.1009,.5617,-.7707,-.3009,.3919,.0833,-.9162,.9267,-.2309,-.2965,-.5394,.254,-.8028,-.683,.1574,-.7132,.0624,.1557,-.9858,-.0331,-.1265,-.9914,.0624,.1557,-.9858,.9979,.0644,.0013,.9862,.1498,-.07,.012,.9368,.3497
                    ,.0683,.8925,.4458,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.2705,.5582,.7844,-.0378,.8926,.4493,-.9039,.2469,-.3492,.9132,-.0342,.406,.569,.032,-.8217,.569,.032,-.8217,.5124,.2798,.8119,.7869,.2008,.5835,.4698,.3206,.8225,.9167,.2751,.2896,.9634,.2649,-.0408,.9085,.2948,.296
                    ,.948,.1962,-.2506,.7843,.1737,-.5956,.9465,.2059,-.2482,.3425,.1543,-.9267,-.0323,.238,-.9707,-.0319,.2824,-.9588,.0316,.3348,.9417,.0317,.3232,.9458,.9673,.2511,-.0353,.7598,.1646,-.6289,-.7461,.2014,.6347,-.4569,.2802,.8442,-.4136,.3209,.852,-.9638,.2657,.0235,-.8952,.2758,.35,-.8865,.2955,.3559,-.8221,.1743,-.5419
                    ,-.9624,.197,-.1869,-.9608,.2066,-.1845,-.4035,.1545,-.9018,-.406,.1258,-.9052,-.714,.1437,.6852,-.9673,.2518,.0293,-.8,.1653,-.5768,.7582,.1432,.6361,.3448,.1255,-.9302
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

                this.setMaterialByID("Warrior.Multimaterial#1");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 453, 0, 936, this);
                new _B.SubMesh(1, 453, 32, 936, 96, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .1591,3.6803,.4378,.1304,3.7736,.4622,.2859,3.719,.4409,.0955,3.641,.4588,.0589,3.6293,.4869,.101,4.4519,.294,.1679,4.4983,.1978,.2056,4.4285,.2585,.0952,4.5197,.2374,.0957,4.5944,.2432,.0342,3.6303,.5032,.1325,4.1412,.3518,.0271,4.4466,.2817,.3392,3.7506,.3768,.3011,4.0212,.297,.4306,3.7824,.3025,.2412,4.1517,.296
                    ,.2412,4.1517,.296,.3256,4.1739,.1536,.3011,4.0212,.297,.2594,4.4044,.1622,.2412,4.1517,.296,.2056,4.4285,.2585,.2061,4.5013,.162,.2487,4.4734,.105,.2108,3.682,.4404,.2859,3.719,.4409,.2894,3.7252,.414,.2108,3.682,.4404,.5637,3.7862,.099,.5825,3.7555,.1774,.3952,4.0669,-.0453,.4387,3.7606,.2718,.4306,3.7824,.3025
                    ,.5217,3.7467,.2439,.255,4.4874,-.0997,.2623,4.5278,.0103,.2421,4.5242,-.1527,.5661,3.7474,.2244,.3488,4.1453,.0229,.2897,4.4513,.1116,.3056,4.4541,.0319,.5217,3.7467,.2439,.3256,4.1739,.1536,.5661,3.7474,.2244,.3256,4.1739,.1536,.2594,4.4044,.1622,.2897,4.4513,.1116,.3501,4.2313,-.0577,.3507,4.0092,-.223,.3213,4.1536,-.2349
                    ,.3085,4.4422,-.1625,.2421,4.5242,-.1527,.2497,4.4833,-.2284,.2788,4.4557,-.2833,.5751,3.7541,.0698,.5208,3.8129,-.0008,.5039,3.8301,-.0502,.5249,3.8017,-.0756,.4647,3.8441,-.1229,.5075,3.7677,-.1157,.5491,3.7629,-.055,.4263,3.8107,-.1721,.4412,3.7447,-.1704,.526,3.7132,-.0965,.2445,4.5694,.0746,.2153,4.5657,.1376,.2105,4.6735,.0926
                    ,.2654,4.6308,-.0689,.2553,4.5791,-.1498,.0586,4.7931,-.0503,.0151,4.7687,-.0825,.0472,4.787,-.1608,.1838,4.7305,-.0566,.2105,4.6735,.0926,.0586,4.7931,-.0503,.0208,4.7429,.0874,.0767,4.7453,.1331,.1009,4.6757,.2165,.0767,4.7453,.1331,.2105,4.6735,.0926,.2153,4.5657,.1376,.0257,4.6408,.2353,.0365,4.7247,-.3099,.136,4.7021,-.2847
                    ,.1582,4.7357,-.185,.136,4.7021,-.2847,.0451,4.6256,-.4063,.163,4.5941,-.3423,.0077,4.689,-.3041,.0051,4.5615,-.3795,.0451,4.6256,-.4063,.2237,4.6002,-.252,.1582,4.7357,-.185,.2298,4.5341,-.2195,.2142,4.5195,-.2674,.1745,4.501,-.309,.4089,3.7189,-.2595,.2935,3.9469,-.3239,.3286,3.6655,-.3053,.2935,3.9469,-.3239,.1924,3.8731,-.3567
                    ,.3897,3.7202,-.2786,.2935,3.9469,-.3239,.2403,3.7315,-.3338,.2619,3.612,-.3283,.3143,4.0697,-.3573,.2996,4.3019,-.334,.2689,4.2795,-.3412,.1746,4.4384,-.3528,.2996,4.3019,-.334,.3143,4.0697,-.3573,.2788,4.4557,-.2833,.1746,4.4384,-.3528,.2996,4.3019,-.334,.2689,4.2795,-.3412,.2654,4.164,-.2845,.3143,4.0697,-.3573,.1746,4.4384,-.3528
                    ,.1582,4.4484,-.3028,.2689,4.2795,-.3412,.1296,4.5705,-.3595,.163,4.5941,-.3423,.0664,4.5838,-.3603,.1296,4.5705,-.3595,.2078,3.662,-.3126,.3143,4.0697,-.3573,.2654,4.164,-.2845,.1924,3.8731,-.3567,.1909,3.791,-.3034,.2078,3.662,-.3126,.2424,3.6082,-.3264,.0256,4.511,.2363,.0767,4.7453,.1331,.3256,4.1739,.1536,.2412,4.1517,.296
                    ,.2056,4.4285,.2585,.2061,4.5013,.162,.2061,4.5013,.162,.2153,4.5657,.1376,.2859,3.719,.4409,.3392,3.7506,.3768,.3392,3.7506,.3768,.4306,3.7824,.3025,.5217,3.7467,.2439,.3256,4.1739,.1536,.3056,4.4541,.0319,.2897,4.4513,.1116,.2487,4.4734,.105,.2897,4.4513,.1116,.2594,4.4044,.1622,.2487,4.4734,.105,.2788,4.4557,-.2833
                    ,.2788,4.4557,-.2833,.2788,4.4557,-.2833,.1582,4.7357,-.185,.1838,4.7305,-.0566,.1838,4.7305,-.0566,.1838,4.7305,-.0566,.0586,4.7931,-.0503,.2105,4.6735,.0926,.0767,4.7453,.1331,.2105,4.6735,.0926,.2153,4.5657,.1376,.136,4.7021,-.2847,.0451,4.6256,-.4063,.136,4.7021,-.2847,.1582,4.7357,-.185,.2532,4.2455,-.1187,.2158,4.3635,-.1812
                    ,.236,4.3468,-.1441,.2497,4.4833,-.2284,.2497,4.4833,-.2284,.3143,4.0697,-.3573,.2935,3.9469,-.3239,.3897,3.7202,-.2786,.3845,3.6602,-.273,.1746,4.4384,-.3528,.1746,4.4384,-.3528,.2788,4.4557,-.2833,.2142,4.5195,-.2674,.2788,4.4557,-.2833,.2497,4.4833,-.2284,.2996,4.3019,-.334,.2788,4.4557,-.2833,.2654,4.164,-.2845,.259,4.1368,-.1657
                    ,.2171,4.0503,-.2359,.2654,4.164,-.2845,.2689,4.2795,-.3412,.1582,4.4484,-.3028,.2654,4.164,-.2845,.1582,4.4484,-.3028,.2654,4.164,-.2845,.1924,3.8731,-.3567,.2045,3.9588,-.2417,.2019,3.8651,-.2377,.1582,4.4484,-.3028,.1622,4.4154,-.2149,.1746,4.4384,-.3528,.1745,4.501,-.309,.163,4.5941,-.3423,.0451,4.6256,-.4063,.0664,4.5838,-.3603
                    ,.0664,4.5838,-.3603,.0451,4.6256,-.4063,.0051,4.5615,-.3795,.2654,4.164,-.2845,.1897,3.7841,-.2553,-.0947,3.6804,.4462,-.221,3.7192,.4578,-.0643,3.7737,.4687,-.0299,3.641,.463,.0086,3.6293,.4886,-.0457,4.452,.2989,-.1525,4.4286,.2704,-.1189,4.4984,.2074,-.0437,4.5197,.2421,-.0437,4.5945,.2478,-.0735,4.1412,.3587,-.2784,3.7509,.3974
                    ,-.3746,3.7827,.3294,-.2455,4.0214,.3152,-.1857,4.1518,.3103,-.1857,4.1518,.3103,-.2455,4.0214,.3152,-.2794,4.1742,.1738,-.2126,4.4046,.178,-.1857,4.1518,.3103,-.1525,4.4286,.2704,-.1594,4.5015,.1742,-.2057,4.4736,.1202,-.1461,3.6822,.4523,-.221,3.7192,.4578,-.1461,3.6822,.4523,-.2263,3.7254,.4313,-.5209,3.7866,.1352,-.3622,4.0672,-.02
                    ,-.5344,3.7559,.2147,-.3847,3.7609,.2993,-.4694,3.7471,.277,-.3746,3.7827,.3294,-.2256,4.4876,-.0837,-.2163,4.5244,-.1374,-.2255,4.5279,.0265,-.3113,4.1456,.0449,-.515,3.7478,.2605,-.2673,4.4543,.0511,-.2462,4.4515,.1295,-.4694,3.7471,.277,-.515,3.7478,.2605,-.2794,4.1742,.1738,-.3179,4.2315,-.0354,-.3297,4.0094,-.2003,-.301,4.1538,-.2141
                    ,-.2256,4.4876,-.0837,-.2673,4.4543,.0511,-.2833,4.4424,-.1428,-.2163,4.5244,-.1374,-.2616,4.4559,-.2653,-.2289,4.4835,-.2124,-.5343,3.7545,.1068,-.4847,3.8133,.0327,-.4712,3.8305,-.0177,-.4939,3.8021,-.0416,-.4369,3.8445,-.0928,-.3297,4.0094,-.2003,-.4369,3.8445,-.0928,-.5166,3.7633,-.0195,-.4792,3.7681,-.0827,-.3297,4.0094,-.2003,-.4792,3.7681,-.0827
                    ,-.4019,3.8111,-.1445,-.4019,3.8111,-.1445,-.4964,3.7136,-.0624,-.4167,3.7451,-.1418,-.2034,4.5696,.0895,-.1682,4.6736,.1053,-.1701,4.5659,.1505,-.2339,4.631,-.0523,-.2292,4.5793,-.1337,-.0261,4.7931,-.0475,-.0221,4.787,-.1584,.0151,4.7687,-.0825,-.1515,4.7306,-.0454,-.1682,4.6736,.1053,-.0261,4.7931,-.0475,.0151,4.7687,-.0825,.0208,4.7429,.0874
                    ,-.032,4.7454,.1367,.0208,4.7429,.0874,-.0506,4.6758,.2215,-.1682,4.6736,.1053,-.1701,4.5659,.1505,-.0506,4.6758,.2215,-.0506,4.6758,.2215,-.0214,4.7247,-.3079,-.1346,4.7358,-.1752,-.119,4.7022,-.2762,-.1499,4.5942,-.3319,-.0365,4.6257,-.4036,-.0221,4.787,-.1584,-.0214,4.7247,-.3079,.0077,4.689,-.3041,.0051,4.5615,-.3795,-.0214,4.7247,-.3079
                    ,-.0365,4.6257,-.4036,-.2044,4.6004,-.2377,-.2339,4.631,-.0523,-.2084,4.5343,-.2049,-.1961,4.5196,-.2537,-.2044,4.6004,-.2377,-.1592,4.5011,-.2978,-.1499,4.5942,-.3319,-.1961,4.5196,-.2537,-.3904,3.7192,-.2328,-.2794,3.9471,-.3048,-.3134,3.6657,-.2839,-.1807,3.8732,-.3442,-.2794,3.9471,-.3048,-.2794,3.9471,-.3048,-.3725,3.7204,-.2531,-.2271,3.7317,-.3182
                    ,-.2484,3.6122,-.3112,-.3023,4.0699,-.3367,-.2558,4.2797,-.3236,-.2859,4.3021,-.3145,-.1623,4.4386,-.3416,-.1592,4.5011,-.2978,-.1961,4.5196,-.2537,-.3023,4.0699,-.3367,-.2859,4.3021,-.3145,-.1623,4.4386,-.3416,-.2616,4.4559,-.2653,-.2859,4.3021,-.3145,-.2558,4.2797,-.3236,-.3023,4.0699,-.3367,-.2486,4.1642,-.2673,-.1623,4.4386,-.3416,-.2558,4.2797,-.3236
                    ,-.1426,4.4485,-.2928,-.1499,4.5942,-.3319,-.1177,4.5706,-.3513,-.1499,4.5942,-.3319,-.0547,4.5839,-.3562,-.1933,3.6621,-.2992,-.3023,4.0699,-.3367,-.2486,4.1642,-.2673,-.1807,3.8732,-.3442,-.1933,3.6621,-.2992,-.1758,3.7911,-.2911,-.2288,3.6084,-.3107,-.032,4.7454,.1367,.0208,4.7429,.0874,-.2455,4.0214,.3152,-.3746,3.7827,.3294,-.1857,4.1518,.3103
                    ,-.1525,4.4286,.2704,-.1594,4.5015,.1742,-.1594,4.5015,.1742,-.1701,4.5659,.1505,-.221,3.7192,.4578,-.2784,3.7509,.3974,-.3847,3.7609,.2993,-.3746,3.7827,.3294,-.2784,3.7509,.3974,-.4694,3.7471,.277,-.2794,4.1742,.1738,-.3746,3.7827,.3294,-.2673,4.4543,.0511,-.2057,4.4736,.1202,-.2462,4.4515,.1295,-.2462,4.4515,.1295,-.2057,4.4736,.1202
                    ,-.2126,4.4046,.178,-.3622,4.0672,-.02,-.4939,3.8021,-.0416,-.3297,4.0094,-.2003,-.2616,4.4559,-.2653,-.2833,4.4424,-.1428,-.2833,4.4424,-.1428,-.2616,4.4559,-.2653,-.2163,4.5244,-.1374,-.2256,4.4876,-.0837,-.2163,4.5244,-.1374,-.4939,3.8021,-.0416,-.4369,3.8445,-.0928,-.4792,3.7681,-.0827,-.3297,4.0094,-.2003,-.4019,3.8111,-.1445,-.4167,3.7451,-.1418
                    ,-.2339,4.631,-.0523,-.2339,4.631,-.0523,-.1682,4.6736,.1053,-.1682,4.6736,.1053,-.0506,4.6758,.2215,-.2044,4.6004,-.2377,-.0506,4.6758,.2215,.0151,4.7687,-.0825,-.0221,4.787,-.1584,.0077,4.689,-.3041,.0077,4.689,-.3041,-.0214,4.7247,-.3079,.0051,4.5615,-.3795,-.2253,4.2456,-.1027,-.192,4.3636,-.1676,-.2289,4.4835,-.2124,-.1499,4.5942,-.3319
                    ,-.2044,4.6004,-.2377,-.1961,4.5196,-.2537,-.2084,4.5343,-.2049,-.3023,4.0699,-.3367,-.2794,3.9471,-.3048,-.2794,3.9471,-.3048,-.3904,3.7192,-.2328,-.4167,3.7451,-.1418,-.367,3.6605,-.2479,-.1623,4.4386,-.3416,-.1961,4.5196,-.2537,-.1961,4.5196,-.2537,-.2859,4.3021,-.3145,-.2616,4.4559,-.2653,-.1972,4.0504,-.2221,-.2343,4.137,-.1492,-.2558,4.2797,-.3236
                    ,-.1426,4.4485,-.2928,-.1426,4.4485,-.2928,-.1807,3.8732,-.3442,-.1851,3.959,-.2287,-.1426,4.4485,-.2928,-.192,4.3636,-.1676,-.1407,4.4155,-.2048,-.1623,4.4386,-.3416,-.1426,4.4485,-.2928,-.1592,4.5011,-.2978,-.1499,4.5942,-.3319,-.0365,4.6257,-.4036,.0051,4.5615,-.3795,-.0365,4.6257,-.4036,-.1823,3.8653,-.2248,-.1713,3.7843,-.2432,.0208,4.7429,.0874
                    ,.0767,4.7453,.1331,.2654,4.164,-.2845,.1924,3.8731,-.3567,.2654,4.164,-.2845,.1924,3.8731,-.3567,-.0506,4.6758,.2215,-.032,4.7454,.1367,-.2044,4.6004,-.2377,-.2097,4.347,-.1292,-.1807,3.8732,-.3442,-.1807,3.8732,-.3442,.148,4.5426,.2226,.2049,4.4866,.1825,.1487,4.4861,.2447,.2535,4.5487,.0676,.2807,4.4937,-.0663,.2709,4.4903,.0721
                    ,.2456,4.5557,-.1914,.2126,4.5009,-.3083,.2572,4.4972,-.1934,.1171,4.5607,-.3646,.0047,4.5041,-.3917,.1166,4.4902,-.3768,.0264,4.5402,.2574,.027,4.4851,.2762,.2651,4.5522,-.0642,-.1568,4.4868,.1946,-.0973,4.5427,.2307,-.0966,4.4862,.2529,-.2491,4.4939,-.0486,-.2129,4.5489,.0831,-.2301,4.4905,.0888,-.1972,4.501,-.2946,-.2223,4.5559,-.1758
                    ,-.2341,4.4974,-.177,-.1056,4.5608,-.3572,-.106,4.4903,-.3694,-.1428,4.5452,.1968,-.2333,4.5523,-.0475,-.1857,4.5595,-.2934,-.0377,4.4823,-.384,.0045,4.4834,-.3974,.0475,4.4823,-.3868,-.0255,4.3738,-.402,.0039,4.3747,-.4138,.034,4.3738,-.404,.1911,4.5451,.1857,.2012,4.5593,-.3063,.0053,4.5627,-.3745
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
                    .2066,-.1611,.9651,.1593,.1599,.9742,.5852,-.4526,.6728,.5665,-.1694,.8065,.572,-.1453,.8072,.12,.4451,.8874,.5522,.4618,.6941,.616,.4077,.674,.2467,.2661,.9318,.3142,.1135,.9425,.0334,.0266,.9991,.2684,.2491,.9305,.0305,.4115,.9109,.6547,.1942,.7304,.6897,.3494,.6341,.645,-.0562,.762,.6243,.2741,.7315
                    ,.6243,.2741,.7315,.8816,.316,.3504,.6897,.3494,.6341,.7871,.3158,.5299,.6243,.2741,.7315,.616,.4077,.674,.758,.3446,.5536,.7383,.5067,.4451,-.0064,-.0007,1,.5852,-.4526,.6728,.3766,-.9126,-.1594,-.0064,-.0007,1,.8708,.4866,-.0707,.7841,.5686,.2486,.9072,.3979,-.1364,.2304,-.7645,.6019,.645,-.0562,.762
                    ,.4539,.2919,.8419,.8577,.5133,-.0292,.9685,.2366,.0776,.9772,.1865,-.1012,.6305,.5054,.589,.9325,.328,.151,.6889,.5699,.4479,.9007,.4151,.1277,.4539,.2919,.8419,.8816,.316,.3504,.6305,.5054,.589,.8816,.316,.3504,.7871,.3158,.5299,.6889,.5699,.4479,.9855,.168,-.0215,.8549,.2279,-.466,.9648,.0875,-.248
                    ,.9137,.3956,-.0928,.9772,.1865,-.1012,.4727,.8132,-.3395,.749,.4774,-.4595,.8785,.4258,-.2167,.8736,.3786,-.3058,.9059,.4141,.0888,.9025,.3778,-.2067,.7918,.2146,-.5717,.769,.3361,-.5436,.7747,.3869,-.5,.7158,.1029,-.6906,.789,.178,-.588,.679,.1344,-.7217,.933,.1718,.3162,.8104,.1619,.563,.7495,.5507,.3673
                    ,.9459,.3227,-.033,.9794,-.0218,-.2007,-.03,.9943,.1019,-.0001,.9999,-.0148,-.221,.9482,-.2279,.6163,.7858,.0513,.7495,.5507,.3673,-.03,.9943,.1019,.012,.9368,.3497,.0683,.8925,.4458,.3227,.5579,.7646,.0683,.8925,.4458,.7495,.5507,.3673,.8104,.1619,.563,.0306,.405,.9138,-.2778,.7955,-.5385,.5264,.6852,-.5033
                    ,.585,.7696,-.2557,.5264,.6852,-.5033,-.1279,.1558,-.9795,.6341,.157,-.7572,-.0239,.6886,-.7248,-.0331,-.1265,-.9914,-.1279,.1558,-.9795,.8788,.2462,-.4087,.585,.7696,-.2557,.9542,.1223,-.2731,.7992,.2859,-.5286,.4848,.2536,-.837,.8137,.2048,-.544,.6755,-.0411,-.7362,.3722,-.0315,-.9276,.6755,-.0411,-.7362,-.6225,.0324,-.7819
                    ,.56,.043,-.8273,.6755,-.0411,-.7362,.0428,-.116,-.9923,.0824,-.0309,-.9961,.6969,.3181,-.6427,.7607,.146,-.6324,-.311,-.1145,-.9435,-.452,.0837,-.8881,.7607,.146,-.6324,.6969,.3181,-.6427,.749,.4774,-.4595,-.452,.0837,-.8881,.7607,.146,-.6324,-.311,-.1145,-.9435,-.9593,-.0132,-.2819,.6969,.3181,-.6427,-.452,.0837,-.8881
                    ,-.9446,-.2301,-.234,-.311,-.1145,-.9435,.3107,.2322,-.9217,.6341,.157,-.7572,.2935,-.5586,-.7757,.3107,.2322,-.9217,-.4742,-.0975,-.875,.6969,.3181,-.6427,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9965,-.0075,-.0831,-.4742,-.0975,-.875,-.1985,-.0617,-.9781,.0319,.3054,.9517,.0683,.8925,.4458,.8816,.316,.3504,.6243,.2741,.7315
                    ,.616,.4077,.674,.758,.3446,.5536,.758,.3446,.5536,.8104,.1619,.563,.5852,-.4526,.6728,.6547,.1942,.7304,.6547,.1942,.7304,.645,-.0562,.762,.4539,.2919,.8419,.8816,.316,.3504,.9007,.4151,.1277,.6889,.5699,.4479,.7383,.5067,.4451,.6889,.5699,.4479,.7871,.3158,.5299,.7383,.5067,.4451,.749,.4774,-.4595
                    ,.749,.4774,-.4595,.749,.4774,-.4595,.585,.7696,-.2557,.6163,.7858,.0513,.6163,.7858,.0513,.6163,.7858,.0513,-.03,.9943,.1019,.7495,.5507,.3673,.0683,.8925,.4458,.7495,.5507,.3673,.8104,.1619,.563,.5264,.6852,-.5033,-.1279,.1558,-.9795,.5264,.6852,-.5033,.585,.7696,-.2557,-.9807,-.182,.0714,-.9267,-.3385,.163
                    ,-.8841,-.0335,.466,.4727,.8132,-.3395,.4727,.8132,-.3395,.6969,.3181,-.6427,.6755,-.0411,-.7362,.56,.043,-.8273,.4881,-.1229,-.8641,-.452,.0837,-.8881,-.452,.0837,-.8881,.749,.4774,-.4595,.7992,.2859,-.5286,.749,.4774,-.4595,.4727,.8132,-.3395,.7607,.146,-.6324,.749,.4774,-.4595,-.9593,-.0132,-.2819,-.9885,.1498,-.019
                    ,-.9031,.2289,-.3634,-.9593,-.0132,-.2819,-.311,-.1145,-.9435,-.9446,-.2301,-.234,-.9593,-.0132,-.2819,-.9446,-.2301,-.234,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9786,.1884,-.082,-.9955,.0652,.0678,-.9446,-.2301,-.234,-.5811,-.7703,-.2627,-.452,.0837,-.8881,.4848,.2536,-.837,.6341,.157,-.7572,-.1279,.1558,-.9795,.2935,-.5586,-.7757
                    ,.2935,-.5586,-.7757,-.1279,.1558,-.9795,-.0331,-.1265,-.9914,-.9593,-.0132,-.2819,-.9886,.1505,-.0041,-.1419,-.161,.9767,-.5394,-.4522,.7103,-.0938,.1599,.9826,-.5116,-.169,.8424,-.517,-.1449,.8436,-.0603,.4452,.8934,-.5694,.4081,.7136,-.5043,.4622,.7294,-.1839,.2662,.9462,-.2506,.1137,.9614,-.2056,.2492,.9463,-.6044,.1947,.7725
                    ,-.5928,-.0557,.8034,-.6456,.3499,.6787,-.5739,.2745,.7715,-.5739,.2745,.7715,-.6456,.3499,.6787,-.8561,.3167,.4084,-.7497,.3164,.5812,-.5739,.2745,.7715,-.5694,.4081,.7136,-.7192,.3452,.603,-.7066,.5072,.4933,.0731,-.0008,.9973,-.5394,-.4522,.7103,.0731,-.0008,.9973,-.3871,-.9123,-.1339,-.8732,.4872,-.0125,-.914,.3986,-.0756
                    ,-.7654,.5692,.3003,-.1904,-.7644,.616,-.3965,.2922,.8703,-.5928,-.0557,.8034,-.8573,.514,.028,-.9816,.1873,-.0358,-.961,.2374,.142,-.9201,.3287,.2128,-.5894,.5059,.6297,-.8899,.4158,.1875,-.6571,.5704,.4928,-.3965,.2922,.8703,-.5894,.5059,.6297,-.8561,.3167,.4084,-.9846,.1687,.0443,-.8839,.2285,-.408,-.9791,.0883,-.1831
                    ,-.8573,.514,.028,-.8899,.4158,.1875,-.9176,.3963,-.0316,-.9816,.1873,-.0358,-.7776,.478,-.4085,-.4937,.8135,-.3073,-.8907,.4264,-.1576,-.8918,.3792,-.2468,-.8976,.4147,.149,-.914,.3785,-.1461,-.8281,.2152,-.5177,-.8839,.2285,-.408,-.8281,.2152,-.5177,-.8061,.3875,-.4473,-.8033,.3367,-.4911,-.8839,.2285,-.408,-.8033,.3367,-.4911
                    ,-.7602,.1035,-.6413,-.7602,.1035,-.6413,-.7255,.135,-.6748,-.8263,.1786,-.5341,-.9097,.1726,.3777,-.723,.5512,.4165,-.7709,.1625,.6158,-.9457,.3234,.0301,-.9906,-.0211,-.1349,.0375,.9943,.0997,.206,.9481,-.2422,-.0001,.9999,-.0148,-.6109,.7863,.0923,-.723,.5512,.4165,.0375,.9943,.0997,-.0001,.9999,-.0148,.012,.9368,.3497
                    ,-.0378,.8926,.4493,.012,.9368,.3497,-.2705,.5582,.7844,-.723,.5512,.4165,-.7709,.1625,.6158,-.2705,.5582,.7844,-.2705,.5582,.7844,.2419,.7953,-.5559,-.6002,.77,-.2162,-.5583,.6856,-.4671,-.683,.1574,-.7132,.0624,.1557,-.9858,.206,.9481,-.2422,.2419,.7953,-.5559,-.0239,.6886,-.7248,-.0331,-.1265,-.9914,.2419,.7953,-.5559
                    ,.0624,.1557,-.9858,-.9039,.2469,-.3492,-.9457,.3234,.0301,-.9702,.1231,-.2088,-.8325,.2865,-.4742,-.9039,.2469,-.3492,-.5394,.254,-.8028,-.683,.1574,-.7132,-.8325,.2865,-.4742,-.848,.2055,-.4886,-.7231,-.0406,-.6895,-.4333,-.0312,-.9007,.569,.032,-.8217,-.7231,-.0406,-.6895,-.7231,-.0406,-.6895,-.6139,.0435,-.7881,-.109,-.116,-.9872
                    ,-.1486,-.0308,-.9884,-.738,.3186,-.5948,.2473,-.1147,-.9621,-.8011,.1466,-.5802,.3919,.0833,-.9162,-.5394,.254,-.8028,-.8325,.2865,-.4742,-.738,.3186,-.5948,-.8011,.1466,-.5802,.3919,.0833,-.9162,-.7776,.478,-.4085,-.8011,.1466,-.5802,.2473,-.1147,-.9621,-.738,.3186,-.5948,.9384,-.0139,-.3453,.3919,.0833,-.9162,.2473,-.1147,-.9621
                    ,.9267,-.2309,-.2965,-.683,.1574,-.7132,-.3713,.2324,-.8989,-.683,.1574,-.7132,-.345,-.5583,-.7544,.4147,-.0978,-.9047,-.738,.3186,-.5948,.9384,-.0139,-.3453,.569,.032,-.8217,.4147,-.0978,-.9047,.9887,-.0083,-.1494,.1328,-.0618,-.9892,-.0378,.8926,.4493,.012,.9368,.3497,-.6456,.3499,.6787,-.5928,-.0557,.8034,-.5739,.2745,.7715
                    ,-.5694,.4081,.7136,-.7192,.3452,.603,-.7192,.3452,.603,-.7709,.1625,.6158,-.5394,-.4522,.7103,-.6044,.1947,.7725,-.1904,-.7644,.616,-.5928,-.0557,.8034,-.6044,.1947,.7725,-.3965,.2922,.8703,-.8561,.3167,.4084,-.5928,-.0557,.8034,-.8899,.4158,.1875,-.7066,.5072,.4933,-.6571,.5704,.4928,-.6571,.5704,.4928,-.7066,.5072,.4933
                    ,-.7497,.3164,.5812,-.914,.3986,-.0756,-.914,.3785,-.1461,-.8839,.2285,-.408,-.7776,.478,-.4085,-.9176,.3963,-.0316,-.9176,.3963,-.0316,-.7776,.478,-.4085,-.9816,.1873,-.0358,-.8573,.514,.028,-.9816,.1873,-.0358,-.914,.3785,-.1461,-.8281,.2152,-.5177,-.8033,.3367,-.4911,-.8839,.2285,-.408,-.7602,.1035,-.6413,-.8263,.1786,-.5341
                    ,-.9457,.3234,.0301,-.9457,.3234,.0301,-.723,.5512,.4165,-.723,.5512,.4165,-.2705,.5582,.7844,-.9039,.2469,-.3492,-.2705,.5582,.7844,-.0001,.9999,-.0148,.206,.9481,-.2422,-.0239,.6886,-.7248,-.0239,.6886,-.7248,.2419,.7953,-.5559,-.0331,-.1265,-.9914,.9831,-.1828,.0059,.9353,-.3392,.1009,-.4937,.8135,-.3073,-.683,.1574,-.7132
                    ,-.9039,.2469,-.3492,-.8325,.2865,-.4742,-.9702,.1231,-.2088,-.738,.3186,-.5948,-.7231,-.0406,-.6895,-.7231,-.0406,-.6895,-.848,.2055,-.4886,-.8263,.1786,-.5341,-.5447,-.1225,-.8296,.3919,.0833,-.9162,-.8325,.2865,-.4742,-.8325,.2865,-.4742,-.8011,.1466,-.5802,-.7776,.478,-.4085,.877,.2282,-.4228,.9852,.149,-.0849,.2473,-.1147,-.9621
                    ,.9267,-.2309,-.2965,.9267,-.2309,-.2965,.569,.032,-.8217,.9711,.1877,-.1471,.9267,-.2309,-.2965,.9353,-.3392,.1009,.5617,-.7707,-.3009,.3919,.0833,-.9162,.9267,-.2309,-.2965,-.5394,.254,-.8028,-.683,.1574,-.7132,.0624,.1557,-.9858,-.0331,-.1265,-.9914,.0624,.1557,-.9858,.9979,.0644,.0013,.9862,.1498,-.07,.012,.9368,.3497
                    ,.0683,.8925,.4458,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.9593,-.0132,-.2819,-.6225,.0324,-.7819,-.2705,.5582,.7844,-.0378,.8926,.4493,-.9039,.2469,-.3492,.9132,-.0342,.406,.569,.032,-.8217,.569,.032,-.8217,.5124,.2798,.8119,.7869,.2008,.5835,.4698,.3206,.8225,.9167,.2751,.2896,.9634,.2649,-.0408,.9085,.2948,.296
                    ,.948,.1962,-.2506,.7819,.1731,-.5988,.9465,.2059,-.2482,.3647,.174,-.9147,-.0323,.2302,-.9726,.3432,.1484,-.9275,.0316,.3348,.9417,.0317,.3232,.9458,.9673,.2511,-.0353,-.7461,.2014,.6347,-.4569,.2802,.8442,-.4136,.3209,.852,-.9638,.2657,.0235,-.8952,.2758,.35,-.8865,.2955,.3559,-.82,.1737,-.5453,-.9624,.197,-.1869
                    ,-.9608,.2066,-.1845,-.4248,.1744,-.8883,-.4042,.1486,-.9025,-.714,.1437,.6852,-.9673,.2518,.0293,-.8027,.1705,-.5715,-.247,.0935,-.9645,-.0326,.1982,-.9796,.1823,.0933,-.9788,-.3548,.1361,-.925,-.0329,.1486,-.9883,.2925,.1359,-.9466,.7582,.1432,.6361,.7629,.17,-.6237,-.0319,.2824,-.9588
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

                this.setMaterialByID("Warrior.Multimaterial#2");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 453, 0, 936, this);
                new _B.SubMesh(1, 453, 38, 936, 120, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Helm.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(5);
        };
        return Helm;
    })(QI.Mesh);
    Warrior.Helm = Helm;

    var Sword = (function (_super) {
        __extends(Sword, _super);
        function Sword(name, scene, materialsRootDir, source) {
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -1.0651,2.2298,.1065,-1.9789,2.3355,-1.4942,-1.0439,2.1299,.0974,-1.0543,2.0672,.0858,-2.0001,2.331,-1.4824,-1.0691,2.1247,.1115,-1.9995,2.2982,-1.5194,-2.2033,2.4669,-1.7952,-1.0823,2.2262,.116,-2.1821,2.4714,-1.807,-1.9995,2.2982,-1.5194,-1.0543,2.0672,.0858,-1.1052,2.1173,.1305,-1.0673,1.9921,.1514,-1.1,1.9991,.0955,-1.1223,2.218,.1376,-1.0828,2.2095,.205
                    ,-1.078,2.1628,.1962,-1.0188,2.059,.1463,-1.0673,1.9921,.1514,-1.0725,2.1104,.1864,-1.0077,2.1377,.076,-.975,2.1308,.1319,-.9806,2.1851,.1421,-1.0025,2.0195,.041,-1.0193,1.995,.1215,-.9698,2.0125,.0969,-.9698,2.0125,.0969,-1.0193,1.995,.1215,-1.0502,2.0662,.0928,-1.1,1.9991,.0955,-1.0507,2.0021,.068,-1.0025,2.0195,.041,-1.0077,2.1377,.076
                    ,-.8483,2.1213,.5436,-.7821,2.0069,.547,-.8195,2.1287,.5256,-1.0307,2.1739,.1679,-.975,2.1308,.1319,-1.078,2.1628,.1962,-.7408,2.0195,.5272,-.7475,1.9993,.606,-.7062,2.0119,.5862,-.8523,2.1577,.6099,-.821,1.9945,.571,-.7889,2.1358,.5107,-.7434,2.1805,.5491,-.7834,2.183,.5134,-.8177,2.1503,.6689,-.739,2.1166,.6939,-.7865,1.9869,.63
                    ,-.7275,2.1195,.6868,-.7089,2.173,.6081,-.7275,2.1195,.6868,-.7427,2.1522,.7006,-.7312,2.1547,.6934,-.7153,2.1224,.6808,-.719,2.1572,.6873,-.7153,2.1224,.6808,-.719,2.1572,.6873,-.7153,2.1224,.6808,-1.0077,2.1377,.076,-1.0543,2.0672,.0858,-1.0691,2.1247,.1115,-1.1223,2.218,.1376,-1.1052,2.1173,.1305,-1.0691,2.1247,.1115,-1.1052,2.1173,.1305
                    ,-1.0247,2.2384,.0831,-1.0439,2.1299,.0974,-1.0077,2.1377,.076,-1.9986,2.5239,-1.4589,-1.0878,2.3876,.1458,-2.0198,2.5195,-1.4471,-2.0272,2.5629,-1.4699,-2.268,2.4854,-1.9298,-1.0898,2.323,.1486,-2.0272,2.5629,-1.4699,-1.0878,2.3876,.1458,-1.0646,2.3283,.1345,-1.1259,2.3157,.1677,-1.1131,2.43,.2334,-1.0932,2.3085,.2235,-1.0877,2.2562,.2137,-1.1131,2.43,.2334
                    ,-1.0524,2.3805,.2065,-1.0932,2.3085,.2235,-.99,2.2746,.1589,-1.0284,2.3361,.1132,-1.0247,2.2384,.0831,-1.0666,2.4477,.2062,-1.0482,2.4575,.123,-1.0155,2.4504,.1789,-1.1458,2.4371,.1775,-1.0979,2.454,.1526,-1.0155,2.4504,.1789,-.9957,2.3289,.169,-1.0837,2.3869,.1529,-1.1458,2.4371,.1775,-1.1259,2.3157,.1677,-1.0482,2.4575,.123,-1.0284,2.3361,.1132
                    ,-.9957,2.3289,.169,-.816,2.3318,.6078,-.8582,2.2155,.5613,-.8291,2.221,.5429,-1.0403,2.2655,.1851,-.99,2.2746,.1589,-1.0932,2.3085,.2235,-1.0877,2.2562,.2137,-.7738,2.3357,.5864,-.7815,2.3245,.6669,-.8635,2.1663,.5582,-.7983,2.2259,.5276,-.7464,2.1878,.7073,-.8212,2.3195,.6923,-.8557,2.3268,.6332,-.7349,2.19,.6999,-.7226,2.1919,.6938
                    ,-.7226,2.1919,.6938,-.7393,2.3284,.6455,-.7226,2.1919,.6938,-1.0284,2.3361,.1132,-1.0878,2.3876,.1458,-1.0646,2.3283,.1345,-1.1223,2.218,.1376,-1.0898,2.323,.1486,-1.1259,2.3157,.1677,-1.0898,2.323,.1486,-1.0878,2.3876,.1458,-1.0646,2.3283,.1345,-1.0651,2.2298,.1065,-1.0013,2.2294,.1438,-.7919,2.2129,.549,-1.0202,2.2621,.1589,-.7919,2.2129,.549
                    ,-1.0552,2.2638,.1796,-1.0202,2.2621,.1589,-.8269,2.2146,.5697,-1.0799,2.2333,.1902,-1.0552,2.2638,.1796,-1.0799,2.2333,.1902,-.8474,2.1444,.5729,-1.0757,2.1936,.1828,-1.0757,2.1936,.1828,-.8176,2.1253,.553,-1.0458,2.1745,.1629,-.7845,2.1413,.5356,-.8176,2.1253,.553,-.8516,2.1841,.5803,-.8176,2.1253,.553,-1.0127,2.1905,.1455,-1.0458,2.1745,.1629
                    ,-.7845,2.1413,.5356,-1.0013,2.2294,.1438,-1.0127,2.1905,.1455,-1.0202,2.2621,.1589,-1.0799,2.2333,.1902,-1.0458,2.1745,.1629,-.99,2.2746,.1589,-.9853,2.2299,.1505,-1.0828,2.2095,.205,-.8635,2.1663,.5582,-.7834,2.183,.5134,-.8291,2.221,.5429,-2.268,2.4854,-1.9298,-1.9995,2.2982,-1.5194,-1.9995,2.2982,-1.5194,-1.0543,2.0672,.0858,-1.0725,2.1104,.1864
                    ,-1.0725,2.1104,.1864,-1.0193,1.995,.1215,-1.0673,1.9921,.1514,-.9853,2.2299,.1505,-1.0247,2.2384,.0831,-1.0247,2.2384,.0831,-1.0507,2.0021,.068,-1.0507,2.0021,.068,-.975,2.1308,.1319,-.9698,2.0125,.0969,-1.1052,2.1173,.1305,-1.1,1.9991,.0955,-1.0025,2.0195,.041,-.9806,2.1851,.1421,-.975,2.1308,.1319,-.7427,2.1522,.7006,-.7275,2.1195,.6868
                    ,-.739,2.1166,.6939,-.7275,2.1195,.6868,-.7153,2.1224,.6808,-.7153,2.1224,.6808,-1.0077,2.1377,.076,-1.0439,2.1299,.0974,-1.0543,2.0672,.0858,-1.0691,2.1247,.1115,-1.0823,2.2262,.116,-1.1223,2.218,.1376,-1.0543,2.0672,.0858,-1.0691,2.1247,.1115,-1.0651,2.2298,.1065,-1.0439,2.1299,.0974,-2.0272,2.5629,-1.4699,-2.268,2.4854,-1.9298,-1.0878,2.3876,.1458
                    ,-2.0272,2.5629,-1.4699,-1.1131,2.43,.2334,-1.0666,2.4477,.2062,-1.0247,2.2384,.0831,-.9853,2.2299,.1505,-.9957,2.3289,.169,-1.0666,2.4477,.2062,-1.0155,2.4504,.1789,-1.0979,2.454,.1526,-1.1458,2.4371,.1775,-1.0482,2.4575,.123,-1.0979,2.454,.1526,-1.0932,2.3085,.2235,-.7427,2.1522,.7006,-.7349,2.19,.6999,-.7464,2.1878,.7073,-.719,2.1572,.6873
                    ,-.7226,2.1919,.6938,-.7226,2.1919,.6938,-.7349,2.19,.6999,-1.0284,2.3361,.1132,-1.0878,2.3876,.1458,-1.1223,2.218,.1376,-1.0823,2.2262,.116,-1.0898,2.323,.1486,-1.1259,2.3157,.1677,-1.0898,2.323,.1486,-1.0284,2.3361,.1132,-1.0646,2.3283,.1345,-.773,2.1802,.5339,-.7919,2.2129,.549,-.8269,2.2146,.5697,-.8516,2.1841,.5803,-1.0799,2.2333,.1902
                    ,-.8516,2.1841,.5803,-1.0757,2.1936,.1828,-.8474,2.1444,.5729,-.8269,2.2146,.5697,-.7919,2.2129,.549,-.773,2.1802,.5339,-.773,2.1802,.5339,-.8176,2.1253,.553,-.8474,2.1444,.5729,-.8269,2.2146,.5697,-.773,2.1802,.5339,-.8176,2.1253,.553,-.7845,2.1413,.5356,-.7845,2.1413,.5356,-.773,2.1802,.5339,-1.0013,2.2294,.1438,-1.0127,2.1905,.1455
                    ,-1.0013,2.2294,.1438,-1.0458,2.1745,.1629,-1.0202,2.2621,.1589,-1.0552,2.2638,.1796,-1.0799,2.2333,.1902,-1.0799,2.2333,.1902,-1.0757,2.1936,.1828,-1.0458,2.1745,.1629,-1.0458,2.1745,.1629,-1.0013,2.2294,.1438,-1.0202,2.2621,.1589,-.9806,2.1851,.1421,-1.078,2.1628,.1962,-1.0828,2.2095,.205,-1.0877,2.2562,.2137,-1.0828,2.2095,.205,-.7889,2.1358,.5107
                    ,-.7834,2.183,.5134,-.8195,2.1287,.5256,-.7983,2.2259,.5276,-.8291,2.221,.5429,-.7834,2.183,.5134,-.8582,2.2155,.5613,-.8635,2.1663,.5582,-.8291,2.221,.5429,-.8483,2.1213,.5436,-.8195,2.1287,.5256,-.8635,2.1663,.5582,-.7834,2.183,.5134,-.8635,2.1663,.5582,-.8195,2.1287,.5256
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(552);
                _i.set([0,1,2,3,4,5,6,7,4,4,8,5,9,10,1,1,11,2]);
                CONTIG(_i, 18, 12, 26);
                _i.set([25,14,13,18,27,28,29,30,31,29,32,33,21,26,22,34,35,36,37,38,18,37,20,39,40,41,42,34,43,44,45,46,47,45,35,40,48,49,50,41,49,51,44,41,35,44,48,50,40,52
                ,46,53,54,55,56,55,57,52,58,59,41,60,42,61,62,29,63,64,65,29,66,67,68,69,70,0,71,9,72,73,74,74,7,75,8,73,76,77,9,71,78,71,79,80,81,82,83,15,80,84
                ,85,86,87,88,89,90,91,92,90,93,94,85,95,96,97,98,99,100,97,101,92,88,102,103,104,105,106,96,107,108,106,109,110,111,103,104,43,112,46,113,47,113,103,105,114,48,115,111,114,115
                ,111,116,103,116,48,43,52,110,46,54,117,55,55,118,57,52,119,120,121,111,120,122,123,124,125,126,127,97,128,129,68], 33);
                CONTIG(_i, 214, 130, 158);
                _i.set([106,159,160,106,37,161,162,163,164,0,9,1,3,6,4,6,75,7,4,7,8,9,165,166,1,167,168,12,169,13,17,170,12,12,15,17,18,171,172,23,173,174,175,21,23,24,176,25,25,177
                ,14,18,178,179,29,180,181,29,31,182,21,24,26,34,44,35,37,183,184,37,18,20,40,35,41,34,112,43,45,40,46,45,36,35,48,185,49,41,50,49,44,50,41,44,43,48,40,42,52,186
                ,187,54,56,188,55,52,42,189,41,51,190,191,192,193,194,195,196,29,197,198,68,199,200,0,79,71,72,76,73,74,73,7,8,7,73,201,202,9,203,204,71,80,93,81,80,82,83,83,16,15
                ,205,206,85,207,208,87,87,209,88,90,94,91,90,81,93,85,210,211,97,212,213,214,215,97,92,91,88,103,116,104,106,85,96,216,85,106,110,120,111,104,116,43,46,110,113,113,110,103,114,217
                ,48,111,218,114,111,115,116,116,115,48,52,120,110,54,219,117,55,117,118,52,220,221,222,223,111,224,97,225,226,227,228,97,229,230,68,231,232,132,233,133,234,235,136,138,236,139,237,238,142,239
                ,240,145,241,242,243,244,147,149,245,246,149,149,247,248,249,250,151], 243);
                CONTIG(_i, 510, 251, 265);
                _i.set([160,266,37,37,106,160,267,268,37,269,106], 525);
                CONTIG(_i, 536, 270, 285);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .3019,.2058,-.9308,.8574,.0305,-.5137,.159,.1466,-.9763,-.1612,-.9343,-.3179,-.8401,-.3244,.4347,-.9213,-.1398,-.3629,.0196,-.9474,-.3194,-.8938,-.171,.4145,-.974,-.0609,-.2181,.8189,.1871,-.5425,.0196,-.9474,-.3194,-.1612,-.9343,-.3179,-.9632,-.0778,-.2571,-.2075,-.7313,.6497,-.7784,-.5108,-.3649,-.9491,-.0407,-.3124,-.2369,-.2026,.9501
                    ,-.2369,-.2026,.9501,.5096,-.2191,.832,-.2075,-.7313,.6497,-.2314,-.2223,.9471,.2797,.1904,-.941,.9591,.0264,.2816,.9582,.0473,.282,.2265,-.302,-.926,.3792,-.8516,.362,.8591,-.509,.0535,.8591,-.509,.0535,.3792,-.8516,.362,-.5406,-.0337,-.8406,-.7784,-.5108,-.3649,-.3088,-.5676,-.7632,.2265,-.302,-.926,.2797,.1904,-.941
                    ,-.8283,-.1902,-.5269,-.1406,-.7314,-.6673,-.4682,-.0801,-.88,.5024,-.1085,.8578,.9591,.0264,.2816,-.2369,-.2026,.9501,.3756,-.4849,-.7898,.4072,-.8806,.242,.8101,-.5858,-.0245,-.9381,-.1559,.3091,-.629,-.7395,-.2398,.023,-.0123,-.9996,.7481,.1968,-.6337,.1748,.1988,-.9643,-.6655,-.204,.7179,.1527,-.341,.9275,-.1707,-.836,.5214
                    ,.5179,-.3342,.7874,.9706,.1383,-.197,.5179,-.3342,.7874,.0949,-.1736,.9802,.5019,-.1082,.8581,.8016,-.2017,.5628,.8164,-.0227,.577,.8016,-.2017,.5628,.8164,-.0227,.577,.8016,-.2017,.5628,.2797,.1904,-.941,-.1612,-.9343,-.3179,-.9213,-.1398,-.3629,-.9491,-.0407,-.3124,-.9632,-.0778,-.2571,-.9213,-.1398,-.3629,-.9632,-.0778,-.2571
                    ,.2061,.2008,-.9577,.159,.1466,-.9763,.2797,.1904,-.941,.8264,.3273,-.4581,-.3564,.9338,.0319,-.8711,-.0276,.4903,-.182,.9824,.0419,-.502,.1082,-.858,-.9435,.0734,-.3229,-.182,.9824,.0419,-.3564,.9338,.0319,.1485,.2476,-.9574,-.9683,-.0293,-.2481,-.325,.393,.8602,-.2355,-.1826,.9545,-.2369,-.2026,.9501,-.325,.393,.8602
                    ,.4863,.0038,.8737,-.2355,-.1826,.9545,.9582,.0473,.282,.2767,.2192,-.9356,.2061,.2008,-.9577,.2147,.7228,.6568,.1268,.6522,-.7473,.7415,.6167,.2643,-.8779,.441,-.1867,-.4442,.7293,-.5204,.7415,.6167,.2643,.9549,.0667,.2892,-.5675,.2237,-.7924,-.8779,.441,-.1867,-.9683,-.0293,-.2481,.1268,.6522,-.7473,.2767,.2192,-.9356
                    ,.9549,.0667,.2892,-.3087,.8779,-.3659,-.8688,.1966,-.4545,-.5073,.2946,-.8098,.5023,-.1078,.8579,.9582,.0473,.282,-.2355,-.1826,.9545,-.2369,-.2026,.9501,.2413,.8001,-.5491,.2318,.7979,.5564,-.9383,-.0335,-.3443,-.0173,.3737,-.9274,.1161,.0094,.9932,-.3147,.5417,.7794,-.7725,.6347,.0175,.4698,.1264,.8737,.7656,.1426,.6272
                    ,.7656,.1426,.6272,.6752,.7049,.2171,.7656,.1426,.6272,.2767,.2192,-.9356,-.3564,.9338,.0319,.1485,.2476,-.9574,-.9491,-.0407,-.3124,-.9435,.0734,-.3229,-.9683,-.0293,-.2481,-.9435,.0734,-.3229,-.3564,.9338,.0319,.1485,.2476,-.9574,.3019,.2058,-.9308,.361,.2079,-.9091,.6689,.6195,.4108,.0451,.754,-.6553,.6689,.6195,.4108
                    ,-.5397,.7829,-.3095,.0451,.754,-.6553,.0841,.6484,.7566,-.9529,.2729,-.132,-.5397,.7829,-.3095,-.9529,.2729,-.132,-.2597,-.5264,.8096,-.8835,-.392,-.2565,-.8835,-.392,-.2565,.2402,-.8455,.4768,-.3836,-.7111,-.5893,.7941,-.5785,.1864,.2402,-.8455,.4768,-.3291,.1384,.934,.2402,-.8455,.4768,.1702,-.4441,-.8796,-.3836,-.7111,-.5893
                    ,.7941,-.5785,.1864,.361,.2079,-.9091,.1702,-.4441,-.8796,.0451,.754,-.6553,-.9529,.2729,-.132,-.3836,-.7111,-.5893,.9582,.0473,.282,.9582,.0473,.282,-.2369,-.2026,.9501,-.9383,-.0335,-.3443,.1748,.1988,-.9643,-.5073,.2946,-.8098,-.502,.1082,-.858,.0196,-.9474,-.3194,.0196,-.9474,-.3194,-.1612,-.9343,-.3179,-.2314,-.2223,.9471
                    ,-.2314,-.2223,.9471,.3792,-.8516,.362,-.2075,-.7313,.6497,.9582,.0473,.282,.2061,.2008,-.9577,.2061,.2008,-.9577,-.3088,-.5676,-.7632,-.3088,-.5676,-.7632,.9591,.0264,.2816,.8591,-.509,.0535,-.9632,-.0778,-.2571,-.7784,-.5108,-.3649,.2265,-.302,-.926,.9582,.0473,.282,.9591,.0264,.2816,.0949,-.1736,.9802,.5179,-.3342,.7874
                    ,.1527,-.341,.9275,.5179,-.3342,.7874,.8016,-.2017,.5628,.8016,-.2017,.5628,.2797,.1904,-.941,.159,.1466,-.9763,-.1612,-.9343,-.3179,-.9213,-.1398,-.3629,-.974,-.0609,-.2181,-.9491,-.0407,-.3124,-.1612,-.9343,-.3179,-.9213,-.1398,-.3629,.3019,.2058,-.9308,.159,.1466,-.9763,-.182,.9824,.0419,-.502,.1082,-.858,-.3564,.9338,.0319
                    ,-.182,.9824,.0419,-.325,.393,.8602,.2147,.7228,.6568,.2061,.2008,-.9577,.9582,.0473,.282,.9549,.0667,.2892,.2147,.7228,.6568,.7415,.6167,.2643,-.4442,.7293,-.5204,-.8779,.441,-.1867,.1268,.6522,-.7473,-.4442,.7293,-.5204,-.2355,-.1826,.9545,.0949,-.1736,.9802,.4698,.1264,.8737,.1161,.0094,.9932,.8164,-.0227,.577
                    ,.7656,.1426,.6272,.7656,.1426,.6272,.4698,.1264,.8737,.2767,.2192,-.9356,-.3564,.9338,.0319,-.9491,-.0407,-.3124,-.974,-.0609,-.2181,-.9435,.0734,-.3229,-.9683,-.0293,-.2481,-.9435,.0734,-.3229,.2767,.2192,-.9356,.1485,.2476,-.9574,.9848,.0735,.157,.6689,.6195,.4108,.0841,.6484,.7566,-.3291,.1384,.934,-.9529,.2729,-.132
                    ,-.3291,.1384,.934,-.8835,-.392,-.2565,-.2597,-.5264,.8096,.0841,.6484,.7566,.6689,.6195,.4108,.9848,.0735,.157,.9848,.0735,.157,.2402,-.8455,.4768,-.2597,-.5264,.8096,.0841,.6484,.7566,.9848,.0735,.157,.2402,-.8455,.4768,.7941,-.5785,.1864,.7941,-.5785,.1864,.9848,.0735,.157,.361,.2079,-.9091,.1702,-.4441,-.8796
                    ,.361,.2079,-.9091,-.3836,-.7111,-.5893,.0451,.754,-.6553,-.5397,.7829,-.3095,-.9529,.2729,-.132,-.9529,.2729,-.132,-.8835,-.392,-.2565,-.3836,-.7111,-.5893,-.3836,-.7111,-.5893,.361,.2079,-.9091,.0451,.754,-.6553,.9582,.0473,.282,-.2369,-.2026,.9501,-.2369,-.2026,.9501,-.2369,-.2026,.9501,-.2369,-.2026,.9501,.023,-.0123,-.9996
                    ,.1748,.1988,-.9643,-.4682,-.0801,-.88,-.0173,.3737,-.9274,-.5073,.2946,-.8098,.1748,.1988,-.9643,-.8688,.1966,-.4545,-.9383,-.0335,-.3443,-.5073,.2946,-.8098,-.8283,-.1902,-.5269,-.4682,-.0801,-.88,-.9383,-.0335,-.3443,.1748,.1988,-.9643,-.9383,-.0335,-.3443,-.4682,-.0801,-.88
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .0691,.0059,.0287,.7771,.0266,.0002,.2762,.0037,.2477,.7771,.2498,.0002,.2643,.7888,.2073,.937,.2073,.0059,.0691,.937,.0121,.7888,.0002,.0037,.6581,.6588,.7223,.566,.776,.5866,.5432,.6904,.5368,.6058,.5854,.5983,.7062,.9165,.7701,.9757,.6399,.9758,.6383,.4195,.6279,.4887,.5756,.4877,.76,.4682
                    ,.7233,.5327,.7124,.4998,.7701,.8558,.7784,.9165,.7049,.7888,.7758,.7418,.7759,.7918,.7717,.8428,.6473,.8532,.6351,.4023,.5174,.2201,.704,.3137,.5824,.9165,.6399,.8558,.5834,.9758,.5178,.2179,.5148,.2188,.5152,.2173,.4755,.2781,.5158,.2217,.7393,.2073,.5333,.1627,.5987,.0322,.5024,.2244,.5087,.2167
                    ,.5139,.2201,.509,.216,.5116,.2061,.8253,.2612,.8088,.2386,.8185,.236,.8349,.2583,.8282,.2334,.5093,.2154,.5074,.2143,.5093,.2154,.6473,.8532,.688,.7881,.6492,.7661,.5346,.71,.6526,.7212,.6492,.7661,.6526,.7212,.5287,.8548,.6475,.8068,.6473,.8532,.1095,.7771,.1384,.0037,.1669,.7771,.1503,.7888
                    ,.2073,.9998,.1648,.0002,.1261,.7888,.138,.0037,.1116,.0002,.4267,.6755,.3506,.5946,.4363,.6054,.487,.6061,.2957,.9757,.3596,.9165,.4259,.9758,.4809,.4942,.4075,.4326,.5227,.4031,.3364,.5606,.2829,.4986,.3404,.5222,.2997,.629,.2805,.5673,.2957,.8558,.4259,.8558,.3584,.7746,.2916,.7221,.4161,.7115
                    ,.2874,.8231,.4106,.8436,.4272,.5031,.4969,.2099,.2805,.2246,.3102,.1164,.4835,.9165,.4846,.8558,.4259,.9758,.4825,.9758,.4984,.2081,.4994,.2111,.4132,.4023,.3743,.0244,.5048,.2147,.4989,.2126,.4966,.212,.8117,.2108,.8214,.2085,.5055,.2135,.5004,.2099,.5055,.2135,.4106,.8436,.3754,.7753,.4142,.7973
                    ,.5346,.71,.4158,.7566,.4161,.7115,.4158,.7566,.3754,.7753,.4142,.7973,.5309,.8016,.8893,.9548,.9307,.4914,.9307,.9548,.9316,.0272,.973,.4905,.9316,.4905,.9316,.4914,.973,.9548,.9316,.9548,.8046,.8099,.8461,.3465,.8461,.8099,.8893,.4905,.9307,.0272,.9307,.4905,.8071,.2043,.781,.2182,.7463,.178
                    ,.847,.0272,.8884,.4905,.847,.4905,.847,.4914,.8884,.9548,.847,.9548,.7406,.093,.7928,.1027,.7717,.1514,.4846,.8558,.5329,.8558,.5329,.9758,.7775,.0464,.7117,.0623,.7366,.0211,.0691,.9998,.0121,.7888,.0121,.7888,.0002,.0037,.6361,.5893,.6361,.5893,.7784,.9165,.7701,.9757,.5279,.4877,.5227,.4031
                    ,.5227,.4031,.776,.5262,.776,.5262,.6399,.8558,.7701,.8558,.6526,.7212,.7758,.7418,.7717,.8428,.5812,.8558,.6399,.8558,.5067,.2158,.8253,.2612,.8157,.2641,.8253,.2612,.5093,.2154,.5093,.2154,.6473,.8532,.6475,.8068,.688,.7881,.6492,.7661,.5325,.7618,.5346,.71,.688,.7881,.6492,.7661,.5309,.8016
                    ,.6475,.8068,.1261,.7888,.0691,.9998,.138,.0037,.1261,.7888,.2957,.9757,.2874,.9165,.5227,.4031,.5279,.4877,.4272,.5031,.2874,.9165,.2957,.8558,.2874,.7718,.2916,.7221,.2874,.8231,.2874,.7718,.4259,.9758,.5067,.2158,.5051,.2141,.8019,.2132,.5074,.2143,.5055,.2135,.5055,.2135,.5051,.2141,.4106,.8436
                    ,.3754,.7753,.5346,.71,.5325,.7618,.4158,.7566,.4161,.7115,.4158,.7566,.4106,.8436,.4142,.7973,.8893,.4914,.9316,.0272,.973,.0272,.973,.4914,.8046,.8099,.8046,.3465,.8893,.4905,.8893,.0272,.7637,.1542,.7932,.1531,.8124,.1753,.8124,.1753,.781,.2182,.754,.2065,.7637,.1542,.8124,.1753,.847,.0272
                    ,.8884,.0272,.847,.4914,.8884,.4914,.8884,.9548,.7427,.146,.7288,.12,.7717,.1514,.7406,.093,.769,.0853,.7928,.1027,.7928,.1027,.7939,.1321,.7717,.1514,.7717,.1514,.7288,.12,.7406,.093,.5812,.8558,.5834,.9758,.5329,.9758,.4825,.9758,.5329,.9758,.728,.0928,.7117,.0623,.7527,.0876,.7122,.0278
                    ,.7366,.0211,.7117,.0623,.7609,.0145,.7775,.0464,.7366,.0211,.7773,.0823,.7527,.0876,.7775,.0464,.7117,.0623,.7775,.0464,.7527,.0876
                ]),
                false);

                _i = new Float32Array(1144);
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
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(286);
                REPEAT(_i, 0, 286, 25);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.short_sword");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 286, 0, 552, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Sword.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(6);
        };
        return Sword;
    })(QI.Mesh);
    Warrior.Sword = Sword;

    var Axe = (function (_super) {
        __extends(Axe, _super);
        function Axe(name, scene, materialsRootDir, source) {
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.7384,2.1019,.7633,-.7814,2.0935,.6729,-.8093,2.1568,.6972,-.7188,2.0576,.7463,-.7327,2.0866,.6435,-.7814,2.0935,.6729,-.7327,2.0866,.6435,-.6617,2.0911,.7171,-.6999,2.1413,.6313,-.6999,2.1413,.6313,-.6672,2.1437,.727,-.7077,2.2164,.6453,-.7077,2.2164,.6453,-.697,2.171,.7478,-.7503,2.2553,.6751,-.7384,2.1019,.7633,-.6672,2.1437,.727
                    ,-.6617,2.0911,.7171,-.697,2.171,.7478,-.7955,2.2288,.6982,-.7503,2.2553,.6751,-.7287,2.1524,.764,-.8093,2.1568,.6972,-.7955,2.2288,.6982,-1.8075,2.3802,-1.0414,-1.7116,2.4365,-1.0904,-1.8404,2.4547,-1.0127,-1.417,2.4298,-.3378,-1.6413,2.4145,-.6714,-1.625,2.4993,-.6702,-1.1422,2.2993,.097,-1.431,2.3569,-.3388,-1.3712,2.4567,-.3612,-1.625,2.4993,-.6702
                    ,-1.5718,2.5305,-.6974,-1.1008,2.3236,.0758,-1.417,2.4298,-.3378,-1.5217,2.4847,-.7325,-1.3712,2.4567,-.3612,-1.5718,2.5305,-.6974,-1.3281,2.4173,-.3914,-1.1008,2.3236,.0758,-1.3712,2.4567,-.3612,-1.5125,2.3963,-.7491,-1.3281,2.4173,-.3914,-1.5217,2.4847,-.7325,-1.3202,2.3412,-.4056,-1.0619,2.2879,.0485,-1.3281,2.4173,-.3914,-1.551,2.3319,-.7346,-1.3202,2.3412,-.4056
                    ,-1.5125,2.3963,-.7491,-1.3534,2.2858,-.3932,-1.0547,2.2192,.0357,-1.3202,2.3412,-.4056,-1.4027,2.2928,-.3634,-1.551,2.3319,-.7346,-1.6084,2.34,-.7,-1.1293,2.1754,.0738,-1.3534,2.2858,-.3932,-1.431,2.3569,-.3388,-1.6084,2.34,-.7,-1.6413,2.4145,-.6714,-1.1549,2.2333,.0961,-1.4027,2.2928,-.3634,-1.431,2.3569,-.3388,-.8093,2.1568,.6972,-1.1549,2.2333,.0961
                    ,-1.1422,2.2993,.097,-.7077,2.2164,.6453,-1.1008,2.3236,.0758,-1.0619,2.2879,.0485,-1.0547,2.2192,.0357,-1.0847,2.1691,.0469,-.7814,2.0935,.6729,-1.0847,2.1691,.0469,-1.1293,2.1754,.0738,-1.8404,2.4547,-1.0127,-1.6084,2.34,-.7,-1.8075,2.3802,-1.0414,-1.8075,2.3802,-1.0414,-1.551,2.3319,-.7346,-1.7502,2.3721,-1.076,-1.7116,2.4365,-1.0904,-1.7502,2.3721,-1.076
                    ,-1.7208,2.5248,-1.0739,-1.7116,2.4365,-1.0904,-1.7709,2.5707,-1.0388,-1.7208,2.5248,-1.0739,-1.7709,2.5707,-1.0388,-1.625,2.4993,-.6702,-1.8241,2.5395,-1.0116,-1.8241,2.5395,-1.0116,-1.8404,2.4547,-1.0127,-.7188,2.0576,.7463,-.6847,2.0528,.7257,-.7327,2.0866,.6435,-.6847,2.0528,.7257,-.6999,2.1413,.6313,-.6617,2.0911,.7171,-.7077,2.2164,.6453,-.6672,2.1437,.727
                    ,-.6847,2.0528,.7257,-.7188,2.0576,.7463,-.6617,2.0911,.7171,-.7384,2.1019,.7633,-.7287,2.1524,.764,-.6672,2.1437,.727,-.697,2.171,.7478,-.6672,2.1437,.727,-.7287,2.1524,.764,-.6617,2.0911,.7171,-.7188,2.0576,.7463,-.7384,2.1019,.7633,-.697,2.171,.7478,-.7287,2.1524,.764,-.7384,2.1019,.7633,-.8093,2.1568,.6972,-1.8241,2.5395,-1.0116
                    ,-1.7208,2.5248,-1.0739,-1.7502,2.3721,-1.076,-1.7208,2.5248,-1.0739,-1.7709,2.5707,-1.0388,-1.8241,2.5395,-1.0116,-1.7208,2.5248,-1.0739,-1.1549,2.2333,.0961,-1.417,2.4298,-.3378,-1.625,2.4993,-.6702,-1.1422,2.2993,.097,-1.417,2.4298,-.3378,-1.3712,2.4567,-.3612,-1.0619,2.2879,.0485,-1.1008,2.3236,.0758,-1.3281,2.4173,-.3914,-1.0547,2.2192,.0357,-1.3202,2.3412,-.4056
                    ,-1.3534,2.2858,-.3932,-1.551,2.3319,-.7346,-1.0847,2.1691,.0469,-1.3534,2.2858,-.3932,-1.431,2.3569,-.3388,-1.4027,2.2928,-.3634,-1.6084,2.34,-.7,-1.1293,2.1754,.0738,-1.4027,2.2928,-.3634,-.7955,2.2288,.6982,-.8093,2.1568,.6972,-.7503,2.2553,.6751,-.7077,2.2164,.6453,-1.1008,2.3236,.0758,-1.0547,2.2192,.0357,-.6999,2.1413,.6313,-.7327,2.0866,.6435
                    ,-.7814,2.0935,.6729,-1.0847,2.1691,.0469,-1.1293,2.1754,.0738,-1.8404,2.4547,-1.0127,-1.6413,2.4145,-.6714,-1.6084,2.34,-.7,-1.8075,2.3802,-1.0414,-1.551,2.3319,-.7346,-1.5125,2.3963,-.7491,-1.7116,2.4365,-1.0904,-1.5217,2.4847,-.7325,-1.5718,2.5305,-.6974,-1.7709,2.5707,-1.0388,-1.625,2.4993,-.6702,-1.8241,2.5395,-1.0116,-1.8165,2.3168,-.9856,-1.722,2.5737,-.7205
                    ,-1.8461,2.6004,-.9325,-1.7403,2.1316,-1.0535,-1.6924,2.2901,-.7736,-1.766,2.6172,-.9772,-1.6419,2.5905,-.7652,-1.7361,2.3317,-1.0307,-1.7157,2.1357,-1.0674,-1.6121,2.3047,-.8188,-1.5244,2.0851,-.6845,-1.4998,2.0898,-.6983,-1.5618,2.6072,-.81,-1.6562,2.3503,-1.0751,-1.6859,2.6339,-1.022,-1.5322,2.3236,-.8631,-1.6913,2.1418,-1.0809,-1.4754,2.0953,-.7119,-1.7067,2.0499,-1.0835
                    ,-1.5244,2.0851,-.6845,-1.7403,2.1316,-1.0535,-1.4998,2.0898,-.6983,-1.4769,2.0004,-.6907,-1.7157,2.1357,-1.0674,-1.4754,2.0953,-.7119,-1.6913,2.1418,-1.0809
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(348);
                CONTIG(_i, 0, 0, 31);
                _i.set([27,32,33,34,35,36,32], 32);
                CONTIG(_i, 39, 37, 59);
                _i.set([55,60,61,62,63,64,65,30,66,67,35,19,68,69,70,71,72,11,47,73,8,53,74,75,58,2,76,63,77,78,79,80,81,82,49,83,84,43,85,86,37,87,88,89,90,91,92,28,93,0
                ,94,1,3,95,4,96,97,7,98,99,10,100,101,13], 62);
                CONTIG(_i, 126, 102, 115);
                _i.set([19,21,116,117,118,26,119,24,120,25,25,121,26,122,123,124,27,31,28,30,125,31,32,126,127,35,128,129,37,40,130,40,131,132,43,46,133,46,134,47,49,52,135,52,73,53,55,136,137,58
                ,138,139,140,141,142,63,143,144,30,145,146,35,147,19,148,14,149,150,151,11,73,152,8,153,4,154,2,1,155,156,157,158,159,57,160,49,161,162,43,163,85,37,164,87,165,34,166,167,29,28
                ,168,169,170,171,172,168,169,173,170,172,174,169,171,175,176,177,178,179,168,173,175,180,181,182,183,184,181,173,180,182,174,183,180,184,175,181,177,185,183,173,181,175,168,172,169,171,178,172,169,174
                ,173,172,177,174,171,168,175,177,172,178,168,170,173,180,183,181,183,185,184,173,174,180,174,177,183,184,176,175,177,179,185,173,182,181,186,187,188,189,187,190,191,186,188,192,186,193,189,190,192,191
                ,193,186,186,190,187,192,190,186], 140);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.262,-.2749,.925,-.5771,-.7977,.1749,-.8011,-.1483,.5798,-.104,-.7766,.6213,.2791,-.8711,-.4041,-.5771,-.7977,.1749,.2791,-.8711,-.4041,.9487,-.2821,.1426,.86,-.1464,-.4887,.86,-.1464,-.4887,.9102,.1993,.3631,.8276,.5257,-.1964,.8276,.5257,-.1964,.5143,.4634,.7215,.2507,.9207,.2989,-.262,-.2749,.925,.9102,.1993,.3631
                    ,.9487,-.2821,.1426,.5143,.4634,.7215,-.5033,.5589,.659,.2507,.9207,.2989,-.0446,.2044,.9778,-.8011,-.1483,.5798,-.5033,.5589,.659,-.7205,-.5858,-.3711,.3303,-.0774,-.9407,-.9812,-.07,-.18,-.6203,.5729,.5357,-.8524,-.1759,.4924,-.652,.5802,.4881,-.6522,.5609,.5098,-.8489,-.1728,.4994,.1762,.9734,.1462,-.652,.5802,.4881
                    ,.1397,.9867,.0829,.1643,.9807,.1064,-.6203,.5729,.5357,.7711,.5243,-.361,.1762,.9734,.1462,.1397,.9867,.0829,.7856,.5223,-.3316,.1643,.9807,.1064,.1762,.9734,.1462,.8423,-.1832,-.5068,.7856,.5223,-.3316,.7711,.5243,-.361,.8347,-.176,-.5219,.7814,.5061,-.3649,.7856,.5223,-.3316,.3238,-.8968,-.3014,.8347,-.176,-.5219
                    ,.8423,-.1832,-.5068,.2957,-.8874,-.3536,.8225,-.1974,-.5334,.8347,-.176,-.5219,-.5489,-.8178,.1727,.3238,-.8968,-.3014,-.5238,-.8265,.2063,-.5372,-.8287,.1567,.2957,-.8874,-.3536,-.8489,-.1728,.4994,-.5238,-.8265,.2063,-.8524,-.1759,.4924,-.8571,-.1932,.4774,-.5489,-.8178,.1727,-.8489,-.1728,.4994,-.8011,-.1483,.5798,-.8571,-.1932,.4774
                    ,-.6522,.5609,.5098,.8276,.5257,-.1964,.1643,.9807,.1064,.7814,.5061,-.3649,.8225,-.1974,-.5334,.2874,-.8914,-.3505,-.5771,-.7977,.1749,.2874,-.8914,-.3505,-.5372,-.8287,.1567,-.9812,-.07,-.18,-.5238,-.8265,.2063,-.7205,-.5858,-.3711,-.7205,-.5858,-.3711,.3238,-.8968,-.3014,-.045,-.6521,-.7567,.3303,-.0774,-.9407,-.045,-.6521,-.7567
                    ,.2715,.4707,-.8394,.3303,-.0774,-.9407,-.2049,.8533,-.4795,.2715,.4707,-.8394,-.2049,.8533,-.4795,-.652,.5802,.4881,-.8375,.52,-.1678,-.8375,.52,-.1678,-.9812,-.07,-.18,-.104,-.7766,.6213,.5157,-.8324,.2028,.2791,-.8711,-.4041,.5157,-.8324,.2028,.86,-.1464,-.4887,.9487,-.2821,.1426,.8276,.5257,-.1964,.9102,.1993,.3631
                    ,.5157,-.8324,.2028,-.104,-.7766,.6213,.9487,-.2821,.1426,-.262,-.2749,.925,-.0446,.2044,.9778,.9102,.1993,.3631,.5143,.4634,.7215,.9102,.1993,.3631,-.0446,.2044,.9778,.9487,-.2821,.1426,-.104,-.7766,.6213,-.262,-.2749,.925,.5143,.4634,.7215,-.0446,.2044,.9778,-.262,-.2749,.925,-.8011,-.1483,.5798,-.8375,.52,-.1678
                    ,.2715,.4707,-.8394,-.045,-.6521,-.7567,.2715,.4707,-.8394,-.2049,.8533,-.4795,-.8375,.52,-.1678,.2715,.4707,-.8394,-.8571,-.1932,.4774,-.6203,.5729,.5357,-.652,.5802,.4881,-.6522,.5609,.5098,-.6203,.5729,.5357,.1762,.9734,.1462,.7814,.5061,-.3649,.1643,.9807,.1064,.7856,.5223,-.3316,.8225,-.1974,-.5334,.8347,-.176,-.5219
                    ,.2957,-.8874,-.3536,.3238,-.8968,-.3014,.2874,-.8914,-.3505,.2957,-.8874,-.3536,-.8489,-.1728,.4994,-.5489,-.8178,.1727,-.5238,-.8265,.2063,-.5372,-.8287,.1567,-.5489,-.8178,.1727,-.5033,.5589,.659,-.8011,-.1483,.5798,.2507,.9207,.2989,.8276,.5257,-.1964,.1643,.9807,.1064,.8225,-.1974,-.5334,.86,-.1464,-.4887,.2791,-.8711,-.4041
                    ,-.5771,-.7977,.1749,.2874,-.8914,-.3505,-.5372,-.8287,.1567,-.9812,-.07,-.18,-.8524,-.1759,.4924,-.5238,-.8265,.2063,-.7205,-.5858,-.3711,.3238,-.8968,-.3014,.8423,-.1832,-.5068,.3303,-.0774,-.9407,.7711,.5243,-.361,.1397,.9867,.0829,-.2049,.8533,-.4795,-.652,.5802,.4881,-.8375,.52,-.1678,.9535,.1701,.2488,.2649,-.3984,-.8781
                    ,.8446,-.5233,.1126,.911,.256,.3233,.426,.1676,-.889,.4272,-.7679,.4772,-.2828,-.6149,-.7362,.502,-.1082,.858,.502,-.1082,.858,-.4295,-.2581,-.8654,.2723,-.0054,-.9622,-.3844,-.3933,-.8352,-.7267,-.6057,-.324,-.3002,-.092,.9494,-.147,-.7306,.6667,-.9868,-.1278,-.0996,-.2452,.0143,.9694,-.9207,-.2548,-.2956,.187,.7621,.6198
                    ,.2723,-.0054,-.9622,.911,.256,.3233,-.3844,-.3933,-.8352,-.4179,.7873,-.4533,.502,-.1082,.858,-.9207,-.2548,-.2956,-.2452,.0143,.9694
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .8893,.4914,.9307,.5687,.8893,.5687,.9316,.0272,.973,.1044,.9316,.1044,.9316,.5687,.973,.4914,.973,.5687,.8046,.4238,.8461,.3465,.8461,.4238,.8893,.1044,.9307,.0272,.9307,.1044,.8124,.1753,.754,.2065,.7463,.178,.847,.0272,.8884,.1044,.847,.1044,.847,.4914,.8884,.5687,.847,.5687,.7406,.093
                    ,.7928,.1027,.7288,.12,.847,.8004,.8884,.8776,.847,.8776,.847,.6459,.8884,.8004,.847,.3361,.8884,.4133,.847,.4133,.847,.1816,.8884,.3361,.8893,.4133,.9307,.3361,.9307,.4133,.8893,.3361,.9307,.1816,.9307,.3361,.8046,.7327,.8461,.6555,.8461,.7327,.8046,.6555,.8461,.501,.8461,.6555,.9316,.8776
                    ,.973,.8004,.973,.8776,.9316,.8004,.973,.6459,.973,.8004,.9316,.3361,.973,.4133,.9316,.4133,.9316,.1816,.973,.3361,.8893,.8004,.9307,.8776,.8893,.8776,.8893,.6459,.9307,.8004,.8893,.8004,.8884,.5687,.8884,.6459,.8884,.1816,.8893,.1044,.9307,.1816,.8893,.1816,.8046,.501,.9316,.6459,.9316,.1044
                    ,.973,.1816,.9307,.6459,.8893,.9548,.9307,.8776,.9307,.9548,.9316,.4905,.973,.4133,.973,.4905,.973,.9548,.9316,.9548,.8461,.8099,.8046,.8099,.9307,.4905,.8893,.4905,.847,.4905,.8884,.4133,.8884,.4905,.847,.9548,.8884,.9548,.9307,.4914,.973,.0272,.9316,.5687,.9316,.4914,.8046,.4238,.8046,.3465
                    ,.8893,.1044,.8893,.0272,.7637,.1542,.7932,.1531,.7463,.178,.8124,.1753,.8071,.2043,.754,.2065,.781,.2182,.754,.2065,.8071,.2043,.7463,.178,.7932,.1531,.8124,.1753,.847,.0272,.8884,.0272,.8884,.4914,.8884,.5687,.7427,.146,.7939,.1321,.769,.0853,.7939,.1321,.7717,.1514,.7427,.146,.7939,.1321
                    ,.8884,.6459,.8884,.3361,.8884,.4133,.8884,.1816,.8884,.3361,.9307,.3361,.8893,.1816,.9307,.1816,.8461,.6555,.8046,.501,.973,.8004,.973,.3361,.973,.4133,.973,.1816,.973,.3361,.8893,.8004,.9307,.8004,.9307,.8776,.9307,.6459,.9307,.8004,.847,.5687,.8884,.5687,.847,.1044,.8893,.1044,.9307,.1816
                    ,.8046,.501,.8046,.4238,.9316,.5687,.9316,.1044,.973,.1816,.9307,.6459,.8893,.9548,.8893,.8776,.9307,.8776,.9316,.4905,.973,.4133,.973,.8776,.973,.9548,.8461,.7327,.9307,.4133,.847,.4905,.8884,.4133,.847,.9548,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]),
                false);

                _i = new Float32Array(776);
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
                ,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(194);
                REPEAT(_i, 0, 194, 25);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Multimaterial#3");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 168, 0, 240, this);
                new _B.SubMesh(1, 168, 18, 240, 84, this);
                new _B.SubMesh(2, 186, 8, 324, 24, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
                var animation;
                animation = new _B.Animation("rotation animation", "rotation", 24, 1, 1);
                animation.setKeys([
                {frame: 0, value: new _B.Vector3(0,0,0)},
                {frame: 2, value: new _B.Vector3(0,0,0)},
                {frame: 3, value: new _B.Vector3(0,0,0)},
                {frame: 4, value: new _B.Vector3(0,0,0)},
                {frame: 5, value: new _B.Vector3(0,0,0)},
                {frame: 6, value: new _B.Vector3(0,0,0)},
                {frame: 7, value: new _B.Vector3(0,0,0)},
                {frame: 8, value: new _B.Vector3(0,0,0)},
                {frame: 10, value: new _B.Vector3(0,0,0)},
                {frame: 11, value: new _B.Vector3(0,0,0)},
                {frame: 12, value: new _B.Vector3(0,0,0)},
                {frame: 14, value: new _B.Vector3(0,0,0)},
                {frame: 16, value: new _B.Vector3(0,0,0)},
                {frame: 20, value: new _B.Vector3(0,0,0)},
                {frame: 30, value: new _B.Vector3(0,0,0)},
                {frame: 32, value: new _B.Vector3(0,0,0)},
                {frame: 34, value: new _B.Vector3(0,0,0)},
                {frame: 37, value: new _B.Vector3(0,0,0)},
                {frame: 40, value: new _B.Vector3(0,0,0)},
                {frame: 44, value: new _B.Vector3(0,0,0)},
                {frame: 47, value: new _B.Vector3(0,0,0)},
                {frame: 48, value: new _B.Vector3(0,0,0)},
                {frame: 50, value: new _B.Vector3(0,0,0)},
                {frame: 51, value: new _B.Vector3(0,0,0)},
                {frame: 59, value: new _B.Vector3(0,0,0)},
                {frame: 60, value: new _B.Vector3(0,0,0)},
                {frame: 61, value: new _B.Vector3(0,0,0)},
                {frame: 62, value: new _B.Vector3(0,0,0)},
                {frame: 63, value: new _B.Vector3(0,0,0)},
                {frame: 64, value: new _B.Vector3(0,0,0)},
                {frame: 65, value: new _B.Vector3(0,0,0)},
                {frame: 66, value: new _B.Vector3(0,0,0)},
                {frame: 67, value: new _B.Vector3(0,0,0)},
                {frame: 68, value: new _B.Vector3(0,0,0)},
                {frame: 69, value: new _B.Vector3(0,0,0)},
                {frame: 70, value: new _B.Vector3(0,0,0)},
                {frame: 71, value: new _B.Vector3(0,0,0)},
                {frame: 72, value: new _B.Vector3(0,0,0)},
                {frame: 73, value: new _B.Vector3(0,0,0)},
                {frame: 74, value: new _B.Vector3(0,0,0)},
                {frame: 75, value: new _B.Vector3(0,0,0)},
                {frame: 76, value: new _B.Vector3(0,0,0)},
                {frame: 77, value: new _B.Vector3(0,0,0)},
                {frame: 78, value: new _B.Vector3(0,0,0)},
                {frame: 79, value: new _B.Vector3(0,0,0)},
                {frame: 80, value: new _B.Vector3(0,0,0)},
                {frame: 82, value: new _B.Vector3(0,0,0)},
                {frame: 83, value: new _B.Vector3(0,0,0)},
                {frame: 90, value: new _B.Vector3(0,0,0)},
                {frame: 95, value: new _B.Vector3(0,0,0)},
                {frame: 97, value: new _B.Vector3(0,0,0)},
                {frame: 98, value: new _B.Vector3(0,0,0)},
                {frame: 99, value: new _B.Vector3(0,0,0)},
                {frame: 101, value: new _B.Vector3(0,0,0)},
                {frame: 108, value: new _B.Vector3(0,0,0)},
                {frame: 120, value: new _B.Vector3(0,0,0)},
                {frame: 150, value: new _B.Vector3(0,0,0)},
                {frame: 157, value: new _B.Vector3(0,0,0)},
                {frame: 180, value: new _B.Vector3(0,0,0)},
                {frame: 190, value: new _B.Vector3(0,0,0)},
                {frame: 192, value: new _B.Vector3(0,0,0)},
                {frame: 201, value: new _B.Vector3(0,0,0)},
                {frame: 203, value: new _B.Vector3(0,0,0)},
                {frame: 210, value: new _B.Vector3(0,0,0)},
                {frame: 220, value: new _B.Vector3(0,0,0)},
                {frame: 222, value: new _B.Vector3(0,0,0)},
                {frame: 230, value: new _B.Vector3(0,0,0)},
                {frame: 241, value: new _B.Vector3(0,0,0)},
                {frame: 250, value: new _B.Vector3(0,0,0)},
                {frame: 252, value: new _B.Vector3(0,0,0)}
                ]);
                this.animations.push(animation);
                animation = new _B.Animation("position animation", "position", 24, 1, 1);
                animation.setKeys([
                {frame: 0, value: new _B.Vector3(0,0,0)},
                {frame: 2, value: new _B.Vector3(0,0,0)},
                {frame: 3, value: new _B.Vector3(0,0,0)},
                {frame: 4, value: new _B.Vector3(0,0,0)},
                {frame: 5, value: new _B.Vector3(0,0,0)},
                {frame: 6, value: new _B.Vector3(0,0,0)},
                {frame: 7, value: new _B.Vector3(0,0,0)},
                {frame: 8, value: new _B.Vector3(0,0,0)},
                {frame: 10, value: new _B.Vector3(0,0,0)},
                {frame: 11, value: new _B.Vector3(0,0,0)},
                {frame: 12, value: new _B.Vector3(0,0,0)},
                {frame: 14, value: new _B.Vector3(0,0,0)},
                {frame: 16, value: new _B.Vector3(0,0,0)},
                {frame: 20, value: new _B.Vector3(0,0,0)},
                {frame: 30, value: new _B.Vector3(0,0,0)},
                {frame: 32, value: new _B.Vector3(0,0,0)},
                {frame: 34, value: new _B.Vector3(0,0,0)},
                {frame: 37, value: new _B.Vector3(0,0,0)},
                {frame: 40, value: new _B.Vector3(0,0,0)},
                {frame: 44, value: new _B.Vector3(0,0,0)},
                {frame: 47, value: new _B.Vector3(0,0,0)},
                {frame: 48, value: new _B.Vector3(0,0,0)},
                {frame: 50, value: new _B.Vector3(0,0,0)},
                {frame: 51, value: new _B.Vector3(0,0,0)},
                {frame: 59, value: new _B.Vector3(0,0,0)},
                {frame: 60, value: new _B.Vector3(0,0,0)},
                {frame: 61, value: new _B.Vector3(0,0,0)},
                {frame: 62, value: new _B.Vector3(0,0,0)},
                {frame: 63, value: new _B.Vector3(0,0,0)},
                {frame: 64, value: new _B.Vector3(0,0,0)},
                {frame: 65, value: new _B.Vector3(0,0,0)},
                {frame: 66, value: new _B.Vector3(0,0,0)},
                {frame: 67, value: new _B.Vector3(0,0,0)},
                {frame: 68, value: new _B.Vector3(0,0,0)},
                {frame: 69, value: new _B.Vector3(0,0,0)},
                {frame: 70, value: new _B.Vector3(0,0,0)},
                {frame: 71, value: new _B.Vector3(0,0,0)},
                {frame: 72, value: new _B.Vector3(0,0,0)},
                {frame: 73, value: new _B.Vector3(0,0,0)},
                {frame: 74, value: new _B.Vector3(0,0,0)},
                {frame: 75, value: new _B.Vector3(0,0,0)},
                {frame: 76, value: new _B.Vector3(0,0,0)},
                {frame: 77, value: new _B.Vector3(0,0,0)},
                {frame: 78, value: new _B.Vector3(0,0,0)},
                {frame: 79, value: new _B.Vector3(0,0,0)},
                {frame: 80, value: new _B.Vector3(0,0,0)},
                {frame: 82, value: new _B.Vector3(0,0,0)},
                {frame: 83, value: new _B.Vector3(0,0,0)},
                {frame: 90, value: new _B.Vector3(0,0,0)},
                {frame: 95, value: new _B.Vector3(0,0,0)},
                {frame: 97, value: new _B.Vector3(0,0,0)},
                {frame: 98, value: new _B.Vector3(0,0,0)},
                {frame: 99, value: new _B.Vector3(0,0,0)},
                {frame: 101, value: new _B.Vector3(0,0,0)},
                {frame: 108, value: new _B.Vector3(0,0,0)},
                {frame: 120, value: new _B.Vector3(0,0,0)},
                {frame: 150, value: new _B.Vector3(0,0,0)},
                {frame: 157, value: new _B.Vector3(0,0,0)},
                {frame: 180, value: new _B.Vector3(0,0,0)},
                {frame: 190, value: new _B.Vector3(0,0,0)},
                {frame: 192, value: new _B.Vector3(0,0,0)},
                {frame: 201, value: new _B.Vector3(0,0,0)},
                {frame: 203, value: new _B.Vector3(0,0,0)},
                {frame: 210, value: new _B.Vector3(0,0,0)},
                {frame: 220, value: new _B.Vector3(0,0,0)},
                {frame: 222, value: new _B.Vector3(0,0,0)},
                {frame: 230, value: new _B.Vector3(0,0,0)},
                {frame: 241, value: new _B.Vector3(0,0,0)},
                {frame: 250, value: new _B.Vector3(0,0,0)},
                {frame: 252, value: new _B.Vector3(0,0,0)}
                ]);
                this.animations.push(animation);
                animation = new _B.Animation("scaling animation", "scaling", 24, 1, 1);
                animation.setKeys([
                {frame: 0, value: new _B.Vector3(1,1,1)},
                {frame: 2, value: new _B.Vector3(1,1,1)},
                {frame: 3, value: new _B.Vector3(1,1,1)},
                {frame: 4, value: new _B.Vector3(1,1,1)},
                {frame: 5, value: new _B.Vector3(1,1,1)},
                {frame: 6, value: new _B.Vector3(1,1,1)},
                {frame: 7, value: new _B.Vector3(1,1,1)},
                {frame: 8, value: new _B.Vector3(1,1,1)},
                {frame: 10, value: new _B.Vector3(1,1,1)},
                {frame: 11, value: new _B.Vector3(1,1,1)},
                {frame: 12, value: new _B.Vector3(1,1,1)},
                {frame: 14, value: new _B.Vector3(1,1,1)},
                {frame: 16, value: new _B.Vector3(1,1,1)},
                {frame: 20, value: new _B.Vector3(1,1,1)},
                {frame: 30, value: new _B.Vector3(1,1,1)},
                {frame: 32, value: new _B.Vector3(1,1,1)},
                {frame: 34, value: new _B.Vector3(1,1,1)},
                {frame: 37, value: new _B.Vector3(1,1,1)},
                {frame: 40, value: new _B.Vector3(1,1,1)},
                {frame: 44, value: new _B.Vector3(1,1,1)},
                {frame: 47, value: new _B.Vector3(1,1,1)},
                {frame: 48, value: new _B.Vector3(1,1,1)},
                {frame: 50, value: new _B.Vector3(1,1,1)},
                {frame: 51, value: new _B.Vector3(1,1,1)},
                {frame: 59, value: new _B.Vector3(1,1,1)},
                {frame: 60, value: new _B.Vector3(1,1,1)},
                {frame: 61, value: new _B.Vector3(1,1,1)},
                {frame: 62, value: new _B.Vector3(1,1,1)},
                {frame: 63, value: new _B.Vector3(1,1,1)},
                {frame: 64, value: new _B.Vector3(1,1,1)},
                {frame: 65, value: new _B.Vector3(1,1,1)},
                {frame: 66, value: new _B.Vector3(1,1,1)},
                {frame: 67, value: new _B.Vector3(1,1,1)},
                {frame: 68, value: new _B.Vector3(1,1,1)},
                {frame: 69, value: new _B.Vector3(1,1,1)},
                {frame: 70, value: new _B.Vector3(1,1,1)},
                {frame: 71, value: new _B.Vector3(1,1,1)},
                {frame: 72, value: new _B.Vector3(1,1,1)},
                {frame: 73, value: new _B.Vector3(1,1,1)},
                {frame: 74, value: new _B.Vector3(1,1,1)},
                {frame: 75, value: new _B.Vector3(1,1,1)},
                {frame: 76, value: new _B.Vector3(1,1,1)},
                {frame: 77, value: new _B.Vector3(1,1,1)},
                {frame: 78, value: new _B.Vector3(1,1,1)},
                {frame: 79, value: new _B.Vector3(1,1,1)},
                {frame: 80, value: new _B.Vector3(1,1,1)},
                {frame: 82, value: new _B.Vector3(1,1,1)},
                {frame: 83, value: new _B.Vector3(1,1,1)},
                {frame: 90, value: new _B.Vector3(1,1,1)},
                {frame: 95, value: new _B.Vector3(1,1,1)},
                {frame: 97, value: new _B.Vector3(1,1,1)},
                {frame: 98, value: new _B.Vector3(1,1,1)},
                {frame: 99, value: new _B.Vector3(1,1,1)},
                {frame: 101, value: new _B.Vector3(1,1,1)},
                {frame: 108, value: new _B.Vector3(1,1,1)},
                {frame: 120, value: new _B.Vector3(1,1,1)},
                {frame: 150, value: new _B.Vector3(1,1,1)},
                {frame: 157, value: new _B.Vector3(1,1,1)},
                {frame: 180, value: new _B.Vector3(1,1,1)},
                {frame: 190, value: new _B.Vector3(1,1,1)},
                {frame: 192, value: new _B.Vector3(1,1,1)},
                {frame: 201, value: new _B.Vector3(1,1,1)},
                {frame: 203, value: new _B.Vector3(1,1,1)},
                {frame: 210, value: new _B.Vector3(1,1,1)},
                {frame: 220, value: new _B.Vector3(1,1,1)},
                {frame: 222, value: new _B.Vector3(1,1,1)},
                {frame: 230, value: new _B.Vector3(1,1,1)},
                {frame: 241, value: new _B.Vector3(1,1,1)},
                {frame: 250, value: new _B.Vector3(1,1,1)},
                {frame: 252, value: new _B.Vector3(1,1,1)}
                ]);
                this.animations.push(animation);
                this.createAnimationRange("Attack", 0, 20);
                this.createAnimationRange("death", 30, 51);
                this.createAnimationRange("Run", 60, 83);
                this.createAnimationRange("Skill01", 90, 108);
                this.createAnimationRange("stand", 120, 180);
                this.createAnimationRange("Stand_with_weapon", 190, 252);
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Axe.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(7);
        };
        return Axe;
    })(QI.Mesh);
    Warrior.Axe = Axe;

    var Shield = (function (_super) {
        __extends(Shield, _super);
        function Shield(name, scene, materialsRootDir, source) {
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .699,2.5969,-1.447,.875,1.8365,-1.2173,.7812,2.5964,-1.478,1.0497,1.4956,-.4995,1.1319,1.4951,-.5305,1.4014,1.7722,.18,1.3192,1.7727,.211,1.5255,2.5054,.4981,1.4433,2.5059,.5291,1.4317,3.2653,.2373,1.3495,3.2658,.2683,1.1748,3.6067,-.4495,1.0926,3.6072,-.4185,1.4433,2.5059,.5291,.699,2.5969,-1.447,1.0926,3.6072,-.4185,.9053,3.3296,-1.16
                    ,.8231,3.3301,-1.129,1.4725,2.5119,.3572,1.392,3.1635,.1337,.9407,3.2186,-1.0645,.8342,2.5899,-1.3372,.9686,1.938,-1.1339,.9147,1.9383,-1.1136,.9407,3.2186,-1.0645,.8881,2.5896,-1.3575,1.2287,3.6064,-.4698,1.4856,3.265,.217,.9407,3.2186,-1.0645,1.2256,3.4559,-.4755,.9946,3.2183,-1.0848,.9289,1.8362,-1.2376,.835,2.5961,-1.4983,.9592,3.3293,-1.1803
                    ,1.1858,1.4948,-.5508,1.1717,3.4562,-.4552,1.4459,3.1632,.1134,.9686,1.938,-1.1339,.835,2.5961,-1.4983,.9289,1.8362,-1.2376,1.1889,1.6453,-.545,.9289,1.8362,-1.2376,1.1858,1.4948,-.5508,1.4553,1.7719,.1597,1.4199,1.8829,.0642,1.5794,2.5051,.4778,1.5264,2.5116,.3369,1.4856,3.265,.217,1.4459,3.1632,.1134,1.4459,3.1632,.1134,1.2287,3.6064,-.4698
                    ,1.2256,3.4559,-.4755,.9946,3.2183,-1.0848,1.2287,3.6064,-.4698,.9592,3.3293,-1.1803,.8881,2.5896,-1.3575,.9592,3.3293,-1.1803,.835,2.5961,-1.4983,1.5794,2.5051,.4778,1.4553,1.7719,.1597,1.135,1.6456,-.5247,1.1889,1.6453,-.545,1.4199,1.8829,.0642,1.366,1.8832,.0845,1.5264,2.5116,.3369,1.4725,2.5119,.3572,1.5794,2.5051,.4778,1.392,3.1635,.1337
                    ,1.5264,2.5116,.3369,1.1528,2.8632,-.4754,1.3333,2.5499,-.5578,1.2449,2.6954,-.2283,1.2386,2.3832,-.2403,1.1401,2.2387,-.4994,1.0479,2.4065,-.7464,1.0543,2.7187,-.7344,.7928,1.837,-1.1863,1.0926,3.6072,-.4185,1.0497,1.4956,-.4995,.7928,1.837,-1.1863,.699,2.5969,-1.447,.699,2.5969,-1.447,.8231,3.3301,-1.129,1.3495,3.2658,.2683,1.4433,2.5059,.5291
                    ,1.4433,2.5059,.5291,1.3192,1.7727,.211,1.0497,1.4956,-.4995,1.0497,1.4956,-.4995,.699,2.5969,-1.447,1.4433,2.5059,.5291,1.0926,3.6072,-.4185,.8342,2.5899,-1.3372,1.366,1.8832,.0845,.9147,1.9383,-1.1136,1.135,1.6456,-.5247,1.366,1.8832,.0845,1.366,1.8832,.0845,1.1717,3.4562,-.4552,.8342,2.5899,-1.3372,.9147,1.9383,-1.1136,1.366,1.8832,.0845
                    ,.9407,3.2186,-1.0645,.9407,3.2186,-1.0645,1.4553,1.7719,.1597,1.392,3.1635,.1337,.9686,1.938,-1.1339,.8881,2.5896,-1.3575,.835,2.5961,-1.4983,.9686,1.938,-1.1339,.9289,1.8362,-1.2376,1.1858,1.4948,-.5508,1.4856,3.265,.217,1.4459,3.1632,.1134,1.4856,3.265,.217,1.2287,3.6064,-.4698,.9946,3.2183,-1.0848,1.2256,3.4559,-.4755,1.2287,3.6064,-.4698
                    ,.8881,2.5896,-1.3575,.9946,3.2183,-1.0848,.9592,3.3293,-1.1803,1.5794,2.5051,.4778,1.1889,1.6453,-.545,1.4199,1.8829,.0642,1.4199,1.8829,.0642,1.5264,2.5116,.3369,1.5794,2.5051,.4778,1.392,3.1635,.1337,1.4725,2.5119,.3572,1.5264,2.5116,.3369
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(246);
                _i.set([0,1,2,1,3,4,3,5,4,6,7,5,8,9,7,10,11,9,12,13,14,15,16,11,17,2,16,18,19,20,21,22,23,24,25,21,9,26,27,28,29,30,2,31,32,2,33,16,5,34
                ,4,35,36,29,37,38,39,40,41,42,40,43,44,44,45,46]);
                CONTIG(_i, 66, 46, 57);
                _i.set([5,58,59,60,22,61,60,62,63,1,34,31,16,26,11,63,64,65,9,66,7,67,68,36,69,70,71,71,70,72,72,70,73,73,70,74,74,70,75,75,70,69,0,76,1,1,76,3,3,6
                ,5,6,8,7,8,10,9,10,77,11,78,79,80,81,82,12,12,83,84,85,86,87,88,89,90,91,17,16,17,0,2,20,92,93,94,95,96,97,18,20,19,98,20,99,100,101,21,25,22,102
                ,30,25,9,11,26,103,35,29,2,1,31,2,32,33,5,104,34,35,105,36,106,107,108,40,109,110,40,111,43,44,43,45,46,45], 78);
                CONTIG(_i, 212, 112, 121);
                _i.set([5,7,122,60,23,22,60,123,124,1,4,34,16,33,26,63,125,126,9,27], 222);
                CONTIG(_i, 242, 127, 130);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.8632,.0368,-.5036,-.2634,-.676,-.6882,-.3522,.043,-.9349,-.6055,-.7722,.1925,-.0203,-.9991,-.0383,.2347,-.7368,.634,-.4075,-.5686,.7145,.3522,-.043,.9349,-.3163,-.0299,.9482,.2634,.676,.6882,-.3852,.5283,.7566,.0203,.9991,.0383,-.574,.7791,.2521,-.3163,-.0299,.9482,-.8632,.0368,-.5036,-.574,.7791,.2521,-.2347,.7368,-.634
                    ,-.7719,.5755,-.2699,.3163,.0299,-.9482,.3852,-.5283,-.7566,.7719,-.5755,.2699,.8632,-.0368,.5036,.909,.3974,.1254,.7942,.5214,.312,.7719,-.5755,.2699,.9618,-.03,.272,.6055,.7722,-.1925,.7942,.5214,.312,.7719,-.5755,.2699,.7404,-.5982,-.3064,.892,-.4424,.0932,.3852,-.5283,-.7566,.3163,.0299,-.9482,.4075,.5686,-.7145
                    ,.574,-.7791,-.2521,.574,-.7791,-.2521,.5959,-.4062,-.6927,.909,.3974,.1254,.3163,.0299,-.9482,.3852,-.5283,-.7566,.7645,.5894,-.2609,.3852,-.5283,-.7566,.574,-.7791,-.2521,.7719,-.5755,.2699,.613,.4335,-.6605,.8632,-.0368,.5036,.5431,.0211,-.8394,.7942,.5214,.312,.5959,-.4062,-.6927,.5959,-.4062,-.6927,.6055,.7722,-.1925
                    ,.7404,-.5982,-.3064,.892,-.4424,.0932,.6055,.7722,-.1925,.4075,.5686,-.7145,.9618,-.03,.272,.4075,.5686,-.7145,.3163,.0299,-.9482,.8632,-.0368,.5036,.7719,-.5755,.2699,.6055,.7722,-.1925,.7645,.5894,-.2609,.613,.4335,-.6605,.4075,.5686,-.7145,.5431,.0211,-.8394,.3163,.0299,-.9482,.8632,-.0368,.5036,.3852,-.5283,-.7566
                    ,.5431,.0211,-.8394,.7995,.5332,-.2766,.9357,-.0055,-.3527,.9582,.2442,.1489,.9473,-.2936,.1283,.7776,-.5424,-.3179,.6189,-.2535,-.7434,.6298,.2843,-.7228,-.7942,-.5214,-.312,-.574,.7791,.2521,-.6055,-.7722,.1925,-.7942,-.5214,-.312,-.8632,.0368,-.5036,-.8632,.0368,-.5036,-.7719,.5755,-.2699,-.3852,.5283,.7566,-.3163,-.0299,.9482
                    ,-.3163,-.0299,.9482,-.4075,-.5686,.7145,-.6055,-.7722,.1925,-.6055,-.7722,.1925,-.8632,.0368,-.5036,-.3163,-.0299,.9482,-.574,.7791,.2521,.8632,-.0368,.5036,.4075,.5686,-.7145,.7942,.5214,.312,.6055,.7722,-.1925,.4075,.5686,-.7145,.4075,.5686,-.7145,.574,-.7791,-.2521,.8632,-.0368,.5036,.7942,.5214,.312,.4075,.5686,-.7145
                    ,.7719,-.5755,.2699,.7719,-.5755,.2699,.7719,-.5755,.2699,.3852,-.5283,-.7566,.909,.3974,.1254,.9618,-.03,.272,.3163,.0299,-.9482,.909,.3974,.1254,.3852,-.5283,-.7566,.574,-.7791,-.2521,.7942,.5214,.312,.5959,-.4062,-.6927,.7942,.5214,.312,.6055,.7722,-.1925,.892,-.4424,.0932,.7404,-.5982,-.3064,.6055,.7722,-.1925
                    ,.9618,-.03,.272,.892,-.4424,.0932,.4075,.5686,-.7145,.8632,-.0368,.5036,.7645,.5894,-.2609,.613,.4335,-.6605,.613,.4335,-.6605,.5431,.0211,-.8394,.8632,-.0368,.5036,.3852,-.5283,-.7566,.3163,.0299,-.9482,.5431,.0211,-.8394
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5056,.3335,.5155,.1495,.5194,.3398,.3623,.0386,.3681,.0247,.173,.0191,.1778,.0335,.0361,.1508,.0499,.157,.0458,.3409,.0597,.335,.1873,.4746,.355,.973,.0425,.8436,.4844,.6606,.1934,.4606,.3822,.4747,.377,.4603,.0929,.3222,.0929,.1659,.3598,.0553,.9548,.317,.8524,.4408,.8481,.4318,.9523,.1569
                    ,.9643,.3203,.1836,.4838,.037,.3451,.9523,.1569,.8552,.0295,.9614,.1531,.5245,.1452,.5285,.3435,.3859,.4838,.3715,.0156,.8514,.0387,.6936,.0295,.6645,.5353,.522,.6332,.6514,.5038,.8214,.5353,.6514,.5038,.8345,.5038,.9639,.6332,.9324,.6463,.9639,.8163,.9324,.8032,.8345,.9457,.8214,.9142,.8214,.9142
                    ,.6514,.9457,.6645,.9142,.5535,.8032,.6514,.9457,.522,.8163,.5535,.6463,.522,.8163,.522,.6332,.0269,.1473,.1694,.0099,.6946,.4315,.6908,.4408,.5846,.3171,.5938,.3134,.5817,.15,.5912,.1532,.0269,.1473,.6979,.0384,.5817,.15,.6704,.8402,.7473,.707,.8241,.8402,.901,.707,.8241,.5738,.6704,.5738
                    ,.5935,.707,.5015,.1556,.1934,.4606,.172,.5311,.355,.5311,.4844,.6606,.4844,.6606,.4844,.8436,.172,.973,.0425,.8436,.0425,.8436,.0425,.6606,.172,.5311,.172,.5311,.4844,.6606,.0425,.8436,.1934,.4606,.4703,.1659,.2034,.4327,.4703,.3222,.3598,.4327,.2034,.4327,.2034,.4327,.2034,.0553,.4703,.1659
                    ,.4703,.3222,.2034,.4327,.9523,.1569,.9523,.1569,.1694,.0099,.6979,.0384,.6645,.5353,.5535,.6463,.522,.6332,.6645,.5353,.6514,.5038,.8345,.5038,.8345,.9457,.8214,.9142,.8345,.9457,.6514,.9457,.5535,.8032,.6645,.9142,.6514,.9457,.5535,.6463,.5535,.8032,.522,.8163,.0269,.1473,.6908,.4408,.5846,.3171
                    ,.5846,.3171,.5817,.15,.0269,.1473,.6979,.0384,.5912,.1532,.5817,.15
                ]),
                false);

                _i = new Float32Array(524);
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
                ,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(131);
                REPEAT(_i, 0, 131, 18);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Shield");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 131, 0, 246, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Shield.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(8);
        };
        return Shield;
    })(QI.Mesh);
    Warrior.Shield = Shield;

    var Warrior_001 = (function (_super) {
        __extends(Warrior_001, _super);
        function Warrior_001(name, scene, materialsRootDir, source) {
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
            this.initComplete = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.2567,2.5805,-.2376,-.0984,2.7631,-.2817,-.2212,2.7586,-.256,-.3508,2.3427,-.2405,-.1095,2.4415,-.3151,-.3449,2.804,.0281,-.3749,2.6583,-.1432,-.312,2.7795,-.1329,-.137,2.6206,.3751,-.2299,2.8168,.2707,-.0816,2.7931,.2958,-.5139,1.7348,-.1836,-.4893,1.3747,-.1322,-.3748,1.698,-.2163,-.4108,2.6989,.0689,-.5094,2.4351,-.1443,-.2174,2.4179,.4749
                    ,-.3229,2.7149,.3294,-.7353,1.8155,.1534,-.7221,1.4389,-.0286,-.6519,1.7788,-.0971,-.5073,1.4325,.444,-.598,1.8111,.4131,-.4101,1.7665,.4606,-.6935,1.47,.3955,-.7353,1.8155,.1534,-.5668,2.4754,.1237,-.4108,2.6989,.0689,-.3011,1.3865,.3991,-.1659,1.7081,.4073,.0813,2.3402,.4162,-.6066,1.4041,-.1046,.0481,2.7695,.2978,-.3508,2.3427,-.2405
                    ,-.5094,2.4351,-.1443,-.0244,2.2544,.4494,-.2174,2.4179,.4749,-.5668,2.4754,.1237,-.4653,2.483,.4239,-.2174,2.4179,.4749,-.5094,2.4351,-.1443,-.5668,2.4754,.1237,-.2056,2.2289,-.301,-.3508,2.3427,-.2405,-.0897,4.6506,.1966,-.0493,4.7948,.0689,.004,4.8431,.3714,-.1869,4.6492,.0751,-.057,4.7679,-.1606,-.3369,4.1655,.0882,-.1639,4.4608,.2705
                    ,-.155,3.9982,.3939,-.1519,3.8596,.4303,-.3775,3.9845,-.1242,-.3609,4.0777,.0942,-.2644,4.4561,-.1502,-.2567,4.4587,.0796,.0078,4.7713,-.3,.0303,4.8431,.3705,-.1946,4.6466,-.1547,-.0184,4.7713,-.2991,.0048,4.6958,-.3896,-.1091,4.6439,-.3852,.0385,3.8595,.4194,-.3233,3.7983,-.2695,.0266,4.4608,.2641,.035,3.9982,.3839,.0242,4.6505,.1928
                    ,.0028,4.5739,-.4479,-.2327,4.4539,-.338,-.3505,4.0931,-.1327,-.2104,3.9855,-.0188,-.2255,4.0425,.0561,-.2613,3.9591,.1239,.0089,3.3466,.4961,.1216,3.754,.419,.1351,3.3403,.4533,-.4292,3.1073,.1233,-.595,3.4689,-.0756,-.5228,3.2496,.2515,-.1693,4.0279,-.1261,-.2104,3.9855,-.0188,-.3669,4.0001,.0075,-.415,3.4025,.6147,-.6842,3.4534,.6735
                    ,-.5821,3.8494,.5631,.0143,3.1048,.4463,.0737,2.5985,.361,-.1482,2.6521,.4143,-.2584,3.0823,-.3815,-.175,3.4454,-.3979,-.3203,3.4415,-.3309,-.7232,3.8247,.0623,-.6461,3.448,-.0444,-.595,3.4689,-.0756,-.3634,2.5895,.0742,-.4078,2.6385,-.1342,-.4758,2.6758,.1184,-.694,3.8414,.3313,-.8163,3.3747,.2532,-.33,4.0377,.1816,-.7232,3.8247,.0623
                    ,-.1586,3.7612,-.335,-.0823,4.0289,-.1652,-.0174,3.999,.3182,.1216,3.754,.419,-.1307,3.7368,.5152,-.3212,3.7611,-.2693,.0451,3.9779,.233,.0864,3.975,.3361,-.33,4.0377,.1816,-.2113,3.9525,.2423,-.2997,4.0048,.346,-.231,2.5407,-.2274,-.1098,2.3532,-.3041,-.0968,2.5626,-.2608,-.231,2.5407,-.2274,-.1178,2.6223,-.3332,-.2978,2.6123,-.2874
                    ,-.3008,2.6033,.2763,-.3944,2.6949,.4203,-.3382,2.3347,-.1735,-.2684,2.5012,-.2242,-.3634,2.5895,.0742,-.3788,2.5884,-.1244,-.3234,2.5563,-.1017,-.1661,2.5436,.3717,-.3008,2.6033,.2763,-.1271,2.5627,.2815,-.5792,1.751,-.0749,-.5615,1.3726,-.0425,-.4573,1.6917,-.1465,-.4168,2.6331,.0908,-.4639,2.4323,-.1032,-.4298,2.494,.3759,-.3529,2.6492,.3316
                    ,-.4395,1.2453,.1216,-.3786,1.3888,.414,-.403,1.3484,.0946,-.7498,1.8535,.1913,-.7989,1.4712,.0457,-.6848,1.8041,-.0117,-.2857,1.6875,.114,-.3786,1.3888,.414,-.2439,1.7146,.3799,-.5992,1.4722,.4775,-.6361,1.8527,.4031,-.4897,1.8028,.4395,-.7388,1.3085,.0004,-.7583,.6202,.2095,-.6041,1.2657,-.0239,-.5992,1.4722,.4775,-.8044,1.4116,.4533
                    ,-.7652,1.5238,.4317,-.6988,1.4239,-.0205,-.5615,1.3726,-.0425,-.8678,1.5241,.2358,-.8374,1.3527,.0885,-.7989,1.4712,.0457,-.8298,.1295,.7751,-.7321,.4097,.7931,-.7619,.3609,.6335,-.9185,1.4128,.2781,-1.0233,.7285,.3244,-.5426,.6221,.3366,-.4063,1.2939,.4263,-.6171,1.3642,.4925,-.9723,.8696,.7023,-.9263,.0529,.9892,-1.0121,-.0221,.9947
                    ,-1.0187,.0485,.9857,-.9214,.1328,.9528,-.9382,.4547,.7793,-.818,.4479,.8422,-.9164,.369,.5568,-.9169,.1641,.6502,-.8648,.3528,.5456,-1.0037,.4449,.7105,-.9877,.1909,.7005,-.9577,.395,.6014,-.9877,-.0204,.8092,-1.1033,-.0204,.3022,-1.2223,-.0275,.2975,-1.2067,.0437,.3398,-1.1033,-.0204,.3022,-1.1054,.0466,.3551,-1.1163,-.0278,.8551
                    ,-1.312,.0323,.5103,-1.1069,.0487,.8487,-.8549,-.0127,.7638,-.8305,.0535,.9605,-.8545,.0555,.769,-.8549,-.0127,.7638,-.8545,.0555,.769,-1.1163,-.0278,.8551,-1.1069,.0487,.8487,-.8299,-.017,.9751,-.9877,-.0204,.8092,-.9239,-.0177,1.0051,-1.067,.1413,.8294,-1.0037,.4449,.7105,-.4395,1.2453,.1216,-1.1056,.8209,.5117,-.9185,1.4128,.2781
                    ,-.7619,.3609,.6335,-.9185,1.4128,.2781,-.8678,1.5241,.2358,-.403,1.3484,.0946,-.2857,1.6875,.114,-.7652,1.5238,.4317,-.7498,1.8535,.1913,-.5615,1.3726,-.0425,-.4395,1.2453,.1216,-.403,1.3484,.0946,-.5088,2.4806,.1227,-.4168,2.6331,.0908,-.3008,2.6033,.2763,-.4168,2.6331,.0908,-.3634,2.5895,.0742,-.2613,3.9591,.1239,-.694,3.8414,.3313
                    ,-.33,4.0377,.1816,-.694,3.8414,.3313,-.4758,2.6758,.1184,-.3359,3.124,.491,-.5228,3.2496,.2515,-.415,3.4025,.6147,-.2613,3.9591,.1239,-.1434,4.0594,.1656,-.2113,3.9525,.2423,-.1195,3.9988,-.0861,-.1708,4.0661,-.0503,-.0538,3.9751,.2542,.0336,4.0332,.2132,.0451,3.9779,.233,-1.0237,.1358,.8955,-1.1069,.0487,.8487,-1.067,.1413,.8294
                    ,-.9169,.1641,.6502,-.8545,.0555,.769,-.8298,.1295,.7751,-.8438,.1343,.9324,-.8298,.1295,.7751,-.9877,.1909,.7005,-1.067,.1413,.8294,-.964,.1709,.6473,-.9169,.1641,.6502,-.9214,.1328,.9528,-.6842,3.4534,.6735,-.8681,3.2951,.4929,-.8336,3.4024,.4379,-.5268,3.1265,.7102,-.6842,3.4534,.6735,-.3604,3.4559,.5399,-.8163,3.3747,.2532
                    ,-.7849,3.08,.1306,-.6461,3.448,-.0444,-.8336,3.4024,.4379,-.9049,3.2241,.2527,-.8163,3.3747,.2532,-.4292,3.1073,.1233,-.5651,3.1231,.3367,-.5228,3.2496,.2515,-.521,3.2769,.2511,-.521,3.2769,.2511,-.6461,3.448,-.0444,-.521,3.2769,.2511,-.5228,3.2496,.2515,-.415,3.4025,.6147,-.4021,3.0961,-.2204,-.9214,.1328,.9528,-.9877,.1909,.7005
                    ,-.2113,3.9525,.2423,-.0592,4.0031,-.1206,-.1027,4.0763,-.1151,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.1163,-.0278,.8551,-1.3634,-.0392,.4854,-1.3634,-.0392,.4854,-1.1163,-.0278,.8551,-.964,.1709,.6473,-.8438,.1343,.9324,-.8299,-.017,.9751,-.7051,.8569,.8339,-.7989,1.4712,.0457,-.5992,1.4722,.4775,-.9099,.6666,.2352,-.3786,1.3888,.414
                    ,.0629,2.3759,.3596,-.2231,2.4203,.413,.0414,2.5416,.2641,-.1271,2.5627,.2815,-.3234,2.5563,-.1017,-.1586,3.7612,-.335,-.5821,3.8494,.5631,-.3212,3.7611,-.2693,-.1195,3.9988,-.0861,-.415,3.4025,.6147,-.1307,3.7368,.5152,-.3382,2.3347,-.1735,-.4639,2.4323,-.1032,-.0049,2.2612,.3692,-.2231,2.4203,.413,-.5088,2.4806,.1227,-.4298,2.494,.3759
                    ,-.2529,2.0256,-.2614,-.2857,1.6875,.114,-.047,2.0391,.0216,-.4298,2.494,.3759,-.2231,2.4203,.413,-.047,2.0391,.0216,-.4639,2.4323,-.1032,-.5088,2.4806,.1227,-.3382,2.3347,-.1735,-.4622,.723,.6406,-.5426,.6221,.3366,-1.0037,.4449,.7105,-1.1056,.8209,.5117,-.047,2.0391,.0216,-.0049,2.2612,.3692,-.1098,2.041,-.3296,-.2529,2.0256,-.2614
                    ,-.047,2.0391,.0216,-.2208,3.6677,-.345,-.0657,3.708,-.3656,-.2779,4.1261,-.3048,-.0957,4.4529,-.43,.0654,2.6299,-.2934,.0315,2.7987,-.2777,.1336,2.4188,-.3721,.2831,2.8231,-.0528,.218,2.7212,-.2354,.3574,2.722,-.055,.304,2.7794,.2164,.2594,2.5692,.3026,.1738,2.7642,.2757,.2694,1.8314,-.5163,.2515,1.4725,-.5339,.3694,1.5017,-.5597
                    ,.3227,2.5071,-.3465,.5053,2.4992,-.1393,.412,2.6628,.2076,.3677,2.3525,.3085,.63,1.8591,-.3238,.5093,1.5271,-.5433,.685,1.5226,-.396,.6354,1.7968,-.0436,.5492,1.4191,-.0506,.4912,1.7348,.0749,.63,1.8591,-.3238,.6913,1.4742,-.1695,.5053,2.4992,-.1393,.5642,2.4354,.1619,.3435,1.3734,-.0028,.2476,1.6769,.1314,.1762,2.1911,.3439
                    ,.434,1.8662,-.5008,.173,2.8197,-.1921,.1336,2.4188,-.3721,.3227,2.5071,-.3465,.1762,2.1911,.3439,.5053,2.4992,-.1393,.5642,2.4354,.1619,.5642,2.4354,.1619,.3677,2.3525,.3085,.3227,2.5071,-.3465,.5053,2.4992,-.1393,-.0288,2.3101,-.3768,.1336,2.4188,-.3721,.1382,4.6505,.189,.0895,4.7947,.0643,.2271,4.649,.0613,.0818,4.7679,-.1653
                    ,.2194,4.6464,-.1685,.217,4.4607,.2578,.3759,4.1653,.0597,.2244,3.9981,.3739,.2272,3.8595,.4088,.3784,3.9844,-.1788,.2712,3.7983,-.3325,.2892,4.4558,-.1687,.3598,4.093,-.1743,.0341,4.7713,-.3009,.0565,4.8431,.3696,.1188,4.6438,-.3928,.1022,4.4528,-.4366,.245,4.4537,-.3539,.2969,4.4585,.0612,.3983,4.0775,.0561,.1111,3.9861,-.1203
                    ,.1916,4.0431,-.0498,.0895,4.0664,-.1182,.2575,3.3405,.3993,.3749,3.7302,.3262,.4958,3.2544,-.1385,.1688,3.115,-.3675,.3568,3.1133,-.1382,.0048,4.0282,-.1843,.1111,3.9861,-.1203,.0036,3.999,-.1237,.6479,3.3736,.1899,.8864,3.4224,.0483,.5566,3.4263,.1668,.2198,3.0912,.3839,.124,3.0943,.4372,-.0291,3.1036,-.4248,-.1425,3.0835,-.4022
                    ,.5196,3.8375,-.4024,.3919,3.4785,-.4477,.7062,3.4025,-.3605,.2368,2.7043,-.2609,.3084,2.6183,-.0565,.4236,2.6947,-.0915,.6806,3.8485,-.165,.8413,3.4096,-.2326,.3097,4.0395,-.0432,.5196,3.8375,-.4024,.6806,3.8485,-.165,.0018,3.7652,-.3889,.1216,3.754,.419,.1544,3.9993,.2568,.3749,3.7302,.3262,.3381,3.4896,-.4294,.0018,3.7652,-.3889
                    ,-.0223,3.4508,-.4363,.1405,3.9754,.1915,.3097,4.0395,-.0432,.2605,3.9526,.0875,.2299,3.9602,-.0372,.0722,2.5926,-.2836,.04,2.6132,-.2675,.04,2.6132,-.2675,.0669,2.6894,-.3433,.3054,2.5927,.3122,.3597,2.5658,.1394,.2082,2.5181,.2175,.1424,2.4474,-.3172,.3084,2.6183,-.0565,.2233,2.6743,-.2235,.3687,2.6597,-.0505,.3597,2.5658,.1394
                    ,.2851,2.4708,.2714,.2082,2.5181,.2175,.3377,1.9024,-.5561,.3016,1.5351,-.6472,.4355,1.5881,-.6821,.2929,2.5367,-.2934,.4492,2.5142,-.1207,.4373,2.5916,.1775,.3439,2.3481,.243,.3766,1.381,-.186,.2671,1.3495,-.4975,.2324,1.4523,-.4659,.6285,1.9246,-.3966,.5594,1.6192,-.6644,.7196,1.6112,-.5305,.179,1.7492,-.2665,.3766,1.381,-.186
                    ,.2324,1.4523,-.4659,.6378,1.8427,-.1707,.6061,1.4576,-.2194,.5257,1.7707,-.0843,.4691,1.4754,-.7246,.5348,.7453,-.7626,.6826,.7929,-.8036,.6061,1.4576,-.2194,.7637,1.4276,-.3629,.6181,1.3535,-.2527,.4355,1.5881,-.6821,.3371,1.4314,-.6899,.7196,1.6112,-.5305,.6024,1.4964,-.6897,.7734,1.497,-.5598,.727,.3781,-.4837,.8384,.1316,-.3427
                    ,.8102,.1283,-.4961,.8299,.8349,-.7693,1.0013,.8767,-.6307,.3968,1.2913,-.222,.411,.6967,-.5507,.984,.8607,-.3944,.8167,.7931,-.1576,.9219,.0528,-.2929,1.0293,-.0176,-.3205,.923,-.0179,-.2765,.8838,.4086,-.3163,1.0176,.135,-.4007,.9216,.1328,-.33,.8236,.4176,-.6212,.851,.1913,-.6048,.8897,.2026,-.6254,.9812,.4538,-.517
                    ,.9418,.2107,-.5865,1.0548,.141,-.4808,.9275,-.0179,-.4911,.8043,-.0182,-.9962,.7919,-.0182,-.4794,.9094,.0528,-1.0078,.8043,-.0182,-.9962,.9089,-.0179,-1.0536,1.0825,.0573,-.9056,1.07,-.0174,-.5029,1.0681,.0563,-.4995,.8243,.0525,-.3152,.7919,-.0182,-.4794,.7978,.0505,-.4818,.8261,.0522,-.9499,.7919,-.0182,-.4794,.8043,-.0182,-.9962
                    ,1.029,.0531,-.3296,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.8262,-.0182,-.2987,.923,-.0179,-.2765,.9593,.4397,-.4251,1.0548,.141,-.4808,.2671,1.3495,-.4975,1.0013,.8767,-.6307,.727,.3781,-.4837,.772,.4017,-.6093,.7305,1.5362,-.3228,.7734,1.497,-.5598,.1915,1.8594,-.5705,.2324,1.4523,-.4659,.6285,1.9246,-.3966,.7305,1.5362,-.3228
                    ,.3016,1.5351,-.6472,.2671,1.3495,-.4975,.4492,2.5142,-.1207,.5106,2.4362,.1266,.3597,2.5658,.1394,.3687,2.6597,-.0505,.2265,4.003,-.2035,.2299,3.9602,-.0372,.1111,3.9861,-.1203,.3923,4.0023,.1037,.6806,3.8485,-.165,.7497,3.8261,.0821,.6806,3.8485,-.165,.7497,3.8261,.0821,.4236,2.6947,-.0915,.5203,2.6437,.1876,.5156,3.1038,.1886
                    ,.4958,3.2544,-.1385,.3568,3.1133,-.1382,.2299,3.9602,-.0372,.1796,4.0597,.1027,.1916,4.0431,-.0498,.0036,3.999,-.1237,-.0003,4.0765,-.1416,.1405,3.9754,.1915,.1251,4.0593,.1662,1.0176,.135,-.4007,1.0681,.0563,-.4995,.851,.1913,-.6048,.7978,.0505,-.4818,.8384,.1316,-.3427,.8102,.1283,-.4961,.9418,.2107,-.5865,1.0548,.141,-.4808
                    ,.8897,.2026,-.6254,.9216,.1328,-.33,.8864,3.4224,.0483,.8996,3.2986,-.2292,.9745,3.288,.0372,.8864,3.4224,.0483,.7806,3.0836,.1346,.5566,3.4263,.1668,.7062,3.4025,-.3605,.5921,3.1221,-.4674,.7669,3.2597,-.4398,.8413,3.4096,-.2326,.8996,3.2986,-.2292,.4236,2.6947,-.0915,.4907,3.2826,-.1468,.5566,3.4263,.1668,.4958,3.2544,-.1385
                    ,.3381,3.4896,-.4294,.4907,3.2826,-.1468,.3919,3.4785,-.4477,.4958,3.2544,-.1385,.4907,3.2826,-.1468,.6479,3.3736,.1899,.8384,.1316,-.3427,.8897,.2026,-.6254,.9418,.2107,-.5865,.1405,3.9754,.1915,.2605,3.9526,.0875,-.0567,4.0809,-.1458,1.0293,-.0176,-.3205,.9275,-.0179,-.4911,.923,-.0179,-.2765,1.1197,-.0166,-.9497,1.1197,-.0166,-.9497
                    ,1.07,-.0174,-.5029,.8834,.433,-.5978,.7801,.3808,-.3276,.8262,-.0182,-.2987,.4999,.7023,-.2333,.5594,1.6192,-.6644,.3766,1.381,-.186,.2794,1.6865,-.023,.1218,2.2409,.3159,.4655,1.9405,-.5416,.0414,2.5416,.2641,.1823,2.6267,-.1924,.1823,2.6267,-.1924,-.1586,3.7612,-.335,.3749,3.7302,.3262,.5196,3.8375,-.4024,-.0592,4.0031,-.1206
                    ,.6479,3.3736,.1899,.7497,3.8261,.0821,.1424,2.4474,-.3172,.2929,2.5367,-.2934,.3439,2.3481,.243,.1218,2.2409,.3159,.4492,2.5142,-.1207,.5106,2.4362,.1266,.0066,2.1478,-.4251,.179,1.7492,-.2665,.5106,2.4362,.1266,.3439,2.3481,.243,-.0079,2.0485,-.0203,.2929,2.5367,-.2934,.4492,2.5142,-.1207,.1424,2.4474,-.3172,.411,.6967,-.5507
                    ,.9812,.4538,-.517,-.0079,2.0485,-.0203,.0066,2.1478,-.4251,.2082,2.5181,.2175,.1542,3.6678,-.3851,.2588,4.126,-.3411,-.2056,2.2289,-.301,-.5668,2.4754,.1237,-.4653,2.483,.4239,-.8027,1.4721,.1848,-.8027,1.4721,.1848,-.7353,1.8155,.1534,-.4653,2.483,.4239,-.0244,2.2544,.4494,-.3508,2.3427,-.2405,-.7353,1.8155,.1534,-.5668,2.4754,.1237
                    ,-.5094,2.4351,-.1443,-.1307,3.7368,.5152,-.1195,3.9988,-.0861,-.2104,3.9855,-.0188,-.3604,3.4559,.5399,-.3234,2.5563,-.1017,-.8336,3.4024,.4379,-.694,3.8414,.3313,-.7232,3.8247,.0623,-.3212,3.7611,-.2693,.1216,3.754,.419,-.7232,3.8247,.0623,-.0538,3.9751,.2542,-.33,4.0377,.1816,-.2613,3.9591,.1239,-.231,2.5407,-.2274,-.0968,2.5626,-.2608
                    ,-.1271,2.5627,.2815,-.2529,2.0256,-.2614,-.3634,2.5895,.0742,-.3008,2.6033,.2763,-.6988,1.4239,-.0205,-.5088,2.4806,.1227,-.8678,1.5241,.2358,-.403,1.3484,.0946,-.3786,1.3888,.414,-.7652,1.5238,.4317,-.5992,1.4722,.4775,-.8438,.1343,.9324,-1.1056,.8209,.5117,-.9239,-.0177,1.0051,-1.0237,.1358,.8955,-.964,.1709,.6473,-1.067,.1413,.8294
                    ,-.8549,-.0127,.7638,-1.2223,-.0275,.2975,-1.1033,-.0204,.3022,-.8299,-.017,.9751,-1.1033,-.0204,.3022,-.8549,-.0127,.7638,-1.1163,-.0278,.8551,-.8549,-.0127,.7638,-.9877,-.0204,.8092,-1.0237,.1358,.8955,-.5426,.6221,.3366,-.4395,1.2453,.1216,-.8298,.1295,.7751,-.7619,.3609,.6335,-.9185,1.4128,.2781,-.403,1.3484,.0946,-.7652,1.5238,.4317
                    ,-.8678,1.5241,.2358,-.7498,1.8535,.1913,-.5615,1.3726,-.0425,-.4395,1.2453,.1216,-.3008,2.6033,.2763,-.4168,2.6331,.0908,-.2104,3.9855,-.0188,-.2613,3.9591,.1239,-.5821,3.8494,.5631,-.694,3.8414,.3313,-.8336,3.4024,.4379,-.694,3.8414,.3313,-.3634,2.5895,.0742,-.4758,2.6758,.1184,-.4292,3.1073,.1233,-.5228,3.2496,.2515,-.2613,3.9591,.1239
                    ,-.2255,4.0425,.0561,-.0698,4.0591,.2024,-1.1069,.0487,.8487,-.9169,.1641,.6502,-.8545,.0555,.769,-.9877,.1909,.7005,-.9214,.1328,.9528,-.6842,3.4534,.6735,-.7488,3.3235,.7411,-.6842,3.4534,.6735,-.8163,3.3747,.2532,-.8336,3.4024,.4379,-.8681,3.2951,.4929,-.4758,2.6758,.1184,-.4292,3.1073,.1233,-.521,3.2769,.2511,-.5228,3.2496,.2515
                    ,-.595,3.4689,-.0756,-.5651,3.1231,.3367,-.521,3.2769,.2511,-.521,3.2769,.2511,-.3604,3.4559,.5399,-.9214,.1328,.9528,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.2223,-.0275,.2975,-1.3634,-.0392,.4854,-.964,.1709,.6473,-.8438,.1343,.9324,-.8299,-.017,.9751,-.9239,-.0177,1.0051,-.7989,1.4712,.0457,-.3786,1.3888,.414,-.0049,2.2612,.3692
                    ,-.6988,1.4239,-.0205,.0414,2.5416,.2641,-.1271,2.5627,.2815,-.3234,2.5563,-.1017,-.231,2.5407,-.2274,-.0538,3.9751,.2542,-.1586,3.7612,-.335,-.7232,3.8247,.0623,-.3212,3.7611,-.2693,-.0592,4.0031,-.1206,-.1195,3.9988,-.0861,-.415,3.4025,.6147,-.5821,3.8494,.5631,-.1307,3.7368,.5152,-.3382,2.3347,-.1735,-.7498,1.8535,.1913,-.5088,2.4806,.1227
                    ,-.2857,1.6875,.114,-.4298,2.494,.3759,-.047,2.0391,.0216,-.4639,2.4323,-.1032,-.7619,.3609,.6335,-.5426,.6221,.3366,-1.0037,.4449,.7105,-1.1056,.8209,.5117,-.1098,2.041,-.3296,-.047,2.0391,.0216,-.2529,2.0256,-.2614,-.0288,2.3101,-.3768,.1299,1.7941,-.4853,.63,1.8591,-.3238,.685,1.5226,-.396,.3574,2.722,-.055,.5053,2.4992,-.1393
                    ,.1336,2.4188,-.3721,.1762,2.1911,.3439,.3677,2.3525,.3085,.5053,2.4992,-.1393,.63,1.8591,-.3238,.5642,2.4354,.1619,.3227,2.5071,-.3465,.2299,3.9602,-.0372,.1111,3.9861,-.1203,.7497,3.8261,.0821,.3381,3.4896,-.4294,.5196,3.8375,-.4024,.1216,3.754,.419,.5196,3.8375,-.4024,.0018,3.7652,-.3889,.3097,4.0395,-.0432,-.0968,2.5626,-.2608
                    ,.04,2.6132,-.2675,.0066,2.1478,-.4251,.3084,2.6183,-.0565,.1823,2.6267,-.1924,.3597,2.5658,.1394,.3766,1.381,-.186,.7305,1.5362,-.3228,.6061,1.4576,-.2194,.4355,1.5881,-.6821,.3016,1.5351,-.6472,.7196,1.6112,-.5305,.5594,1.6192,-.6644,.9089,-.0179,-1.0536,.8043,-.0182,-.9962,.8262,-.0182,-.2987,.7919,-.0182,-.4794,.7978,.0505,-.4818
                    ,.7919,-.0182,-.4794,1.0681,.0563,-.4995,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.7919,-.0182,-.4794,.9812,.4538,-.517,1.0548,.141,-.4808,.2671,1.3495,-.4975,.411,.6967,-.5507,.7734,1.497,-.5598,1.0013,.8767,-.6307,.727,.3781,-.4837,.8102,.1283,-.4961,.7196,1.6112,-.5305,.7734,1.497,-.5598,.179,1.7492,-.2665,.2324,1.4523,-.4659
                    ,.6285,1.9246,-.3966,.7196,1.6112,-.5305,.7305,1.5362,-.3228,.3016,1.5351,-.6472,.2324,1.4523,-.4659,.2671,1.3495,-.4975,.3687,2.6597,-.0505,.4492,2.5142,-.1207,.3597,2.5658,.1394,.3084,2.6183,-.0565,.3687,2.6597,-.0505,.2299,3.9602,-.0372,.3097,4.0395,-.0432,.6806,3.8485,-.165,.6806,3.8485,-.165,.8413,3.4096,-.2326,.4236,2.6947,-.0915
                    ,.3084,2.6183,-.0565,.6479,3.3736,.1899,.4958,3.2544,-.1385,.2299,3.9602,-.0372,.2605,3.9526,.0875,.0036,3.999,-.1237,.1405,3.9754,.1915,.0451,3.9779,.233,1.0176,.135,-.4007,1.0548,.141,-.4808,1.0681,.0563,-.4995,.851,.1913,-.6048,.8102,.1283,-.4961,.7978,.0505,-.4818,.8384,.1316,-.3427,.9418,.2107,-.5865,.8897,.2026,-.6254
                    ,.851,.1913,-.6048,.9216,.1328,-.33,1.0176,.135,-.4007,.8864,3.4224,.0483,.8413,3.4096,-.2326,.8864,3.4224,.0483,.7062,3.4025,-.3605,.3919,3.4785,-.4477,.8413,3.4096,-.2326,.7062,3.4025,-.3605,.3568,3.1133,-.1382,.4236,2.6947,-.0915,.5647,3.1279,-.1631,.4958,3.2544,-.1385,.4907,3.2826,-.1468,.4907,3.2826,-.1468,.5647,3.1279,-.1631
                    ,.4958,3.2544,-.1385,.8384,.1316,-.3427,.9216,.1328,-.33,.8897,.2026,-.6254,.1405,3.9754,.1915,.0036,3.999,-.1237,1.0293,-.0176,-.3205,1.07,-.0174,-.5029,.9275,-.0179,-.4911,1.1197,-.0166,-.9497,.9089,-.0179,-1.0536,.8262,-.0182,-.2987,.5594,1.6192,-.6644,.4355,1.5881,-.6821,.6061,1.4576,-.2194,.3766,1.381,-.186,.04,2.6132,-.2675
                    ,.1823,2.6267,-.1924,.0018,3.7652,-.3889,-.1586,3.7612,-.335,.3749,3.7302,.3262,-.0592,4.0031,-.1206,.6479,3.3736,.1899,.1424,2.4474,-.3172,.3439,2.3481,.243,.4492,2.5142,-.1207,.6285,1.9246,-.3966,-.0079,2.0485,-.0203,.179,1.7492,-.2665,.5106,2.4362,.1266,.1218,2.2409,.3159,.2929,2.5367,-.2934,.411,.6967,-.5507,.727,.3781,-.4837
                    ,1.0013,.8767,-.6307,.9812,.4538,-.517,-.0079,2.0485,-.0203,-.1098,2.041,-.3296,-.0079,2.0485,-.0203,.0066,2.1478,-.4251
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(2190);
                _i.set([0,1,2,3,4,0]);
                CONTIG(_i, 6, 5, 15);
                _i.set([6,16,17,8,18,19,20,21,22,23,24,25,22,17,26,27,28,23,29,30,16,8,20,31,11,32,30,8,15,0,6,6,2,7,20,33,34,35,23,36,22,37,38,23,38,39,18,40,41,11
                ,42,43,8,10,32,9,14,5,44,45,46,47,48,45,49,50,51,52,53,54,49,55,56,46,57,58,59,60,48,61,60,62,45,60,46,63,64,52,51,65,66,67,46,58,65,44,67,68,61,62
                ,69,59,55,56,59,47,50,47,44,52,66,63,54,70,49,54,51,52], 17);
                CONTIG(_i, 135, 71, 99);
                _i.set([92,100,101,82,80,102,103,104,105,106,107,78,91,104], 164);
                CONTIG(_i, 178, 108, 118);
                _i.set([88,119,120,121,114], 189);
                CONTIG(_i, 194, 122, 133);
                _i.set([124,126], 206);
                CONTIG(_i, 208, 134, 154);
                _i.set([150,155,156,157,158,159,160,161,162,163,157,164,165,136,166,167,152], 229);
                CONTIG(_i, 246, 168, 191);
                _i.set([185,192,193,170,194,195,196,197,198,172,199,200,149,201,150,152,202,203,175,204,176,153,205,206,131,207,208,209,210,146,211,212,213,135,214,215,216,217,218,82,219,100,112,220,221,84,222,85,119,223
                ,120,224,225,226,227,228,229,230,231,71,232,233,234,235,236,237,238,239,240,191,241,242,188,243,244,245,185,246,247,170,235], 270);
                CONTIG(_i, 351, 248, 259);
                _i.set([120,260,224,117,89,118,76,86,74,96,77,97,253,261,251,262,93,263,255,264,265,266,83,267,74,224,268,118,269,96,190,270,241,187,245,271,228,232,272,273,274,230,275,276,277,278,183,187,180,279
                ,280,179,281,174,282,173,160,283,168,190,165,284,166,285,148,154,137,166,286,157,287,148,288,147,144,289,290,126,140,129,141,291,289,126,133,122,124,87,292,88,293,118,96,125,122,113,111,104,112,294
                ,91,90,112,106,295,82,296,80,269,91,78,224,88,120,103,297,80,298,299,74,141,300,301,302,147,303,146,304,305,306,307,308,147,309,310,311,144,302,139,312,313,129,306,314,160,284,315,163,174,287
                ,176,316,149,167,317,202,318,179,163,287,176,149,284,172,167,161,315,164,289,319,320,321,322,323,126,128,291,324,64,325,69,326,327,53,326,70,55,326,69,1,328,329,4,330,328,331,332,333,334,335
                ,336,337,338,339,333,340,341,342,343,335,344,345,346,347,348,349,350,351,347,342,352,353,349,354,355,30,343,356,357,339,345,32,335,30,328,340,332,329,332,358,359,357,360,361,349,355,362,347,363,364
                ,349,365,366,344,367,368,337,369,335,32,336,333,334,331,370,371,372,372,373,374,375,376,377,378,379,380,376,381,382,58,383,384,374,383,385,383,61,385,371,383,373,63,380,325,66,375,377,67,384,370
                ,65,370,375,385,68,386,374,387,381,388,374,381,375,372,388,63,377,378,389,382,379,377,389,378,390,391,392,393,75], 363);
                CONTIG(_i, 692, 394, 404);
                _i.set([87,405,406,90,407,408,409,410,411,412,413,414,410,415,416,417,418,398,102,419,420,421,422,423,424,425,421,108,426,427,428,429,115,430,431,117,432,433,434,435,436,114,437,430,438,439,440,441,442,443
                ,444,445,446,440,447,448,449,450,442], 703);
                CONTIG(_i, 762, 451, 470);
                _i.set([463,471,472,473,474,475,476,473,477,478,479,480,452,468], 782);
                CONTIG(_i, 796, 481, 511);
                _i.set([484,512,513,514,515,516,487,517,464,470,467,518,481,519,490,520,521,522,467,523,524,445,525,526,460,527,528,470,449,529,530,531,532,449,533,534,535,536,537,538,539,402,540,541,435,542,543,544,545,546
                ,547,548,549,392,550,551,233,552,553,554,510,555,556,507,557,506,558,559,503,560,561,507,498,562,510,483], 827);
                CONTIG(_i, 903, 563, 572);
                _i.set([571,573,543,574,542,433,407,117,404,76,393,397,411,413,567,575,576,577,409,578,579,570,580,581,403,582,543,393,583,396,433,411,584,483,504,585,501,586,587,547,588,273,550,589,590,591,592,498,593,501
                ,594,495,595,596,491,493,486,475,597,483,598,504,479,482,599,600,463,472,451,468,479,472,465,477,462,601,602,442,603,289,444,455,604,291,442,289,430,447,439,87,436,605,433,606,411,607,430,439,421,428
                ,536,425,608,90,609,536,538,533,419,610,396,425,406,542,404,543,398,611,103,612,394,613,614,604,615,616,602,617,618,460,619,620,621,523,622,462,623,624,602,457,625,454,626,620,444,627,482,597,599,477
                ,489,596,628,520,464,481,629,515,478,596,492,465,520,489,482,515,486,599,474,480,630,289,603,321,631,114,442,291,632,633,325,380,633,634,386,379,634,380,634,381,387,0,4,1,3,635,4,5,14,6
                ,8,17,9,11,31,12,14,636,15,16,637,17,18,638,19,21,24,22,24,639,640,17,641,26,28,21,23,30,642,16,20,19,31,15,3,0,6,0,2,20,11,643,35,29,23,22,644,645,23,22
                ,38,18,20,646,11,13,42,9,17,14,44,47,45,47,59,48,49,56,50,52,64,53,49,70,55,46,60,57,59,62,60,61,57,60,45,48,60,63,325,64,51,50,65,67,44,46,65,50,44,62
                ,69,327,327,68,62,69,62,59,56,55,59,50,56,47,52,51,66,54,53,70,54,49,51,71,231,72,74,647,75,77,269,78,80,648,649,83,650,84,86,405,87,89,407,90,92,99,93,95,651,96
                ,98,652,99,100,653,654,80,655,102,104,109,656,107,657,78,104,658,108,659,660,111,113,122,114,661,662,117,88,663,119,121,664,114,665,132,124,126,135,666,129,667,130,132,668,133,126,290,134,136,165
                ,137,139,669,140,142,670,671,145,672,146,148,287,149,673,166,152,154,148,150,156,162,157,159,674,160,162,675,163,164,315,165,166,284,167,168,676,169,171,677,172,174,678,175,177,679,178,180,680,181,183
                ,681,682,186,278,187,189,683,190,185,684,685,170,169,686,196,687,688,172,689,199,149,690,691,152,167,202,175,692,693,153,152,694,131,130,695,696,697,698,699,150,700,135,134,214,701,135,702,82,703,704
                ,112,705,706,84,707,708,119,709,710,224,711,712,713,714,228,230,274,231,232,715,233,235,170,716,717,185,718,191,190,241,188,187,719,245,183,185,720,168,170,721,722,249,251,722,723,724,258,255,725,726
                ,258,120,727,728,117,407,89,76,405,86,96,269,77,253,729,261,730,731,93,255,732,733,734,735,83,74,86,224,118,89,269,190,168,736,187,183,245,228,715,232,273,589,274,737,198,738,278,739,183,180
                ,182,740,179,178,741,742,171,173,743,744,168,165,315,284,745,157,148,137,165,166,157,163,287,746,145,147,289,747,290,140,748,129,133,121,122,87,749,750,751,752,118,125,124,122,111,753,104,754,107,91
                ,112,104,106,82,755,756,269,89,91,224,86,88,103,757,758,759,760,761,141,129,762,302,144,147,146,763,764,306,131,765,147,146,766,767,142,144,139,141,768,129,131,306,160,173,284,163,179,174,176,769
                ,770,167,172,771,772,177,179,287,174,176,284,173,172,161,160,315,289,773,774,321,114,775,324,327,326,326,64,324,53,64,326,55,70,326,1,4,328,4,776,330,331,358,332,334,342,335,337,777,338,333
                ,332,340,342,353,343,344,357,345,347,351,348,778,779,351,342,780,781,349,348,354,30,335,343,357,337,339,328,330,340,329,328,332,782,337,357,783,784,349,785,786,347,787,347,349,788,357,344,368,777,337
                ,333,342,334,370,384,371,372,371,373,375,388,376,378,389,379,376,388,381,58,57,383,374,373,383,383,57,61,371,384,383,63,378,380,66,65,375,67,58,384,65,67,370,386,387,385,385,61,68,374,385
                ,387,388,372,374,375,370,372,63,66,377,389,376,382,377,376,389,390,789,391,393,76,75,395,423,396,398,533,790,401,791,402,404,434,87,406,425,90,408,792,409,411,606,412,414,408,410,416,533,793,398
                ,103,102,794,109,421,423,795,796,421,109,108,797,536,428,115,114,430,117,798,799,434,542,435,114,800,437,801,802,439,803,449,442,444,523,445,440,439,447,449,530,450,451,479,452,454,604,455,457,602,804
                ,460,805,461,463,470,464,806,521,467,807,808,470,809,810,472,474,597,475,473,472,477,479,599,480,468,467,481,483,510,484,486,515,487,489,520,490,492,596,493,495,811,496,498,507,812,501,593,502,504,813
                ,814,507,815,816,510,817,818,819,820,513,515,821,822,823,824,464,467,825,826,827,828,490,521,829,830,523,831,832,833,834,835,836,837,838,449,839,840,841,842,843,533,416,844,536,845,846,847,848,402,849
                ,850,435,543,851,852,853,854,547,855,390,392,856,857,233,858,859,860,861,862,863,864,504,506,865,501,503,866,867,507,868,869,510,870,871,564,872,565,567,873,874,570,875,876,571,543,877,878,433,406,407
                ,404,405,76,397,396,411,567,879,575,880,881,409,882,883,570,884,401,403,543,404,393,396,406,433,885,886,483,887,498,501,888,552,547,273,889,550,890,891,892,498,500,593,893,894,495,596,489,491,486,488
                ,475,483,485,895,479,468,482,896,897,463,451,898,468,472,463,465,462,461,899,442,450,603,444,446,455,430,437,447,87,434,436,433,900,606,901,431,430,421,426,428,425,902,903,904,421,536,533,398,419,396
                ,423,425,542,434,404,398,400,905,906,393,394,907,444,604,908,462,602,909,910,460,620,911,912,913,460,462,624,914,602,915,604,454,620,523,444,482,486,597,477,465,489,916,917,520,481,918,919,478,477,596
                ,465,464,520,482,481,515,599,597,474,920,921,289,321,922,923,387,386,634,633,380,634,379,382,634,634,382,381], 913);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.4329,.1272,-.8924,-.1268,.064,-.9898,-.4311,.0648,-.9,-.4134,.0916,-.9059,-.2494,.1832,-.9509,-.8419,.5394,.0168,-.7468,.3839,-.543,-.7897,.446,-.4212,.0896,.3851,.9185,-.3684,.64,.6742,-.0073,.4197,.9076,-.4015,-.052,-.9144,-.2633,-.1539,-.9523,-.2557,-.112,-.9602,-.8213,.5703,.0157,-.7512,.2796,-.5978,.0344,.2025,.9787
                    ,-.4353,.6409,.6322,-.9753,.2113,.064,-.7903,.0502,-.6107,-.7695,.081,-.6335,-.0391,-.0398,.9984,-.6058,.1339,.7843,-.0304,-.0392,.9987,-.6363,.1363,.7593,-.9753,.2113,.064,-.9167,.3977,.0398,-.8213,.5703,.0157,.189,-.1037,.9765,.1857,-.1138,.976,.2771,.1397,.9506,-.4229,-.1007,-.9005,.1596,.2963,.9416,-.4134,.0916,-.9059
                    ,-.7512,.2796,-.5978,.1614,.0155,.9868,.0344,.2025,.9787,-.9167,.3977,.0398,-.5938,.3515,.7237,.0344,.2025,.9787,-.7512,.2796,-.5978,-.9167,.3977,.0398,-.3452,.0372,-.9378,-.4134,.0916,-.9059,-.5449,.3263,.7724,-.6112,.791,.0271,-.4039,.4159,.8148,-.8083,.5343,.2472,-.5642,.8201,-.0951,-.9309,.2365,.2781,-.4919,.3323,.8047
                    ,-.4274,.2254,.8755,-.3819,-.5054,.7737,-.9931,-.1022,-.0572,-.953,.0038,.3028,-.9589,.2694,-.0888,-.9268,.3003,.2257,-.0127,.9198,-.3922,.03,.4492,.8929,-.8227,.5582,-.1072,-.3143,.8749,-.3684,-.026,.6157,-.7875,-.5787,.4858,-.655,.0475,-.5686,.8212,-.7893,-.5513,-.2701,.033,.3034,.9523,.0505,.2492,.9671,.0327,-.1916,.9809
                    ,-.0317,.2946,-.9551,-.8249,.1928,-.5313,-.9564,.2224,-.1893,-.4488,.8927,-.0402,-.9198,.3837,-.0815,-.0346,.9993,.0145,.2704,-.0818,.9592,.3381,.2892,.8956,.3518,-.0232,.9358,-.9677,-.2499,.0338,-.6702,-.2031,-.7138,-.9114,-.3587,.2017,-.1639,.9651,-.2044,-.4488,.8927,-.0402,-.2425,.9268,-.2868,-.4122,-.2788,.8674,-.3007,.4187,.8568
                    ,-.3409,.613,.7127,.1205,-.1425,.9824,.109,-.5639,.8186,-.0039,-.5311,.8473,-.4723,-.0675,-.8788,-.3209,.106,-.9411,-.5644,.0762,-.8219,-.7907,.4911,-.3654,-.4714,-.3662,-.8023,-.6702,-.2031,-.7138,-.1552,.0699,-.9854,-.8636,-.4036,-.3022,-.9268,-.373,.0441,-.7529,.6343,.1754,-.9016,.2663,-.3409,.1048,.9932,-.0498,-.7907,.4911,-.3654
                    ,-.3201,.388,-.8643,-.0847,.96,-.2667,.0703,.9422,.3275,.3381,.2892,.8956,.2468,.3147,.9165,-.4801,.3732,-.7938,.1522,.876,.4577,.2305,.7087,.6667,.1048,.9932,-.0498,.0268,.9993,.0259,.0348,.9223,.3849,-.4526,-.2632,-.852,-.3583,.1811,-.9158,-.074,-.2934,-.9531,-.4526,-.2632,-.852,-.0185,-.4965,-.8678,-.5292,-.4718,-.7053
                    ,.5951,.0827,.7994,-.6013,-.4263,.6757,-.5007,.0229,-.8653,-.4786,.2703,-.8354,-.1552,.0699,-.9854,-.2409,.8373,-.4908,-.425,.4202,-.8017,.2046,.6401,.7405,.5951,.0827,.7994,.0617,.1709,.9833,-.4957,.0068,-.8685,.1985,-.2775,-.94,.0843,-.314,-.9456,-.2878,.9472,-.1415,-.7624,.2409,-.6005,-.578,.3583,.7331,-.1311,.8943,.4278
                    ,.8228,-.3566,-.4424,.7873,-.1891,.5869,.8296,-.3775,-.4114,-.9387,.3413,.0476,-.7646,.1177,-.6337,-.7432,.1572,-.6502,.8403,-.4636,-.2808,.7873,-.1891,.5869,.7313,-.3199,.6023,.0428,.1209,.9917,-.5705,.2738,.7743,.0152,.0603,.998,-.4529,-.1208,-.8833,.0722,-.5768,-.8137,.1764,-.307,-.9352,.0428,.1209,.9917,-.5045,.4007,.7647
                    ,-.556,.3277,.7638,-.3741,-.026,-.927,.1985,-.2775,-.94,-.9333,.3584,-.0208,-.8097,.0432,-.5852,-.7646,.1177,-.6337,.907,-.3592,-.2197,.8148,-.2669,.5145,.7276,-.6267,-.2788,-.9384,.3452,.0135,-.8292,-.2248,-.5116,.7189,-.5434,-.4334,.8777,-.0168,.4789,.1072,.3132,.9436,-.626,.3222,.7101,.0985,.302,.9482,-.341,-.6035,.7207
                    ,-.4859,.3071,.8182,-.0663,.4386,.8962,-.5812,.2577,.7718,.0369,.1781,.9833,-.571,-.4581,-.6812,.5977,-.1873,-.7795,.0851,-.6919,-.7169,-.9764,.0148,.2153,-.8418,.3833,-.3801,-.8738,-.2617,-.4098,.0513,-.9986,-.01,.4645,-.3599,-.8091,-.3706,-.4051,-.8357,-.318,.7543,-.5743,.4645,-.3599,-.8091,.418,.6882,-.5929,-.6165,-.6681,.4165
                    ,-.6976,.7126,.0742,-.8215,.3833,.4221,.7297,-.6324,-.26,.8214,.2148,.5284,.9438,-.0836,-.3198,.7297,-.6324,-.26,.9438,-.0836,-.3198,-.6165,-.6681,.4165,-.8215,.3833,.4221,.6811,-.5329,.5021,.0513,-.9986,-.01,.0919,-.5685,.8175,-.9301,.3598,.074,-.9764,.0148,.2153,.8228,-.3566,-.4424,-.9945,.0754,.0721,-.9384,.3452,.0135
                    ,.7276,-.6267,-.2788,-.9384,.3452,.0135,-.9333,.3584,-.0208,.8296,-.3775,-.4114,.8403,-.4636,-.2808,-.556,.3277,.7638,-.9387,.3413,.0476,.1985,-.2775,-.94,.8228,-.3566,-.4424,.8296,-.3775,-.4114,-.9084,.418,.0059,-.2878,.9472,-.1415,.5951,.0827,.7994,-.2878,.9472,-.1415,-.1552,.0699,-.9854,-.0346,.9993,.0145,-.7529,.6343,.1754
                    ,.1048,.9932,-.0498,-.7529,.6343,.1754,-.9268,-.373,.0441,-.4458,-.3077,.8405,-.9114,-.3587,.2017,-.4122,-.2788,.8674,-.0346,.9993,.0145,-.4742,.6324,.6125,.0268,.9993,.0259,-.4202,.8185,-.3916,-.7231,.0322,-.69,-.1114,.9468,.302,.2382,.4076,.8815,.1522,.876,.4577,-.6176,.4779,.6246,-.8215,.3833,.4221,-.9301,.3598,.074
                    ,.5977,-.1873,-.7795,.9438,-.0836,-.3198,.907,-.3592,-.2197,.753,.1392,.6431,.907,-.3592,-.2197,-.8418,.3833,-.3801,-.9301,.3598,.074,-.3244,.5959,-.7346,.5977,-.1873,-.7795,-.0663,.4386,.8962,-.3007,.4187,.8568,-.875,.425,.2318,-.9061,.39,.1636,.804,-.102,.5858,-.3007,.4187,.8568,.3694,.8383,.401,-.9016,.2663,-.3409
                    ,-.0673,-.2773,-.9584,-.4714,-.3662,-.8023,-.9061,.39,.1636,-.7195,.3859,-.5774,-.9016,.2663,-.3409,-.9677,-.2499,.0338,.8007,-.4828,-.3546,-.9114,-.3587,.2017,-.4983,-.8299,-.2508,-.4983,-.8299,-.2508,-.4714,-.3662,-.8023,-.4983,-.8299,-.2508,-.9114,-.3587,.2017,-.4122,-.2788,.8674,-.8806,-.1259,-.4569,-.0663,.4386,.8962,-.8418,.3833,-.3801
                    ,.0268,.9993,.0259,-.1545,.8394,-.5211,-.564,-.199,-.8014,-.341,-.6035,.7207,.0513,-.9986,-.01,-.6165,-.6681,.4165,-.9153,-.3969,-.0673,-.9153,-.3969,-.0673,-.6165,-.6681,.4165,-.3244,.5959,-.7346,.753,.1392,.6431,.6811,-.5329,.5021,.1284,.2593,.9572,-.7646,.1177,-.6337,.0428,.1209,.9917,-.502,-.4142,-.7592,.7873,-.1891,.5869
                    ,.307,.0205,.9515,.049,.1514,.9872,.1907,-.1983,.9614,.0617,.1709,.9833,-.425,.4202,-.8017,-.3201,.388,-.8643,-.3409,.613,.7127,-.4801,.3732,-.7938,-.4202,.8185,-.3916,-.4122,-.2788,.8674,.2468,.3147,.9165,-.5007,.0229,-.8653,-.7624,.2409,-.6005,.6249,-.2885,.7254,.049,.1514,.9872,-.9084,.418,.0059,-.578,.3583,.7331
                    ,-.1593,-.4258,-.8907,.8403,-.4636,-.2808,.8866,-.4385,-.147,-.578,.3583,.7331,.049,.1514,.9872,.8866,-.4385,-.147,-.7624,.2409,-.6005,-.9084,.418,.0059,-.5007,.0229,-.8653,.9062,-.2224,.3596,.7189,-.5434,-.4334,-.9764,.0148,.2153,-.9945,.0754,.0721,.8866,-.4385,-.147,.6249,-.2885,.7254,-.0346,-.7341,-.6782,-.1593,-.4258,-.8907
                    ,.8866,-.4385,-.147,-.1093,-.5665,.8168,.0388,-.8891,.4561,-.7869,.0814,-.6117,-.5209,.1003,-.8477,.0285,.2396,-.9704,.1716,.1967,-.9653,-.0791,.2759,-.9579,.7615,.573,-.3029,.4582,.5017,-.7337,.7615,.5985,-.2487,.6269,.5184,.5816,.3294,.2465,.9114,.2571,.2417,.9356,-.0917,.1504,-.9843,-.2286,.0591,-.9717,-.0652,.1056,-.9922
                    ,.3834,.4256,-.8196,.8378,.4313,-.3347,.7102,.4999,.4957,.4733,-.0212,.8806,.8923,.242,-.3811,.3936,.2089,-.8952,.8869,.2307,-.4002,.9128,.0009,.4084,.4958,-.2413,.8342,.4921,-.243,.8359,.8923,.242,-.3811,.9261,.0103,.3771,.8378,.4313,-.3347,.8909,.2193,.3976,.282,-.3103,.9078,.286,-.3218,.9026,.3581,-.2505,.8994
                    ,.3644,.2412,-.8994,.5318,.5327,-.6583,-.0791,.2759,-.9579,.3834,.4256,-.8196,.3581,-.2505,.8994,.8378,.4313,-.3347,.8909,.2193,.3976,.8909,.2193,.3976,.4733,-.0212,.8806,.3834,.4256,-.8196,.8378,.4313,-.3347,-.1578,.255,-.9539,-.0791,.2759,-.9579,.5955,.3258,.7343,.6122,.7906,-.0137,.8234,.5337,.1927,.5572,.8197,-.1326
                    ,.8142,.5576,-.1618,.5451,.3291,.7711,.9579,.2137,.1917,.5123,.2207,.8299,.471,-.512,.7183,.9587,-.1841,-.2167,.6887,-.582,-.4323,.9543,.2493,-.1645,.9308,.183,-.3164,.2897,.8747,-.3886,.4577,.4156,.786,.5341,.4854,-.6922,.4611,.0923,-.8825,.7995,.1701,-.576,.9408,.2963,.1646,.9839,-.0406,.1742,.3495,.8744,-.3367
                    ,.8061,.3023,-.5087,.2998,.0288,-.9536,.4456,-.0473,.8939,.4251,.284,.8594,.8459,-.3139,-.4311,.4588,-.1883,-.8683,.7738,-.3284,-.5416,-.0076,.9657,-.2593,.3495,.8744,-.3367,.1462,.7989,-.5835,.8678,-.3373,.3649,.815,.3191,.4837,.7863,.453,.4201,.4839,-.104,.8689,.2833,-.1248,.9509,.033,-.0991,-.9945,-.1633,-.0982,-.9817
                    ,.3452,.5266,-.7768,-.2372,-.2553,-.9373,.4476,.3573,-.8197,.5485,-.422,-.7218,-.7449,-.6378,.1957,.7451,-.3981,-.535,.6909,.654,-.3081,.8012,.4219,-.4243,-.1286,.9907,.0438,.3452,.5266,-.7768,.6909,.654,-.3081,-.167,.3832,-.9084,.3381,.2892,.8956,.1639,.9442,.2856,.4251,.284,.8594,-.0217,-.196,-.9803,-.167,.3832,-.9084
                    ,-.0989,.0408,-.9943,.2735,.9252,.2629,-.1286,.9907,.0438,.0492,.9984,.0275,.0639,.9978,-.0157,-.0212,.5137,-.8577,.1813,-.1848,-.9659,.1813,-.1848,-.9659,.262,-.4302,-.8638,.38,-.548,.7452,.0452,-.039,.9982,.3713,.0981,.9233,-.0793,.2998,-.9507,-.7449,-.6378,.1957,-.0315,.9659,-.257,.2431,.9693,.0359,.0452,-.039,.9982
                    ,.2851,.3936,.8739,.3713,.0981,.9233,-.0325,.3551,-.9342,-.6723,.0381,-.7393,-.1495,.32,-.9355,.3704,.49,-.7891,.8218,.4712,-.3202,.4239,.7229,.5456,.4906,-.1582,.8569,-.3952,-.4515,.8,-.9621,-.2654,-.0624,-.9568,-.2887,-.0333,.8626,.3883,-.3241,.3475,.3915,-.852,.8255,.4263,-.3698,-.9072,-.4173,.0527,-.3952,-.4515,.8
                    ,-.9568,-.2887,-.0333,.9072,.0479,.418,.4759,-.2245,.8503,.5099,-.2747,.8152,-.0641,.1996,-.9778,-.5114,-.3264,-.7949,.0246,-.1465,-.9889,.4759,-.2245,.8503,.8551,.1834,.4848,.4084,-.0026,.9127,-.1495,.32,-.9355,-.6452,-.0093,-.764,.8255,.4263,-.3698,.4059,.2888,-.8671,.8443,.397,-.36,-.841,-.5384,-.0535,-.6928,.0819,.7165
                    ,-.9912,-.0538,-.1209,.4452,-.0131,-.8953,.9016,.1214,-.4151,-.5272,-.2363,.8162,-.8812,-.4475,-.1521,.9186,.1549,.3635,.3817,-.0273,.9239,.0652,.3038,.9505,.6011,-.5754,.5546,.0698,-.5567,.8278,.4498,-.1102,.8863,.8056,.2839,.52,.2068,.2635,.9422,.1237,-.2069,-.9705,-.8466,.1694,-.5045,-.0394,.6573,-.7526,.9531,.0076,-.3026
                    ,.6724,.4418,-.5938,.9778,.1913,-.0854,.003,-1,-.0003,-.752,-.4051,-.5199,-.7572,-.6518,.0425,-.0287,.7391,-.673,-.752,-.4051,-.5199,-.0179,-.3948,-.9186,.6378,.7117,-.2943,.7288,-.678,.0956,.975,.2126,.064,-.7201,.2369,.6522,-.7572,-.6518,.0425,-.9879,.1507,.0357,-.6836,.6466,-.3384,-.7572,-.6518,.0425,-.752,-.4051,-.5199
                    ,.7158,.2797,.6399,.7288,-.678,.0956,.003,-1,-.0003,-.5676,-.5456,.6165,.0698,-.5567,.8278,.9025,.0704,.4249,.9778,.1913,-.0854,-.9621,-.2654,-.0624,.9016,.1214,-.4151,-.841,-.5384,-.0535,-.4892,-.4613,-.7402,.8948,.0999,.435,.8443,.397,-.36,-.5885,.0563,-.8065,-.9568,-.2887,-.0333,.8626,.3883,-.3241,.8948,.0999,.435
                    ,-.6723,.0381,-.7393,-.9621,-.2654,-.0624,.8218,.4712,-.3202,.9041,.1431,.4026,.0452,-.039,.9982,.2431,.9693,.0359,-.002,.9345,-.3559,.0639,.9978,-.0157,.3495,.8744,-.3367,.2397,.9055,.35,.6909,.654,-.3081,.749,.5485,.3716,.6909,.654,-.3081,.749,.5485,.3716,.7451,-.3981,-.535,.8542,-.4559,.2497,.9084,-.2261,.3516
                    ,.8459,-.3139,-.4311,.7738,-.3284,-.5416,.0639,.9978,-.0157,.7942,.468,.3874,.8061,.3023,-.5087,.1462,.7989,-.5835,.1005,-.2479,-.9635,.2735,.9252,.2629,.5701,.3313,.7518,.8056,.2839,.52,.975,.2126,.064,-.8466,.1694,-.5045,-.9879,.1507,.0357,-.6928,.0819,.7165,-.9912,-.0538,-.1209,.6724,.4418,-.5938,.9778,.1913,-.0854
                    ,-.0394,.6573,-.7526,.2068,.2635,.9422,.815,.3191,.4837,.8251,.4452,-.3477,.7178,.4243,.552,.815,.3191,.4837,-.2384,-.2169,.9466,.7863,.453,.4201,.4476,.3573,-.8197,-.6124,-.1377,-.7784,.1566,.498,-.8529,.8012,.4219,-.4243,.8251,.4452,-.3477,.7451,-.3981,-.535,.3795,-.9103,-.1651,.7863,.453,.4201,.8459,-.3139,-.4311
                    ,-.0217,-.196,-.9803,.3795,-.9103,-.1651,-.2372,-.2553,-.9373,.8459,-.3139,-.4311,.3795,-.9103,-.1651,.8678,-.3373,.3649,-.6928,.0819,.7165,-.0394,.6573,-.7526,.6724,.4418,-.5938,.2735,.9252,.2629,.0492,.9984,.0275,-.2255,-.294,-.9288,.6011,-.5754,.5546,.003,-1,-.0003,.0698,-.5567,.8278,.7995,-.3569,-.4831,.7995,-.3569,-.4831
                    ,.7288,-.678,.0956,.5333,-.0802,-.8421,-.4913,-.4114,.7677,-.5676,-.5456,.6165,-.6255,-.3763,.6835,.3475,.3915,-.852,-.3952,-.4515,.8,-.3088,-.5835,.7511,-.1307,-.4404,.8882,.3228,.4342,-.8409,.1907,-.1983,.9614,-.5165,.2219,-.827,-.5165,.2219,-.827,-.3201,.388,-.8643,.4251,.284,.8594,.3452,.5266,-.7768,-.1545,.8394,-.5211
                    ,.8678,-.3373,.3649,.749,.5485,.3716,-.0793,.2998,-.9507,.3704,.49,-.7891,.4906,-.1582,.8569,-.1307,-.4404,.8882,.8218,.4712,-.3202,.9041,.1431,.4026,-.4852,-.0342,-.8737,-.9072,-.4173,.0527,.9041,.1431,.4026,.4906,-.1582,.8569,-.8372,-.4584,.2981,.3704,.49,-.7891,.8218,.4712,-.3202,-.0793,.2998,-.9507,-.8812,-.4475,-.1521
                    ,.9531,.0076,-.3026,-.8372,-.4584,.2981,-.4852,-.0342,-.8737,.3713,.0981,.9233,.281,-.555,.7829,.7063,.0433,-.7065,-.3452,.0372,-.9378,-.9167,.3977,.0398,-.5938,.3515,.7237,-.9794,.1963,.0461,-.9794,.1963,.0461,-.9753,.2113,.064,-.5938,.3515,.7237,.1614,.0155,.9868,-.4134,.0916,-.9059,-.9753,.2113,.064,-.9167,.3977,.0398
                    ,-.7512,.2796,-.5978,.2468,.3147,.9165,-.4202,.8185,-.3916,-.4488,.8927,-.0402,.3694,.8383,.401,-.425,.4202,-.8017,-.9061,.39,.1636,-.7529,.6343,.1754,-.7907,.4911,-.3654,-.4801,.3732,-.7938,.3381,.2892,.8956,-.7907,.4911,-.3654,-.1114,.9468,.302,.1048,.9932,-.0498,-.0346,.9993,.0145,-.4526,-.2632,-.852,-.074,-.2934,-.9531
                    ,.0617,.1709,.9833,-.1593,-.4258,-.8907,-.1552,.0699,-.9854,.5951,.0827,.7994,-.3741,-.026,-.927,-.9084,.418,.0059,-.9333,.3584,-.0208,.8296,-.3775,-.4114,.7873,-.1891,.5869,-.556,.3277,.7638,.0428,.1209,.9917,.753,.1392,.6431,-.9945,.0754,.0721,.0919,-.5685,.8175,-.6176,.4779,.6246,-.3244,.5959,-.7346,-.9301,.3598,.074
                    ,.7297,-.6324,-.26,-.3706,-.4051,-.8357,.4645,-.3599,-.8091,.6811,-.5329,.5021,.4645,-.3599,-.8091,.7297,-.6324,-.26,-.6165,-.6681,.4165,.7297,-.6324,-.26,.0513,-.9986,-.01,-.6176,.4779,.6246,.7189,-.5434,-.4334,.8228,-.3566,-.4424,.907,-.3592,-.2197,.7276,-.6267,-.2788,-.9384,.3452,.0135,.8296,-.3775,-.4114,-.556,.3277,.7638
                    ,-.9333,.3584,-.0208,-.9387,.3413,.0476,.1985,-.2775,-.94,.8228,-.3566,-.4424,.5951,.0827,.7994,-.2878,.9472,-.1415,-.4488,.8927,-.0402,-.0346,.9993,.0145,-.3409,.613,.7127,-.7529,.6343,.1754,-.9061,.39,.1636,-.7529,.6343,.1754,-.1552,.0699,-.9854,-.9268,-.373,.0441,-.9677,-.2499,.0338,-.9114,-.3587,.2017,-.0346,.9993,.0145
                    ,-.9198,.3837,-.0815,-.2442,.4747,.8456,-.8215,.3833,.4221,.5977,-.1873,-.7795,.9438,-.0836,-.3198,-.8418,.3833,-.3801,-.0663,.4386,.8962,-.3007,.4187,.8568,-.1943,.5271,.8272,-.3007,.4187,.8568,-.9016,.2663,-.3409,-.9061,.39,.1636,-.875,.425,.2318,-.9268,-.373,.0441,-.9677,-.2499,.0338,-.4983,-.8299,-.2508,-.9114,-.3587,.2017
                    ,-.6702,-.2031,-.7138,.8007,-.4828,-.3546,-.4983,-.8299,-.2508,-.4983,-.8299,-.2508,.3694,.8383,.401,-.0663,.4386,.8962,-.341,-.6035,.7207,.0513,-.9986,-.01,-.3706,-.4051,-.8357,-.9153,-.3969,-.0673,-.3244,.5959,-.7346,.753,.1392,.6431,.6811,-.5329,.5021,.0919,-.5685,.8175,-.7646,.1177,-.6337,.7873,-.1891,.5869,.6249,-.2885,.7254
                    ,-.3741,-.026,-.927,.1907,-.1983,.9614,.0617,.1709,.9833,-.425,.4202,-.8017,-.4526,-.2632,-.852,-.1114,.9468,.302,-.3201,.388,-.8643,-.7907,.4911,-.3654,-.4801,.3732,-.7938,-.1545,.8394,-.5211,-.4202,.8185,-.3916,-.4122,-.2788,.8674,-.3409,.613,.7127,.2468,.3147,.9165,-.5007,.0229,-.8653,-.9387,.3413,.0476,-.9084,.418,.0059
                    ,.8403,-.4636,-.2808,-.578,.3583,.7331,.8866,-.4385,-.147,-.7624,.2409,-.6005,.7276,-.6267,-.2788,.7189,-.5434,-.4334,-.9764,.0148,.2153,-.9945,.0754,.0721,-.0346,-.7341,-.6782,.8866,-.4385,-.147,-.1593,-.4258,-.8907,-.1578,.255,-.9539,-.2401,.0948,-.9661,.8923,.242,-.3811,.8869,.2307,-.4002,.7615,.5985,-.2487,.8378,.4313,-.3347
                    ,-.0791,.2759,-.9579,.3581,-.2505,.8994,.4733,-.0212,.8806,.8378,.4313,-.3347,.8923,.242,-.3811,.8909,.2193,.3976,.3834,.4256,-.8196,.0639,.9978,-.0157,.3495,.8744,-.3367,.749,.5485,.3716,-.0217,-.196,-.9803,.3452,.5266,-.7768,.3381,.2892,.8956,.3452,.5266,-.7768,-.167,.3832,-.9084,-.1286,.9907,.0438,-.074,-.2934,-.9531
                    ,.1813,-.1848,-.9659,-.4852,-.0342,-.8737,-.7449,-.6378,.1957,-.5165,.2219,-.827,.0452,-.039,.9982,-.3952,-.4515,.8,.8948,.0999,.435,.4759,-.2245,.8503,-.1495,.32,-.9355,-.6723,.0381,-.7393,.8255,.4263,-.3698,.3475,.3915,-.852,-.0179,-.3948,-.9186,-.752,-.4051,-.5199,-.5676,-.5456,.6165,-.7572,-.6518,.0425,-.9879,.1507,.0357
                    ,-.7572,-.6518,.0425,.975,.2126,.064,.7288,-.678,.0956,.003,-1,-.0003,-.7572,-.6518,.0425,.9531,.0076,-.3026,.9778,.1913,-.0854,-.9621,-.2654,-.0624,-.8812,-.4475,-.1521,.8443,.397,-.36,.9016,.1214,-.4151,-.841,-.5384,-.0535,-.9912,-.0538,-.1209,.8255,.4263,-.3698,.8443,.397,-.36,-.9072,-.4173,.0527,-.9568,-.2887,-.0333
                    ,.8626,.3883,-.3241,.8255,.4263,-.3698,.8948,.0999,.435,-.6723,.0381,-.7393,-.9568,-.2887,-.0333,-.9621,-.2654,-.0624,.2431,.9693,.0359,.8218,.4712,-.3202,.0452,-.039,.9982,-.7449,-.6378,.1957,.2431,.9693,.0359,.0639,.9978,-.0157,-.1286,.9907,.0438,.6909,.654,-.3081,.6909,.654,-.3081,.8012,.4219,-.4243,.7451,-.3981,-.535
                    ,-.7449,-.6378,.1957,.8678,-.3373,.3649,.8459,-.3139,-.4311,.0639,.9978,-.0157,.0492,.9984,.0275,.1462,.7989,-.5835,.2735,.9252,.2629,.1522,.876,.4577,.8056,.2839,.52,.9778,.1913,-.0854,.975,.2126,.064,-.8466,.1694,-.5045,-.9912,-.0538,-.1209,-.9879,.1507,.0357,-.6928,.0819,.7165,.6724,.4418,-.5938,-.0394,.6573,-.7526
                    ,-.8466,.1694,-.5045,.2068,.2635,.9422,.8056,.2839,.52,.815,.3191,.4837,.8012,.4219,-.4243,.815,.3191,.4837,.4476,.3573,-.8197,-.2372,-.2553,-.9373,.8012,.4219,-.4243,.4476,.3573,-.8197,.7738,-.3284,-.5416,.7451,-.3981,-.535,-.8683,-.4395,.23,.8459,-.3139,-.4311,.3795,-.9103,-.1651,.3795,-.9103,-.1651,-.8683,-.4395,.23
                    ,.8459,-.3139,-.4311,-.6928,.0819,.7165,.2068,.2635,.9422,-.0394,.6573,-.7526,.2735,.9252,.2629,.1462,.7989,-.5835,.6011,-.5754,.5546,.7288,-.678,.0956,.003,-1,-.0003,.7995,-.3569,-.4831,-.0179,-.3948,-.9186,-.5676,-.5456,.6165,.3475,.3915,-.852,-.1495,.32,-.9355,.4759,-.2245,.8503,-.3952,-.4515,.8,.1813,-.1848,-.9659
                    ,-.5165,.2219,-.827,-.167,.3832,-.9084,-.3201,.388,-.8643,.4251,.284,.8594,-.1545,.8394,-.5211,.8678,-.3373,.3649,-.0793,.2998,-.9507,.4906,-.1582,.8569,.8218,.4712,-.3202,.8626,.3883,-.3241,-.8372,-.4584,.2981,-.9072,-.4173,.0527,.9041,.1431,.4026,-.1307,-.4404,.8882,.3704,.49,-.7891,-.8812,-.4475,-.1521,-.841,-.5384,-.0535
                    ,.9016,.1214,-.4151,.9531,.0076,-.3026,-.8372,-.4584,.2981,-.0346,-.7341,-.6782,-.8372,-.4584,.2981,-.4852,-.0342,-.8737
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .4257,.7404,.44,.7831,.4118,.7648,.4387,.7095,.472,.7353,.3534,.7236,.3939,.7297,.3857,.7446,.7196,.3888,.7097,.4278,.6924,.3975,.5973,.5563,.6257,.4948,.6218,.5591,.3582,.707,.4092,.6997,.7442,.38,.7253,.4208,.5362,.544,.5878,.4895,.574,.5535,.4819,.0978,.4189,.1304,.4169,.103,.4846,.1236
                    ,.4286,.1718,.7729,.456,.7405,.4657,.4808,.07,.4155,.0641,.7171,.3379,.6063,.4924,.6727,.3666,.5844,.6727,.5527,.6759,.31,.0622,.2916,.1042,.3024,.1854,.2936,.1366,.2916,.1042,.5527,.6759,.5109,.6683,.6177,.6633,.5844,.6727,0,0,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.9554,.1617,.9389,.1445,.9489,.1315,.2769,.5867
                    ,.3515,.6194,.2759,.616,.6691,.0787,.6933,.1535,.6459,.1269,.9073,.4263,.8905,.4459,.8628,.4291,.907,.2784,.9466,.3247,.8989,.3549,.2277,.5863,.1863,.6163,.1838,.5813,.7442,.0831,.7814,.1446,.7472,.1466,.4053,.978,.4099,.9143,.4519,.9318,.669,.0007,.7081,.039,.67,.0368,.3534,.9715,.3762,.9103
                    ,.8478,.4653,.8055,.3994,.927,.3907,.9264,.4243,.4834,.8462,.5003,.8764,.4485,.8764,.7506,.2108,.5038,.8257,.5031,.857,.4261,.7962,.4541,.8142,.4308,.833,.4118,.7648,.472,.7353,.44,.7831,.7406,.0041,.7745,.039,.7422,.0399,.1433,.5516,.1792,.5441,.4387,.7095,.4257,.7404,.3534,.7236,.3939,.7297
                    ,.3857,.7446,.7196,.3888,.7097,.4278,.6924,.3975,.5973,.5563,.6257,.4948,.6218,.5591,.3582,.707,.4092,.6997,.7571,.4098,.7253,.4208,.0047,.2532,.0547,.2711,.0051,.2769,.5362,.544,.5878,.4895,.574,.5535,.4267,.0174,.4808,.07,.4155,.0641,.4819,.0978,.4189,.1304,.4169,.103,.0518,.5336,.0676,.4602
                    ,.07,.5339,.0833,.2724,.1122,.2486,.1099,.2749,.0524,.5572,.0718,.5559,.0034,.5547,.0318,.5323,.0337,.5579,.0326,.0007,.0576,.0566,.0256,.0556,.0007,.5289,.0308,.4585,.0007,.1762,.0532,.2474,.082,.2471,.1166,.1743,.5485,.2525,.5268,.2628,.5289,.2499,.0788,.0007,.1054,.056,.0788,.0565,.0503,.3379
                    ,.0607,.2958,.0608,.338,.0138,.3342,.0396,.2942,.0379,.337,.2253,.9741,.1316,.9993,.1205,.9801,.8142,.8305,.8139,.8066,.8263,.8185,.8789,.9134,.8214,.8647,.8869,.9019,.6002,.2533,.5665,.2509,.5962,.2402,.9106,.7935,.9117,.8072,.4939,.2495,.5005,.2371,.5018,.9246,.4799,.9587,.4841,.9189,.117,.0008
                    ,.1234,.0558,.0979,.5306,.1448,.1757,.142,.2518,.0862,.3351,.142,.2518,.1413,.2785,.6523,.4948,.6671,.5603,.4846,.1236,.4286,.1718,.0718,.5559,.0979,.5306,.0979,.5535,.7729,.456,.7405,.4657,.7097,.4278,.7405,.4657,.7252,.4742,.8677,.4678,.3534,.8217,.4261,.7962,.9237,.3894,.1641,.4954,.2246,.5328
                    ,.253,.4687,.2847,.5207,.9611,.0757,.9589,.0494,.9783,.0494,.9584,.1838,.9425,.1699,.9734,.0202,.9533,.0064,.9674,.0007,.5262,.231,.5005,.2371,.511,.2247,.8882,.8436,.9117,.8072,.9117,.8237,.565,.2351,.5933,.2247,.8896,.8635,.9002,.8914,.8839,.8516,.8882,.8436,.5484,.2357,.8271,.5631,.8662,.5994
                    ,.8273,.5994,.8696,.5263,.8271,.5631,.8156,.5226,.8698,.3682,.8489,.3224,.8976,.3444,.856,.3894,.8385,.3487,.8698,.3682,.2026,.4798,.8612,.4818,.4318,.8809,.4061,.8777,.8976,.3044,.8976,.3444,.9704,.2731,.9628,.2484,.2847,.5207,.7132,.0844,.5484,.2357,.8896,.8635,.9783,.0494,.9632,.1967,.9466,.1899
                    ,.4637,.9254,.4799,.9587,.4532,.9586,.8049,.871,.139,.9401,.2225,.9476,.052,.2959,.0625,.0007,.5671,.2644,.0793,.1712,.0337,.5579,.0833,.2724,.0511,.46,.4808,.07,.7171,.3379,.7442,.38,.6727,.3666,.1489,.5847,.7079,.0021,.7842,.2088,.3673,.8614,.8936,.391,.9125,.4413,.2847,.5207,.35,.5692
                    ,.5844,.6727,.5527,.6759,.31,.0622,.2916,.1042,.3024,.1854,.2936,.1366,.6177,.6633,.6671,.5603,.6671,.653,.2936,.1366,.2916,.1042,.3359,.0007,.5527,.6759,.5109,.6683,.5844,.6727,.0426,.1728,.0979,.4566,.1234,.0558,.0036,.4551,.7508,.2693,.7431,.3345,.5186,.7162,.4726,.7131,.5186,.6972,0,0
                    ,0,0,0,0,0,0,.4257,.7404,.4118,.7648,.4387,.7095,.3534,.7236,.3939,.7297,.3582,.707,.7097,.4278,.7196,.3888,.6924,.3975,.5973,.5563,.6257,.4948,.6063,.4924,.4092,.6997,.3737,.6773,.7253,.4208,.7442,.38,.5362,.544,.5878,.4895,.5582,.4809,.4189,.1304,.4819,.0978,.4169,.103
                    ,.4286,.1718,.4846,.1236,.7729,.456,.7571,.4098,.4808,.07,.4155,.0641,.7431,.3345,.574,.5535,.3857,.7446,.5844,.6727,.5527,.6759,.31,.0622,.3024,.1854,.2936,.1366,.2936,.1366,.2916,.1042,.5527,.6759,.5109,.6683,.6177,.6633,.5844,.6727,0,0,0,0,0,0,0,0,0,0
                    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.9554,.1617,.9389,.1445,.9425,.1699,.2769,.5867,.35,.5692,.6459,.1269,.7132,.0844,.6691,.0787,.9073,.4263,.8905,.4459
                    ,.9125,.4413,.907,.2784,.9466,.3247,.9305,.287,.2277,.5863,.2286,.615,.7442,.0831,.7765,.0811,.4053,.978,.4099,.9143,.3762,.9103,.7081,.039,.669,.0007,.67,.0368,.3534,.9715,.3534,.9098,.8478,.4653,.8055,.3994,.7743,.4413,.8936,.391,.5003,.8764,.4834,.8462,.4485,.8764,.6933,.1535,.7506,.2108
                    ,.7472,.1466,.4831,.8231,.4261,.7962,.4541,.8142,.4425,.7845,.4257,.7404,.4118,.7648,.7406,.0041,.7422,.0399,.1838,.5813,.1433,.5516,.1489,.5847,.4387,.7095,.3534,.7236,.3939,.7297,.3582,.707,.7097,.4278,.7196,.3888,.6924,.3975,.5973,.5563,.6257,.4948,.6063,.4924,.4092,.6997,.3737,.6773,.7253,.4208
                    ,.7442,.38,.0547,.2711,.0047,.2532,.0051,.2769,.5362,.544,.5878,.4895,.5582,.4809,.4267,.0174,.4808,.07,.4925,.0231,.4189,.1304,.4819,.0978,.4169,.103,.0518,.5336,.0676,.4602,.0511,.46,.0833,.2724,.1122,.2486,.082,.2471,.0524,.5572,.07,.5339,.0034,.5547,.0318,.5323,.0007,.5289,.0256,.0556
                    ,.0625,.0007,.0326,.0007,.0308,.4585,.0036,.4551,.0532,.2474,.0007,.1762,.1166,.1743,.0793,.1712,.5485,.2525,.5268,.2628,.5483,.2658,.0788,.0565,.1009,.0007,.0788,.0007,.0503,.3379,.0607,.2958,.052,.2959,.0138,.3342,.0396,.2942,.016,.2799,.2253,.9741,.1316,.9993,.2281,.9993,.8142,.8305,.8139,.8066
                    ,.7991,.8262,.8214,.8647,.8789,.9134,.8869,.9019,.5665,.2509,.6002,.2533,.5962,.2402,.8263,.8185,.9106,.7935,.8139,.8066,.5289,.2499,.4939,.2495,.4799,.9587,.5018,.9246,.4841,.9189,.1054,.056,.117,.0008,.0979,.5306,.1448,.1757,.0862,.3351,.0608,.338,.1099,.2749,.142,.2518,.6218,.5591,.6523,.4948
                    ,.4286,.1718,.4846,.1236,.0718,.5559,.0979,.5306,.7729,.456,.7571,.4098,.7097,.4278,.7405,.4657,.8628,.4291,.8677,.4678,.8905,.4459,.4308,.833,.3534,.8217,.3673,.8614,.9237,.3894,.8989,.3549,.1641,.4954,.1792,.5441,.2246,.5328,.253,.4687,.2026,.4798,.9611,.0757,.9589,.0494,.9446,.0751,.9584,.1838
                    ,.9466,.1899,.9734,.0202,.9586,.0249,.5262,.231,.5005,.2371,.8882,.8436,.9117,.8072,.565,.2351,.5933,.2247,.8896,.8635,.9002,.8914,.8839,.8516,.5484,.2357,.8271,.5631,.8662,.5994,.8621,.5633,.8271,.5631,.8696,.5263,.8156,.5226,.8698,.3682,.8489,.3224,.8385,.3487,.856,.3894,.8186,.3745,.1641,.4954
                    ,.8258,.4809,.8156,.5226,.4318,.8809,.4519,.9318,.8976,.3044,.8976,.3444,.9628,.2484,.9704,.2731,.2847,.5207,.565,.2351,.8839,.8516,.8896,.8635,.9734,.0202,.9783,.0494,.9525,.2015,.4637,.9254,.4799,.9587,.4841,.9189,.8049,.871,.139,.9401,.2225,.9476,.0379,.337,.0576,.0566,.5671,.2644,.0426,.1728
                    ,.0337,.5579,.4808,.07,.4155,.0641,.7431,.3345,.574,.5535,.1524,.6194,.7079,.0021,.3857,.7446,.7842,.2088,.4485,.8764,.8055,.3994,.927,.4395,.2847,.5207,.352,.489,.5844,.6727,.5527,.6759,.2916,.1042,.31,.0622,.3024,.1854,.2936,.1366,.6177,.6633,.6671,.5603,.2936,.1366,.2916,.1042,.3359,.0007
                    ,.5527,.6759,.5109,.6683,.5844,.6727,.0979,.4566,.1234,.0558,.7508,.2693,.4726,.7131,.6924,.3975,0,0,0,0,.4726,.7131,.3737,.6773,.7571,.4098,.5582,.4809,.4925,.1535,.4286,.1718,.7571,.4098,.7431,.3345,.5844,.6727,.4286,.1718,.3024,.1854,.5527,.6759,.35,.5692,.9125,.4413,.8905,.4459
                    ,.9305,.287,.7079,.0021,.3534,.9098,.7743,.4413,.8055,.3994,.8936,.391,.5003,.8764,.663,.2108,.4831,.8231,.4261,.7962,.4425,.7845,.7406,.0041,.7741,.0039,.1489,.5847,.4726,.7131,.3534,.7236,.7097,.4278,.6063,.4924,.3737,.6773,.5582,.4809,.4925,.0231,.4808,.07,.4846,.1236,.0833,.2724,.0625,.0007
                    ,.0036,.4551,.5483,.2658,.1009,.0007,.052,.2959,.016,.2799,.2281,.9993,.7991,.8262,.8139,.8066,.5671,.2644,.8139,.8066,.9106,.7935,.4939,.2495,.5053,.9587,.4799,.9587,.1009,.0007,.0979,.4566,.0979,.5306,.0855,.2809,.0862,.3351,.142,.2518,.6523,.4948,.4846,.1236,.4925,.1535,.4286,.1718,.0718,.5559
                    ,.0979,.5306,.7097,.4278,.7405,.4657,.8905,.4459,.8677,.4678,.3673,.8614,.3534,.8217,.9704,.3491,.9237,.3894,.1293,.5047,.1641,.4954,.2026,.4798,.253,.4687,.9611,.0757,.9446,.0751,.9586,.0249,.5005,.2371,.8882,.8436,.9117,.8072,.8896,.8635,.5484,.2357,.8271,.5631,.8621,.5633,.8271,.5631,.8698,.3682
                    ,.856,.3894,.8186,.3745,.1641,.4954,.2026,.4798,.8258,.4809,.4318,.8809,.4519,.9318,.8643,.2879,.8976,.3044,.9704,.2731,.9305,.287,.5484,.2357,.4637,.9254,.4799,.9587,.7991,.8262,.139,.9401,.052,.2959,.0625,.0007,.5671,.2644,.5483,.2658,.0337,.5579,.4808,.07,.7431,.3345,.6063,.4924,.1524,.6194
                    ,.1489,.5847,.7079,.0021,.7406,.0041,.4831,.8231,.7842,.2088,.8055,.3994,.8936,.391,.927,.4395,.9125,.4413,.2847,.5207,.352,.489,.35,.5692,.5844,.6727,.4286,.1718,.3024,.1854,.6671,.5603,.2936,.1366,.3359,.0007,.5527,.6759,.0862,.3351,.0979,.4566,.1234,.0558,.0036,.4551,.7316,.2693,.7508,.2693
                    ,.4726,.7131,.4726,.7131,.6218,.5591,.4286,.1718,.4925,.1535,.7405,.4657,.7729,.456,.5844,.6727,.31,.0622,.2916,.1042,.3024,.1854,.4286,.1718,.2936,.1366,.5527,.6759,.9489,.1315,.8905,.4459,.8989,.3549,.4519,.9318,.8055,.3994,.5003,.8764,.663,.2108,.7506,.2108,.4261,.7962,.7741,.0039,.7406,.0041
                    ,.4726,.7131,.3534,.7236,.3857,.7446,.7097,.4278,.4808,.07,.4846,.1236,.0833,.2724,.0524,.5572,.0718,.5559,.0034,.5547,.0337,.5579,.1205,.9801,.8139,.8066,.5671,.2644,.6002,.2533,.9117,.8072,.9106,.7935,.5005,.2371,.4939,.2495,.4799,.9587,.5053,.9587,.1234,.0558,.117,.0008,.0979,.5306,.0979,.4566
                    ,.142,.2518,.1448,.1757,.0862,.3351,.0855,.2809,.1413,.2785,.142,.2518,.6671,.5603,.6523,.4948,.4286,.1718,.4925,.1535,.4846,.1236,.0718,.5559,.0979,.5535,.0979,.5306,.7405,.4657,.7729,.456,.7097,.4278,.7252,.4742,.7405,.4657,.8677,.4678,.4261,.7962,.3534,.8217,.9237,.3894,.9704,.3491,.1641,.4954
                    ,.1293,.5047,.2847,.5207,.253,.4687,.9611,.0757,.9783,.0494,.9584,.1838,.9734,.0202,.9674,.0007,.5262,.231,.511,.2247,.5005,.2371,.8882,.8436,.9117,.8237,.9117,.8072,.565,.2351,.8896,.8635,.8839,.8516,.8882,.8436,.5484,.2357,.5262,.231,.8271,.5631,.8273,.5994,.8271,.5631,.8698,.3682,.8976,.3444
                    ,.856,.3894,.8698,.3682,.2026,.4798,.1641,.4954,.8612,.4818,.4318,.8809,.4061,.8777,.8976,.3044,.8643,.2879,.9628,.2484,.565,.2351,.5484,.2357,.8839,.8516,.9734,.0202,.9584,.1838,.4637,.9254,.4532,.9586,.4799,.9587,.139,.9401,.1205,.9801,.5671,.2644,.0337,.5579,.0524,.5572,.0833,.2724,.4808,.07
                    ,.7406,.0041,.3857,.7446,.7506,.2108,.7842,.2088,.4485,.8764,.927,.4395,.2847,.5207,.5844,.6727,.2916,.1042,.3024,.1854,.4286,.1718,.6671,.653,.6671,.5603,.2936,.1366,.31,.0622,.5527,.6759,.0979,.4566,.0862,.3351,.1448,.1757,.1234,.0558,.7508,.2693,.7316,.2693,.5186,.6972,.4726,.7131
                ]),
                false);

                _i = new Float32Array([.4473,.1706,.3821,0,.2991,.4022,.1493,.1493,.3296,.3506,.3198,0,.3622,.5104,.1274,0,.3948,.1716,.2168,.2168,.3803,.0608,.5589,0,.2843,.0981,.6176,0,.3922,.1522,.4557,0,.4204,.0078,.5507,0,.3572,.6183,0,0,.6092,.3733,0,0,.5548,.3439,.1013,0,.5648,.3407
                ,.0945,0,.5477,.3466,.1057,0,.2026,.0328,.756,0,.3228,.576,.1013,0,.351,.603,.042,0,.2067,.7705,0,0,.5831,.3327,.0842,0,.5711,.3386,.0902,0,.5666,.3386,.0948,0,.5868,.3377,.0754,0,.5919,.3334,.0747,0,.5911,.3382,.0707,0,.5844,.3366,.079,0
                ,.5831,.3327,.0842,0,.639,.2907,.0704,0,.2026,.0328,.756,0,.5879,.339,.0731,0,.3419,.5902,.0679,0,.3776,.0376,.2893,.2893,.567,.34,.093,0,.7228,.1321,.1321,0,.3622,.5104,.1274,0,.3228,.576,.1013,0,.3608,.5901,.0481,0,.351,.603,.042,0,.639,.2907
                ,.0704,0,.2999,.6484,.0517,0,.351,.603,.042,0,.3228,.576,.1013,0,.639,.2907,.0704,0,.3656,.4975,.1369,0,.3622,.5104,.1274,0,.9769,0,0,0,.9858,0,0,0,.993,0,0,0,.9678,.0103,0,0,.9789,0,0,0,.6281,.3367,.0204,0
                ,.0811,.9106,0,0,.4773,.4635,.0593,0,.486,.4416,.0724,0,.5807,.2998,.1196,0,.6528,.2953,.0519,0,.1207,.8687,0,0,.1181,.875,0,0,.972,.0014,0,0,.9929,0,0,0,.959,.0257,0,0,.9722,.0012,0,0,.9529,.0361,0,0,.9329,.0622
                ,0,0,.4622,.4551,.0413,.0413,.5248,.2536,.2216,0,.066,.9257,0,0,.4225,.515,.0312,.0312,.9755,0,0,0,.0813,.9074,0,0,.1421,.8479,0,0,.6009,.3217,.0775,0,.1606,.0278,.7334,.0149,.073,.3304,.5498,.0088,.0732,.1266,.0406,.7448,.0976,.0848,.7726,.0048
                ,.7587,.0862,.021,.0862,.8108,.0347,.035,.0042,.1779,.1171,.5297,.0412,.3501,.0664,.127,.4223,.5097,.043,.3137,.07,.0299,.1166,.0773,.7285,.1606,.0278,.7334,.0149,.0559,.0468,.0225,.8346,.6371,.234,.0838,.0082,.9204,.0332,.0084,0,.8189,.1601,0,0,.0399,.0241,.0804,.804,.3838,.1847
                ,.2107,.1847,.1566,.5537,.2282,.0291,.0523,.0266,.5635,.1537,.1496,.1496,.1647,.4072,.1002,.1455,.4133,.2547,.2335,.7383,0,0,.5311,.1002,.2996,.0374,.3501,.0664,.127,.4223,.0125,.0056,.0552,.8617,.0855,.1555,.1068,.5873,.0576,.0515,.0576,.1793,.8249,.1575,0,0,.9199,.0578,0,0
                ,.1083,.0761,.0467,.7595,.2335,.7383,0,0,.36,.36,.1383,.012,.0395,.1435,.386,.386,.7575,.0604,.1874,0,.7587,.0862,.021,.0862,.1491,.2867,.5457,0,.6679,.1209,.0352,.0804,.7122,.2126,.0362,.0362,.8255,.0509,.0574,.0574,.1083,.0761,.0467,.7595,.0683,.2155,.1202,.5925,.206,.2099
                ,.033,.5395,.218,.1461,.0401,.5584,.3026,.0736,.2979,.2979,.2691,.244,.0365,.205,.218,.1461,.0401,.5584,.2039,.2741,.0687,.0018,.1514,.2173,.0818,.4905,.0504,.8496,.0686,0,.0672,.0746,0,.2295,.1054,.855,.0004,0,.1602,.0992,.6834,.0173,.0125,.0056,.0552,.8617,.0591,.0527,.015,.8364
                ,.076,.081,.045,.7663,.1226,.84,.0076,0,.0504,.8496,.0686,0,.1545,.7614,.0661,0,.9818,0,0,0,.9705,.0001,0,0,.9684,.0029,0,0,.9166,.0127,0,0,.0342,.9297,0,0,.025,.9518,0,0,.0201,.9109,.0223,0,.9367,.0613,0,0,.9673,.0013
                ,0,0,.9677,.0013,0,0,.9957,0,0,0,.9804,0,0,0,.9901,0,0,0,.9471,.0504,0,0,.9673,.0013,0,0,.0528,.9446,0,0,.9833,0,0,0,.9933,0,0,0,.98,0,0,0,.9439,.0553,0,0,.0615,.9384,0,0
                ,.9392,.0594,0,0,.9833,0,0,0,.9543,.0407,0,0,.9856,0,0,0,.976,0,0,0,.9705,.0001,0,0,.9839,0,0,0,.9497,.0497,0,0,.9804,0,0,0,.1626,.1404,.6969,0,.0343,.9388,0,0,.9729,0,0,0,.9507,.048
                ,0,0,.0528,.9467,0,0,.066,.9323,0,0,.9342,.0635,0,0,.9538,.0407,0,0,.0554,.9422,0,0,.1104,.8865,0,0,.7157,.2754,0,0,.6813,.3003,0,0,.8312,.1483,0,0,.9605,0,0,0,.015,.9394,0,0,.9965,0,0,0
                ,.0792,.838,.0827,0,1.0014,0,0,0,.9797,0,0,0,.0269,.9043,.0572,0,.9943,0,0,0,.9715,0,0,0,.9895,0,0,0,.9966,0,0,0,.9957,0,0,0,.9895,0,0,0,.9607,.0208,0,0,.8876,.0037,.0855,0,.9291,.0707
                ,0,0,.7202,.0705,.2092,0,.8731,.1033,0,0,.151,.8363,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8876,.0037,.0855,0,.7202,.0705,.2092,0,.1837,.8099,0,0,.9715,0,0,0,.1612,.8364,0,0,.21,.2061,.5838,0
                ,.9797,0,0,0,.9367,.0613,0,0,.0555,.9433,0,0,.9507,.048,0,0,.9729,0,0,0,.9507,.048,0,0,.9839,0,0,0,.9677,.0013,0,0,.9471,.0504,0,0,.9856,0,0,0,.9957,0,0,0,.9705,.0001,0,0,.9367,.0613
                ,0,0,.9677,.0013,0,0,.973,0,0,0,.9166,.0127,0,0,.0504,.8496,.0686,0,.9166,.0127,0,0,.0125,.0056,.0552,.8617,.0732,.1266,.0406,.7448,.8249,.1575,0,0,.1083,.0761,.0467,.7595,.8249,.1575,0,0,.0576,.0515,.0576,.1793,.2137,.1119,.5928,.021
                ,.5097,.043,.3137,.07,.6371,.234,.0838,.0082,.0732,.1266,.0406,.7448,.1908,.5021,.2801,0,.0683,.2155,.1202,.5925,.1912,.0183,.6776,.0665,.3092,.0202,.587,.0309,.6702,.1529,.1687,0,.4229,.5064,.0335,.0335,.7122,.2126,.0362,.0362,.2182,.0718,.7099,0,.7202,.0705,.2092,0,.21,.2061
                ,.5838,0,.0792,.838,.0827,0,.7451,.0641,.1908,0,.1626,.1404,.6969,0,.1631,.0392,.7921,0,.1626,.1404,.6969,0,.0269,.9043,.0572,0,.21,.2061,.5838,0,.0811,.8718,.0441,0,.0792,.838,.0827,0,.8312,.1483,0,0,.9204,.0332,.0084,0,.9764,0,0,0
                ,.9709,0,0,0,.9457,.0178,0,0,.9204,.0332,.0084,0,.7926,.133,.0417,0,.9199,.0578,0,0,.8955,.0447,.0302,0,.5311,.1002,.2996,.0374,.9709,0,0,0,.9332,.0283,0,0,.9199,.0578,0,0,.1779,.1171,.5297,.0412,.8657,.088,0,0,.5097,.043
                ,.3137,.07,.5602,.2782,.0732,.0282,.5602,.2782,.0732,.0282,.5311,.1002,.2996,.0374,.5602,.2782,.0732,.0282,.5097,.043,.3137,.07,.6371,.234,.0838,.0082,.0854,.5046,.1941,.0789,.8312,.1483,0,0,.0269,.9043,.0572,0,.0683,.2155,.1202,.5925,.2252,.0243,.3523,.3523,.3175,.0133,.5612,.0624
                ,.7157,.2754,0,0,.9715,0,0,0,.8876,.0037,.0855,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0037,.0855,0,.0811,.8718,.0441,0,.1631,.0392,.7921,0,.1837,.8099,0,0,.0667,.9282,0,0,.9804,0,0,0,.9833,0,0,0,.0566,.9432
                ,0,0,.9673,.0013,0,0,.7376,.1189,.1189,0,.158,.8321,0,0,.6326,.1394,.0746,.1394,.1545,.7614,.0661,0,.076,.081,.045,.7663,.36,.36,.1383,.012,.8189,.1601,0,0,.6679,.1209,.0352,.0804,.1912,.0183,.6776,.0665,.6371,.234,.0838,.0082,.1491,.2867,.5457,0
                ,.1054,.855,.0004,0,.0342,.9297,0,0,.7518,.2411,0,0,.158,.8321,0,0,.973,0,0,0,.025,.9518,0,0,.2524,.7108,.0016,0,.9471,.0504,0,0,.7959,.2008,0,0,.025,.9518,0,0,.158,.8321,0,0,.7959,.2008,0,0,.0342,.9297
                ,0,0,.973,0,0,0,.1054,.855,.0004,0,.0726,.9225,0,0,.066,.9323,0,0,.9797,0,0,0,.0555,.9433,0,0,.7959,.2008,0,0,.7518,.2411,0,0,.8,.0988,.0988,0,.2524,.7108,.0016,0,.7959,.2008,0,0,.5428,.2333,.2239,0
                ,.3981,.1951,.2034,.2034,.4226,.4725,.1049,0,.1265,.862,0,0,.4473,.1706,.3821,0,.3296,.3506,.3198,0,.3622,.5104,.1274,0,.3803,.0608,.5589,0,.2843,.0981,.6176,0,.2026,.0328,.756,0,.3572,.6183,0,0,.4204,.0078,.5507,0,.6092,.3733,0,0,.5548,.3439
                ,.1013,0,.5648,.3407,.0945,0,.567,.34,.093,0,.3228,.576,.1013,0,.639,.2907,.0704,0,.2067,.7705,0,0,.351,.603,.042,0,.5831,.3327,.0842,0,.5711,.3386,.0902,0,.5787,.3367,.0845,0,.5919,.3334,.0747,0,.5868,.3377,.0754,0,.5911,.3382,.0707,0
                ,.5831,.3327,.0842,0,.5844,.3366,.079,0,.639,.2907,.0704,0,.2999,.6484,.0517,0,.5879,.339,.0731,0,.3419,.5902,.0679,0,.3608,.5901,.0481,0,.5666,.3386,.0948,0,.3922,.1522,.4557,0,.3622,.5104,.1274,0,.3228,.576,.1013,0,.3608,.5901,.0481,0,.639,.2907
                ,.0704,0,.2999,.6484,.0517,0,.2999,.6484,.0517,0,.351,.603,.042,0,.3228,.576,.1013,0,.639,.2907,.0704,0,.3656,.4975,.1369,0,.3622,.5104,.1274,0,.9769,0,0,0,.9858,0,0,0,.9678,.0103,0,0,.9789,0,0,0,.959,.0257,0,0
                ,.0811,.9106,0,0,.6281,.3367,.0204,0,.4773,.4635,.0593,0,.486,.4416,.0724,0,.5807,.2998,.1196,0,.5248,.2536,.2216,0,.1207,.8687,0,0,.6009,.3217,.0775,0,.9722,.0012,0,0,.993,0,0,0,.9329,.0622,0,0,.1265,.862,0,0,.1421,.8479
                ,0,0,.1181,.875,0,0,.6528,.2953,.0519,0,.1606,.0278,.7334,.0149,.073,.3304,.5498,.0088,.3092,.0202,.587,.0309,.0976,.0848,.7726,.0048,.1491,.2867,.5457,0,.5097,.043,.3137,.07,.0854,.5046,.1941,.0789,.1779,.1171,.5297,.0412,.0299,.1166,.0773,.7285,.1606,.0278,.7334,.0149
                ,.1912,.0183,.6776,.0665,.6371,.234,.0838,.0082,.9204,.0332,.0084,0,.7926,.133,.0417,0,.0399,.0241,.0804,.804,.7982,.0475,.0033,.0157,.0523,.0266,.5635,.1537,.5552,.1482,.0563,.0563,.2335,.7383,0,0,.5311,.1002,.2996,.0374,.9199,.0578,0,0,.0855,.1555,.1068,.5873,.0125,.0056
                ,.0552,.8617,.0576,.0515,.0576,.1793,.8249,.1575,0,0,.9709,0,0,0,.1083,.0761,.0467,.7595,.2335,.7383,0,0,.8249,.1575,0,0,.6679,.1209,.0352,.0804,.7587,.0862,.021,.0862,.7575,.0604,.1874,0,.1491,.2867,.5457,0,.3501,.0664,.127,.4223,.6679,.1209,.0352,.0804
                ,.1002,.1455,.4133,.2547,.6702,.1529,.1687,0,.1083,.0761,.0467,.7595,.0683,.2155,.1202,.5925,.0732,.1266,.0406,.7448,.1602,.0992,.6834,.0173,.218,.1461,.0401,.5584,.218,.1461,.0401,.5584,.1514,.2173,.0818,.4905,.1566,.5537,.2282,.0291,.0504,.8496,.0686,0,.1545,.7614,.0661,0,.1054,.855
                ,.0004,0,.0125,.0056,.0552,.8617,.0591,.0527,.015,.8364,.9166,.0127,0,0,.0504,.8496,.0686,0,.1226,.84,.0076,0,.1545,.7614,.0661,0,.9818,0,0,0,.9705,.0001,0,0,.976,0,0,0,.0342,.9297,0,0,.973,0,0,0,.0201,.9109,.0223,0
                ,.158,.8321,0,0,.9673,.0013,0,0,.9367,.0613,0,0,.9677,.0013,0,0,.9957,0,0,0,.9804,0,0,0,.9839,0,0,0,.9471,.0504,0,0,.9673,.0013,0,0,.9677,.0013,0,0,.9933,0,0,0,.9833,0,0,0,.98,0
                ,0,0,.9439,.0553,0,0,.0615,.9384,0,0,.0566,.9432,0,0,.9833,0,0,0,.9543,.0407,0,0,.9538,.0407,0,0,.976,0,0,0,.9392,.0594,0,0,.9839,0,0,0,.9497,.0497,0,0,.9507,.048,0,0,.9729,0,0,0
                ,.1631,.0392,.7921,0,.1626,.1404,.6969,0,.0528,.9467,0,0,.0555,.9433,0,0,.9342,.0635,0,0,.066,.9323,0,0,.0554,.9422,0,0,.0667,.9282,0,0,.1104,.8865,0,0,.7157,.2754,0,0,.1612,.8364,0,0,.015,.9394,0,0,.2182,.0718
                ,.7099,0,.8312,.1483,0,0,.9965,0,0,0,.0792,.838,.0827,0,.0811,.8718,.0441,0,.9797,0,0,0,.0269,.9043,.0572,0,.21,.2061,.5838,0,.9715,0,0,0,.9895,0,0,0,.8731,.1033,0,0,.9957,0,0,0,.9895,0,0,0
                ,.9966,0,0,0,.9291,.0707,0,0,.8876,.0037,.0855,0,.7202,.0705,.2092,0,.151,.8363,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.9607,.0208,0,0,.8731,.1033,0,0,.9895,0,0,0,.6813,.3003,0,0,.8876,.0037,.0855,0,.9715,0
                ,0,0,.1837,.8099,0,0,.1612,.8364,0,0,.9605,0,0,0,.21,.2061,.5838,0,.9367,.0613,0,0,.0555,.9433,0,0,.9729,0,0,0,1.0014,0,0,0,.9856,0,0,0,.9507,.048,0,0,.9684,.0029,0,0,.9677,.0013,0,0
                ,.9957,0,0,0,.9856,0,0,0,.9705,.0001,0,0,.9367,.0613,0,0,.973,0,0,0,.025,.9518,0,0,.0504,.8496,.0686,0,.9166,.0127,0,0,.0559,.0468,.0225,.8346,.0732,.1266,.0406,.7448,.1606,.0278,.7334,.0149,.206,.2099,.033,.5395,.8249,.1575
                ,0,0,.8189,.1601,0,0,.8249,.1575,0,0,.8189,.1601,0,0,.0576,.0515,.0576,.1793,.0672,.0746,0,.2295,.2137,.1119,.5928,.021,.5097,.043,.3137,.07,.1779,.1171,.5297,.0412,.0732,.1266,.0406,.7448,.1908,.5021,.2801,0,.073,.3304,.5498,.0088,.1912,.0183,.6776,.0665
                ,.3175,.0133,.5612,.0624,.6702,.1529,.1687,0,.3001,.5374,.1509,0,.2182,.0718,.7099,0,.7202,.0705,.2092,0,.0792,.838,.0827,0,.7451,.0641,.1908,0,.1631,.0392,.7921,0,.1626,.1404,.6969,0,.0269,.9043,.0572,0,.21,.2061,.5838,0,.0811,.8718,.0441,0,.8312,.1483
                ,0,0,.9204,.0332,.0084,0,.9764,0,0,0,.9587,0,0,0,.9204,.0332,.0084,0,.9457,.0178,0,0,.7926,.133,.0417,0,.9199,.0578,0,0,.8955,.0447,.0302,0,.9332,.0283,0,0,.9709,0,0,0,.9764,0,0,0,.0576,.0515,.0576,.1793
                ,.5602,.2782,.0732,.0282,.7926,.133,.0417,0,.5097,.043,.3137,.07,.3501,.0664,.127,.4223,.5602,.2782,.0732,.0282,.5311,.1002,.2996,.0374,.5097,.043,.3137,.07,.5602,.2782,.0732,.0282,.6371,.234,.0838,.0082,.1631,.0392,.7921,0,.0811,.8718,.0441,0,.0269,.9043,.0572,0,.6702,.1529
                ,.1687,0,.0683,.2155,.1202,.5925,.3116,.0145,.314,.314,.7157,.2754,0,0,.9715,0,0,0,.1612,.8364,0,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0037,.0855,0,.9943,0,0,0,.0343,.9388,0,0,.1837,.8099,0,0,.0726,.9225,0,0
                ,.9804,0,0,0,.9673,.0013,0,0,.0528,.9446,0,0,.7518,.2411,0,0,.9901,0,0,0,.6326,.1394,.0746,.1394,.076,.081,.045,.7663,.076,.081,.045,.7663,.36,.36,.1383,.012,.1491,.2867,.5457,0,.2335,.7383,0,0,.2252,.0243,.3523,.3523,.6371,.234
                ,.0838,.0082,.8189,.1601,0,0,.1054,.855,.0004,0,.0342,.9297,0,0,.158,.8321,0,0,.7518,.2411,0,0,.973,0,0,0,.025,.9518,0,0,.2524,.7108,.0016,0,.9471,.0504,0,0,.025,.9518,0,0,.158,.8321,0,0,.7959,.2008,0,0
                ,.0342,.9297,0,0,.973,0,0,0,.1054,.855,.0004,0,.066,.9323,0,0,.9797,0,0,0,.7959,.2008,0,0,.2524,.7108,.0016,0,.1545,.7614,.0661,0,.5428,.2333,.2239,0,.4226,.4725,.1049,0,.3656,.4975,.1369,0,.639,.2907,.0704,0,.2999,.6484
                ,.0517,0,.5787,.3367,.0845,0,.5787,.3367,.0845,0,.5831,.3327,.0842,0,.2999,.6484,.0517,0,.3608,.5901,.0481,0,.3622,.5104,.1274,0,.5831,.3327,.0842,0,.639,.2907,.0704,0,.3228,.576,.1013,0,.1491,.2867,.5457,0,.1912,.0183,.6776,.0665,.1606,.0278,.7334,.0149
                ,.7926,.133,.0417,0,.076,.081,.045,.7663,.9709,0,0,0,.8249,.1575,0,0,.2335,.7383,0,0,.6679,.1209,.0352,.0804,.7587,.0862,.021,.0862,.2335,.7383,0,0,.6702,.1529,.1687,0,.1083,.0761,.0467,.7595,.0732,.1266,.0406,.7448,.218,.1461,.0401,.5584,.2691,.244
                ,.0365,.205,.1545,.7614,.0661,0,.2524,.7108,.0016,0,.0125,.0056,.0552,.8617,.0504,.8496,.0686,0,.976,0,0,0,.973,0,0,0,.9839,0,0,0,.9677,.0013,0,0,.9673,.0013,0,0,.9856,0,0,0,.9833,0,0,0,.1631,.0392,.7921,0
                ,.0555,.9433,0,0,.1612,.8364,0,0,.2182,.0718,.7099,0,.0811,.8718,.0441,0,.21,.2061,.5838,0,.8731,.1033,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.9895,0,0,0,.8731,.1033,0,0,.8876,.0037,.0855,0,.8731,.1033
                ,0,0,.9715,0,0,0,.2182,.0718,.7099,0,.066,.9323,0,0,.9367,.0613,0,0,.1626,.1404,.6969,0,.9729,0,0,0,.9507,.048,0,0,.9677,.0013,0,0,.9856,0,0,0,.9839,0,0,0,.9957,0,0,0,.9705,.0001,0,0
                ,.9367,.0613,0,0,.0504,.8496,.0686,0,.9166,.0127,0,0,.1606,.0278,.7334,.0149,.0732,.1266,.0406,.7448,.8189,.1601,0,0,.8249,.1575,0,0,.9709,0,0,0,.8249,.1575,0,0,.0125,.0056,.0552,.8617,.0576,.0515,.0576,.1793,.1779,.1171,.5297,.0412,.5097,.043
                ,.3137,.07,.0732,.1266,.0406,.7448,.073,.3304,.5498,.0088,.3001,.5374,.1509,0,.7202,.0705,.2092,0,.0792,.838,.0827,0,.7451,.0641,.1908,0,.0269,.9043,.0572,0,.8312,.1483,0,0,.9204,.0332,.0084,0,.9587,0,0,0,.9204,.0332,.0084,0,.9199,.0578,0,0
                ,.9709,0,0,0,.9764,0,0,0,.0576,.0515,.0576,.1793,.1779,.1171,.5297,.0412,.5602,.2782,.0732,.0282,.5097,.043,.3137,.07,.3501,.0664,.127,.4223,.8657,.088,0,0,.5602,.2782,.0732,.0282,.5602,.2782,.0732,.0282,.7926,.133,.0417,0,.8312,.1483,0,0,.7157,.2754
                ,0,0,.9715,0,0,0,.9966,0,0,0,.9708,.0137,0,0,.0811,.8718,.0441,0,.1631,.0392,.7921,0,.1837,.8099,0,0,.1612,.8364,0,0,.9804,0,0,0,.9673,.0013,0,0,.7518,.2411,0,0,.976,0,0,0,.6326,.1394,.0746,.1394
                ,.1545,.7614,.0661,0,.076,.081,.045,.7663,.218,.1461,.0401,.5584,.6702,.1529,.1687,0,.36,.36,.1383,.012,.2335,.7383,0,0,.6679,.1209,.0352,.0804,.2252,.0243,.3523,.3523,.1912,.0183,.6776,.0665,.6371,.234,.0838,.0082,.8189,.1601,0,0,.1491,.2867,.5457,0,.1054,.855
                ,.0004,0,.9957,0,0,0,.973,0,0,0,.9471,.0504,0,0,.025,.9518,0,0,.7959,.2008,0,0,.0342,.9297,0,0,.9729,0,0,0,.066,.9323,0,0,.9797,0,0,0,.0555,.9433,0,0,.8,.0988,.0988,0,.7959,.2008,0,0
                ,.2524,.7108,.0016,0,.3656,.4975,.1369,0,.5477,.3466,.1057,0,.5831,.3327,.0842,0,.5787,.3367,.0845,0,.2026,.0328,.756,0,.639,.2907,.0704,0,.3622,.5104,.1274,0,.3608,.5901,.0481,0,.351,.603,.042,0,.639,.2907,.0704,0,.5831,.3327,.0842,0,.2999,.6484
                ,.0517,0,.3228,.576,.1013,0,.0732,.1266,.0406,.7448,.1606,.0278,.7334,.0149,.8189,.1601,0,0,.3501,.0664,.127,.4223,.2335,.7383,0,0,.7587,.0862,.021,.0862,.2335,.7383,0,0,.6679,.1209,.0352,.0804,.1083,.0761,.0467,.7595,.2691,.244,.0365,.205,.218,.1461,.0401,.5584
                ,.2524,.7108,.0016,0,.0125,.0056,.0552,.8617,.076,.081,.045,.7663,.0504,.8496,.0686,0,.9673,.0013,0,0,.9856,0,0,0,.9833,0,0,0,.976,0,0,0,.9705,.0001,0,0,.9839,0,0,0,.9804,0,0,0,.9966,0,0,0,.9895,0
                ,0,0,.1837,.8099,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0,.7202,.0705,.2092,0,.8876,.0037,.0855,0,.9715,0,0,0,.8731,.1033,0,0,.9797,0,0,0,.21,.2061,.5838,0,.9367,.0613,0,0,.066,.9323,0,0
                ,.9507,.048,0,0,.0555,.9433,0,0,.9729,0,0,0,.1626,.1404,.6969,0,.9839,0,0,0,.9507,.048,0,0,.9471,.0504,0,0,.9677,.0013,0,0,.9957,0,0,0,.9839,0,0,0,.9856,0,0,0,.9705,.0001,0,0,.9677,.0013
                ,0,0,.9367,.0613,0,0,.9166,.0127,0,0,.973,0,0,0,.0504,.8496,.0686,0,.0125,.0056,.0552,.8617,.9166,.0127,0,0,.0732,.1266,.0406,.7448,.1083,.0761,.0467,.7595,.8249,.1575,0,0,.8249,.1575,0,0,.9709,0,0,0,.0576,.0515,.0576,.1793
                ,.0125,.0056,.0552,.8617,.6371,.234,.0838,.0082,.5097,.043,.3137,.07,.0732,.1266,.0406,.7448,.0683,.2155,.1202,.5925,.1912,.0183,.6776,.0665,.6702,.1529,.1687,0,.7122,.2126,.0362,.0362,.2182,.0718,.7099,0,.21,.2061,.5838,0,.7202,.0705,.2092,0,.0792,.838,.0827,0,.1626,.1404
                ,.6969,0,.7451,.0641,.1908,0,.1631,.0392,.7921,0,.0269,.9043,.0572,0,.0811,.8718,.0441,0,.0792,.838,.0827,0,.8312,.1483,0,0,.2182,.0718,.7099,0,.9204,.0332,.0084,0,.9709,0,0,0,.9204,.0332,.0084,0,.9199,.0578,0,0,.5311,.1002,.2996,.0374
                ,.9709,0,0,0,.9199,.0578,0,0,.1779,.1171,.5297,.0412,.0576,.0515,.0576,.1793,.8657,.088,0,0,.5097,.043,.3137,.07,.5602,.2782,.0732,.0282,.5602,.2782,.0732,.0282,.8657,.088,0,0,.5097,.043,.3137,.07,.1631,.0392,.7921,0,.8312,.1483,0,0,.0811,.8718
                ,.0441,0,.6702,.1529,.1687,0,.1912,.0183,.6776,.0665,.7157,.2754,0,0,.8876,.0037,.0855,0,.9715,0,0,0,.9708,.0137,0,0,.9966,0,0,0,.1837,.8099,0,0,.9804,0,0,0,.976,0,0,0,.9833,0,0,0,.9673,.0013,0,0
                ,.218,.1461,.0401,.5584,.076,.081,.045,.7663,.6679,.1209,.0352,.0804,.36,.36,.1383,.012,.1491,.2867,.5457,0,.2252,.0243,.3523,.3523,.6371,.234,.0838,.0082,.1054,.855,.0004,0,.158,.8321,0,0,.973,0,0,0,.9957,0,0,0,.7959,.2008,0,0,.9471,.0504
                ,0,0,.025,.9518,0,0,.7518,.2411,0,0,.0342,.9297,0,0,.066,.9323,0,0,.9729,0,0,0,.0555,.9433,0,0,.9797,0,0,0,.7959,.2008,0,0,.8,.0988,.0988,0,.7959,.2008,0,0,.2524,.7108,.0016,0]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(924);
                _i.set([1967621,471729669,1967621,400901,471729669,1967621,1967621,1967621,1967621,7685,7685,394526,394526,394526,1967621,400901,400901,7685]);
                REPEAT(_i, 18, 9, 394526);
                _i.set([1967621,394526,400901,471729669,394526,1842693,400901,400901,400901,400901,394526,400901,400901,400901,394526,400901,400901,9,9,9,2057,9,657672,2312,657672,657672,657672,657672,2312,2312,2057,9,2057,2057,2057,2057,319424776,657672,2312,319424776,9,2312,2312,657672,169019144,336791559,320079879,503780116,169087751,504566791
                ,319227412,319227412,319227412,319424519,169019144,319227924,504563476,1246996,4884,119407892,470228485,336010757,117835028,117838602,319227412,4884,101910292,319227412,503776773,503776773,117835028,4884,4884,319293204,4884,134681354,169019399,1247239,169087751,1246996,168167187,169019399,169019399,319293204,319293204,319293204,503776773,471729669,503776773,503776773,319227397,503776773,466437,117835028,400901,119408133,503776773,503776773,503776773,466437
                ,466437,466437,30,7966,1310,1822,7685,7685,466437,7966,7966,7966,30,30,30,1310,7966,7685,30,30,30,7966,7966,7966,30,7966,30,30,7966,30,7966,30,204548,7939,31,7966,7966,7966,7966,7966,7966,772,772,772,772,31,7940,31,204548,31
                ,31,204548,31,4,4,4,4,4,7940,204548,7940,204548,772,772,204548,772,204548,204548,204548,772,4,772,204548,31,7966,7966,7966,31,7966,30,7966,1310,30,30,7966,7966,7966,30,1822,466437,1822,503776773,320079879,4884,319293204,4884,117835028,319233556,319227412,504563476
                ,320079879,1247239,319293204,169019144,169019144,1247239,169019399,169019399], 27);
                REPEAT(_i, 235, 12, 204548);
                _i.set([772,1246996,20,20,1812,1246996,1246996,4884,463636,101910292,20,4884,4884,319227412,1812,319227412,101910292,101910292,101910292,101910292,319227412,504563476,319227412,772,204548,319293204,319424264,169019144,772,4,204548,7940,7940,204548,204548,204548,772,7966,30,30,7966,7966,1842693,7685,470228485,466437,503776773,134681354,4884,168167187
                ,169019144,504563476,1246996,400901,7685,7685,7685,30,7685,400901,1310,7685,7685,7685,7685,7685,30,400901,7966,7966,31,7966,7685,7685,1842693,400901,7685,657672,319424776,657417,2312,1836549,1836549,400389,1836549,1836549,1836549,7173,1836549,7173,394524,394524,394524,400389,394524,7173,400389], 247);
                REPEAT(_i, 344, 9, 394524);
                _i.set([400389,394524,400389,400389,394524,1836549,400389,400389,400389,394524,400389,400389,400389,400389,394524,400389,400389,9,9,2057,9,2057,2312,1247496,1247496,1247496,1247496,1247496,2312,1247496,2057,9,2057,2312,2312,2312,1247496,319424264,185206791,319424264,470223371,657163,168232459,168232459,168232459,169019399,319424264,319424264,470419211,657163
                ,657163,119276811,336790791,117835019,471729926,2571,101320459,2571,470222341,470222341,117835019,2571,11,168298251,2571,2571,319162122,169087751,657415,657163,168232459,319162122,168232459,657415,168298251,168298251,168495111,119277061,470222341,470222341,470222341,185015301,465925,465925,400389,470222341,470222341,1820,465925,465925,465925,28,7452,28,7173,28,465925,7173,7452,7452
                ,7452,28,28,28,1308,7452,7452,28,28,28,7452,7452,7452,28,7452,7452,28,7452,28,7452,7452,29,72962,72962,7452,7452,7452,7452,7452,7452,258,258,258,7426,72962,258,29,72962,72962,29,72962,72962,2,2,258,2,2,2,7426,72962
                ,72962,258,258,72962,7426,258,2,258,72962,2,258,258,29,72962,7452,7452,29,29,28,7452,1308,7452,28,28,7452,7452,28,7173,465925,1820,168232971,168495111,319424264,168298251,2571,2571,2571,2571,117835019,117835019,168238091,168232459,168232459,168495111,657415,185206791,319424264,319424264,657415,657415
                ], 353);
                REPEAT(_i, 553, 9, 72962);
                _i.set([258,657163,11,11,657163,1803,657163,2571,461323,2571,11,11,117835019,101320459,657163,168232459,168232459,101320459,101320459,168232459,101320459,470419211,72962,72962,72962,657415,168298251,319424264,258,2,258,7426,7426,72962,29,7425,258,7452,28,7452,7173,7173,28,470228485,470222341,470222341,134681354,657163,2571,319424264
                ,470419211,2571,400389,7173,7173,7173,28,7173,400389,1308,7173,7173,7173,7173,28,400389,7452,29,7173,400389,465925,1247496,1247241,400901,394526,400901,394526,394526,394526,400901,400901,400901,394526,394526,400901,1246996,169019144,169019144,1246996,503776773,20,4884,4884,168167187,169087751,4884,1247239,319293204,320079879,503776773
                ,503776773,466437,400901,503776773,466437,30,30,30,7966,7966,30,30,204548,7966,772,204548,204548,204548,772,4,4,772,4,772,204548,772,4,204548,7966,7966,204548,31,7966,7966,30,30,30,7966,7966,466437,1822,169019144,320079879,4884,4884,20,4884,503776773,117835028,319227412
                ,319227412,320079879,336791559,1247239,204548,204548,204548,204548,772,1246996,20,1246996,4884,20,20,117835028,319227412,101910292,319227412,319227412,1812,101910292,101910292,1246996,772,772,4,4,7940,204548,204548,772,772,30,7966,7685,30,470228485,466437,503776773,503776773,1247239,134681354,4884,168167187,319424264,169019144,504563476,4884,1246996
                ,400901,30,30,1310,7685,7685,7685,31,7966,31,7966,1842693,7685,400901,400389,394524,394524,394524,1836549,394524,400389,400389,400389,394524,394524,400389,400389,168495111,319424264,2571,168232459,2571,169087751,2571,319162122,168298251,503776773,470222341,400389,470222341,470222341,465925,7452,28,28,28,7452,28,28,2
                ,2,258,258,72962,258,72962,72962,2,258,29,72962,7452,7452,7452,7452,29,72962,28,7452,1308,7452,28,28,28,7452,7452,7452,1820,28,465925,470222341,1820,168495111,168298251,2571,2571,11,117835019,470222341,470419211,168232459,168495111,168298251,319424264,657415,169019399], 562);
                REPEAT(_i, 858, 10, 72962);
                _i.set([258,72962,657163,11,657163,2571,101320459,11,2571,168232459,117835019,1803,168232459,101320459,101320459,1803,168232459,72962,258,72962,657415,319424264,258,72962,2,7426,2,258,28,28,28,7452,470222341,470222341,319162122,134681354,657163,319424264,470419211,400389,7173,28,28,7173,1308,7173,7173,7173,7452,29
                ,7452,29,7173,1842693,7173,400389], 868);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                _i = new Float32Array(3696);
                _i.set([.0064], 284);
                _i.set([.021,0,0,0,.0347,.035,.0042,0,.1129,0,0,0,0,0,0,0,.0504,0,0,0,0,0,0,0,.0064], 300);
                _i.set([.0045], 344);
                _i.set([.0752,.1039,0,0,.0365,.0087,.0365,.0087,.0273,.0103], 356);
                _i.set([.0272,0,0,0,.6364], 384);
                _i.set([.0519,.0195,.0195], 408);
                _i.set([.021,0,0,0,0,0,0,0,.0541], 420);
                _i.set([.205,0,0,0,0,0,0,0,.1994,.0018,.1994,0,.0072,.0029,0,0,0,0,0,0,.5884], 460);
                _i.set([.6364,0,0,0,0,0,0,0,.0504], 892);
                _i.set([.1129,0,0,0,0,0,0,0,.0504,0,0,0,.0319,0,0,0,.0319,0,0,0,0,0,0,0,.0319,0,0,0,.0504,0,0,0,0,0,0,0,.1055], 1040);
                _i.set([.0519,.0195,.0195,0,0,0,0,0,.0541], 1176);
                _i.set([.0064], 1560);
                _i.set([.0504,0,0,0,.1055,0,0,0,.1129,0,0,0,0,0,0,0,.0064], 1580);
                _i.set([.0045,0,0,0,.0394,.0033,.0157,.0394,.0752,.1039,0,0,.0468,.0375,.0375,.0198], 1616);
                _i.set([.0272,0,0,0,0,0,0,0,.6364], 1644);
                _i.set([.0541,0,0,0,.021], 1676);
                _i.set([.0541,0,0,0,.0273,.0103], 1696);
                _i.set([.0072,.0029], 1732);
                _i.set([.0064], 2140);
                _i.set([.6364,0,0,0,.5884,0,0,0,0,0,0,0,.0504,0,0,0,.1129], 2164);
                _i.set([.6364,0,0,0,.0319,0,0,0,0,0,0,0,.0504,0,0,0,0,0,0,0,.0319,0,0,0,0,0,0,0,.0504,0,0,0,.0319], 2296);
                _i.set([.0519,.0195,.0195], 2432);
                _i.set([.0064], 2596);
                _i.set([.0541,0,0,0,.021], 2620);
                _i.set([.205], 2648);
                _i.set([.0064], 2812);
                _i.set([.6364,0,0,0,.1129,0,0,0,.0504], 2840);
                _i.set([.6364,0,0,0,.1129,0,0,0,.0319,0,0,0,.0504], 2908);
                _i.set([.0319,0,0,0,.0319], 2932);
                _i.set([.0519,.0195,.0195,0,0,0,0,0,.0541], 3016);
                _i.set([.0064], 3160);
                _i.set([.021,0,0,0,0,0,0,0,.0541,0,0,0,0,0,0,0,.205], 3176);
                _i.set([.6364], 3396);
                _i.set([.0504], 3408);
                _i.set([.1129,0,0,0,.6364,0,0,0,0,0,0,0,.0504,0,0,0,.0319,0,0,0,.0319,0,0,0,0,0,0,0,.0504], 3508);
                _i.set([.0541,0,0,0,.0519,.0195,.0195], 3608);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsExtraKind, _i, false);

                _i = new Uint32Array(924);
                _i.set([20,0,0,0,11,1837579,30,0,30,0,20,0,0,0,0,19,0,0,7699,470490644,7690,0,0,0,0,20,30,0,0,0,0,726022,0,0,11,0,20,0,0,0,0,0,0,0,28,0,1837598,4884,0,30
                ], 71);
                _i.set([30,0,30], 223);
                _i.set([30,0,30,30,30,0,30,30,0,30], 260);
                _i.set([726022,0,20], 294);
                _i.set([11,0,0,0,0,28,28,28,0,11,0,0,0,0,10,470485534,7178,336204549,0,0,0,11,0,28,0,0,0,0,0,11,11,0,0,0,11,7187,0,0,0,0,0,0,0,2571], 390);
                _i.set([11,0,0,0,0,0,28,28,0,28,28], 535);
                _i.set([28,28,0,28,0,28,0,28,28], 574);
                _i.set([726022], 608);
                _i.set([20,0,0,0,0,0,20,11,0,0,0,0,0,28], 649);
                _i.set([20,0,0,0,0,0,0,30,30,30], 703);
                _i.set([30,30,30,30,0,0,30,30], 727);
                _i.set([726022,0,20], 754);
                _i.set([11,0,0,0,11,0,11,0,28], 790);
                _i.set([28,0,0,28], 849);
                _i.set([28,28,0,28,28,28,0,28], 877);
                _i.set([11,726022], 902);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesExtraKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Material.006");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 924, 0, 2190, this);
                if (scene._selectionOctree) {
                    scene.createOrUpdateSelectionOctree();
                }
            }
            if (this.postConstruction) this.postConstruction();
            this.initComplete = true;
            if (matLoaded && !_sceneTransitionName){
                if (typeof this.grandEntrance == "function") this.grandEntrance();
                else makeVisible(this);

            } else waitingMeshes.push(this);
        }

        Warrior_001.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(9);
        };
        return Warrior_001;
    })(QI.Mesh);
    Warrior.Warrior_001 = Warrior_001;

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