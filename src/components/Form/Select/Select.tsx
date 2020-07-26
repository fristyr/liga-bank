import React, { FC } from 'react';
import CustomSelect from 'react-select';
import classNames from 'classnames';
import { ValueType } from 'react-select/src/types';
import { customStyles } from './styles';
import { publicSrc } from '../../../constants/publicSource';
import { useTranslation } from 'react-i18next';

import './Select.scss';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectChanged: (value: any) => void;
}

export const Select: FC<Props> = ({ onSelectChanged }) => {
  type OptionType = { label: string; value: number };
  const { t } = useTranslation();

  const dataValues = [
    { label: t('calculator.selectValues.0'), value: 1 },
    { label: t('calculator.selectValues.1'), value: 2 },
    { label: t('calculator.selectValues.2'), value: 3 },
  ];

  return (
    <CustomSelect
      options={dataValues}
      onChange={(selectedOption: ValueType<OptionType>) => {
        const onChangeValue = selectedOption as OptionType;
        onSelectChanged(onChangeValue.value);
      }}
      isMulti={false}
      styles={customStyles}
      placeholder={t('calculator.selectPlaceholder')}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: (state) => (
          <div
            className={classNames('menu__select', {
              'menu__select--open': state.selectProps.menuIsOpen,
            })}
          >
            <img src={`${publicSrc}/assets/chevron.svg`} alt="Arrow" />
          </div>
        ),
      }}
    />
  );
};
