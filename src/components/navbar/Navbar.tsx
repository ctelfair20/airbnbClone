import AirbnbYourHomeBtn from '../airbnbYourHomeBtn/airbnbYourHomeBtn'
import GlobeBtn from '../globeBtn/GlobeBtn'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import ProfileBtn from '../profileBtn/ProfileBtn'

import styles from '../../../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav-left"]}>
        <Logo />
      </div>
      <SearchBar />
      <div className={styles["nav-right"]}>
        <AirbnbYourHomeBtn />
        <GlobeBtn />
        <ProfileBtn />
      </div>
    </nav>
  );
}

export default Navbar;