import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';

import { addContact } from '../../redux/contacts/operations';
// import { selectContacts } from '../../redux/contacts/selector';
import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './ContactsForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string().min(6, 'Too Short!').required('Required'),
});

const ContactsForm = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = (values, actions) => {
    // const nameToAdd = values.name.toLowerCase();
    // const nameInList = contacts.find(contact => {
    //   return contact.name.toLowerCase() === nameToAdd;
    // });

    // if (nameInList) {
    //   return toast.info(`Contact ${nameToAdd} in the list`);
    // }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off">
          <FormGroup>
            Name
            <Field id="name" type="text" name="name" required />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field id="number" type="text" name="number" required />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactsForm;
