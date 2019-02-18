class GameOptions {

    protected renderingPipeline: BABYLON.DefaultRenderingPipeline;
    protected staticShadowGenerator: BABYLON.ShadowGenerator;

    public dynamicShadowGenerator: BABYLON.ShadowGenerator;
    public dynamicShadowsArray: Array<BABYLON.AbstractMesh>;
    public staticShadows: boolean;
    public dynamicShadows: boolean;
    public postProccessing: boolean;
    public fxaa: boolean;
    public fog: boolean;
    public dof: boolean;
    public fStop: boolean;
    public focusDistance: boolean;
    public focalLength: boolean;
    public lensSize: boolean;
    public bloom: boolean;

    constructor(game: Game) {
        this.dynamicShadowsArray = [];
        this.refreshAllData();
        this.initInScene(game);
    }

    protected refreshAllData() {
        this.staticShadows = this.getFromLocalStorage('staticShadows');
        this.dynamicShadows = this.getFromLocalStorage('dynamicShadows');
        this.postProccessing = this.getFromLocalStorage('postProccessing');
        this.fxaa = this.getFromLocalStorage('fxaa');
        this.fog = this.getFromLocalStorage('fog');
        this.dof = this.getFromLocalStorage('dof');
        this.fStop = this.getFromLocalStorage('fStop');
        this.focusDistance = this.getFromLocalStorage('focusDistance');
        this.focalLength = this.getFromLocalStorage('focalLength');
        this.lensSize = this.getFromLocalStorage('lensSize');
        this.bloom = this.getFromLocalStorage('bloom');
    }

    protected getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem('options.' + key));
    }

    public static saveInLocalStorage(key, value, game: Game) {
        localStorage.setItem('options.' + key, JSON.stringify(value));

        game.sceneManager.options.initInScene(game);
    }

    public addMeshToDynamicShadowGenerator(mesh: BABYLON.AbstractMesh) {
        this.dynamicShadowsArray.push(mesh);

        if (this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
        }
    }

    public initInScene(game: Game) {
        this.refreshAllData();
        const scene = game.getScene();
        const self = this;
        const camera = scene.getCameraByName('gameCamera');

        if (this.staticShadows && !this.staticShadowGenerator && game.sceneManager.environment && game.sceneManager.environment.light) {
            let shadowGenerator = new BABYLON.ShadowGenerator(2048, game.sceneManager.environment.light);
            shadowGenerator.usePercentageCloserFiltering = true;
            shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
            shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            game.sceneManager.environment.light.autoUpdateExtends = false;
            this.staticShadowGenerator = shadowGenerator;
            const staticShadowMeshes = game.sceneManager.environment.staticShadowObjects;
            for (let i = 0; i < staticShadowMeshes.length; i++) {
                const shadowedMesh = staticShadowMeshes[i];
                shadowGenerator.getShadowMap().renderList.push(shadowedMesh);
            }
        } else if (!this.staticShadows && this.staticShadowGenerator) {
            this.staticShadowGenerator.dispose();
            this.staticShadowGenerator = null;
        }

        if (this.dynamicShadows && !this.dynamicShadowGenerator) {
            self.dynamicShadowGenerator = new BABYLON.ShadowGenerator(512, game.player.playerLight);
            self.dynamicShadowsArray.forEach((mesh) => {
                self.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
            });
        } else if (!this.dynamicShadows && this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.dispose();
            this.dynamicShadowGenerator = null;
        }

        if (!this.postProccessing && this.renderingPipeline) {
            this.renderingPipeline.dispose();
            this.renderingPipeline = null;
        } else if (this.postProccessing && !this.renderingPipeline) {
            this.renderingPipeline = new BABYLON.DefaultRenderingPipeline("postProccesing", false, scene, [camera]);
        }

        if (this.renderingPipeline) {
            this.renderingPipeline.fxaaEnabled = this.fxaa;
            this.renderingPipeline.depthOfFieldEnabled = this.dof;
            this.renderingPipeline.bloomEnabled = this.bloom;
            this.renderingPipeline.bloomThreshold = 0.1;
            this.renderingPipeline.bloomWeight = 1;
            this.renderingPipeline.bloomScale = 1;
            this.renderingPipeline.depthOfField.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
            // this.renderingPipeline.depthOfField.fStop = this.fStop;
            // this.renderingPipeline.depthOfField.focusDistance = this.focusDistance;
            // this.renderingPipeline.depthOfField.focalLength = this.focalLength;
            // this.renderingPipeline.depthOfField.lensSize = this.lensSize;
            this.renderingPipeline.depthOfField.fStop = 0.27;
            this.renderingPipeline.depthOfField.focusDistance = 43050;
            this.renderingPipeline.depthOfField.focalLength = 292;
            this.renderingPipeline.depthOfField.lensSize = 136;
        }

        if (this.fog) {
            game.sceneManager.setFog(game.getScene());
        } else {
            game.sceneManager.disableFog(game.getScene());
        }
    }
}
