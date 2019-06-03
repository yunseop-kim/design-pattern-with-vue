import Item from "./Item";
import { PaymentStrategy } from "../strategy/PaymentStrategy";

export default class Cart {
  private _items!: Item[];

  private static _instance: Cart;

  constructor() {
    this._items = new Array();
  }

  public static get Instance() {
    return this._instance || (this._instance = new Cart());
  }

  public addItem(item: Item): void {
    const i = this._items.findIndex(element => element.code === item.code);
    if (i > -1) {
      this._items[i].quantity = this._items[i].quantity + 1;
      return;
    }
    item.quantity = 1;
    this._items.push(item);
  }

  public removeItem(item: Item): void {
    this._items = this._items.filter(element => element.code !== item.code);
  }

  public setQuantity(item: Item, quantity: number): void {
    const i = this._items.findIndex(element => element.code === item.code);
    if (quantity < 0) {
      quantity = 0;
    }

    if (i > -1) {
      this._items[i].quantity = quantity;
      return;
    }
  }

  public calculateTotal(): number {
    return this._items
      .map(item => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  public pay(paymentMethod: PaymentStrategy): void {
    const amount: number = this.calculateTotal();
    paymentMethod.pay(amount);
  }

  get items(): Item[] {
    return this._items;
  }
}
