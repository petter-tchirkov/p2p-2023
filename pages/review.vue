<template>
  <section>
    <ui-header>
      <template #pageTitle>
        <span class="font-bold text-blue-8 text-xl">Отзывы о Rick Astley</span>
      </template>
      <template #right>
        <user-panel />
      </template>
    </ui-header>
    <div class="flex h-[calc(100%-73px)]">
      <div class="pl-12 pt-7">
        <div class="flex items-center mb-7">
          <img
            class="w-12 h-12 rounded-full object-cover mr-5"
            src="https://www.towleroad.com/wp-content/uploads/2021/02/astley-1024x736.jpeg"
            alt=""
          />
          <span class="text-3xl mr-2">Rick Astley</span>
          <icons-base name="verifStatus" />
        </div>
        <div class="grid grid-cols-2 gap-5">
          <span class="text-gray-7 text-sm">Статус</span>
          <Tag
            value="Верифицирован"
            class="px-8 border border-blue-3 bg-blue-1 text-blue-6 rounded w-fit"
          />
          <span class="text-gray-7 text-sm">Был на сайте</span>
          <span class="text-green-7">Online</span>
          <span class="text-gray-7 text-sm">О себе</span>
          <span class=""
            >Я всегда онлайн. Меняю крупные суммы на<br />
            Сбербанк, Яндекс, Киви и другие валты<br />
            в рублях.</span
          >
          <span class="text-gray-7 text-sm">На проекте</span>
          <span>с 10 октября 2021</span>
          <span class="text-gray-7 text-sm">Активных заявок</span>
          <span class="font-bold">Нет</span>
          <span class="text-gray-7 text-sm"
            >Среднее время<br />
            отправки депозита
          </span>
          <span class="font-bold">15 минут</span>
          <span class="text-gray-7 text-sm">В черном списке у</span>
          <span class="font-bold">2 пользователей</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useReviewStore } from "~/store/review";

const reviewStore = useReviewStore();
const route = useRoute();

await reviewStore.getUserForReview(route.query.id);
</script>

<style scoped></style>
