import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";

import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";

const Dashboard: NextPage<NextPageProps> = ({isMobile}) => {
  return (
    <MyPageLayout title={'Dashboard'} description={'Dashboard'} isMobile={isMobile} showSidebar={true}>
      dashboard
    </MyPageLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Dashboard;
