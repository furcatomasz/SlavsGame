import {AIServer} from "./AIServer";

window.addEventListener('DOMContentLoaded', () => {
    new AIServer(<HTMLCanvasElement>document.getElementById('renderCanvas'));
});
