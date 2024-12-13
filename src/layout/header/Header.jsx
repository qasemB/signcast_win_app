import React from "react";
import WindowActionBtn from "./WindowActionBtn";

const Header = () => {
  const handleMinimize = () => {    
    window.electronAPI.minimize();
  };

  const handleClose = () => {
    window.electronAPI.close();
  };
  return (
    <header className="h-14 bg-gray-200 flex items-center px-4">
      <div className="flex gap-2">
        <WindowActionBtn onClick={handleClose} content="X"/> 
        <WindowActionBtn onClick={handleMinimize} content="__"/>
      </div>
    </header>
  );
};

export default Header;
