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

            game.client.socket.emit('getEquip', place);
            let inventoryItems
            this.inventory = new Character.Inventory(game, this);

            let armor = new Items.Armors.PrimaryArmor(game);
            let helm = new Items.Helms.PrimaryHelm(game);
            let gloves = new Items.Gloves.PrimaryGloves(game);
            let boots = new Items.Boots.PrimaryBoots(game);

            this.inventory.mount(armor);
            this.inventory.mount(helm);
            this.inventory.mount(gloves);
            this.inventory.mount(boots);

            super(name, game);

            this.mesh.skeleton.beginAnimation('Sit');

            this.registerActions();
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

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function() {
                    self.game.client.socket.emit('selectCharacter', self.place);
                    self.game.client.socket.on('characterSelected', function() {
                        self.game.sceneManager.changeScene(new Simple());
                    })
                })
            );
        }
    }
}