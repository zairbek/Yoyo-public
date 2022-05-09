import React from 'react';

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";

const MobileHeader = () => {
  return (
    <div className="z-20">
      <div className="navbar justify-between bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl gap-x-4 min-h-[3rem]">

        <div className="navbar-center lg:flex flex-auto gap-x-4">
          {/*search*/}
          <HeaderSearch hideCategory={true}/>
        </div>

      </div>
    </div>
  );
};

export default MobileHeader;
