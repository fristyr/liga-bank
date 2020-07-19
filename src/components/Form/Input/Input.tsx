import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  inputType?: string;
  inputId?: string;
  inputPlaceholder?: string;
  inputClassName?: string;
  onInputChange?: (e: string) => void;  
}

export const Input: FC<Props> = ({
  inputType,
  inputId,
  inputPlaceholder,
  inputClassName,
  onInputChange,
}) => {
  return (
    <input
      className={classNames('custom-input', {
        [`${inputClassName}`]: inputClassName,
      })}
      placeholder={inputPlaceholder}
      type={inputType}
      id={inputId}
      onChange={(e) => {
        if (onInputChange !== undefined) onInputChange(e.target.value);
      }}
    />
  );
};
