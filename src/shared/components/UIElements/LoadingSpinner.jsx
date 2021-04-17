import React from 'react';
import logo from '../../../assets/images/Group 618.svg';
import './LoadingSpinner.scss';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
   -(y - window.innerHeight / 2) / 20,
   (x - window.innerWidth / 2) / 20,
   1.1,
];
const trans = (x, y, s) =>
   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const LoadingSpinner = (props) => {
   const [anim, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 },
   }));

   return (
      <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
         <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
               set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: anim.xys.interpolate(trans) }}
            className="p-5  w-100 ">
            <img src={logo} alt="endexl logo" className="w-100" />
         </animated.div>
      </div>
   );
};

export default LoadingSpinner;
