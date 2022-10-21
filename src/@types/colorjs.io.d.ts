declare module 'colorjs.io' {
  declare class Color {
    public lch: [number, number, number];
    public srgb: {
      r: number;
      g: number;
      b: number;
    };

    public deltaE2000(color: Color): number;

    public constructor(colorDefinition: string);
  }

  export default Color;
}
