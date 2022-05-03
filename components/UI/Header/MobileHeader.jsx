import React from 'react';
import HeaderSearch from "../Search/HeaderSearch/HeaderSearch";
import BasketButtonDropdown from "../Basket/BasketIcon/BasketButtonDropdown";
import AccountButtonCircle from "../Account/AccountButtonCircle/AccountButtonCircle";

const MobileHeader = () => {
  return (
    <div className="z-20">
      <div className="navbar justify-between bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl gap-x-4">

        <div className="">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                  </svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">eBazar</a>
        </div>


        <div className="navbar-center hidden lg:flex flex-auto gap-x-4">
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

export default MobileHeader;
