import {Game} from "./game";
import * as BABYLON from 'babylonjs';

window.addEventListener('DOMContentLoaded', () => {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            if (BABYLON.Engine.isSupported()) {
                const htmlElement = <HTMLCanvasElement> document.getElementById('renderCanvas');
                document.getElementsByTagName("body")[0].setAttribute("oncontextmenu", "return false");
                new Game(htmlElement, window.location.hostname + ':5000', 'accessToken', false);
            }
        }
    }
});
