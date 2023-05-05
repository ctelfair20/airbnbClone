import styles from '../../../styles/airbnbYourHomeBtn.module.css'

const AirbnbYourHomeBtn = () => {
  return (
    <div className={`${styles['airbnb-button-container']} shaded-container`}>
      <span>Airbnb your home</span>
    </div>
  );
}

export default AirbnbYourHomeBtn;