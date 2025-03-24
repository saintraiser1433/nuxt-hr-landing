<template>
    <div
        class="container flex flex-col mx-auto justify-center items-center max-w-sm lg:max-w-4xl mt-24 mb-8 gap-2">

        <h2
            class="text-balance text-center text-2xl lg:text-3xl font-bold">
            ✨ SEAIT JOB OPPORTUNITIES

        </h2>
        <span class="text-sm text-center  text-gray-400">Unlock opportunities, build your future, and grow with
            SEAIT.</span>
    </div>
    <div
        class="container mx-auto w-full items-center justify-center px-8">
        <TracingBeam class="px-8 lg:px-0">
            <BentoGrid
                class="mx-auto">

                <BentoGridItem
                    v-for="(item, index) in JOB_ITEMS"
                    :key="index">
                    <template #header>
                        <div
                            class="flex size-full space-x-4">
                            <NuxtImg
                                class="flex size-full flex-1 rounded-md"
                                src="/images/hero.jpg"></NuxtImg>
                        </div>
                    </template>

                    <template #title>
                        <div>
                            <strong class="text-sm"> Availability : 1</strong>
                        </div>

                        <strong>{{ item.title }}</strong>
                    </template>
                    <template #description>
                        <RainbowButton>Apply now!</RainbowButton>

                    </template>
                </BentoGridItem>
            </BentoGrid>
        </TracingBeam>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
