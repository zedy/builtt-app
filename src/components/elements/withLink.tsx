// libs
import { Link } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  href: string;
};

function WithLink({ children, href }: Props) {
  return (
    <Link className="relative" to={href}>
      {children}
    </Link>
  );
}

export default WithLink;
