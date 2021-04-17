import React from 'react';
import { Button } from 'react-bootstrap';
import checkImage from '../../assets/images/Group 678.svg';
const ForgotConfirm = (props) => {
   const handleChangeMail = () => {
      props.cancel();
   };
   return (
      <div className="">
         <div className="row justify-content-center mb-5">
            <img src={checkImage} alt="success indicator" />
         </div>
         <div className="row justify-content-center mb-1">
            <h5 className="h5">A Link Have been sent to</h5>
         </div>
         <div className="row justify-content-center mb-0">
            <h5 className="h5 text-info bold">{props.email}</h5>
         </div>
         <div className="row justify-content-center">
            <Button
               variant="secondary"
               className="button-light"
               onClick={handleChangeMail}>
               Use another mail
            </Button>
         </div>
         <div className="row justify-content-center mb-3 mt-4">
            <h6 className="h6">Click on the link to change password</h6>
         </div>
      </div>
   );
};

export default ForgotConfirm;
