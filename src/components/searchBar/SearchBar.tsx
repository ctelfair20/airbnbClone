import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/searchbar.module.css'

const SearchBar = () => {
  return (
    <div className={styles['searchbar-container']}>
      <div className={styles['content']}>
        <span className={styles['column']}>Anywhere</span>
        {/* This div allows the center text to have left and right borders the size of the text */}
        <div>
          <span className={`${styles['column']} ${styles['center']}`}>Any week</span>
        </div>
        <span className={`${styles['column']} ${styles['right']}`}>Add guests</span>
      </div>
      <div className={styles['search-icon-container']}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
      </div>
    </div>
  );
}

export default SearchBar;