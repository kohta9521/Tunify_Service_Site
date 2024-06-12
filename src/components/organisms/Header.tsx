import React from "react";

// components
import HeaderList from "../molecules/HeaderList";

const Header = () => {
  return (
    <div className="w-screen h-20 border-white">
      <div className="w-11/12 m-auto h-full flex justify-between items-center">
        <div>TUNIFY</div>
        <HeaderList>
          <h1>btn</h1>
        </HeaderList>
      </div>
    </div>
  );
};

export default Header;
