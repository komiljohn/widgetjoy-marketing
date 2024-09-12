/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { Sheets } from "@/utils/constants";

interface ModalStore {
  activeSheet: Sheets | null;
  setActiveSheet: (a: Sheets | null) => void;
  sheetData: any | null;
  setSheetData: (a?: any) => void;
}

export const useBottomSheetStore = create<ModalStore>((set) => ({
  activeSheet: null,
  sheetData: null,
  setActiveSheet: (data) => set({ activeSheet: data }),
  setSheetData: (data) => set({ sheetData: data }),
}));
