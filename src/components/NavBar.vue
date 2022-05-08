<template>
  <header class="header">
    <a href="#">
      <img
        src="@/assets/img/thamesLibraryLogo.png"
        alt="Thames Library Logo"
        class="logo"
      />
    </a>

    <nav class="navbar-main">
      <ul class="navbar-main-list">
        <li><a href="#" class="navbar-main-link"> Join </a></li>
        <li><a href="#" class="navbar-main-link"> About </a></li>
        <li><a href="#" class="navbar-main-link"> Contact </a></li>
        <li><a href="#" class="navbar-main-link"> Location and Hours </a></li>
        <li>
          <a href="#" class="navbar-main-link low-focus-btn"> Search </a>
        </li>
        <li>
          <a href="#" class="navbar-main-link high-focus-btn"> My Account </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10rem;
  max-width: 120rem;
  margin: 0 auto;
}

.logo {
  height: 6rem;
}

.navbar-main-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-main-link {
  padding: 0.4rem 1rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4rem;
  color: #071314;
}

.navbar-main-link:hover,
.navbar-main-link:active {
  color: #ed1b3b;
}

.low-focus-btn {
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  border-color: #ed1b3b;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4rem;
  color: #ed1b3b;
}

.low-focus-btn:hover,
.low-focus-btn:active {
  border-color: #42c1c7;
  color: #42c1c7;
}

.navbar-main-link.low-focus-btn {
  margin-left: 2rem;
}

.high-focus-btn {
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  background-color: #ed1b3b;
  border-color: #ed1b3b;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
}

.high-focus-btn:hover,
.high-focus-btn:active {
  border-color: #42c1c7;
  background-color: #42c1c7;
  color: #fff;
}
</style>
