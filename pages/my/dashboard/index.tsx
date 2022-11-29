import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";

import {NextPageProps} from "../../index";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import Link from "next/link";
import MobileSignInIndex from "../../../components/Elements/Popups/SignInPopup/MobileIndex";
import {useAppSelector} from "../../../store/hooks";
import {selectUserData} from "../../../store/slices/auth";
import {isMobile} from "../../../libs/uaParser";
import {Section} from "../../../components/shared/Section";
import {Box} from "../../../components/shared/Box";
import {BoxSizes, Directions} from "../../../components/shared/Box/Box";
import {Menu, MenuItem, MenuTitle} from "../../../components/shared/Menu";
import {Sizes} from "../../../components/shared/Menu/Menu";
import Location from "../../../components/shared/Icon/Icons/Location";
import Currency from "../../../components/shared/Icon/Icons/Currency";
import Help from "../../../components/shared/Icon/Icons/Help";

const Dashboard: NextPage<NextPageProps> = ({isMobile}) => {
  const userData = useAppSelector(selectUserData)

  if (! userData) {
    return (
      <>
        <MainLayout
          title={'Dashboard'} description={'Dashboard'} isMobile={isMobile} hideHeader
        >


          <Section isMobile={isMobile} className="pb-20">

            <Box isMobile={isMobile} size={BoxSizes.compact}>
              <div className="flex flex-col px-6 py-8">

                <h2 className="text-bold text-2xl mb-2">Войдите или зарегистрируйтесь</h2>
                <p className="text-sm mb-2">Чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.</p>

                <div>
                  <MobileSignInIndex/>
                </div>
              </div>
            </Box>


            <Box isMobile={isMobile} size={BoxSizes.compact} direction={Directions.Col}>
              <Menu rounded size={Sizes.Compact}>
                <MenuTitle>Приложение</MenuTitle>
                <MenuItem icon={<Location/>}>Город</MenuItem>
                <MenuItem icon={<Currency/>}>Валюта</MenuItem>
                <MenuItem icon={<Help/>}>Помощь</MenuItem>
              </Menu>
            </Box>
          </Section>
        </MainLayout>
      </>
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
