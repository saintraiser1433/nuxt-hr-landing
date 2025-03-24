<template>
        <main class="container mx-auto w-full py-5 mt-24">
            <Hero></Hero>
            <!-- for joblist -->
            <JobList :data="jobList"></JobList>
            <Testimony></Testimony>
        </main>
</template>

<script setup lang="ts">
// useSeoMeta({
//   title: "SUPERHURE Landing Page",
//   description: "My Landing Page",
//   ogTitle: "SUPERHURE Landing Page",
//   ogDescription: "My Landing Page",
// });

const { $api, $toast } = useNuxtApp();
const jobList = computed(() => data.value || []);

const { data, status, error } = await useAPI<JobModel[]>("/job" ,{
    transform: (data) => data.map((item) => ({
        id:item.id,
        title:item.title,
        headerImage:item.headerImage,
        totalAvailable:item.totalAvailable
    }))
});
if (error.value) {
  $toast.error(error.value.message || "Failed to fetch items");
}


</script>