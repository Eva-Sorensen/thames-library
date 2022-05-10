<template>
  <div class="carousel">
    <button class="carousel_button left">
      <arrow-left-icon />
    </button>
    <div class="carousel_track_container">
      <ul class="carousel_track">
        <li
          v-for="(bookTitle, index) in props.bookTitles"
          :key="index"
          class="carousel_slide"
        >
          <img
            :src="`/books/${bookTitle}.jpg`"
            alt="not-found"
            :class="'carousel_img ' + index"
          />
        </li>
      </ul>
    </div>
    <button class="carousel_button right">
      <arrow-right-icon />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import ArrowRightIcon from "vue-material-design-icons/ChevronRight.vue";

import { defineProps } from "vue";
interface Props {
  bookTitles: string[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  margin: 0 auto;
}

.carousel_img {
  width: 15rem;
}

.carousel_track_container {
  position: relative;
  background: lightblue;
  padding: 1rem;
}

.carousel_track {
  padding: 0;
  margin: 0;
  list-style: none;
}

.carousel_button {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  background: transparent;
  cursor: pointer;
}

.right {
  margin-right: 3rem;
  margin-left: 1rem;
  right: 10%;
}
</style>
