import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import {isMobile} from "../../../libs/uaParser";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import {NextPageProps} from "../../index";

const Basket: NextPage<NextPageProps> = ({
  isMobile,
}) => {
  return (
    <MainLayout isMobile={isMobile} title={'basket'} showBackButton description={'sdf'}>
      basket
    </MainLayout>
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
