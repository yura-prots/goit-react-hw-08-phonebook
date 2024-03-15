import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './LoginPage.styled';
import { logIn } from '../../redux/auth/operations';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <h2>Login Page</h2>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off">
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

          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;
