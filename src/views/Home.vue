<template>
  <div class="home">
    <div class="row d-flex justify-content-center">
      <Item v-for="(item, index) in items" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemComponent from "@/components/Item.vue";
import Item from "@/models/Item";

@Component({
  components: {
    Item: ItemComponent
  }
})
export default class Home extends Vue {
  items: Item[] = [
    new Item("아이템1", "code0001", 1000),
    new Item("아이템2", "code0002", 2000),
    new Item("아이템3", "code0003", 1500),
    new Item("아이템4", "code0004", 2500),
    new Item("아이템5", "code0005", 500),
    new Item("아이템6", "code0006", 5000)
  ];
}
</script>
<style lang="scss" scoped>
.home {
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
}
</style>
