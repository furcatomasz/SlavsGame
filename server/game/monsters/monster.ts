abstract class Monster {

    public id:number;
    public name:string;
    public experience:number;
    public lvl:number;
    public position;
    public itemsDrop: Array;
    public target:string;
    public attack:boolean;
    public type:string;
    public meshName:string;
    public statistics:Attributes.CharacterStatistics;
    public attackAreaSize:number;
    public visibilityAreaSize:number;
    public availableAttacksFromCharacters: Array;

    constructor(id, position, itemsToDrop:Array) {
        this.id = id;
        this.position = position;
        this.itemsDrop = itemsToDrop;
        this.availableAttacksFromCharacters = [];
    }

}