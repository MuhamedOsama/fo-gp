import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('alert-hook');

const Portal = ({ children }) => {
   const node = document.createElement('div');
   useEffect(() => {
      if (portalRoot && node) {
         portalRoot.appendChild(node);
      }
      return () => {
         if (portalRoot && node) {
            portalRoot.removeChild(node);
         }
      };
   }, [node]);

   return node ? createPortal(children, node) : null;
};

Portal.propTypes = {
   children: PropTypes.node.isRequired,
};
export default Portal;
