export namespace PriceCalc {
  export function totalPrice(cost: number, tax: number, discount: number = 0) {
    return (cost + tax - discount);
  }
}