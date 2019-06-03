<template>
  <div class="cart">
    <div class="row d-flex justify-content-center">
      <ShoppingCart msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShoppingCartComponent from "@/components/ShoppingCart.vue"; // @ is an alias to /src

@Component({
  components: {
    ShoppingCart: ShoppingCartComponent
  }
})
export default class Cart extends Vue {}
</script>
