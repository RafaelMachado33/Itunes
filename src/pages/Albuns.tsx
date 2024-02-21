import { Link } from 'react-router-dom';

type Data =
 [ {
   artistId: 12,
   artistName: 'Artist Name',
   collectionId: 123,
   collectionName: 'Collection Name',
   collectionPrice: 12.25,
   artworkUrl100: 'https://url-to-image',
   releaseDate: '2012-03-02T08:00:00Z',
   trackCount: 8,
 } ];

function Albuns({ data }:Data) {
  // const [loading, setLoading] = useState(false);
  /* Em vez do music no map, poderia colocar a desestruturação
 com as propriedades necessarias. Como no exempo abaixo poderia substituir o
  music por {collectionId,collectionName} */

  return (
    <ul id="albuns">
      {data.map((music) => (

        <li key={ music.collectionId } id="boxMusic">
          <Link
            to={ `/album/${music.collectionId}` }
            data-testid={ `link-to-album-${music.collectionId}` }
          >
            <img src={ music.artworkUrl100 } id="pictureAlbum" alt="imagem" />
          </Link>
          <h2>
            {music.collectionName}
            {' '}
          </h2>
          <h3>
            {music.artistName}
            {' '}
          </h3>

        </li>
      ))}

    </ul>
  );
}

export default Albuns;

// <Album data={ artista } />
