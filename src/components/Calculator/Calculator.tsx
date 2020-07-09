import React, { FC, useState, useEffect } from 'react';
import { Select, Checkbox } from '../index';
import InputNumber from 'rc-input-number';
import ReactSlider from 'react-slider';
//import Slider from 'rc-slider';

//import 'rc-slider/assets/index.css';

import './Calculator.scss';

export const Calculator: FC = () => {
  const [selectValue, setSelectValue] = useState(1);
  const [priceValue, setPriceValue] = useState(3400000);
  // eslint-disable-next-line
  const [initialFee, setInitialFee] = useState(0);
  // eslint-disable-next-line
  const [percent, setPercent] = useState(10);

  const [yaers, setYears] = useState(5);
  // eslint-disable-next-line
  const [maternityCapital, setmMternityCapital] = useState(false);

  const onChange = (value: number) => {
    setPriceValue(value);
  };
  const onChangeInitialFee = (value: number) => {
    setInitialFee(value);
  };
  const onYearChange = (value: number) => {
    setYears(value);
  };

  useEffect ( () => {
    setInitialFee((priceValue / 100) * percent)
  } , [priceValue])

  const downHandler = (
    <div className="cost-coltroll__button">
      <img
        src={process.env.PUBLIC_URL + '/assets/minus.svg'}
        alt="minus-cost"
      />
    </div>
  );
  const upHandler = (
    <div className="cost-coltroll__button">
      <img src={process.env.PUBLIC_URL + '/assets/plus.svg'} alt="plus-cost" />
    </div>
  );

  return (
    <section className="calculator">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <p className="calculator__step">Шаг 1. Цель кредита</p>
      <div className="calculator__select-purpose">
        <Select onSelectChanged={setSelectValue} />
      </div>
      {selectValue && (
        <div className="calculator__parametrs">
          <h2 className="calculator__step">Шаг 2. Введите параметры кредита</h2>
          <p className="calculator__description">
            {selectValue === 1
              ? 'Стоимость недвижимости'
              : selectValue === 2
              ? 'Стоимость автомобиля'
              : selectValue === 3
              ? 'Сумма потребительского кредита!'
              : ''}
          </p>
          <label className="cost-coltroll" htmlFor="cost-value">
            <div className="values">
              <InputNumber
                prefixCls="values__prefix"
                aria-label="Number input example that demonstrates custom styling"
                value={priceValue}
                min={500000}
                max={25000000}
                downHandler={downHandler}
                upHandler={upHandler}
                onChange={onChange}
                step={100000}
                formatter={(value: Number) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                }
                id="cost-value"
                pattern="[0-9]{10}"
              />
              <span className="values__sign"> рублей </span>
            </div>
          </label>
          <span className="calculator__price-gap">
            От 1 200 000 до 25 000 000 рублей
          </span>
          <p className="calculator__description">Первоначальный взнос</p>
          <label className="cost-coltroll" htmlFor="initial-fee">
            <div className="values">
              <InputNumber
                prefixCls="values__prefix"
                aria-label="Number input example that demonstrates custom styling"
                value={initialFee}
                min={initialFee}
                max={25000000}
                onChange={onChangeInitialFee}
                step={100000}
                formatter={(value: Number) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                }
                id="initial-fee"
                pattern="[0-9]{10}"
              />
              <span className="values__sign"> рублей </span>
            </div>
          </label>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="horizontal-slider__thumb"
            trackClassName="horizontal-slider__track"
            renderThumb={(props) => <div {...props}></div>}
            step={5}
            min={10}
            max={100}
            onChange={(value: any) => setPercent(value)}
          />
          <span className="calculator__price-gap">
             %
            {console.log( percent  ) }
          </span>
          <p className="calculator__description">Условия кредита</p>
          <label className="cost-coltroll" htmlFor="loan-terms">
            <div className="values">
              <InputNumber
                prefixCls="values__prefix"
                aria-label="Number input example that demonstrates custom styling"
                value={yaers}
                min={5}
                max={30}
                onChange={onYearChange}
                step={100000}
                formatter={(value: Number) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                }
                id="loan-terms"
                pattern="[0-9]{10}"
              />
              <span className="values__sign"> лет </span>
            </div>
          </label>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="horizontal-slider__thumb"
            trackClassName="horizontal-slider__track"
            renderThumb={(props) => <div {...props}></div>}
            min={5}
            step={1}
            max={30}
            onChange={(value: any) => setYears(value)}
          />
          <span className="calculator__price-gap">{yaers} лет</span>
          <Checkbox
            onCheckboxChange={setmMternityCapital}
            maternityCapital={setPriceValue}
            priceValue={priceValue}
          />
        </div>
      )}
    </section>
  );
};
