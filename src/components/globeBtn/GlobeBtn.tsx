import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/globeBtn.module.css'

const GlobeBtn = () => {
  return (
    <div className={`${styles['globe-container']} shaded-container`}>
      <FontAwesomeIcon
        icon={faGlobe}
        className='icon'
        aria-label='globeIcon'
      />
    </div>
  );
}

export default GlobeBtn;