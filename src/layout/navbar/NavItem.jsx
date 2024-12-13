import { Link } from "react-router";

const NavItem = ({label, to}) => {
  return (
    <li className="flex justify-center">
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;
