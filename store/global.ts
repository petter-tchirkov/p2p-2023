import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const isSidebarOpen = ref(true);
  const selectedLang = ref({ name: "Eng", code: "eng" });

  return {
    isSidebarOpen,
    selectedLang,
  };
});
