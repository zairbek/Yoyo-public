import React from 'react';

import MobileNavigation from '../../MobileNavigation/MobileNavigation';
import DesktopHeader from "../../Header/DesktopHeader";
import MobileHeader from "../../Header/MobileHeader";
import AppLayout, {AppLayoutProps} from "../AppLayout/AppLayout";

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
      className={className}
      isMobile={isMobile}
    >

      {isMobile
        ? !hideHeader && <MobileHeader showBackButton={showBackButton}/>
        : <DesktopHeader/>
      }

      {children}

      {isMobile && <MobileNavigation/>}
    </AppLayout>
  );
};

export default MainLayout;
