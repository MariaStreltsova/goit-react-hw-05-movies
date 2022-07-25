import { Outlet } from 'react-router-dom';
import { LayoutContainer, Header, Link } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </LayoutContainer>
  );
};

export default SharedLayout;
