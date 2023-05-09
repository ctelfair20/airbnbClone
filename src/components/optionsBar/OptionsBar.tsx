import FilterBtn from '../filterBtn/FilterBtn'
import ArrowBtn from '../arrowBtn/ArrowBtn'

import styles from '../../../styles/optionsBar.module.css'

const OptionsBar = () => {
  return (
    <div className={styles['options-bar']}>
      <ArrowBtn />
      <FilterBtn />
    </div>
  );
}

export default OptionsBar;