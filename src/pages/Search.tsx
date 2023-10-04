import { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

function Search() {
  const [name, setname] = useState('');

  let validador = false;

  if (name.length >= 2) {
    validador = true;
  }

  async function handleSubmit(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const artista = await searchAlbumsAPI(name);
    console.log(artista);
  }

  return (
    <form>
      <input
        type="text"
        data-testid="search-artist-input"
        value={ name }
        onChange={ (event) => setname(event.target.value) }
      />
      <button
        data-testid="search-artist-button"
        disabled={ validador === false }
        onClick={ (event) => handleSubmit(event) }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Search;
