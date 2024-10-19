interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  [key: string]: string | number;
}

interface Props {
  image: Image;
}

export default function ImageGalleryItem({ image: { id, webformatURL, largeImageURL } }: Props) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
}
