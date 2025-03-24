<template>
  <ClientOnly>
    <div
      :class="cn('w-full', $props.class)"
      @dragover.prevent="handleEnter"
      @dragleave="handleLeave"
      @drop.prevent="handleDrop"
      @mouseover="handleEnter"
      @mouseleave="handleLeave"
    >
      <div
        class="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
        @click="handleClick"
      >
        <input
          ref="fileInputRef"
          type="file"
          accept="application/pdf"
          class="hidden"
          @change="onFileChange"
        />

        <!-- Content -->
        <div class="flex flex-col items-center justify-center">
          <p class="relative z-20 font-sans text-base font-bold text-neutral-700 dark:text-neutral-300">
            Upload your resume (only accept PDF file)
          </p>
          <p class="relative z-20 mt-2 font-sans text-base font-normal text-neutral-400 dark:text-neutral-400">
            Drag or drop your file here or click to upload
          </p>

          <div class="relative mx-auto mt-10 w-full max-w-xl">
            <Motion
              v-if="file"
              :key="file.name"
              :initial="{ opacity: 0, scaleX: 0 }"
              :animate="{ opacity: 1, scaleX: 1 }"
              class="relative z-40 mx-auto flex w-full flex-col items-start justify-start overflow-hidden rounded-md bg-white p-4 shadow-sm dark:bg-neutral-900"
            >
              <div class="flex w-full items-center justify-between gap-4">
                <Motion
                  as="p"
                  :initial="{ opacity: 0 }"
                  :animate="{ opacity: 1 }"
                  class="max-w-xs truncate text-base text-neutral-700 dark:text-neutral-300"
                >
                  {{ file.name }}
                </Motion>
                <Motion
                  as="p"
                  :initial="{ opacity: 0 }"
                  :animate="{ opacity: 1 }"
                  class="w-fit shrink-0 rounded-lg px-2 py-1 text-sm text-neutral-600 shadow-input dark:bg-neutral-800 dark:text-white"
                >
                  {{ (file.size / (1024 * 1024)).toFixed(2) }} MB
                </Motion>
                <!-- 🗑️ Remove Button -->
  
                <button
                @click="removeFile"
                class="absolute bottom-3 right-4  bg-red-500 text-white px-3 py-1 text-xs rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
              </div>

              <div class="mt-2 flex w-full flex-col md:flex-row md:items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Motion
                  as="p"
                  :initial="{ opacity: 0 }"
                  :animate="{ opacity: 1 }"
                  class="rounded-md bg-gray-100 px-1.5 py-1 text-sm dark:bg-neutral-800"
                >
                  {{ file.type || "unknown type" }}
                </Motion>
                <Motion as="p" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }">
                  modified {{ new Date(file.lastModified).toLocaleDateString() }}
                </Motion>
              </div>
            </Motion>

            <template v-if="!file">
              <Motion
                as="div"
                class="relative z-40 mx-auto mt-4 flex h-32 w-full max-w-32 items-center justify-center rounded-md bg-white shadow-[0px_10px_50px_rgba(0,0,0,0.1)] group-hover/file:shadow-2xl dark:bg-neutral-900"
                :initial="{ x: 0, y: 0, opacity: 1 }"
                :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
                :animate="isActive ? { x: 20, y: -20, opacity: 0.9 } : {}"
              >
                <Icon name="heroicons:arrow-up-tray-20-solid" class="text-neutral-600 dark:text-neutral-400" size="20" />
              </Motion>

              <div
                class="absolute inset-0 z-30 mx-auto mt-4 flex h-32 w-full max-w-32 items-center justify-center rounded-md border border-dashed border-sky-400 bg-transparent transition-opacity"
                :class="{ 'opacity-100': isActive, 'opacity-0': !isActive }"
              ></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Motion } from "motion-v";
import { ref } from "vue";

interface FileUploadProps {
  class?: HTMLAttributes["class"];
}

defineProps<FileUploadProps>();

const emit = defineEmits<{
  (e: "onChange", file: File | null): void;
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const file = ref<File | null>(null);
const isActive = ref<boolean>(false);

// 🛠️ Restrict to PDFs & Handle File Change
function handleFileChange(newFile: File) {
  if (newFile.type !== "application/pdf") {
    alert("Only PDF files are allowed!");
    return;
  }
  file.value = newFile; // ✅ Only 1 file allowed (replace previous)
  emit("onChange", file.value);
}

// 🗑️ Remove File Function
function removeFile() {
  file.value = null;
  emit("onChange", null);
}

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;
  handleFileChange(input.files[0]); // ✅ Limit to 1 file
}

function handleClick() {
  fileInputRef.value?.click();
}

function handleEnter() {
  isActive.value = true;
}
function handleLeave() {
  isActive.value = false;
}
function handleDrop(e: DragEvent) {
  isActive.value = false;
  if (!e.dataTransfer?.files || e.dataTransfer.files.length === 0) return;
  handleFileChange(e.dataTransfer.files[0]); // ✅ Limit to 1 file
}
</script>
