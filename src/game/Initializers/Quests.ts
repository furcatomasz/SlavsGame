import {Game} from "../game";
import {TooltipMesh} from "../GUI/Tooltips/TooltipMesh";
import {NewQuest} from "../GUI/popup/newQuest";

export class Quests {

    private mesh: BABYLON.AbstractMesh;
    private tooltipMesh: BABYLON.AbstractMesh;
    private tooltipGui: TooltipMesh;
    private game: Game;

    /**
     *
     * @param {Game} game
     * @param serverData
     * @param activeQuest
     */
    constructor(game: Game, serverData, activeQuest) {
        let self = this;
        let questPicker = game.getScene().getMeshByName(serverData.objectName);
        if (!questPicker) {
            throw new TypeError('Wrong quest mesh name.');
        }
        questPicker.isPickable = true;

        this.game = game;
        this.mesh = questPicker;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());

        self.createTooltip(serverData, activeQuest, questPicker);
        self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                let quest = new NewQuest(game.gui, serverData);
                quest.open();
            })
        );

    }

    protected refreshTooltipColor(serverData, activeQuest, questPicker: BABYLON.AbstractMesh) {
        //TODO: veirfy color
        let material = <BABYLON.StandardMaterial> this.tooltipMesh.material;
        if (activeQuest && activeQuest.questId != serverData.questId) {
            material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        } else if (activeQuest && activeQuest.questId == serverData.questId) {
            material.diffuseColor = new BABYLON.Color3(1, 1, 0);
        } else {
            material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            this.tooltipGui = new TooltipMesh(questPicker, 'New quest', -45);
        }

        return this;
    }

    protected createTooltip(serverData, activeQuest, questPicker: BABYLON.AbstractMesh) {
        let box = BABYLON.Mesh.CreateBox("quest_box", 0.4, this.game.getScene());
        box.material = new BABYLON.StandardMaterial("quest_box_material", this.game.getScene());
        box.parent = this.mesh;
        box.position.y += 3;

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
        box.animations = [];
        box.animations.push(animationBox);

        this.tooltipMesh = box;
        this.game.getScene().beginAnimation(box, 0, 30, true);
        this.refreshTooltipColor(serverData, activeQuest, questPicker);
    }

    public dispose() {
        if (this.tooltipGui) {
            this.tooltipGui.container.dispose();
        }
        this.tooltipMesh.dispose();
    }
}
