import React from 'react';

import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import BreadCrumbs from "../../../components/Elements/BreadCrumbs/BreadCrumbs";
import PageHeader from "../../../components/Elements/PageHeader/PageHeader";
import HorizontalProductCard from "../../../components/UI/Cards/HorizontalProductCard/HorizontalProductCard";
import MainFilter from "../../../components/UI/Filters/MainFilter/MainFilter";

import offersData from "../../../mocks/HorizontalCardData.json";
import SortingPanel from "../../../components/UI/SortingPanel/SortingPanel";

const CategoryElements = () => {
  return (
    <MainLayout title={'main'} description={'main'}>


      <div className="lg:container min-w-[1024px] flex flex-col mx-auto my-5 px-2">
        {/*BreadCrumbs*/}
        <BreadCrumbs/>

        {/*PageHeader*/}
        <PageHeader/>
      </div>


      <div className="lg:container min-w-[1024px] flex flex-row items-start mx-auto my-2">
        <aside className="sticky top-20 basis-1/4 lg:basis-1/5 bg-white shadow-md mr-8 rounded-2xl overflow-hidden">
          <MainFilter/>
        </aside>

        <main className="flex-1">

          {/* Sort&View */}
          <SortingPanel/>

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

export default CategoryElements;
