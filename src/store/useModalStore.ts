import { create } from "zustand";

import { Modals } from "@/utils/constants";

interface ModalStore {
  activeModal: Modals | null;
  setActiveModal: (a: Modals | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  setActiveModal: (data) => set({ activeModal: data }),
  closeModal: () => set({ activeModal: null }),
}));
