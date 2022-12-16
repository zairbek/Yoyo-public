import MainLayout from "../components/layouts/MainLayout/MainLayout";
import {GetServerSidePropsContext} from "next";
import {isMobile} from "../libs/uaParser";
import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import TopVerticalCatalogs from "../components/features/indexPage/catalogs/TopVerticalCatalogs/TopVerticalCatalogs";
import ProductDiscounts from "../components/features/indexPage/discounts/ProductDiscounts/ProductDiscounts";
import {data as discountProducts} from "../mocks/products.mock";

export interface NextPageProps {
  isMobile: boolean;
}

const Home: NextPageWithLayout<NextPageProps> = ({
  isMobile,
}) => {
  return (
    <>
      <TopVerticalCatalogs isMobile={isMobile}/>

      <ProductDiscounts discountProducts={discountProducts} isMobile={isMobile}/>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

Home.getLayout = function getLayout (page: ReactElement) {
  return (
    <MainLayout title={'Главная страница. Yo-yo'} description={'main'} isMobile={page.props.isMobile}>{page}</MainLayout>
  )
}

export default Home
