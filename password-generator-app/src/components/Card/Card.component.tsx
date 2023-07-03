import { LengthPicker } from "../LengthPicker/LengthPicker.component";
import React, { useState } from "react";
import { PasswordStrength } from "../PasswordStrength/PasswordStrength.component";
import { Button } from "../Button/Button.component";
import styles from './Card.module.css';
import { TextInput } from "../TextInput/TextInput.component";
import { Checkbox } from "../Checkbox/Checkbox.component";

const generatePassword = (len: number, upper: boolean, lower: boolean, numbers: boolean, symbols: boolean): string => {
  const alphabet = 'abcdefghiklmnopqrstvxyz';
  let dictionary = "";
  let result = '';

  if (upper) {
    dictionary += alphabet.toUpperCase();
  }

  if (lower) {
    dictionary += alphabet;
  }

  if (numbers) {
    dictionary += '1234567890';
  }

  if (symbols) {
    dictionary += '@$#';
  }

  if (dictionary === '') {
    return 'Pick an option';
  }

  for (let i = 0; i < len; i++) {
    result += dictionary[Math.floor(Math.random() * dictionary.length)];
  }

  return result;
}

export const Card = () => {
  const [picker, setPicker] = useState(0);
  const [password, setPassword] = useState('');

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordHandler = () => {
    let password = generatePassword(picker, uppercase, lowercase, numbers, symbols);
    setPassword(password);
  }

  return (
    <div>
      <p className={styles.cardTitle}>Password Generator</p>
      <div className={styles.container}>
        <TextInput inputValue={password} setInputValue={setPassword} />
        <div className={styles.containerParts}>
          <LengthPicker pickerValue={picker} setPickerValue={setPicker} min={0} max={16} />
          <div>
            <Checkbox text={"Include Uppercase Letters"} clicked={uppercase} setClicked={setUppercase}  />
            <Checkbox text={"Include Lowercase Letters"} clicked={lowercase} setClicked={setLowercase} />
            <Checkbox text={"Include Numbers"} clicked={numbers} setClicked={setNumbers} />
            <Checkbox text={"Include Symbols"} clicked={symbols} setClicked={setSymbols} />
          </div>
          <PasswordStrength full={+uppercase + +lowercase + +numbers + +symbols} total={4} />
          <Button onClick={generatePasswordHandler} />
        </div>
      </div>
    </div>

  )
}