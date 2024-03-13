import { useAuth } from 'hooks/useAuth';
import { Button } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <>
      <p>{user.email}</p>

      <Button>Log Out</Button>
    </>
  );
};

export default UserMenu;
