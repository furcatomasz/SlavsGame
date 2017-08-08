/// <reference path="../AbstractCharacter.ts"/>
namespace NPC {
    export abstract class AbstractNpc extends AbstractCharacter {

        protected box: BABYLON.AbstractMesh;
        protected quest: Quests.AbstractQuest;

        public constructor(game:Game, name) {
            super(name, game);
            let self = this;
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;
            this.createTooltip();
            this.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                self.box,
                'scaling',
                new BABYLON.Vector3(2,2,2),
                300
            );

            this.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                self.box,
                'scaling',
                new BABYLON.Vector3(1,1,1),
                300
            );

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function() {
                    let quest = new GUI.Quest(game.gui, new Quests.KillWorms(game));
                    quest.open();

                })
            );

        }

        public removeFromWorld() {
            this.mesh.dispose();
            this.game.sceneManager.guiTexture.removeControl(this.guiCharacterName);
        }


        protected registerFunctionAfterRender() {
        }

        protected createGUI() {
        }

        public createTooltip() {
            console.log(this);
            var box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 7;
            var materialBox = new BABYLON.StandardMaterial("texture1", this.game.getScene());
            materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);
            box1.material = materialBox;
            var keys = [];
            keys.push({
                frame: 0,
                value: 0
            });

            keys.push({
                frame: 30,
                value: -2
            });

            var animationBox = new BABYLON.Animation("rotation", "rotation.y", 30,
                BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
            animationBox.setKeys(keys);

            box1.animations = [];
            box1.animations.push(animationBox);
            this.box = box1;
            this.game.getScene().beginAnimation(box1, 0, 30, true);
        }
    }
}