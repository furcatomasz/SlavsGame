import {AbstractCharacter} from "../AbstractCharacter";
import {Game} from "../../game";
import {Inventory} from "../../Player/Inventory";
import {ItemManager} from "../../Player/Items/ItemManager";
import * as BABYLON from 'babylonjs';

export abstract class AbstractNpc extends AbstractCharacter {

        protected box: BABYLON.AbstractMesh;
        protected questId: number;
        protected tooltip: BABYLON.AbstractMesh;
        protected inventory: Inventory;

        public constructor(game:Game, name, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {
            super(name, game);
            game.getSceneManger().npcs.push(this);

            let self = this;
            this.mesh.position = position;
            this.mesh.rotation = rotation;

            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;

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
        }

        public removeFromWorld() {
            this.mesh.dispose();
            this.tooltip.dispose();
        }

        /**
         *
         * @param inventoryItems
         */
        public setItems(inventoryItems: Object[]) {
            this.inventory = new Inventory(this.game, this);

            if(inventoryItems) {
                let itemManager = new ItemManager(this.game);
                itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);

            }
        }
    }
