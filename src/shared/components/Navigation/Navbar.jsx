import React from 'react';
import {
   Nav,
   Navbar,
   Form,
   FormControl,
   Button,
   NavDropdown,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/images/Group 618.svg';

import { Link } from 'react-router-dom';
import { signout } from '../../../redux/actions/userActions';

const NavbarPage = () => {
   let user = useSelector((state) => state.userState);
   const dispatch = useDispatch();

   if (user) {
      user = user.user;
   }
   const handleSignout = () => {
      dispatch(signout());
   };
   return (
      <Navbar expand="lg">
         <Navbar.Brand>
            <img src={logo} alt="endexel logo" className="mb-1" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link>
                  <Link to="/">Home</Link>
               </Nav.Link>
               <Nav.Link>
                  <Link to="/courses">Courses</Link>
               </Nav.Link>
               <Nav.Link>
                  <Link to="/tracks">Tracks</Link>
               </Nav.Link>
               {user && user.account ? (
                  <Nav.Link>
                     {' '}
                     <Link to="/learner/profile">Profile</Link>
                  </Nav.Link>
               ) : (
                  <Nav.Link>
                     <Link to="/authentication">Authentication</Link>
                  </Nav.Link>
               )}
               {user && user.account && (
                  <Nav.Link
                     className=" text-danger "
                     onClick={handleSignout}>
                     Sign Out
                  </Nav.Link>
               )}
            </Nav>

            <Form inline>
               <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-2 m-2"
               />
               <Button variant="outline-primary" className="m-2">
                  Search
               </Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default NavbarPage;
