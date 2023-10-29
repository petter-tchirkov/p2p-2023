<template>
  <section class="relative">
    <ui-header>
      <template #pageTitle>
        <div class="flex gap-5">
          <NuxtLink
            to="/clients"
            class="text-blue-8 font-medium text-xl relative"
            >Ваши счета</NuxtLink
          >
          <NuxtLink to="/" class="text-blue-8 font-medium text-xl relative"
            >Продажа</NuxtLink
          >
          <NuxtLink to="/buy" class="text-blue-8 font-medium text-xl"
            >Покупка</NuxtLink
          >
        </div>
      </template>
      <template #right>
        <auth-panel v-if="!auth.isLogin" />
        <user-panel v-else />
      </template>
    </ui-header>
    <div class="p-4">
      <DataTable
        :value="clientsStore.clients"
        :pt="{
          table: { class: 'w-full' },
          bodyRow: { class: 'border-b border-b-blue-2' },
          thead: { class: 'border-b border-b-blue-2' },
          headerRow: { class: 'text-xs text-gray-7 font-light' },
        }"
      >
        <Column header="ID" field="id" class="px-7 py-2" />
        <Column header="Email" field="email" />
        <Column header="Status">
          <template #body="{ data }">
            <Tag
              :pt="{
                root: {
                  class:
                    data.status === 'ok'
                      ? 'bg-green-7 text-white px-2 py-1 rounded-lg'
                      : 'bg-red-500 text-white',
                },
              }"
              :value="data.status"
            />
          </template>
        </Column>
        <Column header="Created">
          <template #body="{ data }">
            {{ useDateFormat(data.created, "YYYY-MM-DD") }}
          </template>
        </Column>
        <Column header="Last login">
          <template #body="{ data }">
            {{ useDateFormat(data.last_login, "YYYY-MM-DD") }}
          </template>
        </Column>
        <Column header="Las IP" field="login_ip" />
        <Column header="Comment" field="comment" />
      </DataTable>
    </div>
    <ui-footer />
  </section>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { useClientsStore } from "~~/store/clients";
import { useAuthStore } from "~/store/auth";

const auth = useAuthStore();
const clientsStore = useClientsStore();
await clientsStore.fetchClients();
</script>

<style scoped>
.router-link-exact-active {
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -16px;
    left: 0;

    @apply bg-blue-8;
  }
}
</style>
