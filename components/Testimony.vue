<template>
  <div class="flex w-full max-w-7xl flex-col items-center justify-center">
    <div
      class="relative flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <!-- First Marquee -->
      <Marquee pause-on-hover class="[--duration:20s]">
        <ReviewCard
          v-for="review in firstRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>

      <!-- Second Marquee (reverse) -->
      <Marquee reverse pause-on-hover class="[--duration:20s]">
        <ReviewCard
          v-for="review in secondRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const firstRow = ref(REVIEW_ITEMS.slice(0, REVIEW_ITEMS.length / 2));
const secondRow = ref(REVIEW_ITEMS.slice(REVIEW_ITEMS.length / 2));
</script>

<style></style>
