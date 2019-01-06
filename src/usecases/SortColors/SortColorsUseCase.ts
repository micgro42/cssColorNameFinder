import ColorList from '../../domain/ColorList';
import IColorListRepository from '../../domain/IColorListRepository';
import SortColorsRequest from './SortColorsRequest';
import SortColorsResponse from './SortColorsResponse';

export default class SortColorsUseCase {
    private repository: IColorListRepository; // FIXME: add type

    constructor(repository: IColorListRepository) {
        this.repository = repository;
    }

    public sortColors(request: SortColorsRequest): SortColorsResponse {
        const colorsList: ColorList = this.repository.getColorList();
        colorsList.sortByRGB(
            request.getRed(),
            request.getGreen(),
            request.getBlue(),
        );
        return new SortColorsResponse(colorsList.getColorNamesDistance());

    }
}
