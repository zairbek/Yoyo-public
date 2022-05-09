import {NextPage} from "next";
import Document, {Html, Head, Main, NextScript, DocumentInitialProps} from 'next/document'
import React from 'react';
import classNames from "classnames";

import {isMobile} from "../libs/uaParser";
import {DocumentContext} from "next/dist/shared/lib/utils";

interface MyDocumentProps extends DocumentInitialProps {
  isMobile?: boolean;
}

const MyDocument: NextPage<MyDocumentProps> = ({isMobile}) => {
  return (
    <Html data-theme="light">
      <Head/>
      <body className={classNames(
        "bg-gray-100",
        !isMobile && 'min-w-[1024px]'
      )}>
      <div className="flex"/>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    isMobile: isMobile(ctx.req)
  }
}

export default MyDocument;
