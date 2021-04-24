import { Menu as MenuIcon, X } from "react-feather";

const MenuToggle = ({
 isMenuOpen,
 isVisible,
 setIsMenuOpen,
}: MenuToggleProps): JSX.Element => (
 <button
  className={"menu-toggle"}
  onClick={() => setIsMenuOpen((pS) => !pS)}
  aria-label="Open the menu"
 >
  {isMenuOpen && isVisible ? (
   <X color="black" size={45} />
  ) : (
   <MenuIcon color="black" size={40} />
  )}
 </button>
);

type MenuToggleProps = {
 isMenuOpen: boolean;
 isVisible: boolean;
 setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default MenuToggle;
