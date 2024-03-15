import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { Button, UserName, Wrapper } from './UserMenu.styled';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName>Welcome {user.name}</UserName>

      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
