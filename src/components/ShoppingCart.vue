<template>
  <div class="cart">
    <h1>쇼핑카트</h1>
    <Item v-for="(item, index) of cart.items" :key="index" :item="item" type="cart"/>
    <button class="btn btn-outline-dark" @click="pay('credit')">신용카드로 결제</button>
    <button class="btn btn-outline-dark" @click="pay('paypal')">Paypal 결제</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemComponent from "./Item.vue";
import Item from "@/models/Item";
import Cart from "@/models/Cart";
import { PaymentStrategy } from "@/strategy/PaymentStrategy";
import { CreditCardStrategy } from "@/strategy/CreditCardStrategy";
import { PaypalStrategy } from "@/strategy/PaypalStrategy";

@Component({
  components: {
    Item: ItemComponent
  }
})
export default class ShoppingCartComponent extends Vue {
  private cart: Cart = Cart.Instance;

  constructor() {
    super();
  }

  public removeItem(item: Item): void {
    this.cart.removeItem(item);
  }

  public calculateTotal(): number {
    return this.cart.calculateTotal();
  }

  public pay(paymentMethod: string): void {
    const amount: number = this.calculateTotal();
    let strategy: PaymentStrategy;
    switch (paymentMethod) {
      case "credit":
        strategy = new CreditCardStrategy();
        this.cart.pay(strategy);
        break;

      case "paypal":
        strategy = new PaypalStrategy();
        this.cart.pay(strategy);
        break;

      default:
        break;
    }
  }
}
</script>