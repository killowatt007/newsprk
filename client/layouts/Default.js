import React from 'react';
import TopBar from "../components/TopBar";
import LogoArea from "../components/LogoArea";
import MainMenu from "../components/MainMenu";
import FooterArea from "../components/FooterArea";

const Default = ({children}) => {
  return (
    <div className="theme-1">
      <TopBar className="white_bg"/>
      <div className="border_black"/>
      <LogoArea className="white_bg"/>
      <MainMenu/>
      {children}
      <FooterArea className="primay_bg"/>
    </div>
  );
};

export default Default;