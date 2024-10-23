import { useEffect, useRef, useState } from 'react';
import './App.css';
import reqPixabay from '../services/api';
import Image from '../interfaces/Image.interface';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function reqApi() {
      try {
        const { hits } = await reqPixabay(query, page);

        setImages(prev => [...prev, ...hits]);
      } catch (error) {
      } finally {
        setLoadMore(true);
      }
    }

    reqApi();
  }, [query, page]);

  const onSubmit = (q: string) => {
    setQuery(q);
  };

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {<Button title="Load More" onClick={nextPage} />}
    </div>
  );
}

export default App;
