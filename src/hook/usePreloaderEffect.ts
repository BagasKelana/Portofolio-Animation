import { create } from 'zustand';

type preloaderEffectProps = {
  isLoading: boolean;

  setIsLoading: (loading: boolean) => void;
};

export const usePreloaderEffect = create<preloaderEffectProps>((set) => ({
  isLoading: true,
  setIsLoading: (loading) =>
    set(() => ({
      isLoading: loading
    }))
}));
