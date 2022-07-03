import type {NextPage} from 'next'

import MainLayout from "../components/layouts/MainLayout/MainLayout";
import {GetServerSidePropsContext} from "next";
import {isMobile} from "../libs/uaParser";

export interface NextPageProps {
  isMobile: boolean;
}

const Home: NextPage<NextPageProps> = ({isMobile}) => {
  return (
    <MainLayout title={'main'} description={'main'} isMobile={isMobile}>


    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Home
