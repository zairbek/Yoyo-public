import {ProductProperty} from "./productProperty";
import {ProductImage} from "./productImage";
import {ProductOwner} from "./productOwner";
import {ProductPrices} from "./productPrice";

export interface Product {
  id: number,
  slug: string,
  title: string,
  description: string,
  properties: Array<ProductProperty>
  prices: ProductPrices,
  address: string,
  dateUpdated: string,
  images: Array<ProductImage>,
  rating: number,
  owner: ProductOwner,
}
