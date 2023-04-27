import Product from "./product.model";

export default interface Film extends Product {
  real: string;
  synopsis: string;
}