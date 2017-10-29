namespace Server {

    export class BabylonManager {

        protected slavsServer:SlavsServer;
        protected engine:BABYLON.NullEngine;
        protected scene:BABYLON.Scene;

        constructor(slavsServer:SlavsServer) {
            this.slavsServer = slavsServer;
        }

        public initEngine() {
            this.engine = new BABYLON.NullEngine();
            let scene = new BABYLON.Scene(this.engine);
            this.scene = scene;
            let light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
            let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            this.engine.runRenderLoop(function () {
                scene.render();
            })

        }
    }

}

