import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"

const Logo = () => {
  return (
    <div className='logo-container'>
      <FontAwesomeIcon icon={faAirbnb} className='logo' />
      <h1>airbnb</h1>
    </div>
  );
}

export default Logo;