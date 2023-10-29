<template>
  <footer
    class="flex-grow flex justify-between w-full border-t border-t-blue-2 absolute bottom-0"
  >
    <div class="flex items-center gap-5 py-6 pl-7">
      <nuxt-link class="text-blue-6" to="/">О нас</nuxt-link>
      <nuxt-link class="text-blue-6" to="/"
        >Пользовательское соглашение</nuxt-link
      >
    </div>
    <div class="flex items-center gap-6 pr-7">
      <NuxtLink to="/">
        <icons-socials name="fb" />
      </NuxtLink>
      <NuxtLink to="/">
        <icons-socials name="ig" />
      </NuxtLink>
      <NuxtLink to="/">
        <icons-socials name="twitter" />
      </NuxtLink>
      <NuxtLink to="/">
        <icons-socials name="linkedin" />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
