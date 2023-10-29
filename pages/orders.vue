<template>
  <section>
    <ui-header>
      <template #pageTitle>
        <div class="flex gap-5">
          <NuxtLink
            to="/clients"
            class="relative text-xl font-medium text-blue-8"
            >Ваши счета</NuxtLink
          >
          <NuxtLink to="/" class="relative text-xl font-medium text-blue-8"
            >Продажа</NuxtLink
          >
          <NuxtLink to="/buy" class="text-xl font-medium text-blue-8"
            >Покупка</NuxtLink
          >
        </div>
      </template>
      <template #right>
        <auth-panel v-if="!auth.isLogin" />
        <user-panel v-else />
      </template>
    </ui-header>

    <div>{{ route.query.status }}</div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAuthStore } from "~/store/auth";
import { useOrderStore } from "~/store/orders";

const auth = useAuthStore();
const route = useRoute();
const orderStore = useOrderStore();

await orderStore.getUserOrders(route.query.status);
</script>

<style scoped></style>
