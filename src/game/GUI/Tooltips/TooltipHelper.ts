import {TooltipButton} from "./TooltipButton";
import {Item} from "../../Player/Items/Item";
import {AdvancedDynamicTexture, Control} from 'babylonjs-gui';

export class TooltipHelper {

    static createTooltipOnInventoryItemButton(texture: AdvancedDynamicTexture, item: Item, button: Control, pickCallback) {
        let tooltipButton = null;
        button.onPointerEnterObservable.add(function () {
            let text = item.name;
            if (item.statistics.damageMin > 0) {
                text += "\nDamage: " + item.statistics.damageMin + " - " + item.statistics.damageMax + "";
            }
            if (item.statistics.armor > 0) {
                text += "\nArmor: " + item.statistics.armor + "";
            }

            tooltipButton = new TooltipButton(texture, text, new BABYLON.Vector2(button.centerX, button.centerY));
        });

        button.onPointerOutObservable.add(function () {
            tooltipButton.container.dispose();
        });

        button.onPointerUpObservable.add(pickCallback);
    }
}
