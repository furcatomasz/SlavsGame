import {AbstractNpc} from "./AbstractNpc";
import {Game} from "../../game";
import * as BABYLON from 'babylonjs';

export class Guard extends AbstractNpc {

    public constructor(game: Game, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {

        super(game, 'Guard', position, rotation);
        this.mesh = game.getSceneManger().assets.character.createClone('Warrior', true);

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
