import State from "./State";
import VendingMachine from "@/models/VendingMachine";
import Item from "@/models/Item";
import NoCoinState from "./NoCoinState";

export default class SelectableState implements State {
  increaseCoin(coin: number, vm: VendingMachine): void {
    vm.increaseCoin(coin);
  }
  select(product: Item, vm: VendingMachine): void {
    vm.provideProduct(product);
    vm.decreaseCoin();
    if (vm.hasNoCoin()) {
      vm.changeState(new NoCoinState());
    }
  }
  get name(): string {
    return "SelectableState";
  }
}
