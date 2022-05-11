import React from 'react';
import Router from "next/router";

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";

interface MobileHeaderProps {
  showBackButton?: boolean
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  showBackButton
}) => {

  return (
    <div>
      <div className="navbar justify-between fixed top-0 z-20 bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl min-h-[3rem]">

        {showBackButton &&
          <button className="btn btn-xs btn-ghost" onClick={() => Router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </button>
        }

        <div className="navbar-center lg:flex flex-auto gap-x-4">
          {/*search*/}
          <HeaderSearch hideCategory={true}/>
        </div>

      </div>
    </div>
  );
};

export default MobileHeader;
