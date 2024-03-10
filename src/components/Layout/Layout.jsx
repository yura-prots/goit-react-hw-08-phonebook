import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Container, Header } from './Layout.styled';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <Container>
      <Header>
        <AppBar />
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
