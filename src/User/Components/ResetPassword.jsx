import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import InputField from '../../shared/components/FormElements/InputField';
import InputError from '../../shared/components/UIElements/InputError';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import AlertBar from '../../shared/components/UIElements/AlertBar';
import history from '../../utils/history';

const ForgotStep2 = (props) => {
   const { error, isLoading, sendRequest, clearError } = useHttpClient();
   const { handleSubmit, watch, register, errors } = useForm();
   const [success, setSuccess] = useState(false);
   const password = useRef();
   password.current = watch('password');

   const onSubmit = async (data) => {
      try {
         await sendRequest(
            `account/reset?token=${props.query}`,
            'POST',
            { password: data.password },
            {},
            ''
         );
         setSuccess(true);
      } catch (error) {
         console.log(error);
      }
   };

   const clear = () => {
      clearError();
      setSuccess(false);
      history.push('/');
   };

   return (
      <React.Fragment>
         {error && (
            <AlertBar error={error} variant="danger" close={clear} />
         )}
         {success && (
            <AlertBar
               error={'Your Password was changed successfully'}
               variant="success"
               close={clear}
            />
         )}
         <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {isLoading && <LoadingSpinner asOverlay />}
            <h1>Reset Password</h1>
            <p className="h6 mb-5   ">Please enter a new password</p>
            <InputField
               id="formBasicPassword"
               type="password"
               placeholder="Password"
               name="password"
               ref={register({ required: true, minLength: 5 })}
               label="New Password"
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
            {success || error ? (
               <Button
                  variant="secondary"
                  type="submit"
                  className="submitBtn mb-3 w-100 mt-4 "
                  disabled>
                  Submit
               </Button>
            ) : (
               <Button
                  variant="secondary"
                  type="submit"
                  className="submitBtn mb-3 w-100 mt-4">
                  Submit
               </Button>
            )}
         </Form>
      </React.Fragment>
   );
};

export default ForgotStep2;
