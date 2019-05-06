namespace NPC {
    export abstract class AbstractNpc extends AbstractCharacter {

        protected box: BABYLON.AbstractMesh;
        protected quest: Quests.AbstractQuest;
        protected questId: number;
        protected tooltip: BABYLON.AbstractMesh;
        protected inventory: Character.Inventory;

        public constructor(game:Game, name, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {
            super(name, game);
            game.getSceneManger().npcs.push(this);

            let self = this;
            this.mesh.position = position;
            this.mesh.rotation = rotation;

            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;

            ///Top GUI BAR
            this.statistics = {
                hpMax: 1000,
                hp: 1000
            };
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    self.game.gui.characterTopHp.hideHpBar();
                }));

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    self.game.gui.characterTopHp.showHpCharacter(self);
                }));

            ///QUEST LISTENER
            let listener = function listener() {
                let questManager = new Quests.QuestManager(self.game);
                self.quest = questManager.getQuestFromServerUsingQuestId(self.questId);

                if(self.quest && !self.quest.isFinished) {
                    self.createTooltip();
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
                            let quest = new GUI.Quest(game.gui, self.quest, self.mesh);
                            quest.open();

                        })
                    );
                }
                document.removeEventListener(Events.QUESTS_RECEIVED, listener);
            };
            document.addEventListener(Events.QUESTS_RECEIVED, listener);
        }

        public removeFromWorld() {
            this.mesh.dispose();
            this.tooltip.dispose();
        }

        public refreshTooltipColor() {
            if(this.quest.isActive && !this.quest.hasRequrementsFinished) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            } else if(this.quest.isActive && this.quest.hasRequrementsFinished) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
            } else {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            }

            return this;
        }

        public createTooltip() {
            let box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 7;
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

            this.refreshTooltipColor();
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
    }
}
