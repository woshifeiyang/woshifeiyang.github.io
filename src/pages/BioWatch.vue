<script lang="ts" setup>
import Section from "../components/Section.vue";

const items = [
  {
    title: "项目开发时间",
    content: "x months",
  },
  {
    title: "软件",
    content: "UE4",
  },
  {
    title: "语言",
    content: "C++, Blueprint",
  },
  {
    title: "主要职位",
    content: "Programmer",
  },
  {
    title: "类型",
    content: "xx Game",
  },
];

const images = [
  "https://static.wixstatic.com/media/bf5b6d_505132d5bd8643f28150866e9b6c73ec~mv2.png/v1/fill/w_132,h_100,al_c,q_80,usm_0.66_1.00_0.01/bf5b6d_505132d5bd8643f28150866e9b6c73ec~mv2.png",
  "https://static.wixstatic.com/media/bf5b6d_07d225165e9c41eca75699357b114dcf~mv2.png/v1/fill/w_132,h_100,al_c,q_80,usm_0.66_1.00_0.01/bf5b6d_07d225165e9c41eca75699357b114dcf~mv2.png",
  "https://static.wixstatic.com/media/bf5b6d_fa3dbbe0a6414c89bc4a112958cd0659~mv2.png/v1/fill/w_132,h_100,al_c,q_80,usm_0.66_1.00_0.01/bf5b6d_fa3dbbe0a6414c89bc4a112958cd0659~mv2.png",
  "https://static.wixstatic.com/media/bf5b6d_4f82c5263d714dc4910719fdb6d3b6bd~mv2.png/v1/fill/w_132,h_100,al_c,q_80,usm_0.66_1.00_0.01/bf5b6d_4f82c5263d714dc4910719fdb6d3b6bd~mv2.png",
  "https://static.wixstatic.com/media/bf5b6d_41a5d34399ce4d378749c655713ea7c0~mv2.png/v1/fill/w_132,h_100,al_c,q_80,usm_0.66_1.00_0.01/bf5b6d_41a5d34399ce4d378749c655713ea7c0~mv2.png",
];
</script>

<template>
  <Section>
    <h1>BioWatch</h1>
    <p v-for="item in items" class="pt-1">
      <b>{{ item.title }}</b>
      {{ item.content }}
    </p>

    <p class="my-8 pt-4">
      BioWatch is a Stealth/puzzle game created in Unreal Engine 4. In this
      game, the player plays as a scientist that has broken into the security
      room at the BioWatch facility. They use the cameras and buttons in the
      security office to break free a sentient creature the facility has been
      researching and planning to dissect.
    </p>
    <a href="">
      <span class="bg-emerald-900 text-white px-4 py-2 mb-4">下载</span>
    </a>
  </Section>
  <Section style="background-color: rgb(251, 249, 235)">
    <video
      autoplay
      loop
      playsinline="true"
      src="https://video.wixstatic.com/video/bf5b6d_c4a73a86fd6c49e0bb79d6c81b5c46da/720p/mp4/file.mp4"
    ></video>
  </Section>
  <!-- <Section>
    <p>
      在游戏过程中，玩家会在 Coivd-19 大流行期间前往市场。 玩家将与 NPC
      进行互动，并有一定概率接受各种有趣的任务，在这期间他们必须注意保持一定的社交距离。
      在游戏过程中，如果玩家离 NPC
      太近，他们的风险计量表会增加，但他们还必须管理自己的幸福计量表，以确保他们不会感到孤单。
      玩家必须尝试在保持健康精神状态或避免感染 Coivd-19 的情况下存活五天。
    </p>
  </Section> -->

  <Section class="text-white" style="background-color: rgb(38, 67, 70)">
    <h2>Scene Interaction Design</h2>
    <p>
      Interacting with the scene by controlling different buttons in the control
      room is the core mechanism of BioWatch. I implemented main gameplay
      features for the main character.
    </p>

    <img
      class="gif"
      src="https://static.wixstatic.com/media/bf5b6d_a09530f8d85543fc96bad3e927debc01f000.jpg/v1/fill/w_640,h_461,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/bf5b6d_a09530f8d85543fc96bad3e927debc01f000.jpg"
    />
  </Section>
  <Section>
    <h2>AI Behaviour Tree</h2>
    <p>
      I use a dynamic array to save each walking point of the NPC so that the
      player can plan the patrol route of the NPC by adding components freely. I
      added a behaviour tree for the enemy in the game. When the enemy sees the
      main character, he will try to chase the main character immediately. When
      the enemy fails to pursue the main character, the enemy will continue to
      patrol from the previous patrol point, and this function will also work
      after the player reloads the game.
    </p>
    <img
      class="gif"
      src="https://static.wixstatic.com/media/bf5b6d_5428005f0529474491e9d402425fde08~mv2.png/v1/fill/w_1496,h_824,al_c,q_90,enc_auto/bf5b6d_5428005f0529474491e9d402425fde08~mv2.png"
    />
  </Section>
  <Section class="text-white" style="background-color: rgb(101, 91, 20)">
    <!-- <h2>NPC交互</h2>
    <p>通过使用NavMesh组件，NPC在地图上能够以我们自由规划的路径行走</p>
    <iframe
      src="//player.bilibili.com/player.html?aid=301010876&bvid=BV1NF411K7XR&cid=777349511&page=1"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    >
    </iframe>
    <p>
      在可交互NPC的设计上，我将思路放在了如何让NPC与其他系统或者元素共同合作。我们希望让NPC和玩家对话过程更加生动有趣，于是我们决定让NPC在对话过程中会弹出有趣的聊天气泡
    </p> -->
    <h2>Gallery</h2>
    <div class="flex justify-center mt-8">
      <div class="flex items-center overflow-x-auto h-64 max-w-[1200px]">
        <img
          v-for="slide in images"
          :key="slide"
          :src="'/images' + slide"
          class="h-full mx-3"
        />
      </div>
    </div>
  </Section>
</template>
