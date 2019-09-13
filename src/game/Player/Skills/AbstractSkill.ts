import {Player} from "../../Characters/Player";
import {Game} from "../../Game";
import {Events} from "../../Events/Events";
import * as BABYLON from 'babylonjs';
import {Button, Rectangle, TextBlock, Control, Image } from 'babylonjs-gui';

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
    protected guiImage: Button;
    protected guiOverlay: Rectangle;
    protected guiText: TextBlock;

    constructor(player: Player) {
        this.animationTime = 0;
        this.animationLoop = false;
        this.player = player;
        this.game = player.game;
        this.isReady = true;
        this.registerDefaults(this.game);

        if (player.isControllable) {
            this.createSkillImageInGUI();
            this.registerHotKey();
            this.registerAnimations();
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
            self.guiImage.onPointerUpObservable.add(function () {
                if (self.isReady && !player.isAnySkillIsInUse()) {
                    const position = player.meshForMove.position;
                    let rotation = player.meshForMove.rotation;
                    let forwards = new BABYLON.Vector3(-(Math.sin(rotation.y)), 0, -(Math.cos(rotation.y)));
                    let newPosition = position.add(forwards);

                    game.socketClient.socket.emit('useSkill', self.getType());
                    game.socketClient.socket.emit('setTargetPoint', {
                        position: newPosition
                    });
                    player.runPlayerToPosition(newPosition);
                }
            });
            document.removeEventListener(Events.PLAYER_CONNECTED, listener);
        };
        document.addEventListener(Events.PLAYER_CONNECTED, listener);
    }

    protected showReloadInGUI(cooldownTime: number) {
        if (this.player.isControllable) {
            const game = this.game;
            const self = this;
            const speedRatio = 1 / cooldownTime;
            this.isReady = false;

            game.getBabylonScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, speedRatio, function () {
                game.getBabylonScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
                self.isReady = true;
            });
        }
    }

    protected createSkillImageInGUI() {
        let game = this.game;
        let image = this.getImageUrl();
        let number = this.getType();
        let grid = game.gui.playerBottomPanel.guiGridSkills;

        let imageSkill = Button.CreateImageOnlyButton('image_' + number, image);
        imageSkill.width = 1;
        imageSkill.height = 1;
        imageSkill.thickness = 0;
        imageSkill.image.stretch = Image.STRETCH_UNIFORM;

        let overlay = new Rectangle();
        overlay.width = 1;
        overlay.height = 0;
        overlay.alpha = 0.7;
        overlay.color = "black";
        overlay.background = "black";
        overlay.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;

        grid.addControl(imageSkill, 0, number - 1);
        grid.addControl(overlay, 0, number - 1);

        this.guiImage = imageSkill;
        this.guiOverlay = overlay;
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
