import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

import styles from '../../../styles/filterBtn.module.css'

const FilterBtn = () => {
  return (
    <div className={styles['filter-container']}>
      <FontAwesomeIcon icon={faFilter} className={styles['filter-icon']} />
      <span className={styles['filter-text']}>Filters</span>
    </div>
  );
}

export default FilterBtn;