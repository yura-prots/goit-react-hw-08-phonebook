import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './LoginPage.styled';

const contactSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const LoginPage = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={contactSchema}
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
