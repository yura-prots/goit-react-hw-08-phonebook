import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
