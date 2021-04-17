import React, { useState, useEffect } from 'react';
import ResendValidation from '../../../HOC/ResendValidation';
const ValidationCheck = () => {
   const [userNavData, setUserNavData] = useState();
   /*   const getAccountData = async () => {
       try {
         const responseData = await sendRequest(
            'account',
            'GET',
            null,
            {
               authorization: JSON.parse(localStorage.getItem('token')),
            },
            ''
         );
         setUserNavData(responseData);
         setSuccess(true);
      } catch (err) {
         console.log('error ' + err);
      } 
   }; */

   useEffect(() => {
      if (localStorage.getItem('user')) {
         setUserNavData(JSON.parse(localStorage.getItem('user')).account);
      }
   }, []);
   return userNavData && !userNavData.verified ? (
      <div className="text-white bg-dark row  justify-content-center transitionSlow verficationBar">
         <h6 className="h6 pt-2 transitionSlow">
            Your account is not Verified yet, verify it to get all Endexel
            features
         </h6>
         <ResendValidation></ResendValidation>
      </div>
   ) : (
      <></>
   );
};

export default ValidationCheck;
