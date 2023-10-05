import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlbumType, SongType } from '../types';

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

function Album({ data }:Data) {
  // const [loading, setLoading] = useState(false);
  /* Em vez do music no map, poderia colocar a desestruturação
 com as propriedades necessarias. Como no exempo abaixo poderia substituir o
  music por {collectionId,collectionName} */

  console.log(data[0]);
  return (
    <ul>
      {data.map((music) => (
        <li key={ music.collectionId }>
          <h2>
            {music.collectionName}
            {' '}
          </h2>
          <Link to="/album/:id">Link</Link>

        </li>
      ))}

    </ul>
  );
}

export default Album;

// <Album data={ artista } />
