import { useState, useEffect } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Carregando from '../componetes/Carregando';

function Favoritas() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function assincrona() {
      const resposta = await getFavoriteSongs();
      console.log(resposta[0]);
    }
    assincrona();
  }, []);
  /*
  const resposta = await getFavoriteSongs();
  console.log(resposta);
  */
  if (loading) {
    return <Carregando />;
  }

  return (
    <h1>Favoritas</h1>
  );
}

export default Favoritas;
