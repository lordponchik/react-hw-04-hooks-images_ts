import { useEffect, useRef, useState } from 'react';
import './App.css';
import reqPixabay from '../services/api';
import Image from '../interfaces/Image.interface';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function reqApi() {
      const { hits } = await reqPixabay(query);

      setImages(prev => [...prev, ...hits]);
    }

    reqApi();
  }, [query]);

  const onSubmit = (q: string) => {
    setQuery(q);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
}

export default App;
