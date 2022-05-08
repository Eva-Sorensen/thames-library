<template>
  <NavBar />
  <MainBanner />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import MainBanner from "./components/MainBanner.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    MainBanner,
  },
});
</script>

<style lang="scss"></style>
