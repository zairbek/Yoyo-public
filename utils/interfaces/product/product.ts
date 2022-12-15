import {ProductProperty} from "./productProperty";
import {ProductImage} from "./productImage";
import {ProductOwner} from "./productOwner";

export interface Product {
  id: number,
  slug: string,
  title: string,
  description: string,
  properties: Array<ProductProperty>
  price: string,
  address: string,
  dateUpdated: string,
  images: Array<ProductImage>,
  owner: ProductOwner,
}
