import React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import {Device} from "../../Device";
import MobileNavigation from '../../MobileNavigation/MobileNavigation';
import DesktopHeader from "../../Header/DesktopHeader";
import MobileHeader from "../../Header/MobileHeader";

interface MainLayoutProps {
  title: string;
  description: string;
  keywords?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string
  ogUrl?: string,

  children?: React.ReactNode,
  className?: string,
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
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="format-detection" content="telephone=no" />

        <meta property="og:title" content={ogTitle}/>
        <meta property="og:description" content={ogDescription}/>
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/*<link rel="manifest" href="/manifest.json" />*/}

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={classNames('w-full min-h-screen', className)}>
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
      </main>
    </>
  );
};

export default MainLayout;
