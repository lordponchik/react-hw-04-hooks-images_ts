import { useEffect, useRef, useState } from 'react';
import './App.css';
import reqPixabay from '../services/api';

import Searchbar from './Searchbar/Searchbar';

function App() {
  const [query, setQuery] = useState<string>('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    reqPixabay(query);
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
