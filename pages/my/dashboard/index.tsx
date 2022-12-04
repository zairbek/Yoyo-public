import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";

import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import {useAppSelector} from "../../../store/hooks";
import {selectUserData} from "../../../store/slices/auth";
import {isMobile} from "../../../libs/uaParser";
import {UnauthorizedPage} from "../../../components/features/myPage/dashboardPage/UnathorizedPage";

const Dashboard: NextPage<NextPageProps> = ({isMobile}) => {
  const userData = useAppSelector(selectUserData)

  if (! userData) {
    return (
      <MainLayout title={'Dashboard'} description={'Dashboard'} isMobile={isMobile} hideHeader>
        <UnauthorizedPage isMobile={isMobile}/>
      </MainLayout>
    )
  }


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
