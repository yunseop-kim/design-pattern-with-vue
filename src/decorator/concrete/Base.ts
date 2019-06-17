import IBeverage from "../abstract/IBeverage";

export default class Base implements IBeverage {
  public getTotalPrice(): number {
    return 0;
  }
}
