import React, { FC } from 'react';
import './Checkbox.scss'

interface Props {
  onCheckboxChange: (value: boolean ) => void;
  maternityCapital?: any,
  priceValue: any
}



export const Checkbox: FC<Props> = ({onCheckboxChange, maternityCapital, priceValue}) => {
  const onChange = (e: any) => {
    onCheckboxChange(e.target.checked)
    if(e.target.checked) {
      maternityCapital(priceValue - 470000)
    } else {
      maternityCapital(priceValue + 470000)
    }
  }
  return (
    <div>
      <input
        className="filter-checkbox visually-hidden"
        type="checkbox"
        name="checkbox"
        id="matrninity-capital"
        onChange={ onChange }
      />
      <label htmlFor="matrninity-capital">
        <span>Материнский капитал</span>
      </label>
    </div>
  );
};
