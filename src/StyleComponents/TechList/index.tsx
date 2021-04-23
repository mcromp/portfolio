import "./styles/styles.css";

export const TechList = ({ list }: { list: string[] }): JSX.Element => (
 <div className="tech-list" aria-label="List of tech used">
  {list.map((el) => (
   <span key={el}>{el}</span>
  ))}
 </div>
);
