export default class SortColorsResponse {
    private sortedColors: Array<[string, number]>;

    constructor(sortedColors: Array<[string, number]>) {
        this.sortedColors = sortedColors;
    }

    public getThreeNearestColors() {
        return this.sortedColors.slice(0, 3);
    }
}
