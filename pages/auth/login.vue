<template>
  <section
    class="flex items-center justify-center w-full min-h-screen bg-layout-bg"
  >
    <div class="flex flex-col w-full max-w-md gap-6 p-6 bg-white rounded-lg">
      <h1 class="text-xl font-bold text-center">Login to your account</h1>
      <InputText
        v-model="creds.email"
        placeholder="Email"
        class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
      />
      <InputText
        v-model="creds.password"
        placeholder="Password"
        class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
      />
      <div class="flex justify-between">
        <div class="flex items-center">
          <Checkbox
            v-model="check"
            input-id="ingredient1"
            name="pizza"
            value="Cheese"
            :binary="true"
            :pt="{
              input: ({ context }) => ({
                class: context.checked
                  ? 'w-4 h-4  bg-blue-6 rounded flex justify-center items-center'
                  : 'border-2 border-blue-6 w-4 h-4 rounded',
              }),
              icon: {
                class: 'text-white',
              },
            }"
          />
          <label for="ingredient1" class="ml-2"> Remember me </label>
        </div>
        <NuxtLink to="/auth/register" class="text-blue-6">No account?</NuxtLink>
      </div>
      <Button
        label="Login"
        @click="useAuthStore().getToken(creds)"
        class="w-full py-2 text-white rounded-lg bg-blue-6"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

definePageMeta({
  layout: "auth",
});

const creds = ref({ email: "user1@gmail.com", password: "12345" });
const check = ref(true);
</script>

<style scoped></style>
