import styles from './Button.module.css';
import arrowIcon from '../../assets/images/icon-arrow-right.svg';

interface ButtonProps {
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <p className={styles.text}>generate</p>
      <svg className={styles.image} width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path id="arrow-icon"  fill="currentColor" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
      </svg>
    </div>
  )
}