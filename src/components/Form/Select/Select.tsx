import React, { FC,   } from 'react';
import CustomSelect from 'react-select';
import classNames from 'classnames';
import { customStyles } from './styles';
import Countries from './data';
import { ValueType } from 'react-select/src/types';

import './Select.scss';

interface Props {
  onSelectChanged: (value: any) => void;
}

export const Select: FC<Props> = ( {onSelectChanged} ) => {
  type OptionType = { label: string; value: number };
  return (
      <CustomSelect
        options={Countries}
        onChange={(selectedOption: ValueType<OptionType>) => {
          const onChangeValue = selectedOption as OptionType;
          onSelectChanged(onChangeValue.value)
        }}
        isMulti={false}
        styles={customStyles}
        placeholder="Выберите цель кредита"
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: (state) => (
            <div
              className={classNames('menu__select', {
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
