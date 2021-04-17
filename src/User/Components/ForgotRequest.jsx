import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import InputField from '../../shared/components/FormElements/InputField';
import InputError from '../../shared/components/UIElements/InputError';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import AlertBar from '../../shared/components/UIElements/AlertBar';

const ForgotRequest = (props) => {
   const { handleSubmit, register, errors } = useForm();
   const { error, isLoading, sendRequest, clearError } = useHttpClient();
   const onSubmit = async (data) => {
      try {
         await sendRequest(
            'account/forgotPassword',
            'POST',
            data,
            {
               authorization: JSON.parse(localStorage.getItem('token')),
               'Content-Type': 'application/json',
            },
            ''
         );
         props.next();
         props.handleEmail(data.email);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <React.Fragment>
         {error && (
            <AlertBar error={error} variant="danger" close={clearError} />
         )}
         <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {isLoading && <LoadingSpinner asOverlay />}

            <h1>Change Password</h1>
            <p className="h6 mb-5">
               In order to change password please enter your email
            </p>

            <InputField
               id="FormEmail"
               name="email"
               type="email"
               placeholder="Email"
               ref={register({
                  required: true,
                  pattern: /^\S+@\S+$/i,
               })}
               label="Enter Email"
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
            <Button
               variant="secondary"
               type="submit"
               className="submitBtn mb-3 w-100 mt-4">
               Continue
            </Button>
         </Form>
      </React.Fragment>
   );
};

export default ForgotRequest;
