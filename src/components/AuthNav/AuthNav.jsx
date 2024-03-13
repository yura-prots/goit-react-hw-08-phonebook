import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};

export default AuthNav;
