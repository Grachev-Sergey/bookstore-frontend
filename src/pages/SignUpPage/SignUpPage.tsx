import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input/Input';
import mail from '../../assets/icons/mail.png';
import hide from '../../assets/icons/hide.png';
import { SignUpPageContainer } from './SignUp.styles';
import man from '../../assets/images/man.png';
import Button from '../../components/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import schemas from '../../utils/schemas';

const initialElem = {
  email: '',
  password: '',
  repeatedPassword: '',
};

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialElem,
    validationSchema: schemas.signUpSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.signUpUser(values)).unwrap();
        // eslint-disable-next-line no-console
        console.log(location.state);
        if (location.state) {
          navigate(location.state.from);
        }
        navigate('/');
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

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
          toggleType="text"
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
          toggleType="text"
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
        <Link to="/login">
          <Button className="logIn__button">Log In</Button>
        </Link>
      </div>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
