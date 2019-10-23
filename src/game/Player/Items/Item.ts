import {Game} from "../../Game";
import * as BABYLON from 'babylonjs';

export class Item {
        public type: Number;
        public databaseId: Number;
        public mesh: BABYLON.Mesh;
        public meshName: string;
        public name: string;
        public image: string;
        public statistics: any;

        ///Trail Effect
        public trailBox: BABYLON.AbstractMesh;
        public trailMesh: BABYLON.TrailMesh;

        constructor(game: Game, itemData: any) {
            this.name = itemData.name;
            this.meshName = itemData.meshName;
            this.image = itemData.image;
            this.type = itemData.type;
            this.statistics = itemData.statistics;

            if (itemData.entity) {
                this.databaseId = itemData.entity.id;
            }
        }

        public dispose() {
            if (this.mesh) {
                this.mesh.dispose();
            }

            if (this.trailBox) {
                this.trailBox.dispose();
            }

            if (this.trailMesh) {
                this.trailMesh.dispose();
            }
        }

        public createTrailMesh(game: Game) {
            this.trailBox = BABYLON.Mesh.CreateBox('test', 1, game.getBabylonScene(), false);
            this.trailBox.layerMask = 2;
            this.trailBox.visibility = 0;

            this.trailMesh = new BABYLON.TrailMesh("Test", this.trailBox, game.getBabylonScene(), 0.2, 40, false);
            this.trailMesh.layerMask = 2;
            this.trailMesh.visibility = 0;

            let material =  new BABYLON.StandardMaterial('trail_material', game.getBabylonScene());
            material.emissiveColor = BABYLON.Color3.White();

            this.trailMesh.material = material;
        }
    }
