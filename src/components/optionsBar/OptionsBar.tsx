import FilterBtn from '../filterBtn/FilterBtn'
import ArrowBtn from '../arrowBtn/ArrowBtn'

import styles from '../../../styles/optionsBar.module.css'

const OptionsBar = () => {
  //TODO: iterate through the array of images from the optionsBarIcons folder. Pass one 'option' to the option comp with each iteration
  return (
    <div className={styles['options-bar']}>
      <ArrowBtn />
      <FilterBtn />
    </div>
  );
}

export default OptionsBar;