import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

function Header() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function assincrona() {
      const resposta = await getUser();
      setLoading(false);
      setData(resposta);
      console.log(data.name);
    }
    assincrona();
  });

  if (loading) {
    return <Carregando />;
  }

  return (
    <>
      <header data-testid="header-component">
        <NavLink to="/search" data-testid="link-to-search"> Pesquisa</NavLink>
        <p />
        <NavLink to="/favorites" data-testid="link-to-favorites"> Favoritos</NavLink>
        <p />
        <NavLink to="/profile" data-testid="link-to-profile"> Perfil</NavLink>
      </header>
      {!loading ? (<h3 data-testid="header-user-name">{data.name}</h3>) : ''}

    </>
  );
}

export default Header;
