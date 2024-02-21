import { useState } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type PropsData = {
  data:{
    collectionId:string,
    trackName:string,
    previewUrl:string,
    trackId:number,
    artworkUrl100:string,
  }
};

function MusicCard({ data }:PropsData) {
  const [checked, setChecked] = useState(false);

  // console.log(data);

  function handleClick() {
    if (checked) {
      setChecked(false);
      removeSong(data);
    } else {
      setChecked(true);
      addSong(data);
    }
  }
  // console.log(data);
  return (
    <>

      <div id="onlyMusic">

        <h2 key={ data.collectionId }>
          {data.trackName || 'Nome da Música Desconhecido'}
        </h2>
        <div>
          <audio data-testid="audio-component" src={ data.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
          </audio>
          <label
            htmlFor={ data.trackId }
            data-testid={ `checkbox-music-${data.trackId}` }
          >
            <input
              id={ data.trackId }
              type="checkbox"
              onClick={ () => handleClick(data) }
            />
            {checked ? <img src="/images/checked_heart.png" alt="favorite" />
              : <img src="/images/empty_heart.png" alt="favorite" />}
          </label>
        </div>

      </div>
      <div className="line" />
    </>
  );
}

export default MusicCard;
