class SlavsLoader implements BABYLON.ILoadingScreen {

    public loadingUIBackgroundColor: string
    constructor(public loadingUIText: string) {}
    public displayLoadingUI() {
        let loader = document.getElementById("game-loader");
        loader.style.display = "inline";
        loader.style.opacity = "1";

        SlavsLoader.changeLoadingText('Loading scene...');
    }

    public hideLoadingUI() {
        let loader = document.getElementById("game-loader");
        let canvas = document.getElementById("renderCanvas");
        loader.style.opacity = "0";
        loader.style.display = "none";
    }

    public static changeLoadingText(text: string) {
        let loaderText = document.getElementById("game-loader-text");
        loaderText.innerHTML = text;
    }

    public static showLoaderWithText(text: string) {
        let loader = document.getElementById("game-loader");
        loader.style.opacity = "1";
        loader.style.display = "inline";


        SlavsLoader.changeLoadingText(text);
    }
}
