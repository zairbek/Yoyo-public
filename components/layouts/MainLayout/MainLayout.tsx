import React from 'react';

import MobileNavigation from '../../MobileNavigation/MobileNavigation';
import DesktopHeader from "../../Header/DesktopHeader";
import MobileHeader from "../../Header/MobileHeader";
import AppLayout, {AppLayoutProps} from "../AppLayout/AppLayout";
import {Divider} from "../../shared/Divider";
import cx from "classnames";

export interface MainLayoutProps extends AppLayoutProps{
  hideHeader?: boolean;
  showBackButton?: boolean;
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
  isMobile,
  hideHeader = false,
  showBackButton = false
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
      className={cx(className, 'mb-10')}
      isMobile={isMobile}
    >

      {isMobile
        ? !hideHeader && <MobileHeader showBackButton={showBackButton}/>
        : <DesktopHeader/>
      }
      {isMobile && !hideHeader && <Divider invisible/>}
      {children}

      {isMobile && <MobileNavigation/>}
    </AppLayout>
  );
};

export default MainLayout;
