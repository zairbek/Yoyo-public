import React from 'react';
import {Menu, MenuItem, MenuTitle} from "../../../../shared/Menu";
import {Sizes} from "../../../../shared/Menu/Menu";
import Location from "../../../../shared/Icon/Icons/Location";
import {Badge} from "../../../../shared/Badge";
import Language from "../../../../shared/Icon/Icons/Language";
import Currency from "../../../../shared/Icon/Icons/Currency";
import Help from "../../../../shared/Icon/Icons/Help";

const ApplicationMenu: React.FC = () => {
  return (
    <Menu rounded size={Sizes.Compact}>
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
        to="/my/settings/currency"
        icon={<Currency/>}
        endElement={<Badge outline>KGZ</Badge>}
      >
        Валюта
      </MenuItem>
      <MenuItem icon={<Help/>}>Помощь</MenuItem>
    </Menu>
  );
};

export {ApplicationMenu};
