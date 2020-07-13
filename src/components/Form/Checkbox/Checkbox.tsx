import React, { FC } from 'react';
import './Checkbox.scss'

interface Props {
  onCheckboxChange?: (v: boolean ) => void;
  checboxLabel?: string,
  id?: string,
}

export const Checkbox: FC<Props> = ({onCheckboxChange, checboxLabel, id}) => {
  return (
    <div>
      <input
        className="filter-checkbox visually-hidden"
        type="checkbox"
        name="checkbox"
        id={id}
        onChange={e => {
          if (onCheckboxChange !== undefined) onCheckboxChange(e.target.checked);
        }}
      />
      <label htmlFor={id}>
        <span>{checboxLabel}</span>
      </label>
    </div>
  );
};
