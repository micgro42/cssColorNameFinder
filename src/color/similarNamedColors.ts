import MemoryColorListRepository from '@/dataAccess/MemoryColorListRepository';
import ColorListRepository from '@/domain/ColorListRepository';
import Color from 'colorjs.io';

const COLOR_DISTANCE_ALGORITHM = '2000'; // CMC, 76, ITP, 2000, Jz

export default function getCloseNamedColors(rgb: string): { name: string; color: Color }[] {
  const color = new Color(rgb);
  const colorRepo: ColorListRepository = new MemoryColorListRepository();
  const namedRGBColors = colorRepo.getColorList();
  const namedColors = namedRGBColors.map((namedRGB) => {
    const namedColor = new Color(`rgb(${namedRGB.red}, ${namedRGB.green}, ${namedRGB.blue})`);
    return {
      name: namedRGB.name,
      color: namedColor,
      distance: namedColor.deltaE(color, COLOR_DISTANCE_ALGORITHM) as number,
    };
  });
  namedColors.sort((a, b) => {
    if (a.distance < b.distance) {
      return -1;
    }

    if (a.distance > b.distance) {
      return 1;
    }

    return 0;
  });
  return namedColors;
}
