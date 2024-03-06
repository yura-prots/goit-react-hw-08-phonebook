import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import ContactsForm from 'components/ContactsForm';
// import ContactsFilter from 'components/ContactsFilter';
// import ContactsList from 'components/ContactsList';
// import Loader from 'components/Loader';
// import { Container, Wrapper, Title } from './App.styled';
// import { selectContacts, selectIsLoading } from '../../redux/selectors';
// import { fetchContacts } from '../../redux/operations';

const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const App = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>

    // <Container>
    //   <Title>Phonebook</Title>

    //   <Wrapper>
    //     <Loader isLoading={isLoading} />
    //   </Wrapper>

    //   <ContactsForm />

    //   {contacts.length > 0 && (
    //     <Wrapper>
    //       <Title>Contacts</Title>
    //       <ContactsFilter />
    //       <ContactsList />
    //     </Wrapper>
    //   )}
    // </Container>
  );
};

export default App;
