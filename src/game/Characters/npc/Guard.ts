import {AbstractNpc} from "./AbstractNpc";
import {Game} from "../../Game";
import * as BABYLON from 'babylonjs';

export class Guard extends AbstractNpc {

    public constructor(game: Game, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {
        // @ts-ignore
        this.mesh = game.getSceneManger().assets.character.createClone('Warrior', true);

        super(game, 'Guard', position, rotation);
        let items = [
            {
                meshName: 'Axe.001',
                entity: {
                    equip: 1
                }
            },
            {
                meshName: 'Shield',
                entity: {
                    equip: 1
                }
            },
            {
                meshName: 'Helm',
                entity: {
                    equip: 1
                }
            }
        ];

        this.setItems(items);

    }

}
