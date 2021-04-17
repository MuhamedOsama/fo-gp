import React, { useState, useEffect } from 'react';
import { useHttpClient } from '../shared/hooks/http-hook';
import AlertBar from '../shared/components/UIElements/AlertBar';
const ResendValidation = () => {
   const { sendRequest, error, clearError } = useHttpClient();
   const [success, setSuccess] = useState(false);

   const resend = async () => {
      console.log(JSON.parse(localStorage.getItem('token')));
      try {
         await sendRequest(
            'account/resend',
            'GET',
            null,
            {
               authorization: JSON.parse(localStorage.getItem('token')),
            },
            ''
         );
         setSuccess(true);
      } catch (err) {
         console.log('error');
      }
   };

   return (
      <React.Fragment>
         {error && (
            <AlertBar error={error} variant="error" close={clearError} />
         )}
         {success && (
            <AlertBar
               error={'an email was sent successfully'}
               variant="success"
               close={clearError}
            />
         )}

         {!success && (
            <button className="btn ml-2 link" onClick={resend}>
               Resend
            </button>
         )}
      </React.Fragment>
   );
};

export default ResendValidation;
