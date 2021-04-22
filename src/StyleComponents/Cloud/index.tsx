import "./styles/styles.css";

export const Cloud = ({ list }: { list: string[] }): JSX.Element => (
 <ul>
  {list.map((item) => (
   <li key={item}>{item}</li>
  ))}
 </ul>
);
