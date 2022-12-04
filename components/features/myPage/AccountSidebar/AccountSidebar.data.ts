import React from "react";
import {Routes} from "../../../../utils/routes";
import Home from "../../../shared/Icon/Icons/Outline/Home";
import ShoppingBag from "../../../shared/Icon/Icons/Outline/ShoppingBag";
import Settings8Tooth from "../../../shared/Icon/Icons/Outline/Settings8Tooth";

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
    title: 'Мои магазины',
    href: Routes.stores,
    icon: React.createElement(ShoppingBag),
  },
  {
    title: 'Настройки',
    href: Routes.settings,
    icon: React.createElement(Settings8Tooth),
  },
]


