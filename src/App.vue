<template>
  <NavBar />
  <MainBanner />
  <ScrollingBooks :bookTitles="test" :itemsShown="7" class="test" />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import MainBanner from "./components/MainBanner.vue";
import ScrollingBooks from "./components/ScrollingBooks.vue";

const test = [
  "jacket(1)",
  "jacket(2)",
  "jacket(3)",
  "jacket(4)",
  "jacket(5)",
  "jacket(6)",
  "jacket(7)",
  "jacket(8)",
  "jacket(9)",
  "jacket(10)",
  "jacket(11)",
  "jacket(12)",
  "jacket(13)",
  "jacket(14)",
  "jacket(15)",
  "jacket(16)",
  "jacket(17)",
  "jacket(18)",
  "jacket(19)",
  "jacket(20)",
  "jacket(21)",
];
</script>

<style scoped lang="scss">
.test {
  margin: 7rem;
}
</style>
