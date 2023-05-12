import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/searchbar.module.css'

const SearchBar = () => {
  return (
    <div className={styles['searchbar-container']}>
      <div className={styles['content']}>
        <span>Anywhere</span>
        <span>Any week</span>
        <span>Add guests</span>
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
    </div>
  );
}

export default SearchBar;