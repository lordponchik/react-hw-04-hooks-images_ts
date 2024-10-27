import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot: HTMLDivElement | null = document.querySelector('#modal-root');

interface Props {
  toggleModal: (data?: string) => void;
  children: React.ReactNode;
}

export default function Modal({ toggleModal, children }: Props) {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  const closeModal = (e: KeyboardEvent | React.MouseEvent<HTMLDivElement>) => {
    if (e instanceof KeyboardEvent && e.code === 'Escape') {
      toggleModal();
    }

    if ('target' in e && e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot!
  );
}
