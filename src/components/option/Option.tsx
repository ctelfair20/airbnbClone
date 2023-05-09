import Image from 'next/image'

import styles from '../../../../styles/option.module.css'

interface Props {
  option: {
    img: string
    alt: string
    title: string
  }
}

const Option = ({ option }: Props) => {
  return (
    <div className={styles['option-image-container']}>
      <Image src={option.img} alt={option.alt} className={styles['option-image']} />
      <span className={styles['option-title']}>{option.title}</span>
    </div>
  );
}

export default Option;