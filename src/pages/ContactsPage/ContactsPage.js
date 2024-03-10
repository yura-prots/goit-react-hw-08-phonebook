// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';
import Loader from 'components/Loader';
import { Container, Wrapper, Title } from './ContactsPage.styled';
import { selectContacts, selectIsLoading } from '../../redux/contacts/selector';
// import { fetchContacts } from '../../redux/operations';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

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

export default ContactsPage;
