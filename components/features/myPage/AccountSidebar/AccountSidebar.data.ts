import React from "react";
import {Routes} from "../../../../utils/routes";
import Home from "../../../shared/Icon/Icons/Outline/Home";
import ShoppingBag from "../../../shared/Icon/Icons/Outline/ShoppingBag";
import Settings8Tooth from "../../../shared/Icon/Icons/Outline/Settings8Tooth";
import Heart from "../../../shared/Icon/Icons/Outline/Heart";
import ShoppingCart from "../../../shared/Icon/Icons/Outline/ShoppingCart";
import ArchiveBox from "../../../shared/Icon/Icons/Outline/ArchiveBox";

interface MenuInterface {
  title: string,
  href: string,
  icon?: React.ReactNode
}

export const personalData: Array<MenuInterface> = [
  {
    title: 'Dashboard',
    href: Routes.dashboard,
    icon: React.createElement(Home),
  },
  {
    title: 'Моя корзина',
    href: Routes.basket,
    icon: React.createElement(ShoppingCart),
  },
  {
    title: 'Мои заказы',
    href: Routes.orders,
    icon: React.createElement(ArchiveBox),
  },
  {
    title: 'Мои избранные',
    href: Routes.favorite,
    icon: React.createElement(Heart),
  },
  {
    title: 'Настройки',
    href: Routes.settings,
    icon: React.createElement(Settings8Tooth),
  },
]


