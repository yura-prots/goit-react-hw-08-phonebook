import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { Button } from './UserMenu.styled';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <p>{user.name}</p>

      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
};

export default UserMenu;
