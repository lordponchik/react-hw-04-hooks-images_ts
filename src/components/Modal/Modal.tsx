import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot: HTMLDivElement | null = document.querySelector('#modal-root');

export default function Modal() {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>
        <img src="" alt="" />
      </div>
    </div>,
    modalRoot!
  );
}
