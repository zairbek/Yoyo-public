import React from "react";
import {ProductFeature} from "./ProductFeature";

interface ProductFeaturesShortProps {
  features: object[]
}

const ProductFeaturesShort: React.FC<ProductFeaturesShortProps> = ({
  features
}) => {
  return (
    <div className="py-4 text-sm">
      {features.map((property, key) => (
        <ProductFeature key={key} name={property.name} value={property.value}/>
      ))}

      <a href="" className="link link-hover link-primary">Перейти к описанию</a>
    </div>
  );
};

export {ProductFeaturesShort};
