import { useState } from 'react';
import checkHeard from '../images/checked_heart.png';
import checkEmptyHeard from '../images/empty_heart.png';

type Data = {
  collectionId:string,
  trackName:string,
  previewUrl:string,
}[];

function MusicCard({ data }:Data) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }
  return (
    <>
      {data.slice(1).map(({ collectionId, trackName, previewUrl, trackId }) => (
        <>
          <h2 key={ collectionId }>
            {trackName || 'Nome da Música Desconhecido'}
          </h2>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
          </audio>
          <label htmlFor={ trackId }>
            <input
              id={ trackId }
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              onClick={ (event) => handleClick(event) }
            />
            {checked ? <img src={ checkHeard } alt="favorite" />
              : <img src={ checkEmptyHeard } alt="favorite" />}
          </label>
        </>
      ))}
    </>
  );
}

export default MusicCard;
