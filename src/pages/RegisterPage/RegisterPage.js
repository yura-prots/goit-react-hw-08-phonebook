import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './RegisterPage.styled';
import { register } from '../../redux/auth/operations';

const registrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(1, 'Too Short!').required('Required'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <h2>Register Page</h2>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off">
          <FormGroup>
            Name
            <Field id="name" type="name" name="name" required />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Email
            <Field id="email" type="email" name="email" required />
            <ErrorMessage name="email" component="span" />
          </FormGroup>

          <FormGroup>
            Password
            <Field id="password" type="password" name="password" required />
            <ErrorMessage name="password" component="span" />
          </FormGroup>

          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterPage;
