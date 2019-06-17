<template>
  <div>
    <h1>커피집</h1>
    <span>가격: {{total}}</span>
    <div>
      <button @click="addOption('shot')">샷 추가</button>
      <button @click="addOption('milk')">우유 추가</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import IBeverage from "../decorator/abstract/IBeverage";
import Base from "../decorator/concrete/Base";
import Milk from "../decorator/concrete/Milk";
import Espresso from "../decorator/concrete/Espresso";

@Component
export default class CoffeeView extends Vue {
  private beverage: IBeverage = new Base();

  private addOption(option: string) {
    switch (option) {
      case "shot":
        this.beverage = new Espresso(this.beverage);
        break;

      case "milk":
        this.beverage = new Milk(this.beverage);
        break;

      default:
        break;
    }
  }

  get total(): number {
    return this.beverage.getTotalPrice();
  }
}
</script>
