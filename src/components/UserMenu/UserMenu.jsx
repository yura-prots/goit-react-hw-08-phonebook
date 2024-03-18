import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { Button, Greeting, UserName, Wrapper } from './UserMenu.styled';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Greeting>
        Welcome <UserName>{user.name}</UserName>
      </Greeting>

      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
