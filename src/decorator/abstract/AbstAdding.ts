import IBeverage from "./IBeverage";

export default abstract class AbstAdding implements IBeverage {
  private base: IBeverage;

  constructor(base: IBeverage) {
    this.base = base;
  }

  public getTotalPrice(): number {
    return this.base.getTotalPrice();
  }

  protected getBase(): IBeverage {
    return this.base;
  }
}
