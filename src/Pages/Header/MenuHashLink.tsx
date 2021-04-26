const MenuHashLink = ({
 to,
 children,
 setIsMenuOpen,
}: menuHashLinkProps): JSX.Element => (
 <a
  href={`#${to}`}
  className="navbar__links"
  onClick={() => setIsMenuOpen(false)}
 >
  {children}
 </a>
);

type menuHashLinkProps = {
 to: string;
 children: string;
 setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default MenuHashLink;
