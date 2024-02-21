import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from '../componetes/Carregando';
// import Search from './Search';
/*
type FormType = {
  handleSubmit:(event: React.MouseEvent<HTMLButtonElement>)
};
*/

/* escrever alog */
function Login() {
  const [name, setname] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(true);
  let validador = false;

  if (name.length >= 3) {
    validador = true;
  }

  async function handleSubmit() {
    setLoading(true);
    await createUser({ name });
    navigate('/search');
  }

  return (
    loading ? (<Carregando />) : (
      <div id="backGround">
        <div id="login-box">
          <img src="/images/logo.svg" alt="TrybeTunes" id="imagemTrybeTunes" />
          <p>TrybeTunes</p>

          <input
            type="text"
            placeholder="Qual é seu nome?"
            data-testid="login-name-input"
            value={ name }
            onChange={ (event) => setname(event.target.value) }
          />

          <button
            data-testid="login-submit-button"
            disabled={ validador === false }
            onClick={ () => handleSubmit() }
          >
            ENTRAR
          </button>

        </div>
      </div>
    )
  );
}

export default Login;
