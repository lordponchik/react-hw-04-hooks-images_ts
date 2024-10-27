import { animateScroll as scroll } from 'react-scroll';

import Image from '../../interfaces/Image.interface';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { useLayoutEffect, useRef } from 'react';

interface Props {
  images: Image[];
  currentPage: number;
  toggleModal: (modalData: string) => void;
}

export default function ImageGallery({ images, currentPage, toggleModal }: Props) {
  const firstSnapshot = useRef<number>(0);
  const refsImages = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (currentPage === 1 && refsImages.current) {
      firstSnapshot.current = refsImages.current.scrollHeight;
      return;
    }

    if (refsImages.current) {
      const snapshot = refsImages.current.scrollHeight - firstSnapshot.current;
      scroll.scrollTo(snapshot);
    }
  }, [images, currentPage]);

  return (
    <ul className={s.gallery} ref={refsImages}>
      {images.map((image, id) => {
        return (
          <ImageGalleryItem key={`${image.id}_${id}`} image={image} toggleModal={toggleModal} />
        );
      })}
    </ul>
  );
}
