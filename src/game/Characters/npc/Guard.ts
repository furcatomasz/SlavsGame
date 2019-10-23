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
                meshName: 'leatherArmor',
                equip: 1,
            },
            {
                meshName: 'leatherHelm',
                equip: 1,
            },
            {
                meshName: 'leatherBoots',
                equip: 1,
            },
            {
                meshName: 'leatherGloves',
                equip: 1,
            },
            {
                meshName: 'shieldWoodenMedium',
                equip: 1,
            },
            {
                meshName: 'swordLong',
                equip: 1,
            }
        ];
        this.setItems(items);

    }

}
