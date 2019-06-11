<template>
  <div class="vending-machine">
    <h2>자판기</h2>
    <div class="coin">
      <span>투입금액: {{vm.coin}}</span>
      <button @click="insertCoin(100)">100원</button>
      <button @click="insertCoin(500)">500원</button>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in vm.list" :key="index">
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
import { Component, Watch } from "vue-property-decorator";
import Item from "@/models/Item";
import VendingMachine from "@/models/VendingMachine";
import SoldoutState from "../state/SoldoutState";

@Component
export default class VendingMachineView extends Vue {
  private vm: VendingMachine = new VendingMachine();

  @Watch("vm.list", { deep: true })
  onListChanged(val: Item[], oldVal: Item[]) {
    const soldout: boolean = val.every((item: Item) => item.quantity === 0);
    if (soldout) {
      this.vm.changeState(new SoldoutState());
      this.vm.returnCoin();
    }
  }

  private select(item: Item) {
    this.vm.select(item);
  }

  private isSelectable(item: Item) {
    return this.vm.isSelectable(item);
  }

  public insertCoin(coin: number): void {
    this.vm.insertCoin(coin);
  }
}
</script>
