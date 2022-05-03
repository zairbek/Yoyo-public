import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <BrowserView>
        <DesktopHeader/>
      </BrowserView>
      <MobileView>
        <MobileHeader/>
      </MobileView>
    </>
  );
};

export default Header;
