import Image from '../../interfaces/Image.interface';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <ul className={s.gallery}>
      {images.map((image, id) => {
        return <ImageGalleryItem key={`${image.id}_${id}`} image={image} />;
      })}
    </ul>
  );
}
