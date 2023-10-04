import { useState } from 'react';
import { createUser } from '../services/userAPI';

function Login() {
  const [name, setname] = useState('');
  const [loading, setLoading] = useState(true);

  let validador = false;
  if (name.length >= 3) {
    validador = true;
  }

  /* if (loading) {
    return <h1>Carregando...</h1>;
  } */

  console.log(createUser);
  return (
    <>
      <input
        type="text"
        data-testid="login-name-input"
        value={ name }
        onChange={ (event) => setname(event.target.value) }
      />
      <button
        data-testid="login-submit-button"
        disabled={ validador === false }
        onClick={ createUser({ name }) }

      >
        Entrar
      </button>
    </>
  );
}

export default Login;
