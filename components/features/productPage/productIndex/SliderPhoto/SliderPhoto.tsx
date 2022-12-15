import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination, Navigation} from "swiper";
import {ProductImage} from "../../../../../utils/interfaces/product/productImage";
import Image from "next/image";

interface SliderPhotoProps {
  images: Array<ProductImage>
}

const SliderPhoto: React.FC<SliderPhotoProps> = ({
  images,
}) => {
  return (
    <div className="flex items-center h-96 relative rounded-xl bg-gray-100">
      <Swiper
        className="w-full h-full"
        pagination={true}
        mousewheel={true}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        onClick={() => console.log('clicked')}
      >
        {images.map((item, key) =>
          <SwiperSlide className="flex justify-center" key={key}>
            <Image className="w-[100%] h-[100%] object-contain" layout='fill' src={item.src} alt=""/>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export {SliderPhoto};
