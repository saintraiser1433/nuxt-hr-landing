<template>
        <header class="w-full shadow-sm fixed top-0 left-0 dark:bg-background bg-background z-50">
            <div class="flex justify-between container mx-auto p-3">
                <div class="flex gap-1 items-center">
                    <NuxtImg src="/images/seait.png" width="24" height="24"></NuxtImg>
                    <!-- <svg-icon class="dark:bg-background" name="icon/logo" width="32" height="32"></svg-icon> -->
                    <h1 class="font-semibold">SUPER<span class="text-emerald-600">HURE</span></h1>
                </div>
                <div>
                    <Icon class="cursor-pointer" @click="isDark = !isDark"
                        :name="`carbon:${isDark ? 'moon' : 'sun'}`" />
                </div>
            </div>
        </header>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});

</script>

<style>

</style>