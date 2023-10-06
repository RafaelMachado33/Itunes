import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Album from './pages/Album';
import Header from './componetes/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>

  );
}

export default App;
