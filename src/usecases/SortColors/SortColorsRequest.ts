export default class SortColorsRequest {
    private red: number;
    private green: number;
    private blue: number;

    public constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.blue = blue;
        this.green = green;
    }

    public getRed(): number {
        return this.red;
    }

    public getGreen(): number {
        return this.green;
    }

    public getBlue(): number {
        return this.blue;
    }
}
