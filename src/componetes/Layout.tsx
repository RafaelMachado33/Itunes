import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="body-search">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
