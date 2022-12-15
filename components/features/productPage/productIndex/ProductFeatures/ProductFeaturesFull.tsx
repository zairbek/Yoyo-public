import React from "react";
import cx from "classnames";
import {ProductFeature} from "./ProductFeature";
import {ProductProperty} from "../../../../../utils/interfaces/product/productProperty";

interface ProductFeaturesFullProps {
  features: Array<ProductProperty>;
  isMobile?: boolean;
}

const ProductFeaturesFull: React.FC<ProductFeaturesFullProps> = ({
  features,
  isMobile,
}) => {
  return (
    <>
      <h2 className="text-xl font-bold pb-6">Характеристика</h2>

      <div className={cx(
        "mb-8 flex ",
        !isMobile ? 'gap-y-8 flex-wrap' : 'flex-col'
      )}>

        {[1, 2, 3, 4, 5].map(item => (
          <div key={item} className={cx(!isMobile && "basis-1/2")}>
            <h4 className="font-bold pb-2">Комплектация</h4>

            {features.map((property, key) => (
              <ProductFeature key={key} name={property.name} value={property.value}/>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export {ProductFeaturesFull};
