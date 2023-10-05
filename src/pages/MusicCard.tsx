type Data = {
  collectionId:string,
  trackName:string,
  previewUrl:string,
}[];

function MusicCard({ data }:Data) {
  console.log(data[1]);
  return (
    <>
      {data.slice(1).map(({ collectionId, trackName, previewUrl }) => (
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
            .
          </audio>
        </>
      ))}
    </>
  );
}

export default MusicCard;
