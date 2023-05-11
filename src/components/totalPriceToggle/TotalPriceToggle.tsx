import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const TotaLPriceToggle = () => {
  return (
    <div className={style['price-toggle-container']}>
      <span className={style['label']}>Display total price</span>
      <div>
        <span className={style['sub-label']}></span>
      </div>
      <FontAwesomeIcon icon={faToggleOn} />

    </div>
  );
}

export default TotaLPriceToggle;