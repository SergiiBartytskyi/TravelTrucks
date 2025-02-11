import { Link } from "react-router";
import LogoIcon from "../ui/icons/LogoIcon/LogoIcon";

type LogoProps = {
  className: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={className}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
