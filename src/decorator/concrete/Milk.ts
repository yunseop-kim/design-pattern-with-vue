import AbstAdding from "../abstract/AbstAdding";
import IBeverage from "../abstract/IBeverage";

export default class Milk extends AbstAdding {
  constructor(meterial: IBeverage) {
    super(meterial);
  }

  public getTotalPrice(): number {
    return super.getTotalPrice() + 50;
  }
}
