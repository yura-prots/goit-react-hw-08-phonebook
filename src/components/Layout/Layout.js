import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Container, Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
