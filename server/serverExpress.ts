let path = require('path')

namespace Server {
    export class FrontEnd {
        protected server: SlavsServer;


        constructor(server: SlavsServer, expressApp, express) {
            this.server = server;

            expressApp.use(
                '/bower_components',
                express.static(path.resolve(__dirname + '/../../bower_components'))
            );
            expressApp.use(
                '/assets',
                express.static(path.resolve(__dirname + '/../../assets'))
            );

            expressApp.use(
                '/dist',
                express.static(path.resolve(__dirname + '/../../dist'))
            );
            expressApp.get('/', function (req, res, next) {
                res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
            });
        }
    }
}