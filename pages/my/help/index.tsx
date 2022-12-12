import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import {isMobile} from "../../../libs/uaParser";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";

const Help: NextPage<NextPageProps> = ({
  isMobile,
}) => {
  const title = 'Помочь';

  return (
    <MyPageLayout title={title} description={'заказы'} isMobile={isMobile}>
      help
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

export default Help;
