<template>
  <section class="relative">
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
    <div class="pt-4">
      <DataTable
        :value="useOrderStore().sells"
        :pt="{
          table: { class: 'w-full' },
          bodyRow: { class: 'border-b border-b-blue-2' },
          thead: { class: 'border-b border-b-blue-2' },
          headerRow: { class: 'text-xs text-gray-7 font-light' },
        }"
        @row-click="
          (event) => {
            router.push({
              path: '/review',
              query: { id: event.data.user._id },
            });
          }
        "
      >
        <template #empty>
          <div class="py-3 text-center">Ничего не найдено</div>
        </template>

        <Column
          header="Пользователь"
          class="px-7 py-2 border-r border-r-blue-2 min-w-[750px]"
        >
          <template #body="{ data }">
            <div class="flex justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="object-cover rounded-full w-7 h-7"
                  src="https://www.towleroad.com/wp-content/uploads/2021/02/astley-1024x736.jpeg"
                  alt=""
                />
                <span>
                  {{ data.user.firstname }}
                  {{ data.user.lastname }}</span
                >
                <icons-base
                  v-if="data.user.verif_status !== 'not_verified'"
                  name="verifStatus"
                />
              </div>
              <div class="flex items-center gap-2">
                <icons-currencies
                  :name="data.from.system"
                  class="flex items-center w-8 h-8"
                />
                <icons-currencies
                  name="arrow"
                  class="flex items-center w-5 h-3"
                />
                <icons-currencies
                  :name="data.from.system"
                  class="flex items-center w-8 h-8"
                />
              </div>
            </div>
          </template>
        </Column>
        <Column
          header="Сумма на продажу"
          class="py-2 border-r px-7 border-r-blue-2"
        >
          <template #body="{ data }">
            <span>$ {{ data.from.amount_to_sell }}</span>
          </template>
        </Column>
        <Column header="Рейтинг" class="py-2 border-r px-7 border-r-blue-2">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <icons-base name="star" />
              <span>{{ data.rating.rating }}</span>
              <span class="text-gray-7">({{ data.rating.total }})</span>
            </div>
          </template>
        </Column>
        <Column header="Репутация" class="py-2 px-7">
          <template #body="{ data }">
            <div class="flex gap-5">
              <div class="flex items-center gap-1 5">
                <icons-base name="like" />
                <span class="text-green-7">{{ data.rating.good }}</span>
              </div>
              <div class="flex items-center gap-1 5">
                <icons-base name="dislike" />
                <span class="text-red-7">{{ data.rating.bad }}</span>
              </div>
            </div>
          </template>
        </Column>
      </DataTable>
      <disclaimer />
    </div>
    <ui-footer />
  </section>
</template>

<script setup lang="ts">
import { useOrderStore } from "~/store/orders";
import { useAuthStore } from "~/store/auth";
import { useRouter } from "vue-router";

await useOrderStore().getSellOrders();
const auth = useAuthStore();
const router = useRouter();
</script>

<style lang="scss" scoped>
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

.grid-table {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}
</style>
