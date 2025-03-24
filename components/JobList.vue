<script setup lang="ts">
defineProps({
    data: {
        type: Array as PropType<JobModel[]>,
        default: () => []
    },

    
});

const config = useRuntimeConfig()

const applyNow =  async(id:number) => {
     await navigateTo({
        name: 'application-id',
        params: { id: id }
    })
}

</script>
<template>
    <div
    id="jobs"
        class="container flex flex-col mx-auto justify-center items-center max-w-sm lg:max-w-4xl mt-24 mb-8 gap-2">

        <h2
            class="text-balance text-center text-2xl lg:text-3xl font-bold">
            ✨ SEAIT JOB OPPORTUNITIES

        </h2>
        <span class="text-sm text-center  text-gray-400">Unlock opportunities, build your future, and grow with
            SEAIT.</span>
    </div>
    <div
        class="container mx-auto w-full items-center justify-center px-8" >
        <TracingBeam
            class="px-8 lg:px-0">
            <BentoGrid
                class="mx-auto" >

                <BentoGridItem
                    v-for="(item, index) in data"
                    :key="index">
                    <template #header>
                        <div
                            class="flex size-full h-54 space-x-4">
                            <NuxtImg
                                class="rounded-md w-full h-32"
                                :src="`${config.public.STORAGE_URL_JOB}/${item.headerImage}`"></NuxtImg>
                        </div>
                    </template>

                    <template #title>
                        <div>
                            <strong class="text-sm"> Availability: {{ item.totalAvailable }}</strong>
                        </div>
                        <hr/>
                        <strong>{{ item.title }}</strong>
                    </template>
                    <template #description>
                        <RainbowButton
                            @click="applyNow(item.id ?? 0)">Apply now!</RainbowButton>
                    </template>
                </BentoGridItem>
            </BentoGrid>
        </TracingBeam>
    </div>
</template>


