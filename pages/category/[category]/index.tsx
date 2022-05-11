import React from 'react';
import classNames from "classnames";
import {GetServerSidePropsContext, NextPage} from "next";

import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import BreadCrumbs from "../../../components/Elements/BreadCrumbs/BreadCrumbs";
import PageHeader from "../../../components/Elements/PageHeader/PageHeader";
import HorizontalProductCard from "../../../components/UI/Cards/HorizontalProductCard/HorizontalProductCard";
import MainFilter from "../../../components/UI/Filters/MainFilter/MainFilter";
import offersData from "../../../mocks/HorizontalCardData.json";
import SortingPanel from "../../../components/UI/SortingPanel/SortingPanel";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";
import CategoryCards from "../../../components/UI/Cards/CategoryCards/CategoryCards";
import MobileMainFilter from "../../../components/UI/Filters/MobileMainFilter/MobileMainFilter";

const CategoryElements: NextPage<NextPageProps> = ({
  isMobile
}) => {

  return (
    <MainLayout title={'main'} description={'main'} isMobile={isMobile} showBackButton>


      <div className={classNames(
        "flex flex-col mx-auto my-5 px-2",
        isMobile ? 'container mt-16' : 'lg:container min-w-[1024px]'
      )}>
        {/*BreadCrumbs*/}
        <BreadCrumbs/>

        {/*PageHeader*/}
        <PageHeader/>
      </div>


      <div className={classNames(
        "container mx-auto mb-6",
        isMobile ? 'container' : 'lg:container min-w-[1024px]'
      )}>
        <CategoryCards/>
      </div>


      {isMobile && <MobileMainFilter/>}


      <div className={classNames(
        "flex flex-row items-start mx-auto my-2",
        isMobile ? 'container' : 'lg:container min-w-[1024px]'
      )}>

        {!isMobile && (
          <aside className="sticky top-20 basis-1/4 lg:basis-1/5 bg-white shadow-md mr-8 rounded-2xl overflow-hidden">
            <div
              className="overflow-hidden border border-gray-200 rounded"
            >
              <MainFilter/>
            </div>
          </aside>
        )}

        <main className="flex-1">

          {/* Sort&View */}
          {!isMobile && (
            <SortingPanel/>
          )}

          {/*Cards*/}
          <div className="flex flex-col">

            {/*Cards*/}
            {offersData.map((item, key) =>
              <HorizontalProductCard data={item} key={key}/>
            )}

          </div>

        </main>
      </div>


    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default CategoryElements;
