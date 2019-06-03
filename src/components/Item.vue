<template>
  <div class="card mb-4 shadow-sm" style="width: 18rem;">
    <img
      class="card-img-top"
      src="https://q5v8e3s3.stackpathcdn.com/wp-content/uploads/2019/04/news-default-image-300x225.jpg"
      alt="image"
    >
    <div class="card-body">
      <div class="card-title">{{item.name}}</div>
      <div class="card-text">가격: {{item.price}}</div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button class="btn btn-outline-danger" v-if="isCart" @click="removeItem">제거</button>
          <button class="btn btn-outline-primary" v-if="!isCart" @click="addToCart">담기</button>
          <button class="btn btn-outline-dark" v-if="isCart" @click="minus">-</button>
          <button class="btn btn-outline-dark" v-if="isCart" @click="plus">+</button>
        </div>
        <small class="text-muted" v-if="isCart">수량: {{item.quantity}}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Item from "@/models/Item";
import Cart from "@/models/Cart";

@Component
export default class ItemComponent extends Vue {
  @Prop() private item!: Item;
  @Prop() private type!: string;
  private cart: Cart = Cart.Instance;

  private addToCart() {
    window.alert("물건을 담았습니다.");
    this.cart.addItem(this.item);
  }

  private removeItem() {
    if (window.confirm("정말 제거하시겠습니까?")) {
      this.cart.removeItem(this.item);
      return;
    }
  }

  private plus() {
    this.cart.setQuantity(this.item, this.item.quantity + 1);
  }

  private minus() {
    this.cart.setQuantity(this.item, this.item.quantity - 1);
  }

  get isCart(): boolean {
    return this.type === "cart";
  }
}
</script>