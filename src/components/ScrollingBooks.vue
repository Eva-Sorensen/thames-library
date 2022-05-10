<template>
  <div class="carousel">
    <carousel
      :items-to-show="props.itemsShown"
      :autoplay="2000"
      :wrap-around="true"
    >
      <slide v-for="bookTitle in bookTitles" :key="bookTitle">
        <div class="carousel__item">
          <img
            :src="`/books/${bookTitle}.jpg`"
            alt="not-found"
            class="carousel_img"
          />
        </div>
      </slide>

      <template #addons>
        <navigation class="carousel__navigation" />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import { defineProps } from "vue";
interface Props {
  bookTitles: string[];
  itemsShown: number;
}

const props = defineProps<Props>();
</script>

<style scoped lang="css">
.carousel_img {
  width: 15rem;
}

Navigation.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: red;
  --vc-nav-background-color: red;
}
</style>
