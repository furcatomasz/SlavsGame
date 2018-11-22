namespace Factories {
    export class Quests {

        public mesh: BABYLON.AbstractMesh;
        public box: BABYLON.AbstractMesh;
        public tooltip: BABYLON.AbstractMesh;
        protected game: Game;

        /**
         *
         * @param {Game} game
         * @param serverData
         * @param activeQuest
         */
        constructor(game: Game, serverData, activeQuest): void {
            let self = this;
            let questPicker = game.getScene().getMeshByName(serverData.objectName);
            if (!questPicker) {
                throw new TypeError('Wrong quest mesh name.');
            }
            questPicker.isPickable = true;

            this.game = game;
            this.mesh = questPicker;
            this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());

            self.createTooltip(serverData, activeQuest);
            self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                self.box,
                'scaling',
                new BABYLON.Vector3(2, 2, 2),
                300
            ));

            self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                self.box,
                'scaling',
                new BABYLON.Vector3(1, 1, 1),
                300
            ));

            self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function () {
                    let quest = new GUI.NewQuest(game.gui, serverData);
                    quest.open();
                })
            );

        }

        protected refreshTooltipColor(serverData, activeQuest) {
            if(activeQuest && activeQuest.questId != serverData.questId) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            } else if(activeQuest && activeQuest.questId == serverData.questId) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
            } else {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            }

            return this;
        }

        protected createTooltip(serverData, activeQuest) {
            let box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 3;
            let materialBox = new BABYLON.StandardMaterial("texture1", this.game.getScene());

            box1.material = materialBox;
            if(this.game.sceneManager.octree) {
                this.game.sceneManager.octree.dynamicContent.push(box1);
            }
            let keys = [];
            keys.push({
                frame: 0,
                value: 0
            });

            keys.push({
                frame: 30,
                value: -2
            });

            let animationBox = new BABYLON.Animation("rotation", "rotation.y", 30,
                BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
            animationBox.setKeys(keys);

            box1.animations = [];
            box1.animations.push(animationBox);
            this.box = box1;
            this.game.getScene().beginAnimation(box1, 0, 30, true);

            this.tooltip = box1;

            this.refreshTooltipColor(serverData, activeQuest);
        }
    }
}
