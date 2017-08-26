class Events {
    static PLAYER_CONNECTED = 'playerConnected';
    public playerConnected:Event;

    static PLAYER_HIT_START = 'playerHitStart';
    public playerHitStart:Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.playerHitStart = new Event(Events.PLAYER_HIT_START);
    }
}