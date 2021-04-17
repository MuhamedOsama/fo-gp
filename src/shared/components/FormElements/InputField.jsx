import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { IconEyeOff, IconEye } from '@tabler/icons';
import './InputField.scss';

const InputField = React.forwardRef((props, ref) => {
   const showHide = () => {
      type === 'password' ? setType('text') : setType('password');
   };

   const [type, setType] = useState(props.type);
   return (
      <Form.Group controlId={props.id} className="inputFiled">
         <Form.Label className="formLabel">{props.label}</Form.Label>
         <InputGroup>
            <Form.Control
               type={type}
               placeholder={props.placeholder}
               ref={ref}
               name={props.name}
               className={`shadow inputControl ${
                  props.inValid ? 'is-invalid' : ''
               } ${props.addon && 'border-right-0'}`}
               onChange={props.handleChange}></Form.Control>
            {props.addon && (
               <InputGroup.Append
                  className="border-left-0 "
                  onClick={showHide}>
                  <InputGroup.Text className="addon">
                     {type === 'password' ? (
                        <IconEyeOff className="transition pointer" />
                     ) : (
                        <IconEye className="transition pointer" />
                     )}
                  </InputGroup.Text>
               </InputGroup.Append>
            )}
         </InputGroup>
      </Form.Group>
   );
});

export default InputField;
