import { Product } from './product-interface';

export interface CartProduct extends Product {
  quantity: number;
}

export interface Cart {
  products: CartProduct[];
}
