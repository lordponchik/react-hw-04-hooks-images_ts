import Image from '../../interfaces/Image.interface';

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
