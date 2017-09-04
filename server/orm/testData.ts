namespace Server.Orm {
    export class TestData {
        protected ormManager: Server.OrmManager;

        constructor(ormManager: Server.OrmManager) {
            this.ormManager = ormManager;

            ormManager.structure.user.exists({ email: "furcatomasz@gmail.com" }, function (err, exists) {
                if (err) throw err;

                if(!exists) {
                    ormManager.structure.user.create({email: "furcatomasz@gmail.com"}, function (err) {
                        if (err) throw err;
                    });
                }
            });

            ormManager.structure.user.find({ email: "furcatomasz@gmail.com" }, function (err, user) {
                if (err) throw err;
                let userId = user[0].id;

                ormManager.structure.player.exists({ name: "Mietek" }, function (err, exists) {
                    if (err) throw err;

                    if(!exists) {
                        ormManager.structure.player.create({name: "Mietek", type: 1, userId: userId}, function (err) {
                            if (err) throw err;
                        });
                    }
                });

                ormManager.structure.player.exists({ name: "Tumek" }, function (err, exists) {
                    if (err) throw err;

                    if(!exists) {
                        ormManager.structure.player.create({name: "Tumek", type: 1, userId: userId}, function (err) {
                            if (err) throw err;
                        });
                    }
                });
            });



        }
    }
}