declare module 'colorjs.io' {
  declare class Color {
    public lch: [number, number, number];
    public srgb: [number, number, number];

    public deltaE(color: Color, algorithm?: string): number;

    public constructor(colorDefinition: string);
  }

  export default Color;
}
