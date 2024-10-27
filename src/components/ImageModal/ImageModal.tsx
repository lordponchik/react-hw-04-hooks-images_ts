interface Props {
  data: string;
}

export default function ImageModal({ data }: Props) {
  return <img src={data} alt="" />;
}
