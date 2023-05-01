import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/profileBtn.module.css';

const ProfileBtn = () => {
  return (
    <div className={styles['profile-button-container']}>
      <button
        className={styles['profile-button']}
      >
        {/* no need to wrap fontawesome icons in next image components */}
        <FontAwesomeIcon icon={faCircleUser} style={{ color: "#757071", }} />
      </button>
    </div>
  );
}

export default ProfileBtn;