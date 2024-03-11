import { Link } from './AuthBar.styled';

const AuthBar = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};

export default AuthBar;
