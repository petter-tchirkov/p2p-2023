<template>
  <div class="flex gap-2">
    <div
      v-for="item in data"
      :key="item.name"
      class="bg-blue-2 rounded-lg py-1 pl-1 pr-3 flex items-center gap-2"
    >
      <div class="bg-white p-1 rounded-lg flex gap-2 items-center">
        <icons-currencies
          :name="`${item.name}Sign`"
          class="w-3 h-4 flex justify-center items-center"
        />
      </div>
      <span class="font-bold text-blue-8">{{ item.value }}</span>
    </div>
    <div>
      <img
        class="w-10 h-10 rounded-full"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F549806679184101949%2FB9BE4A3782A7DB03283B94589DFD4456421F596D%2F&f=1&nofb=1&ipt=32766c76ce0dd987ecf4d66817d9294ea4c735506ae7f6574569fc0615902b99&ipo=images"
        @click="toggle"
      />
      <OverlayPanel ref="op" class="mt-2">
        <div
          class="p-6 bg-white rounded shadow-md flex flex-col gap-4 cursor-pointer"
        >
          <div class="flex gap-3 items-center">
            <icons-base name="profile" />
            <span class="text-blue-6 text-sm">Профиль</span>
          </div>
          <div class="flex gap-3 items-center">
            <icons-base name="security" />
            <span class="text-blue-6 text-sm">Безопасность</span>
          </div>
          <div class="flex gap-3 items-center">
            <icons-base name="chat" />
            <span class="text-blue-6 text-sm">Чат</span>
          </div>
          <div class="flex gap-3 items-center" @click="useAuthStore().logout">
            <icons-base name="logout" />
            <span class="text-red-7 text-sm">Выход</span>
          </div>
        </div>
      </OverlayPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
const data = [
  { name: "btc", value: 19.242 },
  { name: "dollar", value: 1241 },
];

const op = ref();
const toggle = (event: Event) => {
  op.value.toggle(event);
};
</script>

<style scoped></style>
