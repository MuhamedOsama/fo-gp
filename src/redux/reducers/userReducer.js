import {
   SIGN_UP,
   SIGN_IN,
   SIGN_OUT,
} from '../actionTypes/userActionTypes';

const initialstate = {
   user: JSON.parse(localStorage.getItem('user')),
};

const userReducer = (state = initialstate, action) => {
   const { type, payload } = action;

   switch (type) {
      case SIGN_UP:
         const userSignUpJS = JSON.stringify(payload.data.accessToken);
         localStorage.setItem('user', JSON.stringify(payload.data));
         localStorage.setItem('token', userSignUpJS);

         return { ...state, user: payload.data };

      case SIGN_IN:
         const userSignInJS = JSON.stringify(payload.data.accessToken);
         localStorage.setItem('user', JSON.stringify(payload.data));
         localStorage.setItem('token', userSignInJS);
         return { ...state, user: payload.data };

      case SIGN_OUT:
         try {
            localStorage.clear();
            console.log('in signout');
         } catch (e) {
            console.log(e);
         }
         return { ...state, user: '' };
      default:
         return state;
   }
};

export default userReducer;
