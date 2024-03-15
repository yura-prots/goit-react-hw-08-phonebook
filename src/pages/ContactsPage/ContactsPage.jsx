import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DotLoader } from 'react-spinners';

import { fetchContacts } from '../../redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';
import { Container, Wrapper, Title } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <Wrapper>
        <DotLoader
          color={'#5febf9'}
          loading={isLoading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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

export default ContactsPage;
