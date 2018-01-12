/// <reference path="Popup.ts"/>

namespace GUI {
    export class Rooms extends Popup {

        public rooms;

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Rooms';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;

            this.guiMain.game.client.socket.emit('getRooms');
        }

        public open() {
            let self = this;
            this.opened = true;
            this.initTexture();

            this.guiTexture.addControl(this.container);
            this.showText();
            let buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.left = -60;
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonClose.onPointerUpObservable.add(function() {
                self.close();
            });

            this.guiTexture.addControl(buttonClose);
            this.guiMain.registerBlockMoveCharacter(buttonClose);
            this.buttonClose = buttonClose;

            let buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Accept");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "70px;";
            buttonAccept.height = "40px";
            buttonAccept.left = 60;
            buttonAccept.horizontalAlignment = this.position;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonAccept.onPointerUpObservable.add(function() {
                //self.guiMain.game.client.socket.emit('acceptQuest', {id: self.quest.getQuestId()});
                self.close();
            });

            this.guiMain.registerBlockMoveCharacter(buttonAccept);
            this.guiTexture.addControl(buttonAccept);
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        }

        protected showText() {
            let self = this;
            let panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = "32%";
            panel.top = "5%";
            self.guiTexture.addControl(panel);

            if(this.rooms) {
                this.rooms.forEach(function (room, roomKey) {
                    let buttonAccept = BABYLON.GUI.Button.CreateImageButton("plus", room.roomId, "/assets/gui/plus.png");
                    buttonAccept.color = "white";
                    buttonAccept.background = "black";
                    buttonAccept.width = 0.6;
                    buttonAccept.height = "40px";
                    buttonAccept.onPointerUpObservable.add(function () {
                        self.guiMain.game.client.socket.emit('joinToRoom', room.roomId);
                        self.close();
                    });
                    panel.addControl(buttonAccept);
                });
            }



        }

    }
}