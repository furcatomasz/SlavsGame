// File generated with Tower of Babel version: 5.3-beta on 07/14/17
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shield;
(function (Shield) {
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
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Shield", "Shield", true);
            if (positionOffset) MOVE(mesh, positionOffset);
        } else {
            mesh = new Shield("Shield", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
        }
    }
    Shield.initScene = initScene;
    var meshLib = new Array(1);
    var cloneCount = 1;

    var originalVerts = 0;
    var clonedVerts = 0;
    var MeshFactory = (function () {
        function MeshFactory(_scene, materialsRootDir) {
            this._scene = _scene;
            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(_scene, materialsRootDir); //embedded version check
        }

        MeshFactory.prototype.getModuleName = function () { return "Shield";};

        MeshFactory.prototype.instance = function (meshName, cloneSkeleton) {
            var ret = null;
            var src;
            switch (meshName){
                case "Shield":
                    src = getViable(0);
                    if (src === null){
                        ret = new Shield("Shield", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[0].push(ret);
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
    Shield.MeshFactory = MeshFactory;
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
    Shield.getStats = getStats;


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
    Shield.matReadAhead = matReadAhead;

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

        material = scene.getMaterialByID("Shield.Shield");
        if (!material){
            material = new _B.StandardMaterial("Shield.Shield", scene);
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

        if (pendingTextures === 0) {
            matLoaded = true; 
            if (_sceneTransitionName) QI.SceneTransition.perform(_sceneTransitionName, waitingMeshes, _overriddenMillis, _overriddenSound, _options);
        }
    }
    Shield.defineMaterials = defineMaterials;

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
            this.scaling.x   = 1.0568;
            this.scaling.y   = 1.0568;
            this.scaling.z   = 1.0568;

            this.id = this.name;
            this.billboardMode  = 0;
            this.isVisible  = false; //always false; evaluated again at bottom
            this.setEnabled(true);
            this.checkCollisions = false;
            this.receiveShadows  = false;
            this.castShadows  = false;
            if (!cloning){
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    -.0589,0,-1,-.005,-.7071,-.7071,-.005,0,-1,-.0589,-.7071,-.7071,-.005,-1,0,-.0589,-1,0,-.005,-.7071,.7071,-.0589,-.7071,.7071,-.005,0,1,-.0589,0,1,-.005,.7071,.7071,-.0589,1,0,-.005,1,0,-.0589,1,0,-.0589,0,1,-.0589,0,-1,-.0589,.7071,-.7071
                    ,-.005,.7071,-.7071,-.005,-.6063,.6063,-.005,.8575,0,-.005,.6063,-.6063,-.005,0,-.8575,.0303,-.6063,-.6063,-.005,-.6063,-.6063,-.005,.6063,-.6063,.0303,0,-.8575,.0303,.7071,.7071,-.005,.8575,0,.0303,.6063,-.6063,-.005,.6063,-.6063,.0303,0,-1,.0303,.7071,-.7071,.0303,-1,0,-.005,.6063,.6063
                    ,.0303,.8575,0,-.005,.8575,0,.0303,-.6063,-.6063,.0303,0,-1,.0303,-.7071,-.7071,.0303,-.8575,0,.0303,-1,0,.0303,-.7071,.7071,.0303,-.6063,.6063,.0303,0,1,.0303,0,.8575,.0303,.7071,.7071,.0303,.6063,.6063,.0303,1,0,.0303,.8575,0,.0303,.8575,0,.0303,.7071,-.7071
                    ,.0303,.6063,-.6063,.0303,.6063,-.6063,.0303,0,-1,.0303,0,-.8575,.0303,-.7071,.7071,.0303,-.8575,0,-.005,-.8575,0,.0303,-.6063,.6063,-.005,-.6063,.6063,.0303,-.7071,-.7071,.0303,1,0,-.005,-.6063,.6063,.0303,0,.8575,-.005,0,.8575,.0303,0,1,.0303,.6063,.6063,-.0095,.2957,0
                    ,.113,0,0,-.0095,.1479,.2561,-.0095,-.1479,.2561,-.0095,-.2957,0,-.0095,-.1479,-.2561,-.0095,.1479,-.2561,-.0589,.7071,.7071,-.0589,-1,0,-.0589,-.7071,-.7071,-.0589,0,-1,-.0589,0,-1,-.0589,.7071,-.7071,-.0589,1,0,-.0589,1,0,-.0589,.7071,.7071,-.0589,0,1,-.0589,0,1
                    ,-.0589,-.7071,.7071,-.0589,-1,0,-.0589,-1,0,-.0589,0,-1,-.0589,0,1,-.005,0,-.8575,-.005,-.6063,-.6063,-.005,-.8575,0,-.005,0,.8575,-.005,.6063,.6063,-.005,.6063,.6063,-.005,0,-.8575,-.005,-.6063,-.6063,-.005,.6063,-.6063,.0303,1,0,-.005,.8575,0,.0303,-.7071,-.7071
                    ,.0303,-.7071,.7071,.0303,.6063,.6063,.0303,-.6063,-.6063,.0303,0,-.8575,.0303,0,-1,.0303,-.6063,-.6063,.0303,-1,0,.0303,.7071,.7071,.0303,.7071,.7071,.0303,.8575,0,.0303,.7071,-.7071,.0303,.6063,-.6063,.0303,.7071,-.7071,.0303,0,-1,.0303,0,1,.0303,-.7071,.7071,.0303,-.8575,0
                    ,.0303,-.8575,0,.0303,-.6063,.6063,.0303,-.7071,-.7071,.0303,1,0,-.005,-.6063,.6063,.0303,-.6063,.6063,.0303,0,.8575,.0303,0,1,.0303,0,.8575,.0303,.6063,.6063
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(246);
                _i.set([0,1,2,3,4,1,5,6,4,7,8,6,9,10,8,10,11,12,13,14,15,12,16,17,16,2,17,18,19,20,21,22,23,24,25,21,12,26,10,27,28,29,1,30,2,2,31,17,6,32
                ,4,33,34,35,36,37,38,39,38,40,39,41,42,42,43,44,44,45,46,46,47,48,49,50,51,52,53,54,8,55,6,23,56,57,57,58,59,4,60,1,17,61,12,62,63,64,10,65,8,64
                ,66,33,67,68,69,69,68,70,70,68,71,71,68,72,72,68,73,73,68,67,0,3,1,3,5,4,5,7,6,7,9,8,9,74,10,10,74,11]);
                CONTIG(_i, 138, 75, 89);
                _i.set([12,11,16,16,0,2,20,90,18,91,92,18,18,93,94,95,19,18,96,97,18,21,25,22,98,28,25,12,99,26,100,34,28,1,101,30,2,30,31,6,102,32,33,103,34,104,105,106,39,107
                ,38,39,108,41,42,41,43,44,43,109,46,110,47,111,47,112,113,114,115,8,116,117,23,22,118,57,119,120,4,32,121,17,31,122,123,124,125,10,26,126,64], 153);
                CONTIG(_i, 244, 127, 128);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    -.6302,0,-.7764,0,-.7071,-.7071,0,0,-1,-.6302,-.549,-.549,0,-1,0,-.6302,-.7764,0,0,-.7071,.7071,-.6302,-.549,.549,0,0,1,-.6302,0,.7764,0,.7071,.7071,-.6302,.7764,0,0,1,0,-.6302,.7764,0,-.6302,0,.7764,-.6302,0,-.7764,-.6302,.549,-.549
                    ,0,.7071,-.7071,.6302,.549,-.549,.6302,-.7764,0,.6302,-.549,.549,.6302,0,.7764,.8042,.4203,.4203,.6302,.549,.549,.6302,-.549,.549,.8042,0,.5943,.6302,.549,.549,.6302,-.7764,0,.8042,-.4203,.4203,.6302,-.549,.549,.6302,0,-.7764,.6302,.549,-.549,.6302,-.7764,0,.6302,-.549,-.549
                    ,.8042,-.5943,0,.6302,-.7764,0,.8042,.4203,.4203,.6302,0,-.7764,.6302,-.549,-.549,.8042,.5943,0,.6302,-.7764,0,.6302,-.549,.549,.8042,.4203,-.4203,.6302,0,.7764,.8042,0,-.5943,.6302,.549,.549,.8042,-.4203,-.4203,.6302,.7764,0,.8042,-.5943,0,.8042,-.5943,0,.6302,.549,-.549
                    ,.8042,-.4203,.4203,.8042,-.4203,.4203,.6302,0,-.7764,.8042,0,.5943,.6302,-.549,.549,.8042,.5943,0,.6302,.7764,0,.8042,.4203,-.4203,.6302,.549,-.549,.6302,-.549,-.549,.6302,.7764,0,.6302,.549,-.549,.8042,0,-.5943,.6302,0,-.7764,.6302,0,.7764,.8042,-.4203,-.4203,.9239,.3827,0
                    ,1,0,0,.9239,.1913,.3314,.9239,-.1913,.3314,.9239,-.3827,0,.9239,-.1913,-.3314,.9239,.1913,-.3314,-.6302,.549,.549,-.6302,-.7764,0,-.6302,-.549,-.549,-.6302,0,-.7764,-.6302,0,-.7764,-.6302,.549,-.549,-.6302,.7764,0,-.6302,.7764,0,-.6302,.549,.549,-.6302,0,.7764,-.6302,0,.7764
                    ,-.6302,-.549,.549,-.6302,-.7764,0,-.6302,-.7764,0,-.6302,0,-.7764,-.6302,0,.7764,.6302,0,.7764,.6302,.549,.549,.6302,.7764,0,.6302,0,-.7764,.6302,-.549,-.549,.6302,-.549,-.549,.6302,0,.7764,.6302,.549,.549,.6302,-.549,.549,.6302,.7764,0,.6302,-.7764,0,.6302,-.549,-.549
                    ,.6302,-.549,.549,.8042,-.4203,-.4203,.8042,.4203,.4203,.8042,0,.5943,.6302,0,-.7764,.8042,.4203,.4203,.6302,-.7764,0,.6302,.549,.549,.6302,.549,.549,.8042,-.5943,0,.6302,.549,-.549,.8042,-.4203,.4203,.6302,.549,-.549,.6302,0,-.7764,.6302,0,.7764,.6302,-.549,.549,.8042,.5943,0
                    ,.8042,.5943,0,.8042,.4203,-.4203,.6302,-.549,-.549,.6302,.7764,0,.6302,.549,-.549,.8042,.4203,-.4203,.8042,0,-.5943,.6302,0,.7764,.8042,0,-.5943,.8042,-.4203,-.4203
                ]),
                false);

                this.setVerticesData(_B.VertexBuffer.UVKind, new Float32Array([
                    .5056,.3335,.5155,.1495,.5194,.3398,.5015,.1556,.3681,.0247,.3623,.0386,.173,.0191,.1778,.0335,.0361,.1508,.0499,.157,.0458,.3409,.1934,.4606,.1873,.4746,.355,.973,.0425,.8436,.4844,.6606,.377,.4603,.3822,.4747,.2034,.4327,.2034,.0553,.3598,.0553,.9548,.317,.8524,.4408,.8481,.4318,.9523,.1569
                    ,.9643,.3203,.037,.3451,.8514,.0387,.9614,.1531,.9523,.1569,.5285,.3435,.3859,.4838,.3715,.0156,.6979,.0384,.8552,.0295,.8514,.0387,.6645,.5353,.522,.6332,.6514,.5038,.8214,.5353,.8345,.5038,.9639,.6332,.9324,.6463,.9639,.8163,.9324,.8032,.8345,.9457,.8214,.9142,.6514,.9457,.6645,.9142,.6645,.9142
                    ,.522,.8163,.5535,.8032,.5535,.8032,.522,.6332,.5535,.6463,.1694,.0099,.6908,.4408,.6946,.4315,.5846,.3171,.5938,.3134,.5245,.1452,.1836,.4838,.5938,.3134,.5817,.15,.5912,.1532,.0269,.1473,.6936,.0295,.6704,.8402,.7473,.707,.8241,.8402,.901,.707,.8241,.5738,.6704,.5738,.5935,.707,.0597,.335
                    ,.172,.5311,.355,.5311,.4844,.6606,.4844,.6606,.4844,.8436,.355,.973,.355,.973,.172,.973,.0425,.8436,.0425,.8436,.0425,.6606,.172,.5311,.172,.5311,.4844,.6606,.0425,.8436,.4703,.1659,.4703,.3222,.3598,.4327,.0929,.3222,.0929,.1659,.0929,.1659,.4703,.1659,.4703,.3222,.9523,.1569,.1836,.4838
                    ,.8514,.0387,.5245,.1452,.1694,.0099,.6936,.0295,.6645,.5353,.5535,.6463,.522,.6332,.6645,.5353,.8345,.5038,.8345,.9457,.8345,.9457,.6645,.9142,.522,.8163,.5535,.8032,.522,.8163,.522,.6332,.0269,.1473,.1694,.0099,.6908,.4408,.6908,.4408,.5846,.3171,.5245,.1452,.1836,.4838,.5938,.3134,.5846,.3171
                    ,.5817,.15,.0269,.1473,.5817,.15,.6936,.0295
                ]),
                false);

                this.setMaterialByID("Shield.Shield");
                this.subMeshes = [];
                new _B.SubMesh(0, 0, 129, 0, 246, this);
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

        Shield.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(0);
        };
        return Shield;
    })(BABYLON.Mesh);
    Shield.Shield = Shield;

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
    Shield.freshenShadowRenderLists = freshenShadowRenderLists;
})(Shield || (Shield = {}));