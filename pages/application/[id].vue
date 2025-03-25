<script setup lang="ts">
useSeoMeta({
  title: "SUPERHURE Application",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem quod perferendis consequatur sed iste? Magni maiores animi voluptatem. Labore blanditiis qui quaerat harum repellat laborum excepturi, suscipit consequuntur. Consectetur?",
  ogTitle: "SUPERHURE Application",
  ogDescription:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem quod perferendis consequatur sed iste? Magni maiores animi voluptatem. Labore blanditiis qui quaerat harum repellat laborum excepturi, suscipit consequuntur. Consectetur?",
});
const { $api, $toast } = useNuxtApp();
const { handleApiError } = useErrorHandler();
const config = useRuntimeConfig();
const route = useRoute();
const jobList = computed(() => data.value || {});
const isSuccess = ref(false);

const { data, status, error } = await useAPI<JobModel>(`/job/${route.params.id}`);
if (error.value) {
  $toast.error(error.value.message || "Failed to fetch items");
}
const applicantRepo = repository<SubmitApplicant>($api, "/applicant");
const submit = async (response: SubmitApplicant) => {
  setAlert(
    "warning",
    "Are you sure you want to submit this will not irreversable",
    "",
    "Confirm to submit"
  ).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await applicantRepo.addWithDocuments({
          ...response,
          jobId: route.params.id,
        });
        isSuccess.value = true;
      } catch (err) {
        handleApiError(err);
      }
    }
  });
};
</script>
<template>
  <SuccessConfetti v-if="isSuccess"></SuccessConfetti>
  <div class="container mx-auto w-full max-w-3xl py-5 mt-24 px-5 lg:px-0" v-else>
    <div class="rounded-2.5xl relative h-full border p-2 md:rounded-3xl md:p-2">
      <GlowingEffect
        :spread="40"
        :glow="true"
        :disabled="false"
        :proximity="64"
        :inactive-zone="0.01"
      />
      <div
        class="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]"
      >
        <div class="relative flex flex-1 flex-col justify-between gap-3">
          <div class="space-y-5">
            <h3
              class="-tracking-4 text-balance pt-0.5 text-xl/[1.375rem] capitalize font-semibold text-black md:text-2xl/[1.875rem] dark:text-white"
            >
              {{ jobList.title }}
            </h3>
            <NuxtImg
              :src="`${config.public.STORAGE_URL_JOB}/${jobList.headerImage}`"
              alt="Header Image"
              class="w-full"
            />
          </div>
          <hr />
          <h1 class="text-2xl py-2 font-semibold">JOB DESCRIPTION</h1>
          <div class="text-justify" v-html="jobList.description"></div>
          <hr />
          <ApplicationForm @data-submit="submit"></ApplicationForm>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center py-5">
      <NuxtLink to="/" external> Back to menu </NuxtLink>
    </div>
  </div>
</template>
