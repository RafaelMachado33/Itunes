import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Album from './pages/Album';
import Header from './componetes/Header';
import Layout from './componetes/Layout';
import Favoritas from './pages/Favoritas';

function App() {
  return (
    <Routes>
      <Route path="/favorites" element={ <Favoritas /> } />
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>

  );
}

export default App;
