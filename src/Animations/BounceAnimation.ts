class BounceAnimation extends AbstractAnimation {

    static getAnimation() {
        let aniamtion = new BABYLON.Animation("bounceAnimation", "position.y", 5,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

        const keys = [
            {
                frame: 0,
                value: 1
            },
            {
                frame: 15,
                value: 1.5
            },
            {
                frame: 30,
                value: 1
            }
        ];
        aniamtion.setKeys(keys);

        const easingFunction = new BABYLON.BackEase();
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        aniamtion.setEasingFunction(easingFunction);

        return aniamtion;
    }
}
