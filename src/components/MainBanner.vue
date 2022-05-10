<template>
  <section class="banner-section">
    <div class="banner">
      <h1 class="banner-header">THAMES LIBRARY</h1>
      <p class="banner-text">What are you looking for?</p>
      <div class="banner-input">
        <input
          id="search-box"
          type="search"
          placeholder="Harry Potter"
          required
        />
        <button class="btn btn-search">
          <search-icon fillColor="#000000" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchIcon from "vue-material-design-icons/Magnify.vue";
</script>

<style scoped lang="scss">
.banner-section {
  background-image: url(@/assets/img/banner.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 40rem;
}

.banner {
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.banner-header {
  font-weight: 600;
  font-size: 4rem;
  margin-top: 16rem;
}

.banner-text {
  font-size: 2rem;
}

.banner-input {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

#search-box {
  font-size: 2rem;
  padding: 0.3rem;
  color: #ed1b3b;
  border: 0.2rem solid #b5b8b9;
  border-radius: 0.5rem;
  width: 30rem;
}

input::placeholder {
  color: #b5b8b9;
}

#search-box:focus {
  outline: none;
  border: 0.2rem solid #ed1b3b;
}

.btn-search {
  background-color: #ed1b3b;
  border-color: #ed1b3b;
  border-radius: 0.5rem;
}

.material-icons.search-icon {
  font-size: 2.4rem;
  padding: 0.3rem;
  color: #fff;
}
</style>
