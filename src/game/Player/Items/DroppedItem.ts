import {Game} from "../../Game";
import {Item} from "./Item";
import {BounceAnimation} from "../../Animations/BounceAnimation";
import {TooltipMesh} from "../../GUI/Tooltips/TooltipMesh";
import {DroppedItem as DroppedItemParticles} from "../../Particles/DroppedItem";
import * as BABYLON from 'babylonjs';

export class DroppedItem {

        public static showItem(game: Game, item: Item, position: BABYLON.Vector3, itemDropKey: number) {
            let scene = game.getBabylonScene();

            let droppedItemBox = BABYLON.Mesh.CreateBox(item.name + '_Box', 3, scene, false);
            droppedItemBox.checkCollisions = false;
            droppedItemBox.visibility = 0;

            droppedItemBox.position.x = position.x;
            droppedItemBox.position.z = position.z;
            droppedItemBox.position.y = 0;

            let itemSpriteManager = new BABYLON.SpriteManager("playerManager",'assets/Miniatures/' + item.image + '.png', 1, {width: 512, height: 512}, scene);
            let itemSprite = new BABYLON.Sprite("player", itemSpriteManager);
            itemSprite.width = 1.8;
            itemSprite.height = 1.8;
            itemSprite.position.x = position.x;
            itemSprite.position.z = position.z;
            itemSprite.position.y = 1.5;
            itemSpriteManager.layerMask = 2;

            const animationBounce = BounceAnimation.getAnimation();
            //@ts-ignore
            itemSprite.animations.push(animationBounce);
            scene.beginAnimation(itemSprite, 0, 30, true);

            let tooltip = null;
            droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
            tooltip = new TooltipMesh(droppedItemBox, item.name);
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
                function () {
                    game.gui.playerLogsQuests.addText(item.name + '  has been picked up.', 'green');
                    game.socketClient.socket.emit('addDroppedItem', itemDropKey);
                    droppedItemBox.dispose();
                    tooltip.container.dispose();
                    itemSprite.dispose();
                }));

            let particleSystem = new DroppedItemParticles(game, droppedItemBox);
            particleSystem.particleSystem.start();
            droppedItemBox.freezeWorldMatrix();
        }
    }
