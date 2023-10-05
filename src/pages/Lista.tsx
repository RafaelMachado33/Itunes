import { useState } from 'react';

type data =
  {
    artistId: 12,
    artistName: 'Artist Name',
    collectionId: 123,
    collectionName: 'Collection Name',
    collectionPrice: 12.25,
    artworkUrl100: 'https://url-to-image',
    releaseDate: '2012-03-02T08:00:00Z',
    trackCount: 8,
  };

function Lista() {
  const [loading, setLoading] = useState(false);
  return (
    <h1>Lista</h1>
  );
}

export default Lista;
