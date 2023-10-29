import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useReviewStore = defineStore("review", () => {
  const url = useRuntimeConfig().public.baseURL;
  const token = useAuthStore().token;

  const user = ref();

  const getUserForReview = async (id: string) => {
    await useFetch(`${url}review/reviews-page`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        id,
      },
      onResponse({ response }) {
        user.value = response._data;
      },
    });
  };

  return { user, getUserForReview };
});
