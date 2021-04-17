import React, { useState } from 'react';
import '../../../scss/App.scss';
import './AlertBar.scss';
import { IconX } from '@tabler/icons';
import { useSpring, animated } from 'react-spring';
import Portal from './Portal.jsx';
const AlertBar = (props) => {
   const [show, setShow] = useState(true);

   const { x } = useSpring({
      from: { x: 0 },
      x: show ? 1 : 0,
      config: {
         mass: 5,
         tension: 50,
         friction: 25,
         clamp: true,
         duration: 700,
      },
   });

   const handleClose = () => {
      setShow(false);
      setTimeout(() => {
         props.close();
      }, 2000);
   };

   return (
      <div>
         <Portal className="backdrop">
            <animated.div
               style={{
                  transform: x
                     .interpolate({
                        range: [0, 0.25, 0.5, 0.75, 1],
                        output: [-800, 50, 10, 25, 5],
                     })
                     .interpolate((x) => `translateX(${x}px)`),
               }}
               className="alert-card ">
               <div
                  className={`alert alert-${props.variant} alert-dismissible fade show m-0`}
                  role="alert">
                  {props.error}
                  <button
                     type="button"
                     className="close"
                     aria-label="Close"
                     onClick={handleClose}>
                     <span aria-hidden="true">
                        <IconX />
                     </span>
                  </button>
               </div>
            </animated.div>
         </Portal>
      </div>
   );
};

export default AlertBar;
