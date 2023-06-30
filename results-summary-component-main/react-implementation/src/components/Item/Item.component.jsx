
import styles from './Item.module.css';

export const Item = (props) => {
    return (
        <div className={`${styles.item} ${props.itemNumber}`} styles={props.styles}>
            <div className={styles.itemContent}>
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </div>
            <p className={styles.itemValue}>{props.current} <span className={styles.itemSpan}>/ {props.max}</span></p>
        </div>
    );
}
