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
        }

        if (sceneTransitionName && matLoaded) {
            QI.SceneTransition.perform(sceneTransitionName, waitingMeshes, overriddenMillis, overriddenSound, options);
        }
    }
    Warrior.initScene = initScene;
    var meshLib = new Array(9);
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
        {frame: 60, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 80, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 90, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 108, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 120, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 180, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 190, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)},
        {frame: 250, value: _M(1,0,0,0,0,0,-1,0,0,-1,0,0,0,0,.3263,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.L", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.3253,.2268,-.1367,1));
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
        {frame: 60, value: _M(-1,0,0,0,0,-.9103,-.4139,0,0,-.4139,.9103,0,.2699,-1.0515,-1.3797,1)},
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
        {frame: 90, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 108, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 120, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 180, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.4932,.4817,-.1367,1)},
        {frame: 190, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)},
        {frame: 250, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,.9165,.8398,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.L", skeleton,skeleton.bones[1], _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
        bone.length = .5841;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 20, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 30, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 51, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 60, value: _M(-1,0,0,0,0,.0671,.9977,0,0,.9977,-.0671,0,0,.1648,-.0002,1)},
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
        {frame: 90, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 108, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 120, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 180, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 190, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)},
        {frame: 250, value: _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("heel.R", skeleton,skeleton.bones[0], _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1), _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.3253,.2268,-.1367,1));
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
        {frame: 60, value: _M(-1,0,0,0,0,-.9969,-.0783,0,0,-.0783,.9969,0,-.1715,1.2165,-.1367,1)},
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
        {frame: 250, value: _M(-1,0,0,0,0,-.9518,.3067,0,0,.3067,.9518,0,-.9244,-.4429,-.1367,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("foot.R", skeleton,skeleton.bones[3], _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1), _M(-1,0,0,0,0,-.8947,.4467,0,0,.4467,.8947,0,0,.1648,-.0002,1));
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
        {frame: 60, value: _M(-1,0,0,0,0,-.9952,.098,0,0,.098,.9952,0,0,.1648,-.0002,1)},
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
        {frame: 90, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 108, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 120, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 180, value: _M(-.9746,-.2205,.0385,0,.2145,-.8707,.4425,0,-.064,.4395,.8959,0,0,.1648,-.0002,1)},
        {frame: 190, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)},
        {frame: 250, value: _M(-.8926,-.444,.0776,0,.4319,-.7934,.429,0,-.1289,.4164,.9,0,0,.1648,-.0002,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hips", skeleton,skeleton.bones[0], _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1), _M(1,0,0,0,0,.102,-.9948,0,0,.9948,.102,0,0,.2173,-2.5278,1));
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
        {frame: 60, value: _M(1,0,0,0,0,.321,-.9471,0,0,.9471,.321,0,0,.5152,-2.3037,1)},
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
        {frame: 250, value: _M(.972,.2349,0,0,-.024,.0992,-.9948,0,-.2337,.9669,.102,0,0,.2173,-2.3229,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("spine", skeleton,skeleton.bones[5], _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1), _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1));
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
        {frame: 60, value: _M(.9563,.0687,.2842,0,-.0388,.9932,-.1093,0,-.2898,.0935,.9525,0,0,.4281,0,1)},
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
        {frame: 250, value: _M(1,0,0,0,0,.9946,-.1037,0,0,.1037,.9946,0,0,.4281,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("chest", skeleton,skeleton.bones[6], _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1), _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1));
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
        {frame: 60, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
        {frame: 80, value: _M(1,0,0,0,0,.9921,-.1254,0,0,.1254,.9921,0,0,.3874,0,1)},
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
        {frame: 250, value: _M(.9922,-.0001,.1246,0,.0158,.9921,-.1246,0,-.1236,.1256,.9844,0,0,.3874,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("neck", skeleton,skeleton.bones[7], _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1), _M(1,0,0,0,0,.9161,.401,0,0,-.401,.9161,0,0,.7808,.0062,1));
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
        {frame: 60, value: _M(.9594,-.0021,-.2822,0,.0834,.9575,.2763,0,.2696,-.2886,.9187,0,0,.7808,.0062,1)},
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
        {frame: 250, value: _M(.9465,.041,-.3202,0,.0908,.918,.3861,0,.3098,-.3945,.8651,0,0,.7808,.0062,1)}
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
        {frame: 60, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 80, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 90, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 108, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 120, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 150, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 151, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 180, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 190, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 230, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3143,0,1)},
        {frame: 231, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)},
        {frame: 250, value: _M(1,0,0,0,0,.9984,-.0558,0,0,.0558,.9984,0,0,.3144,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.L", skeleton,skeleton.bones[7], _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1), _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1));
        bone.length = .465;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 20, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 30, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 51, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 60, value: _M(-.1055,-.101,.9893,0,.9849,-.1478,.0899,0,.1372,.9838,.1151,0,.0448,.6372,.1036,1)},
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
        {frame: 90, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 108, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 120, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 180, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 190, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)},
        {frame: 250, value: _M(.0594,-.1276,.99,0,.9857,-.1491,-.0784,0,.1576,.9806,.1169,0,.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.L", skeleton,skeleton.bones[10], _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1), _M(.1719,-.7324,-.6588,0,-.0799,.6562,-.7503,0,.9819,.1816,.0543,0,-.0268,.5347,-.0473,1));
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
        {frame: 60, value: _M(.1627,-.8637,-.4771,0,-.0041,.4829,-.8757,0,.9867,.1444,.0751,0,-.0268,.5347,-.0473,1)},
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
        {frame: 250, value: _M(.1875,-.7967,-.5746,0,-.0519,.5761,-.8157,0,.9809,.1827,.0666,0,-.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.L", skeleton,skeleton.bones[11], _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1), _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1));
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
        {frame: 60, value: _M(.9551,.1167,-.2723,0,.2739,.0025,.9618,0,.1129,-.9932,-.0295,0,0,.7926,0,1)},
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
        {frame: 250, value: _M(.9402,-.1534,-.304,0,.266,.8882,.3747,0,.2125,-.4332,.8759,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.L", skeleton,skeleton.bones[12], _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1), _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1));
        bone.length = .2494;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 20, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 30, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 51, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 60, value: _M(.2154,-.0796,-.9733,0,.0307,.9967,-.0747,0,.9761,-.0138,.2171,0,0,.6211,0,1)},
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
        {frame: 90, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 108, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 120, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 180, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 190, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)},
        {frame: 250, value: _M(.1677,-.2219,-.9605,0,.123,.9714,-.2029,0,.9781,-.0841,.1902,0,0,.6211,0,1)}
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
        {frame: 60, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
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
        {frame: 90, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 108, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 120, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 180, value: _M(-.0517,.2862,-.9568,0,.0044,.9581,.2863,0,.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 190, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)},
        {frame: 250, value: _M(-.0162,.6906,-.723,0,-.0973,.7186,.6886,0,.9951,.0815,.0556,0,0,.2494,0,1)}
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
        {frame: 60, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
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
        {frame: 90, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 108, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 120, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 180, value: _M(.9071,.4182,.048,0,-.4189,.908,.0061,0,-.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 190, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)},
        {frame: 250, value: _M(.3336,.9422,-.0303,0,-.9274,.3222,-.1902,0,-.1695,.0916,.9813,0,0,.1634,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.L", skeleton,skeleton.bones[12], _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1), _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1));
        bone.length = .1072;
        animation = new _B.Animation("anim", "_matrix", 24, 3, 1);
        animation.setKeys([
        {frame: 0, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 20, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 30, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 51, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 60, value: _M(.3815,-.0164,-.9242,0,.5627,.7973,.2181,0,.7333,-.6033,.3134,0,.1467,.7467,.1148,1)},
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
        {frame: 90, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 108, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 120, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 180, value: _M(.3721,-.1776,-.911,0,.7296,.6627,.1688,0,.5738,-.7275,.3762,0,.1549,.7468,.1043,1)},
        {frame: 190, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)},
        {frame: 250, value: _M(.3409,-.1701,-.9246,0,.6448,.758,.0983,0,.6841,-.6297,.3681,0,.1549,.7468,.1043,1)}
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
        {frame: 60, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
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
        {frame: 90, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 108, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 120, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 180, value: _M(-.2178,-.4186,-.8817,0,.0093,.9024,-.4308,0,.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 190, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)},
        {frame: 250, value: _M(-.2529,-.5411,-.802,0,.0101,.8274,-.5615,0,.9674,-.1501,-.2038,0,0,.1072,0,1)}
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
        {frame: 60, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 80, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 90, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 108, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 120, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 180, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 190, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)},
        {frame: 250, value: _M(.9841,-.1321,.1184,0,.1372,.9899,-.0356,0,-.1125,.0513,.9923,0,-.2592,.3311,-.0988,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shoulder.R", skeleton,skeleton.bones[7], _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1), _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1));
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
        {frame: 60, value: _M(.2221,.1506,-.9633,0,-.958,-.1503,-.2444,0,-.1816,.9771,.1109,0,-.0448,.6372,.1036,1)},
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
        {frame: 90, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 108, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 120, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 180, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 190, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)},
        {frame: 250, value: _M(.0594,.1276,-.99,0,-.9857,-.1491,-.0784,0,-.1576,.9806,.1169,0,-.0448,.6372,.1036,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("upper_arm.R", skeleton,skeleton.bones[19], _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1), _M(.1719,.7324,.6588,0,.0799,.6562,-.7503,0,-.9819,.1816,.0543,0,.0268,.5347,-.0473,1));
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
        {frame: 60, value: _M(.1477,.7689,.622,0,.0932,.6153,-.7828,0,-.9846,.1736,.0192,0,.0268,.5347,-.0473,1)},
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
        {frame: 250, value: _M(.122,.7949,.5943,0,.1763,.5719,-.8011,0,-.9767,.2025,-.0704,0,.0268,.5347,-.0473,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("forearm.R", skeleton,skeleton.bones[20], _M(.9513,.1748,.254,0,-.3025,.3692,.8788,0,.0598,-.9128,.404,0,0,.7926,0,1), _M(.9402,.1534,.304,0,-.266,.8882,.3747,0,-.2125,-.4332,.8759,0,0,.7926,0,1));
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
        {frame: 60, value: _M(.9518,.1822,.2468,0,-.2989,.3699,.8797,0,.069,-.911,.4066,0,0,.7926,0,1)},
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
        {frame: 250, value: _M(.9561,.1495,.252,0,-.251,.8616,.4413,0,-.1512,-.4852,.8613,0,0,.7926,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("hand.R", skeleton,skeleton.bones[21], _M(.1261,.1674,.9778,0,-.1477,.9778,-.1483,0,-.981,-.1258,.148,0,0,.6211,0,1), _M(.1677,.2219,.9605,0,-.123,.9714,-.2029,0,-.9781,-.0841,.1902,0,0,.6211,0,1));
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
        {frame: 60, value: _M(.126,.1673,.9778,0,-.1478,.9778,-.1483,0,-.981,-.1258,.1479,0,0,.6211,0,1)},
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
        {frame: 250, value: _M(.3351,.1288,.9333,0,-.1596,.9841,-.0785,0,-.9286,-.1227,.3503,0,0,.6211,0,1)}
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
        {frame: 60, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
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
        {frame: 90, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 108, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 120, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 180, value: _M(-.0517,-.2862,.9568,0,-.0044,.9581,.2863,0,-.9987,.0106,-.0508,0,0,.2494,0,1)},
        {frame: 190, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)},
        {frame: 250, value: _M(-.0199,-.4608,.8873,0,-.0567,.8865,.4592,0,-.9982,-.0412,-.0438,0,0,.2494,0,1)}
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
        {frame: 60, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
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
        {frame: 90, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 108, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 120, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 180, value: _M(.9071,-.4182,-.048,0,.4189,.908,.0061,0,.041,-.0256,.9988,0,0,.1634,0,1)},
        {frame: 190, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)},
        {frame: 250, value: _M(.064,-.9444,-.3225,0,.9979,.0577,.0289,0,-.0087,-.3236,.9461,0,0,.1634,0,1)}
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
        {frame: 60, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 80, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 90, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 108, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 120, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 180, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 190, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)},
        {frame: 250, value: _M(.0526,.2548,-.9656,0,.9901,.1129,.0837,0,.1303,-.9604,-.2464,0,-.009,.2359,.1244,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("Finger_Bone3.R", skeleton,skeleton.bones[21], _M(.2971,-.4403,.8473,0,-.6929,.5111,.5086,0,-.657,-.7382,-.1533,0,-.1417,.7218,.1392,1), _M(.3721,.1776,.911,0,-.7296,.6627,.1688,0,-.5738,-.7275,.3762,0,-.1549,.7468,.1043,1));
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
        {frame: 60, value: _M(.2971,-.4403,.8473,0,-.6929,.5111,.5086,0,-.657,-.7382,-.1533,0,-.1417,.7218,.1392,1)},
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
        {frame: 250, value: _M(.5228,.0418,.8514,0,-.6264,.6963,.3505,0,-.5782,-.7166,.3902,0,-.1446,.7399,.1231,1)}
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
        {frame: 60, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
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
        {frame: 90, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 108, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 120, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 180, value: _M(-.2178,.4186,.8817,0,-.0093,.9024,-.4308,0,-.976,-.102,-.1926,0,0,.1072,0,1)},
        {frame: 190, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)},
        {frame: 250, value: _M(-.2484,.5247,.8142,0,.0502,.8464,-.5301,0,-.9673,-.0908,-.2366,0,0,.1072,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.L", skeleton,skeleton.bones[5], _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1), _M(.9969,.0775,-.0101,0,.0781,-.9839,.1607,0,.0025,-.161,-.9869,0,.2401,.1528,-.0013,1));
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
        {frame: 60, value: _M(.9978,.0653,-.0106,0,.0655,-.9976,.0221,0,-.0091,-.0228,-.9997,0,.2401,.1528,-.0013,1)},
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
        {frame: 250, value: _M(.9316,.3558,-.0739,0,.3523,-.8347,.4233,0,.089,-.4204,-.903,0,.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.L", skeleton,skeleton.bones[28], _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1), _M(.9955,.0885,.0336,0,-.092,.9877,.1265,0,-.022,-.129,.9914,0,0,1.3168,0,1));
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
        {frame: 60, value: _M(.9955,.0885,.0336,0,-.0467,.1506,.9875,0,.0823,-.9846,.1541,0,0,1.3168,0,1)},
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
        {frame: 250, value: _M(.9955,.0885,.0336,0,-.0946,.9166,.3884,0,.0036,-.3898,.9209,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("thigh.R", skeleton,skeleton.bones[5], _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1), _M(.9969,-.0775,.0101,0,-.0781,-.9839,.1607,0,-.0025,-.161,-.9869,0,-.2401,.1528,-.0013,1));
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
        {frame: 60, value: _M(.9998,-.007,.021,0,-.021,-.5973,.8017,0,.0069,-.802,-.5973,0,-.2401,.1528,-.0013,1)},
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
        {frame: 250, value: _M(.9292,-.3692,.0136,0,-.3691,-.9258,.0814,0,-.0175,-.0806,-.9966,0,-.2401,.1528,-.0013,1)}
        ]);
        bone.animations.push(animation);

        bone = new QI.Bone("shin.R", skeleton,skeleton.bones[30], _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1), _M(.9955,-.0885,-.0336,0,.092,.9877,.1265,0,.022,-.129,.9914,0,0,1.3168,0,1));
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
        {frame: 60, value: _M(.9955,-.0885,-.0336,0,.0899,.7735,.6274,0,-.0295,-.6276,.7779,0,0,1.3168,0,1)},
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
        {frame: 250, value: _M(.9955,-.0885,-.0336,0,.0946,.9407,.3259,0,.0027,-.3276,.9448,0,0,1.3168,0,1)}
        ]);
        bone.animations.push(animation);

        skeleton.createAnimationRange("Attack", 0, 20);
        skeleton.createAnimationRange("death", 30, 51);
        skeleton.createAnimationRange("Run", 60, 80);
        skeleton.createAnimationRange("Skill01", 90, 108);
        skeleton.createAnimationRange("stand", 120, 180);
        skeleton.createAnimationRange("Stand_with_weapon", 190, 250);
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
                    .9229,.0569,-.2816,1.0366,-.0245,-.3138,.9237,-.0248,-.2665,.9275,-.03,-.4911,.7954,-.0236,-1.0024,.7826,-.026,-.4787,.9092,.0619,-1.0158,.7954,-.0236,-1.0024,.9085,-.0222,-1.065,1.0908,.065,-.9096,1.0791,-.0253,-.5015,1.0796,.0598,-.498,.8157,.0554,-.3072,.7826,-.026,-.4787,.786,.0529,-.481,.8178,.0597,-.9544,.7826,-.026,-.4787
                    ,.7954,-.0236,-1.0024,1.0377,.0564,-.3218,1.0791,-.0253,-.5015,.9275,-.03,-.4911,.8193,-.0247,-.2913,.9237,-.0248,-.2665,1.027,.1397,-.3948,1.0796,.0598,-.498,.8409,.1974,-.6057,.786,.0529,-.481,.8299,.1356,-.3352,.7988,.132,-.4958,.9469,.2211,-.5895,1.0655,.1464,-.4796,.8886,.2109,-.6239,.9232,.1387,-.3195,1.0366,-.0245,-.3138
                    ,.9275,-.03,-.4911,.9237,-.0248,-.2665,1.1289,-.0218,-.9556,1.1289,-.0218,-.9556,1.0791,-.0253,-.5015,.8193,-.0247,-.2913,-.9268,.0569,1.0005,-1.0164,-.0293,1.0032,-1.0244,.0515,.9956,-.987,-.0324,.809,-1.0978,-.0253,.2926,-1.2267,-.0319,.2872,-1.2107,.0527,.3328,-1.0978,-.0253,.2926,-1.1004,.0545,.3475,-1.1235,-.0361,.86,-1.3216,.0394,.5104
                    ,-1.1171,.0517,.8541,-.8459,-.0199,.7606,-.8215,.0565,.9678,-.8435,.0584,.7655,-.8459,-.0199,.7606,-.8435,.0584,.7655,-1.1235,-.0361,.86,-1.1171,.0517,.8541,-.8224,-.0234,.9818,-.987,-.0324,.809,-.9238,-.0246,1.0149,-1.0321,.1406,.9024,-1.1171,.0517,.8541,-1.0773,.1466,.8322,-.9088,.1691,.6433,-.8435,.0584,.7655,-.8186,.1334,.7736
                    ,-.8347,.1386,.939,-.8186,.1334,.7736,-1.0773,.1466,.8322,-.9943,.2004,.6974,-.9628,.1791,.6459,-.9192,.1387,.9631,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.1235,-.0361,.86,-1.3739,-.045,.4841,-1.3739,-.045,.4841,-1.1235,-.0361,.86,-.8224,-.0234,.9818,.9085,-.0222,-1.065,.7954,-.0236,-1.0024,.8193,-.0247,-.2913,.7826,-.026,-.4787
                    ,.786,.0529,-.481,.7826,-.026,-.4787,1.0796,.0598,-.498,1.0791,-.0253,-.5015,.9275,-.03,-.4911,.7826,-.026,-.4787,1.0655,.1464,-.4796,1.0796,.0598,-.498,.7988,.132,-.4958,.786,.0529,-.481,1.0366,-.0245,-.3138,1.0791,-.0253,-.5015,.9275,-.03,-.4911,1.1289,-.0218,-.9556,.9085,-.0222,-1.065,.8193,-.0247,-.2913,-.9238,-.0246,1.0149
                    ,-.8459,-.0199,.7606,-1.2267,-.0319,.2872,-1.0978,-.0253,.2926,-.8224,-.0234,.9818,-1.0978,-.0253,.2926,-.8459,-.0199,.7606,-1.1235,-.0361,.86,-.8459,-.0199,.7606,-.987,-.0324,.809,-1.1171,.0517,.8541,-.8435,.0584,.7655,-1.0773,.1466,.8322,-1.0164,-.0293,1.0032,-.987,-.0324,.809,-1.2267,-.0319,.2872,-1.3739,-.045,.4841,-.8224,-.0234,.9818
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
                    .0632,.2833,.9569,.6004,-.5806,.5499,.0667,-.5664,.8214,.0018,-1,.0043,-.744,-.4254,-.5151,-.7527,-.6567,.0454,-.0285,.7239,-.6893,-.744,-.4254,-.5151,-.0179,-.4057,-.9138,.6559,.6893,-.3074,.7282,-.6786,.0953,.9783,.1969,.0645,-.7225,.218,.6561,-.7527,-.6567,.0454,-.9908,.1296,.0396,-.6952,.6261,-.3529,-.7527,-.6567,.0454
                    ,-.744,-.4254,-.5151,.7186,.2635,.6436,.7282,-.6786,.0953,.0018,-1,.0043,-.5675,-.5523,.6106,.0667,-.5664,.8214,.8057,.3995,.4372,.9783,.1969,.0645,-.7996,.5655,-.2018,-.9908,.1296,.0396,-.7032,.3517,.6178,-.9832,.1369,-.1206,.5182,.8107,-.2724,.9685,.1917,-.1588,-.1136,.922,-.3702,.1316,.4836,.8653,.6004,-.5806,.5499
                    ,.0018,-1,.0043,.0667,-.5664,.8214,.7927,-.3764,-.4795,.7927,-.3764,-.4795,.7282,-.6786,.0953,-.5675,-.5523,.6106,.0969,.2821,.9545,-.3435,-.6086,.7152,-.4891,.2911,.8222,.054,-.9985,-.0057,.4602,-.3818,-.8015,-.3677,-.416,-.8317,-.3254,.7388,-.5901,.4602,-.3818,-.8015,.423,.6669,-.6134,-.6103,-.6755,.4138,-.7297,.6811,.0599
                    ,-.8171,.2719,.5082,.7319,-.6317,-.2555,.8219,.1959,.5348,.9438,-.0953,-.3164,.7319,-.6317,-.2555,.9438,-.0953,-.3164,-.6103,-.6755,.4138,-.8171,.2719,.5082,.6794,-.54,.4968,.054,-.9985,-.0057,.0932,-.5769,.8115,-.6295,.5293,.5688,-.8171,.2719,.5082,-.7039,.6067,.3694,.7549,.2452,-.6083,.9438,-.0953,-.3164,.9274,-.2815,-.2464
                    ,.8386,.228,.4947,.9274,-.2815,-.2464,-.7039,.6067,.3694,-.3298,.9194,-.2141,-.0342,.9094,-.4145,.0226,.4883,.8723,-.3435,-.6086,.7152,.054,-.9985,-.0057,-.6103,-.6755,.4138,-.9055,-.4187,-.0683,-.9055,-.4187,-.0683,-.6103,-.6755,.4138,.6794,-.54,.4968,-.0179,-.4057,-.9138,-.744,-.4254,-.5151,-.5675,-.5523,.6106,-.7527,-.6567,.0454
                    ,-.9908,.1296,.0396,-.7527,-.6567,.0454,.9783,.1969,.0645,.7282,-.6786,.0953,.0018,-1,.0043,-.7527,-.6567,.0454,.9685,.1917,-.1588,.9783,.1969,.0645,-.9832,.1369,-.1206,-.9908,.1296,.0396,.6004,-.5806,.5499,.7282,-.6786,.0953,.0018,-1,.0043,.7927,-.3764,-.4795,-.0179,-.4057,-.9138,-.5675,-.5523,.6106,.0932,-.5769,.8115
                    ,.7319,-.6317,-.2555,-.3677,-.416,-.8317,.4602,-.3818,-.8015,.6794,-.54,.4968,.4602,-.3818,-.8015,.7319,-.6317,-.2555,-.6103,-.6755,.4138,.7319,-.6317,-.2555,.054,-.9985,-.0057,-.8171,.2719,.5082,.9438,-.0953,-.3164,-.7039,.6067,.3694,-.3435,-.6086,.7152,.054,-.9985,-.0057,-.3677,-.416,-.8317,-.9055,-.4187,-.0683,.6794,-.54,.4968
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
                    .9573,2.6104,-.5447,1.0377,2.4335,-.459,1.0785,2.598,-.3934,.8624,2.3863,-.2538,.76,2.3858,-.3808,.8024,2.426,-.3856,.8038,2.569,-.4873,.9377,2.4517,-.5822,.8019,2.5301,-.3111,.8624,2.3863,-.2538,.8024,2.426,-.3856,.889,2.4871,-.1551,1.0386,2.4081,-.3045,.8624,2.3863,-.2538,1.0386,2.4081,-.3045,.8929,2.3374,-.248,.9377,2.4517,-.5822
                    ,1.0327,2.3935,-.466,1.0377,2.4335,-.459,.8047,2.4479,-.5298,.9226,2.419,-.6122,.9377,2.4517,-.5822,1.0386,2.4081,-.3045,1.0327,2.3935,-.466,1.0611,2.3649,-.2957,.8024,2.426,-.3856,.8047,2.4479,-.5298,.8024,2.426,-.3856,.7391,2.4172,-.5341,1.0785,2.598,-.3934,1.0841,2.554,-.2091,1.0807,2.7294,-.3557,1.0877,2.679,-.1418,.7323,2.6955,-.4691
                    ,.8019,2.5301,-.3111,.8672,2.6001,-.0822,.7261,2.6456,-.2505,.9411,2.7448,-.5314,1.0807,2.7294,-.3557,-1.0912,2.4303,.4999,-1.0979,2.6036,.371,-1.0814,2.6013,.5615,-.8372,2.3849,.3633,-.8228,2.3933,.5247,-.8552,2.4262,.3805,-.9753,2.4526,.2792,-.9408,2.5634,.2934,-.8064,2.5293,.4273,-.8228,2.3933,.5247,-.7779,2.5006,.6108,-.9829,2.4111,.6089
                    ,-.9586,2.5682,.7012,-.8382,2.3436,.5486,-.9829,2.4111,.6089,-1.0889,2.3864,.4991,-1.1121,2.4494,.3495,-1.0912,2.4303,.4999,-1.1271,2.4213,.3241,-.9753,2.4526,.2792,-.9829,2.4111,.6089,-1.0889,2.3864,.4991,-1.0912,2.4303,.4999,-.8552,2.4262,.3805,-.8064,2.5293,.4273,-.941,2.4235,.2501,-.8552,2.4262,.3805,-.9753,2.4526,.2792,-1.0814,2.6013,.5615
                    ,-1.0606,2.7349,.5826,-.918,2.6974,.7467,-.8832,2.6876,.2637,-.8064,2.5293,.4273,-.728,2.6501,.4213,-.7149,2.6171,.6428,-.728,2.6501,.4213,-1.0792,2.7375,.3584,-1.0606,2.7349,.5826,.8047,2.4479,-.5298,.8624,2.3863,-.2538,1.0386,2.4081,-.3045,.9377,2.4517,-.5822,1.0386,2.4081,-.3045,1.0377,2.4335,-.459,1.0327,2.3935,-.466,.8019,2.5301,-.3111
                    ,.8024,2.426,-.3856,.8024,2.426,-.3856,1.0785,2.598,-.3934,1.0377,2.4335,-.459,1.0785,2.598,-.3934,.7261,2.6456,-.2505,.8019,2.5301,-.3111,-1.1121,2.4494,.3495,-1.1121,2.4494,.3495,-.8552,2.4262,.3805,-.8228,2.3933,.5247,-.8228,2.3933,.5247,-.9822,2.3574,.6299,-.9829,2.4111,.6089,-.9753,2.4526,.2792,-.9829,2.4111,.6089,-1.0889,2.3864,.4991
                    ,-.8552,2.4262,.3805,-.8552,2.4262,.3805,-1.0912,2.4303,.4999,-1.0814,2.6013,.5615,-1.0814,2.6013,.5615,-.8064,2.5293,.4273,-.728,2.6501,.4213
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
                    .2989,.1496,-.9425,.9268,-.0628,-.3702,.9414,-.0128,-.337,-.5229,-.32,.79,-.673,.6311,.3857,-.8931,.3653,.2623,-.7802,-.0538,-.6231,.3533,.3594,-.8637,-.9155,-.3759,.1431,-.5229,-.32,.79,-.8931,.3653,.2623,-.2119,-.6194,.7559,.8668,-.0581,.4952,-.5229,-.32,.79,.8668,-.0581,.4952,-.0781,.0749,.9941,.3533,.3594,-.8637
                    ,.9348,.0092,-.3551,.9268,-.0628,-.3702,-.5795,.6358,-.5098,.1422,.6301,-.7633,.3533,.3594,-.8637,.8668,-.0581,.4952,.9348,.0092,-.3551,.6703,.4665,.5771,-.8931,.3653,.2623,-.5795,.6358,-.5098,-.8931,.3653,.2623,-.464,.8812,-.0902,.9414,-.0128,-.337,.8318,-.362,.4208,.9459,.0742,-.3158,.8276,-.2846,.4837,-.7227,-.3285,-.6081
                    ,-.9155,-.3759,.1431,-.1916,-.5574,.8078,-.8305,-.5445,.1172,.2808,.1079,-.9537,.9459,.0742,-.3158,-.916,-.0608,.3964,-.8886,.1053,-.4464,-.9151,-.014,.4028,.8596,.4163,-.2962,.9123,-.3158,.2607,.8621,.2091,-.4616,-.0171,.4404,-.8976,.1151,-.0833,-.9898,.8107,-.3572,-.4639,.9123,-.3158,.2607,.6843,-.5644,.4617,-.2914,-.1004,.9513
                    ,-.3128,-.3193,.8945,.7516,.0939,.6529,-.2914,-.1004,.9513,-.8789,.0012,.477,-.8822,.3725,-.2879,-.916,-.0608,.3964,-.7006,.6284,-.338,-.0171,.4404,-.8976,-.2914,-.1004,.9513,-.8789,.0012,.477,-.916,-.0608,.3964,.8621,.2091,-.4616,.8107,-.3572,-.4639,.3044,.7842,-.5407,.8621,.2091,-.4616,-.0171,.4404,-.8976,-.9151,-.014,.4028
                    ,-.908,.0747,.4121,-.2666,-.2447,.9322,.1409,-.2868,-.9475,.8107,-.3572,-.4639,.7558,-.4831,-.442,.7047,-.5155,.4875,.7558,-.4831,-.442,-.8637,.0751,-.4982,-.908,.0747,.4121,-.5795,.6358,-.5098,-.5229,-.32,.79,.8668,-.0581,.4952,.3533,.3594,-.8637,.8668,-.0581,.4952,.9268,-.0628,-.3702,.9348,.0092,-.3551,-.9155,-.3759,.1431
                    ,-.8931,.3653,.2623,-.8931,.3653,.2623,.9414,-.0128,-.337,.9268,-.0628,-.3702,.9414,-.0128,-.337,-.8305,-.5445,.1172,-.9155,-.3759,.1431,-.8822,.3725,-.2879,-.8822,.3725,-.2879,.8621,.2091,-.4616,.9123,-.3158,.2607,.9123,-.3158,.2607,-.0402,.3634,.9308,-.2914,-.1004,.9513,-.0171,.4404,-.8976,-.2914,-.1004,.9513,-.8789,.0012,.477
                    ,.8621,.2091,-.4616,.8621,.2091,-.4616,-.916,-.0608,.3964,-.9151,-.014,.4028,-.9151,-.014,.4028,.8107,-.3572,-.4639,.7558,-.4831,-.442
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
                    .1392,3.9958,-.1519,.2227,4.0712,-.0479,.1302,4.0626,-.1358,.2607,3.3502,.3381,.1157,3.7647,.3995,.3772,3.746,.302,.4261,3.3588,-.138,.1825,3.0971,-.3239,.3114,3.0954,-.1306,.8987,3.2723,-.2392,.8614,2.9966,-.3304,.9671,2.9913,-.21,.0213,3.9197,-.2062,.1392,3.9958,-.1519,.0381,3.9958,-.1703,.7415,3.7137,.041,.6066,3.3808,.0416
                    ,.5621,3.3657,.165,.2279,2.8525,.2653,.0903,3.0905,.3503,.2264,3.0902,.2849,.0197,3.4351,-.394,-.1151,3.0904,-.3084,.0417,3.0926,-.3444,.499,3.7466,-.3911,.5204,3.4151,-.3172,.6979,3.4153,-.3017,.3251,2.8772,-.0768,.2041,2.7314,-.214,.3403,2.7256,-.056,.6877,3.7441,-.1777,.7832,3.4274,-.2148,.861,2.8691,-.043,.7305,2.7934,-.1967
                    ,.7548,2.9007,-.1567,.6372,3.149,-.3765,.7794,3.2466,-.367,.7577,3.1261,.0309,.9651,2.9579,-.0583,.861,2.8691,-.043,.7548,2.9007,-.1567,.6091,3.1339,-.1653,.9525,2.6071,-.5308,1.0237,2.4328,-.4533,1.0642,2.5977,-.3883,1.0656,2.8252,-.0921,.8612,2.7502,-.0378,.8614,2.9966,-.3304,1.0569,2.8703,-.2938,.9671,2.9913,-.21,.7686,2.9344,-.3126
                    ,.927,2.8837,-.4602,.8614,2.9966,-.3304,.8697,2.3899,-.2665,.7729,2.3807,-.3868,.8072,2.4256,-.3875,.8087,2.5685,-.4891,.9324,2.4471,-.5688,.8068,2.5296,-.3129,.8697,2.3899,-.2665,.8072,2.4256,-.3875,.8924,2.4956,-.1672,1.0256,2.4103,-.3119,.8697,2.3899,-.2665,.9519,2.1731,-.3323,.8407,2.0704,-.4919,.8878,2.1857,-.5033,1.0256,2.4103,-.3119
                    ,.8951,2.3349,-.2628,.9324,2.4471,-.5688,1.0187,2.391,-.4607,1.0237,2.4328,-.4533,.8096,2.4476,-.5316,.9202,2.4116,-.5992,.9324,2.4471,-.5688,1.0151,2.1758,-.4894,.8359,2.1994,-.6461,.9274,2.1879,-.6487,.3317,3.9468,-.0554,.499,3.7466,-.3911,.6877,3.7441,-.1777,-.0809,3.9187,-.194,.0266,3.7796,-.3528,.1157,3.7647,.3995,.1772,3.8932,.2878
                    ,.3772,3.746,.302,.3093,3.4535,-.3848,.0266,3.7796,-.3528,.0585,3.9957,.2751,.1596,3.9957,.2307,.3317,3.9468,-.0554,.2829,3.9973,.1237,.2562,4.0084,-.0376,-.0984,2.6615,-.2775,.0774,2.5611,-.2753,.0594,2.6908,-.3005,-.1021,2.8566,-.2878,.0594,2.6908,-.3005,.049,2.8699,-.316,.3639,2.6619,.1891,.2268,2.6462,.2677,-.0969,2.3477,-.2532
                    ,.1394,2.4314,-.3022,.3403,2.7256,-.056,.2269,2.6647,-.2271,.3716,2.6531,-.0528,.2268,2.6462,.2677,.3929,2.5768,.1865,.2848,2.4764,.2711,.3374,1.8974,-.5452,.346,1.5356,-.6012,.4406,1.5725,-.6205,.2874,2.5305,-.2824,.4377,2.507,-.1163,.4604,2.4211,.1296,.337,2.349,.2314,.436,1.4253,-.2483,.3563,1.3686,-.5041,.3296,1.4844,-.4732
                    ,.6164,1.9185,-.3939,.5354,1.5978,-.6086,.6616,1.5891,-.5074,.2287,1.7643,-.2895,.436,1.4253,-.2483,.3296,1.4844,-.4732,.5185,1.7729,-.0978,.6695,1.534,-.3539,.5719,1.4751,-.2769,.4741,1.453,-.6658,.5305,1.0053,-.6524,.6132,1.03,-.6703,.5719,1.4751,-.2769,.7058,1.4134,-.398,.5897,1.3574,-.3168,.4406,1.5725,-.6205,.3806,1.4233,-.6447
                    ,.6616,1.5891,-.5074,.5784,1.4682,-.6376,.7168,1.4669,-.5425,.7793,.3807,-.3278,.8103,.1283,-.4961,.7268,.378,-.4845,.7175,1.0573,-.6461,.8363,1.0841,-.5653,.4571,1.317,-.2872,.448,.9691,-.516,.8204,1.0673,-.4165,.7107,1.0176,-.2378,.9219,.0528,-.2929,1.0293,-.0176,-.3205,.923,-.0179,-.2765,.8831,.409,-.3169,1.0176,.135,-.4007
                    ,.9216,.1328,-.33,.8234,.4173,-.6221,.851,.191,-.6049,.8898,.2023,-.6256,.981,.4538,-.5178,.9418,.2105,-.5866,1.0547,.1411,-.4808,.9275,-.0179,-.4911,.8043,-.0182,-.9962,.7919,-.0182,-.4794,.9094,.0528,-1.0078,.8043,-.0182,-.9962,.9089,-.0179,-1.0536,1.0825,.0572,-.9056,1.07,-.0174,-.5029,1.0681,.0563,-.4995,.8243,.0525,-.3152
                    ,.7919,-.0182,-.4794,.7978,.0505,-.4818,.8049,2.0905,-.6459,.7093,2.0399,-.5658,.8698,2.0453,-.6535,1.0497,2.3609,-.3048,.929,2.0126,-.4944,.7514,1.9806,-.3527,.9743,1.9966,-.3309,.8261,.0522,-.9499,.7919,-.0182,-.4794,.8043,-.0182,-.9962,1.029,.0531,-.3296,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.8262,-.0182,-.2987,.923,-.0179,-.2765
                    ,.959,.4399,-.4259,1.0547,.1411,-.4808,.3563,1.3686,-.5041,.8363,1.0841,-.5653,.7268,.378,-.4845,.7719,.4013,-.6101,.6695,1.534,-.3539,.7168,1.4669,-.5425,.2135,1.8465,-.5206,.3296,1.4844,-.4732,.6164,1.9185,-.3939,.625,1.8407,-.1786,.3296,1.4844,-.4732,.346,1.5356,-.6012,.3716,2.6531,-.0528,.3639,2.6619,.1891,.3716,2.6531,-.0528
                    ,.236,3.9048,-.2387,.2562,4.0084,-.0376,.1392,3.9958,-.1519,.4159,3.9057,.1191,.6877,3.7441,-.1777,.7415,3.7137,.041,.7911,2.2139,-.5085,1.0187,2.391,-.4607,1.0473,2.1746,-.316,1.0256,2.4103,-.3119,1.0187,2.391,-.4607,.8072,2.4256,-.3875,.8096,2.4476,-.5316,.8072,2.4256,-.3875,.7502,2.4074,-.5311,.9671,2.9913,-.21,.9651,2.9579,-.0583
                    ,1.0642,2.5977,-.3883,1.0715,2.5591,-.2158,.6091,3.1339,-.1653,.7686,2.9344,-.3126,.7305,2.7934,-.1967,.7352,2.8387,-.403,.6877,3.7441,-.1777,.8067,3.4249,-.034,.3732,2.8575,.1699,.3403,2.7256,-.056,.9102,3.2639,-.0407,.9671,2.9913,-.21,.4239,3.0897,.137,.4261,3.3588,-.138,.3114,3.0954,-.1306,.2562,4.0084,-.0376,.2202,4.0596,.1058
                    ,.2227,4.0712,-.0479,.0441,4.0626,-.1712,.0381,3.9958,-.1703,.0585,3.9957,.2751,.1306,4.0582,.1978,.1596,3.9957,.2307,1.0176,.135,-.4007,1.0681,.0563,-.4995,.851,.191,-.6049,.7978,.0505,-.4818,.8385,.1316,-.3427,.8103,.1283,-.4961,.9418,.2105,-.5866,1.0547,.1411,-.4808,.8898,.2023,-.6256,.9216,.1328,-.33,.7832,3.4274,-.2148
                    ,.8067,3.4249,-.034,.8067,3.4249,-.034,.6066,3.3808,.0416,.6979,3.4153,-.3017,.7832,3.4274,-.2148,1.0569,2.8703,-.2938,.8068,2.5296,-.3129,.3251,2.8772,-.0768,.1153,3.3512,.4,.193,2.8788,-.2226,.6066,3.3808,.0416,.5325,3.302,-.1562,.4261,3.3588,-.138,.3093,3.4535,-.3848,.5325,3.302,-.1562,.5204,3.4151,-.3172,.4261,3.3588,-.138
                    ,.5325,3.302,-.1562,.5621,3.3657,.165,.8898,.2023,-.6256,.9418,.2105,-.5866,.1596,3.9957,.2307,.2829,3.9973,.1237,.0381,3.9958,-.1703,-.0196,4.0626,-.1818,-.0389,3.9958,-.1739,1.0293,-.0176,-.3205,.9275,-.0179,-.4911,.923,-.0179,-.2765,1.1197,-.0166,-.9497,1.1197,-.0166,-.9497,1.07,-.0174,-.5029,.8833,.4327,-.5987,.8385,.1316,-.3427
                    ,.8262,-.0182,-.2987,.5033,.9625,-.2927,.5354,1.5978,-.6086,.436,1.4253,-.2483,.3206,1.6998,-.0534,.1263,2.2381,.302,.0599,2.3721,.3471,.4604,1.9342,-.5321,.0527,2.6574,.3169,.0527,2.6574,.3169,.052,2.8608,.3018,.2041,2.7314,-.214,-.1452,3.7774,-.2956,-.1577,3.4331,-.3427,.3772,3.746,.302,.7415,3.7137,.041,.499,3.7466,-.3911
                    ,-.0389,3.9958,-.1739,.5621,3.3657,.165,.7415,3.7137,.041,.1394,2.4314,-.3022,.2874,2.5305,-.2824,.337,2.349,.2314,.1263,2.2381,.302,.4377,2.507,-.1163,.4604,2.4211,.1296,-.0177,2.267,-.3511,.2287,1.7643,-.2895,.4604,2.4211,.1296,.337,2.349,.2314,.0299,2.1757,-.0614,.2874,2.5305,-.2824,.4377,2.507,-.1163,.1394,2.4314,-.3022
                    ,.448,.9691,-.516,.981,.4538,-.5178,.0299,2.1757,-.0614,-.1023,2.1906,-.2868,-.0177,2.267,-.3511,.2268,2.6462,.2677,.1176,4.4726,.157,.2016,4.5545,.0609,.2092,4.4724,.0628,.1049,4.1965,.139,.1723,4.3338,.0138,.1758,4.1603,.05,.2269,4.5512,-.1067,.2375,4.4704,-.1066,.202,4.2822,-.0899,.2009,4.1521,-.078,.2269,4.5512,-.1067
                    ,.2106,4.4721,-.2588,.2375,4.4704,-.1066,.202,4.2822,-.0899,.1211,4.126,-.1771,.2009,4.1521,-.078,.0568,4.2966,-.3485,.0059,4.2792,-.3532,.0783,4.1087,-.3382,.1345,4.4719,-.3672,.0052,4.5478,-.375,.0044,4.4714,-.3969,.1281,4.5482,-.3531,.0064,4.629,-.3394,.0052,4.5478,-.375,.2269,4.5512,-.1067,.176,4.6289,-.2116,.2009,4.5484,-.2589
                    ,.2016,4.5545,.0609,.1955,4.6314,-.105,.2269,4.5512,-.1067,.1138,4.5547,.154,.1633,4.6344,.0442,.2016,4.5545,.0609,.1297,4.3735,-.3458,.0568,4.2966,-.3485,.1179,4.2792,-.3442,.202,4.2822,-.0899,.2176,4.4437,-.2588,.1858,4.2792,-.2741,.1723,4.3338,.0138,.2371,4.4425,-.1061,.202,4.2822,-.0899,.0988,4.3341,.1212,.2045,4.44,.0461
                    ,.1723,4.3338,.0138,.0044,4.4714,-.3969,.0044,4.4435,-.3975,.0518,4.4436,-.3858,.2375,4.4704,-.1066,.2176,4.4437,-.2588,.2371,4.4425,-.1061,.2045,4.44,.0461,.2375,4.4704,-.1066,.2371,4.4425,-.1061,.115,4.4402,.1416,.2092,4.4724,.0628,.2045,4.44,.0461,.094,4.6348,.1265,.0192,4.7024,.0461,.0572,4.7021,.0313,.1955,4.6314,-.105
                    ,.1082,4.6982,-.1522,.0933,4.7017,-.0421,.106,4.6998,-.1013,.0639,4.6983,-.2399,.1109,4.6289,-.3092,.0933,4.7017,-.0421,.0192,4.7024,.0461,.0095,4.6985,-.2459,.0234,4.4405,.1699,.1176,4.4726,.157,.0234,4.4405,.1699,.0224,4.3344,.1425,.0238,4.555,.1825,.0224,4.3344,.1425,.0229,4.1967,.1575,.0238,4.4729,.1839,.1138,4.5547,.154
                    ,.0095,4.6985,-.2459,.2106,4.4721,-.2588,.1397,4.4436,-.3599,.2176,4.4437,-.2588,.1281,4.5482,-.3531,.1858,4.2792,-.2741,.0241,4.066,-.2905,.1109,4.0882,-.1649,.1088,4.1127,.1705,.0249,4.1154,.1938,-.0072,4.1087,-.3481,-.0121,4.066,-.3034,.2009,4.1521,-.078,.2078,4.1058,-.0628,.2078,4.1058,-.0628,.1903,4.1086,.0731,.0298,4.0582,.225
                    ,.2227,4.0712,-.0479,.1858,4.2792,-.2741,.1179,4.2792,-.3442,.0059,4.2792,-.3532,.0431,4.292,-.355,.0061,4.292,-.3471,.0061,4.292,-.3471,.0235,4.2912,-.4037,.0038,4.2912,-.4162,.0379,4.3712,-.3679,.0431,4.292,-.355,.0043,4.376,-.4004,.0568,4.2966,-.3485,.0403,4.3726,-.3495,.0404,4.4263,-.3784,.0355,4.376,-.3933,.0391,4.4046,-.3731
                    ,.0467,4.4164,-.348,.0355,4.376,-.3933,.1397,4.4436,-.3599,.0518,4.4436,-.3858,.0047,4.438,-.3898,.7085,2.0618,-.4603,.7257,2.0152,-.4594,.7257,2.0152,-.4594,.7292,2.0323,-.3554,.9002,2.0392,-.334,.8407,2.0704,-.4919,.6906,2.0966,-.5667,.7085,2.0618,-.4603,.929,2.0126,-.4944,.6899,2.1628,-.4794,.7212,2.2974,-.4505,.7191,2.3103,-.5275
                    ,.7596,2.2165,-.5872,.7308,2.1417,-.5659,.6978,2.0857,-.5378,.7251,2.0675,-.5622,.7491,2.1424,-.5193,.6844,2.1757,-.5237,.7356,2.0681,-.5353,.7012,2.0784,-.5124,1.0151,2.1758,-.4894,.929,2.0126,-.4944,.0913,3.7593,-.359,.0056,4.1186,-.3627,.0053,3.7104,-.3712,.1635,4.1292,-.3101,.1074,4.1351,-.3658,.0059,4.2792,-.3532,.056,4.279,-.369
                    ,.0568,4.2966,-.3485,.1179,4.2792,-.3442,.0568,4.2966,-.3485,.1179,4.2792,-.3442,.1858,4.2506,-.2944,.1858,4.2792,-.2741,.1858,4.2792,-.2741,.21,4.2569,-.1432,.202,4.2822,-.0899,.257,4.0097,-.195,.1109,4.2028,-.3478,.0065,4.1949,-.3362,.1175,4.2616,-.3646,-.222,3.9958,-.0632,-.2266,4.0712,.018,-.2751,4.0083,.1016,-.0333,3.3563,.4534
                    ,.1157,3.7647,.3995,.1153,3.3512,.4,-.3878,3.0923,.1012,-.544,3.4427,-.0618,-.467,3.3556,.2131,-.8707,3.2723,.4896,-.8896,2.9972,.4357,-.864,3.2263,.3195,-.1718,3.9197,-.1492,-.222,3.9958,-.0632,-.3915,3.9036,-.016,-.4748,3.4039,.4879,-.5948,3.7366,.5373,-.362,3.396,.546,-.0567,3.0921,.3854,.052,2.8608,.3018,-.1191,2.8627,.3432
                    ,-.2772,3.0873,-.2608,-.1577,3.4331,-.3427,-.3281,3.4314,-.2659,-.696,3.7377,.0591,-.6492,3.3915,.1577,-.544,3.4427,-.0618,-.3962,2.7021,.0647,-.342,2.8595,-.1154,-.3829,2.8703,.0761,-.6999,3.7394,.3357,-.7705,3.3971,.2902,-.698,2.8007,.4554,-.69,2.8885,.6529,-.6907,2.9106,.4955,-.7584,3.1236,.2305,-.5788,3.1569,.6141,-.7809,2.9817,.7064
                    ,-.7485,3.2901,.6445,-.6907,2.9106,.4955,-.5971,3.1335,.3696,-1.0773,2.43,.4939,-1.0847,2.6009,.3779,-1.0675,2.601,.5555,-.8719,2.8458,.7591,-.7809,2.9817,.7064,-1.0044,2.8786,.6036,-.8896,2.9972,.4357,-.8847,3.0021,.5959,-1.0236,2.8799,.393,-.8079,2.9345,.3894,-.8896,2.9972,.4357,-.8504,2.3794,.3683,-.837,2.3963,.5203,-.8685,2.4245,.3876
                    ,-1.0986,2.4451,.3546,-.9431,2.5628,.3084,-.8193,2.5332,.4343,-.837,2.3963,.5203,-.7888,2.5084,.6039,-.9789,2.4131,.5945,-.9542,2.5727,.6874,-.986,2.0455,.3252,-.9263,2.1706,.5037,-1.015,2.1902,.3442,-.8501,2.3405,.5397,-.9789,2.4131,.5945,-1.0757,2.3849,.4918,-1.0986,2.4451,.3546,-1.0773,2.43,.4939,-1.1155,2.4139,.3302,-.9759,2.4452,.2924
                    ,-1.0986,2.4451,.3546,-1.0873,2.1717,.4503,-1.0907,2.2114,.2154,-.9458,2.4126,.2594,-.3505,3.9464,.1818,-.696,3.7377,.0591,-.1452,3.7774,-.2956,-.0809,3.9187,-.194,-.0139,3.8932,.3551,.1157,3.7647,.3995,-.1461,3.754,.4969,-.3126,3.7796,-.226,.0585,3.9957,.2751,.1018,3.8658,.3733,-.3505,3.9464,.1818,-.2141,3.9981,.2657,-.3062,3.9098,.3702
                    ,-.2653,2.4983,-.2097,-.0984,2.6615,-.2775,-.2587,2.6531,-.2474,-.2552,2.8539,-.2573,-.0984,2.6615,-.2775,-.1021,2.8566,-.2878,-.2861,2.7023,.3014,-.2911,2.8739,.3247,-.3292,2.3324,-.1643,-.0969,2.3477,-.2532,-.3962,2.7021,.0647,-.3809,2.5871,-.123,-.3559,2.6704,-.1298,-.1246,2.6722,.3347,-.3109,2.6286,.3228,-.2861,2.7023,.3014,-.5731,1.7499,-.0655
                    ,-.5766,1.3927,.0155,-.4498,1.698,-.0914,-.4194,2.6285,.0919,-.4533,2.4289,-.0953,-.1682,2.5397,.3727,-.3842,2.4749,.3573,-.5212,1.2698,.1541,-.4653,1.4153,.3786,-.4932,1.3856,.1262,-.7376,1.8475,.1885,-.7483,1.4673,.0843,-.6752,1.8008,-.0053,-.3386,1.6992,.1277,-.4653,1.4153,.3786,-.293,1.7249,.3804,-.4907,1.7995,.4236,-.7287,1.5053,.376
                    ,-.6291,1.8468,.3904,-.7116,1.3075,.0564,-.7182,.8993,.2242,-.618,1.2774,.0359,-.6008,1.4659,.4077,-.7714,1.3808,.4001,-.7287,1.5053,.376,-.6708,1.4302,.0355,-.5766,1.3927,.0155,-.8046,1.5052,.2314,-.7881,1.3411,.1264,-.7483,1.4673,.0843,-.8298,.1295,.7751,-.7312,.4097,.7905,-.7622,.3605,.6326,-.8587,1.3847,.2725,-.8805,.9664,.3066
                    ,-.5765,.8956,.3061,-.4935,1.3022,.3954,-.6258,1.3436,.4249,-.8563,1.0476,.5442,-.9263,.0529,.9892,-1.0121,-.0221,.9947,-1.0187,.0485,.9857,-.9214,.1328,.9528,-.9385,.4548,.7782,-.8171,.4485,.84,-.9167,.3683,.556,-.917,.1637,.6501,-.8651,.352,.5448,-1.004,.4447,.7095,-.9878,.1907,.7003,-.958,.3943,.6005,-.9877,-.0204,.8092
                    ,-1.1033,-.0204,.3022,-1.2223,-.0275,.2975,-1.2067,.0437,.3398,-1.1033,-.0204,.3022,-1.1054,.0465,.3551,-1.1163,-.0278,.8551,-1.312,.0323,.5104,-1.1069,.0488,.8488,-.8549,-.0127,.7638,-.8305,.0535,.9605,-.8545,.0555,.769,-.9182,1.9906,.2037,-1.0721,2.0572,.1855,-1.1238,2.0238,.2377,-.9753,2.165,.5867,-.9812,2.3541,.6153,-.8427,1.993,.4113
                    ,-1.0519,2.0082,.3986,-.9579,2.0009,.537,-.8549,-.0127,.7638,-.8545,.0555,.769,-1.1163,-.0278,.8551,-1.1069,.0488,.8488,-.8299,-.017,.9751,-.9877,-.0204,.8092,-.9239,-.0177,1.0051,-1.067,.1413,.8294,-1.004,.4447,.7095,-.5212,1.2698,.1541,-.945,1.024,.4247,-.8587,1.3847,.2725,-.7622,.3605,.6326,-.7287,1.5053,.376,-.8587,1.3847,.2725
                    ,-.8046,1.5052,.2314,-.4932,1.3856,.1262,-.3386,1.6992,.1277,-.7376,1.8475,.1885,-.4932,1.3856,.1262,-.5766,1.3927,.0155,-.4194,2.6285,.0919,-.2861,2.7023,.3014,-.4194,2.6285,.0919,-.3962,2.7021,.0647,-.2751,4.0083,.1016,-.6999,3.7394,.3357,-.3505,3.9464,.1818,-.9929,2.2333,.2069,-1.0757,2.3849,.4918,-.9789,2.4131,.5945,-1.0757,2.3849,.4918
                    ,-1.0773,2.43,.4939,-.8685,2.4245,.3876,-.8193,2.5332,.4343,-.8685,2.4245,.3876,-.8847,3.0021,.5959,-.7809,2.9817,.7064,-1.0675,2.601,.5555,-.8079,2.9345,.3894,-.5971,3.1335,.3696,-.698,2.8007,.4554,-.6907,2.9106,.4955,-.6767,3.4467,.5597,-.6999,3.7394,.3357,-.3829,2.8703,.0761,-.8847,3.0021,.5959,-.8707,3.2723,.4896,-.3047,3.1,.3925
                    ,-.467,3.3556,.2131,-.362,3.396,.546,-.2751,4.0083,.1016,-.18,4.0596,.1661,-.2141,3.9981,.2657,-.1108,3.9958,-.1419,-.1588,4.0626,-.096,-.0518,3.9957,.292,.0298,4.0582,.225,.0585,3.9957,.2751,-1.0237,.1359,.8955,-1.1069,.0488,.8488,-1.067,.1413,.8294,-.917,.1637,.6501,-.8545,.0555,.769,-.8298,.1295,.7751,-.8437,.1344,.9324
                    ,-.8298,.1295,.7751,-.9878,.1907,.7003,-1.067,.1413,.8294,-.9641,.1705,.6472,-.917,.1637,.6501,-.9214,.1328,.9528,-.6767,3.4467,.5597,-.8707,3.2723,.4896,-.778,3.4239,.4097,-.6767,3.4467,.5597,-.4748,3.4039,.4879,-.7705,3.3971,.2902,-.6492,3.3915,.1577,-.778,3.4239,.4097,-.7705,3.3971,.2902,-1.0044,2.8786,.6036,-.8436,2.8344,.3059
                    ,-.8193,2.5332,.4343,-.698,2.8007,.4554,-.6837,2.7693,.6627,-.3878,3.0923,.1012,-.1151,3.0904,-.3084,.0903,3.0905,.3503,-.4009,3.0884,-.1413,-.4748,3.4039,.4879,-.467,3.3556,.2131,-.5455,3.298,.2998,-.5455,3.298,.2998,-.6492,3.3915,.1577,-.467,3.3556,.2131,-.5455,3.298,.2998,-.362,3.396,.546,-.9214,.1328,.9528,-.9878,.1907,.7003
                    ,-.2141,3.9981,.2657,-.0705,4.0582,.2235,-.0389,3.9958,-.1739,-.0808,4.0626,-.155,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.1163,-.0278,.8551,-1.3634,-.0392,.4854,-1.3634,-.0392,.4854,-1.1163,-.0278,.8551,-.9641,.1705,.6472,-.8437,.1344,.9324,-.8299,-.017,.9751,-.6691,1.0408,.6515,-.7483,1.4673,.0843,-.8003,.9249,.243,-.4653,1.4153,.3786
                    ,.0599,2.3721,.3471,-.2233,2.4165,.3993,.0527,2.6574,.3169,.0599,2.3721,.3471,.052,2.8608,.3018,-.1246,2.6722,.3347,-.3559,2.6704,-.1298,-.1452,3.7774,-.2956,-.1577,3.4331,-.3427,-.5948,3.7366,.5373,-.3126,3.7796,-.226,-.0809,3.9187,-.194,-.1108,3.9958,-.1419,-.362,3.396,.546,-.1461,3.754,.4969,-.3292,2.3324,-.1643,-.4533,2.4289,-.0953
                    ,-.0147,2.2575,.3584,-.2233,2.4165,.3993,-.4962,2.4741,.1223,-.3842,2.4749,.3573,-.0963,2.1483,.0388,-.2093,2.1762,-.2547,-.3842,2.4749,.3573,-.2233,2.4165,.3993,-.0963,2.1483,.0388,-.4533,2.4289,-.0953,-.4962,2.4741,.1223,-.3292,2.3324,-.1643,-.5129,.9558,.5193,-.5765,.8956,.3061,-1.004,.4447,.7095,-.945,1.024,.4247,.0599,2.3721,.3471
                    ,-.0963,2.1483,.0388,-.0147,2.2575,.3584,-.1023,2.1906,-.2868,-.2093,2.1762,-.2547,-.0963,2.1483,.0388,.0527,2.6574,.3169,-.0715,4.4726,.1633,-.1618,4.5545,.073,-.0679,4.5547,.1601,-.06,4.1965,.1445,-.1356,4.3338,.0241,-.0552,4.3341,.1263,-.1692,4.4724,.0755,-.1982,4.5512,-.0925,-.1411,4.1603,.0684,-.1767,4.2822,-.0736,-.192,4.4721,-.2453
                    ,-.1982,4.5512,-.0925,-.2087,4.4704,-.0917,-.1286,4.126,-.1565,-.1767,4.2822,-.0736,-.1888,4.1521,-.0479,-.0072,4.1087,-.3481,-.0445,4.2966,-.3451,-.1063,4.2792,-.3364,-.1233,4.4719,-.3586,.0052,4.5478,-.375,-.116,4.5482,-.3449,-.116,4.5482,-.3449,.0064,4.629,-.3394,-.0959,4.6289,-.3023,-.1982,4.5512,-.0925,-.1544,4.6289,-.2006,-.1667,4.6314,-.0929
                    ,-.1618,4.5545,.073,-.1667,4.6314,-.0929,-.1247,4.6344,.0538,-.0679,4.5547,.1601,-.05,4.6348,.1313,-.0445,4.2966,-.3451,-.1172,4.3735,-.3376,-.1063,4.2792,-.3364,-.1767,4.2822,-.0736,-.199,4.4437,-.2449,-.2083,4.4425,-.0913,-.1356,4.3338,.0241,-.2083,4.4425,-.0913,-.1656,4.4399,.0585,-.0552,4.3341,.1263,-.07,4.4402,.1478,-.0421,4.4436,-.3826
                    ,.0044,4.4714,-.3969,-.1233,4.4719,-.3586,-.199,4.4437,-.2449,-.2087,4.4704,-.0917,-.2083,4.4425,-.0913,-.1656,4.4399,.0585,-.2087,4.4704,-.0917,-.1692,4.4724,.0755,-.07,4.4402,.1478,-.1692,4.4724,.0755,-.0715,4.4726,.1633,.0192,4.7024,.0461,.0226,4.6353,.1459,-.0827,4.6982,-.1459,-.1667,4.6314,-.0929,-.0606,4.7017,-.0369,-.0444,4.6983,-.2363
                    ,.0095,4.6985,-.2459,.0192,4.7024,.0461,-.0606,4.7017,-.0369,-.0197,4.7021,.0338,.0234,4.4405,.1699,-.0715,4.4726,.1633,.0238,4.4729,.1839,-.0552,4.3341,.1263,.0234,4.4405,.1699,.0224,4.3344,.1425,.0238,4.555,.1825,.0224,4.3344,.1425,.0229,4.1967,.1575,.0238,4.4729,.1839,.0238,4.555,.1825,.0064,4.629,-.3394,-.1281,4.4436,-.3509
                    ,-.192,4.4721,-.2453,-.199,4.4437,-.2449,-.1739,4.2792,-.2597,-.1824,4.5484,-.2461,-.1824,4.5484,-.2461,-.092,4.1087,-.3278,-.1739,4.2792,-.2597,-.0495,4.066,-.2846,-.1311,4.0882,-.1389,-.0604,4.1127,.1814,.0229,4.1967,.1575,.0249,4.1154,.1938,-.0072,4.1087,-.3481,-.2046,4.1058,-.0179,-.2046,4.1058,-.0179,-.1567,4.1086,.1054,.0298,4.0582,.225
                    ,.0249,4.1154,.1938,-.2266,4.0712,.018,-.0196,4.0626,-.1818,-.1739,4.2792,-.2597,.0059,4.2792,-.3532,-.0314,4.292,-.3526,-.0445,4.2966,-.3451,.0061,4.292,-.3471,-.0151,4.2912,-.4024,-.0314,4.292,-.3526,-.027,4.3712,-.3657,-.0314,4.292,-.3526,.0043,4.376,-.4004,-.0263,4.376,-.3913,-.0445,4.2966,-.3451,-.0314,4.292,-.3526,.0043,4.376,-.4004
                    ,-.0302,4.4263,-.376,-.0282,4.3726,-.3473,-.0282,4.4046,-.3575,-.0345,4.4164,-.3453,-.0263,4.376,-.3913,-.1281,4.4436,-.3509,-.122,4.4169,-.3246,.0047,4.438,-.3898,-.8735,2.0365,.277,-.8709,2.0023,.3119,-.8332,2.0346,.3772,-.8709,2.0023,.3119,-.9112,2.0319,.4733,-.9134,2.0413,.1744,-.986,2.0455,.3252,-1.0519,2.0082,.3986,-.8619,2.1813,.2126
                    ,-.9508,2.2184,.2801,-.8633,2.305,.28,-.9541,2.1634,.1845,-.9099,2.1123,.1635,-.8931,2.1997,.1837,-.9296,2.1543,.2273,-.9226,2.3244,.231,-.9315,2.0871,.1889,-.8922,2.1011,.1801,-1.0873,2.1717,.4503,-1.0519,2.0082,.3986,-1.153,2.1954,.282,-.0797,3.7593,-.3533,-.0962,4.1351,-.359,-.1498,4.1292,-.2992,.0059,4.2792,-.3532,-.0451,4.279,-.3656
                    ,.0052,4.2616,-.3737,-.1063,4.2792,-.3364,-.0445,4.2966,-.3451,-.1063,4.2792,-.3364,-.1739,4.2506,-.2806,-.1067,4.2616,-.357,-.1739,4.2792,-.2597,-.1886,4.2569,-.1265,-.236,4.0097,-.1772,-.0987,4.2028,-.3408,.0404,4.4263,-.3784,.0518,4.4436,-.3858,-.0302,4.4263,-.376,-.0421,4.4436,-.3826,.2562,4.0084,-.0376,.1392,3.9958,-.1519,.3093,3.4535,-.3848
                    ,.7686,2.9344,-.3126,.861,2.8691,-.043,.7548,2.9007,-.1567,.9651,2.9579,-.0583,.8614,2.9966,-.3304,.8096,2.4476,-.5316,.8697,2.3899,-.2665,1.0256,2.4103,-.3119,.9324,2.4471,-.5688,.499,3.7466,-.3911,-.1452,3.7774,-.2956,.1157,3.7647,.3995,.1018,3.8658,.3733,.499,3.7466,-.3911,.0266,3.7796,-.3528,.1018,3.8658,.3733,.3317,3.9468,-.0554
                    ,-.0984,2.6615,-.2775,.0594,2.6908,-.3005,-.0177,2.267,-.3511,.3403,2.7256,-.056,.2041,2.7314,-.214,.2268,2.6462,.2677,.3639,2.6619,.1891,.436,1.4253,-.2483,.5719,1.4751,-.2769,.6695,1.534,-.3539,.4406,1.5725,-.6205,.346,1.5356,-.6012,.6616,1.5891,-.5074,.5354,1.5978,-.6086,.8385,.1316,-.3427,.9089,-.0179,-1.0536,.8043,-.0182,-.9962
                    ,.8262,-.0182,-.2987,.7919,-.0182,-.4794,.7257,2.0152,-.4594,.7978,.0505,-.4818,.7919,-.0182,-.4794,1.0681,.0563,-.4995,1.07,-.0174,-.5029,.9275,-.0179,-.4911,.7919,-.0182,-.4794,.981,.4538,-.5178,1.0547,.1411,-.4808,.3563,1.3686,-.5041,.448,.9691,-.516,.7168,1.4669,-.5425,.8363,1.0841,-.5653,.7268,.378,-.4845,.8103,.1283,-.4961
                    ,.6695,1.534,-.3539,.6616,1.5891,-.5074,.7168,1.4669,-.5425,.2287,1.7643,-.2895,.3296,1.4844,-.4732,.6164,1.9185,-.3939,.6616,1.5891,-.5074,.3296,1.4844,-.4732,.3563,1.3686,-.5041,.3716,2.6531,-.0528,.4377,2.507,-.1163,.3639,2.6619,.1891,.3403,2.7256,-.056,.3716,2.6531,-.0528,.2562,4.0084,-.0376,.3317,3.9468,-.0554,.6877,3.7441,-.1777
                    ,1.0187,2.391,-.4607,1.0151,2.1758,-.4894,1.0256,2.4103,-.3119,1.0237,2.4328,-.4533,1.0187,2.391,-.4607,.8407,2.0704,-.4919,.8068,2.5296,-.3129,.8072,2.4256,-.3875,.8072,2.4256,-.3875,.9671,2.9913,-.21,1.0569,2.8703,-.2938,1.0642,2.5977,-.3883,1.0237,2.4328,-.4533,.6091,3.1339,-.1653,.7548,2.9007,-.1567,.7686,2.9344,-.3126,.7548,2.9007,-.1567
                    ,.7305,2.7934,-.1967,.6877,3.7441,-.1777,.7832,3.4274,-.2148,.3251,2.8772,-.0768,.3403,2.7256,-.056,.8987,3.2723,-.2392,.9671,2.9913,-.21,.5621,3.3657,.165,.4261,3.3588,-.138,.2562,4.0084,-.0376,.2829,3.9973,.1237,.0585,3.9957,.2751,1.0176,.135,-.4007,1.0547,.1411,-.4808,1.0681,.0563,-.4995,.851,.191,-.6049,.8103,.1283,-.4961
                    ,.7978,.0505,-.4818,.9418,.2105,-.5866,.8898,.2023,-.6256,.851,.191,-.6049,.9216,.1328,-.33,1.0176,.135,-.4007,.7832,3.4274,-.2148,.8987,3.2723,-.2392,.8067,3.4249,-.034,.6979,3.4153,-.3017,.5204,3.4151,-.3172,.7832,3.4274,-.2148,.6979,3.4153,-.3017,1.0569,2.8703,-.2938,1.0642,2.5977,-.3883,.7305,2.7934,-.1967,.8068,2.5296,-.3129
                    ,.3114,3.0954,-.1306,.3251,2.8772,-.0768,.6066,3.3808,.0416,.4261,3.3588,-.138,.5325,3.302,-.1562,.5325,3.302,-.1562,.6091,3.1339,-.1653,.4261,3.3588,-.138,.9216,.1328,-.33,.8898,.2023,-.6256,.1596,3.9957,.2307,.0381,3.9958,-.1703,1.0293,-.0176,-.3205,1.07,-.0174,-.5029,.9275,-.0179,-.4911,1.1197,-.0166,-.9497,.9089,-.0179,-1.0536
                    ,.8385,.1316,-.3427,.8262,-.0182,-.2987,.5354,1.5978,-.6086,.4406,1.5725,-.6205,.5719,1.4751,-.2769,.436,1.4253,-.2483,.0527,2.6574,.3169,.0594,2.6908,-.3005,.0266,3.7796,-.3528,.3772,3.746,.302,-.0389,3.9958,-.1739,.5621,3.3657,.165,.1394,2.4314,-.3022,.337,2.349,.2314,.4377,2.507,-.1163,.6164,1.9185,-.3939,.0299,2.1757,-.0614
                    ,.2287,1.7643,-.2895,.4604,2.4211,.1296,.1263,2.2381,.302,.2874,2.5305,-.2824,.448,.9691,-.516,.7268,.378,-.4845,.8363,1.0841,-.5653,.981,.4538,-.5178,.0299,2.1757,-.0614,-.1023,2.1906,-.2868,.0299,2.1757,-.0614,-.0177,2.267,-.3511,.1138,4.5547,.154,.0988,4.3341,.1212,.2269,4.5512,-.1067,.2009,4.5484,-.2589,.202,4.2822,-.0899
                    ,.1858,4.2792,-.2741,.1179,4.2792,-.3442,.1281,4.5482,-.3531,.2269,4.5512,-.1067,.1955,4.6314,-.105,.2016,4.5545,.0609,.0568,4.2966,-.3485,.202,4.2822,-.0899,.2371,4.4425,-.1061,.1723,4.3338,.0138,.115,4.4402,.1416,.1345,4.4719,-.3672,.1345,4.4719,-.3672,.0044,4.4714,-.3969,.2375,4.4704,-.1066,.2106,4.4721,-.2588,.2176,4.4437,-.2588
                    ,.2045,4.44,.0461,.2092,4.4724,.0628,.2375,4.4704,-.1066,.1176,4.4726,.157,.2092,4.4724,.0628,.0226,4.6353,.1459,.1955,4.6314,-.105,.106,4.6998,-.1013,.0639,4.6983,-.2399,.1082,4.6982,-.1522,.106,4.6998,-.1013,.0933,4.7017,-.0421,.0572,4.7021,.0313,.0192,4.7024,.0461,.0933,4.7017,-.0421,.1082,4.6982,-.1522,.106,4.6998,-.1013
                    ,.0238,4.4729,.1839,.1176,4.4726,.157,.0234,4.4405,.1699,.115,4.4402,.1416,.0226,4.6353,.1459,.0224,4.3344,.1425,.0988,4.3341,.1212,.0238,4.555,.1825,.1138,4.5547,.154,.2106,4.4721,-.2588,.1345,4.4719,-.3672,.1397,4.4436,-.3599,.1354,4.4169,-.3332,.2009,4.5484,-.2589,.1281,4.5482,-.3531,.2009,4.1521,-.078,.2078,4.1058,-.0628
                    ,.2078,4.1058,-.0628,.2227,4.0712,-.0479,.0059,4.2792,-.3532,.0568,4.2966,-.3485,.0061,4.292,-.3471,.0431,4.292,-.355,.0355,4.376,-.3933,.0431,4.292,-.355,.0568,4.2966,-.3485,.0404,4.4263,-.3784,.0355,4.376,-.3933,.1397,4.4436,-.3599,.7257,2.0152,-.4594,.7085,2.0618,-.4603,.8407,2.0704,-.4919,.929,2.0126,-.4944,1.0151,2.1758,-.4894
                    ,.929,2.0126,-.4944,.0059,4.2792,-.3532,.1179,4.2792,-.3442,.1179,4.2792,-.3442,.1858,4.2792,-.2741,-.1461,3.754,.4969,.1157,3.7647,.3995,-.8847,3.0021,.5959,-.1108,3.9958,-.1419,-.222,3.9958,-.0632,.0903,3.0905,.3503,.052,2.8608,.3018,-.1151,3.0904,-.3084,-.1577,3.4331,-.3427,-.3559,2.6704,-.1298,-.778,3.4239,.4097,-.8079,2.9345,.3894
                    ,-.69,2.8885,.6529,-.6907,2.9106,.4955,-.69,2.8885,.6529,-.8896,2.9972,.4357,-.9759,2.4452,.2924,-.8685,2.4245,.3876,-.837,2.3963,.5203,-.837,2.3963,.5203,-.9789,2.4131,.5945,-1.0986,2.4451,.3546,-.6999,3.7394,.3357,-.696,3.7377,.0591,-.3126,3.7796,-.226,-.1452,3.7774,-.2956,.1157,3.7647,.3995,-.696,3.7377,.0591,-.0518,3.9957,.292
                    ,.0585,3.9957,.2751,-.3505,3.9464,.1818,-.2751,4.0083,.1016,-.0969,2.3477,-.2532,-.0984,2.6615,-.2775,-.2587,2.6531,-.2474,-.0984,2.6615,-.2775,-.1246,2.6722,.3347,-.2093,2.1762,-.2547,-.0969,2.3477,-.2532,-.3962,2.7021,.0647,-.6708,1.4302,.0355,-.4962,2.4741,.1223,-.8046,1.5052,.2314,-.4932,1.3856,.1262,-.4653,1.4153,.3786,-.6008,1.4659,.4077
                    ,-.8437,.1344,.9324,-.945,1.024,.4247,-.9239,-.0177,1.0051,-1.0237,.1359,.8955,-.9641,.1705,.6472,-1.067,.1413,.8294,-.8549,-.0127,.7638,-1.2223,-.0275,.2975,-1.1033,-.0204,.3022,-.8299,-.017,.9751,-.8709,2.0023,.3119,-1.1033,-.0204,.3022,-.8549,-.0127,.7638,-1.1163,-.0278,.8551,-.8549,-.0127,.7638,-.9877,-.0204,.8092,-1.0237,.1359,.8955
                    ,-.5765,.8956,.3061,-.5212,1.2698,.1541,-.8298,.1295,.7751,-.7622,.3605,.6326,-.7287,1.5053,.376,-.8587,1.3847,.2725,-.4932,1.3856,.1262,-.8046,1.5052,.2314,-.7376,1.8475,.1885,-.5212,1.2698,.1541,-.4932,1.3856,.1262,-.4962,2.4741,.1223,-.4194,2.6285,.0919,-.2861,2.7023,.3014,-.4194,2.6285,.0919,-.222,3.9958,-.0632,-.2751,4.0083,.1016
                    ,-.5948,3.7366,.5373,-.6999,3.7394,.3357,-1.0873,2.1717,.4503,-1.0757,2.3849,.4918,-.9789,2.4131,.5945,-1.0757,2.3849,.4918,-.986,2.0455,.3252,-.9759,2.4452,.2924,-.8685,2.4245,.3876,-.8685,2.4245,.3876,-1.0044,2.8786,.6036,-.8847,3.0021,.5959,-1.0773,2.43,.4939,-1.0675,2.601,.5555,-.8079,2.9345,.3894,-.6907,2.9106,.4955,-.5971,3.1335,.3696
                    ,-.698,2.8007,.4554,-.778,3.4239,.4097,-.6999,3.7394,.3357,-.3962,2.7021,.0647,-.3829,2.8703,.0761,-.8847,3.0021,.5959,-.3878,3.0923,.1012,-.467,3.3556,.2131,-.2751,4.0083,.1016,-.2266,4.0712,.018,.0298,4.0582,.225,-1.1069,.0488,.8488,-.917,.1637,.6501,-.8545,.0555,.769,-.9878,.1907,.7003,-.9214,.1328,.9528,-.6767,3.4467,.5597
                    ,-.8707,3.2723,.4896,-.6767,3.4467,.5597,-.7705,3.3971,.2902,-.778,3.4239,.4097,-1.0675,2.601,.5555,-1.0044,2.8786,.6036,-.8193,2.5332,.4343,-.3829,2.8703,.0761,-.3878,3.0923,.1012,-.1021,2.8566,-.2878,-.1151,3.0904,-.3084,.1153,3.3512,.4,.0903,3.0905,.3503,-.4748,3.4039,.4879,-.5455,3.298,.2998,-.467,3.3556,.2131,-.544,3.4427,-.0618
                    ,-.5971,3.1335,.3696,-.5455,3.298,.2998,-.467,3.3556,.2131,-.9214,.1328,.9528,-.2141,3.9981,.2657,-.0389,3.9958,-.1739,-.0196,4.0626,-.1818,-1.0121,-.0221,.9947,-.9877,-.0204,.8092,-1.2223,-.0275,.2975,-1.3634,-.0392,.4854,-.9641,.1705,.6472,-.8437,.1344,.9324,-.8299,-.017,.9751,-.9239,-.0177,1.0051,-.7483,1.4673,.0843,-.4653,1.4153,.3786
                    ,-.6008,1.4659,.4077,.0599,2.3721,.3471,-.0147,2.2575,.3584,-.6708,1.4302,.0355,.052,2.8608,.3018,.0527,2.6574,.3169,-.1246,2.6722,.3347,-.3559,2.6704,-.1298,-.2587,2.6531,-.2474,-.0518,3.9957,.292,-.1452,3.7774,-.2956,-.696,3.7377,.0591,-.3126,3.7796,-.226,-.0809,3.9187,-.194,-.0389,3.9958,-.1739,-.1108,3.9958,-.1419,-.362,3.396,.546
                    ,-.5948,3.7366,.5373,-.1461,3.754,.4969,-.3292,2.3324,-.1643,-.7376,1.8475,.1885,-.3386,1.6992,.1277,-.3842,2.4749,.3573,-.0963,2.1483,.0388,-.4533,2.4289,-.0953,-.7622,.3605,.6326,-.5765,.8956,.3061,-1.004,.4447,.7095,-.945,1.024,.4247,.0599,2.3721,.3471,-.1023,2.1906,-.2868,-.0963,2.1483,.0388,-.1023,2.1906,-.2868,-.0969,2.3477,-.2532
                    ,-.2093,2.1762,-.2547,-.2087,4.4704,-.0917,-.1888,4.1521,-.0479,-.1824,4.5484,-.2461,-.1982,4.5512,-.0925,-.1739,4.2792,-.2597,-.1767,4.2822,-.0736,-.0072,4.1087,-.3481,-.0072,4.1087,-.3481,.0059,4.2792,-.3532,.0044,4.4714,-.3969,.0052,4.5478,-.375,-.116,4.5482,-.3449,.0052,4.5478,-.375,.0064,4.629,-.3394,-.1982,4.5512,-.0925,-.1618,4.5545,.073
                    ,-.1982,4.5512,-.0925,-.1667,4.6314,-.0929,-.0679,4.5547,.1601,-.1618,4.5545,.073,-.0445,4.2966,-.3451,-.1767,4.2822,-.0736,-.1356,4.3338,.0241,-.1767,4.2822,-.0736,-.2083,4.4425,-.0913,-.0552,4.3341,.1263,-.1356,4.3338,.0241,-.1233,4.4719,-.3586,.0044,4.4435,-.3975,.0044,4.4714,-.3969,-.199,4.4437,-.2449,-.192,4.4721,-.2453,-.2087,4.4704,-.0917
                    ,-.1656,4.4399,.0585,-.2083,4.4425,-.0913,-.2087,4.4704,-.0917,-.07,4.4402,.1478,-.1656,4.4399,.0585,-.1692,4.4724,.0755,.0192,4.7024,.0461,-.0772,4.6998,-.0952,-.1667,4.6314,-.0929,-.0772,4.6998,-.0952,-.0772,4.6998,-.0952,-.0827,4.6982,-.1459,.0095,4.6985,-.2459,-.0444,4.6983,-.2363,.0095,4.6985,-.2459,-.0827,4.6982,-.1459,.0192,4.7024,.0461
                    ,-.0197,4.7021,.0338,-.0606,4.7017,-.0369,-.0606,4.7017,-.0369,-.0772,4.6998,-.0952,.0095,4.6985,-.2459,.0234,4.4405,.1699,-.07,4.4402,.1478,-.0715,4.4726,.1633,-.0552,4.3341,.1263,.0234,4.4405,.1699,.0238,4.555,.1825,-.0679,4.5547,.1601,.0224,4.3344,.1425,.0238,4.4729,.1839,.0064,4.629,-.3394,.0095,4.6985,-.2459,-.1233,4.4719,-.3586
                    ,-.192,4.4721,-.2453,-.1063,4.2792,-.3364,-.1281,4.4436,-.3509,-.116,4.5482,-.3449,.0229,4.1967,.1575,-.0121,4.066,-.3034,-.0072,4.1087,-.3481,-.2046,4.1058,-.0179,-.1888,4.1521,-.0479,.0298,4.0582,.225,-.2266,4.0712,.018,-.2046,4.1058,-.0179,-.0196,4.0626,-.1818,-.0121,4.066,-.3034,.0059,4.2792,-.3532,.0061,4.292,-.3471,.0061,4.292,-.3471
                    ,.0038,4.2912,-.4162,-.0263,4.376,-.3913,.0038,4.2912,-.4162,.0043,4.376,-.4004,-.0445,4.2966,-.3451,.0043,4.376,-.4004,.0047,4.438,-.3898,-.0263,4.376,-.3913,-.0302,4.4263,-.376,-.0421,4.4436,-.3826,-.1281,4.4436,-.3509,.0047,4.438,-.3898,.0044,4.4435,-.3975,-.8735,2.0365,.277,-.8709,2.0023,.3119,-.986,2.0455,.3252,-.8735,2.0365,.277
                    ,-1.0519,2.0082,.3986,-.9456,2.0924,.1642,-1.0873,2.1717,.4503,-1.0519,2.0082,.3986,.0059,4.2792,-.3532,-.0445,4.2966,-.3451,-.1063,4.2792,-.3364,-.1063,4.2792,-.3364,-.1739,4.2792,-.2597,-.1739,4.2792,-.2597,-.1767,4.2822,-.0736,.0404,4.4263,-.3784,-.0302,4.4263,-.376
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
                ,192,129,146,324,187,143,287,157,130,192,154,147,187,151,290,141,145,325,295,294,326,327,101,108,297,328,329,330,331,332,333,334,331,335,336,334], 199);
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
                ,109,296,1135,125,293,1136,1137,198,315,1138,1139,1140,198,125,319,1141,293,1142,296,119,315,195,109,147,151,139,142,130,154,1143,1144,192,146,1145,1146,143,142,287,130,129,192,147,146,187,290,139,141,1147,1148,295
                ,326,1149,1150,329,1151,330,332,1152,333,331,330,335,334,333,337,1153,1154,340,1155,1156,343,418,347,346,1157,345,347,348,1158,349,351,395,352,1159,1160,355,1161,361,358,360,387,361,363,438,1162,1163,1164,367,1165,373
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
                    .3174,.5112,-.7987,.8744,.3529,-.333,.6052,-.0118,-.796,.4459,-.1481,.8827,.3424,.2324,.9103,.4741,.2952,.8295,.3767,-.8443,-.381,.4921,-.249,-.8341,.8372,-.2461,-.4884,.8348,.3951,-.3833,.3052,.3591,-.882,.8672,.4483,-.2168,-.0379,.5892,-.8071,.3174,.5112,-.7987,.1295,.1804,-.975,.8313,.414,.3707,.291,-.6913,.6613
                    ,.7616,-.4113,.5007,.4056,-.0389,.9132,.3122,-.2069,.9272,.5032,-.1426,.8523,-.1187,-.0162,-.9928,-.2408,-.114,-.9638,-.0353,-.1366,-.99,.3304,.4378,-.8361,-.1575,-.4504,-.8788,.3995,.2818,-.8723,.8809,-.0495,-.4707,.6233,.1564,-.7661,.9073,.1802,-.3799,.7199,.6106,-.3298,.7909,.4533,-.411,-.2575,-.1482,.9548,-.9551,-.0974,.2799
                    ,-.9074,-.249,.3385,-.5386,-.2671,-.799,.3332,.2535,-.9081,-.2019,-.2338,.9511,.6893,.1507,.7086,-.2575,-.1482,.9548,-.9074,-.249,.3385,-.8586,-.4804,.1786,.3144,.2153,-.9245,.9284,-.0603,-.3666,.9411,.0189,-.3375,.8039,.0862,.5884,-.2758,-.2401,.9307,.3052,.3591,-.882,.8705,.4167,-.2618,.8672,.4483,-.2168,-.8183,.0747,-.5699
                    ,.2279,.533,-.8148,.3052,.3591,-.882,-.4858,-.3104,.8171,-.8467,.1024,.5221,-.9218,.2763,.2718,-.7912,.0883,-.6052,.3814,.3544,-.8538,-.946,-.2521,.2039,-.4858,-.3104,.8171,-.9218,.2763,.2718,-.2383,-.56,.7935,.865,-.0912,.4934,-.4858,-.3104,.8171,-.4915,-.1347,.8604,-.498,.8075,.316,-.8709,-.264,.4144,.865,-.0912,.4934
                    ,-.237,-.2433,.9405,.3814,.3544,-.8538,.9276,.0304,-.3723,.9284,-.0603,-.3666,-.6072,.5316,-.5904,.2808,.4018,-.8716,.3814,.3544,-.8538,.916,-.1776,-.3596,-.5556,-.0262,-.831,.5392,-.0204,-.8419,.4982,.8385,-.2208,.3304,.4378,-.8361,.7199,.6106,-.3298,-.2673,.5404,-.7978,-.15,.4147,-.8975,.3424,.2324,.9103,.454,.543,.7064
                    ,.4741,.2952,.8295,.2126,-.2644,-.9407,-.15,.4147,-.8975,.2165,.6088,.7632,.4651,.5374,.7035,.4982,.8385,-.2208,.595,.73,.3362,.6898,.6637,-.2893,-.1548,-.0965,-.9832,.0093,.0273,-.9996,.1632,-.0877,-.9827,-.179,-.081,-.9805,.1632,-.0877,-.9827,.1507,-.1357,-.9792,.8383,.1488,.5245,.3772,.0774,.9229,-.3616,.1587,-.9187
                    ,-.1383,.2922,-.9463,.9073,.1802,-.3799,.5083,.3618,-.7815,.8719,.4256,-.2421,.3772,.0774,.9229,.8189,.2378,.5223,.449,.0327,.8929,-.1172,.2656,-.9569,-.7186,-.0409,-.6941,-.1164,.2568,-.9594,.3624,.4581,-.8116,.8607,.4369,-.2613,.8907,.1248,.4371,.5426,-.1688,.8228,-.3612,-.5053,.7837,-.9652,-.2611,.0109,-.9443,-.3272,.035
                    ,.8797,.3207,-.3511,.3521,.3247,-.8778,.8441,.3545,-.4023,-.8898,-.4492,.0802,-.3612,-.5053,.7837,-.9443,-.3272,.035,.5262,-.3293,.784,.9084,.0264,.4173,.5079,-.2839,.8133,-.0335,.1613,-.9863,-.5389,-.1993,-.8184,.0161,-.0254,-.9995,.5079,-.2839,.8133,.8493,.1532,.5052,.4373,.0187,.8991,-.1164,.2568,-.9594,-.6782,-.0697,-.7316
                    ,.8441,.3545,-.4023,.3986,.2501,-.8823,.8484,.3573,-.3904,-.5651,-.2756,.7776,-.9933,-.041,-.108,-.9198,-.3899,-.0431,.3861,.0988,-.9171,.8742,.2418,-.421,-.5171,-.1851,.8356,-.9409,-.2973,-.1622,.8864,.27,.3759,.3512,.1202,.9285,.0652,.3038,.9505,.6011,-.5754,.5546,.0698,-.5567,.8278,.4126,.0314,.9104,.8052,.2849,.52
                    ,.2069,.2649,.9418,.0736,-.026,-.9969,-.8468,.1682,-.5046,-.0393,.6567,-.7531,.9309,.191,-.3112,.6726,.4411,-.5942,.9778,.1916,-.085,.003,-1,-.0003,-.7521,-.405,-.5199,-.7572,-.6518,.0425,-.0287,.7392,-.6728,-.7521,-.405,-.5199,-.0179,-.3948,-.9186,.6378,.7118,-.2941,.7288,-.678,.0956,.975,.2127,.0639,-.7201,.2369,.6521
                    ,-.7572,-.6518,.0425,-.9879,.1508,.0357,-.6067,.1864,-.7728,-.6382,-.663,-.3914,.24,-.5992,-.7637,.8221,.13,.5542,.49,-.8118,-.3175,-.4188,-.7479,.515,.495,-.685,.5346,-.6836,.6468,-.3381,-.7572,-.6518,.0425,-.7521,-.405,-.5199,.7157,.2797,.6399,.7288,-.678,.0956,.003,-1,-.0003,-.5676,-.5456,.6165,.0698,-.5567,.8278
                    ,.8776,.2037,.434,.9778,.1916,-.085,-.9652,-.2611,.0109,.8742,.2418,-.421,-.9198,-.3899,-.0431,-.5814,-.2759,-.7654,.9084,.0264,.4173,.8484,.3573,-.3904,-.7276,-.1116,-.6769,-.9443,-.3272,.035,.8797,.3207,-.3511,.9166,-.0152,.3994,-.9443,-.3272,.035,-.7186,-.0409,-.6941,.8719,.4256,-.2421,.8383,.1488,.5245,.8719,.4256,-.2421
                    ,.1537,.7875,-.5968,.6898,.6637,-.2893,.3174,.5112,-.7987,.5264,.7783,.3422,.7199,.6106,-.3298,.8313,.414,.3707,.1695,-.8105,.5606,.9276,.0304,-.3723,.7345,-.1856,.6528,.865,-.0912,.4934,.9276,.0304,-.3723,-.9218,.2763,.2718,-.6072,.5316,-.5904,-.9218,.2763,.2718,-.7412,.5614,-.3681,.8672,.4483,-.2168,.6893,.1507,.7086
                    ,.9411,.0189,-.3375,.8361,-.3261,.4411,-.8586,-.4804,.1786,-.8183,.0747,-.5699,-.9551,-.0974,.2799,-.8136,.2665,-.5167,.7199,.6106,-.3298,.8052,.2789,.5232,.9103,-.0647,.4088,.9073,.1802,-.3799,.7915,.3177,.522,.8672,.4483,-.2168,.9209,-.2833,.2676,.3767,-.8443,-.381,.8372,-.2461,-.4884,.6898,.6637,-.2893,.6883,.654,.3137
                    ,.8744,.3529,-.333,.2945,-.6241,-.7237,.1295,.1804,-.975,.2165,.6088,.7632,.4303,.5708,.6993,.4651,.5374,.7035,.8052,.2849,.52,.975,.2127,.0639,-.8468,.1682,-.5046,-.9879,.1508,.0357,-.7016,.0984,.7057,-.9933,-.041,-.108,.6726,.4411,-.5942,.9778,.1916,-.085,-.0393,.6567,-.7531,.2069,.2649,.9418,.7909,.4533,-.411
                    ,.8052,.2789,.5232,.8052,.2789,.5232,.291,-.6913,.6613,.3995,.2818,-.8723,.7909,.4533,-.411,.8705,.4167,-.2618,-.946,-.2521,.2039,.8809,-.0495,-.4707,.3648,-.1091,.9246,.6697,-.1224,-.7325,.291,-.6913,.6613,-.7672,-.6354,.0869,.3767,-.8443,-.381,.2126,-.2644,-.9407,-.7672,-.6354,.0869,-.1575,-.4504,-.8788,.3767,-.8443,-.381
                    ,-.7672,-.6354,.0869,.7616,-.4113,.5007,-.0393,.6567,-.7531,.6726,.4411,-.5942,.4651,.5374,.7035,.595,.73,.3362,.1295,.1804,-.975,-.0689,-.7794,-.6227,-.2009,.1789,-.9631,.6011,-.5754,.5546,.003,-1,-.0003,.0698,-.5567,.8278,.7995,-.3569,-.4831,.7995,-.3569,-.4831,.7288,-.678,.0956,.4987,.0878,-.8623,-.7016,.0984,.7057
                    ,-.5676,-.5456,.6165,-.6984,-.2275,.6786,.3521,.3247,-.8778,-.3612,-.5053,.7837,-.3325,-.618,.7123,-.2321,-.5071,.83,.2688,-.2194,.9378,.3351,.3727,-.8653,.1978,.095,.9756,.1978,.095,.9756,.2007,-.0991,.9746,.6233,.1564,-.7661,-.3251,.4002,-.8568,-.337,.0152,-.9413,.4741,.2952,.8295,.8313,.414,.3707,.3304,.4378,-.8361
                    ,-.2009,.1789,-.9631,.7616,-.4113,.5007,.8313,.414,.3707,-.1383,.2922,-.9463,.3624,.4581,-.8116,.5426,-.1688,.8228,-.2321,-.5071,.83,.8607,.4369,-.2613,.8907,.1248,.4371,-.5264,.0382,-.8493,-.8898,-.4492,.0802,.8907,.1248,.4371,.5426,-.1688,.8228,-.7626,-.6055,.2278,.3624,.4581,-.8116,.8607,.4369,-.2613,-.1383,.2922,-.9463
                    ,-.9409,-.2973,-.1622,.9309,.191,-.3112,-.7626,-.6055,.2278,-.0513,-.6678,-.7425,-.5264,.0382,-.8493,.3772,.0774,.9229,.5033,-.1719,.8468,.8632,.2648,.4299,.876,-.125,.4658,.5498,.2376,.8008,.9037,-.1399,.4047,.9066,.2433,.3447,.9694,.2452,-.0136,.9982,.0576,.0154,.9938,-.1081,.0249,.9589,-.0155,-.2832,.9694,.2452,-.0136
                    ,.9028,.1685,-.3956,.9982,.0576,.0154,.9938,-.1081,.0249,.8314,-.418,-.3662,.9589,-.0155,-.2832,.1869,.1778,-.9661,-.0263,.3858,-.9221,.499,-.5465,-.6726,.5329,.0542,-.8444,-.0316,.3232,-.9458,-.033,.1418,-.9893,.5033,.3225,-.8017,-.0264,.6099,-.792,-.0316,.3232,-.9458,.9694,.2452,-.0136,.7515,.5971,-.2807,.8717,.2795,-.4024
                    ,.8632,.2648,.4299,.8117,.5841,-.0039,.9694,.2452,-.0136,.5208,.2231,.824,.6937,.6305,.3482,.8632,.2648,.4299,.4139,.0404,-.9094,.1869,.1778,-.9661,.4828,.2105,-.85,.9938,-.1081,.0249,.9217,.012,-.3877,.9226,-.0749,-.3783,.9037,-.1399,.4047,.9905,-.127,.0526,.9938,-.1081,.0249,.5667,-.0829,.8197,.8643,-.3195,.3884
                    ,.9037,-.1399,.4047,-.033,.1418,-.9893,-.0303,-.4186,-.9077,.2765,-.3931,-.8769,.9982,.0576,.0154,.9217,.012,-.3877,.9905,-.127,.0526,.8643,-.3195,.3884,.9982,.0576,.0154,.9905,-.127,.0526,.51,-.3291,.7947,.876,-.125,.4658,.8643,-.3195,.3884,.4276,.6118,.6654,.011,.944,.3296,.2397,.9384,.2489,.8117,.5841,-.0039
                    ,.3756,.9214,-.0997,.3219,.9432,.082,.349,.9369,.0179,.2362,.9158,-.3247,.4607,.6299,-.6252,.3219,.9432,.082,.011,.944,.3296,-.0115,.9389,-.3439,.0315,-.3295,.9436,.5033,-.1719,.8468,.0315,-.3295,.9436,.0333,-.0644,.9973,.0326,.2064,.9779,.0333,-.0644,.9973,.0391,.2588,.9651,.0328,-.1813,.9828,.5208,.2231,.824
                    ,-.0115,.9389,-.3439,.9028,.1685,-.3956,.5315,-.3936,-.75,.9217,.012,-.3877,.5033,.3225,-.8017,.9226,-.0749,-.3783,.2619,-.9233,-.2808,.6308,-.515,-.5803,.4548,.458,.7638,.0531,.4467,.8931,-.0455,-.4237,-.9047,-.0477,-.8866,-.46,.9589,-.0155,-.2832,.9324,.1286,-.3376,.9324,.1286,-.3376,.8157,.4957,.298,.0995,.6089,.7869
                    ,.8744,.3529,-.333,.9226,-.0749,-.3783,.4828,.2105,-.85,-.0263,.3858,-.9221,.5275,-.7505,-.398,-.0289,-.498,-.8666,-.0289,-.498,-.8666,.5766,-.6245,-.5267,-.0282,-.5335,-.8453,.9844,-.0103,-.1753,.5275,-.7505,-.398,-.0329,.1653,-.9857,.1869,.1778,-.9661,.7049,.0442,-.7078,.6371,-.3248,-.699,.7373,.06,-.6728,.9841,-.0926,-.1513
                    ,.5593,-.3645,-.7444,.7373,.06,-.6728,.5315,-.3936,-.75,.2765,-.3931,-.8769,-.0297,-.4534,-.8908,-.8002,.5161,.3055,-.6127,-.7838,-.1008,-.6127,-.7838,-.1008,-.6871,.3684,.6262,-.3074,.2501,.9181,-.498,.8075,.316,-.7725,.5835,-.2503,-.8002,.5161,.3055,.49,-.8118,-.3175,-.527,-.2354,.8166,-.7183,-.0931,.6895,-.8984,.2539,-.3582
                    ,-.4213,-.3749,-.8258,.1448,-.1943,-.9702,-.8361,-.4226,-.3497,.0764,-.7018,-.7083,.8497,-.3957,.3484,-.9486,.0677,-.3092,.585,-.7848,.2044,-.3981,-.6936,.6003,.916,-.1776,-.3596,.49,-.8118,-.3175,.2824,-.0021,-.9593,-.033,.1437,-.9891,-.0334,.0208,-.9992,.7893,.0352,-.613,.3362,.1156,-.9347,-.0263,.3858,-.9221,.0306,.3416,-.9393
                    ,.1869,.1778,-.9661,.4828,.2105,-.85,.1869,.1778,-.9661,.4828,.2105,-.85,.8653,.0965,-.4919,.9226,-.0749,-.3783,.9226,-.0749,-.3783,.9305,.3219,-.1744,.9938,-.1081,.0249,.8067,.066,-.5872,.3234,-.0569,-.9445,-.0335,-.0245,-.9991,.4172,.1838,-.89,-.6341,.5082,-.5827,-.8405,.5334,-.0945,-.6279,.7768,.0482,.2614,-.157,.9524
                    ,.3424,.2324,.9103,.3648,-.1091,.9246,-.9575,-.2244,.1811,-.7991,-.2589,-.5426,-.5372,-.8434,.0062,-.9052,.3662,.2156,-.8432,.2943,-.4498,-.865,.1411,-.4816,-.4083,.5741,-.7096,-.6341,.5082,-.5827,-.5195,.7711,-.368,.2518,-.5908,.7665,-.3955,.4964,.7727,-.1758,-.3717,.9115,.1287,-.2369,.963,.2007,-.0991,.9746,.0537,-.1562,.9863
                    ,-.5267,-.1201,-.8415,-.337,.0152,-.9413,-.5591,.0122,-.829,-.8181,.4024,-.4107,-.4483,-.5471,-.7069,-.7991,-.2589,-.5426,-.9782,.1978,.0625,-.9188,-.0591,-.3903,-.992,-.0346,.1211,-.786,.5912,.1805,-.891,.1813,-.4161,.8929,-.0938,-.4403,.8451,-.0776,.5288,.9066,-.245,-.3436,-.1148,-.4071,-.9061,.7934,-.1141,.5979,-.028,.2328,.9721
                    ,-.2596,.4053,.8766,.9066,-.245,-.3436,.784,-.4951,-.3744,-.9131,-.0591,.4035,-.869,.1664,-.4659,-.9159,.0172,.401,-.1874,.1357,.9728,-.028,.2328,.9721,-.8242,.4197,.3801,-.8432,.2943,-.4498,-.7935,.4529,.4063,-.7352,.4907,-.4676,.2058,-.0033,-.9786,-.8432,.2943,-.4498,.9609,.0559,-.2711,.9131,-.2887,.2879,.8638,.1982,-.4631
                    ,-.8708,.382,-.3093,.1491,.0181,-.9886,.8435,-.2588,-.4706,.9131,-.2887,.2879,.728,-.5101,.4581,-.2848,-.1174,.9514,-.302,-.2812,.9109,.5764,.77,-.2734,.9668,-.2475,.0628,.8524,-.3435,-.3942,.8512,-.1653,.4981,-.2848,-.1174,.9514,-.8909,-.0165,.4538,-.8708,.382,-.3093,-.9131,-.0591,.4035,-.8349,.4353,-.3367,.0102,.4832,-.8754
                    ,-.8708,.382,-.3093,-.871,-.1593,.4646,-.2218,.0394,-.9743,.2375,.5973,-.766,-.5065,.8535,.122,-.8181,.4024,-.4107,-.3251,.4002,-.8568,-.2673,.5404,-.7978,.0786,.5745,.8147,.3424,.2324,.9103,.193,.3407,.9201,-.4749,.4111,-.7781,.2165,.6088,.7632,.2991,.4194,.8571,-.5065,.8535,.122,-.2749,.8158,.5087,-.1743,.817,.5496
                    ,-.4355,-.0886,-.8958,-.1548,-.0965,-.9832,-.4723,-.0943,-.8764,-.5538,-.0445,-.8314,-.1548,-.0965,-.9832,-.179,-.081,-.9805,-.5969,.1695,.7842,-.634,-.182,.7515,-.4568,.0313,-.889,-.3616,.1587,-.9187,-.9782,.1978,.0625,-.8223,.1877,-.5372,-.8825,.1438,-.4477,-.0027,.1413,.9899,-.5202,.4066,.751,-.5969,.1695,.7842,-.4194,-.0955,-.9027
                    ,.2683,-.3406,-.9011,.3056,-.4132,-.8578,-.9131,.396,.097,-.7689,.2106,-.6036,.0219,.2196,.9753,-.555,.342,.7583,.8603,-.3301,-.3883,.7529,-.2467,.6101,.8567,-.3887,-.3392,-.9609,.2708,.0573,-.7755,.0471,-.6295,-.7623,.0911,-.6408,.8475,-.4718,-.2433,.7529,-.2467,.6101,.7089,-.3767,.5963,-.0211,.0018,.9998,-.5701,.2541,.7813
                    ,-.5823,.2093,.7855,-.4814,-.1605,-.8617,.0763,-.4677,-.8806,.2253,-.3606,-.9051,.0019,.0557,.9984,-.4864,.3789,.7873,-.5701,.2541,.7813,-.409,-.0899,-.9081,.2683,-.3406,-.9011,-.9593,.282,-.0133,-.8086,-.0013,-.5884,-.7755,.0471,-.6295,.9066,-.3603,-.2195,.8828,-.1234,.4532,.7956,-.4819,-.3671,-.9544,.2985,.0041,-.7973,-.1315,-.5891
                    ,.7552,-.4082,-.5129,.8742,.0383,.484,.0742,.3328,.9401,-.6003,.4351,.671,.0985,.302,.9482,-.341,-.6035,.7207,-.4859,.3071,.8183,-.0657,.4401,.8955,-.5614,.387,.7314,.0817,.3166,.945,-.5537,-.2978,-.7776,.598,-.189,-.7788,.14,-.5313,-.8355,-.9713,.1872,.1465,-.8422,.382,-.3805,-.8651,-.11,-.4893,.0513,-.9986,-.01
                    ,.4646,-.3598,-.8091,-.3706,-.4051,-.8357,-.3179,.7546,-.574,.4646,-.3598,-.8091,.418,.6886,-.5925,-.6165,-.6681,.4165,-.6974,.7128,.0745,-.8215,.3834,.4219,.7296,-.6324,-.26,.8213,.2146,.5285,.9438,-.0837,-.3198,.3413,-.807,-.4819,-.0988,-.0098,-.995,-.7566,-.5918,-.2781,-.0151,-.3036,.9527,-.1852,.0786,.9795,.7286,-.6067,.3178
                    ,-.5793,-.7716,.2627,.0515,-.6595,.7499,.7296,-.6324,-.26,.9438,-.0837,-.3198,-.6165,-.6681,.4165,-.8215,.3834,.4219,.6811,-.5329,.5021,.0513,-.9986,-.01,.0919,-.5685,.8175,-.93,.3598,.0745,-.9713,.1872,.1465,.8603,-.3301,-.3883,-.9822,.1865,.0211,-.9544,.2985,.0041,.7956,-.4819,-.3671,-.5701,.2541,.7813,-.9544,.2985,.0041
                    ,-.9593,.282,-.0133,.8567,-.3887,-.3392,.8475,-.4718,-.2433,-.9609,.2708,.0573,.8567,-.3887,-.3392,.2683,-.3406,-.9011,-.9131,.396,.097,-.5969,.1695,.7842,-.9131,.396,.097,-.9782,.1978,.0625,-.6279,.7768,.0482,-.786,.5912,.1805,-.5065,.8535,.122,-.2909,-.2767,-.9159,-.8909,-.0165,.4538,-.2848,-.1174,.9514,-.8909,-.0165,.4538
                    ,-.9131,-.0591,.4035,.8638,.1982,-.4631,.8435,-.2588,-.4706,.8638,.1982,-.4631,-.7935,.4529,.4063,-.028,.2328,.9721,-.9159,.0172,.401,.2058,-.0033,-.9786,.784,-.4951,-.3744,.8929,-.0938,-.4403,.9066,-.245,-.3436,-.2617,.3885,.8835,-.786,.5912,.1805,-.992,-.0346,.1211,-.7935,.4529,.4063,-.9052,.3662,.2156,-.5373,-.3517,.7665
                    ,-.5372,-.8434,.0062,-.1758,-.3717,.9115,-.6279,.7768,.0482,-.4816,.7839,.3919,-.2749,.8158,.5087,-.4852,.2655,-.8331,-.7433,.0891,-.663,-.0232,.6133,.7895,.0995,.6089,.7869,.2165,.6088,.7632,-.6171,.4786,.6245,-.8215,.3834,.4219,-.93,.3598,.0745,.598,-.189,-.7788,.9438,-.0837,-.3198,.9066,-.3603,-.2195,.7524,.1411,.6434
                    ,.9066,-.3603,-.2195,-.8422,.382,-.3805,-.93,.3598,.0745,-.3249,.5953,-.7349,.598,-.189,-.7788,-.0657,.4401,.8955,-.2617,.3885,.8835,-.9052,.3662,.2156,-.8905,.431,.1455,-.2617,.3885,.8835,.2518,-.5908,.7665,-.891,.1813,-.4161,-.4483,-.5471,-.7069,-.8905,.431,.1455,-.891,.1813,-.4161,-.8242,.4197,.3801,.2291,.2282,-.9463
                    ,.8435,-.2588,-.4706,.8929,-.0938,-.4403,.8433,-.1938,.5012,-.9575,-.2244,.1811,-.2408,-.114,-.9638,.3122,-.2069,.9272,-.8764,-.2293,-.4235,.2518,-.5908,.7665,-.5372,-.8434,.0062,.6823,-.6377,-.3574,.6823,-.6377,-.3574,-.4483,-.5471,-.7069,-.5372,-.8434,.0062,.6823,-.6377,-.3574,-.1758,-.3717,.9115,-.0657,.4401,.8955,-.8422,.382,-.3805
                    ,-.2749,.8158,.5087,-.1383,.7074,.693,-.2009,.1789,-.9631,-.5277,-.5443,-.6522,-.341,-.6035,.7207,.0513,-.9986,-.01,-.6165,-.6681,.4165,-.9154,-.3969,-.0674,-.9154,-.3969,-.0674,-.6165,-.6681,.4165,-.3249,.5953,-.7349,.7524,.1411,.6434,.6811,-.5329,.5021,.1474,.3999,.9046,-.7755,.0471,-.6295,-.508,-.3064,-.805,.7529,-.2467,.6101
                    ,.2688,-.2194,.9378,.002,.1197,.9928,.1978,.095,.9756,.2688,-.2194,.9378,.2007,-.0991,.9746,-.0027,.1413,.9899,-.8825,.1438,-.4477,-.3251,.4002,-.8568,-.337,.0152,-.9413,-.3955,.4964,.7727,-.4749,.4111,-.7781,-.2673,.5404,-.7978,-.4852,.2655,-.8331,-.1758,-.3717,.9115,.193,.3407,.9201,-.4568,.0313,-.889,-.7689,.2106,-.6036
                    ,.6772,-.3559,.644,.002,.1197,.9928,-.9096,.4071,.0831,-.555,.342,.7583,.8292,-.5368,-.1556,-.0956,-.3548,-.93,-.555,.342,.7583,.002,.1197,.9928,.8292,-.5368,-.1556,-.7689,.2106,-.6036,-.9096,.4071,.0831,-.4568,.0313,-.889,.9564,-.0873,.2787,.7552,-.4082,-.5129,-.9713,.1872,.1465,-.9822,.1865,.0211,.2688,-.2194,.9378
                    ,.8292,-.5368,-.1556,.6772,-.3559,.644,-.0513,-.6678,-.7425,-.0956,-.3548,-.93,.8292,-.5368,-.1556,.1978,.095,.9756,-.4457,-.1719,.8785,-.8326,.2647,.4865,-.4646,.2231,.8569,-.4637,.2805,.8404,-.8692,-.1176,.4802,-.5107,-.0829,.8557,-.843,-.125,.5232,-.9681,.2451,.051,-.8129,.3666,.4526,-.992,-.0426,.1189,-.9272,.1685,-.3345
                    ,-.9681,.2451,.051,-.995,.0576,.0819,-.9148,-.2474,-.3192,-.992,-.0426,.1189,-.9828,.1241,-.1366,-.0455,-.4237,-.9047,-.2497,.1876,-.95,-.5258,.2288,-.8192,-.588,.0542,-.807,-.0316,.3232,-.9458,-.5557,.3225,-.7663,-.5557,.3225,-.7663,-.0264,.6099,-.792,-.5014,.6299,-.5931,-.9681,.2451,.051,-.7685,.5971,-.23,-.8101,.5841,.0502
                    ,-.8326,.2647,.4865,-.8101,.5841,.0502,-.6689,.6305,.3937,-.4646,.2231,.8569,-.3823,.6118,.6925,-.2497,.1876,-.95,-.4684,.0454,-.8824,-.5258,.2288,-.8192,-.992,-.0426,.1189,-.9443,.0231,-.3282,-.9858,-.1159,.1211,-.8692,-.1176,.4802,-.9858,-.1159,.1211,-.8365,-.3195,.4452,-.5107,-.0829,.8557,-.4558,-.3291,.827,-.3343,-.3931,-.8566
                    ,-.033,.1418,-.9893,-.588,.0542,-.807,-.9443,.0231,-.3282,-.995,.0576,.0819,-.9858,-.1159,.1211,-.8365,-.3195,.4452,-.995,.0576,.0819,-.843,-.125,.5232,-.4558,-.3291,.827,-.843,-.125,.5232,-.4457,-.1719,.8785,.011,.944,.3296,.0259,.6283,.7775,-.3815,.9214,-.0744,-.8101,.5841,.0502,-.3157,.9432,.1033,-.2573,.9158,-.3082
                    ,-.0115,.9389,-.3439,.011,.944,.3296,-.3157,.9432,.1033,-.2226,.9384,.2643,.0315,-.3295,.9436,-.4457,-.1719,.8785,.0328,-.1813,.9828,-.5107,-.0829,.8557,.0315,-.3295,.9436,.0333,-.0644,.9973,.0326,.2064,.9779,.0333,-.0644,.9973,.0391,.2588,.9651,.0328,-.1813,.9828,.0326,.2064,.9779,-.0264,.6099,-.792,-.5804,-.3936,-.7129
                    ,-.9272,.1685,-.3345,-.9443,.0231,-.3282,-.9457,-.0419,-.3223,-.8966,.2795,-.3434,-.8966,.2795,-.3434,-.5887,-.5031,-.6327,-.9457,-.0419,-.3223,-.3294,-.9051,-.2689,-.7647,-.3674,-.5294,-.2945,.5232,.7996,.0391,.2588,.9651,.0531,.4467,.8931,-.0455,-.4237,-.9047,-.9405,.3018,-.156,-.9405,.3018,-.156,-.6652,.6198,.4163,.0995,.6089,.7869
                    ,.0531,.4467,.8931,-.8405,.5334,-.0945,-.0689,-.7794,-.6227,-.9457,-.0419,-.3223,-.0263,.3858,-.9221,-.5528,-.7506,-.3619,-.2497,.1876,-.95,-.0289,-.498,-.8666,-.6105,-.6245,-.4871,-.5528,-.7506,-.3619,-.9942,.0047,-.107,-.5528,-.7506,-.3619,-.0329,.1653,-.9857,-.7829,.0632,-.6189,-.2497,.1876,-.95,-.5528,-.7506,-.3619,-.0329,.1653,-.9857
                    ,-.6841,-.3406,-.6449,-.7447,.0609,-.6646,-.9753,-.1301,-.1783,-.5694,-.3856,-.726,-.7829,.0632,-.6189,-.5804,-.3936,-.7129,-.5453,-.2608,-.7966,-.0297,-.4534,-.8908,.7787,.5581,-.2865,.5645,-.7967,-.2159,.8663,.4994,-.0063,.5645,-.7967,-.2159,.8527,.3649,.3738,.4593,.38,-.8029,.5764,.77,-.2734,-.5793,-.7716,.2627,.9709,-.2266,.0769
                    ,.2836,-.8602,.4238,.9933,-.0742,-.0888,-.8345,-.1129,-.5392,.2713,-.191,-.9434,.3666,.2701,-.8903,-.2524,-.5844,.7712,.3272,.378,-.866,-.1927,-.9091,.3693,.735,-.6718,-.0919,-.871,-.1593,.4646,-.5793,-.7716,.2627,-.9868,.0242,-.1599,-.3459,-.0025,-.9382,-.394,.1156,-.9118,-.8238,.0292,-.566,-.0263,.3858,-.9221,-.0927,.3412,-.9354
                    ,-.0333,.0406,-.9986,-.5258,.2288,-.8192,-.2497,.1876,-.95,-.5258,.2288,-.8192,-.8928,.0829,-.4426,-.469,.1828,-.864,-.9457,-.0419,-.3223,-.942,.3169,-.1106,-.8434,.064,-.5333,-.3805,-.0589,-.9229,.6371,-.3248,-.699,.2765,-.3931,-.8769,-.6841,-.3406,-.6449,-.3343,-.3931,-.8566,.6898,.6637,-.2893,.3174,.5112,-.7987,.2126,-.2644,-.9407
                    ,-.8183,.0747,-.5699,-.2575,-.1482,.9548,-.9074,-.249,.3385,.6893,.1507,.7086,.3052,.3591,-.882,-.6072,.5316,-.5904,-.4858,-.3104,.8171,.865,-.0912,.4934,.3814,.3544,-.8538,.3304,.4378,-.8361,-.3251,.4002,-.8568,.3424,.2324,.9103,.2991,.4194,.8571,.3304,.4378,-.8361,-.15,.4147,-.8975,.2991,.4194,.8571,.4982,.8385,-.2208
                    ,-.1548,-.0965,-.9832,.1632,-.0877,-.9827,-.5264,.0382,-.8493,.9073,.1802,-.3799,.6233,.1564,-.7661,.3772,.0774,.9229,.8383,.1488,.5245,-.3612,-.5053,.7837,.5079,-.2839,.8133,.9084,.0264,.4173,-.1164,.2568,-.9594,-.7186,-.0409,-.6941,.8441,.3545,-.4023,.3521,.3247,-.8778,-.7016,.0984,.7057,-.0179,-.3948,-.9186,-.7521,-.405,-.5199
                    ,-.5676,-.5456,.6165,-.7572,-.6518,.0425,-.6127,-.7838,-.1008,-.9879,.1508,.0357,-.7572,-.6518,.0425,.975,.2127,.0639,.7288,-.678,.0956,.003,-1,-.0003,-.7572,-.6518,.0425,.9309,.191,-.3112,.9778,.1916,-.085,-.9652,-.2611,.0109,-.9409,-.2973,-.1622,.8484,.3573,-.3904,.8742,.2418,-.421,-.9198,-.3899,-.0431,-.9933,-.041,-.108
                    ,.9084,.0264,.4173,.8441,.3545,-.4023,.8484,.3573,-.3904,-.8898,-.4492,.0802,-.9443,-.3272,.035,.8797,.3207,-.3511,.8441,.3545,-.4023,-.9443,-.3272,.035,-.9652,-.2611,.0109,.8719,.4256,-.2421,.8607,.4369,-.2613,.8383,.1488,.5245,.9073,.1802,-.3799,.8719,.4256,-.2421,.6898,.6637,-.2893,.4982,.8385,-.2208,.7199,.6106,-.3298
                    ,.9276,.0304,-.3723,.916,-.1776,-.3596,.865,-.0912,.4934,.9284,-.0603,-.3666,.9276,.0304,-.3723,-.498,.8075,.316,-.946,-.2521,.2039,-.9218,.2763,.2718,-.9218,.2763,.2718,.8672,.4483,-.2168,.8705,.4167,-.2618,.9411,.0189,-.3375,.9284,-.0603,-.3666,-.8586,-.4804,.1786,-.9074,-.249,.3385,-.8183,.0747,-.5699,-.9074,-.249,.3385
                    ,-.9551,-.0974,.2799,.7199,.6106,-.3298,.7909,.4533,-.411,.8809,-.0495,-.4707,.9073,.1802,-.3799,.8348,.3951,-.3833,.8672,.4483,-.2168,.7616,-.4113,.5007,.3767,-.8443,-.381,.6898,.6637,-.2893,.595,.73,.3362,.2165,.6088,.7632,.8052,.2849,.52,.9778,.1916,-.085,.975,.2127,.0639,-.8468,.1682,-.5046,-.9933,-.041,-.108
                    ,-.9879,.1508,.0357,.6726,.4411,-.5942,-.0393,.6567,-.7531,-.8468,.1682,-.5046,.2069,.2649,.9418,.8052,.2849,.52,.7909,.4533,-.411,.8348,.3951,-.3833,.8052,.2789,.5232,.3995,.2818,-.8723,-.1575,-.4504,-.8788,.7909,.4533,-.411,.3995,.2818,-.8723,.8705,.4167,-.2618,.9411,.0189,-.3375,-.9551,-.0974,.2799,-.946,-.2521,.2039
                    ,.8372,-.2461,-.4884,.8809,-.0495,-.4707,.291,-.6913,.6613,.3767,-.8443,-.381,-.7672,-.6354,.0869,-.7672,-.6354,.0869,-.8586,-.4804,.1786,.3767,-.8443,-.381,.2069,.2649,.9418,-.0393,.6567,-.7531,.4651,.5374,.7035,.1295,.1804,-.975,.6011,-.5754,.5546,.7288,-.678,.0956,.003,-1,-.0003,.7995,-.3569,-.4831,-.0179,-.3948,-.9186
                    ,-.7016,.0984,.7057,-.5676,-.5456,.6165,.3521,.3247,-.8778,-.1164,.2568,-.9594,.5079,-.2839,.8133,-.3612,-.5053,.7837,.1978,.095,.9756,.1632,-.0877,-.9827,-.15,.4147,-.8975,.4741,.2952,.8295,-.2009,.1789,-.9631,.7616,-.4113,.5007,-.1383,.2922,-.9463,.5426,-.1688,.8228,.8607,.4369,-.2613,.8797,.3207,-.3511,-.7626,-.6055,.2278
                    ,-.8898,-.4492,.0802,.8907,.1248,.4371,-.2321,-.5071,.83,.3624,.4581,-.8116,-.9409,-.2973,-.1622,-.9198,-.3899,-.0431,.8742,.2418,-.421,.9309,.191,-.3112,-.7626,-.6055,.2278,-.0513,-.6678,-.7425,-.7626,-.6055,.2278,-.5264,.0382,-.8493,.5208,.2231,.824,.5667,-.0829,.8197,.9694,.2452,-.0136,.8717,.2795,-.4024,.9938,-.1081,.0249
                    ,.9226,-.0749,-.3783,.4828,.2105,-.85,.5033,.3225,-.8017,.9694,.2452,-.0136,.8117,.5841,-.0039,.8632,.2648,.4299,.1869,.1778,-.9661,.9938,-.1081,.0249,.9905,-.127,.0526,.9037,-.1399,.4047,.51,-.3291,.7947,.5329,.0542,-.8444,.5329,.0542,-.8444,-.033,.1418,-.9893,.9982,.0576,.0154,.9028,.1685,-.3956,.9217,.012,-.3877
                    ,.8643,-.3195,.3884,.876,-.125,.4658,.9982,.0576,.0154,.5033,-.1719,.8468,.876,-.125,.4658,.0259,.6283,.7775,.8117,.5841,-.0039,.349,.9369,.0179,.2362,.9158,-.3247,.3756,.9214,-.0997,.349,.9369,.0179,.3219,.9432,.082,.2397,.9384,.2489,.011,.944,.3296,.3219,.9432,.082,.3756,.9214,-.0997,.349,.9369,.0179
                    ,.0328,-.1813,.9828,.5033,-.1719,.8468,.0315,-.3295,.9436,.51,-.3291,.7947,.0259,.6283,.7775,.0333,-.0644,.9973,.5667,-.0829,.8197,.0326,.2064,.9779,.5208,.2231,.824,.9028,.1685,-.3956,.5329,.0542,-.8444,.5315,-.3936,-.75,.491,-.2608,-.8312,.8717,.2795,-.4024,.5033,.3225,-.8017,.9589,-.0155,-.2832,.9324,.1286,-.3376
                    ,.9324,.1286,-.3376,.8744,.3529,-.333,-.0263,.3858,-.9221,.1869,.1778,-.9661,-.0289,-.498,-.8666,.5275,-.7505,-.398,.7373,.06,-.6728,.5275,-.7505,-.398,.1869,.1778,-.9661,.6371,-.3248,-.699,.7373,.06,-.6728,.5315,-.3936,-.75,-.6127,-.7838,-.1008,-.8002,.5161,.3055,-.498,.8075,.316,.49,-.8118,-.3175,.916,-.1776,-.3596
                    ,.49,-.8118,-.3175,-.0263,.3858,-.9221,.4828,.2105,-.85,.4828,.2105,-.85,.9226,-.0749,-.3783,.193,.3407,.9201,.3424,.2324,.9103,-.7935,.4529,.4063,-.4852,.2655,-.8331,-.6341,.5082,-.5827,.3122,-.2069,.9272,.2007,-.0991,.9746,-.2408,-.114,-.9638,-.337,.0152,-.9413,-.8825,.1438,-.4477,-.8905,.431,.1455,.2058,-.0033,-.9786
                    ,.8451,-.0776,.5288,.9066,-.245,-.3436,.8451,-.0776,.5288,-.8432,.2943,-.4498,.0102,.4832,-.8754,.8638,.1982,-.4631,.9131,-.2887,.2879,.9131,-.2887,.2879,-.2848,-.1174,.9514,-.8708,.382,-.3093,-.786,.5912,.1805,-.8181,.4024,-.4107,-.4749,.4111,-.7781,-.3251,.4002,-.8568,.3424,.2324,.9103,-.8181,.4024,-.4107,-.0232,.6133,.7895
                    ,.2165,.6088,.7632,-.5065,.8535,.122,-.6279,.7768,.0482,-.3616,.1587,-.9187,-.1548,-.0965,-.9832,-.4723,-.0943,-.8764,-.1548,-.0965,-.9832,-.0027,.1413,.9899,-.0956,-.3548,-.93,-.3616,.1587,-.9187,-.9782,.1978,.0625,-.409,-.0899,-.9081,-.9096,.4071,.0831,-.9593,.282,-.0133,.8567,-.3887,-.3392,.7529,-.2467,.6101,.0019,.0557,.9984
                    ,.7524,.1411,.6434,-.9822,.1865,.0211,.0919,-.5685,.8175,-.6171,.4786,.6245,-.3249,.5953,-.7349,-.93,.3598,.0745,.7296,-.6324,-.26,-.3706,-.4051,-.8357,.4646,-.3598,-.8091,.6811,-.5329,.5021,.5645,-.7967,-.2159,.4646,-.3598,-.8091,.7296,-.6324,-.26,-.6165,-.6681,.4165,.7296,-.6324,-.26,.0513,-.9986,-.01,-.6171,.4786,.6245
                    ,.7552,-.4082,-.5129,.8603,-.3301,-.3883,.9066,-.3603,-.2195,.7956,-.4819,-.3671,-.5701,.2541,.7813,-.9544,.2985,.0041,.8567,-.3887,-.3392,-.9593,.282,-.0133,-.9609,.2708,.0573,.8603,-.3301,-.3883,.8567,-.3887,-.3392,-.9096,.4071,.0831,-.9131,.396,.097,-.5969,.1695,.7842,-.9131,.396,.097,-.6341,.5082,-.5827,-.6279,.7768,.0482
                    ,-.3955,.4964,.7727,-.786,.5912,.1805,-.871,-.1593,.4646,-.8909,-.0165,.4538,-.2848,-.1174,.9514,-.8909,-.0165,.4538,.5764,.77,-.2734,.0102,.4832,-.8754,.8638,.1982,-.4631,.8638,.1982,-.4631,-.8242,.4197,.3801,-.7935,.4529,.4063,-.9131,-.0591,.4035,-.9159,.0172,.401,.2058,-.0033,-.9786,.9066,-.245,-.3436,.784,-.4951,-.3744
                    ,.8929,-.0938,-.4403,-.8905,.431,.1455,-.786,.5912,.1805,-.9782,.1978,.0625,-.992,-.0346,.1211,-.7935,.4529,.4063,-.9575,-.2244,.1811,-.5372,-.8434,.0062,-.6279,.7768,.0482,-.8405,.5334,-.0945,.0995,.6089,.7869,-.8215,.3834,.4219,.598,-.189,-.7788,.9438,-.0837,-.3198,-.8422,.382,-.3805,-.0657,.4401,.8955,-.2617,.3885,.8835
                    ,-.9052,.3662,.2156,-.2617,.3885,.8835,-.891,.1813,-.4161,-.8905,.431,.1455,-.9159,.0172,.401,-.8242,.4197,.3801,.8435,-.2588,-.4706,-.992,-.0346,.1211,-.9575,-.2244,.1811,-.179,-.081,-.9805,-.2408,-.114,-.9638,.3648,-.1091,.9246,.3122,-.2069,.9272,.2518,-.5908,.7665,.6823,-.6377,-.3574,-.5372,-.8434,.0062,-.7991,-.2589,-.5426
                    ,.784,-.4951,-.3744,.6823,-.6377,-.3574,-.5372,-.8434,.0062,-.0657,.4401,.8955,-.2749,.8158,.5087,-.2009,.1789,-.9631,-.0689,-.7794,-.6227,-.341,-.6035,.7207,.0513,-.9986,-.01,-.3706,-.4051,-.8357,-.9154,-.3969,-.0674,-.3249,.5953,-.7349,.7524,.1411,.6434,.6811,-.5329,.5021,.0919,-.5685,.8175,-.7755,.0471,-.6295,.7529,-.2467,.6101
                    ,.0019,.0557,.9984,.2688,-.2194,.9378,.6772,-.3559,.644,-.409,-.0899,-.9081,.2007,-.0991,.9746,.1978,.095,.9756,-.0027,.1413,.9899,-.8825,.1438,-.4477,-.4723,-.0943,-.8764,-.0232,.6133,.7895,-.3251,.4002,-.8568,-.8181,.4024,-.4107,-.4749,.4111,-.7781,-.2673,.5404,-.7978,-.2009,.1789,-.9631,-.4852,.2655,-.8331,-.1758,-.3717,.9115
                    ,-.3955,.4964,.7727,.193,.3407,.9201,-.4568,.0313,-.889,-.9609,.2708,.0573,.8475,-.4718,-.2433,-.555,.342,.7583,.8292,-.5368,-.1556,-.7689,.2106,-.6036,.7956,-.4819,-.3671,.7552,-.4082,-.5129,-.9713,.1872,.1465,-.9822,.1865,.0211,.2688,-.2194,.9378,-.0513,-.6678,-.7425,.8292,-.5368,-.1556,-.0513,-.6678,-.7425,-.3616,.1587,-.9187
                    ,-.0956,-.3548,-.93,-.995,.0576,.0819,-.9828,.1241,-.1366,-.8966,.2795,-.3434,-.9681,.2451,.051,-.9457,-.0419,-.3223,-.992,-.0426,.1189,-.0455,-.4237,-.9047,-.0455,-.4237,-.9047,-.0263,.3858,-.9221,-.033,.1418,-.9893,-.0316,.3232,-.9458,-.5557,.3225,-.7663,-.0316,.3232,-.9458,-.0264,.6099,-.792,-.9681,.2451,.051,-.8326,.2647,.4865
                    ,-.9681,.2451,.051,-.8101,.5841,.0502,-.4646,.2231,.8569,-.8326,.2647,.4865,-.2497,.1876,-.95,-.992,-.0426,.1189,-.8692,-.1176,.4802,-.992,-.0426,.1189,-.9858,-.1159,.1211,-.5107,-.0829,.8557,-.8692,-.1176,.4802,-.588,.0542,-.807,-.0303,-.4186,-.9077,-.033,.1418,-.9893,-.9443,.0231,-.3282,-.9272,.1685,-.3345,-.995,.0576,.0819
                    ,-.8365,-.3195,.4452,-.9858,-.1159,.1211,-.995,.0576,.0819,-.4558,-.3291,.827,-.8365,-.3195,.4452,-.843,-.125,.5232,.011,.944,.3296,-.347,.9369,.0411,-.8101,.5841,.0502,-.347,.9369,.0411,-.347,.9369,.0411,-.3815,.9214,-.0744,-.0115,.9389,-.3439,-.2573,.9158,-.3082,-.0115,.9389,-.3439,-.3815,.9214,-.0744,.011,.944,.3296
                    ,-.2226,.9384,.2643,-.3157,.9432,.1033,-.3157,.9432,.1033,-.347,.9369,.0411,-.0115,.9389,-.3439,.0315,-.3295,.9436,-.4558,-.3291,.827,-.4457,-.1719,.8785,-.5107,-.0829,.8557,.0315,-.3295,.9436,.0326,.2064,.9779,-.4646,.2231,.8569,.0333,-.0644,.9973,.0328,-.1813,.9828,-.0264,.6099,-.792,-.0115,.9389,-.3439,-.588,.0542,-.807
                    ,-.9272,.1685,-.3345,-.5258,.2288,-.8192,-.5804,-.3936,-.7129,-.5557,.3225,-.7663,.0391,.2588,.9651,-.0477,-.8866,-.46,-.0455,-.4237,-.9047,-.9405,.3018,-.156,-.9828,.1241,-.1366,.0995,.6089,.7869,-.8405,.5334,-.0945,-.9405,.3018,-.156,-.0689,-.7794,-.6227,-.0477,-.8866,-.46,-.0263,.3858,-.9221,-.0289,-.498,-.8666,-.0289,-.498,-.8666
                    ,-.0282,-.5335,-.8453,-.7829,.0632,-.6189,-.0282,-.5335,-.8453,-.0329,.1653,-.9857,-.2497,.1876,-.95,-.0329,.1653,-.9857,-.0297,-.4534,-.8908,-.7829,.0632,-.6189,-.6841,-.3406,-.6449,-.3343,-.3931,-.8566,-.5804,-.3936,-.7129,-.0297,-.4534,-.8908,-.0303,-.4186,-.9077,.7787,.5581,-.2865,.5645,-.7967,-.2159,.5764,.77,-.2734,.7787,.5581,-.2865
                    ,-.5793,-.7716,.2627,-.5768,-.5995,-.5549,-.871,-.1593,.4646,-.5793,-.7716,.2627,-.0263,.3858,-.9221,-.2497,.1876,-.95,-.5258,.2288,-.8192,-.5258,.2288,-.8192,-.9457,-.0419,-.3223,-.9457,-.0419,-.3223,-.992,-.0426,.1189,.6371,-.3248,-.699,-.6841,-.3406,-.6449
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
                    ,.1515,.6207,.6707,.6932,.7109,.7156,.2099,.7489,.0572,.9772,.0333,.9891,.0327,.9768,.9595,.8435,.9367,.8722,.9366,.8392,.0017,.9903,.0007,.9782,.9165,.8678,.9131,.8449,.5941,.9817,.5665,.968,.5953,.9697,.8602,.6714,.8708,.6356,.8814,.6587,.8164,.6219,.8156,.6114,.8479,.615,.5437,.968,.5199,.9805
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
                    ,.2916,.1042,.3024,.1854,.2936,.1366,.6671,.653,.6177,.6633,.2936,.1366,.2916,.1042,.3359,.0007,.5527,.6759,.5109,.6683,.5844,.6727,.0426,.1728,.0979,.4566,.1234,.0558,.0036,.4551,.7171,.3379,.7508,.2693,.7431,.3345,.5186,.7162,.4726,.7131,.5186,.6972,.6727,.3666,.8557,.9888,.8317,.9769,.8556,.9766
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
                    ,.0461,.8365,.2073,.2724,.1695,.3278,.6445,.0237,.5805,.2705,.5642,.4768,.5729,.882,.2916,.2352,.5459,.156,.436,.6727,.352,.3885,.3298,.4674,.2068,.4359,.3534,.653,.3534,.5603,.3454,.4203,.3398,.3443,.4678,.6759,.0007,.7359,.0125,.6144,.1461,.1756,.1678,.0557,.1515,.6207,.1706,.6207,.681,.6773
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
                    ,.3359,.0007,.5527,.6759,.0862,.3351,.0979,.4566,.1234,.0558,.0036,.4551,.7171,.3379,.7316,.2693,.7508,.2693,.5186,.7162,.472,.7353,.4726,.7131,.7991,.9878,.9268,.0757,.0472,.9642,.0759,.9617,.8936,.1917,.9,.1577,.9291,.2239,.9291,.2239,.8991,.2324,.0007,.9741,.0017,.9629,.0992,.3013,.1087,.2799
                    ,.1233,.2879,.1081,.3521,.9404,.9567,.9094,.9497,.9144,.9343,.9645,.954,.9404,.9567,.5609,.959,.6247,.9419,.933,.9833,.9124,.9916,.9094,.958,.957,.9871,.933,.9833,.5334,.9239,.5229,.9468,.5188,.9438,.5527,.9096,.5481,.9068,.5644,.8833,.9233,.2404,.8946,.2448,.8936,.2397,.9477,.2408,.9233,.2404
                    ,.9251,.2338,.9576,.9147,.143,.3373,.9144,.9343,.9234,.9147,.9441,.6611,.9346,.6618,.9166,.644,.918,.6541,.9166,.644,.9346,.6618,.9711,.644,.9685,.6512,.9551,.6584,.9551,.6584,.9441,.6611,.9166,.644,.9651,.2448,.9477,.2408,.9496,.2344,.957,.9871,.9794,.9697,.9817,.9469,.9645,.954,.9019,.0152
                    ,.8738,.9879,.1233,.2879,.1408,.3014,.5334,.9239,.5481,.9068,.5731,.9579,.5642,.9247,.0992,.3013,.9266,.0137,.9383,.2172,.9291,.2239,.9361,.0755,.9268,.0757,.9533,.0064,.9446,.0751,.9361,.0755,.9525,.2015,.9383,.2172,.3131,.272,.3122,.2754,.5594,.9666,.5466,.9666,.5463,.9475,.5466,.9666,.5344,.9563
                    ,.5609,.959,.5344,.9563,.5254,.949,.5463,.9475,.5468,.9356,.548,.9316,.5642,.9247,.5254,.949,.5229,.9468,.4005,.3177,.406,.3015,.403,.3593,.4005,.3177,.3763,.4439,.462,.3939,.4749,.2797,.3763,.4439,.5946,.7862,.5849,.7886,.5736,.7851,.5736,.7851,.5551,.7853,.5551,.7853,.5199,.7889,.6997,.9348
                    ,.5468,.9356
                ]),
                false);

                _i = new Float32Array(6104);
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
                ,0,0,.9355,.0644,0,0,.023,.9492,0,0,.1625,.1407,.6968,0,.9784,0,0,0,.0165,.9667,0,0,.0301,.9596,0,0,.916,.0833,0,0,.0537,.9458,0,0,.0321,.9582,0,0,.0557,.9423,0,0,.1104,.8865,0,0,.7157,.2754,0,0
                ,.1612,.8364,0,0,.0065,.9491,0,0,.2182,.072,.7098,0,.8311,.1482,0,0,.9981,0,0,0,.0792,.8381,.0827,0,.0811,.8719,.0441,0,.9835,0,0,0,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.9715,0,0,0,.9895,0,0,0,.8731,.1033
                ,0,0,.9957,0,0,0,.9895,0,0,0,.9966,0,0,0,.9291,.0707,0,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.151,.8362,0,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.1292,.7201,.1058,.0213,.1492,.8246,0,0,.136,.74,.0931,0
                ,.379,.6008,0,0,.0011,.9551,0,0,.0071,.2039,.7641,0,.1424,.7921,.0515,0,.9607,.0208,0,0,.8731,.1033,0,0,.9895,0,0,0,.6813,.3003,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.1837,.8099,0,0,.1612,.8364,0,0,.9669,0
                ,0,0,.2099,.2063,.5837,0,.9229,.0765,0,0,.0301,.9596,0,0,.9784,0,0,0,1.0022,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9751,0,0,0,.9786,0,0,0,.9958,0,0,0,.9938,0,0,0,.9786,0,0,0
                ,.9766,0,0,0,.0086,.0704,.8607,0,.0964,.1442,.0553,.6782,.0086,.0704,.8607,0,.0307,.054,.0005,.8231,.029,.2475,.0585,.6072,.2248,.1319,.5525,.0537,.1826,.1638,.0561,.5842,.871,.1177,0,0,.8624,.1355,0,0,.0554,.8816,.0437,0,.1813,.8114,0,0,.0662,.8279
                ,.0929,0,.7739,.2167,0,0,.1813,.8114,0,0,.8568,.0103,.1082,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.3127,.1031,.5713,0,.0868,.9125,0,0,.4319,.5677,0,0,.9646,.0151,0,0,.9649,.0005,0,0,.9212,.0638,0,0,.0892,.9072,0,0
                ,.9807,0,0,0,.9662,0,0,0,.871,.1177,0,0,.9702,0,0,0,.0446,.0557,.4626,.1853,.0279,.1516,.0533,.728,.9426,.0539,0,0,.0868,.9125,0,0,.1761,.1494,.5327,.0526,.4,.039,.1418,.3823,.1063,.1803,.5163,.097,.029,.2475,.0585,.6072,.0925,.5883
                ,.0331,.2488,.0003,.4771,.1405,.3214,.2924,.4013,.195,.0922,.2976,.2148,.3321,.1261,.6904,.2253,.0335,.0335,.1992,.6933,.0799,0,.6031,.2393,.1382,0,.2182,.072,.7098,0,.7202,.0706,.2092,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.163,.04,.7919,0,.1625,.1407,.6968,0
                ,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.0811,.8719,.0441,0,.8311,.1482,0,0,.9739,0,0,0,.9702,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.9739,0,0,0,.98,0,0,0,.9709,0,0,0,.0204,.0178
                ,.4647,.1702,.0294,.0294,.0125,.8252,.0623,.5054,.1497,.0076,.9052,.0425,.0089,0,.8622,.0094,.081,0,.4,.039,.1418,.3823,.2195,.0562,.185,.4939,.8622,.0094,.081,0,.8153,.014,.1271,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.7379,.1548,.0658,0,.0811,.8719,.0441,0
                ,.0269,.9044,.0571,0,.6031,.2393,.1382,0,.0589,.1942,.2339,.4882,.2976,.2148,.3321,.1261,.2727,.4319,.1387,.1387,.2886,.2316,.226,.226,.7157,.2754,0,0,.9715,0,0,0,.1612,.8364,0,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0038,.0855,0,.9959,0
                ,0,0,.163,.04,.7919,0,.1837,.8099,0,0,.0623,.9359,0,0,.9836,0,0,0,.9795,0,0,0,.0131,.9636,0,0,.689,.2658,.0262,0,.7308,.1244,.1244,0,.9903,0,0,0,.657,.1395,.0286,.0792,.657,.1395,.0286,.0792,.1408,.6207,.1559,.0155
                ,.1058,.1865,.053,.611,.4104,.4104,.0863,.013,.1339,.1339,.1218,.5291,.1626,.3122,.4785,0,.8624,.1355,0,0,.2054,.7578,0,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.8624,.1355,0,0,.0843,.8355,.0492,0,.0283,.9097,0,0,.1628,.8095,0,0,.689,.2658
                ,.0262,0,.9616,0,0,0,.0376,.9366,0,0,.1598,.7112,.1128,0,.9808,0,0,0,.0376,.9366,0,0,.1628,.8095,0,0,.2185,.7122,.0664,0,.0283,.9097,0,0,.9616,0,0,0,.0843,.8355,.0492,0,.0537,.9458,0,0,.9835,0,0,0
                ,.2185,.7122,.0664,0,.5933,.202,.202,0,.1598,.7112,.1128,0,.4361,.1611,.0544,.3152,.9757,0,0,0,.9829,0,0,0,.9697,.0017,0,0,.1277,.8423,0,0,.8667,.1136,0,0,.1796,.7178,.0736,0,.9702,0,0,0,.9507,.0271,0,0,.7723,.175
                ,.0295,0,.3399,.4989,.1305,0,.9702,0,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.7723,.175,.0295,0,.5053,.3194,.1304,.0166,.3399,.4989,.1305,0,.8191,.14,0,0,.7805,.1746,0,0,.6178,.2816,.0556,.0277,.9347,.0488,0,0,.95,.0262,0,0
                ,.9311,.0527,0,0,.9517,.0231,0,0,.9687,0,0,0,.95,.0262,0,0,.9702,0,0,0,.9772,0,0,0,.9582,.0129,0,0,.9829,0,0,0,.9844,0,0,0,.9702,0,0,0,.9868,0,0,0,.992,0,0,0,.9829,0
                ,0,0,.8794,.0909,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.8094,.1375,.02,0,.8667,.1136,0,0,.9381,.0467,0,0,.7723,.175,.0295,0,.8771,.1167,0,0,.9574,.0224,0,0,.8667,.1136,0,0
                ,.9311,.0527,0,0,.9199,.0613,0,0,.921,.0604,0,0,.9507,.0271,0,0,.9314,.0511,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9652,.0146,0,0,.9697,.0017,0,0,.9574,.0224,0,0,.9936,0
                ,0,0,.9987,0,0,0,.9983,0,0,0,.9844,0,0,0,.9897,0,0,0,.9959,0,0,0,.9934,0,0,0,.9839,0,0,0,.9705,0,0,0,.9959,0,0,0,.9987,0,0,0,.9843,0,0,0,.9679,.0109,0,0
                ,.9757,0,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.0915,.8919,0,0,.9775,0,0,0,.9868,0,0,0,.9843,0,0,0,.9416,.0373,0,0,.9245,.057,0,0,.9314,.0511,0,0,.9517,.0231
                ,0,0,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.0252,.0667,.8514,.0256,.9001,.0563,0,0,.6152,.289,.0399,.0399,.5947,.2662,.0655,.0655,.3399,.4989,.1305,0,.2176,.518,.22,0,.2176,.518,.22,0,.0974,.0373,.701,.1407,.1897,.761,0,0
                ,.0003,.4771,.1405,.3214,.8094,.1375,.02,0,.8138,.1394,.0032,0,.7805,.1746,0,0,.1402,.8191,0,0,.1538,.8047,0,0,.1538,.8047,0,0,.1245,.8399,0,0,.121,.8443,0,0,.0935,.8786,0,0,.1402,.8191,0,0,.0901,.8832,0,0,.8191,.14
                ,0,0,.8761,.0953,0,0,.0672,.9122,0,0,.0903,.8828,0,0,.8954,.0803,0,0,.0779,.8985,0,0,.0903,.8828,0,0,.9245,.057,0,0,.921,.0604,0,0,.0673,.9122,0,0,.2312,.7543,0,0,.0231,.9611,0,0,.0231,.9611,0,0
                ,.0074,.2579,.7097,0,.1278,.7677,.0888,0,.9495,0,0,0,.1803,.7897,0,0,.2312,.7543,0,0,.0011,.9551,0,0,.4758,.5209,0,0,.1201,.8389,0,0,.0653,.0147,.8669,.0132,.1225,.7248,.1125,0,.0775,.9135,0,0,.9878,0,0,0,.9971,0
                ,0,0,.0826,.9143,0,0,.4935,.5037,0,0,1.0025,0,0,0,.0231,.9631,0,0,.9607,.0106,0,0,.0011,.9551,0,0,.8076,.1443,0,0,.8112,.142,0,0,.8075,.1444,0,0,.8075,.1439,.0042,0,.8097,.1427,0,0,.7805,.1746,0,0
                ,.8108,.1459,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7832,.1644,.0255,0,.7723,.175,.0295,0,.8024,.1482,.0081,0,.8117,.1415,.0006,0,.8176,.1387
                ,0,0,.8126,.141,.0014,0,.2248,.1319,.5525,.0537,.0003,.4771,.1405,.3214,.029,.2475,.0585,.6072,.1157,.016,.7541,.0549,.0782,.0782,.7793,0,.0294,.0294,.0125,.8252,.1063,.1803,.5163,.097,.2195,.0562,.185,.4939,.4,.039,.1418,.3823,.9086,.0878,0,0,.1005,.8968,0,0
                ,.8897,.1001,0,0,.0071,.1306,.0894,.5852,.2248,.1319,.5525,.0537,.0307,.054,.0005,.8231,.9052,.0425,.0089,0,.8624,.1355,0,0,.7379,.1548,.0658,0,.0221,.0083,.1432,.7258,.1408,.6207,.1559,.0155,.1197,.5423,.1849,.1105,.0036,.0207,.5285,.259,.1339,.1339,.1218,.5291,.0595,.1063
                ,.4918,.2346,.2054,.7578,0,0,.8153,.014,.1271,0,.2195,.0562,.185,.4939,.0279,.1516,.0533,.728,.0623,.5054,.1497,.0076,.0204,.0178,.4647,.1702,.871,.1177,0,0,.9441,.0171,0,0,.9807,0,0,0,.0907,.9087,0,0,.0729,.9255,0,0,.8617,.1216,0,0
                ,.924,.0701,0,0,.4319,.5677,0,0,.9426,.0539,0,0,.0729,.9255,0,0,.9212,.0638,0,0,.7144,.2808,0,0,.9088,.0761,0,0,.9646,.0151,0,0,.0692,.9272,0,0,.4319,.5677,0,0,.98,0,0,0,.1005,.8968,0,0,.0868,.9125
                ,0,0,.9669,0,0,0,.0892,.9072,0,0,.1005,.8968,0,0,.733,.0466,.2095,0,.8944,.0752,0,0,.8568,.0103,.1082,0,.4763,.4772,.0277,0,.9149,.0124,.0496,0,.9709,0,0,0,.8944,.0752,0,0,.9707,0,0,0,.7739,.2167,0,0
                ,.9649,.0005,0,0,.9495,0,0,0,.0878,.7887,.095,0,.7478,.0912,.1344,0,.7672,.1875,.005,0,.7739,.2167,0,0,.1813,.8114,0,0,.4763,.4772,.0277,0,.7144,.2808,0,0,.2312,.6709,.0773,0,.6017,.1156,.275,0,.4763,.4772,.0277,0,.9607,.0106
                ,0,0,.5914,.1166,.2248,.0172,.3127,.1031,.5713,0,.0716,.0312,.0691,.7956,.2054,.7578,0,0,.4104,.4104,.0863,.013,.0035,.1231,.0909,.3718,.6828,.0729,.2441,0,.0782,.0782,.7793,0,.1626,.3122,.4785,0,.6812,.0959,.0123,.1189,.6904,.2253,.0335,.0335,.7898,.0501,.0825,.0825
                ,.0716,.0312,.0691,.7956,.0589,.1942,.2339,.4882,.1826,.1638,.0561,.5842,.2031,.0973,.5804,.0886,.4638,.2051,.0239,.1392,.3435,.2081,.0372,.3342,.12,.561,.1066,.1339,.4638,.2051,.0239,.1392,.1445,.5927,.0873,.0681,.0964,.1442,.0553,.6782,.0446,.0557,.4626,.1853,.0843,.8355,.0492,0,.3231,.009
                ,.3193,.3193,.0279,.1516,.0533,.728,.0834,.1032,.0081,.7464,.1058,.1865,.053,.611,.4361,.1611,.0544,.3152,.0682,.0646,.8291,0,.0964,.1442,.0553,.6782,.9838,0,0,0,.9766,0,0,0,.9751,0,0,0,.0086,.0704,.8607,0,.0283,.9097,0,0,.194,.043,.7225,0
                ,.0376,.9366,0,0,.9229,.0765,0,0,.9795,0,0,0,.9786,0,0,0,.9958,0,0,0,.9836,0,0,0,.9903,0,0,0,.9808,0,0,0,.9795,0,0,0,.0131,.9636,0,0,.9825,0,0,0,.99,0,0,0,.9938,0
                ,0,0,.9278,.0717,0,0,.0453,.9523,0,0,.9254,.074,0,0,.9892,0,0,0,.9426,.0572,0,0,.99,0,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.935,.0648,0,0,.9836,0,0,0,.1625,.1407,.6968,0
                ,.023,.9492,0,0,.9784,0,0,0,.9355,.0644,0,0,.0165,.9667,0,0,.0537,.9458,0,0,.916,.0833,0,0,.9407,.059,0,0,.0321,.9582,0,0,.1104,.8865,0,0,.7157,.2754,0,0,.6813,.3003,0,0,.8311,.1482,0,0,.9669,0
                ,0,0,.0065,.9491,0,0,.9981,0,0,0,.0792,.8381,.0827,0,1.0022,0,0,0,.9835,0,0,0,.0269,.9044,.0571,0,.9959,0,0,0,.9715,0,0,0,.9895,0,0,0,.9966,0,0,0,.9957,0,0,0,.9895,0,0,0
                ,.9607,.0208,0,0,.8876,.0038,.0855,0,.9291,.0707,0,0,.7202,.0706,.2092,0,.8731,.1033,0,0,.151,.8362,0,0,.7451,.0641,.1908,0,.1492,.8246,0,0,.1292,.7201,.1058,.0213,.136,.74,.0931,0,.0662,.8279,.0929,0,.379,.6008,0,0,.0071,.2039
                ,.7641,0,.0011,.9551,0,0,.1424,.7921,.0515,0,.8731,.1033,0,0,.7451,.0641,.1908,0,.8876,.0038,.0855,0,.7202,.0706,.2092,0,.1837,.8099,0,0,.9715,0,0,0,.1612,.8364,0,0,.2099,.2063,.5837,0,.9835,0,0,0,.9229,.0765,0,0
                ,.0301,.9596,0,0,.9355,.0644,0,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9873,0,0,0,.9786,0,0,0,.9808,0,0,0,.9958,0,0,0,.9786,0,0,0,.9766,0,0,0,.0086,.0704,.8607,0,.0964,.1442
                ,.0553,.6782,.0086,.0704,.8607,0,.0279,.1516,.0533,.728,.029,.2475,.0585,.6072,.871,.1177,0,0,.0716,.0312,.0691,.7956,.1225,.7248,.1125,0,.1813,.8114,0,0,.7739,.2167,0,0,.1813,.8114,0,0,.7144,.2808,0,0,.8568,.0103,.1082,0,.9709,0,0,0
                ,.8568,.0103,.1082,0,.0868,.9125,0,0,.4319,.5677,0,0,.9646,.0151,0,0,.0892,.9072,0,0,.9212,.0638,0,0,.9807,0,0,0,.0729,.9255,0,0,.9702,0,0,0,.871,.1177,0,0,.0204,.0178,.4647,.1702,.0868,.9125,0,0,.9086,.0878
                ,0,0,.1761,.1494,.5327,.0526,.4,.039,.1418,.3823,.7379,.1548,.0658,0,.029,.2475,.0585,.6072,.0925,.5883,.0331,.2488,.0589,.1942,.2339,.4882,.2976,.2148,.3321,.1261,.3796,.2891,.2591,.0496,.6031,.2393,.1382,0,.1897,.761,0,0,.6904,.2253,.0335,.0335,.2182,.072,.7098,0
                ,.7202,.0706,.2092,0,.2099,.2063,.5837,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.1625,.1407,.6968,0,.163,.04,.7919,0,.1625,.1407,.6968,0,.0269,.9044,.0571,0,.2099,.2063,.5837,0,.0811,.8719,.0441,0,.0792,.8381,.0827,0,.8311,.1482,0,0,.9702,0
                ,0,0,.9086,.0878,0,0,.9739,0,0,0,.9702,0,0,0,.9052,.0425,.0089,0,.9441,.0171,0,0,.8153,.014,.1271,0,.9739,0,0,0,.9441,.0171,0,0,.98,0,0,0,.9662,0,0,0,.9709,0,0,0,.9807,0,0,0
                ,.0023,.9701,0,0,.1063,.1803,.5163,.097,.0288,.606,.2026,.024,.7508,.1427,.0111,0,.054,.2831,.4623,.093,.9052,.0425,.0089,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.8622,.0094,.081,0,.8153,.014,.1271,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.7379,.1548
                ,.0658,0,.8311,.1482,0,0,.0269,.9044,.0571,0,.0589,.1942,.2339,.4882,.1992,.6933,.0799,0,.2886,.2316,.226,.226,.2924,.4013,.195,.0922,.7157,.2754,0,0,.9715,0,0,0,.8876,.0038,.0855,0,.9708,.0137,0,0,.9708,.0137,0,0,.8876,.0038,.0855,0
                ,.0811,.8719,.0441,0,.163,.04,.7919,0,.1837,.8099,0,0,.0557,.9423,0,0,.9836,0,0,0,.0299,.96,0,0,.9795,0,0,0,.7308,.1244,.1244,0,.1628,.8095,0,0,.657,.1395,.0286,.0792,.7308,.1244,.1244,0,.1408,.6207,.1559,.0155,.4361,.1611
                ,.0544,.3152,.1058,.1865,.053,.611,.4104,.4104,.0863,.013,.1339,.1339,.1218,.5291,.8624,.1355,0,0,.6812,.0959,.0123,.1189,.0035,.1231,.0909,.3718,.2976,.2148,.3321,.1261,.7379,.1548,.0658,0,.1626,.3122,.4785,0,.0843,.8355,.0492,0,.0283,.9097,0,0,.689,.2658,.0262,0
                ,.1628,.8095,0,0,.9616,0,0,0,.0376,.9366,0,0,.2185,.7122,.0664,0,.1598,.7112,.1128,0,.0376,.9366,0,0,.1628,.8095,0,0,.2185,.7122,.0664,0,.0283,.9097,0,0,.9616,0,0,0,.0843,.8355,.0492,0,.0623,.9359,0,0,.0537,.9458
                ,0,0,.9835,0,0,0,.0301,.9596,0,0,.7308,.1244,.1244,0,.2185,.7122,.0664,0,.689,.2658,.0262,0,.5933,.202,.202,0,.1598,.7112,.1128,0,.2185,.7122,.0664,0,.657,.1395,.0286,.0792,.9757,0,0,0,.9829,0,0,0,.9868,0,0,0
                ,.1277,.8423,0,0,.8667,.1136,0,0,.8771,.1167,0,0,.9697,.0017,0,0,.9702,0,0,0,.1796,.7178,.0736,0,.7723,.175,.0295,0,.9416,.0373,0,0,.9702,0,0,0,.9507,.0271,0,0,.5053,.3194,.1304,.0166,.7723,.175,.0295,0,.3399,.4989
                ,.1305,0,.6152,.289,.0399,.0399,.8191,.14,0,0,.8138,.1394,.0032,0,.9347,.0488,0,0,.95,.0262,0,0,.9517,.0231,0,0,.9517,.0231,0,0,.9687,0,0,0,.9705,0,0,0,.9702,0,0,0,.9772,0,0,0,.9844,0,0,0
                ,.9829,0,0,0,.9844,0,0,0,.992,0,0,0,.9868,0,0,0,.9936,0,0,0,.8191,.14,0,0,.8794,.0909,0,0,.8138,.1394,.0032,0,.7723,.175,.0295,0,.9314,.0511,0,0,.9381,.0467,0,0,.8667,.1136,0,0,.9381,.0467
                ,0,0,.9574,.0224,0,0,.8771,.1167,0,0,.9652,.0146,0,0,.921,.0604,0,0,.9311,.0527,0,0,.9347,.0488,0,0,.9314,.0511,0,0,.9507,.0271,0,0,.9381,.0467,0,0,.9574,.0224,0,0,.9507,.0271,0,0,.9697,.0017,0,0
                ,.9652,.0146,0,0,.9697,.0017,0,0,.9757,0,0,0,.9987,0,0,0,.9956,0,0,0,.9897,0,0,0,.9844,0,0,0,.9959,0,0,0,.9839,0,0,0,.9843,0,0,0,.9987,0,0,0,.9959,0,0,0,.9983,0
                ,0,0,.9679,.0109,0,0,.9757,0,0,0,.9775,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.8876,.1087,0,0,.9877,0,0,0,.8876,.1087,0,0,.0915,.8919,0,0,.9775,0,0,0,.9877,0,0,0,.9687,0,0,0
                ,.9245,.057,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.8094,.1375,.02,0,.9582,.0129,0,0,.9582,.0129,0,0,.6178,.2816,.0556,.0277,.8094,.1375,.02,0,.5795,.2686,.0801,.0628,.3954,.3629,.1817,.0396,.0252,.0667,.8514,.0256,.0915,.8919,0,0,.9001,.0563
                ,0,0,.6152,.289,.0399,.0399,.2176,.518,.22,0,.2176,.518,.22,0,.0974,.0373,.701,.1407,.1897,.761,0,0,.9001,.0563,0,0,.0003,.4771,.1405,.3214,.2727,.4319,.1387,.1387,.8094,.1375,.02,0,.7805,.1746,0,0,.1402,.8191,0,0,.8191,.14,0,0
                ,.1538,.8047,0,0,.1245,.8399,0,0,.1402,.8191,0,0,.0935,.8786,0,0,.1402,.8191,0,0,.0901,.8832,0,0,.0903,.8828,0,0,.8191,.14,0,0,.1402,.8191,0,0,.0901,.8832,0,0,.0672,.9122,0,0,.8761,.0953,0,0,.8954,.0803
                ,0,0,.0779,.8985,0,0,.0903,.8828,0,0,.9245,.057,0,0,.074,.9019,0,0,.0673,.9122,0,0,.2312,.7543,0,0,.0231,.9611,0,0,.0074,.2579,.7097,0,.0231,.9611,0,0,.1278,.7677,.0888,0,.1803,.7897,0,0,.9495,0,0,0
                ,.0011,.9551,0,0,.4758,.5209,0,0,.0554,.8816,.0437,0,.1201,.8389,0,0,.0775,.9135,0,0,.9878,0,0,0,.4935,.5037,0,0,.0826,.9143,0,0,.0653,.0147,.8669,.0132,1.0025,0,0,0,.0231,.9631,0,0,.9607,.0106,0,0,.0011,.9551
                ,0,0,.7379,.1346,.0756,0,.8076,.1443,0,0,.8097,.1427,0,0,.8075,.1439,.0042,0,.7805,.1746,0,0,.8108,.1459,0,0,.8027,.1537,0,0,.8138,.1394,.0032,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8085,.1403,.0147,0,.8126,.141,.0014,0
                ,.8094,.1375,.02,0,.7832,.1644,.0255,0,.8024,.1482,.0081,0,.8117,.1415,.0006,0,.0672,.9122,0,0,.921,.0604,0,0,.0672,.9122,0,0,.921,.0604,0,0,.029,.2475,.0585,.6072,.2248,.1319,.5525,.0537,.2195,.0562,.185,.4939,.0892,.9072,0,0,.0907,.9087
                ,0,0,.0729,.9255,0,0,.4319,.5677,0,0,.1005,.8968,0,0,.6017,.1156,.275,0,.8944,.0752,0,0,.7739,.2167,0,0,.4763,.4772,.0277,0,.2054,.7578,0,0,.4104,.4104,.0863,.013,.0782,.0782,.7793,0,.7898,.0501,.0825,.0825,.2054,.7578,0,0
                ,.6812,.0959,.0123,.1189,.7898,.0501,.0825,.0825,.0716,.0312,.0691,.7956,.4638,.2051,.0239,.1392,.3435,.2081,.0372,.3342,.1598,.7112,.1128,0,.0279,.1516,.0533,.728,.1058,.1865,.053,.611,.4361,.1611,.0544,.3152,.0964,.1442,.0553,.6782,.9795,0,0,0,.9892,0,0,0,.99,0
                ,0,0,.9797,0,0,0,.9766,0,0,0,.9873,0,0,0,.9836,0,0,0,.163,.04,.7919,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.8731,.1033,0,0,.0231,.9611,0,0,.7451,.0641,.1908,0,.8731,.1033,0,0
                ,.7202,.0706,.2092,0,.8876,.0038,.0855,0,.9715,0,0,0,.8731,.1033,0,0,.9835,0,0,0,.2099,.2063,.5837,0,.9229,.0765,0,0,.0537,.9458,0,0,.9355,.0644,0,0,.0301,.9596,0,0,.9784,0,0,0,.1625,.1407,.6968,0,.99,0
                ,0,0,.9873,0,0,0,.9355,.0644,0,0,.9808,0,0,0,.9786,0,0,0,.9958,0,0,0,.9873,0,0,0,.9786,0,0,0,.9229,.0765,0,0,.0086,.0704,.8607,0,.9616,0,0,0,.0964,.1442,.0553,.6782,.0279,.1516,.0533,.728
                ,.0086,.0704,.8607,0,.029,.2475,.0585,.6072,.0716,.0312,.0691,.7956,.871,.1177,0,0,.1813,.8114,0,0,.9607,.0106,0,0,.7739,.2167,0,0,.7144,.2808,0,0,.1813,.8114,0,0,.9495,0,0,0,.9709,0,0,0,.8568,.0103,.1082,0,.8568,.0103
                ,.1082,0,.0868,.9125,0,0,.98,0,0,0,.9646,.0151,0,0,.7144,.2808,0,0,.9212,.0638,0,0,.0729,.9255,0,0,.0892,.9072,0,0,.0729,.9255,0,0,.9807,0,0,0,.871,.1177,0,0,.9739,0,0,0,.0204,.0178,.4647,.1702
                ,.0279,.1516,.0533,.728,.9086,.0878,0,0,.0868,.9125,0,0,.7379,.1548,.0658,0,.4,.039,.1418,.3823,.029,.2475,.0585,.6072,.0589,.1942,.2339,.4882,.6904,.2253,.0335,.0335,.2182,.072,.7098,0,.2099,.2063,.5837,0,.7202,.0706,.2092,0,.0792,.8381,.0827,0,.1625,.1407
                ,.6968,0,.7451,.0641,.1908,0,.0269,.9044,.0571,0,.0811,.8719,.0441,0,.0792,.8381,.0827,0,.8311,.1482,0,0,.2182,.072,.7098,0,.9739,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.8153,.014,.1271,0,.9739,0,0,0
                ,.9441,.0171,0,0,.98,0,0,0,.9646,.0151,0,0,.9807,0,0,0,.9709,0,0,0,.1063,.1803,.5163,.097,.0204,.0178,.4647,.1702,.9052,.0425,.0089,0,.4,.039,.1418,.3823,.8622,.0094,.081,0,.8622,.0094,.081,0,.9212,.0638,0,0,.4,.039
                ,.1418,.3823,.8311,.1482,0,0,.0811,.8719,.0441,0,.6031,.2393,.1382,0,.2976,.2148,.3321,.1261,.7157,.2754,0,0,.8876,.0038,.0855,0,.9715,0,0,0,.9708,.0137,0,0,.9966,0,0,0,.163,.04,.7919,0,.1837,.8099,0,0,.9836,0,0,0
                ,.9797,0,0,0,.9892,0,0,0,.9795,0,0,0,.657,.1395,.0286,.0792,.3435,.2081,.0372,.3342,.6812,.0959,.0123,.1189,.1626,.3122,.4785,0,.2886,.2316,.226,.226,.7379,.1548,.0658,0,.0843,.8355,.0492,0,.1628,.8095,0,0,.9616,0,0,0,.9958,0
                ,0,0,.2185,.7122,.0664,0,.9808,0,0,0,.0376,.9366,0,0,.689,.2658,.0262,0,.0283,.9097,0,0,.0537,.9458,0,0,.9784,0,0,0,.0301,.9596,0,0,.9835,0,0,0,.2185,.7122,.0664,0,.5933,.202,.202,0,.2185,.7122,.0664,0
                ,.1598,.7112,.1128,0,.9868,0,0,0,.8771,.1167,0,0,.9702,0,0,0,.9582,.0129,0,0,.7723,.175,.0295,0,.8094,.1375,.02,0,.8138,.1394,.0032,0,.9517,.0231,0,0,.9702,0,0,0,.9844,0,0,0,.9829,0,0,0,.8191,.14
                ,0,0,.7723,.175,.0295,0,.9381,.0467,0,0,.8667,.1136,0,0,.9652,.0146,0,0,.9347,.0488,0,0,.9347,.0488,0,0,.9311,.0527,0,0,.9507,.0271,0,0,.9416,.0373,0,0,.9314,.0511,0,0,.9574,.0224,0,0,.9697,.0017,0,0
                ,.9507,.0271,0,0,.9757,0,0,0,.9697,.0017,0,0,.9956,0,0,0,.9844,0,0,0,.9934,0,0,0,.9839,0,0,0,.9897,0,0,0,.9934,0,0,0,.9959,0,0,0,.9983,0,0,0,.9987,0,0,0,.9959,0
                ,0,0,.9897,0,0,0,.9934,0,0,0,.9775,0,0,0,.9757,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9956,0,0,0,.8876,.1087,0,0,.8771,.1167,0,0,.9877,0,0,0,.9868,0,0,0,.9416,.0373,0,0
                ,.9347,.0488,0,0,.9245,.057,0,0,.074,.9019,0,0,.9582,.0129,0,0,.9517,.0231,0,0,.3399,.4989,.1305,0,.2176,.518,.22,0,.2176,.518,.22,0,.0003,.4771,.1405,.3214,.7805,.1746,0,0,.8191,.14,0,0,.1538,.8047,0,0,.1402,.8191
                ,0,0,.0903,.8828,0,0,.1402,.8191,0,0,.8191,.14,0,0,.0672,.9122,0,0,.0903,.8828,0,0,.9245,.057,0,0,.0231,.9611,0,0,.2312,.7543,0,0,.9495,0,0,0,.0011,.9551,0,0,.9607,.0106,0,0,.0011,.9551,0,0
                ,.7805,.1746,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.1626,.3122,.4785,0,.0782,.0782,.7793,0,.0868,.9125,0,0,.2976,.2148,.3321,.1261,.2248,.1319,.5525,.0537,.7508,.1427,.0111,0,.1408,.6207,.1559,.0155,.0288,.606,.2026,.024,.1339,.1339
                ,.1218,.5291,.1058,.1865,.053,.611,.9739,0,0,0,.0892,.9072,0,0,.0907,.9087,0,0,.0729,.9255,0,0,.0907,.9087,0,0,.1005,.8968,0,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.8944,.0752,0,0,.8944,.0752,0,0,.7739,.2167,0,0
                ,.4763,.4772,.0277,0,.871,.1177,0,0,.2054,.7578,0,0,.6812,.0959,.0123,.1189,.4104,.4104,.0863,.013,.0782,.0782,.7793,0,.2054,.7578,0,0,.6031,.2393,.1382,0,.6904,.2253,.0335,.0335,.0716,.0312,.0691,.7956,.029,.2475,.0585,.6072,.3231,.009,.3193,.3193,.4638,.2051
                ,.0239,.1392,.3435,.2081,.0372,.3342,.4638,.2051,.0239,.1392,.4361,.1611,.0544,.3152,.1598,.7112,.1128,0,.3231,.009,.3193,.3193,.0279,.1516,.0533,.728,.9797,0,0,0,.9616,0,0,0,.9873,0,0,0,.9786,0,0,0,.9795,0,0,0,.9892,0,0,0
                ,.163,.04,.7919,0,.0301,.9596,0,0,.1612,.8364,0,0,.2182,.072,.7098,0,.0811,.8719,.0441,0,.2099,.2063,.5837,0,.8731,.1033,0,0,.9966,0,0,0,.9895,0,0,0,.1837,.8099,0,0,.0231,.9611,0,0,.9895,0,0,0,.8731,.1033
                ,0,0,.8876,.0038,.0855,0,.8731,.1033,0,0,.9715,0,0,0,.2182,.072,.7098,0,.0537,.9458,0,0,.9229,.0765,0,0,.1625,.1407,.6968,0,.9784,0,0,0,.99,0,0,0,.9355,.0644,0,0,.9786,0,0,0,.9873,0,0,0
                ,.9958,0,0,0,.9229,.0765,0,0,.9786,0,0,0,.9616,0,0,0,.0086,.0704,.8607,0,.0964,.1442,.0553,.6782,.0086,.0704,.8607,0,.2248,.1319,.5525,.0537,.029,.2475,.0585,.6072,.8624,.1355,0,0,.871,.1177,0,0,.9607,.0106,0,0,.1813,.8114
                ,0,0,.7739,.2167,0,0,.1813,.8114,0,0,.9495,0,0,0,.6017,.1156,.275,0,.8568,.0103,.1082,0,.8568,.0103,.1082,0,.98,0,0,0,.0868,.9125,0,0,.7144,.2808,0,0,.9646,.0151,0,0,.0892,.9072,0,0,.0729,.9255,0,0
                ,.9212,.0638,0,0,.9807,0,0,0,.9739,0,0,0,.871,.1177,0,0,.0279,.1516,.0533,.728,.0204,.0178,.4647,.1702,.0868,.9125,0,0,.1063,.1803,.5163,.097,.4,.039,.1418,.3823,.029,.2475,.0585,.6072,.0003,.4771,.1405,.3214,.1897,.761,0,0,.7202,.0706
                ,.2092,0,.0792,.8381,.0827,0,.7451,.0641,.1908,0,.0269,.9044,.0571,0,.8311,.1482,0,0,.9702,0,0,0,.9086,.0878,0,0,.9702,0,0,0,.9441,.0171,0,0,.9739,0,0,0,.9646,.0151,0,0,.98,0,0,0,.9709,0,0,0
                ,.0204,.0178,.4647,.1702,.1063,.1803,.5163,.097,.1445,.5927,.0873,.0681,.0288,.606,.2026,.024,.0294,.0294,.0125,.8252,.7508,.1427,.0111,0,.9052,.0425,.0089,0,.8622,.0094,.081,0,.4,.039,.1418,.3823,.2195,.0562,.185,.4939,.9212,.0638,0,0,.8622,.0094,.081,0,.4,.039
                ,.1418,.3823,.8311,.1482,0,0,.0589,.1942,.2339,.4882,.2886,.2316,.226,.226,.2727,.4319,.1387,.1387,.7157,.2754,0,0,.9715,0,0,0,.9966,0,0,0,.9708,.0137,0,0,.0811,.8719,.0441,0,.163,.04,.7919,0,.1837,.8099,0,0,.1612,.8364,0,0
                ,.9836,0,0,0,.9795,0,0,0,.9892,0,0,0,.7308,.1244,.1244,0,.689,.2658,.0262,0,.9797,0,0,0,.1408,.6207,.1559,.0155,.657,.1395,.0286,.0792,.4361,.1611,.0544,.3152,.1058,.1865,.053,.611,.3435,.2081,.0372,.3342,.6031,.2393,.1382,0,.4104,.4104
                ,.0863,.013,.2054,.7578,0,0,.6812,.0959,.0123,.1189,.0035,.1231,.0909,.3718,.2886,.2316,.226,.226,.2976,.2148,.3321,.1261,.7379,.1548,.0658,0,.8624,.1355,0,0,.1626,.3122,.4785,0,.0843,.8355,.0492,0,.9958,0,0,0,.9808,0,0,0,.0376,.9366,0,0
                ,.2185,.7122,.0664,0,.0283,.9097,0,0,.9784,0,0,0,.0537,.9458,0,0,.9835,0,0,0,.0301,.9596,0,0,.7308,.1244,.1244,0,.5933,.202,.202,0,.2185,.7122,.0664,0,.5933,.202,.202,0,.3231,.009,.3193,.3193,.1598,.7112,.1128,0,.9507,.0271
                ,0,0,.3399,.4989,.1305,0,.9582,.0129,0,0,.9702,0,0,0,.8094,.1375,.02,0,.7723,.175,.0295,0,.6152,.289,.0399,.0399,.6152,.289,.0399,.0399,.7805,.1746,0,0,.9311,.0527,0,0,.95,.0262,0,0,.9517,.0231,0,0,.95,.0262,0,0
                ,.9687,0,0,0,.9702,0,0,0,.9829,0,0,0,.9702,0,0,0,.9844,0,0,0,.9868,0,0,0,.9829,0,0,0,.8191,.14,0,0,.7723,.175,.0295,0,.8667,.1136,0,0,.7723,.175,.0295,0,.9381,.0467,0,0,.8771,.1167
                ,0,0,.8667,.1136,0,0,.9347,.0488,0,0,.9199,.0613,0,0,.9311,.0527,0,0,.9314,.0511,0,0,.9416,.0373,0,0,.9507,.0271,0,0,.9574,.0224,0,0,.9381,.0467,0,0,.9507,.0271,0,0,.9652,.0146,0,0,.9574,.0224,0,0
                ,.9697,.0017,0,0,.9987,0,0,0,.9934,0,0,0,.9844,0,0,0,.9934,0,0,0,.9934,0,0,0,.9897,0,0,0,.9843,0,0,0,.9839,0,0,0,.9843,0,0,0,.9897,0,0,0,.9987,0,0,0,.9983,0
                ,0,0,.9959,0,0,0,.9959,0,0,0,.9934,0,0,0,.9843,0,0,0,.9679,.0109,0,0,.9652,.0146,0,0,.9757,0,0,0,.8771,.1167,0,0,.9679,.0109,0,0,.9877,0,0,0,.9868,0,0,0,.8876,.1087,0,0
                ,.9775,0,0,0,.9687,0,0,0,.9843,0,0,0,.9347,.0488,0,0,.9416,.0373,0,0,.8138,.1394,.0032,0,.9245,.057,0,0,.9517,.0231,0,0,.0915,.8919,0,0,.5947,.2662,.0655,.0655,.6152,.289,.0399,.0399,.2176,.518,.22,0,.3399,.4989
                ,.1305,0,.1897,.761,0,0,.0003,.4771,.1405,.3214,.2176,.518,.22,0,.2727,.4319,.1387,.1387,.5947,.2662,.0655,.0655,.7805,.1746,0,0,.1538,.8047,0,0,.1538,.8047,0,0,.121,.8443,0,0,.0903,.8828,0,0,.121,.8443,0,0,.0901,.8832,0,0
                ,.8191,.14,0,0,.0901,.8832,0,0,.0673,.9122,0,0,.0903,.8828,0,0,.0672,.9122,0,0,.921,.0604,0,0,.9245,.057,0,0,.0673,.9122,0,0,.9199,.0613,0,0,.2312,.7543,0,0,.0231,.9611,0,0,.9495,0,0,0,.2312,.7543
                ,0,0,.0011,.9551,0,0,.9971,0,0,0,.9607,.0106,0,0,.0011,.9551,0,0,.7805,.1746,0,0,.8191,.14,0,0,.8138,.1394,.0032,0,.8138,.1394,.0032,0,.8094,.1375,.02,0,.8094,.1375,.02,0,.7723,.175,.0295,0,.0672,.9122,0,0
                ,.0672,.9122]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(1526);
                _i.set([319424776,168364039,319424776,168232459,463626,657163,168232459,168232459,168232459,3083,3083,3083,168364039,319424776,319424776,2571,657163,657163,470222341,329223,117835019,168232459,168232453,117835019,2571,657163,2571,117835019,470222341,470222341,2571,11,3083,12]);
                REPEAT(_i, 34, 8, 3083);
                _i.set([3340,3340,3340,3083,3083,3083,12,3083,3083,12,3083,3340,1051916,1051916,1051916,1051916,12,3340,1051916,12,3340,3340,920844,14,1052173,3340,1051916,1051916,3340,3340,1051916,1051916,1051916,3597,286264845,1052173,168298251,2571,2571,168364039,319293194,463626,657415,657163,168232459,319293194,319424519,657415,168298251,168298251
                ,168364039,470222341,505153029,470222341,470222341,470222341,470222341,470222341,470222341,505153029,1973253,470222341,470222341,1836549,470222341,1836549,1836549,28,28,28,7173,28,7173,7173,28,7452], 42);
                REPEAT(_i, 118, 10, 28);
                _i.set([7452,7452,7452,28,7452,7452,28,7452,28,7452,7452,7425,72962,29,7452,7452,7452,7452,7452,7452,258,258,258,7426,72962,258,29,72962,72962,29,72962,72962,2,2,258,2,2,2,7426,72962,72962,258,258,72962,269422093,3854,986637,3340,3597,986637
                ,986637,7426,258,2,258,72962,2,258,258,29,72962,7452,7452,29,29,28,7452,28,28,28,28,28,28,1836549,470222341,1836549,168364043,168364039,319424776,168298251,2571,2571,1118221,3340,920844,3340,3340,1051916,1051916,1051916,1051916,3083,3083,3340,3340,3083,3083,12,12,2571
                ,11,117835019,470222341,3083,3083,168232459,168232459,168232459,168364039,168364039,168364039,319424776,319424776,319424519,657415,657415], 128);
                REPEAT(_i, 244, 9, 72962);
                _i.set([258,11,11,11,657163,2571,11,12,12,117835019,117838859,168232453,657163,657163,168232459,168232459,657163,657163,168232459,657163,657163,72962,72962,657415,168298251,319424776,319424776,319424776,258,2,258,7426,7426,72962,29,72962,258,7452,28,28,7173,1973253,1973253,28,470222341,470222341,470222341,470222341,134681354,117838602
                ,657163,2571,2571,319424776,657163,2571,1973253,7173,7173,1973253,28,7173,1973253,28,7173,7173,1973253,7173,28,1973253,7452,29,1973253,1973253,1973253,470222341,9,9,2057,2057,2057,657417,9,2057,657417,657417,9,2057,2057,657417,319424521,657417,2057,2057,319424521,2057,2057,2057,2057,9
                ,2057,9,9,2057,9,9,9,9,9,9,2057,2057,657417,657417,2057,657417,2057,2057,657417], 253);
                REPEAT(_i, 372, 15, 2057);
                REPEAT(_i, 387, 12, 9);
                _i.set([2057,9,2057,2057,9,2057,2057,9,9,9,2057,2057,2057,2057,657417,319424521,319424521,168298249,1800,319424521,319424521,657417,657417,657417,168298249,2055,168364039,657417,657417,2057], 399);
                REPEAT(_i, 429, 8, 2312);
                _i.set([2057,2057,2312,2312,2057,2312,2312,2057,2057,2312,3854,3854,3854,986637,986637,14,3854,3854,3597,4368,4108,286264588,1118221,4368,17,17,4368,4368,17,4368,3597,3597,2057,2057,2057,657417,2057,2057,2057,2057,657417,2057], 437);
                REPEAT(_i, 479, 8, 657417);
                _i.set([2057,657417,169019656,319358983,319358983,319227412,463626,117838859,319227412,319227412,319227412,5396,5396,5396,319358983,169019656,319358996,1246996,4884,1246996,117835028,470222341,503776773,117835028,117838602,319227412,4884,1246996,319227412,503776773,319227397,117835028,4884,4884,21], 487);
                REPEAT(_i, 522, 8, 5396);
                _i.set([5653,5653,5653,5396,5396,21,5396,5396,21,5396,5396,1709589,5653,1709589,1709589,1709589,21,5653,21,5653,5653,23,1512981,1709846,1709589,5653,5653,1709589,5653,1709589,1709589,1709589,5910,454694678,1709589,319293204,4884,134681354,168364039,1247239,463626,1246996,168298259,319424519,319424519,319293204,319293204,319293204,471729669,470222341
                ,503776773,503776773,470222341,470222341,503776773,117835028,1842693,505153029,503776773,503776773,503776773,503776773,1967621,503776773,30,30,30,1967621,7685,1967621,7685,7966,30,30,30,30,30,30,30,7685,30,30,30,7966,7966,7966,30,7966,30,30,30,30,7966,30,204548,7939,31,7966,7966,7966
                ,7966,7966,7966,772,772,772,772,31,7940,31,204548,31,31,204548,31,4,4,4,4,4,7940,204548,7940,204548,772,772,204548,6167,437786390,1578774,1512981,5653,1578774,5910,1578774,772,204548,204548,204548,772,4,772,204548,31,7966,7966,7966,31,30,7966
                ,30,30,30,30,30,30,1967621,503776773,1967621,503776773,319358983,4884,319293204,1776150,5653,5653,5653,5653,1709589,21,1709589,5396,5396,5653,5396,5396,21,5396,20,4884,117835028,5396,5396,319227412,319227412,1246996,319358983,319358983,319293204,169019656,169019656,1247239,2055,319424519], 530);
                REPEAT(_i, 724, 12, 204548);
                _i.set([772,20,5396,20,20,1246996,4884,1246996,20,4884,21,21,21,21,5396,319227412,168232453,329223,319227412,1246996,319227412,1246996,1246996,1246996,319227412,1246996,1246996,772,204548,319293204,1247239,319424776,169019656,772,4,204548,7940,7940,204548,204548,204548,772,7966,30,7966,30,1973253,7685,470222341,1973253
                ,470222341,503776773,503776773,134681354,117838602,4884,168298259,168364039,169019656,1246996,1246996,1842693,7685,1842693,7685,30,7685,1842693,1842693,7685,7685,1842693,7685,30,1842693,7966,7966,31,7966,1973253,1842693,1842693,1973253,1842693,1842693,470222341,9,9,9,2057,2057,2057,2057,9,1247241,1247241,2057,9,2057,169019401
                ,1247241,1247241,319424521,2057,1247241,2057,2057,2057,2057], 736);
                REPEAT(_i, 845, 10, 9);
                _i.set([2057,2057,1247241,1247241], 855);
                REPEAT(_i, 859, 18, 2057);
                REPEAT(_i, 877, 11, 9);
                _i.set([2057,9,9,2057,2057,2057,9,2057,2057,9,9,9,2057,2057,2057,1247241,2057,2057,169019401,1247241,169019401,169019401,319293193,2057,1800,319424521,1247241,1247241,319293193,2055,1800,319358983,319424776,1247241,2057,2312,2057,2312,2312,2312,2312,2312,2312,2312,2057,2312,2312,2312,2057,2057
                ,2312,2312,2057,2312,2312,6167,6167,1578774,6167,1578774,6167,23,5910,6938,1776150,6677,6938,27,6938,6938,454694421,27,6938,5910,5910,1709846,2057,2057,1247241,2057,2057,2057,1247241,2057,1247241,1247241,1247241,1247241,1247241,1247241,1247241,2312,2057,2312,2057,168364039,319424776,168232459,3083,3083
                ,3083,3083,3083,1051916,3340,3340,1051916,2571,134681354,463626,319424519,2571,319293194,319424519,168298251,470222341,470222341,1973253,470222341,470222341,470222341,470222341,28,28,28,28,28,28,28,72962,2,2,258,258,3854,72962,258,72962,72962,2,258,29,72962,7452,7452,7452,7452,29,72962,28
                ,28,7452,28,28,28,28,28,7452,1836549,28,470222341,470222341,1836549,168364039,168298251,2571,3340,3597,3340,3340,3340,14,12,1051916,1051916,3083,12,3340,3340,3083,3083,3083,3083,12,2571,11,117835019,470222341,3083,3083,657163,168232459,168364039,168298251,319424519], 888);
                REPEAT(_i, 1083, 9, 72962);
                _i.set([258,72962,11,3083,11,2571,657163,11,2571,12,3340,12,12,168232459,117835019,657163,168232459,657163,657163,3083,168232459,258,72962,657415,319424776,258,72962,2,7426,2,72962,258,28,28,28,28,470222341,470222341,319293194,657163,319424776,657163,1973253,7173,28,28,1973253,28,7173,1973253
                ,7173,7452,29,7452,29,1973253,1973253,1973253,1973253,9,2057,9,2057,657417,657417,657417,2057,9,9,9,2057,657417], 1092);
                REPEAT(_i, 1164, 12, 2057);
                _i.set([9,2057], 1176);
                REPEAT(_i, 1178, 14, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,2057,2057,2312,2057,2057,657417,657417,657417,168364039,2057,2057,2312,2312,2312,2312,2057,2312,2312,2057,3854,3854,14,3597,3597,3597,2057,657417,657417,657417,1246996,463626,5396,169019656,169019656,329223,470222341,168232453,117838602,503776773,20,5396,5396
                ,5396,5396,5396,1709589,1709589,5653,5653,5653,1709589,4884,4884,168298259,134681354,463626,4884,1247239,319424519,319293204,319358983,505153029,470222341,503776773,470222341,503776773,1842693,505153029,503776773,30,30,30,30,30,30,204548,7966,772,204548,204548,204548,772,4,4,772,6167,4,772,204548,772,4,204548
                ,7966,7966,204548,31,30,7966,30,30,30,7966,30,30,1967621,503776773,1967621,169019656,319358983,4884,4884,5910,5653,5653,5653,23,1709589,1709589,1709589,21,5396,5653,5653,5396,5396,5396,21,20,4884,503776773,117835028,5396,319227412,319227412,319358983,319358983,2055,204548,204548,204548,204548,772
                ,20,5396,20,4884,20,5653,21,21,117835028,319227412,470222341,168232453,117838859,329223,1246996,1246996,319227412,319227412,5396,1246996,319227412,772,319293204,319424776,319424776,772,4,4,7940,204548,204548,772,772,30,30,30,1973253,1842693,30,470222341,470222341,503776773,503776773,503776773,1247239,134681354,4884,168298259,168364039,319424776
                ,169019656,1246996,4884,1246996,1842693,30,30,7685,1842693,7685,31,7966,31,7966,1973253,1973253,1842693,1973253,505153029,1842693,2057,1247241,2057,9,1247241,1247241,319424521,319424521,2057,2057,2057,2057,2057,9,9,9,9,9,9,9,2057,1247241,2057,1247241], 1192);
                REPEAT(_i, 1436, 15, 2057);
                REPEAT(_i, 1451, 16, 9);
                _i.set([2057,2057,9,2057,2057,9,9,2057,9,9,9,2057,2057,1247241,2057,2057,2057,319424521,319424521,1247241,1247241,2055,319358983,1247241,319424776,319424521,2057,2312,2312,2312,2312,2312,2312,2057,2312,2312,2312,2312,2057,2057,2312,2057,6167,6167,23,6167,5910,27,5910,5910
                ,2057,2057,1247241,1247241,1247241,1247241,1247241], 1467);
                REPEAT(_i, 1524, 2, 2312);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                _i = new Float32Array(6104);
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
                _i.set([.0792,0,0,0,.0792,0,0,0,.0155], 1188);
                _i.set([.0158], 1964);
                _i.set([.0746], 1980);
                _i.set([.1473,0,0,0,0,0,0,0,.0063], 2004);
                _i.set([.0073,0,0,0,.0155,0,0,0,0,0,0,0,.0629,.0367,0,0,0,0,0,0,.0642], 2028);
                _i.set([.2109,0,0,0,.0084,.2572], 2068);
                _i.set([.3718], 2272);
                _i.set([.1392,0,0,0,.0526,0,0,0,.0158,0,0,0,.1392,0,0,0,.0681,0,0,0,0,0,0,0,.2225], 2316);
                _i.set([.0033], 2356);
                _i.set([.0158], 2760);
                _i.set([.0084,.2572], 2840);
                _i.set([.0608], 2852);
                _i.set([.0158], 2864);
                _i.set([.0746,0,0,0,.024,.0016,.0016,0,0,0,0,0,.0584], 3004);
                _i.set([.0792,0,0,0,0,0,0,0,.0155], 3136);
                _i.set([.3718], 3172);
                _i.set([.0792], 3284);
                _i.set([.0158], 3932);
                _i.set([.1392,0,0,0,.0526], 4012);
                _i.set([.0158], 4204);
                _i.set([.0084,.2572], 4296);
                _i.set([.0158], 4320);
                _i.set([.0746,0,0,0,.0084,.2572], 4420);
                _i.set([.0792,0,0,0,.0526], 4512);
                _i.set([.0155,0,0,0,.024,.0016,.0016], 4940);
                _i.set([.0158,0,0,0,0,0,0,0,.1392,0,0,0,.0526,0,0,0,.1392], 5040);
                _i.set([.0158], 5232);
                _i.set([.0084,.2572,0,0,0,0,0,0,.0746,0,0,0,0,0,0,0,.0158], 5320);
                _i.set([.0084,.2572,0,0,.0746,0,0,0,.0681,0,0,0,.024,.0016,.0016], 5400);
                _i.set([.0155,0,0,0,.0792], 5524);
                _i.set([.0526], 5540);
                _i.set([.3718], 5560);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsExtraKind, _i, false);

                _i = new Uint32Array(1526);
                _i.set([0,0,0,0,0,0,0,28,28,0,0,0,19,0,0,0,0,0,0,0,28,19,1973267,7178,0,0,0,7178]);
                _i.set([19], 81);
                _i.set([11,30,0,30,30,30,30,0,0,0,0,0,30], 92);
                _i.set([19,11], 204);
                _i.set([28,0,0,0,28,0,28,11], 229);
                _i.set([7178,0,28], 262);
                _i.set([30,30,30], 297);
                _i.set([20,0,0,0,30,0,0,0,0,0,10,0,10,0,0,0,30,30,0,7699,0,10,0,0,0,0,30,7699], 491);
                _i.set([19], 568);
                _i.set([30,28,28,30,30,0,30,0,0,0,28], 579);
                _i.set([20], 690);
                _i.set([7699,0,0,30,0,0,20], 710);
                _i.set([30,1973267,0,30], 751);
                _i.set([30,0,30,0,0,0,0,0,0,19], 784);
                _i.set([30], 821);
                _i.set([11], 983);
                _i.set([30,30], 1003);
                _i.set([11], 1051);
                _i.set([7178,0,0,0,0,0,11], 1074);
                _i.set([28,7178], 1105);
                _i.set([30,30], 1128);
                _i.set([30,1973267], 1235);
                _i.set([20,0,30,28,30], 1260);
                _i.set([20], 1308);
                _i.set([7699,0,30,0,20], 1330);
                _i.set([7699,30,30,1973267], 1350);
                _i.set([30,30,0,0,28,0,0,0,0,19], 1381);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesExtraKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.texture");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 1526, 0, 3258, this);
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
                    -.1178,2.8605,.358,.0622,2.8646,.3355,-.1233,2.8673,.3813,-.1021,2.6608,-.292,.061,2.5572,-.3215,.0596,2.6923,-.3152,.0596,2.6923,-.3152,-.1073,2.6551,-.3118,-.1021,2.6608,-.292,-.3681,2.6739,-.1372,-.283,2.648,-.2772,-.392,2.6715,-.1459,-.1091,2.3615,-.2997,.1152,2.4347,-.3502,.061,2.5572,-.3215,.3526,2.7319,-.0609,.2288,2.6744,-.2627
                    ,.3888,2.67,-.0652,.2333,2.6477,.2806,.4059,2.5873,.2038,.2813,2.4819,.3094,.327,1.9162,-.6204,.3199,1.5535,-.6931,.432,1.5942,-.7149,.3888,2.67,-.0652,.2893,2.5452,-.3211,.4647,2.5223,-.1276,.4874,2.419,.1523,.3444,2.332,.2786,.4876,1.9616,-.6002,.6919,1.8267,-.4629,.6576,1.9331,-.4155,.5607,1.7454,-.0377,.7544,1.5325,-.3073
                    ,.6211,1.4473,-.1986,.7782,1.4109,-.3345,.6328,1.3435,-.2336,.3533,1.4452,-.7348,.4674,1.4782,-.7589,.5697,1.6271,-.6944,.7274,1.7086,-.4774,.6972,1.8376,-.1485,.4059,2.5873,.2038,.3767,2.6655,.1951,-.3968,2.8696,.0766,-.3791,2.8648,-.1276,-.3546,2.8575,-.1223,.6082,1.4976,-.7249,.4663,1.3909,-.1635,.4836,1.2973,-.1982,.3478,1.6651,.0114
                    ,.136,2.2339,.3519,.071,2.3726,.3915,.0563,2.6595,.331,.061,2.5572,-.3215,.2288,2.6744,-.2627,.05,2.868,-.3305,.2166,2.8851,-.2539,.2008,2.8784,-.2332,.2333,2.6477,.2806,.0614,2.6529,.3514,.2498,2.6377,.2983,.2112,2.737,-.2252,.1152,2.4347,-.3502,.4876,1.9616,-.6002,.2893,2.5452,-.3211,.3444,2.332,.2786,.3478,1.6651,.0114
                    ,.136,2.2339,.3519,.4647,2.5223,-.1276,.6972,1.8376,-.1485,.4874,2.419,.1523,.4874,2.419,.1523,.5607,1.7454,-.0377,.3444,2.332,.2786,.2893,2.5452,-.3211,.6576,1.9331,-.4155,.4647,2.5223,-.1276,-.0297,2.3034,-.3283,.327,1.9162,-.6204,.1152,2.4347,-.3502,-.294,2.7077,.3128,-.1298,2.671,.3705,-.1238,2.6751,.3492,-.2733,2.4927,-.2561
                    ,-.2662,2.6532,-.2603,.3866,2.8552,.1764,.252,2.8557,.2942,.2343,2.8495,.2789,-.4367,2.7092,.0695,-.313,2.7094,.3323,-.333,2.3253,-.219,-.2733,2.4927,-.2561,-.4417,2.6429,.0858,-.3681,2.6739,-.1372,-.4097,2.7079,.0652,-.1238,2.6751,.3492,-.3139,2.644,.3412,-.294,2.7077,.3128,-.6039,1.7415,-.137,-.6023,1.3764,-.0768,-.4703,1.6852,-.1659
                    ,-.4417,2.6429,.0858,-.4758,2.4304,-.1302,-.4013,2.5867,-.1545,-.1466,2.5505,.4032,-.3958,2.4827,.3897,-.3139,2.644,.3412,-.8296,1.746,.2026,-.7354,1.8066,-.055,-.7853,1.858,.1873,-.4941,1.7979,.5019,-.7779,1.5277,.4564,-.6755,1.8611,.4518,-.6008,1.4707,.5043,-.8013,1.4063,.4882,-.7132,1.4185,-.0513,-.6421,1.2658,-.0571,-.8566,1.6336,.2484
                    ,-.8239,1.4696,.0235,-.0297,2.3034,-.3283,-.1901,2.2271,-.2555,.1922,1.8613,-.5945,-.1901,2.2271,-.2555,-.4703,1.6852,-.1659,-.3139,2.644,.3412,-.5265,2.4873,.1217,-.4417,2.6429,.0858,-.294,2.7077,.3128,-.2662,2.6532,-.2603,-.7551,1.3,-.0298,-.4452,1.4142,.4731,-.6196,1.3612,.5185,-.2806,1.7162,.4573,-.2055,2.4107,.4463,-.2733,2.4927,-.2561
                    ,.3526,2.7319,-.0609,.2279,2.7395,-.2428,.2112,2.737,-.2252,-.2798,2.8576,-.2872,-.2632,2.8511,-.2699,-.4013,2.5867,-.1545,-.3681,2.6739,-.1372,-.7354,1.8066,-.055,-.333,2.3253,-.219,-.4758,2.4304,-.1302,.0004,2.2568,.4068,-.4941,1.7979,.5019,-.2055,2.4107,.4463,-.6755,1.8611,.4518,-.5265,2.4873,.1217,-.3958,2.4827,.3897,.0004,2.2568,.4068
                    ,-.4941,1.7979,.5019,-.3958,2.4827,.3897,-.2055,2.4107,.4463,-.7853,1.858,.1873,-.4758,2.4304,-.1302,-.5265,2.4873,.1217,-.6039,1.7415,-.137,-.1901,2.2271,-.2555,-.333,2.3253,-.219,-.4696,1.3146,.487,-.2806,1.7162,.4573,.136,2.2339,.3519,.3478,1.6651,.0114,-.1238,2.6751,.3492,-.3546,2.8575,-.1223,-.2723,2.9156,-.2731,-.3716,2.9195,-.1354
                    ,.2343,2.8495,.2789,.0643,2.9222,.325,.2439,2.9151,.2776,.3866,2.8552,.1764,.3965,2.9194,.1682,.05,2.868,-.3305,-.1097,2.9194,-.3097,-.1058,2.8542,-.3022,-.3546,2.8575,-.1223,-.41,2.9295,.0743,-.3968,2.8696,.0766,.05,2.868,-.3305,.1961,2.9371,-.267,.0499,2.9293,-.3407,-.2994,2.8727,.3364,-.2998,2.9352,.3524,.0558,2.8583,.3164
                    ,-.1135,2.9246,.369,-.1178,2.8605,.358,.2008,2.8784,-.2332,.3395,2.9364,-.1098,.3377,2.8771,-.0816,-.2632,2.8511,-.2699,.3631,2.8845,-.0916,.2279,2.7395,-.2428,.3788,2.7344,-.0684,-.1113,2.8607,-.3227,.066,2.6893,-.338,.0553,2.8749,-.354,.252,2.8557,.2942,.4038,2.6614,.2052,.2498,2.6377,.2983,.4149,2.8621,.1822,.252,2.8557,.2942
                    ,.0614,2.6529,.3514,.0622,2.8646,.3355,.2279,2.7395,-.2428,.2166,2.8851,-.2539,-.4367,2.7092,.0695,-.3791,2.8648,-.1276,-.4233,2.8773,.083,-.2798,2.8576,-.2872,-.1073,2.6551,-.3118,-.1233,2.8673,.3813,-.313,2.7094,.3323,-.3179,2.8803,.3603,-.313,2.7094,.3323,.0622,2.8646,.3355,-.1298,2.671,.3705,-.1233,2.8673,.3813,-.392,2.6715,-.1459
                    ,-.2798,2.8576,-.2872,-.3791,2.8648,-.1276,.3767,2.6655,.1951,.4038,2.6614,.2052,.3377,2.8771,-.0816,.3631,2.8845,-.0916,-.1113,2.8607,-.3227,-.1058,2.8542,-.3022,.0596,2.6923,-.3152,.066,2.6893,-.338,.0558,2.8583,.3164,.3631,2.8845,-.0916,.4149,2.8621,.1822,-.1113,2.8607,-.3227,.0553,2.8749,-.354,.3767,2.6655,.1951,.3788,2.7344,-.0684
                    ,.3526,2.7319,-.0609,-.4097,2.7079,.0652,-.2994,2.8727,.3364,-.3179,2.8803,.3603,.0563,2.6595,.331,-.2994,2.8727,.3364,-.4233,2.8773,.083,.0558,2.8583,.3164,-.1091,2.3615,-.2997,.0596,2.6923,-.3152,.066,2.6893,-.338,-.2662,2.6532,-.2603,-.0297,2.3034,-.3283,.1922,1.8613,-.5945,.3888,2.67,-.0652,.2288,2.6744,-.2627,.4059,2.5873,.2038
                    ,.4059,2.5873,.2038,.3888,2.67,-.0652,-.4233,2.8773,.083,.061,2.5572,-.3215,.0553,2.8749,-.354,.2333,2.6477,.2806,.0563,2.6595,.331,.1152,2.4347,-.3502,.327,1.9162,-.6204,.4876,1.9616,-.6002,.3444,2.332,.2786,.5607,1.7454,-.0377,.3478,1.6651,.0114,.4647,2.5223,-.1276,.6576,1.9331,-.4155,.6972,1.8376,-.1485,.4874,2.419,.1523
                    ,.6972,1.8376,-.1485,.5607,1.7454,-.0377,.2893,2.5452,-.3211,.4876,1.9616,-.6002,.6576,1.9331,-.4155,.327,1.9162,-.6204,-.1091,2.3615,-.2997,.4149,2.8621,.1822,-.4097,2.7079,.0652,-.4013,2.5867,-.1545,-.3681,2.6739,-.1372,-.1238,2.6751,.3492,-.4417,2.6429,.0858,.1922,1.8613,-.5945,-.8605,1.3429,.062,-.1901,2.2271,-.2555,-.3139,2.644,.3412
                    ,-.294,2.7077,.3128,-.2662,2.6532,-.2603,-.1021,2.6608,-.292,.0004,2.2568,.4068,-.2733,2.4927,-.2561,.3526,2.7319,-.0609,.3788,2.7344,-.0684,-.4013,2.5867,-.1545,-.7354,1.8066,-.055,-.6039,1.7415,-.137,-.333,2.3253,-.219,-.2806,1.7162,.4573,-.4941,1.7979,.5019,-.6755,1.8611,.4518,-.7853,1.858,.1873,-.5265,2.4873,.1217,-.4941,1.7979,.5019
                    ,-.6755,1.8611,.4518,-.3958,2.4827,.3897,-.7853,1.858,.1873,-.7354,1.8066,-.055,-.4758,2.4304,-.1302,-.6039,1.7415,-.137,-.4703,1.6852,-.1659,-.1901,2.2271,-.2555,-.2806,1.7162,.4573,.136,2.2339,.3519,-.3546,2.8575,-.1223,-.2632,2.8511,-.2699,.2343,2.8495,.2789,.3866,2.8552,.1764,.2343,2.8495,.2789,.05,2.868,-.3305,-.3546,2.8575,-.1223
                    ,.05,2.868,-.3305,.2008,2.8784,-.2332,-.3968,2.8696,.0766,-.1178,2.8605,.358,.2008,2.8784,-.2332,.3866,2.8552,.1764,-.2632,2.8511,-.2699,.2166,2.8851,-.2539,.2279,2.7395,-.2428,-.1073,2.6551,-.3118,.252,2.8557,.2942,.252,2.8557,.2942,.2498,2.6377,.2983,.0614,2.6529,.3514,.2279,2.7395,-.2428,-.4367,2.7092,.0695,-.392,2.6715,-.1459
                    ,-.3791,2.8648,-.1276,-.2798,2.8576,-.2872,-.283,2.648,-.2772,-.1073,2.6551,-.3118,-.1233,2.8673,.3813,-.1298,2.671,.3705,-.313,2.7094,.3323,-.313,2.7094,.3323,-.4367,2.7092,.0695,.0622,2.8646,.3355,.0614,2.6529,.3514,-.1298,2.671,.3705,-.392,2.6715,-.1459,-.283,2.648,-.2772,-.2798,2.8576,-.2872,.3767,2.6655,.1951,.2333,2.6477,.2806
                    ,.3377,2.8771,-.0816,-.1113,2.8607,-.3227,.0596,2.6923,-.3152,.2112,2.737,-.2252,.3377,2.8771,-.0816,.3631,2.8845,-.0916,-.1058,2.8542,-.3022,-.1113,2.8607,-.3227,.3767,2.6655,.1951,.4038,2.6614,.2052,.3788,2.7344,-.0684,-.4097,2.7079,.0652,-.2994,2.8727,.3364,-.2994,2.8727,.3364,-.3179,2.8803,.3603,-.4233,2.8773,.083
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
                    .0492,.7992,.599,.1279,.8253,.5499,.0601,.7222,.6891,-.0216,-.7714,-.6359,-.0551,.1325,-.9897,.2697,-.7769,-.5689,.2697,-.7769,-.5689,-.0131,-.8104,-.5856,-.0216,-.7714,-.6359,-.7313,-.6496,-.2077,-.373,-.7371,-.5634,-.714,-.6632,-.2246,-.2926,-.0096,-.9561,-.1814,.2657,-.9468,-.0551,.1325,-.9897,.7028,-.5708,-.4245,.4372,.4864,-.7565
                    ,.8343,.5043,-.2225,.2402,-.7759,.5833,.7864,.306,.5365,.435,.1275,.8913,-.1396,.3292,-.9339,-.418,.1661,-.8931,-.1032,.2877,-.9521,.8343,.5043,-.2225,.3579,.4921,-.7935,.8465,.471,-.2479,.8713,.1793,.4568,.5339,-.1046,.839,.3682,.4365,-.8209,.8712,.3431,-.3511,.8536,.4208,-.3069,.5336,-.277,.7991,.922,.0427,.3849
                    ,.5122,-.2598,.8186,.7981,-.0136,.6024,.4594,-.2383,.8557,-.4089,.2117,-.8877,-.0691,.3034,-.9503,.4085,.3462,-.8445,.9199,.3058,-.2452,.9235,.0598,.3788,.7864,.306,.5365,.64,-.7627,.0934,-.5918,.8056,.0258,-.5597,.7861,-.262,-.5877,.7585,-.2814,.3931,.3195,-.8621,.4383,-.2828,.8531,.4256,-.2447,.8712,.453,-.32,.8321
                    ,.4244,-.1795,.8875,.2926,.0531,.9547,.0978,-.7445,.6604,-.0551,.1325,-.9897,.4372,.4864,-.7565,.0045,.8373,-.5466,.3945,.7612,-.5146,.4697,.699,-.5391,.2402,-.7759,.5833,.051,-.7648,.6423,.2428,-.819,.5199,.6166,-.5273,-.5846,-.1814,.2657,-.9468,.3682,.4365,-.8209,.3579,.4921,-.7935,.5339,-.1046,.839,.453,-.32,.8321
                    ,.4244,-.1795,.8875,.8465,.471,-.2479,.9235,.0598,.3788,.8713,.1793,.4568,.8713,.1793,.4568,.5336,-.277,.7991,.5339,-.1046,.839,.3579,.4921,-.7935,.8536,.4208,-.3069,.8465,.471,-.2479,-.3848,.1795,-.9054,-.1396,.3292,-.9339,-.1814,.2657,-.9468,-.554,-.6548,.5141,-.1056,-.7549,.6472,-.1276,-.6575,.7425,-.4048,.0038,-.9144
                    ,-.2568,-.8403,-.4773,.3451,.9121,.2211,.2516,.7584,.6013,.2442,.8428,.4796,-.8088,-.5756,.12,-.5334,-.6148,.581,-.3992,-.0073,-.9168,-.4048,.0038,-.9144,-.8792,.4705,.0747,-.7313,-.6496,-.2077,-.7711,-.624,.1269,-.1276,-.6575,.7425,-.4813,.4754,.7364,-.554,-.6548,.5141,-.3952,-.033,-.918,-.4183,-.0422,-.9073,-.4102,-.026,-.9116
                    ,-.8792,.4705,.0747,-.7641,.2469,-.596,-.7805,.2888,-.5544,.0455,.3131,.9486,-.5309,.3991,.7476,-.4813,.4754,.7364,-.9554,.2917,.0454,-.7747,.1681,-.6096,-.9244,.3786,.0455,-.0231,.0582,.998,-.5995,.2602,.7569,-.6049,.2738,.7477,-.0012,.0834,.9965,-.3757,.2703,.8864,-.4191,-.0566,-.9062,-.3832,-.0283,-.9232,-.9415,.2927,.1666
                    ,-.8088,.0839,-.582,-.3848,.1795,-.9054,-.4013,.0384,-.9151,-.4225,.1978,-.8845,-.4013,.0384,-.9151,-.4102,-.026,-.9116,-.4813,.4754,.7364,-.8935,.4426,.076,-.8792,.4705,.0747,-.554,-.6548,.5141,-.2568,-.8403,-.4773,-.4491,-.038,-.8927,.3817,-.0482,.923,.0623,.1162,.9912,.3725,-.1443,.9167,.0147,.1787,.9838,-.4048,.0038,-.9144
                    ,.7028,-.5708,-.4245,.557,-.6104,-.5631,.6166,-.5273,-.5846,-.367,.6974,-.6155,-.276,.8736,-.4007,-.7805,.2888,-.5544,-.7313,-.6496,-.2077,-.7747,.1681,-.6096,-.3992,-.0073,-.9168,-.7641,.2469,-.596,.2754,-.0464,.9602,-.0231,.0582,.998,.0147,.1787,.9838,-.6049,.2738,.7477,-.8935,.4426,.076,-.5309,.3991,.7476,.2754,-.0464,.9602
                    ,-.0231,.0582,.998,-.5309,.3991,.7476,.0147,.1787,.9838,-.9244,.3786,.0455,-.7641,.2469,-.596,-.8935,.4426,.076,-.3952,-.033,-.918,-.4013,.0384,-.9151,-.3992,-.0073,-.9168,.3945,.0269,.9185,.3725,-.1443,.9167,.4244,-.1795,.8875,.453,-.32,.8321,-.1276,-.6575,.7425,-.5877,.7585,-.2814,-.5847,-.1469,-.7978,-.8744,-.3175,-.367
                    ,.2442,.8428,.4796,.2215,-.1433,.9646,.4278,-.0363,.9031,.3451,.9121,.2211,.9503,-.105,.293,.0045,.8373,-.5466,-.1859,-.122,-.9749,-.1615,.7757,-.6101,-.5877,.7585,-.2814,-.9734,-.2138,.0819,-.5918,.8056,.0258,.0045,.8373,-.5466,.5861,-.3369,-.7369,.1509,-.161,-.9753,-.282,.8823,.3767,-.5606,-.2085,.8014,.1698,.7491,.6403
                    ,.0568,-.1805,.9819,.0492,.7992,.599,.4697,.699,-.5391,.8279,-.2602,-.4967,.5815,.7937,-.1787,-.276,.8736,-.4007,.595,.75,-.2889,.557,-.6104,-.5631,.7249,-.571,-.3854,-.1549,.774,-.614,.2626,-.6999,-.6641,.0767,.6932,-.7166,.2516,.7584,.6013,.6963,-.6612,.2791,.2428,-.819,.5199,.686,.6606,.3048,.2516,.7584,.6013
                    ,.051,-.7648,.6423,.1279,.8253,.5499,.557,-.6104,-.5631,.3945,.7612,-.5146,-.8088,-.5756,.12,-.5597,.7861,-.262,-.6551,.7528,.0638,-.367,.6974,-.6155,-.0131,-.8104,-.5856,.0601,.7222,.6891,-.5334,-.6148,.581,-.4459,.6339,.6319,-.5334,-.6148,.581,.1279,.8253,.5499,-.1056,-.7549,.6472,.0601,.7222,.6891,-.714,-.6632,-.2246
                    ,-.367,.6974,-.6155,-.5597,.7861,-.262,.64,-.7627,.0934,.6963,-.6612,.2791,.5815,.7937,-.1787,.595,.75,-.2889,-.1549,.774,-.614,-.1615,.7757,-.6101,.2697,-.7769,-.5689,.2626,-.6999,-.6641,.1698,.7491,.6403,.595,.75,-.2889,.686,.6606,.3048,-.1549,.774,-.614,.0767,.6932,-.7166,.64,-.7627,.0934,.7249,-.571,-.3854
                    ,.7028,-.5708,-.4245,-.7711,-.624,.1269,-.282,.8823,.3767,-.4459,.6339,.6319,.0978,-.7445,.6604,-.282,.8823,.3767,-.6551,.7528,.0638,.1698,.7491,.6403,-.2926,-.0096,-.9561,.2697,-.7769,-.5689,.2626,-.6999,-.6641,-.2568,-.8403,-.4773,-.3848,.1795,-.9054,-.4225,.1978,-.8845,.8343,.5043,-.2225,.4372,.4864,-.7565,.7864,.306,.5365
                    ,.7864,.306,.5365,.8343,.5043,-.2225,-.6551,.7528,.0638,-.0551,.1325,-.9897,.0767,.6932,-.7166,.2402,-.7759,.5833,.0978,-.7445,.6604,-.1814,.2657,-.9468,-.1396,.3292,-.9339,.3682,.4365,-.8209,.5339,-.1046,.839,.5336,-.277,.7991,.453,-.32,.8321,.8465,.471,-.2479,.8536,.4208,-.3069,.9235,.0598,.3788,.8713,.1793,.4568
                    ,.9235,.0598,.3788,.5336,-.277,.7991,.3579,.4921,-.7935,.3682,.4365,-.8209,.8536,.4208,-.3069,-.1396,.3292,-.9339,-.2926,-.0096,-.9561,.686,.6606,.3048,-.7711,-.624,.1269,-.7805,.2888,-.5544,-.7313,-.6496,-.2077,-.1276,-.6575,.7425,-.8792,.4705,.0747,-.4225,.1978,-.8845,-.803,.0515,-.5936,-.4013,.0384,-.9151,-.4813,.4754,.7364
                    ,-.554,-.6548,.5141,-.2568,-.8403,-.4773,-.0216,-.7714,-.6359,.2754,-.0464,.9602,-.4048,.0038,-.9144,.7028,-.5708,-.4245,.7249,-.571,-.3854,-.7805,.2888,-.5544,-.7747,.1681,-.6096,-.3952,-.033,-.918,-.3992,-.0073,-.9168,.3725,-.1443,.9167,-.0231,.0582,.998,-.6049,.2738,.7477,-.9244,.3786,.0455,-.8935,.4426,.076,-.0231,.0582,.998
                    ,-.6049,.2738,.7477,-.5309,.3991,.7476,-.9244,.3786,.0455,-.7747,.1681,-.6096,-.7641,.2469,-.596,-.3952,-.033,-.918,-.4102,-.026,-.9116,-.4013,.0384,-.9151,.3725,-.1443,.9167,.4244,-.1795,.8875,-.5877,.7585,-.2814,-.276,.8736,-.4007,.2442,.8428,.4796,.3451,.9121,.2211,.2442,.8428,.4796,.0045,.8373,-.5466,-.5877,.7585,-.2814
                    ,.0045,.8373,-.5466,.4697,.699,-.5391,-.5918,.8056,.0258,.0492,.7992,.599,.4697,.699,-.5391,.3451,.9121,.2211,-.276,.8736,-.4007,.3945,.7612,-.5146,.557,-.6104,-.5631,-.0131,-.8104,-.5856,.2516,.7584,.6013,.2516,.7584,.6013,.2428,-.819,.5199,.051,-.7648,.6423,.557,-.6104,-.5631,-.8088,-.5756,.12,-.714,-.6632,-.2246
                    ,-.5597,.7861,-.262,-.367,.6974,-.6155,-.373,-.7371,-.5634,-.0131,-.8104,-.5856,.0601,.7222,.6891,-.1056,-.7549,.6472,-.5334,-.6148,.581,-.5334,-.6148,.581,-.8088,-.5756,.12,.1279,.8253,.5499,.051,-.7648,.6423,-.1056,-.7549,.6472,-.714,-.6632,-.2246,-.373,-.7371,-.5634,-.367,.6974,-.6155,.64,-.7627,.0934,.2402,-.7759,.5833
                    ,.5815,.7937,-.1787,-.1549,.774,-.614,.2697,-.7769,-.5689,.6166,-.5273,-.5846,.5815,.7937,-.1787,.595,.75,-.2889,-.1615,.7757,-.6101,-.1549,.774,-.614,.64,-.7627,.0934,.6963,-.6612,.2791,.7249,-.571,-.3854,-.7711,-.624,.1269,-.282,.8823,.3767,-.282,.8823,.3767,-.4459,.6339,.6319,-.6551,.7528,.0638
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
                    .1591,-1.1616,.4577,.1304,-1.0686,.4833,.2859,-1.1229,.4613,.0955,-1.2012,.4783,.0589,-1.2132,.5063,.101,-.3884,.3228,.1679,-.3409,.2272,.2056,-.4114,.2871,.0952,-.32,.2671,.0957,-.2453,.2737,.0342,-1.2124,.5226,.1325,-.6998,.3771,.0271,-.3936,.3106,.3392,-1.0906,.3976,.3011,-.8191,.3209,.4306,-1.058,.3236,.2412,-.6887,.3214
                    ,.2412,-.6887,.3214,.3256,-.6647,.1793,.3011,-.8191,.3209,.2594,-.4344,.1906,.2412,-.6887,.3214,.2056,-.4114,.2871,.2061,-.3374,.1915,.2487,-.3647,.1342,.2108,-1.1599,.4604,.2859,-1.1229,.4613,.2894,-1.1165,.4345,.2108,-1.1599,.4604,.5637,-1.0518,.1202,.5825,-1.0835,.1983,.3952,-.7694,-.0208,.4387,-1.0794,.2927,.4306,-1.058,.3236
                    ,.5217,-1.093,.2647,.255,-.3484,-.0704,.2623,-.3093,.04,.2421,-.311,-.123,.5661,-1.092,.2452,.3488,-.6918,.0483,.2897,-.3869,.1404,.3056,-.3832,.0609,.5217,-1.093,.2647,.3256,-.6647,.1793,.5661,-1.092,.2452,.3256,-.6647,.1793,.2594,-.4344,.1906,.2897,-.3869,.1404,.3501,-.6049,-.0314,.3507,-.8251,-.1992,.3213,-.6806,-.2094
                    ,.3085,-.3928,-.1337,.2421,-.311,-.123,.2497,-.351,-.1991,.2788,-.3779,-.2544,.5751,-1.0835,.0906,.5208,-1.024,.0207,.5039,-1.0062,-.0285,.5249,-1.0343,-.0542,.4647,-.9913,-.101,.5075,-1.0678,-.0947,.5491,-1.0733,-.0341,.4263,-1.0241,-.1506,.4412,-1.0902,-.1497,.526,-1.1226,-.0761,.2445,-.2684,.1048,.2153,-.2728,.1678,.2105,-.1645,.1241
                    ,.2654,-.2054,-.038,.2553,-.2561,-.1195,.0586,-.0433,-.0175,.0151,-.0673,-.0499,.0472,-.0481,-.128,.1838,-.1058,-.0245,.2105,-.1645,.1241,.0586,-.0433,-.0175,.0208,-.095,.1196,.0767,-.0932,.1654,.1009,-.1637,.2479,.0767,-.0932,.1654,.2105,-.1645,.1241,.2153,-.2728,.1678,.0257,-.1988,.2663,.0365,-.1086,-.2778,.136,-.1315,-.2529
                    ,.1582,-.0991,-.1528,.136,-.1315,-.2529,.0451,-.2066,-.3754,.163,-.2389,-.3118,.0077,-.1445,-.2725,.0051,-.2711,-.3493,.0451,-.2066,-.3754,.2237,-.2338,-.2214,.1582,-.0991,-.1528,.2298,-.3002,-.1896,.2142,-.3144,-.2377,.1745,-.3324,-.2795,.4089,-1.115,-.239,.2935,-.8863,-.3008,.3286,-1.1678,-.2854,.2935,-.8863,-.3008,.1924,-.9597,-.3344
                    ,.3897,-1.1135,-.2581,.2935,-.8863,-.3008,.2403,-1.1015,-.3131,.2619,-1.2211,-.309,.3143,-.7631,-.3328,.2996,-.5312,-.3068,.2689,-.5535,-.3142,.1746,-.3944,-.3241,.2996,-.5312,-.3068,.3143,-.7631,-.3328,.2788,-.3779,-.2544,.1746,-.3944,-.3241,.2996,-.5312,-.3068,.2689,-.5535,-.3142,.2654,-.6696,-.2589,.3143,-.7631,-.3328,.1746,-.3944,-.3241
                    ,.1582,-.385,-.2739,.2689,-.5535,-.3142,.1296,-.2623,-.3293,.163,-.2389,-.3118,.0664,-.2489,-.3298,.1296,-.2623,-.3293,.2078,-1.1713,-.2928,.3143,-.7631,-.3328,.2654,-.6696,-.2589,.1924,-.9597,-.3344,.1909,-1.0424,-.2821,.2078,-1.1713,-.2928,.2424,-1.2249,-.3072,.0256,-.3286,.2658,.0767,-.0932,.1654,.3256,-.6647,.1793,.2412,-.6887,.3214
                    ,.2056,-.4114,.2871,.2061,-.3374,.1915,.2061,-.3374,.1915,.2153,-.2728,.1678,.2859,-1.1229,.4613,.3392,-1.0906,.3976,.3392,-1.0906,.3976,.4306,-1.058,.3236,.5217,-1.093,.2647,.3256,-.6647,.1793,.3056,-.3832,.0609,.2897,-.3869,.1404,.2487,-.3647,.1342,.2897,-.3869,.1404,.2594,-.4344,.1906,.2487,-.3647,.1342,.2788,-.3779,-.2544
                    ,.2788,-.3779,-.2544,.2788,-.3779,-.2544,.1582,-.0991,-.1528,.1838,-.1058,-.0245,.1838,-.1058,-.0245,.1838,-.1058,-.0245,.0586,-.0433,-.0175,.2105,-.1645,.1241,.0767,-.0932,.1654,.2105,-.1645,.1241,.2153,-.2728,.1678,.136,-.1315,-.2529,.0451,-.2066,-.3754,.136,-.1315,-.2529,.1582,-.0991,-.1528,.2532,-.5901,-.0921,.2158,-.4713,-.1533
                    ,.236,-.4884,-.1164,.2497,-.351,-.1991,.2497,-.351,-.1991,.3143,-.7631,-.3328,.2935,-.8863,-.3008,.3897,-1.1135,-.2581,.3845,-1.1735,-.2532,.1746,-.3944,-.3241,.1746,-.3944,-.3241,.2788,-.3779,-.2544,.2142,-.3144,-.2377,.2788,-.3779,-.2544,.2497,-.351,-.1991,.2996,-.5312,-.3068,.2788,-.3779,-.2544,.2654,-.6696,-.2589,.259,-.6982,-.1404
                    ,.2171,-.7839,-.2116,.2654,-.6696,-.2589,.2689,-.5535,-.3142,.1582,-.385,-.2739,.2654,-.6696,-.2589,.1582,-.385,-.2739,.2654,-.6696,-.2589,.1924,-.9597,-.3344,.2045,-.8753,-.2185,.2019,-.969,-.2155,.1582,-.385,-.2739,.1622,-.419,-.1865,.1746,-.3944,-.3241,.1745,-.3324,-.2795,.163,-.2389,-.3118,.0451,-.2066,-.3754,.0664,-.2489,-.3298
                    ,.0664,-.2489,-.3298,.0451,-.2066,-.3754,.0051,-.2711,-.3493,.2654,-.6696,-.2589,.1897,-1.0498,-.2341,-.0947,-1.1616,.4662,-.221,-1.1229,.4782,-.0643,-1.0686,.4898,-.0299,-1.2012,.4825,.0086,-1.2132,.5079,-.0457,-.3884,.3277,-.1525,-.4114,.299,-.1189,-.3409,.2368,-.0437,-.32,.2717,-.0437,-.2453,.2784,-.0735,-.6998,.384,-.2784,-1.0906,.4182
                    ,-.3746,-1.058,.3505,-.2455,-.8191,.3391,-.1857,-.6887,.3357,-.1857,-.6887,.3357,-.2455,-.8191,.3391,-.2794,-.6647,.1995,-.2126,-.4344,.2063,-.1857,-.6887,.3357,-.1525,-.4114,.299,-.1594,-.3374,.2037,-.2057,-.3647,.1493,-.1461,-1.1599,.4723,-.221,-1.1229,.4782,-.1461,-1.1599,.4723,-.2263,-1.1165,.4517,-.5209,-1.0518,.1564,-.3622,-.7694,.0044
                    ,-.5344,-1.0835,.2356,-.3847,-1.0794,.3202,-.4694,-1.093,.2978,-.3746,-1.058,.3505,-.2256,-.3484,-.0544,-.2163,-.311,-.1077,-.2255,-.3093,.0563,-.3113,-.6918,.0703,-.515,-1.092,.2813,-.2673,-.3832,.08,-.2462,-.3869,.1583,-.4694,-1.093,.2978,-.515,-1.092,.2813,-.2794,-.6647,.1995,-.3179,-.605,-.0091,-.3297,-.8251,-.1765,-.301,-.6806,-.1887
                    ,-.2256,-.3484,-.0544,-.2673,-.3832,.08,-.2833,-.3928,-.114,-.2163,-.311,-.1077,-.2616,-.3779,-.2363,-.2289,-.351,-.1831,-.5343,-1.0836,.1277,-.4847,-1.024,.0543,-.4712,-1.0062,.0041,-.4939,-1.0343,-.0202,-.4369,-.9913,-.0709,-.3297,-.8251,-.1765,-.4369,-.9913,-.0709,-.5166,-1.0733,.0015,-.4792,-1.0678,-.0617,-.3297,-.8251,-.1765,-.4792,-1.0678,-.0617
                    ,-.4019,-1.0241,-.123,-.4019,-1.0241,-.123,-.4964,-1.1226,-.042,-.4167,-1.0902,-.121,-.2034,-.2684,.1198,-.1682,-.1645,.1367,-.1701,-.2728,.1807,-.2339,-.2054,-.0213,-.2292,-.2561,-.1033,-.0261,-.0433,-.0147,-.0221,-.0481,-.1257,.0151,-.0673,-.0499,-.1515,-.1058,-.0133,-.1682,-.1645,.1367,-.0261,-.0433,-.0147,.0151,-.0673,-.0499,.0208,-.095,.1196
                    ,-.032,-.0932,.169,.0208,-.095,.1196,-.0506,-.1637,.253,-.1682,-.1645,.1367,-.1701,-.2728,.1807,-.0506,-.1637,.253,-.0506,-.1637,.253,-.0214,-.1086,-.2759,-.1346,-.0991,-.1431,-.119,-.1315,-.2444,-.1499,-.2389,-.3013,-.0365,-.2066,-.3726,-.0221,-.0481,-.1257,-.0214,-.1086,-.2759,.0077,-.1445,-.2725,.0051,-.2711,-.3493,-.0214,-.1086,-.2759
                    ,-.0365,-.2066,-.3726,-.2044,-.2338,-.2071,-.2339,-.2054,-.0213,-.2084,-.3002,-.175,-.1961,-.3144,-.224,-.2044,-.2338,-.2071,-.1592,-.3324,-.2683,-.1499,-.2389,-.3013,-.1961,-.3144,-.224,-.3904,-1.115,-.2124,-.2794,-.8863,-.2817,-.3134,-1.1679,-.264,-.1807,-.9597,-.322,-.2794,-.8863,-.2817,-.2794,-.8863,-.2817,-.3725,-1.1135,-.2326,-.2271,-1.1015,-.2975
                    ,-.2484,-1.2211,-.292,-.3023,-.7631,-.3122,-.2558,-.5535,-.2967,-.2859,-.5312,-.2873,-.1623,-.3944,-.3128,-.1592,-.3324,-.2683,-.1961,-.3144,-.224,-.3023,-.7631,-.3122,-.2859,-.5312,-.2873,-.1623,-.3944,-.3128,-.2616,-.3779,-.2363,-.2859,-.5312,-.2873,-.2558,-.5535,-.2967,-.3023,-.7631,-.3122,-.2486,-.6696,-.2417,-.1623,-.3944,-.3128,-.2558,-.5535,-.2967
                    ,-.1426,-.385,-.2639,-.1499,-.2389,-.3013,-.1177,-.2623,-.321,-.1499,-.2389,-.3013,-.0547,-.2489,-.3258,-.1933,-1.1713,-.2794,-.3023,-.7631,-.3122,-.2486,-.6696,-.2417,-.1807,-.9597,-.322,-.1933,-1.1713,-.2794,-.1758,-1.0424,-.2698,-.2288,-1.2249,-.2915,-.032,-.0932,.169,.0208,-.095,.1196,-.2455,-.8191,.3391,-.3746,-1.058,.3505,-.1857,-.6887,.3357
                    ,-.1525,-.4114,.299,-.1594,-.3374,.2037,-.1594,-.3374,.2037,-.1701,-.2728,.1807,-.221,-1.1229,.4782,-.2784,-1.0906,.4182,-.3847,-1.0794,.3202,-.3746,-1.058,.3505,-.2784,-1.0906,.4182,-.4694,-1.093,.2978,-.2794,-.6647,.1995,-.3746,-1.058,.3505,-.2673,-.3832,.08,-.2057,-.3647,.1493,-.2462,-.3869,.1583,-.2462,-.3869,.1583,-.2057,-.3647,.1493
                    ,-.2126,-.4344,.2063,-.3622,-.7694,.0044,-.4939,-1.0343,-.0202,-.3297,-.8251,-.1765,-.2616,-.3779,-.2363,-.2833,-.3928,-.114,-.2833,-.3928,-.114,-.2616,-.3779,-.2363,-.2163,-.311,-.1077,-.2256,-.3484,-.0544,-.2163,-.311,-.1077,-.4939,-1.0343,-.0202,-.4369,-.9913,-.0709,-.4792,-1.0678,-.0617,-.3297,-.8251,-.1765,-.4019,-1.0241,-.123,-.4167,-1.0902,-.121
                    ,-.2339,-.2054,-.0213,-.2339,-.2054,-.0213,-.1682,-.1645,.1367,-.1682,-.1645,.1367,-.0506,-.1637,.253,-.2044,-.2338,-.2071,-.0506,-.1637,.253,.0151,-.0673,-.0499,-.0221,-.0481,-.1257,.0077,-.1445,-.2725,.0077,-.1445,-.2725,-.0214,-.1086,-.2759,.0051,-.2711,-.3493,-.2253,-.5901,-.0762,-.192,-.4713,-.1397,-.2289,-.351,-.1831,-.1499,-.2389,-.3013
                    ,-.2044,-.2338,-.2071,-.1961,-.3144,-.224,-.2084,-.3002,-.175,-.3023,-.7631,-.3122,-.2794,-.8863,-.2817,-.2794,-.8863,-.2817,-.3904,-1.115,-.2124,-.4167,-1.0902,-.121,-.367,-1.1735,-.2281,-.1623,-.3944,-.3128,-.1961,-.3144,-.224,-.1961,-.3144,-.224,-.2859,-.5312,-.2873,-.2616,-.3779,-.2363,-.1972,-.7839,-.1978,-.2343,-.6982,-.124,-.2558,-.5535,-.2967
                    ,-.1426,-.385,-.2639,-.1426,-.385,-.2639,-.1807,-.9597,-.322,-.1851,-.8753,-.2055,-.1426,-.385,-.2639,-.192,-.4713,-.1397,-.1407,-.419,-.1763,-.1623,-.3944,-.3128,-.1426,-.385,-.2639,-.1592,-.3324,-.2683,-.1499,-.2389,-.3013,-.0365,-.2066,-.3726,.0051,-.2711,-.3493,-.0365,-.2066,-.3726,-.1823,-.969,-.2027,-.1713,-1.0498,-.222,.0208,-.095,.1196
                    ,.0767,-.0932,.1654,.2654,-.6696,-.2589,.1924,-.9597,-.3344,.2654,-.6696,-.2589,.1924,-.9597,-.3344,-.0506,-.1637,.253,-.032,-.0932,.169,-.2044,-.2338,-.2071,-.2097,-.4884,-.1015,-.1807,-.9597,-.322,-.1807,-.9597,-.322,.148,-.2968,.2525,.2049,-.3524,.2118,.1487,-.3537,.274,.2535,-.289,.0976,.2807,-.3424,-.0369,.2709,-.3474,.1014
                    ,.2456,-.279,-.1613,.2126,-.3325,-.2788,.2572,-.3375,-.164,.1168,-.3304,-.3431,.0053,-.2699,-.3443,.0047,-.3283,-.3622,.0264,-.2997,.2873,.027,-.355,.3055,.2651,-.284,-.0341,.2012,-.2741,-.2761,-.1568,-.3524,.2238,-.0973,-.2968,.2607,-.0966,-.3537,.2822,-.2491,-.3424,-.0192,-.2129,-.289,.1132,-.2301,-.3474,.1181,-.1972,-.3325,-.2651
                    ,-.2223,-.279,-.1457,-.2341,-.3375,-.1476,-.1059,-.3304,-.3357,-.1056,-.272,-.327,-.1428,-.294,.2268,-.2333,-.284,-.0175,-.1857,-.2741,-.2632,.1911,-.294,.2157,.1171,-.272,-.3344
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
                    .2066,-.1722,.9631,.1593,.1486,.976,.5852,-.4603,.6675,.5665,-.1787,.8044,.572,-.1546,.8055,.12,.4348,.8925,.5522,.4538,.6994,.616,.3999,.6787,.2467,.2553,.9348,.3142,.1027,.9438,.0334,.015,.9993,.2684,.2383,.9333,.0305,.401,.9156,.6547,.1858,.7326,.6897,.3421,.6381,.645,-.065,.7613,.6243,.2656,.7346
                    ,.6243,.2656,.7346,.8816,.312,.354,.6897,.3421,.6381,.7871,.3097,.5335,.6243,.2656,.7346,.616,.3999,.6787,.758,.3382,.5576,.7383,.5015,.4509,-.0064,-.0123,.9999,.5852,-.4603,.6675,.3766,-.9106,-.1699,-.0064,-.0123,.9999,.8708,.4873,-.0651,.7841,.5657,.2551,.9072,.3995,-.1318,.2304,-.7714,.5931,.645,-.065,.7613
                    ,.4539,.2821,.8452,.8577,.5136,-.0233,.9685,.2357,.0803,.9772,.1877,-.0991,.6305,.4986,.5948,.9325,.3263,.1548,.6889,.5647,.4544,.9007,.4136,.1325,.4539,.2821,.8452,.8816,.312,.354,.6305,.4986,.5948,.8816,.312,.354,.7871,.3097,.5335,.6889,.5647,.4544,.9855,.1682,-.0196,.8549,.2332,-.4634,.9648,.0904,-.247
                    ,.9137,.3966,-.0882,.9772,.1877,-.0991,.4727,.817,-.3301,.749,.4827,-.4539,.8785,.4282,-.2117,.8736,.3821,-.3014,.9059,.413,.0936,.9025,.3802,-.2024,.7918,.2212,-.5692,.769,.3424,-.5397,.7747,.3926,-.4955,.7158,.1109,-.6894,.789,.1848,-.586,.679,.1427,-.7201,.933,.1682,.3182,.8104,.1554,.5649,.7495,.5464,.3736
                    ,.9459,.3231,-.0293,.9794,-.0195,-.2009,-.03,.9931,.1134,-.0001,1,-.0033,-.221,.9508,-.217,.6163,.7852,.0604,.7495,.5464,.3736,-.03,.9931,.1134,.012,.9327,.3604,.0683,.8873,.456,.3227,.5491,.771,.0683,.8873,.456,.7495,.5464,.3736,.8104,.1554,.5649,.0306,.3944,.9184,-.2778,.8016,-.5293,.5264,.691,-.4954
                    ,.585,.7725,-.2469,.5264,.691,-.4954,-.1279,.1671,-.9776,.6341,.1657,-.7553,-.0239,.6969,-.7168,-.0331,-.1151,-.9928,-.1279,.1671,-.9776,.8788,.2509,-.4058,.585,.7725,-.2469,.9542,.1255,-.2716,.7992,.292,-.5253,.4848,.2632,-.834,.8137,.2111,-.5416,.6755,-.0326,-.7366,.3722,-.0208,-.9279,.6755,-.0326,-.7366,-.6225,.0415,-.7815
                    ,.56,.0526,-.8268,.6755,-.0326,-.7366,.0428,-.1046,-.9936,.0824,-.0194,-.9964,.6969,.3255,-.639,.7607,.1533,-.6306,-.311,-.1036,-.9447,-.452,.0939,-.887,.7607,.1533,-.6306,.6969,.3255,-.639,.749,.4827,-.4539,-.452,.0939,-.887,.7607,.1533,-.6306,-.311,-.1036,-.9447,-.9593,-.0099,-.2821,.6969,.3255,-.639,-.452,.0939,-.887
                    ,-.9446,-.2274,-.2367,-.311,-.1036,-.9447,.3107,.2428,-.9189,.6341,.1657,-.7553,.2935,-.5496,-.7822,.3107,.2428,-.9189,-.4742,-.0874,-.876,.6969,.3255,-.639,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9965,-.0066,-.0832,-.4742,-.0874,-.876,-.1985,-.0504,-.9788,.0319,.2944,.9551,.0683,.8873,.456,.8816,.312,.354,.6243,.2656,.7346
                    ,.616,.3999,.6787,.758,.3382,.5576,.758,.3382,.5576,.8104,.1554,.5649,.5852,-.4603,.6675,.6547,.1858,.7326,.6547,.1858,.7326,.645,-.065,.7613,.4539,.2821,.8452,.8816,.312,.354,.9007,.4136,.1325,.6889,.5647,.4544,.7383,.5015,.4509,.6889,.5647,.4544,.7871,.3097,.5335,.7383,.5015,.4509,.749,.4827,-.4539
                    ,.749,.4827,-.4539,.749,.4827,-.4539,.585,.7725,-.2469,.6163,.7852,.0604,.6163,.7852,.0604,.6163,.7852,.0604,-.03,.9931,.1134,.7495,.5464,.3736,.0683,.8873,.456,.7495,.5464,.3736,.8104,.1554,.5649,.5264,.691,-.4954,-.1279,.1671,-.9776,.5264,.691,-.4954,.585,.7725,-.2469,-.9807,-.1828,.0693,-.9267,-.3403,.1591
                    ,-.8841,-.0389,.4656,.4727,.817,-.3301,.4727,.817,-.3301,.6969,.3255,-.639,.6755,-.0326,-.7366,.56,.0526,-.8268,.4881,-.1129,-.8654,-.452,.0939,-.887,-.452,.0939,-.887,.749,.4827,-.4539,.7992,.292,-.5253,.749,.4827,-.4539,.4727,.817,-.3301,.7607,.1533,-.6306,.749,.4827,-.4539,-.9593,-.0099,-.2821,-.9885,.15,-.0172
                    ,-.9031,.2331,-.3607,-.9593,-.0099,-.2821,-.311,-.1036,-.9447,-.9446,-.2274,-.2367,-.9593,-.0099,-.2821,-.9446,-.2274,-.2367,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9786,.1893,-.0798,-.9955,.0644,.0686,-.9446,-.2274,-.2367,-.5811,-.7672,-.2716,-.452,.0939,-.887,.4848,.2632,-.834,.6341,.1657,-.7553,-.1279,.1671,-.9776,.2935,-.5496,-.7822
                    ,.2935,-.5496,-.7822,-.1279,.1671,-.9776,-.0331,-.1151,-.9928,-.9593,-.0099,-.2821,-.9886,.1506,-.0023,-.1419,-.1722,.9748,-.5394,-.4603,.705,-.0938,.1486,.9844,-.5116,-.1787,.8404,-.517,-.1546,.8419,-.0603,.4348,.8985,-.5694,.3999,.7182,-.5043,.4538,.7346,-.1838,.2553,.9492,-.2506,.1027,.9626,-.2056,.2383,.9492,-.6044,.1858,.7747
                    ,-.5928,-.065,.8027,-.6456,.342,.6827,-.5739,.2656,.7747,-.5739,.2656,.7747,-.6456,.342,.6827,-.8561,.312,.412,-.7497,.3097,.5848,-.5739,.2656,.7747,-.5694,.3999,.7182,-.7192,.3382,.6069,-.7066,.5015,.4992,.0731,-.0123,.9972,-.5394,-.4603,.705,.0731,-.0123,.9972,-.387,-.9106,-.1444,-.8732,.4873,-.0069,-.914,.3995,-.071
                    ,-.7654,.5657,.3069,-.1904,-.7714,.6071,-.3965,.2821,.8736,-.5928,-.065,.8027,-.8573,.5136,.034,-.9816,.1877,-.0337,-.961,.2357,.1447,-.9201,.3263,.2166,-.5894,.4986,.6355,-.8899,.4136,.1923,-.6571,.5647,.4993,-.3965,.2821,.8736,-.5894,.4986,.6355,-.8561,.312,.412,-.9846,.1682,.0462,-.8839,.2332,-.4053,-.9791,.0904,-.1821
                    ,-.8573,.5136,.034,-.8899,.4136,.1923,-.9176,.3966,-.0271,-.9816,.1877,-.0337,-.7776,.4827,-.403,-.4936,.817,-.2979,-.8907,.4282,-.1527,-.8918,.3821,-.2424,-.8976,.413,.1538,-.914,.3801,-.1417,-.8281,.2211,-.5152,-.8839,.2332,-.4053,-.8281,.2211,-.5152,-.8061,.3926,-.4428,-.8033,.3424,-.4872,-.8839,.2332,-.4053,-.8033,.3424,-.4872
                    ,-.7602,.1109,-.6401,-.7602,.1109,-.6401,-.7255,.1427,-.6732,-.8263,.1848,-.532,-.9097,.1682,.3797,-.723,.5464,.4228,-.7709,.1554,.6177,-.9457,.3231,.0338,-.9906,-.0195,-.1351,.0375,.9931,.1111,.206,.9508,-.2312,-.0001,1,-.0033,-.6109,.7852,.1013,-.723,.5464,.4228,.0375,.9931,.1111,-.0001,1,-.0033,.012,.9327,.3604
                    ,-.0378,.8873,.4595,.012,.9327,.3604,-.2705,.5491,.7908,-.723,.5464,.4228,-.7709,.1554,.6177,-.2705,.5491,.7908,-.2705,.5491,.7908,.2419,.8016,-.5466,-.6002,.7725,-.2073,-.5583,.691,-.4592,-.683,.1657,-.7114,.0624,.1671,-.9839,.206,.9508,-.2312,.2419,.8016,-.5466,-.0239,.6969,-.7168,-.0331,-.1151,-.9928,.2419,.8016,-.5466
                    ,.0624,.1671,-.9839,-.9039,.2509,-.3463,-.9457,.3231,.0338,-.9702,.1255,-.2074,-.8325,.292,-.4708,-.9039,.2509,-.3463,-.5394,.2632,-.7999,-.683,.1657,-.7114,-.8325,.292,-.4708,-.848,.2111,-.4862,-.7231,-.0326,-.6899,-.4333,-.0208,-.901,.569,.0415,-.8213,-.7231,-.0326,-.6899,-.7231,-.0326,-.6899,-.6139,.0526,-.7876,-.109,-.1046,-.9885
                    ,-.1486,-.0194,-.9887,-.738,.3255,-.5911,.2473,-.1036,-.9634,-.8011,.1533,-.5785,.3919,.0939,-.9152,-.5394,.2632,-.7999,-.8325,.292,-.4708,-.738,.3255,-.5911,-.8011,.1533,-.5785,.3919,.0939,-.9152,-.7776,.4827,-.403,-.8011,.1533,-.5785,.2473,-.1036,-.9634,-.738,.3255,-.5911,.9384,-.0099,-.3454,.3919,.0939,-.9152,.2473,-.1036,-.9634
                    ,.9267,-.2274,-.2991,-.683,.1657,-.7114,-.3713,.2428,-.8962,-.683,.1657,-.7114,-.345,-.5496,-.7608,.4147,-.0874,-.9057,-.738,.3255,-.5911,.9384,-.0099,-.3454,.569,.0415,-.8213,.4147,-.0874,-.9057,.9887,-.0065,-.1495,.1328,-.0504,-.9898,-.0378,.8873,.4595,.012,.9327,.3604,-.6456,.342,.6827,-.5928,-.065,.8027,-.5739,.2656,.7747
                    ,-.5694,.3999,.7182,-.7192,.3382,.6069,-.7192,.3382,.6069,-.7709,.1554,.6177,-.5394,-.4603,.705,-.6044,.1858,.7747,-.1904,-.7714,.6071,-.5928,-.065,.8027,-.6044,.1858,.7747,-.3965,.2821,.8736,-.8561,.312,.412,-.5928,-.065,.8027,-.8899,.4136,.1923,-.7066,.5015,.4992,-.6571,.5647,.4993,-.6571,.5647,.4993,-.7066,.5015,.4992
                    ,-.7497,.3097,.5848,-.914,.3995,-.071,-.914,.3801,-.1417,-.8839,.2332,-.4053,-.7776,.4827,-.403,-.9176,.3966,-.0271,-.9176,.3966,-.0271,-.7776,.4827,-.403,-.9816,.1877,-.0337,-.8573,.5136,.034,-.9816,.1877,-.0337,-.914,.3801,-.1417,-.8281,.2211,-.5152,-.8033,.3424,-.4872,-.8839,.2332,-.4053,-.7602,.1109,-.6401,-.8263,.1848,-.532
                    ,-.9457,.3231,.0338,-.9457,.3231,.0338,-.723,.5464,.4228,-.723,.5464,.4228,-.2705,.5491,.7908,-.9039,.2509,-.3463,-.2705,.5491,.7908,-.0001,1,-.0033,.206,.9508,-.2312,-.0239,.6969,-.7168,-.0239,.6969,-.7168,.2419,.8016,-.5466,-.0331,-.1151,-.9928,.9831,-.1828,.0038,.9353,-.3403,.0969,-.4936,.817,-.2979,-.683,.1657,-.7114
                    ,-.9039,.2509,-.3463,-.8325,.292,-.4708,-.9702,.1255,-.2074,-.738,.3255,-.5911,-.7231,-.0326,-.6899,-.7231,-.0326,-.6899,-.848,.2111,-.4862,-.8263,.1848,-.532,-.5447,-.1129,-.831,.3919,.0939,-.9152,-.8325,.292,-.4708,-.8325,.292,-.4708,-.8011,.1533,-.5785,-.7776,.4827,-.403,.877,.2331,-.4201,.9852,.15,-.0831,.2473,-.1036,-.9634
                    ,.9267,-.2274,-.2991,.9267,-.2274,-.2991,.569,.0415,-.8213,.9711,.1893,-.1449,.9267,-.2274,-.2991,.9353,-.3403,.0969,.5617,-.7672,-.3098,.3919,.0939,-.9152,.9267,-.2274,-.2991,-.5394,.2632,-.7999,-.683,.1657,-.7114,.0624,.1671,-.9839,-.0331,-.1151,-.9928,.0624,.1671,-.9839,.9979,.0644,.002,.9862,.1506,-.0682,.012,.9327,.3604
                    ,.0683,.8873,.456,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.2705,.5491,.7908,-.0378,.8873,.4595,-.9039,.2509,-.3463,.9132,-.0389,.4056,.569,.0415,-.8213,.569,.0415,-.8213,.5124,.2705,.815,.7869,.194,.5858,.4698,.3111,.8261,.9167,.2717,.2927,.9634,.2654,-.0378,.9085,.2914,.2994
                    ,.948,.1991,-.2484,.7843,.1805,-.5935,.9465,.2087,-.2458,.3425,.165,-.9249,-.0323,.2492,-.9679,-.0319,.2934,-.9554,.0316,.3239,.9456,.0317,.3122,.9495,.9673,.2515,-.0324,.7598,.1719,-.627,-.7461,.194,.637,-.4569,.2705,.8474,-.4136,.3111,.8556,-.9638,.2654,.0266,-.8952,.2717,.3532,-.8865,.2914,.3593,-.8221,.1805,-.5399
                    ,-.9624,.1991,-.1846,-.9608,.2087,-.1822,-.4035,.165,-.9,-.406,.1362,-.9037,-.714,.1358,.6868,-.9673,.2514,.0322,-.8,.1719,-.5749,.7582,.1358,.6377,.3448,.1362,-.9287
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
                    .1591,3.676,.4303,.1304,3.769,.4558,.2859,3.7146,.4339,.0955,3.6364,.4509,.0589,3.6244,.4788,.101,4.4492,.2954,.1679,4.4967,.1998,.2056,4.4262,.2596,.0952,4.5176,.2397,.0957,4.5923,.2463,.0342,3.6252,.4951,.1325,4.1378,.3496,.0271,4.444,.2831,.3392,3.747,.3701,.3011,4.0185,.2934,.4306,3.7796,.2962,.2412,4.1489,.294
                    ,.2412,4.1489,.294,.3256,4.1729,.1518,.3011,4.0185,.2934,.2594,4.4032,.1631,.2412,4.1489,.294,.2056,4.4262,.2596,.2061,4.5001,.164,.2487,4.4729,.1067,.2108,3.6777,.4329,.2859,3.7146,.4339,.2894,3.7211,.4071,.2108,3.6777,.4329,.5637,3.7858,.0927,.5825,3.7541,.1708,.3952,4.0682,-.0483,.4387,3.7582,.2652,.4306,3.7796,.2962
                    ,.5217,3.7446,.2372,.255,4.4892,-.0979,.2623,4.5283,.0126,.2421,4.5266,-.1505,.5661,3.7456,.2177,.3488,4.1458,.0208,.2897,4.4507,.113,.3056,4.4544,.0334,.5217,3.7446,.2372,.3256,4.1729,.1518,.5661,3.7456,.2177,.3256,4.1729,.1518,.2594,4.4032,.1631,.2897,4.4507,.113,.3501,4.2326,-.0588,.3507,4.0125,-.2267,.3213,4.157,-.2369
                    ,.3085,4.4448,-.1612,.2421,4.5266,-.1505,.2497,4.4866,-.2265,.2788,4.4597,-.2818,.5751,3.754,.0632,.5208,3.8136,-.0068,.5039,3.8314,-.0559,.5249,3.8033,-.0816,.4647,3.8463,-.1285,.5075,3.7698,-.1221,.5491,3.7643,-.0615,.4263,3.8135,-.1781,.4412,3.7474,-.1771,.526,3.715,-.1036,.2445,4.5692,.0774,.2153,4.5648,.1403,.2105,4.6731,.0966
                    ,.2654,4.6322,-.0654,.2553,4.5815,-.1469,.0586,4.7943,-.045,.0151,4.7703,-.0774,.0472,4.7895,-.1554,.1838,4.7318,-.052,.2105,4.6731,.0966,.0586,4.7943,-.045,.0208,4.7426,.0922,.0767,4.7444,.1379,.1009,4.6739,.2205,.0767,4.7444,.1379,.2105,4.6731,.0966,.2153,4.5648,.1403,.0257,4.6388,.2389,.0365,4.7289,-.3052,.136,4.7061,-.2803
                    ,.1582,4.7384,-.1803,.136,4.7061,-.2803,.0451,4.631,-.4028,.163,4.5987,-.3392,.0077,4.6931,-.2999,.0051,4.5665,-.3768,.0451,4.631,-.4028,.2237,4.6038,-.2489,.1582,4.7384,-.1803,.2298,4.5374,-.2171,.2142,4.5232,-.2651,.1745,4.5052,-.3069,.4089,3.7226,-.2665,.2935,3.9513,-.3283,.3286,3.6697,-.3129,.2935,3.9513,-.3283,.1924,3.8779,-.3619
                    ,.3897,3.7241,-.2855,.2935,3.9513,-.3283,.2403,3.7361,-.3406,.2619,3.6165,-.3365,.3143,4.0745,-.3602,.2996,4.3064,-.3343,.2689,4.2841,-.3417,.1746,4.4432,-.3515,.2996,4.3064,-.3343,.3143,4.0745,-.3602,.2788,4.4597,-.2818,.1746,4.4432,-.3515,.2996,4.3064,-.3343,.2689,4.2841,-.3417,.2654,4.168,-.2863,.3143,4.0745,-.3602,.1746,4.4432,-.3515
                    ,.1582,4.4526,-.3014,.2689,4.2841,-.3417,.1296,4.5753,-.3567,.163,4.5987,-.3392,.0664,4.5887,-.3573,.1296,4.5753,-.3567,.2078,3.6663,-.3203,.3143,4.0745,-.3602,.2654,4.168,-.2863,.1924,3.8779,-.3619,.1909,3.7952,-.3095,.2078,3.6663,-.3203,.2424,3.6127,-.3347,.0256,4.509,.2384,.0767,4.7444,.1379,.3256,4.1729,.1518,.2412,4.1489,.294
                    ,.2056,4.4262,.2596,.2061,4.5001,.164,.2061,4.5001,.164,.2153,4.5648,.1403,.2859,3.7146,.4339,.3392,3.747,.3701,.3392,3.747,.3701,.4306,3.7796,.2962,.5217,3.7446,.2372,.3256,4.1729,.1518,.3056,4.4544,.0334,.2897,4.4507,.113,.2487,4.4729,.1067,.2897,4.4507,.113,.2594,4.4032,.1631,.2487,4.4729,.1067,.2788,4.4597,-.2818
                    ,.2788,4.4597,-.2818,.2788,4.4597,-.2818,.1582,4.7384,-.1803,.1838,4.7318,-.052,.1838,4.7318,-.052,.1838,4.7318,-.052,.0586,4.7943,-.045,.2105,4.6731,.0966,.0767,4.7444,.1379,.2105,4.6731,.0966,.2153,4.5648,.1403,.136,4.7061,-.2803,.0451,4.631,-.4028,.136,4.7061,-.2803,.1582,4.7384,-.1803,.2532,4.2475,-.1196,.2158,4.3662,-.1808
                    ,.236,4.3492,-.1439,.2497,4.4866,-.2265,.2497,4.4866,-.2265,.3143,4.0745,-.3602,.2935,3.9513,-.3283,.3897,3.7241,-.2855,.3845,3.6641,-.2807,.1746,4.4432,-.3515,.1746,4.4432,-.3515,.2788,4.4597,-.2818,.2142,4.5232,-.2651,.2788,4.4597,-.2818,.2497,4.4866,-.2265,.2996,4.3064,-.3343,.2788,4.4597,-.2818,.2654,4.168,-.2863,.259,4.1394,-.1679
                    ,.2171,4.0537,-.2391,.2654,4.168,-.2863,.2689,4.2841,-.3417,.1582,4.4526,-.3014,.2654,4.168,-.2863,.1582,4.4526,-.3014,.2654,4.168,-.2863,.1924,3.8779,-.3619,.2045,3.9623,-.246,.2019,3.8686,-.243,.1582,4.4526,-.3014,.1622,4.4186,-.2139,.1746,4.4432,-.3515,.1745,4.5052,-.3069,.163,4.5987,-.3392,.0451,4.631,-.4028,.0664,4.5887,-.3573
                    ,.0664,4.5887,-.3573,.0451,4.631,-.4028,.0051,4.5665,-.3768,.2654,4.168,-.2863,.1897,3.7878,-.2615,-.0947,3.676,.4387,-.221,3.7146,.4508,-.0643,3.769,.4623,-.0299,3.6364,.4551,.0086,3.6244,.4805,-.0457,4.4492,.3003,-.1525,4.4262,.2716,-.1189,4.4967,.2093,-.0437,4.5176,.2443,-.0437,4.5923,.2509,-.0735,4.1378,.3565,-.2784,3.747,.3908
                    ,-.3746,3.7796,.3231,-.2455,4.0185,.3117,-.1857,4.1489,.3082,-.1857,4.1489,.3082,-.2455,4.0185,.3117,-.2794,4.1729,.172,-.2126,4.4032,.1789,-.1857,4.1489,.3082,-.1525,4.4262,.2716,-.1594,4.5001,.1762,-.2057,4.4729,.1219,-.1461,3.6777,.4449,-.221,3.7146,.4508,-.1461,3.6777,.4449,-.2263,3.7211,.4243,-.5209,3.7858,.1289,-.3622,4.0682,-.023
                    ,-.5344,3.7541,.2081,-.3847,3.7582,.2927,-.4694,3.7446,.2703,-.3746,3.7796,.3231,-.2256,4.4892,-.0818,-.2163,4.5266,-.1352,-.2255,4.5283,.0289,-.3113,4.1458,.0428,-.515,3.7456,.2538,-.2673,4.4544,.0525,-.2462,4.4507,.1309,-.4694,3.7446,.2703,-.515,3.7456,.2538,-.2794,4.1729,.172,-.3179,4.2326,-.0365,-.3297,4.0124,-.204,-.301,4.157,-.2161
                    ,-.2256,4.4892,-.0818,-.2673,4.4544,.0525,-.2833,4.4447,-.1414,-.2163,4.5266,-.1352,-.2616,4.4597,-.2638,-.2289,4.4866,-.2106,-.5343,3.754,.1002,-.4847,3.8136,.0268,-.4712,3.8314,-.0234,-.4939,3.8033,-.0476,-.4369,3.8463,-.0984,-.3297,4.0124,-.204,-.4369,3.8463,-.0984,-.5166,3.7643,-.026,-.4792,3.7698,-.0892,-.3297,4.0124,-.204,-.4792,3.7698,-.0892
                    ,-.4019,3.8134,-.1504,-.4019,3.8134,-.1504,-.4964,3.715,-.0694,-.4167,3.7474,-.1485,-.2034,4.5692,.0923,-.1682,4.6731,.1093,-.1701,4.5648,.1532,-.2339,4.6322,-.0488,-.2292,4.5815,-.1308,-.0261,4.7943,-.0421,-.0221,4.7895,-.1531,.0151,4.7703,-.0774,-.1515,4.7318,-.0408,-.1682,4.6731,.1093,-.0261,4.7943,-.0421,.0151,4.7703,-.0774,.0208,4.7426,.0922
                    ,-.032,4.7444,.1415,.0208,4.7426,.0922,-.0506,4.6739,.2255,-.1682,4.6731,.1093,-.1701,4.5648,.1532,-.0506,4.6739,.2255,-.0506,4.6739,.2255,-.0214,4.7289,-.3033,-.1346,4.7384,-.1705,-.119,4.7061,-.2718,-.1499,4.5987,-.3288,-.0365,4.631,-.4001,-.0221,4.7895,-.1531,-.0214,4.7289,-.3033,.0077,4.6931,-.2999,.0051,4.5665,-.3768,-.0214,4.7289,-.3033
                    ,-.0365,4.631,-.4001,-.2044,4.6038,-.2346,-.2339,4.6322,-.0488,-.2084,4.5373,-.2025,-.1961,4.5232,-.2514,-.2044,4.6038,-.2346,-.1592,4.5052,-.2958,-.1499,4.5987,-.3288,-.1961,4.5232,-.2514,-.3904,3.7226,-.2398,-.2794,3.9513,-.3091,-.3134,3.6697,-.2915,-.1807,3.8779,-.3494,-.2794,3.9513,-.3091,-.2794,3.9513,-.3091,-.3725,3.7241,-.2601,-.2271,3.7361,-.325
                    ,-.2484,3.6165,-.3195,-.3023,4.0745,-.3396,-.2558,4.2841,-.3242,-.2859,4.3064,-.3147,-.1623,4.4432,-.3403,-.1592,4.5052,-.2958,-.1961,4.5232,-.2514,-.3023,4.0745,-.3396,-.2859,4.3064,-.3147,-.1623,4.4432,-.3403,-.2616,4.4597,-.2638,-.2859,4.3064,-.3147,-.2558,4.2841,-.3242,-.3023,4.0745,-.3396,-.2486,4.1679,-.2692,-.1623,4.4432,-.3403,-.2558,4.2841,-.3242
                    ,-.1426,4.4526,-.2914,-.1499,4.5987,-.3288,-.1177,4.5753,-.3485,-.1499,4.5987,-.3288,-.0547,4.5887,-.3532,-.1933,3.6663,-.3069,-.3023,4.0745,-.3396,-.2486,4.1679,-.2692,-.1807,3.8779,-.3494,-.1933,3.6663,-.3069,-.1758,3.7952,-.2973,-.2288,3.6127,-.3189,-.032,4.7444,.1415,.0208,4.7426,.0922,-.2455,4.0185,.3117,-.3746,3.7796,.3231,-.1857,4.1489,.3082
                    ,-.1525,4.4262,.2716,-.1594,4.5001,.1762,-.1594,4.5001,.1762,-.1701,4.5648,.1532,-.221,3.7146,.4508,-.2784,3.747,.3908,-.3847,3.7582,.2927,-.3746,3.7796,.3231,-.2784,3.747,.3908,-.4694,3.7446,.2703,-.2794,4.1729,.172,-.3746,3.7796,.3231,-.2673,4.4544,.0525,-.2057,4.4729,.1219,-.2462,4.4507,.1309,-.2462,4.4507,.1309,-.2057,4.4729,.1219
                    ,-.2126,4.4032,.1789,-.3622,4.0682,-.023,-.4939,3.8033,-.0476,-.3297,4.0124,-.204,-.2616,4.4597,-.2638,-.2833,4.4447,-.1414,-.2833,4.4447,-.1414,-.2616,4.4597,-.2638,-.2163,4.5266,-.1352,-.2256,4.4892,-.0818,-.2163,4.5266,-.1352,-.4939,3.8033,-.0476,-.4369,3.8463,-.0984,-.4792,3.7698,-.0892,-.3297,4.0124,-.204,-.4019,3.8134,-.1504,-.4167,3.7474,-.1485
                    ,-.2339,4.6322,-.0488,-.2339,4.6322,-.0488,-.1682,4.6731,.1093,-.1682,4.6731,.1093,-.0506,4.6739,.2255,-.2044,4.6038,-.2346,-.0506,4.6739,.2255,.0151,4.7703,-.0774,-.0221,4.7895,-.1531,.0077,4.6931,-.2999,.0077,4.6931,-.2999,-.0214,4.7289,-.3033,.0051,4.5665,-.3768,-.2253,4.2475,-.1036,-.192,4.3662,-.1672,-.2289,4.4866,-.2106,-.1499,4.5987,-.3288
                    ,-.2044,4.6038,-.2346,-.1961,4.5232,-.2514,-.2084,4.5373,-.2025,-.3023,4.0745,-.3396,-.2794,3.9513,-.3091,-.2794,3.9513,-.3091,-.3904,3.7226,-.2398,-.4167,3.7474,-.1485,-.367,3.6641,-.2556,-.1623,4.4432,-.3403,-.1961,4.5232,-.2514,-.1961,4.5232,-.2514,-.2859,4.3064,-.3147,-.2616,4.4597,-.2638,-.1972,4.0537,-.2252,-.2343,4.1394,-.1514,-.2558,4.2841,-.3242
                    ,-.1426,4.4526,-.2914,-.1426,4.4526,-.2914,-.1807,3.8779,-.3494,-.1851,3.9623,-.233,-.1426,4.4526,-.2914,-.192,4.3662,-.1672,-.1407,4.4186,-.2038,-.1623,4.4432,-.3403,-.1426,4.4526,-.2914,-.1592,4.5052,-.2958,-.1499,4.5987,-.3288,-.0365,4.631,-.4001,.0051,4.5665,-.3768,-.0365,4.631,-.4001,-.1823,3.8686,-.2302,-.1713,3.7878,-.2495,.0208,4.7426,.0922
                    ,.0767,4.7444,.1379,.2654,4.168,-.2863,.1924,3.8779,-.3619,.2654,4.168,-.2863,.1924,3.8779,-.3619,-.0506,4.6739,.2255,-.032,4.7444,.1415,-.2044,4.6038,-.2346,-.2097,4.3492,-.129,-.1807,3.8779,-.3494,-.1807,3.8779,-.3494,.148,4.5407,.225,.2049,4.4852,.1843,.1487,4.4839,.2465,.2535,4.5486,.0701,.2807,4.4952,-.0644,.2709,4.4902,.074
                    ,.2456,4.5586,-.1888,.2126,4.5051,-.3063,.2572,4.5001,-.1914,.1171,4.5656,-.3619,.0047,4.5092,-.3897,.1166,4.4952,-.3749,.0264,4.5379,.2598,.027,4.4826,.278,.2651,4.5536,-.0616,-.1568,4.4852,.1964,-.0973,4.5407,.2332,-.0966,4.4839,.2547,-.2491,4.4951,-.0467,-.2129,4.5486,.0857,-.2301,4.4902,.0907,-.1972,4.5051,-.2926,-.2223,4.5585,-.1731
                    ,-.2341,4.5001,-.175,-.1056,4.5656,-.3545,-.106,4.4952,-.3674,-.1428,4.5436,.1993,-.2333,4.5536,-.0449,-.1857,4.5635,-.2907,-.0377,4.4874,-.3821,.0045,4.4887,-.3956,.0475,4.4874,-.385,-.0255,4.3791,-.4015,.0039,4.3801,-.4132,.034,4.3791,-.4035,.1911,4.5436,.1882,.2012,4.5635,-.3036,.0053,4.5677,-.3717
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
                    .2066,-.1722,.9631,.1593,.1486,.976,.5852,-.4603,.6675,.5665,-.1787,.8044,.572,-.1546,.8055,.12,.4348,.8925,.5522,.4538,.6994,.616,.3999,.6787,.2467,.2553,.9348,.3142,.1027,.9438,.0334,.015,.9993,.2684,.2383,.9333,.0305,.401,.9156,.6547,.1858,.7326,.6897,.3421,.6381,.645,-.065,.7613,.6243,.2656,.7346
                    ,.6243,.2656,.7346,.8816,.312,.354,.6897,.3421,.6381,.7871,.3097,.5335,.6243,.2656,.7346,.616,.3999,.6787,.758,.3382,.5576,.7383,.5015,.4509,-.0064,-.0123,.9999,.5852,-.4603,.6675,.3766,-.9106,-.1699,-.0064,-.0123,.9999,.8708,.4873,-.0651,.7841,.5657,.2551,.9072,.3995,-.1318,.2304,-.7714,.5931,.645,-.065,.7613
                    ,.4539,.2821,.8452,.8577,.5136,-.0233,.9685,.2357,.0803,.9772,.1877,-.0991,.6305,.4986,.5948,.9325,.3263,.1548,.6889,.5647,.4544,.9007,.4136,.1325,.4539,.2821,.8452,.8816,.312,.354,.6305,.4986,.5948,.8816,.312,.354,.7871,.3097,.5335,.6889,.5647,.4544,.9855,.1682,-.0196,.8549,.2332,-.4634,.9648,.0904,-.247
                    ,.9137,.3966,-.0882,.9772,.1877,-.0991,.4727,.817,-.3301,.749,.4827,-.4539,.8785,.4282,-.2117,.8736,.3821,-.3014,.9059,.413,.0936,.9025,.3802,-.2024,.7918,.2212,-.5692,.769,.3424,-.5397,.7747,.3926,-.4955,.7158,.1109,-.6894,.789,.1848,-.586,.679,.1427,-.7201,.933,.1682,.3182,.8104,.1554,.5649,.7495,.5464,.3736
                    ,.9459,.3231,-.0293,.9794,-.0195,-.2009,-.03,.9931,.1134,-.0001,1,-.0033,-.221,.9508,-.217,.6163,.7852,.0604,.7495,.5464,.3736,-.03,.9931,.1134,.012,.9327,.3604,.0683,.8873,.456,.3227,.5491,.771,.0683,.8873,.456,.7495,.5464,.3736,.8104,.1554,.5649,.0306,.3944,.9184,-.2778,.8016,-.5293,.5264,.691,-.4954
                    ,.585,.7725,-.2469,.5264,.691,-.4954,-.1279,.1671,-.9776,.6341,.1657,-.7553,-.0239,.6969,-.7168,-.0331,-.1151,-.9928,-.1279,.1671,-.9776,.8788,.2509,-.4058,.585,.7725,-.2469,.9542,.1255,-.2716,.7992,.292,-.5253,.4848,.2632,-.834,.8137,.2111,-.5416,.6755,-.0326,-.7366,.3722,-.0208,-.9279,.6755,-.0326,-.7366,-.6225,.0415,-.7815
                    ,.56,.0526,-.8268,.6755,-.0326,-.7366,.0428,-.1046,-.9936,.0824,-.0194,-.9964,.6969,.3255,-.639,.7607,.1533,-.6306,-.311,-.1036,-.9447,-.452,.0939,-.887,.7607,.1533,-.6306,.6969,.3255,-.639,.749,.4827,-.4539,-.452,.0939,-.887,.7607,.1533,-.6306,-.311,-.1036,-.9447,-.9593,-.0099,-.2821,.6969,.3255,-.639,-.452,.0939,-.887
                    ,-.9446,-.2274,-.2367,-.311,-.1036,-.9447,.3107,.2428,-.9189,.6341,.1657,-.7553,.2935,-.5496,-.7822,.3107,.2428,-.9189,-.4742,-.0874,-.876,.6969,.3255,-.639,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9965,-.0066,-.0832,-.4742,-.0874,-.876,-.1985,-.0504,-.9788,.0319,.2944,.9551,.0683,.8873,.456,.8816,.312,.354,.6243,.2656,.7346
                    ,.616,.3999,.6787,.758,.3382,.5576,.758,.3382,.5576,.8104,.1554,.5649,.5852,-.4603,.6675,.6547,.1858,.7326,.6547,.1858,.7326,.645,-.065,.7613,.4539,.2821,.8452,.8816,.312,.354,.9007,.4136,.1325,.6889,.5647,.4544,.7383,.5015,.4509,.6889,.5647,.4544,.7871,.3097,.5335,.7383,.5015,.4509,.749,.4827,-.4539
                    ,.749,.4827,-.4539,.749,.4827,-.4539,.585,.7725,-.2469,.6163,.7852,.0604,.6163,.7852,.0604,.6163,.7852,.0604,-.03,.9931,.1134,.7495,.5464,.3736,.0683,.8873,.456,.7495,.5464,.3736,.8104,.1554,.5649,.5264,.691,-.4954,-.1279,.1671,-.9776,.5264,.691,-.4954,.585,.7725,-.2469,-.9807,-.1828,.0693,-.9267,-.3403,.1591
                    ,-.8841,-.0389,.4656,.4727,.817,-.3301,.4727,.817,-.3301,.6969,.3255,-.639,.6755,-.0326,-.7366,.56,.0526,-.8268,.4881,-.1129,-.8654,-.452,.0939,-.887,-.452,.0939,-.887,.749,.4827,-.4539,.7992,.292,-.5253,.749,.4827,-.4539,.4727,.817,-.3301,.7607,.1533,-.6306,.749,.4827,-.4539,-.9593,-.0099,-.2821,-.9885,.15,-.0172
                    ,-.9031,.2331,-.3607,-.9593,-.0099,-.2821,-.311,-.1036,-.9447,-.9446,-.2274,-.2367,-.9593,-.0099,-.2821,-.9446,-.2274,-.2367,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9786,.1893,-.0798,-.9955,.0644,.0686,-.9446,-.2274,-.2367,-.5811,-.7672,-.2716,-.452,.0939,-.887,.4848,.2632,-.834,.6341,.1657,-.7553,-.1279,.1671,-.9776,.2935,-.5496,-.7822
                    ,.2935,-.5496,-.7822,-.1279,.1671,-.9776,-.0331,-.1151,-.9928,-.9593,-.0099,-.2821,-.9886,.1506,-.0023,-.1419,-.1722,.9748,-.5394,-.4603,.705,-.0938,.1486,.9844,-.5116,-.1787,.8404,-.517,-.1546,.8419,-.0603,.4348,.8985,-.5694,.3999,.7182,-.5043,.4538,.7346,-.1838,.2553,.9492,-.2506,.1027,.9626,-.2056,.2383,.9492,-.6044,.1858,.7747
                    ,-.5928,-.065,.8027,-.6456,.342,.6827,-.5739,.2656,.7747,-.5739,.2656,.7747,-.6456,.342,.6827,-.8561,.312,.412,-.7497,.3097,.5848,-.5739,.2656,.7747,-.5694,.3999,.7182,-.7192,.3382,.6069,-.7066,.5015,.4992,.0731,-.0123,.9972,-.5394,-.4603,.705,.0731,-.0123,.9972,-.387,-.9106,-.1444,-.8732,.4873,-.0069,-.914,.3995,-.071
                    ,-.7654,.5657,.3069,-.1904,-.7714,.6071,-.3965,.2821,.8736,-.5928,-.065,.8027,-.8573,.5136,.034,-.9816,.1877,-.0337,-.961,.2357,.1447,-.9201,.3263,.2166,-.5894,.4986,.6355,-.8899,.4136,.1923,-.6571,.5647,.4993,-.3965,.2821,.8736,-.5894,.4986,.6355,-.8561,.312,.412,-.9846,.1682,.0462,-.8839,.2332,-.4053,-.9791,.0904,-.1821
                    ,-.8573,.5136,.034,-.8899,.4136,.1923,-.9176,.3966,-.0271,-.9816,.1877,-.0337,-.7776,.4827,-.403,-.4936,.817,-.2979,-.8907,.4282,-.1527,-.8918,.3821,-.2424,-.8976,.413,.1538,-.914,.3801,-.1417,-.8281,.2211,-.5152,-.8839,.2332,-.4053,-.8281,.2211,-.5152,-.8061,.3926,-.4428,-.8033,.3424,-.4872,-.8839,.2332,-.4053,-.8033,.3424,-.4872
                    ,-.7602,.1109,-.6401,-.7602,.1109,-.6401,-.7255,.1427,-.6732,-.8263,.1848,-.532,-.9097,.1682,.3797,-.723,.5464,.4228,-.7709,.1554,.6177,-.9457,.3231,.0338,-.9906,-.0195,-.1351,.0375,.9931,.1111,.206,.9508,-.2312,-.0001,1,-.0033,-.6109,.7852,.1013,-.723,.5464,.4228,.0375,.9931,.1111,-.0001,1,-.0033,.012,.9327,.3604
                    ,-.0378,.8873,.4595,.012,.9327,.3604,-.2705,.5491,.7908,-.723,.5464,.4228,-.7709,.1554,.6177,-.2705,.5491,.7908,-.2705,.5491,.7908,.2419,.8016,-.5466,-.6002,.7725,-.2073,-.5583,.691,-.4592,-.683,.1657,-.7114,.0624,.1671,-.9839,.206,.9508,-.2312,.2419,.8016,-.5466,-.0239,.6969,-.7168,-.0331,-.1151,-.9928,.2419,.8016,-.5466
                    ,.0624,.1671,-.9839,-.9039,.2509,-.3463,-.9457,.3231,.0338,-.9702,.1255,-.2074,-.8325,.292,-.4708,-.9039,.2509,-.3463,-.5394,.2632,-.7999,-.683,.1657,-.7114,-.8325,.292,-.4708,-.848,.2111,-.4862,-.7231,-.0326,-.6899,-.4333,-.0208,-.901,.569,.0415,-.8213,-.7231,-.0326,-.6899,-.7231,-.0326,-.6899,-.6139,.0526,-.7876,-.109,-.1046,-.9885
                    ,-.1486,-.0194,-.9887,-.738,.3255,-.5911,.2473,-.1036,-.9634,-.8011,.1533,-.5785,.3919,.0939,-.9152,-.5394,.2632,-.7999,-.8325,.292,-.4708,-.738,.3255,-.5911,-.8011,.1533,-.5785,.3919,.0939,-.9152,-.7776,.4827,-.403,-.8011,.1533,-.5785,.2473,-.1036,-.9634,-.738,.3255,-.5911,.9384,-.0099,-.3454,.3919,.0939,-.9152,.2473,-.1036,-.9634
                    ,.9267,-.2274,-.2991,-.683,.1657,-.7114,-.3713,.2428,-.8962,-.683,.1657,-.7114,-.345,-.5496,-.7608,.4147,-.0874,-.9057,-.738,.3255,-.5911,.9384,-.0099,-.3454,.569,.0415,-.8213,.4147,-.0874,-.9057,.9887,-.0065,-.1495,.1328,-.0504,-.9898,-.0378,.8873,.4595,.012,.9327,.3604,-.6456,.342,.6827,-.5928,-.065,.8027,-.5739,.2656,.7747
                    ,-.5694,.3999,.7182,-.7192,.3382,.6069,-.7192,.3382,.6069,-.7709,.1554,.6177,-.5394,-.4603,.705,-.6044,.1858,.7747,-.1904,-.7714,.6071,-.5928,-.065,.8027,-.6044,.1858,.7747,-.3965,.2821,.8736,-.8561,.312,.412,-.5928,-.065,.8027,-.8899,.4136,.1923,-.7066,.5015,.4992,-.6571,.5647,.4993,-.6571,.5647,.4993,-.7066,.5015,.4992
                    ,-.7497,.3097,.5848,-.914,.3995,-.071,-.914,.3801,-.1417,-.8839,.2332,-.4053,-.7776,.4827,-.403,-.9176,.3966,-.0271,-.9176,.3966,-.0271,-.7776,.4827,-.403,-.9816,.1877,-.0337,-.8573,.5136,.034,-.9816,.1877,-.0337,-.914,.3801,-.1417,-.8281,.2211,-.5152,-.8033,.3424,-.4872,-.8839,.2332,-.4053,-.7602,.1109,-.6401,-.8263,.1848,-.532
                    ,-.9457,.3231,.0338,-.9457,.3231,.0338,-.723,.5464,.4228,-.723,.5464,.4228,-.2705,.5491,.7908,-.9039,.2509,-.3463,-.2705,.5491,.7908,-.0001,1,-.0033,.206,.9508,-.2312,-.0239,.6969,-.7168,-.0239,.6969,-.7168,.2419,.8016,-.5466,-.0331,-.1151,-.9928,.9831,-.1828,.0038,.9353,-.3403,.0969,-.4936,.817,-.2979,-.683,.1657,-.7114
                    ,-.9039,.2509,-.3463,-.8325,.292,-.4708,-.9702,.1255,-.2074,-.738,.3255,-.5911,-.7231,-.0326,-.6899,-.7231,-.0326,-.6899,-.848,.2111,-.4862,-.8263,.1848,-.532,-.5447,-.1129,-.831,.3919,.0939,-.9152,-.8325,.292,-.4708,-.8325,.292,-.4708,-.8011,.1533,-.5785,-.7776,.4827,-.403,.877,.2331,-.4201,.9852,.15,-.0831,.2473,-.1036,-.9634
                    ,.9267,-.2274,-.2991,.9267,-.2274,-.2991,.569,.0415,-.8213,.9711,.1893,-.1449,.9267,-.2274,-.2991,.9353,-.3403,.0969,.5617,-.7672,-.3098,.3919,.0939,-.9152,.9267,-.2274,-.2991,-.5394,.2632,-.7999,-.683,.1657,-.7114,.0624,.1671,-.9839,-.0331,-.1151,-.9928,.0624,.1671,-.9839,.9979,.0644,.002,.9862,.1506,-.0682,.012,.9327,.3604
                    ,.0683,.8873,.456,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.9593,-.0099,-.2821,-.6225,.0415,-.7815,-.2705,.5491,.7908,-.0378,.8873,.4595,-.9039,.2509,-.3463,.9132,-.0389,.4056,.569,.0415,-.8213,.569,.0415,-.8213,.5124,.2705,.815,.7869,.194,.5858,.4698,.3111,.8261,.9167,.2717,.2927,.9634,.2654,-.0378,.9085,.2914,.2994
                    ,.948,.1991,-.2484,.7819,.18,-.5968,.9465,.2087,-.2458,.3647,.1846,-.9126,-.0323,.2414,-.9698,.3432,.159,-.9257,.0316,.3239,.9456,.0317,.3122,.9495,.9673,.2515,-.0324,-.7461,.194,.637,-.4569,.2705,.8474,-.4136,.3111,.8556,-.9638,.2654,.0266,-.8952,.2717,.3532,-.8865,.2914,.3593,-.82,.18,-.5433,-.9624,.1991,-.1846
                    ,-.9608,.2087,-.1822,-.4248,.1846,-.8863,-.4042,.159,-.9007,-.714,.1358,.6868,-.9673,.2514,.0322,-.8027,.1771,-.5694,-.247,.1046,-.9633,-.0326,.2095,-.9772,.1823,.1046,-.9777,-.3548,.1468,-.9233,-.0329,.16,-.9865,.2925,.1468,-.9449,.7582,.1358,.6377,.7629,.1771,-.6217,-.0319,.2934,-.9554
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
                    -1.0651,2.231,.1117,-1.9789,2.3434,-1.4885,-1.0439,2.1312,.1022,-1.0543,2.0686,.0903,-2.0001,2.3389,-1.4767,-1.0691,2.1259,.1163,-1.9995,2.3062,-1.5139,-2.2033,2.4761,-1.7889,-1.0823,2.2274,.1213,-2.1821,2.4806,-1.8007,-1.9995,2.3062,-1.5139,-1.0543,2.0686,.0903,-1.1052,2.1185,.1353,-1.0673,1.9932,.1557,-1.1,2.0005,.0998,-1.1223,2.2191,.1428,-1.0828,2.2103,.2101
                    ,-1.078,2.1637,.2012,-1.0188,2.0601,.1508,-1.0673,1.9932,.1557,-1.0725,2.1114,.1912,-1.0077,2.1391,.0809,-.975,2.132,.1368,-.9806,2.1863,.1472,-1.0025,2.0211,.0454,-1.0193,1.9962,.1257,-.9698,2.0138,.1013,-.9698,2.0138,.1013,-1.0193,1.9962,.1257,-1.0502,2.0675,.0974,-1.1,2.0005,.0998,-1.0507,2.0036,.0723,-1.0025,2.0211,.0454,-1.0077,2.1391,.0809
                    ,-.8483,2.1208,.5484,-.7821,2.0064,.5513,-.8195,2.1282,.5304,-1.0307,2.175,.173,-.975,2.132,.1368,-1.078,2.1637,.2012,-.7408,2.019,.5316,-.7475,1.9985,.6103,-.7062,2.0112,.5906,-.8523,2.1569,.6148,-.821,1.9938,.5753,-.7889,2.1354,.5155,-.7434,2.1799,.5541,-.7834,2.1826,.5185,-.8177,2.1492,.6738,-.739,2.1155,.6987,-.7865,1.986,.6343
                    ,-.7275,2.1184,.6915,-.7089,2.1722,.6131,-.7275,2.1184,.6915,-.7427,2.151,.7055,-.7312,2.1536,.6983,-.7153,2.1213,.6856,-.719,2.156,.6923,-.7153,2.1213,.6856,-.719,2.156,.6923,-.7153,2.1213,.6856,-1.0077,2.1391,.0809,-1.0543,2.0686,.0903,-1.0691,2.1259,.1163,-1.1223,2.2191,.1428,-1.1052,2.1185,.1353,-1.0691,2.1259,.1163,-1.1052,2.1185,.1353
                    ,-1.0247,2.2397,.0884,-1.0439,2.1312,.1022,-1.0077,2.1391,.0809,-1.9986,2.5317,-1.4524,-1.0878,2.3887,.1517,-2.0198,2.5272,-1.4406,-2.0272,2.5707,-1.4632,-2.268,2.4951,-1.9234,-1.0898,2.3241,.1543,-2.0272,2.5707,-1.4632,-1.0878,2.3887,.1517,-1.0646,2.3295,.1402,-1.1259,2.3167,.1733,-1.1131,2.4308,.2395,-1.0932,2.3093,.2291,-1.0877,2.257,.2191,-1.1131,2.4308,.2395
                    ,-1.0524,2.3814,.2124,-1.0932,2.3093,.2291,-.99,2.2756,.1643,-1.0284,2.3373,.1188,-1.0247,2.2397,.0884,-1.0666,2.4485,.2124,-1.0482,2.4587,.1292,-1.0155,2.4514,.1851,-1.1458,2.438,.1836,-1.0979,2.4551,.1588,-1.0155,2.4514,.1851,-.9957,2.3299,.1747,-1.0837,2.3879,.1588,-1.1458,2.438,.1836,-1.1259,2.3167,.1733,-1.0482,2.4587,.1292,-1.0284,2.3373,.1188
                    ,-.9957,2.3299,.1747,-.816,2.331,.6135,-.8582,2.2148,.5665,-.8291,2.2204,.5481,-1.0403,2.2665,.1905,-.99,2.2756,.1643,-1.0932,2.3093,.2291,-1.0877,2.257,.2191,-.7738,2.335,.5921,-.7815,2.3235,.6725,-.8635,2.1657,.5631,-.7983,2.2255,.5328,-.7464,2.1865,.7123,-.8212,2.3183,.6979,-.8557,2.3259,.6389,-.7349,2.1888,.705,-.7226,2.1908,.6989
                    ,-.7226,2.1908,.6989,-.7393,2.3274,.6511,-.7226,2.1908,.6989,-1.0284,2.3373,.1188,-1.0878,2.3887,.1517,-1.0646,2.3295,.1402,-1.1223,2.2191,.1428,-1.0898,2.3241,.1543,-1.1259,2.3167,.1733,-1.0898,2.3241,.1543,-1.0878,2.3887,.1517,-1.0646,2.3295,.1402,-1.0651,2.231,.1117,-.773,2.1798,.5389,-1.0202,2.2631,.1643,-1.0013,2.2306,.149,-1.0202,2.2631,.1643
                    ,-.8269,2.214,.5749,-1.0552,2.2648,.185,-.8269,2.214,.5749,-1.0799,2.2343,.1955,-1.0552,2.2648,.185,-1.0799,2.2343,.1955,-.8474,2.1437,.5778,-1.0757,2.1945,.1879,-1.0757,2.1945,.1879,-.8176,2.1247,.5578,-1.0458,2.1755,.1679,-.773,2.1798,.5389,-.8176,2.1247,.5578,-.8269,2.214,.5749,-.8176,2.1247,.5578,-1.0127,2.1916,.1506,-1.0458,2.1755,.1679
                    ,-.7845,2.1408,.5405,-1.0013,2.2306,.149,-1.0127,2.1916,.1506,-1.0552,2.2648,.185,-1.0799,2.2343,.1955,-1.0458,2.1755,.1679,-.99,2.2756,.1643,-.9853,2.231,.1557,-1.0828,2.2103,.2101,-.8635,2.1657,.5631,-.7834,2.1826,.5185,-.8291,2.2204,.5481,-2.268,2.4951,-1.9234,-1.9995,2.3062,-1.5139,-1.9995,2.3062,-1.5139,-1.0543,2.0686,.0903,-1.0725,2.1114,.1912
                    ,-1.0725,2.1114,.1912,-1.0193,1.9962,.1257,-1.0673,1.9932,.1557,-.9853,2.231,.1557,-1.0247,2.2397,.0884,-1.0247,2.2397,.0884,-1.0507,2.0036,.0723,-1.0507,2.0036,.0723,-.975,2.132,.1368,-.9698,2.0138,.1013,-1.1052,2.1185,.1353,-1.1,2.0005,.0998,-1.0025,2.0211,.0454,-.9806,2.1863,.1472,-.975,2.132,.1368,-.7427,2.151,.7055,-.7275,2.1184,.6915
                    ,-.739,2.1155,.6987,-.7275,2.1184,.6915,-.7153,2.1213,.6856,-.7153,2.1213,.6856,-1.0077,2.1391,.0809,-1.0439,2.1312,.1022,-1.0543,2.0686,.0903,-1.0691,2.1259,.1163,-1.0823,2.2274,.1213,-1.1223,2.2191,.1428,-1.0543,2.0686,.0903,-1.0691,2.1259,.1163,-1.0651,2.231,.1117,-1.0439,2.1312,.1022,-2.0272,2.5707,-1.4632,-2.268,2.4951,-1.9234,-1.0878,2.3887,.1517
                    ,-2.0272,2.5707,-1.4632,-1.1131,2.4308,.2395,-1.0666,2.4485,.2124,-1.0247,2.2397,.0884,-.9853,2.231,.1557,-.9957,2.3299,.1747,-1.0666,2.4485,.2124,-1.0155,2.4514,.1851,-1.0979,2.4551,.1588,-1.1458,2.438,.1836,-1.0482,2.4587,.1292,-1.0979,2.4551,.1588,-1.0932,2.3093,.2291,-.7427,2.151,.7055,-.7349,2.1888,.705,-.7464,2.1865,.7123,-.719,2.156,.6923
                    ,-.7226,2.1908,.6989,-.7226,2.1908,.6989,-.7349,2.1888,.705,-1.0284,2.3373,.1188,-1.0878,2.3887,.1517,-1.1223,2.2191,.1428,-1.0823,2.2274,.1213,-1.0898,2.3241,.1543,-1.1259,2.3167,.1733,-1.0898,2.3241,.1543,-1.0284,2.3373,.1188,-1.0646,2.3295,.1402,-.7919,2.2123,.5542,-1.0202,2.2631,.1643,-.7919,2.2123,.5542,-.8269,2.214,.5749,-.8516,2.1834,.5854
                    ,-1.0799,2.2343,.1955,-.8516,2.1834,.5854,-1.0757,2.1945,.1879,-.8474,2.1437,.5778,-.8269,2.214,.5749,-.7919,2.2123,.5542,-.773,2.1798,.5389,-.773,2.1798,.5389,-.7845,2.1408,.5405,-.8176,2.1247,.5578,-.8176,2.1247,.5578,-.8474,2.1437,.5778,-.8516,2.1834,.5854,-.8516,2.1834,.5854,-.8269,2.214,.5749,-.8176,2.1247,.5578,-.8176,2.1247,.5578
                    ,-.7845,2.1408,.5405,-.773,2.1798,.5389,-1.0013,2.2306,.149,-1.0127,2.1916,.1506,-1.0013,2.2306,.149,-1.0458,2.1755,.1679,-1.0202,2.2631,.1643,-1.0552,2.2648,.185,-1.0458,2.1755,.1679,-1.0799,2.2343,.1955,-1.0757,2.1945,.1879,-1.0458,2.1755,.1679,-1.0458,2.1755,.1679,-1.0013,2.2306,.149,-1.0202,2.2631,.1643,-.9806,2.1863,.1472,-1.078,2.1637,.2012
                    ,-1.0828,2.2103,.2101,-1.0877,2.257,.2191,-1.0828,2.2103,.2101,-.7889,2.1354,.5155,-.7834,2.1826,.5185,-.8195,2.1282,.5304,-.7983,2.2255,.5328,-.8291,2.2204,.5481,-.7834,2.1826,.5185,-.8582,2.2148,.5665,-.8635,2.1657,.5631,-.8291,2.2204,.5481,-.8483,2.1208,.5484,-.8195,2.1282,.5304,-.8635,2.1657,.5631,-.7834,2.1826,.5185,-.8635,2.1657,.5631
                    ,-.8195,2.1282,.5304
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
                ,48,111,218,114,111,115,116,116,115,48,52,120,110,54,219,117,55,117,118,52,220,221,222,223,111,224,97,225,226,227,228,97,229,230,68,231,232,132,233,133,234,235,136,236,237,139,238,239,142,240
                ,241,145], 243);
                CONTIG(_i, 495, 242, 255);
                _i.set([151,153], 509);
                CONTIG(_i, 511, 256, 269);
                _i.set([160,270,37,37,106,160,271,272,37,273,106], 525);
                CONTIG(_i, 536, 274, 289);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .3019,.2097,-.93,.8574,.0326,-.5136,.159,.1507,-.9757,-.1612,-.933,-.3218,-.8401,-.3262,.4334,-.9213,-.1383,-.3634,.0196,-.9461,-.3233,-.8938,-.1727,.4138,-.974,-.06,-.2184,.8189,.1894,-.5417,.0196,-.9461,-.3233,-.1612,-.933,-.3218,-.9632,-.0768,-.2575,-.2075,-.734,.6467,-.7784,-.5092,-.367,-.9491,-.0393,-.3125,-.2369,-.2066,.9493
                    ,-.2369,-.2066,.9493,.5096,-.2226,.8311,-.2075,-.734,.6467,-.2314,-.2262,.9462,.2797,.1943,-.9402,.9591,.0252,.2817,.9582,.0461,.2822,.2265,-.2982,-.9272,.3792,-.853,.3585,.8591,-.5092,.0514,.8591,-.5092,.0514,.3792,-.853,.3585,-.5406,-.0302,-.8407,-.7784,-.5092,-.367,-.3088,-.5644,-.7656,.2265,-.2982,-.9272,.2797,.1943,-.9402
                    ,-.8283,-.188,-.5277,-.1406,-.7286,-.6703,-.4682,-.0764,-.8803,.5024,-.112,.8573,.9591,.0252,.2817,-.2369,-.2066,.9493,.3756,-.4817,-.7917,.4072,-.8816,.2384,.8101,-.5857,-.0269,-.9381,-.1572,.3085,-.629,-.7385,-.2428,.023,-.0081,-.9997,.7481,.1994,-.6329,.1748,.2028,-.9635,-.6655,-.2069,.7171,.1527,-.3449,.9261,-.1708,-.8382,.5179
                    ,.5179,-.3375,.786,.9706,.1391,-.1964,.5179,-.3375,.786,.0949,-.1777,.9795,.5019,-.1118,.8577,.8016,-.204,.5619,.8164,-.0251,.5769,.8016,-.204,.5619,.8164,-.0251,.5769,.8016,-.204,.5619,.2797,.1943,-.9402,-.1612,-.933,-.3218,-.9213,-.1383,-.3634,-.9491,-.0393,-.3125,-.9632,-.0768,-.2575,-.9213,-.1383,-.3634,-.9632,-.0768,-.2575
                    ,.2061,.2048,-.9568,.159,.1507,-.9757,.2797,.1943,-.9402,.8264,.3292,-.4568,-.3564,.9336,.0357,-.8711,-.0296,.4902,-.182,.9822,.046,-.502,.1118,-.8576,-.9435,.0748,-.3226,-.182,.9822,.046,-.3564,.9336,.0357,.1485,.2515,-.9564,-.9683,-.0283,-.2482,-.325,.3894,.8618,-.2355,-.1865,.9538,-.2369,-.2066,.9493,-.325,.3894,.8618
                    ,.4863,.0002,.8737,-.2355,-.1865,.9538,.9582,.0461,.2822,.2767,.223,-.9347,.2061,.2048,-.9568,.2147,.7201,.6598,.1268,.6554,-.7446,.7415,.6156,.2669,-.8778,.4418,-.1849,-.4442,.7314,-.5173,.7415,.6156,.2669,.9549,.0655,.2894,-.5675,.227,-.7915,-.8778,.4418,-.1849,-.9683,-.0283,-.2482,.1268,.6554,-.7446,.2767,.223,-.9347
                    ,.9549,.0655,.2894,-.3087,.8794,-.3623,-.8688,.1985,-.4537,-.5073,.298,-.8086,.5023,-.1113,.8574,.9582,.0461,.2822,-.2355,-.1865,.9538,-.2369,-.2066,.9493,.2413,.8024,-.5458,.2319,.7956,.5596,-.9383,-.0321,-.3444,-.0173,.3775,-.9258,.1161,.0053,.9932,-.3147,.5385,.7816,-.7725,.6346,.0202,.4698,.1227,.8742,.7656,.14,.6278
                    ,.7656,.14,.6278,.6752,.704,.22,.7656,.14,.6278,.2767,.223,-.9347,-.3564,.9336,.0357,.1485,.2515,-.9564,-.9491,-.0393,-.3125,-.9435,.0748,-.3226,-.9683,-.0283,-.2482,-.9435,.0748,-.3226,-.3564,.9336,.0357,.1485,.2515,-.9564,.3019,.2097,-.93,.9848,.0728,.1573,.0451,.7567,-.6522,.361,.2117,-.9082,.0451,.7567,-.6522
                    ,.0841,.6453,.7593,-.5397,.7842,-.3063,.0841,.6453,.7593,-.9529,.2734,-.1309,-.5397,.7842,-.3063,-.9529,.2734,-.1309,-.2597,-.5298,.8074,-.8835,-.3909,-.2581,-.8835,-.3909,-.2581,.2402,-.8475,.4733,-.3836,-.7086,-.5922,.9848,.0728,.1573,.2402,-.8475,.4733,.0841,.6453,.7593,.2402,-.8475,.4733,.1702,-.4404,-.8815,-.3836,-.7086,-.5922
                    ,.794,-.5793,.184,.361,.2117,-.9082,.1702,-.4404,-.8815,-.5397,.7842,-.3063,-.9529,.2734,-.1309,-.3836,-.7086,-.5922,.9582,.0461,.2822,.9582,.0461,.2822,-.2369,-.2066,.9493,-.9383,-.0321,-.3444,.1748,.2028,-.9635,-.5073,.298,-.8086,-.502,.1118,-.8576,.0196,-.9461,-.3233,.0196,-.9461,-.3233,-.1612,-.933,-.3218,-.2314,-.2262,.9462
                    ,-.2314,-.2262,.9462,.3792,-.853,.3585,-.2075,-.734,.6467,.9582,.0461,.2822,.2061,.2048,-.9568,.2061,.2048,-.9568,-.3088,-.5644,-.7656,-.3088,-.5644,-.7656,.9591,.0252,.2817,.8591,-.5092,.0514,-.9632,-.0768,-.2575,-.7784,-.5092,-.367,.2265,-.2982,-.9272,.9582,.0461,.2822,.9591,.0252,.2817,.0949,-.1777,.9795,.5179,-.3375,.786
                    ,.1527,-.3449,.9261,.5179,-.3375,.786,.8016,-.204,.5619,.8016,-.204,.5619,.2797,.1943,-.9402,.159,.1507,-.9757,-.1612,-.933,-.3218,-.9213,-.1383,-.3634,-.974,-.06,-.2184,-.9491,-.0393,-.3125,-.1612,-.933,-.3218,-.9213,-.1383,-.3634,.3019,.2097,-.93,.159,.1507,-.9757,-.182,.9822,.046,-.502,.1118,-.8576,-.3564,.9336,.0357
                    ,-.182,.9822,.046,-.325,.3894,.8618,.2147,.7201,.6598,.2061,.2048,-.9568,.9582,.0461,.2822,.9549,.0655,.2894,.2147,.7201,.6598,.7415,.6156,.2669,-.4442,.7314,-.5173,-.8778,.4418,-.1849,.1268,.6554,-.7446,-.4442,.7314,-.5173,-.2355,-.1865,.9538,.0949,-.1777,.9795,.4698,.1227,.8742,.1161,.0053,.9932,.8164,-.0251,.5769
                    ,.7656,.14,.6278,.7656,.14,.6278,.4698,.1227,.8742,.2767,.223,-.9347,-.3564,.9336,.0357,-.9491,-.0393,-.3125,-.974,-.06,-.2184,-.9435,.0748,-.3226,-.9683,-.0283,-.2482,-.9435,.0748,-.3226,.2767,.223,-.9347,.1485,.2515,-.9564,.6689,.6178,.4133,.0451,.7567,-.6522,.6689,.6178,.4133,.0841,.6453,.7593,-.3291,.1346,.9346
                    ,-.9529,.2734,-.1309,-.3291,.1346,.9346,-.8835,-.3909,-.2581,-.2597,-.5298,.8074,.0841,.6453,.7593,.6689,.6178,.4133,.9848,.0728,.1573,.9848,.0728,.1573,.794,-.5793,.184,.2402,-.8475,.4733,.2402,-.8475,.4733,-.2597,-.5298,.8074,-.3291,.1346,.9346,-.3291,.1346,.9346,.0841,.6453,.7593,.2402,-.8475,.4733,.2402,-.8475,.4733
                    ,.794,-.5793,.184,.9848,.0728,.1573,.361,.2117,-.9082,.1702,-.4404,-.8815,.361,.2117,-.9082,-.3836,-.7086,-.5922,.0451,.7567,-.6522,-.5397,.7842,-.3063,-.3836,-.7086,-.5922,-.9529,.2734,-.1309,-.8835,-.3909,-.2581,-.3836,-.7086,-.5922,-.3836,-.7086,-.5922,.361,.2117,-.9082,.0451,.7567,-.6522,.9582,.0461,.2822,-.2369,-.2066,.9493
                    ,-.2369,-.2066,.9493,-.2369,-.2066,.9493,-.2369,-.2066,.9493,.023,-.0081,-.9997,.1748,.2028,-.9635,-.4682,-.0764,-.8803,-.0173,.3775,-.9258,-.5073,.298,-.8086,.1748,.2028,-.9635,-.8688,.1985,-.4537,-.9383,-.0321,-.3444,-.5073,.298,-.8086,-.8283,-.188,-.5277,-.4682,-.0764,-.8803,-.9383,-.0321,-.3444,.1748,.2028,-.9635,-.9383,-.0321,-.3444
                    ,-.4682,-.0764,-.8803
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .0691,.0059,.0287,.7771,.0266,.0002,.2762,.0037,.2477,.7771,.2498,.0002,.2643,.7888,.2073,.937,.2073,.0059,.0691,.937,.0121,.7888,.0002,.0037,.6581,.6588,.7223,.566,.776,.5866,.5432,.6904,.5368,.6058,.5854,.5983,.7062,.9165,.7701,.9757,.6399,.9758,.6383,.4195,.6279,.4887,.5756,.4877,.76,.4682
                    ,.7233,.5327,.7124,.4998,.7701,.8558,.7784,.9165,.7049,.7888,.7758,.7418,.7759,.7918,.7717,.8428,.6473,.8532,.6351,.4023,.5174,.2201,.704,.3137,.5824,.9165,.6399,.8558,.5834,.9758,.5178,.2179,.5148,.2188,.5152,.2173,.4755,.2781,.5158,.2217,.7393,.2073,.5333,.1627,.5987,.0322,.5024,.2244,.5087,.2167
                    ,.5139,.2201,.509,.216,.5116,.2061,.8253,.2612,.8088,.2386,.8185,.236,.8349,.2583,.8282,.2334,.5093,.2154,.5074,.2143,.5093,.2154,.6473,.8532,.688,.7881,.6492,.7661,.5346,.71,.6526,.7212,.6492,.7661,.6526,.7212,.5287,.8548,.6475,.8068,.6473,.8532,.1095,.7771,.1384,.0037,.1669,.7771,.1503,.7888
                    ,.2073,.9998,.1648,.0002,.1261,.7888,.138,.0037,.1116,.0002,.4267,.6755,.3506,.5946,.4363,.6054,.487,.6061,.2957,.9757,.3596,.9165,.4259,.9758,.4809,.4942,.4075,.4326,.5227,.4031,.3364,.5606,.2829,.4986,.3404,.5222,.2997,.629,.2805,.5673,.2957,.8558,.4259,.8558,.3584,.7746,.2916,.7221,.4161,.7115
                    ,.2874,.8231,.4106,.8436,.4272,.5031,.4969,.2099,.2805,.2246,.3102,.1164,.4835,.9165,.4846,.8558,.4259,.9758,.4825,.9758,.4984,.2081,.4994,.2111,.4132,.4023,.3743,.0244,.5048,.2147,.4989,.2126,.4966,.212,.8117,.2108,.8214,.2085,.5055,.2135,.5004,.2099,.5055,.2135,.4106,.8436,.3754,.7753,.4142,.7973
                    ,.5346,.71,.4158,.7566,.4161,.7115,.4158,.7566,.3754,.7753,.4142,.7973,.5309,.8016,.8893,.4914,.9307,.9548,.8893,.9548,.9316,.4905,.973,.0272,.973,.4905,.9316,.4914,.973,.9548,.9316,.9548,.8046,.8099,.8461,.3465,.8461,.8099,.8893,.4905,.9307,.0272,.9307,.4905,.8124,.1753,.781,.2182,.7637,.1542
                    ,.847,.0272,.8884,.4905,.847,.4905,.847,.4914,.8884,.9548,.847,.9548,.769,.0853,.7928,.1027,.7717,.1514,.4846,.8558,.5329,.8558,.5329,.9758,.7775,.0464,.7117,.0623,.7366,.0211,.0691,.9998,.0121,.7888,.0121,.7888,.0002,.0037,.6361,.5893,.6361,.5893,.7784,.9165,.7701,.9757,.5279,.4877,.5227,.4031
                    ,.5227,.4031,.776,.5262,.776,.5262,.6399,.8558,.7701,.8558,.6526,.7212,.7758,.7418,.7717,.8428,.5812,.8558,.6399,.8558,.5067,.2158,.8253,.2612,.8157,.2641,.8253,.2612,.5093,.2154,.5093,.2154,.6473,.8532,.6475,.8068,.688,.7881,.6492,.7661,.5325,.7618,.5346,.71,.688,.7881,.6492,.7661,.5309,.8016
                    ,.6475,.8068,.1261,.7888,.0691,.9998,.138,.0037,.1261,.7888,.2957,.9757,.2874,.9165,.5227,.4031,.5279,.4877,.4272,.5031,.2874,.9165,.2957,.8558,.2874,.7718,.2916,.7221,.2874,.8231,.2874,.7718,.4259,.9758,.5067,.2158,.5051,.2141,.8019,.2132,.5074,.2143,.5055,.2135,.5055,.2135,.5051,.2141,.4106,.8436
                    ,.3754,.7753,.5346,.71,.5325,.7618,.4158,.7566,.4161,.7115,.4158,.7566,.4106,.8436,.4142,.7973,.9307,.4914,.9316,.4905,.9316,.0272,.9316,.4914,.973,.4914,.8046,.8099,.8046,.3465,.8893,.4905,.8893,.0272,.7637,.1542,.7932,.1531,.8124,.1753,.8124,.1753,.8071,.2043,.781,.2182,.781,.2182,.754,.2065
                    ,.7463,.178,.7463,.178,.7637,.1542,.781,.2182,.847,.0272,.8884,.0272,.8884,.4914,.8884,.9548,.7427,.146,.7288,.12,.7717,.1514,.7406,.093,.769,.0853,.7717,.1514,.7928,.1027,.7939,.1321,.7717,.1514,.7717,.1514,.7288,.12,.7406,.093,.5812,.8558,.5834,.9758,.5329,.9758,.4825,.9758,.5329,.9758
                    ,.728,.0928,.7117,.0623,.7527,.0876,.7122,.0278,.7366,.0211,.7117,.0623,.7609,.0145,.7775,.0464,.7366,.0211,.7773,.0823,.7527,.0876,.7775,.0464,.7117,.0623,.7775,.0464,.7527,.0876
                ]),
                false);

                _i = new Float32Array(1160);
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
                ,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(290);
                REPEAT(_i, 0, 290, 25);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.short_sword");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 290, 0, 552, this);
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
                    -.7384,2.1005,.7681,-.7814,2.0924,.6776,-.8093,2.1556,.7022,-.7188,2.0562,.7508,-.7327,2.0856,.6482,-.7814,2.0924,.6776,-.7327,2.0856,.6482,-.6617,2.0898,.7218,-.6999,2.1404,.6361,-.6999,2.1404,.6361,-.6672,2.1424,.7318,-.7077,2.2154,.6505,-.7077,2.2154,.6505,-.697,2.1696,.7528,-.7503,2.2542,.6805,-.7384,2.1005,.7681,-.6672,2.1424,.7318
                    ,-.6617,2.0898,.7218,-.697,2.1696,.7528,-.7955,2.2276,.7035,-.7503,2.2542,.6805,-.7287,2.1509,.769,-.8093,2.1556,.7022,-.7955,2.2276,.7035,-1.8075,2.3862,-1.0355,-1.7116,2.4427,-1.0843,-1.8404,2.4606,-1.0065,-1.417,2.4329,-.3317,-1.6413,2.419,-.6654,-1.625,2.5038,-.6639,-1.1422,2.3006,.1025,-1.431,2.36,-.333,-1.3712,2.4599,-.355,-1.625,2.5038,-.6639
                    ,-1.5718,2.5351,-.6909,-1.1008,2.325,.0815,-1.417,2.4329,-.3317,-1.5217,2.4894,-.7262,-1.3712,2.4599,-.355,-1.5718,2.5351,-.6909,-1.3281,2.4206,-.3854,-1.1008,2.325,.0815,-1.3712,2.4599,-.355,-1.5125,2.4011,-.7431,-1.3281,2.4206,-.3854,-1.5217,2.4894,-.7262,-1.3202,2.3446,-.3999,-1.0619,2.2894,.054,-1.3281,2.4206,-.3854,-1.551,2.3367,-.7289,-1.3202,2.3446,-.3999
                    ,-1.5125,2.4011,-.7431,-1.3534,2.2892,-.3877,-1.0547,2.2207,.0409,-1.3202,2.3446,-.3999,-1.4027,2.296,-.3579,-1.551,2.3367,-.7289,-1.6084,2.3446,-.6943,-1.1293,2.1768,.0788,-1.3534,2.2892,-.3877,-1.431,2.36,-.333,-1.6084,2.3446,-.6943,-1.6413,2.419,-.6654,-1.1549,2.2346,.1013,-1.4027,2.296,-.3579,-1.431,2.36,-.333,-.8093,2.1556,.7022,-1.1549,2.2346,.1013
                    ,-1.1422,2.3006,.1025,-.7077,2.2154,.6505,-1.1008,2.325,.0815,-1.0619,2.2894,.054,-1.0547,2.2207,.0409,-1.0847,2.1706,.0519,-.7814,2.0924,.6776,-1.0847,2.1706,.0519,-1.1293,2.1768,.0788,-1.8404,2.4606,-1.0065,-1.6084,2.3446,-.6943,-1.8075,2.3862,-1.0355,-1.8075,2.3862,-1.0355,-1.551,2.3367,-.7289,-1.7502,2.3782,-1.0701,-1.7116,2.4427,-1.0843,-1.7502,2.3782,-1.0701
                    ,-1.7208,2.531,-1.0674,-1.7116,2.4427,-1.0843,-1.7709,2.5767,-1.0321,-1.7208,2.531,-1.0674,-1.7709,2.5767,-1.0321,-1.625,2.5038,-.6639,-1.8241,2.5454,-1.005,-1.8241,2.5454,-1.005,-1.8404,2.4606,-1.0065,-.7188,2.0562,.7508,-.6847,2.0515,.7302,-.7327,2.0856,.6482,-.6847,2.0515,.7302,-.6999,2.1404,.6361,-.6617,2.0898,.7218,-.7077,2.2154,.6505,-.6672,2.1424,.7318
                    ,-.6847,2.0515,.7302,-.7188,2.0562,.7508,-.6617,2.0898,.7218,-.7384,2.1005,.7681,-.7287,2.1509,.769,-.6672,2.1424,.7318,-.697,2.1696,.7528,-.6672,2.1424,.7318,-.7287,2.1509,.769,-.6617,2.0898,.7218,-.7188,2.0562,.7508,-.7384,2.1005,.7681,-.697,2.1696,.7528,-.7287,2.1509,.769,-.7384,2.1005,.7681,-.8093,2.1556,.7022,-1.8241,2.5454,-1.005
                    ,-1.7208,2.531,-1.0674,-1.7502,2.3782,-1.0701,-1.7208,2.531,-1.0674,-1.7709,2.5767,-1.0321,-1.8241,2.5454,-1.005,-1.7208,2.531,-1.0674,-1.1549,2.2346,.1013,-1.417,2.4329,-.3317,-1.625,2.5038,-.6639,-1.1422,2.3006,.1025,-1.417,2.4329,-.3317,-1.3712,2.4599,-.355,-1.0619,2.2894,.054,-1.1008,2.325,.0815,-1.3281,2.4206,-.3854,-1.0547,2.2207,.0409,-1.3202,2.3446,-.3999
                    ,-1.3534,2.2892,-.3877,-1.551,2.3367,-.7289,-1.0847,2.1706,.0519,-1.3534,2.2892,-.3877,-1.431,2.36,-.333,-1.4027,2.296,-.3579,-1.6084,2.3446,-.6943,-1.1293,2.1768,.0788,-1.4027,2.296,-.3579,-.7955,2.2276,.7035,-.8093,2.1556,.7022,-.7503,2.2542,.6805,-.7077,2.2154,.6505,-1.1008,2.325,.0815,-1.0547,2.2207,.0409,-.6999,2.1404,.6361,-.7327,2.0856,.6482
                    ,-.7814,2.0924,.6776,-1.0847,2.1706,.0519,-1.1293,2.1768,.0788,-1.8404,2.4606,-1.0065,-1.6413,2.419,-.6654,-1.6084,2.3446,-.6943,-1.8075,2.3862,-1.0355,-1.551,2.3367,-.7289,-1.5125,2.4011,-.7431,-1.7116,2.4427,-1.0843,-1.5217,2.4894,-.7262,-1.5718,2.5351,-.6909,-1.7709,2.5767,-1.0321,-1.625,2.5038,-.6639,-1.8241,2.5454,-1.005,-1.8165,2.3226,-.98,-1.722,2.5784,-.7138
                    ,-1.8461,2.606,-.9257,-1.7403,2.1377,-1.0487,-1.6924,2.295,-.7681,-1.766,2.623,-.9704,-1.6419,2.5953,-.7585,-1.7361,2.3377,-1.025,-1.7157,2.1419,-1.0625,-1.6121,2.3098,-.8132,-1.5244,2.0896,-.6799,-1.4998,2.0944,-.6936,-1.5618,2.6123,-.8032,-1.6562,2.3565,-1.0694,-1.6859,2.6399,-1.0151,-1.5322,2.3288,-.8575,-1.6913,2.148,-1.076,-1.4754,2.1,-.7072,-1.7067,2.0561,-1.079
                    ,-1.5244,2.0896,-.6799,-1.7403,2.1377,-1.0487,-1.4998,2.0944,-.6936,-1.4769,2.0049,-.6863,-1.7157,2.1419,-1.0625,-1.4754,2.1,-.7072,-1.6913,2.148,-1.076
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
                ,168,169,170,171,172,168,169,173,170,172,174,169,171,175,176,177,178,179,168,173,175,180,181,182,183,184,181,182,174,180,174,183,180,184,175,181,177,185,183,173,181,175,168,172,169,171,178,172,169,174
                ,173,172,177,174,171,168,175,177,172,178,168,170,173,180,183,181,183,185,184,182,173,174,174,177,183,184,176,175,177,179,185,173,182,181,186,187,188,189,187,190,191,186,188,192,186,193,189,190,192,191
                ,193,186,186,190,187,192,190,186], 140);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.262,-.2787,.9239,-.5771,-.7984,.1716,-.8011,-.1507,.5792,-.104,-.7792,.618,.2791,-.8694,-.4077,-.5771,-.7984,.1716,.2791,-.8694,-.4077,.9487,-.2827,.1414,.86,-.1444,-.4893,.86,-.1444,-.4893,.9102,.1978,.364,.8276,.5266,-.1943,.8276,.5266,-.1943,.5143,.4605,.7235,.2507,.9195,.3027,-.262,-.2787,.9239,.9102,.1978,.364
                    ,.9487,-.2827,.1414,.5143,.4605,.7235,-.5033,.5561,.6613,.2507,.9195,.3027,-.0446,.2004,.9787,-.8011,-.1507,.5792,-.5033,.5561,.6613,-.7205,-.5842,-.3735,.3303,-.0735,-.941,-.9812,-.0692,-.1803,-.6203,.5707,.5381,-.8524,-.1779,.4916,-.652,.5782,.4905,-.6522,.5588,.5122,-.8489,-.1748,.4987,.1762,.9728,.1503,-.652,.5782,.4905
                    ,.1397,.9863,.087,.1643,.9802,.1105,-.6203,.5707,.5381,.7711,.5258,-.3589,.1762,.9728,.1503,.1397,.9863,.087,.7856,.5237,-.3294,.1643,.9802,.1105,.1762,.9728,.1503,.8423,-.1811,-.5076,.7856,.5237,-.3294,.7711,.5258,-.3589,.8347,-.1738,-.5226,.7814,.5076,-.3628,.7856,.5237,-.3294,.3238,-.8955,-.3051,.8347,-.1738,-.5226
                    ,.8423,-.1811,-.5076,.2957,-.886,-.3573,.8225,-.1952,-.5342,.8347,-.1738,-.5226,-.5489,-.8186,.1693,.3238,-.8955,-.3051,-.5238,-.8273,.2029,-.5372,-.8294,.1533,.2957,-.886,-.3573,-.8489,-.1748,.4987,-.5238,-.8273,.2029,-.8524,-.1779,.4916,-.8571,-.1951,.4766,-.5489,-.8186,.1693,-.8489,-.1748,.4987,-.8011,-.1507,.5792,-.8571,-.1951,.4766
                    ,-.6522,.5588,.5122,.8276,.5266,-.1943,.1643,.9802,.1105,.7814,.5076,-.3628,.8225,-.1952,-.5342,.2874,-.8899,-.3541,-.5771,-.7984,.1716,.2874,-.8899,-.3541,-.5372,-.8294,.1533,-.9812,-.0692,-.1803,-.5238,-.8273,.2029,-.7205,-.5842,-.3735,-.7205,-.5842,-.3735,.3238,-.8955,-.3051,-.045,-.649,-.7594,.3303,-.0735,-.941,-.045,-.649,-.7594
                    ,.2715,.4742,-.8375,.3303,-.0735,-.941,-.2049,.8553,-.4759,.2715,.4742,-.8375,-.2049,.8553,-.4759,-.652,.5782,.4905,-.8375,.5207,-.1657,-.8375,.5207,-.1657,-.9812,-.0692,-.1803,-.104,-.7792,.618,.5157,-.8332,.1993,.2791,-.8694,-.4077,.5157,-.8332,.1993,.86,-.1444,-.4893,.9487,-.2827,.1414,.8276,.5266,-.1943,.9102,.1978,.364
                    ,.5157,-.8332,.1993,-.104,-.7792,.618,.9487,-.2827,.1414,-.262,-.2787,.9239,-.0446,.2004,.9787,.9102,.1978,.364,.5143,.4605,.7235,.9102,.1978,.364,-.0446,.2004,.9787,.9487,-.2827,.1414,-.104,-.7792,.618,-.262,-.2787,.9239,.5143,.4605,.7235,-.0446,.2004,.9787,-.262,-.2787,.9239,-.8011,-.1507,.5792,-.8375,.5207,-.1657
                    ,.2715,.4742,-.8375,-.045,-.649,-.7594,.2715,.4742,-.8375,-.2049,.8553,-.4759,-.8375,.5207,-.1657,.2715,.4742,-.8375,-.8571,-.1951,.4766,-.6203,.5707,.5381,-.652,.5782,.4905,-.6522,.5588,.5122,-.6203,.5707,.5381,.1762,.9728,.1503,.7814,.5076,-.3628,.1643,.9802,.1105,.7856,.5237,-.3294,.8225,-.1952,-.5342,.8347,-.1738,-.5226
                    ,.2957,-.886,-.3573,.3238,-.8955,-.3051,.2874,-.8899,-.3541,.2957,-.886,-.3573,-.8489,-.1748,.4987,-.5489,-.8186,.1693,-.5238,-.8273,.2029,-.5372,-.8294,.1533,-.5489,-.8186,.1693,-.5033,.5561,.6613,-.8011,-.1507,.5792,.2507,.9195,.3027,.8276,.5266,-.1943,.1643,.9802,.1105,.8225,-.1952,-.5342,.86,-.1444,-.4893,.2791,-.8694,-.4077
                    ,-.5771,-.7984,.1716,.2874,-.8899,-.3541,-.5372,-.8294,.1533,-.9812,-.0692,-.1803,-.8524,-.1779,.4916,-.5238,-.8273,.2029,-.7205,-.5842,-.3735,.3238,-.8955,-.3051,.8423,-.1811,-.5076,.3303,-.0735,-.941,.7711,.5258,-.3589,.1397,.9863,.087,-.2049,.8553,-.4759,-.652,.5782,.4905,-.8375,.5207,-.1657,.9535,.169,.2495,.2649,-.3947,-.8798
                    ,.8446,-.5238,.1104,.911,.2547,.3244,.426,.1713,-.8883,.4272,-.7699,.4741,-.2828,-.6118,-.7387,.502,-.1118,.8576,.502,-.1118,.8576,-.4295,-.2545,-.8664,.2723,-.0014,-.9622,-.3844,-.3899,-.8368,-.7267,-.6044,-.3265,-.3002,-.096,.949,-.147,-.7334,.6637,-.9868,-.1274,-.1001,-.2452,.0102,.9694,-.9207,-.2536,-.2967,.187,.7595,.6229
                    ,.2723,-.0014,-.9622,.911,.2547,.3244,-.3844,-.3899,-.8368,-.4179,.7891,-.4501,.502,-.1118,.8576,-.9207,-.2536,-.2967,-.2452,.0102,.9694
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
                {frame: 250, value: new _B.Vector3(0,0,0)}
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
                {frame: 250, value: new _B.Vector3(0,0,0)}
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
                {frame: 250, value: new _B.Vector3(1,1,1)}
                ]);
                this.animations.push(animation);
                this.createAnimationRange("Attack", 0, 20);
                this.createAnimationRange("death", 30, 51);
                this.createAnimationRange("Run", 60, 80);
                this.createAnimationRange("Skill01", 90, 108);
                this.createAnimationRange("stand", 120, 180);
                this.createAnimationRange("Stand_with_weapon", 190, 250);
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
                    .699,2.5874,-1.445,.875,1.8283,-1.2113,.7812,2.5868,-1.476,.7928,1.8289,-1.1803,1.1319,1.4904,-.5228,1.0497,1.4911,-.4918,1.4014,1.7712,.1863,1.3192,1.7718,.2173,1.5255,2.5061,.5006,1.3495,3.2653,.2669,1.4317,3.2646,.2359,1.1748,3.6025,-.4527,1.0926,3.6031,-.4217,1.4433,2.5067,.5315,.699,2.5874,-1.445,.8231,3.3223,-1.1308,.9053,3.3217,-1.1617
                    ,1.4725,2.5118,.3597,1.392,3.1622,.1327,.9407,3.2112,-1.0657,.8342,2.581,-1.3351,.9686,1.9302,-1.1285,.9147,1.9306,-1.1082,.9407,3.2112,-1.0657,.8881,2.5806,-1.3554,1.4856,3.2642,.2156,1.1717,3.4519,-.4577,.9946,3.2108,-1.086,.9407,3.2112,-1.0657,.835,2.5864,-1.4963,.9592,3.3213,-1.1821,1.1858,1.49,-.5431,1.392,3.1622,.1327,1.2256,3.4515,-.478
                    ,.9686,1.9302,-1.1285,.835,2.5864,-1.4963,.9289,1.8278,-1.2316,1.1889,1.6405,-.5381,1.1858,1.49,-.5431,1.4553,1.7708,.166,1.4199,1.8813,.0699,1.5794,2.5057,.4803,1.5264,2.5114,.3394,1.4856,3.2642,.2156,1.4459,3.1618,.1124,1.2287,3.602,-.473,1.2256,3.4515,-.478,1.2256,3.4515,-.478,.9592,3.3213,-1.1821,.9946,3.2108,-1.086,.8881,2.5806,-1.3554
                    ,.9592,3.3213,-1.1821,.835,2.5864,-1.4963,1.4553,1.7708,.166,1.1889,1.6405,-.5381,1.135,1.6409,-.5178,1.4199,1.8813,.0699,1.366,1.8817,.0902,.9289,1.8278,-1.2316,1.2287,3.602,-.473,1.4725,2.5118,.3597,1.4199,1.8813,.0699,1.5264,2.5114,.3394,1.5794,2.5057,.4803,1.392,3.1622,.1327,1.5264,2.5114,.3394,1.4459,3.1618,.1124,1.1528,2.8588,-.4747
                    ,1.3333,2.545,-.5555,1.2449,2.6923,-.2268,1.2386,2.38,-.2372,1.1401,2.2342,-.4955,1.0479,2.4007,-.7434,1.0543,2.713,-.733,1.4433,2.5067,.5315,1.4433,2.5067,.5315,1.0926,3.6031,-.4217,1.0497,1.4911,-.4918,.7928,1.8289,-1.1803,.699,2.5874,-1.445,.699,2.5874,-1.445,.8231,3.3223,-1.1308,1.3495,3.2653,.2669,1.3192,1.7718,.2173,1.0497,1.4911,-.4918
                    ,1.0497,1.4911,-.4918,.699,2.5874,-1.445,1.0926,3.6031,-.4217,.8342,2.581,-1.3351,1.366,1.8817,.0902,.9147,1.9306,-1.1082,1.135,1.6409,-.5178,1.366,1.8817,.0902,1.366,1.8817,.0902,1.1717,3.4519,-.4577,.8342,2.581,-1.3351,.9147,1.9306,-1.1082,1.366,1.8817,.0902,.9407,3.2112,-1.0657,1.2287,3.602,-.473,.9289,1.8278,-1.2316,1.4553,1.7708,.166
                    ,1.392,3.1622,.1327,1.4459,3.1618,.1124,.9686,1.9302,-1.1285,.8881,2.5806,-1.3554,.835,2.5864,-1.4963,.9686,1.9302,-1.1285,1.1858,1.49,-.5431,1.4856,3.2642,.2156,1.4856,3.2642,.2156,1.2256,3.4515,-.478,.9592,3.3213,-1.1821,.8881,2.5806,-1.3554,.9946,3.2108,-1.086,.9592,3.3213,-1.1821,1.5794,2.5057,.4803,1.4553,1.7708,.166,1.1889,1.6405,-.5381
                    ,1.1889,1.6405,-.5381,1.4199,1.8813,.0699,1.2287,3.602,-.473,1.4725,2.5118,.3597,1.4199,1.8813,.0699,1.5794,2.5057,.4803,1.392,3.1622,.1327,1.4725,2.5118,.3597,1.5264,2.5114,.3394
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(246);
                _i.set([0,1,2,3,4,1,5,6,4,7,8,6,8,9,10,9,11,10,12,13,14,11,15,16,15,2,16,17,18,19,20,21,22,23,24,20,11,25,10,26,27,28,1,29,2,2,30,16,6,31
                ,4,32,33,26,34,35,36,37,36,38,37,39,40,40,41,42,42,43,44,44,45,46,47,48,49,50,51,52,8,53,6,22,54,55,55,56,57,1,31,58,16,59,11,60,61,62,10,63,8,64
                ,65,66,67,68,69,69,68,70,70,68,71,71,68,72,72,68,73,73,68,67,0,3,1,3,5,4,5,7,6,7,74,8,8,75,9,9,76,11,77,78,79,80,81,12,12,82,13,13,83,84
                ,85,86,13,11,87,15,15,0,2,19,88,89,90,91,92,93,17,19,18,94,19,95,96,97,20,24,21,98,27,24,11,99,25,26,33,27,1,100,29,2,29,30,6,101,31,102,103,33,104,105
                ,106,37,107,36,37,108,39,40,39,41,42,41,109,44,110,45,111,45,112,113,114,115,8,116,117,22,21,118,55,119,120,1,4,31,16,30,121,122,57,123,10,25]);
                CONTIG(_i, 242, 124, 127);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.8632,.0342,-.5037,-.2634,-.6796,-.6847,-.3522,.0382,-.9351,-.7942,-.523,-.3093,-.0203,-.9992,-.0331,-.6055,-.7712,.1965,.2347,-.7336,.6378,-.4075,-.5649,.7175,.3522,-.0382,.9351,-.3852,.5322,.7539,.2634,.6796,.6847,.0203,.9992,.0331,-.574,.7804,.248,-.3163,-.025,.9483,-.8632,.0342,-.5037,-.7719,.5741,-.2729,-.2347,.7336,-.6378
                    ,.3163,.025,-.9483,.3852,-.5322,-.7539,.7719,-.5741,.2729,.8632,-.0342,.5037,.909,.3981,.1233,.7942,.523,.3093,.7719,-.5741,.2729,.9618,-.0285,.2722,.7942,.523,.3093,.574,-.7804,-.248,.892,-.4419,.0955,.7719,-.5741,.2729,.3163,.025,-.9483,.4075,.5649,-.7175,.574,-.7804,-.248,.3852,-.5322,-.7539,.7404,-.5998,-.3033
                    ,.909,.3981,.1233,.3163,.025,-.9483,.3852,-.5322,-.7539,.7645,.588,-.2639,.574,-.7804,-.248,.7719,-.5741,.2729,.613,.4301,-.6627,.8632,-.0342,.5037,.5431,.0168,-.8394,.7942,.523,.3093,.5959,-.4098,-.6906,.6055,.7712,-.1965,.7404,-.5998,-.3033,.7404,-.5998,-.3033,.4075,.5649,-.7175,.892,-.4419,.0955,.9618,-.0285,.2722
                    ,.4075,.5649,-.7175,.3163,.025,-.9483,.7719,-.5741,.2729,.7645,.588,-.2639,.6055,.7712,-.1965,.613,.4301,-.6627,.4075,.5649,-.7175,.3852,-.5322,-.7539,.6055,.7712,-.1965,.3163,.025,-.9483,.613,.4301,-.6627,.5431,.0168,-.8394,.8632,-.0342,.5037,.3852,-.5322,-.7539,.5431,.0168,-.8394,.5959,-.4098,-.6906,.7995,.5318,-.2794
                    ,.9357,-.0073,-.3527,.9582,.245,.1476,.9473,-.2929,.1298,.7776,-.5441,-.3151,.6189,-.2573,-.7421,.6298,.2806,-.7243,-.3163,-.025,.9483,-.3163,-.025,.9483,-.574,.7804,.248,-.6055,-.7712,.1965,-.7942,-.523,-.3093,-.8632,.0342,-.5037,-.8632,.0342,-.5037,-.7719,.5741,-.2729,-.3852,.5322,.7539,-.4075,-.5649,.7175,-.6055,-.7712,.1965
                    ,-.6055,-.7712,.1965,-.8632,.0342,-.5037,-.574,.7804,.248,.8632,-.0342,.5037,.4075,.5649,-.7175,.7942,.523,.3093,.6055,.7712,-.1965,.4075,.5649,-.7175,.4075,.5649,-.7175,.574,-.7804,-.248,.8632,-.0342,.5037,.7942,.523,.3093,.4075,.5649,-.7175,.7719,-.5741,.2729,.6055,.7712,-.1965,.3852,-.5322,-.7539,.7719,-.5741,.2729
                    ,.3852,-.5322,-.7539,.5959,-.4098,-.6906,.909,.3981,.1233,.9618,-.0285,.2722,.3163,.025,-.9483,.909,.3981,.1233,.574,-.7804,-.248,.7942,.523,.3093,.7942,.523,.3093,.7404,-.5998,-.3033,.4075,.5649,-.7175,.9618,-.0285,.2722,.892,-.4419,.0955,.4075,.5649,-.7175,.8632,-.0342,.5037,.7719,-.5741,.2729,.7645,.588,-.2639
                    ,.7645,.588,-.2639,.613,.4301,-.6627,.6055,.7712,-.1965,.3163,.025,-.9483,.613,.4301,-.6627,.8632,-.0342,.5037,.3852,-.5322,-.7539,.3163,.025,-.9483,.5431,.0168,-.8394
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5056,.3335,.5155,.1495,.5194,.3398,.5015,.1556,.3681,.0247,.3623,.0386,.173,.0191,.1778,.0335,.0361,.1508,.0597,.335,.0458,.3409,.1873,.4746,.355,.973,.0425,.8436,.4844,.6606,.377,.4603,.3822,.4747,.0929,.3222,.0929,.1659,.3598,.0553,.9548,.317,.8524,.4408,.8481,.4318,.9523,.1569,.9643,.3203
                    ,.037,.3451,.8514,.0387,.9614,.1531,.9523,.1569,.5285,.3435,.3859,.4838,.3715,.0156,.6979,.0384,.8552,.0295,.6645,.5353,.522,.6332,.6514,.5038,.8214,.5353,.8345,.5038,.9639,.6332,.9324,.6463,.9639,.8163,.9324,.8032,.8345,.9457,.8214,.9142,.6514,.9457,.6645,.9142,.6645,.9142,.522,.8163,.5535,.8032
                    ,.5535,.6463,.522,.8163,.522,.6332,.1694,.0099,.6908,.4408,.6946,.4315,.5846,.3171,.5938,.3134,.5245,.1452,.1836,.4838,.5912,.1532,.5846,.3171,.5817,.15,.0269,.1473,.6979,.0384,.5817,.15,.6936,.0295,.6704,.8402,.7473,.707,.8241,.8402,.901,.707,.8241,.5738,.6704,.5738,.5935,.707,.0499,.157
                    ,.0499,.157,.1934,.4606,.172,.5311,.355,.5311,.4844,.6606,.4844,.6606,.4844,.8436,.172,.973,.0425,.6606,.172,.5311,.172,.5311,.4844,.6606,.1934,.4606,.4703,.1659,.2034,.4327,.4703,.3222,.3598,.4327,.2034,.4327,.2034,.4327,.2034,.0553,.4703,.1659,.4703,.3222,.2034,.4327,.9523,.1569,.1836,.4838
                    ,.5245,.1452,.1694,.0099,.6979,.0384,.6936,.0295,.6645,.5353,.5535,.6463,.522,.6332,.6645,.5353,.8345,.5038,.8345,.9457,.8345,.9457,.6645,.9142,.522,.8163,.5535,.6463,.5535,.8032,.522,.8163,.0269,.1473,.1694,.0099,.6908,.4408,.6908,.4408,.5846,.3171,.1836,.4838,.5912,.1532,.5846,.3171,.0269,.1473
                    ,.6979,.0384,.5912,.1532,.5817,.15
                ]),
                false);

                _i = new Float32Array(512);
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
                ,1,0,0,0,1,0,0,0,1]);
                this.setVerticesData(_B.VertexBuffer.MatricesWeightsKind, _i, false);

                _i = new Uint32Array(128);
                REPEAT(_i, 0, 128, 18);
                this.setVerticesData(_B.VertexBuffer.MatricesIndicesKind, UNPACK(_i), false);

                this.setMaterialByID("Warrior.Shield");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 128, 0, 246, this);
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