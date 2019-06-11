import State from "./State";
import VendingMachine from "@/models/VendingMachine";
import Item from "@/models/Item";

export default class SoldoutState implements State {
  public increaseCoin(coin: number, vm: VendingMachine): void {
    vm.returnCoin();
  }

  public select(product: Item, vm: VendingMachine): void {
    vm.returnCoin();
  }

  get name(): string {
    return "SoldoutState";
  }
}
