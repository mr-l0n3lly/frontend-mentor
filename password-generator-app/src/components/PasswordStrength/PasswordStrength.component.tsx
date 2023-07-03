import { PasswordStrengthProps } from '@types';
import { StrengthMeter } from "../StrengthMeter/StrengthMeter.component";

import styles from './PasswordStrength.module.css';

export const PasswordStrength = (props: PasswordStrengthProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                Strength
            </p>
            <StrengthMeter total={props.total} full={props.full} />
        </div>
    )
}