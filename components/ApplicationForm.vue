<script setup lang="ts">
const { $joi } = useNuxtApp();

const emits = defineEmits(["dataSubmit"]);

const formData = ref({
  first_name: "",
  last_name: "",
  middle_name: "",
  email: "",
  contact_number: "",
});
const resumeFile = ref<File | null>(null);
const photoFile = ref<File | null>(null);
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
  email: $joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ph"] } })
    .required()
    .messages({
      "string.email": "Incorrect email format",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
  contact_number: $joi
    .string()
    .pattern(/^9\d{9}$/) // Ensures it starts with "09" and has 11 digits in total
    .required()
    .messages({
      "string.pattern.base":
        "Invalid contact number. Must start with '9' and be exactly 11 digits.",
      "string.empty": "Contact Number is Required",
      "any.required": "Contact Number is Required",
    }),
});

const validateMaxLength = (event: Event) => {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/\D/g, "").slice(0, 10); // Allow only digits, max 11
  formData.value.contact_number = input.value;
};

const file = (file: File | null) => {
  resumeFile.value = file;
};

const photo = (file: File | null) => {
  photoFile.value = file;
};

const errors = ref<Record<string, string>>({});

const validateForm = () => {
  const { error } = schema.validate(formData.value, { abortEarly: false });

  errors.value = {};

  if (error) {
    error.details.forEach((err: any) => {
      errors.value[err.path[0]] = err.message;
    });
  }

  if (!resumeFile.value) {
    errors.value["resume_path"] = "Resume file is required";
  }

  if (!resumeFile.value) {
    errors.value["photo_path"] = "4x4 Photo is required";
  }

  if (Object.keys(errors.value).length === 0) {
    emits("dataSubmit", {
      ...formData.value,
      resume_path: resumeFile.value,
      photo_path: photoFile.value,
    });
  }
};
</script>

<template>
  <h1 class="text-2xl py-2 font-semibold">START YOUR APPLICATION</h1>
  <div class="flex w-full flex-col gap-2">
    <label
      for="firstname"
      class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200"
      >First Name <span class="text-red-400">*</span></label
    >
    <IInput
      v-model="formData.first_name"
      id="firstname"
      container-class="w-full "
    ></IInput>
    <p v-if="errors.first_name" class="text-red-500">{{ errors.first_name }}</p>
    <label
      for="lastname"
      class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200"
      >Last Name <span class="text-red-400">*</span></label
    >
    <IInput v-model="formData.last_name" id="lastname" container-class="w-full "></IInput>
    <p v-if="errors.last_name" class="text-red-500">{{ errors.last_name }}</p>
    <label
      for="middlename"
      class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200"
      >Middle Name <span class="text-red-400">*</span></label
    >
    <IInput
      v-model="formData.middle_name"
      id="middlename"
      container-class="w-full"
    ></IInput>
    <p v-if="errors.middle_name" class="text-red-500">{{ errors.middle_name }}</p>
    <label
      for="email"
      class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200"
      >Email Address<span class="text-red-400">*</span></label
    >
    <IInput
      v-model="formData.email"
      type="email"
      id="email"
      container-class="w-full"
    ></IInput>
    <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
    <label
      for="contact"
      class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200"
      >Contact Number<span class="text-red-400">*</span></label
    >
    <IInput
      v-model="formData.contact_number"
      id="contact"
      type="text"
      placeholder="ex. 9301791280"
      container-class="w-full"
      maxlength="11"
      @input="validateMaxLength"
    ></IInput>
    <p v-if="errors.contact_number" class="text-red-500">{{ errors.contact_number }}</p>
    <div class="space-y-6 p-8 dark:bg-black border">
      <FileUpload
        @on-change="photo"
        class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800"
      >
        <FileUploadGrid />
      </FileUpload>
      <p v-if="errors.photo_path" class="text-red-500">{{ errors.photo_path }}</p>
    </div>

    <div class="space-y-6 p-8 dark:bg-black border">
      <FileUpload
        file-type="pdf"
        @on-change="file"
        class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800"
      >
        <FileUploadGrid />
      </FileUpload>
      <p v-if="errors.resume_path" class="text-red-500">{{ errors.resume_path }}</p>
    </div>

    <ShimmerButton @click="validateForm" class="shadow-2xl" shimmer-size="2px">
      <span
        class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10"
      >
        Submit Application
      </span>
    </ShimmerButton>
  </div>
</template>
