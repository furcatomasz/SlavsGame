namespace Server {
    export class OrmManager {
        protected server: SlavsServer;
        public structure: Server.Orm.Structure;

        constructor(server: SlavsServer, orm, config) {
            this.server = server;
            let self = this;
            console.log(config.server);
            let ormPassword = (config.server.orm.password) ? ':' + config.server.orm.password + '' : '';
            orm.connect('mysql://' + config.server.orm.username + '' + ormPassword + '@' + config.server.orm.host + '/' + config.server.orm.database + '', function (err, db) {
                if (err) throw err;
                self.structure = new Server.Orm.Structure(db);
                
                db.sync(function (err) {
                    if (err) throw err;

                    new Server.Orm.TestData(self);
                });

            });

        }
    }
}