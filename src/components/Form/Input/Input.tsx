import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  inputType?: string;
  inputId?: string;
  inputPlaceholder?: string;
  inputClassName?: string
}

export const Input: FC<Props> = ({ inputType, inputId, inputPlaceholder, inputClassName }) => {
  return (
    <input
      className={classNames('custom-input',{ [`${inputClassName}`]: inputClassName })}
      placeholder={inputPlaceholder}
      type={inputType}
      id={inputId}
    />
  );
};
