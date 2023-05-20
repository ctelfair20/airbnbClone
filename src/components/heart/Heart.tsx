import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/heart.module.css'
const Heart = () => {
  return (
    <FontAwesomeIcon icon={faHeart} className={styles['heart-icon']} />
  );
}

export default Heart;