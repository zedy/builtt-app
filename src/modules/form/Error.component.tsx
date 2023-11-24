type Props = {
  message: string;
};

function FormError({ message }: Props) {
  return <span className="block text-red-800 text-xs mb-3">{message}</span>;
}

export default FormError;
