import { Link } from './AppBar.styled';

const AppBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default AppBar;
