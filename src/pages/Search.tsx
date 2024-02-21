import { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../componetes/Carregando';
import Albuns from './Albuns';

function Search() {
  const [name, setname] = useState('');
  const [name2, setname2] = useState('');
  const [loading, setLoading] = useState(false);
  const [music, setmusic] = useState();
  // const [data, setdata] = useState();

  let validador = false;

  if (name.length >= 2) {
    validador = true;
  }

  async function handleSubmit(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setLoading(true);
    const artista = await searchAlbumsAPI(name);
    setmusic(artista);
    setname2(name);
    setname('');
    setLoading(false);
    // setdata(artista);
    // console.log(artista[0].artistName);
    // console.log(artista);
  }
  // console.log(music);
  if (loading) {
    return <Carregando />;
  }
  return (
    <div className="musics">
      <form id="form_top_part">

        <input
          type="text"
          data-testid="search-artist-input"
          value={ name }
          placeholder="DIGITE A SUA PESQUISA"
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
      {name2
        ? (
          <>
            <p>
              Resultado de álbuns de:
              {' '}
              {name2}
            </p>

            {music.length >= 1
              ? <Albuns data={ music } /> : <p>Nenhum álbum foi encontrado</p>}

          </>
        ) : ''}
    </div>

  );
}

export default Search;
