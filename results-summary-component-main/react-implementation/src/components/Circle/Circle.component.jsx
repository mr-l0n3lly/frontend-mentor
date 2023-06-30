import styles from './Circle.module.css';

export const Circle = (prop) => {
    return (
        <div className={styles.circle}>
            <div className={styles.circleVolume}>
            {prop.current}
            </div>
            <div className={styles.circleMax}>
            of {prop.total}
            </div>
      </div>
    );
}