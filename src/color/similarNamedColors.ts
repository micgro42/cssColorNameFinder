import MemoryColorListRepository from '@/dataAccess/MemoryColorListRepository';
import ColorListRepository from '@/domain/ColorListRepository';
import Color from 'colorjs.io';

export interface NamedColorData extends ColorData {
  name: string;
}
export interface ColorData {
  srgb: [number, number, number];
  lightness: number;
  chroma: number;
  hue: number;
}

export function getColorData(rgb: string): ColorData {
  const color = new Color(rgb);
  return {
    srgb: [color.srgb.r, color.srgb.g, color.srgb.b],
    lightness: color.lch[0],
    chroma: color.lch[1],
    hue: color.lch[2],
  };
}

export default function getCloseNamedColors(rgb: string): NamedColorData[] {
  const color = new Color(rgb);
  const colorRepo: ColorListRepository = new MemoryColorListRepository();
  const namedRGBColors = colorRepo.getColorList();
  const namedColors = namedRGBColors.map((namedRGB): NamedColorData & { distance: number } => {
    const namedColor = new Color(`rgb(${namedRGB.red}, ${namedRGB.green}, ${namedRGB.blue})`);
    return {
      name: namedRGB.name,
      srgb: [namedColor.srgb.r, namedColor.srgb.g, namedColor.srgb.b],
      lightness: namedColor.lch[0],
      chroma: namedColor.lch[1],
      hue: namedColor.lch[2],
      distance: namedColor.deltaE2000(color),
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
