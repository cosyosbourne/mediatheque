import Product from "./product.model";

export default interface Album extends Product {
  artiste: string;
}