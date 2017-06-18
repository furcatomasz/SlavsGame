// File generated with Tower of Babel version: 5.3-beta on 06/16/17
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sword;
(function (Sword) {
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
            mesh = TOWER_OF_BABEL.MeshFactory.instance("Sword", "Sword", true);
            if (positionOffset) MOVE(mesh, positionOffset);
        } else {
            mesh = new Sword("Sword", scene);
            if (positionOffset) MOVE(mesh, positionOffset);
        }
    }
    Sword.initScene = initScene;
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

        MeshFactory.prototype.getModuleName = function () { return "Sword";};

        MeshFactory.prototype.instance = function (meshName, cloneSkeleton) {
            var ret = null;
            var src;
            switch (meshName){
                case "Sword":
                    src = getViable(0);
                    if (src === null){
                        ret = new Sword("Sword", this._scene);
                        originalVerts += ret.getTotalVertices();
                        meshLib[0].push(ret);
                    }else{
                        ret = new Sword("Sword" + "_" + cloneCount++, this._scene, null, src);
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
    Sword.MeshFactory = MeshFactory;
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
    Sword.getStats = getStats;


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

        aheadQueued = true;
    }
    Sword.matReadAhead = matReadAhead;

    var matLoaded = false;
    function defineMaterials(scene, materialsRootDir) {
        if (!materialsRootDir) { materialsRootDir = "./"; }
        if (materialsRootDir.lastIndexOf("/") + 1  !== materialsRootDir.length) { materialsRootDir  += "/"; }
        if (QI) QI.TimelineControl.initialize(scene);
        TOWER_OF_BABEL.Preloader.SCENE = scene;
        matReadAhead(materialsRootDir);
        var material;
        var texture;
        var txBuffer;

        if (pendingTextures === 0) {
            matLoaded = true; 
            if (_sceneTransitionName) QI.SceneTransition.perform(_sceneTransitionName, waitingMeshes, _overriddenMillis, _overriddenSound, _options);
        }
    }
    Sword.defineMaterials = defineMaterials;

    var Sword = (function (_super) {
        __extends(Sword, _super);
        function Sword(name, scene, materialsRootDir, source) {
            _super.call(this, name, scene, null, source, true);

            if (!materialsRootDir) { materialsRootDir = "./"; }
            defineMaterials(scene, materialsRootDir); //embedded version check
            var cloning = source && source !== null;
            this.position.x  = -1.1512;
            this.position.y  = 2.3746;
            this.position.z  = -.0567;
            this.rotation.x  = 0;
            this.rotation.y  = 0;
            this.rotation.z  = -.0559;
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
                this.setVerticesData(_B.VertexBuffer.PositionKind, new Float32Array([
                    .0346,.0003,-.358,.0346,-.1145,-2.49,.0346,-.1145,-.3408,-.0002,-.1851,-.3403,-.0349,-.1145,-2.49,-.0349,-.1145,-.3408,-.0563,-.0475,-.2574,-.0349,.0003,.3728,-.0349,-.0478,.3728,-.0002,-.161,-2.5233,-.0349,.0003,-2.9488,-.0349,.0003,-.358,.0346,.0003,-2.9488,-.0002,-.0469,.3711,-.0002,-.0465,-.2592,-.0563,-.1145,-.3225,-.0563,-.354,-.2588
                    ,-.0563,-.354,-.324,-.0563,.0003,-.3359,-.0563,.0003,-.2574,-.0002,-.1861,-.2593,-.0563,-.1145,-.2574,.0573,-.1145,-.3225,.0573,-.1145,-.2574,.0573,-.0454,-.2574,.0573,-.354,-.324,-.0002,-.4255,-.2608,.0573,-.354,-.2588,-.0002,-.1853,-.3217,-.0002,-.4248,-.3232,-.0002,-.0554,.4213,.0346,.0003,.3728,.0573,.0003,-.2574,.0346,-.0458,.3728
                    ,.047,-.0539,.4238,-.0002,-.0554,.4901,.047,-.0539,.4926,-.0474,.0003,.4238,-.0474,-.0566,.4238,.047,.0003,.4238,-.0474,.0003,.4926,-.014,-.0361,.5572,-.0474,-.0567,.4926,-.0002,-.0357,.5565,.047,.0003,.4926,-.014,.0003,.5572,-.0002,.0003,.5565,.0137,-.0353,.5572,.0137,.0003,.5572,.0573,.0003,-.3359,.0346,.1151,-2.49
                    ,-.0002,.1857,-.3403,-.0349,.1151,-2.49,-.0002,.1616,-2.5233,-.0563,.0481,-.2574,-.0002,.0003,-3.1274,-.0349,.1151,-.3408,-.0002,.0475,.3711,-.0002,.0471,-.2592,.0346,.1151,-.3408,-.0563,.1151,-.3225,-.0563,.3545,-.2588,-.0563,.1151,-.2574,-.0002,.1866,-.2593,.0573,.046,-.2574,.0573,.1151,-.3225,-.0002,.4261,-.2608,.0573,.3545,-.324
                    ,.0573,.3545,-.2588,-.0563,.3545,-.324,-.0002,.4253,-.3232,.0573,.1151,-.2574,-.0002,.1859,-.3217,-.0002,.0559,.4213,-.0349,.0484,.3728,-.0002,.0003,.4214,-.0002,.0003,.3711,-.0002,.0003,-.2591,-.0002,.0003,.4902,.047,.0544,.4238,-.0002,.056,.4901,.0346,.0464,.3728,-.014,.0367,.5572,-.0474,.0573,.4926,-.0474,.0572,.4238
                    ,-.0002,.0363,.5565,.0137,.0359,.5572,.047,.0545,.4926
                ]),
                false);

                var _i;//indices & affected indices for shapekeys
                _i = new Uint32Array(540);
                CONTIG(_i, 0, 0, 10);
                _i.set([4,4,11,5,12,9,1,6,13,14,1,3,2,15,16,17,18,19,6,20,16,21,22,23,24,25,26,27,26,17,16,20,27,26,28,17,29,28,25,22,22,27,23,8,30,13,14,23,20,14
                ,21,6,24,31,32,24,13,33,34,35,36,8,37,38,33,39,31,33,30,34,40,41,42,35,41,43,38,35,30,38,40,42,34,44,39,43,45,46,47,46,48,44,47,48,35,47,36,2,28,22
                ,5,18,15,28,5,15,49,2,22,0,50,12,51,52,53,54,7,19,53,10,55,11,52,56,53,12,50,57,54,58,51,50,59,60,61,62,54,18,60,61,63,62,64,65,49,66,67,68,66,69
                ,70,63,68,71,72,69,60,67,72,65,68,65,71,73,74,57,58,71,64,62,58,54,7,75,76,76,32,77,31,64,32,64,57,58,19,76,77,37,78,75,79,80,73,74,37,7,75,31,76,39
                ,81,31,81,73,57,82,40,83,80,82,83,80,84,73,84,40,37,78,39,75,44,79,39,45,85,46,46,86,48,78,48,44,44,86,87,86,80,87,45,78,40,72,59,65,18,56,60,72,56,51
                ,49,59,0,0,12,1,3,9,4,6,19,7,9,55,10,4,10,11,12,55,9,6,8,13,1,9,3,15,21,16,6,21,15,15,18,6,20,26,16,24,32,49,49,22,24,25,29,26,26,29
                ,17,20,23,27,28,15,17,28,29,25,22,25,27,8,38,30,14,24,23,14,20,21,24,33,31,24,14,13,34,30,35,8,7,37,33,34,39,33,13,30,40,45,41,35,42,41,38,42,35,38
                ,37,40,34,36,44,43,41,45,47,43,46,44,36,47,35,43,47,2,3,28,5,11,18,28,3,5,49,0,2,0,59,50,51,56,52,54,74,7,53,52,10,11,10,52,53,55,12,57,74,54
                ,51,53,50,60,69,61,60,62,54,54,19,18,61,66,63,49,32,64,64,71,65,66,70,67,66,61,69,63,66,68,72,70,69,67,70,72,68,67,65,73,84,74,58,63,71,62,63,58,7,37
                ,75,76,31,32,31,81,64,64,81,57,19,7,76,37,40,78,79,87,80,74,84,37,75,39,31,39,79,81,81,79,73,82,45,40,80,85,82,80,83,84,84,83,40,78,44,39,44,87,79,45
                ,82,85,46,85,86,78,46,48,44,48,86,86,85,80,45,46,78,72,51,59,18,11,56,72,60,56,49,65,59], 11);
                this.setIndices(_i);

                this.setVerticesData(_B.VertexBuffer.NormalKind, new Float32Array([
                    .934,0,-.3572,.9467,-.3205,-.0302,.8575,-.2972,-.4199,0,-1,-.0057,-.9467,-.3205,-.0302,-.8645,-.2954,-.4065,-.8982,-.3039,.3176,-.872,-.481,-.0901,-.6773,-.7217,-.1427,0,-.9876,-.1567,-.9852,0,-.1712,-.9388,0,-.3443,.9852,0,-.1712,.0289,-.9963,-.0806,.0125,-.7001,.7139,-.8802,-.1148,-.4604,-.7163,-.255,.6495
                    ,-.7182,-.2497,-.6494,-.9142,0,-.4053,-.9701,-.2421,.0164,.0003,-.0051,1,-.6952,-.0014,.7188,.8743,-.1136,-.4718,.6955,-.0014,.7185,.9023,-.3009,.3088,.7177,-.254,-.6483,-.0046,-.8311,.5561,.7159,-.2593,.6483,0,-.2571,-.9664,-.0046,-.8213,-.5705,.0292,-.9958,-.0861,.872,-.4813,-.0892,.9702,-.2417,.0175,.6989,-.702,-.1368
                    ,.7198,-.6818,-.13,.0291,-.9899,.1387,.7083,-.6652,.2362,-.9002,-.4217,-.1085,-.6991,-.7024,-.1332,.9002,-.4217,-.1085,-.8906,-.4,.2163,-.3885,-.4991,.7746,-.6874,-.6853,.2405,.0183,-.6081,.7936,.8906,-.4,.2163,-.4664,-.3537,.8107,-.0002,-.4588,.8885,.4046,-.4881,.7733,.4666,-.3537,.8106,.9077,0,-.4196,.9467,.3205,-.0302
                    ,0,1,-.0057,-.9467,.3205,-.0302,0,.9876,-.1567,-.8982,.3039,.3176,0,0,-1,-.8645,.2954,-.4065,.0289,.9963,-.0806,.0125,.7001,.7139,.8575,.2972,-.4199,-.8802,.1148,-.4604,-.7163,.255,.6495,-.6952,.0014,.7188,.0003,.0051,1,.9023,.3009,.3088,.8743,.1136,-.4718,-.0046,.8311,.5561,.7177,.254,-.6483
                    ,.7159,.2593,.6483,-.7182,.2497,-.6494,-.0046,.8213,-.5705,.6955,.0014,.7185,0,.2571,-.9664,.0292,.9958,-.0861,-.6773,.7217,-.1427,0,-1,0,0,-1,0,0,-1,0,0,-1,0,.7198,.6818,-.13,.0291,.9899,.1387,.6989,.702,-.1368,-.3885,.4991,.7746,-.6874,.6853,.2405,-.6991,.7024,-.1332
                    ,.0183,.6081,.7936,.4046,.4881,.7733,.7083,.6652,.2362
                ]),
                false);

                this.subMeshes = [];
                new _B.SubMesh(0, 0, 88, 0, 540, this);
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

        Sword.prototype.dispose = function (doNotRecurse) {
            _super.prototype.dispose.call(this, doNotRecurse);
            if (this.skeleton) this.skeleton.dispose();
            clean(0);
        };
        return Sword;
    })(BABYLON.Mesh);
    Sword.Sword = Sword;

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
    Sword.freshenShadowRenderLists = freshenShadowRenderLists;
})(Sword || (Sword = {}));