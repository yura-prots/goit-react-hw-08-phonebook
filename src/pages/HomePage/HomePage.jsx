import { useAuth } from 'hooks/useAuth';
import { Title, Wrapper } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      {!isLoggedIn && (
        <Title>Welcome! Please register or log in to use phonebook</Title>
      )}
    </Wrapper>
  );
};

export default HomePage;
