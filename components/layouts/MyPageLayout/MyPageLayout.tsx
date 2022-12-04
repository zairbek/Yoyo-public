import React from 'react';

import MainLayout, {MainLayoutProps} from "../MainLayout/MainLayout";
import {AccountSidebar} from "../../features/myPage/AccountSidebar";
import {Section, SectionDirections} from "../../shared/Section";
import {Box} from "../../shared/Box";
import {MyPageMobileHeader} from "../../features/myPage/MyPageMobileHeader";

interface MyPageLayoutProps extends MainLayoutProps{
  rootClassName?: string;
  showSidebar?: boolean;
}

const MyPageLayout: React.FC<MyPageLayoutProps> = ({
  title,
  description,
  keywords,

  ogTitle = title,
  ogDescription = description,
  ogImage,
  ogUrl,

  children,
  rootClassName,
  className,
  isMobile,
  showSidebar = false
}) => {
  return (
    <MainLayout
      title={title}
      description={description}
      keywords={keywords}
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogImage={ogImage}
      ogUrl={ogUrl}
      className={rootClassName}
      isMobile={isMobile}
      hideHeader
    >

      {isMobile
        ?
        (<Section isMobile>
            {!showSidebar && <MyPageMobileHeader title={title}/>}

            {showSidebar && <AccountSidebar isMobile />}

            <Box isMobile className="flex-1">
              {children}
            </Box>
          </Section>)
        :
        (<Section direction={SectionDirections.Row} className="my-6 gap-4">
            <AccountSidebar/>

            <Box className="flex-1">
              {children}
            </Box>
          </Section>)
      }
    </MainLayout>
  );
};

export default MyPageLayout;
