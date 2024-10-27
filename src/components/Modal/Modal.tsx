import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { ReactNode } from 'react';

const modalRoot: HTMLDivElement | null = document.querySelector('#modal-root');

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot!
  );
}
