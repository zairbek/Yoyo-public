import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";

import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";

const Orders: NextPage<NextPageProps> = ({isMobile}) => {
  const title = 'Мои заказы';

  return (
    <MyPageLayout title={title} description={'заказы'} isMobile={isMobile}>
      orders
    </MyPageLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Orders;
