import React from 'react';

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";
import useDevice from "../../hooks/useDevice";

const MobileHeader = () => {
  const {isMobile} = useDevice();

  return (
    <div className="z-20">
      <div className="navbar justify-between bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl gap-x-4">


        <div className="navbar-center lg:flex flex-auto gap-x-4">
          {/*search*/}
          <HeaderSearch hideCategory={isMobile}/>
        </div>

      </div>
    </div>
  );
};

export default MobileHeader;
