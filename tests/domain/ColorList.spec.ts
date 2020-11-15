import Color from '../../src/domain/Color';
import ColorList from '../../src/domain/ColorList';

describe('sort color list', () => {
    it('sort', () => {
        const colorList: ColorList = new ColorList([
            new Color(255, 0, 0, 'red'),
            new Color(255, 215, 0, 'gold'),
            new Color(230, 230, 250, 'lavender'),
        ]);
        colorList.sortByRGB(123, 231, 213);
        const result = colorList.getColorNamesDistance();
        expect(result).toEqual([
            ['lavender', 113.22102278287367],
            ['gold', 251.09559932424145],
            ['red', 340.81373211770676],
        ]);
    });
});
