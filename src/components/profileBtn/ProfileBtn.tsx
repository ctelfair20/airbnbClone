import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/profileBtn.module.css';

const ProfileBtn = () => {
  return (
    <button
      className={styles['profile-button']}
      aria-label="profile-button"
    >
      {/* This is how to add multiple classes to an element in next.js */}
      <div className={styles['profile-button-icon-container']}>
        {/* no need to wrap fontawesome icons in next image components */}
        <FontAwesomeIcon icon={faBars} className={`icon ${styles['menu']}`} aria-label="menu" />
        <FontAwesomeIcon icon={faCircleUser} className={`icon ${styles['profile-picture']}`} aria-label="profile-picture" />
      </div>
    </button>
  );
}

export default ProfileBtn;