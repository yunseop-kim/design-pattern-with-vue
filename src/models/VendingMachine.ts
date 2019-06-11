import State from "@/state/State";
import NoCoinState from "@/state/NoCoinState";
import Item from "@/models/Item";

export default class VendingMachine {
  private state: State;
  public coin: number = 0;
  private selected!: Item;
  public list: Item[];

  constructor() {
    this.state = new NoCoinState();
    this.list = [
      new Item("음료수1", "id-001", 500, 1),
      new Item("음료수2", "id-002", 700, 1),
      new Item("음료수3", "id-003", 1200, 1),
      new Item("음료수4", "id-004", 1500, 1),
      new Item("음료수5", "id-005", 500, 1)
    ];
  }

  public insertCoin(coin: number): void {
    this.state.increaseCoin(coin, this);
  }

  public select(product: Item): void {
    this.state.select(product, this);
  }

  public changeState(newState: State): void {
    console.log(`상태 변경: ${newState.name}`);
    this.state = newState;
  }

  public provideProduct(product: Item): void {
    this.selected = product;
    this.selected.quantity--;
    window.alert(`${product.name}을 뽑았습니다.`);
  }

  public increaseCoin(coin: number): void {
    this.coin += coin;
  }

  public decreaseCoin(): void {
    this.coin -= this.selected.price;
  }

  public hasNoCoin(): boolean {
    return !this.list.some((item: Item) => item.price <= this.coin);
  }

  public isSelectable(item: Item): boolean {
    return item.quantity > 0 && item.price <= this.coin;
  }

  public returnCoin() {
    window.alert("제품이 매진입니다. 돈을 반환합니다.");
    this.coin = 0;
  }
}
