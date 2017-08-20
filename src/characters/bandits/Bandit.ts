/// <reference path="../AbstractCharacter.ts"/>
namespace Bandit {
    export class Bandit extends Monster {

        protected inventory: Character.Inventory;

        public constructor(serverKey: number, game:Game, position: BABYLON.Vector3, rotationQuaternion: BABYLON.Quaternion) {
            this.name = 'Bandit';

            let mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.position = position;
            mesh.rotation = rotationQuaternion;

            this.mesh = mesh;
            this.statistics = new Attributes.CharacterStatistics(50,50,100,3,10,100,0,100);
            this.id = serverKey;
            this.mesh = mesh;
            this.visibilityAreaSize = 30;
            this.attackAreaSize = 6;
            this.sfxHit = new BABYLON.Sound("WormWalk", "/assets/Characters/Worm/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
            this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, { loop: true, autoplay: false });

            this.inventory = new Character.Inventory(game, this);
            let armor = new Items.Armors.Robe(game);
            let axe = new Items.Weapons.Axe(game);
            let gloves = new Items.Gloves.PrimaryGloves(game);
            let boots = new Items.Boots.PrimaryBoots(game);

            this.inventory.mount(armor);
            this.inventory.mount(gloves);
            this.inventory.mount(boots);
            this.inventory.mount(axe);

            super(name, game);
        }

    }
}