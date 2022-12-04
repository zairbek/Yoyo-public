import React from 'react';
import classNames from "classnames";
import cx from "classnames";
import {data as userData} from '../../../../mocks/user.mock'
import MiniUserCard from "./MiniUserCard";
import {Box} from "../../../shared/Box";
import {BoxDirections, BoxSizes} from "../../../shared/Box/Box";
import {Menu, MenuItem, MenuSizes, MenuTitle} from "../../../shared/Menu";
import {personalData} from './AccountSidebar.data'
import {ApplicationMenu} from "../dashboardPage/ApplicationMenu";
import ShoppingBag from "../../../shared/Icon/Icons/Solid/ShoppingBag";

interface SideBarProps {
  className?: string;
  isMobile?: boolean;
}

const AccountSidebar: React.FC<SideBarProps> = ({
  className,
  isMobile = false
}) => {
  return (
    <div>
    <Box
      isMobile={isMobile}
      direction={BoxDirections.Col}
      size={BoxSizes.compact}
      className={cx(
      isMobile && 'w-full'
    )}>

      <div className={classNames(
        "flex items-center gap-x-4",
        !isMobile ? 'flex-col p-5' : 'flex-row'
      )}>

        <MiniUserCard userData={userData}/>

      </div>

      <div className="divider my-0"/>

      <Menu size={MenuSizes.Compact}>
        <MenuTitle>Личная информация</MenuTitle>
        {personalData.map((data, key) => (
          <MenuItem key={key} to={data.href} icon={data.icon}>{data.title}</MenuItem>
        ))}
      </Menu>


      <Menu size={MenuSizes.Compact}>
        <MenuTitle>Мои магазины</MenuTitle>
        <MenuItem to="/my/stores/cross/" icon={<ShoppingBag/>}>Крассовки</MenuItem>
      </Menu>
    </Box>

    <Box
      isMobile={isMobile}
      size={BoxSizes.compact}
      direction={BoxDirections.Col}
      className={cx(
        isMobile && 'w-full'
      )}>
      <ApplicationMenu/>
    </Box>

  </div>);
};

export {AccountSidebar};
