import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'

const Logo = () => {
  return (
    <div className="logo-conatainer">
      <FontAwesomeIcon icon={faAirbnb}></FontAwesomeIcon>
      <h1 className='logo'>airbnb</h1>
    </div>
  );
}

export default Logo;