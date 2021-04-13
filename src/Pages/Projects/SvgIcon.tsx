const SvgIcon = ({ name, title, size }: svgIcon) => (
 <>
  <img
   src={require(`../../Assets/Icons/${name}.svg`).default}
   alt={`Icon of ${name}`}
   style={{ width: `${size}px` }}
  />
  <span>{title}</span>
 </>
);

type svgIcon = {
 name: string;
 title: string;
 size: number;
};

export default SvgIcon;
