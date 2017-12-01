class Worm extends Monster {

    constructor(id, position, itemsToDrop: Array) {
        super(id, position, itemsToDrop);

        this.name = 'Worm';
        this.type = 'worm';
        this.meshName = 'Worm';
        this.lvl = 1;
        this.experience = 10;
        this.attackAreaSize = 2;
        this.visibilityAreaSize = 10;
        this.statistics = new Attributes.CharacterStatistics(80,80,100,3,10,40,0,100);
    }

}
