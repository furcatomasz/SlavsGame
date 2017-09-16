/// <reference path="../AbstractCharacter.ts"/>
namespace SelectCharacter {
    export class Warrior extends AbstractCharacter {

        protected inventory: Character.Inventory;
        protected skeletonAnimation;
        protected place: Number;

        public constructor(game:Game, place: Number) {
            this.name = 'Warrior';
            this.place = place;

            let mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);

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

            this.initPlayerInventory();
            this.mesh.skeleton.beginAnimation('Sit');

            this.registerActions();
        }

        protected initPlayerInventory() {
            let game = this.game;
            this.inventory = new Character.Inventory(game, this);
            let inventoryItems = game.client.characters[this.place].items;
            let itemManager = new Items.ItemManager(game);
            for (let i = 0; i < inventoryItems.length; i++) {
                let itemDatabase = inventoryItems[i];
                let item = itemManager.getItemUsingId(itemDatabase.itemId);
                if(itemDatabase.equip) {
                    if(item.getType() != 1 && item.getType() != 2) {
                        this.inventory.mount(item);
                    }
                }
            }
        }

        removeFromWorld() {
        }

        protected registerActions() {
            let self = this;
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                function() {
                    if(!self.skeletonAnimation) {
                        self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                            self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                            self.skeletonAnimation = null;
                        });
                    }
                })
            );

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                function() {
                    if(!self.skeletonAnimation) {
                        let animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                        self.skeletonAnimation = self.game.getScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from, false, -1, function() {
                            self.mesh.skeleton.beginAnimation('Sit');
                            self.skeletonAnimation = null;
                        });
                    }
                })
            );

            let client = self.game.client;

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function() {
                    client.socket.emit('selectCharacter', self.place);
                    client.socket.on('characterSelected', function() {
                        self.game.sceneManager.changeScene(new Simple());
                        client.socket.emit('createPlayer');
                    })
                })
            );
        }
    }
}