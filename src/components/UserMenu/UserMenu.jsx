import { useAuth } from 'hooks/useAuth';
import { Button } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <>
      <p>Welcome, {user.name}</p>

      <Button>Log Out</Button>
    </>
  );
};

export default UserMenu;
