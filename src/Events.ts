class Events {
    static PLAYER_CONNECTED = 'playerConnected';
    public playerConnected:Event;

    static EQUIP_RECEIVED = 'equipReceived';
    public equipReceived:Event;

    static PLAYER_HIT_START = 'playerHitStart';
    public playerHitStart:Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.playerHitStart = new Event(Events.PLAYER_HIT_START);
    }
}