import React, { FC } from 'react';
import CustomSelect from 'react-select';
import classNames from 'classnames';
import {customStyles} from './styles'
import './Select.scss';

export const Select: FC = () => {
  const Countries = [
    { label: 'Ипотечное кредитование', value: 355 },
    { label: 'Автомобильное кредитование', value: 54 },
    { label: 'Потребительский кредит', value: 43 },
  ];


  return (
    <CustomSelect
      options={Countries}
      isMulti={false}
      styles={customStyles}
      placeholder="Выберите цель кредита"
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: (state) => (
          <div
            className={classNames('menu__select',{
              'menu__select--open': state.selectProps.menuIsOpen,
            })}
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/chevron.svg'}
              alt="Arrow"
            />
          </div>
        ),
      }}
    />
  );
};
