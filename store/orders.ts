import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

interface Order {
  _id: string;
  for_verified: boolean;
  from: {
    amount_to_sell: number;
    rate: number;
    system: string;
  };
  rating: {
    good: number;
    bad: number;
    rating: number;
    total: number;
  };
  reveive_type: string;
  to: [
    {
      logo: string;
      name: string;
    },
  ];
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    verif_status: string;
  };
}

export const useOrderStore = defineStore("orders", () => {
  const url = useRuntimeConfig().public.baseURL;
  const token = useAuthStore().token;
  const sells: Ref<Order[]> = ref([]);
  const buys: Ref<Order[]> = ref([]);
  const userOrders: Ref<Order[]> = ref([]);

  const getSellOrders = async () => {
    await useFetch(`${url}orders/sell-orders`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      onResponse({ response }) {
        sells.value = response._data;
      },
    });
  };

  const getBuyOrders = async () => {
    await useFetch(`${url}orders/buy-orders`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      onResponse({ response }) {
        buys.value = response._data;
      },
    });
  };

  const getUserOrders = async (status: string) => {
    await useFetch(`${url}orders/user-orders`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        status,
      },
      onResponse({ response }) {
        userOrders.value = response._data;
      },
    });
  };

  return {
    getSellOrders,
    sells,
    getBuyOrders,
    buys,
    getUserOrders,
    userOrders,
  };
});
