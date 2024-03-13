import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';
import UserMenu from 'components/UserMenu';
import AuthBar from 'components/AuthBar';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn ? <UserMenu /> : <AuthBar />}

      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
