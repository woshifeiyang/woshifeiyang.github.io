<script lang="ts" setup>
import Section from "../components/Section.vue";

const items = [
  {
    title: "项目开发时间",
    content: "2 months",
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
    content: "Serious Game",
  },
];

const images = [
  "/微信截图_20220601220927.png",
  "/NPC交互.png",
  "/NPC交互1.png",
];
</script>

<template>
  <Section>
    <h1 >Social Space</h1>
    <p v-for="item in items" class="pt-1">
      <b>{{ item.title }}</b>
      {{ item.content }}
    </p>

    <p class="my-8 pt-4">
      我们团队试图让玩家思考如何在 COVID-19
      疫情流行期间与周围的人保持适当的社交距离。
      游戏鼓励玩家学习如何在与他人保持密切关系的同时保持健康的人际关系。
    </p>
    <a href="https://johnventers.itch.io/social-space">
      <span class="bg-emerald-900 text-white px-4 py-2 mb-4">下载</span>
    </a>
  </Section>
  <Section style="background-color: rgb(251, 249, 235)">
    <video
      src="https://video.wixstatic.com/video/bf5b6d_4281d4e861f84e3d94b007f0e5536252/1080p/mp4/file.mp4"
    ></video>
  </Section>
  <Section>
    <p>
      在游戏过程中，玩家会在 Coivd-19 大流行期间前往市场。 玩家将与 NPC
      进行互动，并有一定概率接受各种有趣的任务，在这期间他们必须注意保持一定的社交距离。
      在游戏过程中，如果玩家离 NPC
      太近，他们的风险计量表会增加，但他们还必须管理自己的幸福计量表，以确保他们不会感到孤单。
      玩家必须尝试在保持健康精神状态或避免感染 Coivd-19 的情况下存活五天。
    </p>
  </Section>

  <Section class="text-white" style="background-color: rgb(38, 67, 70)">
    <h2>任务系统</h2>
    <p>
      任务系统
      任务系统作为游戏的核心机制之一，需要实时跟踪玩家身上的任务数量以及每个任务的当前进度。
      当玩家将鼠标移到NPC上点击时，他们会开始对话，任务请求框会以一定的概率随机出现。
      如果玩家选择接受任务，任务列表会立即显示任务详情，并跟踪任务的完成进度。
      完成的请求会变成灰色，提醒玩家分支任务已经完成。
    </p>

    <video
      src="https://video.wixstatic.com/video/bf5b6d_1c22c24369d248f3a2bc69d43e9a70ac/1080p/mp4/file.mp4"
    ></video>
  </Section>
  <Section>
    <h2>数据保存和加载</h2>
    <p>
      有许多数据需要在关卡切换时进行保存或者加载，例如玩家和NPC在前一天的幸福值和风险值需要被保存并根据玩家的选择进行不同的计算后在新的一天中被加载
    </p>
    <video
      src="https://video.wixstatic.com/video/bf5b6d_d5b341a832444168b693a062d04eef6a/1080p/mp4/file.mp4"
    ></video>
  </Section>
  <Section class="text-white" style="background-color: rgb(101, 91, 20)">
    <h2>NPC交互</h2>
    <p>通过使用NavMesh组件，NPC在地图上能够以我们自由规划的路径行走</p>
    <video
      src="https://video.wixstatic.com/video/bf5b6d_fea4bb082b5f415db3ebb746b6ad677d/720p/mp4/file.mp4"
    ></video>
    <p>
      在可交互NPC的设计上，我将思路放在了如何让NPC与其他系统或者元素共同合作。我们希望让NPC和玩家对话过程更加生动有趣，于是我们决定让NPC在对话过程中会弹出有趣的聊天气泡
    </p>
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
