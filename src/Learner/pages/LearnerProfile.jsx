import React from 'react';
import ValidationCheck from '../../shared/components/Navigation/ValidationCheck';
const Profile = () => {
   const user = JSON.parse(localStorage.getItem('user'));
   console.log(user);
   return (
      <React.Fragment>
         <ValidationCheck />
         <div className="container">
            <ul>
               <li>{user.account.email}</li>
               <li>{`${user.profile.firstName} ${user.profile.lastName}`}</li>
            </ul>
         </div>
      </React.Fragment>
   );
};

export default Profile;
