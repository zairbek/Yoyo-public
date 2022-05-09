import React from 'react';
import classNames from "classnames";

import MainLayout, {MainLayoutProps} from "../MainLayout/MainLayout";
import AccountSidebar from "../../../components/Elements/AccountSidebar/AccountSidebar";

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

      {!isMobile
        ? (
          <div className="lg:container min-w-[1024px] flex flex-row items-start mx-auto my-6">
            <AccountSidebar className="sticky"/>

            <main className={classNames("flex-1 bg-white shadow-md rounded-2xl", className)}>
              <div className="p-5">

                {children}

              </div>
            </main>
          </div>
        )
        : (
          <div className="container flex flex-col items-start mx-auto mb-20">

            {showSidebar && <AccountSidebar isMobile />}

            <main className={classNames("flex-1 w-full bg-white shadow-md rounded-2xl", className)}>
              <div className="p-3">

                {children}

              </div>
            </main>
          </div>
        )
      }
    </MainLayout>
  );
};

export default MyPageLayout;
