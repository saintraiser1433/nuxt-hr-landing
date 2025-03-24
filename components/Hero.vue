<template>
          <div class="relative">
                <ClientOnly>
                    <Tetris
                        class="h-[300px] lg:h-[500px] w-full [mask-image:radial-gradient(450px_circle_at_center,#00C16A,transparent)]"
                        :base="15" square-color="#777e7a" />
                    <div class="flex items-center justify-between w-full absolute top-5">
                        <div class="size-full max-w-lg items-center justify-center overflow-hidden p-8">
                            <BoxReveal color="#1b1c1b">
                                <p class="text-[1.5rem] text-left font-semibold">
                                    SEAIT Careers: Where Talent Meets
                                    <FlipWords :words="['Innovation', 'Opportunity', 'Growth', 'Excellence']"
                                        :duration="3000" class="text-[1.5rem] !text-primary" /><span
                                        class="text-[#1f864c]">.</span>
                                </p>
                            </BoxReveal>

                            <BoxReveal color="#1b1c1b" :duration="1">
                                <div class="mt-6">
                                    <p>
                                        Join us to
                                        <span class="font-semibold text-[#1f864c]"> grow, innovate </span>
                                        and <span class="font-semibold text-[#1f864c]">succeed</span> in a
                                        <span class="font-semibold text-[#1f864c]">dynamic</span> work environment.

                                    </p>
                                    <InteractiveHoverButton class="my-5" text="Let's Begin" @click="letsBegin"></InteractiveHoverButton>
                                </div>
                            </BoxReveal>
                        </div>
                        <PhotoGallery class="lg:block hidden" :items="PHOTO_GALLERY_ITEM" />

                    </div>
                </ClientOnly>
            </div>
</template>

<script lang="ts" setup>
    const letsBegin = () => {
        navigateTo('#jobs')
    }
</script>

<style>

</style>