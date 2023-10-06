import { useState } from 'react';
import checkHeard from '../images/checked_heart.png';
import checkEmptyHeard from '../images/empty_heart.png';

type Data = {
  collectionId:string,
  trackName:string,
  previewUrl:string,
  trackId:string
}[];

function MusicCard({ data }:Data) {
  const [checked, setChecked] = useState(false);

  console.log(data);
  function handleClick() {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }
  return (
    <>
      <h2 key={ data.collectionId }>
        {data.trackName || 'Nome da Música Desconhecido'}
      </h2>
      <audio data-testid="audio-component" src={ data.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
      </audio>
      <label htmlFor={ data.trackId } data-testid={ `checkbox-music-${data.trackId}` }>
        <input
          id={ data.trackId }
          type="checkbox"
          onClick={ () => handleClick() }
        />
        {checked ? <img src={ checkHeard } alt="favorite" />
          : <img src={ checkEmptyHeard } alt="favorite" />}
      </label>
    </>
  );
}

export default MusicCard;
