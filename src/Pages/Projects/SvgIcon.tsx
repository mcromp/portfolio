const SvgIcon = ({ name, title, size }: svgIcon): JSX.Element => (
 <div className="svg-card">
  <img
   className="svg-card__icon"
   src={require(`../../Assets/Icons/${name}.svg`).default}
   alt={`Icon of ${name}`}
  />
  <span className="svg-card__title">{title}</span>
 </div>
);

type svgIcon = {
 name: string;
 title: string;
 size: number;
};

export default SvgIcon;
