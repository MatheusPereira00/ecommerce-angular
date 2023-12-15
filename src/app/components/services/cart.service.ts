import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';
import { CartProduct } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productCarts: CartProduct[] = [];

  //
  constructor() {
    const data = localStorage.getItem('cart');
    if (data) {
      this.productCarts = JSON.parse(data);
    }
  }

  public addToCart(product: Product): void {
    //verificando se já existe o id no arrey do carrinho
    const checkList = this.productCarts.find(prod => prod.id === product.id);
    if (!checkList) {
      this.productCarts.push({
        ...product,
        quantity: 1,
      });
    } else {
      const index = this.productCarts.findIndex(prod => prod.id === product.id);
      this.productCarts[index].quantity++;
    }
    //this.productCarts.push(product);
    localStorage.setItem('cart', JSON.stringify(this.productCarts));
  }

  // Removendo o produto adicionado no carrinho
  public removeProduct(product: Product): void {
    const checkList = this.productCarts.find(prod => prod.id === product.id);
    if (checkList) {
      this.productCarts.shift();
      localStorage.setItem('cart', JSON.stringify(this.productCarts));
    }
  }

  //aumenatar quantidade de produtos
  public increase(product: CartProduct): void {
    const checkList = this.productCarts.find(prod => prod.id === product.id);
    if (checkList) {
      product.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.productCarts));
    }
  }

  //remover quantidade de produtos
  public decrease(product: CartProduct): void {
    const checkList = this.productCarts.find(prod => prod.id === product.id);
    if (checkList && checkList.quantity > 1) {
      product.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.productCarts));
    }
  }

  public checkLength(): number {
    const length = this.productCarts.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return length;
  }

  public total(): number {
    const TOTAL_PRICE = this.productCarts.reduce((price, product) => {
      return (price += product.unitPrice * product.quantity);
    }, 0);

    return TOTAL_PRICE;
  }

  // pegando intes do carts
  public getItems(): any {
    return this.productCarts;
  }

  // public clearCart() {
  //   this.productCarts = [];
  //   return this.productCarts;
  // }

  //Obter e retornar os dados
  // getData(key: string): any {
  //   return JSON.parse(localStorage.getItem(key));
  // }

  // //salvar os objetos
  // setData(key: string, data: any) {
  //   localStorage.setItem(key, JSON.stringify(data));
  // }

  // Armazenar dados no LocalStorage e deixar o objeto como string
  public saveData(): void {
    localStorage.setItem('cart', JSON.stringify(this.productCarts));
  }
}
