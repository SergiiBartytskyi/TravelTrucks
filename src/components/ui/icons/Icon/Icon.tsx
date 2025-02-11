import { SVGAttributes } from "react";
import sprite from "/sprite.svg";

type IconProps = SVGAttributes<SVGSVGElement> & {
  width?: number;
  height?: number;
  className?: string;
  iconId: string;
};

const Icon = ({
  width = 20,
  height = 20,
  className = "",
  iconId = "",
  ...props
}: IconProps) => {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;
