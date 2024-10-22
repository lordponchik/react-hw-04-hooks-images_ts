import Image from '../../interfaces/Image.interface';
import s from './ImageGalleryItem.module.css';

interface Props {
  image: Image;
}

export default function ImageGalleryItem({ image: { id, webformatURL, largeImageURL } }: Props) {
  return (
    <li className={s.gallery__item}>
      <img src={webformatURL} alt="" />
    </li>
  );
}
