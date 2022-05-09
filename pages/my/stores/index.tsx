import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";
import Link from "next/link";

import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";
import StoreCard from "../../../components/UI/Cards/StoreCard/StoreCard";

const Stores: NextPage<NextPageProps> = ({isMobile}) => {
  const title = 'Мои магазины';

  return (
    <MyPageLayout title={title} description={'store'} isMobile={isMobile}>

      {/* Магазины */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl">{title}</h2>

          <Link href="/my/stores/create/">
            <a>
              <button className="btn btn-primary btn-xs md:btn-sm gap-2 normal-case">
                Создать магазин
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </button>
            </a>
          </Link>
        </div>

        <div className="divider my-0"/>

        <div className="flex gap-4 flex-wrap">
          {[1,2,3,4,5].map((item) => <StoreCard store={item} key={item}/>)}
        </div>
      </div>

    </MyPageLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Stores;
