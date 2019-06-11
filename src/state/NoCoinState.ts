import State from "./State";
import SelectableState from "./SelectableState";
import VendingMachine from "@/models/VendingMachine";
import Item from "@/models/Item";

export default class NoCoinState implements State {
  public increaseCoin(coin: number, vm: VendingMachine): void {
    vm.increaseCoin(coin);
    if (!vm.hasNoCoin()) {
      vm.changeState(new SelectableState());
    }
  }
  public select(product: Item, vm: VendingMachine): void {
    window.alert("동전을 넣어주세요!");
  }
  get name(): string {
    return "NoCoinState";
  }
}
