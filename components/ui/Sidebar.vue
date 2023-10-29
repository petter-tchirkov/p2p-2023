<template>
  <aside
    class="min-h-screen bg-blue-8 flex flex-col justify-between transition"
    :class="global.isSidebarOpen ? 'w-60' : 'w-auto'"
  >
    <div
      class="relative"
      :class="global.isSidebarOpen ? 'py-6 px-5' : 'py-6 px-2'"
    >
      <div class="flex justify-center">
        <icons-logo
          :variant="getIconVariant"
          class="mb-7 cursor-pointer"
          @click="router.push('/')"
        />
      </div>
      <div v-if="!auth.isLogin">
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
      <div v-else class="flex flex-col gap-8">
        <div class="flex flex-col">
          <h3
            v-if="global.isSidebarOpen"
            class="text-lg text-white opacity-50 font-bold mb-5 px-2 py-1"
          >
            Аккаунты
          </h3>
          <div class="flex flex-col gap-3">
            <NuxtLink
              to="/auth/login"
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="accounts" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Счета</span
              >
            </NuxtLink>
            <NuxtLink
              to="/settings"
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="settings" class="rotate-180" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Настройки</span
              >
            </NuxtLink>
            <NuxtLink
              to="/partners"
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="partners" class="rotate-180" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Партнерам</span
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <h3
            v-if="global.isSidebarOpen"
            class="text-lg text-white opacity-50 font-bold mb-5 px-2 py-1"
          >
            Заявки
          </h3>
          <div class="flex flex-col gap-3">
            <NuxtLink
              :to="{
                name: 'orders',
                query: { status: 'active' },
              }"
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="activeOrders" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Активные</span
              >
            </NuxtLink>
            <NuxtLink
              :to="{
                name: 'orders',
                query: { status: 'accepted' },
              }"
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="acceptedOrders" class="rotate-180" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Принятные</span
              >
            </NuxtLink>
            <NuxtLink
              :to="{
                name: 'orders',
                query: { status: 'closed' },
              }"
              exact
              class="flex items-center px-2 py-1"
              :class="global.isSidebarOpen ? 'gap-3' : 'justify-center'"
            >
              <icons-base name="closedOrders" class="rotate-180" />
              <span
                v-if="global.isSidebarOpen"
                class="text-white text-lg font-bold"
                >Закрытые</span
              >
            </NuxtLink>
          </div>
        </div>
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
import { useRouter } from "vue-router";
import { useGlobalStore } from "~/store/global";
import { useAuthStore } from "~/store/auth";

const global = useGlobalStore();
const auth = useAuthStore();
const router = useRouter();

const getIconVariant = computed(() => {
  if (global.isSidebarOpen) {
    return "full";
  } else {
    return "short";
  }
});
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-blue-5 rounded;
  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0 48%, 0% 0%);
}
</style>
