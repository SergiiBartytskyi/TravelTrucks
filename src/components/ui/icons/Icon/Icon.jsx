const Icon = ({
  width = 20,
  height = 20,
  className = "",
  iconId = "",
  ...props
}) => {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use xlinkHref={`/symbol-defs.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
