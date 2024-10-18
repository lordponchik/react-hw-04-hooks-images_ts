import { useEffect, useRef, useState } from 'react';
import './App.css';
import reqPixabay from '../services/api';

import Searchbar from './Searchbar/Searchbar';

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}

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

      console.log(hits);
    }

    reqApi();

    // setImages(prev => [...prev, reqPixabay(query)]);
  }, [query]);

  const onSubmit = (q: string) => {
    setQuery(q);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
    </div>
  );
}

export default App;
