import AirbnbYourHomeBtn from "../airbnbYourHomeBtn/airbnbYourHomeBtn";
import GlobeBtn from "../globeBtn/GlobeBtn";
import Logo from "../logo/Logo";
import ProfileBtn from "../profileBtn/ProfileBtn";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-right">
        <Logo />
      </div>
      <div className="nav-left">
        <ProfileBtn />
        <GlobeBtn />
        <AirbnbYourHomeBtn />
      </div>
    </nav>
  );
}

export default Navbar;