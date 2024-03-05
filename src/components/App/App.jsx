import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';
import Loader from 'components/Loader';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Container, Wrapper, Title } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <Wrapper>
        <Loader isLoading={isLoading} />
      </Wrapper>

      <ContactsForm />

      {contacts.length > 0 && (
        <Wrapper>
          <Title>Contacts</Title>
          <ContactsFilter />
          <ContactsList />
        </Wrapper>
      )}
    </Container>
  );
};

export default App;
