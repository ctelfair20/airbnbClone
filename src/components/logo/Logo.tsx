import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"

import styles from "../../../styles/logo.module.css"

const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <FontAwesomeIcon icon={faAirbnb} className={styles['logo']} />
      <h1 className={styles['title']}>airbnb</h1>
    </div>
  );
}

export default Logo;