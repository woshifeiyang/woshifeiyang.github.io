<script setup lang="ts">
import { RouterLink } from "vue-router";
const projects = [
  {
    name: "Social Space",
    type: "Group Project",
    imageUrl: "/images/Social Space.png",
    link: "/project/social_space",
  },
  {
    name: "Biowatch",
    type: "Group Project",
    imageUrl: "/images/biowatch.webp",
    link: "/project/bio_watch",
  },
  {
    name: "Parkour Game",
    type: "Solo Project",
    imageUrl: "/images/parkourgame.webp",
    link: "",
  },
];
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col justify-center items-center"
      style="
        background-image: url('/images/cover.webp');
        height: 600px;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="max-w-[780px]">
        <h2 class="font-bold text-2xl text-gray-500">
          GAME PROGRAMMING PORTFOLIO
        </h2>
        <h1 class="font-bold text-[72px] text-white">
          Game Programmer Unreal Engine 4
        </h1>
        <h3 class="text-2xl text-white underline">
          MProf Game Development Student Abertay University
        </h3>
      </div>
    </div>
    <div class="bg-orange-100 py-20 px-10 flex-1">
      <h3 class="text-3xl mb-16">Hi! I'm Yong, welcome to my website!</h3>
      <div class="grid grid-cols-3 gap-10">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col justify-center items-center col-span-3 md:col-span-1"
        >
          <img
            class="w-[600px] h-full object-fill my-2"
            :src="project.imageUrl"
            alt=""
          />
          <h5 class="font-black text-lg my-2">{{ project.name }}</h5>
          <p>{{ project.type }}</p>
          <RouterLink
            :to="project.link"
            class="bg-white p-1 px-2 my-2 border border-green-900 !text-green-900 hover:bg-green-900 hover:!text-white transition duration-200"
            >View More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
