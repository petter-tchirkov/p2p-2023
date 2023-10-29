import { defineStore } from "pinia";
import { useRuntimeConfig } from "nuxt/app";
import { useRouter } from "#vue-router";

interface Creds {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const url = useRuntimeConfig().public.baseURL;
  const isLogin = computed<boolean>(() => !!token.value);
  const token = useCookie("access_token", {
    default: () => null,
    watch: true,
    maxAge: 1800,
  });
  const router = useRouter();

  const getToken = async (creds: Creds) => {
    await useFetch(`${url}users/login`, {
      method: "POST",
      body: {
        email: creds.email,
        password: creds.password,
      },
      onResponse({ response }) {
        if (response.status === 200) {
          token.value = response._data.token;
          router.push("/");
        }
      },
    });
  };

  const logout = async () => {
    await router.push("/auth/login");
    token.value = null;
  };
  return {
    isLogin,
    getToken,
    token,
    logout,
  };
});
