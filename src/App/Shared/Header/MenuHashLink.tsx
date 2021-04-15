import { HashLink } from "react-router-hash-link";

const MenuHashLink = ({
 to,
 children,
 setIsMenuOpen,
}: menuHashLinkProps): JSX.Element => (
 <HashLink
  className="navbar__links"
  smooth
  replace
  to={`/#${to}`}
  onClick={() => setIsMenuOpen(false)}
 >
  {children}
 </HashLink>
);

type menuHashLinkProps = {
 to: string;
 children: string;
 setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default MenuHashLink;
