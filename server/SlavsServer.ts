let io = require('socket.io');
let socketIOClient = require('socket.io-client');
let BABYLON = require("../../bower_components/babylonjs/dist/preview release/babylon.max");
let LOADERS = require("../../bower_components/babylonjs/dist/preview release/loaders/babylonjs.loaders");

class SlavsServer {
    constructor() {
        new Server.BabylonManager();
    }
}

setTimeout(function () {
    new SlavsServer();
}, 0);