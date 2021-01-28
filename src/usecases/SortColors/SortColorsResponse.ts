export default class SortColorsResponse {
  private sortedColors: [string, [number, number, number], number][];

  public constructor(sortedColors: [string, [number, number, number], number][]) {
    this.sortedColors = sortedColors;
  }

  public getThreeNearestColors(): [string, [number, number, number], number][] {
    return this.sortedColors.slice(0, 3);
  }
}
