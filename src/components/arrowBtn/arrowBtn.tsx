import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from '../../../styles/arrowBtn.module.css'

const arrowBtn = () => {
  return (
    <div className="arrow-container">
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export default arrowBtn;