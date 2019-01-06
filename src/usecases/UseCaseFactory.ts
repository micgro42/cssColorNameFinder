import MemoryColorListRepository from '../dataAccess/MemoryColorListRepository';
import SortColorsUseCase from './SortColors/SortColorsUseCase';

export default class UseCaseFactory {
    public static newSortColorsUseCase(): SortColorsUseCase {
        return new SortColorsUseCase(new MemoryColorListRepository());
    }
}
