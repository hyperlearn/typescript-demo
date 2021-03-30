import { PriceCalc } from './priceCalc'


export class Product {
  name: string;
  price: number;
  tax: number;
  discount: number;

  constructor(name: string, price: number, tax: number, discount: number) {
    this.name = name;
    this.price = price;
    this.tax = tax;
    this.discount = discount
  }

  totalPrice(): number {
    return PriceCalc.totalPrice(this.price, this.tax, this.discount);
  } 
}