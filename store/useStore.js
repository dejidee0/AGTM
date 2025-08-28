import { create } from 'zustand';

export const useStore = create((set) => ({
  // Popup state
  isPopupVisible: false,
  showPopup: () => set({ isPopupVisible: true }),
  hidePopup: () => set({ isPopupVisible: false }),
  
  // Mobile menu state
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  
  // Service dropdowns state
  openDropdown: null,
  setOpenDropdown: (dropdown) => set({ openDropdown: dropdown }),
  
  // Form states
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
  leadForm: {
    name: '',
    company: '',
    email: '',
  },
  updateContactForm: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),
  updateLeadForm: (field, value) =>
    set((state) => ({
      leadForm: { ...state.leadForm, [field]: value },
    })),
  resetContactForm: () =>
    set({ contactForm: { name: '', email: '', message: '' } }),
  resetLeadForm: () =>
    set({ leadForm: { name: '', company: '', email: '' } }),
}));