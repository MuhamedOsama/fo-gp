import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/userActions';
import InputField from '../../shared/components/FormElements/InputField';
import InputError from '../../shared/components/UIElements/InputError';
import googleIcon from '../../assets/images/Group 599.svg';
import linkedinIcon from '../../assets/images/linkedin-svgrepo-com.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import AlertBar from '../../shared/components/UIElements/AlertBar';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
const Login = () => {
   const { handleSubmit, register, errors } = useForm();
   const { sendRequest, isLoading, error, clearError } = useHttpClient();

   const onSubmit = async (data) => {
      try {
         console.log('hi');
         await sendRequest(
            'login',
            'POST',
            data,
            {
               'Content-Type': 'application/json',
            },
            login
         );
      } catch (err) {}
   };
   return (
      <div className="mt-3">
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
            <div className="mb-3 ">
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
            <div className="mb-2 ">
               <InputField
                  id="formBasicPassword"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true, minLength: 5 })}
                  label="Password"
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
            <h6 className="mb-4 pointer">
               Forgot Password ?
               <strong className="ml-2">
                  <Link className="link" to="/forgotpassword">
                     Click here
                  </Link>
               </strong>
            </h6>
            <Button
               variant="successes"
               type="submit"
               className="submitBtn w-100 mt-3">
               Submit
            </Button>
            <div className="pt-4 pb-3">
               <h5 className="surroundingLine">
                  <span>Or</span>
               </h5>
            </div>
            <div className="row justify-content-center social-btns ">
               <div className="col-4 p-1">
                  <Button className="social-btn w-100">
                     <img src={linkedinIcon} alt="linked in icon" />
                  </Button>
               </div>
               <div className="col-4 p-1">
                  <Button className="social-btn w-100">
                     <img src={googleIcon} alt="google icon" />
                  </Button>
               </div>
               <div className="col-4 p-1">
                  <Button className="social-btn w-100">
                     <img src={facebookIcon} alt="facebook Icon" />
                  </Button>
               </div>
            </div>
            <div className="row justify-content-center">
               <p className="terms text-center">
                  Terms of Services applied.
               </p>
            </div>
         </Form>
      </div>
   );
};

export default Login;
