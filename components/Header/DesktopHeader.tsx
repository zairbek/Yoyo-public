import React from 'react';
import Link from "next/link";

import HeaderSearch from "../UI/Search/HeaderSearch/HeaderSearch";
import BasketButtonDropdown from "../UI/Basket/BasketIcon/BasketButtonDropdown";
import AccountButtonCircle from "../UI/Account/AccountButtonCircle/AccountButtonCircle";
import {Routes} from "../../utils/routes";
import Heart from "../shared/Icon/Icons/Outline/Heart";
import {IconSizes} from "../shared/Icon";
import {Button} from "../shared/Button";
import {ButtonColors, ButtonType} from "../shared/Button/Button";

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

          {/*выбор языка интерфейса*/}
          {/*<LanguageButton/>*/}

          {/*favorite*/}
          <Button circle color={ButtonColors.ghost} type={ButtonType.link} href={Routes.favorite}>
              <Heart size={IconSizes.mediumBig}/>
          </Button>

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
