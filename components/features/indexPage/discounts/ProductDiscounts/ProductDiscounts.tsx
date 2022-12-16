import React from 'react';
import {Section, SectionDirections} from "../../../../shared/Section";
import ProductCardVertically from "../../../common/ProductCardVertically/ProductCardVertically";
import {Product} from "../../../../../utils/interfaces/product/product";
import {LengthArray} from "../../../../../utils/interfaces/common";

interface ProductDiscountsProps {
  discountProducts: LengthArray<Product, 6>
  isMobile?: boolean,
}

const ProductDiscounts: React.FC<ProductDiscountsProps> = ({
  discountProducts,
  isMobile
}) => {
  return (

    <Section isMobile={isMobile} direction={SectionDirections.Row} className="flex-wrap bg-white rounded-2xl">
      {discountProducts.map((product, key) => (
        <ProductCardVertically key={key} product={product} isMobile={isMobile}/>
      ))}
    </Section>
  );
};

export default ProductDiscounts;
