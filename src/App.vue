<script setup lang="ts">
import Header from "./components/Header.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView style="min-height: calc(100vh - 160px)"></RouterView>
  <Footer></Footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(6 78 59 / var(--tw-bg-opacity));
}
</style>
