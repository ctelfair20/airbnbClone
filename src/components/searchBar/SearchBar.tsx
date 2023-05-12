import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className={styles['searchbar-container']}>
      <div className={styles['content']}>
        <span>Anywhere</span>
        <span>Any week</span>
        <span>Add guests</span>
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={ } />
    </div>
  );
}

export default SearchBar;