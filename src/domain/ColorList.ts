import Color from './Color';

export default class ColorList {
    private colors: Color[];

    constructor(colors: Color[]) {
        this.colors = colors;
    }

    public sortByRGB(red: number, green: number, blue: number): void {
        this.colors.sort((a: Color, b: Color): number => {
            if (!a.hasDistance()) {
                a.calculateDistanceRGB(red, green, blue);
            }
            if (!b.hasDistance()) {
                b.calculateDistanceRGB(red, green, blue);
            }

            return a.getDistance() - b.getDistance();
        });
    }

    public getColorNamesDistance(): Array<[string, number]> {
        return this.colors.map((color: Color) => [color.getName(), color.getDistance()] as [string, number]);
    }
}
