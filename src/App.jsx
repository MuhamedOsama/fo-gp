import './scss/App.scss';
//external Imports
import { Router, Route, Switch, Redirect } from 'react-router-dom';
//internal Imports
import Home from './landingPage/Home.jsx';
import Auth from './User/Pages/Auth';
import Tracks from './Courses/Pages/Tracks';
import Courses from './Courses/Pages/Courses';
import Profile from './Learner/pages/LearnerProfile';
import ForgotPassword from './User/Pages/ForgotPassword';
import history from './utils/history';
import ResetPassword from './User/Pages/ResetPassword';
import React from 'react';
import NavbarPage from './shared/components/Navigation/Navbar';
function App() {
   return (
      <div className="App">
         <Router history={history}>
            <NavbarPage></NavbarPage>
            {localStorage.getItem('token') ? (
               <React.Fragment>
                  <Switch>
                     <Route path="/" component={Home} exact />
                     <Route path="/tracks" component={Tracks} exact />
                     <Route path="/courses" component={Courses} exact />
                     <Route
                        path="/learner/profile"
                        component={Profile}
                        exact
                     />
                     <Redirect to="/" />
                  </Switch>
               </React.Fragment>
            ) : (
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/authentication" component={Auth} exact />
                  <Route
                     path="/forgotpassword"
                     component={ForgotPassword}
                     exact
                  />
                  <Route path="/tracks" component={Tracks} exact />
                  <Route path="/courses" component={Courses} exact />
                  {true && (
                     <Route
                        path="/resetPassword"
                        component={ResetPassword}
                        exact
                     />
                  )}
                  <Redirect to="/authentication" />
               </Switch>
            )}
         </Router>
      </div>
   );
}

export default App;
