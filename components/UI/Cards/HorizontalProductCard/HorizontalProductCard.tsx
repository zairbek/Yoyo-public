import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Mousewheel} from 'swiper'

import FavoriteButton from "../../Favorite/FavoriteButton/FavoriteButton";
import Rating from "../../Rating/Rating/Rating";

import 'swiper/css';
import "swiper/css/pagination";

const HorizontalProductCard = ({data}) => {
  return (
    <div className="flex gap-x-8 bg-white shadow-md rounded-2xl p-4 mb-4 hover:shadow hover:bg-white/60 hover:backdrop-blur-2xl">
      {/*image*/}
      <div className="w-56">
        <div className="flex items-center h-56 relative rounded-2xl bg-gray-100">

          <Swiper
            className="w-full h-full"
            pagination={true}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {data.images.map((item, key) =>
              <SwiperSlide className="flex justify-center" key={key}>
                <img className="w-[100%] h-[100%] object-contain" src={item.src} alt=""/>
              </SwiperSlide>
            )}
          </Swiper>

          <div className="absolute -top-0 -left-0 z-10">
            <FavoriteButton active={false}/>
          </div>
        </div>
      </div>

      {/*info*/}
      <div className="flex-1 py-2">

        <div className="pb-1">
          <a
            href="/"
            className="text-lg font-bold hover:text-blue-500"
          >
            {data.title}
          </a>
        </div>

        <div className="pb-1">
          <p className="font-bold">{data.price}</p>
        </div>

        <div className="pb-1">
          <p className="text-gray-500">
            {data.description}
          </p>
        </div>

        <div className="pb-1">
          <p className="text-gray-700">
            {data.address}
          </p>
        </div>

        <div className="pb-1">
          <p className="text-gray-700">
            {data.date_updated}
          </p>
        </div>
      </div>

      {/*salesman*/}
      <div className="flex flex-col gap-y-1 w-40 py-2 pr-2">
        <div className="truncate">
          <a href="/">{data.owner.full_name}</a>
        </div>
        <div>
          <p className="pb-1 flex items-center">
            {data.owner.rating}&nbsp;<Rating rating={data.owner.rating}/>
          </p>
        </div>
        <div>
          <button className="btn btn-outline btn-sm btn-primary btn-block normal-case text-x">Показать&nbsp;телефон</button>
        </div>
        <div>
          <button className="btn btn-outline btn-sm btn-primary btn-block normal-case text-x">Написать письмо</button>
        </div>
      </div>

    </div>
  );
};

export default HorizontalProductCard;
