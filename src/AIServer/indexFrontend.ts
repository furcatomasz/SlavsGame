import {AIServer} from "./AIServer";
let socket = require('socket.io-client/dist/socket.io.js');

window.addEventListener('DOMContentLoaded', () => {
    new AIServer(<HTMLCanvasElement>document.getElementById('renderCanvas'), socket);
});
