import { Link } from "react-router";
import LogoIcon from "../ui/icons/LogoIcon/LogoIcon";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
