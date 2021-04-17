import React from 'react';
//reuseable component for  handling inputs error for react-hooks-form
const InputError = (props) => {
   return (
      <React.Fragment>
         {props.error && props.error.type === props.type && (
            <p className="text-danger">{props.message}</p>
         )}
      </React.Fragment>
   );
};

export default InputError;
