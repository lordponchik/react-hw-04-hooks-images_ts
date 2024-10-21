import Image from '../../interfaces/Image.interface';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <ul className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={`${image.id}`} image={image} />;
      })}
    </ul>
  );
}
