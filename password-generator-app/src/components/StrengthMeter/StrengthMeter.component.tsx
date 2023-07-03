import { StrengthMeterProps } from "@types";
import { useEffect } from "react";

import styles from './StrengthMeter.module.css';


let colors: { [key: number]: string } = {
  1: 'var(--light-red)',
  2: 'var(--light-orange',
  3: 'var(--light-yellow)',
  4: 'var(--light-green)',
}

let titles: { [key: number]: string } = {
  1: 'Too Weak!',
  2: 'Weak',
  3: 'Medium',
  4: 'Strong',
}

export const StrengthMeter = (props: StrengthMeterProps) => {
  let metter: any[] = [];

  for (let i = 0; i < props.total; i++) {
    if (i < props.full)
    {
      metter.push(<div key={i} className={styles.unit} style={{ backgroundColor: colors[props.full], borderColor: colors[props.full] }} />);
    } else {
      metter.push(<div key={i} className={styles.unit} />);
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        { titles[props.full] }
      </p>
      <div className={styles.container}>
        { metter }
      </div>
    </div>
  );
}