<template>
  <aside
    class="min-h-screen bg-blue-8 flex flex-col justify-between transition"
    :class="global.isSidebarOpen ? 'w-60' : 'w-20'"
  >
    <div class="p-6 relative">
      <icons-logo :variant="getIconVariant" class="mb-7" />
      <div>
        <h3
          v-if="global.isSidebarOpen"
          class="text-lg text-white opacity-50 font-bold mb-5"
        >
          Я хочу
        </h3>
        <NuxtLink
          to="/auth/login"
          class="flex items-center mb-5"
          :class="{ 'gap-3': global.isSidebarOpen }"
        >
          <icons-base name="btcUp" />
          <span v-if="global.isSidebarOpen" class="text-white text-lg font-bold"
            >Продать</span
          >
        </NuxtLink>
        <NuxtLink
          to="/auth/login"
          class="flex items-center"
          :class="{ 'gap-3': global.isSidebarOpen }"
        >
          <icons-base name="btcUp" class="rotate-180" />
          <span v-if="global.isSidebarOpen" class="text-white text-lg font-bold"
            >Купить</span
          >
        </NuxtLink>
      </div>
    </div>
    <div class="w-full px-6 flex justify-end">
      <icons-base
        name="shrinkSidebar"
        class="cursor-pointer transition"
        :class="{ 'rotate-180': !global.isSidebarOpen }"
        @click="global.isSidebarOpen = !global.isSidebarOpen"
      />
    </div>
    <NuxtLink
      to="/help"
      class="flex gap-3 items-center p-6 border-t border-t-blue-4"
    >
      <icons-base name="help" />
      <span v-if="global.isSidebarOpen" class="text-white text-md">Помощь</span>
    </NuxtLink>
  </aside>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/store/global";

const global = useGlobalStore();

const getIconVariant = computed(() => {
  if (global.isSidebarOpen) {
    return "full";
  } else {
    return "short";
  }
});
</script>

<style scoped></style>
