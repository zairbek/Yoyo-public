import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html data-theme="light">
        <Head/>
        <body className="bg-gray-100">
        <div className="flex"/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
