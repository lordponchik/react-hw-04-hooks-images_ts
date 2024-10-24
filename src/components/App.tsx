import { useEffect, useRef, useState } from 'react';
import './App.css';
import reqPixabay from '../services/api';
import Image from '../interfaces/Image.interface';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);
  const [total, setTotal] = useState<number>(0);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function reqApi() {
      setIsLoading(true);

      let restImage = 0;

      if (total !== 0 && total < perPage) {
        restImage = total;
      }

      try {
        const { hits, totalHits } = await reqPixabay(
          query,
          page,
          restImage > 0 ? restImage : perPage
        );

        if (total === 0) {
          setTotal(totalHits);
        }

        setImages(prev => [...prev, ...hits]);
      } catch (error) {
      } finally {
        setTotal(prev => prev - (restImage > 0 ? restImage : perPage));
        setIsLoading(false);
        setLoadMore(true);
      }
    }

    reqApi();
  }, [query, page]);

  const onSubmit = (q: string) => {
    if (query !== q) {
      setImages([]);
      setQuery(q);
    }
  };

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {total > 0 && <Button title="Load More" onClick={nextPage} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
