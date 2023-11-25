// libs
import { Link } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  id: number | string;
};

function WithLink({ children, id }: Props) {
  return <Link to={`/product/${id}`}>{children}</Link>;
}

export default WithLink;
