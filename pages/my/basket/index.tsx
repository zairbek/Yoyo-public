import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";

const Basket: NextPage<NextPageProps> = ({
  isMobile,
}) => {
  const title = 'корзина'

  return (
    <MyPageLayout title={title} description={'заказы'} isMobile={isMobile}>
      basket
    </MyPageLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      isMobile: isMobile(ctx.req),
    }
  }
}

export default Basket;
