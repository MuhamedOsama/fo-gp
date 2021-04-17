import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Login from '../Components/Login';
import Register from '../Components/Register';
import './auth.scss';
import bwLogo from '../../assets/images/Group 600.svg';
import { IconWorld } from '@tabler/icons';
import logo from '../../assets/images/Group 618.svg';
import { useSpring, animated } from 'react-spring';
const Auth = () => {
   //checks the authentication type sign up or login
   const [isLoginMode, setIsLoginMode] = useState(false);
   const [animDone, setAnimDone] = useState(false);

   const changeMode = () => {
      setAnimDone(true);
      setIsLoginMode(!isLoginMode);
   };
   const anim = useSpring({
      config: { mass: 1, tension: 170, friction: 26, duration: 150 },

      to: async (next, cancel) => {
         await next({
            opacity: animDone ? 0 : 1,
            transform: animDone ? 'scale(0.5)' : 'scale(1)',
         });
         await next({ opacity: 1, transform: 'scale(1)' });
      },
      from: { opacity: 1, transform: 'scale(1)' },
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
                  <animated.div style={anim}>
                     <Card className="cardAnim authCard">
                        <div className="row d-xs-block d-lg-none">
                           <img
                              src={logo}
                              alt="endexel logo"
                              className="mb-3"
                           />
                        </div>
                        {isLoginMode ? (
                           <React.Fragment>
                              <h1>Login</h1>
                              <p>
                                 new user ?{' '}
                                 <span
                                    onClick={changeMode}
                                    className="link pointer bold">
                                    create new account
                                 </span>
                              </p>
                           </React.Fragment>
                        ) : (
                           <React.Fragment>
                              <h1>Register</h1>
                              <p>
                                 already have an account ?{' '}
                                 <span
                                    onClick={changeMode}
                                    className="text-info pointer bold">
                                    sign in
                                 </span>
                              </p>
                           </React.Fragment>
                        )}
                        {isLoginMode ? <Login /> : <Register />}
                        <div className="d-flex ar">
                           <IconWorld />
                           <p className="mb-0">العربيه</p>
                        </div>
                     </Card>
                  </animated.div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Auth;
