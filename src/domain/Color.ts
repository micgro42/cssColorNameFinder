export default class Color {
    private red: number;
    private green: number;
    private blue: number;
    private colorName: string;
    private distance?: number;

    constructor(red: number, green: number, blue: number, colorName: string) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.colorName = colorName;
    }

    public calculateDistanceRGB(red: number, green: number, blue: number) {
        this.distance = Math.sqrt(
            Math.pow(this.red - red, 2) + Math.pow(this.green - green, 2) + Math.pow(this.blue - blue, 2),
        );
    }

    public hasDistance(): boolean {
        return typeof this.distance === 'number';
    }

    public getDistance(): number {
        if (typeof this.distance !== 'number') {
            throw new Error('Distance has not been calculated yet!');
        }
        return this.distance;
    }

    public getName(): string {
        return this.colorName;
    }
}
