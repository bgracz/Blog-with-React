import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div>
         <p><NavLink to="/">Blog</NavLink></p>
         <p><NavLink to="/contact">Contact</NavLink></p>
      </div>
   );
}

export default Navigation;