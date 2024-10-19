import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  [key: string]: string | number;
}
interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  console.log(images);
  return (
    <ul className="gallery">
      {images.map((image: Image) => {
        return <ImageGalleryItem key={`${image.id}`} image={image} />;
      })}
    </ul>
  );
}
