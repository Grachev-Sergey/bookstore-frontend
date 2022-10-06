// import * as Yup from 'yup';
import Input from '../../components/Input/Input';
import mail from '../../assets/icons/mail.png';
import { SignUpPageContainer } from './SignUp.styles';
import man from '../../assets/images/man.png';

function SignUpPage() {
  // const signUpValidationSchema = Yup.object({
  //   email: Yup.string().email('Invalid email address').required('Enter email'),
  //   password: Yup.string(),
  // });

  return (
    <SignUpPageContainer>
      <h2>Signup</h2>
      <Input icon={mail} type="email" placeholder="Email" inputTitle="Enter your email" />
      <img src={man} alt="picture of a reading man" />
    </SignUpPageContainer>
  );
}

export default SignUpPage;
