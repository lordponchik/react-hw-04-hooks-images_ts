import { useState } from 'react';
import s from './Searchbar.module.css';

interface Props {
  onSubmit: (q: string) => void;
}

export default function Searchbar({ onSubmit }: Props) {
  const [query, setQuery] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(query);
  };

  return (
    <header className={s.searchbar}>
      <form className="form" onSubmit={onSubmitForm}>
        <button type="submit" className={s.button}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          value={query}
        />
      </form>
    </header>
  );
}
