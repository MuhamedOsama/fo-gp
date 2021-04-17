import history from '../../utils/history';
import {
   SIGN_UP,
   SIGN_IN,
   SIGN_OUT,
} from '../actionTypes/userActionTypes';
import axios from 'axios';
export const signup = (data) => async (dispatch) => {
   console.log(data);
   dispatch({
      type: SIGN_UP,
      payload: data,
   });
   alert('Signed Up Successfully');
   history.push('/');
};
export const socialSignup = (user) => async (dispatch) => {
   try {
      const { data } = await axios.get(
         'http://endexel-backend.eu-central-1.elasticbeanstalk.com/auth/google'
      );
      console.log(data);
      dispatch({
         type: SIGN_UP,
         payload: data,
      });

      if (data.status === 'success') {
         alert('Signed Up Successfully');
         console.log(history);
         history.push('/');
      }
   } catch (error) {
      console.log(error.response.data.message);
      alert(
         error.response.data.message
            ? error.response.data.message
            : 'Oops something went wrong '
      );
   }
};

export const login = (data) => async (dispatch) => {
   dispatch({
      type: SIGN_IN,
      payload: data,
   });
   alert('Signed in Successfully');
   history.push('/');
};

export const signout = () => (dispatch, getState) => {
   console.log('in signout');
   dispatch({
      type: SIGN_OUT,
      payload: '',
   });
   window.location.reload();
};

/* export const test = (message) => async (dispatch, getState) => {
   console.log('test started');
   try {
      const token = JSON.parse(localStorage.getItem('token'));
      console.log(token);
      const headers = {
         'Content-Type': 'application/json',
         authorization: token,
      };
      const { data } = await axios.post(
         `${SERVER_BASE_URL}/users`,

         {
            headers: headers,
         }
      );
      dispatch({
         type: 'TEST',
         payload: data,
      });
      if (data.status === 'success') {
         console.log(data);
      }
   } catch (error) {
      console.log(error);
   }
};
 */
