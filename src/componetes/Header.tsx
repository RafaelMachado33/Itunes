import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

function Header() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: ' ',
    email: ' ',
    image: ' ',
    description: ' ',
  });

  useEffect(() => {
    async function assincrona() {
      const resposta = await getUser();
      setData(resposta);
      setLoading(false);
      // console.log(data.name);
    }
    assincrona();
  }, []);

  if (loading) {
    return <Carregando />;
  }

  return (
    <div className="header-component">
      <img src="/images/logo.svg" alt="TrybeTunes" id="imagemTrybeTunes" />
      <header data-testid="header-component">
        <NavLink to="/search" id="link1" data-testid="link-to-search">
          <img src="/images/bx-search-alt-2.svg" alt="search" />
          {' '}
          Pesquisa
        </NavLink>
        <p />
        <NavLink to="/favorites" id="link2" data-testid="link-to-favorites">
          <img src="/images/bx-star (1).svg" alt="star" />
          Favoritas
        </NavLink>
        <p />
        <NavLink to="/profile" id="link3" data-testid="link-to-profile">
          <img src="/images/user.png" alt="profile" />
          Perfil
        </NavLink>
      </header>
      {!loading ? (<h3 data-testid="header-user-name">{data.name}</h3>) : ''}
    </div>

  );
}

export default Header;
