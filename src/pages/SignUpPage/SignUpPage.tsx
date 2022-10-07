import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import mail from '../../assets/icons/mail.png';
import hide from '../../assets/icons/hide.png';
import { SignUpPageContainer } from './SignUp.styles';
import man from '../../assets/images/man.png';
import Button from '../../components/Button/Button';

const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Enter email'),
  password: Yup.string()
    .min(6, 'must be more than 6 characters')
    .required('Enter password'),
  repeatedPassword: Yup.string()
    .min(6, 'must be more than 6 characters')
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Repeated password'),
});

const initialElem = {
  email: '',
  password: '',
  repeatedPassword: '',
};

function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialElem,
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (values) {
        navigate('/');
      }
    },
  });


  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <SignUpPageContainer>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          icon={mail}
          id="email"
          type="email"
          placeholder="Email"
          inputTitle="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <Input
          icon={hide}
          id="password"
          type="password"
          placeholder="Password"
          inputTitle="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <Input
          icon={hide}
          id="repeatedPassword"
          type="password"
          placeholder="Password replay"
          inputTitle="Repeat your password without errors"
          value={formik.values.repeatedPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.repeatedPassword}
          error={formik.errors.repeatedPassword}
        />
        <Button
          type="submit"
          className="signUpButton"
        >
        Sing Up
        </Button>
      </form>
      <img className="readingMan" src={man} alt="picture of a reading man" />

      <div className="logIn">
        <p className="logIn__title">If you already have an account, then log in</p>
        <Button className="logIn__button" onClick={goToLogin}>Log In</Button>
      </div>
    </SignUpPageContainer>
  );
}

export default SignUpPage;
