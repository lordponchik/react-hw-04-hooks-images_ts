export default interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  [key: string]: string | number;
}
