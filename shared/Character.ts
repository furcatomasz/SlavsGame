export default class Character {

    public static getCharacterSpeed() {
        return 2.3;
    }

    /**
     * @returns {Array}
     */
    public static getLvls() {
        let lvls = [];
        lvls[1] = 100;
        lvls[2] = 200;
        lvls[3] = 400;
        lvls[4] = 800;
        lvls[5] = 1600;
        lvls[6] = 3200;
        lvls[7] = 6400;
        lvls[8] = 12800;
        lvls[9] = 256000;
        lvls[10] = 512000;

        return lvls;
    }
}