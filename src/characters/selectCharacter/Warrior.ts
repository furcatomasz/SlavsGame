/// <reference path="../AbstractCharacter.ts"/>
namespace SelectCharacter {
    export class Warrior extends AbstractCharacter {

        protected inventory: Character.Inventory;
        protected skeletonAnimation;
        protected playerId: Number;

        public constructor(game:Game, place: Number, playerDatabase) {
            this.name = 'Warrior';
            this.playerId = playerDatabase.id;

            let mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.skeleton.enableBlending(0.2);
            mesh.alwaysSelectAsActiveMesh = true;

            switch (place) {
                case 0:
                    mesh.position = new BABYLON.Vector3(-0.3, 0, 10.5);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0);
                    break;
                case 1:
                    mesh.position = new BABYLON.Vector3(2.7, 0, 10);
                    mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
                    break;
            }

            this.mesh = mesh;
            super(name, game);

            this.setItems(playerDatabase.items);
            this.mesh.skeleton.beginAnimation('Sit');

            this.registerActions();
        }

        /**
         *
         * @param inventoryItems
         */
        public setItems(inventoryItems: Array) {
            this.inventory = new Character.Inventory(this.game, this);

            if(inventoryItems) {
                let itemManager = new Items.ItemManager(this.game);
                itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);

            }
        }

        removeFromWorld() {
        }

        protected registerActions() {
            let self = this;
            let pointerOut = false;
            let sitDown = function() {
                if(!self.skeletonAnimation) {
                    let animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                    self.skeletonAnimation = self.game.getScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from+1, false, -1, function() {
                        self.mesh.skeleton.beginAnimation('Sit');
                        self.skeletonAnimation = null;
                    });
                }
            };

            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                function() {
                    pointerOut = false;
                    if(!self.skeletonAnimation) {
                        self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                            self.skeletonAnimation = null;

                            if(pointerOut) {
                                sitDown();
                            } else {
                                console.log(1);
                                self.game.client.socket.emit('selectCharacter', self.playerId);

                                self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                            }
                        });
                    }
                })
            );

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                function() {
                    sitDown();
                    pointerOut = true;
                })
            );


            // this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            //     BABYLON.ActionManager.OnPickUpTrigger,
            //     function() {
            //         console.log(self.playerId);
            //         client.socket.emit('selectCharacter', self.playerId);
            //
            //     })
            // );
        }
    }
}