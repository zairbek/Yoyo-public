import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";

const Currency: NextPage<NextPageProps> = ({
  isMobile
}) => {
  return (
    <MyPageLayout title={'currency'} description={'setting'} isMobile={isMobile}>
      currency
    </MyPageLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Currency;
