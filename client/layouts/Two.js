import React from 'react';
import TopBarTwo from "../components/TopBarTwo";
import LogoAreaTwo from "../components/LogoAreaTwo";
import MainMenuTwo from "../components/MainMenuTwo";
import FooterAreaTwo from "../components/FooterAreaTwo";

const Dark = ({children}) => {
  return (
    <div className="theme-3 theme3_bg">
      <TopBarTwo/>
      <div className="border_black"/>
      <LogoAreaTwo/>
      <MainMenuTwo/>
      {children}
      <FooterAreaTwo/>
    </div>
  );
};

export default Dark;