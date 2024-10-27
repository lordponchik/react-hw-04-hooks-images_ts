import s from './Button.module.css';

interface Props {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: Props) {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      {title}
    </button>
  );
}
