import React from 'react';
import cx from "classnames";

import {Box} from "../../../../shared/Box";
import {SliderPhoto} from "../SliderPhoto";
import Reviews from "../Reviews/Reviews";
import {Directions} from "../../../../shared/Box/Box";
import {BuyAction} from "../BuyAction";
import {ProductFeaturesShort, ProductFeaturesFull} from "../ProductFeatures";

interface ProductInfoProps {
  product: object;
  isMobile?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
 isMobile
}) => {
  return (
    <>
      <Box isMobile={isMobile}>

        <div className={cx(
          "basis-5/12",
          !isMobile && 'w-32'
        )}>
          <SliderPhoto images={product.images}/>
        </div>

        <div className={cx(
          "basis-4/12",
          isMobile && 'order-last'
        )}>
          <ProductFeaturesShort features={product.properties}/>
        </div>

        <div className="basis-3/12">
          <BuyAction product={product}/>
        </div>
      </Box>

      <Box isMobile={isMobile}>

        <div className={cx(
          !isMobile && "basis-9/12"
        )}>

          <div className="mb-10">
            <h2 className="text-xl font-bold pb-6">Описание</h2>
            <p className="text-sm">{product.description}</p>
          </div>

          <div className="mb-10">
            <h4 className="font-bold pb-6">Комплектация</h4>
            <p className="text-sm">{product.description}</p>
          </div>

          <div className="mb-10">
            <ProductFeaturesFull isMobile={isMobile} features={product.properties}/>
          </div>

        </div>
      </Box>

      <Box direction={Directions.Col} isMobile={isMobile}>
        <Reviews reviews={[{description: product.description}]}/>
      </Box>
    </>
  );
};

export default ProductInfo;
