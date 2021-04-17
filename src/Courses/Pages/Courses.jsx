import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Courses = () => {
   return (
      <Container>
         <div className="row justify-content-center">
            <h1>Courses List</h1>
         </div>
         <div className="row justify-content-center">
            <Link to="/">
               <Button variant="error" className="m-2">
                  Home
               </Button>
            </Link>
         </div>
      </Container>
   );
};

export default Courses;
