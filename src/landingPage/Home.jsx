import React from 'react';
import { Container } from 'react-bootstrap/';
import ValidationCheck from '../shared/components/Navigation/ValidationCheck.jsx';
const Home = () => {
   return (
      <React.Fragment>
         <ValidationCheck />
         <Container fluid className="mt-5 ">
            <div className="row justify-content-center">
               <h1 className="display-1">Endexel</h1>
            </div>
            <div className="row justify-content-center">
               <h1>Home</h1>
            </div>
            <div className="row justify-content-center">
               <h1 className="ar">الرئيسيه</h1>
            </div>
            <div className="row justify-content-center m-3">
               {localStorage.getItem('token') ? (
                  <h1 className="text-info bold">{`Welcome ${
                     JSON.parse(localStorage.getItem('user')).profile
                        .firstName
                  }  ${
                     JSON.parse(localStorage.getItem('user')).profile
                        .lastName
                  }`}</h1>
               ) : (
                  <h1 className="text-info bold">
                     You Can Login or Register
                  </h1>
               )}
            </div>
         </Container>
      </React.Fragment>
   );
};

export default Home;
