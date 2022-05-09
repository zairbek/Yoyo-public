import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";
import Link from "next/link";

import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";

const Stores: NextPage<NextPageProps> = ({isMobile}) => {
  return (
    <MyPageLayout title={'store'} description={'store'} isMobile={isMobile}>

      {/* Магазины */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl">Магазины</h2>

          <Link href="/my/stores/create/">
            <a>
              <button className="btn btn-primary btn-sm gap-2 normal-case">
                Создать магазин
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </button>
            </a>
          </Link>
        </div>

        <div className="divider my-0"/>

        <div className="flex gap-4 flex-wrap">

          {[...Array(5).keys()].map((item) =>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" key={item}>
              <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Крассовки
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href="/my/stores/cross/detail/">
                    <a>
                      <button className="btn btn-sm btn-ghost normal-case">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                        Параметры
                      </button>
                    </a>
                  </Link>
                  <Link href="/my/stores/cross/">
                    <a><button className="btn btn-sm btn-primary normal-case">Посмотреть</button></a>
                  </Link>
                </div>
              </div>
            </div>
          )}
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
