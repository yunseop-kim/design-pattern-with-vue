<template>
  <div>
    <h3>이미지</h3>
    <img v-for="(image, index) in images" :key="index" :src="image.path">
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Image from "../proxy/Image";
import RealImage from "../proxy/RealImage";
import Component from "vue-class-component";
import faker from "faker";

@Component
export default class extends Vue {
  private images: Image[] = [
    new RealImage(faker.image.image()),
    new RealImage(faker.image.image()),
    new RealImage(faker.image.image()),
    new RealImage(faker.image.image()),
    new RealImage(faker.image.image())
  ];
}
</script>
