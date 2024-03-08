import { create } from "zustand";

const useAuth = create((set) => ({
  isAuth: false,
  setIsAuth: (value) => set((state) => ({ isAuth: value })),
}));

export { useAuth };
