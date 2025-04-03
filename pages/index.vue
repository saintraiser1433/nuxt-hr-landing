<template>
  <main class="container mx-auto w-full py-5 mt-24">
    <Hero></Hero>
    <!-- for joblist -->
    <JobList :data="jobList"></JobList>
    <div class="flex flex-col gap-4 py-12 text-center">
      <div class="text-3xl font-semibold sm:text-4xl">
        What Our Community Says About Us
      </div>
      <div class="text-lg font-light sm:text-xl">
        Real stories, real impact – see what makes <strong>SEAIT</strong> special
      </div>
    </div>
    <Testimony></Testimony>
  </main>
</template>

<script setup lang="ts">
const { $api, $toast } = useNuxtApp();
const jobList = computed(
  () => data.value?.filter((item) => item.totalAvailable || 0 > 0) || []
);

const { data, status, error } = await useAPI<JobModel[]>("/job", {
  transform: (data) =>
    data.map((item) => ({
      id: item.id,
      title: item.title,
      headerImage: item.headerImage,
      totalAvailable: item.totalAvailable,
    })),
});
if (error.value) {
  $toast.error(error.value.message || "Failed to fetch items");
}
</script>
