import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { AxiosError } from 'axios';
import { LogInPageContainer } from './LogInPage.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import mail from '../../assets/icons/mail.png';
import hide from '../../assets/icons/hide.png';
import man from '../../assets/images/man.png';
import { useAppDispatch } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import schemas from '../../utils/schemas';

const initialElem = {
  email: '',
  password: '',
};

const LogInPage: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialElem,
    validationSchema: schemas.logInSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.logInUser(values)).unwrap();
        const token = localStorage.getItem('token');
        if (token) {
          navigate('/');
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

  return (
    <LogInPageContainer>
      <h2>Log In</h2>
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
        <Button
          type="submit"
          className="logInButton"
        >
        Log In
        </Button>
      </form>
      <img className="readingMan" src={man} alt="picture of a reading man" />
    </LogInPageContainer>
  );
};

export default LogInPage;
