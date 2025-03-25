<template>
  <div
    class="relative flex h-screen gap-5 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
  >
    <svg-icon name="icon/email" width="260" height="260" title="Success"></svg-icon>
    <div class="container text-center max-w-lg">
      <span class="pointer-events-none text-1xl lg:text-lg">
        Application submitted successfully! We'll review your details and contact you if
        shortlisted. Thank you!
      </span>
    </div>
    <div class="flex justify-center items-center py-5 z-50">
      <RainbowButton @click="backMenu">Back to menu</RainbowButton>
    </div>
    <!-- Confetti component with ref -->
    <Confetti
      ref="confettiRef"
      class="absolute left-0 top-0 z-0 size-full"
      @mouseenter="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";

const backMenu = async () => {
  await navigateTo("/");
};
// Function to trigger the confetti side cannons
function handleClick() {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return;

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });

    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame); // Keep calling the frame function
  }

  frame();
}

onMounted(() => {
  handleClick();
});
</script>
