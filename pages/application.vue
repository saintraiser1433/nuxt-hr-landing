<template>
    <div
        class="container mx-auto w-full  max-w-3xl py-5 mt-24 px-5 lg:px-0">
        <div
            class="rounded-2.5xl relative h-full border p-2 md:rounded-3xl md:p-2">
            <GlowingEffect
                :spread="40"
                :glow="true"
                :disabled="false"
                :proximity="64"
                :inactive-zone="0.01" />
            <div
                class="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div
                    class="relative flex flex-1 flex-col justify-between gap-3">
                    <div
                        class="space-y-5">
                        <h3
                            class="-tracking-4 text-balance pt-0.5 text-xl/[1.375rem] font-semibold text-black md:text-2xl/[1.875rem] dark:text-white">
                            Accounting Analyst - Corporate Finance Office
                        </h3>
                        <NuxtImg
                            src="/images/hero.jpg"
                            alt="Header Image"
                            class="w-full"
                            />

                    </div>
                    <hr />
                    <h1
                        class="text-2xl py-2 font-semibold">JOB DESCRIPTION</h1>
                    <div
                        class="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, molestias. Accusamus vitae sunt voluptate labore illo adipisci aperiam rerum iure, dolores alias ex incidunt, exercitationem voluptatibus in, veniam minus nobis et non quae a architecto ut nesciunt doloribus. Repellat corporis aut voluptatem magnam odit, praesentium ipsa, dolores quis deserunt esse repellendus unde. Animi, soluta aut. Quod quisquam est obcaecati veniam tenetur voluptatum provident placeat quae enim dignissimos. Pariatur laborum dolorem unde ut impedit recusandae molestias et nisi numquam aliquam in accusantium, quibusdam tempora distinctio nostrum neque. Quaerat porro sunt, ex explicabo fugiat debitis deserunt vero doloremque architecto ipsam similique adipisci suscipit cumque fugit a ipsum ab harum minima non praesentium repellat iste dicta! Neque repellat, eos dolores amet quod temporibus nulla possimus? Eum, illo fugit esse accusantium repellat ipsam quas vel vero, autem obcaecati in. Eius tenetur beatae, tempore sint id consequatur delectus non numquam corrupti modi! Velit perspiciatis quisquam itaque neque, consectetur dolore in laboriosam assumenda autem temporibus mollitia. Ab id corporis pariatur nesciunt eligendi odit quasi rerum cumque sapiente commodi, perspiciatis illo magni dolor soluta architecto enim aliquid quaerat, fuga quam distinctio dolores, eveniet labore repellat? Deleniti provident magni hic quia adipisci vitae unde cumque. Quam, odit expedita?
                    </div>
                    <hr />
                    <h1
                        class="text-2xl py-2 font-semibold">START YOUR APPLICATION</h1>
                    <div
                        class="flex w-full flex-col  gap-2">
                        <label for="firstname" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">First Name <span class="text-red-400">*</span></label>
                        <IInput
                            id="firstname"
                            container-class="w-full "></IInput>
                        <label for="lastname" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Last Name <span class="text-red-400">*</span></label>
                        <IInput
                            id="lastname"
                            container-class="w-full "></IInput>
                        <label for="middlename" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Middle Name <span class="text-red-400">*</span></label>
                        <IInput
                            id="middlename"
                            container-class="w-full"></IInput>
                        <label for="email" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Email Address<span class="text-red-400">*</span></label>
                        <IInput
                            type="email"
                            id="email"
                            container-class="w-full"></IInput>
                        <label for="contact" class="ml-2 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">Contact Number<span class="text-red-400">*</span></label>
                        <IInput
                            id="contact"
                            type="number"
                            container-class="w-full"></IInput>

                        <div
                            class="space-y-6 p-8 dark:bg-black">
                            <FileUpload
                                class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
                                <FileUploadGrid />

                            </FileUpload>
                        </div>

                        <ShimmerButton
                            class="shadow-2xl"
                            shimmer-size="2px">
                            <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                                Submit Application
                            </span>
                        </ShimmerButton>
                    </div>

                </div>
            </div>
        </div>
        <div class="flex justify-center items-center py-5">
          <NuxtLink
            to="/"
            external>
            Back to menu
        </NuxtLink>
        </div>

    </div>

</template>

<script lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
</script>

<style>

</style>
