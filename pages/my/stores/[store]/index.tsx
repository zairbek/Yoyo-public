import {GetServerSidePropsContext, NextPage} from "next";
import React from 'react';

import MyPageLayout from "../../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../../libs/uaParser";
import {NextPageProps} from "../../../index";

const ShowStore: NextPage<NextPageProps> = ({isMobile}) => {
  return (
    <MyPageLayout title={'store page'} description={'store page'} isMobile={isMobile}>
            show store
    </MyPageLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default ShowStore;
