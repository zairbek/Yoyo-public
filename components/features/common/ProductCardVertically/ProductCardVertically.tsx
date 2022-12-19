import React from 'react';
import {Box} from "../../../shared/Box";
import cx from "classnames";
import {BoxDirections, BoxSizes} from "../../../shared/Box/Box";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "../../../../utils/routes";
import {Product} from "../../../../utils/interfaces/product/product";
import {ProductPrices} from "../../../../utils/interfaces/product/productPrice";
import {Button} from "../../../shared/Button";
import {ButtonColors, ButtonSize} from "../../../shared/Button/Button";
import Rating, {RatingSize} from "../../../shared/Rating/Rating/Rating";

interface ProductCardVerticallyProps {
  product: Product,
  isMobile?: boolean,
}

const ProductCardVertically: React.FC<ProductCardVerticallyProps> = ({
  product,
  isMobile,
}) => {
  return (
    <Box
      shadow={false}
      invisible
      className={cx(
        "h-auto gap-2",
        isMobile ? 'w-1/3' : 'w-1/6'
      )}
      direction={BoxDirections.Col}
      size={BoxSizes.compact}
    >
      <Image src={product.images[0].src} width="100%" height="110" layout='responsive' className="rounded-xl" alt={product.title}/>

      <Rating rating={product.rating} size={RatingSize.md}/>

      <ProductPriceView prices={product.prices}/>

      <Link href={{
        pathname: Routes.product,
        query: {slug: product.slug}
      }}>
        <a className="hover:link link-primary text-base leading-5">{product.title}</a>
      </Link>

      <div>
      <Button color={ButtonColors.primary} size={ButtonSize.sm}>В корзину</Button>
      </div>
    </Box>
  );
};


interface ProductPriceProps {
  prices: ProductPrices,
}

const ProductPriceView: React.FC<ProductPriceProps> = ({
  prices
}) => {
  if (! prices.discount) {
    return (<p className="text-muted font-bold text-sm md:text-base">{prices.base.formatted}</p>)
  }

  return (<>
    <div className="flex items-center gap-x-2 flex-wrap">
      <p className="text-muted font-bold text-sm md:text-base">{prices.discount.formatted}</p>
      <p className="text-muted font-bold text-xs line-through decoration-pink-500">{prices.base.formatted}</p>
    </div>
  </>)
}
export default ProductCardVertically;
