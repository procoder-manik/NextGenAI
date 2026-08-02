import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
};

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        const nextTheme = get().theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        set({ theme: nextTheme });
      },
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      initTheme: () => {
        const storedTheme = get().theme;
        const nextTheme = storedTheme || getPreferredTheme();
        applyTheme(nextTheme);
        if (!storedTheme) {
          set({ theme: nextTheme });
        }
      },
    }),
    {
      name: 'nextgenai-theme-storage',
    }
  )
);
