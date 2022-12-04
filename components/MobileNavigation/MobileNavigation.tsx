import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";
import Home from "../shared/Icon/Icons/Outline/Home";
import {IconSizes} from "../shared/Icon";
import Squares2X2 from "../shared/Icon/Icons/Outline/Squares2X2";
import ShoppingBag from "../shared/Icon/Icons/Outline/ShoppingBag";
import Heart from "../shared/Icon/Icons/Outline/Heart";
import UserCircle from "../shared/Icon/Icons/Outline/UserCircle";
import {Routes} from "../../utils/routes";

const menu = [
  {name: 'Главная', link: Routes.home, icon: (<Home size={IconSizes.mediumBig}/>)},
  {name: 'Категории', link: Routes.showCatalog, icon: (<Squares2X2 size={IconSizes.mediumBig}/>)},
  {name: 'Корзина', link: Routes.basket, icon: (<ShoppingBag size={IconSizes.mediumBig}/>)},
  {name: 'Избранные', link: Routes.favorite, icon: (<Heart size={IconSizes.mediumBig}/>)},
  {name: 'Аккаунт', link: Routes.dashboard, icon: (<UserCircle size={IconSizes.mediumBig}/>)},
]

const MobileNavigation: React.FC = () => {
  const router = useRouter()

  return (
    <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow pb-1">
      <div className="flex justify-between">
        {menu.map((item, key) => (
          <Link href={item.link} key={key}>
            <a className={classNames(
              "flex flex-col items-center w-full justify-center inline-block text-center pt-2 pb-1",
              "focus:text-primary hover:text-primary",
              router.asPath === item.link && 'text-primary fill-primary'
            )}>
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;
