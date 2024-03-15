import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
