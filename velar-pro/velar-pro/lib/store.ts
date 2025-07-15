import create from "zustand"; export const useVelarStore = create((set) => ({ user: null, setUser: (u) => set ({ user:u }) }));
