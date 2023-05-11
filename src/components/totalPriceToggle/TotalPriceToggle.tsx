import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons"

import styles from '../../../styles/totalPriceToggle.module.css'

const TotaLPriceToggle = () => {
  return (
    <div className={styles['price-toggle-container']}>
      <span className={styles['label']}>Display total price</span>
      <div>
        <span className={styles['sub-label']}></span>
      </div>
      <FontAwesomeIcon icon={faToggleOn} className={styles['toggle-icon']} />

    </div>
  );
}

export default TotaLPriceToggle;