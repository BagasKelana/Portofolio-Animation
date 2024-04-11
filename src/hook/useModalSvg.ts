import { create } from 'zustand';

type TechModalProps = {
  modalData: { index: number; active: boolean; title: string };
  handleMouseEnter: (index: number, title: string) => void;
  handleMouseLeave: (index: number, title: string) => void;
};

export const useModalSvg = create<TechModalProps>((set) => ({
  modalData: { active: false, index: 0, title: '' },
  handleMouseEnter: (index, title) =>
    set({ modalData: { active: true, index: index, title: title } }),
  handleMouseLeave: (index, title) =>
    set({ modalData: { active: false, index: index, title: title } })
}));
