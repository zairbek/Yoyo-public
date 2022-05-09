import React, {useState} from 'react';
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
import {options} from "../../../components/UI/SortingPanel/SortingPanel";
import Popup from "../../../components/UI/Popups/Popup";

const CategoryElements: NextPage<NextPageProps> = ({
  isMobile
}) => {
  const [isOpen, togglePopup] = useState(false);

  return (
    <MainLayout title={'main'} description={'main'} isMobile={isMobile}>


      <div className={classNames(
        "flex flex-col mx-auto my-5 px-2",
        isMobile ? 'container mt-16' : 'lg:container min-w-[1024px]'
      )}>
        {/*BreadCrumbs*/}
        <BreadCrumbs/>

        {/*PageHeader*/}
        <PageHeader/>
      </div>

      {isMobile && (
        <>
          <div className="flex justify-between px-4 py-2 sticky top-12 z-20 bg-primary-content bg-white/60 backdrop-blur-2xl shadow-xl">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
            </button>
            <select className="select select-xs select-bordered">
              {options.map(option =>
                <option key={option.id} value={option.value}>{option.name}</option>
              )}
            </select>
            <button onClick={() => togglePopup(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
            </button>
          </div>

          <Popup.Content
            isOpen={isOpen}
            togglePopup={togglePopup}
          >
            <div className="w-full h-full overflow-y-auto bg-base-100 p-2">
              <div className="flex justify-between items-center">
                <div className="w-20 h-5"/>
                <p className="text-sm font-bold">Фильты</p>
                <button className="btn btn-sm btn-link btn-ghost normal-case" onClick={() => togglePopup(false)}>Отменить</button>
              </div>

              <MainFilter/>

            </div>
          </Popup.Content>
        </>
      )}


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
