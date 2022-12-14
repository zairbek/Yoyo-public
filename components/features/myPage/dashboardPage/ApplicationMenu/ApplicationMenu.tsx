import React from 'react';
import {Menu, MenuItem, MenuTitle, MenuSizes} from "../../../../shared/Menu";
import {Badge} from "../../../../shared/Badge";
import Location from "../../../../shared/Icon/Icons/Outline/Location";
import Language from "../../../../shared/Icon/Icons/Outline/Language";
import Currency from "../../../../shared/Icon/Icons/Outline/Currency";
import Help from "../../../../shared/Icon/Icons/Outline/Help";
import {Routes} from "../../../../../utils/routes";

const ApplicationMenu: React.FC = () => {
  return (
    <Menu rounded size={MenuSizes.Compact}>
      <MenuTitle>Приложение</MenuTitle>
      <MenuItem
        icon={<Location/>}
        endElement={<Badge outline>Бишкек</Badge>}
      >
        Город
      </MenuItem>
      <MenuItem
        icon={<Language/>}
        endElement={<Badge outline>Русский</Badge>}
      >
        Язык
      </MenuItem>
      <MenuItem
        icon={<Currency/>}
        endElement={<Badge outline>KGZ</Badge>}
      >
        Валюта
      </MenuItem>
      <MenuItem
        icon={<Help/>}
        to={Routes.help}
      >Помощь</MenuItem>
    </Menu>
  );
};

export {ApplicationMenu};
