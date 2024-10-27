import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot: HTMLDivElement | null = document.querySelector('#modal-root');

interface Props {
  toggleModal: (data: string) => void;
  children: React.ReactNode;
}

export default function Modal({ toggleModal, children }: Props) {
  const toggleModalOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal('');
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={toggleModalOnClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot!
  );
}
