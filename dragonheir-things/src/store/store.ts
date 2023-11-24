import { create } from 'zustand'

interface Modalingr {
  isOpen: boolean;
  id: number;
  setIsOpen: (by: boolean) => void
  setID: (by: number) => void
}

export const useModalStore = create<Modalingr>((set): Modalingr => ({
  isOpen: false,
  id: 0,
  setIsOpen: (arg: boolean) => set((state) => ({...state, isOpen: arg })),
  setID: (arg:number) => set((state) => ({...state, id: arg})),
}))
