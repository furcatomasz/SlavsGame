namespace Character.Skills {
    export abstract class AbstractSkill {
        static TYPE = 0;

        protected player: Player;
        protected game: Game;
        public name: string;
        public animationName: string;
        public animationSpeed: number;
        public animationTime: number;
        public animationLoop: boolean;

        protected effectEmitter;
        protected image: string;
        public isReady: boolean;
        public isInUse: boolean;

        /** GUI */
        protected animationOverlay: BABYLON.Animation;
        protected animationAlpha: BABYLON.Animation;
        protected guiImage: BABYLON.GUI.Image;
        protected guiOverlay: BABYLON.GUI.Rectangle;
        protected guiText: BABYLON.GUI.TextBlock;

        constructor(player: Player) {
            this.animationTime = 0;
            this.animationLoop = false;
            this.player = player;
            this.game = player.game;
            this.isReady = true;
            this.registerDefaults(this.game);

            if(player.isControllable) {
                this.registerHotKey();
                this.registerAnimations();
                this.createSkillImageInGUI();
            }
        }


        public getImageUrl() {
            return this.image;
        }

        public abstract getType();

        public abstract showAnimation(skillTime: number, cooldownTime: number);

        protected abstract registerDefaults(game: Game);

        protected registerHotKey() {
            let self = this;
            let game = this.game;

            let listener = () => {
                const player = game.player;
                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == self.getType()
                        && self.isReady
                        && !player.isAnySkillIsInUse()) {
                        const position = player.meshForMove.position;
                        let rotation = player.meshForMove.rotation;
                        let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / 1, 0, -parseFloat(Math.cos(rotation.y)) / 1);
                        let newPosition = position.add(forwards);

                        game.client.socket.emit('useSkill', self.getType());
                        game.client.socket.emit('setTargetPoint', {
                            position: newPosition
                        });
                        player.runPlayerToPosition(newPosition);
                    }
                }));
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        protected showReloadInGUI(cooldownTime: number) {
            if(this.player.isControllable) {
                const game = this.game;
                const self = this;
                const speedRatio = 1 / cooldownTime;
                this.isReady = false;

                game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, speedRatio, function () {
                    game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
                    self.isReady = true;
                });
            }
        }

        protected createSkillImageInGUI() {
            let game = this.game;
            let image = this.getImageUrl();
            let number = this.getType();
            let grid = game.gui.playerBottomPanel.guiGridSkills;

            let imageSkill = new BABYLON.GUI.Image('image_' + number, image);
            imageSkill.width = 1;
            imageSkill.height = 1;
            imageSkill.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

            let textBlock = new BABYLON.GUI.TextBlock('shortcut_' + number, '' + number + '');
            textBlock.color = 'white';
            textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            let overlay = new BABYLON.GUI.Rectangle();
            overlay.width = 1;
            overlay.height = 0;
            overlay.alpha = 0.7;
            overlay.color = "black";
            overlay.background = "black";
            overlay.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            imageSkill.animations = [];
            imageSkill.animations.push(this.animationAlpha);

            overlay.animations = [];
            overlay.animations.push(this.animationOverlay);

            grid.addControl(imageSkill, 0, number - 1);
            grid.addControl(textBlock, 0, number - 1);
            grid.addControl(overlay, 0, number - 1);

            this.guiImage = imageSkill;
            this.guiOverlay = overlay;
            this.guiText = textBlock;
        }

        private registerAnimations() {
            let animationAlpha = new BABYLON.Animation("animationAlpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            animationAlpha.setKeys([
                {
                    frame: 0,
                    value: 1
                },
                {
                    frame: 15,
                    value: 0
                },
                {
                    frame: 30,
                    value: 1
                }
            ]);

            let animationOverlay = new BABYLON.Animation("animationOverlay", "height", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            animationOverlay.setKeys([
                {
                    frame: 0,
                    value: 1
                },
                {
                    frame: 30,
                    value: 0
                },
            ]);

            this.animationOverlay = animationOverlay;
            this.animationAlpha = animationAlpha;
        }

    }
}
