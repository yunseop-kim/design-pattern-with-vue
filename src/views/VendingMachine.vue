<template>
  <div class="vending-machine">
    <h2>자판기</h2>
    <div class="coin">
      <span>상태: {{currentState}} / 투입금액: {{coin}}</span>
      <button @click="insertCoin(100)">100원</button>
      <button @click="insertCoin(500)">500원</button>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          {{item.name}} / {{item.price}} / {{item.quantity}}
          <button
            @click="select(item)"
            :disabled="!isSelectable(item)"
          >선택</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Watch, Component } from "vue-property-decorator";
interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

enum State {
  NOCOIN,
  SELECTABLE,
  SOLDOUT
}
@Component
export default class VendingMachineView extends Vue {
  private coin: number = 0;
  private state: State = State.NOCOIN;
  private selected!: Item;
  private list: Item[] = [
    { id: "id-001", name: "음료수1", price: 500, quantity: 1 },
    { id: "id-002", name: "음료수2", price: 700, quantity: 1 },
    { id: "id-003", name: "음료수3", price: 1200, quantity: 1 },
    { id: "id-004", name: "음료수4", price: 1500, quantity: 1 },
    { id: "id-005", name: "음료수5", price: 500, quantity: 1 }
  ];

  @Watch("list", { deep: true })
  onListChanged(val: Item[], oldVal: Item[]) {
    const soldout: boolean = val.every((item: Item) => item.quantity === 0);
    if (soldout) {
      this.state = State.SOLDOUT;
      this.returnCoin();
    }
  }

  private select(item: Item) {
    switch (this.state) {
      case State.NOCOIN:
        window.alert("돈이 없네요!");
        break;

      case State.SELECTABLE:
        this.provideProduct(item);
        this.decreaseCoin();
        if (this.hasNoCoin()) {
          this.state = State.NOCOIN;
        }
        break;

      case State.SOLDOUT:
        this.returnCoin();
        break;

      default:
        break;
    }
  }
  private isSelectable(item: Item) {
    return item.quantity > 0 && item.price <= this.coin;
  }

  public insertCoin(coin: number): void {
    switch (this.state) {
      case State.NOCOIN:
        this.increaseCoin(coin);
        break;

      case State.SELECTABLE:
        this.increaseCoin(coin);
        break;

      case State.SOLDOUT:
        window.alert("모든 물건이 팔렸습니다!");
        this.returnCoin();
        break;

      default:
        break;
    }
  }

  private provideProduct(item: Item) {
    this.selected = item;
    this.selected.quantity--;
    window.alert(`${item.name}을 뽑았습니다.`);
  }

  private decreaseCoin() {
    this.coin -= this.selected.price;
  }

  private hasNoCoin(): boolean {
    return !this.list.some((item: Item) => item.price <= this.coin);
  }

  private increaseCoin(coin: number) {
    this.coin += coin;
    if (!this.hasNoCoin()) {
      this.state = State.SELECTABLE;
    }
  }

  private returnCoin() {
    if (this.coin > 0) {
      window.alert(`동전 ${this.coin}을 반환합니다!`);
      this.coin = 0;
    }
  }

  get selectableList(): Item[] {
    return this.list
      .filter((item: Item) => item.price <= this.coin)
      .filter((item: Item) => item.quantity > 0);
  }

  get currentState(): any {
    return State[this.state];
  }
}
</script>
