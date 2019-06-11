import VendingMachine from "@/models/VendingMachine";
import Item from "@/models/Item";

export default interface State {
  increaseCoin(coin: number, vm: VendingMachine): void;
  select(product: Item, vm: VendingMachine): void;
  name: string;
}
