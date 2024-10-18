interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}
interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <ul className="gallery">
      {/* {images.map(image => {
        <li>{}</li>;
      })} */}
    </ul>
  );
}
