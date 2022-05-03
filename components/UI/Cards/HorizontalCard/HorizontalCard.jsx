import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper";

const HorizontalCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-md mb-4">
      <figure className="w-56 p-4">
        <Swiper
          className="w-full h-full bg-gray-100 rounded-2xl"
          pagination={true}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {/*{data.images.map((item, key) =>*/}
          <SwiperSlide className="flex justify-center" key="1">
            <img className="w-[100%] h-[100%] object-contain" src="https://api.lorem.space/image/movie?w=200&h=280" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center" key="1">
            <img className="w-[100%] h-[100%] object-contain" src="https://api.lorem.space/image/movie?w=200&h=250" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center" key="1">
            <img className="w-[100%] h-[100%] object-contain" src="https://api.lorem.space/image/movie?w=260&h=200" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center" key="1">
            <img className="w-[100%] h-[100%] object-contain" src="https://api.lorem.space/image/movie?w=230&h=200" alt=""/>
          </SwiperSlide>
          {/*)}*/}
        </Swiper>
      </figure>



      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
