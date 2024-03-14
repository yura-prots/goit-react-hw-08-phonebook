import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import PublicRoute from 'components/PublicRoute';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterPage} redirectTo="/contacts" />
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
