type Data = {
  collectionId:string,
  trackName:string
}[];

function MusicCard({ data }:Data) {
  console.log(data[1]);
  return (
    <>
      {data.slice(1).map(({ collectionId, trackName }, index) => (
        <h2 key={ collectionId }>
          {trackName || 'Nome da Música Desconhecido'}
        </h2>))}
    </>
  );
}

export default MusicCard;
