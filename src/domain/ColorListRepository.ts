export default interface ColorListRepository {
  getColorList(): { name: string; red: number; green: number; blue: number }[];
}
