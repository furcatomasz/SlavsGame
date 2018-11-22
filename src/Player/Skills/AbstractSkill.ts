namespace Character.Skills {
    export abstract class  AbstractSkill {
        static TYPE = 0;

        protected game: Game;

        public cooldown: number;
        public damage: number;
        public stock: number;
        public name: string;
        public animationName: string;
        public animationSpeed: number;
        public animationTime: number;
        public animationLoop: boolean;

        protected effectEmitter;
        protected image: string;

        /** GUI */
        protected animationOverlay: BABYLON.Animation;
        protected animationAlpha: BABYLON.Animation;

        protected guiImage: BABYLON.GUI.Image;
        protected guiOverlay: BABYLON.GUI.Rectangle;
        protected guiText: BABYLON.GUI.TextBlock;

        constructor(game: Game, cooldown: number = 0, damage: number = 0, stock: number = 0) {
            this.cooldown = cooldown;
            this.damage = damage;
            this.stock = stock;
            this.animationTime = 0;
            this.animationLoop = false;
            this.game = game;
            this.registerDefaults(game);
            this.registerHotKey(game);
            this.registerAnimations();
            this.createSkillImageInGUI(game);
        }


        public getImageUrl() {
            return this.image;
        }

        public abstract getType();

        public abstract showAnimation(skillTime: number, cooldownTime: number);

        protected abstract registerDefaults(game: Game);

        protected registerHotKey(game: Game) {
            let self = this;

            let listener = function listener() {
                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == self.getType()) {
                        game.client.socket.emit('useSkill', self.getType());
                    }
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        protected showReloadInGUI(cooldownTime: number) {
            const game = this.game;
            const self = this;

            game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function() {
                game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
            });
        }

        // protected registerHotKey(game: Game) {
        //     let self = this;
        //     let listener = function listener() {
        //         game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
        //             if (event.sourceEvent.key == self.getType()) {
        //                 game.controller.attackPoint = null;
        //
        //                 game.player.runAnimationSkill(self.animationName, function () {
        //                     self.effectEmitter.particleSystem.start();
        //                     game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function() {
        //                         game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
        //                     });
        //
        //                 }, function () {
        //                     self.effectEmitter.particleSystem.stop();
        //
        //                 }, self.animationLoop, self.animationSpeed);
        //
        //                 if(self.animationTime) {
        //                     setTimeout(function() {
        //                         game.player.animation.stop();
        //                     }, self.animationTime);
        //                 }
        //
        //             }
        //         }));
        //
        //         document.removeEventListener(Events.PLAYER_CONNECTED, listener);
        //     };
        //     document.addEventListener(Events.PLAYER_CONNECTED, listener);
        // }

        protected createSkillImageInGUI(game) {
            let image = this.getImageUrl();
            let number = this.getType();
            let grid = game.gui.playerBottomPanel.guiGridSkills;

            let imageSkill = new BABYLON.GUI.Image('image_'+number, image);
            imageSkill.width = 1;
            imageSkill.height = 1;
            imageSkill.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

            let textBlock = new BABYLON.GUI.TextBlock('shortcut_'+number, ''+number+'');
            textBlock.color = 'white';
            textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            let overlay = new BABYLON.GUI.Rectangle();
            overlay.width = 1;
            overlay.height = 0;
            overlay.alpha = 0.7;
            overlay.color = "black";
            overlay.background = "black";
            overlay.verticalAlignment = 	BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            imageSkill.animations = [];
            imageSkill.animations.push(this.animationAlpha);

            overlay.animations = [];
            overlay.animations.push(this.animationOverlay);

            grid.addControl(imageSkill, 0, number-1);
            grid.addControl(textBlock, 0, number-1);
            grid.addControl(overlay, 0, number-1);

            this.guiImage = imageSkill;
            this.guiOverlay = overlay;
            this.guiText = textBlock;
        }

        private registerAnimations() {
            let animationAlpha = new BABYLON.Animation("animationAlpha", "alpha", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
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

            let animationOverlay = new BABYLON.Animation("animationOverlay", "height", 15, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
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