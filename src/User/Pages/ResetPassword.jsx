import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ResetPassword from '../Components/ResetPassword';
import history from '../../utils/history';
import './auth.scss';
import bwLogo from '../../assets/images/Group 600.svg';
import logo from '../../assets/images/Group 618.svg';

const ForgotPassword = () => {
   const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get('token');
   useEffect(() => {
      console.log(myParam);
      if (!myParam) {
         history.push('/');
      }
   }, [myParam]);
   return (
      <div className="authContainer">
         <Container className="h-100">
            <div className="row  w-100 h-100 m-0 p-0 justify-content-center">
               <div className="d-none d-lg-block col-lg-7 align-self-center">
                  <div className="d-flex align-items-center">
                     <img
                        src={bwLogo}
                        alt="endexel logo"
                        className="mr-2"
                     />
                     <h1 className="h3 text-white m-0">
                        Sign in or create an account
                     </h1>
                  </div>
               </div>
               <div className="col-sm-12 col-md-8 col-lg-5 align-self-center ">
                  <div className="card cardAnim authCard">
                     <div className="row d-xs-block d-lg-none ">
                        <img
                           src={logo}
                           alt="endexel logo"
                           className="mb-3"
                        />
                     </div>
                     <ResetPassword query={myParam} />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ForgotPassword;
