class Events {
    static readonly PLAYER_CONNECTED = 'playerConnected';

    static readonly FACTORY_COMPLETE = 'factoryComplete';

    public playerConnected: Event;
    public factoryComplete: Event;

    constructor() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.factoryComplete = new Event(Events.FACTORY_COMPLETE);
    }
}