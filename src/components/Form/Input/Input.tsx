import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  inputType?: string;
  inputId?: string;
  inputPlaceholder?: string;
  inputClassName?: string;
  onInputChange?: (e: string) => void;
  autoFocus?: boolean;
}

export const Input: FC<Props> = ({
  inputType,
  inputId,
  inputPlaceholder,
  inputClassName,
  onInputChange,
  autoFocus
}) => {
  return (
    <input
      className={classNames('custom-input', {
        [`${inputClassName}`]: inputClassName,
      })}
      placeholder={inputPlaceholder}
      type={inputType}
      id={inputId}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      onChange={(e) => {
        if (onInputChange !== undefined) onInputChange(e.target.value);
      }}
    />
  );
};
