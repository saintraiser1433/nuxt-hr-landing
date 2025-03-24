

<script setup lang="ts">
const {
    $joi,
} = useNuxtApp();


const formData = ref({
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    contact_number: ''
});
const resumeFile = ref<File | null>(null);

const schema = $joi.object({
    first_name: $joi.string().required().messages({
        "string.empty": "First Name is Required",
        "any.required": "First Name is Required",
    }),
    last_name: $joi.string().required().messages({
        "string.empty": "Last Name is Required",
        "any.required": "Last Name is Required",
    }),
    middle_name: $joi.string().required().messages({
        "string.empty": "Middle Name is Required",
        "any.required": "Middle Name is Required",
    }),
    email: $joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','ph'] } }).required().messages({
        "string.email": "Incorrect email format",
        "string.empty": "Email is required",
        "any.required": "Email is required",
    }),
    contact_number: $joi.number().required().messages({
        "number.empty": "Contact Number is Required",
        "any.required": "Contact Number is Required",
    }),

});

const file = (file:File | null) => {
  resumeFile.value = file;
}

const errors = ref <Record<string,string>>({});

const validateForm = () => {
    const {
        error
    } = schema.validate(formData.value, {
        abortEarly: false
    });

    if (error) {
        errors.value = {};
        error.details.forEach((err: any) => {
            errors.value[err.path[0]] = err.message;
        });
    } else {
        errors.value = {}; 

    }
};
</script>


<template>
  <h1
      class="text-2xl py-2 font-semibold">START YOUR APPLICATION</h1>
  <div
      class="flex w-full flex-col  gap-2">
      <label for="firstname" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">First Name <span class="text-red-400">*</span></label>
      <IInput
          v-model="formData.first_name"
          id="firstname"
          container-class="w-full "></IInput>
          <p v-if="errors.first_name" class="text-red-500">{{ errors.first_name }}</p>
      <label for="lastname" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Last Name <span class="text-red-400">*</span></label>
      <IInput
        v-model="formData.last_name"
          id="lastname"
          container-class="w-full "></IInput>
          <p v-if="errors.last_name" class="text-red-500">{{ errors.last_name }}</p>
      <label for="middlename" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Middle Name <span class="text-red-400">*</span></label>
      <IInput
          v-model="formData.middle_name"
          id="middlename"
          container-class="w-full"></IInput>
          <p v-if="errors.middle_name" class="text-red-500">{{ errors.middle_name }}</p>
      <label for="email" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Email Address<span class="text-red-400">*</span></label>
      <IInput
          v-model="formData.email"
          type="email"
          id="email"
          container-class="w-full"></IInput>
          <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
      <label for="contact" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Contact Number<span class="text-red-400">*</span></label>
      <IInput
          v-model="formData.contact_number"
          id="contact"
          type="number"
          container-class="w-full"></IInput>
          <p v-if="errors.contact_number" class="text-red-500">{{ errors.contact_number }}</p>

      <div
          class="space-y-6 p-8 dark:bg-black">
          <FileUpload
              @on-change="file"
              class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
              <FileUploadGrid />

          </FileUpload>
      </div>

      <ShimmerButton
          @click="validateForm"
          class="shadow-2xl"
          shimmer-size="2px">
          <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
              Submit Application
          </span>
      </ShimmerButton>
  </div>
</template>