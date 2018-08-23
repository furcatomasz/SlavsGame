/// <reference path="scenes/Scene.ts"/>
/// <reference path="game.ts"/>
/// <reference path="gui/popup/Popup.ts"/>
/// <reference path="gui/popup/inventory/EquipBlock.ts"/>

class Events {
    static PLAYER_CONNECTED = 'playerConnected';
    public playerConnected:Event;

    static EQUIP_RECEIVED = 'equipReceived';
    public equipReceived:Event;

    static PLAYER_HIT_START = 'playerHitStart';
    public playerHitStart:Event;

    static QUESTS_RECEIVED = 'questsReceived';
    public questsReceived:Event;

    static MONSTER_TO_ATTACK = 'monsterToAttack';
    public monsterToAttack: Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.playerHitStart = new Event(Events.PLAYER_HIT_START);
        this.questsReceived = new Event(Events.QUESTS_RECEIVED);
        this.monsterToAttack = new Event(Events.MONSTER_TO_ATTACK);
        //this.monsterToAttack = [];
    }
}