/// <reference path="../AbstractCharacter.ts"/>
namespace SelectCharacter {
    export class Bandit extends AbstractCharacter {

        protected inventory: Character.Inventory;
        protected skeletonAnimation;

        public constructor(game:Game) {
            this.name = 'Warrior';

            let mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.position = new BABYLON.Vector3(2, 0.1, 10);
            mesh.rotation = new BABYLON.Vector3(0, 0.2, 0);
            this.mesh = mesh;

            this.inventory = new Character.Inventory(game, this);

            let armor = new Items.Armors.Robe(game);
            let gloves = new Items.Gloves.PrimaryGloves(game);
            let boots = new Items.Boots.PrimaryBoots(game);

            this.inventory.mount(armor);
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
                        });
                    }
                })
            );

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                function() {
                    //self.game.getScene().stopAnimation(self.mesh.skeleton);
                })
            );

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function() {
                    console.log(1);
                    new Simple().initScene(self.game);
                })
            );
        }
    }
}