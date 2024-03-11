import { useAuth } from 'hooks/useAuth';
import { Link } from './NavBar.styled';
import UserMenu from 'components/UserMenu';
import AuthBar from 'components/AuthBar';

const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

      {isLoggedIn ? <UserMenu /> : <AuthBar />}
    </nav>
  );
};

export default NavBar;
