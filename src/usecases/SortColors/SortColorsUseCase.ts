import ColorList from '../../domain/ColorList';
import ColorListRepository from '../../domain/ColorListRepository';
import SortColorsRequest from './SortColorsRequest';
import SortColorsResponse from './SortColorsResponse';

export default class SortColorsUseCase {
  private repository: ColorListRepository; // FIXME: add type

  public constructor(repository: ColorListRepository) {
    this.repository = repository;
  }

  public sortColors(request: SortColorsRequest): SortColorsResponse {
    const colorsList: ColorList = this.repository.getColorList();
    colorsList.sortByRGB(request.getRed(), request.getGreen(), request.getBlue());
    return new SortColorsResponse(colorsList.getColorNamesDistance());
  }
}
