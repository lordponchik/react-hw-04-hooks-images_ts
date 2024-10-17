import { useState } from 'react';
import './App.css';

import Searchbar from './Searchbar/Searchbar';

function App() {
  const [query, setQuery] = useState<string>('');

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
