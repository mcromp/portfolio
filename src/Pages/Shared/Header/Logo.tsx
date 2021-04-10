import { HashLink } from "react-router-hash-link";

const Logo = (): JSX.Element => (
 <HashLink style={{ textDecoration: "none" }} smooth replace to="/#">
  <h1 className="logo">MCROMP</h1>
 </HashLink>
);

export default Logo;
