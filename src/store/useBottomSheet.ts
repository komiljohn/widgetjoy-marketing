import { create } from "zustand";

import { Sheets } from "@/utils/constants";

interface ModalStore {
  activeSheet: Sheets | null;
  setActiveSheet: (a: Sheets | null) => void;
}

export const useBottomSheet = create<ModalStore>((set) => ({
  activeSheet: null,
  setActiveSheet: (data) => set({ activeSheet: data }),
}));
