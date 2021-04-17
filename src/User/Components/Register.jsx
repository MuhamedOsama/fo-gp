import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signup, socialSignup } from '../../redux/actions/userActions';
import InputField from '../../shared/components/FormElements/InputField';
import InputError from '../../shared/components/UIElements/InputError';
import googleIcon from '../../assets/images/Group 599.svg';
import linkedinIcon from '../../assets/images/linkedin-svgrepo-com.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import { useHttpClient } from '../../shared/hooks/http-hook';
import AlertBar from '../../shared/components/UIElements/AlertBar';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Register = () => {
   const { handleSubmit, watch, register, errors } = useForm();
   const password = useRef();
   password.current = watch('password');
   const dispatch = useDispatch();
   const { sendRequest, isLoading, error, clearError } = useHttpClient();

   const onSubmit = async (data) => {
      if (data.password === data.password_confirm) {
         const { password_confirm, ...userData } = data;
         try {
            await sendRequest(
               'signupseeker',
               'POST',
               userData,
               {
                  'Content-Type': 'application/json',
               },
               signup
            );
         } catch (err) {}
      } else {
         console.log('password does not match');
      }
   };
   const handleSocialSignup = () => {
      dispatch(socialSignup());
   };
   return (
      <React.Fragment>
         <div className="alert-container">
            {error && (
               <AlertBar
                  error={error}
                  variant="danger"
                  close={clearError}
               />
            )}
         </div>

         <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="row justify-content-center social-btns">
               <div className="col-4 p-1">
                  <Button className="social-btn w-100">
                     <img src={linkedinIcon} alt="linked in icon" />
                  </Button>
               </div>
               <div className="col-4 p-1">
                  <Button
                     className="social-btn w-100"
                     onClick={handleSocialSignup}>
                     <img src={googleIcon} alt="google icon" />
                  </Button>
               </div>
               <div className="col-4 p-1">
                  <Button className="social-btn w-100">
                     <img src={facebookIcon} alt="facebook Icon" />
                  </Button>
               </div>
            </div>
            <div className="pt-4 pb-3">
               <h5 className="surroundingLine">
                  <span>Or</span>
               </h5>
            </div>
            <div className="row">
               <div className="col-sm-6 mb-3">
                  <InputField
                     id="formFirstName"
                     type="text"
                     placeholder="First Name"
                     name="firstName"
                     label="First Name"
                     ref={register({ required: true, minLength: 2 })}
                     inValid={errors.firstName}
                  />
                  <InputError
                     error={errors.firstName}
                     type="required"
                     message="This Filed is required"
                  />
                  <InputError
                     error={errors.firstName}
                     type="minLength"
                     message="First Name Minimum Length is 2 characters"
                  />
               </div>
               <div className="col-sm-6 mb-3">
                  <InputField
                     id="formLastName"
                     type="text"
                     placeholder="Last Name"
                     name="lastName"
                     label="Last name"
                     ref={register({ required: true, minLength: 2 })}
                     inValid={errors.lastName}
                  />
                  <InputError
                     error={errors.lastName}
                     type="required"
                     message="This Filed is required"
                  />
                  <InputError
                     error={errors.lastName}
                     type="minLength"
                     message="Full-Name Minimum Length is 2 characters"
                  />
               </div>
            </div>
            <div className="mb-3">
               <InputField
                  id="formBasicEmail"
                  type="email"
                  placeholder="Email"
                  name="email"
                  label="Enter email"
                  ref={register({
                     required: true,
                     pattern: /^\S+@\S+$/i,
                  })}
                  inValid={errors.email}
               />
               <InputError
                  error={errors.email}
                  type="required"
                  message="This Filed is required"
               />
               <InputError
                  error={errors.email}
                  type="pattern"
                  message="This Email is not valid"
               />
            </div>
            <div className="mb-3">
               <InputField
                  id="formBasicPassword"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true, minLength: 5 })}
                  label="Enter Password"
                  inValid={errors.password}
                  addon={true}
               />
               <InputError
                  error={errors.password}
                  type="required"
                  message="This Filed is required"
               />
               <InputError
                  error={errors.password}
                  type="minLength"
                  message="Password Minimum Length is 5 characters"
               />
            </div>
            <div className="mb-3">
               <InputField
                  id="formConfirmPassword"
                  name="password_confirm"
                  type="password"
                  placeholder="Password"
                  ref={register({
                     required: true,
                     validate: (value) => value === password.current,
                  })}
                  label="Confirm Password"
                  inValid={errors.password_confirm}
               />
               <InputError
                  error={errors.password_confirm}
                  type="required"
                  message="This Filed is required"
               />
               <InputError
                  error={errors.password_confirm}
                  type="validate"
                  message="Passwords doesn't match"
               />
            </div>
            <Button
               variant="secondary"
               type="submit"
               className="submitBtn mb-2 w-100 mt-2">
               Submit
            </Button>
            <div className="row justify-content-center">
               <p className="terms text-center">
                  By creating an account, you agree to the
                  <Link className="text-info " to="#">
                     Terms of Service.
                  </Link>
               </p>
            </div>
         </Form>
      </React.Fragment>
   );
};

export default Register;
