import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Container, Header } from './Layout.styled';
import NavBar from 'components/NavBar';

const Layout = () => {
  return (
    <Container>
      <Header>
        <NavBar />
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
