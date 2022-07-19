<template>
  <div class="section py-10 flex flex-col items-center">
    <slot></slot>
  </div>
</template>

<style>
.section p {
  max-width: 500px;
  @apply mt-10;
}

.section p + p {
  @apply mt-0;
}

.section h1 {
  font-size: 56px;
  @apply font-bold;
}
.section h2 {
  font-size: 40px;
  @apply font-bold;
}

.section iframe, .section video, .section .gif {
  width: 800px;
  height: 500px;
  @apply mt-10;
}
</style>
