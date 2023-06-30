import styles from './Button.module.css';

export const Button = (props) => {
    return (
        <>
        <button className={styles.button} onClick={props.onClickHandler}>{props.title}</button>
        </>
    )
}