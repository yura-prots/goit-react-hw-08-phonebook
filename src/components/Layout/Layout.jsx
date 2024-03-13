import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Container, Header } from './Layout.styled';
import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
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
