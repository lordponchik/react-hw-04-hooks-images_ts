import Image from '../../interfaces/Image.interface';
import s from './ImageGalleryItem.module.css';

interface Props {
  image: Image;
  toggleModal: (modalData: string) => void;
}

export default function ImageGalleryItem({
  image: { id, webformatURL, largeImageURL },
  toggleModal,
}: Props) {
  return (
    <li className={s.gallery__item} onClick={() => toggleModal(largeImageURL)}>
      <img src={webformatURL} alt="" className={s.gallery__image} />
    </li>
  );
}
