import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";

import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";

const Dashboard: NextPage<NextPageProps> = ({isMobile}) => {
  console.log(isMobile)

  return (
    <MyPageLayout title={'Dashboard'} description={'Dashboard'} isMobile={isMobile} showSidebar={true}>

    </MyPageLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Dashboard;
