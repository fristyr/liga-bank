import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  inputType?: string;
  inputId?: string;
  inputRequired?: boolean;
  inputPlaceholder?: string;
  inputClassName?: string;
  onInputChange?: (e: string) => void;
  autoFocus?: boolean;
  inputValue?: string;

}

export const Input: FC<Props> = ({
  inputType,
  inputId,
  inputRequired,
  inputPlaceholder,
  inputClassName,
  onInputChange,
  autoFocus,
  inputValue
}) => {
  return (
    <input
      className={classNames('custom-input', {
        [`${inputClassName}`]: inputClassName,
      })}
      required={inputRequired}
      placeholder={inputPlaceholder}
      type={inputType}
      id={inputId}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      value={inputValue}
      onChange={(e) => {
        if (onInputChange !== undefined) onInputChange(e.target.value);
      }}
    />
  );
};
