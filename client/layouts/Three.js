import React from 'react';
import LogoAreaThree from "../components/LogoAreaThree";
import FooterAreaThree from "../components/FooterAreaThree";

const Three = ({children}) => {
  return (
    <div className="theme-4">
      <LogoAreaThree/>
      {children}
      <FooterAreaThree/>
    </div>
  );
};

export default Three;