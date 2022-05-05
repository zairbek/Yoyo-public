import React, {JSXElementConstructor, ReactElement} from 'react';
import classNames from "classnames";

import MainLayout, {MainLayoutProps} from "../MainLayout/MainLayout";
import AccountSidebar from "../../../components/Elements/AccountSidebar/AccountSidebar";

interface MyPageLayoutProps extends MainLayoutProps{
  rootClassName?: string,
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
    >
      <div className="lg:container min-w-[1024px] flex flex-row items-start mx-auto my-6">
        <AccountSidebar/>

        <main className={classNames("flex-1 bg-white shadow-md rounded-2xl", className)}>
          <div className="p-5">

            {children}

          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default MyPageLayout;
