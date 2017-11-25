class Character {

    public id: number;
    public skills:Array;
    public experience:number;
    public lvl:number;
    public freeAttributesPoints:number;
    public freeSkillPoints:number;
    public postion:BABYLON.Vector3;
    public rotation:BABYLON.Vector3;
    public itemsDrop;
    public targetPoint:string;
    public inventory:Inventory;
    public statistics: Attributes.CharacterStatistics;

    public constructor(id) {
        this.id = id;
        this.itemsDrop = [];
        this.inventory = new Inventory();
    }

    setItemsOnCharacter(items: Array) {
        let itemManager = new Items.ItemManager();
        itemManager.initItemsFromDatabaseOnCharacter(items, this);

        return this;
    }

    public calculateCharacterStatistics(attributes) {
        if(!attributes) {
            attributes = {
                health: 0,
                attackSpeed: 0,
                defence: 0,
                damage: 0,
                blockChance: 0,
            }
        }

        this.statistics = new Attributes.CharacterStatistics(
            this,
            100 + attributes.health * 5,
            100 + attributes.health * 5,
            100 + attributes.attackSpeed,
            15 + attributes.damage * 5,
            10 + attributes.defence * 5,
            (125 / 100) *2.3,
            50 + attributes.blockChance
        );

        return this;
    }





}

