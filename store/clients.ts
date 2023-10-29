import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

interface Client {
  comment: string;
  created: string;
  email: string;
  id: number;
  last_login: string;
  login_ip: string;
  status: "ok" | "block";
  verif_status: "verified" | "not_verified";
  _id: string;
}

export const useClientsStore = defineStore("clients", () => {
  const url = useRuntimeConfig().public.baseURL;
  const token = useAuthStore().token;

  const clients: Ref<Client[]> = ref([]);

  const fetchClients = async () => {
    await useFetch(`${url}users/clients`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      onResponse({ response }) {
        clients.value = response._data;
      },
    });
  };

  return { clients, fetchClients };
});
