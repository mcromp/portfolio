import "./styles/styles.css";
export const TextLink = ({
 link,
 children,
}: {
 link: string;
 children: string;
}): JSX.Element => (
 <a href={link} className="text-link" target="_blank" rel="noreferrer">
  {children}
 </a>
);
