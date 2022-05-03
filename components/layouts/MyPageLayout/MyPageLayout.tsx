import React, {JSXElementConstructor, ReactElement} from 'react';
import classNames from "classnames";

import MainLayout from "../MainLayout/MainLayout";
import AccountSidebar from "../../../components/Elements/AccountSidebar/AccountSidebar";

interface MyPageLayoutProps {
  title: string;
  description: string;
  keywords?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string
  ogUrl?: string,

  children?: React.ReactNode,
  rootClassName?: string,
  className?: string,
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
      <div className="container flex flex-row items-start mx-auto my-6">
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
