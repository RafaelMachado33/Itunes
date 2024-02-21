import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Carregando from '../componetes/Carregando';
import MusicCard from './MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

function Album() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [musica, setMusica] = useState([]);
  const [favoriteMusics, setFavoriteMusics] = useState([]);

  useEffect(() => {
    async function assincrona() {
      const resposta = await getMusics(id);
      const favoriteMusic = await getFavoriteSongs();
      setFavoriteMusics(favoriteMusic);
      setMusica(resposta);
      setLoading(false);
    }
    assincrona();
  }, []);
  console.log(favoriteMusics);
  console.log(musica);

  // console.log(musica);

  if (loading) {
    return <Carregando />;
  }
  /* {musica.slice(1).map(({ collectionId, trackName }, index) => (
    <h2 key={ collectionId }>
      Musica
      {' '}
      {index + 1}
      :
      {' '}
      {trackName || 'Nome da Música Desconhecido'}
    </h2>
  ))} */
  // musica.shift();

  // console.log(getFavoriteSongs());
  return (
    <div className="musicBody">
      <div className="musicas">
        <ul>
          <img src={ musica[0].artworkUrl100 } id="pictureAlbum" alt="imagem" />
          <li>
            <h1 data-testid="artist-name">
              Nome do artista:
              {' '}
              {musica[0].artistName}
            </h1>
          </li>
          <li>
            <h2 data-testid="album-name">
              Coleção álbum:
              {' '}
              {musica[0].collectionName}
            </h2>
          </li>
        </ul>
      </div>

      <div id="boxForCentrilizeMusic">

        {musica.slice(1).map((music) => (

          <MusicCard data={ music } key={ music.trackId } />

        ))}
      </div>
    </div>
  );
}

export default Album;
