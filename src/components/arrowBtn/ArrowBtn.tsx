import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from '../../../styles/arrowBtn.module.css'

const ArrowBtn = () => {
  return (
    <div className={styles['arrow-container']}>
      <FontAwesomeIcon icon={faArrowRight} className={styles['arrow']} />
    </div>
  );
}

export default ArrowBtn;