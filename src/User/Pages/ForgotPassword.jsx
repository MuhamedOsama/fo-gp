import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { IconWorld } from '@tabler/icons';
import ForgotRequest from '../Components/ForgotRequest';
import ForgotConfirm from '../Components/ForgotConfirm';

import './auth.scss';
import bwLogo from '../../assets/images/Group 600.svg';
import logo from '../../assets/images/Group 618.svg';
import { useSpring, animated } from 'react-spring';

const ForgotPassword = () => {
   const [requested, request] = useState(false);
   const [email, setEmail] = useState('');
   const handleEmail = (e) => {
      setEmail(e);
   };
   const next = () => {
      if (requested === false) request(true);
   };
   const cancel = () => {
      if (requested === true) request(false);
   };

   const { transform, opacity } = useSpring({
      opacity: requested ? 1 : 0,
      transform: `perspective(600px) rotateX(${requested ? 180 : 0}deg)`,
      config: { mass: 5, tension: 300, friction: 80 },
   });
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
                  {!requested ? (
                     <animated.div
                        style={{
                           opacity: opacity.interpolate((o) => 1 - o),
                           transform,
                        }}>
                        <div className="card cardAnim authCard">
                           <div className="row d-xs-block d-lg-none ">
                              <img
                                 src={logo}
                                 alt="endexel logo"
                                 className="mb-3"
                              />
                           </div>

                           <ForgotRequest
                              next={next}
                              handleEmail={handleEmail}
                           />

                           <div className="d-flex ar mt-4">
                              <IconWorld />
                              <p className="mb-0">العربيه</p>
                           </div>
                        </div>
                     </animated.div>
                  ) : (
                     <animated.div
                        style={{
                           opacity,
                           transform: transform.interpolate(
                              (t) => `${t} rotateX(180deg)`
                           ),
                        }}>
                        <div className="card cardAnim authCard">
                           <div className="row d-xs-block d-lg-none align-self-center mt-0">
                              <img
                                 src={logo}
                                 alt="endexel logo"
                                 className="mb-3"
                              />
                           </div>

                           <ForgotConfirm cancel={cancel} email={email} />
                           <div className="d-flex ar mt-4">
                              <IconWorld />
                              <p className="mb-0">العربيه</p>
                           </div>
                        </div>
                     </animated.div>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ForgotPassword;
