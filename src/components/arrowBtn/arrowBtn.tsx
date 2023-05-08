import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const arrowBtn = () => {
  return (
    <div className="arrow-container">
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export default arrowBtn;