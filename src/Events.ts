/// <reference path="Scenes/Scene.ts"/>
/// <reference path="game.ts"/>
/// <reference path="GUI/popup/Popup.ts"/>
/// <reference path="GUI/popup/inventory/EquipBlock.ts"/>

class Events {
    static PLAYER_CONNECTED = 'playerConnected';
    public playerConnected:Event;

    static EQUIP_RECEIVED = 'equipReceived';
    public equipReceived:Event;

    static QUESTS_RECEIVED = 'questsReceived';
    public questsReceived:Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.questsReceived = new Event(Events.QUESTS_RECEIVED);
    }
}
