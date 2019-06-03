export default class Item {
  private _name: string;
  private _code: string;
  private _price: number;
  private _quantity: number;

  constructor(name: string, code: string, price: number, quantity: number = 0) {
    this._code = code;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  get code(): string {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value) {
    this._quantity = value;
  }
}
