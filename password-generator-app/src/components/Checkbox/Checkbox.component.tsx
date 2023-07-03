import styles from './Checbox.module.css'

interface CheckboxProps {
  clicked: boolean;
  setClicked: (a: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { clicked, setClicked } = props;

  return (
    <div className={styles.container} onClick={() => setClicked(!clicked)}>
      <div className={`${styles.checkbox} ${clicked ? styles.clicked : ''}`}>
        {
          clicked &&
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
          </svg>
        }
      </div>
      <p>Include Uppercase Letters</p>
    </div>
  )
}
