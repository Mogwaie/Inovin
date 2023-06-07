import logoInovin from "../assets/images/logo-inovin.svg";
import UserBurgerMenu from "./UserBurgerMenu";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={logoInovin} alt="logo website inovin" />
      <UserBurgerMenu />
    </div>
  );
}
