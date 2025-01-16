import sprite from "/sprite.svg";

const Icon = ({
  width = 20,
  height = 20,
  className = "",
  iconId = "",
  ...props
}) => {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;
