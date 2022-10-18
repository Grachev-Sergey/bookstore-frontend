import * as Yup from 'yup';

const signUpSchema = Yup.object({
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

const logInSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Enter email'),
  password: Yup.string()
    .min(6, 'must be more than 6 characters')
    .required('Enter password'),
});

const updateUserPassSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6)
    .required('Enter your password'),
  newPassword: Yup.string()
    .min(6, 'must be more than 6 characters')
    .notOneOf([Yup.ref('oldPassword')], 'The new password must not match the old one.')
    .required('Enter new password'),
  repeatedNewPassword: Yup.string()
    .min(6, 'must be more than 6 characters')
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    .required('Repeated new password'),
});

const updateUserInfoSchema = Yup.object().shape({
  fullName: Yup.string().required('Enter your name'),
  email: Yup.string().email('Invalid email').required('Enter your email'),
});

export default {
  signUpSchema,
  logInSchema,
  updateUserPassSchema,
  updateUserInfoSchema,
};
