import React, { FC } from 'react';
import './Checkbox.scss';

interface Props {
  onCheckboxChange?: (v: boolean) => void;
  checboxLabel?: string;
  id?: string;
  inputWrapper?: string;
}

export const Checkbox: FC<Props> = ({
  onCheckboxChange,
  checboxLabel,
  id,
  inputWrapper,
}) => {
  return (
    <div className={inputWrapper}>
      <input
        className="filter-checkbox visually-hidden"
        type="checkbox"
        name="checkbox"
        id={id}
        onChange={(e) => {
          if (onCheckboxChange !== undefined)
            onCheckboxChange(e.target.checked);
        }}
      />
      <label htmlFor={id}>
        <span>{checboxLabel}</span>
      </label>
    </div>
  );
};
