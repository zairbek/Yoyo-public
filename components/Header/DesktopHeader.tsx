import React from 'react';
import Link from "next/link";

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";
import BasketButtonDropdown from "../UI/Basket/BasketIcon/BasketButtonDropdown";
import AccountButtonCircle from "../UI/Account/AccountButtonCircle/AccountButtonCircle";

const DesktopHeader = () => {
  return (
    <div className="lg:container min-w-[1024px] mx-auto sticky top-4 mt-6 z-20">
      <div className="navbar justify-between bg-primary-content rounded-2xl bg-white/60 backdrop-blur-2xl shadow-xl gap-x-4">

        <div>
          <Link href={'/'}>
            <a className="btn btn-ghost normal-case text-xl">eBazar</a>
          </Link>
        </div>


        <div className="navbar-center flex-auto gap-x-4">
          {/*country*/}
          {/*
          выбор местоположение
          <CountrySelectButton/>
          */}

          {/*search*/}
          <HeaderSearch/>
        </div>



        <div className="gap-x-2">
          {/*lang*/}
          {/*
          выбор языка интерфейса
          <LanguageButton/>*/}

          {/*favorite*/}
          <button className="btn btn-circle btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>

          {/*basket*/}
          <BasketButtonDropdown/>

          {/*account*/}
          <AccountButtonCircle/>
        </div>



      </div>
    </div>
  );
};

export default DesktopHeader;
