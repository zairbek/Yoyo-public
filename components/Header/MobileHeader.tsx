import React from 'react';

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";

const MobileHeader = () => {
  return (
    <div>
      <div className="navbar justify-between fixed top-0 z-20 bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl gap-x-4 min-h-[3rem]">

        <div className="navbar-center lg:flex flex-auto gap-x-4">
          {/*search*/}
          <HeaderSearch hideCategory={true}/>
        </div>

      </div>
    </div>
  );
};

export default MobileHeader;
