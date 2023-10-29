<template>
  <div class="flex items-center">
    <NuxtLink
      to="/auth/login"
      class="text-blue-6 font-medium mr-3"
      @click="useAuthStore().isLogin = true"
      >Логин</NuxtLink
    >
    <NuxtLink
      to="/auth/register"
      class="text-blue-6 font-medium border-2 border-blue-6 rounded-lg px-4 py-2 mr-4"
      >Регистрация</NuxtLink
    >
    <Dropdown
      v-model="useGlobalStore().selectedLang"
      :options="langs"
      option-label="name"
      placeholder="lang"
      :pt="{
        root: ({ state }) => ({
          class: state.overlayVisible
            ? 'p-1.5 text-blue-6 font-medium border-2 border-blue-6 rounded-t-lg flex items-center gap-1.5 outline-none cursor-pointer'
            : 'p-1.5 text-blue-6 font-medium border-2 border-blue-6 rounded-lg flex items-center gap-1.5 outline-none cursor-pointer',
        }),
        item: ({ context }) => ({
          class: context.selected
            ? 'bg-blue-2 p-1.5'
            : context.focused
            ? 'bg-blue-2 cursor-pointer'
            : 'bg-white hover:bg-blue-2 p-1.5 cursor-pointer',
        }),
        list: {
          class:
            'text-blue-6 font-medium border-2 border-blue-6 rounded-b-lg py-1.5 bg-white',
        },
      }"
    >
      <template #value="slotProps">
        <div class="flex items-center gap-1.5">
          <icons-flags :name="slotProps.value.code" class="w-6 h-[18px]" />
          <div>{{ slotProps.value.name }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="flex items-center gap-1.5">
          <icons-flags :name="slotProps.option.code" class="w-6 h-[18px]" />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/store/global";
import { useAuthStore } from "~/store/auth";

const langs = ref([
  { name: "Рус", code: "ru" },
  { name: "Укр", code: "ua" },
  { name: "Eng", code: "eng" },
]);
</script>

<style scoped></style>
