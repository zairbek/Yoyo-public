import React, {useState, useEffect} from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import classNames from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination, Navigation} from "swiper";

import {NextPageProps} from "../../index";
import {isMobile} from "../../../libs/uaParser";
import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import BreadCrumbs from "../../../components/Elements/BreadCrumbs/BreadCrumbs";

import datas from '../../../mocks/HorizontalCardData.json';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductProperty from "../../../components/UI/Product/ProductProperty/ProductProperty";

const ProductIndex: NextPage<NextPageProps> = ({
  isMobile
}) => {
  const data = datas[0]
  const title = '';

  return (
    <MainLayout isMobile={isMobile} title={data.title} description={data.description} showBackButton>
      <div className={classNames(
        "flex flex-col mx-auto my-5 px-2",
        isMobile ? 'container mt-16' : 'lg:container min-w-[1024px]'
      )}>
        {/*BreadCrumbs*/}
        <BreadCrumbs/>

        {/*PageHeader*/}
        {/*{!isMobile && <PageHeader/>}*/}
      </div>

      <div className={classNames(
        "flex flex-col mx-auto px-2",
        isMobile ? 'container mb-16' : 'lg:container min-w-[1024px]'
      )}>

        <section className={classNames(
          "bg-white shadow-md rounded-2xl p-4 mb-4",
          'flex gap-4',
          isMobile && 'flex-col'
        )}>

          <div className={classNames(
            "basis-5/12",
            !isMobile && 'w-32'
          )}>
            <div className="flex items-center h-96 relative rounded-xl bg-gray-100">
              <Swiper
                className="w-full h-full"
                pagination={true}
                mousewheel={true}
                navigation={true}
                modules={[Pagination, Mousewheel, Navigation]}
                onClick={() => console.log('clicked')}
              >
                {data.images.map((item, key) =>
                  <SwiperSlide className="flex justify-center" key={key}>
                    <img className="w-[100%] h-[100%] object-contain" src={item.src} alt=""/>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>

          <div className={classNames(
            "basis-4/12",
            isMobile && 'order-last'
          )}>
            <div className="py-4 text-sm">
              {data.properties.map((property, key) => <ProductProperty key={key} name={property.name} value={property.value}/>)}
              <a href="" className="link link-hover link-primary">Перейти к описанию</a>
            </div>
          </div>

          <div className="basis-3/12">


            <div className="shadow-lg rounded-2xl w-full bg-white p-4">
              <p className="text-gray-800 text-xl font-medium mb-4">{data.title}</p>
              <p className="text-gray-900 text-3xl font-bold">{data.price}</p>
              <p className="text-gray-600 text-xs mt-4">For most businesses that want to optimize web queries.</p>
              <div className="divider"/>
              <div className="flex gap-x-2">
                <button type="button" className="btn btn-primary grow">В корзину</button>
                <button type="button" className="btn btn-outline hover:btn-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
              </div>
            </div>


          </div>
        </section>


        {/* Характеристики */}
        <section className={classNames(
          "bg-white shadow-md rounded-2xl p-4 mb-4",
          'flex gap-4',
        )}>

          <div className={classNames(
            !isMobile && "basis-9/12"
          )}>

            <div className="mb-10">
              <h2 className="text-xl font-bold pb-6">Описание</h2>
              <p className="text-sm">{data.description}</p>
            </div>

            <div className="mb-10">
              <h4 className="font-bold pb-6">Комплектация</h4>
              <p className="text-sm">{data.description}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold pb-6">Характеристика</h2>


              <div className={classNames(
                "mb-8 flex ",
                !isMobile ? 'gap-y-8 flex-wrap' : 'flex-col'
              )}>

                {[1,2,3,4,5].map(item => (
                  <div key={item} className={classNames(!isMobile && "basis-1/2")}>
                    <h4 className="font-bold pb-2">Комплектация</h4>
                    {data.properties.map((property, key) => <ProductProperty key={key} name={property.name} value={property.value}/>)}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>


        {/* Отзывы */}
        <section className={classNames(
          "bg-white shadow-md rounded-2xl p-4 mb-4",
          'flex gap-4',
        )}>

          <div className={classNames(
            !isMobile && "basis-9/12"
          )}>

            <div className="mb-10">
              <h2 className="text-xl font-bold pb-6">Отзывы о товаре</h2>
              <p className="text-sm">{data.description}</p>
            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
};


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {
      isMobile: isMobile(ctx.req),
    }
  }
}

export default ProductIndex;
