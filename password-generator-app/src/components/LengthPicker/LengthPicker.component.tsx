import { useState } from "react";
import styles from './LengthPicker.module.css';

interface LengthPickerProps {
  min: number;
  max: number;
  pickerValue: number;
  setPickerValue: (value: number) => void;
}

export const LengthPicker = (props: LengthPickerProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Character Length</p>
        <p className={styles.pickerText}>{props.pickerValue}</p>
      </div>
      <input className={styles.picker} min={props.min} max={props.max} value={props.pickerValue} type="range" onChange={(e) => {
        e.target.style.backgroundSize = (+e.target.value - props.min) * 100 / (props.max - props.min) + '%';
        props.setPickerValue(+e.target.value)
      }} />
    </div>
  );
}