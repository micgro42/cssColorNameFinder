import Color from '../domain/Color';
import ColorList from '../domain/ColorList';
import ColorListRepository from '../domain/ColorListRepository';
import colors from './colors.json';

export default class MemoryColorListRepository implements ColorListRepository {
  public getColorList(): ColorList {
    return new ColorList(
      Object.entries(colors).map(([colorName, color]) => {
        if (!this.isColorValid(color)) {
          throw new Error(`${colorName} should have three color values but doesn't!?`);
        }
        const [red, green, blue] = color;
        return new Color(red, green, blue, colorName);
      }),
    );
  }

  /**
   * this is mainly here because typescript can't infer yet the color is always
   * [number, number, number] instead of number[]
   */
  private isColorValid(color: number[]): color is [number, number, number] {
    return color.length === 3;
  }
}
