import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/profileBtn.module.css';

const ProfileBtn = () => {
  return (
    <div className={styles['profile-button-container']}>
      <button
        className={styles['profile-button']}
      >
        {/* This is how to add multiple classes to an element in next.js */}
        <div className={styles['profile-button-icon-container']}>
          {/* no need to wrap fontawesome icons in next image components */}
          <FontAwesomeIcon icon={faBars} className={`${styles['icon']} ${styles['menu']}`} />
          <FontAwesomeIcon icon={faCircleUser} className={`${styles['icon']} ${styles['profile-picture']}`} />
        </div>
      </button>
    </div>
  );
}

export default ProfileBtn;