import axios from 'axios';
import { useState, useCallback, useRef, useEffect } from 'react';
import { SERVER_BASE_URL } from '../../config';
import { useDispatch } from 'react-redux';
export const useHttpClient = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const dispatch = useDispatch();
   const isMountedVal = useRef(1);
   useEffect(() => {
      isMountedVal.current = 1;

      return () => {
         isMountedVal.current = 0;
      };
   });

   const sendRequest = useCallback(
      async (url, method, body, header, action) => {
         let source = axios.CancelToken.source();
         setIsLoading(true);
         try {
            const { data } = await axios({
               method: method,
               url: `${SERVER_BASE_URL}/${url}`,
               data: body,
               headers: header,
            });
            if (isMountedVal.current) {
               if (action !== '') {
                  dispatch(action(data));
               }
            } else {
               source.cancel();
               setIsLoading(false);
               return false;
            }
            setIsLoading(false);
            return data.result;
         } catch (error) {
            if (error.response) {
               setError(error.response.data.message);
            } else {
               setError('Opps something wrong happened');
            }
            setIsLoading(false);
            throw error;
         }
      },
      []
   );

   const clearError = () => {
      setError(false);
   };

   return { isLoading, error, sendRequest, clearError };
};
