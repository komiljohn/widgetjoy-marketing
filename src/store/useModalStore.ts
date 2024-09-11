/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { Modals } from "@/utils/constants";

interface ModalStore {
  activeModal: Modals | null;
  setActiveModal: (a: Modals | null) => void;
  closeModal: () => void;
  modalData: any | null;
  setModalData: (a?: any) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  modalData: null,
  setActiveModal: (data) => set({ activeModal: data }),
  setModalData: (data) => set({ modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: null }),
}));
