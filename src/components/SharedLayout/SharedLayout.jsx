import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div display="grid" gridAutoColumns="1fr" gridGap="16px">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
