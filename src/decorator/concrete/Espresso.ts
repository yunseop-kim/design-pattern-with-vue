import AbstAdding from "../abstract/AbstAdding";
import IBeverage from "../abstract/IBeverage";

export default class Espresso extends AbstAdding {
  protected espressoCount: number = 0;

  constructor(base: IBeverage) {
    super(base);
  }

  public getTotalPrice(): number {
    return super.getTotalPrice() + this.getAddPrice();
  }

  /**
   * 에스프레소 추가가격
   * @return
   */
  private getAddPrice(): number {
    this.espressoCount += 1;
    let addPrice: number = 100;

    if (this.espressoCount > 1) {
      addPrice = 70;
    }
    return addPrice;
  }
}
