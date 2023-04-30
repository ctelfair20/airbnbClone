import styles from '../../../styles/profileBtn.module.css';

const ProfileBtn = () => {
  return (
    <div className={styles['profile-button-container']}>
      <button
        className={styles['profile-button']}
      >
        hello world
      </button>
    </div>
  );
}

export default ProfileBtn;