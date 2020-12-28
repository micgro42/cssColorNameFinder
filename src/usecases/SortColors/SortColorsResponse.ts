export default class SortColorsResponse {
    private sortedColors: [string, number][];

    constructor(sortedColors: [string, number][]) {
        this.sortedColors = sortedColors;
    }

    public getThreeNearestColors(): [string, number][] {
        return this.sortedColors.slice(0, 3);
    }
}
