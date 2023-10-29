<template>
  <div class="flex items-center justify-center min-h-screen bg-layout-bg">
    <form class="flex flex-col w-full max-w-lg gap-6 p-6 bg-white rounded-lg">
      <h1 class="text-xl font-bold text-center">Регистрация</h1>
      <div class="flex justify-between gap-4">
        <InputText
          placeholder="John"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
        <InputText
          placeholder="Doe"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
      </div>
      <InputText
        placeholder="john.doe@mail.com"
        class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
      />
      <Password
        placeholder="********"
        class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
      />
      <div class="flex justify-between gap-4">
        <InputText
          placeholder="e.g United Kingdom"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
        <InputText
          placeholder="e.g 10 Downing St, London, UK"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
      </div>
      <div class="flex justify-between gap-4">
        <InputText
          placeholder="XXX-XXX-XX-XX"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
        <InputText
          placeholder="Your passport"
          class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
        />
      </div>
      <Textarea
        placeholder="Proud to be here"
        class="p-2 border-2 rounded outline-none focus-visible:border-blue-6"
      />
      <Button
        label="Register"
        class="w-full py-2 text-white rounded-lg bg-blue-6"
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
        <NuxtLink to="/auth/login" class="text-blue-6"
          >Have an account?</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });
</script>

<style scoped></style>
