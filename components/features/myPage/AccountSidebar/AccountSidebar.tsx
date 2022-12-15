import React from 'react';
import cx from "classnames";
import {data as userData} from '../../../../mocks/user.mock'
import MiniUserCard from "./MiniUserCard";
import {Box} from "../../../shared/Box";
import {BoxDirections, BoxSizes} from "../../../shared/Box/Box";
import {Menu, MenuItem, MenuSizes, MenuTitle} from "../../../shared/Menu";
import {personalData} from './AccountSidebar.data'
import {ApplicationMenu} from "../dashboardPage/ApplicationMenu";
import MobileSignInIndex from "../../../Elements/Popups/SignInPopup/MobileIndex";

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
          isMobile ? 'w-full' : 'max-w-sm'
        )}>

        {userData ? (<>
            <div className={cx(
              "flex items-center gap-x-4",
              !isMobile ? 'flex-col p-5' : 'flex-row'
            )}>
              <MiniUserCard userData={userData}/>
            </div>
            <div className="divider my-0"/>
          </>)
          : (<Box isMobile={isMobile} shadow={false} size={BoxSizes.compact} className="px-6 py-8" direction={BoxDirections.Col}>
              <h2 className="text-bold text-2xl mb-2">Войдите или зарегистрируйтесь</h2>
              <p className="text-sm mb-2">Чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.</p>
              <div>
                <MobileSignInIndex/>
              </div>
            </Box>)
        }

        <Menu size={MenuSizes.Compact}>
          <MenuTitle>Личная информация</MenuTitle>
          {personalData.map((data, key) => (
            <MenuItem key={key} to={data.href} icon={data.icon}>{data.title}</MenuItem>
          ))}
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
