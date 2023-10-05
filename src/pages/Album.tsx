import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Carregando from '../componetes/Carregando';
import MusicCard from './MusicCard';

function Album() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    async function assincrona() {
      const resposta = await getMusics(id);
      setMusica(resposta);
      setLoading(false);
    }
    assincrona();
  }, []);

  console.log(musica);

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
  return (
    <>

      <ul>
        <li>
          <h1 data-testid="artist-name">
            Nome do artista:
            {' '}
            {musica[0].artistName}
          </h1>
        </li>
        <li>
          <h1 data-testid="album-name">
            Coleção álbum:
            {' '}
            {musica[0].collectionName}
          </h1>
        </li>
      </ul>
      <MusicCard data={ musica } />
    </>
  );
}

export default Album;
