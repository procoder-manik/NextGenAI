import { create } from 'zustand';

export const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  modalOpen: false,
  loading: false,
  setMobileMenuOpen: (value) => set({ mobileMenuOpen: value }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setModalOpen: (value) => set({ modalOpen: value }),
  setLoading: (value) => set({ loading: value }),
}));
