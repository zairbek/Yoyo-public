import React from 'react';

import {Device} from "../../Device";
import MobileNavigation from '../../MobileNavigation/MobileNavigation';
import DesktopHeader from "../../Header/DesktopHeader";
import MobileHeader from "../../Header/MobileHeader";
import AppLayout, {AppLayoutProps} from "../AppLayout/AppLayout";

export interface MainLayoutProps extends AppLayoutProps{

}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  description,
  keywords,

  ogTitle = title,
  ogDescription = description,
  ogImage,
  ogUrl = 'www.fugr.ru',

  children,
  className,
}) => {
  return (
    <AppLayout
      title={title}
      description={description}
      keywords={keywords}
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogImage={ogImage}
      ogUrl={ogUrl}
      className={className}
    >
      <Device desktop>
        <DesktopHeader/>
      </Device>
      <Device mobile>
        <MobileHeader/>
      </Device>

      {children}

      <Device mobile>
        <MobileNavigation/>
      </Device>
    </AppLayout>
  );
};

export default MainLayout;
