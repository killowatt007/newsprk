import React from 'react';
import TopBar from "../components/TopBar";
import LogoArea from "../components/LogoArea";
import MainMenu from "../components/MainMenu";
import FooterArea from "../components/FooterArea";

const Dark = ({children}) => {
  return (
    <div className="dark-theme primay_bg">
      <TopBar dark={true}/>
      <div className="border_white"/>
      <LogoArea dark={true} className="dark-2"/>
      <MainMenu dark={true} className="dark-2"/>
      {children}
      <FooterArea className="dark-2"/>
    </div>
  );
};

export default Dark;