import { create } from 'zustand';

type ModalData = {
  index: number;
  active: boolean;
  title: string;
  activeContainer: boolean;
  modalType: 'workCard' | 'floatSvg';
};

type TechModalProps = {
  modalData: ModalData;

  enterContainer: () => void;
  leaveContainer: () => void;
  handleMouseEnter: (
    index: number,
    title: string,
    modalType: 'workCard' | 'floatSvg'
  ) => void;
  handleMouseLeave: (
    index: number,
    title: string,
    modalType: 'workCard' | 'floatSvg'
  ) => void;
};

export const useModalSvg = create<TechModalProps>((set) => ({
  modalData: {
    active: false,
    index: 0,
    title: '',
    activeContainer: false,
    modalType: 'floatSvg'
  },
  activeContainer: false,
  handleMouseEnter: (index = 0, title, modalType) =>
    set((state) => ({
      modalData: { ...state.modalData, active: true, index, title, modalType }
    })),
  handleMouseLeave: (index = 0, title, modalType) =>
    set((state) => ({
      modalData: { ...state.modalData, active: false, index, title, modalType }
    })),
  enterContainer: () =>
    set((state) => ({
      modalData: { ...state.modalData, activeContainer: true }
    })),
  leaveContainer: () =>
    set((state) => ({
      modalData: { ...state.modalData, activeContainer: false }
    }))
}));
