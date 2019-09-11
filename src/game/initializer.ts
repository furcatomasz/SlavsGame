import {Game} from "./game";

window.addEventListener('DOMContentLoaded', () => {
    new Game(<HTMLCanvasElement>document.getElementById('renderCanvas'), socket);
});
