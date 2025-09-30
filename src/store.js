import { create } from "zustand";
import { getEvents } from "./services/useApi";

export const useEventsStore = create((set) => ({
  events: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await getEvents(); // call the fetch function
      debugger;
      set({ events: response.items });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
