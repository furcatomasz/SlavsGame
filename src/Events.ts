class Events {
    static readonly PLAYER_CONNECTED = 'playerConnected';

    public playerConnected: Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
    }
}